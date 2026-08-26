import Link from "next/link";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import {
  Arrow,
  Breadcrumb,
  Button,
  Container,
  CtaBand,
  Grid,
  Note,
  Panel,
  Section,
  SectionHead,
  Status,
} from "@/components/system/ui";
import {
  DUE_DILIGENCE,
  ENTRY_ROUTES,
  QUALIFICATION_STATUS_LABEL,
  QUALIFICATION_STATUS_STATE,
  countByStatus,
} from "@/data/qualification";

/* The vendor qualification pack.
 *
 * Nine questions, four of them answered "not yet written". Publishing that
 * number is the point of the page: a supplier who tells you where their
 * documentation stops is easier to evaluate than one who lets you discover it
 * in week three of a review.
 *
 * The accordion is native <details>/<summary>, matching <Faq> in ui.jsx. That
 * buys keyboard operation, screen-reader semantics and find-in-page for free,
 * none of which a div-and-onClick implementation gets without work.
 */

const SUMMARY = [
  { status: "published", caption: "Published and answerable today" },
  { status: "drafted", caption: "Drafted, awaiting written confirmation" },
  { status: "missing", caption: "Not yet written — and named as such" },
];

function ReadinessSummary() {
  return (
    <Grid cols={3}>
      {SUMMARY.map((s) => (
        <Panel key={s.status} fill>
          <span className="rds-qualcount rds-mono">{countByStatus(s.status)}</span>
          <Status state={QUALIFICATION_STATUS_STATE[s.status]}>
            {QUALIFICATION_STATUS_LABEL[s.status]}
          </Status>
          <p style={{ marginTop: "var(--s3)", color: "var(--fg-2)", fontSize: 15 }}>{s.caption}</p>
        </Panel>
      ))}
    </Grid>
  );
}

export default function VendorQualification() {
  return (
    <Layout>
      <Seo
        title="Vendor Qualification Pack for Buyers"
        description="The nine due-diligence questions every enterprise and public buyer asks before signing, answered in public — including the four we have not written yet."
        keywords="vendor due diligence, supplier qualification pack, vendor risk assessment, security questionnaire response, transition out plan, business continuity supplier"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Government", href: "/government" },
              { label: "Vendor qualification" },
            ]}
          />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "18ch" }}>
            The nine answers that end a procurement review.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            Every enterprise and public buyer runs the same due-diligence list before a contract
            is signed. Publishing our answers — including the ones still blank — removes weeks
            from that review and tells you exactly what risk you would be taking.
          </p>
        </Container>
      </Section>

      <Section tight>
        <Container>
          <Note title="Four of these say “not yet written”.">
            That is deliberate. A supplier who tells you where their documentation stops is
            easier to evaluate than one who lets you find out in week three — and the blanks here
            double as our own funding list, in priority order.
          </Note>
        </Container>
      </Section>

      <Section tight>
        <Container>
          <ReadinessSummary />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="01" label="The due-diligence list" />
          <div>
            {DUE_DILIGENCE.map((item) => (
              <details key={item.id} className="rds-qualrow">
                <summary>
                  <span className="rds-qualrow-title">{item.title}</span>
                  <Status state={QUALIFICATION_STATUS_STATE[item.status]}>
                    {QUALIFICATION_STATUS_LABEL[item.status]}
                  </Status>
                </summary>
                <div className="rds-qualrow-body">
                  <p className="rds-prose">{item.answer}</p>
                  <p className="rds-qualrow-action rds-mono">{item.action}</p>
                </div>
              </details>
            ))}
          </div>

          <p className="rds-meta" style={{ marginTop: "var(--s5)" }}>
            Credentials are tracked separately, with dates, dependencies and indicative cost, on
            the{" "}
            <Link href="/government/certifications" className="rds-link">
              certification roadmap
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="02" label="Four ways in" />
          <h2 className="rds-h2" style={{ maxWidth: "19ch", marginBottom: "var(--s4)" }}>
            Only one of them is a solicitation.
          </h2>
          <p className="rds-lead" style={{ marginBottom: "var(--s7)" }}>
            An RFP is the last step of a buying process, not the first. These are the three steps
            before it, each with a stated response time and nothing attached.
          </p>

          <Grid cols={4}>
            {ENTRY_ROUTES.map((route) => (
              <Panel key={route.id} as="article">
                <span className="rds-eyebrow" style={{ display: "flex" }}>
                  {route.index} — {route.effort}
                </span>
                <h3 className="rds-h4" style={{ margin: "var(--s3) 0" }}>
                  {route.title}
                </h3>
                <p style={{ color: "var(--fg-2)", fontSize: 15, lineHeight: 1.5 }}>
                  {route.body}
                </p>
                <p className="rds-qualroute-turnaround rds-mono">{route.turnaround}</p>
                <p
                  style={{
                    color: "var(--fg-2)",
                    fontSize: 15,
                    lineHeight: 1.5,
                    marginTop: "var(--s3)",
                  }}
                >
                  {route.detail}
                </p>
                <p className="rds-qualrow-action rds-mono">{route.need}</p>
                <div style={{ marginTop: "var(--s4)" }}>
                  <Button href={route.href} variant={route.accent ? "accent" : "ghost"}>
                    {route.cta} <Arrow />
                  </Button>
                </div>
              </Panel>
            ))}
          </Grid>
        </Container>
      </Section>

      <CtaBand
        title="Send us the list your risk team actually uses."
        body="If your questionnaire asks something this page does not answer, that is useful to us. We will complete it, mark what we cannot answer, and add the gap to the list above."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "Where we can contract", href: "/government/where-we-can-contract" }}
      />
    </Layout>
  );
}
