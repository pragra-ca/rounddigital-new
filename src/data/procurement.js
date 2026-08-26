// Procurement identity, registrations and contract vehicles.
//
// RULE: `value: null, pending: true` renders as "Pending confirmation" with a
// visible internal-completion marker. It never renders as a number. Nothing in
// this file may be filled in from memory or inference — a UEI, CAGE or business
// number that turns out to be wrong is a misrepresentation in a bid, which is a
// materially worse failure than an obviously blank field.
//
// status values used across this module:
//   "active"   — held now, evidence on file
//   "pending"  — filed / in progress
//   "planned"  — committed on the roadmap, not started
//   "not-held" — explicitly not held, and stated so on purpose

export const IDENTIFIERS = [
  {
    label: "Legal business name",
    value: "Round Digital",
    pending: false,
    note: "Successor to Pragra LLC. Written corporate chain required for the capability statement.",
  },
  {
    label: "Predecessor entity",
    value: "Pragra LLC",
    pending: false,
    note: "Trading since 2017, headquartered in Mississauga, Ontario.",
  },
  { label: "UEI (SAM.gov)", value: null, pending: true, note: "Assigned to the filed SAM.gov registration; published here once confirmed against the source record, and supplied on request in the meantime." },
  { label: "CAGE / NCAGE code", value: null, pending: true, note: "Assigned to the filed SAM.gov registration; published here once confirmed against the source record, and supplied on request in the meantime." },
  { label: "Canada Procurement Business Number", value: null, pending: true, note: "Required before bidding federally in Canada." },
  { label: "US entity registration", value: null, pending: true, note: "Wyoming incorporation — confirm entity name and number." },
  { label: "Canadian entity registration", value: null, pending: true, note: "Federal incorporation — confirm entity name and number." },
  { label: "Indian entity registration", value: null, pending: true, note: "Confirm entity name and CIN." },
  { label: "Year established", value: "2017", pending: false, note: "Corroborated by Forbes and Crunchbase." },
];

export const SIZE_STATUS = {
  headline: "Small business under every NAICS code we operate in",
  body:
    "Round Digital is below the applicable SBA receipts-based size standard in each of its five primary codes. Small-business set-asides are by far the largest set-aside category in US federal procurement, and they carry no ownership-citizenship test.",
  notEligible: [
    "WOSB — Woman-Owned Small Business",
    "EDWOSB — Economically Disadvantaged WOSB",
    "8(a) Business Development",
    "SDB self-certification",
    "HUBZone",
  ],
  notEligibleReason:
    "Each of these US programmes requires 51% ownership by United States citizens. Our ownership does not meet that test today, so we do not pursue them and we will never imply eligibility for them.",
};

export const REGISTRATIONS = [
  {
    id: "sam",
    name: "SAM.gov",
    jurisdiction: "United States — federal",
    status: "active",
    // An active SAM registration necessarily HAS a UEI and a CAGE, so listing
    // this "active" while both identifiers render "Pending confirmation" was a
    // contradiction an evaluator would catch in seconds. The registration is
    // filed; what is pending is our verification of the identifiers against the
    // source record before publishing them.
    detail:
      "System for Award Management registration, the prerequisite for any US federal award. The registration is filed; the UEI and CAGE assigned to it are being confirmed against the source record before publication, and are supplied on request in the meantime.",
  },
  {
    id: "dsbs",
    name: "SBA Dynamic Small Business Search",
    jurisdiction: "United States — federal",
    status: "pending",
    detail:
      "The profile US contracting officers actually search when building a small-business source list. Free, and under-completed by most suppliers.",
  },
  {
    id: "canadabuys",
    name: "CanadaBuys supplier registration",
    jurisdiction: "Canada — federal",
    status: "planned",
    detail:
      "Supplier registration plus a Procurement Business Number. Prerequisite to every federal opportunity in Canada.",
  },
  {
    id: "sprs",
    name: "NIST SP 800-171 self-assessment (SPRS)",
    jurisdiction: "United States — federal",
    status: "planned",
    detail:
      "Self-assessment score posted to the Supplier Performance Risk System. Free, and a precondition for work touching controlled unclassified information.",
  },
  {
    id: "osme",
    name: "OSME engagement",
    jurisdiction: "Canada — federal",
    status: "planned",
    detail:
      "Office of Small and Medium Enterprises runs free bidding support for SMEs. No cost, and a direct line into how federal buyers evaluate.",
  },
];

export const VEHICLES = [
  {
    id: "tbips",
    name: "TBIPS",
    owner: "Public Services and Procurement Canada",
    jurisdiction: "Canada — federal",
    status: "planned",
    detail:
      "Task-Based Informatics Professional Services. The primary federal supply arrangement for IT services in Canada and genuinely achievable at our size.",
    route: "Direct application as a supplier",
  },
  {
    id: "proservices",
    name: "ProServices",
    owner: "Public Services and Procurement Canada",
    jurisdiction: "Canada — federal",
    status: "planned",
    detail:
      "Supply arrangement for professional services requirements under the stated threshold. A lower barrier than TBIPS and a sensible first vehicle.",
    route: "Direct application as a supplier",
  },
  {
    id: "sbips",
    name: "SBIPS",
    owner: "Public Services and Procurement Canada",
    jurisdiction: "Canada — federal",
    status: "planned",
    detail: "Solutions-Based Informatics Professional Services, for outcome-scoped solution delivery.",
    route: "Direct application as a supplier",
  },
  {
    id: "gsa-mas",
    name: "GSA Multiple Award Schedule",
    owner: "US General Services Administration",
    jurisdiction: "United States — federal",
    status: "planned",
    detail:
      "SINs 54151S, 541910 and 611430. Requires two years in business, financials and past performance. The single largest US federal unlock, and a Year-2-to-3 objective rather than a near-term one.",
    route: "Direct application; subcontracting in the interim",
  },
  {
    id: "state-term",
    name: "State term contracts",
    owner: "Texas DIR · Virginia VITA · NASPO ValuePoint",
    jurisdiction: "United States — state & local",
    status: "planned",
    detail:
      "A fraction of the federal barrier with real spend behind them. Pursued in parallel with GSA rather than after it.",
    route: "Direct application, varies by state",
  },
  {
    id: "teaming",
    name: "Subcontracting & teaming",
    owner: "Prime contractors",
    jurisdiction: "All regions",
    status: "active",
    detail:
      "Available today. We deliver work packages under a prime's contract, which reaches vehicles we do not hold ourselves and is how a supplier of our size builds a federal past-performance record.",
    route: "Available now — see teaming",
  },
];

export const SECURITY_POSTURE = [
  {
    label: "Information security",
    body: "Access control, secrets management, endpoint hardening and logging across delivery locations. ISO/IEC 27001 certification is planned; it is not held today.",
  },
  {
    label: "Data handling",
    body: "Data residency, retention and deletion terms are agreed per engagement. Delivery from India is disclosed up front so residency requirements can be assessed before contracting, not after.",
  },
  {
    label: "Privacy",
    body: "Engagements are designed to meet PIPEDA in Canada and GDPR where applicable, with data-processing terms in the contract.",
  },
  {
    label: "Accessibility",
    body: "We deliver to WCAG 2.2 AA and design to Section 508 and EN 301 549. This website is our own first piece of evidence for that claim.",
  },
  {
    label: "Personnel screening",
    body: "Right-to-work verification on every placement, with background screening available on request. No facility clearance is held, so classified work is out of scope.",
  },
  {
    label: "Quality management",
    body: "Documented delivery process with defined review gates. ISO 9001 certification is planned; it is not held today.",
  },
];

// Jurisdictions. Where we can be the contracting party, where we can only
// deliver under a prime, and where the answer is simply no.
//
// RULE: a market we cannot serve gets an entry that says so. Omitting it would
// let a reader assume coverage, which is the same misrepresentation as claiming
// it outright — and a foreign buyer discovering the gap mid-evaluation costs
// more than never being shortlisted.
//
// `tier` maps onto the existing status states so <Status> renders it unchanged:
//   "direct"  → held      we sign the contract
//   "partner" → progress  we deliver, a prime signs
//   "none"    → planned   no presence, nothing in progress
//
// Anything not confirmed in writing renders as a bracketed [CONFIRM: …] marker
// rather than a plausible-looking value, exactly as IDENTIFIERS does above.
export const JURISDICTIONS = [
  {
    id: "us",
    name: "United States",
    scope: "Federal · state · municipal",
    tier: "direct",
    verdict: "Yes — directly, today.",
    why: "SAM.gov registration active, and a small business under every NAICS code we operate in — the largest set-aside category in US federal procurement, and the one that carries no citizenship test.",
    summary:
      "Our most complete procurement position. The federal registration is live and the size status is favourable, but two identifiers are still being confirmed against the source record before we print them anywhere.",
    entity: "Wyoming incorporation. Entity name and number pending written confirmation.",
    registrations:
      "SAM.gov registration active. UEI and CAGE will be published once confirmed against SAM.gov — supplied on request in the meantime.",
    delivery:
      "Delivered from Mississauga, Ontario and Noida, Uttar Pradesh. Cheyenne, Wyoming is a registered address, not a place of business, and we do not present it as one.",
    residency: "US-region cloud on request. [CONFIRM: named regions and provider]",
    currency: "USD",
    hours: "07:00–19:00 Eastern from Ontario, extended overnight from Noida.",
    gap: "We hold no ISO, SOC 2 or CMMI certification. We are not eligible for WOSB, EDWOSB, 8(a), SDB self-certification or HUBZone — each requires 51% ownership by United States citizens, and our ownership does not meet that test. We will never imply otherwise.",
    next: "Pursuing small-business set-asides — the largest set-aside category, and the one with no citizenship test.",
  },
  {
    id: "ca",
    name: "Canada",
    scope: "Federal · provincial · municipal",
    tier: "direct",
    verdict: "Yes — commercial and provincial. Not federal yet.",
    why: "Home market and primary delivery centre since 2017. Federal bidding waits on the Procurement Business Number, and until it is issued we do not call ourselves federally bid-ready.",
    summary:
      "Our home market and primary delivery centre. Commercial, provincial and municipal work can be contracted now; federal bidding waits on a single registration.",
    entity: "Federal incorporation. Entity name and number pending written confirmation.",
    registrations:
      "Procurement Business Number pending. It is required before bidding federally in Canada, and until it is issued we do not describe ourselves as federally bid-ready here.",
    delivery: "Mississauga, Ontario — primary delivery centre. Trading since 2017 as Pragra LLC.",
    residency: "Canadian-region cloud, Ontario. [CONFIRM: named regions and provider]",
    currency: "CAD",
    hours: "Full business day, Eastern Time.",
    gap: "We are women-owned and operated, but we hold no supplier-diversity certification — not WBE Canada, not WEConnect, not WBENC. A buyer with a certified-diverse-spend target cannot count us toward it today.",
    next: "WBE Canada sits on the published roadmap with eligibility, effort, timeline, indicative cost and dependencies.",
  },
  {
    id: "in",
    name: "India",
    scope: "Commercial delivery",
    tier: "direct",
    verdict: "Yes — commercial work only.",
    why: "A delivery centre and technical training site, and the reason North American clients get extended-hours coverage. We hold no Indian public-procurement registration.",
    summary:
      "Our second delivery centre, our technical training site, and the reason North American clients get extended-hours coverage.",
    entity: "Indian entity. Name and CIN pending written confirmation.",
    registrations:
      "Commercial engagement only. We hold no Indian public-procurement registration and do not bid Indian government work.",
    delivery: "Noida, Uttar Pradesh — delivery centre and technical training site.",
    residency: "India-region cloud where a client requires local residency. [CONFIRM: named regions]",
    currency: "INR, or USD where the contracting party prefers it",
    hours: "IST business day, overlapping the North American evening.",
    gap: "This is a delivery jurisdiction, not a bidding one. Presenting it as a public-sector market would be misleading, so we do not.",
    next: "No change planned. India remains a delivery and training footprint.",
  },
  {
    id: "uk",
    name: "United Kingdom",
    scope: "Through a teaming partner",
    tier: "partner",
    verdict: "Not directly yet — with a partner, today.",
    why: "Delivery runs through a named teaming partner while our UK incorporation is in progress. Until it completes we are not the contracting party on public work.",
    summary:
      "We can deliver into the United Kingdom. We cannot hold the contract. Any UK public engagement runs through a named prime who can.",
    entity: "UK incorporation in progress. Until it completes, a named partner is the contracting party.",
    registrations: "None. Not on Find a Tender, not on Contracts Finder, not on any framework.",
    delivery: "Remote from Ontario and Noida. On-site by arrangement only.",
    residency: "UK-region cloud available. Cross-border transfer terms set by the prime's agreement.",
    currency: "GBP through the prime; USD direct for commercial work",
    hours: "Noida covers the UK morning; Ontario covers the UK afternoon.",
    gap: "Incorporation is in progress, not complete. Until it is, we cannot be the contracting party on UK public work and we appear on no framework. A buyer who needs a direct UK supplier today should shortlist our partner, with us named as the delivery team.",
    next: "Incorporation in progress. Partner-led until it completes, and we name the partner in any UK submission.",
  },
  {
    id: "eu",
    name: "European Union",
    scope: "Through a teaming partner",
    tier: "partner",
    verdict: "Not directly yet — with a partner, today.",
    why: "EU incorporation is in progress. Until it completes, a named partner holds the contract and data-processing terms flow down from them.",
    summary:
      "Same posture as the United Kingdom — delivery yes, direct contracting no. Data protection is the live question here, and we answer it in writing rather than in a reassurance.",
    entity: "EU incorporation in progress. No Article 27 representative appointed yet.",
    registrations: "None. Not on TED and not on any national portal.",
    delivery: "Remote, with data-handling terms flowed down from the prime.",
    residency:
      "EU-region cloud available. Transfers to our Indian centre would require standard contractual clauses and a transfer impact assessment. [CONFIRM: current sub-processor list]",
    currency: "EUR through the prime",
    hours: "Noida covers the European morning; Ontario covers the afternoon.",
    gap: "Incorporation is in progress and no Article 27 representative is appointed, so we cannot yet be a direct supplier to EU public bodies. Our Indian delivery centre is a genuine transfer question, not a footnote, and we will not gloss it.",
    next: "A sub-processor register and a standard data-processing agreement are prerequisites before any EU pursuit.",
  },
  {
    id: "anz",
    name: "Australia & New Zealand",
    scope: "Through a teaming partner",
    tier: "partner",
    verdict: "Not directly yet — with a partner, today.",
    why: "Incorporation is in progress. Until it completes, work is delivered with a named local partner who holds the contract.",
    summary:
      "Partner-led today, with incorporation in progress. We are not on any panel, so a buyer needing a direct local supplier should contract our partner.",
    entity: "Incorporation in progress. A named partner is the contracting party until it completes.",
    registrations: "None yet. Not on AusTender, not on GETS, no panel arrangement.",
    delivery:
      "Noida overlaps the Australian and New Zealand business day — the only reason this is a future market rather than a closed one.",
    residency: "Not established.",
    currency: "Not established.",
    hours: "IST overlaps AEST and NZST comfortably.",
    gap: "Incorporation is in progress and no panel arrangement is held. We cannot be the direct contracting party here today.",
    next: "Incorporation in progress. Partner-led delivery until it completes.",
  },
  {
    id: "sa",
    name: "South America",
    scope: "Through a teaming partner",
    tier: "partner",
    verdict: "Not directly yet — with a partner, today.",
    why: "Incorporation is in progress. Until it completes, a named local partner is the contracting party and we deliver as the named technical team.",
    summary:
      "Partner-led today, with incorporation in progress. Time zones overlap our Ontario centre almost fully, which is what makes this a real market rather than an aspirational one.",
    entity: "Incorporation in progress. A named partner is the contracting party until it completes.",
    registrations: "None yet. We are on no national procurement portal in the region.",
    delivery:
      "Remote from Mississauga, Ontario, whose business day overlaps the region almost fully, with Noida extending coverage.",
    residency: "Regional cloud available through the partner. [CONFIRM: named regions and provider]",
    currency: "USD through the partner",
    hours: "Ontario covers the regional business day end to end.",
    gap: "Incorporation is in progress, not complete, and we hold no local procurement registration. We cannot be the direct contracting party here today.",
    next: "Incorporation in progress. Partner-led delivery until it completes.",
  },
  {
    id: "gulf",
    name: "Gulf states",
    scope: "Through a teaming partner",
    tier: "partner",
    verdict: "Not directly — with a local partner, yes.",
    why: "No registration, and in-country-value scoring would place us near the bottom of any evaluation.",
    summary:
      "Partner-led. Local-content and in-country-value rules in these markets make a partner-led route the only realistic one.",
    entity: "None. No free-zone and no mainland registration.",
    registrations: "None.",
    delivery: "Noida overlaps Gulf hours almost fully.",
    residency:
      "Not established. Several Gulf public buyers mandate in-country data residency we do not hold.",
    currency: "Not established.",
    hours: "IST overlaps GST with a small offset.",
    gap: "We hold no local registration, and in-country-value scoring means a partner-led route is the only realistic one. We are not pretending otherwise.",
    next: "Partner-led only. No incorporation committed here.",
  },
];

export const TIER_LABEL = {
  direct: "Contract & deliver",
  partner: "With a partner",
};

// Reuses the existing status states rather than introducing a fourth vocabulary.
export const TIER_STATE = {
  direct: "held",
  partner: "progress",
};

export function getJurisdiction(id) {
  return JURISDICTIONS.find((j) => j.id === id);
}

export const STATUS_LABEL = {
  active: "Active",
  pending: "In progress",
  planned: "Planned",
  "not-held": "Not held",
};

export const STATUS_STATE = {
  active: "held",
  pending: "progress",
  planned: "planned",
  "not-held": "planned",
};
