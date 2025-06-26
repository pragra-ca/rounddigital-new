import {
    cap1, cap2, cap3, cap4, cap5, cap6, cap7, cap8, cap9
  } from "@/constant/constant"
import Image from "next/image"
  
  const capabilities = [
    {
      icon: cap6,
      title: "On-demand requests",
      description: "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1."
    },
    {
      icon: cap2,
      title: "Top-notch quality",
      description: "High-end work from a dedicated team of senior designers that's always available when you need it."
    },
    {
      icon: cap3,
      title: "Powered by – Webflow",
      description: "We build every site on Webflow, making them dynamic, accessible, and easily scalable. It's easy for you like Squarespace but better."
    },
    {
      icon: cap4,
      title: "Fast. Responsive. Reliable.",
      description: "Get regular updates on your projects and can expect to receive your designs within 2–3 days."
    },
    {
      icon: cap5,
      title: "No Lock in contracts",
      description: "Pay the same every month, no surprises. You can use it for as long as you want and cancel anytime."
    },
    {
      icon: cap6,
      title: "Great value for money",
      description: "Get the power of dedicated design team at fraction of the cost of full-time employee. ($54k/yr vs. $112k/yr)."
    },
    {
      icon: cap7,
      title: "Customized for you",
      description: "We design and build custom for you. We’re never starting from a template unless you want that? You don’t, right?"
    },
    {
      icon: cap8,
      title: "Creative paying",
      description: "We’re here when you need us and not on payroll when you don’t."
    },
    {
      icon: cap4,
      title: "Expert turnovers",
      description: "You’re getting 10+ years of design experience with every request. No hand-holding required."
    },
  ]
  
  const Capability = () => {
    return (
      <section className="text-header px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {capabilities.map((cap, index) => (
            <div key={index} className="flex flex-col items-start gap-4">
              <Image src={cap.icon} alt={cap.title} className="w-[32px] h-[32px] object-contain mt-1" />
              <div>
                <h4 className="text-white font-semibold text-base mb-1">
                  <span className=" mr-1">{index + 1}.</span>{cap.title}
                </h4>
                <p className="text-[#9593A4] text-sm leading-relaxed">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Capability
  