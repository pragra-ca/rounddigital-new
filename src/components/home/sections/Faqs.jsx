import React, { useState } from 'react';

const image1 = "/images/home/image-1.svg"; // default
const image2 = "/images/home/image-2.svg"; // active

const faqData = [
  {
    number: '01',
    title: 'What services do you offer?',
    answer:
      'We provide services like business consultation, strategy development, implementation, and performance optimization for startups and enterprises.',
  },
  {
    number: '02',
    title: 'How does the consultation process work?',
    answer:
      'We begin with understanding your business goals, pain points, and audience. This helps us tailor a strategic approach just for you.',
  },
  {
    number: '03',
    title: 'Can I track project progress?',
    answer:
      'Yes, we keep you updated with real-time reports, regular meetings, and open communication at every stage of the project.',
  },
  {
    number: '04',
    title: 'Do you provide post-launch support?',
    answer:
      'Absolutely. We monitor results, fix issues, and help optimize ongoing campaigns even after project completion.',
  },
  {
    number: '05',
    title: 'What industries do you specialize in?',
    answer:
      'We work across multiple industries including tech, education, eCommerce, healthcare, and consulting services.',
  },
  {
    number: '06',
    title: 'How soon can we get started?',
    answer:
      'You can start immediately after our initial consultation and agreement on scope and timelines.',
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white px-4 md:px-10 lg:px-20 py-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-block px-3 py-1 bg-[#e14242] rounded-md mb-3">
          <h2 className="text-white text-sm font-semibold">FAQs</h2>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h3>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Clear answers to common questions about our services and process.
        </p>
      </div>

      {/* FAQ Cards */}
      <div className="flex flex-col gap-8">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggleIndex(index)}
              className={`group transition-all duration-300 ease-in-out cursor-pointer border border-[#191a23] shadow-[0px_5px_0px_#191a23] rounded-[45px] p-6 sm:p-10 bg-grey hover:bg-[#e14242]`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-start sm:items-center gap-6">
                  <div className="text-4xl sm:text-5xl font-medium text-black group-hover:text-white">
                    {faq.number}
                  </div>
                  <div className="text-xl sm:text-2xl font-semibold text-black group-hover:text-white">
                    {faq.title}
                  </div>
                </div>

                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-[#191a23] bg-[#f3f3f3] shrink-0">
                  <img
                    src={isOpen ? image2 : image1}
                    alt="toggle-icon"
                    className="w-5 h-5"
                  />
                </div>
              </div>

              {isOpen && (
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-black group-hover:text-white">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
