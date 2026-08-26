// Full content for the five service pillars.
//
// Structure follows the mandate's required service-page anatomy: challenge,
// capabilities, deliverables, approach, methods, industries, outcomes, FAQ.
//
// Claims discipline: nothing here asserts a certification, a partnership tier,
// a client name or a metric that is not already corroborated in
// src/content/facts.mjs. Outcomes are written as what the buyer gets, never as
// invented percentages. Methodologies name public standards we work TO, which
// is a description of practice, not a claim to be certified against them.

export const SERVICES = {
  "it-services": {
    slug: "it-services",
    title: "IT Services",
    // The name alone is 27 characters with the brand suffix and says
    // nothing a searcher typed. The others need no override.
    seoTitle: "IT Services — Cloud, Software & Security",
    naics: "541512",
    naicsLabel: "Computer Systems Design Services",
    psc: ["D302", "D307", "D399"],
    eyebrow: "Pillar 01",
    headline: "Systems your team can still run after we leave.",
    lead:
      "Cloud, custom software, security, data engineering and modernization — delivered so the capability transfers, not just the code.",
    challenge: {
      title: "The buyer's challenge",
      heading: "Most organisations do not have an IT problem.",
      body: [
        "Most organisations do not have an IT problem. They have a system that was built by someone who left, documented by nobody, and is now the reason three other projects are blocked.",
        "The usual fix makes it worse. A large integrator arrives, stands up something impressive, bills against a fixed scope, and leaves behind a platform your own staff cannot operate or extend. Two years later you are buying the same work again.",
      ],
    },
    capabilities: [
      {
        name: "Cloud engineering",
        detail:
          "Landing zones, migration, cost control and infrastructure-as-code on AWS, Azure and Google Cloud. Environments are reproducible from source, not from memory.",
      },
      {
        name: "Custom software",
        detail:
          "Web applications, APIs and integration layers built to a documented interface contract, with the test suite delivered as part of the work rather than promised after it.",
      },
      {
        name: "Cybersecurity engineering",
        detail:
          "Identity and access design, secrets management, vulnerability remediation, logging and evidence pipelines. We build the controls and the proof that they operate.",
      },
      {
        name: "Data engineering",
        detail:
          "Ingestion, warehousing, lineage and quality monitoring, so that the numbers in a report can be traced back to the row that produced them.",
      },
      {
        name: "Legacy modernization",
        detail:
          "Incremental replacement of systems that cannot be switched off, using strangler-pattern migration rather than a single cutover weekend.",
      },
      {
        name: "Managed services & O&M",
        detail:
          "Ongoing operation, patching, monitoring and support with defined response targets set in the contract, not in a brochure.",
      },
    ],
    deliverables: [
      "Solution architecture and interface contracts",
      "Working software, with its automated test suite",
      "Infrastructure-as-code for every environment",
      "Runbooks and operational documentation",
      "Security control mapping and evidence pipeline",
      "Knowledge transfer sessions with your named operators",
      "Post-transition support window with defined response targets",
    ],
    approach: [
      {
        step: "01",
        name: "Assess",
        body: "We read the code, the tickets and the incidents before we propose anything. The output is a written statement of what is actually wrong, including the parts that are not our work to fix.",
      },
      {
        step: "02",
        name: "Scope",
        body: "A fixed first increment with an explicit definition of done, so you can judge us on something small before committing to something large.",
      },
      {
        step: "03",
        name: "Build",
        body: "Two-week increments, demonstrated to your team, with the test suite and documentation produced alongside the code rather than at the end.",
      },
      {
        step: "04",
        name: "Transfer",
        body: "Your operators run the system with us watching, not the other way round, before the engagement closes. Transfer is a gate, not a phase.",
      },
    ],
    methods: [
      { label: "Cloud", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
      { label: "Practice", items: ["Infrastructure-as-code", "CI/CD", "Strangler-pattern migration", "Automated testing"] },
      {
        label: "Security frameworks we design to",
        items: ["NIST SP 800-53", "NIST SP 800-171", "CIS Benchmarks", "OWASP ASVS"],
      },
      { label: "Accessibility", items: ["WCAG 2.2 AA", "Section 508", "EN 301 549"] },
    ],
    industries: ["Government", "Health & human services", "Financial services", "Logistics", "Education", "Nonprofit"],
    outcomes: [
      "A system your own staff can operate, extend and audit",
      "Environments that can be rebuilt from source control",
      "Security controls with evidence attached, ready for an assessor",
      "A documented interface contract, so the next supplier is not locked out",
    ],
    faq: [
      {
        q: "Will you work alongside our incumbent supplier?",
        a: "Yes, and we do it often. We will agree interface boundaries and escalation paths in writing at the start. We do not require an incumbent to be removed for us to be useful.",
      },
      {
        q: "Can you take over a system somebody else built?",
        a: "Yes. The first increment is normally an assessment that gives you a written account of the system's real state — including the parts that are fine. You own that document whether or not you continue with us.",
      },
      {
        q: "Do you subcontract to larger primes?",
        a: "Yes. We prime small and mid-sized contracts and subcontract to larger integrators on work beyond our capacity. Both directions are set out at /government/teaming.",
      },
    ],
  },

  "ai-enablement": {
    slug: "ai-enablement",
    title: "AI Enablement & Automation",
    naics: "541511",
    naicsLabel: "Custom Computer Programming Services",
    psc: ["D399", "R425"],
    eyebrow: "Pillar 02",
    headline: "AI you can put in front of an auditor.",
    lead:
      "Readiness assessment, agent and automation development, and the governance layer that lets you deploy it in a regulated environment.",
    challenge: {
      title: "The buyer's challenge",
      heading: "The pilot worked. That is the problem.",
      body: [
        "The pilot worked. That is usually the problem. A demonstrable model exists, leadership has seen it, and now someone has asked who signed off on the training data, what happens when it is wrong, and which control framework it maps to — and the project stops.",
        "The gap is rarely modelling capability. It is assurance: data lineage, evaluation evidence, human-review design, and a documented management system. Very few suppliers sell the second half, which is precisely the half that gets a system into production in the public sector.",
      ],
    },
    capabilities: [
      {
        name: "AI readiness assessment",
        detail:
          "A structured review of data, process, skills and risk posture, ending in a prioritised list of what is worth automating and what is not.",
      },
      {
        name: "Agent & automation development",
        detail:
          "Retrieval systems, document processing, workflow agents and integrations, built with evaluation harnesses so behaviour can be measured rather than demonstrated.",
      },
      {
        name: "AI governance",
        detail:
          "Policy, risk register, model inventory, human-oversight design and control mapping to the NIST AI Risk Management Framework and ISO/IEC 42001.",
      },
      {
        name: "Evaluation & assurance",
        detail:
          "Test sets, acceptance thresholds, regression monitoring and drift detection — the evidence an assessor or an internal audit function will ask for.",
      },
      {
        name: "MLOps",
        detail:
          "Versioned data and models, reproducible training and deployment, and rollback paths that were tested before they were needed.",
      },
      {
        name: "Adoption & change",
        detail:
          "Role-based enablement so the people expected to use the system actually can. Delivered with our training practice rather than as a slide deck.",
      },
    ],
    deliverables: [
      "AI readiness report with a prioritised opportunity list",
      "Model and use-case inventory",
      "Risk register mapped to NIST AI RMF functions",
      "Working automation with an evaluation harness",
      "Human-in-the-loop review design",
      "AI management-system documentation aligned to ISO/IEC 42001",
      "Role-based enablement materials and delivery",
    ],
    approach: [
      {
        step: "01",
        name: "Frame",
        body: "Identify decisions the organisation actually makes, and which of them a model could support. Use cases without a decision behind them are removed here.",
      },
      {
        step: "02",
        name: "Govern first",
        body: "Risk register, oversight design and acceptance thresholds are agreed before the build, not retrofitted when procurement asks.",
      },
      {
        step: "03",
        name: "Build with evaluation",
        body: "Every increment ships with its test set and measured results. If the numbers do not clear the agreed threshold, it does not ship.",
      },
      {
        step: "04",
        name: "Operate & monitor",
        body: "Drift detection, review queues and a defined path for handling a wrong answer in production.",
      },
    ],
    methods: [
      { label: "Frameworks we design to", items: ["NIST AI RMF 1.0", "ISO/IEC 42001:2023", "ISO/IEC 23894", "EU AI Act risk tiers"] },
      { label: "Engineering", items: ["Retrieval-augmented generation", "Evaluation harnesses", "Model versioning", "Drift monitoring"] },
      { label: "Platforms", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
    ],
    industries: ["Government", "Health & human services", "Financial services", "Education", "Logistics", "Nonprofit"],
    outcomes: [
      "A defensible answer to “who signed off on this model”",
      "Measured behaviour instead of a demonstration",
      "A documented oversight path for incorrect output",
      "Governance artefacts that survive an audit or an ATO review",
    ],
    faq: [
      {
        q: "Do you hold ISO/IEC 42001?",
        a: "No. We design and document to it, and it is on our published certification roadmap with a target date. We will not describe ourselves as certified against a standard we have not been audited to.",
      },
      {
        q: "Can you work with our existing model or vendor?",
        a: "Yes. A large part of this practice is putting governance and evaluation around systems somebody else built, including commercial vendor products.",
      },
      {
        q: "What if the honest answer is that AI is the wrong tool?",
        a: "Then that is what the readiness report says, and it will name the cheaper alternative. That has happened, and it is a better outcome than an automation nobody trusts.",
      },
    ],
  },

  "research-data": {
    slug: "research-data",
    title: "Data, Research & Surveys",
    naics: "541910",
    naicsLabel: "Marketing Research and Public Opinion Polling",
    psc: ["B505", "R701"],
    eyebrow: "Pillar 03",
    headline: "Evidence that holds up when someone checks the method.",
    lead:
      "Survey design and programming, public opinion research, fieldwork, analytics and program evaluation — built for scrutiny.",
    challenge: {
      title: "The buyer's challenge",
      heading: "Activity is not evidence.",
      body: [
        "Programs are increasingly required to show evidence, not activity. In the United States the Foundations for Evidence-Based Policymaking Act obliges federal agencies to build evidence for their programs; funders and boards apply similar pressure everywhere else.",
        "The failure mode is familiar: a survey written by the team that owns the program, fielded to a convenience sample, and reported as a result. It does not survive a methods review, and by then the reporting deadline has passed.",
      ],
    },
    capabilities: [
      {
        name: "Survey design",
        detail:
          "Instrument design, cognitive testing and question wording that does not lead the respondent. Sampling frames and weighting documented before fieldwork starts.",
      },
      {
        name: "Survey programming",
        detail:
          "Complex logic, multi-language instruments, accessibility-conformant question rendering, and quality checks built into the instrument itself.",
      },
      {
        name: "Public opinion research",
        detail:
          "Population studies with documented sampling, response-rate reporting and margin-of-error statements that reflect the design actually used.",
      },
      {
        name: "Fieldwork & panel management",
        detail:
          "Fielding, quota management, data quality screening and removal of fraudulent or inattentive responses, with the exclusion rules stated in advance.",
      },
      {
        name: "Analytics",
        detail:
          "Descriptive and inferential analysis, segmentation and dashboards — with the analysis code retained so a result can be reproduced.",
      },
      {
        name: "Program evaluation",
        detail:
          "Logic models, outcome measurement and process evaluation designed so the finding can be attributed to the program rather than to the environment.",
      },
    ],
    deliverables: [
      "Research design and methodology statement",
      "Tested survey instrument with logic map",
      "Sampling plan, weighting scheme and field report",
      "Cleaned dataset with a documented data dictionary",
      "Reproducible analysis code",
      "Findings report written for a non-technical decision-maker",
      "Technical appendix that survives a methods review",
    ],
    approach: [
      {
        step: "01",
        name: "Define the question",
        body: "We write the decision the research is meant to inform, in one sentence, and get it agreed. Studies that cannot pass this step do not get fielded.",
      },
      {
        step: "02",
        name: "Design & pre-register",
        body: "Method, sample, weighting and analysis plan documented before data collection — so the analysis cannot drift toward a preferred answer.",
      },
      {
        step: "03",
        name: "Field & quality-control",
        body: "Live monitoring of quotas, completion and data quality, with the exclusion criteria fixed in advance.",
      },
      {
        step: "04",
        name: "Report both ways",
        body: "A plain-language report for the decision-maker and a technical appendix for whoever checks the method. Both, always.",
      },
    ],
    methods: [
      { label: "Standards we work to", items: ["AAPOR Transparency Initiative disclosure elements", "OMB statistical standards", "GDPR / PIPEDA data handling"] },
      { label: "Evaluation", items: ["Logic models", "Quasi-experimental design", "Process evaluation", "Outcome measurement"] },
      { label: "Analysis", items: ["R", "Python", "SQL", "Reproducible notebooks"] },
    ],
    industries: ["Government", "Nonprofit & philanthropy", "Health & human services", "Education", "Financial services"],
    outcomes: [
      "A finding that states its own confidence and limitations",
      "A dataset another analyst can pick up and reproduce",
      "Disclosure that meets recognised transparency standards",
      "Evidence a funder or oversight body will accept",
    ],
    faq: [
      {
        q: "Why is a technology company doing survey research?",
        a: "Because the hard part of modern research is instrument engineering, data pipelines and reproducibility — and because measuring whether a system worked is the last step of our delivery loop, not a separate business.",
      },
      {
        q: "Can you field in multiple languages?",
        a: "Yes, including instrument translation and culturally adapted question wording. Translation is treated as a design task subject to testing, not a text substitution.",
      },
      {
        q: "Will you publish a finding we do not like?",
        a: "We will report what the data supports, including null and unfavourable results. Agreeing that in advance is part of scoping, and it is the reason the finding is worth anything.",
      },
    ],
  },

  staffing: {
    slug: "staffing",
    title: "Staffing & Workforce Solutions",
    naics: "561320",
    naicsLabel: "Temporary Help Services",
    psc: ["R497", "R408"],
    eyebrow: "Pillar 04",
    headline: "People who have done the work before, not résumés that match the keywords.",
    lead:
      "Staff augmentation, direct hire, managed delivery pods and nearshore capacity across Canada and India.",
    challenge: {
      title: "The buyer's challenge",
      heading: "The cost is not the fee.",
      body: [
        "Requisitions sit open for months while the work they were raised for slips. The agency response is volume: a stack of profiles keyword-matched to the job description, screened by someone who cannot evaluate the skill they are screening for.",
        "The cost is not the fee. It is the six weeks lost to interviewing people who were never going to pass, and the delivery risk carried by the team covering the gap.",
      ],
    },
    capabilities: [
      {
        name: "Staff augmentation",
        detail:
          "Individual contributors embedded in your team under your direction, screened by practitioners in the relevant discipline.",
      },
      {
        name: "Direct hire",
        detail:
          "Permanent placement with a replacement guarantee, for roles you intend to keep rather than to rent.",
      },
      {
        name: "Managed delivery pods",
        detail:
          "A scoped team with its own lead, accountable for an outcome rather than for hours. Useful when you need capacity but not another management burden.",
      },
      {
        name: "Nearshore & offshore capacity",
        detail:
          "Delivery from our Noida centre with overlapping working hours, presented with the security and data-handling posture that arrangement requires.",
      },
      {
        name: "Non-technical & skilled roles",
        detail:
          "Business analysis, project delivery, quality assurance, customer operations and administrative roles alongside engineering.",
      },
      {
        name: "Train-to-hire",
        detail:
          "Candidates trained to your stack through our training practice before placement — the pipeline our predecessor built its reputation on.",
      },
    ],
    deliverables: [
      "Role definition and calibrated scorecard",
      "Practitioner-screened shortlist with written assessment notes",
      "Structured interview guide for your panel",
      "Onboarding plan for the first thirty days",
      "Replacement guarantee terms stated in the contract",
      "Timesheet, compliance and right-to-work documentation",
    ],
    approach: [
      {
        step: "01",
        name: "Calibrate",
        body: "We rewrite the requisition into a scorecard with the two or three things that actually determine success. Most briefs list twelve.",
      },
      {
        step: "02",
        name: "Screen by practitioner",
        body: "A person who does the discipline assesses the candidate for it, and writes down what they found — including the weaknesses.",
      },
      {
        step: "03",
        name: "Shortlist, not stack",
        body: "Three or four candidates with written assessments. If we cannot fill it honestly, we say so rather than padding the list.",
      },
      {
        step: "04",
        name: "Support the placement",
        body: "Structured check-ins through the first ninety days, because a placement that leaves at month four was not a fill.",
      },
    ],
    methods: [
      { label: "Screening", items: ["Practitioner technical assessment", "Structured behavioural interview", "Calibrated scorecards", "Reference verification"] },
      { label: "Compliance", items: ["Right-to-work verification", "Background screening on request", "Contractor classification review"] },
      { label: "Delivery locations", items: ["Mississauga, Ontario", "Noida, Uttar Pradesh"] },
    ],
    industries: ["Government", "Financial services", "Health & human services", "Logistics", "Technology", "Education"],
    outcomes: [
      "A shortlist you can act on rather than re-screen",
      "Written assessment evidence for each candidate",
      "Time-to-fill measured from calibration, not from first CV",
      "A defined replacement path if a placement does not work",
    ],
    faq: [
      {
        q: "How is this different from a staffing agency?",
        a: "Candidates are screened by someone who does the discipline, and you receive the written assessment including the concerns. We also train, which means we can build a candidate for your stack rather than only search for one.",
      },
      {
        q: "Can you staff a whole delivery team?",
        a: "Yes — a managed pod with its own lead, accountable for an outcome. That is a different contract shape from augmentation and we will tell you which one your situation actually needs.",
      },
      {
        q: "What are your terms if a placement does not work out?",
        a: "A replacement guarantee, with the period and conditions written into the contract before you sign. We will not quote a number here that your agreement might not match.",
      },
    ],
  },

  training: {
    slug: "training",
    title: "Corporate & Technical Training",
    naics: "611430",
    naicsLabel: "Professional and Management Development Training",
    psc: ["U008", "U012"],
    eyebrow: "Pillar 05",
    headline: "Training measured by what people can do afterwards.",
    lead:
      "AI literacy, technical upskilling, apprenticeship and workforce development — the practice this company was built on.",
    challenge: {
      title: "The buyer's challenge",
      heading: "Completions are not capability.",
      body: [
        "Training is bought in completions and evaluated in smile sheets. Ninety per cent attendance, high satisfaction, and no observable change in what anyone does on Monday.",
        "It matters more now than it used to. AI adoption programmes fail far more often on capability and trust than on technology, and a workforce that cannot evaluate a model's output is a governance problem, not a training gap.",
      ],
    },
    capabilities: [
      {
        name: "AI literacy",
        detail:
          "Role-based programmes for executives, managers and practitioners: what these systems do, where they fail, and how to supervise them responsibly.",
      },
      {
        name: "Technical upskilling",
        detail:
          "Cloud, DevOps, quality assurance, business analysis, data science, machine learning, web and iOS — the curriculum delivered since 2017.",
      },
      {
        name: "Apprenticeship & workforce development",
        detail:
          "Structured programmes combining instruction with supervised practice, designed to fit registered apprenticeship and workforce-funding requirements.",
      },
      {
        name: "Custom curriculum",
        detail:
          "Programmes built against your systems and your standard operating procedures rather than a generic vendor syllabus.",
      },
      {
        name: "Assessment & certification prep",
        detail:
          "Competency assessment against a defined rubric, plus preparation for recognised industry certifications where that is the goal.",
      },
      {
        name: "Platform delivery",
        detail:
          "Delivered through Perfectum.ai, our own learning platform, with SCORM 1.2, SCORM 2004 and xAPI conformance for integration with your existing LMS.",
      },
    ],
    deliverables: [
      "Skills gap analysis against defined role profiles",
      "Curriculum map with learning outcomes per module",
      "Instructor-led delivery, live online or in person",
      "Lab environments and practical exercises",
      "Competency assessment against a published rubric",
      "Cohort completion and competency reporting",
      "SCORM or xAPI packages for your own LMS",
    ],
    approach: [
      {
        step: "01",
        name: "Define the capability",
        body: "We write what a person should be able to do unaided at the end. Topics are chosen from that; anything that does not serve it is cut.",
      },
      {
        step: "02",
        name: "Design for practice",
        body: "Programmes are built around supervised practice on realistic tasks. Lecture time is the smallest component, deliberately.",
      },
      {
        step: "03",
        name: "Deliver in cohorts",
        body: "Live cohorts with practitioner instructors, so learners are debugging real problems with someone who has debugged them before.",
      },
      {
        step: "04",
        name: "Assess and report",
        body: "Competency measured against the rubric agreed at step one, reported per learner and per cohort. Completion alone is not a result.",
      },
    ],
    methods: [
      { label: "Standards", items: ["SCORM 1.2", "SCORM 2004", "xAPI", "WCAG 2.2 AA course content"] },
      { label: "Design", items: ["Competency-based design", "Backward design from outcomes", "Supervised practical assessment"] },
      { label: "Delivery", items: ["Live online cohorts", "In person — Mississauga & Noida", "Self-paced with assessment"] },
    ],
    industries: ["Government", "Financial services", "Health & human services", "Technology", "Education", "Nonprofit"],
    outcomes: [
      "A named competency each learner can demonstrate",
      "Assessment evidence per learner, not attendance counts",
      "Content that integrates with the LMS you already run",
      "A workforce able to supervise the systems you are deploying",
    ],
    faq: [
      {
        q: "What is the connection to Pragra?",
        a: "Round Digital is the successor to Pragra LLC, which has delivered technical training since 2017 in Mississauga and Noida and was named to Forbes Canada's Best Startup Employers 2024. That practice is this pillar.",
      },
      {
        q: "Can you deliver into our existing LMS?",
        a: "Yes. We author to SCORM 1.2, SCORM 2004 and xAPI, which is the conformance set our own platform supports, so content can be exported and hosted on your system.",
      },
      {
        q: "Do you support publicly funded workforce programmes?",
        a: "We design programmes to fit registered apprenticeship and workforce-funding requirements. Provider listing and funding eligibility vary by jurisdiction and we will confirm status for yours before you rely on it.",
      },
    ],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES);

export function getService(slug) {
  return SERVICES[slug] || null;
}
