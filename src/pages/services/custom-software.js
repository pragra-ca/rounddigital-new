import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import RdServiceDetail from "@/components/rd/ServiceDetail";
import { rdServices, buildRdServiceJsonLd } from "@/data/rdServices";

const service = rdServices["custom-software"];

export default function CustomSoftwarePage() {
  return (
    <RdLayout>
      <Seo {...service.seo} jsonLd={buildRdServiceJsonLd(service)} />
      <RdServiceDetail service={service} />
    </RdLayout>
  );
}
