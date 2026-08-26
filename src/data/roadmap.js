// Certification and partnership roadmap.
//
// Every entry carries value / eligibility / effort / timeline / dependencies /
// priority so the roadmap can be acted on rather than admired.
//
// COSTS AND TIMELINES ARE INDICATIVE. They are planning figures, not quotes.
// Programme fees and processing times change, and each must be confirmed with
// the certifying body before it is budgeted or promised to a client. The UI
// labels them as indicative for exactly this reason.
//
// Nothing in this file may render as "held". These are recommendations and
// targets; src/content/credentials.mjs remains the authority on actual status.

export const TIERS = [
  { id: "tier-0", name: "Tier 0 — free, ~30 days", note: "No cost beyond staff time. Do these first." },
  { id: "tier-1", name: "Tier 1 — 60–120 days", note: "Credentials that change what we can win this year." },
  { id: "tier-2", name: "Tier 2 — 6–18 months", note: "Differentiators that need audit preparation." },
  { id: "tier-3", name: "Tier 3 — 12–36 months", note: "Large unlocks with hard prerequisites." },
];

export const CERT_ROADMAP = [
  {
    id: "dsbs",
    name: "SBA Dynamic Small Business Search profile",
    tier: "tier-0",
    jurisdiction: "United States",
    priority: "high",
    value:
      "This is the database US contracting officers actually search when building a small-business source list. Most suppliers leave it half-completed, so a thorough profile is disproportionately visible.",
    eligibility: "Active SAM.gov registration. No ownership test.",
    effort: "Low — a focused day of writing.",
    timeline: "Immediate",
    cost: "No fee",
    dependencies: ["Active SAM.gov registration"],
  },
  {
    id: "sam-codes",
    name: "SAM.gov NAICS and PSC expansion",
    tier: "tier-0",
    jurisdiction: "United States",
    priority: "high",
    value:
      "The registration is almost certainly filed under IT codes only, which makes us invisible to buyers searching survey research, training and staffing — three of our five pillars.",
    eligibility: "Existing registration holder.",
    effort: "Low — an afternoon.",
    timeline: "Immediate",
    cost: "No fee",
    dependencies: ["Active SAM.gov registration"],
  },
  {
    id: "canadabuys",
    name: "CanadaBuys registration + Procurement Business Number",
    tier: "tier-0",
    jurisdiction: "Canada",
    priority: "high",
    value:
      "Mandatory prerequisite to every federal opportunity in Canada — the market where our women-owned status converts soonest.",
    eligibility: "Canadian business registration.",
    effort: "Low.",
    timeline: "Days",
    cost: "No fee",
    dependencies: ["Confirmed Canadian entity registration"],
  },
  {
    id: "sprs",
    name: "NIST SP 800-171 self-assessment posted to SPRS",
    tier: "tier-0",
    jurisdiction: "United States",
    priority: "medium",
    value:
      "A prerequisite for any work touching controlled unclassified information, and a visible signal of security maturity well before CMMC becomes relevant.",
    eligibility: "Self-assessment; no third party required.",
    effort: "Medium — a genuine control review, not a checkbox.",
    timeline: "30–60 days",
    cost: "No fee",
    dependencies: ["Documented information-security controls"],
  },
  {
    id: "wbe-canada",
    name: "WBE Canada",
    tier: "tier-1",
    jurisdiction: "Canada",
    priority: "high",
    value:
      "The women-owned credential that converts today. Opens Canadian federal supplier-diversity initiatives and corporate diversity spend programmes.",
    eligibility:
      "51% ownership, management and control by women who are Canadian citizens or permanent residents. The control test — highest officer position, board control, signing authority — is where applications usually fail, not the share register.",
    effort: "Medium — documentary evidence plus an interview.",
    timeline: "60–90 days",
    cost: "Indicative: low hundreds of dollars",
    dependencies: [
      "Ownership of record corrected and evidenced",
      "Highest officer position held by the qualifying owner",
      "Corporate independence from related entities documented",
    ],
  },
  {
    id: "weconnect",
    name: "WEConnect International",
    tier: "tier-1",
    jurisdiction: "Global",
    priority: "high",
    value:
      "One application that opens corporate supplier-diversity programmes across Asia-Pacific and beyond — the single channel where women-owned status monetises in all three target regions at once.",
    eligibility: "51% women ownership, management and control. No citizenship test.",
    effort: "Low to medium.",
    timeline: "~60 days",
    cost: "Indicative: low",
    dependencies: ["Ownership documentation package"],
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015 — Quality management",
    tier: "tier-1",
    jurisdiction: "Global",
    priority: "high",
    value:
      "Frequently a scored evaluation factor in solicitations. It is also the certification most aligned to our founder's professional background in audit and quality assurance, which makes it a build rather than a purchase.",
    eligibility: "Documented QMS operating for long enough to produce audit evidence.",
    effort: "High — process documentation, internal audit, management review.",
    timeline: "3–6 months",
    cost: "Indicative: mid five figures",
    dependencies: ["Documented delivery process", "Internal audit cycle completed"],
  },
  {
    id: "iso-27001",
    name: "ISO/IEC 27001:2022 — Information security",
    tier: "tier-1",
    jurisdiction: "Global",
    priority: "high",
    value:
      "Effectively mandatory for enterprise and public-sector IT work above a modest threshold. Its absence is a disqualifier more often than its presence is a differentiator.",
    eligibility: "ISMS covering all delivery locations, including India.",
    effort: "High — risk assessment, Statement of Applicability, audit.",
    timeline: "4–8 months",
    cost: "Indicative: mid-to-high five figures",
    dependencies: ["Scope definition across Canada and India", "Risk assessment complete"],
  },
  {
    id: "iso-42001",
    name: "ISO/IEC 42001:2023 — AI management system",
    tier: "tier-2",
    jurisdiction: "Global",
    priority: "high",
    value:
      "The strongest single differentiator available to us. It is the first AI management standard, almost no services firm holds it, it pairs with NIST AI RMF for federal buyers, and it sits directly on our founder's audit background. Scale competitors cannot answer it with headcount.",
    eligibility: "Operating AI management system with documented governance.",
    effort: "High.",
    timeline: "6–12 months",
    cost: "Indicative: mid five figures",
    dependencies: ["ISO 9001 or 27001 management-system experience", "AI governance practice in operation"],
  },
  {
    id: "soc2",
    name: "SOC 2 Type I → Type II",
    tier: "tier-2",
    jurisdiction: "United States",
    priority: "medium",
    value:
      "Required to sell platform products into enterprise accounts, and the correct resolution of any existing SOC 2 representation on affiliated product properties.",
    eligibility: "Controls operating over an observation window for Type II.",
    effort: "High.",
    timeline: "Type I 3–4 months; Type II adds a 6–12 month window",
    cost: "Indicative: mid five figures",
    dependencies: ["Control environment documented", "Evidence collection automated"],
  },
  {
    id: "cmmc",
    name: "CMMC Level 1 → Level 2",
    tier: "tier-2",
    jurisdiction: "United States",
    priority: "low",
    value: "The gate to US Department of Defense work. Level 1 is self-assessed; Level 2 requires a C3PAO assessment.",
    eligibility:
      "Level 2 realistically requires US-based performance and US-persons handling of controlled unclassified information — which depends on a US delivery presence we do not yet have.",
    effort: "Very high.",
    timeline: "12–18 months after a US delivery centre exists",
    cost: "Indicative: high five figures and up",
    dependencies: ["US delivery centre", "NIST SP 800-171 implementation", "SPRS score posted"],
  },
  {
    id: "gsa",
    name: "GSA Multiple Award Schedule",
    tier: "tier-3",
    jurisdiction: "United States",
    priority: "medium",
    value:
      "The single largest US federal unlock. SINs 54151S, 541910 and 611430 map to three of our five pillars.",
    eligibility: "Two years in business, audited financials, and relevant past performance.",
    effort: "Very high — a proposal in its own right.",
    timeline: "12+ months from application",
    cost: "Indicative: significant staff time plus advisory support",
    dependencies: ["Two years trading as the current entity", "Financial statements", "Federal past performance"],
  },
  {
    id: "state-term",
    name: "State term contracts — Texas DIR, Virginia VITA, NASPO",
    tier: "tier-3",
    jurisdiction: "United States — state & local",
    priority: "medium",
    value:
      "Real spend behind a fraction of the federal barrier. Should be pursued in parallel with GSA rather than after it.",
    eligibility: "Varies by state; several require in-state presence or a registered agent.",
    effort: "Medium per state.",
    timeline: "3–9 months per vehicle",
    cost: "Indicative: low to moderate",
    dependencies: ["US delivery or registered presence in the target state"],
  },
];

export const PARTNER_ROADMAP = [
  {
    id: "survey-platform",
    name: "Survey platform partnership — Qualtrics, Forsta or Voxco",
    tier: "tier-1",
    jurisdiction: "Global",
    priority: "high",
    value:
      "The highest-value single addition. A certified survey-platform partnership is simultaneously a delivery channel and a scored credential in 541910 bids. Voxco and Forsta are particularly strong in government and academic research.",
    eligibility: "Trained and certified implementation staff.",
    effort: "Medium — staff certification.",
    timeline: "2–4 months",
    cost: "Indicative: training and licence costs",
    dependencies: ["Named staff to certify"],
  },
  {
    id: "research-bodies",
    name: "AAPOR, Insights Association and ESOMAR membership",
    tier: "tier-0",
    jurisdiction: "Global",
    priority: "high",
    value:
      "Adherence to their transparency and disclosure codes is frequently required outright in public opinion research solicitations. Makes the research pillar credible in weeks rather than years.",
    eligibility: "Organisational membership; adherence to the code of conduct.",
    effort: "Low.",
    timeline: "Weeks",
    cost: "Indicative: membership fees",
    dependencies: [],
  },
  {
    id: "cloud-partners",
    name: "AWS, Microsoft and Google Cloud partner tiers",
    tier: "tier-1",
    jurisdiction: "Global",
    priority: "medium",
    value:
      "Partner status is a scored factor in many enterprise and public-sector evaluations, and the public-sector tracks specifically unlock government-designated programmes.",
    eligibility: "Certified staff counts and, at higher tiers, referenceable customer deployments.",
    effort: "Medium — staff certification is the gating item.",
    timeline: "3–9 months per provider",
    cost: "Indicative: certification and programme fees",
    dependencies: ["Current partner tier confirmed for each provider"],
  },
  {
    id: "marketplace",
    name: "AWS and Azure Marketplace listing for Perfectum",
    tier: "tier-1",
    jurisdiction: "United States",
    priority: "high",
    value:
      "US federal buyers can purchase through cloud marketplaces against contract vehicles we do not hold ourselves. A genuine and under-used route into federal revenue.",
    eligibility: "Product listing requirements and seller registration.",
    effort: "Medium.",
    timeline: "2–4 months",
    cost: "Indicative: marketplace fees on transactions",
    dependencies: ["Perfectum listing content", "Seller account"],
  },
  {
    id: "mentor-protege",
    name: "SBA Mentor–Protégé Program",
    tier: "tier-2",
    jurisdiction: "United States",
    priority: "high",
    value:
      "The most powerful growth lever available at our size: a mentor–protégé joint venture can bid on the mentor's past performance while the protégé retains small-business status. It also converts large integrators from competitors into mentors.",
    eligibility: "Small-business status and an approved mentor agreement.",
    effort: "Medium — finding the right mentor is the hard part.",
    timeline: "6–12 months to an approved agreement",
    cost: "Indicative: legal and administrative",
    dependencies: ["A willing mentor", "Small-business status maintained"],
  },
  {
    id: "apprenticeship",
    name: "Registered apprenticeship sponsorship and workforce-funding listing",
    tier: "tier-2",
    jurisdiction: "United States & Canada",
    priority: "high",
    value:
      "Converts the training pillar into publicly funded revenue: workforce dollars pay for training delivered by listed providers. We already run the programmes; registration is what makes them payable.",
    eligibility: "Programme standards, employer partners and provider listing per jurisdiction.",
    effort: "High — jurisdiction by jurisdiction.",
    timeline: "6–12 months per jurisdiction",
    cost: "Indicative: staff time",
    dependencies: ["Curriculum mapped to programme standards", "Employer partners"],
  },
  {
    id: "training-partners",
    name: "Authorised training partner status — CompTIA, PMI, Scaled Agile, AWS",
    tier: "tier-2",
    jurisdiction: "Global",
    priority: "medium",
    value:
      "Each is a training-pillar credential and a content pipeline for our own platform. Cumulatively they make the training practice legible to enterprise buyers.",
    eligibility: "Certified instructors and programme agreements.",
    effort: "Medium per programme.",
    timeline: "2–6 months each",
    cost: "Indicative: programme fees",
    dependencies: ["Certified instructor bench"],
  },
  {
    id: "data-platforms",
    name: "Databricks or Snowflake partnership",
    tier: "tier-2",
    jurisdiction: "Global",
    priority: "low",
    value: "Platform credibility for the research and data pillar on larger analytics engagements.",
    eligibility: "Certified staff and delivery references.",
    effort: "Medium.",
    timeline: "3–6 months",
    cost: "Indicative: training costs",
    dependencies: ["Named staff to certify"],
  },
  {
    id: "canada-networks",
    name: "Innovative Solutions Canada, CATA Alliance, ICTC",
    tier: "tier-1",
    jurisdiction: "Canada",
    priority: "medium",
    value:
      "Innovative Solutions Canada funds and buys from Canadian SMEs — a direct fit for the AI pillar. The industry associations provide buyer access and policy visibility.",
    eligibility: "Canadian SME status.",
    effort: "Low to medium.",
    timeline: "1–3 months",
    cost: "Indicative: membership fees",
    dependencies: ["Canadian entity confirmed"],
  },
];

// Named explicitly so nobody spends effort on them, and so the site can state
// plainly that we do not claim eligibility.
export const CLOSED_PROGRAMS = [
  { name: "WOSB — Woman-Owned Small Business", reason: "Requires 51% ownership by United States citizens." },
  { name: "EDWOSB", reason: "Requires 51% ownership by economically disadvantaged US citizens." },
  { name: "8(a) Business Development", reason: "Requires 51% ownership by socially and economically disadvantaged US citizens." },
  { name: "SDB self-certification", reason: "Requires US-citizen ownership." },
  { name: "HUBZone", reason: "Requires US-citizen ownership and a principal office in a designated zone." },
  {
    name: "WBENC",
    reason:
      "Requires US citizenship or lawful permanent residency of the qualifying owner. Conditional — revisit only if that status is confirmed.",
  },
];

export const PRIORITY_LABEL = { high: "High", medium: "Medium", low: "Low" };
