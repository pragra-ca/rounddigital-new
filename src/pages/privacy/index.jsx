import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { RdLegal } from "@/components/rd/Legal";

const SECTIONS = [
  { title: "Information we collect", body: "We collect information you choose to give us — such as your name, work email, company and message when you submit a form, or your email when you subscribe — along with standard technical data (browser type, pages visited) that helps us understand how the site is used." },
  { title: "How we use your information", body: "We use your information to respond to inquiries, deliver requested services, send communications you signed up for, and improve our offerings. We do not sell your personal information, and only share it with service providers who help us operate, under confidentiality obligations." },
  { title: "Data retention & security", body: "We keep personal information only as long as needed or as required by law. Our delivery processes are SOC 2 / ISO 27001-aligned, and we apply the same security standards to your data that we bring to client systems: encryption in transit, access controls and audit logging." },
  { title: "Your rights", body: "You may request access to, correction of, or deletion of your personal information at any time. Newsletter emails include an unsubscribe link, and you can opt out of any communication by contacting us directly." },
  { title: "Cookies & analytics", body: "The site stores a small preference (like your light/dark theme choice) in your browser's local storage. Any analytics we use are configured to respect your privacy and are used solely to improve the experience." },
];

export default function PrivacyPolicyPage() {
  return (
    <RdLayout>
      <Seo title="Privacy Policy" description="How Round Digital collects, uses and safeguards your information." keywords="RoundDigital privacy policy, data protection" />
      <RdLegal
        eyebrow="LEGAL"
        title="Privacy Policy"
        intro="This policy explains how Round Digital collects, uses and safeguards your information when you visit our website or work with us."
        sections={SECTIONS}
      />
    </RdLayout>
  );
}
