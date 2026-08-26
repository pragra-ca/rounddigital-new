# Brand, design system and message architecture

**Round Digital website rebuild · August 2026**

---

## 1. Creative directions considered

Three directions were developed, each derived from the approved RD monogram
rather than from a competitor's aesthetic. The monogram is a constructed mark:
rectilinear counters meeting one large bowl radius, in a warm red sampled at
**#FD3F42**.

| | **A — The Record** | **B — Engineered Grid** ✅ | **C — Civic Modern** |
|---|---|---|---|
| Reference | Standards document, annual report | Swiss technical / systems | Warm institutional |
| Display type | Transitional serif | Grotesk (Inter Tight) | Humanist grotesk + serif accents |
| Radius | 4px | 2px + one 20px bowl corner | 12px |
| Density | High, sidenotes | High, tabular | Moderate, image-led |
| Risk | Reads conservative | Needs discipline to avoid coldness | Closest to a consultancy template |

### Recommended and executed: B — Engineered Grid

Chosen for four reasons:

1. **It comes from the logo.** Three square corners and one bowl corner —
   `border-radius: 2px 2px 20px 2px` — encodes the monogram literally. No
   competitor can copy the signature without copying the mark.
2. **It suits the reader.** Procurement evaluators scan for facts. Tables,
   specification blocks and code bars are first-class components, not
   afterthoughts bolted onto a marketing layout.
3. **It is maximally differentiated** from the photo-led, gradient-heavy
   presentation of the scale competitors.
4. **It gives red a job.** Red is structural — rules, markers, active states —
   never decorative fill.

Warmth comes from editorial typography, sentence-case headings and plain-spoken
copy rather than from stock photography.

---

## 2. Design system

Full implementation: `src/styles/system.css`. Everything is namespaced `.rds`.

### Colour — measured, not chosen

Every pair was computed against WCAG 2.2 before being written into the
stylesheet. `src/content/contrast.mjs` mirrors the tokens and the test suite
fails if the two drift.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--bg` / `--bg-2` / `--bg-3` | `#ffffff` `#f7f8f9` `#edeff2` | `#0b0f14` `#131a21` `#1c242d` | Surfaces |
| `--fg` | `#0b0f14` (19.22:1) | `#ffffff` (19.22:1) | Body, headings |
| `--fg-2` | `#47515c` (8.08:1) | `#b9c2cc` (10.66:1) | Secondary prose |
| `--fg-3` | `#5f6a77` (4.78:1 on bg-3) | `#8a95a1` (5.15:1 on bg-3) | Metadata |
| `--brand` | `#fd3f42` | `#fd3f42` | **Graphics only** — 3.52:1 |
| `--brand-fg` | `#c81e22` (5.73:1) | `#ff7175` (7.20:1) | Accent **text** |
| `--brand-solid` / `-fg` | `#c81e22` + white (5.73:1) | `#fd3f42` + ink (5.46:1) | Solid accent button |
| `--control` | `#8a939d` (3.12:1) | `#5a6570` (3.23:1) | Input and control borders |

**The constraint that shaped the design:** the logo red cannot carry white text
— `#FD3F42` on white measures **3.52:1**, below the 4.5:1 minimum. Rather than
darken the brand (losing fidelity) or ship the failure, the primary button
became an ink/paper inversion at 19.22:1 and red was reserved for structure.
The accessibility requirement produced the more distinctive design.

Dark mode flips the accent-button label to ink, because white on the brand red
would fail. Per-theme label colours are the only correct answer.

### Typography

| Role | Family | Notes |
|---|---|---|
| Display | Inter Tight 500–700 | Tight apertures read as engineered at size |
| Body | Inter 400–600 | Same superfamily, so the two harmonise |
| Mono | JetBrains Mono 400–700 | Codes, identifiers, tabular data, eyebrows |

Self-hosted via `next/font` — no render-blocking round-trip to Google, and a
size-adjusted fallback so there is no layout shift. Headings are **sentence
case**; uppercase is reserved for the mono eyebrow, where it reads as a label.

### Geometry, spacing, motion

- Radius: `--r: 2px`, `--r-bowl: 20px` (one corner, bottom-right)
- Spacing: 4px base — 4/8/12/16/24/32/48/64/96/128
- Grid: 1200px max, 24px gutter
- Motion: transitions only, 0.15–0.2s. No parallax, no autoplay, no
  scroll-jacking. `prefers-reduced-motion` removes all of it.

### Component inventory

`Container` · `Section` · `SectionHead` (the numbered `01 ─────` device) ·
`Eyebrow` · `Button` (primary / accent / ghost) · `Panel` · `PanelLink` ·
`Status` · `Note` · `Grid` · `TableWrap` · `Breadcrumb` · `Faq` · `CtaBand` ·
`LegalPage` · `Arrow`

Two components exist specifically to tell the truth:
- **`Status`** — renders `held` / `progress` / `planned`. There is no "badge"
  variant, so an unearned credential *cannot* be rendered as an achievement.
- **`Note`** — marks items pending company confirmation, in the reader's view.

---

## 3. Message architecture

### Positioning statement

> Round Digital builds the system, staffs it, trains the people who run it, and
> measures whether it worked — so the capability is still there after we leave.

### Value proposition

Enterprise rigour with the speed, specialisation and personal accountability of
an expert partner. One supplier closes the delivery loop that large integrators
leave open, with a named lead who stays on the engagement and one step of
escalation to someone who can commit the company.

### Homepage headline

**Build it. Staff it. Train it. Prove it.**

Supporting line: *Round Digital builds the system, staffs it, trains the people
who run it, and measures whether it worked — so the capability is still there
after we leave.*

### Elevator pitch (30 seconds)

> Round Digital is a women-owned technology and workforce services company,
> successor to Pragra, which has been training technical practitioners since
> 2017. We do five things that fit together: build systems, staff them, train
> the people who run them, and measure whether any of it worked — with AI
> enablement running through all four. We work with government, enterprise and
> nonprofit buyers across Canada, the United States and India. We are small
> enough that the person running your engagement can make decisions, and honest
> enough to publish what we do not yet hold.

### Short description (50 words)

> Round Digital is a women-owned technology and workforce services company
> delivering IT services, AI enablement, data and survey research, staffing, and
> corporate training for government, enterprise and nonprofit buyers across
> Canada, the United States and India. Successor to Pragra LLC, founded 2017.

### Long description (120 words)

> Round Digital is a women-owned technology and workforce services company,
> successor to Pragra LLC, founded in Mississauga, Ontario in 2017 and named to
> Forbes Canada's Best Startup Employers in 2024.
>
> We deliver five linked services: IT services, AI enablement and automation,
> data and survey research, staffing and workforce solutions, and corporate and
> technical training. They form one delivery loop — build the system, staff it,
> train the operators, measure the outcome — which is why the capability remains
> after an engagement ends.
>
> We serve government, enterprise and nonprofit buyers from delivery centres in
> Mississauga, Ontario and Noida, India. We publish our certification roadmap,
> our contract-vehicle position and our performance constraints openly, so an
> evaluation does not have to discover them.

### Procurement profile (for SAM.gov / DSBS / capability statement)

> Round Digital provides IT services, AI enablement and governance, survey
> research and program evaluation, staffing, and technical training. Primary
> NAICS 541512, 541511, 541910, 561320, 611430. Small business under all
> applicable size standards. Women-owned and operated; diversity certification in
> progress, not held. Delivery from Mississauga, Ontario and Noida, India;
> registered office in Cheyenne, Wyoming. Available for open-market awards,
> state and local procurement, and subcontracting under prime vehicles.

### Service-level messaging

| Pillar | One-line message |
|---|---|
| IT Services | Systems your team can still run after we leave. |
| AI Enablement | AI you can put in front of an auditor. |
| Data, Research & Surveys | Evidence that holds up when someone checks the method. |
| Staffing | People who have done the work before, not résumés that match the keywords. |
| Training | Training measured by what people can do afterwards. |

### Audience-specific messages

| Audience | Lead message | Primary CTA |
|---|---|---|
| **Government / public sector** | Evaluate us in ten minutes. | Capability statement |
| **Prime contractors** | We sub to you. You sub to us. | Teaming inquiry |
| **Enterprise / mid-market** | Enterprise rigour, without the enterprise distance. | Describe your requirement |
| **Nonprofit / social impact** | Evidence your funder will accept. | Talk about a programme |
| **Supplier diversity managers** | Women-owned and operated. Not yet certified. | Supplier diversity conversation |
| **Candidates** | Work that someone else has to operate. | See open roles |

### Brand voice

**Declarative. Specific. Checkable.**

| Do | Do not |
|---|---|
| State the limitation before it is discovered | Imply capability we cannot evidence |
| Use numbers with denominators and sources | Use a percentage we cannot attribute |
| Name the standard we design to | Imply certification against it |
| Write sentences a busy evaluator can scan | Write paragraphs that delay the point |
| Say "we do not" when true | Hedge into vagueness |

Banned: *cutting-edge, world-class, revolutionary, transformative, seamless,
leverage, best-in-class, industry-leading, in today's fast-paced landscape.*

### Proof-point framework

Ordered as an evaluator reads:

1. **Identity** — legal name, predecessor, registrations, codes
2. **Eligibility** — size status, ownership, what we are *not* eligible for
3. **Capability** — five pillars, mapped to NAICS/PSC
4. **Past performance** — three references, challenge/approach/outcome/period
5. **Posture** — quality, security, privacy, accessibility, personnel
6. **Stability** — years in business, continuity from Pragra

Every claim in tiers 1–4 links to a source or is marked pending.

### Calls to action

| Intent | CTA | Route |
|---|---|---|
| Highest — has a solicitation | Submit an RFP | `/rfp` |
| Evaluating | Read the capability statement | `/government/capability-statement` |
| Prime with a gap | Send a teaming inquiry | `/government/teaming` |
| Exploring | Explore services | `/services` |
| Uncertain | Talk to us first | `/contact` |

Red solid is reserved for the single highest-intent action on any page.
