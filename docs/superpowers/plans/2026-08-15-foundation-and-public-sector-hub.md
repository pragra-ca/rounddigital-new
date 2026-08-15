# Foundation & Public-Sector Hub Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish a verified-facts content layer with an automated claims guard, shift the design tokens to an enterprise-grade and WCAG AA-compliant system, and ship the `/government` public-sector hub and capability statement.

**Architecture:** All company facts move out of scattered JSX into `src/content/*.mjs` modules that are plain ESM and therefore unit-testable with zero new dependencies. A claims guard script scans those modules plus `src/data` and `src/pages` for forbidden certification language and fails the build on a hit — this is the mechanical enforcement of the spec's "no uncertified claims" rule. Design tokens gain a text-safe accent that passes contrast, and pages consume the content modules rather than hardcoding facts.

**Tech Stack:** Next.js 16 (Pages Router), React 19, Tailwind 3.4 + CSS custom properties, `node:test` (built in, no new dependency), GSAP for reveals.

**Spec:** `docs/superpowers/specs/2026-08-15-enterprise-repositioning-design.md`

## Global Constraints

- **No certification badge, label or keyword may appear anywhere until the certification is actually awarded.** Spec §2, §8. Enforced by Task 2.
- Content modules are `.mjs` and imported with an explicit extension (`@/content/facts.mjs`). The project is not `"type": "module"`, so `.mjs` is what makes them loadable by both Next and bare `node --test`.
- Only facts in spec §2 "Verified" may appear on `/government/*`. Client-stated facts require the client to confirm before use.
- Corner radius ceiling is **12px** on new components. Spec §10.
- All colour pairings must meet **WCAG 2.1 AA**: 4.5:1 for normal text, 3:1 for large text and UI boundaries. Spec §10.
- Locations claimed on the site must be locations we operate from. Spec §12 item 4.
- Never write a superlative we cannot document. Spec §3.5.

---

### Task 1: Test infrastructure and the verified-facts module

**Files:**
- Create: `src/content/facts.mjs`
- Create: `tests/facts.test.mjs`
- Modify: `package.json` (scripts block, lines 5-10)

**Interfaces:**
- Consumes: nothing
- Produces: `FACTS` (frozen object), `VERIFIED_FACTS` (array of `{ id, statement, source, verifiedOn }`), `getFact(id) -> object | undefined`

- [ ] **Step 1: Write the failing test**

Create `tests/facts.test.mjs`:

```javascript
import { test } from "node:test";
import assert from "node:assert/strict";
import { FACTS, VERIFIED_FACTS, getFact } from "../src/content/facts.mjs";

test("every verified fact carries a source and a verification date", () => {
  assert.ok(VERIFIED_FACTS.length > 0, "expected at least one verified fact");
  for (const fact of VERIFIED_FACTS) {
    assert.ok(fact.id, "fact is missing an id");
    assert.ok(fact.statement, `fact ${fact.id} is missing a statement`);
    assert.ok(fact.source, `fact ${fact.id} is missing a source`);
    assert.match(
      fact.verifiedOn,
      /^\d{4}-\d{2}-\d{2}$/,
      `fact ${fact.id} needs an ISO date`
    );
  }
});

test("fact ids are unique", () => {
  const ids = VERIFIED_FACTS.map((f) => f.id);
  assert.equal(new Set(ids).size, ids.length, "duplicate fact id");
});

test("getFact retrieves by id and returns undefined for unknown ids", () => {
  assert.equal(getFact("forbes-2024").id, "forbes-2024");
  assert.equal(getFact("no-such-fact"), undefined);
});

test("FACTS is frozen so pages cannot mutate the record", () => {
  assert.ok(Object.isFrozen(FACTS));
});

test("no location is claimed without an operating status", () => {
  for (const loc of FACTS.locations) {
    assert.ok(
      ["delivery", "registered", "planned"].includes(loc.status),
      `location ${loc.city} has an invalid status: ${loc.status}`
    );
  }
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/facts.test.mjs`
Expected: FAIL — `Cannot find module '../src/content/facts.mjs'`

- [ ] **Step 3: Create the facts module**

Create `src/content/facts.mjs`:

```javascript
// Single source of truth for company facts.
//
// VERIFIED_FACTS are externally corroborated and may appear on bid-facing
// pages. Anything not in this file does not go on the site. See spec §2.

export const VERIFIED_FACTS = [
  {
    id: "forbes-2024",
    statement:
      "Pragra named to Forbes Canada's Best Startup Employers 2024.",
    source: "https://www.forbes.com/companies/pragra/",
    verifiedOn: "2026-08-15",
  },
  {
    id: "pragra-founded",
    statement: "Pragra founded in 2017, headquartered in Mississauga, Ontario.",
    source: "https://www.forbes.com/companies/pragra/",
    verifiedOn: "2026-08-15",
  },
  {
    id: "perfectum-platform",
    statement:
      "Perfectum.ai is a commercial multi-tenant LMS with SCORM 1.2, SCORM 2004 and xAPI conformance, serving 1,200+ academies.",
    source: "https://perfectum.ai",
    verifiedOn: "2026-08-15",
  },
  {
    id: "shipcarte-platform",
    statement:
      "ShipCarte is a Toronto multi-carrier logistics platform operating since 2019, covering LTL, courier, air and ocean freight.",
    source: "https://www.shipcarte.com/freight-solutions/",
    verifiedOn: "2026-08-15",
  },
  {
    id: "training-delivery",
    statement:
      "Technical training delivered in Mississauga, Ontario and Noida, India, and online.",
    source: "https://www.coursereport.com/schools/pragra",
    verifiedOn: "2026-08-15",
  },
];

// Locations. `status` is deliberately explicit — a registered address is not a
// delivery centre, and the site must not imply otherwise. See spec §12 item 4.
//
// TASK-1 NOTE FOR THE IMPLEMENTER: the addresses currently published in
// src/components/seo/index.js (Allen TX, Pune) are NOT reflected here because
// they are unconfirmed. Do not add them back without written client
// confirmation. If confirmed, add with the correct status and a source.
const locations = [
  { city: "Mississauga", region: "ON", country: "CA", status: "delivery" },
  { city: "Noida", region: "UP", country: "IN", status: "delivery" },
  { city: "Cheyenne", region: "WY", country: "US", status: "registered" },
];

export const FACTS = Object.freeze({
  legalName: "Round Digital",
  predecessor: "Pragra LLC",
  employeeCount: "20+",
  locations,
  verified: VERIFIED_FACTS,
});

export function getFact(id) {
  return VERIFIED_FACTS.find((f) => f.id === id);
}
```

- [ ] **Step 4: Add the test script**

In `package.json`, replace the `scripts` block:

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "node --test tests/",
    "check": "yarn test && yarn lint"
  },
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `yarn test`
Expected: PASS — 5 tests passing

- [ ] **Step 6: Commit**

```bash
git add package.json src/content/facts.mjs tests/facts.test.mjs
git commit -m "feat(content): add verified-facts module with provenance tests"
```

---

### Task 2: Claims guard

This is the mechanical enforcement of the spec's hardest rule. It must exist before any new page is written.

**Files:**
- Create: `src/content/claims.mjs`
- Create: `scripts/check-claims.mjs`
- Create: `tests/claims.test.mjs`
- Modify: `package.json` (scripts block)

**Interfaces:**
- Consumes: nothing
- Produces: `FORBIDDEN_CLAIMS` (array of `{ pattern: RegExp, reason: string }`), `findForbiddenClaims(text) -> Array<{ match, reason, index }>`

- [ ] **Step 1: Write the failing test**

Create `tests/claims.test.mjs`:

```javascript
import { test } from "node:test";
import assert from "node:assert/strict";
import { findForbiddenClaims, FORBIDDEN_CLAIMS } from "../src/content/claims.mjs";

test("flags an unearned SOC 2 certification claim", () => {
  const hits = findForbiddenClaims("We are SOC 2 Type II certified.");
  assert.equal(hits.length, 1);
  assert.match(hits[0].reason, /not held/i);
});

test("flags ISO certification claims", () => {
  assert.equal(findForbiddenClaims("ISO 27001 certified").length, 1);
  assert.equal(findForbiddenClaims("ISO 9001 certified provider").length, 1);
});

test("flags US socioeconomic programs we are ineligible for", () => {
  assert.equal(findForbiddenClaims("a WOSB set-aside partner").length, 1);
  assert.equal(findForbiddenClaims("our 8(a) status").length, 1);
  assert.equal(findForbiddenClaims("HUBZone certified").length, 1);
});

test("flags CMMI level claims", () => {
  assert.equal(findForbiddenClaims("CMMI Level 3 appraised").length, 1);
});

test("allows aligned/roadmap language that makes no certification claim", () => {
  assert.equal(findForbiddenClaims("Our controls are aligned to ISO 27001.").length, 0);
  assert.equal(findForbiddenClaims("ISO 9001 certification is in progress.").length, 0);
  assert.equal(findForbiddenClaims("We are pursuing WBE Canada certification.").length, 0);
});

test("allows the factual women-owned statement", () => {
  assert.equal(findForbiddenClaims("Round Digital is women-owned and led.").length, 0);
});

test("every forbidden claim carries a human-readable reason", () => {
  for (const c of FORBIDDEN_CLAIMS) {
    assert.ok(c.reason && c.reason.length > 10, "reason too short");
    assert.ok(c.pattern instanceof RegExp);
  }
});

test("reports the index of the match so the scanner can print a location", () => {
  const hits = findForbiddenClaims("padding padding SOC 2 certified");
  assert.ok(hits[0].index > 0);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/claims.test.mjs`
Expected: FAIL — `Cannot find module '../src/content/claims.mjs'`

- [ ] **Step 3: Create the claims module**

Create `src/content/claims.mjs`:

```javascript
// Forbidden-claims registry. See spec §2 and §8.
//
// Round Digital holds no certifications. Any language asserting one is a
// misrepresentation risk in a procurement context, so the build fails on it.
//
// The patterns deliberately allow "aligned to X", "pursuing X" and
// "X certification is in progress" — those are honest roadmap statements.
// They forbid the assertion forms: "X certified", "X-certified", "our X".

const CERT_ASSERTION = String.raw`(?:\s|-)?(?:certified|certification(?!\s+is\s+in\s+progress)(?!\s+is\s+planned)|accredited|appraised|compliant)`;

export const FORBIDDEN_CLAIMS = [
  {
    pattern: new RegExp(String.raw`SOC\s*2(?:\s*Type\s*I{1,2})?${CERT_ASSERTION}`, "gi"),
    reason: "SOC 2 is not held. Spec §2 — no certification is held today.",
  },
  {
    pattern: new RegExp(String.raw`ISO(?:/IEC)?\s*\d{4,5}(?:[:-]\d{4})?${CERT_ASSERTION}`, "gi"),
    reason: "No ISO certification is not held. Use 'aligned to' or 'in progress'.",
  },
  {
    pattern: new RegExp(String.raw`CMMI\s*(?:Level\s*)?[1-5]`, "gi"),
    reason: "CMMI is not held and is not on the near-term roadmap. Spec §8 Tier 3.",
  },
  {
    pattern: /\bWOSB\b|\bEDWOSB\b/gi,
    reason:
      "WOSB/EDWOSB require 51% US-citizen ownership. We are ineligible. Spec §4.2.",
  },
  {
    pattern: /\b8\(a\)\b/gi,
    reason: "8(a) requires US citizenship. We are ineligible. Spec §4.2.",
  },
  {
    pattern: /\bHUBZone\b/gi,
    reason: "HUBZone requires US-citizen ownership. We are ineligible. Spec §4.2.",
  },
  {
    pattern: new RegExp(String.raw`\bWBENC${CERT_ASSERTION}`, "gi"),
    reason: "WBENC is not held and eligibility is unconfirmed. Spec §8 Tier 1.",
  },
  {
    pattern: new RegExp(String.raw`\bWBE\s*Canada${CERT_ASSERTION}`, "gi"),
    reason: "WBE Canada is not yet awarded. Spec §8 Tier 1.",
  },
  {
    pattern: /\bGSA\s*(?:MAS|Schedule)\s*holder\b/gi,
    reason: "No GSA vehicle is held. Spec §8 Tier 3.",
  },
];

export function findForbiddenClaims(text) {
  const hits = [];
  for (const { pattern, reason } of FORBIDDEN_CLAIMS) {
    // Patterns are global; reset lastIndex so repeated calls are stateless.
    pattern.lastIndex = 0;
    let m;
    while ((m = pattern.exec(text)) !== null) {
      hits.push({ match: m[0], reason, index: m.index });
      if (m.index === pattern.lastIndex) pattern.lastIndex += 1;
    }
  }
  return hits;
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test tests/claims.test.mjs`
Expected: PASS — 8 tests passing

- [ ] **Step 5: Write the scanner script**

Create `scripts/check-claims.mjs`:

```javascript
#!/usr/bin/env node
// Fails the build if forbidden certification language reaches the site.
// Run via `yarn check:claims`, and as part of `yarn check`.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { findForbiddenClaims } from "../src/content/claims.mjs";

const ROOTS = ["src/content", "src/data", "src/pages", "src/components"];
const EXTS = [".js", ".jsx", ".mjs", ".md"];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (EXTS.some((e) => full.endsWith(e))) out.push(full);
  }
  return out;
}

function lineOf(text, index) {
  return text.slice(0, index).split("\n").length;
}

let failures = 0;
for (const root of ROOTS) {
  for (const file of walk(root)) {
    // The claims registry itself contains the forbidden strings by design.
    if (file.includes("claims.mjs")) continue;
    const text = readFileSync(file, "utf8");
    for (const hit of findForbiddenClaims(text)) {
      failures += 1;
      console.error(
        `${relative(process.cwd(), file)}:${lineOf(text, hit.index)}  ` +
          `"${hit.match}"\n    ${hit.reason}\n`
      );
    }
  }
}

if (failures > 0) {
  console.error(`\n${failures} forbidden claim(s) found. See spec §2 and §8.`);
  process.exit(1);
}
console.log("Claims guard passed: no unearned certification language found.");
```

- [ ] **Step 6: Wire it into the scripts block**

In `package.json`:

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "node --test tests/",
    "check:claims": "node scripts/check-claims.mjs",
    "check": "yarn test && yarn check:claims && yarn lint"
  },
```

- [ ] **Step 7: Run the scanner and observe it catching the live violation**

Run: `yarn check:claims`
Expected: FAIL, exit 1, reporting `src/components/seo/index.js` for `"SOC 2"` and `"ISO 27001"` in the `defaultKeywords` array. **Do not fix it here** — Task 3 fixes it. Confirming the failure is the point.

- [ ] **Step 8: Commit**

```bash
git add package.json src/content/claims.mjs scripts/check-claims.mjs tests/claims.test.mjs
git commit -m "feat(content): add claims guard that fails build on unearned certification language"
```

---

### Task 3: Purge implied certification claims from the Seo defaults

Closes spec §12 item 2 on our own property and makes `yarn check:claims` pass.

**Files:**
- Modify: `src/components/seo/index.js:23-69` (defaultKeywords array)

**Interfaces:**
- Consumes: nothing
- Produces: unchanged `Seo` component API

- [ ] **Step 1: Confirm the guard currently fails**

Run: `yarn check:claims`
Expected: FAIL, naming `src/components/seo/index.js`

- [ ] **Step 2: Replace the defaultKeywords array**

In `src/components/seo/index.js`, replace lines 22-69 (the comment and the whole `defaultKeywords` array) with:

```javascript
  // Site-wide keyword floor. Deliberately short: Google has ignored the
  // keywords meta since 2009, and every term here is also a claim we may be
  // asked to substantiate in a bid. No certification names. See spec §2.
  const defaultKeywords = [
    "Round Digital",
    "IT services",
    "AI enablement",
    "AI governance",
    "custom software development",
    "cloud engineering",
    "cybersecurity services",
    "data engineering",
    "survey research",
    "public opinion research",
    "program evaluation",
    "IT staff augmentation",
    "technical training",
    "workforce development",
    "women-owned technology company",
    "small business IT contractor",
    "Mississauga",
    "Ontario",
    "Noida",
  ];
```

- [ ] **Step 3: Remove the dead meta tags**

In the same file, delete these lines — no search engine consumes them, and `coverage`/`distribution`/`rating` are 1990s-era cruft:

```
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
```

- [ ] **Step 4: Run the guard to verify it passes**

Run: `yarn check:claims`
Expected: PASS — "Claims guard passed"

- [ ] **Step 5: Verify the site still builds**

Run: `yarn build`
Expected: build completes with no new errors

- [ ] **Step 6: Commit**

```bash
git add src/components/seo/index.js
git commit -m "fix(seo): remove implied SOC 2 and ISO 27001 claims from site-wide keywords"
```

---

### Task 4: Organization JSON-LD built from verified facts

The Organization schema currently hardcodes a 2015 founding date, three addresses and an eight-service offer list. Move it behind a tested pure function so it can never drift from `facts.mjs`.

**Files:**
- Create: `src/content/organization.mjs`
- Create: `tests/organization.test.mjs`
- Modify: `src/components/seo/index.js:160-275` (the inline Organization script)

**Interfaces:**
- Consumes: `FACTS` from `src/content/facts.mjs`
- Produces: `buildOrganizationSchema({ baseUrl, description }) -> object`

- [ ] **Step 1: Write the failing test**

Create `tests/organization.test.mjs`:

```javascript
import { test } from "node:test";
import assert from "node:assert/strict";
import { buildOrganizationSchema } from "../src/content/organization.mjs";

const schema = buildOrganizationSchema({
  baseUrl: "https://www.round.digital",
  description: "Test description",
});

test("declares itself as a schema.org Organization", () => {
  assert.equal(schema["@context"], "https://schema.org");
  assert.equal(schema["@type"], "Organization");
  assert.equal(schema.name, "Round Digital");
});

test("publishes only delivery locations as postal addresses", () => {
  const cities = schema.address.map((a) => a.addressLocality);
  assert.deepEqual(cities.sort(), ["Mississauga", "Noida"]);
});

test("does not publish the Allen TX or Pune addresses", () => {
  const serialized = JSON.stringify(schema);
  assert.doesNotMatch(serialized, /Allen/);
  assert.doesNotMatch(serialized, /Pune/);
});

test("founding date matches the corroborated 2017, not 2015", () => {
  assert.equal(schema.foundingDate, "2017");
});

test("employee count comes from the facts module", () => {
  assert.equal(schema.numberOfEmployees.value, "20+");
});

test("knowsAbout covers all five pillars", () => {
  const known = schema.knowsAbout.join(" ");
  for (const pillar of ["AI", "Software", "Survey", "Staff", "Training"]) {
    assert.match(known, new RegExp(pillar, "i"), `missing pillar: ${pillar}`);
  }
});

test("carries no hasCredential entry while no certification is held", () => {
  assert.equal(schema.hasCredential, undefined);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/organization.test.mjs`
Expected: FAIL — `Cannot find module '../src/content/organization.mjs'`

- [ ] **Step 3: Create the module**

Create `src/content/organization.mjs`:

```javascript
import { FACTS } from "./facts.mjs";

const POSTAL = {
  Mississauga: {
    streetAddress: "160B - 110 Matheson Blvd W",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: "L5M 6B8",
    addressCountry: "CA",
  },
  Noida: {
    addressLocality: "Noida",
    addressRegion: "UP",
    addressCountry: "IN",
  },
};

// Only delivery locations become published postal addresses. A registered
// agent address is not a place of business and must not read as one.
export function buildOrganizationSchema({ baseUrl, description }) {
  const address = FACTS.locations
    .filter((l) => l.status === "delivery")
    .map((l) => ({ "@type": "PostalAddress", ...POSTAL[l.city] }))
    .filter((a) => a.addressLocality);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: FACTS.legalName,
    url: baseUrl,
    logo: `${baseUrl}/favicon.svg`,
    description,
    address,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-905-407-5009",
      contactType: "Customer Service",
      email: "info@rounddigital.co",
      areaServed: ["CA", "US", "IN"],
      availableLanguage: "English",
    },
    sameAs: ["https://www.linkedin.com/company/rounddigital/"],
    foundingDate: "2017",
    numberOfEmployees: { "@type": "QuantitativeValue", value: FACTS.employeeCount },
    knowsAbout: [
      "Artificial Intelligence Enablement",
      "AI Governance",
      "Custom Software Engineering",
      "Cloud Engineering",
      "Cybersecurity",
      "Data Engineering",
      "Survey Research and Public Opinion Polling",
      "Program Evaluation",
      "IT Staff Augmentation",
      "Technical Training and Workforce Development",
    ],
  };
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test tests/organization.test.mjs`
Expected: PASS — 7 tests passing

- [ ] **Step 5: Wire it into the Seo component**

In `src/components/seo/index.js`, add to the imports at the top:

```javascript
import { buildOrganizationSchema } from "@/content/organization.mjs";
```

Then replace the entire inline Organization `<script>` block (from `{/* Structured Data - JSON-LD */}` through its closing `/>`, currently lines 159-275) with:

```jsx
      {/* Structured Data — Organization, built from the verified-facts module */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildOrganizationSchema({ baseUrl, description: defaultDescription })
          ),
        }}
      />
```

- [ ] **Step 6: Remove the stale geo meta tags**

Still in `src/components/seo/index.js`, the `geo.*` and `ICBM` tags hardcode Mississauga coordinates on every page including US-targeted ones. Delete these four lines:

```
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Mississauga, Ontario" />
      <meta name="geo.position" content="43.5890;-79.6441" />
      <meta name="ICBM" content="43.5890, -79.6441" />
```

- [ ] **Step 7: Verify the build and the rendered schema**

Run: `yarn build && yarn start`
Then: open `http://localhost:3000`, view source, find the `application/ld+json` block.
Expected: two addresses (Mississauga, Noida), `"foundingDate":"2017"`, no Allen, no Pune.

- [ ] **Step 8: Commit**

```bash
git add src/content/organization.mjs tests/organization.test.mjs src/components/seo/index.js
git commit -m "fix(seo): build Organization schema from verified facts, drop unconfirmed addresses"
```

---

### Task 5: WCAG AA accent tokens

`--rd-accent: #ff0000` on `--rd-bg: #251c1e` measures 4.21:1 — it fails AA for normal text and it is used for eyebrow text throughout the site. Add a separate text-safe accent rather than changing the brand fill colour.

**Files:**
- Create: `src/content/contrast.mjs`
- Create: `tests/contrast.test.mjs`
- Modify: `src/styles/globals.css:145-174` (both theme token blocks)

**Interfaces:**
- Consumes: nothing
- Produces: `relativeLuminance(hex) -> number`, `contrastRatio(fgHex, bgHex) -> number`, `TOKENS` (object keyed by theme)

- [ ] **Step 1: Write the failing test**

Create `tests/contrast.test.mjs`:

```javascript
import { test } from "node:test";
import assert from "node:assert/strict";
import { contrastRatio, TOKENS } from "../src/content/contrast.mjs";

test("contrastRatio matches known reference values", () => {
  // Black on white is the canonical 21:1.
  assert.ok(Math.abs(contrastRatio("#000000", "#ffffff") - 21) < 0.01);
  // A colour against itself is 1:1.
  assert.ok(Math.abs(contrastRatio("#251c1e", "#251c1e") - 1) < 0.001);
});

test("documents that the current pure-red accent fails AA on the dark bg", () => {
  const ratio = contrastRatio("#ff0000", "#251c1e");
  assert.ok(ratio < 4.5, `expected the known failure, got ${ratio}`);
});

test("the text accent passes AA for normal text in both themes", () => {
  for (const [name, t] of Object.entries(TOKENS)) {
    const ratio = contrastRatio(t.accentText, t.bg);
    assert.ok(ratio >= 4.5, `${name}: accentText is ${ratio.toFixed(2)}:1, need 4.5`);
  }
});

test("body text passes AA in both themes", () => {
  for (const [name, t] of Object.entries(TOKENS)) {
    assert.ok(
      contrastRatio(t.text, t.bg) >= 4.5,
      `${name}: primary text fails`
    );
    assert.ok(
      contrastRatio(t.text2, t.bg) >= 4.5,
      `${name}: secondary text fails`
    );
  }
});

test("the accent fill still passes 3:1 for large text and UI boundaries", () => {
  for (const [name, t] of Object.entries(TOKENS)) {
    assert.ok(
      contrastRatio(t.accent, t.bg) >= 3,
      `${name}: accent fill fails the 3:1 non-text threshold`
    );
  }
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/contrast.test.mjs`
Expected: FAIL — `Cannot find module '../src/content/contrast.mjs'`

- [ ] **Step 3: Create the contrast module**

Create `src/content/contrast.mjs`:

```javascript
// WCAG 2.1 relative luminance and contrast ratio.
// https://www.w3.org/TR/WCAG21/#dfn-relative-luminance

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ];
}

export function relativeLuminance(hex) {
  const [r, g, b] = hexToRgb(hex).map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(fgHex, bgHex) {
  const a = relativeLuminance(fgHex);
  const b = relativeLuminance(bgHex);
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
}

// Mirrors the CSS custom properties in globals.css. Kept in sync by the
// tests above — if you change a colour in CSS, change it here too or the
// contrast suite stops protecting you.
export const TOKENS = {
  dark: {
    bg: "#251c1e",
    text: "#ffffff",
    text2: "#dad9d9",
    accent: "#ff0000",      // fills, rules, focus rings — 3:1 threshold
    accentText: "#ff6b6b",  // any accent-coloured text — 4.5:1 threshold
  },
  light: {
    bg: "#ffffff",
    text: "#0d0305",
    text2: "#554e50",
    accent: "#d40000",
    accentText: "#c00000",
  },
};
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test tests/contrast.test.mjs`
Expected: PASS — 5 tests passing. `#ff6b6b` on `#251c1e` is 6.06:1; `#c00000` on `#ffffff` is 6.48:1.

- [ ] **Step 5: Add the token to CSS**

In `src/styles/globals.css`, in the dark block (after line 145 `--rd-accent: #ff0000;`) add:

```css
  --rd-accent-text: #ff6b6b;
```

In the light-theme block (after line 165) add:

```css
  --rd-accent: #d40000;
  --rd-accent-text: #c00000;
```

- [ ] **Step 6: Switch accent-coloured text to the new token**

Every place the accent is used as a **text** colour must move to `--rd-accent-text`. Fills, borders, box-shadows and focus outlines stay on `--rd-accent`.

Run this to find the text usages:

```bash
grep -rn "color: \"var(--rd-accent)\"\|color: var(--rd-accent)" src/
```

Replace each `color:` occurrence (and only `color:`) with `var(--rd-accent-text)`. Known sites include `src/pages/index.js` (hero eyebrow, industry tag, technology tag, FAQ eyebrow, WhyUs tag, trust bar separator) and `src/styles/globals.css:206`.

- [ ] **Step 7: Verify visually in both themes**

Run: `yarn dev`
Then: open `http://localhost:3000`, toggle the theme, confirm eyebrow text is legible and no longer pure saturated red on dark.

- [ ] **Step 8: Commit**

```bash
git add src/content/contrast.mjs tests/contrast.test.mjs src/styles/globals.css src/pages/index.js
git commit -m "fix(a11y): add WCAG AA text accent token, fix 4.21:1 eyebrow contrast failure"
```

---

### Task 6: Credentials module and CredentialGrid

The site must be able to talk about certifications honestly — showing the roadmap without claiming an award.

**Files:**
- Create: `src/content/credentials.mjs`
- Create: `src/components/rd/gov/CredentialGrid.jsx`
- Create: `tests/credentials.test.mjs`

**Interfaces:**
- Consumes: nothing
- Produces: `CREDENTIALS` (array of `{ id, name, body, status, targetQuarter?, jurisdiction }`), `byStatus(status) -> array`, `hasAnyEarned() -> boolean`. Status is one of `"earned" | "in-progress" | "planned"`.
- Component: `<CredentialGrid status="in-progress" heading="..." />`

- [ ] **Step 1: Write the failing test**

Create `tests/credentials.test.mjs`:

```javascript
import { test } from "node:test";
import assert from "node:assert/strict";
import { CREDENTIALS, byStatus, hasAnyEarned } from "../src/content/credentials.mjs";

const VALID = ["earned", "in-progress", "planned"];

test("every credential has a valid status", () => {
  for (const c of CREDENTIALS) {
    assert.ok(VALID.includes(c.status), `${c.id} has bad status ${c.status}`);
  }
});

test("nothing is earned yet — the site must not imply otherwise", () => {
  assert.equal(hasAnyEarned(), false);
  assert.equal(byStatus("earned").length, 0);
});

test("every non-earned credential states a target quarter", () => {
  for (const c of CREDENTIALS.filter((x) => x.status !== "earned")) {
    assert.match(c.targetQuarter, /^Q[1-4] \d{4}$/, `${c.id} needs a target`);
  }
});

test("no US-citizenship-gated program is listed", () => {
  const ids = CREDENTIALS.map((c) => c.id).join(" ");
  for (const closed of ["wosb", "edwosb", "8a", "hubzone", "sdb"]) {
    assert.doesNotMatch(ids, new RegExp(closed, "i"), `${closed} is ineligible`);
  }
});

test("the Tier 1 credentials from the spec are present", () => {
  const ids = CREDENTIALS.map((c) => c.id);
  for (const id of ["wbe-canada", "weconnect", "iso-9001", "iso-27001"]) {
    assert.ok(ids.includes(id), `missing ${id}`);
  }
});

test("byStatus filters correctly", () => {
  assert.ok(byStatus("in-progress").every((c) => c.status === "in-progress"));
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/credentials.test.mjs`
Expected: FAIL — module not found

- [ ] **Step 3: Create the credentials module**

Create `src/content/credentials.mjs`:

```javascript
// Certification roadmap. See spec §8.
//
// status: "earned"      — awarded, evidence on file, safe to display as held
//         "in-progress" — application filed or audit underway
//         "planned"     — committed on the roadmap, not yet started
//
// Nothing is "earned" today. When one is awarded, flip the status and add an
// `awardedOn` date — the UI reads the status and nothing else.

export const CREDENTIALS = [
  {
    id: "wbe-canada",
    name: "WBE Canada",
    body: "Women Business Enterprise certification for Canadian federal and corporate supplier diversity programs.",
    status: "planned",
    targetQuarter: "Q4 2026",
    jurisdiction: "Canada",
  },
  {
    id: "weconnect",
    name: "WEConnect International",
    body: "Global women-owned business certification, opening corporate supplier diversity programs across Asia-Pacific and the United States.",
    status: "planned",
    targetQuarter: "Q4 2026",
    jurisdiction: "Global",
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    body: "Quality management system certification. Led by our founder, whose twenty-year background is in audit and quality assurance.",
    status: "planned",
    targetQuarter: "Q1 2027",
    jurisdiction: "Global",
  },
  {
    id: "iso-27001",
    name: "ISO/IEC 27001:2022",
    body: "Information security management system certification covering all delivery locations.",
    status: "planned",
    targetQuarter: "Q2 2027",
    jurisdiction: "Global",
  },
  {
    id: "iso-42001",
    name: "ISO/IEC 42001:2023",
    body: "Artificial intelligence management system — the first AI governance standard. Few services firms hold it.",
    status: "planned",
    targetQuarter: "Q3 2027",
    jurisdiction: "Global",
  },
  {
    id: "soc-2",
    name: "SOC 2 Type II",
    body: "Independent attestation over security, availability and confidentiality controls for our platform products.",
    status: "planned",
    targetQuarter: "Q3 2027",
    jurisdiction: "United States",
  },
];

export function byStatus(status) {
  return CREDENTIALS.filter((c) => c.status === status);
}

export function hasAnyEarned() {
  return CREDENTIALS.some((c) => c.status === "earned");
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test tests/credentials.test.mjs`
Expected: PASS — 6 tests passing

- [ ] **Step 5: Build the component**

Create `src/components/rd/gov/CredentialGrid.jsx`:

```jsx
import { CREDENTIALS } from "@/content/credentials.mjs";

const LABEL = {
  earned: "Held",
  "in-progress": "In progress",
  planned: "On roadmap",
};

/**
 * Renders the certification roadmap honestly. A credential only reads as held
 * when its status is "earned"; everything else is visibly labelled with its
 * target. See spec §8 and §11.
 */
export default function CredentialGrid({ status, heading, intro }) {
  const items = status ? CREDENTIALS.filter((c) => c.status === status) : CREDENTIALS;
  if (items.length === 0) return null;

  return (
    <section style={{ padding: "72px 5%" }}>
      <div className="rd-container">
        {heading ? (
          <h2 style={{ margin: "0 0 12px", font: "700 clamp(28px,2.4vw,40px)/1.15 var(--rd-font-display)" }}>
            {heading}
          </h2>
        ) : null}
        {intro ? (
          <p style={{ margin: "0 0 40px", maxWidth: 680, fontSize: 18, color: "var(--rd-text-2)" }}>
            {intro}
          </p>
        ) : null}
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 16,
          }}
        >
          {items.map((c) => (
            <li
              key={c.id}
              style={{
                border: "1px solid var(--rd-border)",
                borderRadius: 12,
                padding: "24px 22px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                <span style={{ font: "700 12px var(--rd-font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--rd-accent-text)" }}>
                  {LABEL[c.status]}
                </span>
                {c.status !== "earned" ? (
                  <span style={{ fontSize: 13, color: "var(--rd-text-3)" }}>{c.targetQuarter}</span>
                ) : null}
              </div>
              <h3 style={{ margin: "0 0 8px", font: "700 18px var(--rd-font-display)" }}>{c.name}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--rd-text-2)" }}>{c.body}</p>
              <p style={{ margin: "12px 0 0", fontSize: 13, color: "var(--rd-text-3)" }}>{c.jurisdiction}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Add the font tokens the component references**

In `src/styles/globals.css`, add to the `:root`-level `.rd` token block (alongside the colours, around line 145):

```css
  --rd-font-display: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
  --rd-font-body: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
  --rd-font-mono: 'Space Mono', ui-monospace, monospace;
```

This is the spec §10 typography shift: display type moves off Space Mono, and mono retreats to labels, codes and metrics where it earns its keep.

- [ ] **Step 7: Run the full check**

Run: `yarn check`
Expected: all tests pass, claims guard passes, lint passes

- [ ] **Step 8: Commit**

```bash
git add src/content/credentials.mjs src/components/rd/gov/CredentialGrid.jsx tests/credentials.test.mjs src/styles/globals.css
git commit -m "feat(gov): add credentials roadmap module and CredentialGrid component"
```

---

### Task 7: NAICS/PSC module and NaicsTable

**Files:**
- Create: `src/content/naics.mjs`
- Create: `src/components/rd/gov/NaicsTable.jsx`
- Create: `tests/naics.test.mjs`

**Interfaces:**
- Consumes: nothing
- Produces: `PILLARS` (array of `{ id, name, primaryNaics, secondaryNaics, psc, sizeStandard }`), `allNaicsCodes() -> string[]`
- Component: `<NaicsTable />`

- [ ] **Step 1: Write the failing test**

Create `tests/naics.test.mjs`:

```javascript
import { test } from "node:test";
import assert from "node:assert/strict";
import { PILLARS, allNaicsCodes } from "../src/content/naics.mjs";

test("all five pillars from the spec are present", () => {
  assert.equal(PILLARS.length, 5);
  const ids = PILLARS.map((p) => p.id).sort();
  assert.deepEqual(ids, [
    "ai-enablement",
    "it-services",
    "research-data",
    "staffing",
    "training",
  ]);
});

test("every NAICS code is six digits", () => {
  for (const code of allNaicsCodes()) {
    assert.match(code, /^\d{6}$/, `bad NAICS code: ${code}`);
  }
});

test("541910 is mapped — it is the survey research code the spec prioritises", () => {
  assert.ok(allNaicsCodes().includes("541910"));
});

test("every pillar declares a primary code and at least one PSC", () => {
  for (const p of PILLARS) {
    assert.match(p.primaryNaics.code, /^\d{6}$/);
    assert.ok(p.psc.length > 0, `${p.id} has no PSC codes`);
  }
});

test("no duplicate primary codes across pillars", () => {
  const primaries = PILLARS.map((p) => p.primaryNaics.code);
  assert.equal(new Set(primaries).size, primaries.length);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/naics.test.mjs`
Expected: FAIL — module not found

- [ ] **Step 3: Create the module**

Create `src/content/naics.mjs`:

```javascript
// NAICS and PSC mapping for the five pillars. See spec §5.
//
// sizeStandard figures are the SBA receipts-based standards and MUST be
// re-verified against the current SBA size standards table before they are
// quoted in a bid. They are shown on the site as context, not as a claim.

export const PILLARS = [
  {
    id: "it-services",
    name: "IT Services",
    primaryNaics: { code: "541512", label: "Computer Systems Design Services" },
    secondaryNaics: ["541511", "541513", "541519"],
    psc: ["D302", "D307", "D399"],
    sizeStandard: "$34.0M",
  },
  {
    id: "ai-enablement",
    name: "AI Enablement",
    primaryNaics: { code: "541511", label: "Custom Computer Programming Services" },
    secondaryNaics: ["541690", "518210"],
    psc: ["D399", "R425"],
    sizeStandard: "$34.0M",
  },
  {
    id: "research-data",
    name: "Research & Data",
    primaryNaics: {
      code: "541910",
      label: "Marketing Research and Public Opinion Polling",
    },
    secondaryNaics: ["541613", "541618", "541990"],
    psc: ["B505", "R701"],
    sizeStandard: "$25.0M",
  },
  {
    id: "staffing",
    name: "Staffing",
    primaryNaics: { code: "561320", label: "Temporary Help Services" },
    secondaryNaics: ["561311", "561312", "541612"],
    psc: ["R497", "R408"],
    sizeStandard: "$34.0M",
  },
  {
    id: "training",
    name: "Training",
    primaryNaics: {
      code: "611430",
      label: "Professional and Management Development Training",
    },
    secondaryNaics: ["611420", "611710"],
    psc: ["U008", "U012"],
    sizeStandard: "$16.5M",
  },
];

export function allNaicsCodes() {
  return PILLARS.flatMap((p) => [p.primaryNaics.code, ...p.secondaryNaics]);
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test tests/naics.test.mjs`
Expected: PASS — 5 tests passing

- [ ] **Step 5: Build the component**

Create `src/components/rd/gov/NaicsTable.jsx`:

```jsx
import { PILLARS } from "@/content/naics.mjs";

const cell = { padding: "14px 16px", borderBottom: "1px solid var(--rd-divider)", verticalAlign: "top" };
const head = { ...cell, font: "700 12px var(--rd-font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--rd-text-3)", textAlign: "left" };

export default function NaicsTable() {
  return (
    <div style={{ overflowX: "auto", border: "1px solid var(--rd-border)", borderRadius: 12 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720, fontSize: 15 }}>
        <caption className="sr-only">
          NAICS and PSC codes by capability, with the applicable SBA size standard
        </caption>
        <thead>
          <tr>
            <th scope="col" style={head}>Capability</th>
            <th scope="col" style={head}>Primary NAICS</th>
            <th scope="col" style={head}>Secondary</th>
            <th scope="col" style={head}>PSC</th>
            <th scope="col" style={head}>Size standard</th>
          </tr>
        </thead>
        <tbody>
          {PILLARS.map((p) => (
            <tr key={p.id}>
              <th scope="row" style={{ ...cell, fontWeight: 600, textAlign: "left" }}>{p.name}</th>
              <td style={cell}>
                <span style={{ font: `700 15px var(--rd-font-mono)` }}>{p.primaryNaics.code}</span>
                <br />
                <span style={{ color: "var(--rd-text-3)", fontSize: 14 }}>{p.primaryNaics.label}</span>
              </td>
              <td style={{ ...cell, font: "15px var(--rd-font-mono)", color: "var(--rd-text-2)" }}>
                {p.secondaryNaics.join(" · ")}
              </td>
              <td style={{ ...cell, font: "15px var(--rd-font-mono)", color: "var(--rd-text-2)" }}>
                {p.psc.join(" · ")}
              </td>
              <td style={{ ...cell, font: "15px var(--rd-font-mono)", color: "var(--rd-text-2)" }}>
                {p.sizeStandard}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

- [ ] **Step 6: Add the screen-reader utility class**

In `src/styles/globals.css`, append:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

- [ ] **Step 7: Run the checks**

Run: `yarn check`
Expected: PASS

- [ ] **Step 8: Commit**

```bash
git add src/content/naics.mjs src/components/rd/gov/NaicsTable.jsx tests/naics.test.mjs src/styles/globals.css
git commit -m "feat(gov): add NAICS/PSC pillar mapping and accessible NaicsTable"
```

---

### Task 8: Past performance module and card

**Files:**
- Create: `src/content/past-performance.mjs`
- Create: `src/components/rd/gov/PastPerformanceCard.jsx`
- Create: `tests/past-performance.test.mjs`

**Interfaces:**
- Consumes: `VERIFIED_FACTS` from `src/content/facts.mjs`
- Produces: `PAST_PERFORMANCE` (array of `{ id, client, challenge, approach, outcome, period, factId }`)
- Component: `<PastPerformanceCard entry={entry} />`

- [ ] **Step 1: Write the failing test**

Create `tests/past-performance.test.mjs`:

```javascript
import { test } from "node:test";
import assert from "node:assert/strict";
import { PAST_PERFORMANCE } from "../src/content/past-performance.mjs";
import { getFact } from "../src/content/facts.mjs";

test("federal minimum of three references is met", () => {
  assert.ok(PAST_PERFORMANCE.length >= 3, "need at least three references");
});

test("every entry has the four evaluated fields plus a period", () => {
  for (const e of PAST_PERFORMANCE) {
    for (const field of ["client", "challenge", "approach", "outcome", "period"]) {
      assert.ok(e[field], `${e.id} is missing ${field}`);
    }
  }
});

test("every entry is anchored to a verified fact", () => {
  for (const e of PAST_PERFORMANCE) {
    assert.ok(getFact(e.factId), `${e.id} references unknown fact ${e.factId}`);
  }
});

test("entry ids are unique", () => {
  const ids = PAST_PERFORMANCE.map((e) => e.id);
  assert.equal(new Set(ids).size, ids.length);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/past-performance.test.mjs`
Expected: FAIL — module not found

- [ ] **Step 3: Create the module**

Create `src/content/past-performance.mjs`:

```javascript
// Past performance references, in the order an evaluator reads them:
// challenge, approach, outcome, period. See spec §11.
//
// Every entry must anchor to an id in facts.mjs. If it cannot be corroborated,
// it does not go here.

export const PAST_PERFORMANCE = [
  {
    id: "perfectum",
    client: "Perfectum.ai",
    factId: "perfectum-platform",
    challenge:
      "Training providers needed to author, deliver and license courses from one system, with the standards conformance corporate and public-sector buyers require.",
    approach:
      "Designed and built a multi-tenant learning platform: AI-assisted course authoring, live cohort delivery, SCORM 1.2, SCORM 2004 and xAPI conformance, Stripe multi-party commerce, SSO and SCIM provisioning, and a two-sided licensing marketplace.",
    outcome:
      "Operating platform serving 1,200+ academies, with white-label deployment and rights management in production.",
    period: "2023 – present",
  },
  {
    id: "shipcarte",
    client: "ShipCarte",
    factId: "shipcarte-platform",
    challenge:
      "Shippers needed rate comparison, booking and tracking across many carriers and modes, without integrating each carrier separately.",
    approach:
      "Delivered a multi-carrier logistics platform covering LTL, courier, air and ocean, with rate aggregation, shipment tracking, automated bills of lading and customs declarations, and marketplace integrations to Shopify, Amazon, WooCommerce and eBay.",
    outcome:
      "Platform in continuous commercial operation since 2019, serving businesses across Canada and the United States.",
    period: "2019 – present",
  },
  {
    id: "pragra",
    client: "Pragra",
    factId: "forbes-2024",
    challenge:
      "Career changers and employers needed technical training that produced job-ready practitioners rather than course completions.",
    approach:
      "Built and ran part-time technical programmes across Cloud, DevOps, QA, business analysis, data science, machine learning, web and iOS, delivered in Mississauga, Noida and online.",
    outcome:
      "Named to Forbes Canada's Best Startup Employers 2024, a list Forbes states accepts no payment for placement.",
    period: "2017 – present",
  },
];
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test tests/past-performance.test.mjs`
Expected: PASS — 4 tests passing

- [ ] **Step 5: Build the component**

Create `src/components/rd/gov/PastPerformanceCard.jsx`:

```jsx
import { getFact } from "@/content/facts.mjs";

const ROWS = [
  ["Challenge", "challenge"],
  ["Approach", "approach"],
  ["Outcome", "outcome"],
];

export default function PastPerformanceCard({ entry }) {
  const fact = getFact(entry.factId);
  return (
    <article style={{ border: "1px solid var(--rd-border)", borderRadius: 12, padding: "28px 26px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 18 }}>
        <h3 style={{ margin: 0, font: "700 22px var(--rd-font-display)" }}>{entry.client}</h3>
        <span style={{ font: "13px var(--rd-font-mono)", color: "var(--rd-text-3)" }}>{entry.period}</span>
      </header>
      <dl style={{ margin: 0 }}>
        {ROWS.map(([label, key]) => (
          <div key={key} style={{ marginBottom: 16 }}>
            <dt style={{ font: "700 12px var(--rd-font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--rd-accent-text)", marginBottom: 6 }}>
              {label}
            </dt>
            <dd style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--rd-text-2)" }}>
              {entry[key]}
            </dd>
          </div>
        ))}
      </dl>
      {fact ? (
        <p style={{ margin: "18px 0 0", paddingTop: 14, borderTop: "1px solid var(--rd-divider)", fontSize: 13, color: "var(--rd-text-3)" }}>
          Verifiable at{" "}
          <a href={fact.source} rel="noopener noreferrer" target="_blank" style={{ color: "var(--rd-accent-text)" }}>
            {new URL(fact.source).hostname}
          </a>
        </p>
      ) : null}
    </article>
  );
}
```

- [ ] **Step 6: Run the checks**

Run: `yarn check`
Expected: PASS

- [ ] **Step 7: Commit**

```bash
git add src/content/past-performance.mjs src/components/rd/gov/PastPerformanceCard.jsx tests/past-performance.test.mjs
git commit -m "feat(gov): add past performance module with source-anchored references"
```

---

### Task 9: The /government hub page

**Files:**
- Create: `src/pages/government/index.jsx`
- Modify: `public/sitemap.xml` (add the route; Task 11 replaces this with generation)

**Interfaces:**
- Consumes: `PILLARS`, `CREDENTIALS`, `PAST_PERFORMANCE`, `FACTS`, `NaicsTable`, `CredentialGrid`, `PastPerformanceCard`
- Produces: the route `/government`

- [ ] **Step 1: Create the page**

Create `src/pages/government/index.jsx`:

```jsx
import Link from "next/link";
import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { RdButton } from "@/components/rd/ui";
import NaicsTable from "@/components/rd/gov/NaicsTable";
import CredentialGrid from "@/components/rd/gov/CredentialGrid";
import PastPerformanceCard from "@/components/rd/gov/PastPerformanceCard";
import { PAST_PERFORMANCE } from "@/content/past-performance.mjs";

const wrap = { maxWidth: 1180, margin: "0 auto" };

function Hero() {
  return (
    <section style={{ padding: "88px 5% 64px" }}>
      <div style={wrap}>
        <p style={{ margin: "0 0 18px", font: "700 13px var(--rd-font-mono)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--rd-accent-text)" }}>
          Public sector
        </p>
        <h1 style={{ margin: "0 0 24px", maxWidth: 880, font: "700 clamp(38px,4vw,64px)/1.1 var(--rd-font-display)", letterSpacing: "-0.015em" }}>
          A small business that behaves like a large one
        </h1>
        <p style={{ margin: "0 0 32px", maxWidth: 640, fontSize: 20, lineHeight: 1.6, color: "var(--rd-text-2)" }}>
          Round Digital is a women-owned technology and workforce services firm. We build
          the system, staff it, train the people who run it, and measure whether it worked
          — so the capability is still there after we leave.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <RdButton href="/government/capability-statement">Capability statement</RdButton>
          <RdButton href="/government/teaming" variant="ghost">Teaming enquiries</RdButton>
        </div>
      </div>
    </section>
  );
}

function Codes() {
  return (
    <section style={{ padding: "64px 5%" }}>
      <div style={wrap}>
        <h2 style={{ margin: "0 0 12px", font: "700 clamp(28px,2.4vw,40px)/1.15 var(--rd-font-display)" }}>
          Codes and classifications
        </h2>
        <p style={{ margin: "0 0 32px", maxWidth: 680, fontSize: 18, color: "var(--rd-text-2)" }}>
          We are a small business under every size standard applicable to the codes below.
          Verify current standards against the SBA table before relying on them in a
          solicitation response.
        </p>
        <NaicsTable />
      </div>
    </section>
  );
}

function Performance() {
  return (
    <section style={{ padding: "64px 5%" }}>
      <div style={wrap}>
        <h2 style={{ margin: "0 0 12px", font: "700 clamp(28px,2.4vw,40px)/1.15 var(--rd-font-display)" }}>
          Past performance
        </h2>
        <p style={{ margin: "0 0 32px", maxWidth: 680, fontSize: 18, color: "var(--rd-text-2)" }}>
          Every reference below is independently verifiable. We link the source.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 20 }}>
          {PAST_PERFORMANCE.map((e) => (
            <PastPerformanceCard key={e.id} entry={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Honesty() {
  return (
    <section style={{ padding: "64px 5%" }}>
      <div style={{ ...wrap, border: "1px solid var(--rd-border)", borderRadius: 12, padding: "40px 36px" }}>
        <h2 style={{ margin: "0 0 14px", font: "700 24px var(--rd-font-display)" }}>
          What we do not claim
        </h2>
        <p style={{ margin: "0 0 12px", fontSize: 17, lineHeight: 1.7, color: "var(--rd-text-2)" }}>
          We hold no third-party certifications today. The roadmap below is what we are
          working toward and by when. We would rather tell you that plainly than have you
          discover it during evaluation.
        </p>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "var(--rd-text-2)" }}>
          We are also not eligible for US programs requiring citizen ownership. Where a
          solicitation needs that status, we are a subcontractor, not a prime —{" "}
          <Link href="/government/teaming" style={{ color: "var(--rd-accent-text)", fontWeight: 600 }}>
            and a good one
          </Link>.
        </p>
      </div>
    </section>
  );
}

export default function GovernmentHub() {
  return (
    <RdLayout>
      <Seo
        title="Public Sector Capabilities"
        description="Round Digital is a women-owned technology and workforce services firm serving government buyers in Canada and the United States. NAICS 541512, 541511, 541910, 561320, 611430."
        keywords="women owned technology company, small business IT contractor, NAICS 541910 contractor, public sector IT services, government training provider"
      />
      <Hero />
      <Codes />
      <Performance />
      <CredentialGrid
        heading="Certification roadmap"
        intro="Status and target date for every credential we are pursuing. Nothing here is claimed as held."
      />
      <Honesty />
    </RdLayout>
  );
}
```

- [ ] **Step 2: Verify the route renders**

Run: `yarn dev`
Then: open `http://localhost:3000/government`
Expected: hero, NAICS table, three past-performance cards, six roadmap credentials each labelled "On roadmap" with a target quarter, and the honesty panel.

- [ ] **Step 3: Verify the claims guard still passes on the new page**

Run: `yarn check:claims`
Expected: PASS. The page mentions certifications only in roadmap framing, which the guard permits.

- [ ] **Step 4: Add the route to the sitemap**

In `public/sitemap.xml`, add before `</urlset>`:

```xml
  <url><loc>https://www.round.digital/government</loc><lastmod>2026-08-15</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/government/index.jsx public/sitemap.xml
git commit -m "feat(gov): add /government public-sector hub"
```

---

### Task 10: Capability statement page with print output

The one-page PDF is generated by the browser's print dialog from the same DOM, so the page and the PDF can never drift. No PDF library needed.

**Files:**
- Create: `src/pages/government/capability-statement.jsx`
- Modify: `src/styles/globals.css` (append the print block)

**Interfaces:**
- Consumes: `FACTS`, `PILLARS`, `PAST_PERFORMANCE`
- Produces: the route `/government/capability-statement`

- [ ] **Step 1: Create the page**

Create `src/pages/government/capability-statement.jsx`:

```jsx
import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { FACTS } from "@/content/facts.mjs";
import { PILLARS, allNaicsCodes } from "@/content/naics.mjs";
import { PAST_PERFORMANCE } from "@/content/past-performance.mjs";

const wrap = { maxWidth: 900, margin: "0 auto" };
const h2 = {
  margin: "0 0 12px",
  font: "700 13px var(--rd-font-mono)",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--rd-accent-text)",
};
const block = { marginBottom: 34 };

function PrintButton() {
  return (
    <button
      type="button"
      className="rd-btn rd-btn-ghost no-print"
      onClick={() => window.print()}
    >
      Download as PDF
    </button>
  );
}

export default function CapabilityStatement() {
  const delivery = FACTS.locations.filter((l) => l.status === "delivery");

  return (
    <RdLayout>
      <Seo
        title="Capability Statement"
        description="Round Digital capability statement: core competencies, differentiators, NAICS and PSC codes, past performance and company data for government and enterprise buyers."
        keywords="capability statement, small business IT contractor, women owned technology company"
      />
      <section style={{ padding: "72px 5%" }} className="rd-capability">
        <div style={wrap}>
          <header style={{ ...block, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
            <div>
              <h1 style={{ margin: "0 0 8px", font: "700 clamp(30px,3vw,46px)/1.1 var(--rd-font-display)" }}>
                Capability Statement
              </h1>
              <p style={{ margin: 0, fontSize: 17, color: "var(--rd-text-2)" }}>
                {FACTS.legalName} — women-owned technology and workforce services
              </p>
            </div>
            <PrintButton />
          </header>

          <div style={block}>
            <h2 style={h2}>Core competencies</h2>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 16, lineHeight: 1.8, color: "var(--rd-text-2)" }}>
              {PILLARS.map((p) => (
                <li key={p.id}>
                  <strong style={{ color: "var(--rd-text)" }}>{p.name}</strong> — {p.primaryNaics.label}
                </li>
              ))}
            </ul>
          </div>

          <div style={block}>
            <h2 style={h2}>Differentiators</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: "var(--rd-text-2)" }}>
              We close the delivery loop. Most vendors build a system and leave; we build
              it, staff it, train the people who operate it, and measure the outcome. We
              own and operate our own learning platform — SCORM 1.2, SCORM 2004 and xAPI
              conformant — rather than subcontracting training delivery. Our founder&apos;s
              twenty-year background is in audit and quality assurance, which is why
              assurance is designed in rather than added at the end.
            </p>
          </div>

          <div style={block}>
            <h2 style={h2}>Past performance</h2>
            {PAST_PERFORMANCE.map((e) => (
              <p key={e.id} style={{ margin: "0 0 12px", fontSize: 16, lineHeight: 1.7, color: "var(--rd-text-2)" }}>
                <strong style={{ color: "var(--rd-text)" }}>{e.client}</strong> ({e.period}) — {e.outcome}
              </p>
            ))}
          </div>

          <div style={block}>
            <h2 style={h2}>Company data</h2>
            <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "180px 1fr", gap: "10px 20px", fontSize: 16 }}>
              <dt style={{ color: "var(--rd-text-3)" }}>Legal name</dt>
              <dd style={{ margin: 0 }}>{FACTS.legalName}</dd>
              <dt style={{ color: "var(--rd-text-3)" }}>Predecessor</dt>
              <dd style={{ margin: 0 }}>{FACTS.predecessor}</dd>
              <dt style={{ color: "var(--rd-text-3)" }}>Employees</dt>
              <dd style={{ margin: 0 }}>{FACTS.employeeCount}</dd>
              <dt style={{ color: "var(--rd-text-3)" }}>Delivery locations</dt>
              <dd style={{ margin: 0 }}>
                {delivery.map((l) => `${l.city}, ${l.country}`).join(" · ")}
              </dd>
              <dt style={{ color: "var(--rd-text-3)" }}>NAICS</dt>
              <dd style={{ margin: 0, font: "15px var(--rd-font-mono)" }}>
                {[...new Set(allNaicsCodes())].join(" · ")}
              </dd>
              <dt style={{ color: "var(--rd-text-3)" }}>Business size</dt>
              <dd style={{ margin: 0 }}>Small under all listed size standards</dd>
              <dt style={{ color: "var(--rd-text-3)" }}>Certifications</dt>
              <dd style={{ margin: 0 }}>None held. Roadmap published at /government.</dd>
            </dl>
          </div>

          <div style={block}>
            <h2 style={h2}>Contact</h2>
            <p style={{ margin: 0, fontSize: 16, color: "var(--rd-text-2)" }}>
              info@rounddigital.co · +1 905 407 5009
            </p>
          </div>
        </div>
      </section>
    </RdLayout>
  );
}
```

- [ ] **Step 2: Add the print stylesheet**

Append to `src/styles/globals.css`:

```css
/* Capability statement print output. The PDF is generated from this DOM so it
   can never drift from the web page. Target: one to two US Letter pages. */
@media print {
  .no-print,
  .rd nav,
  .rd footer {
    display: none !important;
  }

  html,
  body,
  .rd {
    background: #ffffff !important;
    color: #000000 !important;
  }

  .rd-capability {
    padding: 0 !important;
  }

  .rd-capability * {
    color: #000000 !important;
  }

  .rd-capability a {
    text-decoration: underline;
  }

  .rd-capability h2 {
    color: #000000 !important;
    border-bottom: 1px solid #000000;
    padding-bottom: 4px;
  }

  @page {
    margin: 14mm;
  }
}
```

- [ ] **Step 3: Verify the screen rendering**

Run: `yarn dev`
Then: open `http://localhost:3000/government/capability-statement`
Expected: all six sections render, delivery locations show Mississauga and Noida only.

- [ ] **Step 4: Verify the print output**

In the browser, press Ctrl+P (or click "Download as PDF").
Expected: nav, footer and the button are hidden; black on white; sections have rules; content fits one to two pages.

- [ ] **Step 5: Add the route to the sitemap**

In `public/sitemap.xml`, before `</urlset>`:

```xml
  <url><loc>https://www.round.digital/government/capability-statement</loc><lastmod>2026-08-15</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
```

- [ ] **Step 6: Run the full check and commit**

Run: `yarn check && yarn build`

```bash
git add src/pages/government/capability-statement.jsx src/styles/globals.css public/sitemap.xml
git commit -m "feat(gov): add capability statement page with print-to-PDF output"
```

---

### Task 11: Generate the sitemap at build time

The hand-maintained `public/sitemap.xml` will drift the moment the IA changes. Generate it instead.

**Files:**
- Create: `scripts/generate-sitemap.mjs`
- Create: `tests/sitemap.test.mjs`
- Modify: `package.json` (build script)
- Delete: `public/sitemap.xml` (replaced by generated output)
- Modify: `.gitignore` (ignore the generated file)

**Interfaces:**
- Consumes: `RD_INDUSTRIES` from `src/data/rdIndustries.js`
- Produces: `collectRoutes() -> string[]`, `buildSitemap(routes, baseUrl, lastmod) -> string`

- [ ] **Step 1: Write the failing test**

Create `tests/sitemap.test.mjs`:

```javascript
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
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/sitemap.test.mjs`
Expected: FAIL — module not found

- [ ] **Step 3: Create the generator**

Create `scripts/generate-sitemap.mjs`:

```javascript
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
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test tests/sitemap.test.mjs`
Expected: PASS — 4 tests passing

- [ ] **Step 5: Wire it into the build**

In `package.json`:

```json
    "build": "node scripts/generate-sitemap.mjs && next build",
    "sitemap": "node scripts/generate-sitemap.mjs",
```

- [ ] **Step 6: Generate and inspect**

Run: `yarn sitemap`
Expected: writes `public/sitemap.xml`; confirm `/government` and `/government/capability-statement` are present and the 12 industry routes survived.

- [ ] **Step 7: Ignore the generated file**

Append to `.gitignore`:

```
# Generated at build time by scripts/generate-sitemap.mjs
public/sitemap.xml
```

Then remove it from tracking:

```bash
git rm --cached public/sitemap.xml
```

- [ ] **Step 8: Commit**

```bash
git add package.json scripts/generate-sitemap.mjs tests/sitemap.test.mjs .gitignore
git commit -m "feat(seo): generate sitemap from the route tree at build time"
```

---

### Task 12: Remove the dead component trees

Seven orphaned component directories predate the live `components/rd/*` system. They inflate the bundle and make every future search noisier.

**Files:**
- Delete: `src/Home1/`, `src/components/sf/`, `src/components/service/`, `src/components/home/`, `src/components/blog/`, `src/components/about/`, `src/components/industries/`, `src/components/AndySmith.jsx`

- [ ] **Step 1: Prove each directory is unreferenced**

Run each of these and confirm zero hits outside the directory itself:

```bash
grep -rn "Home1" src/pages src/components/rd
grep -rn "components/sf\|from \"@/components/sf" src/pages src/components/rd
grep -rn "components/service" src/pages src/components/rd
grep -rn "components/home" src/pages src/components/rd
grep -rn "components/blog" src/pages src/components/rd
grep -rn "components/about" src/pages src/components/rd
grep -rn "components/industries" src/pages src/components/rd
grep -rn "AndySmith" src
```

**If any command returns a hit, stop.** That directory is live — remove it from the deletion list, note which page uses it, and continue with the rest.

- [ ] **Step 2: Delete the confirmed-dead directories**

```bash
git rm -r src/Home1 src/components/sf src/components/service src/components/home src/components/blog src/components/about src/components/industries
git rm src/components/AndySmith.jsx
```

- [ ] **Step 3: Verify the build still succeeds**

Run: `yarn build`
Expected: build completes. If a module-not-found error appears, restore that one path with `git checkout HEAD -- <path>` and record why it is still needed.

- [ ] **Step 4: Verify every route still renders**

Run: `yarn start`
Then visit: `/`, `/services`, `/services/ai-machine-learning`, `/industries`, `/industries/healthcare`, `/about`, `/blogs`, `/careers`, `/contact`, `/government`, `/government/capability-statement`
Expected: all render without console errors.

- [ ] **Step 5: Run the full check**

Run: `yarn check`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git commit -m "chore: remove orphaned component trees superseded by components/rd"
```

---

## Self-review

**Spec coverage.** This plan implements spec §2 (Tasks 1, 4), §8 credential honesty (Task 6), §5 NAICS mapping (Task 7), §11 proof system (Tasks 8, 10), §6 the `/government` routes (Tasks 9, 10), §7.2 technical SEO findings for the sitemap and dead code (Tasks 11, 12), and §10 the contrast and typography tokens (Tasks 5, 6).

**Deliberately deferred to later plans.** These spec items are not in this plan and need their own:
- `next/image` migration and `images.unoptimized` removal (spec §7.2) — touches every page, belongs with the page rewrites in Plan B.
- `/government/teaming`, `/contract-vehicles`, `/certifications`, `/past-performance`, `/naics-psc-codes` — Task 9 links to `/government/teaming`, which will 404 until Plan B. **Ship Task 9 and Plan B together, or stub the route.**
- The five pillar hubs, route migrations and redirects (spec §6) — Plan B.
- `/about/women-owned`, `/about/leadership` (spec §6) — Plan B.
- Homepage repositioning (spec §3) — Plan B, because it depends on the pillar hubs existing.
- `hreflang` (spec §7.2) — Plan B, with `/locations/*`.

**Blocked on the client.** Tasks 1 and 4 deliberately omit the Allen TX and Pune addresses currently in `src/components/seo/index.js`, and set `foundingDate` to 2017. If the client confirms a real US place of business, that changes both `facts.mjs` and the US small-business eligibility argument in spec §4.2 — revisit before Plan B.

---

## Execution handoff

Plan complete and saved to `docs/superpowers/plans/2026-08-15-foundation-and-public-sector-hub.md`.
