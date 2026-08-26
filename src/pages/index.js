import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import { Container, Section, Panel, Button, Arrow, Status, CtaBand } from "@/components/system/ui";
import {
  FigHead,
  FigHero,
  TrustBar,
  Metrics,
  Chip,
  DotList,
  NumRow,
  CaseHero,
  CaseCard,
  Steps4,
} from "@/components/system/figma";
import JurisdictionBand from "@/components/system/JurisdictionBand";
import { STOCK } from "@/data/stock";
import { FACTS } from "@/content/facts.mjs";
import { PAST_PERFORMANCE } from "@/content/past-performance.mjs";
import { CREDENTIALS } from "@/content/credentials.mjs";

/* Homepage — layout and section order from the "Homepage" frame of the Figma
   reference (node 3:426).

   The copy is NOT the Figma's. That file asserted an SBA-certified small-business
   designation, a Pittsburgh headquarters, and a delivery record against USPS, the
   Department of Energy and the Department of Defense. None of that is true: the
   company is
   Wyoming-registered, every credential in credentials.mjs is still "planned",
   and it has not delivered a government contract. Proof on this page therefore
   comes from facts.mjs and past-performance.mjs, which require a source and a
   verification date for every statement. The design is the Figma's; the claims
   are the registry's. */

const CORE_PRACTICE = [
  "Cloud-native delivery pipelines",
  "Containerised microservices",
  "Zero-trust architecture patterns",
  "Documented handover to your own team",
];

const PRACTICES = [
  {
    title: "AI Enablement & Automation",
    body: "Readiness assessment, agent development and AI governance that survives an audit.",
  },
  {
    title: "Managed Systems & DevSecOps",
    body: "Continuous monitoring, dependency scanning and release discipline on the systems we build.",
  },
  {
    title: "Cloud Infrastructure",
    body: "Design and deployment of hybrid and cloud-native environments, built to be operated by you.",
  },
  {
    title: "Technical Staff Augmentation",
    body: "Augmentation, direct hire and managed delivery pods from our Canadian and Indian centres.",
  },
];

/* Four facts, each traceable. No invented totals. */
const METRICS = [
  { value: "2017", label: "Operating since" },
  { value: FACTS.employeeCount, label: "People" },
  { value: "2", label: "Delivery centres" },
  { value: "100+", label: "Projects delivered" },
];

const ADVANTAGE = [
  {
    title: "Every claim has a source",
    body: "Facts on this site carry a citation and a verification date, and a build check blocks certification language we have not earned.",
  },
  {
    title: "Woman-owned and operated",
    body: "Woman-owned since founding. Supplier-diversity certifications are on the roadmap and are listed with their target quarters, not implied.",
  },
  {
    title: "Two delivery centres, one standard",
    body: "Mississauga and Noida run the same review, security and release practice. Wyoming is the registered address, not a delivery site.",
  },
];

const PROCESS = [
  {
    title: "Discover & Assess",
    body: "Audit the regulatory context, the technical debt and the system parameters you actually have.",
  },
  {
    title: "Architect System",
    body: "Establish blueprints against the compliance benchmarks the work will be evaluated on.",
  },
  {
    title: "Build & Integrate",
    body: "Agile, document-backed sprint iterations with the evidence trail an evaluator expects.",
  },
  {
    title: "Optimize & Support",
    body: "Continuous monitoring, validation checks and a documented handover to your team.",
  },
];

const [SHIPCARTE, PERFECTUM, PRAGRA] = PAST_PERFORMANCE;

export default function Home() {
  const nextUp = CREDENTIALS.slice(0, 4);

  return (
    <Layout>
      <Seo
        title="Technology & Workforce You Can Verify"
        description="Round Digital builds software, runs AI enablement, staffs delivery teams and trains people — with every claim traceable to a named source."
      />

      <FigHero
        pill="Woman-owned · Operating since 2017"
        title={<>Enterprise Technology &amp; Workforce You Can Verify.</>}
        lead="Round Digital builds software, runs AI enablement, staffs delivery teams and trains people — for enterprise and public-sector buyers. Every number on this site is traceable to a named source, and the things we have not earned yet are labelled as such."
        actions={[
          { label: "Talk to us", href: "/contact", variant: "accent" },
          { label: "Capability statement", href: "/government/capability-statement", variant: "ghost" },
        ]}
      />

      <TrustBar
        label="Independently verifiable"
        items={[
          "Operating since 2017",
          "Delivery centres in Canada and India",
          "Platforms in continuous commercial operation",
        ]}
      />

      {/* --- Capabilities ---------------------------------------------------- */}
      <Section>
        <Container>
          <FigHead
            label="Our capabilities"
            title="Practices Scaled for Compliance and Depth"
            body="Five practices under one delivery standard — not five line items on a menu. We build systems your own team can run, and we document them well enough to prove it."
          />

          <div className="rds-asym">
            <Panel lg>
              <Chip>Core practice</Chip>
              <h3 className="rds-h3" style={{ margin: "var(--s4) 0 var(--s4)" }}>
                Custom Enterprise Software Engineering
              </h3>
              <p className="rds-prose" style={{ marginBottom: "var(--s6)" }}>
                Our development teams build containerised systems, microservices architectures and
                cloud portals against modern engineering practice. Repositories ship with the
                documentation, tests and release history that make a handover — or an audit —
                straightforward.
              </p>
              <DotList items={CORE_PRACTICE} />
            </Panel>

            <div className="rds-asym-stack">
              {PRACTICES.map((p) => (
                <Panel key={p.title}>
                  <h3 className="rds-h4" style={{ marginBottom: "var(--s2)" }}>
                    {p.title}
                  </h3>
                  <p className="rds-meta" style={{ fontSize: 15, color: "var(--fg-2)" }}>
                    {p.body}
                  </p>
                </Panel>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Metrics items={METRICS} />

      {/* --- Why Round Digital ------------------------------------------------ */}
      <Section>
        <Container>
          <div className="rds-media">
            <div>
              <FigHead
                label="The Round Digital advantage"
                title="Rigorous, Clear, and Documented Performance."
                body="We operate with complete visibility. Delivery squads work to stated sprint guidelines, and our engineering practice is being mapped toward ISO/IEC 27001 — certification targeted for Q2 2027, and described that way until it is awarded. No surprises, no unexplained line items."
              />
              <Button href="/government/certifications" variant="ghost">
                View corporate credentials <Arrow />
              </Button>
            </div>
            <NumRow items={ADVANTAGE} />
          </div>
        </Container>
      </Section>

      {/* --- Government readiness ---------------------------------------------
          The Figma showed four credentials as held. None are. This renders the
          registry instead, status word and target quarter included. */}
      <Section className="rds-band">
        <Container>
          <FigHead
            label="Government readiness"
            title="Ready to Deliver. Honest About What We Hold."
            body="We have not yet delivered a government contract, and we do not hold a certification today. Here is exactly where each one stands, and where we can contract in the meantime."
          />
          <div className="rds-grid rds-cols-4">
            {nextUp.map((c) => (
              <Panel key={c.id} className="rds-certcard">
                <span>
                  <Status state={c.status}>
                    {c.status === "planned" ? `Planned · ${c.targetQuarter}` : c.status}
                  </Status>
                </span>
                <h3>{c.name}</h3>
                <p>{c.body}</p>
              </Panel>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s3)", marginTop: "var(--s6)" }}>
            <Button href="/government/certifications" variant="ghost">
              Full certification roadmap <Arrow />
            </Button>
          </div>

          {/* The jurisdiction band. Not in the Figma, kept deliberately: it
              answers "can you contract where I am buying" on the page rather
              than one click away, which is the same job the rest of this
              section does. */}
          <div style={{ marginTop: "var(--s7)" }}>
            <JurisdictionBand />
          </div>
        </Container>
      </Section>

      {/* --- Past performance ---------------------------------------------------
          Real engagements only. Each entry is anchored to a sourced fact. */}
      <Section>
        <Container>
          <FigHead
            label="Past performance"
            title="The Delivery Record, Stated Plainly."
            body="Three references, all commercial. We have not delivered a public-sector contract yet, so none is listed here."
          />

          <CaseHero
            image={STOCK.logistics}
            tag={SHIPCARTE.relationship}
            title={`${SHIPCARTE.client} — multi-carrier logistics platform`}
            body={SHIPCARTE.outcome}
          />

          <div className="rds-grid rds-casepair" style={{ marginTop: "var(--s5)" }}>
            <CaseCard
              eyebrow={PERFECTUM.relationship}
              client={PERFECTUM.client}
              title="Multi-tenant learning platform with SCORM and xAPI conformance"
              body={PERFECTUM.outcome}
              result={PERFECTUM.period}
            />
            <CaseCard
              eyebrow={PRAGRA.relationship}
              client={PRAGRA.client}
              title="Technical training across Cloud, DevOps, data and QA"
              body={PRAGRA.outcome}
              result={PRAGRA.period}
            />
          </div>
        </Container>
      </Section>

      {/* --- Methodology ---------------------------------------------------- */}
      <Section className="rds-band">
        <Container>
          <FigHead label="Methodology" title="From Initial Requirements to Verified Deployment" />
          <Steps4 items={PROCESS} />
        </Container>
      </Section>

      <CtaBand
        title="Tell us what you are trying to buy."
        body="Send a solicitation, a statement of work, a staffing requirement or a rough idea. You will get a direct answer about whether we are the right supplier — including when we are not."
        primary={{ label: "Submit an RFP", href: "/rfp" }}
        secondary={{ label: "Talk to us first", href: "/contact" }}
        accent
      />
    </Layout>
  );
}
