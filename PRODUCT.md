# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, confirmed equal in priority ("balanced — truly both", owner, 2026-08-25):

- **Government & public-sector evaluators** (US federal/state/municipal; Canadian federal pending one registration) — reading against a checklist under time pressure; they verify claims against SAM.gov and source records.
- **Enterprise & mid-market buyers** — a referred, skeptical CTO plus a vendor-risk team running a due-diligence questionnaire.
- **Nonprofit & institutional program leads** — often on a phone, holding a grant deliverable or a rough idea rather than an RFP.

## Product Purpose

Round Digital sells technology and workforce services (IT services, AI enablement, data/research/surveys, staffing, corporate & technical training) delivered from Mississauga, Ontario and Noida, Uttar Pradesh. The owner's stated goal (2026-08-25): become the fastest-growing firm in its bracket by being perceived as a **trusted vendor**, able to bid private and government contracts across jurisdictions.

## Positioning

**Verifiability as the product.** Every claim on the site resolves to a source; what is not held is stated plainly, with a roadmap and dates, before the buyer has to ask. Competitors with badge walls cannot truthfully copy the mechanism, because the mechanism is the willingness to publish the gaps (jurisdictions answered "no", certifications "none held today", references labelled including the self-citations).

## Operating Context

- Buyers evaluate via capability statements, SAM.gov lookups, NAICS/PSC codes, security questionnaires, past-performance references, and supplier-diversity spend targets.
- The one-page capability statement is the canonical evaluation artifact, generated from the same data as the site so the two cannot disagree.
- Trading since 2017 as Pragra LLC; Round Digital is the successor entity. SAM.gov registration active; Canada Procurement Business Number pending; teaming/subcontracting is the route into vehicles not held.

## Capabilities and Constraints

- **Truth architecture (binding):** `src/content/facts.mjs` (verified facts with sources/dates), `src/data/procurement.js` (identifiers; pending never renders as a number), `src/content/claims.mjs` + `scripts/check-claims.mjs` (build fails on unearned certification language), rendered-output e2e re-checks the same registry. Unconfirmed values render as visible `[CONFIRM: …]` markers, never plausible inventions.
- **Accessibility (binding):** WCAG 2.2 AA delivered and tested (axe e2e, measured contrast suite in `src/content/contrast.mjs`); the site is itself cited as evidence of capability.
- Open product facts: UEI and CAGE values (committed to publication once confirmed); entity names/numbers per jurisdiction; named personnel (no individual is currently published anywhere — do not invent).

## Brand Commitments

- **Binding (owner, 2026-08-25, reaffirmed after a full-replacement exploration was rejected):** the D-monogram mark; the name Round Digital; the logo red as the accent; the rounded geometry (10px controls, 28px bowl corner); the rounded type voice (Bricolage Grotesque display, Nunito body, JetBrains Mono data).
- **Photography:** permitted, including stock (owner, 2026-08-25 — supersedes the earlier no-photography rule). Never fabricated named people or fake team photos; real people only when the owner supplies them.
- Locations are stated once per surface: the vendor record carries the cities; other mentions stay at region level.
- Voice: plain, precise, willing to refuse; "certified" is never used until a certificate exists.

## Evidence on Hand

- Verified: Forbes Canada Best Startup Employers 2024 (Pragra); founded 2017 Mississauga; Perfectum.ai multi-tenant LMS (SCORM/xAPI, 1,200+ academies); ShipCarte logistics platform (client, since 2019); training delivered Mississauga/Noida/online. Sources in `facts.mjs`.
- Past performance: ShipCarte (client engagement), Perfectum (own product), Pragra (predecessor) — relationship labels published.
- **Absences future work must not fabricate:** client testimonials, contract values, certifications, named staff, photos of real people.

## Product Principles

1. Never state what cannot be verified; publish the gap, with a date, before the buyer asks.
2. The refusal is what makes the yes credible — "no" answers are content, not failures.
3. Small is the position, not the apology: set-asides and diversity spend are where size wins.
4. One source of truth per fact; site, capability statement and data modules may never disagree.
5. Accessibility and auditability are demonstrations of delivery capability, not compliance chores.

## Accessibility & Inclusion

WCAG 2.2 AA maintained and regression-tested; Section 508 / EN 301 549 named as delivery targets. This is a bid-scored capability and must survive any redesign.
