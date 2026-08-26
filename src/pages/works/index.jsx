import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import { Container, Section, Panel, Note, CtaBand } from "@/components/system/ui";
import { FigHead, FigHero, MediaSplit, Metrics, NumRow, CaseHero } from "@/components/system/figma";
import { STOCK } from "@/data/stock";
import { PAST_PERFORMANCE } from "@/content/past-performance.mjs";

/* Case Studies — layout from the "Case Studies" frame of the Figma reference
   (node 3:1466).

   The Figma's content was almost entirely invented: a grid of four engagements
   for clients including a "Federal Health Agency" and a "Defense Prime
   Contractor", a metrics band reading 47 government projects / $340M+ contract
   value / 12 federal agencies served, and a trust bar of Department of Defense,
   Department of Energy and FAA logos. There are three real references and they
   are all commercial. This page renders those three, from
   past-performance.mjs, in the evaluator order the registry stores them in:
   challenge, approach, outcome, period. */

const [SHIPCARTE, PERFECTUM, PRAGRA] = PAST_PERFORMANCE;

/* Counts describing the reference set itself — each one checkable on this page,
   which is the only kind of number that belongs in this band. */
const METRICS = [
  { value: String(PAST_PERFORMANCE.length), label: "Referenceable engagements" },
  { value: "2017", label: "Earliest still running" },
  { value: "100+", label: "Projects delivered" },
  { value: "0", label: "Government awards to date" },
];

function Study({ entry, image, flip }) {
  return (
    <MediaSplit image={image} wide flip={flip}>
      <FigHead label={entry.relationship} title={entry.client} />
      <NumRow
        items={[
          { title: "The Challenge", body: entry.challenge },
          { title: "The Approach", body: entry.approach },
          { title: "The Result", body: entry.outcome },
        ]}
      />
      <p className="rds-eyebrow" style={{ marginTop: "var(--s5)" }}>
        {entry.period}
      </p>
    </MediaSplit>
  );
}

export default function Works() {

  return (
    <Layout>
      <Seo
        title="Case Studies & Past Performance"
        description="Three referenceable engagements — ShipCarte, Perfectum.ai and Pragra — each stated as challenge, approach and outcome, anchored to a citable source."
      />

      <FigHero
        eyebrow="Delivery record"
        title={
          <>
            The Past Performance Record,
            <br />
            Stated the Way an Evaluator Reads It.
          </>
        }
        lead="Three references, in the order an evaluator reads them: challenge, approach, outcome, period. Each is anchored to a source you can check without asking us for it."
      />

      <Section tight className="rds-band">
        <Container>
          <Note title="Scope of this page:">
            All three references are commercial. Round Digital has not yet delivered a government
            contract, so no public-sector engagement is listed here or implied anywhere on this
            site.
          </Note>
        </Container>
      </Section>

      {/* --- Featured ---------------------------------------------------------- */}
      <Section>
        <Container>
          <FigHead
            label="Featured"
            title="ShipCarte — Multi-Carrier Logistics Platform"
            body={SHIPCARTE.challenge}
          />
          <CaseHero
            image={STOCK.logistics}
            tag={SHIPCARTE.period}
            title="In continuous commercial operation since 2019"
            body={SHIPCARTE.approach}
          />
        </Container>
      </Section>

      <Metrics items={METRICS} band={false} />

      {/* --- The other two ------------------------------------------------------- */}
      <Section className="rds-band">
        <Container>
          <Study entry={PERFECTUM} image={STOCK.cloudRacks} />
        </Container>
      </Section>

      <Section>
        <Container>
          <Study entry={PRAGRA} image={STOCK.team} flip />
        </Container>
      </Section>

      <CtaBand
        title="Want the detail behind these?"
        body="We will walk you through architecture, team composition and what we would do differently — including the parts that did not go to plan."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "Past performance detail", href: "/government/past-performance" }}
        accent
      />
    </Layout>
  );
}
