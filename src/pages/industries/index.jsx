import Link from "next/link";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import {
  Arrow,
  Breadcrumb,
  Container,
  CtaBand,
  Eyebrow,
  Panel,
  PanelLink,
  Section,
  SectionHead,
} from "@/components/system/ui";
import { RD_INDUSTRIES } from "@/data/rdIndustries";

const BUYERS = [
  {
    label: "Government & public sector",
    href: "/government",
    body: "Federal, provincial, state and municipal buyers evaluating us against codes, size status and past performance.",
  },
  {
    label: "Enterprise & mid-market",
    href: "/enterprise",
    body: "Programme delivery with named accountability and an escalation path that works.",
  },
  {
    label: "Nonprofit & social impact",
    href: "/nonprofit",
    body: "Mission organisations that have to show a funder what actually changed.",
  },
];

export default function IndustriesIndex() {
  return (
    <Layout>
      <Seo
        title="Industries — Sectors We Deliver Into"
        description="IT, AI enablement, research, staffing and training across government, financial services, healthcare, logistics, education and other regulated sectors."
        keywords="industries served, government technology, healthcare IT, financial services technology, logistics technology"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Who we serve" }]} />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "18ch" }}>
            Sectors where getting it wrong is expensive.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            Our work concentrates where systems are regulated, audited or
            operationally critical — because that is where capability transfer,
            evidence and governance are worth paying for.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="01" label="By buyer type" />
          <div className="rds-grid rds-cols-3">
            {BUYERS.map((b) => (
              <PanelLink key={b.href} href={b.href}>
                <h2 className="rds-h3" style={{ marginBottom: "var(--s3)" }}>{b.label}</h2>
                <p style={{ color: "var(--fg-2)", fontSize: 15, marginBottom: "var(--s5)" }}>{b.body}</p>
                <span className="rds-arrow">
                  Open <Arrow />
                </span>
              </PanelLink>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <SectionHead index="02" label="By sector" />
          <div className="rds-splithead" style={{ marginBottom: "var(--s7)" }}>
            <h2 className="rds-h2">Twelve sectors we deliver into today.</h2>
            <p className="rds-prose">
              Each page describes the problems specific to that sector, the technology
              and talent it needs, and the compliance context we work within. Where we
              have no engagement in a sector, there is no page for it.
            </p>
          </div>

          <ul className="rds-pillarlist">
            {RD_INDUSTRIES.map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`}>
                  <div className="rds-pillarlist-main">
                    {i.tag ? <span className="rds-code">{i.tag}</span> : null}
                    <h3 className="rds-h3" style={{ margin: "var(--s2) 0 var(--s2)" }}>{i.name}</h3>
                    <p style={{ color: "var(--fg-2)", fontSize: 15, maxWidth: "68ch" }}>
                      {i.body || i.intro}
                    </p>
                  </div>
                  <div className="rds-pillarlist-side">
                    <span className="rds-arrow">
                      Open sector <Arrow />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="03" label="Not listed?" />
          <Panel fill keyed>
            <h2 className="rds-h3" style={{ marginBottom: "var(--s3)" }}>
              We would rather tell you it is not our sector.
            </h2>
            <p className="rds-prose">
              The pages above cover sectors where we have delivered. If yours is not
              here, the capability may still transfer — or it may not, and we will say
              so. Either answer is faster than a discovery call designed to find a way
              in.
            </p>
          </Panel>
        </Container>
      </Section>

      <CtaBand
        title="Have a requirement in your sector?"
        body="Tell us the sector, the constraint and the deadline. You will get a direct answer on whether our experience transfers."
        primary={{ label: "Submit an RFP", href: "/rfp" }}
        secondary={{ label: "Explore services", href: "/services" }}
        accent
      />
    </Layout>
  );
}
