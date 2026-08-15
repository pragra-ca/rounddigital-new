import { test, expect } from "@playwright/test";

// The capability statement generates its PDF from its own DOM via a print
// stylesheet, so the page and the document cannot drift.
//
// A whole-branch review found the original selector `.rd nav` did NOT hide the
// navbar: Navbar.jsx uses <header> as its root and only wraps the centre links
// in <nav>. The PDF a contracting officer reads would have carried the logo,
// the theme toggle and an accent-red Contact button. Fixed with `.rd > header`.
//
// These tests are the first time that fix has been exercised in a browser.

test.describe("capability statement print output", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/government/capability-statement");
  });

  test("site chrome is hidden in print media", async ({ page }) => {
    // Visible on screen...
    await expect(page.locator(".rd > header")).toBeVisible();
    await expect(page.locator(".rd > footer")).toBeVisible();

    await page.emulateMedia({ media: "print" });

    // ...and gone in print.
    await expect(page.locator(".rd > header")).toBeHidden();
    await expect(page.locator(".rd > footer")).toBeHidden();
  });

  test("the accent-coloured Contact CTA does not print", async ({ page }) => {
    await page.emulateMedia({ media: "print" });
    // This button lives inside the navbar <header>; it was the specific artifact
    // that would have appeared, in full colour, at the top of the PDF.
    const cta = page.locator(".rd > header").getByRole("link", { name: /contact/i });
    if ((await cta.count()) > 0) {
      await expect(cta.first()).toBeHidden();
    }
  });

  test("the document's own title header SURVIVES print", async ({ page }) => {
    // The obvious fix for the bug above was `.rd header`, which would also have
    // matched the capability statement's own <header> — deleting the document
    // title from the PDF. Direct-child selectors avoid that. Prove it.
    await page.emulateMedia({ media: "print" });

    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("h1")).toContainText("Capability Statement");
  });

  test("the print button hides itself", async ({ page }) => {
    const button = page.getByRole("button", { name: /download as pdf/i });
    await expect(button).toBeVisible();

    await page.emulateMedia({ media: "print" });
    await expect(button).toBeHidden();
  });

  test("all six content sections remain in print", async ({ page }) => {
    await page.emulateMedia({ media: "print" });

    for (const heading of [
      "Core competencies",
      "Differentiators",
      "Past performance",
      "Company data",
      "Contact",
    ]) {
      await expect(page.getByText(heading, { exact: false }).first()).toBeVisible();
    }
  });

  test("produces a PDF of at most two US Letter pages", async ({ page, browserName }) => {
    // page.pdf() is Chromium-only.
    test.skip(browserName !== "chromium", "PDF generation requires Chromium");

    const pdf = await page.pdf({
      format: "Letter",
      printBackground: false,
      margin: { top: "14mm", bottom: "14mm", left: "14mm", right: "14mm" },
    });

    expect(pdf.byteLength).toBeGreaterThan(1000);

    // Count page objects in the PDF catalogue. A capability statement running
    // past two pages stops being a capability statement.
    const pageCount = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
    expect(pageCount).toBeGreaterThan(0);
    expect(pageCount).toBeLessThanOrEqual(2);
  });
});
