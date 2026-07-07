import SfLayout from "@/components/sf/Layout";
import Seo from "@/components/seo";
import ServiceDetail from "@/components/sf/ServiceDetail";
import { sfServices, buildServiceJsonLd } from "@/data/sfServices";

const service = sfServices["digital-transformation"];

export default function DigitalTransformationPage() {
  return (
    <SfLayout>
      <Seo {...service.seo} jsonLd={buildServiceJsonLd(service)} />
      <ServiceDetail service={service} />
    </SfLayout>
  );
}
