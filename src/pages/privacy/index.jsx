import SfLayout from "@/components/sf/Layout";
import Seo from "@/components/seo";
import { Eyebrow } from "@/components/sf/ui";

const SECTIONS = [
  {
    title: "Information we collect",
    body: "We collect information you choose to give us — such as your name, work email, company and message when you submit a form, or your email address when you subscribe to our newsletter — along with standard technical data (browser type, pages visited, referring URL) that helps us understand how the site is used.",
  },
  {
    title: "How we use your information",
    body: "We use your information to respond to your inquiries, deliver the services you request, send the communications you signed up for, and improve our website and offerings. We do not sell your personal information, and we only share it with service providers who help us operate (such as email delivery), under confidentiality obligations.",
  },
  {
    title: "Data retention & security",
    body: "We keep personal information only as long as needed for the purposes above or as required by law. Our delivery processes are SOC 2 / ISO 27001-aligned, and we apply the same security standards to your data that we bring to client systems: encryption in transit, access controls and audit logging.",
  },
  {
    title: "Your rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time. Newsletter emails include an unsubscribe link, and you can opt out of any communication by contacting us directly.",
  },
  {
    title: "Cookies & analytics",
    body: "The site stores a small preference (like your light/dark theme choice) in your browser's local storage. Any analytics we use are configured to respect your privacy and are used solely to improve the experience.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SfLayout>
      <Seo
        title="Privacy Policy"
        description="How RoundDigital collects, uses and safeguards your information — data retention, security practices, your rights, and how to contact us."
        keywords="RoundDigital privacy policy, data protection, personal information"
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
            Privacy Policy
          </h1>
          <p
            data-reveal
            data-reveal-delay="0.14"
            className="m-0 text-[15px] leading-[1.65]"
            style={{ color: "var(--sf-muted)" }}
          >
            This policy explains how RoundDigital collects, uses and safeguards your
            information when you visit our website or work with us. If you don&apos;t agree
            with it, please don&apos;t use the site — but we&apos;d rather you email us your
            concern so we can fix it.
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
            <h2 className="m-0 mb-2 text-[18px] font-bold">Questions about this policy?</h2>
            <p className="m-0 text-[14.5px] leading-[1.6]" style={{ color: "var(--sf-muted)" }}>
              Email{" "}
              <a
                href="mailto:info@rounddigital.co"
                className="font-semibold transition-colors hover:opacity-80"
                style={{ color: "var(--sf-accent)" }}
              >
                info@rounddigital.co
              </a>{" "}
              or write to us at 160B - 110 Matheson Blvd W, Mississauga, ON L5M 6B8. We
              respond within one business day.
            </p>
          </div>
        </div>
      </section>
    </SfLayout>
  );
}
