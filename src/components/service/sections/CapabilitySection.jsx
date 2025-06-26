import { Loader } from "lucide-react";
import Button from "../components/Button";
import Capability from "../components/Capability";

const CapabilitySection = () => {
  const capabilities = [
    "Web design & UI",
    "Social media visuals",
    "Infographics",
    "Design system",
    "Email design",
    "Stationery",
    "Icons",
    "Packaging & merch",
    "Signage",
    "Brochures",
    "Logos & branding",
    "Digital ads",
    "Wireframes",
  ];

  return (
    <div className="bg-[#312f2f] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Capabilities Header */}
        <div className="text-center space-y-4">
          <p className="uppercase text-sm font-semibold tracking-wider text-[#e14242]">
            Our capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            We can help you with...
          </h2>
        </div>

        {/* Capability Tags */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10 max-w-5xl mx-auto">
          {capabilities.map((item, index) => (
            <span
              key={index}
              className="bg-[#e14242] text-black px-4 py-2 rounded-md text-sm sm:text-base font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-6">
          <button className="flex items-center gap-2 text-white text-sm font-medium">
            <Loader className="animate-spin w-4 h-4 text-[#e14242]" />
            Load More
          </button>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <span className="uppercase text-[#E14242] text-sm font-semibold tracking-wider">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              The design subscription <br />
              that connects you to your <br />
              dream team.
            </h2>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 text-center md:text-left text-white space-y-6">
            <p className="text-sm sm:text-base leading-relaxed">
              A subscription can alleviate the stress of staffing, <br className="hidden sm:block" />
              managing expenses, or make design calls like a <br className="hidden sm:block" />
              Creative Director. We partner with you to ensure <br className="hidden sm:block" />
              that your design elevates your brand to new levels.
            </p>
            <Button className="w-[149px] h-[56px] text-black bg-[#e14242] hover:bg-[#c12f2f] mx-auto md:mx-0">
              See Pricing
            </Button>
          </div>
        </div>

        {/* Additional Component */}
        <div className="mt-20">
          <Capability />
        </div>
      </div>
    </div>
  );
};

export default CapabilitySection;
