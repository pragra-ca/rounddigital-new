# Discovery, fact verification and competitive position

**Round Digital website rebuild · August 2026**

---

## 1. How claims were handled

Every factual statement on the site resolves to one of four buckets. Only the
first is published as fact. The rule is enforced mechanically, not by good
intentions: `scripts/check-claims.mjs` runs first in `npm run build` and fails
the build on unearned certification language anywhere in `src/`.

| Bucket | Treatment on the site |
|---|---|
| **Verified** — externally corroborated | Published, with a link to the source |
| **Company-stated** — plausible, not yet corroborated | Published only where low-risk, never on a bid-facing page as fact |
| **Missing** | Field rendered as *Pending confirmation*, never as a value |
| **Recommendation** | Published as roadmap with a target date, never as status |

---

## 2. Verified facts

These are corroborated by a source outside the company and are published with
that source linked (`src/content/facts.mjs`).

| Fact | Source |
|---|---|
| Pragra named to Forbes Canada's Best Startup Employers 2024 | forbes.com — Forbes states it accepts no payment for placement |
| Founded 2017, headquartered Mississauga, Ontario | Forbes, Crunchbase |
| Technical training delivered in Mississauga and Noida, plus online | Course Report |
| Perfectum.ai — multi-tenant LMS, SCORM 1.2 / SCORM 2004 / xAPI, 1,200+ academies | perfectum.ai |
| ShipCarte — multi-carrier logistics platform, operating since 2019 | shipcarte.com |

---

## 3. Requires company confirmation

Published as *Pending confirmation* in `src/data/procurement.js`. Each renders
as a labelled blank, never as a number.

| Item | Why it matters | Blocks |
|---|---|---|
| **UEI (SAM.gov)** | First field on every US federal evaluation | Capability statement completeness |
| **CAGE / NCAGE code** | Same | Capability statement completeness |
| **Canada Procurement Business Number** | Prerequisite to any Canadian federal bid | CanadaBuys registration |
| **Entity names and numbers** (Wyoming, Canada federal, India) | Required for the corporate chain | Certification applications |
| **Written Pragra LLC → Round Digital succession** | Public record shows Perfectum AI as "formerly PRAGRA LLC"; the chain needs documenting | Capability statement, certifications |
| **Ownership and officer record** | WBE Canada and WEConnect assess ownership *and demonstrated control* | All diversity certification |
| **Headcount** | LinkedIn shows ~61 for Pragra against a stated 20+ | Evaluator confidence |
| **US immigration status of the qualifying owner** | Determines WBENC eligibility only | One Tier-1 item |
| **Current AWS / Microsoft / Google partner tiers** | Partner status is a scored factor in many evaluations | Partnership roadmap |

### The control test is where certification applications fail

Certifying bodies do not audit websites. They audit documents, then interview.
51% ownership alone is not sufficient — the qualifying owner must hold the
highest officer position, board control and signing authority. If the public
record and the share register disagree, the discrepancy is discoverable and
damaging. **Sequence the work: documents first, operating reality second,
public profiles last.** Reversing that order manufactures the very discrepancy
the exercise exists to remove.

This is why `/about/leadership` publishes the accountability *model* and holds
named biographies for company completion. Publishing a title the documents do
not yet support would be the single most damaging thing on the site.

---

## 4. Claims removed during the rebuild

These existed on the previous site and could not be substantiated. All were
removed, not softened.

| Removed | Where it was | Why |
|---|---|---|
| Three case studies with anonymous clients and precise metrics — *−75% response time, 92% resolved without a human, −60% operating costs, 3× performance, $2M saved annually, 98% extraction accuracy, −90% manual processing* | `src/data/rdCases.js` | Unverifiable outcome and savings figures attributed to unnamed clients. Mandate forbids invented project outcomes and statistics. |
| Attributed testimonials, including a named quote from "David Miller, VP Engineering" | same | Fabricated testimonial. |
| Four invented author personas — "Dr. Sarah Chen", "Michael Rodriguez", "Emily Thompson", "James Mitchell" — across 8 articles | `src/data/blogs.js` | Invented people, including a fabricated doctorate. Replaced with organisational authorship. |
| "Proven at 10,000+ inquiries a day" (×3 occurrences) | `src/data/rdIndustries.js` | Unevidenced throughput claim. Reworded to "sized and load-tested against your historical peak". |
| "SOC 2 compliant engineering", `"SOC 2"` and `"ISO 27001"` as standalone badges | previously removed; guard now prevents recurrence | Certifications not held. |

The three retired case-study URLs 301 to `/works` so their indexed authority
transfers. `/works` is now generated from the same verified past-performance
module the capability statement uses — there is deliberately no separate
marketing case-study store that could drift from the procurement record.

---

## 5. Competitive position

### The benchmarks

TCS and Tech Mahindra were studied for presentation standard, not imitated.
What they do well is service clarity and global legibility. What they cannot do
is answer a small buyer quickly, or put a named decision-maker one step from
the engagement.

**We do not compete on headcount and should never invite that comparison.**

### Where the real competition sits

| Competitor type | Their advantage | Where we win |
|---|---|---|
| **Global integrators** (TCS, Tech Mahindra, Accenture Federal) | Scale, vehicles, past performance | Speed, named accountability, no minimum contract size. Better as *mentors and primes* than as opponents. |
| **Federal mid-tiers** (ICF, Maximus, Booz Allen) | Vehicles, clearances, agency relationships | We subcontract to them rather than displace them. |
| **Boutique IT shops** | Price, agility | They sell one pillar. We close the loop and carry research and training credibly. |
| **Staffing agencies** | Bench depth, speed | Practitioner screening with written assessment, plus the ability to *train* a candidate to the stack. |
| **Market research firms** (541910) | Methodological credibility, panel access | Instrument engineering and reproducible pipelines from an actual technology firm. |

### The structural argument

The five pillars are one lifecycle: **build it, staff it, train it, prove it**,
with AI enablement running through all four. Large integrators sell towers and
leave. Nobody hires their way out of a skills gap and nobody consults their way
out either. The loop is true of the actual service mix, which is what makes it
defensible under evaluation rather than being a slogan.

### The under-contested opening

**NAICS 541910 — Marketing Research and Public Opinion Polling.** Materially
less crowded than 541512, where every IT firm in the market is stacked up, and
backed by statutory evidence-building obligations that make demand recurring
rather than occasional. Expect the first public-sector award to come through
541910 or 611430 rather than through IT. The site therefore gives research and
training equal visual weight to IT rather than treating them as adjacent.

### The differentiator scale cannot answer

**AI assurance.** The gap in enterprise AI is not modelling capability — it is
governance, evaluation evidence and control mapping. Very few services firms
sell the second half, which is precisely the half that gets a system into
production in a regulated environment. Paired with **ISO/IEC 42001**, which
almost no services firm holds, this is the strongest available differentiator
and it sits directly on the founder's audit and QA background.

---

## 6. What this site does that competitors do not

Three deliberate choices, each of which costs a little and buys a lot with a
procurement reader:

1. **It publishes what is not held.** Zero certifications, no contract vehicle,
   no US delivery centre, no facility clearance, no government past performance.
   Each stated plainly with the roadmap and the date.
2. **It states ineligibility.** WOSB, EDWOSB, 8(a), SDB and HUBZone are named
   as closed to us, with the reason. Most small suppliers stay vague here and
   lose credibility during a responsibility determination.
3. **Every company fact links to its source.** A reader can check the whole
   page without contacting us.

A supplier who discloses a limitation before award is cheaper to work with than
one who discovers it during performance. That is the argument, and the site is
built to make it structurally rather than to assert it.
