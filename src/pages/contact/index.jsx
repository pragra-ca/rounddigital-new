import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import {
  Arrow,
  Breadcrumb,
  Button,
  Container,
  Eyebrow,
  Note,
  Panel,
  Section,
  SectionHead,
} from "@/components/system/ui";
import { FigHead, FigHero, MediaSplit } from "@/components/system/figma";
import { Faq } from "@/components/system/ui";
import { STOCK } from "@/data/stock";
import { FACTS } from "@/content/facts.mjs";

const ENGAGEMENT = [
  {
    title: "Talk to us",
    body: "A direct conversation about scope, constraints and whether we are the right supplier.",
    cta: "Use the form below",
    href: "#main",
  },
  {
    title: "Request the capability statement",
    body: "Everything a procurement team needs to assess us, including what we have not yet earned.",
    cta: "Capability statement",
    href: "/government/capability-statement",
  },
  {
    title: "Submit an RFP",
    body: "Formal solicitations route straight to the people who scope bids.",
    cta: "RFP intake",
    href: "/rfp",
  },
];

/* Answered from facts.mjs, credentials.mjs and past-performance.mjs. */
const FAQ_ITEMS = [
  {
    q: "Do you hold any certifications today?",
    a: "No. Every credential on our roadmap is still planned, and each is published with the quarter we are targeting — WBE Canada and WEConnect International in Q4 2026, ISO 9001 in Q1 2027, ISO/IEC 27001 in Q2 2027, ISO/IEC 42001 and SOC 2 Type II in Q3 2027. We will say so on the site the day one is awarded, and not before.",
  },
  {
    q: "Have you delivered a government contract?",
    a: "Not yet. We are ready to deliver and we bid, but we have no public-sector award to cite. Our three references — ShipCarte, Perfectum.ai and Pragra — are all commercial, and each is anchored to a source you can check.",
  },
  {
    q: "Are you a certified diverse supplier?",
    a: "Round Digital has been woman-owned since it was founded in 2017. The certifications that let a buyer claim supplier-diversity credit for that are on the roadmap, not in hand. United States set-aside programmes requiring 51% US-citizen ownership are closed to us.",
  },
  {
    q: "Where is the work actually performed?",
    a: "Mississauga, Ontario and Noida, Uttar Pradesh. Cheyenne, Wyoming is our registered address only — a registered agent is not a place of business and we do not present it as an office.",
  },
  {
    q: "What is the fastest way to evaluate us for a bid?",
    a: "Read the capability statement, then write to contracts@round.digital with the solicitation. You will get a direct answer on whether we can meet it, including when we cannot.",
  },
];

/* FAQPage schema, derived from FAQ_ITEMS above rather than written out a second
   time. Answer engines and rich results both read this, and Google requires the
   marked-up Q&A to be visibly present on the page — deriving it is the only way
   to guarantee that stays true when the copy changes. */
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const ROUTES = [
  { t: "Solicitations & RFPs", href: "/rfp" },
  { t: "Teaming & subcontracting", href: "/government/teaming" },
  { t: "Procurement documents", href: "/government" },
  { t: "Careers", href: "/careers" },
];

const STATUS_LABEL = { delivery: "Delivery centre", registered: "Registered office" };

/* Enquiry purposes reachable by link.
 *
 * The homepage fold and the qualification pack make three specific promises —
 * a 20-minute qualification call, a completed vendor questionnaire, a
 * capability conversation. All three used to land on this form with nothing
 * but the five service pillars in the dropdown, so a buyer who clicked a
 * specific offer arrived unable to say which one they had clicked. The link
 * now carries its own intent: /contact?about=qualification-call.
 *
 * Values are the option labels themselves, because that string is what the
 * API receives and what a human reads in the resulting email. */
const ENQUIRY_PURPOSES = {
  "qualification-call": "Qualification call (20 minutes)",
  questionnaire: "Vendor or security questionnaire",
};

const PURPOSE_INTRO = {
  "qualification-call":
    "Twenty minutes with someone who can answer contracting questions. If we are not a credible bidder for what you are buying, we will say so on the call.",
  questionnaire:
    "Send your standard supplier or security questionnaire and we return it completed, with every item we cannot answer marked rather than left blank.",
};

export default function Contact() {
  const router = useRouter();
  const [status, setStatus] = useState("idle");
  const [formError, setFormError] = useState("");
  const [purpose, setPurpose] = useState("");

  /* router.query is empty on the first (statically rendered) pass and fills in
     once the client router is ready, so this cannot be a defaultValue — the
     select would render before the value existed and never pick it up. */
  useEffect(() => {
    if (!router.isReady) return;
    const requested = String(router.query.about || "");
    if (ENQUIRY_PURPOSES[requested]) setPurpose(ENQUIRY_PURPOSES[requested]);
  }, [router.isReady, router.query.about]);
  const errRef = useRef(null);
  const okRef = useRef(null);

  const purposeKey = Object.keys(ENQUIRY_PURPOSES).find(
    (key) => ENQUIRY_PURPOSES[key] === purpose
  );

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setFormError("");

    const fd = new FormData(e.currentTarget);
    if (String(fd.get("website_url") || "").trim() !== "") {
      // Honeypot tripped. Silently stop rather than rendering "Message
      // received" — on a site built on never stating an untruth, showing a
      // success panel for a message we discarded is exactly that.
      setStatus("idle");
      return;
    }

    const payload = {
      name: fd.get("name") || "",
      email: fd.get("email") || "",
      phone: fd.get("phone") || "",
      company: fd.get("company") || "",
      service: fd.get("service") || "",
      message: fd.get("message") || "",
      type: "General contact",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("ok");
        requestAnimationFrame(() => okRef.current?.focus());
        return;
      }
      setStatus("error");
      setFormError(
        data.message ||
          "Some details need checking. Your name, email and message are all required, and the email needs to be a full address."
      );
      requestAnimationFrame(() => errRef.current?.focus());
    } catch {
      setStatus("error");
      setFormError("We could not reach the server. Please email hello@round.digital directly.");
      requestAnimationFrame(() => errRef.current?.focus());
    }
  }

  return (
    <Layout>
      <Seo
        title="Contact — Solicitations & Enquiries"
        description="Talk to Round Digital about IT, AI enablement, research, staffing or training. Solicitations and RFPs have their own intake route."
        keywords="contact Round Digital, IT services contact, technology partner enquiry"
        jsonLd={[FAQ_SCHEMA]}
      />

      <Section as="div" style={{ paddingBottom: 0 }}>
        <Container>
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        </Container>
      </Section>

      <FigHero
        eyebrow="Direct channel"
        title="Tell Us What You Are Trying to Buy."
        lead="Send a solicitation, a statement of work, a staffing requirement or a rough idea. You will get a direct answer about whether we are the right supplier — including when we are not."
      />

      <Section>
        <Container>
          <div className="rds-formwrap">
            <div>
              <SectionHead index="01" label="Send a message" />

              {purposeKey ? (
                <div style={{ marginBottom: "var(--s5)" }}>
                  <Note title={ENQUIRY_PURPOSES[purposeKey]}>
                    {PURPOSE_INTRO[purposeKey]}
                  </Note>
                </div>
              ) : null}

              {status === "ok" ? (
                <Panel keyed fill>
                  <div ref={okRef} tabIndex={-1} role="status" style={{ outline: "none" }}>
                    <h2 className="rds-h3" style={{ marginBottom: "var(--s3)" }}>
                      Message received.
                    </h2>
                    <p className="rds-prose" style={{ marginBottom: "var(--s5)" }}>
                      We will come back to you, usually within one business day. If it is
                      urgent, email{" "}
                      <a href="mailto:hello@round.digital" className="rds-link">
                        hello@round.digital
                      </a>{" "}
                      and say so in the subject line.
                    </p>
                    <Button href="/services" variant="primary">
                      Explore services <Arrow />
                    </Button>
                  </div>
                </Panel>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  {formError ? (
                    <div ref={errRef} tabIndex={-1} role="alert" className="rds-formerr">
                      <strong>We could not send that.</strong> {formError}
                    </div>
                  ) : null}

                  <div className="rds-fieldrow">
                    <div className="rds-field">
                      <label htmlFor="name">
                        Your name<span className="rds-req" aria-hidden="true">*</span>
                      </label>
                      <input id="name" name="name" type="text" required maxLength={120} autoComplete="name" className="rds-input" />
                    </div>
                    <div className="rds-field">
                      <label htmlFor="email">
                        Email<span className="rds-req" aria-hidden="true">*</span>
                      </label>
                      <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" className="rds-input" />
                    </div>
                  </div>

                  <div className="rds-fieldrow">
                    <div className="rds-field">
                      <label htmlFor="company">
                        Organisation<span className="rds-optional"> (optional)</span>
                      </label>
                      <input id="company" name="company" type="text" maxLength={200} autoComplete="organization" className="rds-input" />
                    </div>
                    <div className="rds-field">
                      <label htmlFor="phone">
                        Phone<span className="rds-optional"> (optional)</span>
                      </label>
                      <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className="rds-input" />
                    </div>
                  </div>

                  <div className="rds-field">
                    <label htmlFor="service">
                      What is this about?<span className="rds-optional"> (optional)</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="rds-input"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                    >
                      <option value="">Choose one</option>
                      {Object.values(ENQUIRY_PURPOSES).map((label) => (
                        <option key={label}>{label}</option>
                      ))}
                      <option>IT Services</option>
                      <option>AI Enablement &amp; Automation</option>
                      <option>Data, Research &amp; Surveys</option>
                      <option>Staffing &amp; Workforce Solutions</option>
                      <option>Corporate &amp; Technical Training</option>
                      <option>Something else</option>
                    </select>
                  </div>

                  <div className="rds-field">
                    <label htmlFor="message">
                      Message<span className="rds-req" aria-hidden="true">*</span>
                    </label>
                    <textarea id="message" name="message" rows={7} required maxLength={5000} className="rds-input" />
                  </div>

                  <div className="rds-hp" aria-hidden="true">
                    <label htmlFor="website_url">Leave this field empty</label>
                    <input id="website_url" name="website_url" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "var(--s4)", marginTop: "var(--s5)" }}>
                    <Button variant="accent" type="submit" disabled={status === "sending"}>
                      {status === "sending" ? "Sending…" : "Send message"}
                      {status === "sending" ? null : <Arrow />}
                    </Button>
                    <p className="rds-meta" aria-live="polite">
                      {status === "sending" ? "Sending…" : ""}
                    </p>
                  </div>

                  <p className="rds-meta" style={{ marginTop: "var(--s4)" }}>
                    We use this only to reply to you. See our{" "}
                    <Link href="/privacy" className="rds-link">
                      privacy notice
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>

            <aside>
              <Panel fill>
                <h2 className="rds-h4" style={{ marginBottom: "var(--s4)" }}>
                  Direct routes
                </h2>
                <ul className="rds-proclist">
                  {ROUTES.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href}>{r.t}</Link>
                    </li>
                  ))}
                </ul>
              </Panel>

              <div style={{ marginTop: "var(--s5)" }}>
                <Panel>
                  <h2 className="rds-h4" style={{ marginBottom: "var(--s4)" }}>
                    Where we are
                  </h2>
                  <dl className="rds-spec">
                    {FACTS.locations.map((l) => (
                      <div key={`${l.city}-${l.country}`} style={{ display: "contents" }}>
                        <dt>{STATUS_LABEL[l.status] || l.status}</dt>
                        <dd style={{ fontSize: 15 }}>
                          {l.city}, {l.region}, {l.country}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="rds-meta" style={{ marginTop: "var(--s4)" }}>
                    {/* Standalone, not inside a sentence, so WCAG 2.5.8's inline
                        exception does not apply — it measured 123x19px. */}
                    <a href="mailto:hello@round.digital" className="rds-link rds-srclink">
                      hello@round.digital
                    </a>
                    <br />
                    <a href="mailto:contracts@round.digital" className="rds-link">
                      contracts@round.digital
                    </a>{" "}
                    for procurement
                  </p>
                </Panel>
              </div>

              <div style={{ marginTop: "var(--s5)" }}>
                <Note title="No sales sequence.">
                  One person replies to what you actually asked. You will not be added
                  to a drip campaign for writing to us.
                </Note>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* --- Engagement options --------------------------------------------- */}
      <Section className="rds-band">
        <Container>
          <FigHead label="Options" title="Three Channels. Zero Friction Sourcing." />
          <div className="rds-grid rds-cols-3">
            {ENGAGEMENT.map((e) => (
              <Panel key={e.title} lg>
                <h2 className="rds-h4" style={{ marginBottom: "var(--s3)" }}>
                  {e.title}
                </h2>
                <p className="rds-meta" style={{ fontSize: 15, marginBottom: "var(--s6)" }}>
                  {e.body}
                </p>
                <Button href={e.href} variant="ghost">
                  {e.cta} <Arrow />
                </Button>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      {/* --- Where the work happens ------------------------------------------- */}
      <Section>
        <Container>
          <MediaSplit image={STOCK.networkMap} wide>
            <FigHead
              label="Squads in sync"
              title="Two Delivery Centres. One Registered Address."
              body="Work is performed in Mississauga, Ontario and Noida, Uttar Pradesh. Cheyenne, Wyoming is our registered address — a registered agent is not a place of business, and we do not list it as an office."
            />
            <ul className="rds-idlist">
              {FACTS.locations.map((l) => (
                <li key={`${l.city}-${l.country}`}>
                  <strong>
                    {l.city}, {l.region}:
                  </strong>{" "}
                  {l.status === "registered" ? "Registered address" : "Delivery centre"}
                </li>
              ))}
            </ul>
          </MediaSplit>
        </Container>
      </Section>

      {/* --- FAQ ---------------------------------------------------------------
          Answers corrected against the registries. The Figma answered "Do you
          hold any certifications today?" with "Yes" and cited a CAGE code and a
          UEI that do not exist. */}
      <Section className="rds-band">
        <Container style={{ maxWidth: 880 }}>
          <FigHead
            label="FAQ"
            title="Procurement & Capability Questions"
          />
          <Faq items={FAQ_ITEMS} idPrefix="contact" />
        </Container>
      </Section>

      {/* --- Response commitment ------------------------------------------------ */}
      <Section tight>
        <Container>
          <Panel fill keyed lg>
            <Eyebrow mark>Response commitment</Eyebrow>
            <h2 className="rds-h3" style={{ margin: "var(--s4) 0 var(--s3)" }}>
              We respond within one business day.
            </h2>
            <p className="rds-prose" style={{ marginBottom: "var(--s6)" }}>
              Solicitations and RFPs are handled first, by the people who scope bids rather than by
              an inbox rota.
            </p>
            <Button href="/rfp" variant="accent">
              Submit an RFP <Arrow />
            </Button>
          </Panel>
        </Container>
      </Section>
    </Layout>
  );
}
