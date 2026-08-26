import Image from "next/image";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import { Button, Container, Section, Status, TableWrap } from "@/components/system/ui";
import { FACTS } from "@/content/facts.mjs";
import { IDENTIFIERS, SECURITY_POSTURE, SIZE_STATUS } from "@/data/procurement";
import { PILLARS } from "@/content/naics.mjs";
import { PAST_PERFORMANCE } from "@/content/past-performance.mjs";

/* The capability statement is a document that happens to be a web page.
   It is generated from the same modules as the rest of the site, so the PDF a
   contracting officer prints can never drift from what the site says.

   Print behaviour lives in the @media print block of src/styles/system.css:
   `.rds > header` and `.rds > footer` are hidden by direct-child selector, so
   the site chrome disappears while this page's own <header> survives. */
export default function CapabilityStatement() {
  const publicIdentifiers = IDENTIFIERS.filter((f) => !f.pending);
  const pendingIdentifiers = IDENTIFIERS.filter((f) => f.pending);

  return (
    <Layout>
      <Seo
        title="Capability Statement for Procurement"
        description="Identity, size status, core competencies by NAICS code, differentiators, past performance and security posture — formatted to print to two pages."
        keywords="capability statement IT services small business, government capability statement"
      />

      <Section className="rds-capability">
        <Container style={{ maxWidth: 900 }}>
          {/* Actions — removed from the printed output */}
          <div className="rds-noprint" style={{ display: "flex", flexWrap: "wrap", gap: "var(--s3)", marginBottom: "var(--s7)" }}>
            <Button onClick={() => window.print()}>Print or save as PDF</Button>
            <Button href="/rfp" variant="accent">
              Submit a solicitation
            </Button>
            <Button href="/government" variant="ghost">
              Back to government hub
            </Button>
          </div>

          {/* Document header */}
          <header className="rds-cap-head">
            <div>
              <Image
                src="/rd/logo-fd-t.png"
                alt="Round Digital"
                width={46}
                height={40}
                style={{ width: "auto", height: 40, marginBottom: "var(--s4)" }}
              />
              <h1 className="rds-h2" style={{ marginBottom: 6 }}>
                Capability Statement
              </h1>
              <p className="rds-meta">
                {FACTS.legalName} · Women-owned technology and workforce services
              </p>
            </div>
            <div className="rds-cap-contact">
              <p className="rds-eyebrow" style={{ marginBottom: 6 }}>Contact</p>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                <a href="mailto:contracts@round.digital" className="rds-link">
                  contracts@round.digital
                </a>
                <br />
                round.digital
                <br />
                {FACTS.locations
                  .filter((l) => l.status === "delivery")
                  .map((l) => `${l.city}, ${l.region}`)
                  .join(" · ")}
              </p>
            </div>
          </header>

          {/* 1 — Identity */}
          <section className="rds-cap-sec">
            <h2 className="rds-h4">1 · Identity</h2>
            <dl className="rds-spec">
              {publicIdentifiers.map((f) => (
                <div key={f.label} style={{ display: "contents" }}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
              <dt>Delivery locations</dt>
              <dd>
                {FACTS.locations
                  .filter((l) => l.status === "delivery")
                  .map((l) => `${l.city}, ${l.region}, ${l.country}`)
                  .join(" · ")}
              </dd>
              <dt>Registered office</dt>
              <dd>
                {FACTS.locations
                  .filter((l) => l.status === "registered")
                  .map((l) => `${l.city}, ${l.region}, ${l.country}`)
                  .join(" · ")}
              </dd>
            </dl>

            {pendingIdentifiers.length ? (
              <p className="rds-meta" style={{ marginTop: "var(--s4)" }}>
                <strong style={{ color: "var(--fg)" }}>Pending confirmation:</strong>{" "}
                {pendingIdentifiers.map((f) => f.label).join(" · ")}. These are supplied
                on request and will be published here once verified against the source
                registration.
              </p>
            ) : null}
          </section>

          {/* 2 — Eligibility */}
          <section className="rds-cap-sec">
            <h2 className="rds-h4">2 · Eligibility &amp; status</h2>
            <dl className="rds-spec">
              <dt>Size status</dt>
              <dd>{SIZE_STATUS.headline}.</dd>
              <dt>Ownership</dt>
              <dd>
                Women-owned and operated. Not certified — WBE Canada and WEConnect
                International are on the roadmap with target dates.
              </dd>
              <dt>Certifications held</dt>
              <dd>
                <Status state="planned">None held</Status>{" "}
                <span style={{ fontSize: 14, color: "var(--fg-3)" }}>
                  Full roadmap published at round.digital/government/certifications
                </span>
              </dd>
              <dt>Not eligible for</dt>
              <dd style={{ fontSize: 14 }}>{SIZE_STATUS.notEligible.join(" · ")} — all require US-citizen ownership.</dd>
            </dl>
          </section>

          {/* 3 — Core competencies */}
          <section className="rds-cap-sec">
            <h2 className="rds-h4">3 · Core competencies</h2>
            {/* Wrapped so the code columns scroll inside their own region at
                narrow widths instead of pushing the page sideways — this table
                is 405px at its minimum and was overflowing a 320px viewport. */}
            <TableWrap label="Core competencies with NAICS and PSC codes">
            <table className="rds-table rds-cap-table">
              <thead>
                <tr>
                  <th scope="col">Competency</th>
                  <th scope="col">NAICS</th>
                  <th scope="col">Classification</th>
                  <th scope="col">PSC</th>
                </tr>
              </thead>
              <tbody>
                {PILLARS.map((p) => (
                  <tr key={p.id}>
                    <th scope="row" style={{ fontWeight: 600 }}>{p.name}</th>
                    <td className="rds-mono">{p.primaryNaics.code}</td>
                    <td>{p.primaryNaics.label}</td>
                    <td className="rds-mono">{p.psc.join(" ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </TableWrap>
          </section>

          {/* 4 — Differentiators */}
          <section className="rds-cap-sec">
            <h2 className="rds-h4">4 · Differentiators</h2>
            <ul className="rds-ticklist">
              <li>
                <strong style={{ color: "var(--fg)" }}>One supplier closes the delivery loop.</strong>{" "}
                We build the system, staff it, train the operators and measure the
                outcome. Most suppliers sell one of those four.
              </li>
              <li>
                <strong style={{ color: "var(--fg)" }}>AI assurance, not AI demos.</strong>{" "}
                Governance, evaluation evidence and control mapping to NIST AI RMF and
                ISO/IEC 42001 — the half of an AI programme that gets it into production.
              </li>
              <li>
                <strong style={{ color: "var(--fg)" }}>Research capability inside a technology firm.</strong>{" "}
                NAICS 541910 survey and evaluation work, less crowded than 541512 and
                backed by statutory evidence-building requirements.
              </li>
              <li>
                <strong style={{ color: "var(--fg)" }}>Training heritage since 2017.</strong>{" "}
                Named to Forbes Canada&apos;s Best Startup Employers 2024, a list that
                accepts no payment for placement.
              </li>
              <li>
                <strong style={{ color: "var(--fg)" }}>We publish what we do not hold.</strong>{" "}
                Certifications, vehicles and performance constraints are stated
                explicitly, so an evaluation does not have to discover them.
              </li>
            </ul>
          </section>

          {/* 5 — Past performance */}
          <section className="rds-cap-sec">
            <h2 className="rds-h4">5 · Past performance</h2>
            {PAST_PERFORMANCE.map((p) => (
              <div key={p.id} className="rds-cap-pp">
                <p style={{ marginBottom: 3 }}>
                  <strong style={{ color: "var(--fg)" }}>{p.client}</strong>{" "}
                  <span className="rds-mono" style={{ fontSize: 13, color: "var(--fg-3)" }}>
                    {p.period}
                  </span>
                </p>
                <p style={{ fontSize: 14, color: "var(--fg-2)" }}>{p.outcome}</p>
              </div>
            ))}
            <p className="rds-meta" style={{ marginTop: "var(--s3)" }}>
              Reference contacts supplied on request with client consent.
            </p>
          </section>

          {/* 6 — Posture */}
          <section className="rds-cap-sec">
            <h2 className="rds-h4">6 · Quality, security &amp; accessibility</h2>
            <dl className="rds-spec">
              {SECURITY_POSTURE.map((s) => (
                <div key={s.label} style={{ display: "contents" }}>
                  <dt>{s.label}</dt>
                  <dd style={{ fontSize: 14 }}>{s.body}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* 7 — How to buy */}
          <section className="rds-cap-sec">
            <h2 className="rds-h4">7 · How to contract with us</h2>
            <p style={{ fontSize: 15, color: "var(--fg-2)", marginBottom: "var(--s3)" }}>
              We hold no contract vehicle of our own. Available routes today:
              subcontracting under a prime&apos;s vehicle; open-market and simplified
              acquisition awards; state, municipal and provincial procurement; and
              commercial contracting including corporate supplier-diversity programmes.
            </p>
            <p style={{ fontSize: 15, color: "var(--fg-2)" }}>
              Constraints: delivery is performed from Canada and India. We cannot
              independently bid requirements needing US-performed work, US-persons
              access, controlled unclassified information handling, or a facility
              clearance. We team on those.
            </p>
          </section>

          <footer className="rds-cap-foot">
            <p className="rds-meta">
              Every factual claim in this statement is sourced at
              round.digital — {FACTS.verified.length} externally corroborated facts
              with links. Prepared by {FACTS.legalName}, successor to {FACTS.predecessor}.
            </p>
          </footer>
        </Container>
      </Section>
    </Layout>
  );
}
