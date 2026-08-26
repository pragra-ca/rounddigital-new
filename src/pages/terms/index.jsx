import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import { Container, LegalPage, Note, Section } from "@/components/system/ui";

const SECTIONS = [
  {
    title: "What these terms cover",
    body: "These terms govern your use of round.digital. They do not govern any engagement between us — that is set out in a separate written agreement, and where the two differ, the agreement wins.",
  },
  {
    title: "The site is information, not an offer",
    body: [
      "Everything on this site is provided for information. Descriptions of services, capabilities, codes, roadmap dates and indicative costs are not offers, quotations or contractual commitments.",
      "Certification and contract-vehicle status is stated as of the date shown on the relevant page. Status changes; check with us before relying on it in a bid.",
    ],
  },
  {
    title: "Accuracy and sources",
    body: [
      "We publish a source for every factual claim we make about the company, and we mark items that are pending confirmation rather than filling them in. If you find something on this site that is wrong, tell us and we will correct it.",
      "Indicative costs and timelines on the certification and partnership roadmap are planning figures, not quotes, and must be confirmed with the relevant certifying body.",
    ],
  },
  {
    title: "Your submissions",
    body: [
      "Do not send confidential, classified or export-controlled material through the forms on this site. If your requirement involves any of those, contact us first and we will agree an appropriate channel.",
      "By sending an enquiry you confirm you are entitled to share what you send. We handle submissions as described in our privacy notice.",
    ],
  },
  {
    title: "Intellectual property",
    body: "The content, design system and code of this site belong to Round Digital, except where a third-party mark is shown. You may quote or link to this site with attribution; you may not present it as your own. Third-party names appear only to identify standards, platforms or organisations referred to, and imply no endorsement in either direction.",
  },
  {
    title: "External links",
    body: "We link to external sources so our claims can be checked independently. We do not control those sites and are not responsible for their content or availability. A link is not an endorsement.",
  },
  {
    title: "Availability",
    body: "We aim to keep the site available and accurate but do not guarantee uninterrupted access. We may change or remove content at any time; material changes to legal pages are dated.",
  },
  {
    title: "Liability",
    body: "To the extent permitted by law, we are not liable for loss arising from reliance on the information on this site. Nothing here limits liability that cannot be limited by law, and nothing here limits or replaces the liability terms of a signed engagement agreement.",
  },
  {
    title: "Governing law",
    body: "These terms are governed by the laws of the Province of Ontario, Canada, and its applicable federal laws. The governing law of any engagement is set out in that engagement's own agreement and may differ.",
  },
  {
    title: "Contact",
    body: "Questions about these terms can be sent to legal@round.digital.",
  },
];

export default function Terms() {
  return (
    <Layout>
      <Seo
        title="Terms of Use — Website & Services"
        description="Terms governing use of round.digital. Engagement terms are set out separately in a written agreement."
        keywords="terms of use, website terms"
      />

      <LegalPage
        eyebrow="Legal"
        title="Terms of use"
        intro="Short, and limited to this website. Anything about how we actually work together lives in a signed agreement, not here."
        updated="August 2026"
        sections={SECTIONS}
        contactEmail="legal@round.digital"
      />

      {/* Internal review note removed — see the privacy page for the reasoning.
          The counsel review and the Ontario governing-law assumption are tracked
          in docs/strategy/04-qa-and-launch.md as launch blockers. */}
    </Layout>
  );
}
