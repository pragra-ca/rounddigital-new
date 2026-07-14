import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import RdServiceDetail from "@/components/rd/ServiceDetail";
import { rdServices, buildRdServiceJsonLd } from "@/data/rdServices";

const service = rdServices["engagement-models"];

export default function EngagementModelsPage() {
  return (
    <RdLayout>
      <Seo {...service.seo} jsonLd={buildRdServiceJsonLd(service)} />
      <RdServiceDetail service={service} />
    </RdLayout>
  );
}
