# SDD ledger — plan: docs/superpowers/plans/2026-08-15-foundation-and-public-sector-hub.md

Spec: docs/superpowers/specs/2026-08-15-enterprise-repositioning-design.md (read)
Branch: feat/enterprise-repositioning-foundation
Base commit: faf897c

## Setup rulings

Ruling: Isolate on a feature branch rather than a git worktree — the repo lives on a
UNC network share (//Mac/Home/...) where `git worktree` and the skill's helper scripts
fail on path resolution. Cost if wrong: no parallel-workspace isolation; a bad task
leaves the branch dirty rather than an isolated tree. Recoverable via git reset.

Ruling: Workspace created manually at the Z: drive path because `scripts/sdd-workspace`
resolves the repo root to a UNC path and cannot mkdir there. Same for `scripts/task-brief`
— briefs were split from the plan with awk instead. Cost if wrong: none, the artifacts are
identical in shape.

Ruling: `scripts/review-package` accepts an explicit OUTFILE as its 4th argument, which
bypasses the `sdd-workspace` call that fails on the UNC path. Always pass the outfile
explicitly:
`review-package PLAN BASE HEAD .superpowers/sdd/2026-08-15-foundation-and-public-sector-hub/review-<b7>..<h7>.diff`
Cost if wrong: none — falls back to plain git commands redirected to a file.

## Pre-flight conflict scan

### Shared-file pairs

| Tasks | File | Producer → consumer | Finding |
|---|---|---|---|
| 1, 2, 11 | `package.json` | scripts block | **Conflict.** T1 and T2 each specify a FULL scripts block (T2's is a superset of T1's — safe supersession). T11 specifies only two fragment lines. Ruled below. |
| 5, 6, 7, 10 | `src/styles/globals.css` | colour tokens → font tokens → `.sr-only` → print block | Clean. All additive, disjoint regions. |
| 3, 4 | `src/components/seo/index.js` | keywords/dead meta → Organization JSON-LD/geo meta | Clean. Disjoint line ranges, T3 before T4. |
| 9, 10, 11 | `public/sitemap.xml` | manual entries → generated + untracked | **Conflict.** T9/T10 hand-edit a file T11 deletes and gitignores. Ruled below. |
| 1 → 4, 8, 10 | `src/content/facts.mjs` | `FACTS`, `VERIFIED_FACTS`, `getFact` | Clean. T4 uses `FACTS.locations`; T8 uses `getFact`; T10 uses `legalName`, `predecessor`, `employeeCount`, `locations`. All defined in T1. |
| 7 → 9, 10 | `src/content/naics.mjs` | `PILLARS`, `allNaicsCodes` | Clean. Both consumers import exactly these two names. |
| 6 → 9 | `src/content/credentials.mjs` | `CredentialGrid` | Clean. T9 passes `heading`/`intro`, both in T6's signature. |
| 8 → 9, 10 | `src/content/past-performance.mjs` | `PAST_PERFORMANCE` | Clean. T9 maps entries to `PastPerformanceCard`; T10 reads `client`/`period`/`outcome`. |
| 5 → 6, 8, 9, 10 | `--rd-accent-text` token | CSS var | Clean. Defined T5, consumed T6+. Order correct. |
| 6 → 7, 8, 9, 10 | `--rd-font-display`, `--rd-font-mono` | CSS vars | Clean. Defined T6 step 6, first consumed T6 component. Order correct. |
| 7 | `.sr-only` | CSS class | Clean. Defined and consumed in the same task. |
| — | `.rd-container` | pre-existing | Verified present at `src/styles/globals.css:197`. T6 may use it. |

### Per-task internal consistency

| Task | Tests vs code | Files created vs later touched | Finding |
|---|---|---|---|
| 1 | 5 assertions all map to exported names | facts.mjs, package.json | Clean |
| 2 | 8 assertions; allow-cases exercise the negative-lookahead in `CERT_ASSERTION` | claims.mjs, check-claims.mjs | Clean. Step 7 deliberately expects FAILURE — implementer must not "fix" it. Called out in dispatch. |
| 3 | No unit test; verification is `yarn check:claims` going green | seo/index.js | Acceptable — the test is Task 2's guard. |
| 4 | 7 assertions match `buildOrganizationSchema` output | organization.mjs, seo/index.js | Clean |
| 5 | 5 assertions; one asserts a KNOWN FAILURE (4.21:1) deliberately | contrast.mjs, globals.css, index.js | Clean. The known-failure test is intentional documentation, not a defect. |
| 6 | 6 assertions match `CREDENTIALS` shape | credentials.mjs, CredentialGrid.jsx | Clean |
| 7 | 5 assertions match `PILLARS` shape | naics.mjs, NaicsTable.jsx | Clean |
| 8 | 4 assertions; cross-checks `getFact` from T1 | past-performance.mjs, card | Clean |
| 9 | No unit test; verification is manual render + claims guard | government/index.jsx | **Conflict.** Links to `/government/teaming`, which does not exist until Plan B — ships a 404. Ruled below. |
| 10 | No unit test; verification is manual render + print preview | capability-statement.jsx, globals.css | Clean |
| 11 | 4 assertions match `buildSitemap` output | generate-sitemap.mjs, package.json, .gitignore | Clean |
| 12 | No test; Step 1 is a guard proving each dir is unreferenced before deletion | deletions | Clean. Guard verified independently: `src/pages/blogs/index.jsx` does not import `components/blog`. |

### Rulings from the scan

Ruling: `package.json` — Task 2's full scripts block supersedes Task 1's; Task 11 MERGES
its two lines into the existing block rather than replacing it. Carried into the T11
dispatch explicitly. Cost if wrong: a clobbered scripts block, caught immediately by
`yarn test` failing to resolve.

Ruling: `public/sitemap.xml` — keep the Task 9 and Task 10 manual entries even though
Task 11 supersedes them by generation. The sitemap stays valid at every intermediate
commit, and Task 11's `git rm --cached` removes the file cleanly regardless of content.
Cost if wrong: two wasted three-line edits.

Ruling: Task 9 links twice to `/government/teaming`, a Plan B route. Retarget both to
`/contact` so the branch never ships a 404. The teaming page arrives in Plan B and can
reclaim the links then. Cost if wrong: two link targets to change later — trivial, and
strictly better than shipping a broken link on the primary bid-facing page.

Ruling: Task 2 Step 7 and Task 5's second test both assert a KNOWN FAILURE on purpose
(the live `SOC 2` keyword hit; the 4.21:1 contrast ratio). Implementers will be told
explicitly not to "fix" them. Cost if wrong: an implementer silently repairs the thing
the next task is supposed to repair, and the regression documentation is lost.

---

## Task log

### Environment rulings discovered during Task 1

Ruling: **`yarn` is not installed on this machine.** Every task brief says `yarn test`,
`yarn build`, `yarn check`. Use `npm` equivalents throughout (`npm test`, `npm run build`,
`npm run check`). Verified: npm 11.17.0, Node v24.19.0, `npm test` green. Do NOT run
`npm install` — no task adds a dependency, and installing would churn lockfiles
(both yarn.lock and package-lock.json exist in the repo). Carried into every remaining
dispatch. Cost if wrong: none; npm run and yarn run execute identical scripts.

Ruling: **Accept the Task 1 test-script deviation.** The brief specified
`node --test tests/`, which fails on Node 24 / Windows — it tries to load `tests` as a
CJS module instead of discovering test files. The implementer changed it to
`node --test tests/*.mjs`. Node has expanded glob patterns natively in the test runner
since v22, so this is portable, not Windows-specific. Verified green independently.
Cost if wrong: test discovery misses a future test file not matching `*.mjs` — acceptable,
since the plan mandates `.mjs` for all test files anyway.

Note: controller committed the spec, plan and `.gitignore` separately as 029c775 so the
Task 1 review package (faf897c..cc1205e) contains only Task 1's changes.

Task 1: implemented — commit cc1205e, 5/5 tests passing, status DONE_WITH_CONCERNS
(concern was the test-script deviation above, ruled acceptable). Review package:
review-faf897c..cc1205e.diff.

Task 1: minor (deferred): `Object.freeze(FACTS)` is a shallow freeze — `FACTS.locations`
and its element objects stay mutable. Originates in the plan's own reference code, not an
implementer deviation. Tasks 4 and 10 read `FACTS.locations`; neither mutates it. Flag for
the final whole-branch review to triage.

Task 1: complete (commits faf897c..cc1205e, review clean — spec ✅, quality approved)

Task 2: implemented — commit 7db329f, 13/13 tests passing, status DONE_WITH_CONCERNS.
Step 7 failed as required. `src/components/seo/index.js` untouched. Two concerns raised,
both real; ruled below.

Ruling: **Accept the implementer's two regex corrections to `claims.mjs`.** The plan's
verbatim reference code failed its own Step 1 test suite (6/8): (a) `\b8\(a\)\b` — the
trailing `\b` never fires after `)` followed by whitespace, so the 8(a) pattern never
matched; (b) `CERT_ASSERTION` lacked a carve-out for "pursuing X certification", so an
allow-case was flagged. The implementer fixed the patterns rather than weakening the
tests, which is the correct direction. Cost if wrong: the guard over- or under-matches;
bounded by the 8 unit tests that now pass. Subject to task review.

Ruling: **The guard does not catch bare certification names, and that is a real gap in my
plan, not in the implementation.** The patterns require an adjacent assertion word
("certified", "compliant") so that honest prose — "aligned to ISO 27001" — stays legal.
That design means the bare `"SOC 2"` / `"ISO 27001"` string-literal entries in
`src/components/seo/index.js`'s keyword array pass the scan. Fix: add a narrow rule
matching a quoted string literal that is *only* a certification name, which catches
keyword-array entries without touching prose. Folded into Task 3's dispatch.
Cost if wrong: a keyword-array regression could reappear unguarded after Task 3 removes it.

Ruling (amends the above): the bare-name rule collides with Task 6. `credentials.mjs`
legitimately contains `name: "ISO 9001:2015"`, `"SOC 2 Type II"`, `"ISO/IEC 27001:2022"`
as standalone quoted strings — that file IS the certification roadmap registry. Fix: the
scanner skips `credentials.mjs` exactly as it already skips `claims.mjs`. Both are the
sanctioned homes for certification names; everywhere else a bare quoted cert name is a
claim. Caught during pre-dispatch review of Task 3, before Task 6 could break.
Cost if wrong: Task 6 fails the guard and needs a one-line scanner change.

Task 2: minor (deferred): the ISO reason string reads "No ISO certification is not held."
— a double negative, inherited verbatim from the plan's reference code.
Task 2: minor (deferred): `NOT_PURSUING` only matches "pursuing X" word order; a reordered
phrasing such as "X, which we're pursuing" would still be flagged. Same limitation as the
brief's other suffix-only carve-outs.

Task 2: complete (commits 029c775..7db329f, review clean — spec ✅, quality approved)

### ENVIRONMENT BLOCKER — the Next.js toolchain cannot run here

Ruling: **`npm run build`, `npm run dev` and `npm run lint` are unavailable in this
session and every remaining task must substitute static verification.** Diagnosis:
this machine is `win32-arm64`; `node_modules/@next` contains only `swc-darwin-arm64`.
The repo lives on `Z:`, a network share to a macOS home directory, so `node_modules`
was populated for darwin-arm64 and `next` is not executable on Windows.

**Do NOT run `npm install` to fix it.** That would rewrite a `node_modules` tree shared
over the mount with the user's Mac environment — a destructive side effect outside this
branch, on a machine I was not asked to modify. Out of bounds without the user's consent.

Consequences and substitutes:
- `npm test` (pure node:test) and `npm run check:claims` (pure node) both work. These
  remain the primary gates and cover every `.mjs` content module.
- Page-render verification (Tasks 9, 10) and visual checks (Tasks 5, 6, 7) CANNOT be
  performed here. Substitute: a static import-resolution check plus reviewer inspection
  of the JSX. Flag every unverified render in the final report so the user can confirm
  on their Mac with `npm run build && npm run dev`.
- Task 12 (dead-code deletion) loses its build check. Its Step 1 grep guard does not
  depend on the build, and I will additionally run a whole-tree import-resolution scan
  before accepting the deletions. That is a stronger check than the build for this
  specific risk anyway, since it catches unresolved imports directly.

Cost if wrong: a JSX or runtime error ships unnoticed on a page nobody could render here.
Mitigated by static import resolution + review, but NOT equivalent to a green build. The
user must run a build before merge. This is the single biggest caveat on the branch.

Task 3: implemented — commit cf3ba15, 15/15 tests passing, `check:claims` now PASSES
(6 hits before → 0 after). Two ADDITIONAL live violations found by the new bare-name rule
and fixed:
  - `src/data/rdServices.js:83` — `{ n: "SOC 2", l: "aligned processes" }` rendered as a
    large stat badge; reworded to `{ n: "Controls", l: "mapped to SOC 2 criteria" }`.
  - `src/data/sfServices.js:231-232` — `"SOC 2"` / `"ISO 27001"` as chips among real tool
    names; reworded to `"SOC 2 aligned"` / `"ISO 27001 aligned"`.

Ruling: **Accept the implementer's correction of my expected test value** for
`"CMMI Level 3"` (1 → 2). That string legitimately trips both the pre-existing CMMI rule
and the new bare-name rule. The implementer changed the expectation to match real
behaviour and documented it rather than silently editing. My value was wrong.
Cost if wrong: none — the assertion is stricter, not weaker.

Task 3: noted, not changed: `src/data/rdServices.js:84` splits `{ n: "ISO", l: "27001
aligned" }` across two fields — same badge visual as the violation above, but the wording
is honest ("aligned") and no rule flags it. Left alone deliberately; the display treatment
is a design question for the final review, not a claims question.

Ruling: **Leave the remaining certification prose alone — it is service-offering language,
not a self-claim.** The Task 3 reviewer flagged `rdServices.js:89,96,102-104,316,321`,
`sfServices.js:197,244,256-260`, `blogs.js:151` and `jobPositions.js:95`. I audited all of
them. Every one describes a service delivered TO A CLIENT ("SOC 2, ISO 27001, GDPR and
HIPAA programs run as engineering"; "we build and operate the evidence pipelines that get
YOU through SOC 2 and ISO 27001 audits") or is educational blog content, or is a job-post
duty. None asserts that Round Digital holds a certification. Changing them would damage
accurate service marketing for zero compliance benefit. The guard correctly does not flag
them — that is the permissive-by-design behaviour working as intended, not a gap.
Cost if wrong: a hostile reader conflates "we help you get SOC 2" with "we have SOC 2".

Observation for the final report (credibility, not compliance): the cybersecurity service
page is titled "Cybersecurity Services & SOC 2 Compliance" and offers to carry clients
through SOC 2 audits, while the firm holds no SOC 2 itself. That is legal and common, but
it is an obvious question in a bid debrief and it strengthens the business case for the
Tier 2 SOC 2 item on the certification roadmap. Not a code change.

Task 3: noted: `src/data/sfServices.js` may be dead data — `src/components/sf` is slated
for deletion in Task 12. If so the edit is harmless. Task 12's grep guard will settle it.

Task 3: complete (commits 7db329f..cf3ba15, review clean — spec ✅, quality approved).
Gates verified independently by controller: 15/15 tests, `check:claims` PASSES.
Four unearned certification claims removed from the live site in total.

Task 4: implemented — commit ba53597, 22/22 tests passing, check:claims green.
Controller verified the emitted schema directly by importing the module: addresses =
Mississauga + Noida only; foundingDate = 2017; numberOfEmployees = 20+; hasCredential
absent; leak scan for Allen / Pune / 2015 / SOC / ISO / WOSB / 8(a) all clean; the
page-specific `jsonLd.map` block survives (1 occurrence). Build-based Step 7 skipped per
the environment ruling and replaced with this direct import check, which is stronger
evidence for schema content than reading rendered HTML would have been.

Task 4: complete (commits cf3ba15..ba53597, review clean — spec ✅, quality approved,
zero findings at any severity). Reviewer read all 148 lines of seo/index.js as the
build-check substitute: JSX balanced, props contract intact, geo/ICBM gone, jsonLd.map
block present exactly once. Also confirmed the POSTAL-lookup miss path degrades safely.

Task 5: implemented — commit 3d8edd9, 27/27 tests, check:claims green. 45 `color:` usages
migrated to `--rd-accent-text`; 8 non-text usages correctly left on `--rd-accent`.

Ruling: **Accept the implementer's scope extension.** The brief named a handful of "known
sites" in `src/pages/index.js`; the implementer found the same failing eyebrow pattern
copy-pasted across effectively every page and fixed all 45. The task contract explicitly
permitted "any other file where grep shows the accent used as a `color:` value", so this
is instructed breadth, not scope creep. Fixing 6 of 45 would have left the AA failure
live on most of the site. Cost if wrong: a larger diff (61KB) to review.

Controller verification (substitute for the unavailable visual check):
- `grep` for `color:` still bound to `--rd-accent`: ZERO hits.
- The 8 survivors are all `background` / `box-shadow` / `border-color` / `outline` —
  correct, since the applicable threshold for those is 3:1, not 4.5:1.
- `outline: 2px solid var(--rd-accent)` (globals.css:310) is the focus indicator; at
  4.16:1 dark and 5.53:1 light it clears the 3:1 requirement in both themes.
- Measured ratios from the module: dark accentText 5.99:1, light accentText 6.48:1,
  body text 16.62:1 / 20.34:1, secondary text 11.80:1 / 8.10:1. All clear AA.

Correction: the plan and my earlier notes stated the legacy failure as 4.21:1; the
module measures 4.16:1. My hand calculation was slightly off. Fails AA either way.
Plan document corrected.

Task 5: minor (deferred): `TOKENS` in contrast.mjs is a hand-maintained mirror of the CSS
custom properties. A future CSS-only edit not mirrored into the module would silently
escape the test suite. Inherent to the plan's chosen design and commented in source;
not an implementer defect. Candidate for the final review to triage.

Task 5: complete (commits ba53597..3d8edd9, review clean — spec ✅, quality approved).
Reviewer verified all 45 changed sites individually; zero non-text properties affected,
zero collateral edits, WCAG math correct, TOKENS↔CSS in sync for both themes.

---

## Batch: Tasks 6, 7, 8 (same shape — content module + component + tests)

Ruling: **Batch Tasks 6, 7 and 8 into one dispatch.** All three are the same shape — a
`.mjs` content module, a presentational component that reads it, and a node:test file —
and none consumes another's output. The skill's batching guidance applies. They will be
committed as three separate commits so the history stays granular, and reviewed as one
range. Ordering within the batch matters: Task 6 defines the `--rd-font-*` tokens that
Tasks 7 and 8's components reference, so 6 must land first.
Cost if wrong: one larger review surface instead of three small ones.

Tasks 6-8: implemented — commits 670b733 (credentials), 1bad298 (naics), 0dd2061
(past-performance). 42/42 tests (27 → +6 +5 +4). check:claims green after each commit.
No deviations from the briefs reported.

Controller verification by direct module import:
- credentials: 6 entries, all `status: "planned"`, `hasAnyEarned() === false`, every entry
  carries a well-formed `targetQuarter`. Nothing can render as held.
- naics: 5 pillars, 541910 present, every code matches /^\d{6}$/.
- past-performance: 3 entries, zero unresolved `factId` references against facts.mjs.
- Every `radius:` in `src/components/rd/gov/` is exactly 12 — at the ceiling, none over.
- Zero `color: "var(--rd-accent)"` misuse in the new components.

Note: the implementer correctly left the controller's own uncommitted plan-doc edit
(the 4.21→4.16 ratio correction) untouched as out of scope. Committed separately as
f7b57b0.

Tasks 6-8: complete (commits 3d8edd9..0dd2061, review clean — spec ✅, quality approved,
no Critical or Important findings).

Ruling: **Fix the NaicsTable keyboard-scroll gap rather than defer it.** The reviewer
graded it Minor: the `overflow-x: auto` wrapper has no `tabIndex`, so it is not a keyboard
trap, but keyboard-only users cannot scroll the table to reach the PSC and size-standard
columns. Under a strict WCAG 2.1.1 reading a scrollable region must be keyboard operable.
This project sells accessibility competence to public-sector buyers and the table sits on
the flagship `/government` page, so shipping a known keyboard gap there is the wrong
trade. Folded into Task 9's dispatch (which renders the component) rather than opening a
separate fix round. Cost if wrong: three extra attributes and a focus style.

Tasks 6-8: minor (deferred): `PastPerformanceCard` calls `new URL(fact.source).hostname`,
which throws on a malformed URL. All three current sources are well-formed https URLs and
the data is static, but no test asserts URL validity — a future entry with a bad `source`
would crash the render. Candidate for the final review: add a URL-shape assertion to
`tests/facts.test.mjs`.

---

## Batch: Tasks 9, 10 (the flagship pages)

Tasks 9-10: implemented — commits 7b19d6f (`/government` hub), ee232d6 (capability
statement + print CSS). 42/42 tests after each, check:claims green after each. Both
teaming links retargeted to `/contact` per the pre-flight ruling; NaicsTable received the
`tabIndex`/`role`/`aria-label` accessibility fix folded into commit 1.

Controller built a substitute for the missing build: `verify-imports.mjs` in this
workspace. It walks every source file, extracts imports, and resolves each against the
filesystem using Next/webpack rules (`@/` → `src/`, extension inference, directory index).

Results:
- **Live graph clean: 116/116 local imports resolve** across `src/pages`,
  `src/components/rd`, `src/components/seo`, `src/content`, `src/data`, `src/hooks`,
  `src/utlis`. Both new pages' imports resolve and every named export was confirmed
  present in its target module.
- Whole-tree scan surfaces 7 unresolved imports, ALL pre-existing and ALL inside dead
  trees: 5 in `src/components/service/*` (→ `../constant`, which does not exist) and 2 in
  `src/components/ui/OverlayDemo.jsx` (→ `./ui/Overlay`, `../hooks/useOverlay`).
- New page radii: all exactly 12. Zero accent-as-text misuse. No `/government/teaming`
  reference remains anywhere in `src/`.

Correction: the verifier prints "these would fail the build" for unresolved imports. That
is overstated — Next bundles only what is reachable from `pages/`, so dead files with
broken imports are never resolved and do not break `next build`. The tool is stricter than
the build; treat whole-tree hits as dead-code evidence, not build breakage.

Ruling: **Add `src/components/ui/OverlayDemo.jsx` to Task 12's deletion list.** It is not
in the plan's list, but it is unreachable AND has two broken imports, so it cannot ever
have compiled. Its siblings in `src/components/ui/` (`SectionHeader`, `Overlay`,
`FullScreenOverlay`, `index.js`) are NOT automatically dead — Task 12's grep guard must
check each independently before anything there is removed. Cost if wrong: one extra file
in Task 12's guard step, which fails loudly if the file turns out to be referenced.

Note: the 5 broken imports in `src/components/service/*` independently corroborate that
the tree is dead — code that cannot resolve its own imports is not being compiled by
anything. Useful confirmation for Task 12 beyond the grep guard.

Tasks 9-10 review: spec ✅, quality NOT APPROVED — one Critical finding.
**The print stylesheet failed to hide the navbar.** `@media print` selected `.rd nav`, but
`Navbar.jsx:96` opens a `<header>` (closing 328) with `<nav>` wrapping only the centre
links (126-211). The capability statement PDF — the artifact a government evaluator reads
— would print with the logo, theme toggle and an accent-red Contact CTA pill on it.
Controller confirmed the finding directly before dispatching the fix.

Tasks 9-10: fix round 1/5 (1 addressed, 0 open; commit 2f7d72a).
The obvious fix was a trap and the dispatch called it out: `capability-statement.jsx:41`
uses its OWN `<header>` for the title row containing the `<h1>`, so a blanket `.rd header`
rule would have deleted the document title from the PDF — a worse bug than the original.
Fixed with direct-child selectors `.rd > header, .rd > footer`, and `.rd nav` dropped as
redundant (it would also have hidden in-page breadcrumbs).

Controller verification of the fix:
- Selector is now `.rd > header, .rd > footer`.
- Exactly four `<header>`/`<footer>` elements exist in `src/components/rd` + `src/pages`:
  Navbar.jsx:75/96 and Footer.jsx:75 are direct `.rd` children (hidden — intended);
  PastPerformanceCard.jsx:13 and capability-statement.jsx:41 are nested (survive).
- `className="rd"` appears exactly once, Layout.jsx:12 — no second container to worry about.
- 42/42 tests, check:claims green.

Tasks 9-10: complete (commits f7b57b0..2f7d72a, 1 fix round, re-review ADDRESSED —
spec ✅, quality approved after fix).

---

## Task 11 pre-dispatch check

Controller suspected a plan defect: `scripts/generate-sitemap.mjs` does
`await import("../src/data/rdIndustries.js")`, and that file uses ESM `export const` while
package.json has no `"type": "module"` — which classically makes node parse it as CJS and
throw. **Tested: it works.** Node 24's module-syntax detection reparses a typeless `.js`
as ESM when ESM syntax is present. All 12 industry routes import fine. My suspicion was
wrong; no plan change needed.

Ruling: **The MODULE_TYPELESS_PACKAGE_JSON warning is expected and must NOT be
"fixed".** Node prints a warning on that import literally advising `add "type": "module"
to package.json`. Doing so would reclassify every `.js` file in the project as ESM and is
forbidden by the plan's Global Constraints. Carried into the Task 11 dispatch as an
explicit prohibition, because the warning text is persuasive and points the wrong way.
Cost if wrong: a cosmetic warning line in build output.

Task 11: implemented — commit 26a8992, 46/46 tests, 33 routes. Implementer correctly
flagged a REGRESSION rather than papering over it: 20 URLs present in the old committed
sitemap were missing from the generated one, and 2 new URLs appeared that should not have.

Ruling: **Both are real defects in my plan's generator and are load-bearing — fix, do not
park.** The whole reason we kept the `round.digital` domain (spec §1, brand decision) was
to preserve indexed authority. A sitemap that silently drops 17 real URLs works directly
against that. Dispatched as fix round 1.

Defect A — the generator wired only `RD_INDUSTRIES` as a dynamic-route source. Three more
exist. Controller verified exact exports and counts against each page's own
`getStaticPaths` so the sitemap cannot disagree with what Next builds:
  `/blogs/[slug]`   → `blogs.map(b => b.slug)` from `src/data/blogs.js` — 8
  `/works/[slug]`   → `Object.keys(rdCases)` from `src/data/rdCases.js` — 3
  `/careers/[slug]` → `jobPositions.map(j => j.slug)` from `src/data/jobPositions.js` — 6

Defect B — `/jobs` and `/pricing` were newly ADDED, but both are 301 redirect sources
declared in `next.config.mjs` (`/jobs`→`/careers`, `/pricing`→`/services/engagement-models`).
A redirecting URL in a sitemap is an SEO defect. Their page files still exist but are
unreachable. Excluding them via a documented `REDIRECTED` set.

Finding, NOT a regression: the old hand-maintained sitemap listed 6 `/works/*` URLs but
`rdCases` holds only 3 entries. Three of those URLs pointed at case studies that do not
exist. The old file had drifted from reality — precisely the failure this task removes.
Generating 3 is the correct outcome; the implementer was told not to invent entries.

Expected reconciliation: +17 restored, −2 redirect sources, −3 correctly-dropped stale
works URLs.

Task 11: fix round 1/5 (2 addressed, 0 open; commit ab5c3e9). 48 routes, up from 33.

Controller verification — reconciliation is exact:
- 48 `<url>` entries, 48 unique `<loc>` values (zero duplicates).
- `/jobs` and `/pricing` absent.
- Families: blogs 9 (index + 8), works 3, careers 7 (index + 6), industries 13
  (index + 12), services 9 (index + 8), government 2.
- Diff of old committed sitemap vs generated: **only in OLD** = the 3 phantom
  `/works/*` URLs; **only in NEW** = nothing. Every real previously-indexed URL survived.
- The MODULE_TYPELESS_PACKAGE_JSON warning appears in `npm run sitemap` output as
  expected and was correctly left alone.

Task 11: complete (commits f7b57b0..ab5c3e9 for this task's range 26a8992..ab5c3e9,
1 fix round, re-review ADDRESSED both findings — spec ✅, quality approved after fix).
Re-review confirmed the expansion uses live slug expressions from the data modules, not a
hardcoded URL list, and that the data imports stay inside the direct-invocation guard so
importing the module for tests has no side effects.

---

## Task 12 (dead-code removal)

Task 12: implemented — commit 33b6c4b. Deleted `src/Home1/`, `components/sf/`,
`components/home/`, `components/blog/`, `components/about/`, `components/industries/`,
`AndySmith.jsx`, and `components/ui/OverlayDemo.jsx` (plus its dead re-export line in
`ui/index.js` — the barrel breakage flagged pre-dispatch). SPARED `components/service/`:
the grep guard hit a reference and the implementer escalated rather than rationalising,
exactly as instructed.

Ruling: **Delete `src/components/service/` — the spared hit is not a real reference.**
Investigated directly. It is dead three ways: (1) the only reference in all of `src/` is a
COMMENTED-OUT import at `src/pages/pricing/index.jsx:2`; (2) that page is unreachable —
`/pricing` is a permanent 301 redirect source (`next.config.mjs:8`), the same fact that
excluded it from the sitemap in Task 11; (3) the tree has 5 imports of `../constant` that
resolve to a nonexistent `src/components/constant`, so it never compiled. Also removed the
dead comment, since it was the sole source of ambiguity and would invite a future
"restore" of a tree that never worked.
Cost if wrong: a component tree recoverable from git history in one command.

Task 12: fix round 1/5 (1 addressed, 0 open; commit 540b511). 27 files removed.

Controller verification after deletion:
- **`verify-imports.mjs` across ALL of `src/`: 162/162 local imports resolve.** The
  codebase now has zero unresolved imports; before this branch it had 7.
- All 7 dead trees confirmed absent. Survivors: `contact`, `footer`, `icons`, `layout`,
  `navbar`, `rd`, `seo`, `ui`.
- 46/46 tests, claims guard passed, `npm run sitemap` still writes 48 routes.

Task 12: complete (commits ab5c3e9..540b511, 1 fix round, re-review ADDRESSED).
Re-review confirmed 26 service files removed as full-file deletions, the one-line comment
removal in `pricing/index.jsx` with its two live imports untouched, and no modification to
any surviving file outside that one-liner.

Task 12: minor (deferred): a JSX comment `{/* <PricingSection/> */}` remains in
`src/pages/pricing/index.jsx`. Harmless — it is not an import and resolves to nothing —
but it is a leftover pointer to a deleted tree in a page that is itself redirect-shadowed.
Cleanup candidate, not a defect.

---

## ALL 12 TASKS COMPLETE

Branch: feat/enterprise-repositioning-foundation, 17 commits, faf897c..540b511.
Final gates verified by controller:
- `npm test` — 46/46 passing
- `npm run check:claims` — passing
- `npm run sitemap` — 48 routes written
- `verify-imports.mjs` across all of `src/` — 162/162 resolved (was 7 unresolved pre-branch)

Final whole-branch review complete. Verdict: **merge after named fixes**. 4 Critical,
7 Important. Reviewer independently confirmed 46/46 tests, claims guard passing, zero
references to any deleted tree (no dynamic require, no import(), no string-built paths),
and coherent un-clobbered package.json scripts.

### Rulings on the final review

Ruling: **C1 (location contradiction) — fix only the unambiguous half; the rest is the
user's call and stays open.** The homepage meta at `src/pages/index.js:523` still reads
"Toronto, Dallas & Pune", contradicting both the client's stated delivery footprint
(Canada + India) and the Organization schema this branch just corrected. That string is
wrong on every account and gets fixed. BUT `/about` and `/contact` publish full street
addresses in Allen TX and Pune, and I do not know whether those offices are real — the
client never answered spec §12 items 4/5. **I will not delete a possibly-real office
address, and I will not certify an unverified one.** Either the pages are wrong or
`facts.mjs` is too narrow; only the client can say which. Escalated, not guessed.
Cost if wrong: the schema/page contradiction persists until the client answers.

Ruling: **C4 (the /government page links to perfectum.ai, which advertises SOC 2 Type II)
— no code fix; this is the client action item from spec §12 item 2.** The link is genuine
evidence the platform exists, and removing it weakens verifiability. The actual defect is
the claim on perfectum.ai, which I cannot reach. Surfaced as a hard pre-merge blocker.
Cost if wrong: a bid evaluator follows the link to an unearned certification claim.

Ruling: **I7 (typography half-delivered) — defer to Plan B.** `globals.css:187` still
hardcodes Space Mono and `text-transform: uppercase` on all `.rd h1-h4`. Completing the
spec §10 type shift means touching every page and is explicitly Plan B scope. Noted as a
visual item to confirm on the Mac. Cost if wrong: gov headings render uppercase, which is
cosmetic and reversible.

Ruling: **Accept deferred minors 1 and 3; fix 2, 4 and 5.** Shallow freeze (1) is
harmless — both consumers only filter. `NOT_PURSUING` word order (3) is subsumed by the
I1 whitespace fix. The double-negative error string (2), the CSS/TOKENS drift guard (4)
and the missing URL-shape assertion (5) are all cheap and go in the fix wave.

ONE fix wave dispatched (per process: one fix dispatch, one scoped re-review, then
adjudicate residuals — no second wave).

### Fix wave outcome

Commits e86d7cf, b859140, d392da4, 58e97c2. 57/57 tests. Scoped re-review verdicted ALL
ten findings ADDRESSED with no new breakage, and assessed the restructured claims guard in
full: prefix/suffix branches complementary with no gap; `CERT_GAP` is a bounded
`[\s-]{0,40}` character class that cannot bridge word characters or unrelated clauses; no
catastrophic-backtracking risk; `lastIndex` reset preserved so all patterns stay stateless.

Ruling: **My own fix instruction was incomplete and I corrected it mid-wave.** The
whole-branch review named `"SOC 2 audited"` as a claim to catch; my verb list said
`hold|holds|attained|awarded` and omitted it. Caught by adversarially testing the guard
myself rather than trusting the report. Sent back as completion of the same wave (not a
second wave), with an explicit warning to add `audited` but NOT `audits` — the plural
appears in legitimate copy about carrying CLIENTS through their audits.
Cost if wrong: a false positive on real service marketing. Verified: does not occur.

Controller adversarial verification of the final guard: **17 attack strings caught, 9
honest phrasings correctly allowed**, including both directions of the subtle case —
"We hold ISO 27001" caught, "We hold weekly reviews and are aligned to ISO 27001" allowed.

### Residual — PARKED, not fixed

Ruling: **Park the homepage `keywords` attribute (`src/pages/index.js:524`).** The
re-review noted it still lists "Toronto, Dallas, Pune" after the `description` was
corrected. Two reasons not to fix it here. First, it is blocked on the same unanswered
client question as the `/about` and `/contact` addresses — if Dallas and Pune are real
offices, the keywords are correct and the schema is too narrow. Second, the line is a
larger problem than its locations: it is entirely SMB-targeted ("AI development for small
business", "SMB software development", "AI agency for SMB", "fixed price software
development"), which is the exact positioning this whole programme moves away from.
Rewriting it belongs with the homepage repositioning, explicitly deferred to Plan B in the
plan's own self-review. Fixing only the city names would leave the contradiction that
actually matters.
Cost if wrong: a meta keywords attribute — which Google has ignored since 2009 — carries
stale positioning until Plan B. No procurement risk; the certification names were already
removed from it in Task 3.

---

## BRANCH COMPLETE

feat/enterprise-repositioning-foundation — 21 commits, faf897c..58e97c2.
Final gates, all verified by the controller directly:
- `npm test` — 57/57 passing
- `npm run check:claims` — passing, and now chained FIRST in `npm run build`
- claims guard adversarial test — 17 attacks caught, 9 honest phrasings allowed
- `verify-imports.mjs` across all of `src/` — 112/112 resolved (7 unresolved pre-branch)
- `npm run sitemap` — 48 routes, zero loss of any real previously-indexed URL

NOT VERIFIED (impossible on this host): `npm run build`, `npm run lint`, `npm run dev`,
any browser render, and the print/PDF output. The user must run these on the Mac.

Reported, NOT acted on (out of scope — for final review triage):
- Orphaned data now that `service/`/`sf/` are gone: `src/constant/constant.js` (orphaned
  all along — the `service/` imports never resolved to it), `src/data/sfServices.js`,
  `src/data/sfCaseStudies.js`, `src/data/serviceArticles.js`.
- Redirect-shadowed page files still present and unreachable: `src/pages/pricing/index.jsx`,
  `src/pages/jobs/index.jsx`. Deliberately left — deleting page files interacts with both
  the sitemap generator and the redirect config and belongs in a later phase.

Ruling: **Expand Task 3's scope to also fix `src/data/rdHome.js:110`.** The guard's first
real run found a live unqualified claim the spec had missed — the homepage "Why us" card
reads "SOC 2 compliant engineering with zero-trust architecture". Task 3 as planned only
touches `src/components/seo/index.js`, which would leave `npm run check:claims` red and
block `npm run check` for every remaining task. Load-bearing, so ruled rather than parked.
Cost if wrong: one extra file in Task 3's diff.

