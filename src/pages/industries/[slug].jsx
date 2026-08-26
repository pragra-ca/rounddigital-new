import Link from "next/link";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import {
  Arrow,
  Breadcrumb,
  Container,
  CtaBand,
  Eyebrow,
  Faq,
  Panel,
  PanelLink,
  Section,
  SectionHead,
} from "@/components/system/ui";
import { RD_INDUSTRIES } from "@/data/rdIndustries";
import { PILLARS } from "@/data/navigation";

/* The `related` field in the industry data still holds pre-consolidation
   service slugs. Those URLs are now 301s, so linking to them directly would
   send every industry page through a redirect chain. This maps each legacy
   slug onto the pillar that absorbed it — the same mapping declared in
   next.config.mjs, kept in one place here rather than duplicated per page. */
const LEGACY_TO_PILLAR = {
  "cloud-solutions": "it-services",
  "custom-software": "it-services",
  cybersecurity: "it-services",
  "digital-transformation": "it-services",
  "ai-machine-learning": "ai-enablement",
  "data-analytics": "research-data",
  "global-talent": "staffing",
  "engagement-models": "it-services",
};

function relatedPillars(related = []) {
  const slugs = new Set(
    related.map((r) => LEGACY_TO_PILLAR[r] || r).filter((s) => PILLARS.some((p) => p.slug === s))
  );
  if (!slugs.size) return PILLARS.slice(0, 3);
  return PILLARS.filter((p) => slugs.has(p.slug));
}

export default function IndustryPage({ industry, related }) {
  const faqSchema = industry.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: industry.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <Layout>
      <Seo
        title={industry.seo?.title || `${industry.name} — Industry`}
        description={industry.seo?.description || industry.body}
        keywords={industry.seo?.keywords}
        jsonLd={faqSchema ? [faqSchema] : []}
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Who we serve", href: "/industries" },
              { label: industry.name },
            ]}
          />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "18ch" }}>
            {industry.headline || industry.title}
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <div className="rds-prose" style={{ marginTop: "var(--s5)", fontSize: 18 }}>
            {(Array.isArray(industry.intro) ? industry.intro : [industry.intro])
              .filter(Boolean)
              .map((p, i) => (
                <p key={i}>{p}</p>
              ))}
          </div>
        </Container>
      </Section>

      {industry.challenges?.length ? (
        <Section className="rds-band">
          <Container>
            <SectionHead index="01" label="What makes this sector hard" />
            <div className="rds-grid rds-cols-2">
              {industry.challenges.map((c) => (
                <Panel key={c.t}>
                  <h2 className="rds-h3" style={{ marginBottom: "var(--s3)" }}>{c.t}</h2>
                  <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{c.d}</p>
                </Panel>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {industry.technology || industry.talent ? (
        <Section>
          <Container>
            <SectionHead index="02" label="What we bring" />
            <div className="rds-deliv">
              {[industry.technology, industry.talent].filter(Boolean).map((block) => (
                <div key={block.heading}>
                  <h2 className="rds-h2" style={{ marginBottom: "var(--s4)" }}>{block.heading}</h2>
                  <p className="rds-prose" style={{ marginBottom: "var(--s5)" }}>{block.body}</p>
                  {block.items?.length ? (
                    <ul className="rds-ticklist">
                      {block.items.map((i) => (
                        <li key={typeof i === "string" ? i : i.t}>
                          {typeof i === "string" ? i : `${i.t} — ${i.d}`}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {industry.compliance?.length ? (
        <Section className="rds-band">
          <Container>
            <SectionHead index="03" label="Compliance context" />
            <div className="rds-splithead" style={{ marginBottom: "var(--s6)" }}>
              <h2 className="rds-h2">Regimes we design to in this sector.</h2>
              <p className="rds-prose">
                These are frameworks we build and document against. They are a
                description of how we work, not a claim that Round Digital is certified
                against them — our certification status is published in full on the{" "}
                <Link href="/government/certifications" className="rds-link">
                  roadmap
                </Link>
                .
              </p>
            </div>
            <ul className="rds-taglist">
              {industry.compliance.map((c) => (
                <li key={c} className="rds-mono">
                  {c}
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {industry.outcomes?.length ? (
        <Section>
          <Container>
            <SectionHead index="04" label="What changes" />
            <div className="rds-grid rds-cols-3">
              {industry.outcomes.map((o) => (
                <Panel key={o.t} fill>
                  <h2 className="rds-h4" style={{ marginBottom: "var(--s2)" }}>{o.t}</h2>
                  <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{o.d}</p>
                </Panel>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {industry.faqs?.length ? (
        <Section className="rds-band">
          <Container style={{ maxWidth: 840 }}>
            <SectionHead index="05" label="Questions" />
            <Faq items={industry.faqs} idPrefix={industry.slug} />
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container>
          <SectionHead index="06" label="Services for this sector" />
          <div className="rds-grid rds-cols-3">
            {related.map((p) => (
              <PanelLink key={p.slug} href={p.href}>
                <span className="rds-code">{p.focus}</span>
                <h2 className="rds-h4" style={{ margin: "var(--s3) 0 var(--s3)" }}>{p.title}</h2>
                <p style={{ color: "var(--fg-2)", fontSize: 15, marginBottom: "var(--s4)" }}>{p.summary}</p>
                <span className="rds-arrow">
                  Open <Arrow />
                </span>
              </PanelLink>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title={`Working in ${industry.name.toLowerCase()}?`}
        body="Tell us the constraint and the deadline. You will get a direct answer on whether our experience in this sector applies to your requirement."
        primary={{ label: "Submit an RFP", href: "/rfp" }}
        secondary={{ label: "All sectors", href: "/industries" }}
        accent
      />
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: RD_INDUSTRIES.map((i) => ({ params: { slug: i.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const industry = RD_INDUSTRIES.find((i) => i.slug === params.slug);
  if (!industry) return { notFound: true };
  return { props: { industry, related: relatedPillars(industry.related) } };
}
