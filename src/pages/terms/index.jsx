import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { RdLegal } from "@/components/rd/Legal";

const SECTIONS = [
  { title: "Use of this website", body: "This website and its content are provided by Round Digital for general information about our services. You may browse, link to and share our content; you may not scrape it at scale, misrepresent it as your own, or use it to build a competing dataset. Using the site does not create a client relationship." },
  { title: "Proposals & engagements", body: "Descriptions of services, timelines and outcomes on this site are illustrative. Actual engagements are governed by a signed statement of work, which defines scope, deliverables, fees, IP ownership and warranties. Where this site and a signed agreement differ, the agreement wins." },
  { title: "Intellectual property", body: "The Round Digital name, logo and site content are our property or used with permission. Case study metrics reflect specific client engagements; results depend on context and are not a guarantee of identical outcomes." },
  { title: "No warranties; limitation of liability", body: "The site is provided as-is, without warranties of any kind. To the maximum extent permitted by law, Round Digital is not liable for damages arising from your use of the site or reliance on its content. Nothing here limits liabilities that cannot be limited by law." },
  { title: "Changes & governing law", body: "We may update these terms as the business evolves; the version published here applies. These terms are governed by the laws of Ontario, Canada, and any disputes will be resolved in the courts of Ontario." },
];

export default function TermsPage() {
  return (
    <RdLayout>
      <Seo title="Terms of Service" description="The terms that govern use of Round Digital's website." keywords="RoundDigital terms of service, website terms" />
      <RdLegal
        eyebrow="LEGAL"
        title="Terms of Service"
        intro="The short version: use the site in good faith, real engagements run on signed agreements, and our case study numbers are real but context-specific."
        sections={SECTIONS}
      />
    </RdLayout>
  );
}
