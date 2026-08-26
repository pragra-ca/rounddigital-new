#!/usr/bin/env node
// Fails the build if forbidden certification language reaches the site.
// Run via `yarn check:claims`, and as part of `yarn check`.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { findForbiddenClaims } from "../src/content/claims.mjs";

const ROOTS = ["src/content", "src/data", "src/pages", "src/components"];
const EXTS = [".js", ".jsx", ".mjs", ".md"];

// Registries whose whole purpose is to record credential and programme status,
// including ineligibility. Matched on filename suffix so the list stays
// explicit — adding a file here is a deliberate act, not an accident.
const SANCTIONED = [
  "claims.mjs",
  "credentials.mjs",
  "roadmap.js",
  "procurement.js",
];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (EXTS.some((e) => full.endsWith(e))) out.push(full);
  }
  return out;
}

function lineOf(text, index) {
  return text.slice(0, index).split("\n").length;
}

let failures = 0;
for (const root of ROOTS) {
  for (const file of walk(root)) {
    // The sanctioned homes for certification and programme names. Each exists
    // precisely to record status — including explicit statements of what is NOT
    // held and what we are NOT eligible for — so a bare programme name inside
    // them is data, not a claim. Everywhere else a bare name still fails.
    if (SANCTIONED.some((name) => file.endsWith(name))) continue;
    const text = readFileSync(file, "utf8");
    for (const hit of findForbiddenClaims(text)) {
      failures += 1;
      console.error(
        `${relative(process.cwd(), file)}:${lineOf(text, hit.index)}  ` +
          `"${hit.match}"\n    ${hit.reason}\n`
      );
    }
  }
}

if (failures > 0) {
  console.error(`\n${failures} forbidden claim(s) found. See spec §2 and §8.`);
  process.exit(1);
}
console.log("Claims guard passed: no unearned certification language found.");
