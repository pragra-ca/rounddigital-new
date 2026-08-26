import Link from "next/link";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import {
  Arrow,
  Breadcrumb,
  Container,
  CtaBand,
  Eyebrow,
  Note,
  Panel,
  Section,
  SectionHead,
} from "@/components/system/ui";
import { PAST_PERFORMANCE } from "@/content/past-performance.mjs";
import { getFact } from "@/content/facts.mjs";

export default function CaseStudy({ entry, fact, others }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${entry.client} — case study`,
    description: entry.outcome,
    author: { "@type": "Organization", name: "Round Digital" },
    publisher: { "@type": "Organization", name: "Round Digital" },
  };

  return (
    <Layout>
      <Seo
        title={`${entry.client} — Case Study`}
        description={entry.outcome}
        keywords={`${entry.client} case study, ${entry.relationship}`}
        ogType="article"
        jsonLd={[schema]}
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Case studies", href: "/works" },
              { label: entry.client },
            ]}
          />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "17ch" }}>
            {entry.client}
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>{entry.outcome}</p>

          <dl className="rds-codebar">
            <div>
              <dt>Relationship</dt>
              <dd>{entry.relationship}</dd>
            </div>
            <div>
              <dt>Period of performance</dt>
              <dd className="rds-mono">{entry.period}</dd>
            </div>
          </dl>
        </Container>
      </Section>

      <Section>
        <Container style={{ maxWidth: 860 }}>
          <SectionHead index="01" label="The challenge" />
          <p className="rds-prose" style={{ fontSize: 17, marginBottom: "var(--s8)" }}>
            {entry.challenge}
          </p>

          <SectionHead index="02" label="What we did" />
          <p className="rds-prose" style={{ fontSize: 17, marginBottom: "var(--s8)" }}>
            {entry.approach}
          </p>

          <SectionHead index="03" label="Outcome" />
          <p className="rds-prose" style={{ fontSize: 17, marginBottom: "var(--s6)" }}>
            {entry.outcome}
          </p>

          {fact ? (
            <Panel fill keyed>
              <p className="rds-eyebrow" style={{ marginBottom: "var(--s3)" }}>
                Corroborating source
              </p>
              <p style={{ color: "var(--fg-2)", fontSize: 15, marginBottom: "var(--s3)" }}>
                {fact.statement}
              </p>
              <a
                href={fact.source}
                target="_blank"
                rel="noopener noreferrer"
                className="rds-arrow rds-link"
              >
                {new URL(fact.source).hostname.replace(/^www\./, "")} <Arrow />
              </a>
            </Panel>
          ) : null}

          <Note title="On metrics:">
            This case study carries no efficiency or savings percentage, because we
            cannot evidence one for this engagement with the client&apos;s agreement.
            Where we can, we will publish it with the method attached.
          </Note>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <SectionHead index="04" label="Other engagements" />
          <ul className="rds-pillarlist">
            {others.map((o) => (
              <li key={o.id}>
                <Link href={`/works/${o.id}`}>
                  <div className="rds-pillarlist-main">
                    <span className="rds-code">{o.relationship.split(" — ")[0]}</span>
                    <h2 className="rds-h3" style={{ margin: "var(--s2) 0 0" }}>{o.client}</h2>
                  </div>
                  <div className="rds-pillarlist-side">
                    <span className="rds-arrow">
                      Read <Arrow />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title="Have a comparable requirement?"
        body="Tell us the scope and we will say plainly whether this experience transfers to it. Where it does not, we will say that too."
        primary={{ label: "Start a conversation", href: "/rfp" }}
        secondary={{ label: "All case studies", href: "/works" }}
      />
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: PAST_PERFORMANCE.map((p) => ({ params: { slug: p.id } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const entry = PAST_PERFORMANCE.find((p) => p.id === params.slug);
  if (!entry) return { notFound: true };
  return {
    props: {
      entry,
      fact: getFact(entry.factId) || null,
      others: PAST_PERFORMANCE.filter((p) => p.id !== entry.id),
    },
  };
}
