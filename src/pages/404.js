import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { RdButton } from "@/components/rd/ui";

const MONO = "'Space Mono',monospace";

export default function NotFoundPage() {
  return (
    <RdLayout>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist or has moved." noindex />
      <section style={{ minHeight: "62vh", display: "flex", alignItems: "center", padding: "80px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <p style={{ margin: "0 0 20px", font: `700 14px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>ERROR 404</p>
          <h1 style={{ margin: "0 0 24px", font: `700 clamp(64px,9vw,120px)/1 ${MONO}` }}>
            4<span style={{ color: "var(--rd-accent)" }}>0</span>4
          </h1>
          <p style={{ margin: "0 auto 36px", maxWidth: 460, fontSize: 19, color: "var(--rd-text-2)" }}>
            This page doesn&apos;t exist, moved, or never shipped. Here&apos;s the fastest way
            back on track.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <RdButton href="/">Back to homepage</RdButton>
            <RdButton href="/services" variant="ghost">Explore services</RdButton>
          </div>
        </div>
      </section>
    </RdLayout>
  );
}
