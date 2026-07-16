import Link from "next/link";
import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { Arrow, Breadcrumb, CtaBand, RdButton } from "@/components/rd/ui";
import { RD_INDUSTRIES, buildIndustryJsonLd, getIndustry } from "@/data/rdIndustries";
import { rdServices } from "@/data/rdServices";

const MONO = "'Space Mono',monospace";
const wrap = { maxWidth: 1280, margin: "0 auto" };

export default function IndustryPage({ slug }) {
  const ind = getIndustry(slug);
  if (!ind) return null;

  return (
    <RdLayout>
      <Seo {...ind.seo} jsonLd={buildIndustryJsonLd(ind)} />

      {/* Hero */}
      <section style={{ padding: "72px 5% 64px" }}>
        <div style={wrap}>
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: ind.name }]} />
          <p data-rd-reveal style={{ margin: "0 0 16px", font: `700 14px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>
            {ind.tag}
          </p>
          <h1 data-rd-reveal data-rd-reveal-delay="0.05" style={{ margin: "0 0 28px", maxWidth: 940, font: `700 clamp(36px,3.8vw,66px)/1.1 ${MONO}`, letterSpacing: "-0.01em" }}>
            {ind.headline}
          </h1>
          <p data-rd-reveal data-rd-reveal-delay="0.1" style={{ margin: "0 0 36px", maxWidth: 660, fontSize: 20, color: "var(--rd-text-2)" }}>
            {ind.body}
          </p>
          <div data-rd-reveal data-rd-reveal-delay="0.15" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <RdButton href="/contact">Book a call</RdButton>
            <RdButton href="/#case-studies" variant="ghost">See case studies</RdButton>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "0 5% 88px" }}>
        <div className="rd-grid-2" style={{ ...wrap, display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 56, alignItems: "start" }}>
          <h2 data-rd-reveal style={{ margin: 0, font: `700 clamp(26px,2.4vw,40px)/1.15 ${MONO}` }}>{ind.title}</h2>
          <div data-rd-reveal data-rd-reveal-delay="0.05" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {ind.intro.map((p, i) => (
              <p key={i} style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: "var(--rd-text-2)" }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section style={{ padding: "0 5% 88px" }}>
        <div style={wrap}>
          <h2 data-rd-reveal style={{ margin: "0 0 40px", font: `700 clamp(28px,2.6vw,44px)/1.15 ${MONO}` }}>
            What we hear from {ind.name} leaders
          </h2>
          <div className="rd-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
            {ind.challenges.map((c) => (
              <div key={c.t} data-rd-reveal className="rd-card" style={{ padding: "32px 30px", borderRadius: 24 }}>
                <h3 style={{ margin: "0 0 10px", font: `700 20px ${MONO}`, lineHeight: 1.3 }}>{c.t}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--rd-text-2)" }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two pillars: technology + talent */}
      <section style={{ padding: "0 5% 88px" }}>
        <div className="rd-grid-2" style={{ ...wrap, display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 32 }}>
          {[ind.technology, ind.talent].map((col, idx) => {
            const items = col.items || col.roles;
            return (
              <div key={col.heading} data-rd-reveal className="rd-card" style={{ padding: "44px 40px", borderRadius: 32, display: "flex", flexDirection: "column", gap: 18 }}>
                <p style={{ margin: 0, font: `700 13px ${MONO}`, letterSpacing: "0.14em", color: "var(--rd-accent)" }}>
                  {idx === 0 ? "TECHNOLOGY WE BUILD" : "TALENT WE SOURCE"}
                </p>
                <h2 style={{ margin: 0, font: `700 clamp(24px,2vw,32px)/1.2 ${MONO}` }}>{col.heading}</h2>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: "var(--rd-text-2)" }}>{col.body}</p>
                <ul style={{ margin: "6px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {items.map((it) => (
                    <li key={it} style={{ display: "flex", gap: 12, fontSize: 16, lineHeight: 1.55, color: "var(--rd-text-2)" }}>
                      <span aria-hidden="true" style={{ color: "var(--rd-accent)", flexShrink: 0 }}>—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Compliance */}
      <section style={{ padding: "0 5% 88px" }}>
        <div style={wrap}>
          <p data-rd-reveal style={{ margin: "0 0 20px", font: `700 13px ${MONO}`, letterSpacing: "0.14em", color: "var(--rd-text-3)" }}>
            STANDARDS WE WORK TO IN {ind.name.toUpperCase()}
          </p>
          <div data-rd-reveal style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {ind.compliance.map((c) => (
              <span key={c} style={{ border: "1px solid var(--rd-border)", borderRadius: 100, padding: "12px 22px", font: `700 14px ${MONO}`, color: "var(--rd-text-2)" }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ padding: "0 5% 88px" }}>
        <div style={wrap}>
          <h2 data-rd-reveal style={{ margin: "0 0 40px", font: `700 clamp(28px,2.6vw,44px)/1.15 ${MONO}` }}>What changes</h2>
          <div className="rd-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {ind.outcomes.map((o) => (
              <div key={o.t} data-rd-reveal className="rd-card" style={{ padding: "34px 30px", borderRadius: 24 }}>
                <h3 style={{ margin: "0 0 10px", font: `700 20px ${MONO}`, lineHeight: 1.3 }}>{o.t}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--rd-text-2)" }}>{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs — mirrored by FAQPage structured data */}
      <section style={{ padding: "0 5% 88px" }}>
        <div style={{ ...wrap, maxWidth: 900 }}>
          <h2 data-rd-reveal style={{ margin: "0 0 40px", font: `700 clamp(28px,2.6vw,44px)/1.15 ${MONO}` }}>
            {ind.name} questions we get asked
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {ind.faqs.map((f, i) => (
              <div key={f.q} data-rd-reveal style={{ padding: "28px 0", borderTop: i === 0 ? "none" : "1px solid var(--rd-divider)" }}>
                <h3 style={{ margin: "0 0 12px", font: `700 19px ${MONO}`, lineHeight: 1.35 }}>{f.q}</h3>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "var(--rd-text-2)" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section style={{ padding: "0 5% 88px" }}>
        <div style={wrap}>
          <h2 data-rd-reveal style={{ margin: "0 0 32px", font: `700 clamp(24px,2.2vw,36px)/1.15 ${MONO}` }}>
            Services we bring to {ind.name}
          </h2>
          <div className="rd-grid-4" style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(ind.related.length, 4)},1fr)`, gap: 20 }}>
            {ind.related.map((id) => {
              const s = rdServices[id];
              if (!s) return null;
              return (
                <Link key={id} href={`/services/${id}`} data-rd-reveal className="rd-card rd-card-lift" style={{ padding: "30px 26px", borderRadius: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                  <span style={{ font: `700 12px ${MONO}`, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--rd-accent)" }}>{s.tag}</span>
                  <span style={{ font: `700 20px ${MONO}`, lineHeight: 1.25 }}>{s.title}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500, fontSize: 15 }}>
                    Explore <Arrow />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other industries — internal linking */}
      <section style={{ padding: "0 5% 88px" }}>
        <div style={wrap}>
          <h2 data-rd-reveal style={{ margin: "0 0 24px", font: `700 clamp(22px,2vw,32px)/1.15 ${MONO}` }}>Other industries we serve</h2>
          <div data-rd-reveal style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {RD_INDUSTRIES.filter((o) => o.slug !== ind.slug).map((o) => (
              <Link key={o.slug} href={`/industries/${o.slug}`} style={{ border: "1px solid var(--rd-border)", borderRadius: 100, padding: "12px 22px", font: `700 14px ${MONO}`, color: "var(--rd-text-2)" }}>
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Working in ${ind.name}?`}
        body="One call with a senior engineer — or our talent lead. You'll leave with a plan either way."
      />
    </RdLayout>
  );
}

export function getStaticPaths() {
  return {
    paths: RD_INDUSTRIES.map((i) => ({ params: { slug: i.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
