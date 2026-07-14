import { useState } from "react";
import Link from "next/link";
import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { Arrow, CountUp, RdButton, SectionIntro } from "@/components/rd/ui";
import {
  BENEFITS,
  HERO_STATS,
  HOME_CASES,
  INDUSTRIES,
  INSIGHTS,
  JOURNEY,
  LOGOS,
  PROCESS,
  SERVICE_CARDS,
  TECHS,
  TESTIMONIALS,
} from "@/data/rdHome";

const MONO_H = "'Space Mono',monospace";
const wrap = { maxWidth: 1280, margin: "0 auto" };

function Hero() {
  return (
    <section style={{ padding: "96px 5% 80px" }}>
      <div style={wrap}>
        <h1
          data-rd-reveal
          style={{ margin: "0 0 28px", maxWidth: 820, font: `700 clamp(48px,5vw,84px)/1.08 ${MONO_H}`, letterSpacing: "-0.01em" }}
        >
          We engineer the AI-first enterprise
        </h1>
        <p data-rd-reveal data-rd-reveal-delay="0.05" style={{ margin: "0 0 36px", maxWidth: 560, fontSize: 20, color: "var(--rd-text-2)" }}>
          Round Digital builds production AI agents, secure cloud platforms, and custom
          software for global enterprises.
        </p>
        <div data-rd-reveal data-rd-reveal-delay="0.1" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <RdButton href="/contact">Book a strategy session</RdButton>
          <RdButton href="/#case-studies" variant="ghost">
            View case studies
          </RdButton>
        </div>
        <div data-rd-reveal data-rd-reveal-delay="0.15" style={{ marginTop: 56, display: "flex", gap: 56, flexWrap: "wrap" }}>
          {HERO_STATS.map((s) => (
            <div key={s.l}>
              <div style={{ font: `700 40px ${MONO_H}` }}>
                <CountUp value={s.n} />
              </div>
              <div style={{ color: "var(--rd-text-3)", fontSize: 16 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div data-rd-reveal data-rd-reveal-delay="0.1" className="rd-hero-collage" style={{ marginTop: 72, display: "grid", gridTemplateColumns: "1fr 2.6fr 1fr", gap: 24, alignItems: "end" }}>
          <img src="/rd/images/hero-0.jpg" alt="Team collaborating" className="rd-img" style={{ aspectRatio: "4/5", borderRadius: 32, marginBottom: -40 }} />
          <img src="/rd/images/how-0.jpg" alt="Engineering session" className="rd-img" style={{ aspectRatio: "16/9", borderRadius: 40 }} />
          <img src="/rd/images/hero-3.jpg" alt="Team meeting" className="rd-img" style={{ aspectRatio: "4/5", borderRadius: 32, alignSelf: "start", marginTop: -40 }} />
        </div>
      </div>
    </section>
  );
}

function Logos() {
  return (
    <section style={{ padding: "80px 5%" }}>
      <div style={wrap}>
        <p data-rd-reveal style={{ margin: "0 0 44px", textAlign: "center", font: `700 20px ${MONO_H}`, textTransform: "uppercase", letterSpacing: "0.04em" }}>
          Trusted by the world&apos;s most ambitious engineering teams
        </p>
        <div className="rd-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {LOGOS.map((l) => (
            <div key={l} data-rd-reveal style={{ background: "var(--rd-card)", borderRadius: 100, padding: "26px 0", textAlign: "center", font: `700 22px ${MONO_H}`, color: "var(--rd-text-2)", textTransform: "uppercase" }}>
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" style={{ padding: "96px 5%" }}>
      <div style={wrap}>
        <SectionIntro eyebrow="Services" title="Engineering the intelligent enterprise" body="Production-grade AI, cloud, and software engineering from architecture to operations." />
        <div className="rd-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
          {SERVICE_CARDS.map((c) => (
            <Link key={c.title} href={c.href} data-rd-reveal className="rd-card rd-card-lift" style={{ display: "flex", flexDirection: "column" }}>
              <img src={c.img} alt={c.tag} className="rd-img" style={{ aspectRatio: "16/10" }} />
              <div style={{ padding: "32px 28px 28px", display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "var(--rd-text-3)" }}>{c.tag}</p>
                <h3 style={{ margin: 0, font: `700 26px ${MONO_H}`, lineHeight: 1.25 }}>{c.title}</h3>
                <p style={{ margin: 0, fontSize: 16, color: "var(--rd-text-2)", flex: 1 }}>{c.desc}</p>
                <span style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500, fontSize: 16 }}>
                  Explore <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="solutions" style={{ padding: "96px 5%" }}>
      <div style={wrap}>
        <SectionIntro eyebrow="Process" title="Your AI transformation journey from discovery to optimization" body="A disciplined engineering methodology that delivers measurable outcomes, not just models. We move from architecture to production in weeks." maxWidth={760} />
        <div className="rd-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, textAlign: "center" }}>
          {JOURNEY.map((p) => (
            <div key={p.title} data-rd-reveal style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <img src={p.img} alt="" className="rd-img" style={{ aspectRatio: "16/10", borderRadius: 24 }} />
              <h3 style={{ margin: 0, font: `700 22px ${MONO_H}`, lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ margin: 0, fontSize: 16, color: "var(--rd-text-3)" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const [active, setActive] = useState(0);
  const ind = INDUSTRIES[active];
  return (
    <section id="industries" style={{ padding: "96px 5%" }}>
      <div style={wrap}>
        <SectionIntro eyebrow="Industries" title="Engineered for your industry" body="Deep domain expertise combined with AI engineering excellence. We solve the problems that keep industry leaders awake at night." />
        <div data-rd-reveal className="rd-tabs" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.4fr", borderRadius: 40, overflow: "hidden" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {INDUSTRIES.map((it, i) => (
              <button
                key={it.name}
                type="button"
                onClick={() => setActive(i)}
                style={{
                  textAlign: "left",
                  padding: "26px 32px",
                  background: active === i ? "var(--rd-card)" : "transparent",
                  color: "var(--rd-text)",
                  border: "none",
                  borderBottom: i < INDUSTRIES.length - 1 ? "1px solid var(--rd-divider)" : "none",
                  cursor: "pointer",
                  font: `700 20px ${MONO_H}`,
                  textTransform: "uppercase",
                  transition: "background 0.25s ease",
                }}
              >
                {it.name}
              </button>
            ))}
          </div>
          <div style={{ background: "var(--rd-card)", padding: 56, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20, minHeight: 480 }}>
            <p style={{ margin: 0, font: `700 14px ${MONO_H}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>{ind.tag}</p>
            <h3 style={{ margin: 0, font: `700 clamp(28px,2.4vw,40px)/1.2 ${MONO_H}` }}>{ind.title}</h3>
            <p style={{ margin: 0, fontSize: 18, color: "var(--rd-text-2)" }}>{ind.body}</p>
            <Link href="/industries" style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 500, marginTop: 8 }}>
              Learn more <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function benefitCard(c, key) {
  return (
    <div key={key} data-rd-reveal className="rd-card" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "32px 28px", display: "flex", flexDirection: "column", gap: 10 }}>
        <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "var(--rd-text-3)" }}>{c.tag}</p>
        <h3 style={{ margin: 0, font: `700 22px ${MONO_H}` }}>{c.title}</h3>
        <p style={{ margin: 0, fontSize: 15, color: "var(--rd-text-2)" }}>{c.body}</p>
      </div>
      <img src={c.img} alt="" className="rd-img" style={{ height: 150 }} />
    </div>
  );
}

function Benefits() {
  const f = BENEFITS.feature;
  return (
    <section style={{ padding: "96px 5%" }}>
      <div style={wrap}>
        <SectionIntro eyebrow="Why" title="Outcomes over outputs" body="We engineer for business results, not just technical milestones." maxWidth={640} />
        <div className="rd-bento" style={{ display: "grid", gridTemplateColumns: "1.55fr 1fr 1fr", gridTemplateRows: "auto auto", gap: 24 }}>
          <div data-rd-reveal className="rd-card" style={{ gridRow: "span 2", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", gap: 18 }}>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "var(--rd-text-3)" }}>{f.tag}</p>
              <h3 style={{ margin: 0, font: `700 32px ${MONO_H}`, lineHeight: 1.25 }}>{f.title}</h3>
              <p style={{ margin: 0, fontSize: 17, color: "var(--rd-text-2)" }}>{f.body}</p>
            </div>
            <img src={f.img} alt="" className="rd-img" style={{ flex: 1, minHeight: 260 }} />
          </div>
          {BENEFITS.cards.map((c, i) => benefitCard(c, i))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="case-studies" style={{ padding: "96px 5%", scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionIntro eyebrow="Work" title="Engineering that delivers" body="Real challenges, real architectures, real results from our engagements." />
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {HOME_CASES.map((c) => (
            <div key={c.title} data-rd-reveal className="rd-card">
              <img src={c.img} alt={c.title} className="rd-img" style={{ aspectRatio: "16/8" }} />
              <div style={{ padding: "36px 36px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ padding: "4px 14px", borderRadius: 100, background: "var(--rd-bg)", fontSize: 13, fontWeight: 600 }}>{c.tag}</span>
                  <span style={{ fontSize: 14, color: "var(--rd-text-3)" }}>{c.read}</span>
                </div>
                <h3 style={{ margin: 0, font: `700 26px ${MONO_H}`, lineHeight: 1.25 }}>{c.title}</h3>
                <p style={{ margin: 0, fontSize: 16, color: "var(--rd-text-2)" }}>{c.desc}</p>
                <Link href={c.href} style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500, fontSize: 16 }}>
                  Read case <Arrow />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [page, setPage] = useState(0);
  const pages = [TESTIMONIALS.slice(0, 2), TESTIMONIALS.slice(2, 4)];
  return (
    <section style={{ padding: "96px 5%", overflow: "hidden" }}>
      <div style={wrap}>
        <SectionIntro title="Client results" body="What our partners say about engineering with Round Digital." maxWidth={640} />
        <div style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", transition: "transform 0.5s ease", transform: `translateX(-${page * 100}%)` }}>
            {pages.map((grp, gi) => (
              <div key={gi} className="rd-grid-2" style={{ minWidth: "100%", boxSizing: "border-box", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
                {grp.map((t) => (
                  <div key={t.name} className="rd-card" style={{ padding: "44px 40px", display: "flex", flexDirection: "column", gap: 28 }}>
                    <blockquote style={{ margin: 0, fontSize: 21, lineHeight: 1.55 }}>&ldquo;{t.quote}&rdquo;</blockquote>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <img src={t.img} alt={t.name} style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover" }} />
                      <div>
                        <p style={{ margin: 0, fontWeight: 600 }}>{t.name}</p>
                        <p style={{ margin: 0, fontSize: 15, color: "var(--rd-text-3)" }}>{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 44, display: "flex", alignItems: "center", justifyContent: "center", gap: 24 }}>
          <button type="button" aria-label="Previous" onClick={() => setPage((p) => (p + 1) % 2)} className="rd-carousel-btn">
            <svg width="16" height="16" viewBox="0 0 16 16"><path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
          </button>
          <div style={{ display: "flex", gap: 8 }}>
            {[0, 1].map((i) => (
              <button key={i} type="button" aria-label={`Page ${i + 1}`} onClick={() => setPage(i)} style={{ width: 8, height: 8, borderRadius: "50%", border: "none", cursor: "pointer", padding: 0, background: page === i ? "var(--rd-text)" : "var(--rd-border-2)", transition: "background 0.3s" }} />
            ))}
          </div>
          <button type="button" aria-label="Next" onClick={() => setPage((p) => (p + 1) % 2)} className="rd-carousel-btn">
            <svg width="16" height="16" viewBox="0 0 16 16"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function ProcessGrid() {
  return (
    <section style={{ padding: "96px 5%" }}>
      <div style={wrap}>
        <SectionIntro eyebrow="Process" title="How we engineer outcomes" body="A rigorous, repeatable methodology that ships production systems, not slide decks." />
        <div className="rd-process-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.6fr", gridTemplateRows: "auto auto", gap: 24 }}>
          {PROCESS.map((p) => (
            <div
              key={p.tag}
              data-rd-reveal
              className="rd-card"
              style={p.big ? { gridRow: "span 2", display: "flex", flexDirection: "column" } : { display: "flex", flexDirection: "column" }}
            >
              <img src={p.img} alt="" className="rd-img" style={{ ...(p.big ? { flex: 1, minHeight: 280 } : { height: 150 }) }} />
              <div style={{ padding: p.big ? "40px 36px" : "28px 26px", display: "flex", flexDirection: "column", gap: p.big ? 14 : 10 }}>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "var(--rd-text-3)" }}>{p.tag}</p>
                <h3 style={{ margin: 0, font: `700 ${p.big ? 30 : 20}px ${MONO_H}`, lineHeight: 1.25 }}>{p.title}</h3>
                <p style={{ margin: 0, fontSize: p.big ? 16 : 15, color: "var(--rd-text-2)" }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  const [active, setActive] = useState(0);
  const t = TECHS[active];
  return (
    <section id="technology" style={{ padding: "96px 5%" }}>
      <div style={wrap}>
        <SectionIntro eyebrow="Technology" title="Our engineering ecosystem" body="We select the right tool for the problem. No dogma, just disciplined engineering with modern, battle-tested stacks." />
        <div data-rd-reveal className="rd-tabs" style={{ display: "grid", gridTemplateColumns: "1.5fr 0.9fr", borderRadius: 40, overflow: "hidden" }}>
          <div style={{ background: "var(--rd-card)", padding: 56, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20, minHeight: 420 }}>
            <p style={{ margin: 0, font: `700 14px ${MONO_H}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>{t.tag}</p>
            <h3 style={{ margin: 0, font: `700 clamp(26px,2.2vw,36px)/1.2 ${MONO_H}` }}>{t.title}</h3>
            <p style={{ margin: 0, fontSize: 18, color: "var(--rd-text-2)" }}>{t.body}</p>
            <p style={{ margin: 0, font: `700 15px ${MONO_H}`, color: "var(--rd-text-3)" }}>{t.stack}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {TECHS.map((it, i) => (
              <button
                key={it.tag}
                type="button"
                onClick={() => setActive(i)}
                style={{
                  textAlign: "left",
                  padding: "24px 32px",
                  background: active === i ? "var(--rd-card)" : "transparent",
                  color: "var(--rd-text)",
                  border: "none",
                  borderBottom: i < TECHS.length - 1 ? "1px solid var(--rd-divider)" : "none",
                  cursor: "pointer",
                  font: `700 18px ${MONO_H}`,
                  letterSpacing: "0.06em",
                  transition: "background 0.25s ease",
                }}
              >
                {it.tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section id="insights" style={{ padding: "96px 5%" }}>
      <div style={wrap}>
        <div data-rd-reveal style={{ maxWidth: 640, marginBottom: 64 }}>
          <p style={{ margin: "0 0 16px", font: "600 15px 'Inter',sans-serif" }}>Insights</p>
          <h2 style={{ margin: "0 0 20px", font: `700 clamp(36px,3.2vw,60px)/1.12 ${MONO_H}` }}>From our engineers</h2>
          <p style={{ margin: 0, fontSize: 20, color: "var(--rd-text-2)" }}>Straight talk on architecture, AI, and building systems that last.</p>
        </div>
        <div className="rd-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
          {INSIGHTS.map((a) => (
            <Link key={a.title} href="/blogs" data-rd-reveal style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <img src={a.img} alt="" className="rd-img" style={{ aspectRatio: "16/10", borderRadius: 24 }} />
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ padding: "4px 14px", borderRadius: 100, background: "var(--rd-card)", fontSize: 13, fontWeight: 600 }}>{a.cat}</span>
                <span style={{ fontSize: 14, color: "var(--rd-text-3)" }}>{a.read}</span>
              </div>
              <h3 style={{ margin: 0, font: `700 22px ${MONO_H}`, lineHeight: 1.3 }}>{a.title}</h3>
              <p style={{ margin: 0, fontSize: 15, color: "var(--rd-text-2)" }}>{a.desc}</p>
              <span style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500, fontSize: 15 }}>
                Read more <Arrow />
              </span>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 48, display: "flex", justifyContent: "flex-end" }}>
          <RdButton href="/blogs" variant="ghost" style={{ padding: "12px 30px", fontSize: 15, fontWeight: 500 }}>
            View all
          </RdButton>
        </div>
      </div>
    </section>
  );
}

function Careers() {
  return (
    <section id="careers" style={{ padding: "96px 5%" }}>
      <div className="rd-grid-2" style={{ ...wrap, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div data-rd-reveal>
          <p style={{ margin: "0 0 16px", font: "600 15px 'Inter',sans-serif" }}>Careers</p>
          <h2 style={{ margin: "0 0 24px", font: `700 clamp(36px,3.2vw,60px)/1.12 ${MONO_H}` }}>Build the future with us</h2>
          <p style={{ margin: "0 0 32px", fontSize: 19, color: "var(--rd-text-2)" }}>
            We are engineers who solve hard problems for the world&apos;s most demanding
            enterprises. We work remotely, ship continuously, and own our outcomes.
          </p>
          <h3 style={{ margin: "0 0 12px", font: `700 22px ${MONO_H}` }}>Clear hiring process</h3>
          <p style={{ margin: "0 0 32px", fontSize: 17, color: "var(--rd-text-3)" }}>
            A conversation, a technical deep dive, and a paid work trial. We decide fast and
            give honest feedback. No surprise whiteboard algorithms.
          </p>
          <RdButton href="/careers" variant="ghost" style={{ padding: "12px 30px", fontSize: 15, fontWeight: 500 }}>
            See open roles
          </RdButton>
        </div>
        <div className="rd-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <img src="/rd/images/hero-0.jpg" alt="Engineering team" className="rd-img" style={{ aspectRatio: "1/1.1", borderRadius: 24 }} />
          <img src="/rd/images/hero-4.jpg" alt="Working session" className="rd-img" style={{ aspectRatio: "1/1.1", borderRadius: 24, marginTop: 40 }} />
          <img src="/rd/images/feature-0.jpg" alt="Team collaboration" className="rd-img" style={{ aspectRatio: "1/1.1", borderRadius: 24 }} />
          <img src="/rd/images/hero-3.jpg" alt="Team discussion" className="rd-img" style={{ aspectRatio: "1/1.1", borderRadius: 24, marginTop: 40 }} />
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" style={{ padding: "96px 5% 112px" }}>
      <div style={{ ...wrap, textAlign: "center" }}>
        <h2 data-rd-reveal style={{ margin: "0 0 20px", font: `700 clamp(36px,3.6vw,64px)/1.12 ${MONO_H}` }}>
          Ready to engineer your advantage
        </h2>
        <p data-rd-reveal style={{ margin: "0 auto 36px", maxWidth: 600, fontSize: 20, color: "var(--rd-text-2)" }}>
          Stop planning your AI strategy and start executing it. Book a session with our senior
          architects and get a concrete plan in days.
        </p>
        <div data-rd-reveal style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 64, flexWrap: "wrap" }}>
          <RdButton href="/contact">Book a session</RdButton>
          <RdButton href="/contact" variant="ghost">
            Contact
          </RdButton>
        </div>
        <img data-rd-reveal src="/rd/images/how-0.jpg" alt="RoundDigital engineering team" className="rd-img" style={{ aspectRatio: "21/9", borderRadius: 40 }} />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <RdLayout>
      <Seo
        title="AI Agent Development & Enterprise IT Services"
        description="Round Digital engineers the AI-first enterprise — production AI agents, secure cloud platforms and custom software for global enterprises. Toronto, Dallas & Pune."
        keywords="AI agent development, enterprise AI, cloud engineering, custom software, digital transformation, cybersecurity, Toronto, Dallas, Pune"
      />
      <Hero />
      <Logos />
      <Services />
      <Journey />
      <Industries />
      <Benefits />
      <CaseStudies />
      <Testimonials />
      <ProcessGrid />
      <Technology />
      <Insights />
      <Careers />
      <FinalCta />
    </RdLayout>
  );
}
