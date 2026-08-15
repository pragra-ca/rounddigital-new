// Past performance references, in the order an evaluator reads them:
// challenge, approach, outcome, period. See spec §11.
//
// Every entry must anchor to an id in facts.mjs. If it cannot be corroborated,
// it does not go here.

export const PAST_PERFORMANCE = [
  {
    id: "perfectum",
    client: "Perfectum.ai",
    factId: "perfectum-platform",
    challenge:
      "Training providers needed to author, deliver and license courses from one system, with the standards conformance corporate and public-sector buyers require.",
    approach:
      "Designed and built a multi-tenant learning platform: AI-assisted course authoring, live cohort delivery, SCORM 1.2, SCORM 2004 and xAPI conformance, Stripe multi-party commerce, SSO and SCIM provisioning, and a two-sided licensing marketplace.",
    outcome:
      "Operating platform serving 1,200+ academies, with white-label deployment and rights management in production.",
    period: "2023 – present",
  },
  {
    id: "shipcarte",
    client: "ShipCarte",
    factId: "shipcarte-platform",
    challenge:
      "Shippers needed rate comparison, booking and tracking across many carriers and modes, without integrating each carrier separately.",
    approach:
      "Delivered a multi-carrier logistics platform covering LTL, courier, air and ocean, with rate aggregation, shipment tracking, automated bills of lading and customs declarations, and marketplace integrations to Shopify, Amazon, WooCommerce and eBay.",
    outcome:
      "Platform in continuous commercial operation since 2019, serving businesses across Canada and the United States.",
    period: "2019 – present",
  },
  {
    id: "pragra",
    client: "Pragra",
    factId: "forbes-2024",
    challenge:
      "Career changers and employers needed technical training that produced job-ready practitioners rather than course completions.",
    approach:
      "Built and ran part-time technical programmes across Cloud, DevOps, QA, business analysis, data science, machine learning, web and iOS, delivered in Mississauga, Noida and online.",
    outcome:
      "Named to Forbes Canada's Best Startup Employers 2024, a list Forbes states accepts no payment for placement.",
    period: "2017 – present",
  },
];
