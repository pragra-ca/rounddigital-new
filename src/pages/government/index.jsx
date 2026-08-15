import Link from "next/link";
import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { RdButton } from "@/components/rd/ui";
import NaicsTable from "@/components/rd/gov/NaicsTable";
import CredentialGrid from "@/components/rd/gov/CredentialGrid";
import PastPerformanceCard from "@/components/rd/gov/PastPerformanceCard";
import { PAST_PERFORMANCE } from "@/content/past-performance.mjs";

const wrap = { maxWidth: 1180, margin: "0 auto" };

function Hero() {
  return (
    <section style={{ padding: "88px 5% 64px" }}>
      <div style={wrap}>
        <p style={{ margin: "0 0 18px", font: "700 13px var(--rd-font-mono)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--rd-accent-text)" }}>
          Public sector
        </p>
        <h1 style={{ margin: "0 0 24px", maxWidth: 880, font: "700 clamp(38px,4vw,64px)/1.1 var(--rd-font-display)", letterSpacing: "-0.015em" }}>
          A small business that behaves like a large one
        </h1>
        <p style={{ margin: "0 0 32px", maxWidth: 640, fontSize: 20, lineHeight: 1.6, color: "var(--rd-text-2)" }}>
          Round Digital is a women-owned technology and workforce services firm. We build
          the system, staff it, train the people who run it, and measure whether it worked
          — so the capability is still there after we leave.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <RdButton href="/government/capability-statement">Capability statement</RdButton>
          <RdButton href="/contact" variant="ghost">Teaming enquiries</RdButton>
        </div>
      </div>
    </section>
  );
}

function Codes() {
  return (
    <section style={{ padding: "64px 5%" }}>
      <div style={wrap}>
        <h2 style={{ margin: "0 0 12px", font: "700 clamp(28px,2.4vw,40px)/1.15 var(--rd-font-display)" }}>
          Codes and classifications
        </h2>
        <p style={{ margin: "0 0 32px", maxWidth: 680, fontSize: 18, color: "var(--rd-text-2)" }}>
          We are a small business under every size standard applicable to the codes below.
          Verify current standards against the SBA table before relying on them in a
          solicitation response.
        </p>
        <NaicsTable />
      </div>
    </section>
  );
}

function Performance() {
  return (
    <section style={{ padding: "64px 5%" }}>
      <div style={wrap}>
        <h2 style={{ margin: "0 0 12px", font: "700 clamp(28px,2.4vw,40px)/1.15 var(--rd-font-display)" }}>
          Past performance
        </h2>
        <p style={{ margin: "0 0 32px", maxWidth: 680, fontSize: 18, color: "var(--rd-text-2)" }}>
          Every reference below is independently verifiable. We link the source.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 20 }}>
          {PAST_PERFORMANCE.map((e) => (
            <PastPerformanceCard key={e.id} entry={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Honesty() {
  return (
    <section style={{ padding: "64px 5%" }}>
      <div style={{ ...wrap, border: "1px solid var(--rd-border)", borderRadius: 12, padding: "40px 36px" }}>
        <h2 style={{ margin: "0 0 14px", font: "700 24px var(--rd-font-display)" }}>
          What we do not claim
        </h2>
        <p style={{ margin: "0 0 12px", fontSize: 17, lineHeight: 1.7, color: "var(--rd-text-2)" }}>
          We hold no third-party certifications today. The roadmap below is what we are
          working toward and by when. We would rather tell you that plainly than have you
          discover it during evaluation.
        </p>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "var(--rd-text-2)" }}>
          We are also not eligible for US programs requiring citizen ownership. Where a
          solicitation needs that status, we are a subcontractor, not a prime —{" "}
          <Link href="/contact" style={{ color: "var(--rd-accent-text)", fontWeight: 600 }}>
            and a good one
          </Link>.
        </p>
      </div>
    </section>
  );
}

export default function GovernmentHub() {
  return (
    <RdLayout>
      <Seo
        title="Public Sector Capabilities"
        description="Round Digital is a women-owned technology and workforce services firm serving government buyers in Canada and the United States. NAICS 541512, 541511, 541910, 561320, 611430."
        keywords="women owned technology company, small business IT contractor, NAICS 541910 contractor, public sector IT services, government training provider"
      />
      <Hero />
      <Codes />
      <Performance />
      <CredentialGrid
        heading="Certification roadmap"
        intro="Status and target date for every credential we are pursuing. Nothing here is claimed as held."
      />
      <Honesty />
    </RdLayout>
  );
}
