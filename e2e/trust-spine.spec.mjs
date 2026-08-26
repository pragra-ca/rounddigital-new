import { test, expect } from "@playwright/test";
import { JURISDICTIONS } from "../src/data/procurement.js";
import { DUE_DILIGENCE, countByStatus } from "../src/data/qualification.js";
import { CREDENTIALS } from "../src/content/credentials.mjs";

/* The trust spine: the homepage fold, the jurisdiction band beneath it, and the
 * two procurement pages behind them.
 *
 * These assertions are driven from the data modules rather than from literals,
 * so adding a jurisdiction or a due-diligence row cannot silently fall out of
 * coverage — the only way to lose coverage is to delete the entry.
 */

/* The "none" tier was retired: every non-direct market is now partner-led.
   The behaviour under test is unchanged — picking a market we cannot contract
   in directly must return a verdict that plainly says so. */
const REFUSAL = JURISDICTIONS.find(
  (j) => j.tier !== "direct" && /\bnot\b/i.test(j.verdict)
);
const PARTNER = JURISDICTIONS.find((j) => j.tier === "partner");

test.describe("homepage fold", () => {
  /* The 2026 design replaced the "at a glance" vendor record and the buyer tab
   * strip with a centred hero and a Government-readiness band. The devices
   * changed; the guarantee they existed to enforce did not, so these assertions
   * were retargeted rather than dropped: the homepage must still state, in its
   * own words, that nothing is held and nothing has been delivered to a
   * government buyer. */

  test("answers the evaluator's questions without being asked", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);

    await expect(page.locator("h1")).toHaveCount(1);

    // The weakest facts, stated on the homepage rather than buried.
    const body = page.locator("body");
    await expect(body).toContainText("We have not yet delivered a government contract");
    await expect(body).toContainText("we do not hold a certification today");
  });

  test("no credential is ever presented as held", async ({ page }) => {
    await page.goto("/");

    for (const credential of CREDENTIALS) {
      const card = page.locator(".rds-certcard", { hasText: credential.name }).first();
      if ((await card.count()) === 0) continue; // homepage shows a subset

      if (credential.status === "earned") {
        await expect(card).toContainText("Held");
      } else {
        // A credential we do not hold must carry its status and its target date.
        await expect(card).toContainText(credential.targetQuarter);
        await expect(card).not.toContainText("Held");
      }
    }
  });
});

test.describe("jurisdiction band", () => {
  test("offers every jurisdiction and defaults to an answer", async ({ page }) => {
    await page.goto("/");
    const band = page.locator(".rds-jband");
    await expect(band).toBeVisible();

    for (const j of JURISDICTIONS) {
      await expect(band.getByRole("button", { name: j.name })).toBeVisible();
    }
    await expect(band.locator(".rds-jband-verdict")).toBeVisible();
  });

  /* The load-bearing behaviour. If picking a market we cannot serve produced
     anything other than a plain refusal, the band would be worse than useless —
     it would be an implied claim of global coverage we cannot support. */
  test("a market we cannot contract in directly says so plainly", async ({ page }) => {
    await page.goto("/");
    const band = page.locator(".rds-jband");

    await band.getByRole("button", { name: REFUSAL.name }).click();

    const verdict = band.locator(".rds-jband-verdict");
    await expect(verdict).toContainText(REFUSAL.verdict);
    await expect(verdict).toHaveText(/\b(?:no|not)\b/i);
    await expect(band.locator(".rds-jband-why")).toContainText(REFUSAL.why);
  });

  test("selection is exposed to assistive technology", async ({ page }) => {
    await page.goto("/");
    const band = page.locator(".rds-jband");
    const chip = band.getByRole("button", { name: PARTNER.name });

    await expect(chip).toHaveAttribute("aria-pressed", "false");
    await chip.click();
    await expect(chip).toHaveAttribute("aria-pressed", "true");
  });
});

test.describe("/government/where-we-can-contract", () => {
  test("renders every jurisdiction and its honest gap", async ({ page }) => {
    const response = await page.goto("/government/where-we-can-contract");
    expect(response?.status()).toBe(200);

    await expect(page.locator("h1")).toHaveCount(1);

    const list = page.locator(".rds-jurlist");
    for (const j of JURISDICTIONS) {
      await expect(list.getByRole("button", { name: new RegExp(j.name) })).toBeVisible();
    }

    await expect(page.locator(".rds-jurgap")).toContainText(JURISDICTIONS[0].gap);
  });

  test("a partner-only market states that we cannot hold the contract", async ({ page }) => {
    await page.goto("/government/where-we-can-contract");
    await page
      .locator(".rds-jurlist")
      .getByRole("button", { name: new RegExp(PARTNER.name) })
      .click();

    await expect(page.locator(".rds-spec")).toContainText(PARTNER.entity);
    await expect(page.locator(".rds-jurgap")).toContainText(PARTNER.gap);
  });
});

test.describe("/government/vendor-qualification", () => {
  test("publishes the full due-diligence list with honest counts", async ({ page }) => {
    const response = await page.goto("/government/vendor-qualification");
    expect(response?.status()).toBe(200);

    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("details.rds-qualrow")).toHaveCount(DUE_DILIGENCE.length);

    // The counts are the argument. If they stopped matching the data, the page
    // would be overstating readiness — the exact failure it exists to prevent.
    const counts = page.locator(".rds-qualcount");
    await expect(counts.nth(0)).toHaveText(String(countByStatus("published")));
    await expect(counts.nth(1)).toHaveText(String(countByStatus("drafted")));
    await expect(counts.nth(2)).toHaveText(String(countByStatus("missing")));

    expect(countByStatus("missing")).toBeGreaterThan(0);
  });

  test("a row opens to reveal its answer", async ({ page }) => {
    await page.goto("/government/vendor-qualification");
    const row = page.locator("details.rds-qualrow").first();

    await expect(row.locator(".rds-qualrow-body")).toBeHidden();
    await row.locator("summary").click();
    await expect(row.locator(".rds-qualrow-body")).toBeVisible();
    await expect(row.locator(".rds-qualrow-body")).toContainText(DUE_DILIGENCE[0].answer);
  });

  test("offers a lower-commitment route than a solicitation", async ({ page }) => {
    await page.goto("/government/vendor-qualification");
    await expect(page.getByRole("link", { name: /Book the call/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /Submit an RFP/ }).first()).toBeVisible();
  });
});
