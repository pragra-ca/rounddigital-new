import SfLayout from "@/components/sf/Layout";
import Seo from "@/components/seo";
import { Eyebrow } from "@/components/sf/ui";

const SECTIONS = [
  {
    title: "Use of this website",
    body: "This website and its content are provided by RoundDigital for general information about our services. You may browse, link to and share our content; you may not scrape it at scale, misrepresent it as your own, or use it to build a competing dataset. Using the site does not create a client relationship.",
  },
  {
    title: "Proposals & engagements",
    body: "Descriptions of services, timelines and outcomes on this site are illustrative. Actual engagements are governed by a signed statement of work, which defines scope, deliverables, fees, IP ownership and warranties. Where this site and a signed agreement differ, the agreement wins.",
  },
  {
    title: "Intellectual property",
    body: "The RoundDigital name, logo and site content are our property or used with permission. Case study metrics reflect specific client engagements; results depend on context and are not a guarantee of identical outcomes.",
  },
  {
    title: "No warranties; limitation of liability",
    body: "The site is provided as-is, without warranties of any kind. To the maximum extent permitted by law, RoundDigital is not liable for damages arising from your use of the site or reliance on its content. Nothing here limits liabilities that cannot be limited by law.",
  },
  {
    title: "Changes & governing law",
    body: "We may update these terms as the business evolves; the version published here applies. These terms are governed by the laws of Ontario, Canada, and any disputes will be resolved in the courts of Ontario.",
  },
];

export default function TermsPage() {
  return (
    <SfLayout>
      <Seo
        title="Terms of Service"
        description="The terms that govern use of RoundDigital's website — intellectual property, engagement terms, warranties and governing law."
        keywords="RoundDigital terms of service, website terms, legal"
      />

      <section
        className="px-5 pb-10 pt-16 sm:px-8 lg:px-11"
        style={{ borderBottom: "1px solid var(--sf-border)" }}
      >
        <div className="mx-auto max-w-[820px]">
          <Eyebrow data-reveal className="mb-4">
            Legal
          </Eyebrow>
          <h1
            data-reveal
            data-reveal-delay="0.08"
            className="m-0 mb-4 text-[36px] font-extrabold tracking-[-0.03em] sm:text-[48px]"
          >
            Terms of Service
          </h1>
          <p
            data-reveal
            data-reveal-delay="0.14"
            className="m-0 text-[15px] leading-[1.65]"
            style={{ color: "var(--sf-muted)" }}
          >
            The short version: use the site in good faith, real engagements run on signed
            agreements, and our case study numbers are real but context-specific. The
            slightly longer version follows.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-11">
        <div className="mx-auto flex max-w-[820px] flex-col gap-9">
          {SECTIONS.map((section, i) => (
            <div key={section.title} data-reveal data-reveal-delay={`${(i % 3) * 0.05}`}>
              <h2 className="m-0 mb-3 text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
                {section.title}
              </h2>
              <p className="m-0 text-[15px] leading-[1.7]" style={{ color: "var(--sf-muted)" }}>
                {section.body}
              </p>
            </div>
          ))}

          <div
            data-reveal
            className="rounded-2xl p-7"
            style={{
              border: "1px solid var(--sf-border)",
              backgroundColor: "var(--sf-surface)",
            }}
          >
            <h2 className="m-0 mb-2 text-[18px] font-bold">Questions about these terms?</h2>
            <p className="m-0 text-[14.5px] leading-[1.6]" style={{ color: "var(--sf-muted)" }}>
              Email{" "}
              <a
                href="mailto:info@rounddigital.co"
                className="font-semibold transition-colors hover:opacity-80"
                style={{ color: "var(--sf-accent)" }}
              >
                info@rounddigital.co
              </a>{" "}
              — we respond within one business day.
            </p>
          </div>
        </div>
      </section>
    </SfLayout>
  );
}
