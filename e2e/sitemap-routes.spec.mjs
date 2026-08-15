import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";

// The sitemap is generated from the route tree at build time. Its whole purpose
// is to never drift from reality — so every URL it advertises must actually
// serve. The hand-maintained file it replaced had drifted: it listed six
// /works/* case studies when only three existed.
//
// This also guards the domain-authority decision behind the repositioning: we
// kept round.digital specifically to preserve indexed URLs. A 404 in the
// sitemap works directly against that.

const xml = readFileSync("public/sitemap.xml", "utf8");
const LOCS = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const ROUTES = LOCS.map((u) => new URL(u).pathname);

test("sitemap is well-formed and non-trivial", () => {
  expect(xml).toMatch(/^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  expect(ROUTES.length).toBeGreaterThan(40);
  expect(new Set(ROUTES).size, "duplicate <loc> entries").toBe(ROUTES.length);
});

test("no dynamic-route placeholder leaked into the sitemap", () => {
  const leaked = ROUTES.filter((r) => r.includes("[") || r.includes("]"));
  expect(leaked, `unexpanded dynamic routes: ${leaked.join(", ")}`).toEqual([]);
});

test("no redirect source is advertised", () => {
  // These 301 elsewhere in next.config.mjs. Listing a redirecting URL tells
  // search engines to crawl a page that never serves content.
  for (const redirected of ["/jobs", "/pricing", "/use-cases", "/blog"]) {
    expect(ROUTES, `${redirected} is a redirect source`).not.toContain(redirected);
  }
});

test.describe("every sitemap URL serves", () => {
  for (const route of ROUTES) {
    test(`200 ${route}`, async ({ request }) => {
      const response = await request.get(route);
      expect(
        response.status(),
        `${route} returned ${response.status()} — a sitemap URL must serve content`
      ).toBe(200);
    });
  }
});

test("robots.txt points at a sitemap that exists", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);

  const body = await robots.text();
  const match = body.match(/Sitemap:\s*(\S+)/i);
  expect(match, "robots.txt declares no Sitemap").toBeTruthy();

  // The sitemap is generated at build time and gitignored. If a deploy runs a
  // bare `next build` instead of `npm run build`, it ships without one while
  // robots.txt still advertises it.
  const sitemap = await request.get(new URL(match[1]).pathname);
  expect(
    sitemap.status(),
    "robots.txt advertises a sitemap that is not being served — check the deploy runs `npm run build`"
  ).toBe(200);
});
