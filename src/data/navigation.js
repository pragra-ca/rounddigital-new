// Single source of truth for the site's information architecture.
//
// Nav, footer and the sitemap generator all read from here so the three can
// never disagree. Adding a route means adding it once.
//
// URL policy: routes that already carry indexed authority keep their shape
// (/industries/[slug], /works/[slug], /blogs/[slug], /careers/[slug]). New
// sections are added alongside; superseded service URLs 301 to their pillar
// in next.config.mjs rather than being deleted.

// `focus` is what appears on general marketing surfaces — it reads the same in
// London, Singapore or Toronto.
//
// `naics` is retained because North American public-sector buyers search by it,
// but it is shown ONLY inside /government and the /services comparison table,
// where it is explicitly labelled as a North American classification. Putting a
// NAICS code on the homepage tells an international buyer this is a US federal
// contractor site and nothing else.
export const PILLARS = [
  {
    slug: "it-services",
    href: "/services/it-services",
    title: "IT Services",
    focus: "Cloud · Software · Security · Data",
    naics: "541512",
    summary:
      "Cloud, custom software, cybersecurity, data engineering and legacy modernization — built and run.",
  },
  {
    slug: "ai-enablement",
    href: "/services/ai-enablement",
    title: "AI Enablement & Automation",
    focus: "Readiness · Agents · Governance",
    naics: "541511",
    summary:
      "Readiness assessment, agent development, AI governance and adoption programs that survive an audit.",
  },
  {
    slug: "research-data",
    href: "/services/research-data",
    title: "Data, Research & Surveys",
    focus: "Surveys · Analytics · Evaluation",
    naics: "541910",
    summary:
      "Survey design and programming, public opinion research, fieldwork, analytics and program evaluation.",
  },
  {
    slug: "staffing",
    href: "/services/staffing",
    title: "Staffing & Workforce Solutions",
    focus: "Augmentation · Direct hire · Pods",
    naics: "561320",
    summary:
      "Staff augmentation, direct hire, managed delivery pods and nearshore capacity across Canada and India.",
  },
  {
    slug: "training",
    href: "/services/training",
    title: "Corporate & Technical Training",
    focus: "AI literacy · Upskilling · Apprenticeship",
    naics: "611430",
    summary:
      "AI literacy, technical upskilling, apprenticeship and workforce development — the Pragra heritage.",
  },
];

export const PRIMARY_NAV = [
  {
    label: "Services",
    href: "/services",
    // The overview itself must appear as a child. The desktop nav renders the
    // top-level label as a <button> that opens the panel and never navigates,
    // so without this row /services was reachable on mobile and unreachable on
    // desktop — two breakpoints exposing different destinations.
    children: [
      ...PILLARS.map((p) => ({
        label: p.title,
        href: p.href,
        meta: p.focus,
        summary: p.summary,
      })),
      {
        label: "All five services",
        href: "/services",
        meta: "Overview",
        summary: "Compare the five practices side by side, with codes.",
      },
    ],
  },
  {
    label: "Who we serve",
    href: "/industries",
    children: [
      {
        label: "Government & public sector",
        href: "/government",
        summary: "Procurement-ready capability, codes and past performance.",
      },
      {
        label: "Enterprise",
        href: "/enterprise",
        summary: "Mid-market and enterprise delivery with named accountability.",
      },
      {
        label: "Nonprofit & social impact",
        href: "/nonprofit",
        summary: "Mission organisations that need evidence, not just software.",
      },
      {
        label: "All industries",
        href: "/industries",
        summary: "Twelve sectors we deliver into today.",
      },
    ],
  },
  {
    label: "Our work",
    href: "/works",
    children: [
      { label: "Case studies", href: "/works", summary: "Engagements with stated scope and outcome." },
      { label: "Products & platforms", href: "/products", summary: "Perfectum.ai and ShipCarte." },
      {
        label: "Past performance",
        href: "/government/past-performance",
        summary: "The procurement-formatted record.",
      },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Round Digital", href: "/about", summary: "Who we are and how we got here." },
      { label: "Women-owned business", href: "/about/women-owned", summary: "Ownership, control and supplier diversity." },
      { label: "Leadership", href: "/about/leadership", summary: "Named, credentialed accountability." },
      { label: "Insights", href: "/blogs", summary: "Guides on assurance, governance and procurement." },
      { label: "Careers", href: "/careers", summary: "Open roles across Canada and India." },
    ],
  },
  // `accent` renders this link in brand red in the header. It is the one
  // permanently emphasised destination in the 2026 design: every frame of the
  // Figma file draws it red, including on pages that are not /government, so
  // it is a standing emphasis rather than a current-page state.
  { label: "Government", href: "/government", accent: true },
  // A vendor site courting buyers across seven jurisdictions had no Contact in
  // its header at all — every route to a human ran through "Submit an RFP",
  // which is the largest possible ask. The page already existed; it was simply
  // unreachable from the one place people look for it.
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = [
  {
    title: "Services",
    links: PILLARS.map((p) => ({ label: p.title, href: p.href })),
  },
  {
    title: "Who we serve",
    links: [
      { label: "Government & public sector", href: "/government" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Nonprofit & social impact", href: "/nonprofit" },
      { label: "All industries", href: "/industries" },
    ],
  },
  {
    title: "Procurement",
    links: [
      { label: "Capability statement", href: "/government/capability-statement" },
      { label: "Where we can contract", href: "/government/where-we-can-contract" },
      { label: "Vendor qualification", href: "/government/vendor-qualification" },
      { label: "NAICS & PSC codes", href: "/government/naics-psc-codes" },
      { label: "Contract vehicles", href: "/government/contract-vehicles" },
      { label: "Certifications", href: "/government/certifications" },
      { label: "Past performance", href: "/government/past-performance" },
      { label: "Teaming & subcontracting", href: "/government/teaming" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Women-owned business", href: "/about/women-owned" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Products & platforms", href: "/products" },
      { label: "Case studies", href: "/works" },
      { label: "Insights", href: "/blogs" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export const LEGAL_NAV = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];
