import Link from "next/link";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import {
  Arrow,
  Button,
  Container,
  Eyebrow,
  Panel,
  Section,
} from "@/components/system/ui";

// Useful destinations rather than a dead end. A 404 reached from a stale
// procurement bookmark should still get the reader to the capability statement.
const ROUTES = [
  { label: "Services", href: "/services", note: "Five capability pillars, with codes" },
  { label: "Government & public sector", href: "/government", note: "Codes, status, past performance" },
  { label: "Capability statement", href: "/government/capability-statement", note: "One page, printable" },
  { label: "Submit an RFP", href: "/rfp", note: "Solicitations and teaming inquiries" },
  { label: "Case studies", href: "/works", note: "Three verified engagements" },
  { label: "Contact", href: "/contact", note: "A person replies" },
];

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo
        title="Page not found"
        description="That page does not exist or has moved. Here are the most useful places to go instead."
        noindex
      />

      <Section as="div" className="rds-hero">
        <Container>
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "16ch" }}>
            That page is not here.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            It may have moved, or it may never have existed.
            If you followed a link from a document or a bookmark, the pages below
            cover almost everything people arrive looking for.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s3)", marginTop: "var(--s7)" }}>
            <Button href="/" variant="primary">
              Back to the homepage <Arrow />
            </Button>
            <Button href="/contact" variant="ghost">
              Tell us what you were looking for
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <div className="rds-grid rds-cols-3">
            {ROUTES.map((r) => (
              <Panel key={r.href} fill>
                <h2 className="rds-h4" style={{ marginBottom: "var(--s2)" }}>
                  <Link href={r.href} className="rds-link">
                    {r.label}
                  </Link>
                </h2>
                <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{r.note}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
