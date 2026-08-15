import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { FACTS } from "@/content/facts.mjs";
import { PILLARS, allNaicsCodes } from "@/content/naics.mjs";
import { PAST_PERFORMANCE } from "@/content/past-performance.mjs";

const wrap = { maxWidth: 900, margin: "0 auto" };
const h2 = {
  margin: "0 0 12px",
  font: "700 13px var(--rd-font-mono)",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--rd-accent-text)",
};
const block = { marginBottom: 34 };

function PrintButton() {
  return (
    <button
      type="button"
      className="rd-btn rd-btn-ghost no-print"
      onClick={() => window.print()}
    >
      Download as PDF
    </button>
  );
}

export default function CapabilityStatement() {
  const delivery = FACTS.locations.filter((l) => l.status === "delivery");

  return (
    <RdLayout>
      <Seo
        title="Capability Statement"
        description="Round Digital capability statement: core competencies, differentiators, NAICS and PSC codes, past performance and company data for government and enterprise buyers."
        keywords="capability statement, small business IT contractor, women owned technology company"
      />
      <section style={{ padding: "72px 5%" }} className="rd-capability">
        <div style={wrap}>
          <header style={{ ...block, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
            <div>
              <h1 style={{ margin: "0 0 8px", font: "700 clamp(30px,3vw,46px)/1.1 var(--rd-font-display)" }}>
                Capability Statement
              </h1>
              <p style={{ margin: 0, fontSize: 17, color: "var(--rd-text-2)" }}>
                {FACTS.legalName} — women-owned technology and workforce services
              </p>
            </div>
            <PrintButton />
          </header>

          <div style={block}>
            <h2 style={h2}>Core competencies</h2>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 16, lineHeight: 1.8, color: "var(--rd-text-2)" }}>
              {PILLARS.map((p) => (
                <li key={p.id}>
                  <strong style={{ color: "var(--rd-text)" }}>{p.name}</strong> — {p.primaryNaics.label}
                </li>
              ))}
            </ul>
          </div>

          <div style={block}>
            <h2 style={h2}>Differentiators</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: "var(--rd-text-2)" }}>
              We close the delivery loop. Most vendors build a system and leave; we build
              it, staff it, train the people who operate it, and measure the outcome. We
              own and operate our own learning platform — SCORM 1.2, SCORM 2004 and xAPI
              conformant — rather than subcontracting training delivery. Our founder&apos;s
              twenty-year background is in audit and quality assurance, which is why
              assurance is designed in rather than added at the end.
            </p>
          </div>

          <div style={block}>
            <h2 style={h2}>Past performance</h2>
            {PAST_PERFORMANCE.map((e) => (
              <p key={e.id} style={{ margin: "0 0 12px", fontSize: 16, lineHeight: 1.7, color: "var(--rd-text-2)" }}>
                <strong style={{ color: "var(--rd-text)" }}>{e.client}</strong> ({e.period}) — {e.outcome}
              </p>
            ))}
          </div>

          <div style={block}>
            <h2 style={h2}>Company data</h2>
            <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "180px 1fr", gap: "10px 20px", fontSize: 16 }}>
              <dt style={{ color: "var(--rd-text-3)" }}>Legal name</dt>
              <dd style={{ margin: 0 }}>{FACTS.legalName}</dd>
              <dt style={{ color: "var(--rd-text-3)" }}>Predecessor</dt>
              <dd style={{ margin: 0 }}>{FACTS.predecessor}</dd>
              <dt style={{ color: "var(--rd-text-3)" }}>Employees</dt>
              <dd style={{ margin: 0 }}>{FACTS.employeeCount}</dd>
              <dt style={{ color: "var(--rd-text-3)" }}>Delivery locations</dt>
              <dd style={{ margin: 0 }}>
                {delivery.map((l) => `${l.city}, ${l.country}`).join(" · ")}
              </dd>
              <dt style={{ color: "var(--rd-text-3)" }}>NAICS</dt>
              <dd style={{ margin: 0, font: "15px var(--rd-font-mono)" }}>
                {[...new Set(allNaicsCodes())].join(" · ")}
              </dd>
              <dt style={{ color: "var(--rd-text-3)" }}>Business size</dt>
              <dd style={{ margin: 0 }}>Small under all listed size standards</dd>
              <dt style={{ color: "var(--rd-text-3)" }}>Certifications</dt>
              <dd style={{ margin: 0 }}>None held. Roadmap published at /government.</dd>
            </dl>
          </div>

          <div style={block}>
            <h2 style={h2}>Contact</h2>
            <p style={{ margin: 0, fontSize: 16, color: "var(--rd-text-2)" }}>
              info@rounddigital.co · +1 905 407 5009
            </p>
          </div>
        </div>
      </section>
    </RdLayout>
  );
}
