import Link from "next/link";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import {
  Arrow,
  Breadcrumb,
  Button,
  Container,
  CtaBand,
  Eyebrow,
  Faq,
  Note,
  Panel,
  Section,
  SectionHead,
  Status,
} from "@/components/system/ui";
import { CREDENTIALS } from "@/content/credentials.mjs";
import { CLOSED_PROGRAMS } from "@/data/roadmap";

const DIVERSITY_CERTS = CREDENTIALS.filter((c) => c.id === "wbe-canada" || c.id === "weconnect");

const WHAT_IT_MEANS = [
  {
    t: "Ownership",
    b: "Women hold the majority of the equity. Not a nominal share, not a holding structure that resolves elsewhere — the controlling interest.",
  },
  {
    t: "Control",
    b: "The same people hold the senior operating position, board control, and signing authority over bank accounts, contracts and bids. Ownership without control is the thing certifiers actually reject.",
  },
  {
    t: "Expertise",
    b: "Our founder's background is twenty years in IT audit and quality assurance — the qualification to run this firm independently, which is also a formal criterion in every certification we are pursuing.",
  },
];

const BUYER_VALUE = [
  {
    t: "Corporate supplier diversity",
    b: "Large corporates run diverse-supplier spend programmes with real targets. Work placed with us is reportable against those targets once certification is in hand, and many programmes accept a supplier into the pipeline before certification completes.",
  },
  {
    t: "Canadian federal procurement",
    b: "Public Services and Procurement Canada has committed to increasing procurement from under-represented suppliers. This is the market where our status converts soonest, which is why WBE Canada sits first on the roadmap.",
  },
  {
    t: "Prime subcontracting plans",
    b: "Primes carry small-business subcontracting goals. We qualify on size in all five of our codes, and our ownership adds a diversity dimension to your own supplier reporting.",
  },
  {
    t: "Asia-Pacific corporate programmes",
    b: "WEConnect International certification is recognised by multinational supplier-diversity programmes across the region — one application covering a third market.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Are you a certified women-owned business?",
    a: "No, not yet, and we will not use the word until a certificate exists. WBE Canada and WEConnect International are the two we are pursuing, with target dates published on this page and on the certification roadmap.",
  },
  {
    q: "Can we count spend with you toward our diversity targets now?",
    a: "That depends on your programme's rules. Many accept self-declared diverse suppliers into the pipeline and require certification before spend is formally reported. Tell us which programme you run and we will tell you honestly where we currently sit against it.",
  },
  {
    q: "Are you a WBENC-certified supplier?",
    a: "No. WBENC requires US citizenship or lawful permanent residency of the qualifying owner. Until that status is confirmed we treat WBENC as conditional and do not pursue it, rather than applying and being denied on the record.",
  },
  {
    q: "Why not just say 'women-owned' and leave it there?",
    a: "Because a procurement team will check, and a supplier whose first claim does not survive checking has spent its credibility on the easiest possible question. The precise version is more useful to you and safer for us.",
  },
];

export default function WomenOwned() {
  return (
    <Layout>
      <Seo
        title="Women-Owned Business — Ownership"
        description="Majority equity, senior operating control and signing authority held by women. Not yet certified — WBE Canada and WEConnect are on the roadmap with dates."
        keywords="women owned technology company, women owned IT services Canada, supplier diversity technology partner, WBE Canada, diverse supplier IT"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Women-owned business" },
            ]}
          />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "16ch" }}>
            Women-owned, women-run, and precise about what that qualifies us for.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            Both halves of that sentence matter. The first is a fact about who owns
            and runs this company. The second is a fact about paperwork we have not
            finished — and pretending otherwise would be the fastest way to lose the
            trust the first half earns.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s3)", marginTop: "var(--s7)" }}>
            <Button href="/rfp" variant="accent">
              Talk to us about supplier diversity <Arrow />
            </Button>
            <Button href="/government/certifications" variant="ghost">
              Certification roadmap
            </Button>
          </div>
        </Container>
      </Section>

      {/* 01 — what it means */}
      <Section className="rds-band">
        <Container>
          <SectionHead index="01" label="What the claim actually means" />
          <div className="rds-splithead" style={{ marginBottom: "var(--s7)" }}>
            <h2 className="rds-h2">Three tests, not one.</h2>
            <p className="rds-prose">
              Certifying bodies do not assess a claim; they assess ownership, control
              and independence against documents, and then interview. These are the
              tests we hold ourselves to whether or not a certificate has arrived.
            </p>
          </div>
          <div className="rds-grid rds-cols-3">
            {WHAT_IT_MEANS.map((x) => (
              <Panel key={x.t}>
                <h3 className="rds-h3" style={{ marginBottom: "var(--s3)" }}>{x.t}</h3>
                <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{x.b}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      {/* 02 — certification status */}
      <Section>
        <Container>
          <SectionHead index="02" label="Certification status" />
          <div className="rds-deliv">
            <div>
              <h2 className="rds-h2" style={{ marginBottom: "var(--s4)" }}>
                In progress, with dates.
              </h2>
              <p className="rds-prose">
                Certification is a documentary and interview process, not a
                declaration. Ours is underway. Until it completes, this site carries
                no diversity certification badge and no use of the word
                &ldquo;certified&rdquo; — a rule enforced by an automated check that
                fails our build if the language appears anywhere in the codebase.
              </p>
              <p style={{ marginTop: "var(--s5)" }}>
                <Link href="/government/certifications" className="rds-arrow rds-link">
                  Full roadmap with eligibility and dependencies <Arrow />
                </Link>
              </p>
            </div>

            <ul className="rds-statuslist">
              {DIVERSITY_CERTS.map((c) => (
                <li key={c.id}>
                  <div className="rds-statuslist-head">
                    <h3 className="rds-h4">{c.name}</h3>
                    <Status state="planned">Target {c.targetQuarter}</Status>
                  </div>
                  <p className="rds-meta" style={{ marginBottom: 6 }}>{c.jurisdiction}</p>
                  <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{c.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* 03 — buyer value */}
      <Section className="rds-band">
        <Container>
          <SectionHead index="03" label="What it unlocks for you" />
          <h2 className="rds-h2" style={{ maxWidth: "22ch", marginBottom: "var(--s7)" }}>
            Where our ownership is mechanically useful.
          </h2>
          <div className="rds-grid rds-cols-2">
            {BUYER_VALUE.map((x) => (
              <Panel key={x.t} fill>
                <h3 className="rds-h4" style={{ marginBottom: "var(--s2)" }}>{x.t}</h3>
                <p style={{ color: "var(--fg-2)", fontSize: 15 }}>{x.b}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      {/* 04 — closed */}
      <Section>
        <Container>
          <SectionHead index="04" label="Where it does not apply" />
          <div className="rds-splithead" style={{ marginBottom: "var(--s6)" }}>
            <h2 className="rds-h2">US set-asides are closed to us.</h2>
            <p className="rds-prose">
              Being women-owned does not make us eligible for the United States
              socioeconomic set-aside programmes. Every one of them requires
              US-citizen ownership. We compete in the US as a small business, which
              is the largest set-aside category and carries no citizenship test.
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

          <Note title="Why we publish this.">
            A diversity claim that quietly implies set-aside eligibility it does not
            have is the single most common way a small supplier damages its own
            credibility with a contracting officer.
          </Note>
        </Container>
      </Section>

      <Section className="rds-band">
        <Container style={{ maxWidth: 840 }}>
          <SectionHead index="05" label="Questions" />
          <Faq items={FAQ_ITEMS} idPrefix="wo" />
        </Container>
      </Section>

      <CtaBand
        title="Run a supplier diversity programme?"
        body="Tell us which one and what it requires. We will tell you exactly where we stand against its criteria today, and when we expect to meet the parts we do not yet meet."
        primary={{ label: "Start a conversation", href: "/rfp" }}
        secondary={{ label: "Meet the leadership", href: "/about/leadership" }}
        accent
      />
    </Layout>
  );
}
