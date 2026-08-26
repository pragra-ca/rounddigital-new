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
  Note,
  Panel,
  Section,
  SectionHead,
} from "@/components/system/ui";

const NEEDS = [
  {
    t: "Show a funder what changed",
    b: "Grant reporting increasingly asks for outcomes, not activity counts. Programme evaluation designed before delivery starts is the difference between a renewal and a difficult conversation.",
    href: "/services/research-data",
    cta: "Research & evaluation",
  },
  {
    t: "Run on systems you can afford to keep",
    b: "Mission organisations inherit systems built by a departed volunteer or a one-off grant. We build for operability and hand over documentation, because there may not be a budget for us next year.",
    href: "/services/it-services",
    cta: "IT services",
  },
  {
    t: "Use AI without exposing beneficiaries",
    b: "Automation is attractive when capacity is short and risky when the data describes vulnerable people. Governance and human-review design come first.",
    href: "/services/ai-enablement",
    cta: "AI enablement",
  },
  {
    t: "Build capability in a small team",
    b: "Training designed around what staff must be able to do unaided, because in a small organisation there is nobody to escalate to.",
    href: "/services/training",
    cta: "Training",
  },
];

const FAQ_ITEMS = [
  {
    q: "Do you offer nonprofit pricing?",
    a: "We scope to the budget that exists rather than discounting a proposal built for someone else. Tell us the funding envelope at the start and we will tell you honestly what can be delivered inside it, or that it cannot.",
  },
  {
    q: "Can you work to a grant timeline and reporting cycle?",
    a: "Yes. Deliverables and evaluation points are aligned to the reporting dates in your grant agreement, so the evidence exists when the report is due rather than being assembled afterwards.",
  },
  {
    q: "We handle sensitive beneficiary data. How do you approach that?",
    a: "Data residency, retention and deletion are agreed in the contract, access is minimised by design, and we disclose that delivery is performed from Canada and India so you can assess residency requirements before contracting rather than after.",
  },
  {
    q: "Have you worked with nonprofits before?",
    a: "Our published past performance is commercial and training work; we do not have a nonprofit reference we can name yet, and we would rather say so than imply one. The research and evaluation capability that sector needs is the same capability documented in our past-performance record.",
  },
];

export default function Nonprofit() {
  return (
    <Layout>
      <Seo
        title="Nonprofit & Social Impact Technology"
        description="For mission organisations that have to show a funder what changed: program evaluation, operable systems, responsible AI adoption and staff capability."
        keywords="nonprofit technology partner, program evaluation services, nonprofit data services, social impact measurement"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Nonprofit & social impact" }]} />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "16ch" }}>
            Evidence your funder will accept.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            Mission organisations are asked to prove impact with the budget of an
            organisation that was never resourced to measure it. We build the system
            and the evidence base together, so the reporting is a by-product rather
            than a separate project.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s3)", marginTop: "var(--s7)" }}>
            <Button href="/contact" variant="accent">
              Talk about a programme <Arrow />
            </Button>
            <Button href="/services/research-data" variant="ghost">
              Evaluation services
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <SectionHead index="01" label="What we are usually asked for" />
          <div className="rds-grid rds-cols-2">
            {NEEDS.map((n) => (
              <Panel key={n.t}>
                <h2 className="rds-h3" style={{ marginBottom: "var(--s3)" }}>{n.t}</h2>
                <p style={{ color: "var(--fg-2)", fontSize: 15, marginBottom: "var(--s5)" }}>{n.b}</p>
                <Link href={n.href} className="rds-arrow rds-link">
                  {n.cta} <Arrow />
                </Link>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="02" label="How we scope for constrained budgets" />
          <div className="rds-splithead">
            <h2 className="rds-h2">Tell us the envelope first.</h2>
            <div className="rds-prose">
              <p>
                The usual sequence is backwards: a supplier designs the ideal solution,
                prices it, and then the organisation discovers it costs three times the
                grant. Everyone has wasted a month.
              </p>
              <p>
                We ask for the funding envelope and the reporting dates before we design
                anything, then say plainly what fits inside it. Sometimes the answer is
                that the thing you asked for cannot be done for that money, and a
                narrower piece of work would be worth more than a diluted version of the
                original.
              </p>
              <p>
                Evaluation is scoped at the start, not added at the end, because a
                measurement designed after delivery cannot establish a baseline.
              </p>
            </div>
          </div>

          <Note title="On references:">
            We do not yet have a nonprofit engagement we can name as a reference, and we
            will not imply one. The evaluation and data capability described here is the
            same capability documented in our{" "}
            <Link href="/government/past-performance" className="rds-link">
              past-performance record
            </Link>
            .
          </Note>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container style={{ maxWidth: 840 }}>
          <SectionHead index="03" label="Questions" />
          <Faq items={FAQ_ITEMS} idPrefix="npo" />
        </Container>
      </Section>

      <CtaBand
        title="Working to a grant deadline?"
        body="Tell us the programme, the funding envelope and the reporting dates. We will tell you what can be delivered and measured inside them — including when the honest answer is less than you hoped."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "Research & evaluation", href: "/services/research-data" }}
      />
    </Layout>
  );
}
