import SfLayout from "@/components/sf/Layout";
import Seo from "@/components/seo";
import { Eyebrow, PillLink, SignalCore } from "@/components/sf/ui";

export default function NotFoundPage() {
  return (
    <SfLayout>
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has moved. Head back to RoundDigital's homepage or get in touch."
        noindex
      />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden px-5 py-20 sm:px-8 lg:px-11">
        <SignalCore />
        <div className="relative mx-auto flex max-w-[1240px] flex-col items-center gap-7 text-center">
          <Eyebrow data-reveal>Error 404 · Signal lost</Eyebrow>
          <h1
            data-reveal
            data-reveal-delay="0.08"
            className="m-0 text-[64px] font-extrabold leading-none tracking-[-0.035em] sm:text-[96px]"
          >
            4
            <span
              style={{
                color: "var(--sf-accent)",
                textShadow: "0 0 30px var(--sf-accent-glow)",
              }}
            >
              0
            </span>
            4
          </h1>
          <p
            data-reveal
            data-reveal-delay="0.16"
            className="m-0 max-w-[44ch] text-[16px] leading-[1.6]"
            style={{ color: "var(--sf-muted)" }}
          >
            This page doesn&apos;t exist, moved, or never shipped. Our agents have logged
            the missed connection — here&apos;s the fastest way back on track.
          </p>
          <div data-reveal data-reveal-delay="0.24" className="flex flex-wrap justify-center gap-[14px]">
            <PillLink href="/" size="lg">
              Back to homepage
            </PillLink>
            <PillLink href="/services" variant="ghost" size="lg">
              Explore services
            </PillLink>
            <PillLink href="/contact" variant="ghost" size="lg">
              Contact us
            </PillLink>
          </div>
        </div>
      </section>
    </SfLayout>
  );
}
