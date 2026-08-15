import { test } from "node:test";
import assert from "node:assert/strict";
import { buildSitemap } from "../scripts/generate-sitemap.mjs";

const xml = buildSitemap(["/", "/government", "/services"], "https://www.round.digital", "2026-08-15");

test("emits a well-formed urlset", () => {
  assert.match(xml, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(xml, /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);
  assert.match(xml, /<\/urlset>\s*$/);
});

test("renders the root without a trailing slash duplication", () => {
  assert.match(xml, /<loc>https:\/\/www\.round\.digital\/<\/loc>/);
  assert.doesNotMatch(xml, /round\.digital\/\/</);
});

test("emits one url element per route", () => {
  assert.equal((xml.match(/<url>/g) || []).length, 3);
});

test("the government hub carries top priority", () => {
  assert.match(xml, /<loc>[^<]*\/government<\/loc><lastmod>2026-08-15<\/lastmod><changefreq>monthly<\/changefreq><priority>0\.9<\/priority>/);
});
