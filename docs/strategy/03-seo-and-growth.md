# Information architecture, SEO and go-to-market

**Round Digital website rebuild · August 2026**

---

## 1. Sitemap

58 indexed routes. Generated at build time from the route tree plus data
sources (`scripts/generate-sitemap.mjs`), so it cannot drift from what Next
actually builds.

```
/                                    Home
/services                            Overview + comparison table
  /services/it-services              NAICS 541512
  /services/ai-enablement            NAICS 541511
  /services/research-data            NAICS 541910
  /services/staffing                 NAICS 561320
  /services/training                 NAICS 611430
/industries                          Who we serve
  /industries/[slug]                 12 sectors
/government                          Public-sector hub
  /government/capability-statement   Print-optimised, one document
  /government/naics-psc-codes        Primary + secondary codes, size standards
  /government/certifications         Certification + partnership roadmap
  /government/contract-vehicles      Vehicle position + 4 routes open today
  /government/past-performance       Three sourced references
  /government/teaming                Sub-to-us / we-sub-to-you
/enterprise                          Enterprise & mid-market
/nonprofit                           Nonprofit & social impact
/works                               Case studies (verified record)
  /works/[slug]                      3 engagements
/products                            Perfectum.ai, ShipCarte
/about                               Company
  /about/women-owned                 Ownership, control, supplier diversity
  /about/leadership                  Accountability model
/blogs                               Insights
  /blogs/[slug]                      8 articles
/careers  ·  /careers/[slug]         6 roles
/contact  ·  /rfp                    Two intake routes, deliberately separate
/privacy  ·  /terms  ·  /accessibility
404
```

### Route migrations (301, in `next.config.mjs`)

Eight SMB-era service pages collapse into five pillars; three unverifiable case
studies retire. Every legacy URL redirects to its closest surviving match so
indexed authority transfers rather than being lost.

| From | To |
|---|---|
| `/services/cloud-solutions`, `/custom-software`, `/cybersecurity`, `/digital-transformation` | `/services/it-services` |
| `/services/ai-machine-learning` | `/services/ai-enablement` |
| `/services/data-analytics` | `/services/research-data` |
| `/services/global-talent` | `/services/staffing` |
| `/services/engagement-models`, `/pricing` | `/government/teaming` |
| `/works/ai-customer-service-automation`, `/banking-digital-transformation`, `/ai-document-processing` | `/works` |
| `/jobs` | `/careers` |

Verified: 63 internal links crawled, zero broken, zero redirect chains from
site navigation.

---

## 2. Conversion journeys

| Journey | Path | Conversion |
|---|---|---|
| **Contracting officer** | Search by NAICS → `/government` → codes + past performance → capability statement → `/rfp` | Solicitation received |
| **Prime small-business liaison** | Search "small business IT subcontractor" → `/government/teaming` → capability statement → `/rfp` | Teaming inquiry |
| **Supplier diversity manager** | Search "women owned technology company Canada" → `/about/women-owned` → certification status → `/rfp` | Supplier registration |
| **Enterprise buyer** | Search service term → pillar page → `/works` → `/contact` | Scoping call |
| **Nonprofit programme lead** | Search "program evaluation services" → `/services/research-data` → `/nonprofit` → `/contact` | Scoping call |

Two intake routes are kept separate on purpose: `/rfp` carries deadline,
enquiry type and service selection and routes to bid scoping; `/contact` is for
everything else. Merging them would put solicitations in a general inbox.

---

## 3. Keyword strategy

Four intent layers, prioritised by qualified value rather than volume.

### Layer 1 — Procurement intent (lowest volume, highest value)

| Cluster | Target page |
|---|---|
| women owned technology company · women owned IT services Canada | `/about/women-owned` |
| supplier diversity technology partner · diverse supplier IT | `/about/women-owned` |
| small business IT subcontractor · subcontracting partner IT services | `/government/teaming` |
| capability statement IT services small business | `/government/capability-statement` |
| NAICS 541910 contractor · public opinion polling contractor | `/government/naics-psc-codes`, `/services/research-data` |
| TBIPS supplier · ProServices vendor · CanadaBuys IT supplier | `/government/contract-vehicles` |

### Layer 2 — Service intent (the commercial engine)

| Cluster | Target page |
|---|---|
| AI governance consulting · NIST AI RMF · ISO 42001 consulting | `/services/ai-enablement` |
| AI enablement services · enterprise AI adoption | `/services/ai-enablement` |
| survey programming services · program evaluation services | `/services/research-data` |
| IT staff augmentation Canada · nearshore staff augmentation | `/services/staffing` |
| corporate AI training · workforce development programs | `/services/training` |
| legacy system modernization · managed IT services government | `/services/it-services` |

### Layer 3 — Sector intent

12 `/industries/*` pages, each with its own challenges, compliance context and
FAQ. **No geo pages for cities we have no presence in** — that is both an SEO
liability and a bid-integrity liability.

### Layer 4 — Topical authority

`/blogs` today; a guides cluster is the next content investment. Six planned
reference documents are listed on `/blogs` unlinked, because linking to an
unwritten page is worse than an honest "not yet".

---

## 4. Technical SEO — implemented

| Item | Status |
|---|---|
| Titles + meta descriptions, per page | Done — every route sets its own |
| Canonical tags | Done — root canonical matches sitemap trailing slash |
| Heading structure | One `h1` per page, ordered headings, verified by axe |
| Internal linking | Every pillar cross-links the loop; industries map to pillars |
| XML sitemap | Generated at build, 58 routes, redirect sources excluded |
| robots.txt | Allow-all + sitemap reference |
| Open Graph + Twitter | Done; OG image regenerated on-brand at 1200×630 |
| Structured data | `Organization` (from verified facts), `Service` per pillar, `FAQPage`, `Article`, `JobPosting`, `BreadcrumbList` |
| Image optimisation | **Enabled** — `unoptimized: true` removed; AVIF/WebP served |
| Font loading | Self-hosted via `next/font`; no render-blocking request |
| Core Web Vitals posture | No layout shift from fonts; no blocking third-party scripts; motion is transition-only |
| Keyword meta | Kept short and factual; every term is a claim we can substantiate |

**Not done, deliberately:** `hreflang`. It becomes correct once regional pages
exist; adding it now would annotate pages that do not differ.

---

## 5. Content calendar — first two quarters

Each is a working reference document, not a blog post. Byline them once the
leadership record is finalised — named, credentialed authorship is the E-E-A-T
signal this topic cluster needs.

| Quarter | Title | Serves |
|---|---|---|
| Q1 | Implementing NIST AI RMF: a control-by-control walkthrough | AI enablement |
| Q1 | TBIPS, ProServices or SBIPS: choosing a Canadian federal supply arrangement | Procurement intent |
| Q1 | Designing a program evaluation that survives an audit | Research |
| Q2 | ISO 42001 readiness: what an AI management system actually requires | AI enablement |
| Q2 | WCAG 2.2 AA and Section 508 for public-sector digital services | IT services |
| Q2 | Registered apprenticeship as an enterprise workforce strategy | Training |

---

## 6. Go-to-market by region

### Canada — primary near-term market

The only market where women-owned status converts **today**, and where the
existing Ontario delivery presence and Forbes recognition are immediately
credible.

| Move | Why now |
|---|---|
| CanadaBuys registration + Procurement Business Number | Free, days, prerequisite to everything federal |
| WBE Canada certification | ~60–90 days; the diversity credential that works here |
| Engage OSME | Free SME bidding support, direct insight into evaluation |
| ProServices, then TBIPS | ProServices is the lower barrier and the sensible first vehicle |
| Innovative Solutions Canada | Funds and buys from Canadian SMEs — direct fit for the AI pillar |

### United States — small business, not diversity set-asides

**Closed to us:** WOSB, EDWOSB, 8(a), SDB, HUBZone — all require US-citizen
ownership. **Open to us:** plain small-business status, which carries no
ownership-citizenship test and is by far the largest set-aside category.

The binding constraint is performance location. Registered in Wyoming with all
delivery in Canada and India, solicitations requiring US-performed work,
US-persons access or CUI handling are unreachable independently.

**Sequence:** state & local and commercial enterprise first (no federal
performance restrictions, much lower barrier) → federal as subcontractor →
federal as small-business prime.

**Highest-ROI single investment: a real US delivery presence.** Texas (DIR
vehicle, Dallas/Austin/San Antonio talent) and Virginia (VITA, proximity to
federal buyers) are the strongest candidates. Do not site for HUBZone — that
programme is closed to us regardless of location.

### Asia — treated as distinct countries, not a region

| Country | Role | Rationale |
|---|---|---|
| **India** | Delivery, not a bid market near-term | The Noida centre is a cost and follow-the-sun argument for commercial buyers, and must be presented with the security and residency posture to match. |
| **Singapore** | First commercial beachhead | English-language, strong rule of law, regional HQ concentration, mature digital-government procurement. Lowest operational friction of any Asian market. |
| **Japan / Australia–NZ** | Later, partner-led only | Attractive but relationship-gated; entry only via a local partner, never direct. |

**Deliberately not pursued:** markets requiring a local entity, local-language
delivery or an in-country partner we do not have. Asia is not one market and
should never be addressed as one.

### Cross-region unlock — corporate supplier diversity

Large corporates run diverse-supplier programmes with real spend targets and
generally accept **WBE Canada or WEConnect** certification. This channel has no
citizenship barrier, works in all three regions, and closes faster than any
government pursuit. **Treat it as a first-class revenue channel, not a
compliance checkbox.**

---

## 7. Roadmap and KPIs

### 0–90 days — remove the free blockers

- Close every *Pending confirmation* field (UEI, CAGE, entity numbers)
- Complete the SBA DSBS profile; expand SAM.gov to all five NAICS codes
- CanadaBuys registration + Procurement Business Number
- File WBE Canada and WEConnect applications
- Join AAPOR / Insights Association (research credibility in weeks)
- Publish two reference guides
- **KPI:** codes live in both systems · 2 applications filed · 10 prime
  conversations opened · capability statement downloaded by 25 distinct orgs

### 90–180 days — first awards

- ProServices application; TBIPS preparation
- Two named teaming agreements signed
- ISO 9001 documentation underway
- Survey-platform partnership (Qualtrics / Forsta / Voxco) — a delivery channel
  *and* a scored credential in 541910 bids
- Two further past-performance references documented with named contacts
- **KPI:** WBE Canada awarded · 1 subcontract award · 5 references · 4 guides

### 180 days–12 months — compounding

- ISO 27001 and ISO 42001 underway; SOC 2 Type I
- US delivery presence decision made and executed
- SBA Mentor–Protégé agreement — bid the mentor's past performance while
  retaining small-business status
- Apprenticeship registration converting training into publicly funded revenue
- Perfectum listed on AWS and Azure Marketplace — a genuine backdoor into
  federal revenue through vehicles we do not hold
- **KPI:** 1 public-sector prime award · 3 diversity programmes registered ·
  first 541910 award · organic procurement traffic up quarter on quarter

### Measurement

| Layer | Metric |
|---|---|
| Demand | Organic sessions on Layer-1 procurement queries |
| Engagement | Capability-statement views + print events |
| Conversion | `/rfp` submissions by enquiry type |
| Qualification | Go/no-go ratio; reason codes on every no-go |
| Pipeline | Teaming agreements signed; bids submitted as sub vs prime |
| Delivery | Reference count; renewal rate |

**Instrument `/rfp` and `/government/capability-statement` first.** They are the
two pages where intent is unambiguous, and the only two whose traffic is worth
optimising for directly.
