import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Arrow, Button, Container, Eyebrow, Section } from "./ui";
import { PILLARS } from "@/data/navigation";
import { FACTS } from "@/content/facts.mjs";
import { hasAnyEarned } from "@/content/credentials.mjs";
import { SIZE_STATUS } from "@/data/procurement";

/* Three hero treatments, switchable on the homepage with ?hero=a|b|c.
 *
 * Constraint that shaped all three: TCS and Capgemini open on full-bleed
 * photography of real people and real sites. We have no verified photography,
 * and the brief forbids stock handshake imagery — so none of these fake it.
 * Where a visual is needed, it is built from the monogram's own geometry and
 * carries information rather than decorating.
 */

const HEADLINE = "Build it. Staff it. Train it. Prove it.";
const LEAD =
  "Round Digital builds the system, staffs it, trains the people who run it, and measures whether it worked — so the capability is still there after we leave.";

/* `onBand` = these CTAs sit inside the hero band rather than on the page.
   Only the ghost needs to know. Primary and accent already resolve correctly
   on the band in both themes now that the band follows the theme instead of
   being pinned dark — see the button notes in system.css. */
function Ctas({ onBand = false }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s3)", marginTop: "var(--s7)" }}>
      <Button href="/government/capability-statement" variant="primary">
        Read the capability statement <Arrow />
      </Button>
      <Button href="/rfp" variant="accent">
        Submit an RFP
      </Button>
      <Button href="/services" variant={onBand ? "ghostOnBand" : "ghost"}>
        Explore services
      </Button>
    </div>
  );
}

/* ── A · Statement ────────────────────────────────────────────────────────
   Typographic, no imagery. The practices sit directly under the lead so a
   first-time reader sees what we sell without scrolling. */
export function HeroStatement() {
  return (
    <Section as="div" className="rds-hero">
      <Container>
        <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "15ch" }}>
          {HEADLINE}
        </h1>
        <div className="rds-hero-rule" aria-hidden="true" />
        <p className="rds-lead" style={{ marginTop: "var(--s5)", maxWidth: "58ch" }}>{LEAD}</p>
        <Ctas />

        <ul className="rds-practicerail" aria-label="Our five practices">
          {PILLARS.map((p) => (
            <li key={p.slug}>
              <Link href={p.href}>
                <span className="rds-practicerail-title">{p.title}</span>
                <span className="rds-practicerail-focus">{p.focus}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ── B · Split with the delivery loop ────────────────────────────────────
   Capgemini's split composition, but the right-hand panel is a diagram of the
   four-step loop rather than a photograph. It earns its place: it is the
   argument the headline makes, drawn. */
const LOOP_CELLS = [
  { n: "01", step: "Build it", note: "Systems, designed to be operated" },
  { n: "02", step: "Staff it", note: "People who have done it before" },
  { n: "03", step: "Train it", note: "Capability that stays behind" },
  { n: "04", step: "Prove it", note: "Evidence it actually worked" },
];

export function HeroSplit() {
  return (
    <Section as="div" className="rds-hero rds-hero-split">
      <Container>
        <div className="rds-hero-splitgrid">
          <div>
            <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "13ch" }}>
              {HEADLINE}
            </h1>
            <div className="rds-hero-rule" aria-hidden="true" />
            <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>{LEAD}</p>
            <Ctas />
          </div>

          <figure className="rds-loopdiagram">
            <div className="rds-loopdiagram-grid">
              {LOOP_CELLS.map((c) => (
                <div key={c.n}>
                  <span className="rds-mono">{c.n}</span>
                  <strong>{c.step}</strong>
                  <span>{c.note}</span>
                </div>
              ))}
              <span className="rds-loopdiagram-mark" aria-hidden="true" />
            </div>
            <figcaption>
              One supplier closes the loop. Most close one quarter of it.
            </figcaption>
          </figure>
        </div>
      </Container>
    </Section>
  );
}

/* ── C · Full-bleed band ─────────────────────────────────────────────────
   Closest to tcs.com: a dark full-width opening that holds its own weight,
   with the practices as a rail beneath. The band keeps a fixed dark palette
   in both themes — the values are hard-set and contrast-checked (white on
   #0b0f14 = 19.22:1, #ff7175 = 7.20:1) rather than inherited from tokens
   that flip. */
/* The four steps of the headline, each a slide.
   The headline itself never leaves the page — the active step is lit and the
   other three drop to a dimmed value that still clears AA (#8a95a1 on
   #0b0f14 = 5.15:1). Dimming by colour rather than opacity is deliberate:
   opacity would take the inactive words below the contrast floor. */
const SLIDES = [
  {
    step: "Build it.",
    practice: "IT Services",
    href: "/services/it-services",
    line: "Systems your team can still run after we leave — cloud, custom software, security and data engineering, built to be operated rather than admired.",
  },
  {
    step: "Staff it.",
    practice: "Staffing & Workforce Solutions",
    href: "/services/staffing",
    line: "People who have done the work before, screened by practitioners in the discipline — with the written assessment, including the concerns.",
  },
  {
    step: "Train it.",
    practice: "Corporate & Technical Training",
    href: "/services/training",
    line: "Capability measured by what people can do unaided afterwards, built on programmes we have run since 2017.",
  },
  {
    step: "Prove it.",
    practice: "Data, Research & Surveys",
    href: "/services/research-data",
    line: "Evidence that holds up when someone checks the method — survey research, analytics and program evaluation designed for scrutiny.",
  },
];

const ROTATE_MS = 6000;

/* The band is kept — a dark full-bleed opening carries the weight the brief
   asked for. The ROTATION is gone.

   It was solving nothing and costing plenty: the headline names four services
   while the rotating lead described one, so the page contradicted itself every
   six seconds; pause depended on hover and focus, neither of which fires on
   touch; and the tab row wrapped 3+1 on a phone, rendering a four-step loop as
   three steps and a stray. The same four steps stated at once, as a diagram,
   make the argument better and hold still while it is read. */
export function HeroBandLegacySlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true); // assume no motion until proven
  const timer = useRef(null);

  // Respect the OS setting, and react if it changes mid-session.
  //
  // Auto-rotation is also switched off entirely on narrow screens. Pausing
  // there depended on hover and focus, neither of which fires on touch — so a
  // phone reader had content changing under them every six seconds with no
  // mechanism to stop it, which WCAG 2.2.2 requires.
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 620px)");
    const apply = () => setReduced(motion.matches || narrow.matches);
    apply();
    motion.addEventListener?.("change", apply);
    narrow.addEventListener?.("change", apply);
    return () => {
      motion.removeEventListener?.("change", apply);
      narrow.removeEventListener?.("change", apply);
    };
  }, []);

  const go = useCallback((i) => setActive(((i % SLIDES.length) + SLIDES.length) % SLIDES.length), []);

  // Auto-advance. Never runs under reduced-motion, and stops whenever the
  // reader is hovering, focused inside, or has pressed pause — which is what
  // WCAG 2.2.2 requires of anything that moves on its own.
  useEffect(() => {
    if (reduced || paused) return undefined;
    timer.current = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), ROTATE_MS);
    return () => clearInterval(timer.current);
  }, [reduced, paused]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(active - 1); }
    if (e.key === "Home") { e.preventDefault(); go(0); }
    if (e.key === "End") { e.preventDefault(); go(SLIDES.length - 1); }
  };

  const slide = SLIDES[active];
  const autoRunning = !reduced && !paused;

  return (
    <div className="rds-heroband">
      <Container>
        <div
          className="rds-heroband-inner"
          role="region"
          aria-roledescription="carousel"
          aria-label="What Round Digital does"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          /* Touch never fires mouseenter — a tap anywhere in the region now
             stops the rotation, so a reader who starts reading is not
             interrupted by the next slide. */
          onPointerDown={() => setPaused(true)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
        >
          <Eyebrow mark className="rds-heroband-eyebrow">
            Women-owned · Technology &amp; workforce services
          </Eyebrow>

          {/* One h1 for the page. The steps are spans inside it, so the
              document outline never changes as the slider advances. */}
          <h1 className="rds-h1 rds-heroband-words" style={{ margin: "var(--s5) 0 0" }}>
            {SLIDES.map((s, i) => (
              <span key={s.step} className={i === active ? "is-active" : undefined}>
                {s.step}{" "}
              </span>
            ))}
          </h1>

          <div className="rds-hero-rule" aria-hidden="true" />

          <div
            className="rds-heroslide"
            id={`hero-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`hero-tab-${active}`}
            aria-live={autoRunning ? "off" : "polite"}
          >
            <p className="rds-lead rds-heroband-lead">{slide.line}</p>
            <Link href={slide.href} className="rds-heroslide-link">
              {slide.practice} <Arrow />
            </Link>
          </div>

          <Ctas onBand />

          {/* Controls. A tablist rather than dots: the labels are the four
              steps, so the control itself teaches the loop. */}
          <div className="rds-herotabs">
            <div role="tablist" aria-label="Choose a step" onKeyDown={onKeyDown}>
              {SLIDES.map((s, i) => (
                <button
                  key={s.step}
                  id={`hero-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-controls={`hero-panel-${i}`}
                  tabIndex={i === active ? 0 : -1}
                  onClick={() => go(i)}
                >
                  <span className="rds-mono">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s.step.replace(".", "")}</span>
                  <span
                    className={`rds-herotabs-bar${i === active && autoRunning ? " is-running" : ""}`}
                    aria-hidden="true"
                    style={i === active && autoRunning ? { animationDuration: `${ROTATE_MS}ms` } : undefined}
                  />
                </button>
              ))}
            </div>

            {!reduced ? (
              <button
                type="button"
                className="rds-herotabs-pause"
                aria-pressed={paused}
                onClick={() => setPaused((p) => !p)}
              >
                {paused ? "Play" : "Pause"}
                <span className="rds-sr"> automatic rotation</span>
              </button>
            ) : null}
          </div>
        </div>
      </Container>

      <div className="rds-heroband-rail">
        <Container>
          <ul aria-label="Our five practices">
            {PILLARS.map((p) => (
              <li key={p.slug}>
                <Link href={p.href}>
                  <span className="rds-heroband-rail-title">{p.title}</span>
                  <span className="rds-heroband-rail-focus">{p.focus}</span>
                  <span className="rds-heroband-rail-go" aria-hidden="true">
                    <Arrow size={12} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </div>
  );
}

/* Shipping hero: C's dark band, B's static four-step diagram inside it. */
export function HeroBand() {
  return (
    <div className="rds-heroband">
      <Container>
        <div className="rds-heroband-inner rds-heroband-grid">
          <div>
            <h1 className="rds-h1" style={{ margin: 0, maxWidth: "13ch" }}>
              {HEADLINE}
            </h1>
            <div className="rds-hero-rule" aria-hidden="true" />
            {/* The positioning line sits BELOW the headline as a byline rather
                than above it as a kicker. */}
            <p className="rds-heroband-byline">
              Women-owned · Technology &amp; workforce services
            </p>
            <p className="rds-lead rds-heroband-lead" style={{ marginTop: "var(--s5)" }}>
              {LEAD}
            </p>
            <Ctas onBand />
          </div>

          <figure className="rds-loopdiagram rds-loopdiagram-onband">
            <div className="rds-loopdiagram-grid">
              {SLIDES.map((s, i) => (
                <div key={s.step}>
                  <span className="rds-mono">{String(i + 1).padStart(2, "0")}</span>
                  <strong>{s.step.replace(".", "")}</strong>
                  <Link href={s.href}>{s.practice}</Link>
                </div>
              ))}
              <span className="rds-loopdiagram-mark" aria-hidden="true" />
            </div>
            <figcaption>One supplier closes the loop. Most close a quarter of it.</figcaption>
          </figure>
        </div>
      </Container>

      <div className="rds-heroband-rail">
        <Container>
          <ul aria-label="Our five practices">
            {PILLARS.map((p) => (
              <li key={p.slug}>
                <Link href={p.href}>
                  <span className="rds-heroband-rail-title">{p.title}</span>
                  <span className="rds-heroband-rail-focus">{p.focus}</span>
                  <span className="rds-heroband-rail-go" aria-hidden="true">
                    <Arrow size={12} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </div>
  );
}

/* ── D · Qualified split ─────────────────────────────────────────────────
   The shipping hero.

   What changed and why: C opened on the four-word slogan and left the
   credibility — trading since 2017, Forbes, two delivery centres — to a 14px
   strip BELOW the fold. An evaluator scanning five supplier sites for eight
   seconds each needs four answers in that time: what category of supplier, in
   which jurisdictions, at what scale, and what credential position. C answered
   none of them above the fold.

   So the band keeps its shape and its rhythm — "Build it. Staff it. Train it.
   Prove it." survives as the mono strip beneath the lead — but the right-hand
   column now carries a vendor record instead of a diagram, and the buyer tabs
   let one fold answer three different readers without three different pages.

   The last row of that panel states that we hold no certifications. Putting the
   weakest fact in the strongest position is deliberate: it is the thing an
   evaluator would otherwise spend ten minutes trying to verify, and answering
   it unprompted is what makes the rows above it worth believing. */
const BUYERS = [
  {
    id: "gov",
    label: "Government & public sector",
    short: "Government",
    lead: "A women-owned firm trading since 2017, registered for United States federal work and building toward Canadian federal eligibility. We publish what we hold, what we have filed, and what we do not hold — each with a date.",
    focusLabel: "Ready in",
    focusValue: "United States — federal, state and municipal",
  },
  {
    id: "ent",
    label: "Enterprise & mid-market",
    short: "Enterprise",
    lead: "Cloud, custom software, security and data engineering, plus the people to run them — delivered from Ontario and Uttar Pradesh, contracted through one entity, and handed over so your team can still operate the system after we leave.",
    focusLabel: "Engagement model",
    focusValue: "Fixed-scope delivery, managed pods, or direct staff augmentation",
  },
  {
    id: "ngo",
    label: "Institutions & nonprofits",
    short: "Nonprofits",
    lead: "Mission organisations need evidence a funder will accept. We build the systems and run the survey research, program evaluation and analytics that show whether the intervention actually changed anything — including when it did not.",
    focusLabel: "Typical mandate",
    focusValue: "Program evaluation, survey research, and the platform underneath it",
  },
];

export function HeroQualified() {
  const [buyer, setBuyer] = useState(BUYERS[0].id);
  const active = BUYERS.find((b) => b.id === buyer) ?? BUYERS[0];

  // Roving tabindex REQUIRES arrow-key movement: with tabIndex={-1} on the
  // inactive tabs, Tab skips them, so without this handler a keyboard user
  // could never reach Enterprise or Nonprofit at all — the audit caught
  // exactly that. Same key set as the legacy slider above; selection follows
  // focus, the recommended behaviour when switching is instant.
  const onTablistKeyDown = (e) => {
    const i = BUYERS.findIndex((b) => b.id === buyer);
    let next = null;
    if (e.key === "ArrowRight") next = (i + 1) % BUYERS.length;
    if (e.key === "ArrowLeft") next = (i - 1 + BUYERS.length) % BUYERS.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = BUYERS.length - 1;
    if (next === null) return;
    e.preventDefault();
    const id = BUYERS[next].id;
    setBuyer(id);
    document.getElementById(`buyertab-${id}`)?.focus();
  };

  const delivery = FACTS.locations.filter((l) => l.status === "delivery");
  const registered = FACTS.locations.filter((l) => l.status === "registered");

  return (
    <div className="rds-heroband">
      <Container>
        <div className="rds-heroband-inner">
          {/* Tabs, not links: this swaps content in place rather than
              navigating, so it is a tablist and the grid below is its panel. */}
          <div
            className="rds-buyertabs"
            role="tablist"
            aria-label="Choose what you are buying for"
            onKeyDown={onTablistKeyDown}
          >
            {BUYERS.map((b, i) => (
              <button
                key={b.id}
                type="button"
                role="tab"
                id={`buyertab-${b.id}`}
                aria-selected={b.id === buyer}
                aria-controls="buyerpanel"
                tabIndex={b.id === buyer ? 0 : -1}
                className="rds-buyertab"
                aria-label={b.label}
                onClick={() => setBuyer(b.id)}
              >
                <span className="rds-mono" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rds-buyertab-full">{b.label}</span>
                <span className="rds-buyertab-short">{b.short}</span>
              </button>
            ))}
          </div>

          <div
            className="rds-heroband-grid rds-heroband-grid-top"
            id="buyerpanel"
            role="tabpanel"
            aria-labelledby={`buyertab-${active.id}`}
          >
            <div>
              <Eyebrow mark className="rds-heroband-eyebrow">
                Women-owned · Technology &amp; workforce services
              </Eyebrow>

              <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "19ch" }}>
                Technology&nbsp;&amp; workforce you can verify before you buy.
              </h1>
              <div className="rds-hero-rule" aria-hidden="true" />

              {/* key= remounts on tab change so the swap is visible — the critique
                  found a tab click could pass entirely unnoticed. */}
              <p key={active.id} className="rds-lead rds-heroband-lead rds-swap" style={{ marginTop: "var(--s5)" }}>
                {active.lead}
              </p>

              <div className="rds-herocta">
                <Button href="/rfp" variant="accent">
                  Submit an RFP <Arrow />
                </Button>
                <Button href="/government/capability-statement" variant="ghost">
                  Capability statement (1 page)
                </Button>
              </div>
            </div>

            {/* The vendor record. Every row resolves to src/content/facts.mjs or
                src/data/procurement.js — nothing here is written by hand twice. */}
            <div className="rds-glance">
              <div className="rds-glance-head">
                <span className="rds-mono">Round Digital at a glance</span>
              </div>

              <dl>
                <div className="rds-glance-row">
                  <dt>{active.focusLabel}</dt>
                  <dd style={{ fontWeight: 600 }}>{active.focusValue}</dd>
                </div>
                <div className="rds-glance-row">
                  <dt>Operating since</dt>
                  <dd>
                    2017, as {FACTS.predecessor}. {FACTS.legalName} is the successor entity.
                  </dd>
                </div>
                <div className="rds-glance-row">
                  <dt>Delivery centres</dt>
                  <dd>
                    {/* Cities are stated ONCE on the fold — here, in the
                        record. The registered address is a different fact and
                        lives on the jurisdiction page and in the FAQ. */}
                    {delivery.map((l) => `${l.city}, ${l.region}`).join(" · ")}
                  </dd>
                </div>
                <div className="rds-glance-row">
                  <dt>US federal</dt>
                  <dd>
                    SAM.gov registration active. UEI and CAGE will be published on this page once
                    confirmed against SAM.gov — supplied on request in the meantime.
                  </dd>
                </div>
                <div className="rds-glance-row">
                  <dt>Size status</dt>
                  <dd>{SIZE_STATUS.headline}.</dd>
                </div>
                {/* Defensive, exactly as the certifications page is: the moment a
                    credential flips to "earned" in the content module, this row
                    must stop saying we have none. */}
                <div className="rds-glance-row rds-glance-row-flag">
                  <dt>Certifications</dt>
                  <dd>
                    {hasAnyEarned()
                      ? "See the credential register for what we hold today."
                      : "None held today, in any jurisdiction."}{" "}
                    <Link href="/government/certifications" className="rds-link">
                      Read the dated roadmap
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Container>

      <div className="rds-heroband-rail">
        <Container>
          <ul aria-label="Our five practices">
            {PILLARS.map((p) => (
              <li key={p.slug}>
                <Link href={p.href}>
                  <span className="rds-heroband-rail-title">{p.title}</span>
                  <span className="rds-heroband-rail-focus">{p.focus}</span>
                  <span className="rds-heroband-rail-go" aria-hidden="true">
                    <Arrow size={12} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </div>
  );
}

export const HEROES = {
  a: { id: "a", name: "Statement", Component: HeroStatement },
  b: { id: "b", name: "Split with delivery loop", Component: HeroSplit },
  c: { id: "c", name: "Full-bleed band", Component: HeroBand },
  d: { id: "d", name: "Qualified split", Component: HeroQualified },
};

export const DEFAULT_HERO = "d";
