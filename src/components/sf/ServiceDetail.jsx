import Link from "next/link";
import { Chip, CountUp, Eyebrow, PillLink } from "./ui";

/**
 * Signal Field service detail template (design 5a) — renders any service
 * from the sfServices config.
 */
export default function ServiceDetail({ service }) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden px-5 pb-14 pt-16 sm:px-8 lg:px-11"
        style={{ borderBottom: "1px solid var(--sf-border)" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[180px] -top-[120px] h-[560px] w-[560px] rounded-full"
          style={{
            background: "radial-gradient(circle, var(--sf-hero-glow), transparent 65%)",
          }}
        />
        <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-5">
            <div data-reveal className="sf-mono text-[12px] font-medium" style={{ color: "var(--sf-faint)" }}>
              <Link href="/" className="transition-colors hover:text-[color:var(--sf-accent)]">
                Home
              </Link>
              {" / "}
              <Link href="/services" className="transition-colors hover:text-[color:var(--sf-accent)]">
                Services
              </Link>
              {" / "}
              <span style={{ color: "var(--sf-accent)" }}>{service.name}</span>
            </div>
            <Eyebrow data-reveal data-reveal-delay="0.06">
              {service.eyebrow}
            </Eyebrow>
            <h1
              data-reveal
              data-reveal-delay="0.12"
              className="m-0 text-[38px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[48px] lg:text-[56px]"
            >
              {service.title}
            </h1>
            <p
              data-reveal
              data-reveal-delay="0.18"
              className="m-0 max-w-[50ch] text-[16px] leading-[1.6]"
              style={{ color: "var(--sf-muted)" }}
            >
              {service.tagline}
            </p>
            <div data-reveal data-reveal-delay="0.24" className="flex flex-wrap gap-[14px]">
              <PillLink href="/contact" size="lg">
                {service.primaryCta} →
              </PillLink>
              <PillLink href="/#case-studies" variant="ghost" size="lg">
                See case studies
              </PillLink>
            </div>
          </div>

          <div
            data-reveal
            data-reveal-delay="0.2"
            className="rounded-[18px] p-[26px]"
            style={{
              border: "1px solid var(--sf-border)",
              backgroundColor: "var(--sf-surface)",
            }}
          >
            <div
              className="sf-mono mb-4 text-[11px] font-medium tracking-[0.12em]"
              style={{ color: "var(--sf-faint)" }}
            >
              {service.statsTitle}
            </div>
            <div className="grid grid-cols-2 gap-[14px]">
              {service.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-[18px]"
                  style={{ border: "1px solid var(--sf-border)" }}
                >
                  <div
                    className="sf-sora text-[26px] font-extrabold sm:text-[28px]"
                    style={{ color: "var(--sf-accent)" }}
                  >
                    <CountUp value={stat.value} />
                  </div>
                  <div className="text-[12.5px]" style={{ color: "var(--sf-faint)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="px-5 py-[60px] sm:px-8 lg:px-11">
        <div className="mx-auto max-w-[1240px]">
          <h2
            data-reveal
            className="m-0 mb-[30px] text-[28px] font-bold tracking-[-0.02em] sm:text-[34px]"
          >
            {service.buildTitle}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.builds.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                data-reveal-delay={`${i * 0.07}`}
                className="sf-card sf-card-hover flex flex-col gap-[9px] rounded-2xl px-[22px] py-6"
              >
                <span className="sf-mono text-[11px] font-medium" style={{ color: "var(--sf-accent)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="sf-sora text-[17px] font-bold">{item.title}</span>
                <span className="text-[13.5px] leading-[1.5]" style={{ color: "var(--sf-muted)" }}>
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we ship */}
      <section className="px-5 pb-[60px] sm:px-8 lg:px-11">
        <div className="mx-auto max-w-[1240px]">
          <h2
            data-reveal
            className="m-0 mb-[30px] text-[28px] font-bold tracking-[-0.02em] sm:text-[34px]"
          >
            How we ship
          </h2>
          <div
            data-reveal
            className="grid grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-4"
            style={{ border: "1px solid var(--sf-border)" }}
          >
            {service.process.map((step) => (
              <div key={step.title} className="sf-process-cell px-6 py-[26px]">
                <div className="sf-mono mb-[10px] text-[15px] font-extrabold" style={{ color: "var(--sf-accent)" }}>
                  {step.time}
                </div>
                <div className="sf-sora mb-2 text-[17px] font-bold">{step.title}</div>
                <div className="text-[13.5px] leading-[1.5]" style={{ color: "var(--sf-muted)" }}>
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="px-5 pb-[60px] sm:px-8 lg:px-11">
        <div className="mx-auto max-w-[1240px]">
          <div
            data-reveal
            className="sf-sora mb-4 text-[11px] font-semibold tracking-[0.18em]"
            style={{ color: "var(--sf-faint)" }}
          >
            STACK WE WORK WITH
          </div>
          <div className="flex flex-wrap gap-[10px]">
            {service.stack.map((item, i) => (
              <span key={item.name} data-reveal data-reveal-delay={`${i * 0.04}`}>
                <Chip accent={item.accent}>{item.name}</Chip>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 pb-[60px] sm:px-8 lg:px-11">
        <div className="mx-auto max-w-[1240px]">
          <h2
            data-reveal
            className="m-0 mb-[26px] text-[28px] font-bold tracking-[-0.02em] sm:text-[34px]"
          >
            Questions CTOs ask us
          </h2>
          <div className="flex flex-col">
            {service.faqs.map((faq, i) => (
              <div
                key={faq.q}
                data-reveal
                data-reveal-delay={`${i * 0.06}`}
                className="grid grid-cols-1 gap-3 py-[22px] lg:grid-cols-[1fr_1.4fr] lg:gap-[30px]"
                style={{
                  borderTop: "1px solid var(--sf-border)",
                  borderBottom:
                    i === service.faqs.length - 1 ? "1px solid var(--sf-border)" : "none",
                }}
              >
                <span className="sf-sora text-[16px] font-bold">{faq.q}</span>
                <span className="text-[14px] leading-[1.6]" style={{ color: "var(--sf-muted)" }}>
                  {faq.a}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-14 sm:px-8 lg:px-11">
        <div
          data-reveal
          className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[22px] px-6 py-12 text-center sm:px-[50px]"
          style={{
            border: "1px solid var(--sf-accent-border)",
            backgroundImage:
              "radial-gradient(ellipse at 50% 130%, var(--sf-accent-glow), transparent 65%)",
          }}
        >
          <h2 className="m-0 mb-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[34px]">
            {service.ctaTitle}
          </h2>
          <p
            className="mx-auto mb-6 mt-0 max-w-[48ch] text-[15px] leading-[1.6]"
            style={{ color: "var(--sf-muted)" }}
          >
            {service.ctaDesc}
          </p>
          <PillLink href="/contact" size="lg">
            Get a free consultation
          </PillLink>
        </div>
      </section>
    </>
  );
}
