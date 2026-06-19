import FAQCard from "../components/FAQCard"
import FormHandle from "../components/FormHandle"

const FAQSection = () => {
  return (
    // Add horizontal padding for mobile devices
    <div className="px-6 md:px-8">
        {/* Adjust vertical margins and font size for responsiveness */}
        <div className="flex flex-col gap-1 mt-20 md:mt-[86px] mb-16 md:mb-[70px]">
            <h1 className="text-3xl sm:text-4xl md:text-[48px] text-center font-bold text-black">FAQ's</h1>
            <p className="text-sm text-center text-gray-300">Providing answers to your questions</p>
        </div>
        <div>
            <FAQCard />
        </div>
        <div>
            <FormHandle />
        </div>
    </div>
  )
}

export default FAQSection