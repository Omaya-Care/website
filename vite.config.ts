import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Serve clean URLs (/privacy, /contact) from their html entries in dev,
// instead of Vite's SPA fallback returning the homepage.
function cleanUrls() {
  const map: Record<string, string> = {
    "/privacy": "/privacy.html",
    "/contact": "/contact.html",
    "/faq": "/faq.html",
    "/tos": "/tos.html",
    "/terms": "/terms.html",
  };
  return {
    name: "clean-urls",
    configureServer(server: any) {
      server.middlewares.use((req: any, _res: any, next: any) => {
        const [path, query] = (req.url || "/").split("?");
        const key = path.replace(/\/+$/, "");
        if (map[key]) req.url = map[key] + (query ? "?" + query : "");
        next();
      });
    },
  };
}

// Dev-only: run the Vercel serverless functions in api/ under `npm run dev`,
// so /api/contact works locally without `vercel dev`. configureServer only runs
// for the dev server, so this has zero effect on the production build.
function apiRoutes() {
  return {
    name: "api-routes",
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        const [path] = (req.url || "").split("?");
        // Route every method for this path to the handler (so GET → 405 like on
        // Vercel), instead of letting non-POST fall through to Vite serving the
        // transpiled .ts source.
        if (path !== "/api/contact") return next();
        try {
          const chunks: Buffer[] = [];
          for await (const c of req) chunks.push(c as Buffer);
          const raw = Buffer.concat(chunks).toString("utf8");
          let body: any = {};
          try {
            body = raw ? JSON.parse(raw) : {};
          } catch {
            body = {};
          }
          req.body = body;
          // Adapt Node's res into the small Vercel res surface the handler uses.
          const vres = {
            statusCode: 200,
            setHeader: (k: string, v: string) => res.setHeader(k, v),
            status(code: number) {
              this.statusCode = code;
              return this;
            },
            json(obj: unknown) {
              res.statusCode = this.statusCode;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify(obj));
            },
          };
          const mod = await server.ssrLoadModule("/api/contact.ts");
          await mod.default(req, vres);
        } catch (err) {
          console.error("dev /api/contact error", err);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "dev handler error" }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // Load .env (all keys, no VITE_ prefix filter) into process.env so the dev
  // api middleware can read DISCORD_CONTACT_WEBHOOK_URL.
  const env = loadEnv(mode, process.cwd(), "");
  if (env.DISCORD_CONTACT_WEBHOOK_URL) {
    process.env.DISCORD_CONTACT_WEBHOOK_URL = env.DISCORD_CONTACT_WEBHOOK_URL;
  }

  return {
    plugins: [react(), cleanUrls(), apiRoutes()],
    build: {
      rollupOptions: {
        input: {
          "main": fileURLToPath(new URL("./index.html", import.meta.url)),
          "contact": fileURLToPath(new URL("./contact.html", import.meta.url)),
          "privacy": fileURLToPath(new URL("./privacy.html", import.meta.url)),
          "faq": fileURLToPath(new URL("./faq.html", import.meta.url)),
          "tos": fileURLToPath(new URL("./tos.html", import.meta.url)),
          "terms": fileURLToPath(new URL("./terms.html", import.meta.url))
        },
        output: {
          // Hoist React/ReactDOM/scheduler into one long-cache vendor chunk shared
          // across all 6 MPA entries, instead of re-bundling them into each entry.
          // Pure delivery/caching win — identical rendered output.
          manualChunks(id: string) {
            if (id.includes("node_modules")) {
              if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) {
                return "vendor-react";
              }
              return "vendor";
            }
          },
        },
      },
    },
  };
});
