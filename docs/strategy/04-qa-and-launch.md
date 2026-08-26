# QA evidence, launch checklist and outstanding items

**Round Digital website rebuild · August 2026**

---

## 1. QA evidence

Everything below was executed, not asserted. Where something was not tested,
this document says so.

### Accessibility — WCAG 2.2 AA

| Check | Result |
|---|---|
| axe-core automated scan | **0 violations across 56 page scans** — 28 routes × light and dark themes, tags `wcag2a wcag2aa wcag21a wcag21aa wcag22aa` |
| Colour contrast | Every token pair computed before being written to CSS. Body 19.22:1, secondary 8.08:1, metadata ≥4.78:1, accent text ≥5.73:1, control borders ≥3.12:1 |
| Contrast drift guard | `tests/contrast.test.mjs` fails if `contrast.mjs` and `system.css` disagree |
| Keyboard operation | Nav uses a disclosure pattern — real `<button>`, `aria-expanded`, `aria-controls`, Escape closes and returns focus, click-outside closes. Scrollable tables carry a focusable region |
| Focus visibility | 2px outline with offset on every focusable element; never removed |
| Forms | Persistent visible labels, `role="alert"` error summary with focus move, `aria-describedby` per field, `aria-invalid`, and a text glyph so state is never colour-alone |
| Reduced motion | `prefers-reduced-motion` removes animation, transitions and smooth scroll |
| Reflow | 390px viewport: **0px horizontal overflow**, no offending elements |

**Not tested:** structured screen-reader passes across NVDA, JAWS and VoiceOver.
The `/accessibility` page states this openly rather than implying full coverage.

### Functional

| Check | Result |
|---|---|
| Production build | Passes. 60 routes generated |
| Unit tests | **57/57 passing** |
| Claims guard | Passing, and chained first in `npm run build` |
| Claims guard adversarial test | **27/27 correct — 16 attack strings caught, 11 honest phrasings allowed** |
| Internal link crawl | **63 unique links, 0 broken, 0 redirect chains** |
| RFP form | Verified in-browser: server-side validation returns per-field errors, `role="alert"` summary receives focus, `aria-invalid` set on exactly the four required fields |
| Sitemap | 58 routes; redirect sources excluded; all five pillar routes present |
| Dark mode | Verified visually and by computed-style contrast measurement |

### Security fixes made during the rebuild

| Issue | Location | Fix |
|---|---|---|
| **HTML injection into staff inboxes** — `${name}`, `${email}`, `${message}`, `${type}` interpolated raw into the outgoing HTML email | `src/pages/api/contact.js` | All values HTML-escaped; email validated; length caps; `replyTo` set; body size limited to 64kb |
| No validation or spam control on intake | new `/api/rfp` | Server-side validation mirroring the client, length caps, honeypot, generic error responses with detail to server log only |
| Unused, unreachable endpoint | — | `/api/hello` removed; `/api/apply` retained but now unreferenced — see outstanding items |

### Performance posture

- Fonts self-hosted via `next/font` — render-blocking Google Fonts request
  removed; size-adjusted fallback eliminates font-driven layout shift
- `images.unoptimized: true` **removed** — AVIF/WebP now served
- Legacy stylesheet deleted: `globals.css` reduced from 602 lines to a 45-line
  document base after verifying zero Tailwind utilities and zero `.rd-` classes
  remained
- 27 orphaned files removed (legacy component trees, superseded data modules)
- No third-party scripts, no analytics tags, no tag manager on any page

**Not measured:** Lighthouse / field Core Web Vitals against production
hosting. Run once deployed — local numbers would not reflect the CDN.

### Browser coverage

Verified in Chromium (Playwright) at 1440px and 390px, light and dark.
**Not verified:** Safari and Firefox. The CSS uses no engine-specific features
beyond `backdrop-filter`, which has an `@supports` fallback, and
`color-mix()`, which degrades to the fallback background. Run a Safari and
Firefox pass before launch.

---

## 2. Launch checklist

### Blocking — must close before the site goes live

- [ ] **Resolve the SOC 2 Type II representation on `perfectum.ai`.** That
      property advertises a certification the group does not hold. Once it
      appears in a bid context it becomes a certification representation. This
      site links to Perfectum as evidence the platform exists — the link is
      correct, the claim on the destination is not.
- [ ] **Confirm ownership and officer record**, then correct public profiles in
      that order. Certification applications fail on the control test, not the
      share register.
- [ ] **Confirm headcount** and state it consistently across LinkedIn,
      Crunchbase and this site.
- [ ] **Legal review** of `/privacy` and `/terms`. Both are drafted for clarity
      and flagged in-page for review; the governing-law clause assumes Ontario.
- [ ] **Verify the SBA size-standard figures** on `/government/naics-psc-codes`
      against the current SBA table. They are shown as context and labelled as
      requiring re-verification, but should be correct at launch.
- [ ] Set `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_RECEIVER` in the production
      environment, and create `contracts@`, `hello@`, `privacy@`, `legal@`,
      `accessibility@` and `careers@round.digital`.
- [ ] Submit a live test through `/rfp` and `/contact` and confirm delivery.

### Should close before launch

- [ ] Safari and Firefox pass
- [ ] Lighthouse run against the deployed site
- [ ] Analytics decision. **None is installed.** `/privacy` states this
      truthfully — if analytics is added, update that page *before* deploying it
- [ ] Decide the fate of `/api/apply`: it is now unreferenced because
      `/careers/[slug]` uses a mailto. Either wire a real application form to it
      (with the same hardening as `/api/rfp`) or delete it
- [ ] Prune unused files under `src/assets/` (no longer imported)

### Post-launch, first 30 days

- [ ] Submit sitemap in Google Search Console and Bing Webmaster Tools
- [ ] Complete SBA DSBS profile
- [ ] Expand SAM.gov to all five NAICS codes
- [ ] CanadaBuys registration + Procurement Business Number
- [ ] Publish the first two reference guides

---

## 3. Company-supplied items still required

Each renders on the site today as *Pending confirmation* and will publish
automatically once the value is added to `src/data/procurement.js`.

| # | Item | Needed for |
|---|---|---|
| 1 | UEI (SAM.gov) | Capability statement, every US federal bid |
| 2 | CAGE / NCAGE code | Capability statement |
| 3 | Canada Procurement Business Number | CanadaBuys, all Canadian federal bids |
| 4 | Wyoming entity name + number | Corporate chain |
| 5 | Canadian federal entity name + number | Corporate chain, WBE Canada |
| 6 | Indian entity name + CIN | Corporate chain |
| 7 | Written Pragra LLC → Round Digital succession | Capability statement, certifications |
| 8 | Ownership percentages and officer titles of record | All diversity certification |
| 9 | Board composition | WBE Canada control test |
| 10 | Confirmed headcount | Evaluator confidence |
| 11 | US immigration status of the qualifying owner | WBENC eligibility only |
| 12 | Current AWS / Microsoft / Google partner tiers | Partnership roadmap |
| 13 | Two further past-performance references with named client contacts | Federal comfort (5 is the practical bar) |
| 14 | Insurance certificates (general liability, professional, cyber) | Most contracts require evidence |
| 15 | Named leadership biographies and credentials | `/about/leadership` |
| 16 | Real delivery photography, if wanted | Currently zero stock imagery by design |

---

## 4. Maintaining the discipline

Three mechanisms keep the site honest without relying on anyone remembering:

1. **`npm run build` fails on unearned certification language.** The guard is
   context-aware: it allows "not eligible for WOSB", "aligned to ISO 27001" and
   question forms, and still catches "ISO 27001 certified" even when the word
   "roadmap" appears nearby.
2. **`Status` has no badge variant.** An unearned credential cannot be rendered
   as an achievement, because the component cannot express it.
3. **One source of truth per fact.** The capability statement, `/works`,
   `/government/past-performance` and the homepage all read the same modules.
   There is no separate marketing store that could drift from the procurement
   record.

When a certification is awarded, flip its `status` in
`src/content/credentials.mjs` and add `awardedOn`. The UI reads status and
nothing else — no page needs editing.
