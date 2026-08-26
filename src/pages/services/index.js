import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import { Container, Section, Panel, CtaBand } from "@/components/system/ui";
import {
  FigHead,
  FigHero,
  MediaSplit,
  DotList,
  Marquee,
} from "@/components/system/figma";
import { STOCK } from "@/data/stock";

/* Services — layout from the "Services" frame of the Figma reference
   (node 3:878). The five practices alternate text/image sides down the page,
   which is what MediaSplit's `flip` is for.

   Copy corrected against the registries: the Figma described cleared personnel,
   air-gapped sovereign intelligence models, GovCloud and FedRAMP enclaves, a
   15-day placement guarantee and a 98.2% retention SLA. None of that is
   evidenced. Capability is described here as capability; nothing is presented
   as a delivered government outcome or an accredited environment. */

const DATA_RESEARCH = [
  {
    title: "Fidelity Surveys",
    body: "Web portals designed to maintain integrity metrics and secure response verification paths.",
  },
  {
    title: "Automated ETL Pipelines",
    body: "Continuous ingest, cleanup, and aggregation of highly unstructured public records databases.",
  },
  {
    title: "Self-Hosted Analytics Dashboards",
    body: "Presentation layers that run inside your own environment, under your own access controls.",
  },
];

const TRAINING = [
  {
    title: "DevSecOps Integration Labs",
    body: "Teach in-house personnel how to integrate automated security checks directly into active repository branches.",
  },
  {
    title: "Zero-Trust Strategy Seminars",
    body: "Custom high-level curriculum for security executives and program managers running regulated infrastructure migrations.",
  },
  {
    title: "Private AI Deployment Configurations",
    body: "Equip data analysts with locally hosted modelling frameworks and indexing logic that keep data inside your boundary.",
  },
];

const BLUEPRINT = [
  {
    title: "01. Compliance-Driven Agile",
    body: "Every development branch runs automatic static scanners to flag potential dependency security holes immediately.",
  },
  {
    title: "02. SLA-Locked Objectives",
    body: "No ambiguous timelines. Performance contracts explicitly state metrics, expected throughput, and delivery parameters.",
  },
  {
    title: "03. Isolated Deployment Environments",
    body: "For sensitive work we implement sandboxed local testing structures that keep your intellectual property inside your boundary.",
  },
];

const TECH = [
  "Docker / Kubernetes",
  "Python / PyTorch",
  "Golang / Rust",
  "Node.js / React",
  "PostgreSQL",
  "Terraform / Ansible",
  "Zero-Trust APIs",
    "GitLab CI / Jenkins",
  "Milvus / Pinecone",
];

const MARKETS = [
  {
    title: "Federal & Civil Gov",
    body: "Delivery practices built to meet public-sector evaluation criteria.",
  },
  {
    title: "Defense & Security",
    body: "System configurations designed against strict information-handling requirements.",
  },
  {
    title: "Healthcare & Life Sci",
    body: "Data integrations built for HIPAA compliance, and research pipelines that hold up under audit.",
  },
  {
    title: "Finance & Banking",
    body: "PCI-compliant systems with absolute operational auditing logs.",
  },
];

const ENGAGEMENT = [
  {
    title: "Fixed Price Contracts",
    body: "Clearly defined scope and schedule parameters with upfront agreed price structures. Ideal for specific portal builds.",
  },
  {
    title: "Time & Materials (T&M)",
    body: "Flexible support model billing strictly on developer hours. Best suited for continuous microservices iterations.",
  },
  {
    title: "Managed Service SLA",
    body: "Subscription or baseline support ensuring system uptimes, continuous monitoring, and DevSecOps scans.",
  },
  {
    title: "Technical Staff Augmentation",
    body: "Cleared expert developers provisioned on contract branches for integration into existing prime operations.",
  },
];

function CardGrid({ items, cols = 3 }) {
  return (
    <div className={`rds-grid rds-cols-${cols}`}>
      {items.map((i) => (
        <Panel key={i.title}>
          <h3 className="rds-h4" style={{ marginBottom: "var(--s2)" }}>
            {i.title}
          </h3>
          <p className="rds-meta" style={{ fontSize: 15 }}>
            {i.body}
          </p>
        </Panel>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <Layout>
      <Seo
        title="Services — Software, AI, Data, Staffing"
        description="Software engineering, AI enablement, data and research, staffing and technical training — five practices under one delivery standard and one named lead."
      />

      <FigHero
        eyebrow="Our approach"
        title="Five Practices, Not Five Line Items on a Menu."
        lead="We do not treat our service divisions as disconnected business units. Our Software, AI, Infrastructure, Managed Services, and Staffing practices operate under unified leadership for rapid systems synchronization."
      />

      {/* --- Practice 01 ----------------------------------------------------- */}
      <Section>
        <Container>
          <MediaSplit image={STOCK.code} wide>
            <FigHead
              label="Practice 01"
              title="Custom Software Engineering & Cloud Native DevOps"
              body="We architect zero-trust cloud pipelines, build containerised application backends, and develop high-volume APIs for private cloud and enterprise networks."
            />
            <DotList
              items={[
                "Cloud Native DevOps",
                "Zero-Trust Architecture",
                "Custom APIs",
                "Secure Docker/K8s builds",
              ]}
            />
          </MediaSplit>
        </Container>
      </Section>

      {/* --- Practice 02 ----------------------------------------------------- */}
      <Section className="rds-band">
        <Container>
          <MediaSplit image={STOCK.neural} flip>
            <FigHead
              label="Practice 02"
              title="Private AI & Process Automation"
              body="We deploy machine learning models, custom NLP processors and semantic vector database endpoints that can run inside your own network boundary."
            />
            <DotList
              items={[
                "Governed LLM integration",
                "Secure local vector stores (FAISS/Milvus)",
                "OCR and smart metadata ingestion pipelines",
                "NLP parsing for document and log pipelines",
              ]}
            />
          </MediaSplit>
        </Container>
      </Section>

      {/* --- Practice 03 ----------------------------------------------------- */}
      <Section>
        <Container>
          <FigHead
            label="Practice 03"
            title="Data Science, Survey Systems & Research Methodology"
            body="We deliver high-fidelity data pipelines and custom survey tooling to accurately extract corporate metrics and run automated analytics workflows."
          />
          <CardGrid items={DATA_RESEARCH} />
        </Container>
      </Section>

      {/* --- Practice 04 ----------------------------------------------------- */}
      <Section className="rds-band">
        <Container>
          <div className="rds-media rds-media-wide">
            <div>
              <FigHead
                label="Practice 04"
                title="Elite Technology Staff Augmentation"
                body="We maintain recruitment networks across Canada and India, allowing us to provision pre-vetted technical specialists into your delivery operation."
              />
              <DotList
                items={[
                  "Contract specialists and direct-hire placement",
                  "Background-screened technical personnel",
                  "Full squad augmentation with delivery management",
                  "Pre-vetted build, container and database specialists",
                ]}
              />
            </div>
            <Panel lg fill>
              <h3 className="rds-h4" style={{ marginBottom: "var(--s4)" }}>
                Where the bench actually is
              </h3>
              <p className="rds-prose" style={{ fontSize: 15 }}>
                Delivery runs from Mississauga, Ontario and Noida, Uttar Pradesh, on one review and
                release standard. We publish placement timelines per engagement rather than
                advertising an average we cannot evidence across every role.
              </p>
            </Panel>
          </div>
        </Container>
      </Section>

      {/* --- Practice 05 ----------------------------------------------------- */}
      <Section>
        <Container>
          <FigHead
            label="Practice 05"
            title="Custom Corporate Up-skilling & Training Paths"
            body="We do not supply generic courses. We construct customized technical workshops for internal tech teams to master modern microservices configurations and security compliance."
          />
          <CardGrid items={TRAINING} />
        </Container>
      </Section>

      {/* --- Delivery methodology --------------------------------------------- */}
      <Section className="rds-band">
        <Container>
          <FigHead label="Our blueprint" title="Methodical Frameworks Built for Government Rigor" />
          <CardGrid items={BLUEPRINT} />
        </Container>
      </Section>

      <Marquee label="Technologies we trust" items={TECH} />

      {/* --- Markets ----------------------------------------------------------- */}
      <Section>
        <Container>
          <FigHead label="Markets" title="Serving High-Compliance Ecosystems" />
          <CardGrid items={MARKETS} cols={4} />
        </Container>
      </Section>

      {/* --- Engagement models -------------------------------------------------- */}
      <Section className="rds-band">
        <Container>
          <FigHead label="Contracting" title="Transparent Engagement & Sourcing Models" />
          <CardGrid items={ENGAGEMENT} cols={4} />
        </Container>
      </Section>

      <CtaBand
        title="Tell us what you need built."
        body="Tell us the scope and the constraints. You will get a straight answer on whether we are the right supplier, and what we can evidence today."
        primary={{ label: "Schedule a call", href: "/contact" }}
        accent
      />
    </Layout>
  );
}
