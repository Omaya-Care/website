// Find asset files under public/ that nothing references (src tsx/ts, *.html, *.css).
import { readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
const ROOT = fileURLToPath(new URL("../", import.meta.url));
const PUB = ROOT + "public/";
const walk = (d) => readdirSync(d, { recursive: true }).map(p => d + String(p)).filter(p => { try { return statSync(p).isFile(); } catch { return false; } });
// gather all reference text
const refDirs = ["src", ""];
const refFiles = [];
for (const d of ["src"]) refFiles.push(...walk(ROOT + d + "/").filter(f => /\.(tsx?|css)$/.test(f)));
refFiles.push(...readdirSync(ROOT).filter(f => f.endsWith(".html")).map(f => ROOT + f));
refFiles.push(...readdirSync(PUB).filter(f => /\.(webmanifest|json|xml)$/.test(f)).map(f => PUB + f));
const haystack = refFiles.map(f => { try { return readFileSync(f, "utf8"); } catch { return ""; } }).join("\n");
const assets = walk(PUB).filter(f => !/\.(vtt)$/.test(f)); // keep captions
const orphans = [];
let orphanBytes = 0, totalBytes = 0;
for (const a of assets) {
  const base = a.split("/").pop();
  const sz = statSync(a).size; totalBytes += sz;
  // referenced by basename (covers /assets/cloned/x.png, url(x), srcset, etc.)
  if (!haystack.includes(base)) { orphans.push([sz, a.replace(PUB, "public/")]); orphanBytes += sz; }
}
orphans.sort((a,b)=>b[0]-a[0]);
console.log(`assets total: ${assets.length} files, ${(totalBytes/1048576).toFixed(1)}MB`);
console.log(`ORPHANED: ${orphans.length} files, ${(orphanBytes/1048576).toFixed(1)}MB\n`);
for (const [sz, p] of orphans) console.log(`  ${(sz/1024).toFixed(0).padStart(7)}KB  ${p}`);
