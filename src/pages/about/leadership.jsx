import Link from "next/link";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import {
  Breadcrumb,
  Container,
  CtaBand,
  Eyebrow,
  Note,
  Panel,
  Section,
  SectionHead,
  Status,
} from "@/components/system/ui";

/* Named biographies are deliberately NOT published here yet.
 *
 * The company's ownership and officer record is being formally documented, and
 * public profiles currently disagree with the intended structure. Publishing a
 * named title before the documentary record supports it would create exactly
 * the discrepancy that certification bodies and contracting officers check for.
 *
 * So this page publishes the accountability MODEL — which is verifiable and
 * useful today — and holds the named bios for company completion. */
const ROLES = [
  {
    role: "Founder & principal",
    accountability:
      "Owns the quality system and the assurance practice. Twenty years in IT audit and quality assurance — the background that anchors our AI governance and ISO 9001 work.",
    reachable: "Escalation point for any engagement, at any time.",
  },
  {
    role: "Delivery lead, per engagement",
    accountability:
      "One named individual per engagement who stays on it from scoping to transfer. Not a rotating account manager and not a proposal-only appearance.",
    reachable: "Named in the proposal, before award.",
  },
  {
    role: "Practice leads",
    accountability:
      "One per pillar — IT, AI enablement, research and data, staffing, training. Each is a practitioner in their discipline, not a sales overlay.",
    reachable: "Introduced during scoping for the relevant pillar.",
  },
];

const PENDING = [
  "Named officer biographies with titles of record",
  "Board composition",
  "Ownership percentages of record",
  "Professional credentials and dates for each named leader",
];

export default function Leadership() {
  return (
    <Layout>
      <Seo
        title="Leadership & Accountability"
        description="How accountability works: a named delivery lead on every engagement, practice leads who still practise, and an escalation path one step from a decision-maker."
        keywords="Round Digital leadership, technology company leadership, delivery accountability"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Leadership" },
            ]}
          />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "17ch" }}>
            You will know who is responsible.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            The most common complaint about large integrators is not competence — it
            is that nobody on the engagement can make a decision. Our answer is
            structural rather than cultural: a named lead, and one step to someone
            who can say yes.
          </p>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <SectionHead index="01" label="How accountability is structured" />
          <ul className="rds-statuslist">
            {ROLES.map((r) => (
              <li key={r.role}>
                <h2 className="rds-h3" style={{ marginBottom: "var(--s3)" }}>{r.role}</h2>
                <dl className="rds-spec">
                  <dt>Accountable for</dt>
                  <dd style={{ fontSize: 15, color: "var(--fg-2)" }}>{r.accountability}</dd>
                  <dt>Reachable</dt>
                  <dd style={{ fontSize: 15, color: "var(--fg-2)" }}>{r.reachable}</dd>
                </dl>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="02" label="Named biographies" />
          <div className="rds-splithead" style={{ marginBottom: "var(--s6)" }}>
            <h2 className="rds-h2">Named biographies are supplied with a bid response.</h2>
            <div className="rds-prose">
              <p>
                Officer titles and ownership percentages are being formally documented
                as part of our supplier-diversity certification work. Until that
                record is complete and consistent across our corporate documents and
                our public profiles, we are not publishing named titles here.
              </p>
              <p>
                That is a deliberate choice. A title published on a website that does
                not match the share register or the minute book is precisely the
                discrepancy a certifying body and a contracting officer look for, and
                it is far more damaging than an honest gap.
              </p>
              <p>
                Named biographies and credentials are available on request for any
                active procurement, and will be published here once the documentary
                record supports them.
              </p>
            </div>
          </div>

          <Panel>
            <h3 className="rds-h4" style={{ marginBottom: "var(--s4)" }}>
              Supplied on request
            </h3>
            <ul className="rds-statuslist" style={{ borderTop: 0 }}>
              {PENDING.map((p) => (
                <li key={p} style={{ paddingBlock: "var(--s3)" }}>
                  <div className="rds-statuslist-head">
                    <span style={{ fontSize: 15, color: "var(--fg-2)" }}>{p}</span>
                    <Status state="progress">In progress</Status>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>

          <Note title="For evaluators:">
            If your solicitation requires key-personnel resumes, named organisational
            charts or ownership documentation, request them through{" "}
            <Link href="/rfp" className="rds-link">
              the intake form
            </Link>{" "}
            and they will be supplied as part of the bid response.
          </Note>
        </Container>
      </Section>

      <CtaBand
        title="Need key-personnel documentation?"
        body="Resumes, organisational charts and ownership records are supplied as part of a bid response. Tell us the requirement and the format your solicitation asks for."
        primary={{ label: "Request documentation", href: "/rfp" }}
        secondary={{ label: "Women-owned business", href: "/about/women-owned" }}
      />
    </Layout>
  );
}
