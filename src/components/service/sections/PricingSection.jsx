import PriceCard from "../components/PriceCard"

const PricingSection = () => {
    return (
        // Adjusted vertical padding and added horizontal padding for mobile
        <div className="py-24 md:py-[148px] px-6 flex flex-col items-center justify-center">
            <div>
                <p className="text-sm text-center text-red-500 font-semibold tracking-wide mb-2">
                    CLEAR & SIMPLE PRICING
                </p>
                {/* Added an intermediate text size for a smoother transition */}
                <h2 className="text-3xl sm:text-4xl text-center md:text-[48px] font-extrabold text-white mb-[25px]">
                    Simple pricing to level up your brand.
                </h2>
                <p className="text-gray-300 text-center text-[18px] md:text-base max-w-xl mx-auto">
                    Senior experts. On-demand requests. <br /> Fast turnarounds. Flat monthly fee. Cancel anytime.
                </p>
            </div>
            {/* Reduced top margin on smaller screens */}
            <div className="mt-16 md:mt-[100px] w-full flex justify-center">
                <PriceCard />
            </div>
        </div>
    )
}

export default PricingSection