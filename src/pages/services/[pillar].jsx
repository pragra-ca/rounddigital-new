import ServicePillar from "@/components/system/ServicePillar";
import { SERVICES, SERVICE_SLUGS } from "@/data/services";

// One route for all five pillars. Every pillar page shares an anatomy, so a
// single template keeps them consistent and makes adding a sixth a data edit.
// Legacy /services/* URLs 301 to their pillar in next.config.mjs.
export default function ServicePillarPage({ service }) {
  return <ServicePillar service={service} />;
}

export function getStaticPaths() {
  return {
    paths: SERVICE_SLUGS.map((pillar) => ({ params: { pillar } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const service = SERVICES[params.pillar];
  if (!service) return { notFound: true };
  return { props: { service } };
}
