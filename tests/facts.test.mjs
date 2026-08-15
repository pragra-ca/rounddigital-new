import { test } from "node:test";
import assert from "node:assert/strict";
import { FACTS, VERIFIED_FACTS, getFact } from "../src/content/facts.mjs";

test("every verified fact carries a source and a verification date", () => {
  assert.ok(VERIFIED_FACTS.length > 0, "expected at least one verified fact");
  for (const fact of VERIFIED_FACTS) {
    assert.ok(fact.id, "fact is missing an id");
    assert.ok(fact.statement, `fact ${fact.id} is missing a statement`);
    assert.ok(fact.source, `fact ${fact.id} is missing a source`);
    assert.match(
      fact.verifiedOn,
      /^\d{4}-\d{2}-\d{2}$/,
      `fact ${fact.id} needs an ISO date`
    );
  }
});

test("fact ids are unique", () => {
  const ids = VERIFIED_FACTS.map((f) => f.id);
  assert.equal(new Set(ids).size, ids.length, "duplicate fact id");
});

test("getFact retrieves by id and returns undefined for unknown ids", () => {
  assert.equal(getFact("forbes-2024").id, "forbes-2024");
  assert.equal(getFact("no-such-fact"), undefined);
});

test("FACTS is frozen so pages cannot mutate the record", () => {
  assert.ok(Object.isFrozen(FACTS));
});

test("no location is claimed without an operating status", () => {
  for (const loc of FACTS.locations) {
    assert.ok(
      ["delivery", "registered", "planned"].includes(loc.status),
      `location ${loc.city} has an invalid status: ${loc.status}`
    );
  }
});
