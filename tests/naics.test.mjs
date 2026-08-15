import { test } from "node:test";
import assert from "node:assert/strict";
import { PILLARS, allNaicsCodes } from "../src/content/naics.mjs";

test("all five pillars from the spec are present", () => {
  assert.equal(PILLARS.length, 5);
  const ids = PILLARS.map((p) => p.id).sort();
  assert.deepEqual(ids, [
    "ai-enablement",
    "it-services",
    "research-data",
    "staffing",
    "training",
  ]);
});

test("every NAICS code is six digits", () => {
  for (const code of allNaicsCodes()) {
    assert.match(code, /^\d{6}$/, `bad NAICS code: ${code}`);
  }
});

test("541910 is mapped — it is the survey research code the spec prioritises", () => {
  assert.ok(allNaicsCodes().includes("541910"));
});

test("every pillar declares a primary code and at least one PSC", () => {
  for (const p of PILLARS) {
    assert.match(p.primaryNaics.code, /^\d{6}$/);
    assert.ok(p.psc.length > 0, `${p.id} has no PSC codes`);
  }
});

test("no duplicate primary codes across pillars", () => {
  const primaries = PILLARS.map((p) => p.primaryNaics.code);
  assert.equal(new Set(primaries).size, primaries.length);
});
