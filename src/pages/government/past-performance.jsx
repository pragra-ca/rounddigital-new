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
} from "@/components/system/ui";
import { PAST_PERFORMANCE } from "@/content/past-performance.mjs";
import { getFact } from "@/content/facts.mjs";

// Rendered in the order a source-selection board reads: who, what was wrong,
// what we did, what resulted, over what period — and then the corroborating
// source, so the claim can be checked without contacting us.
export default function PastPerformance() {
  return (
    <Layout>
      <Seo
        title="Past Performance References"
        description="Perfectum.ai, ShipCarte and Pragra — each stated as challenge, approach, outcome and period, with an externally corroborating source for every claim."
        keywords="past performance IT contractor, capability references, government past performance"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Government", href: "/government" },
              { label: "Past performance" },
            ]}
          />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "18ch" }}>
            Three references you can check yourself.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            Challenge, approach, outcome, period of performance — and a source for
            every claim. We publish three rather than a logo wall, because three
            that survive scrutiny are worth more than thirty that do not.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="01" label="References" />

          <div style={{ display: "grid", gap: "var(--s6)" }}>
            {PAST_PERFORMANCE.map((p, i) => {
              const fact = getFact(p.factId);
              return (
                <Panel key={p.id} as="article">
                  <div className="rds-statuslist-head" style={{ marginBottom: "var(--s2)" }}>
                    <h2 className="rds-h3">
                      <span className="rds-mono" style={{ color: "var(--brand-fg)", fontSize: 13, marginRight: 10 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {p.client}
                    </h2>
                    <span className="rds-status">
                      <span className="rds-mono">{p.period}</span>
                    </span>
                  </div>

                  <p className="rds-meta" style={{ marginBottom: "var(--s5)" }}>{p.relationship}</p>

                  <dl className="rds-spec">
                    <dt>Challenge</dt>
                    <dd style={{ fontSize: 15, color: "var(--fg-2)" }}>{p.challenge}</dd>

                    <dt>Approach</dt>
                    <dd style={{ fontSize: 15, color: "var(--fg-2)" }}>{p.approach}</dd>

                    <dt>Outcome</dt>
                    <dd style={{ fontSize: 15, color: "var(--fg-2)" }}>{p.outcome}</dd>

                    <dt>Period</dt>
                    <dd className="rds-mono" style={{ fontSize: 15 }}>{p.period}</dd>

                    {fact ? (
                      <>
                        <dt>Corroboration</dt>
                        <dd style={{ fontSize: 15, color: "var(--fg-2)" }}>
                          {fact.statement}{" "}
                          <a
                            href={fact.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rds-link rds-mono rds-srclink"
                            style={{ fontSize: 13 }}
                          >
                            {new URL(fact.source).hostname.replace(/^www\./, "")}
                          </a>
                        </dd>
                      </>
                    ) : null}
                  </dl>
                </Panel>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <SectionHead index="02" label="What is not here" />
          <div className="rds-splithead">
            <h2 className="rds-h2">Deliberate omissions.</h2>
            <div className="rds-prose">
              <p>
                <strong style={{ color: "var(--fg)" }}>No government past performance yet.</strong>{" "}
                Round Digital has not yet completed a public-sector contract as prime.
                Subcontracting under an established prime is the normal route to that
                record and is the one we are pursuing.
              </p>
              <p>
                <strong style={{ color: "var(--fg)" }}>No percentages.</strong> We do not
                publish efficiency or savings figures we cannot attribute to a named
                engagement with the client&apos;s agreement. Invented metrics are the
                easiest claim to make and the fastest to be caught.
              </p>
              <p>
                <strong style={{ color: "var(--fg)" }}>No reference contact details.</strong>{" "}
                Names and contacts are supplied on request, with the client&apos;s consent,
                as part of a bid response rather than published on an open page.
              </p>
            </div>
          </div>

          <Note title="In progress:">
            Two further references are being documented with named client contacts, to
            take the library to five. Three is the federal minimum; five is what makes
            a source-selection board comfortable.
          </Note>
        </Container>
      </Section>

      <CtaBand
        title="Need references for a specific scope?"
        body="Tell us the requirement and the evaluation criteria. We will send the references that actually match it, with contacts where the client has agreed — rather than the same three for every bid."
        primary={{ label: "Request references", href: "/contact" }}
        secondary={{ label: "Capability statement", href: "/government/capability-statement" }}
      />
    </Layout>
  );
}
