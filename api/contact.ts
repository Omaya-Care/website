import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Contact-form relay → Discord.
 *
 * The Discord webhook URL is a secret and must never reach the browser, so the
 * static site POSTs here and this function forwards a structured embed. Anti-bot
 * is deliberately lightweight (no external service): a honeypot field, a
 * time-to-submit floor, and a best-effort per-IP throttle. That stops naive
 * spam bots without a captcha or Redis. If volume ever justifies a hard,
 * cross-instance limit, swap `throttled()` for Upstash Redis — the call site
 * doesn't change.
 */

// ---- config -----------------------------------------------------------------

const WINDOW_MS = 10 * 60 * 1000; // per-IP window
const MAX_PER_WINDOW = 3; // submissions per IP per window
const MIN_FILL_MS = 2000; // faster than this = almost certainly a bot

const VALID_CONCERNS = ["demo", "waitlist", "general"] as const;
type Concern = (typeof VALID_CONCERNS)[number];

const CONCERN_META: Record<Concern, { title: string; color: number }> = {
  demo: { title: "📅 Demo Request", color: 0x5865f2 },
  waitlist: { title: "📝 Waitlist Signup", color: 0x57f287 },
  general: { title: "💬 General Contact", color: 0xfee75c },
};

// ---- lightweight per-IP throttle -------------------------------------------
// In-memory, so it only holds within a warm instance. Combined with the
// honeypot + timing gate that's enough to stop bot spam; it is NOT a hard
// guarantee across cold starts / parallel instances.

const hits = new Map<string, number[]>();

function throttled(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  // opportunistic cleanup so the map can't grow unbounded
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return false;
}

// ---- helpers ----------------------------------------------------------------

function clientIp(req: VercelRequest): string {
  const xff = req.headers["x-forwarded-for"];
  if (typeof xff === "string") return xff.split(",")[0].trim();
  if (Array.isArray(xff)) return xff[0];
  return req.socket?.remoteAddress || "unknown";
}

function str(v: unknown, max: number): string {
  return String(v ?? "").trim().slice(0, max);
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// ---- handler ----------------------------------------------------------------

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const webhook = process.env.DISCORD_CONTACT_WEBHOOK_URL;
  if (!webhook) {
    console.error("DISCORD_CONTACT_WEBHOOK_URL is not set");
    return res.status(500).json({ error: "Contact form is not configured." });
  }

  const body = typeof req.body === "string" ? safeParse(req.body) : req.body || {};
  const { concern, website: honeypot, ts } = body;

  // 1. Honeypot — real users never fill a hidden field. Pretend success so bots
  //    don't learn they were caught.
  if (honeypot) return res.status(200).json({ ok: true });

  // 2. Timing gate — a form "filled" in under MIN_FILL_MS is a script.
  const elapsed = ts ? Date.now() - Number(ts) : Infinity;
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    return res.status(200).json({ ok: true });
  }

  // 3. Validation
  if (!VALID_CONCERNS.includes(concern)) {
    return res.status(400).json({ error: "Invalid request." });
  }
  const name = str(body.name, 100);
  const email = str(body.email, 200);
  if (!name || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "A name and valid email are required." });
  }

  // 4. Per-IP throttle
  const ip = clientIp(req);
  if (throttled(ip)) {
    return res.status(429).json({ error: "Too many requests. Please try again in a few minutes." });
  }

  // 5. Build the Discord embed
  const meta = CONCERN_META[concern as Concern];
  const fields: { name: string; value: string; inline?: boolean }[] = [
    { name: "Name", value: name, inline: true },
    { name: "Email", value: email, inline: true },
  ];
  if (concern === "demo") {
    const company = str(body.company, 200);
    const role = str(body.role, 200);
    if (company) fields.push({ name: "Company", value: company, inline: true });
    if (role) fields.push({ name: "Role", value: role, inline: true });
  }
  if (concern === "general") {
    const message = str(body.message, 1500);
    if (message) fields.push({ name: "Message", value: message, inline: false });
  }

  const payload = {
    username: "Omaya Contact Form",
    embeds: [
      {
        title: meta.title,
        color: meta.color,
        fields,
        footer: { text: `omayacare.com · ${ip}` },
        timestamp: new Date().toISOString(),
      },
    ],
  };

  // 6. Forward to Discord
  try {
    const resp = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!resp.ok) {
      console.error("Discord webhook failed", resp.status, await resp.text().catch(() => ""));
      return res.status(502).json({ error: "Could not deliver your message. Please try again." });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Discord webhook error", err);
    return res.status(502).json({ error: "Could not deliver your message. Please try again." });
  }
}

function safeParse(s: string): Record<string, unknown> {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}
