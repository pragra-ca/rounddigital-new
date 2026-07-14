// Content for the RoundDigital "Site" homepage sections.

export const HERO_STATS = [
  { n: "100+", l: "Projects delivered" },
  { n: "50+", l: "Happy clients" },
  { n: "98%", l: "Client satisfaction" },
  { n: "20+", l: "Expert consultants" },
];

export const LOGOS = ["AWS", "Azure", "Google Cloud", "OpenAI", "Anthropic", "Kubernetes"];

export const SERVICE_CARDS = [
  {
    tag: "AI",
    title: "Enterprise AI and agentic automation at scale",
    desc: "Build, deploy, and operate AI agents that transform business processes.",
    img: "/rd/images/feature-1.jpg",
    href: "/services/ai-machine-learning",
  },
  {
    tag: "Cloud",
    title: "Cloud engineering, migration, and platform engineering",
    desc: "Design resilient, scalable infrastructure on AWS, Azure, and GCP.",
    img: "/rd/images/feature-2.jpg",
    href: "/services/cloud-solutions",
  },
  {
    tag: "Product",
    title: "Custom software and product engineering for growth",
    desc: "Full-cycle development from concept to market with dedicated engineering teams.",
    img: "/rd/images/feature-3.jpg",
    href: "/services/custom-software",
  },
];

export const JOURNEY = [
  {
    img: "/rd/images/pillar-0.jpg",
    title: "Discovery and architecture for the AI-first enterprise",
    body: "We map your business objectives to a technical blueprint, identifying high-impact AI use cases and defining a secure, scalable target state.",
  },
  {
    img: "/rd/images/pillar-1.jpg",
    title: "Data engineering and AI model development",
    body: "We build robust data pipelines and develop custom models or fine-tune existing ones, ensuring data quality and governance from day one.",
  },
  {
    img: "/rd/images/pillar-2.jpg",
    title: "Production deployment and continuous optimization",
    body: "We deploy into your environment with full CI/CD, monitoring, and security. Then we continuously optimize for cost, latency, and accuracy.",
  },
  {
    img: "/rd/images/benefit-0.jpg",
    title: "Managed services and global engineering support",
    body: "Our teams in Toronto, Dallas, and Pune provide 24/7 operational support, ensuring your AI systems are always reliable and improving.",
  },
];

export const INDUSTRIES = [
  { name: "Retail & E-commerce", tag: "RETAIL & E-COMMERCE", title: "Service at scale", body: "Support agents, demand forecasting and personalization — proven at 10,000+ inquiries a day. Omnichannel platforms that turn browsers into buyers." },
  { name: "Banking & Finance", tag: "BANKING & FINANCE", title: "Modernize without downtime", body: "Legacy migration, document automation and compliance-grade controls for regulated institutions that cannot afford to blink." },
  { name: "Healthcare", tag: "HEALTHCARE", title: "HIPAA-safe intelligence", body: "Intake automation, records processing and patient communication with privacy engineered in from the first line of code." },
  { name: "Manufacturing & Logistics", tag: "MANUFACTURING & LOGISTICS", title: "Operations that see ahead", body: "Predictive maintenance, supply-chain visibility and document flows across the entire chain." },
  { name: "SaaS & Technology", tag: "SAAS & TECHNOLOGY", title: "AI features that ship", body: "Embedded copilots, RAG search and agentic features inside your product — fast." },
  { name: "Professional Services", tag: "PROFESSIONAL SERVICES", title: "Billable hours, reclaimed", body: "Research, drafting and knowledge agents for legal, accounting and consulting teams." },
];

export const BENEFITS = {
  feature: {
    tag: "Speed",
    title: "Faster delivery with dedicated global engineering pods",
    body: "Our teams in Toronto, Dallas, and Pune operate around the clock, cutting time-to-market by 40% without sacrificing quality or control.",
    img: "/rd/images/benefit-1.jpg",
  },
  cards: [
    { tag: "Security", title: "Enterprise security", body: "SOC 2 compliant engineering with zero-trust architecture built into every deployment.", img: "/rd/images/hero-4.jpg" },
    { tag: "Scale", title: "Scalable architecture", body: "Cloud-native platforms designed to handle millions of transactions with predictable cost.", img: "/rd/images/hero-5.jpg" },
    { tag: "AI", title: "AI-native solutions", body: "We embed intelligence into your core operations, not just bolt it on.", img: "/rd/images/hero-1.jpg" },
    { tag: "Cost", title: "Lower costs", body: "Optimized cloud spending and efficient engineering that reduces total cost of ownership.", img: "/rd/images/hero-2.jpg" },
  ],
};

export const HOME_CASES = [
  {
    tag: "AI",
    read: "7 min read",
    title: "How a global insurer automated 80% of claims processing",
    desc: "We built an agentic AI system that extracts, validates, and adjudicates claims, reducing processing time from days to minutes.",
    img: "/rd/images/feature-0.jpg",
    href: "/works/ai-document-processing",
  },
  {
    tag: "Cloud",
    read: "5 min read",
    title: "Migrating a legacy banking platform to a cloud-native core",
    desc: "A zero-downtime migration from mainframe to microservices on AWS, handling 10 million daily transactions with improved resilience.",
    img: "/rd/images/hero-1.jpg",
    href: "/works/banking-digital-transformation",
  },
  {
    tag: "Product",
    read: "6 min read",
    title: "Building a real-time data platform for a fintech unicorn",
    desc: "We engineered a streaming analytics platform on Kafka and Snowflake, enabling instant fraud detection and personalized offers.",
    img: "/rd/images/benefit-2.jpg",
    href: "/works/ai-customer-service-automation",
  },
];

export const TESTIMONIALS = [
  { quote: "They didn't just build software. They engineered a competitive advantage that we measure in millions.", name: "Sarah Chen", role: "CTO, ClearPath Insurance", img: "/rd/images/testimonial-0.jpg" },
  { quote: "The migration was flawless. Zero downtime. Our board still asks how it was possible.", name: "David Miller", role: "VP Engineering, ApexPay", img: "/rd/images/testimonial-1.jpg" },
  { quote: "Their agents now handle work we used to staff around the clock — and every decision comes with a reason we can audit.", name: "Priya Nair", role: "VP Operations, Orbital Bank", img: "/rd/images/hero-4.jpg" },
  { quote: "Senior engineers from day one. No ramp-up theater, no hand-offs — just production systems shipping every sprint.", name: "Marcus Webb", role: "CIO, Helios Energy", img: "/rd/images/hero-0.jpg" },
];

export const PROCESS = [
  { tag: "Discover", title: "Discover the problem", body: "We map your business objectives to a technical blueprint with clear metrics.", img: "/rd/images/pillar-0.jpg" },
  { tag: "Design", title: "Design the architecture", body: "We define a secure, scalable target state before a single line of code.", img: "/rd/images/pillar-1.jpg" },
  { tag: "Optimize", title: "Optimize relentlessly for cost, latency, and accuracy", body: "We monitor, fine-tune, and improve your systems continuously. The work is never finished, only better than yesterday.", img: "/rd/images/how-0.jpg", big: true },
  { tag: "Build", title: "Build with discipline", body: "Our global pods engineer with test-driven development and continuous integration.", img: "/rd/images/pillar-2.jpg" },
  { tag: "Deploy", title: "Deploy and secure", body: "We ship to production with zero-trust security and full observability built in.", img: "/rd/images/benefit-0.jpg" },
];

export const TECHS = [
  { tag: "FRONTEND", title: "Performant interfaces built with React, Next.js, and TypeScript", body: "We craft fast, accessible, and scalable user experiences that your customers will trust and your engineers will enjoy maintaining.", stack: "React · Next.js · TypeScript · Svelte · React Native" },
  { tag: "BACKEND", title: "Resilient services in Go, Rust, Python, and Node.js", body: "Event-driven microservices and API-first architectures engineered for throughput, correctness, and graceful failure.", stack: "Go · Rust · Python · Node.js · GraphQL · gRPC" },
  { tag: "AI", title: "Production AI systems, from fine-tuning to agentic orchestration", body: "LLM applications with RAG, guardrails, and full observability — built to ship, not to demo.", stack: "Anthropic · OpenAI · LangChain · vector databases · MLflow" },
  { tag: "CLOUD", title: "Multi-cloud platforms on AWS, Azure, and GCP", body: "Cloud-native architecture, migration, and cost optimization with infrastructure as code from day one.", stack: "AWS · Azure · GCP · Terraform · Kubernetes · Serverless" },
  { tag: "DATA", title: "Lakehouse platforms that make data AI-ready", body: "Streaming and batch pipelines with governance and quality built in, powering analytics and models alike.", stack: "Databricks · Snowflake · Kafka · Spark · dbt · Airflow" },
  { tag: "DEVOPS", title: "Zero-touch delivery pipelines and GitOps workflows", body: "Ship faster with automated CI/CD, full observability, and sub-minute recovery times.", stack: "ArgoCD · GitHub Actions · Prometheus · Grafana · Vault" },
];

export const INSIGHTS = [
  { cat: "Security", read: "7 min read", title: "Zero-trust is a journey, not a product you can buy", desc: "How we implement identity-aware proxies, micro-segmentation, and continuous verification for enterprise workloads.", img: "/rd/images/hero-5.jpg" },
  { cat: "Data", read: "5 min read", title: "Building a data mesh for a global manufacturing operation", desc: "The architectural patterns and governance models that turned a data swamp into a competitive asset.", img: "/rd/images/hero-2.jpg" },
  { cat: "AI", read: "4 min read", title: "Fine-tuning versus RAG: choosing the right AI strategy", desc: "A practical framework for deciding when to customize a model and when to ground it with your own data.", img: "/rd/images/feature-1.jpg" },
];
