import Link from "next/link";
import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { Arrow, RdButton } from "@/components/rd/ui";
import { rdServices } from "@/data/rdServices";

const MONO = "'Space Mono',monospace";
const ORDER = [
  "ai-machine-learning",
  "cloud-solutions",
  "cybersecurity",
  "custom-software",
  "data-analytics",
  "digital-transformation",
  "global-talent",
  "engagement-models",
];

export default function ServicesIndexPage() {
  return (
    <RdLayout>
      <Seo
        title="Enterprise IT Services & Global Talent Sourcing | Toronto, Dallas & Pune"
        description="AI agent development, cloud migration, cybersecurity, custom software, data engineering, digital transformation and global talent sourcing across every industry."
        keywords="enterprise IT services, AI services, cloud migration, cybersecurity, custom software development, data engineering, global talent sourcing, staffing"
      />
      <section style={{ padding: "96px 5% 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p data-rd-reveal style={{ margin: "0 0 16px", font: "600 15px 'Inter',sans-serif" }}>Our services</p>
          <h1 data-rd-reveal data-rd-reveal-delay="0.05" style={{ margin: "0 0 28px", maxWidth: 900, font: `700 clamp(44px,4.6vw,76px)/1.08 ${MONO}`, letterSpacing: "-0.01em" }}>
            Everything it takes to ship — and the people to run it.
          </h1>
          <p data-rd-reveal data-rd-reveal-delay="0.1" style={{ margin: 0, maxWidth: 640, fontSize: 20, color: "var(--rd-text-2)" }}>
            A complete IT practice — AI, cloud, security, software, data and transformation — plus
            global talent sourcing for any industry, technical or not. Whether you need an AI agent
            in production, a legacy system retired or forty people mobilized, it starts the same
            way: a working milestone inside six weeks.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 5% 96px" }}>
        <div className="rd-grid-4" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {ORDER.map((slug) => {
            const s = rdServices[slug];
            return (
              <Link
                key={slug}
                href={`/services/${slug}`}
                data-rd-reveal
                className="rd-card rd-card-lift"
                style={{ padding: "32px 28px", borderRadius: 28, border: "1px solid transparent", display: "flex", flexDirection: "column", gap: 14 }}
              >
                <span style={{ font: `700 12px ${MONO}`, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--rd-accent)" }}>{s.tag}</span>
                <span style={{ font: `700 22px ${MONO}`, lineHeight: 1.25 }}>{s.title}</span>
                <span style={{ fontSize: 15, lineHeight: 1.55, color: "var(--rd-text-2)", flex: 1 }}>{s.desc}</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500, fontSize: 15 }}>
                  Learn more <Arrow />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section style={{ padding: "0 5% 112px" }}>
        <div data-rd-reveal style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center", border: "1px solid var(--rd-border)", borderRadius: 40, padding: "80px 8%" }}>
          <h2 style={{ margin: "0 0 16px", font: `700 clamp(32px,3vw,52px)/1.15 ${MONO}` }}>Not sure where to start?</h2>
          <p style={{ margin: "0 auto 32px", maxWidth: 520, fontSize: 20, color: "var(--rd-text-2)" }}>
            One call with a senior engineer, and you&apos;ll leave with a plan.
          </p>
          <RdButton href="/contact">Book a call</RdButton>
        </div>
      </section>
    </RdLayout>
  );
}
