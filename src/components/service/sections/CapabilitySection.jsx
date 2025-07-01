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
    <div className="relative bg-[#232021] py-20 overflow-hidden">
      {/* 3D Rain BG effect */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Rain drops */}
        {[...Array(32)].map((_, i) => (
          <span
            key={i}
            className={`rain-drop`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1.8 + Math.random() * 1.5}s`,
              opacity: 0.12 + Math.random() * 0.18,
              filter: "blur(0.5px)",
              background: `linear-gradient(180deg, #fff 0%, #e14242 100%)`,
              width: `${1.5 + Math.random() * 1.5}px`,
              height: `${32 + Math.random() * 32}px`,
              borderRadius: "999px",
              position: "absolute",
              top: `-${Math.random() * 40}px`,
              zIndex: 1,
            }}
          />
        ))}
        {/* Glassy overlay for 3D depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-[#e14242]/5 to-[#ff6a6a]/5 rounded-3xl blur-[2px]" />
        {/* Soft shadow at the bottom for depth */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3/4 h-32 bg-black/30 blur-2xl rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Capabilities Header */}
        <div className="text-center space-y-4">
          <p className="uppercase text-sm font-semibold tracking-wider text-[#e14242] animate-pulse">
            Our capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-[0_2px_16px_#e1424222]">
            We can help you with...
          </h2>
        </div>

        {/* Capability Tags */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10 max-w-5xl mx-auto">
          {capabilities.map((item, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-[#e14242] to-[#ff6a6a] text-white px-5 py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 border border-white/10 backdrop-blur-[2px]"
              style={{
                boxShadow:
                  "0 2px 16px 0 rgba(225,66,66,0.15), 0 1.5px 8px 0 rgba(255,106,106,0.10)",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <span className="uppercase text-[#E14242] text-sm font-semibold tracking-wider">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug drop-shadow-[0_2px_16px_#e1424222]">
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
            <Button className="w-[149px] h-[56px] text-black bg-gradient-to-r from-[#e14242] to-[#ff6a6a] hover:from-[#c12f2f] hover:to-[#e14242] mx-auto md:mx-0 font-bold shadow-lg transition-all duration-300">
              See Pricing
            </Button>
          </div>
        </div>

        {/* Additional Component */}
        <div className="mt-20">
          <Capability />
        </div>
      </div>
      <style jsx>{`
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .rain-drop {
          animation-name: rain-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes rain-fall {
          0% {
            transform: translateY(-40px) scaleX(1) scaleY(1) rotateX(25deg);
            box-shadow: 0 0 8px 0 #fff3;
          }
          80% {
            box-shadow: 0 0 16px 2px #e1424266;
          }
          100% {
            transform: translateY(110vh) scaleX(0.85) scaleY(1.2) rotateX(25deg);
            box-shadow: 0 0 0 0 #fff0;
          }
        }
      `}</style>
    </div>
  );
};

export default CapabilitySection;
