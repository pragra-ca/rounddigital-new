import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import { findForbiddenClaims } from "../src/content/claims.mjs";

// The claims guard (`npm run check:claims`) scans SOURCE files. This suite runs
// the exact same rules against the RENDERED DOM, which closes a gap the source
// scan structurally cannot: text assembled at runtime from data, props or
// template literals never appears as a literal string in any file.
//
// Round Digital holds ZERO certifications and is permanently ineligible for
// WOSB, EDWOSB, 8(a), SDB and HUBZone. A hit here is a procurement
// misrepresentation risk, not a copy nit.

function routesFromSitemap() {
  const xml = readFileSync("public/sitemap.xml", "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => new URL(m[1]).pathname)
    .filter((p, i, all) => all.indexOf(p) === i);
}

const ROUTES = routesFromSitemap();

test("sitemap yielded routes to check", () => {
  expect(ROUTES.length).toBeGreaterThan(10);
});

test.describe("no unearned certification claims in rendered output", () => {
  for (const route of ROUTES) {
    test(`${route}`, async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.status(), `${route} did not return 200`).toBe(200);

      const text = await page.locator("body").innerText();
      const hits = findForbiddenClaims(text);

      expect(
        hits,
        `Forbidden claim(s) rendered on ${route}: ` +
          hits.map((h) => `"${h.match}" — ${h.reason}`).join(" | ")
      ).toEqual([]);
    });
  }
});

test.describe("ineligible programs never appear as ours", () => {
  const CLOSED = ["WOSB", "EDWOSB", "HUBZone", "8(a)"];

  for (const route of ["/", "/government", "/government/capability-statement", "/about"]) {
    test(`${route}`, async ({ page }) => {
      await page.goto(route);
      const text = await page.locator("body").innerText();

      for (const program of CLOSED) {
        expect(
          text,
          `${route} mentions ${program}, which requires US-citizen ownership`
        ).not.toContain(program);
      }
    });
  }
});

test("structured data publishes only confirmed company facts", async ({ page }) => {
  await page.goto("/");

  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(blocks.length).toBeGreaterThan(0);

  const org = blocks.map((b) => JSON.parse(b)).find((j) => j["@type"] === "Organization");
  expect(org, "no Organization schema found").toBeTruthy();

  const cities = org.address.map((a) => a.addressLocality).sort();
  expect(cities).toEqual(["Mississauga", "Noida"]);
  expect(org.foundingDate).toBe("2017");
  // No certification may be asserted in structured data either.
  expect(org.hasCredential).toBeUndefined();

  const serialized = JSON.stringify(org);
  for (const unconfirmed of ["Allen", "Pune", "2015"]) {
    expect(serialized).not.toContain(unconfirmed);
  }
});

test("site-wide meta keywords carry no certification names", async ({ page }) => {
  await page.goto("/");
  const keywords = await page.locator('meta[name="keywords"]').getAttribute("content");
  expect(keywords).toBeTruthy();

  for (const cert of ["SOC 2", "ISO 27001", "ISO 9001", "CMMI"]) {
    expect(keywords, `meta keywords still advertise ${cert}`).not.toContain(cert);
  }
});
