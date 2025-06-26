import React from "react";

// In a real Next.js app, these would be local imports.
// For standalone Canvas environment, we use placeholder URLs.
import avatar1 from "@/assets/industries/avatar1.png";
import avatar2 from "@/assets/industries/avatar2.png";
import avatar3 from "@/assets/industries/avatar3.png";
import indus1 from "@/assets/industries/indus1.png";
import indus2 from "@/assets/industries/indus2.png";
import indus3 from "@/assets/industries/indus3.png";
import indus4 from "@/assets/industries/indus4.png";
import Image from "next/image";

export default function App() {
  return <InnovationHeroSection />;
}

function InnovationHeroSection() {
  return (
    <section className="bg-[#f7f7f7] px-6 md:px-20 mt-10 py-16 font-sans min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-start px-6">
        {/* Left Text */}
        <div className="md:col-span-7 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Bridging Innovation <br /> with{" "}
            <span className="text-black">Production.</span>
          </h1>

          <div className="flex flex-wrap md:flex-nowrap items-center gap-6">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md text-sm font-semibold shadow-md transition-colors duration-200">
              Explore Now
            </button>

            <div className="flex items-center gap-4">
              <p className="text-3xl font-bold text-red-500">
                240<span className="text-black"> +</span>
              </p>
              <p className="text-sm text-gray-600 max-w-[250px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </div>

        {/* Right Rating */}
        <div className="md:col-span-5 flex flex-col md:items-end items-start space-y-2">
          <p className="text-sm text-gray-800 font-medium">
            Over 2500 Users Have Trusted
          </p>
          <div className="flex items-center space-x-2">
            {/* Using standard <Image> tags with placeholder URLs */}
            <Image
              src={avatar1}
              alt="User 1"
              width={36}
              height={36}
              className="rounded-full border border-white object-cover"
            />
            <Image
              src={avatar2}
              alt="User 2"
              width={36}
              height={36}
              className="rounded-full border border-white object-cover"
            />
            <Image
              src={avatar3}
              alt="User 3"
              width={36}
              height={36}
              className="rounded-full border border-white object-cover"
            />
            <span className="text-green-500 text-xl font-bold">4.9</span>
          </div>
        </div>

        {/* Bottom Image Row */}
        {/* Bottom Image Row */}
        <div className="md:col-span-12 mt-12">
          <div className="flex flex-wrap justify-center md:justify-between items-start gap-6">
            {[indus1, indus2, indus3, indus4].map((imgSrc, i) => (
              <div
                key={i}
                className="w-[220px] h-[280px] overflow-hidden rounded-xl shadow-lg"
              >
                <Image
                  src={imgSrc}
                  alt={`Worker ${i + 1}`}
                  width={220}
                  height={280}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
