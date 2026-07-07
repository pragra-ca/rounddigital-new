/**
 * Signal Field service page content (design 5a pattern applied to every
 * service route). Keys match the /services/* route slugs.
 */

const DEFAULT_PROCESS = [
  {
    time: "WK 1–2",
    title: "Discover",
    desc: "Map the workflow, data and ROI target. Pick the highest-value slice.",
  },
  {
    time: "WK 3–5",
    title: "Prototype",
    desc: "Working system on your real data, evaluated against human baselines.",
  },
  {
    time: "WK 6–10",
    title: "Ship",
    desc: "Production hardening: security review, guardrails, integrations, SLAs.",
  },
  {
    time: "ONGOING",
    title: "Operate",
    desc: "Monitoring, evals and improvement — 24/7, with monthly ROI reporting.",
  },
];

export const sfServices = {
  "ai-machine-learning": {
    name: "AI & Machine Learning",
    eyebrow: "Intelligent automation",
    title: "AI agents that do the work — not the talking.",
    tagline:
      "We design, build and operate custom AI agents that automate complex workflows, enhance decision-making, and pay for themselves in months — not years.",
    primaryCta: "Scope your agent",
    statsTitle: "AGENTS WE'VE SHIPPED, BY THE NUMBERS",
    stats: [
      { value: "10k+", label: "inquiries handled daily" },
      { value: "98%", label: "extraction accuracy" },
      { value: "$2M", label: "saved annually, one client" },
      { value: "−90%", label: "manual processing time" },
    ],
    buildTitle: "What we build",
    builds: [
      {
        title: "Customer service agents",
        desc: "Multi-channel support with personalized answers and human escalation.",
      },
      {
        title: "Document pipelines",
        desc: "Extraction, verification and routing for invoices, contracts and claims.",
      },
      {
        title: "Workflow automation",
        desc: "Agents that run back-office processes end to end, while you sleep.",
      },
      {
        title: "Decision copilots",
        desc: "Insight and recommendation agents wired into your data and tools.",
      },
    ],
    process: [
      DEFAULT_PROCESS[0],
      {
        time: "WK 3–5",
        title: "Prototype",
        desc: "Working agent on your real data, evaluated against human baselines.",
      },
      DEFAULT_PROCESS[2],
      DEFAULT_PROCESS[3],
    ],
    stack: [
      { name: "Anthropic Claude", accent: true },
      { name: "OpenAI", accent: true },
      { name: "AWS Bedrock" },
      { name: "Azure OpenAI" },
      { name: "Vector databases" },
      { name: "Kubernetes" },
    ],
    faqs: [
      {
        q: "How long until an agent is in production?",
        a: "Typically 6–10 weeks from kickoff to a production agent on a scoped workflow, with evals against human baselines before launch.",
      },
      {
        q: "How do you handle security and compliance?",
        a: "SOC 2 / ISO 27001-aligned processes, private deployments where required, and guardrails with full audit trails on every agent action.",
      },
      {
        q: "What does it cost?",
        a: "Fixed-price discovery, then milestone-based builds. We only take on projects where the modelled ROI clears the build cost within 12 months.",
      },
    ],
    ctaTitle: "Have a workflow in mind?",
    ctaDesc:
      "Bring us your messiest process. We'll tell you in one call whether an agent can beat it — and what the ROI looks like.",
    seo: {
      title: "AI Agent Development & Machine Learning Services",
      description:
        "Custom AI agents that automate real workflows — customer service, documents, back office. From discovery to production in 6–10 weeks. Book a free scoping call.",
      keywords:
        "AI agent development, AI agent development company, machine learning services, intelligent automation, NLP, enterprise AI, Toronto, Dallas",
    },
  },

  "cloud-solutions": {
    name: "Cloud Solutions",
    eyebrow: "Scalable infrastructure",
    title: "Cloud that scales with ambition — not with cost.",
    tagline:
      "Cloud-native architecture, zero-downtime migration and relentless cost optimization across AWS, Azure and Google Cloud — engineered for enterprises that can't afford to blink.",
    primaryCta: "Plan your migration",
    statsTitle: "CLOUD WORK, BY THE NUMBERS",
    stats: [
      { value: "50+", label: "legacy apps migrated" },
      { value: "0", label: "downtime during cutover" },
      { value: "−60%", label: "operational costs" },
      { value: "3×", label: "system performance" },
    ],
    buildTitle: "What we build",
    builds: [
      {
        title: "Cloud-native architecture",
        desc: "Microservices, containers and event-driven systems designed for scale.",
      },
      {
        title: "Migration & modernization",
        desc: "Legacy workloads moved to cloud-native platforms with zero downtime.",
      },
      {
        title: "FinOps & cost optimization",
        desc: "Right-sizing, reserved capacity and architecture fixes that cut the bill.",
      },
      {
        title: "DevOps & platform engineering",
        desc: "CI/CD pipelines, infrastructure as code and paved-road developer platforms.",
      },
    ],
    process: DEFAULT_PROCESS,
    stack: [
      { name: "AWS", accent: true },
      { name: "Microsoft Azure", accent: true },
      { name: "Google Cloud" },
      { name: "Kubernetes" },
      { name: "Terraform" },
      { name: "Docker" },
    ],
    faqs: [
      {
        q: "Can you migrate without disrupting operations?",
        a: "Yes — we've moved 50+ legacy applications to cloud-native microservices for a multinational bank with zero downtime, using strangler-fig patterns and staged cutovers.",
      },
      {
        q: "Which cloud should we pick?",
        a: "The one your workloads, team and compliance regime actually favour. We're certified across AWS, Azure and GCP and model the trade-offs before recommending — including multi-cloud only where it earns its complexity.",
      },
      {
        q: "How fast will we see cost savings?",
        a: "Quick wins (right-sizing, storage tiers, scheduling) usually land within the first month; architectural savings compound over the following quarters. One client cut operational costs by 60%.",
      },
    ],
    ctaTitle: "Have a workload in mind?",
    ctaDesc:
      "Bring us your gnarliest system. We'll tell you in one call what a migration takes — and what it saves.",
    seo: {
      title: "Cloud Migration & Managed Cloud Services",
      description:
        "Zero-downtime cloud migration, cloud-native architecture and cost optimization on AWS, Azure and Google Cloud. 50+ legacy apps moved. Get a migration plan.",
      keywords:
        "cloud migration services, cloud solutions, AWS consulting, Azure migration, Google Cloud, Kubernetes, DevOps, FinOps, cloud cost optimization",
    },
  },

  cybersecurity: {
    name: "Cybersecurity",
    eyebrow: "Enterprise protection",
    title: "Security that hunts threats before they hunt you.",
    tagline:
      "Advanced threat detection, compliance management and proactive security engineering — so your AI systems and enterprise stack inherit controls, not risk.",
    primaryCta: "Book a security review",
    statsTitle: "SECURITY PRACTICE, BY THE NUMBERS",
    stats: [
      { value: "24/7", label: "monitoring & response" },
      { value: "0", label: "critical breaches on our watch" },
      { value: "100+", label: "assessments delivered" },
      { value: "100%", label: "audit pass rate" },
    ],
    buildTitle: "What we deliver",
    builds: [
      {
        title: "Threat detection & response",
        desc: "Managed detection with real-time response playbooks that never sleep.",
      },
      {
        title: "Compliance management",
        desc: "SOC 2, ISO 27001, HIPAA and PCI programs run end to end, audit-ready.",
      },
      {
        title: "Penetration testing",
        desc: "Adversarial testing of apps, infrastructure and AI systems before attackers try.",
      },
      {
        title: "Security architecture",
        desc: "Zero-trust design, identity, and guardrails for AI and cloud workloads.",
      },
    ],
    process: [
      {
        time: "WK 1–2",
        title: "Assess",
        desc: "Threat-model the estate, score the gaps, and rank them by real risk.",
      },
      {
        time: "WK 3–5",
        title: "Harden",
        desc: "Close the highest-risk gaps: identity, network, endpoints, pipelines.",
      },
      {
        time: "WK 6–10",
        title: "Certify",
        desc: "Stand up the compliance program with evidence collection built in.",
      },
      {
        time: "ONGOING",
        title: "Defend",
        desc: "24/7 monitoring, incident response and quarterly adversarial testing.",
      },
    ],
    stack: [
      { name: "SOC 2", accent: true },
      { name: "ISO 27001", accent: true },
      { name: "Microsoft Sentinel" },
      { name: "CrowdStrike" },
      { name: "Wiz" },
      { name: "HashiCorp Vault" },
    ],
    faqs: [
      {
        q: "Can you secure AI systems specifically?",
        a: "Yes — prompt-injection defense, data-leakage controls, guardrails with full audit trails, and eval-based red teaming are part of every AI deployment we touch.",
      },
      {
        q: "How fast can we get SOC 2 ready?",
        a: "Most teams reach audit-ready in 3–5 months. We run the program, implement the controls and sit with you through the audit itself.",
      },
      {
        q: "Do you replace our security team?",
        a: "We extend it. In-house teams keep context and ownership; we bring 24/7 coverage, specialist depth and the tooling they'd otherwise have to build.",
      },
    ],
    ctaTitle: "Worried about a blind spot?",
    ctaDesc:
      "Bring us your architecture. We'll tell you in one call where the real risk sits — and what closing it takes.",
    seo: {
      title: "Cybersecurity Services & SOC 2 Compliance",
      description:
        "24/7 threat detection, penetration testing and SOC 2 / ISO 27001 compliance programs — security engineered in, for AI systems too. Book a security review.",
      keywords:
        "cybersecurity services, managed security, SOC 2 compliance, ISO 27001, penetration testing, threat detection, AI security",
    },
  },

  "custom-software": {
    name: "Custom Software",
    eyebrow: "Tailored solutions",
    title: "Enterprise software, built to spec and battle-tested.",
    tagline:
      "Web platforms, APIs and internal tools engineered on modern stacks — designed for your business, hardened for production, and shipped by senior engineers.",
    primaryCta: "Scope your build",
    statsTitle: "DELIVERY TRACK RECORD",
    stats: [
      { value: "100+", label: "projects delivered" },
      { value: "98%", label: "client satisfaction" },
      { value: "6", label: "weeks to first milestone" },
      { value: "20+", label: "expert consultants" },
    ],
    buildTitle: "What we build",
    builds: [
      {
        title: "Web platforms",
        desc: "Customer-facing products and portals built on React, Next.js and Node.",
      },
      {
        title: "APIs & integrations",
        desc: "Robust service layers that connect your systems, partners and data.",
      },
      {
        title: "Internal tools",
        desc: "Back-office software that removes spreadsheets and manual glue work.",
      },
      {
        title: "Mobile applications",
        desc: "Cross-platform apps that share code without compromising experience.",
      },
    ],
    process: DEFAULT_PROCESS,
    stack: [
      { name: "TypeScript", accent: true },
      { name: "React / Next.js", accent: true },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Kubernetes" },
    ],
    faqs: [
      {
        q: "How do you keep quality high at speed?",
        a: "Senior-only teams, working software every sprint, automated test suites from day one, and security review before every release. No juniors learning on your dime.",
      },
      {
        q: "Who owns the code?",
        a: "You do — full IP transfer, documented architecture, and a handover your in-house team can actually run with.",
      },
      {
        q: "Fixed price or time and materials?",
        a: "Fixed-price discovery first, then milestone-based builds so scope, cost and delivery stay visible throughout.",
      },
    ],
    ctaTitle: "Have a product in mind?",
    ctaDesc:
      "Bring us the idea, the spreadsheet, or the legacy system. We'll tell you in one call what building it right looks like.",
    seo: {
      title: "Custom Software Development for Enterprises",
      description:
        "Web platforms, APIs, internal tools and mobile apps built to spec by senior engineers — 100+ projects shipped, full IP transfer. Scope your build in one call.",
      keywords:
        "custom software development, enterprise software development, web application development, API development, software consulting, Toronto, Dallas",
    },
  },

  "data-analytics": {
    name: "Data & Analytics",
    eyebrow: "Decision intelligence",
    title: "From data swamp to decision engine.",
    tagline:
      "Pipelines, warehouses and dashboards that turn scattered data into answers your leadership actually uses — and the foundation your AI roadmap needs.",
    primaryCta: "Map your data",
    statsTitle: "DATA WORK, BY THE NUMBERS",
    stats: [
      { value: "100k+", label: "documents processed monthly" },
      { value: "98%", label: "pipeline accuracy" },
      { value: "−80%", label: "time to insight" },
      { value: "1", label: "source of truth" },
    ],
    buildTitle: "What we build",
    builds: [
      {
        title: "Data pipelines",
        desc: "Reliable ELT from every source system into a governed warehouse.",
      },
      {
        title: "Warehouses & lakehouses",
        desc: "Snowflake, BigQuery and Databricks foundations modeled for analytics.",
      },
      {
        title: "Dashboards & reporting",
        desc: "Executive views and operational metrics people actually check.",
      },
      {
        title: "ML-ready data foundations",
        desc: "Feature stores, vector indexes and quality gates that unblock AI.",
      },
    ],
    process: DEFAULT_PROCESS,
    stack: [
      { name: "Snowflake", accent: true },
      { name: "dbt", accent: true },
      { name: "BigQuery" },
      { name: "Databricks" },
      { name: "Airflow" },
      { name: "Power BI" },
    ],
    faqs: [
      {
        q: "Our data is a mess. Where do we start?",
        a: "With the decision that matters most. We work backwards from one high-value question to the minimum pipeline that answers it — then widen from there.",
      },
      {
        q: "Do we need a warehouse before doing AI?",
        a: "You need trustworthy, accessible data — which usually means a governed warehouse or lakehouse. We build the data foundation and the AI on top as one roadmap.",
      },
      {
        q: "How do you handle data governance?",
        a: "Contracts on every pipeline, lineage tracking, access controls and quality monitoring — governance built into the platform, not bolted on after.",
      },
    ],
    ctaTitle: "Drowning in dashboards nobody trusts?",
    ctaDesc:
      "Bring us your reporting stack. We'll tell you in one call what a single source of truth takes.",
    seo: {
      title: "Data Engineering & Analytics Services",
      description:
        "Data pipelines, warehouses and dashboards your teams actually trust — one source of truth, and the data foundation your AI roadmap needs. Map your data with us.",
      keywords:
        "data engineering services, data analytics consulting, data pipelines, data warehouse, business intelligence, dbt, Snowflake, Databricks",
    },
  },

  "digital-transformation": {
    name: "Digital Transformation",
    eyebrow: "Modernize operations",
    title: "Modernize without the meltdown.",
    tagline:
      "Strategic consulting and hands-on engineering to retire legacy systems, adopt cloud and AI, and change how the business operates — without betting the company on a big bang.",
    primaryCta: "Plan your roadmap",
    statsTitle: "TRANSFORMATION OUTCOMES",
    stats: [
      { value: "50+", label: "legacy apps modernized" },
      { value: "0", label: "downtime during migration" },
      { value: "−60%", label: "operational costs" },
      { value: "3×", label: "performance improvement" },
    ],
    buildTitle: "What we deliver",
    builds: [
      {
        title: "Modernization roadmaps",
        desc: "Sequenced plans that survive contact with reality — and with finance.",
      },
      {
        title: "Legacy system replacement",
        desc: "Strangler-fig migrations that retire old systems without downtime.",
      },
      {
        title: "Process automation",
        desc: "AI and workflow automation applied to the operations that cost most.",
      },
      {
        title: "Change enablement",
        desc: "Training, playbooks and governance so the new way of working sticks.",
      },
    ],
    process: DEFAULT_PROCESS,
    stack: [
      { name: "Cloud-native", accent: true },
      { name: "AI agents", accent: true },
      { name: "Microservices" },
      { name: "Kubernetes" },
      { name: "Event streaming" },
      { name: "APIs" },
    ],
    faqs: [
      {
        q: "How do you de-risk a transformation?",
        a: "Thin slices, reversible steps and production proof every 6 weeks. We never propose a big-bang cutover — value lands continuously or the plan is wrong.",
      },
      {
        q: "What about the systems we can't touch?",
        a: "We wrap them. APIs, event streams and agents can modernize the experience around a frozen core until it's safe to retire.",
      },
      {
        q: "How long does a transformation take?",
        a: "First production milestone inside 6 weeks; meaningful business impact inside a quarter. Multi-year roadmaps are delivered as a chain of quarterly wins.",
      },
    ],
    ctaTitle: "Legacy systems slowing you down?",
    ctaDesc:
      "Bring us the system everyone's afraid to touch. We'll tell you in one call how to modernize it safely.",
    seo: {
      title: "Digital Transformation & Legacy Modernization",
      description:
        "Modernize legacy systems and adopt cloud and AI without downtime — 50+ apps migrated, costs down 60%. Consulting plus hands-on engineering. Plan your roadmap.",
      keywords:
        "digital transformation consulting, legacy system modernization, application modernization, process automation, cloud adoption",
    },
  },

  "global-talent": {
    name: "Global Talent",
    eyebrow: "Scale on demand",
    title: "Senior engineers, on demand — not on the bench.",
    tagline:
      "Extend your team with vetted senior engineers, architects and AI specialists from our Toronto and Dallas network — embedded in your workflow within weeks.",
    primaryCta: "Build your team",
    statsTitle: "TALENT NETWORK, BY THE NUMBERS",
    stats: [
      { value: "20+", label: "expert consultants" },
      { value: "2", label: "weeks to embedded team" },
      { value: "98%", label: "client satisfaction" },
      { value: "100%", label: "senior-level engineers" },
    ],
    buildTitle: "Who we place",
    builds: [
      {
        title: "AI & ML engineers",
        desc: "Agent builders, ML engineers and prompt architects with shipped systems.",
      },
      {
        title: "Cloud & platform engineers",
        desc: "AWS, Azure and GCP specialists for architecture, DevOps and SRE.",
      },
      {
        title: "Full-stack developers",
        desc: "Senior product engineers across React, Node, Python and mobile.",
      },
      {
        title: "Security specialists",
        desc: "Compliance leads, penetration testers and security architects.",
      },
    ],
    process: [
      {
        time: "WK 1",
        title: "Define",
        desc: "Scope the roles, the stack and how success will be measured.",
      },
      {
        time: "WK 2",
        title: "Match",
        desc: "Meet pre-vetted candidates from our network — no résumé roulette.",
      },
      {
        time: "WK 3+",
        title: "Embed",
        desc: "Engineers join your standups, tools and codebase like employees.",
      },
      {
        time: "ONGOING",
        title: "Support",
        desc: "Performance check-ins, seamless swaps and scale up or down monthly.",
      },
    ],
    stack: [
      { name: "AI / ML", accent: true },
      { name: "Cloud & DevOps", accent: true },
      { name: "Full-stack" },
      { name: "Data engineering" },
      { name: "Security" },
      { name: "QA & automation" },
    ],
    faqs: [
      {
        q: "How is this different from a staffing enterprise company?",
        a: "Every consultant comes from our own delivery bench — people who've shipped RoundDigital projects — with our engineering leadership backing their work.",
      },
      {
        q: "How fast can someone start?",
        a: "Typically inside two weeks: one week to match, one to onboard. Urgent needs can move faster from our active bench.",
      },
      {
        q: "What if it's not a fit?",
        a: "Say so and we swap them — no friction, no invoice for the transition period. The engagement flexes monthly.",
      },
    ],
    ctaTitle: "Need senior hands next month?",
    ctaDesc:
      "Tell us the gap in one call. We'll bring you matched, vetted engineers within a week.",
    seo: {
      title: "IT Staff Augmentation & Team Extension",
      description:
        "Vetted senior engineers, cloud architects and AI specialists embedded in your team within two weeks — from our own delivery bench, not a résumé pile.",
      keywords:
        "IT staff augmentation, team extension, staff augmentation services, hire senior engineers, AI engineers, dedicated development team",
    },
  },

  "engagement-models": {
    name: "Engagement Models",
    eyebrow: "Ways to work",
    title: "Engagement models that fit how you ship.",
    tagline:
      "Fixed-price projects, embedded teams, or managed AI operations — pick the model that fits your risk profile, and switch as your needs change.",
    primaryCta: "Find your model",
    statsTitle: "WHY IT WORKS",
    stats: [
      { value: "100+", label: "projects delivered" },
      { value: "3", label: "ways to engage" },
      { value: "12", label: "months — the ROI bar every project must clear" },
      { value: "98%", label: "client satisfaction" },
    ],
    buildTitle: "How we engage",
    builds: [
      {
        title: "Fixed-price projects",
        desc: "Scoped outcomes with milestone billing — you know the cost before we start.",
      },
      {
        title: "Embedded teams",
        desc: "Our engineers inside your organization, sprinting on your roadmap.",
      },
      {
        title: "Managed AI operations",
        desc: "We run your agents and platforms 24/7 with SLAs and ROI reporting.",
      },
      {
        title: "Advisory & audits",
        desc: "Architecture reviews, AI readiness and security assessments on demand.",
      },
    ],
    process: [
      {
        time: "STEP 1",
        title: "Assess",
        desc: "One call to understand the work, the risk and the internal capacity.",
      },
      {
        time: "STEP 2",
        title: "Match",
        desc: "We recommend a model — and tell you honestly if a cheaper one fits.",
      },
      {
        time: "STEP 3",
        title: "Deliver",
        desc: "Working software milestones with full transparency on progress.",
      },
      {
        time: "ANYTIME",
        title: "Flex",
        desc: "Switch models as needs change — project to team to managed ops.",
      },
    ],
    stack: [
      { name: "Fixed price", accent: true },
      { name: "Milestone billing", accent: true },
      { name: "Monthly flex" },
      { name: "SLAs" },
      { name: "ROI reporting" },
      { name: "IP transfer" },
    ],
    faqs: [
      {
        q: "Which model should we start with?",
        a: "Most clients start with a fixed-price discovery: small, scoped, and it de-risks everything after. The output tells you which model the real work needs.",
      },
      {
        q: "Can we switch models mid-engagement?",
        a: "Yes — project work often becomes an embedded team, and shipped AI systems usually move to managed operations. The contract is built to flex.",
      },
      {
        q: "How do you price?",
        a: "Fixed-price for scoped outcomes, monthly rates for teams and managed ops. Every proposal shows the modelled ROI next to the cost.",
      },
    ],
    ctaTitle: "Not sure what you need yet?",
    ctaDesc:
      "That's the right time to talk. One call, and you'll leave with a recommended model and a plan — no obligation.",
    seo: {
      title: "Flexible Engagement Models & Pricing",
      description:
        "Fixed-price projects, embedded teams or fully managed AI operations — pick the model that fits your risk profile and switch as you grow. Find yours in one call.",
      keywords:
        "software development engagement models, fixed price software development, dedicated development team, managed AI services, IT outsourcing models",
    },
  },
};

/**
 * Structured data for a service page: Service schema plus an FAQPage schema
 * built from the page's real FAQ content.
 */
export function buildServiceJsonLd(service) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      serviceType: service.name,
      description: service.seo.description,
      provider: {
        "@type": "Organization",
        name: "RoundDigital",
        url: "https://www.round.digital",
      },
      areaServed: ["Canada", "United States"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];
}
