// Build-time prerender: renders each route's React tree to HTML via the SSR
// bundle and injects it into the matching dist/*.html #root, so the above-fold
// (hero) paints from static markup before the client JS boots. The client then
// hydrateRoot()s the same tree. Runs after `vite build` + the `--ssr` build.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import Beasties from "beasties";

const serverEntry = fileURLToPath(new URL("../dist-server/entry-server.js", import.meta.url));
const { render } = await import(pathToFileURL(serverEntry).href);

const DIST = new URL("../dist/", import.meta.url);
// Inline above-fold critical CSS into each page and lazy-load the full stylesheet,
// so first paint no longer blocks on a separate render-blocking CSS request.
const beasties = new Beasties({
  path: fileURLToPath(DIST),
  publicPath: "/",
  preload: "swap",
  pruneSource: false,
  logLevel: "silent",
});
// terms.html shares the tos tree (same MPA entry).
const ROUTES = [
  ["index.html", "main"],
  ["contact.html", "contact"],
  ["privacy.html", "privacy"],
  ["faq.html", "faq"],
  ["tos.html", "tos"],
  ["terms.html", "tos"],
];

for (const [file, name] of ROUTES) {
  const path = fileURLToPath(new URL(file, DIST));
  const html = readFileSync(path, "utf8");
  if (!html.includes('<div id="root"></div>')) {
    throw new Error(`prerender: '<div id="root"></div>' not found in ${file}`);
  }
  const app = render(name);
  const withApp = html.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
  const out = await beasties.process(withApp);
  writeFileSync(path, out);
  console.log(`prerendered ${file} <- ${name}  (${(app.length / 1024).toFixed(1)} KB static HTML, critical CSS inlined)`);
}
