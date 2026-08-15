#!/usr/bin/env node
// Generates public/sitemap.xml from the actual route tree at build time.

import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BASE = "https://www.round.digital";
const PAGES = "src/pages";
const SKIP = new Set(["api", "_app.js", "_document.js", "404.js"]);

// These page files still exist under src/pages but are intercepted by 301
// redirects declared in next.config.mjs ('/jobs' -> '/careers', '/pricing'
// -> '/services/engagement-models') before they ever serve content. A
// sitemap must never list a URL that redirects — search engines would be
// told to crawl a page that doesn't respond with 200. Do not remove this
// exclusion just because the page files are still on disk.
const REDIRECTED = new Set(["/jobs", "/pricing"]);

// Priority by path prefix, most specific first.
const PRIORITY = [
  [/^\/$/, "1.0", "weekly"],
  [/^\/government/, "0.9", "monthly"],
  [/^\/services/, "0.9", "monthly"],
  [/^\/industries/, "0.8", "monthly"],
  [/^\/about/, "0.7", "monthly"],
  [/^\/(blogs|insights)/, "0.6", "weekly"],
  [/^\/careers/, "0.6", "weekly"],
];

function rankOf(route) {
  for (const [re, priority, changefreq] of PRIORITY) {
    if (re.test(route)) return { priority, changefreq };
  }
  return { priority: "0.5", changefreq: "monthly" };
}

export function collectRoutes(dir = PAGES, prefix = "") {
  const routes = [];
  for (const entry of readdirSync(dir)) {
    if (SKIP.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      routes.push(...collectRoutes(full, `${prefix}/${entry}`));
      continue;
    }
    if (!/\.(js|jsx)$/.test(entry)) continue;
    // Dynamic routes are expanded by their data source, not the file tree.
    if (entry.startsWith("[")) continue;
    const name = entry.replace(/\.(js|jsx)$/, "");
    routes.push(name === "index" ? prefix || "/" : `${prefix}/${name}`);
  }
  return routes;
}

export function buildSitemap(routes, base = BASE, lastmod = new Date().toISOString().slice(0, 10)) {
  const urls = routes
    .map((r) => {
      const { priority, changefreq } = rankOf(r);
      const loc = r === "/" ? `${base}/` : `${base}${r}`;
      return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

// Only write when invoked directly, so importing for tests has no side effect.
if (process.argv[1] && process.argv[1].endsWith("generate-sitemap.mjs")) {
  const { RD_INDUSTRIES } = await import("../src/data/rdIndustries.js");
  const { blogs } = await import("../src/data/blogs.js");
  const { rdCases } = await import("../src/data/rdCases.js");
  const { jobPositions } = await import("../src/data/jobPositions.js");
  const routes = [
    ...collectRoutes().filter((r) => !REDIRECTED.has(r)),
    ...RD_INDUSTRIES.map((i) => `/industries/${i.slug}`),
    ...blogs.map((b) => `/blogs/${b.slug}`),
    ...Object.keys(rdCases).map((slug) => `/works/${slug}`),
    ...jobPositions.map((j) => `/careers/${j.slug}`),
  ].sort();
  writeFileSync("public/sitemap.xml", buildSitemap([...new Set(routes)]));
  console.log(`sitemap.xml written with ${routes.length} routes`);
}
