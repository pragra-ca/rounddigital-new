import SfLayout from "@/components/sf/Layout";
import Seo from "@/components/seo";
import { CountUp, Eyebrow, PillLink } from "@/components/sf/ui";

const VALUES = [
  {
    num: "01",
    title: "Ship > talk",
    desc: "Agents in production, not decks in review. Every engagement has a working system milestone inside 6 weeks.",
  },
  {
    num: "02",
    title: "Security first",
    desc: "SOC 2 / ISO 27001-aligned delivery. AI systems inherit enterprise controls — never the other way around.",
  },
  {
    num: "03",
    title: "ROI or nothing",
    desc: "We model the business case before we write code, and we only take projects we believe clear it within 12 months.",
  },
];

const STATS = [
  { value: "100+", label: "Projects delivered" },
  { value: "20+", label: "Senior consultants" },
  { value: "3", label: "Global offices" },
  { value: "10+", label: "Years shipping" },
];

const DISCIPLINES = [
  "AI & agent engineering",
  "Cloud & platform",
  "Cybersecurity & compliance",
  "Data & analytics",
  "Product & custom software",
  "Delivery & program management",
];

const OFFICES = [
  {
    tag: "HQ · CANADA",
    city: "Mississauga",
    lines: ["160B - 110 Matheson Blvd W", "Mississauga, ON L5M 6B8", "Mon–Fri 9:00–18:00"],
  },
  {
    tag: "US · TEXAS",
    city: "Dallas",
    lines: ["450 Century Pkwy, Ste 250", "Allen, TX 75013", "Mon–Fri 9:00–18:00"],
  },
  {
    tag: "INDIA · MAHARASHTRA",
    city: "Pune",
    lines: [
      "Supreme HQ, 302, Mumbai-Pune Expressway",
      "Baner Annex, Baner, Pune 411045",
      "Mon–Fri 9:00–18:00 IST",
    ],
  },
];

export default function AboutPage() {
  return (
    <SfLayout>
      <Seo
        title="About Us: Senior AI & Software Consultants"
        description="Meet RoundDigital — 20+ senior consultants across Toronto, Dallas and Pune. The engineers you meet on the first call are the ones who build your system. No juniors, no bench."
        keywords="about RoundDigital, AI consulting firm, software consultants, IT consulting team, Mississauga, Toronto, Dallas"
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden px-5 pb-14 pt-[70px] sm:px-8 lg:px-11"
        style={{ borderBottom: "1px solid var(--sf-border)" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[260px] -left-[160px] h-[560px] w-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, var(--sf-hero-glow), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-[1240px]">
          <div className="max-w-[760px]">
            <Eyebrow data-reveal className="mb-4">
              About RoundDigital
            </Eyebrow>
            <h1
              data-reveal
              data-reveal-delay="0.08"
              className="m-0 mb-5 text-[38px] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-[54px]"
            >
              A senior team that bets its name on shipping.
            </h1>
            <p
              data-reveal
              data-reveal-delay="0.16"
              className="m-0 text-[16px] leading-[1.65]"
              style={{ color: "var(--sf-muted)" }}
            >
              20+ expert consultants across Toronto, Dallas and Pune. No juniors learning on
              your dime, no handoffs to an anonymous bench — the people you meet on the first
              call are the people who build your system.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 py-14 sm:px-8 lg:px-11">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[18px] md:grid-cols-3">
          {VALUES.map((value, i) => (
            <div
              key={value.num}
              data-reveal
              data-reveal-delay={`${i * 0.08}`}
              className="sf-card sf-card-hover rounded-2xl p-7"
            >
              <div className="sf-mono mb-3 text-[15px] font-extrabold" style={{ color: "var(--sf-accent)" }}>
                {value.num}
              </div>
              <div className="sf-sora mb-[10px] text-[19px] font-bold">{value.title}</div>
              <div className="text-[14px] leading-[1.55]" style={{ color: "var(--sf-muted)" }}>
                {value.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scale / by the numbers */}
      <section
        className="grid grid-cols-2 gap-px lg:grid-cols-4"
        style={{
          backgroundColor: "var(--sf-border)",
          borderTop: "1px solid var(--sf-border)",
          borderBottom: "1px solid var(--sf-border)",
        }}
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="px-7 py-8 transition-colors duration-[450ms]"
            style={{ backgroundColor: "var(--sf-bg)" }}
          >
            <div
              className="sf-sora text-[30px] font-extrabold sm:text-[38px]"
              style={{ color: "var(--sf-accent)" }}
            >
              <CountUp value={stat.value} />
            </div>
            <div className="text-[13px]" style={{ color: "var(--sf-faint)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* Expertise, not headcount */}
      <section className="px-5 py-14 sm:px-8 lg:px-11">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div data-reveal>
            <Eyebrow className="mb-4">How we&apos;re built</Eyebrow>
            <h2 className="m-0 mb-4 text-[26px] font-bold tracking-[-0.02em] sm:text-[34px]">
              A senior bench across every discipline you need.
            </h2>
            <p className="m-0 text-[15px] leading-[1.7]" style={{ color: "var(--sf-muted)" }}>
              We&apos;re not a body shop and we&apos;re not a two-person studio. RoundDigital
              is a senior, cross-functional team spanning Toronto, Dallas and Pune — the
              engineers, architects and delivery leads who&apos;ve shipped AI and enterprise
              systems into production, staffed onto your project directly. You get the depth
              of a large firm and the accountability of the people actually doing the work.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
            {DISCIPLINES.map((discipline, i) => (
              <div
                key={discipline}
                data-reveal
                data-reveal-delay={`${(i % 2) * 0.08}`}
                className="sf-card sf-card-hover flex items-center gap-3 rounded-2xl px-5 py-4"
              >
                <span
                  className="h-[7px] w-[7px] shrink-0 rounded-full"
                  style={{
                    backgroundColor: "var(--sf-accent)",
                    boxShadow: "0 0 8px var(--sf-accent-glow)",
                  }}
                />
                <span className="sf-sora text-[15px] font-semibold">{discipline}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="px-5 pb-14 sm:px-8 lg:px-11">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[18px] md:grid-cols-3">
          {OFFICES.map((office, i) => (
            <div
              key={office.city}
              data-reveal
              data-reveal-delay={`${i * 0.08}`}
              className="sf-card sf-card-hover rounded-2xl p-7"
            >
              <div
                className="sf-mono mb-3 text-[11px] font-semibold tracking-[0.12em]"
                style={{ color: "var(--sf-accent)" }}
              >
                {office.tag}
              </div>
              <div className="sf-sora mb-2 text-[20px] font-bold">{office.city}</div>
              <div className="text-[14px] leading-[1.6]" style={{ color: "var(--sf-muted)" }}>
                {office.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
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
              Want to work with us?
            </h2>
            <p className="m-0 text-[14.5px]" style={{ color: "var(--sf-muted)" }}>
              Meet the senior engineers who&apos;ll actually build your system.
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
