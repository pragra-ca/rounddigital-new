---
target: the homepage
total_score: 30
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
timestamp: 2026-08-25T19-14-02Z
slug: src-pages-index-js
---
Method: dual-agent (A: critiqueA · B: critiqueB)

# Design Critique — Round Digital homepage (src/pages/index.js)

## Design Health Score — 30/40

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | Buyer-tab switch changes only the lead + one glance row — transition subtle enough to look like nothing happened |
| 2 | Match with real world | 3 | "1,200+ Academies" unexplained; "Can we take your contract?" — "hold" is the procurement verb |
| 3 | User control & freedom | 3 | Nothing traps; auto-rotation already removed |
| 4 | Consistency & standards | 3 | Buyer tabs sit above the H1 styled as site-level sub-navigation — read as chrome, not a control |
| 5 | Error prevention | 3 | Single-source content discipline prevents site-vs-capability-statement contradiction |
| 6 | Recognition rather than recall | 2 | Jurisdiction chips encode verdict tier in fill/color dots with no legend anywhere |
| 7 | Flexibility & efficiency | 3 | Tabs and chips are real accelerators; capability-statement shortcut buried in section 05 |
| 8 | Aesthetic & minimalist design | 3 | Visually disciplined, verbally maximal — ~8,100px at 1440, "no certifications" told 4+ times |
| 9 | Error recovery | 3 | Dead-end jurisdiction answers say why and route onward |
| 10 | Help & documentation | 4 | Real FAQ, Sources section, self-documenting site |

## Specificity verdict
Authored, not category-interchangeable: the vendor-record hero, the volunteered "No" answers, one typographic system carried into a complete dark theme. Sameness creeps into sections 01–08 (identical structure flattens the back half). Coherence fracture: rounded playful display face vs sworn-deposition copy. Deterministic layer fully clean (detector 0 findings, 0 console errors, no overflow, type pattern verified live). B caught: mobile logo link 25×22 (<24px floor); logo aspect-ratio console warning.

## Priority issues
- [P1] Headline promise breaks at proof point: UEI/CAGE "supplied on request" while H1 says "verify before you buy." Fix: publish them or a dated commitment.
- [P1] Capability statement — the FAQ's "fastest way to evaluate" — absent from header and hero; first appears section 05. Fix: hero secondary CTA or persistent header link.
- [P1] "Three references" is two-thirds self-citation (own product + predecessor; Pragra outcome is an award, not a client result). Fix: honest retitle, lead with ShipCarte, or hold layout until second external client.
- [P2] Jurisdiction tier dots lack a legend; fill/color-only encoding. Fix: one-line legend or verdict word in chip.
- [P2] Candour repetition: "no certifications" in glance card, 05, 06, FAQ ×2. Fix: state once with force + once in FAQ; link the roadmap elsewhere.

## Persona red flags
- Dana (federal evaluator, 8s): fold checklist beats 95% of vendor sites; fails on withheld UEI/CAGE, no capability-statement link in viewport, NAICS as link-label not values.
- Marcus (enterprise CTO, skeptical): no named people, no technical depth, proof section collapses (2/3 self-citation, ShipCarte outcome metric-free); "no ISO/SOC 2" repeated without compensating controls.
- Priya (nonprofit, phone): tab short-label "Institutions" doesn't name her; nonprofit content past halfway of ~14,000px; persistent CTA assumes an RFP she doesn't have.

## Minor observations
- Tab-switch needs a brief changed-row highlight
- Empty band between header and buyer tabs at 1440
- Dark-theme lifecycle cards drift muddy olive/ochre
- Four geographies across three fold lines — takes two reads
- Mobile logo link 22px tall (<24px)
- "1,200+ Academies" undefined; "take your contract" → "hold"

## Questions
1. If verification is the brand, why is the crown-jewel artifact a buried PDF rather than the homepage itself?
2. Where are the women in the women-owned story — checkbox or narrative?
3. Does the typeface believe the copy — who is the playfulness for?
