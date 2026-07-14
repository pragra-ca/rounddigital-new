import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import RdServiceDetail from "@/components/rd/ServiceDetail";
import { rdServices, buildRdServiceJsonLd } from "@/data/rdServices";

const service = rdServices["cloud-solutions"];

export default function CloudSolutionsPage() {
  return (
    <RdLayout>
      <Seo {...service.seo} jsonLd={buildRdServiceJsonLd(service)} />
      <RdServiceDetail service={service} />
    </RdLayout>
  );
}
