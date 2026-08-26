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
  PanelLink,
  Section,
  SectionHead,
} from "@/components/system/ui";
import { PILLARS } from "@/data/navigation";

const PROBLEMS = [
  {
    t: "The programme has four suppliers and no owner",
    b: "One firm builds, another staffs, a third trains and nobody is accountable for whether the capability landed. Integration cost lands on your programme manager.",
  },
  {
    t: "Escalation takes a week",
    b: "The people on your engagement cannot make decisions, and the people who can are three layers away and carrying nine other accounts.",
  },
  {
    t: "The AI pilot cannot get past risk",
    b: "A working demonstration exists. Security, legal and audit all have questions nobody scoped for, and the project is now stalled indefinitely.",
  },
  {
    t: "The system works but your team cannot run it",
    b: "Delivery was accepted, the supplier left, and operating knowledge left with them. The next change request goes back to the same supplier at the same rate.",
  },
];

const WHAT_WE_DO = [
  {
    t: "Named lead, one-step escalation",
    b: "The person running your engagement stays on it, and there is one step between them and someone who can commit the company. That is a structural property of our size, not a service promise.",
  },
  {
    t: "Scoped increments before scale",
    b: "A fixed first increment with an explicit definition of done. You judge us on something small and reversible before you commit budget to something large.",
  },
  {
    t: "Governance built in, not bolted on",
    b: "For AI work the risk register, oversight design and acceptance thresholds are agreed before the build. That is what gets a system past your own risk function.",
  },
  {
    t: "Capability transfer as a gate",
    b: "Your operators run the system with us observing before the engagement closes. If they cannot, we have not finished.",
  },
];

const FAQ_ITEMS = [
  {
    q: "You are small. Can you carry an enterprise programme?",
    a: "We carry the parts sized for us and say so about the rest. For scope beyond our capacity we either team with a larger partner or tell you to buy it elsewhere. A supplier who claims unlimited capacity is either much larger than us or not being straight with you.",
  },
  {
    q: "Can you work alongside our incumbent integrator?",
    a: "Yes, routinely. We will agree interface boundaries and escalation paths in writing at the start. We do not require an incumbent to be displaced in order to be useful.",
  },
  {
    q: "What about our supplier diversity targets?",
    a: "Round Digital is women-owned and operated, and qualifies as a small business across every practice we operate. Formal diversity certification is in progress rather than held — the precise position, including which programmes we are and are not eligible for, is set out on our women-owned business page.",
  },
  {
    q: "How do you price?",
    a: "Assessments and well-specified increments are fixed-price. Open-ended delivery and augmentation are time-and-materials. We will tell you which shape actually fits your requirement rather than defaulting to the one that suits us.",
  },
];

export default function Enterprise() {
  return (
    <Layout>
      <Seo
        title="Enterprise & Mid-Market Delivery"
        description="Technology, AI, data, staffing and training for enterprise and mid-market organisations — a named delivery lead, scoped increments, capability transfer."
        keywords="enterprise IT services, mid-market technology partner, enterprise AI adoption, managed delivery pods"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Enterprise" }]} />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "17ch" }}>
            Enterprise rigour, without the enterprise distance.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            You are not short of suppliers. You are short of one who takes
            responsibility for the whole outcome and can still be reached on a
            Tuesday afternoon.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s3)", marginTop: "var(--s7)" }}>
            <Button href="/rfp" variant="accent">
              Describe your requirement <Arrow />
            </Button>
            <Button href="/services" variant="ghost">
              Explore services
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <SectionHead index="01" label="What usually goes wrong" />
          <h2 className="rds-h2" style={{ maxWidth: "22ch", marginBottom: "var(--s7)" }}>
            Four failures we are built to avoid.
          </h2>
          <div className="rds-grid rds-cols-2">
            {PROBLEMS.map((p) => (
              <Panel key={p.t}>
                <h3 className="rds-h3" style={{ marginBottom: "var(--s3)" }}>{p.t}</h3>
                <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{p.b}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="02" label="How we work with you" />
          <div className="rds-grid rds-cols-2">
            {WHAT_WE_DO.map((p) => (
              <Panel key={p.t} fill>
                <h3 className="rds-h3" style={{ marginBottom: "var(--s3)" }}>{p.t}</h3>
                <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{p.b}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <SectionHead index="03" label="Where to start" />
          <div className="rds-grid rds-cols-3">
            {PILLARS.map((p) => (
              <PanelLink key={p.slug} href={p.href}>
                <span className="rds-code">{p.focus}</span>
                <h3 className="rds-h4" style={{ margin: "var(--s3) 0 var(--s3)" }}>{p.title}</h3>
                <p style={{ color: "var(--fg-2)", fontSize: 15, marginBottom: "var(--s4)" }}>{p.summary}</p>
                <span className="rds-arrow">
                  Open <Arrow />
                </span>
              </PanelLink>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container style={{ maxWidth: 840 }}>
          <SectionHead index="04" label="Questions" />
          <Faq items={FAQ_ITEMS} idPrefix="ent" />
        </Container>
      </Section>

      <CtaBand
        title="Describe the programme, not the role."
        body="Tell us what is stuck and what good would look like. You will get a direct answer about whether we are the right supplier for it — including when we are not."
        primary={{ label: "Start a conversation", href: "/rfp" }}
        secondary={{ label: "Case studies", href: "/works" }}
        accent
      />
    </Layout>
  );
}
