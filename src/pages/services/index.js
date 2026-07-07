import Link from "next/link";
import SfLayout from "@/components/sf/Layout";
import Seo from "@/components/seo";
import { Eyebrow, PillLink } from "@/components/sf/ui";
import { sfServices } from "@/data/sfServices";

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
    <SfLayout>
      <Seo
        title="Enterprise IT & AI Services in Toronto & Dallas"
        description="AI agent development, cloud migration, cybersecurity, custom software, data engineering and digital transformation — one senior team, one delivery rhythm."
        keywords="enterprise IT services, AI services, cloud migration, cybersecurity services, custom software development, data engineering, digital transformation consulting"
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden px-5 pb-[50px] pt-[70px] sm:px-8 lg:px-11"
        style={{ borderBottom: "1px solid var(--sf-border)" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[180px] -top-[120px] h-[560px] w-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, var(--sf-hero-glow), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-[1240px]">
          <Eyebrow data-reveal className="mb-4">
            Our services
          </Eyebrow>
          <h1
            data-reveal
            data-reveal-delay="0.08"
            className="m-0 mb-[18px] max-w-[20ch] text-[40px] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-[54px]"
          >
            Everything it takes to ship enterprise AI.
          </h1>
          <p
            data-reveal
            data-reveal-delay="0.16"
            className="m-0 max-w-[56ch] text-[16px] leading-[1.6]"
            style={{ color: "var(--sf-muted)" }}
          >
            Eight services, one senior team, one operating rhythm: discover, prototype,
            ship, operate. Whether you need an AI agent in production or a legacy system
            retired, the path is the same — and it starts with a working milestone inside
            six weeks.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-5 py-[50px] sm:px-8 lg:px-11">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {ORDER.map((slug, i) => {
            const service = sfServices[slug];
            return (
              <Link
                key={slug}
                href={`/services/${slug}`}
                data-reveal
                data-reveal-delay={`${(i % 3) * 0.08}`}
                className="sf-card sf-card-hover group flex flex-col gap-[11px] p-7"
              >
                <span
                  className="sf-mono text-[11px] font-medium uppercase tracking-[0.12em]"
                  style={{ color: "var(--sf-accent)" }}
                >
                  {service.eyebrow}
                </span>
                <span className="sf-sora text-[20px] font-bold">{service.name}</span>
                <span className="text-[14px] leading-[1.55]" style={{ color: "var(--sf-muted)" }}>
                  {service.tagline}
                </span>
                <span
                  className="sf-sora mt-auto text-[13px] font-semibold transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: "var(--sf-accent)" }}
                >
                  Learn more →
                </span>
              </Link>
            );
          })}
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
              Not sure where to start?
            </h2>
            <p className="m-0 text-[14.5px]" style={{ color: "var(--sf-muted)" }}>
              One call with a senior engineer, and you&apos;ll leave with a plan.
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
