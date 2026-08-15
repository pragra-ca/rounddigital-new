import { test, expect } from "@playwright/test";
import { CREDENTIALS } from "../src/content/credentials.mjs";
import { PILLARS } from "../src/content/naics.mjs";
import { PAST_PERFORMANCE } from "../src/content/past-performance.mjs";

// These two pages were built without a compiler or browser available. Nothing
// here has ever been rendered, so these tests are the first real proof they work.

test.describe("/government hub", () => {
  test("renders with a single h1 and the expected sections", async ({ page }) => {
    const response = await page.goto("/government");
    expect(response?.status()).toBe(200);

    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toContainText(
      "A small business that behaves like a large one"
    );

    for (const heading of [
      "Codes and classifications",
      "Past performance",
      "Certification roadmap",
      "What we do not claim",
    ]) {
      await expect(
        page.getByRole("heading", { name: heading, exact: false })
      ).toBeVisible();
    }
  });

  test("NAICS table exposes every pillar and is keyboard reachable", async ({ page }) => {
    await page.goto("/government");

    const region = page.getByRole("region", {
      name: "NAICS and PSC codes by capability",
    });
    await expect(region).toBeVisible();

    // The scroll container was given tabIndex so keyboard users can reach the
    // PSC and size-standard columns. Verify it actually takes focus.
    await region.focus();
    await expect(region).toBeFocused();

    for (const pillar of PILLARS) {
      await expect(
        page.getByRole("rowheader", { name: pillar.name })
      ).toBeVisible();
      await expect(region).toContainText(pillar.primaryNaics.code);
    }

    // 541910 is the survey-research code the strategy prioritises.
    await expect(region).toContainText("541910");
  });

  test("every credential reads as roadmap, never as held", async ({ page }) => {
    await page.goto("/government");

    for (const credential of CREDENTIALS) {
      const card = page.locator("li", { hasText: credential.name }).first();
      await expect(card).toBeVisible();

      if (credential.status === "earned") {
        await expect(card).toContainText("Held");
      } else {
        await expect(card).toContainText(/On roadmap|In progress/);
        // A non-earned credential must always show its target date.
        await expect(card).toContainText(credential.targetQuarter);
        await expect(card).not.toContainText("Held");
      }
    }
  });

  test("states plainly that no certifications are held", async ({ page }) => {
    await page.goto("/government");
    await expect(page.getByText("We hold no third-party certifications")).toBeVisible();
  });

  test("past performance shows relationship and a verifiable source", async ({ page }) => {
    await page.goto("/government");

    for (const entry of PAST_PERFORMANCE) {
      const card = page.locator("article", { hasText: entry.client }).first();
      await expect(card).toBeVisible();
      // Federal evaluators read past performance as customer references, so the
      // relationship label must be on the card, not just in the data.
      await expect(card).toContainText(entry.relationship);
      await expect(card.getByRole("link", { name: /verifiable|\./i }).first()).toBeVisible();
    }
  });
});

test.describe("/government/capability-statement", () => {
  test("renders every section an evaluator looks for", async ({ page }) => {
    const response = await page.goto("/government/capability-statement");
    expect(response?.status()).toBe(200);

    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toContainText("Capability Statement");

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

  test("company data declares no certifications held", async ({ page }) => {
    await page.goto("/government/capability-statement");
    await expect(page.getByText("None held.")).toBeVisible();
  });

  test("publishes only confirmed delivery locations", async ({ page }) => {
    await page.goto("/government/capability-statement");
    const body = await page.locator("body").innerText();

    expect(body).toContain("Mississauga");
    expect(body).toContain("Noida");
    // Allen TX and Pune are unconfirmed; they must not appear on a bid-facing page.
    expect(body).not.toContain("Allen");
    expect(body).not.toContain("Pune");
  });
});

test("footer links the public-sector hub", async ({ page }) => {
  await page.goto("/");
  const link = page.locator("footer").getByRole("link", { name: /public sector/i });
  await expect(link).toBeVisible();
  await link.click();
  await expect(page).toHaveURL(/\/government$/);
});
