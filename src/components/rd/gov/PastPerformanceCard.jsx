import { getFact } from "@/content/facts.mjs";

const ROWS = [
  ["Challenge", "challenge"],
  ["Approach", "approach"],
  ["Outcome", "outcome"],
];

export default function PastPerformanceCard({ entry }) {
  const fact = getFact(entry.factId);
  return (
    <article style={{ border: "1px solid var(--rd-border)", borderRadius: 12, padding: "28px 26px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 18 }}>
        <h3 style={{ margin: 0, font: "700 22px var(--rd-font-display)" }}>{entry.client}</h3>
        <span style={{ font: "13px var(--rd-font-mono)", color: "var(--rd-text-3)" }}>{entry.period}</span>
      </header>
      <dl style={{ margin: 0 }}>
        {ROWS.map(([label, key]) => (
          <div key={key} style={{ marginBottom: 16 }}>
            <dt style={{ font: "700 12px var(--rd-font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--rd-accent-text)", marginBottom: 6 }}>
              {label}
            </dt>
            <dd style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--rd-text-2)" }}>
              {entry[key]}
            </dd>
          </div>
        ))}
      </dl>
      {fact ? (
        <p style={{ margin: "18px 0 0", paddingTop: 14, borderTop: "1px solid var(--rd-divider)", fontSize: 13, color: "var(--rd-text-3)" }}>
          Verifiable at{" "}
          <a href={fact.source} rel="noopener noreferrer" target="_blank" style={{ color: "var(--rd-accent-text)" }}>
            {new URL(fact.source).hostname}
          </a>
        </p>
      ) : null}
    </article>
  );
}
