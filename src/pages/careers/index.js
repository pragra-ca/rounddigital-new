import Link from "next/link";
import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { Arrow } from "@/components/rd/ui";
import { jobPositions } from "@/data/jobPositions";

const MONO = "'Space Mono',monospace";
const wrap = { maxWidth: 1280, margin: "0 auto" };

export async function getStaticProps() {
  return { props: { jobs: jobPositions } };
}

export default function CareersPage({ jobs }) {
  return (
    <RdLayout>
      <Seo
        title="Careers: Build Production AI With a Senior Team"
        description="Join Round Digital's engineering team in Toronto, Dallas, Pune or remote. Senior-only teams shipping AI agents, cloud platforms and enterprise software."
        keywords="RoundDigital careers, AI engineer jobs, software developer jobs, remote engineering jobs"
      />
      <section style={{ padding: "96px 5% 64px" }}>
        <div style={{ ...wrap, maxWidth: 900 }}>
          <p data-rd-reveal style={{ margin: "0 0 16px", font: `700 14px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>CAREERS</p>
          <h1 data-rd-reveal data-rd-reveal-delay="0.05" style={{ margin: "0 0 24px", font: `700 clamp(44px,4.6vw,76px)/1.06 ${MONO}`, letterSpacing: "-0.01em" }}>
            Build the future with us.
          </h1>
          <p data-rd-reveal data-rd-reveal-delay="0.1" style={{ margin: 0, fontSize: 20, lineHeight: 1.65, color: "var(--rd-text-2)" }}>
            We are engineers who solve hard problems for the world&apos;s most demanding
            enterprises. We work remotely, ship continuously, and own our outcomes.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 5% 96px" }}>
        <div style={wrap}>
          <div data-rd-reveal style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ margin: 0, font: `700 clamp(28px,2.6vw,40px) ${MONO}` }}>Open positions</h2>
            <span style={{ font: `700 13px ${MONO}`, color: "var(--rd-text-3)" }}>{jobs.length} OPEN ROLE{jobs.length === 1 ? "" : "S"}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {jobs.map((job) => (
              <Link key={job.slug} href={`/careers/${job.slug}`} data-rd-reveal className="rd-card rd-card-lift" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr auto", gap: 20, alignItems: "center", padding: "28px 32px", borderRadius: 24 }}>
                <div>
                  <span style={{ font: `700 11px ${MONO}`, letterSpacing: "0.1em", color: "var(--rd-accent)" }}>{(job.department || "").toUpperCase()}</span>
                  <div style={{ font: `700 21px ${MONO}`, margin: "6px 0" }}>{job.title}</div>
                  <div style={{ fontSize: 15, color: "var(--rd-text-2)" }}>{job.tagline}</div>
                </div>
                <div style={{ fontSize: 14, color: "var(--rd-text-3)", display: "flex", flexWrap: "wrap", gap: "4px 18px" }}>
                  <span>{job.location}</span><span>{job.type}</span><span>{job.experience}</span>
                </div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, font: "500 15px 'Inter',sans-serif", color: "var(--rd-accent)", whiteSpace: "nowrap" }}>View role <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 5% 112px" }}>
        <div data-rd-reveal style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap", border: "1px solid var(--rd-border)", borderRadius: 40, padding: "56px 8%" }}>
          <div>
            <h2 style={{ margin: "0 0 8px", font: `700 clamp(26px,2.4vw,36px) ${MONO}` }}>Don&apos;t see your role?</h2>
            <p style={{ margin: 0, fontSize: 18, color: "var(--rd-text-2)" }}>Strong engineers always have a seat. Send us your work.</p>
          </div>
          <a href="mailto:info@rounddigital.co?subject=Open%20application" className="rd-btn rd-btn-primary">Send an open application</a>
        </div>
      </section>
    </RdLayout>
  );
}
