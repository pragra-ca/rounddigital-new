import { CountUp, Breadcrumb, RdButton } from "./ui";
import { RD_PROCESS } from "@/data/rdServices";

const MONO = "'Space Mono',monospace";
const wrap = { maxWidth: 1280, margin: "0 auto" };

/** Service detail page in the RoundDigital "Site" style (design view 5). */
export default function RdServiceDetail({ service }) {
  return (
    <>
      <section style={{ padding: "72px 5% 64px" }}>
        <div style={wrap}>
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]} />
          <p data-rd-reveal style={{ margin: "0 0 16px", font: `700 14px ${MONO}`, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--rd-accent)" }}>
            {service.tag}
          </p>
          <h1 data-rd-reveal data-rd-reveal-delay="0.05" style={{ margin: "0 0 28px", maxWidth: 940, font: `700 clamp(40px,4.2vw,72px)/1.08 ${MONO}`, letterSpacing: "-0.01em" }}>
            {service.headline}
          </h1>
          <p data-rd-reveal data-rd-reveal-delay="0.1" style={{ margin: "0 0 36px", maxWidth: 640, fontSize: 20, color: "var(--rd-text-2)" }}>
            {service.desc}
          </p>
          <div data-rd-reveal data-rd-reveal-delay="0.15" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <RdButton href="/contact">{service.cta}</RdButton>
            <RdButton href="/#case-studies" variant="ghost">See case studies</RdButton>
          </div>
        </div>
      </section>

      {/* Overview */}
      {service.overview ? (
        <section style={{ padding: "0 5% 88px" }}>
          <div className="rd-grid-2" style={{ ...wrap, display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 56, alignItems: "start" }}>
            <h2 data-rd-reveal style={{ margin: 0, font: `700 clamp(28px,2.6vw,42px)/1.15 ${MONO}` }}>
              {service.overview.heading}
            </h2>
            <div data-rd-reveal data-rd-reveal-delay="0.05" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {service.overview.paragraphs.map((p, i) => (
                <p key={i} style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: "var(--rd-text-2)" }}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Stats */}
      <section style={{ padding: "0 5% 80px" }}>
        <div style={wrap}>
          <p data-rd-reveal style={{ margin: "0 0 24px", font: `700 13px ${MONO}`, letterSpacing: "0.14em", color: "var(--rd-text-3)" }}>
            {service.statsLabel}
          </p>
          <div className="rd-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {service.stats.map((st) => (
              <div key={st.l} data-rd-reveal className="rd-card" style={{ padding: "32px 28px", borderRadius: 24 }}>
                <div style={{ font: `700 40px ${MONO}`, color: "var(--rd-accent)" }}>
                  <CountUp value={st.n} />
                </div>
                <div style={{ color: "var(--rd-text-3)", fontSize: 15, marginTop: 6 }}>{st.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section style={{ padding: "0 5% 80px" }}>
        <div style={wrap}>
          <h2 data-rd-reveal style={{ margin: "0 0 48px", font: `700 clamp(30px,2.8vw,48px)/1.15 ${MONO}` }}>What we build</h2>
          <div className="rd-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {service.builds.map((b, i) => (
              <div key={b.t} data-rd-reveal style={{ display: "flex", gap: 22, borderTop: "1px solid var(--rd-border)", padding: "28px 4px 8px" }}>
                <span style={{ font: `700 16px ${MONO}`, color: "var(--rd-accent)" }}>{`0${i + 1}`}</span>
                <div>
                  <h3 style={{ margin: "0 0 8px", font: `700 20px ${MONO}` }}>{b.t}</h3>
                  <p style={{ margin: 0, fontSize: 16, color: "var(--rd-text-2)" }}>{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      {service.outcomes ? (
        <section style={{ padding: "0 5% 80px" }}>
          <div style={wrap}>
            <h2 data-rd-reveal style={{ margin: "0 0 48px", font: `700 clamp(30px,2.8vw,48px)/1.15 ${MONO}` }}>What you get</h2>
            <div className="rd-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
              {service.outcomes.map((o) => (
                <div key={o.t} data-rd-reveal className="rd-card" style={{ padding: "36px 30px", borderRadius: 28 }}>
                  <h3 style={{ margin: "0 0 12px", font: `700 20px ${MONO}` }}>{o.t}</h3>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--rd-text-2)" }}>{o.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* How we ship */}
      <section style={{ padding: "0 5% 80px" }}>
        <div style={wrap}>
          <h2 data-rd-reveal style={{ margin: "0 0 48px", font: `700 clamp(30px,2.8vw,48px)/1.15 ${MONO}` }}>How we ship</h2>
          <div className="rd-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {RD_PROCESS.map((p) => (
              <div key={p.title} data-rd-reveal className="rd-card" style={{ padding: "32px 28px", borderRadius: 24 }}>
                <p style={{ margin: "0 0 14px", font: `700 13px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>{p.time}</p>
                <h3 style={{ margin: "0 0 10px", font: `700 20px ${MONO}` }}>{p.title}</h3>
                <p style={{ margin: 0, fontSize: 15, color: "var(--rd-text-2)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section style={{ padding: "0 5% 80px" }}>
        <div style={wrap}>
          <p data-rd-reveal style={{ margin: "0 0 20px", font: `700 13px ${MONO}`, letterSpacing: "0.14em", color: "var(--rd-text-3)" }}>STACK WE WORK WITH</p>
          <div data-rd-reveal style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {service.stack.map((t) => (
              <span key={t} className="rd-chip">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 5% 80px" }}>
        <div style={wrap}>
          <h2 data-rd-reveal style={{ margin: "0 0 40px", font: `700 clamp(30px,2.8vw,48px)/1.15 ${MONO}` }}>Questions CTOs ask us</h2>
          <div style={{ maxWidth: 940 }}>
            {service.faqs.map((f) => (
              <div key={f.q} data-rd-reveal style={{ borderTop: "1px solid var(--rd-border)", padding: "26px 4px" }}>
                <h3 style={{ margin: "0 0 10px", font: `700 19px ${MONO}` }}>{f.q}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--rd-text-2)" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outro CTA */}
      <section style={{ padding: "0 5% 112px" }}>
        <div data-rd-reveal style={{ ...wrap, textAlign: "center", border: "1px solid var(--rd-border)", borderRadius: 40, padding: "80px 8%" }}>
          <h2 style={{ margin: "0 0 16px", font: `700 clamp(32px,3vw,52px)/1.15 ${MONO}` }}>{service.outroTitle}</h2>
          <p style={{ margin: "0 auto 32px", maxWidth: 560, fontSize: 20, color: "var(--rd-text-2)" }}>{service.outroBody}</p>
          <RdButton href="/contact">Get a free consultation</RdButton>
        </div>
      </section>
    </>
  );
}
