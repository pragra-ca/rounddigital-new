// NAICS and PSC mapping for the five pillars. See spec §5.
//
// sizeStandard figures are the SBA receipts-based standards and MUST be
// re-verified against the current SBA size standards table before they are
// quoted in a bid. They are shown on the site as context, not as a claim.

export const PILLARS = [
  {
    id: "it-services",
    name: "IT Services",
    primaryNaics: { code: "541512", label: "Computer Systems Design Services" },
    secondaryNaics: ["541511", "541513", "541519"],
    psc: ["D302", "D307", "D399"],
    sizeStandard: "$34.0M",
  },
  {
    id: "ai-enablement",
    name: "AI Enablement",
    primaryNaics: { code: "541511", label: "Custom Computer Programming Services" },
    secondaryNaics: ["541690", "518210"],
    psc: ["D399", "R425"],
    sizeStandard: "$34.0M",
  },
  {
    id: "research-data",
    name: "Research & Data",
    primaryNaics: {
      code: "541910",
      label: "Marketing Research and Public Opinion Polling",
    },
    secondaryNaics: ["541613", "541618", "541990"],
    psc: ["B505", "R701"],
    sizeStandard: "$25.0M",
  },
  {
    id: "staffing",
    name: "Staffing",
    primaryNaics: { code: "561320", label: "Temporary Help Services" },
    secondaryNaics: ["561311", "561312", "541612"],
    psc: ["R497", "R408"],
    sizeStandard: "$34.0M",
  },
  {
    id: "training",
    name: "Training",
    primaryNaics: {
      code: "611430",
      label: "Professional and Management Development Training",
    },
    secondaryNaics: ["611420", "611710"],
    psc: ["U008", "U012"],
    sizeStandard: "$16.5M",
  },
];

export function allNaicsCodes() {
  return PILLARS.flatMap((p) => [p.primaryNaics.code, ...p.secondaryNaics]);
}
