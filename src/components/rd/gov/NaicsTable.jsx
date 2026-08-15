import { PILLARS } from "@/content/naics.mjs";

const cell = { padding: "14px 16px", borderBottom: "1px solid var(--rd-divider)", verticalAlign: "top" };
const head = { ...cell, font: "700 12px var(--rd-font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--rd-text-3)", textAlign: "left" };

export default function NaicsTable() {
  return (
    <div style={{ overflowX: "auto", border: "1px solid var(--rd-border)", borderRadius: 12 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720, fontSize: 15 }}>
        <caption className="sr-only">
          NAICS and PSC codes by capability, with the applicable SBA size standard
        </caption>
        <thead>
          <tr>
            <th scope="col" style={head}>Capability</th>
            <th scope="col" style={head}>Primary NAICS</th>
            <th scope="col" style={head}>Secondary</th>
            <th scope="col" style={head}>PSC</th>
            <th scope="col" style={head}>Size standard</th>
          </tr>
        </thead>
        <tbody>
          {PILLARS.map((p) => (
            <tr key={p.id}>
              <th scope="row" style={{ ...cell, fontWeight: 600, textAlign: "left" }}>{p.name}</th>
              <td style={cell}>
                <span style={{ font: `700 15px var(--rd-font-mono)` }}>{p.primaryNaics.code}</span>
                <br />
                <span style={{ color: "var(--rd-text-3)", fontSize: 14 }}>{p.primaryNaics.label}</span>
              </td>
              <td style={{ ...cell, font: "15px var(--rd-font-mono)", color: "var(--rd-text-2)" }}>
                {p.secondaryNaics.join(" · ")}
              </td>
              <td style={{ ...cell, font: "15px var(--rd-font-mono)", color: "var(--rd-text-2)" }}>
                {p.psc.join(" · ")}
              </td>
              <td style={{ ...cell, font: "15px var(--rd-font-mono)", color: "var(--rd-text-2)" }}>
                {p.sizeStandard}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
