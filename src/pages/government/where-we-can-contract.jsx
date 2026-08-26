import { useState } from "react";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import {
  Breadcrumb,
  Container,
  CtaBand,
  Grid,
  Note,
  Panel,
  Section,
  Status,
} from "@/components/system/ui";
import {
  JURISDICTIONS,
  TIER_LABEL,
  TIER_STATE,
  getJurisdiction,
} from "@/data/procurement";

/* Where we can contract.
 *
 * The page a buyer outside Canada needs before anything else: can this supplier
 * legally be the contracting party here, where would our data live, and who
 * carries the liability. Three of the seven jurisdictions answer no. Publishing
 * those is the point — a supplier page that never declines anything tells an
 * evaluator nothing, and a gap discovered mid-evaluation costs far more than
 * never being shortlisted at all.
 *
 * Every value comes from JURISDICTIONS in src/data/procurement.js, the same
 * source the homepage band reads, so the two can never drift apart.
 */

// No jurisdiction sits at "none" any more: every market outside our three
// direct ones is now partner-led, several with incorporation in progress.
// Rendering the empty third column would have shown a heading with no rows.
const TIER_ORDER = ["direct", "partner"];

const TIER_BLURB = {
  direct: "We are the contracting party, and we deliver.",
  partner: "We deliver. A named partner holds the contract.",
};

function TierSummary() {
  return (
    <Grid cols={2}>
      {TIER_ORDER.map((tier) => {
        const inTier = JURISDICTIONS.filter((j) => j.tier === tier);
        return (
          <Panel key={tier} fill>
            <Status state={TIER_STATE[tier]}>{TIER_LABEL[tier]}</Status>
            <p style={{ marginTop: "var(--s3)", color: "var(--fg-2)", fontSize: 15 }}>
              {TIER_BLURB[tier]}
            </p>
            <p style={{ marginTop: "var(--s3)", color: "var(--fg)", fontSize: 15 }}>
              {inTier.map((j) => j.name).join(" · ")}
            </p>
          </Panel>
        );
      })}
    </Grid>
  );
}

export default function WhereWeCanContract() {
  const [selected, setSelected] = useState(JURISDICTIONS[0].id);
  const active = getJurisdiction(selected) ?? JURISDICTIONS[0];

  return (
    <Layout>
      <Seo
        title="Where We Can Contract, by Jurisdiction"
        description="We can contract directly in the United States, Canada and India, deliver through a prime in the UK and EU, and have no presence in Australia or the Gulf."
        keywords="global procurement jurisdictions, contracting entity by country, data residency vendor, teaming partner United Kingdom, supplier registration by jurisdiction"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Government", href: "/government" },
              { label: "Where we can contract" },
            ]}
          />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "16ch" }}>
            Where we can contract, and where we cannot yet.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            One page, per jurisdiction: the contracting entity, the registrations that exist
            today, where your data would live, and the honest gap. Nothing here is
            aspirational — a market we cannot serve says so.
          </p>
        </Container>
      </Section>

      <Section tight>
        <Container>
          <Note title="Why three of these say no.">
            Leaving a market off this page would let you assume coverage we do not have, which
            is the same misrepresentation as claiming it outright. A jurisdiction we cannot
            serve gets an entry stating that plainly, so you can rule us out in seconds rather
            than during evaluation.
          </Note>
        </Container>
      </Section>

      <Section tight>
        <Container>
          <TierSummary />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rds-jurgrid">
            <div className="rds-jurlist" role="group" aria-label="Choose a jurisdiction">
              {JURISDICTIONS.map((j) => (
                <button
                  key={j.id}
                  type="button"
                  className="rds-jurlist-item"
                  aria-pressed={j.id === selected}
                  onClick={() => setSelected(j.id)}
                >
                  <span className="rds-jurlist-name">{j.name}</span>
                  <span className="rds-jurlist-scope rds-mono">{j.scope}</span>
                </button>
              ))}
            </div>

            {/* Polite: the panel changes in response to a deliberate choice. */}
            <Panel as="article" aria-live="polite">
              <div className="rds-statuslist-head" style={{ marginBottom: "var(--s3)" }}>
                <h2 className="rds-h3">{active.name}</h2>
                <Status state={TIER_STATE[active.tier]}>{TIER_LABEL[active.tier]}</Status>
              </div>

              <p
                style={{
                  color: "var(--fg-2)",
                  fontSize: 15,
                  lineHeight: 1.55,
                  marginBottom: "var(--s5)",
                  maxWidth: "62ch",
                }}
              >
                {active.summary}
              </p>

              <dl className="rds-spec">
                <dt>Contracting entity</dt>
                <dd style={{ fontSize: 15 }}>{active.entity}</dd>
                <dt>Registrations held</dt>
                <dd style={{ fontSize: 15 }}>{active.registrations}</dd>
                <dt>Delivery footprint</dt>
                <dd style={{ fontSize: 15 }}>{active.delivery}</dd>
                <dt>Data residency</dt>
                <dd style={{ fontSize: 15 }}>{active.residency}</dd>
                <dt>Contract currency</dt>
                <dd style={{ fontSize: 15 }}>{active.currency}</dd>
                <dt>Coverage hours</dt>
                <dd style={{ fontSize: 15 }}>{active.hours}</dd>
              </dl>

              <div className="rds-jurgap">
                <span className="rds-eyebrow" style={{ marginBottom: "var(--s2)" }}>
                  The honest gap
                </span>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--fg)" }}>{active.gap}</p>
                <p className="rds-jurnext rds-mono">{active.next}</p>
              </div>
            </Panel>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Tell us which jurisdiction you are buying from."
        body="If we cannot be your contracting party there, we will say so in the first reply and tell you what kind of supplier can. That answer costs you one email instead of one evaluation cycle."
        primary={{ label: "Submit an RFP", href: "/rfp" }}
        secondary={{
          label: "Read the capability statement",
          href: "/government/capability-statement",
        }}
        accent
      />
    </Layout>
  );
}
