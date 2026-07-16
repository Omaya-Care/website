// MPA-aware dead-file finder. Walks the import graph from ALL real entry points
// (the 6 HTML entries' main.tsx trees) and reports src files reachable from none.
// react-doctor assumed a single SPA root, so its "unused-file" list is unreliable;
// this is the authoritative check before any deletion.
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, relative } from "node:path";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const SRC = resolve(ROOT, "src");

// Entry modules loaded by the 6 HTML files (terms.html + tos.html share tos/main.tsx).
const ENTRIES = [
  "src/main.tsx",
  "src/pages/contact/main.tsx",
  "src/pages/privacy/main.tsx",
  "src/pages/faq/main.tsx",
  "src/pages/tos/main.tsx",
].map((p) => resolve(ROOT, p));

const EXTS = [".tsx", ".ts", ".jsx", ".js", ".mjs"];

function resolveImport(spec, fromFile) {
  if (!spec.startsWith(".") && !spec.startsWith("/")) return null; // bare/node module
  const base = spec.startsWith("/")
    ? resolve(ROOT, "." + spec)
    : resolve(dirname(fromFile), spec);
  const candidates = [base, ...EXTS.map((e) => base + e)];
  for (const e of EXTS) candidates.push(resolve(base, "index" + e));
  for (const c of candidates) {
    if (existsSync(c) && statSync(c).isFile()) return c;
  }
  return null; // css / asset / unresolved — ignore for graph purposes
}

const IMPORT_RE =
  /(?:import\s[^'"]*from\s*|import\s*|export\s[^'"]*from\s*|import\()\s*['"]([^'"]+)['"]/g;

const visited = new Set();
function walk(file) {
  if (visited.has(file)) return;
  visited.add(file);
  let code;
  try {
    code = readFileSync(file, "utf8");
  } catch {
    return;
  }
  for (const m of code.matchAll(IMPORT_RE)) {
    const target = resolveImport(m[1], file);
    if (target && target.startsWith(SRC)) walk(target);
  }
}
for (const e of ENTRIES) walk(e);

// Enumerate all source modules under src.
const all = readdirSync(SRC, { recursive: true })
  .map((p) => resolve(SRC, String(p)))
  .filter((p) => {
    try {
      return statSync(p).isFile() && EXTS.some((e) => p.endsWith(e));
    } catch {
      return false;
    }
  });

const orphans = all.filter((f) => !visited.has(f)).sort();
console.log(`entries: ${ENTRIES.length} | reachable: ${visited.size} | total src modules: ${all.length}`);
console.log(`\nORPHANS (${orphans.length}):`);
for (const o of orphans) console.log("  " + relative(ROOT, o));
