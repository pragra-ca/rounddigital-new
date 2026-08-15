import { CREDENTIALS } from "@/content/credentials.mjs";

const LABEL = {
  earned: "Held",
  "in-progress": "In progress",
  planned: "On roadmap",
};

/**
 * Renders the certification roadmap honestly. A credential only reads as held
 * when its status is "earned"; everything else is visibly labelled with its
 * target. See spec §8 and §11.
 */
export default function CredentialGrid({ status, heading, intro }) {
  const items = status ? CREDENTIALS.filter((c) => c.status === status) : CREDENTIALS;
  if (items.length === 0) return null;

  return (
    <section style={{ padding: "72px 5%" }}>
      <div className="rd-container">
        {heading ? (
          <h2 style={{ margin: "0 0 12px", font: "700 clamp(28px,2.4vw,40px)/1.15 var(--rd-font-display)" }}>
            {heading}
          </h2>
        ) : null}
        {intro ? (
          <p style={{ margin: "0 0 40px", maxWidth: 680, fontSize: 18, color: "var(--rd-text-2)" }}>
            {intro}
          </p>
        ) : null}
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 16,
          }}
        >
          {items.map((c) => (
            <li
              key={c.id}
              style={{
                border: "1px solid var(--rd-border)",
                borderRadius: 12,
                padding: "24px 22px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                <span style={{ font: "700 12px var(--rd-font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--rd-accent-text)" }}>
                  {LABEL[c.status]}
                </span>
                {c.status !== "earned" ? (
                  <span style={{ fontSize: 13, color: "var(--rd-text-3)" }}>{c.targetQuarter}</span>
                ) : null}
              </div>
              <h3 style={{ margin: "0 0 8px", font: "700 18px var(--rd-font-display)" }}>{c.name}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--rd-text-2)" }}>{c.body}</p>
              <p style={{ margin: "12px 0 0", fontSize: 13, color: "var(--rd-text-3)" }}>{c.jurisdiction}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
