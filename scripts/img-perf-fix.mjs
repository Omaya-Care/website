// Corrective pass: the img-perf transform wrongly matched `<img` occurring INSIDE
// baked-HTML string literals (DropdownMenu/DittoMotion `html:"..."` specs), where
// attributes are written with escaped quotes (\"). Insertions there broke the
// strings. Genuine JSX imgs are followed by a plain-quote attribute (e.g.
// className="); string-literal imgs are followed by an escaped-quote attribute
// (e.g. class=\" or src=\"). Revert only the latter.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const SRC = new URL("../src/", import.meta.url);
const SRC_DIR = fileURLToPath(SRC);

const files = readdirSync(SRC_DIR, { recursive: true })
  .map((p) => String(p).split("\\").join("/"))
  .filter((p) => p.endsWith(".tsx"));

let reverted = 0;
for (const rel of files) {
  const file = new URL(rel, SRC);
  let code = readFileSync(file, "utf8");
  if (!code.includes('<img decoding="async"')) continue;
  const before = code;
  // An inserted attribute followed by an escaped-quote attribute => inside a string literal.
  code = code.replace(
    /<img (?:loading="lazy" )?decoding="async" (?=[a-zA-Z:_-]+=\\")/g,
    () => {
      reverted++;
      return "<img ";
    },
  );
  if (code !== before) writeFileSync(file, code);
}
console.log(`reverted ${reverted} string-literal <img> insertions`);
