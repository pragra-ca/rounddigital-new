// Single source of truth for company facts.
//
// VERIFIED_FACTS are externally corroborated and may appear on bid-facing
// pages. Anything not in this file does not go on the site. See spec §2.

export const VERIFIED_FACTS = [
  {
    id: "forbes-2024",
    statement:
      "Pragra named to Forbes Canada's Best Startup Employers 2024.",
    source: "https://www.forbes.com/companies/pragra/",
    verifiedOn: "2026-08-15",
  },
  {
    id: "pragra-founded",
    statement: "Pragra founded in 2017, headquartered in Mississauga, Ontario.",
    source: "https://www.forbes.com/companies/pragra/",
    verifiedOn: "2026-08-15",
  },
  {
    id: "perfectum-platform",
    statement:
      "Perfectum.ai is a commercial multi-tenant LMS with SCORM 1.2, SCORM 2004 and xAPI conformance, serving 1,200+ academies.",
    source: "https://perfectum.ai",
    verifiedOn: "2026-08-15",
  },
  {
    id: "shipcarte-platform",
    statement:
      "ShipCarte is a Toronto multi-carrier logistics platform operating since 2019, covering LTL, courier, air and ocean freight.",
    source: "https://www.shipcarte.com/freight-solutions/",
    verifiedOn: "2026-08-15",
  },
  {
    id: "training-delivery",
    statement:
      "Technical training delivered in Mississauga, Ontario and Noida, India, and online.",
    source: "https://www.coursereport.com/schools/pragra",
    verifiedOn: "2026-08-15",
  },
];

// Locations. `status` is deliberately explicit — a registered address is not a
// delivery centre, and the site must not imply otherwise. See spec §12 item 4.
//
// TASK-1 NOTE FOR THE IMPLEMENTER: the addresses currently published in
// src/components/seo/index.js (Allen TX, Pune) are NOT reflected here because
// they are unconfirmed. Do not add them back without written client
// confirmation. If confirmed, add with the correct status and a source.
const locations = [
  { city: "Mississauga", region: "ON", country: "CA", status: "delivery" },
  { city: "Noida", region: "UP", country: "IN", status: "delivery" },
  { city: "Cheyenne", region: "WY", country: "US", status: "registered" },
];

export const FACTS = Object.freeze({
  legalName: "Round Digital",
  predecessor: "Pragra LLC",
  employeeCount: "20+",
  locations,
  verified: VERIFIED_FACTS,
});

export function getFact(id) {
  return VERIFIED_FACTS.find((f) => f.id === id);
}
