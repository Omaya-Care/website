import { test, expect, type Page } from "@playwright/test";

// The 6 rendered MPA entries (terms + tos share the same tree; both captured).
const ROUTES = [
  { name: "home", path: "/" },
  { name: "contact", path: "/contact.html" },
  { name: "privacy", path: "/privacy.html" },
  { name: "faq", path: "/faq.html" },
  { name: "tos", path: "/tos.html" },
  { name: "terms", path: "/terms.html" },
];

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 390, height: 844 },
];

// Force every image (incl. loading="lazy") to load, decode, and settle so a
// fullPage screenshot is complete and identical run-to-run. Also freeze media.
async function settle(page: Page) {
  // Kill all CSS animations/transitions BEFORE anything can advance. Canceling a
  // running animation fires no `animationend`, so JS carousels driven by
  // onAnimationEnd (e.g. the membership slider) freeze at their initial frame
  // deterministically — identical every run and before/after.
  await page.addStyleTag({
    content: `*, *::before, *::after {
      animation: none !important;
      transition: none !important;
      animation-play-state: paused !important;
      caret-color: transparent !important;
      scroll-behavior: auto !important;
    }`,
  });
  await page.evaluate(async () => {
    // Force every image to eager so horizontally-clipped carousel tiles (loading="lazy",
    // never scrolled into view) still load — otherwise img.decode() on them hangs forever.
    // Test-only: matches the fully-loaded state the eager baseline was captured in.
    document.querySelectorAll("img").forEach((img) => {
      img.loading = "eager";
    });
    // Freeze any <video>/<audio> at frame 0 (autoplay marketing media is non-deterministic).
    document.querySelectorAll("video, audio").forEach((m) => {
      const el = m as HTMLMediaElement;
      try {
        el.pause();
        el.currentTime = 0;
        el.autoplay = false;
        el.loop = false;
      } catch {
        /* ignore */
      }
    });
    // Scroll the whole page in steps to trip IntersectionObserver-based lazy loading.
    const step = Math.floor(window.innerHeight * 0.8);
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });

  // Fonts + all images fully decoded.
  await page.evaluate(async () => {
    await (document as any).fonts?.ready;
    const imgs = Array.from(document.images);
    const withTimeout = (p: Promise<unknown>) =>
      Promise.race([p, new Promise((res) => setTimeout(res, 5000))]);
    await Promise.all(
      imgs.map((img) =>
        withTimeout(
          img.complete && img.naturalWidth > 0
            ? img.decode().catch(() => {})
            : new Promise<void>((res) => {
                img.addEventListener("load", () => res(), { once: true });
                img.addEventListener("error", () => res(), { once: true });
              }),
        ),
      ),
    );
  });
  await page.waitForLoadState("networkidle");
}

test.describe("visual parity", () => {
  for (const route of ROUTES) {
    for (const vp of VIEWPORTS) {
      test(`${route.name} @ ${vp.name}`, async ({ page }) => {
        // Restore the fully-settled/revealed base (skip DittoMotion) before any app script runs.
        await page.addInitScript(() => {
          (window as any).__dittoMotionStopped = true;
        });
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(route.path, { waitUntil: "load" });
        await settle(page);
        await expect(page).toHaveScreenshot(`${route.name}-${vp.name}.png`, {
          fullPage: true,
        });
      });
    }
  }
});
