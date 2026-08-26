import Link from "next/link";
import Seo from "@/components/seo";
import Layout from "./Layout";
import {
  Arrow,
  Breadcrumb,
  Button,
  Container,
  CtaBand,
  Eyebrow,
  Faq,
  Grid,
  Panel,
  PanelLink,
  Section,
  SectionHead,
} from "./ui";
import { PILLARS } from "@/data/navigation";

/* Renders one service pillar from the schema in src/data/services.js.
   Every pillar page has the same anatomy so a buyer comparing two of them is
   comparing like with like — which is also what makes the set maintainable. */
export default function ServicePillar({ service: s }) {
  const others = PILLARS.filter((p) => p.slug !== s.slug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.naicsLabel,
    description: s.lead,
    provider: { "@type": "Organization", name: "Round Digital" },
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "India" },
    ],
  };

  return (
    <Layout>
      <Seo
        /* Service name alone. Appending the headline pushed every pillar past
           62 characters once " | Round Digital" was added — /services/ai-enablement
           rendered an 83-character title, which Google truncates. The name is
           the primary search term; the headline is already the H1. */
        title={s.seoTitle || s.title}
        description={s.lead}
        keywords={`${s.title}, ${s.naicsLabel}, ${s.focusKeywords || s.naicsLabel}`}
        jsonLd={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: s.title },
            ]}
          />

          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "17ch" }}>
            {s.headline}
          </h1>

          <div className="rds-hero-rule" aria-hidden="true" />

          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>{s.lead}</p>

          {/* Neutral by default. The North American procurement codes for this
              practice live further down, under their own heading, so the hero
              reads the same to a buyer in Singapore as one in Ottawa. */}
          <dl className="rds-codebar">
            <div>
              <dt>Practice</dt>
              <dd>{s.naicsLabel}</dd>
            </div>
            <div>
              <dt>Delivered from</dt>
              <dd>Mississauga, Canada · Noida, India</dd>
            </div>
          </dl>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s3)", marginTop: "var(--s6)" }}>
            <Button href="/rfp" variant="accent">
              Submit an RFP <Arrow />
            </Button>
            <Button href="/contact" variant="ghost">
              Talk to a delivery lead
            </Button>
          </div>
        </Container>
      </Section>

      {/* 01 Challenge */}
      <Section className="rds-band">
        <Container>
          <SectionHead index="01" label={s.challenge.title} />
          <div className="rds-splithead">
            <h2 className="rds-h2">{s.challenge.heading}</h2>
            <div className="rds-prose">
              {s.challenge.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Capabilities */}
      <Section>
        <Container>
          <SectionHead index="02" label="What we do" />
          <h2 className="rds-h2" style={{ maxWidth: "20ch", marginBottom: "var(--s7)" }}>
            Capabilities in this practice.
          </h2>
          <Grid cols={3}>
            {s.capabilities.map((c) => (
              <Panel key={c.name}>
                <h3 className="rds-h4" style={{ marginBottom: "var(--s2)" }}>
                  {c.name}
                </h3>
                <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{c.detail}</p>
              </Panel>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* 03 Deliverables + approach */}
      <Section className="rds-band">
        <Container>
          <SectionHead index="03" label="What you receive" />

          <div className="rds-deliv">
            <div>
              <h2 className="rds-h2" style={{ marginBottom: "var(--s5)" }}>
                Deliverables.
              </h2>
              <ul className="rds-ticklist">
                {s.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="rds-h2" style={{ marginBottom: "var(--s5)" }}>
                How we deliver.
              </h2>
              <ol className="rds-steps">
                {s.approach.map((a) => (
                  <li key={a.step}>
                    <span className="rds-mono rds-steps-idx" aria-hidden="true">
                      {a.step}
                    </span>
                    <div>
                      <h3 className="rds-h4">{a.name}</h3>
                      <p style={{ color: "var(--fg-2)", fontSize: 15, marginTop: 4 }}>{a.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* 04 Methods */}
      <Section>
        <Container>
          <SectionHead index="04" label="Methods & technologies" />
          <div className="rds-splithead" style={{ marginBottom: "var(--s7)" }}>
            <h2 className="rds-h2">What we build with, and what we build to.</h2>
            <p className="rds-prose">
              Standards listed here are frameworks we design and document against.
              They are a description of how we work, not a claim to be certified
              against them — our actual certification status is published in full
              on the <Link href="/government/certifications" className="rds-link">certification roadmap</Link>.
            </p>
          </div>

          <Grid cols={2}>
            {s.methods.map((m) => (
              <Panel key={m.label} fill>
                <p className="rds-eyebrow" style={{ marginBottom: "var(--s3)" }}>
                  {m.label}
                </p>
                <ul className="rds-taglist">
                  {m.items.map((i) => (
                    <li key={i} className="rds-mono">
                      {i}
                    </li>
                  ))}
                </ul>
              </Panel>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* 05 Outcomes + industries */}
      <Section className="rds-band">
        <Container>
          <SectionHead index="05" label="Outcomes & sectors" />
          <div className="rds-deliv">
            <div>
              <h2 className="rds-h2" style={{ marginBottom: "var(--s4)" }}>
                What changes.
              </h2>
              <p className="rds-prose" style={{ marginBottom: "var(--s5)", fontSize: 15 }}>
                Stated as capability, not as a percentage. We do not publish
                performance figures we cannot attribute to a named engagement.
              </p>
              <ul className="rds-ticklist">
                {s.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="rds-h2" style={{ marginBottom: "var(--s5)" }}>
                Sectors we deliver into.
              </h2>
              <ul className="rds-taglist">
                {s.industries.map((i) => (
                  <li key={i} className="rds-mono">
                    {i}
                  </li>
                ))}
              </ul>
              <p className="rds-eyebrow" style={{ margin: "var(--s7) 0 var(--s3)" }}>
                North American public-sector codes
              </p>
              <p className="rds-meta" style={{ marginBottom: "var(--s3)" }}>
                Relevant only if you procure through a US or Canadian public-sector
                process.
              </p>
              <ul className="rds-taglist">
                <li className="rds-mono">NAICS {s.naics}</li>
                {s.psc.map((c) => (
                  <li key={c} className="rds-mono">
                    PSC {c}
                  </li>
                ))}
              </ul>

              <p style={{ marginTop: "var(--s6)" }}>
                <Link href="/government/past-performance" className="rds-arrow rds-link">
                  Past performance record <Arrow />
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 06 FAQ */}
      <Section>
        <Container style={{ maxWidth: 840 }}>
          <SectionHead index="06" label="Questions" />
          <Faq items={s.faq} idPrefix={s.slug} />
        </Container>
      </Section>

      {/* 07 Other pillars */}
      <Section className="rds-band">
        <Container>
          <SectionHead index="07" label="The rest of the loop" />
          <h2 className="rds-h2" style={{ maxWidth: "24ch", marginBottom: "var(--s7)" }}>
            This pillar is one part of a delivery loop.
          </h2>
          <Grid cols={4}>
            {others.map((p) => (
              <PanelLink key={p.slug} href={p.href}>
                <span className="rds-code">{p.focus}</span>
                <h3 className="rds-h4" style={{ margin: "var(--s3) 0 var(--s3)" }}>
                  {p.title}
                </h3>
                <span className="rds-arrow">
                  Open <Arrow />
                </span>
              </PanelLink>
            ))}
          </Grid>
        </Container>
      </Section>

      <CtaBand
        title={`Have a requirement in ${s.title}?`}
        body="Send the solicitation, statement of work or role description. You will get a direct answer on fit, including when the honest answer is that we are not the right supplier."
        primary={{ label: "Submit an RFP", href: "/rfp" }}
        secondary={{ label: "Capability statement", href: "/government/capability-statement" }}
        accent
      />
    </Layout>
  );
}
