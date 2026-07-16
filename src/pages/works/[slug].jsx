import Link from "next/link";
import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { Arrow, Breadcrumb, CountUp, RdButton } from "@/components/rd/ui";
import { rdCases, RD_CASE_ORDER } from "@/data/rdCases";

const MONO = "'Space Mono',monospace";
const wrap = { maxWidth: 1280, margin: "0 auto" };

export async function getStaticPaths() {
  return { paths: Object.keys(rdCases).map((slug) => ({ params: { slug } })), fallback: false };
}
export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}

export default function WorkDetail({ slug }) {
  const cs = rdCases[slug];
  const idx = RD_CASE_ORDER.indexOf(slug);
  const next = rdCases[RD_CASE_ORDER[(idx + 1) % RD_CASE_ORDER.length]];

  return (
    <RdLayout>
      <Seo
        title={`Case Study: ${cs.short}`}
        description={`${cs.title} — ${cs.stats.slice(0, 2).map((s) => `${s.n} ${s.l}`).join(", ")}. See how Round Digital delivered it.`}
        keywords={`${cs.short} case study, ${cs.industry}, AI case study, digital transformation`}
        ogType="article"
        jsonLd={[{ "@context": "https://schema.org", "@type": "Article", headline: cs.title, description: cs.challenge, author: { "@type": "Organization", name: "RoundDigital" }, publisher: { "@type": "Organization", name: "RoundDigital", url: "https://www.round.digital" } }]}
      />

      <section style={{ padding: "72px 5% 48px" }}>
        <div style={wrap}>
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Case studies", href: "/#case-studies" }, { label: cs.short }]} />
          <p data-rd-reveal style={{ margin: "0 0 16px", font: `700 14px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>
            {cs.num} · {cs.industry} · {cs.service}
          </p>
          <h1 data-rd-reveal data-rd-reveal-delay="0.05" style={{ margin: "0 0 28px", maxWidth: 960, font: `700 clamp(40px,4.2vw,72px)/1.08 ${MONO}`, letterSpacing: "-0.01em" }}>
            {cs.title}
          </h1>
          <div data-rd-reveal data-rd-reveal-delay="0.1" style={{ display: "flex", gap: 40, flexWrap: "wrap", fontSize: 14, color: "var(--rd-text-3)" }}>
            <span><strong style={{ color: "var(--rd-text)", display: "block", fontFamily: MONO }}>INDUSTRY</strong>{cs.industry}</span>
            <span><strong style={{ color: "var(--rd-text)", display: "block", fontFamily: MONO }}>SERVICE</strong>{cs.service}</span>
            <span><strong style={{ color: "var(--rd-text)", display: "block", fontFamily: MONO }}>TIMELINE</strong>{cs.timeline}</span>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 5% 64px" }}>
        <div style={wrap}>
          <img data-rd-reveal src={cs.img} alt={cs.title} className="rd-img" style={{ aspectRatio: "21/9", borderRadius: 40 }} />
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "0 5% 80px" }}>
        <div className="rd-grid-4" style={{ ...wrap, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {cs.stats.map((st) => (
            <div key={st.l} data-rd-reveal className="rd-card" style={{ padding: "32px 28px", borderRadius: 24 }}>
              <div style={{ font: `700 40px ${MONO}`, color: "var(--rd-accent)" }}>
                <CountUp value={st.n} />
              </div>
              <div style={{ color: "var(--rd-text-3)", fontSize: 15, marginTop: 6 }}>{st.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge / Solution */}
      <section style={{ padding: "0 5% 80px" }}>
        <div className="rd-grid-2" style={{ ...wrap, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
          {[["The challenge", cs.challenge], ["The solution", cs.solution]].map(([h, body]) => (
            <div key={h} data-rd-reveal>
              <p style={{ margin: "0 0 16px", font: `700 14px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>{h.toUpperCase()}</p>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "var(--rd-text-2)" }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How we did it */}
      <section style={{ padding: "0 5% 80px" }}>
        <div style={wrap}>
          <h2 data-rd-reveal style={{ margin: "0 0 48px", font: `700 clamp(30px,2.8vw,48px)/1.15 ${MONO}` }}>How we did it</h2>
          <div className="rd-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {cs.steps.map((b, i) => (
              <div key={b.t} data-rd-reveal style={{ display: "flex", gap: 22, borderTop: "1px solid var(--rd-border)", padding: "28px 4px 8px" }}>
                <span style={{ font: `700 16px ${MONO}`, color: "var(--rd-accent)" }}>{`0${i + 1}`}</span>
                <div>
                  <h3 style={{ margin: "0 0 8px", font: `700 20px ${MONO}` }}>{b.t}</h3>
                  <p style={{ margin: 0, fontSize: 16, color: "var(--rd-text-2)" }}>{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack + Quote */}
      <section style={{ padding: "0 5% 80px" }}>
        <div style={wrap}>
          <p data-rd-reveal style={{ margin: "0 0 20px", font: `700 13px ${MONO}`, letterSpacing: "0.14em", color: "var(--rd-text-3)" }}>STACK WE USED</p>
          <div data-rd-reveal style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 56 }}>
            {cs.stack.map((t) => <span key={t} className="rd-chip">{t}</span>)}
          </div>
          <div data-rd-reveal className="rd-card" style={{ padding: "56px 48px" }}>
            <blockquote style={{ margin: "0 0 28px", font: `700 clamp(22px,2vw,30px)/1.4 ${MONO}` }}>&ldquo;{cs.quote}&rdquo;</blockquote>
            <p style={{ margin: 0, fontWeight: 600 }}>{cs.quoteName}</p>
            <p style={{ margin: 0, fontSize: 15, color: "var(--rd-text-3)" }}>{cs.quoteRole}</p>
          </div>
        </div>
      </section>

      {/* Next case */}
      <section style={{ padding: "0 5% 112px" }}>
        <Link href={`/works/${next.id}`} data-rd-reveal className="rd-card rd-card-lift" style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "40px 44px", flexWrap: "wrap" }}>
          <div>
            <p style={{ margin: "0 0 8px", font: `700 13px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>NEXT CASE — {next.num}</p>
            <h3 style={{ margin: 0, font: `700 clamp(22px,2vw,30px) ${MONO}` }}>{next.title}</h3>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 600, whiteSpace: "nowrap" }}>
            Read case <Arrow size={16} />
          </span>
        </Link>
      </section>
    </RdLayout>
  );
}
