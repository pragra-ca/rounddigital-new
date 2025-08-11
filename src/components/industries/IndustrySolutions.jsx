import React from "react";
import {
  ArrowUpRight,
  Factory,
  LayoutTemplate,
  Activity,
  Building2,
  Sprout,
  CircleDollarSign,
} from "lucide-react";

const iconMap = {
  Factory,
  LayoutTemplate,
  Activity,
  Building2,
  Sprout,
  CircleDollarSign,
};



const sections = [
  {
    title: "Smart Factory Automation",
    icon: "Factory",
    description:
      "Connect machines and lines with IoT to track OEE, detect faults early, and reduce downtime.",
  },
  {
    title: "Operations Dashboards",
    icon: "LayoutTemplate",
    description:
      "Unified KPIs for production, quality, and supply chain with role‑based views and alerts.",
  },
  {
    title: "Real‑time Monitoring",
    icon: "Activity",
    description:
      "Stream telemetry from assets to spot anomalies, predict failures, and optimize throughput.",
  },
  {
    title: "Enterprise Integrations",
    icon: "Building2",
    description:
      "MES/ERP/WMS integrations to keep data flowing across planning, inventory, and finance.",
  },
  {
    title: "Sustainable Manufacturing",
    icon: "Sprout",
    description:
      "Track energy use, scrap, and emissions to meet ESG goals and lower unit costs.",
  },
  {
    title: "Cost Optimization",
    icon: "CircleDollarSign",
    description:
      "Automate reporting, reduce manual work, and surface savings opportunities with analytics.",
  },
];

export const IndustryCard = ({ title, icon, description }) => {
  const IconComponent = iconMap[icon];
  return (
    <div className="bg-white p-6 rounded-md shadow-sm text-left hover:shadow-md transition duration-300">
    <div className="flex justify-between items-start">
      <IconComponent className="text-blue-600" size={32} />
      <ArrowUpRight className="text-gray-400" size={20} />
    </div>
      <h3 className="mt-6 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
};

const IndustrySolutions = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Tailored Manufacturing <br /> Solutions for Every Industry
        </h2>
        <p className="text-gray-500 mt-4">
          We help operations teams modernize with data‑driven workflows, connected equipment,
          and scalable platforms that reduce downtime and accelerate output.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <IndustryCard key={index} {...section} />
        ))}
      </div>
    </section>
  );
};

export default IndustrySolutions;
