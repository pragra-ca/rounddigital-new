import { ellips } from "../constant";
import { CircleArrowRight } from "lucide-react";

const BecomePart = () => {
  return (
    // Made height and negative margins responsive for better mobile display
    <div className="relative w-full rounded-[35px] bg-[#200C08] h-[380px] md:h-[424px] -mt-[190px] md:-mt-[212px] -mb-[190px] md:-mb-[212px] overflow-hidden flex items-center justify-center text-center px-4">
      {/* Background Ellipse */}
      <img src={ellips} alt="background design" className="absolute inset-0 w-full h-full object-cover " />

      <div className="z-10 max-w-2xl">
        {/* Heading (already responsive) */}
        <h1 className="text-4xl text-white sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          Become part of the <br /> design revolution
        </h1>

        {/* Subtext (already responsive) */}
        <p className="text-gray-300 text-sm md:text-base mb-6">
          Jump on a membership and start <br />
          requesting designs right away!
        </p>

        {/* CTA Button with responsive padding */}
        {/* <button className="bg-red-500 text-sm md:text-base hover:bg-red-600 text-black font-medium py-4 px-8 md:py-[17px] md:px-[39px] rounded-[8px] flex items-center gap-2 mx-auto">
          See Pricing <CircleArrowRight size={16} />
        </button> */}
      </div>
    </div>
  );
};

export default BecomePart;