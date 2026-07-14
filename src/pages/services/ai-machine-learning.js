import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import RdServiceDetail from "@/components/rd/ServiceDetail";
import { rdServices, buildRdServiceJsonLd } from "@/data/rdServices";

const service = rdServices["ai-machine-learning"];

export default function AiMachineLearningPage() {
  return (
    <RdLayout>
      <Seo {...service.seo} jsonLd={buildRdServiceJsonLd(service)} />
      <RdServiceDetail service={service} />
    </RdLayout>
  );
}
