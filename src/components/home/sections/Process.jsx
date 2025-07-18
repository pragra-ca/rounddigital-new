import React from "react";

const processSteps = [
  {
    id: 1,
    title: "IT Assessment & Analysis",
    description:
      "We evaluate your current IT infrastructure and security posture to identify improvement opportunities.",
    active: true,
  },
  {
    id: 2,
    title: "Solution Architecture",
    description:
      "Our experts design comprehensive IT solutions tailored to your business requirements and growth plans.",
    active: false,
  },
  {
    id: 3,
    title: "Development & Implementation",
    description:
      "We build and deploy custom software, cloud applications, and security solutions with precision.",
    active: false,
  },
  {
    id: 4,
    title: "Testing & Security Validation",
    description:
      "Comprehensive testing and security assessments ensure robust, reliable, and secure solutions.",
    active: false,
  },
  {
    id: 5,
    title: "Deployment & Migration",
    description:
      "Seamless deployment and data migration with minimal downtime and business disruption.",
    active: false,
  },
  {
    id: 6,
    title: "Ongoing Support & Monitoring",
    description:
      "24/7 monitoring, maintenance, and support to ensure optimal performance and security.",
    active: false,
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Process</h2>

        <div className="mt-12 space-y-4">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className={`flex items-start p-6 rounded-2xl ${step.active ? "bg-red-500 text-white" : "bg-gray-50"}`}
            >
              <div
                className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full ${step.active ? "bg-white text-red-500" : "bg-white text-gray-700"} text-xl font-bold mr-6`}
              >
                {String(step.id).padStart(2, "0")}
              </div>
              <div>
                <h3
                  className={`text-xl font-semibold mb-2 ${step.active ? "text-white" : "text-gray-900"}`}
                >
                  {step.title}
                </h3>
                <p className={step.active ? "text-red-100" : "text-gray-600"}>
                  {step.description}
                </p>
              </div>
              <div className="ml-auto">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step.active ? "bg-white text-red-500" : "bg-gray-200"}`}
                >
                  {step.active ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <span>i</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
