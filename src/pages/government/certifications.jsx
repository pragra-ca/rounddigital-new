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
import {
  CERT_ROADMAP,
  CLOSED_PROGRAMS,
  PARTNER_ROADMAP,
  PRIORITY_LABEL,
  TIERS,
} from "@/data/roadmap";
import { hasAnyEarned } from "@/content/credentials.mjs";

/* One roadmap entry, rendered as a specification block rather than a card.
   The buyer is checking dependencies and dates, not browsing. */
function RoadmapItem({ item }) {
  return (
    <Panel as="article">
      <div className="rds-statuslist-head" style={{ marginBottom: "var(--s2)" }}>
        <h3 className="rds-h3">{item.name}</h3>
        <Status state="planned">{PRIORITY_LABEL[item.priority]} priority</Status>
      </div>
      <p className="rds-meta" style={{ marginBottom: "var(--s4)" }}>{item.jurisdiction}</p>

      <p style={{ color: "var(--fg-2)", fontSize: 15, marginBottom: "var(--s5)" }}>{item.value}</p>

      <dl className="rds-spec">
        <dt>Eligibility</dt>
        <dd style={{ fontSize: 15 }}>{item.eligibility}</dd>
        <dt>Effort</dt>
        <dd style={{ fontSize: 15 }}>{item.effort}</dd>
        <dt>Timeline</dt>
        <dd style={{ fontSize: 15 }}>{item.timeline}</dd>
        <dt>Indicative cost</dt>
        <dd style={{ fontSize: 15 }}>{item.cost}</dd>
        <dt>Dependencies</dt>
        <dd style={{ fontSize: 15 }}>
          {item.dependencies.length ? (
            <ul>
              {item.dependencies.map((d) => (
                <li key={d} style={{ listStyle: "none" }}>
                  — {d}
                </li>
              ))}
            </ul>
          ) : (
            "None"
          )}
        </dd>
      </dl>
    </Panel>
  );
}

function TierGroup({ tier, items }) {
  const inTier = items.filter((i) => i.tier === tier.id);
  if (!inTier.length) return null;
  return (
    <div style={{ marginBottom: "var(--s8)" }}>
      {/* A real h2, styled as the eyebrow. It was a <span>, which left the
          first heading after the page h1 as the h3 inside each roadmap card —
          an h1 -> h3 skip, and a section a screen reader could not jump to. */}
      <div className="rds-sechead">
        <h2 className="rds-eyebrow rds-eyebrow-mark">{tier.name}</h2>
      </div>
      <p className="rds-meta" style={{ marginBottom: "var(--s5)" }}>{tier.note}</p>
      <div className="rds-grid rds-cols-2">
        {inTier.map((i) => (
          <RoadmapItem key={i.id} item={i} />
        ))}
      </div>
    </div>
  );
}

export default function Certifications() {
  // Defensive: if a credential is ever flipped to "earned" in the content
  // module, this page must stop claiming we hold none.
  const holdsSomething = hasAnyEarned();

  return (
    <Layout>
      <Seo
        title="Certifications & Partnership Roadmap"
        description="Round Digital holds no certifications today. This is the full roadmap — WBE Canada, WEConnect, ISO 9001, ISO 27001, ISO 42001, SOC 2."
        keywords="certification roadmap, supplier diversity roadmap, WBE Canada application, WEConnect International, AI management system standard, information security standard"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Government", href: "/government" },
              { label: "Certifications" },
            ]}
          />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "17ch" }}>
            {holdsSomething
              ? "What we hold, and what is next."
              : "The credential roadmap, with dates and dependencies."}
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            {holdsSomething
              ? "Certifications held, in progress and planned, with the evidence trail for each."
              : "Round Digital holds no ISO, SOC 2, CMMI or socioeconomic certification in any jurisdiction. Publishing the roadmap instead of a badge wall is the more useful answer for a buyer trying to assess risk."}
          </p>
        </Container>
      </Section>

      <Section tight>
        <Container>
          <Note title="Why this page exists.">
            Suppliers of our size are usually vague about credentials, which forces an
            evaluator to spend time finding out. Everything here is stated so you can
            score us accurately on the first read. Costs and timelines are planning
            figures to be confirmed with each certifying body — they are not quotes.
          </Note>
        </Container>
      </Section>

      {/* Certifications */}
      <Section>
        <Container>
          <SectionHead index="01" label="Certification roadmap" />
          {TIERS.map((t) => (
            <TierGroup key={t.id} tier={t} items={CERT_ROADMAP} />
          ))}
        </Container>
      </Section>

      {/* Not eligible */}
      <Section className="rds-band">
        <Container>
          <SectionHead index="02" label="Closed to us" />
          <div className="rds-splithead" style={{ marginBottom: "var(--s6)" }}>
            <h2 className="rds-h2">Programmes we are not eligible for.</h2>
            <p className="rds-prose">
              Listed so there is no ambiguity. We do not pursue these, we do not
              imply eligibility for them, and we would rather you know now than
              discover it during a responsibility determination.
            </p>
          </div>

          <ul className="rds-statuslist">
            {CLOSED_PROGRAMS.map((p) => (
              <li key={p.name}>
                <div className="rds-statuslist-head">
                  <h3 className="rds-h4">{p.name}</h3>
                  <Status state="planned">Not eligible</Status>
                </div>
                <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{p.reason}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Partnerships */}
      <Section>
        <Container>
          <SectionHead index="03" label="Partnership roadmap" />
          <div className="rds-splithead" style={{ marginBottom: "var(--s7)" }}>
            <h2 className="rds-h2">Partnerships, sequenced by what each one unlocks.</h2>
            <p className="rds-prose">
              Partnerships are listed as targets, not as relationships we hold. Where
              a partner tier already exists it will be published here with the tier
              named, once confirmed with the provider.
            </p>
          </div>
          {TIERS.map((t) => (
            <TierGroup key={t.id} tier={t} items={PARTNER_ROADMAP} />
          ))}
        </Container>
      </Section>

      <CtaBand
        title="Need a credential we do not yet hold?"
        body="Tell us which one and when you need it by. If it is on this roadmap we can tell you where it sits; if it is a hard gate for your solicitation, we would rather team with a prime who holds it than waste your evaluation time."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "Teaming & subcontracting", href: "/government/teaming" }}
      />
    </Layout>
  );
}
