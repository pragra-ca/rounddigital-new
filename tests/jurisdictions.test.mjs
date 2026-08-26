import { test } from "node:test";
import assert from "node:assert/strict";
import {
  JURISDICTIONS,
  TIER_LABEL,
  TIER_STATE,
  getJurisdiction,
} from "../src/data/procurement.js";

const REQUIRED = [
  "id",
  "name",
  "scope",
  "tier",
  "verdict",
  "why",
  "summary",
  "entity",
  "registrations",
  "delivery",
  "residency",
  "currency",
  "hours",
  "gap",
  "next",
];

test("every jurisdiction carries the full record", () => {
  assert.ok(JURISDICTIONS.length > 0, "expected at least one jurisdiction");
  for (const j of JURISDICTIONS) {
    for (const key of REQUIRED) {
      assert.equal(
        typeof j[key],
        "string",
        `jurisdiction ${j.id ?? "?"} is missing ${key}`
      );
      assert.ok(j[key].length > 0, `jurisdiction ${j.id} has an empty ${key}`);
    }
  }
});

test("jurisdiction ids are unique", () => {
  const ids = JURISDICTIONS.map((j) => j.id);
  assert.equal(new Set(ids).size, ids.length, "duplicate jurisdiction id");
});

test("every tier resolves to a label and an existing status state", () => {
  const VALID_STATES = new Set(["held", "progress", "planned"]);
  for (const j of JURISDICTIONS) {
    assert.ok(TIER_LABEL[j.tier], `no label for tier ${j.tier} (${j.id})`);
    assert.ok(
      VALID_STATES.has(TIER_STATE[j.tier]),
      `tier ${j.tier} maps to an unknown status state`
    );
  }
});

/* The load-bearing invariant of this page.
 *
 * The whole argument for publishing a jurisdiction table is that it is willing
 * to say no. If every entry became a yes, the table would stop being evidence
 * and start being marketing — and a reader would be right to discount all of
 * it. If a market genuinely graduates to "direct", its old entry should be
 * rewritten rather than deleted, and this test revisited deliberately. */
test("at least one jurisdiction says we cannot hold the contract", () => {
  /* Revised deliberately, as the note above instructs.
   *
   * The "none" tier no longer exists: every market outside our three direct
   * ones is partner-led, and four of them have incorporation in progress. The
   * invariant this test protects is unchanged though — the table must still be
   * willing to tell a buyer no. It now checks the thing that actually matters
   * to a reader, which is whether any row admits we cannot be the contracting
   * party, rather than the tier name that used to encode it. */
  const cannotContractDirectly = JURISDICTIONS.filter(
    (j) => j.tier !== "direct" && /\bnot\b/i.test(j.verdict)
  );
  assert.ok(
    cannotContractDirectly.length > 0,
    "a jurisdiction table where every row is a yes is marketing, not evidence"
  );
});

test("markets we cannot contract in do not imply that we can", () => {
  for (const j of JURISDICTIONS.filter((entry) => entry.tier !== "direct")) {
    assert.match(
      j.verdict,
      /\b(?:no|not)\b/i,
      `${j.id} is not a direct-contract market, so its verdict must say so plainly`
    );
  }
});

/* Unconfirmed values must be visibly bracketed rather than guessed at. A
   plausible-looking invented value is far worse in a bid than an obvious
   blank — see the rule at the top of src/data/procurement.js. */
test("placeholders use the [CONFIRM: ...] convention", () => {
  const LAZY = /\b(?:TBD|TODO|FIXME|XXX|lorem)\b/i;
  for (const j of JURISDICTIONS) {
    for (const key of REQUIRED) {
      assert.doesNotMatch(
        j[key],
        LAZY,
        `${j.id}.${key} uses a placeholder that is not the [CONFIRM: ...] convention`
      );
      const brackets = j[key].match(/\[([^\]]*)\]/g) ?? [];
      for (const found of brackets) {
        assert.match(
          found,
          /^\[CONFIRM: .+\]$/,
          `${j.id}.${key} has a bracketed value that is not a [CONFIRM: ...] marker`
        );
      }
    }
  }
});

test("getJurisdiction retrieves by id and returns undefined for unknown ids", () => {
  assert.equal(getJurisdiction(JURISDICTIONS[0].id).id, JURISDICTIONS[0].id);
  assert.equal(getJurisdiction("atlantis"), undefined);
});
