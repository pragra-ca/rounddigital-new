import { test } from "node:test";
import assert from "node:assert/strict";
import { CREDENTIALS, byStatus, hasAnyEarned } from "../src/content/credentials.mjs";

const VALID = ["earned", "in-progress", "planned"];

test("every credential has a valid status", () => {
  for (const c of CREDENTIALS) {
    assert.ok(VALID.includes(c.status), `${c.id} has bad status ${c.status}`);
  }
});

test("nothing is earned yet — the site must not imply otherwise", () => {
  assert.equal(hasAnyEarned(), false);
  assert.equal(byStatus("earned").length, 0);
});

test("every non-earned credential states a target quarter", () => {
  for (const c of CREDENTIALS.filter((x) => x.status !== "earned")) {
    assert.match(c.targetQuarter, /^Q[1-4] \d{4}$/, `${c.id} needs a target`);
  }
});

test("no US-citizenship-gated program is listed", () => {
  const ids = CREDENTIALS.map((c) => c.id).join(" ");
  for (const closed of ["wosb", "edwosb", "8a", "hubzone", "sdb"]) {
    assert.doesNotMatch(ids, new RegExp(closed, "i"), `${closed} is ineligible`);
  }
});

test("the Tier 1 credentials from the spec are present", () => {
  const ids = CREDENTIALS.map((c) => c.id);
  for (const id of ["wbe-canada", "weconnect", "iso-9001", "iso-27001"]) {
    assert.ok(ids.includes(id), `missing ${id}`);
  }
});

test("byStatus filters correctly", () => {
  assert.ok(byStatus("in-progress").every((c) => c.status === "in-progress"));
});
