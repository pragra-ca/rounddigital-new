import SfLayout from "@/components/sf/Layout";
import Seo from "@/components/seo";
import { Eyebrow, PillLink } from "@/components/sf/ui";

const INDUSTRIES = [
  {
    tag: "RETAIL & E-COMMERCE",
    title: "Service at scale",
    desc: "Support agents, demand forecasting and personalization — proven at 10,000+ inquiries a day.",
  },
  {
    tag: "BANKING & FINANCE",
    title: "Modernize without downtime",
    desc: "Legacy migration, document automation and compliance-grade controls for regulated institutions.",
  },
  {
    tag: "HEALTHCARE",
    title: "HIPAA-safe intelligence",
    desc: "Intake automation, records processing and patient communication with privacy engineered in.",
  },
  {
    tag: "MANUFACTURING & LOGISTICS",
    title: "Operations that see ahead",
    desc: "Predictive maintenance, supply-chain visibility and document flows across the chain.",
  },
  {
    tag: "SAAS & TECHNOLOGY",
    title: "AI features that ship",
    desc: "Embedded copilots, RAG search and agentic features inside your product — fast.",
  },
  {
    tag: "PROFESSIONAL SERVICES",
    title: "Billable hours, reclaimed",
    desc: "Research, drafting and knowledge agents for legal, accounting and consulting teams.",
  },
];

export default function IndustriesPage() {
  return (
    <SfLayout>
      <Seo
        title="AI Solutions for Retail, Banking & Healthcare"
        description="Industry-specific AI and automation: retail support at scale, zero-downtime banking modernization, HIPAA-safe healthcare AI, supply-chain intelligence and more."
        keywords="AI solutions by industry, retail AI, banking modernization, healthcare AI, HIPAA compliant AI, manufacturing automation, SaaS AI features, legal AI"
      />

      {/* Hero */}
      <section
        className="px-5 pb-[50px] pt-[70px] sm:px-8 lg:px-11"
        style={{ borderBottom: "1px solid var(--sf-border)" }}
      >
        <div className="mx-auto max-w-[1240px]">
          <Eyebrow data-reveal className="mb-4">
            Industries
          </Eyebrow>
          <h1
            data-reveal
            data-reveal-delay="0.08"
            className="m-0 mb-[18px] max-w-[20ch] text-[38px] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-[54px]"
          >
            Domain-deep, not domain-adjacent.
          </h1>
          <p
            data-reveal
            data-reveal-delay="0.16"
            className="m-0 max-w-[56ch] text-[16px] leading-[1.6]"
            style={{ color: "var(--sf-muted)" }}
          >
            Every industry has its own compliance regime, legacy stack and failure modes. We
            build AI that respects all three.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-5 py-[50px] sm:px-8 lg:px-11">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <div
              key={industry.tag}
              data-reveal
              data-reveal-delay={`${(i % 3) * 0.08}`}
              className="sf-card sf-card-hover flex flex-col gap-[10px] rounded-2xl p-7"
            >
              <span
                className="sf-mono text-[11px] font-medium tracking-[0.12em]"
                style={{ color: "var(--sf-accent)" }}
              >
                {industry.tag}
              </span>
              <span className="sf-sora text-[19px] font-bold">{industry.title}</span>
              <span className="text-[13.5px] leading-[1.55]" style={{ color: "var(--sf-muted)" }}>
                {industry.desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-14 sm:px-8 lg:px-11">
        <div
          data-reveal
          className="relative mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-6 overflow-hidden rounded-[22px] px-6 py-11 sm:px-[50px] lg:flex-row"
          style={{
            border: "1px solid var(--sf-accent-border)",
            backgroundImage:
              "radial-gradient(ellipse at 0% 130%, var(--sf-accent-glow), transparent 60%)",
          }}
        >
          <div className="text-center lg:text-left">
            <h2 className="m-0 mb-2 text-[24px] font-bold tracking-[-0.02em] sm:text-[28px]">
              Don&apos;t see your industry?
            </h2>
            <p className="m-0 text-[14.5px]" style={{ color: "var(--sf-muted)" }}>
              If it has workflows, it has agent-shaped opportunities. Let&apos;s find yours.
            </p>
          </div>
          <PillLink href="/contact" size="lg" className="whitespace-nowrap">
            Book a call
          </PillLink>
        </div>
      </section>
    </SfLayout>
  );
}
