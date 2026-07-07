/**
 * Signal Field case study pages (design 5b pattern). Slugs match
 * src/data/caseStudies.js so existing /works/* links keep working.
 */

export const sfCaseStudies = {
  "ai-customer-service-automation": {
    kicker: "CASE 01 · GLOBAL RETAIL · CUSTOMER OPERATIONS",
    title: "AI customer service automation for a global retailer",
    breadcrumb: "AI Customer Service",
    meta: [
      { label: "Industry", value: "Retail & e-commerce" },
      { label: "Services", value: "AI Agent Development · NLP" },
      { label: "Timeline", value: "8 weeks to production" },
      { label: "Stack", value: "Claude · AWS · Kubernetes" },
    ],
    stats: [
      { value: "−75%", label: "response time" },
      { value: "10k+", label: "daily inquiries handled" },
      { value: "24/7", label: "multi-channel coverage" },
      { value: "92%", label: "resolved without escalation" },
    ],
    challenge:
      "A global retailer's support organization was drowning: 10,000+ daily inquiries across email, chat and social, seasonal spikes that hiring couldn't track, and response times that were quietly eroding customer loyalty.",
    solution:
      "We deployed intelligent service agents across every channel — NLP-driven personalization, order-system integrations for real answers, and seamless escalation that hands humans the full conversation context, not a transcript dump.",
    results:
      "Response times fell 75% within the first quarter. The agents now resolve 92% of inquiries end to end, and the human team focuses on the complex cases where empathy actually moves the needle.",
    quote: {
      text: "Our customers stopped noticing they were talking to an agent — and started noticing how fast their problems got solved.",
      attribution: "VP CUSTOMER EXPERIENCE · GLOBAL RETAILER",
    },
    diagram: [
      { label: "Omnichannel intake", sub: "Email, chat, social — 10k+ inquiries a day" },
      { label: "Intent & sentiment agents", sub: "NLP classification with per-customer context" },
      { label: "Answer synthesis", sub: "Live order, inventory and account lookups" },
      { label: "Human escalation", sub: "Full conversation context, zero repeats" },
    ],
    related: ["banking-digital-transformation", "ai-document-processing"],
  },

  "banking-digital-transformation": {
    kicker: "CASE 02 · MULTINATIONAL BANK · CORE MODERNIZATION",
    title: "Digital transformation of legacy banking systems",
    breadcrumb: "Banking Transformation",
    meta: [
      { label: "Industry", value: "Banking & finance" },
      { label: "Services", value: "Digital Transformation · Cloud" },
      { label: "Timeline", value: "18 months, quarterly wins" },
      { label: "Stack", value: "Azure · Kubernetes · Event streaming" },
    ],
    stats: [
      { value: "50+", label: "legacy apps migrated" },
      { value: "0", label: "downtime during cutover" },
      { value: "−60%", label: "operational costs" },
      { value: "3×", label: "system performance" },
    ],
    challenge:
      "A multinational bank was running its core operations on 50+ aging applications — expensive to operate, slow to change, and increasingly hard to keep compliant. Every previous modernization attempt had stalled on the fear of downtime.",
    solution:
      "We ran a strangler-fig migration: wrapping legacy systems in APIs, carving out services one by one to cloud-native microservices, and staging every cutover behind feature flags with instant rollback. Compliance controls were built into the platform, not bolted on.",
    results:
      "All 50+ applications reached the cloud with zero downtime. Operational costs dropped 60%, performance tripled, and release cycles went from quarterly to weekly — with a cleaner audit story than the legacy estate ever had.",
    quote: {
      text: "They did the thing every vendor promised and none delivered: modernized the core without a single minute of downtime.",
      attribution: "CTO, RETAIL BANKING · MULTINATIONAL BANK",
    },
    diagram: [
      { label: "Legacy estate wrapped in APIs", sub: "50+ applications, strangler-fig pattern" },
      { label: "Service extraction", sub: "Domain by domain, behind feature flags" },
      { label: "Cloud-native platform", sub: "Microservices on Azure + event streaming" },
      { label: "Staged cutovers", sub: "Instant rollback — zero downtime" },
    ],
    related: ["ai-document-processing", "supply-chain-ai-optimization"],
  },

  "ai-document-processing": {
    kicker: "CASE 03 · FORTUNE 500 · FINANCIAL OPERATIONS",
    title: "Intelligent document processing with AI agents",
    breadcrumb: "Intelligent Document Processing",
    meta: [
      { label: "Industry", value: "Enterprise finance" },
      { label: "Services", value: "AI Agent Development · Cloud" },
      { label: "Timeline", value: "10 weeks to production" },
      { label: "Stack", value: "Claude · AWS · Kubernetes" },
    ],
    stats: [
      { value: "$2M", label: "saved annually" },
      { value: "100k+", label: "documents monthly" },
      { value: "98%", label: "extraction accuracy" },
      { value: "−90%", label: "manual processing time" },
    ],
    challenge:
      "A Fortune 500 finance team was manually processing 100,000+ invoices a month across formats, languages and legacy systems. Error rates were climbing, close cycles were slipping, and headcount couldn't scale with volume.",
    solution:
      "We built an agent pipeline that classifies, extracts and verifies every document — cross-checking against POs and vendor records, flagging exceptions to humans with full reasoning traces, and posting clean entries straight to the ERP.",
    results:
      "98% straight-through accuracy at launch, rising with every eval cycle. Manual touch time down 90%. The team redeployed to exception handling and vendor strategy — and the system paid for itself in under five months.",
    quote: {
      text: "The agents didn't just match our processors — they caught discrepancies we'd been missing for years.",
      attribution: "VP FINANCE OPERATIONS · FORTUNE 500",
    },
    diagram: [
      { label: "Document intake", sub: "100k+ invoices a month, every format" },
      { label: "Classification & extraction agents", sub: "Claude on AWS — 98% accuracy" },
      { label: "Verification & exceptions", sub: "PO and vendor cross-checks, reasoning traces" },
      { label: "ERP posting", sub: "Clean entries with a full audit trail" },
    ],
    related: ["ai-customer-service-automation", "banking-digital-transformation"],
  },

  "healthcare-ai-platform": {
    kicker: "CASE 04 · HEALTHCARE NETWORK · PATIENT OPERATIONS",
    title: "Enterprise AI agent platform for healthcare",
    breadcrumb: "Healthcare AI Platform",
    meta: [
      { label: "Industry", value: "Healthcare" },
      { label: "Services", value: "AI Agent Development · Security" },
      { label: "Timeline", value: "12 weeks to production" },
      { label: "Stack", value: "Azure OpenAI · FHIR · Kubernetes" },
    ],
    stats: [
      { value: "50k+", label: "interactions daily" },
      { value: "+45%", label: "patient satisfaction" },
      { value: "−65%", label: "administrative overhead" },
      { value: "100%", label: "HIPAA-aligned controls" },
    ],
    challenge:
      "A healthcare provider network was losing clinical hours to administration: patient scheduling, insurance verification and records management all ran on phone calls, faxes and manual re-keying — with privacy rules making off-the-shelf automation a non-starter.",
    solution:
      "We built a multi-agent platform with privacy engineered in: scheduling agents that negotiate appointments across systems, verification agents that clear insurance before the visit, and records agents that keep charts current — every action logged, every data path HIPAA-aligned.",
    results:
      "The platform now handles 50,000+ interactions a day. Patient satisfaction scores rose 45%, administrative overhead fell 65%, and clinical staff got their hours back for the work only humans can do.",
    quote: {
      text: "Compliance signed off before the pilot even ended. That never happens.",
      attribution: "CIO · HEALTHCARE PROVIDER NETWORK",
    },
    diagram: [
      { label: "Patient requests", sub: "Voice, portal and fax — 50k+ daily" },
      { label: "Scheduling & verification agents", sub: "Appointments negotiated, insurance cleared" },
      { label: "Records sync", sub: "FHIR integration with privacy controls" },
      { label: "Clinical dashboard", sub: "Exceptions and alerts for staff" },
    ],
    related: ["ai-document-processing", "ai-customer-service-automation"],
  },

  "supply-chain-ai-optimization": {
    kicker: "CASE 05 · MANUFACTURING · SUPPLY CHAIN",
    title: "Supply chain optimization using AI and digital transformation",
    breadcrumb: "Supply Chain Optimization",
    meta: [
      { label: "Industry", value: "Manufacturing & logistics" },
      { label: "Services", value: "AI & Analytics · Transformation" },
      { label: "Timeline", value: "16 weeks to global rollout" },
      { label: "Stack", value: "GCP · Databricks · Event streaming" },
    ],
    stats: [
      { value: "−40%", label: "inventory costs" },
      { value: "99.5%", label: "delivery accuracy" },
      { value: "200+", label: "locations, real-time visibility" },
      { value: "3×", label: "faster planning cycles" },
    ],
    challenge:
      "A manufacturing giant ran its supply chain on lagging indicators: inventory buffers set by gut feel, delivery promises made blind, and 200+ global locations reporting on spreadsheets that were stale before they were opened.",
    solution:
      "We wired the chain for real-time visibility — event streams from every location into a unified data platform — then put AI-driven predictive analytics on top: demand forecasting, inventory optimization and exception agents that flag disruptions before they cascade.",
    results:
      "Inventory costs fell 40% while delivery accuracy climbed to 99.5%. Planners now work from live data across all 200+ locations, and planning cycles that took weeks close in days.",
    quote: {
      text: "For the first time, we see the whole chain move — before it moves against us.",
      attribution: "SVP SUPPLY CHAIN · GLOBAL MANUFACTURER",
    },
    diagram: [
      { label: "Event streams", sub: "Live signals from 200+ global locations" },
      { label: "Unified data platform", sub: "Lakehouse on GCP + Databricks" },
      { label: "Predictive analytics", sub: "Demand forecasting, inventory optimization" },
      { label: "Exception agents", sub: "Disruptions flagged before they cascade" },
    ],
    related: ["banking-digital-transformation", "ecommerce-conversational-ai"],
  },

  "ecommerce-conversational-ai": {
    kicker: "CASE 06 · E-COMMERCE · REVENUE GROWTH",
    title: "Conversational AI agents for an e-commerce platform",
    breadcrumb: "Conversational Commerce",
    meta: [
      { label: "Industry", value: "Retail & e-commerce" },
      { label: "Services", value: "AI Agent Development · Integration" },
      { label: "Timeline", value: "9 weeks to production" },
      { label: "Stack", value: "OpenAI · Vector search · AWS" },
    ],
    stats: [
      { value: "+35%", label: "conversion rate" },
      { value: "+25%", label: "average order value" },
      { value: "3×", label: "customer engagement time" },
      { value: "24/7", label: "shopping assistance" },
    ],
    challenge:
      "A major e-commerce platform had traffic but not conversion: shoppers bounced off endless category pages, search couldn't answer real questions, and personalization amounted to 'people also bought'.",
    solution:
      "We deployed conversational shopping assistants backed by vector search over the full catalog — agents that understand intent, compare options, check stock and sizes, and recommend with context from the shopper's actual session.",
    results:
      "Conversion rates rose 35% and average order value 25%. Engagement time tripled as shoppers started treating the assistant like a knowledgeable floor clerk — one that never clocks out.",
    quote: {
      text: "It's the closest thing to a great in-store associate we've ever had online.",
      attribution: "CHIEF DIGITAL OFFICER · E-COMMERCE PLATFORM",
    },
    diagram: [
      { label: "Shopper session context", sub: "Intent, history and live browsing signals" },
      { label: "Conversational agent", sub: "Vector search over the full catalog" },
      { label: "Commerce lookups", sub: "Stock, sizing and pricing in real time" },
      { label: "Personalized recommendations", sub: "+35% conversion, +25% order value" },
    ],
    related: ["ai-customer-service-automation", "supply-chain-ai-optimization"],
  },
};
