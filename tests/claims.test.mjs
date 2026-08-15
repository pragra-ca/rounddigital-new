import { test } from "node:test";
import assert from "node:assert/strict";
import { findForbiddenClaims, FORBIDDEN_CLAIMS } from "../src/content/claims.mjs";

test("flags an unearned SOC 2 certification claim", () => {
  const hits = findForbiddenClaims("We are SOC 2 Type II certified.");
  assert.equal(hits.length, 1);
  assert.match(hits[0].reason, /not held/i);
});

test("flags ISO certification claims", () => {
  assert.equal(findForbiddenClaims("ISO 27001 certified").length, 1);
  assert.equal(findForbiddenClaims("ISO 9001 certified provider").length, 1);
});

test("flags US socioeconomic programs we are ineligible for", () => {
  assert.equal(findForbiddenClaims("a WOSB set-aside partner").length, 1);
  assert.equal(findForbiddenClaims("our 8(a) status").length, 1);
  assert.equal(findForbiddenClaims("HUBZone certified").length, 1);
});

test("flags CMMI level claims", () => {
  assert.equal(findForbiddenClaims("CMMI Level 3 appraised").length, 1);
});

test("allows aligned/roadmap language that makes no certification claim", () => {
  assert.equal(findForbiddenClaims("Our controls are aligned to ISO 27001.").length, 0);
  assert.equal(findForbiddenClaims("ISO 9001 certification is in progress.").length, 0);
  assert.equal(findForbiddenClaims("We are pursuing WBE Canada certification.").length, 0);
});

test("allows the factual women-owned statement", () => {
  assert.equal(findForbiddenClaims("Round Digital is women-owned and led.").length, 0);
});

test("every forbidden claim carries a human-readable reason", () => {
  for (const c of FORBIDDEN_CLAIMS) {
    assert.ok(c.reason && c.reason.length > 10, "reason too short");
    assert.ok(c.pattern instanceof RegExp);
  }
});

test("reports the index of the match so the scanner can print a location", () => {
  const hits = findForbiddenClaims("padding padding SOC 2 certified");
  assert.ok(hits[0].index > 0);
});

test("flags a bare certification name used as a standalone string literal", () => {
  assert.equal(findForbiddenClaims('const kw = ["SOC 2", "cloud"]').length, 1);
  assert.equal(findForbiddenClaims('"ISO 27001",').length, 1);
  // "CMMI Level 3" trips two independent rules here: the pre-existing bare
  // CMMI-level pattern (no quotes or assertion word required) and the new
  // quoted-string-literal pattern added above. Both firing is correct.
  assert.equal(findForbiddenClaims('"CMMI Level 3"').length, 2);
});

test("does not flag a certification name inside honest prose", () => {
  assert.equal(
    findForbiddenClaims("Our controls are aligned to ISO 27001 and reviewed annually.").length,
    0
  );
});

test("flags a line-wrapped/indented certification assertion", () => {
  const hits = findForbiddenClaims("We are ISO 27001\n          certified.");
  assert.equal(hits.length, 1);
  assert.match(hits[0].reason, /not held/i);
});

test("flags a certified women-owned business claim", () => {
  assert.equal(
    findForbiddenClaims("We are a certified women-owned business.").length,
    1
  );
  assert.equal(findForbiddenClaims("Round Digital is WBE certified.").length, 1);
});

test("flags an SBA-certified small disadvantaged business claim", () => {
  const hits = findForbiddenClaims(
    "We are an SBA-certified small disadvantaged business."
  );
  assert.equal(hits.length, 1);
  assert.match(hits[0].reason, /ineligible/i);
});

test("flags SOC 2 Type 2 certified claims written with the Arabic numeral", () => {
  assert.equal(findForbiddenClaims("SOC 2 Type 2 certified").length, 1);
  assert.equal(findForbiddenClaims("SOC 2 Type II certified").length, 1);
});

test("flags possession-verb ISO claims, not just certified/compliant", () => {
  assert.equal(findForbiddenClaims("We hold ISO 27001.").length, 1);
});

test("regression: allow-cases from spec §2/§8 remain unflagged", () => {
  assert.equal(findForbiddenClaims("Our controls are aligned to ISO 27001.").length, 0);
  assert.equal(findForbiddenClaims("ISO 9001 certification is in progress.").length, 0);
  assert.equal(findForbiddenClaims("We are pursuing WBE Canada certification.").length, 0);
  assert.equal(findForbiddenClaims("Round Digital is women-owned and led.").length, 0);
  assert.equal(findForbiddenClaims("controls mapped to SOC 2 criteria").length, 0);
});
