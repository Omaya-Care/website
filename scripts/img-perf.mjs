// One-shot, idempotent transform for image delivery perf (Batch 2c).
// - Adds decoding="async" to EVERY <img> (universally safe, no layout effect).
// - Adds loading="lazy" ONLY to below-fold content-wall components (allowlist),
//   never to heroes or navbars, so no above-the-fold LCP image is ever deferred.
// Verified pixel-identical by the Playwright gate after running.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const SRC = new URL("../src/", import.meta.url);
const SRC_DIR = fileURLToPath(SRC);

// High-confidence below-fold, image-heavy components/sections.
const LAZY_ALLOW = [
  "sections/logo-cloud-section2.tsx",
  "sections/gallery-showcase-section.tsx",
  "sections/gallery-showcase-section2.tsx",
  "components/feature-grid-item.tsx",
  "components/media-tile3.tsx",
  "components/media-tile5.tsx",
  "components/logo.tsx",
  "components/logo2.tsx",
  "components/logo3.tsx",
  "components/logo4.tsx",
  "components/logo5.tsx",
  "pages/faq/sections/logo-cloud-section.tsx",
  "pages/faq/components/logo.tsx",
  "pages/privacy/sections/gallery-showcase-section.tsx",
  "pages/tos/sections/gallery-showcase-section.tsx",
  "pages/contact/components/logo.tsx",
  "pages/contact/components/logo2.tsx",
];
for (const p of ["logo", "logo2", "logo3", "logo4", "logo5", "logo6"]) {
  LAZY_ALLOW.push(`pages/privacy/components/${p}.tsx`);
  LAZY_ALLOW.push(`pages/tos/components/${p}.tsx`);
}

// Every .tsx under src that contains an <img gets decoding="async".
const allFiles = readdirSync(SRC_DIR, { recursive: true })
  .map((p) => String(p).split("\\").join("/"))
  .filter((p) => p.endsWith(".tsx"));

let decodingAdded = 0;
let lazyAdded = 0;

for (const rel of allFiles) {
  const file = new URL(rel, SRC);
  let code = readFileSync(file, "utf8");
  if (!code.includes("<img")) continue;
  const doLazy = LAZY_ALLOW.includes(rel);
  const before = code;

  code = code.replace(/<img\b(?![^>]*\bdecoding=)/g, () => {
    decodingAdded++;
    return `<img decoding="async"`;
  });
  if (doLazy) {
    code = code.replace(/<img\b(?![^>]*\bloading=)/g, () => {
      lazyAdded++;
      return `<img loading="lazy"`;
    });
  }
  if (code !== before) writeFileSync(file, code);
}

console.log(`decoding="async" added to ${decodingAdded} <img> tags`);
console.log(`loading="lazy" added to ${lazyAdded} <img> tags (below-fold allowlist)`);
