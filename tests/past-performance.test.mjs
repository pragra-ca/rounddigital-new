import { test } from "node:test";
import assert from "node:assert/strict";
import { PAST_PERFORMANCE } from "../src/content/past-performance.mjs";
import { getFact } from "../src/content/facts.mjs";

test("federal minimum of three references is met", () => {
  assert.ok(PAST_PERFORMANCE.length >= 3, "need at least three references");
});

test("every entry has the four evaluated fields plus a period", () => {
  for (const e of PAST_PERFORMANCE) {
    for (const field of ["client", "challenge", "approach", "outcome", "period"]) {
      assert.ok(e[field], `${e.id} is missing ${field}`);
    }
  }
});

test("every entry is anchored to a verified fact", () => {
  for (const e of PAST_PERFORMANCE) {
    assert.ok(getFact(e.factId), `${e.id} references unknown fact ${e.factId}`);
  }
});

test("entry ids are unique", () => {
  const ids = PAST_PERFORMANCE.map((e) => e.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("every entry states its relationship to Round Digital", () => {
  // Federal evaluators read "past performance" as customer references.
  // Perfectum.ai (own product) and Pragra (predecessor entity) are not
  // customers, so every entry must be labelled to avoid misleading an
  // evaluator into reading them as third-party engagements.
  for (const e of PAST_PERFORMANCE) {
    assert.ok(
      typeof e.relationship === "string" && e.relationship.trim().length > 0,
      `${e.id} is missing a relationship`
    );
  }
});
