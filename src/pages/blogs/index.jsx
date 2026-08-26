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
import { blogs } from "@/data/blogs";

// Planned reference guides. Listed as forthcoming rather than linked, because
// a link to an unwritten page is worse than an honest "not yet".
const PLANNED = [
  "Implementing NIST AI RMF: a control-by-control walkthrough",
  "ISO 42001 readiness: what an AI management system actually requires",
  "Designing a program evaluation that survives an audit",
  "TBIPS, ProServices or SBIPS: choosing a Canadian federal supply arrangement",
  "WCAG 2.2 AA and Section 508 for public-sector digital services",
  "Registered apprenticeship as an enterprise workforce strategy",
];

function formatDate(value) {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}

export default function BlogsIndex() {
  const posts = [...blogs].sort(
    (a, b) => new Date(b.publishedAt || b.publishDate || 0) - new Date(a.publishedAt || a.publishDate || 0)
  );

  return (
    <Layout>
      <Seo
        title="Insights — Technology & Procurement"
        description="Practical writing on AI governance, evidence-based program evaluation, procurement readiness and workforce capability — from the people who deliver."
        keywords="AI governance guide, NIST AI RMF, program evaluation, procurement readiness, technology insights"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "17ch" }}>
            Reference guides, and the earlier archive.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            The six guides in preparation below are the ones worth waiting for:
            governance, evidence, procurement mechanics and capability, written by
            the people who do the delivery. The published archive above them is
            earlier general-interest writing, kept for reference.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="01" label="Published" />
          <ul className="rds-pillarlist">
            {posts.map((p) => {
              const date = formatDate(p.publishedAt || p.publishDate);
              return (
                <li key={p.slug}>
                  <Link href={`/blogs/${p.slug}`}>
                    <div className="rds-pillarlist-main">
                      {p.tags?.length ? (
                        <span className="rds-code">{p.tags.slice(0, 2).join(" · ")}</span>
                      ) : null}
                      <h2 className="rds-h3" style={{ margin: "var(--s2) 0 var(--s2)" }}>{p.title}</h2>
                      <p style={{ color: "var(--fg-2)", fontSize: 15, maxWidth: "68ch" }}>{p.excerpt}</p>
                    </div>
                    <div className="rds-pillarlist-side">
                      {date ? (
                        <p className="rds-meta rds-mono" style={{ marginBottom: "var(--s3)" }}>{date}</p>
                      ) : null}
                      <span className="rds-arrow">
                        Read <Arrow />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <SectionHead index="02" label="In preparation" />
          <div className="rds-splithead" style={{ marginBottom: "var(--s6)" }}>
            <h2 className="rds-h2">Reference guides we are writing.</h2>
            <p className="rds-prose">
              Each is intended as a working document rather than a blog post — the kind
              of thing you would keep open while doing the task. They are listed here
              unlinked because they are not written yet.
            </p>
          </div>

          <Panel fill>
            <ul className="rds-ticklist">
              {PLANNED.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Panel>

          <Note title="Want one of these sooner?">
            If a guide on this list would help a decision you are making now, say so and
            we will prioritise it — or answer the question directly, which is usually
            faster for both of us.
          </Note>
        </Container>
      </Section>

      <CtaBand
        title="Have a question these do not answer?"
        body="Ask it directly. You will get an answer from someone who does the work rather than a link to a gated asset."
        primary={{ label: "Ask us", href: "/contact" }}
        secondary={{ label: "Explore services", href: "/services" }}
      />
    </Layout>
  );
}
