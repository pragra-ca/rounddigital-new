import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import { Container, Section, Panel, Status, Note, CtaBand } from "@/components/system/ui";
import { FigHead, FigHero, Steps4, MediaSplit, Portrait, Marquee } from "@/components/system/figma";
import { STOCK } from "@/data/stock";
import { FACTS } from "@/content/facts.mjs";
import { CREDENTIALS } from "@/content/credentials.mjs";

/* About — layout from the "About Us" frame of the Figma reference (node 3:687).

   Corrected against the registries: the design placed headquarters in
   Pittsburgh and a delivery hub in Chandigarh, named a chief executive, and
   listed six credentials as held. facts.mjs records Cheyenne WY as a
   *registered* address with delivery in Mississauga and Noida; leadership.jsx
   records that named officer biographies are pending documentary confirmation;
   and every entry in credentials.mjs is still "planned". */

const MISSION = [
  {
    title: "Our Mission",
    body: "To give public-sector and commercial buyers secure, well-documented software and technical teams that meet modern delivery expectations — and to state plainly what we have and have not earned along the way.",
  },
  {
    title: "Our Vision",
    body: "To be the supplier a careful evaluator can shortlist without a leap of faith: verifiable references, a published certification roadmap, and delivery capacity across two continents.",
  },
];

/* Milestones that correspond to entries in facts.mjs and past-performance.mjs.
   The Figma's 2019 "SBA certified" and 2021 "first prime award" milestones are
   omitted because neither happened. */
const JOURNEY = [
  { idx: "2017", title: "Founded", body: "Pragra founded in Mississauga, Ontario, delivering technical training." },
  { idx: "2019", title: "ShipCarte live", body: "Multi-carrier logistics platform enters continuous commercial operation." },
  { idx: "2023", title: "Perfectum.ai", body: "Multi-tenant learning platform built and operated in-house." },
  { idx: "2024", title: "Forbes recognition", body: "Named to Forbes Canada's Best Startup Employers 2024." },
  { idx: "2026", title: "Round Digital", body: "Successor to Pragra LLC, consolidating five delivery practices." },
];

const VALUES = [
  {
    title: "Integrity",
    body: "Delivery is documented. We do not round numbers up, and we do not describe a planned certification as a held one.",
  },
  {
    title: "Transparency",
    body: "Our certification roadmap, our locations and our reference list are published with their status attached.",
  },
  {
    title: "Delivery Excellence",
    body: "One review, security and release practice across both delivery centres.",
  },
  {
    title: "Compliant Innovation",
    body: "We implement AI under governance we can evidence, not as an unmanaged experiment.",
  },
];

const TECH = [
  "Amazon Web Services",
  "Microsoft Azure",
  "Google Cloud Platform",
  "Kubernetes",
  "Red Hat Enterprise Linux",
];

const STATUS_LABEL = { delivery: "Delivery centre", registered: "Registered address" };

export default function About() {
  return (
    <Layout>
      <Seo
        title="About — Woman-Owned Since 2017"
        description="Founded in 2017, Round Digital is the successor to Pragra LLC: a woman-owned technology and workforce firm with delivery centres in Canada and India."
      />

      <FigHero
        eyebrow="Our foundation"
        title="Woman-Owned and Operated — Stated Precisely."
        lead="Founded in 2017 and woman-owned since, Round Digital is the successor to Pragra LLC. We build software, run AI enablement, staff delivery teams and train people — and we publish what we have earned separately from what we are still working toward."
      />

      <Section className="rds-band">
        <Container>
          <div className="rds-grid rds-cols-2">
            {MISSION.map((m) => (
              <Panel key={m.title} lg fill>
                <h2 className="rds-h3" style={{ marginBottom: "var(--s4)" }}>
                  {m.title}
                </h2>
                <p className="rds-prose">{m.body}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      {/* --- Leadership -------------------------------------------------------
          The Figma named a chief executive and placed a portrait here. No
          officer name is confirmed on file, so the section describes the role
          and the accountability model instead of asserting an identity. */}
      <Section>
        <Container>
          <div className="rds-media rds-media-wide rds-media-flip">
            <div>
              <FigHead
                label="Leadership"
                title="A named delivery lead on every engagement."
                body="The firm is led by its founder, whose background is in audit and quality assurance — which is why the certification roadmap is sequenced the way it is. Every engagement also carries a named delivery lead, and the escalation path reaches a decision-maker in one step."
              />
              <Note title="For evaluators:">
                The founder&rsquo;s name and full biography are pending documentary confirmation and
                will be published here once confirmed, not before.
              </Note>
            </div>
            <div className="rds-media-fig" style={{ border: 0, background: "none", overflow: "visible" }}>
              <Portrait
                src="/images/team/founder.jpg"
                alt="Portrait of the founder of Round Digital."
                role="Founder & principal"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <FigHead label="Our journey" title="Milestones of Execution" />
          <Steps4 items={JOURNEY} />
        </Container>
      </Section>

      {/* --- Credentials ------------------------------------------------------
          Rendered from credentials.mjs so the page cannot drift from the
          registry. Nothing here is held today. */}
      <Section>
        <Container>
          <FigHead
            label="Credentials"
            title="The Certification Roadmap, With Dates"
            body="We hold none of these today. Each is listed with the quarter we are targeting, and the status flips here only when the award is on file."
          />
          <div className="rds-grid rds-cols-3">
            {CREDENTIALS.map((c) => (
              <Panel key={c.id} className="rds-certcard">
                <span>
                  <Status state={c.status}>
                    {c.status === "planned" ? `Planned · ${c.targetQuarter}` : c.status}
                  </Status>
                </span>
                <h3>{c.name}</h3>
                <p>{c.body}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      {/* --- Presence ---------------------------------------------------------- */}
      <Section className="rds-band">
        <Container>
          <MediaSplit image={STOCK.networkMap} wide>
            <FigHead
              label="Where we are"
              title="Two Delivery Centres. One Registered Address."
              body="Work is performed in Mississauga and Noida. Cheyenne is our registered address — a registered agent is not a place of business, and we do not present it as one."
            />
            <div className="rds-grid" style={{ gap: "var(--s4)" }}>
              {FACTS.locations.map((loc) => (
                <div key={`${loc.city}-${loc.country}`}>
                  <h3 className="rds-h4" style={{ marginBottom: 2 }}>
                    {loc.city}, {loc.region} <span className="rds-code">{loc.country}</span>
                  </h3>
                  <p className="rds-meta">{STATUS_LABEL[loc.status] || loc.status}</p>
                </div>
              ))}
            </div>
          </MediaSplit>
        </Container>
      </Section>

      <Section>
        <Container>
          <FigHead label="Operational culture" title="Values Stated and Verified" />
          <div className="rds-grid rds-cols-4">
            {VALUES.map((v) => (
              <div key={v.title}>
                <h3 className="rds-h4" style={{ marginBottom: "var(--s2)" }}>
                  {v.title}
                </h3>
                <p className="rds-meta" style={{ fontSize: 15 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Named as platforms we build on — a capability, not a partner status. */}
      <Marquee label="Platforms we build on" items={TECH} />

      <CtaBand
        title="Ready to talk about your requirement?"
        body="Tell us the scope and the constraints. You will get a direct answer about whether we are the right supplier, and what we can evidence today."
        primary={{ label: "Get in touch", href: "/contact" }}
        accent
      />
    </Layout>
  );
}
