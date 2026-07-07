import Link from "next/link";
import SfLayout from "@/components/sf/Layout";
import Seo from "@/components/seo";
import { Eyebrow, PillLink } from "@/components/sf/ui";
import { jobPositions } from "@/data/jobPositions";

export async function getStaticProps() {
  return {
    props: {
      jobs: jobPositions,
    },
  };
}

const BENEFITS = [
  {
    num: "01",
    title: "Competitive compensation",
    desc: "Industry-leading salaries, performance bonuses and equity opportunities for senior roles.",
  },
  {
    num: "02",
    title: "Health & wellness",
    desc: "Comprehensive health, dental and vision coverage, plus mental health support.",
  },
  {
    num: "03",
    title: "Remote flexibility",
    desc: "Work from anywhere with flexible hours — or from our Mississauga and Dallas offices.",
  },
  {
    num: "04",
    title: "Learning & development",
    desc: "A real training budget: certifications, conferences and dedicated learning time.",
  },
  {
    num: "05",
    title: "Senior-only teams",
    desc: "Work alongside experienced engineers on production AI systems — no busywork tickets.",
  },
  {
    num: "06",
    title: "Ship real things",
    desc: "Every project has a working milestone inside six weeks. You'll see your work in production.",
  },
];

export default function CareersPage({ jobs }) {
  return (
    <SfLayout>
      <Seo
        title="Careers: Build Production AI With a Senior Team"
        description="Join RoundDigital's engineering team in Toronto, Dallas or remote. Senior-only teams shipping AI agents, cloud platforms and enterprise software. See open roles."
        keywords="RoundDigital careers, AI engineer jobs, software developer jobs Toronto, remote engineering jobs, cloud engineer jobs Dallas"
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
            Careers
          </Eyebrow>
          <h1
            data-reveal
            data-reveal-delay="0.08"
            className="m-0 mb-[18px] max-w-[20ch] text-[38px] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-[54px]"
          >
            Do the best work of your career. In production.
          </h1>
          <p
            data-reveal
            data-reveal-delay="0.16"
            className="m-0 max-w-[56ch] text-[16px] leading-[1.6]"
            style={{ color: "var(--sf-muted)" }}
          >
            We&apos;re a senior team shipping AI agents, cloud platforms and enterprise
            software for clients across North America. If you like your code in production
            and your teammates experienced, you&apos;ll like it here.
          </p>
        </div>
      </section>

      {/* Open positions */}
      <section className="px-5 py-[50px] sm:px-8 lg:px-11">
        <div className="mx-auto max-w-[1240px]">
          <div data-reveal className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="m-0 text-[26px] font-bold tracking-[-0.02em] sm:text-[32px]">
              Open positions
            </h2>
            <span className="sf-mono text-[12px] font-medium" style={{ color: "var(--sf-faint)" }}>
              {jobs.length} OPEN ROLE{jobs.length === 1 ? "" : "S"}
            </span>
          </div>
          <div className="flex flex-col gap-[14px]">
            {jobs.map((job, i) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                data-reveal
                data-reveal-delay={`${i * 0.06}`}
                className="sf-card sf-card-hover group grid grid-cols-1 items-center gap-4 p-6 sm:p-7 lg:grid-cols-[1.4fr_1fr_auto]"
              >
                <div className="flex flex-col gap-[6px]">
                  <span
                    className="sf-mono text-[11px] font-medium tracking-[0.1em]"
                    style={{ color: "var(--sf-accent)" }}
                  >
                    {job.department.toUpperCase()}
                  </span>
                  <span className="sf-sora text-[19px] font-bold">{job.title}</span>
                  <span className="text-[13.5px]" style={{ color: "var(--sf-muted)" }}>
                    {job.tagline}
                  </span>
                </div>
                <div
                  className="flex flex-wrap gap-x-6 gap-y-1 text-[13px]"
                  style={{ color: "var(--sf-faint)" }}
                >
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                  <span>{job.experience}</span>
                </div>
                <span
                  className="sf-sora text-[13px] font-semibold transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: "var(--sf-accent)" }}
                >
                  View role →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="px-5 py-[50px] sm:px-8 lg:px-11"
        style={{ borderTop: "1px solid var(--sf-border)" }}
      >
        <div className="mx-auto max-w-[1240px]">
          <h2
            data-reveal
            className="m-0 mb-[30px] text-[26px] font-bold tracking-[-0.02em] sm:text-[32px]"
          >
            Why people stay
          </h2>
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit, i) => (
              <div
                key={benefit.num}
                data-reveal
                data-reveal-delay={`${(i % 3) * 0.08}`}
                className="sf-card sf-card-hover rounded-2xl p-7"
              >
                <div
                  className="sf-mono mb-3 text-[15px] font-extrabold"
                  style={{ color: "var(--sf-accent)" }}
                >
                  {benefit.num}
                </div>
                <div className="sf-sora mb-[10px] text-[18px] font-bold">{benefit.title}</div>
                <div className="text-[14px] leading-[1.55]" style={{ color: "var(--sf-muted)" }}>
                  {benefit.desc}
                </div>
              </div>
            ))}
          </div>
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
              Don&apos;t see your role?
            </h2>
            <p className="m-0 text-[14.5px]" style={{ color: "var(--sf-muted)" }}>
              Strong engineers always have a seat. Send us your work and tell us what
              you&apos;d want to build.
            </p>
          </div>
          <a
            href="mailto:info@rounddigital.co?subject=Open%20application"
            className="sf-btn-primary whitespace-nowrap px-[28px] py-[15px] text-[15px]"
          >
            Send an open application
          </a>
        </div>
      </section>
    </SfLayout>
  );
}
