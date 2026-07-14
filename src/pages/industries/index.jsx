import { useState } from "react";
import Link from "next/link";
import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { Arrow, RdButton } from "@/components/rd/ui";
import { INDUSTRIES } from "@/data/rdHome";

const MONO = "'Space Mono',monospace";
const wrap = { maxWidth: 1280, margin: "0 auto" };

export default function IndustriesPage() {
  const [active, setActive] = useState(0);
  const ind = INDUSTRIES[active];
  return (
    <RdLayout>
      <Seo
        title="AI Solutions for Retail, Banking & Healthcare"
        description="Industry-specific AI and automation: retail support at scale, zero-downtime banking modernization, HIPAA-safe healthcare AI, supply-chain intelligence and more."
        keywords="AI solutions by industry, retail AI, banking modernization, healthcare AI, manufacturing automation, SaaS AI"
      />
      <section style={{ padding: "96px 5% 64px" }}>
        <div style={{ ...wrap, maxWidth: 900 }}>
          <p data-rd-reveal style={{ margin: "0 0 16px", font: `700 14px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>INDUSTRIES</p>
          <h1 data-rd-reveal data-rd-reveal-delay="0.05" style={{ margin: "0 0 24px", font: `700 clamp(44px,4.6vw,76px)/1.06 ${MONO}`, letterSpacing: "-0.01em" }}>
            Engineered for your industry.
          </h1>
          <p data-rd-reveal data-rd-reveal-delay="0.1" style={{ margin: 0, fontSize: 20, lineHeight: 1.65, color: "var(--rd-text-2)" }}>
            Deep domain expertise combined with AI engineering excellence. We solve the problems
            that keep industry leaders awake at night.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 5% 64px" }}>
        <div data-rd-reveal className="rd-tabs" style={{ ...wrap, display: "grid", gridTemplateColumns: "0.9fr 1.4fr", borderRadius: 40, overflow: "hidden" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {INDUSTRIES.map((it, i) => (
              <button key={it.name} type="button" onClick={() => setActive(i)} style={{ textAlign: "left", padding: "26px 32px", background: active === i ? "var(--rd-card)" : "transparent", color: "var(--rd-text)", border: "none", borderBottom: i < INDUSTRIES.length - 1 ? "1px solid var(--rd-divider)" : "none", cursor: "pointer", font: `700 20px ${MONO}`, transition: "background 0.25s ease" }}>
                {it.name}
              </button>
            ))}
          </div>
          <div style={{ background: "var(--rd-card)", padding: 56, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20, minHeight: 460 }}>
            <p style={{ margin: 0, font: `700 14px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>{ind.tag}</p>
            <h3 style={{ margin: 0, font: `700 clamp(28px,2.4vw,40px)/1.2 ${MONO}` }}>{ind.title}</h3>
            <p style={{ margin: 0, fontSize: 18, color: "var(--rd-text-2)" }}>{ind.body}</p>
            <Link href="/contact" style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 500, marginTop: 8 }}>Learn more <Arrow /></Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 5% 112px" }}>
        <div data-rd-reveal style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap", border: "1px solid var(--rd-border)", borderRadius: 40, padding: "56px 8%" }}>
          <div>
            <h2 style={{ margin: "0 0 8px", font: `700 clamp(26px,2.4vw,36px) ${MONO}` }}>Don&apos;t see your industry?</h2>
            <p style={{ margin: 0, fontSize: 18, color: "var(--rd-text-2)" }}>If it has workflows, it has agent-shaped opportunities. Let&apos;s find yours.</p>
          </div>
          <RdButton href="/contact">Book a call</RdButton>
        </div>
      </section>
    </RdLayout>
  );
}
