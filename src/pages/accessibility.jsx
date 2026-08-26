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
  TableWrap,
} from "@/components/system/ui";

// Self-assessed conformance. Deliberately NOT described as audited or
// certified — no third party has assessed this site. When one has, this page
// states who and when.
const LAST_REVIEWED = "August 2026";

const MEASURES = [
  {
    area: "Colour and contrast",
    detail:
      "Every foreground/background pair in the design system was measured before it was written into the stylesheet. Body and heading text meets or exceeds 4.5:1; interface borders and focus indicators meet 3:1. Both light and dark themes were measured independently rather than one being derived from the other.",
  },
  {
    area: "Keyboard operation",
    detail:
      "All interactive controls are reachable and operable by keyboard. Navigation menus use a disclosure pattern with real buttons, aria-expanded and Escape-to-close, rather than hover-only reveals. Scrollable data tables carry a focusable region so they can be scrolled without a pointer.",
  },
  {
    area: "Focus visibility",
    detail:
      "A 2px focus outline with offset is applied to every focusable element and is never removed. Focus is moved deliberately after form submission so keyboard users are taken to the outcome.",
  },
  {
    area: "Semantics and structure",
    detail:
      "One main landmark per page, a skip link to it, a single h1, and headings in order. Data tables use th with scope. Breadcrumbs use an ordered list with aria-current.",
  },
  {
    area: "Forms",
    detail:
      "Every control has a persistent visible label. Errors are announced through a role=alert summary, associated to their field with aria-describedby, marked with aria-invalid, and carry a text glyph so the state is never signalled by colour alone.",
  },
  {
    area: "Motion",
    detail:
      "Motion is restrained by design — no parallax, no autoplaying carousels, no scroll-jacking. prefers-reduced-motion removes animation and transition duration site-wide.",
  },
  {
    area: "Content",
    detail:
      "Sentence-case headings rather than uppercase, which screen readers can misread as initialisms. Link text is meaningful out of context. Decorative images carry empty alt text.",
  },
  {
    area: "Zoom and reflow",
    detail:
      "Layouts use relative units and reflow to 320px without horizontal scrolling. Wide tables scroll within their own region rather than forcing the page to scroll.",
  },
];

const KNOWN = [
  {
    item: "Third-party assessment",
    status: "planned",
    detail:
      "No independent accessibility audit has been carried out. Until one has, everything on this page is a self-assessment and is described as such.",
  },
  {
    item: "Assistive technology testing",
    status: "progress",
    detail:
      "Automated checks and keyboard testing are run against every page. Structured screen-reader testing across NVDA, JAWS and VoiceOver is being formalised rather than done ad hoc.",
  },
  {
    item: "Legacy content pages",
    status: "progress",
    detail:
      "A small number of older article and listing pages predate this design system. They are being migrated; until then they may not meet the standard described above.",
  },
];

export default function Accessibility() {
  return (
    <Layout>
      <Seo
        title="Accessibility Statement"
        description="Round Digital's accessibility statement: target conformance with WCAG 2.2 Level AA, the specific measures taken, known gaps stated openly."
        keywords="accessibility statement, WCAG 2.2 AA, Section 508, EN 301 549, accessible website"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Accessibility" }]} />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "17ch" }}>
            This site is our first piece of evidence.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            We sell accessible delivery to public-sector buyers. It would be
            difficult to argue for that credibly on a site that did not meet the
            standard itself, so this one does — and where it does not yet, this page
            says so.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="01" label="Conformance" />
          <div className="rds-deliv">
            <div>
              <h2 className="rds-h2" style={{ marginBottom: "var(--s4)" }}>
                Target: WCAG 2.2, Level AA.
              </h2>
              <p className="rds-prose">
                We design and build to the Web Content Accessibility Guidelines 2.2 at
                Level AA, which is the level referenced by Section 508 in the United
                States, EN 301 549 in Europe, and the accessibility requirements
                applying to federally regulated organisations in Canada.
              </p>
              <p className="rds-prose" style={{ marginTop: "var(--s4)" }}>
                This is a <strong style={{ color: "var(--fg)" }}>self-assessment</strong>.
                No independent auditor has reviewed this site. We will name the assessor
                and the date here when one has.
              </p>
            </div>

            <Panel fill>
              <dl className="rds-spec">
                <dt>Standard</dt>
                <dd>WCAG 2.2 Level AA</dd>
                <dt>Also designed to</dt>
                <dd>Section 508 · EN 301 549</dd>
                <dt>Assessment</dt>
                <dd>
                  <Status state="progress">Self-assessed</Status>
                </dd>
                <dt>Last reviewed</dt>
                <dd className="rds-mono">{LAST_REVIEWED}</dd>
              </dl>
            </Panel>
          </div>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <SectionHead index="02" label="What we did" />
          <h2 className="rds-h2" style={{ maxWidth: "22ch", marginBottom: "var(--s7)" }}>
            Specific measures, not a policy statement.
          </h2>

          <TableWrap label="Accessibility measures by area">
            <table className="rds-table">
              <thead>
                <tr>
                  <th scope="col">Area</th>
                  <th scope="col">What was done</th>
                </tr>
              </thead>
              <tbody>
                {MEASURES.map((m) => (
                  <tr key={m.area}>
                    <th scope="row" style={{ fontWeight: 600, minWidth: 170 }}>
                      {m.area}
                    </th>
                    <td>{m.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrap>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead index="03" label="Known gaps" />
          <div className="rds-splithead" style={{ marginBottom: "var(--s6)" }}>
            <h2 className="rds-h2">Where we are not there yet.</h2>
            <p className="rds-prose">
              An accessibility statement that lists only successes is a marketing
              document. These are the gaps we know about, which is also the list we
              are working through.
            </p>
          </div>

          <ul className="rds-statuslist">
            {KNOWN.map((k) => (
              <li key={k.item}>
                <div className="rds-statuslist-head">
                  <h3 className="rds-h4">{k.item}</h3>
                  <Status state={k.status}>
                    {k.status === "planned" ? "Not started" : "In progress"}
                  </Status>
                </div>
                <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{k.detail}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container>
          <SectionHead index="04" label="Report a barrier" />
          <div className="rds-splithead">
            <h2 className="rds-h2">Tell us and we will fix it.</h2>
            <div className="rds-prose">
              <p>
                If any part of this site prevented you from doing something, we want to
                know — including if you are not sure whether it is a bug or a barrier.
              </p>
              <p>
                Email{" "}
                <a href="mailto:accessibility@round.digital" className="rds-link">
                  accessibility@round.digital
                </a>{" "}
                with the page address and what happened. We aim to acknowledge within
                two business days and to tell you what we are going to do about it and
                when.
              </p>
              <p>
                If you need information from this site in another format, ask and we
                will provide it. That includes the{" "}
                <Link href="/government/capability-statement" className="rds-link">
                  capability statement
                </Link>{" "}
                in an alternative format for procurement purposes.
              </p>
            </div>
          </div>

          <Note title="For procurement teams:">
            If your solicitation requires an accessibility conformance report, request
            it through the intake form. We will supply a completed report reflecting the
            self-assessed position described on this page, and we will not represent it
            as third-party verified.
          </Note>
        </Container>
      </Section>

      <CtaBand
        title="Buying accessible digital services?"
        body="Accessibility is a scored evaluation factor on most public-sector digital work. We deliver to WCAG 2.2 AA and can evidence how — starting with this site."
        primary={{ label: "Talk to us", href: "/rfp" }}
        secondary={{ label: "IT services", href: "/services/it-services" }}
      />
    </Layout>
  );
}
