const MONO = "'Space Mono',monospace";

/** Shared legal-page layout (Privacy, Terms) in the RoundDigital style. */
export function RdLegal({ eyebrow, title, intro, sections }) {
  return (
    <>
      <section style={{ padding: "96px 5% 40px", borderBottom: "1px solid var(--rd-border)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p data-rd-reveal style={{ margin: "0 0 16px", font: `700 14px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>{eyebrow}</p>
          <h1 data-rd-reveal data-rd-reveal-delay="0.05" style={{ margin: "0 0 20px", font: `700 clamp(40px,4.4vw,64px)/1.06 ${MONO}` }}>{title}</h1>
          <p data-rd-reveal data-rd-reveal-delay="0.1" style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: "var(--rd-text-2)" }}>{intro}</p>
        </div>
      </section>
      <section style={{ padding: "56px 5% 96px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", gap: 36 }}>
          {sections.map((s) => (
            <div key={s.title} data-rd-reveal>
              <h2 style={{ margin: "0 0 12px", font: `700 22px ${MONO}` }}>{s.title}</h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "var(--rd-text-2)" }}>{s.body}</p>
            </div>
          ))}
          <div data-rd-reveal className="rd-card" style={{ padding: "32px 28px", borderRadius: 24 }}>
            <h2 style={{ margin: "0 0 8px", font: `700 18px ${MONO}` }}>Questions?</h2>
            <p style={{ margin: 0, fontSize: 15, color: "var(--rd-text-2)" }}>
              Email{" "}
              <a href="mailto:info@rounddigital.co" style={{ color: "var(--rd-accent)", fontWeight: 600 }}>info@rounddigital.co</a>
              {" "}— we respond within one business day.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
