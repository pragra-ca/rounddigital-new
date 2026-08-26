// The vendor qualification pack.
//
// Every enterprise and public buyer runs the same due-diligence list before a
// contract is signed. Most suppliers answer it privately, slowly, and only when
// asked. Publishing our answers — including the ones that are still blank —
// removes weeks from that review and tells a buyer exactly what risk they would
// be taking on.
//
// `status` is deliberately three-valued and maps onto the existing status
// states so <Status> renders it unchanged:
//   "published" → held      answerable today, from something already written
//   "drafted"   → progress  substance exists, a detail is unconfirmed
//   "missing"   → planned   not written yet, and named as such
//
// RULE ON CERTIFICATION LANGUAGE: this data is RENDERED, and the rendered-output
// check in e2e/unearned-claims.spec.mjs runs the forbidden-claims registry over
// the HTML — the sanctioned-file exemption in scripts/check-claims.mjs does not
// apply once a string reaches a page. So no security standard is named here at
// all. The credential roadmap is linked instead, and it lives on
// /government/certifications, where naming them is the entire purpose.
//
// A "missing" entry is not an embarrassment to be hidden. It is the most useful
// row on the page: it tells the buyer what to ask for, and it tells us what to
// fund next.

export const DUE_DILIGENCE = [
  {
    id: "identity",
    title: "Who exactly are we contracting with?",
    status: "published",
    answer:
      "Round Digital, successor to Pragra LLC, trading since 2017 and headquartered in Mississauga, Ontario. The corporate chain from Pragra to Round Digital is documented, and the entity position for each jurisdiction is published rather than kept in a sales deck.",
    action: "Evidence: the capability statement, and the jurisdiction page.",
  },
  {
    id: "insurance",
    title: "Insurance, limits and certificates",
    status: "missing",
    answer:
      "Not yet published. Commercial general liability, professional indemnity, and cyber liability — with named limits, the carrier, and the ability to name an additional insured. Nearly every enterprise master agreement and public solicitation asks for these before anything else, and we cannot answer today.",
    action:
      "Highest-value gap on this page. A certificate of insurance is the cheapest procurement unlock we have.",
  },
  {
    id: "security",
    title: "Security posture and controls",
    status: "drafted",
    answer:
      "No independent audit is held, and we will not imply one. What we can publish is the control set actually in force — access management, encryption in transit and at rest, endpoint posture, logging and retention, and how a client environment is separated from ours. [CONFIRM: control inventory and named owner]",
    action:
      "Interim: publish the control set as a self-assessment, labelled unaudited, with the roadmap linked beside it.",
  },
  {
    id: "data",
    title: "Data protection, processing terms and sub-processors",
    status: "missing",
    answer:
      "Not yet published. A standard data processing agreement, a named sub-processor register, and a stated position on cross-border transfer between the Ontario and Noida centres. For any European engagement this is the first document requested; for Canadian public work the residency question follows immediately.",
    action:
      "Prerequisite. Its absence blocks any United Kingdom or European Union pursuit outright.",
  },
  {
    id: "past",
    title: "Past performance an evaluator can actually call",
    status: "drafted",
    answer:
      "Three references are published, each with the challenge, the approach, the outcome and the period of performance. Two are related entities, which we state rather than obscure. What is missing is a public-sector reference and any contract value.",
    action:
      "One municipal or provincial engagement, at any size, changes the shape of every bid that follows it.",
  },
  {
    id: "capacity",
    title: "Capacity, key personnel and surge",
    status: "drafted",
    answer:
      "Twenty-plus people across two delivery centres. What a solicitation actually scores is named key personnel with role, tenure and screening status, the bench depth behind each role, and how we surge. [CONFIRM: key personnel list and CV pack]",
    action: "Required. Most solicitations score key-personnel CVs directly.",
  },
  {
    id: "continuity",
    title: "Business continuity and disaster recovery",
    status: "missing",
    answer:
      "Not yet published. Recovery time and recovery point objectives, the failover position between Ontario and Noida, tested restore evidence, and what happens to a client engagement if one centre is unavailable.",
    action:
      "Commonly scored. It appears in most enterprise master agreements and public evaluations.",
  },
  {
    id: "escalation",
    title: "Escalation path and service levels",
    status: "drafted",
    answer:
      "A named engagement lead, a documented escalation ladder with response targets by severity, and the executive who owns the relationship. Our two-timezone footprint is a genuine advantage here and is currently unstated. [CONFIRM: severity matrix and response targets]",
    action: "Quick win. Drafting this costs days, not months.",
  },
  {
    id: "exit",
    title: "Transition-out and exit plan",
    status: "missing",
    answer:
      "Not yet published. What the client owns, how source, credentials, data and documentation are handed back, the knowledge-transfer period, and the wind-down schedule. This is the most under-answered question in the market — and it is the exact promise this company already makes: systems your team can still run after we leave.",
    action: "Strategic. The brand promise is unbacked until this document exists.",
  },
];

export const QUALIFICATION_STATUS_LABEL = {
  published: "Published",
  drafted: "Drafted",
  missing: "Not yet written",
};

export const QUALIFICATION_STATUS_STATE = {
  published: "held",
  drafted: "progress",
  missing: "planned",
};

export function countByStatus(status) {
  return DUE_DILIGENCE.filter((d) => d.status === status).length;
}

// Four ways in, ordered by how much the buyer has to commit.
//
// The site previously asked every visitor for the same thing — an RFP — which
// is the LAST step of a buying process, not the first. These are the three
// steps before it. Each carries a stated turnaround, because "we will get back
// to you" is not a commitment.
export const ENTRY_ROUTES = [
  {
    id: "pack",
    index: "01",
    effort: "No contact required",
    title: "Read the capability statement",
    body:
      "Entity and registration detail, past performance, delivery footprint and the credential roadmap — in the format an evaluator already files.",
    turnaround: "Immediate · no form",
    detail:
      "Everything needed to decide whether to shortlist us. No gate, no email capture, no follow-up sequence — gating this document would contradict the entire premise of publishing our gaps.",
    need: "We need nothing from you.",
    cta: "Read the capability statement",
    href: "/government/capability-statement",
    accent: false,
  },
  {
    id: "call",
    index: "02",
    effort: "Twenty minutes",
    title: "Book a qualification call",
    body:
      "A direct conversation about whether we are a credible bidder for the specific thing you are buying.",
    turnaround: "Booked within 2 business days",
    detail:
      "Twenty minutes with someone who can answer contracting questions — not a discovery call in disguise. If we are not the right supplier for your requirement, we say so on the call and tell you what kind of firm is.",
    need: "We need: the requirement in one paragraph, and your timeline.",
    cta: "Book the call",
    href: "/contact?about=qualification-call",
    accent: false,
  },
  {
    id: "questionnaire",
    index: "03",
    effort: "One upload",
    title: "Send us your vendor questionnaire",
    body:
      "Send your standard supplier or security questionnaire and we return it completed, with every unanswerable item marked rather than left blank.",
    turnaround: "Returned in 5 business days",
    detail:
      "Most suppliers stall here for weeks. We return the document with each item answered from our published posture and every gap marked explicitly — so your risk team can score us honestly instead of chasing us.",
    need: "We need: your questionnaire, and the deadline it has to meet.",
    cta: "Send the questionnaire",
    href: "/contact?about=questionnaire",
    accent: false,
  },
  {
    id: "rfp",
    index: "04",
    effort: "Full solicitation",
    title: "Submit an RFP or statement of work",
    body:
      "A solicitation, statement of work, or staffing requirement. We respond with a go or a no-go, and the reason.",
    turnaround: "Go / no-go within 3 business days",
    detail:
      "We tell you within three business days whether we intend to bid, and if not, why — a credential we do not hold, a jurisdiction we cannot contract in, or a capability we would have to subcontract. A fast no is worth more to you than a slow maybe.",
    need: "We need: the solicitation documents and the submission deadline.",
    cta: "Submit an RFP",
    href: "/rfp",
    accent: true,
  },
];
