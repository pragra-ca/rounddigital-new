import { test } from "node:test";
import assert from "node:assert/strict";
import { buildOrganizationSchema } from "../src/content/organization.mjs";

const schema = buildOrganizationSchema({
  baseUrl: "https://www.round.digital",
  description: "Test description",
});

test("declares itself as a schema.org Organization", () => {
  assert.equal(schema["@context"], "https://schema.org");
  assert.equal(schema["@type"], "Organization");
  assert.equal(schema.name, "Round Digital");
});

test("publishes only delivery locations as postal addresses", () => {
  const cities = schema.address.map((a) => a.addressLocality);
  assert.deepEqual(cities.sort(), ["Mississauga", "Noida"]);
});

test("does not publish the Allen TX or Pune addresses", () => {
  const serialized = JSON.stringify(schema);
  assert.doesNotMatch(serialized, /Allen/);
  assert.doesNotMatch(serialized, /Pune/);
});

test("founding date matches the corroborated 2017, not 2015", () => {
  assert.equal(schema.foundingDate, "2017");
});

test("employee count comes from the facts module", () => {
  assert.equal(schema.numberOfEmployees.value, "20+");
});

test("knowsAbout covers all five pillars", () => {
  const known = schema.knowsAbout.join(" ");
  for (const pillar of ["AI", "Software", "Survey", "Staff", "Training"]) {
    assert.match(known, new RegExp(pillar, "i"), `missing pillar: ${pillar}`);
  }
});

test("carries no hasCredential entry while no certification is held", () => {
  assert.equal(schema.hasCredential, undefined);
});
