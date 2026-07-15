import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
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

export default defineConfig({
  plugins: [react(), cleanUrls()],
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
    },
  },
});
