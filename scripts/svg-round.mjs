// Experiment (Batch: SVG-precision). Rounds over-precise decimals INSIDE SVG
// path d="..." attributes to 2 places — nowhere else (never Tailwind classes).
// The Playwright gate decides: if any route shifts, we revert via git.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const files = [
  "src/components/media-tile.tsx",
  "src/components/media-tile2.tsx",
  "src/components/media-tile4.tsx",
  "src/components/media-tile6.tsx",
  "src/components/media-link.tsx",
  "src/sections/logo-cloud-section3.tsx",
  "src/svgs/svg-icon.tsx",
  "src/svgs/svg-icon2.tsx",
  "src/page.tsx",
];
const ROOT = new URL("../", import.meta.url);

let totalNums = 0;
for (const rel of files) {
  const p = fileURLToPath(new URL(rel, ROOT));
  let code = readFileSync(p, "utf8");
  const before = code;
  // Only touch the contents of d="..." (SVG path data).
  code = code.replace(/\bd="([^"]*)"/g, (m, path) => {
    const rounded = path.replace(/-?\d+\.\d{3,}/g, (n) => {
      totalNums++;
      return String(Math.round(parseFloat(n) * 100) / 100);
    });
    return `d="${rounded}"`;
  });
  if (code !== before) writeFileSync(p, code);
}
console.log(`rounded ${totalNums} path coordinates across ${files.length} files`);
