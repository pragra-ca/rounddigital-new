#!/usr/bin/env node
// Controller verification tool — substitute for the unavailable `next build`.
// Walks every source file, extracts its imports, and resolves each one against
// the filesystem using the same rules Next/webpack would (jsconfig "@/" -> src/,
// extension inference, directory index files).
//
// Usage: node .superpowers/sdd/<plan>/verify-imports.mjs [dir ...]

import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";

const ROOTS = process.argv.slice(2).length ? process.argv.slice(2) : ["src"];
const SRC_EXT = [".js", ".jsx", ".mjs", ".ts", ".tsx", ".json", ".css", ".svg"];
const SCAN_EXT = [".js", ".jsx", ".mjs"];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (SCAN_EXT.some((e) => full.endsWith(e))) out.push(full);
  }
  return out;
}

// Mirrors webpack/Next resolution: exact file, then extension inference,
// then directory index.
function resolves(spec, fromFile) {
  let base;
  if (spec.startsWith("@/")) base = resolve("src", spec.slice(2));
  else if (spec.startsWith(".")) base = resolve(dirname(fromFile), spec);
  else return true; // bare specifier -> node_modules, not our concern here

  if (existsSync(base) && statSync(base).isFile()) return true;
  for (const e of SRC_EXT) if (existsSync(base + e)) return true;
  for (const e of SRC_EXT) if (existsSync(join(base, "index" + e))) return true;
  return false;
}

const IMPORT_RE = /(?:^|\n)\s*import\s+(?:[\s\S]*?)\s*from\s*["']([^"']+)["']/g;
const BARE_IMPORT_RE = /(?:^|\n)\s*import\s*["']([^"']+)["']/g;
const REQUIRE_RE = /require\(\s*["']([^"']+)["']\s*\)/g;

let checked = 0;
let broken = 0;
for (const root of ROOTS) {
  for (const file of walk(root)) {
    const text = readFileSync(file, "utf8");
    for (const re of [IMPORT_RE, BARE_IMPORT_RE, REQUIRE_RE]) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(text)) !== null) {
        const spec = m[1];
        if (!spec.startsWith("@/") && !spec.startsWith(".")) continue;
        checked += 1;
        if (!resolves(spec, file)) {
          broken += 1;
          console.error(`UNRESOLVED  ${file}\n            -> ${spec}`);
        }
      }
    }
  }
}

console.log(`\nresolved ${checked - broken}/${checked} local imports across ${ROOTS.join(", ")}`);
if (broken > 0) {
  console.error(`${broken} unresolved import(s) — these would fail the build.`);
  process.exit(1);
}
