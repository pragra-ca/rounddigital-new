import React from "react";
import { ArrowUpRight } from "lucide-react";
import indu1 from "@/assets/industries/indu1.png";
import indu2 from "@/assets/industries/indu2.png";
import indu3 from "@/assets/industries/indu3.png";
import indu4 from "@/assets/industries/indu4.png";
import indu5 from "@/assets/industries/indu5.png";
import indu6 from "@/assets/industries/indu6.png";
import Image from "next/image";

const industries = [
  {
    title: "Healthcare Industries",
    labelColor: "bg-red-500 text-white",
    cardColor: "bg-white text-black",
    image: indu6,
    arrowColor: "text-black",
    border: "border border-black/10",
  },
  {
    title: "Banking & Financial Services",
    labelColor: "bg-white text-black",
    cardColor: "bg-red-500 text-white",
    image: indu2,
    arrowColor: "text-white",
    border: "",
  },
  {
    title: "Manufacturing Industry",
    labelColor: "bg-white text-black",
    cardColor: "bg-black text-white",
    image: indu4,
    arrowColor: "text-white",
    border: "",
  },
  {
    title: "Technology Solution",
    labelColor: "bg-red-500 text-white",
    cardColor: "bg-white text-black",
    image: indu3,
    arrowColor: "text-black",
    border: "border border-black/10",
  },
  {
    title: "Transportation Industry",
    labelColor: "bg-white text-black",
    cardColor: "bg-red-500 text-white",
    image: indu5,
    arrowColor: "text-white",
    border: "",
  },
  {
    title: "Telecom Industry",
    labelColor: "bg-red-500 text-white",
    cardColor: "bg-black text-white",
    image: indu1,
    arrowColor: "text-white",
    border: "",
  },
];

const Industries = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      {/* Heading */}
      <div className="max-w-7xl  px-6 container mx-auto mb-10">
        <h2 className="inline-block px-4 py-1 bg-red-500 text-white text-lg font-semibold rounded-md">
          Industries
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-6">
        {industries.map((industry, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-6 flex flex-col justify-between ${industry.cardColor} ${industry.border} shadow-sm min-h-[200px]`}
          >
            <div className="flex justify-between items-start">
              <span
                className={`text-sm px-3 py-1 rounded-md font-semibold ${industry.labelColor}`}
              >
                {industry.title}
              </span>
              <Image
                src={industry.image}
                alt={industry.title}
                className="w-40 h-40 object-contain mt-8 mr-8"
              />
            </div>
            <div className="mt-8 flex items-center gap-2">
              <ArrowUpRight className={`${industry.arrowColor}`} size={18} />
              <span className="text-sm font-medium">Learn more</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
