import SfLayout from "@/components/sf/Layout";
import Seo from "@/components/seo";
import ServiceDetail from "@/components/sf/ServiceDetail";
import { sfServices, buildServiceJsonLd } from "@/data/sfServices";

const service = sfServices["data-analytics"];

export default function DataAnalyticsPage() {
  return (
    <SfLayout>
      <Seo {...service.seo} jsonLd={buildServiceJsonLd(service)} />
      <ServiceDetail service={service} />
    </SfLayout>
  );
}
