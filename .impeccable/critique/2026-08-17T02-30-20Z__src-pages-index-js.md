---
target: Round Digital site (homepage as primary surface)
total_score: 28
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 4
timestamp: 2026-08-17T02-30-20Z
slug: src-pages-index-js
---
Method: dual-agent + content agent (A: design review · B: detector/browser evidence · C: content & copy)

## Design Health Score — 28/40 (Good)

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | aria-current applied only to the one nav item without a dropdown — FIXED |
| 2 | Match System / Real World | 4 | Buyer vocabulary throughout; only slip is "AI Enablement & Automation" as vendor language |
| 3 | User Control and Freedom | 3 | RFP form unmounts on success; the user's up-to-5,000-char scope is never echoed back |
| 4 | Consistency and Standards | 2 | /services unreachable on desktop nav (FIXED); select had no affordance (FIXED) |
| 5 | Error Prevention | 2 | noValidate + server-only validation; error summary names no fields and links to none |
| 6 | Recognition Rather Than Recall | 3 | Six status words in circulation with no legend anywhere |
| 7 | Flexibility and Efficiency | 2 | /government runs 8,458px with no anchors, sub-nav or back-to-top |
| 8 | Aesthetic and Minimalist | 3 | Minimal in ornament, maximal in volume; hero leaves right 30% empty on every page |
| 9 | Error Recovery | 3 | Well built; error hue shares --brand-fg with six non-error uses in one viewport |
| 10 | Help and Documentation | 3 | Over-delivers on FAQ/sources; no search, no index beyond 26 footer links |
| **Total** | | **28/40** | Applicable maximum 40; no heuristic n/a |

## Design Specificity Verdict

SPLIT. The components are authored for this product; the compositions are category-interchangeable.

Bespoke and excellent: rds-status (ships no badge variant, refusal enforced at build time), the sources band, the codebar, the capability-statement document layout. None could move to another company without breaking.

Category-interchangeable: eleven pages share one hero to the pixel (breadcrumb y=208, eyebrow y=267, h1 y=310, rule y=477, lead y=520). Then numbered section head, splithead, 3-up grid, tint band, repeat, CTA panel. Roughly two-thirds of what a visitor sees could be handed to any B2B services firm unchanged.

Three tells: (a) Inter Tight + Inter + JetBrains Mono is the most-used trio in the category; (b) the monogram rule does no compositional work — a 20px corner on a hairline panel is a detail you must be told about; (c) red carries nine semantic jobs (link, error, required, category, index, marker, arrow, active, brand).

## Deterministic scan

CLI detector: 0 findings, exit 0 — verified live via canary files. CONFIRMED FALSE NEGATIVE: Inter is the primary rendered face but the rule matches only `font-family:` properties, not custom properties. Read "CLI clean" as "no literal-CSS anti-patterns".

Browser injection recovered 87 findings across 5 URLs: gpt-thin-border-wide-shadow 20, line-length 18, heading-rhythm 13, cramped-padding 6, all-caps-body 5, hero-eyebrow-chip 5, wide-tracking 5, side-tab 5, overused-font 5, undersized-ui-text 4, monotonous-spacing 1.

Contrast: 202 samples across / and /government in both themes, ZERO failures, lowest 5.18:1.

## Cognitive load — 5 clear failures of 8

FAIL: single focus (13 interactive targets above the homepage fold); chunking (five pillars exceeds the ≤4 limit on every surface); one-thing-at-a-time (hero rotated under the reader); ≤4 options (nine decision points exceed it, incl. 18-item mobile menu and 26-link footer); working memory ("PLANNED" vs "PENDING CONFIRMATION" render identically across 8,458px with no legend).
PARTIAL FAIL: visual hierarchy — red 13px mono meta out-shouts the near-black 15px title.
PASS: grouping/proximity; progressive disclosure (partial).

## Priority issues

- [P0] /government section 01 opened on six identical "Pending confirmation" chips at the moment of maximum scrutiny — FIXED, collapsed to one "Supplied on request" row.
- [P1] Hero rotated on touch with no usable pause (WCAG 2.2.2) — FIXED, pointerdown pause + auto-rotate off below 620px.
- [P1] /services unreachable from desktop nav; panel 340px forcing 2–3 line wraps — FIXED.
- [P1] SAM.gov "active" while UEI and CAGE read "pending" — a contradiction an evaluator catches in 30 seconds — FIXED.
- [P1] Fabricated ROI multiples and cost ranges published in /blogs while /works says "where we cannot evidence a figure, there is no figure" — FIXED.
- [P2] select had appearance:none with no substitute — FIXED.
- [P2] Internal "for company review" to-dos published on both legal pages — FIXED.
- [P2] Dark theme flattened the hero band into the page ground — FIXED.
- [P2] /government identity table loses its NOTE column on mobile with no scroll cue — OPEN.
- [P2] /rfp reassurance sits below the fold on desktop and below the entire form on mobile — OPEN.
- [P3] Eleven pages share one hero composition — OPEN, direction decision.

## Persona red flags

Jordan: two identical red "Submit an RFP" buttons in one viewport; h1 names four services while the lead describes one and changes every 6s; brand word hidden below 420px leaving an unnamed monogram.
Riley: error summary links to nothing; noValidate makes every typo a network round-trip; hunts the UEI, finds the same non-answer on two pages with no request affordance (FIXED); eight posts sharing one timestamp (FIXED).
Casey: hero auto-advanced with no touch pause (FIXED); tablist wraps 3+1 so the four-step loop reads as three and a stray; header CTA hidden below 1080px leaving an 18-item menu as the only route; homepage 12,844px at 390px.

## Content verdict

The honesty strategy is correct and the prose is well above category standard. The failure is placement, not volume: ~50 statements of absence on the standard procurement path, with the "no" promoted into H1s, hero leads and Note blocks while capability sits in body copy. Six H1s/H2s led with an absence — four now reworded. Ten instances of the site narrating its own honesty rather than being honest — three cut.

Strongest lines: "The pilot worked. That is the problem." / "The cost is not the fee. It is the six weeks lost to interviewing people who were never going to pass." / "A registration number quoted from memory and later found wrong is a misrepresentation in a bid."

Formula: 266 em dashes, ~140 antithesis constructions ("X, not Y" 58, "rather than" 74) — roughly one every 150 words. Four repeating templates: the two-beat H1 (8 pages), the CTA tail (7 pages, one verbatim duplicate), the panel template, the lead paragraph.

## Questions to consider

1. Radical honesty is a CONTENT policy that has been promoted into the VISUAL system — forty status chips where one sentence would do. Would it land harder as prose?
2. You built the better hero and shipped the worse one. What does the rotating variant buy that justifies contradicting its own headline every six seconds?
3. The capability statement is the only page designed as an artifact rather than a marketing surface. What would /government become if designed the same way?
4. Red does nine jobs. If you could keep three, which three?
