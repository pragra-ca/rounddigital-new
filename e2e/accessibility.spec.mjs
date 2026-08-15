import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// WCAG 2.1 AA is a positioning asset here, not a nicety: Section 508
// conformance is scored on US federal digital work and the Accessible Canada
// Act applies federally in Canada. Our own site is the first evidence a buyer
// sees that we can deliver it.
//
// The contrast fix in this branch (--rd-accent-text) was computed and
// unit-tested but never rendered. These are the first real measurements.

const WCAG_AA = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"];

const PAGES = [
  { path: "/", name: "homepage" },
  { path: "/government", name: "public-sector hub" },
  { path: "/government/capability-statement", name: "capability statement" },
  { path: "/services", name: "services index" },
  { path: "/industries", name: "industries index" },
  { path: "/contact", name: "contact" },
];

for (const { path, name } of PAGES) {
  test.describe(name, () => {
    test("has no WCAG 2.1 AA violations (dark theme, default)", async ({ page }) => {
      await page.goto(path);
      const results = await new AxeBuilder({ page }).withTags(WCAG_AA).analyze();

      expect(
        results.violations,
        results.violations
          .map((v) => `${v.id} (${v.impact}) x${v.nodes.length}: ${v.help}`)
          .join("\n")
      ).toEqual([]);
    });

    test("has no WCAG 2.1 AA violations (light theme)", async ({ page }) => {
      await page.goto(path);
      // The theme provider stamps data-rd-theme="light" on <html>; set it
      // directly so the assertion does not depend on finding the toggle.
      await page.evaluate(() => document.documentElement.setAttribute("data-rd-theme", "light"));

      const results = await new AxeBuilder({ page }).withTags(WCAG_AA).analyze();

      expect(
        results.violations,
        results.violations
          .map((v) => `${v.id} (${v.impact}) x${v.nodes.length}: ${v.help}`)
          .join("\n")
      ).toEqual([]);
    });
  });
}

test("colour contrast specifically passes on the new government pages", async ({ page }) => {
  for (const path of ["/government", "/government/capability-statement"]) {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withRules(["color-contrast"])
      .analyze();

    expect(
      results.violations,
      `${path} contrast failures: ` +
        results.violations
          .flatMap((v) => v.nodes.map((n) => `${n.target} — ${n.failureSummary}`))
          .join("\n")
    ).toEqual([]);
  }
});

test("the NAICS scroll region is keyboard reachable with a visible focus ring", async ({ page }) => {
  await page.goto("/government");

  const region = page.getByRole("region", { name: "NAICS and PSC codes by capability" });
  await region.focus();
  await expect(region).toBeFocused();

  // A focusable element with no visible focus indicator fails WCAG 2.4.7.
  // globals.css scopes :focus-visible to a, button, input, select, textarea —
  // a div is not covered, so this asserts the UA default actually paints one.
  const outline = await region.evaluate((el) => {
    const s = getComputedStyle(el);
    return { style: s.outlineStyle, width: s.outlineWidth, shadow: s.boxShadow };
  });

  const hasRing =
    (outline.style !== "none" && parseFloat(outline.width) > 0) ||
    (outline.shadow && outline.shadow !== "none");

  expect(
    hasRing,
    `NAICS region has no visible focus indicator (outline: ${outline.style} ${outline.width}, shadow: ${outline.shadow})`
  ).toBe(true);
});

test("each page has exactly one h1 and no skipped heading levels", async ({ page }) => {
  for (const { path } of PAGES) {
    await page.goto(path);

    const levels = await page.evaluate(() =>
      [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) => Number(h.tagName[1]))
    );

    expect(levels.filter((l) => l === 1).length, `${path} h1 count`).toBe(1);

    for (let i = 1; i < levels.length; i += 1) {
      expect(
        levels[i] - levels[i - 1],
        `${path} skips from h${levels[i - 1]} to h${levels[i]}`
      ).toBeLessThanOrEqual(1);
    }
  }
});
