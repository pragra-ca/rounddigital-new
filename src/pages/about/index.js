import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { CountUp, RdButton } from "@/components/rd/ui";

const MONO = "'Space Mono',monospace";
const wrap = { maxWidth: 1280, margin: "0 auto" };

const VALUES = [
  { n: "01", t: "Ship > talk", d: "Agents in production, not decks in review. Every engagement has a working system milestone inside 6 weeks." },
  { n: "02", t: "Security first", d: "SOC 2 / ISO 27001-aligned delivery. AI systems inherit enterprise controls — never the other way around." },
  { n: "03", t: "ROI or nothing", d: "We model the business case before we write code, and we only take projects we believe clear it within 12 months." },
];
const STATS = [
  { n: "100+", l: "Projects delivered" },
  { n: "20+", l: "Senior consultants" },
  { n: "3", l: "Global offices" },
  { n: "10+", l: "Years shipping" },
];
const DISCIPLINES = ["AI & agent engineering", "Cloud & platform", "Cybersecurity & compliance", "Data & analytics", "Product & custom software", "Delivery & program management"];
const OFFICES = [
  { tag: "HQ · CANADA", city: "Mississauga", lines: ["160B - 110 Matheson Blvd W", "Mississauga, ON L5M 6B8"] },
  { tag: "US · TEXAS", city: "Dallas", lines: ["450 Century Pkwy, Ste 250", "Allen, TX 75013"] },
  { tag: "INDIA · MAHARASHTRA", city: "Pune", lines: ["Supreme HQ, 302, Mumbai-Pune Expressway", "Baner Annex, Baner, Pune 411045"] },
];

const STORY = [
  "Round Digital started with a simple frustration. Growing businesses were being sold enterprise software promises and delivered junior-freelancer reality — endless timelines, surprise invoices, and code nobody could maintain after handover.",
  "Our founders had spent years shipping systems for banks, global retailers and Fortune 500s, and they knew the discipline that made those projects succeed: senior engineers, tight scope, security from day one, and relentless focus on the business outcome. So they set out to bring exactly that discipline to companies that could never justify a Big-Four price tag.",
  "A decade and 100+ projects later, that's still the whole idea. We're a senior, cross-functional team across Toronto, Dallas and Pune — the engineers, architects and delivery leads who've shipped real systems into production, staffed directly onto your project. Enterprise-grade engineering, right-sized and honestly priced, built by the people who actually build it.",
];

const GUARANTEES = [
  { t: "Fixed-price discovery", d: "You know the investment before you ever commit to a build. No open-ended meters." },
  { t: "Senior engineers only", d: "No juniors learning on your budget, no anonymous offshore bench — the people you meet build your system." },
  { t: "You own the IP", d: "Full source code, documentation and transfer on every engagement. No lock-in, ever." },
  { t: "ROI or we say no", d: "We only take on work we believe pays for itself within twelve months — and we'll tell you if it won't." },
];

export default function AboutPage() {
  return (
    <RdLayout>
      <Seo
        title="About Us: Enterprise Engineering, Right-Sized for SMBs"
        description="Round Digital brings Fortune-500 engineering discipline to growing businesses. 20+ senior engineers across Toronto, Dallas and Pune — fixed price, senior-only, you own the IP."
        keywords="about RoundDigital, software company for small business, SMB engineering partner, AI consulting firm, Mississauga, Toronto, Dallas, Pune"
      />
      <section style={{ padding: "96px 5% 64px" }}>
        <div style={{ ...wrap, maxWidth: 900 }}>
          <p data-rd-reveal style={{ margin: "0 0 16px", font: `700 14px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>ABOUT ROUND DIGITAL</p>
          <h1 data-rd-reveal data-rd-reveal-delay="0.05" style={{ margin: "0 0 24px", font: `700 clamp(44px,4.6vw,76px)/1.06 ${MONO}`, letterSpacing: "-0.01em" }}>
            Enterprise engineering, right-sized for you.
          </h1>
          <p data-rd-reveal data-rd-reveal-delay="0.1" style={{ margin: 0, fontSize: 20, lineHeight: 1.65, color: "var(--rd-text-2)" }}>
            We bring the engineering discipline that Fortune 500s pay millions for to small and
            mid-sized businesses — delivered by 20+ senior consultants across Toronto, Dallas
            and Pune. No juniors on your budget, no anonymous bench: the people you meet on the
            first call are the people who build your system.
          </p>
        </div>
      </section>

      {/* Our story */}
      <section style={{ padding: "0 5% 88px" }}>
        <div className="rd-grid-2" style={{ ...wrap, display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 56, alignItems: "start" }}>
          <h2 data-rd-reveal style={{ margin: 0, font: `700 clamp(28px,2.6vw,42px)/1.15 ${MONO}` }}>Our story</h2>
          <div data-rd-reveal data-rd-reveal-delay="0.05" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {STORY.map((p, i) => (
              <p key={i} style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: "var(--rd-text-2)" }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 5% 80px" }}>
        <div className="rd-grid-3" style={{ ...wrap, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {VALUES.map((v) => (
            <div key={v.n} data-rd-reveal className="rd-card" style={{ padding: "40px 32px", borderRadius: 28 }}>
              <div style={{ font: `700 15px ${MONO}`, color: "var(--rd-accent)", marginBottom: 14 }}>{v.n}</div>
              <h3 style={{ margin: "0 0 12px", font: `700 22px ${MONO}` }}>{v.t}</h3>
              <p style={{ margin: 0, fontSize: 16, color: "var(--rd-text-2)" }}>{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scale band */}
      <section style={{ padding: "0 5% 80px" }}>
        <div className="rd-grid-4" style={{ ...wrap, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {STATS.map((s) => (
            <div key={s.l} data-rd-reveal className="rd-card" style={{ padding: "36px 28px", borderRadius: 24 }}>
              <div style={{ font: `700 44px ${MONO}`, color: "var(--rd-accent)" }}><CountUp value={s.n} /></div>
              <div style={{ color: "var(--rd-text-3)", fontSize: 15 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Disciplines */}
      <section style={{ padding: "0 5% 80px" }}>
        <div className="rd-grid-2" style={{ ...wrap, display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "start" }}>
          <div data-rd-reveal>
            <p style={{ margin: "0 0 16px", font: `700 14px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>HOW WE&apos;RE BUILT</p>
            <h2 style={{ margin: "0 0 20px", font: `700 clamp(30px,2.8vw,44px)/1.15 ${MONO}` }}>A senior bench across every discipline.</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "var(--rd-text-2)" }}>
              Not a body shop, not a two-person studio. Round Digital is a senior,
              cross-functional team spanning Toronto, Dallas and Pune — the engineers,
              architects and delivery leads who&apos;ve shipped AI and enterprise systems into
              production, staffed onto your project directly.
            </p>
          </div>
          <div className="rd-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {DISCIPLINES.map((d) => (
              <div key={d} data-rd-reveal className="rd-card" style={{ display: "flex", alignItems: "center", gap: 12, padding: "18px 20px", borderRadius: 18 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--rd-accent)", flexShrink: 0 }} />
                <span style={{ font: `700 15px ${MONO}` }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ padding: "0 5% 88px" }}>
        <div style={wrap}>
          <div data-rd-reveal style={{ marginBottom: 40 }}>
            <p style={{ margin: "0 0 16px", font: `700 14px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>OUR PROMISE</p>
            <h2 style={{ margin: 0, font: `700 clamp(30px,2.8vw,48px)/1.15 ${MONO}` }}>What we guarantee, in writing.</h2>
          </div>
          <div className="rd-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {GUARANTEES.map((g) => (
              <div key={g.t} data-rd-reveal className="rd-card" style={{ padding: "32px 28px", borderRadius: 24 }}>
                <h3 style={{ margin: "0 0 12px", font: `700 19px ${MONO}` }}>{g.t}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--rd-text-2)" }}>{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section style={{ padding: "0 5% 96px" }}>
        <div className="rd-grid-3" style={{ ...wrap, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {OFFICES.map((o) => (
            <div key={o.city} data-rd-reveal className="rd-card" style={{ padding: "36px 32px", borderRadius: 28 }}>
              <div style={{ font: `700 11px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)", marginBottom: 12 }}>{o.tag}</div>
              <h3 style={{ margin: "0 0 10px", font: `700 24px ${MONO}` }}>{o.city}</h3>
              <div style={{ fontSize: 15, lineHeight: 1.6, color: "var(--rd-text-2)" }}>
                {o.lines.map((l) => <div key={l}>{l}</div>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 5% 112px" }}>
        <div data-rd-reveal style={{ ...wrap, textAlign: "center", border: "1px solid var(--rd-border)", borderRadius: 40, padding: "80px 8%" }}>
          <h2 style={{ margin: "0 0 16px", font: `700 clamp(32px,3vw,52px)/1.15 ${MONO}` }}>Want to work with us?</h2>
          <p style={{ margin: "0 auto 32px", maxWidth: 520, fontSize: 20, color: "var(--rd-text-2)" }}>
            Meet the senior engineers who&apos;ll actually build your system.
          </p>
          <RdButton href="/contact">Book a call</RdButton>
        </div>
      </section>
    </RdLayout>
  );
}
