import Link from "next/link";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import {
  Arrow,
  Breadcrumb,
  Button,
  Container,
  CtaBand,
  Eyebrow,
  Faq,
  Panel,
  Section,
  SectionHead,
} from "@/components/system/ui";
import { PILLARS } from "@/data/navigation";

const AS_SUB = [
  {
    t: "What we bring",
    b: "A small-business subcontractor with five capability areas under one agreement, so you are not assembling four suppliers to cover one solicitation.",
  },
  {
    t: "Subcontracting plan credit",
    b: "Work placed with us counts toward small-business subcontracting goals. Our women-owned status additionally supports corporate supplier-diversity spend reporting.",
  },
  {
    t: "How we scope",
    b: "A defined work package with its own acceptance criteria, so your programme manager has one deliverable to accept rather than a timesheet to audit.",
  },
  {
    t: "What we need from you",
    b: "The solicitation or the work package, the security and performance-location constraints, and the deadline. We will tell you within days whether we can carry it.",
  },
];

const AS_PRIME = [
  {
    t: "When we prime",
    b: "Small and mid-sized contracts inside our five codes, where the scope fits a team of our size and the performance location is Canada, India or remote.",
  },
  {
    t: "Who we bring in",
    b: "Specialist subcontractors for scope outside our capability — and we say which parts those are rather than presenting them as ours.",
  },
  {
    t: "What you get",
    b: "A named delivery lead who stays on the engagement, and an escalation path that reaches a decision-maker in one step.",
  },
  {
    t: "Where we will not prime",
    b: "Requirements needing US-performed work, US-persons access, CUI handling or a facility clearance. On those we sub to a prime who holds the position.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is your small-business status for subcontracting plan credit?",
    a: "We are below the applicable SBA size standard in all five of our primary NAICS codes, re-verified against the current SBA size standards table at the time of each bid. We are not eligible for WOSB, EDWOSB, 8(a), SDB or HUBZone credit, because all of those require US-citizen ownership. Women-owned status supports corporate supplier-diversity reporting and Canadian under-represented-supplier initiatives.",
  },
  {
    q: "Do you have a teaming agreement template?",
    a: "We work from yours. If you do not have one, we will provide a straightforward mutual template covering scope, exclusivity, pricing basis, IP and non-solicitation.",
  },
  {
    q: "Will you sign an exclusive teaming agreement?",
    a: "For a specific solicitation, usually yes. Blanket exclusivity across a code or an agency is something we decline, and we will say so at the outset rather than after you have built us into a bid.",
  },
  {
    q: "How fast can you respond to a bid opportunity?",
    a: "A go/no-go within two business days of receiving the solicitation, and a scoped technical and pricing input within the schedule your proposal manager sets, provided we get at least a week. If we cannot meet your deadline we will say so immediately.",
  },
  {
    q: "Can you take work under our existing contract vehicle?",
    a: "Yes. That is the primary route today, since we hold no vehicle of our own. It is a normal, fully compliant arrangement and it is how a supplier of our size builds a federal past-performance record.",
  },
];

export default function Teaming() {
  return (
    <Layout>
      <Seo
        title="Teaming & Subcontracting Arrangements"
        description="Round Digital works both directions: as a small-business subcontractor to primes holding vehicles, and as a prime bringing in specialist partners."
        keywords="small business IT subcontractor, subcontracting partner IT services, teaming agreement IT, prime contractor partner"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Government", href: "/government" },
              { label: "Teaming" },
            ]}
          />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "16ch" }}>
            We sub to you. You sub to us.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            Both directions are normal and we do both. What matters is that the
            scope boundary, the constraints and the terms are agreed before a
            proposal is written, not discovered during performance.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s3)", marginTop: "var(--s7)" }}>
            <Button href="/rfp" variant="accent">
              Send a teaming inquiry <Arrow />
            </Button>
            <Button href="/government/capability-statement" variant="ghost">
              Capability statement
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="01" label="Round Digital as subcontractor" />
          <div className="rds-splithead" style={{ marginBottom: "var(--s7)" }}>
            <h2 className="rds-h2">You hold the vehicle. We deliver a work package.</h2>
            <p className="rds-prose">
              This is available today and is our primary public-sector route, because
              we hold no vehicle of our own. For a prime, we are one agreement that
              covers IT, AI, research, staffing and training rather than four.
            </p>
          </div>
          <div className="rds-grid rds-cols-2">
            {AS_SUB.map((x) => (
              <Panel key={x.t} fill>
                <h3 className="rds-h4" style={{ marginBottom: "var(--s2)" }}>{x.t}</h3>
                <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{x.b}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <SectionHead index="02" label="Round Digital as prime" />
          <div className="rds-splithead" style={{ marginBottom: "var(--s7)" }}>
            <h2 className="rds-h2">We hold the contract. Specialists come in under us.</h2>
            <p className="rds-prose">
              On contracts sized for a team like ours, we prime and bring in specialist
              subcontractors for scope outside our capability — and we identify which
              parts those are rather than presenting them as our own bench.
            </p>
          </div>
          <div className="rds-grid rds-cols-2">
            {AS_PRIME.map((x) => (
              <Panel key={x.t}>
                <h3 className="rds-h4" style={{ marginBottom: "var(--s2)" }}>{x.t}</h3>
                <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{x.b}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="03" label="Capability we can carry" />
          <h2 className="rds-h2" style={{ maxWidth: "22ch", marginBottom: "var(--s7)" }}>
            Five codes under one teaming agreement.
          </h2>
          <ul className="rds-pillarlist">
            {PILLARS.map((p) => (
              <li key={p.slug}>
                <Link href={p.href}>
                  <div className="rds-pillarlist-main">
                    <span className="rds-code">NAICS {p.naics}</span>
                    <h3 className="rds-h3" style={{ margin: "var(--s2) 0 var(--s2)" }}>{p.title}</h3>
                    <p style={{ color: "var(--fg-2)", fontSize: 15, maxWidth: "62ch" }}>{p.summary}</p>
                  </div>
                  <div className="rds-pillarlist-side">
                    <span className="rds-arrow">
                      Detail <Arrow />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container style={{ maxWidth: 840 }}>
          <SectionHead index="04" label="Questions primes ask" />
          <Faq items={FAQ_ITEMS} idPrefix="teaming" />
        </Container>
      </Section>

      <CtaBand
        title="Have a bid with a capability gap?"
        body="Send the solicitation and the gap. You will get a go/no-go within two business days, with the scope we can carry and the parts we cannot — stated before you build us into the proposal."
        primary={{ label: "Send a teaming inquiry", href: "/rfp" }}
        secondary={{ label: "Contract vehicles", href: "/government/contract-vehicles" }}
        accent
      />
    </Layout>
  );
}
