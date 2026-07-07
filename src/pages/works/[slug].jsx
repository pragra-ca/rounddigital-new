import Link from "next/link";
import SfLayout from "@/components/sf/Layout";
import Seo from "@/components/seo";
import { CountUp, Eyebrow } from "@/components/sf/ui";
import { sfCaseStudies } from "@/data/sfCaseStudies";

export async function getStaticPaths() {
  return {
    paths: Object.keys(sfCaseStudies).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { slug: params.slug },
  };
}

export default function WorkDetail({ slug }) {
  const cs = sfCaseStudies[slug];

  return (
    <SfLayout>
      <Seo
        title={`Case Study: ${cs.breadcrumb}`}
        description={`${cs.title} — ${cs.stats
          .slice(0, 2)
          .map((stat) => `${stat.value} ${stat.label}`)
          .join(", ")}. See how RoundDigital delivered it, step by step.`}
        keywords={`${cs.breadcrumb} case study, ${cs.meta[0].value}, AI case study, digital transformation results, RoundDigital`}
        ogType="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: cs.title,
            description: cs.challenge,
            author: { "@type": "Organization", name: "RoundDigital" },
            publisher: {
              "@type": "Organization",
              name: "RoundDigital",
              url: "https://www.round.digital",
            },
            about: cs.meta[0].value,
          },
        ]}
      />

      {/* Hero */}
      <section
        className="px-5 pb-11 pt-14 sm:px-8 lg:px-11"
        style={{ borderBottom: "1px solid var(--sf-border)" }}
      >
        <div className="mx-auto max-w-[1240px]">
          <div data-reveal className="sf-mono mb-5 text-[12px] font-medium" style={{ color: "var(--sf-faint)" }}>
            <Link href="/" className="transition-colors hover:text-[color:var(--sf-accent)]">
              Home
            </Link>
            {" / "}
            <Link href="/#case-studies" className="transition-colors hover:text-[color:var(--sf-accent)]">
              Work
            </Link>
            {" / "}
            <span style={{ color: "var(--sf-accent)" }}>{cs.breadcrumb}</span>
          </div>
          <Eyebrow data-reveal data-reveal-delay="0.06" className="mb-[14px]">
            {cs.kicker}
          </Eyebrow>
          <h1
            data-reveal
            data-reveal-delay="0.12"
            className="m-0 mb-[22px] max-w-[22ch] text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[52px]"
          >
            {cs.title}
          </h1>
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-[13.5px]" data-reveal data-reveal-delay="0.18">
            {cs.meta.map((item) => (
              <span key={item.label} style={{ color: "var(--sf-faint)" }}>
                <strong style={{ color: "var(--sf-text)" }}>{item.label}</strong>
                <br />
                {item.value}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section
        className="grid grid-cols-2 gap-px lg:grid-cols-4"
        style={{
          backgroundColor: "var(--sf-border)",
          borderBottom: "1px solid var(--sf-border)",
        }}
      >
        {cs.stats.map((stat) => (
          <div
            key={stat.label}
            className="px-7 py-[26px] transition-colors duration-[450ms]"
            style={{ backgroundColor: "var(--sf-bg)" }}
          >
            <div
              className="sf-sora text-[26px] font-extrabold sm:text-[32px]"
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

      {/* Story */}
      <section className="px-5 py-14 sm:px-8 lg:px-11">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-[34px]">
            {[
              ["The challenge", cs.challenge],
              ["The solution", cs.solution],
              ["The results", cs.results],
            ].map(([heading, body], i) => (
              <div key={heading} data-reveal data-reveal-delay={`${i * 0.08}`}>
                <Eyebrow className="mb-3">{heading}</Eyebrow>
                <p className="m-0 text-[15px] leading-[1.7]" style={{ color: "var(--sf-muted)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[18px]">
            <div
              data-reveal
              data-reveal-delay="0.1"
              className="rounded-[14px] p-6"
              style={{
                border: "1px solid var(--sf-border)",
                backgroundColor: "var(--sf-surface)",
              }}
            >
              <div
                className="sf-mono mb-5 text-[11px] font-medium tracking-[0.12em]"
                style={{ color: "var(--sf-faint)" }}
              >
                SYSTEM AT A GLANCE
              </div>
              <div className="flex flex-col">
                {cs.diagram.map((node, i) => (
                  <div key={node.label}>
                    <div
                      className="flex items-start gap-4 rounded-xl px-4 py-3"
                      style={{ border: "1px solid var(--sf-border)" }}
                    >
                      <span
                        className="sf-mono mt-[2px] text-[11px] font-extrabold"
                        style={{ color: "var(--sf-accent)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex flex-col gap-[2px]">
                        <span className="sf-sora text-[14px] font-bold">{node.label}</span>
                        <span className="text-[12.5px]" style={{ color: "var(--sf-muted)" }}>
                          {node.sub}
                        </span>
                      </span>
                    </div>
                    {i < cs.diagram.length - 1 ? (
                      <div className="flex justify-center py-[2px]">
                        <span
                          className="text-[12px] leading-none"
                          style={{ color: "var(--sf-accent)" }}
                          aria-hidden="true"
                        >
                          ↓
                        </span>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            <div
              data-reveal
              data-reveal-delay="0.18"
              className="rounded-[14px] p-[26px]"
              style={{
                border: "1px solid var(--sf-accent-border)",
                backgroundImage:
                  "linear-gradient(160deg, var(--sf-accent-soft), transparent 60%)",
              }}
            >
              <p className="m-0 mb-[14px] text-[17px] leading-[1.6]" style={{ color: "var(--sf-text)" }}>
                &ldquo;{cs.quote.text}&rdquo;
              </p>
              <span className="sf-mono text-[12px] font-medium" style={{ color: "var(--sf-faint)" }}>
                {cs.quote.attribution}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* More outcomes */}
      <section className="px-5 pb-14 sm:px-8 lg:px-11">
        <div className="mx-auto max-w-[1240px]">
          <div data-reveal className="mb-[22px] flex items-baseline justify-between">
            <h2 className="m-0 text-[24px] font-bold tracking-[-0.02em] sm:text-[28px]">
              More outcomes
            </h2>
            <Link
              href="/#case-studies"
              className="sf-sora text-[13px] font-semibold transition-opacity hover:opacity-80"
              style={{ color: "var(--sf-accent)" }}
            >
              All work →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
            {cs.related.map((relatedSlug, i) => {
              const related = sfCaseStudies[relatedSlug];
              if (!related) return null;
              return (
                <Link
                  key={relatedSlug}
                  href={`/works/${relatedSlug}`}
                  data-reveal
                  data-reveal-delay={`${i * 0.08}`}
                  className="sf-card sf-card-hover rounded-2xl p-[26px]"
                >
                  <div className="sf-mono mb-[10px] text-[11px] font-medium" style={{ color: "var(--sf-faint)" }}>
                    {related.kicker}
                  </div>
                  <div className="sf-sora mb-2 text-[18px] font-bold">{related.title}</div>
                  <div className="text-[13.5px]" style={{ color: "var(--sf-muted)" }}>
                    {related.stats
                      .slice(0, 2)
                      .map((stat) => `${stat.value} ${stat.label}`)
                      .join(" · ")}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </SfLayout>
  );
}
