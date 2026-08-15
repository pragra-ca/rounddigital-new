import { defineConfig, devices } from "@playwright/test";

// End-to-end suite. Lives in e2e/ deliberately: `npm test` globs tests/*.mjs
// for the node:test unit runner, so Playwright specs must not sit there.
//
// Local:  npm run test:e2e            (starts `npm run dev` automatically)
// Against a running server or a deploy:
//         BASE_URL=https://www.round.digital npm run test:e2e

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

export default defineConfig({
  testDir: "./e2e",
  testMatch: "**/*.spec.mjs",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [["list"], ["html", { open: "never" }]],

  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],

  // Only manage a server when testing localhost. If BASE_URL points somewhere
  // else, assume it is already up.
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: "npm run dev",
        url: "http://localhost:3000",
        reuseExistingServer: !process.env.CI,
        timeout: 180_000,
      },
});
