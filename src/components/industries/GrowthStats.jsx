import React from "react";

const GrowthStats = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 text-center">
      {/* Heading */}
      <div className="max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Outcomes That Matter for <br /> Operations & Engineering
        </h2>
        <p className="text-gray-500 mt-4 text-sm sm:text-base">
          We ship reliable software for the factory floor and back office—measurable gains in uptime,
          throughput, and cost per unit.
        </p>
      </div>

      {/* Circle Graph Container */}
      <div className="relative flex justify-center items-center h-[600px] sm:h-[650px] max-w-6xl mx-auto">
        {/* SVG background circles */}
        <svg
          className="absolute w-[500px] h-[500px] sm:w-[600px] sm:h-[600px]"
          viewBox="0 0 600 600"
          fill="none"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <circle
              key={i}
              cx="300"
              cy="300"
              r={90 + i * 40}
              stroke="#D1D5DB"
              strokeDasharray="8 10"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Red Circle (Top Left) */}
        <div className="absolute top-[10%] left-[10%] sm:left-[15%] w-60 h-60 sm:w-72 sm:h-72 bg-red-600 text-white rounded-full flex flex-col justify-center items-center p-6 shadow-md text-center">
          <h3 className="text-2xl sm:text-3xl font-bold">300+</h3>
          <p className="text-base sm:text-lg font-medium mt-2">Connected Assets</p>
          <p className="text-sm sm:text-sm mt-2 text-white/80">
            Streaming telemetry to drive predictive maintenance and OEE gains.
          </p>
        </div>

        {/* White Circle (Right Middle) */}
        <div className="absolute bottom-[25%] right-[10%] sm:right-[14%] w-48 h-48 sm:w-56 sm:h-56 bg-white text-black rounded-full flex flex-col justify-center items-center p-6 shadow-md text-center border border-gray-200">
          <h3 className="text-xl sm:text-2xl font-bold">90+</h3>
          <p className="text-base font-medium mt-2">Downtime Reduction</p>
          <p className="text-sm mt-2 text-black/70">
            Minutes saved per shift via alerts and automated workflows.
          </p>
        </div>

        {/* Black Circle (Bottom Center) */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48 sm:w-56 sm:h-56 bg-black text-white rounded-full flex flex-col justify-center items-center p-6 shadow-md text-center">
          <h3 className="text-xl sm:text-2xl font-bold">12K</h3>
          <p className="text-base font-medium mt-2">Monthly Orders</p>
          <p className="text-sm mt-2 text-white/80">
            Scalable systems that keep pace with production demand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowthStats;
