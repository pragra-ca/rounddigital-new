import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import { Container, LegalPage, Note, Section } from "@/components/system/ui";

// Written to describe what this site actually does, rather than to cover
// every hypothetical. If a practice changes, this page changes with it.
const SECTIONS = [
  {
    title: "Who we are",
    body: "Round Digital is a technology and workforce services company, successor to Pragra LLC, with delivery centres in Mississauga, Ontario and Noida, Uttar Pradesh, and a registered office in Cheyenne, Wyoming. This notice covers round.digital and the forms on it.",
  },
  {
    title: "What we collect",
    body: [
      "Only what you type into a form. The contact form collects your name, email address and message, and optionally your phone number, organisation and the service you are asking about. The solicitation intake form additionally collects the enquiry type, any response deadline, and which services your requirement involves.",
      "We do not ask for, and have no use for, sensitive personal information. Please do not include it in a message.",
      "Our forms include a hidden anti-spam field. If it is completed — which only automated submissions do — the message is discarded.",
    ],
  },
  {
    title: "Why we collect it",
    body: "To answer you. A submission is used to respond to the enquiry it relates to and to carry out any resulting engagement. We do not add form submissions to a marketing list, and we do not run automated nurture sequences off them.",
  },
  {
    title: "How it is handled",
    body: [
      "Form submissions are delivered to our team by email. Values are escaped before they are rendered, so a submission cannot inject content into our systems.",
      "Access is limited to the people who need it to respond. We do not sell personal information, and we do not share it with third parties for their own marketing.",
    ],
  },
  {
    title: "How long we keep it",
    body: "Enquiry correspondence is retained while it is commercially relevant and then deleted. For engagements that proceed to contract, retention is governed by the contract and by our legal and tax obligations. You can ask us to delete your enquiry at any time.",
  },
  {
    title: "Where it is processed",
    body: "Our team operates from Canada and India, so an enquiry may be read in either country. If your organisation has data-residency requirements, tell us before sending anything sensitive and we will agree an appropriate route in the contract.",
  },
  {
    title: "Your rights",
    body: [
      "Depending on where you live, you may have the right to access the personal information we hold about you, to have it corrected, to have it deleted, and to object to or restrict how we use it.",
      "To exercise any of these, email privacy@round.digital. We will respond within the period required by the applicable law, and in any case as quickly as we reasonably can.",
    ],
  },
  {
    title: "Cookies and analytics",
    body: "This site stores one item in your browser: your light or dark theme preference, kept locally so the site does not flash the wrong theme on your next visit. It is not a tracking identifier and it is never sent to us. If we later add analytics, this page will be updated before that happens, and it will say what is collected.",
  },
  {
    title: "Other sites",
    body: "We link to external sources so you can verify claims we make, and to Perfectum.ai and ShipCarte. Those sites have their own privacy practices and we are not responsible for them.",
  },
  {
    title: "Changes",
    body: "If this notice changes materially, the updated date above changes and the substantive change is described here rather than folded in silently.",
  },
];

export default function Privacy() {
  return (
    <Layout>
      <Seo
        title="Privacy Notice"
        description="What Round Digital collects through this website, why, how long it is kept, where it is processed, and how to exercise your rights."
        keywords="privacy notice, data protection, PIPEDA, GDPR"
      />

      <LegalPage
        eyebrow="Legal"
        title="Privacy notice"
        intro="A short, specific description of what this website collects and what happens to it. If something here is unclear, ask us and we will make it clearer rather than pointing at a clause."
        updated="August 2026"
        sections={SECTIONS}
        contactEmail="privacy@round.digital"
      />

      {/* The "For company review" note that sat here was an internal to-do
          published on a public legal page — it told every reader the notice had
          not been reviewed by counsel. Tracked in docs/strategy/04-qa-and-launch.md
          instead, which is where launch blockers belong. */}
    </Layout>
  );
}
