// Service content for the RoundDigital "Site" design (from the design's
// own data). Keys/ids match the existing /services/* routes.

export const rdServices = {
  "ai-machine-learning": {
    id: "ai-machine-learning",
    tag: "Intelligent automation",
    title: "AI & Machine Learning",
    headline: "AI agents that do the work — not the talking.",
    desc: "We design, build and operate custom AI agents that automate complex workflows, enhance decision-making, and pay for themselves in months — not years.",
    cta: "Scope your agent",
    statsLabel: "AGENTS WE'VE SHIPPED, BY THE NUMBERS",
    stats: [
      { n: "10k+", l: "inquiries handled daily" },
      { n: "98%", l: "extraction accuracy" },
      { n: "$2M", l: "saved annually, one client" },
      { n: "−90%", l: "manual processing time" },
    ],
    builds: [
      { t: "Customer service agents", d: "Multi-channel support with personalized answers and human escalation." },
      { t: "Document pipelines", d: "Extraction, verification and routing for invoices, contracts and claims." },
      { t: "Workflow automation", d: "Agents that run back-office processes end to end, while you sleep." },
      { t: "Decision copilots", d: "Insight and recommendation agents wired into your data and tools." },
    ],
    stack: ["Anthropic Claude", "OpenAI", "AWS Bedrock", "Azure OpenAI", "Vector databases", "Kubernetes"],
    faqs: [
      { q: "How long until an agent is in production?", a: "Typically 6–10 weeks from kickoff to a production agent on a scoped workflow, with evals against human baselines before launch." },
      { q: "How do you handle security and compliance?", a: "SOC 2 / ISO 27001-aligned processes, private deployments where required, and guardrails with full audit trails on every agent action." },
      { q: "What does it cost?", a: "Fixed-price discovery, then milestone-based builds. We only take on projects where the modelled ROI clears the build cost within 12 months." },
    ],
    outroTitle: "Have a workflow in mind?",
    outroBody: "Bring us your messiest process. We'll tell you in one call whether an agent can beat it — and what the ROI looks like.",
    seo: {
      title: "AI Agent Development & Machine Learning Services",
      description: "Custom AI agents that automate real workflows — from discovery to production in 6–10 weeks. Book a free scoping call.",
      keywords: "AI agent development, machine learning services, intelligent automation, NLP, enterprise AI",
    },
  },
  "cloud-solutions": {
    id: "cloud-solutions",
    tag: "Scalable infrastructure",
    title: "Cloud Solutions",
    headline: "Cloud platforms built to never blink.",
    desc: "Cloud-native architecture, zero-downtime migration and relentless cost optimization across AWS, Azure and Google Cloud — engineered for enterprises that can't afford to blink.",
    cta: "Scope your migration",
    statsLabel: "MIGRATIONS WE'VE SHIPPED, BY THE NUMBERS",
    stats: [
      { n: "50+", l: "legacy apps migrated" },
      { n: "0", l: "minutes of downtime" },
      { n: "−60%", l: "ops costs, one client" },
      { n: "3×", l: "performance gains" },
    ],
    builds: [
      { t: "Cloud-native architecture", d: "Microservices, serverless and Kubernetes platforms designed for scale." },
      { t: "Zero-downtime migration", d: "Mainframe and legacy workloads moved without stopping the business." },
      { t: "Cost optimization", d: "FinOps reviews and rightsizing that cut spend without cutting capacity." },
      { t: "Platform engineering", d: "Internal developer platforms with CI/CD and observability built in." },
    ],
    stack: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform", "Kubernetes", "Docker"],
    faqs: [
      { q: "Can you migrate without downtime?", a: "Yes — strangler-pattern migrations with parallel runs and staged cutovers. Our banking client moved 50+ apps with zero downtime." },
      { q: "Which cloud should we pick?", a: "The one your workload and compliance profile need. We are certified across AWS, Azure and GCP and have no vendor incentive." },
      { q: "How do you control cloud spend?", a: "Cost budgets in infrastructure-as-code, continuous rightsizing, and monthly FinOps reporting against an agreed baseline." },
    ],
    outroTitle: "Ready to modernize?",
    outroBody: "Tell us what's running today. We'll map the path to cloud-native — with a working milestone inside six weeks.",
    seo: {
      title: "Cloud Migration & Managed Cloud Services",
      description: "Zero-downtime cloud migration, cloud-native architecture and cost optimization on AWS, Azure and Google Cloud. Get a migration plan.",
      keywords: "cloud migration services, AWS consulting, Azure migration, Google Cloud, Kubernetes, FinOps",
    },
  },
  cybersecurity: {
    id: "cybersecurity",
    tag: "Enterprise protection",
    title: "Cybersecurity",
    headline: "Security that never sleeps.",
    desc: "Advanced threat detection, compliance management and proactive security engineering — so your AI systems and enterprise stack inherit controls, not risk.",
    cta: "Get a security review",
    statsLabel: "SECURITY ENGAGEMENTS, BY THE NUMBERS",
    stats: [
      { n: "24/7", l: "threat monitoring" },
      { n: "SOC 2", l: "aligned processes" },
      { n: "ISO", l: "27001 aligned" },
      { n: "100%", l: "audit trail coverage" },
    ],
    builds: [
      { t: "Threat detection", d: "Advanced monitoring and response that spots attacks before they land." },
      { t: "Compliance management", d: "SOC 2, ISO 27001, GDPR and HIPAA programs run as engineering, not paperwork." },
      { t: "Zero-trust architecture", d: "Identity-aware access and micro-segmentation across your stack." },
      { t: "AI system guardrails", d: "Security controls and audit trails purpose-built for agentic systems." },
    ],
    stack: ["Zero-trust", "SIEM", "Vault", "Cloudflare", "AWS Security Hub", "Azure Sentinel"],
    faqs: [
      { q: "Can you secure our AI deployments?", a: "Yes — guardrails, private deployments and full audit trails on every agent action are standard in our AI builds." },
      { q: "Do you handle compliance certification?", a: "We build and operate the controls and evidence pipelines that get you through SOC 2 and ISO 27001 audits." },
      { q: "What does an engagement look like?", a: "A fixed-price security review first, then a prioritized remediation roadmap you can execute with us or in-house." },
    ],
    outroTitle: "Worried about your attack surface?",
    outroBody: "One review, and you'll know exactly where you stand — and what to fix first.",
    seo: {
      title: "Cybersecurity Services & SOC 2 Compliance",
      description: "24/7 threat detection, penetration testing and SOC 2 / ISO 27001 compliance programs — security engineered in. Book a security review.",
      keywords: "cybersecurity services, managed security, SOC 2 compliance, ISO 27001, threat detection, AI security",
    },
  },
  "custom-software": {
    id: "custom-software",
    tag: "Tailored solutions",
    title: "Custom Software",
    headline: "Software designed for your business, hardened for production.",
    desc: "Web platforms, APIs and internal tools engineered on modern stacks — designed for your business, hardened for production, and shipped by senior engineers.",
    cta: "Scope your build",
    statsLabel: "PROJECTS DELIVERED, BY THE NUMBERS",
    stats: [
      { n: "100+", l: "projects delivered" },
      { n: "50+", l: "happy clients" },
      { n: "98%", l: "client satisfaction" },
      { n: "20+", l: "expert consultants" },
    ],
    builds: [
      { t: "Web platforms", d: "Customer-facing products on React, Next.js and TypeScript." },
      { t: "APIs and integrations", d: "API-first services that connect your systems and partners." },
      { t: "Internal tools", d: "Back-office software your teams actually enjoy using." },
      { t: "Mobile apps", d: "Cross-platform apps that share code without sacrificing feel." },
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL"],
    faqs: [
      { q: "Who actually writes the code?", a: "Senior engineers from our Toronto, Dallas and Pune teams — no hand-offs to a bench you never met." },
      { q: "How do you keep quality high?", a: "Test-driven development, CI/CD from day one, and code review on every change. You get the repo, the docs and the pipeline." },
      { q: "Can you take over an existing codebase?", a: "Yes — we start with an assessment sprint, stabilize the critical paths, then ship improvements on a steady rhythm." },
    ],
    outroTitle: "Have a product in mind?",
    outroBody: "Bring the idea. We'll bring the architecture, the team and the first working milestone inside six weeks.",
    seo: {
      title: "Custom Software Development for Enterprises",
      description: "Web platforms, APIs, internal tools and mobile apps built to spec by senior engineers — 100+ projects shipped, full IP transfer.",
      keywords: "custom software development, enterprise software, web application development, API development",
    },
  },
  "data-analytics": {
    id: "data-analytics",
    tag: "Decision intelligence",
    title: "Data & Analytics",
    headline: "Turn scattered data into decisions.",
    desc: "Pipelines, warehouses and dashboards that turn scattered data into answers your leadership actually uses — and the foundation your AI roadmap needs.",
    cta: "Scope your platform",
    statsLabel: "DATA PLATFORMS, BY THE NUMBERS",
    stats: [
      { n: "100k+", l: "documents processed monthly" },
      { n: "98%", l: "pipeline accuracy" },
      { n: "Real-time", l: "streaming analytics" },
      { n: "1", l: "source of truth" },
    ],
    builds: [
      { t: "Data pipelines", d: "Streaming and batch pipelines with quality checks built in." },
      { t: "Warehouses & lakehouses", d: "Snowflake and Databricks platforms that make data AI-ready." },
      { t: "Dashboards", d: "Leadership reporting that distills noise into the numbers that matter." },
      { t: "Data governance", d: "Lineage, access control and quality monitoring across the estate." },
    ],
    stack: ["Snowflake", "Databricks", "Kafka", "Spark", "dbt", "Airflow"],
    faqs: [
      { q: "Our data is a mess. Where do we start?", a: "With the decision you most need to make. We build backwards from that to the minimum pipeline and model that answers it." },
      { q: "Do we need a data platform before AI?", a: "You need clean, governed data for the workflows you want to automate — we usually build both in the same program." },
      { q: "What tools do you use?", a: "Snowflake, Databricks, Kafka, dbt and Airflow are our defaults, but we fit your existing stack where it works." },
    ],
    outroTitle: "Drowning in data?",
    outroBody: "Tell us the question you can't answer today. We'll build the pipeline that answers it.",
    seo: {
      title: "Data Engineering & Analytics Services",
      description: "Data pipelines, warehouses and dashboards your teams trust — one source of truth, and the foundation your AI roadmap needs.",
      keywords: "data engineering, data analytics, data pipelines, data warehouse, dbt, Snowflake, Databricks",
    },
  },
  "digital-transformation": {
    id: "digital-transformation",
    tag: "Modernize operations",
    title: "Digital Transformation",
    headline: "Modernize without betting the company.",
    desc: "Strategic consulting and hands-on engineering to retire legacy systems, adopt cloud and AI, and change how the business operates — without betting the company on a big bang.",
    cta: "Plan your roadmap",
    statsLabel: "TRANSFORMATIONS, BY THE NUMBERS",
    stats: [
      { n: "50+", l: "legacy apps retired" },
      { n: "−60%", l: "operating costs" },
      { n: "3×", l: "delivery speed" },
      { n: "0", l: "big-bang cutovers" },
    ],
    builds: [
      { t: "Legacy assessment", d: "A clear-eyed inventory of what to keep, wrap, rewrite or retire." },
      { t: "Modernization roadmap", d: "Sequenced milestones that deliver value every quarter, not in year three." },
      { t: "Incremental migration", d: "Strangler-pattern rewrites that never stop the business." },
      { t: "Operating model change", d: "DevOps practices and team topologies that make the change stick." },
    ],
    stack: ["AWS", "Azure", "Kubernetes", "Terraform", "GitHub Actions", "Datadog"],
    faqs: [
      { q: "How do you avoid the big-bang risk?", a: "Everything ships incrementally behind strangler patterns and feature flags. The old system stays alive until the new one has proven itself." },
      { q: "How long does transformation take?", a: "The first production milestone lands inside six weeks; the full program is sequenced in quarters with value delivered at each step." },
      { q: "Do you do strategy or engineering?", a: "Both — the consultants who write the roadmap are the engineers who execute it." },
    ],
    outroTitle: "Legacy holding you back?",
    outroBody: "One assessment, and you'll have a modernization roadmap your board can actually fund.",
    seo: {
      title: "Digital Transformation & Legacy Modernization",
      description: "Modernize legacy systems and adopt cloud and AI without downtime — 50+ apps migrated, costs down 60%. Plan your roadmap.",
      keywords: "digital transformation consulting, legacy modernization, application modernization, cloud adoption",
    },
  },
  "global-talent": {
    id: "global-talent",
    tag: "Scale on demand",
    title: "Global Talent",
    headline: "Senior engineers, embedded in weeks.",
    desc: "Extend your team with vetted senior engineers, architects and AI specialists from our Toronto and Dallas network — embedded in your workflow within weeks.",
    cta: "Build your team",
    statsLabel: "OUR BENCH, BY THE NUMBERS",
    stats: [
      { n: "20+", l: "expert consultants" },
      { n: "3", l: "global delivery hubs" },
      { n: "24/7", l: "follow-the-sun coverage" },
      { n: "2wk", l: "typical time to embed" },
    ],
    builds: [
      { t: "Staff augmentation", d: "Vetted senior engineers who slot into your teams and tools." },
      { t: "Dedicated pods", d: "Full delivery squads with a lead, engineers and QA — one throat to choke." },
      { t: "AI specialists", d: "ML engineers and agent developers for hard-to-hire roles." },
      { t: "Architecture advisory", d: "Fractional architects who level up your in-house teams." },
    ],
    stack: ["Toronto", "Dallas", "Pune", "Your stack", "Your tools", "Your rhythm"],
    faqs: [
      { q: "How are engineers vetted?", a: "Multi-stage technical screening plus a paid trial project. Fewer than 5% of applicants make the bench." },
      { q: "What if it isn't working out?", a: "Two-week replacement guarantee, no questions asked. Continuity is our problem, not yours." },
      { q: "Do they work our hours?", a: "Toronto and Dallas engineers work your timezone; Pune extends you to follow-the-sun coverage if you want it." },
    ],
    outroTitle: "Need senior hands fast?",
    outroBody: "Tell us the roles. We'll show you profiles this week and embed the team within two.",
    seo: {
      title: "IT Staff Augmentation & Team Extension",
      description: "Vetted senior engineers, architects and AI specialists embedded in your team within two weeks — from our own delivery bench.",
      keywords: "IT staff augmentation, team extension, hire senior engineers, AI engineers, dedicated development team",
    },
  },
  "engagement-models": {
    id: "engagement-models",
    tag: "Ways to work",
    title: "Engagement Models",
    headline: "Work with us the way that fits.",
    desc: "Fixed-price projects, embedded teams, or managed AI operations — pick the model that fits your risk profile, and switch as your needs change.",
    cta: "Find your model",
    statsLabel: "HOW ENGAGEMENTS RUN, BY THE NUMBERS",
    stats: [
      { n: "3", l: "engagement models" },
      { n: "6wk", l: "first working milestone" },
      { n: "12mo", l: "ROI target on every build" },
      { n: "0", l: "lock-in contracts" },
    ],
    builds: [
      { t: "Fixed-price projects", d: "Scoped outcomes, milestone billing, zero surprises." },
      { t: "Embedded teams", d: "Dedicated pods on a monthly rhythm, managed by outcomes." },
      { t: "Managed AI operations", d: "We run your agents in production with SLAs and ROI reporting." },
      { t: "Discovery sprints", d: "Fixed-price scoping that de-risks the big decision." },
    ],
    stack: ["Fixed-price", "Time & materials", "Managed ops", "Milestone billing", "SLAs", "ROI reporting"],
    faqs: [
      { q: "Can we switch models mid-stream?", a: "Yes — many clients start fixed-price, then move to an embedded team once trust is established." },
      { q: "How does pricing work?", a: "Fixed-price discovery first, then milestone-based builds or monthly team pricing. Every proposal shows the modelled ROI." },
      { q: "What about IP and contracts?", a: "You own everything we build — code, docs, pipelines. No lock-in, 30-day exit on managed operations." },
    ],
    outroTitle: "Not sure which fits?",
    outroBody: "One call with a senior engineer, and you'll leave with a recommendation — and a plan.",
    seo: {
      title: "Flexible Engagement Models & Pricing",
      description: "Fixed-price projects, embedded teams or fully managed AI operations — pick the model that fits and switch as you grow.",
      keywords: "software development engagement models, fixed price development, dedicated team, managed AI services",
    },
  },
};

// Longer-form, human-written SEO content merged into each service above.
const RD_SERVICE_CONTENT = {
  "ai-machine-learning": {
    overview: {
      heading: "Production AI agents, not science projects",
      paragraphs: [
        "Most AI initiatives stall in the gap between an impressive demo and a system your business can actually depend on. We close that gap. RoundDigital designs, builds and operates AI agents that run real workflows in production — handling customer conversations, processing documents, and making the routine decisions that quietly consume your team's week.",
        "Every engagement starts with the workflow, not the model. We map where the time and money actually go, pick the highest-value slice, and ship a working agent on your real data within weeks — evaluated against human baselines before it ever touches a customer. Then we harden it: guardrails, audit trails, monitoring and continuous evals, so the system stays accurate as the world around it changes.",
      ],
    },
    outcomes: [
      { t: "Faster cycle times", d: "Work that took days happens in minutes, around the clock, without adding headcount." },
      { t: "Accuracy you can audit", d: "Every agent decision is logged with its reasoning, so compliance and finance can trust the output." },
      { t: "ROI inside a year", d: "We only take on agent builds where the modelled return clears the cost within twelve months." },
    ],
  },
  "cloud-solutions": {
    overview: {
      heading: "Cloud that earns its keep",
      paragraphs: [
        "Moving to the cloud is easy to start and hard to finish well. The teams that win treat it as an engineering discipline, not a lift-and-shift checkbox — and that's exactly how we run it. RoundDigital designs cloud-native architecture, migrates legacy workloads without downtime, and keeps the bill honest long after go-live, across AWS, Azure and Google Cloud.",
        "We've moved 50+ applications for a multinational bank with zero downtime using staged, strangler-pattern cutovers — the old system stays alive until the new one has proven itself. And because cloud spend has a way of creeping, every platform we build ships with cost budgets in code, continuous right-sizing and monthly FinOps reporting, so you scale on capability instead of surprise invoices.",
      ],
    },
    outcomes: [
      { t: "Zero-downtime migration", d: "Staged cutovers and parallel runs mean customers never notice the platform changing underneath them." },
      { t: "Lower run costs", d: "FinOps discipline typically cuts cloud spend without cutting capacity — one client by 60%." },
      { t: "A platform teams enjoy", d: "Paved-road CI/CD and observability so your engineers ship faster and sleep better." },
    ],
  },
  cybersecurity: {
    overview: {
      heading: "Security engineered in, not bolted on",
      paragraphs: [
        "Security that lives in a separate binder is security that fails under pressure. We build controls into the architecture — identity-aware access, zero-trust segmentation, guardrails and audit trails — so your enterprise stack and your AI systems inherit protection instead of inheriting risk.",
        "Our engagements start with an honest security review that tells you exactly where you stand and what to fix first, then a prioritized remediation roadmap you can run with us or in-house. For teams heading into SOC 2 or ISO 27001, we build and operate the evidence pipelines that get you through the audit — treating compliance as engineering, not paperwork.",
      ],
    },
    outcomes: [
      { t: "Threats caught early", d: "24/7 monitoring and response that spots attacks before they land." },
      { t: "Audit-ready by design", d: "SOC 2 / ISO 27001 controls and evidence built into delivery from day one." },
      { t: "AI you can deploy safely", d: "Guardrails and full audit trails purpose-built for agentic systems." },
    ],
  },
  "custom-software": {
    overview: {
      heading: "Software built to be run for years",
      paragraphs: [
        "Anyone can ship a prototype. Shipping software a business can operate, extend and trust for years is a different craft — and it's the one we're built for. RoundDigital designs and builds web platforms, APIs, internal tools and mobile apps on modern stacks, hardened for production and handed over clean.",
        "Senior engineers from our Toronto, Dallas and Pune teams own features end to end, with test-driven development and CI/CD from the first commit. You get the repo, the documentation and the pipeline — full IP, no lock-in, no mystery bench. Whether you're launching a new product or rescuing one that's stalled, the work moves on a steady, visible rhythm.",
      ],
    },
    outcomes: [
      { t: "Production quality from day one", d: "Automated tests, code review and security checks on every change." },
      { t: "You own everything", d: "Full source, docs and pipeline transfer — no lock-in, no black boxes." },
      { t: "A working milestone in six weeks", d: "You see real software early and often, not a big reveal at the end." },
    ],
  },
  "data-analytics": {
    overview: {
      heading: "From data you can't trust to decisions you can",
      paragraphs: [
        "Most organizations aren't short on data — they're short on data they can act on. Reports disagree, pipelines break quietly, and the number in the board deck is three weeks old. We fix the foundation: governed pipelines, a warehouse or lakehouse that's genuinely a single source of truth, and dashboards leadership checks because they believe them.",
        "We start from the decision you most need to make and build backwards to the minimum pipeline and model that answers it — then widen from there. The same platform that powers today's reporting is the one that makes your data AI-ready, so your analytics investment and your AI roadmap pull in the same direction instead of competing for budget.",
      ],
    },
    outcomes: [
      { t: "One source of truth", d: "Governed, documented data your whole organization can rely on." },
      { t: "Faster time to insight", d: "Streaming and batch pipelines that turn raw events into answers in near-real time." },
      { t: "AI-ready foundations", d: "Clean, well-modelled data that unblocks the automation you want next." },
    ],
  },
  "digital-transformation": {
    overview: {
      heading: "Modernize without betting the company",
      paragraphs: [
        "Legacy systems rarely fail loudly — they just make everything slower, riskier and more expensive until the business can't move. We modernize them the way that doesn't require a heroic, all-or-nothing cutover: an honest assessment of what to keep, wrap, rewrite or retire, then a sequenced roadmap that delivers value every quarter instead of a promise for year three.",
        "Everything ships incrementally behind strangler patterns and feature flags, with the old system alive until the new one has earned trust. And because technology change only sticks when the operating model changes with it, we bring the DevOps practices, team topologies and hands-on engineering that make the new way of working permanent — not a slide that gets ignored after kickoff.",
      ],
    },
    outcomes: [
      { t: "No big-bang risk", d: "Reversible, incremental steps mean value lands continuously and rollback is always possible." },
      { t: "Value every quarter", d: "Multi-year programs delivered as a chain of shippable milestones." },
      { t: "Change that sticks", d: "New practices and ownership embedded in your teams, not just your architecture." },
    ],
  },
  "global-talent": {
    overview: {
      heading: "Senior engineers, embedded like your own",
      paragraphs: [
        "Hiring senior engineers is slow, expensive and — for specialist AI and cloud roles — often impossible on the timeline you actually have. We extend your team with vetted senior engineers, architects and AI specialists from our Toronto, Dallas and Pune network, embedded in your workflow, your tools and your rhythm within weeks.",
        "These aren't résumés off a bench you'll never meet. Fewer than 5% of applicants make it through our technical screening and paid trial, and every placement comes with our engineering leadership behind their work. Need a full squad instead of individuals? We stand up dedicated pods — a lead, engineers and QA — with a single point of accountability for delivery.",
      ],
    },
    outcomes: [
      { t: "Embedded in weeks, not months", d: "Typically two weeks from brief to engineers shipping in your codebase." },
      { t: "Genuinely senior", d: "Vetted specialists who raise the bar for your in-house team, not fill a seat." },
      { t: "Flex up or down", d: "Scale the team monthly, with a two-week replacement guarantee if a fit isn't right." },
    ],
  },
  "engagement-models": {
    overview: {
      heading: "Work with us the way that fits your risk",
      paragraphs: [
        "Every project carries a different mix of certainty, urgency and internal capacity — so a single contract shape rarely fits. We offer three: fixed-price projects for scoped outcomes, embedded teams for evolving roadmaps, and fully managed AI operations for systems in production. Most clients start with a fixed-price discovery that de-risks the big decision, then move to whatever the real work needs.",
        "Whichever model you pick, the principles don't change: milestone-based delivery, complete visibility into progress, full IP ownership and no lock-in. Every proposal shows the modelled ROI next to the cost, and managed operations carry SLAs and a 30-day exit. You should never feel trapped in an engagement — only glad you're in it.",
      ],
    },
    outcomes: [
      { t: "Match the model to the risk", d: "Fixed-price, embedded team or managed ops — and switch as your needs change." },
      { t: "Total transparency", d: "Milestone billing and progress you can see, with ROI modelled up front." },
      { t: "No lock-in, ever", d: "Full IP transfer and a clean exit — you stay because it's working." },
    ],
  },
};

Object.keys(rdServices).forEach((id) => {
  if (RD_SERVICE_CONTENT[id]) Object.assign(rdServices[id], RD_SERVICE_CONTENT[id]);
});

export const RD_PROCESS = [
  { time: "WK 1–2", title: "Discover", body: "Map the workflow, data and ROI target. Pick the highest-value slice." },
  { time: "WK 3–5", title: "Prototype", body: "A working milestone on your real data, evaluated against baselines." },
  { time: "WK 6–10", title: "Ship", body: "Production hardening: security review, guardrails, integrations, SLAs." },
  { time: "ONGOING", title: "Operate", body: "Monitoring, evals and improvement — 24/7, with monthly ROI reporting." },
];

export function buildRdServiceJsonLd(s) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.title,
      serviceType: s.title,
      description: s.seo.description,
      provider: { "@type": "Organization", name: "RoundDigital", url: "https://www.round.digital" },
      areaServed: ["Canada", "United States"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
}
