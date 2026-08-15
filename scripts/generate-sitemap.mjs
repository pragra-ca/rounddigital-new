#!/usr/bin/env node
// Generates public/sitemap.xml from the actual route tree at build time.

import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BASE = "https://www.round.digital";
const PAGES = "src/pages";
const SKIP = new Set(["api", "_app.js", "_document.js", "404.js"]);

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
  const routes = [
    ...collectRoutes(),
    ...RD_INDUSTRIES.map((i) => `/industries/${i.slug}`),
  ].sort();
  writeFileSync("public/sitemap.xml", buildSitemap([...new Set(routes)]));
  console.log(`sitemap.xml written with ${routes.length} routes`);
}
