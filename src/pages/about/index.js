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

export default function AboutPage() {
  return (
    <RdLayout>
      <Seo
        title="About Us: Senior AI & Software Consultants"
        description="Meet Round Digital — 20+ senior consultants across Toronto, Dallas and Pune. The engineers you meet on the first call are the ones who build your system."
        keywords="about RoundDigital, AI consulting firm, software consultants, Mississauga, Toronto, Dallas, Pune"
      />
      <section style={{ padding: "96px 5% 64px" }}>
        <div style={{ ...wrap, maxWidth: 900 }}>
          <p data-rd-reveal style={{ margin: "0 0 16px", font: `700 14px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>ABOUT ROUND DIGITAL</p>
          <h1 data-rd-reveal data-rd-reveal-delay="0.05" style={{ margin: "0 0 24px", font: `700 clamp(44px,4.6vw,76px)/1.06 ${MONO}`, letterSpacing: "-0.01em" }}>
            A senior team that bets its name on shipping.
          </h1>
          <p data-rd-reveal data-rd-reveal-delay="0.1" style={{ margin: 0, fontSize: 20, lineHeight: 1.65, color: "var(--rd-text-2)" }}>
            20+ expert consultants across Toronto, Dallas and Pune. No juniors learning on your
            dime, no handoffs to an anonymous bench — the people you meet on the first call are
            the people who build your system.
          </p>
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
