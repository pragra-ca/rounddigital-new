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

  /* This used to assert the programme names were absent entirely. That was
   * wrong: spec §4.2 REQUIRES us to disclose which programmes we are ineligible
   * for, and /government/capability-statement and /government/certifications do
   * exactly that — so the old assertion forbade the disclosure it was meant to
   * protect. What must never happen is a programme name presented AS OURS, so
   * each occurrence is now checked for an ineligibility marker in its vicinity.
   */
  const DISCLOSURE = /not eligible|ineligible|requires?\s|closed to us|do not (?:hold|claim)|cannot/i;
  const WINDOW = 220;

  for (const route of ["/", "/government", "/government/capability-statement", "/about"]) {
    test(`${route}`, async ({ page }) => {
      await page.goto(route);
      const text = await page.locator("body").innerText();

      for (const program of CLOSED) {
        let i = text.indexOf(program);
        while (i !== -1) {
          const context = text.slice(Math.max(0, i - WINDOW), i + program.length + WINDOW);
          expect(
            DISCLOSURE.test(context),
            `${route} mentions ${program} without an ineligibility disclosure nearby:\n` +
              `…${context.replace(/\s+/g, " ")}…`
          ).toBe(true);
          i = text.indexOf(program, i + program.length);
        }
      }
    });
  }
});
