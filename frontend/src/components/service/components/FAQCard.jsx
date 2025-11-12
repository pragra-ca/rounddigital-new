import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import gsap from 'gsap';

const faqData = [
    {
      question: 'Do you have specific pricing plans to show?',
      answer:
        'Yes, we offer multiple pricing plans tailored to different business needs. You can view them on our pricing page or contact our team for a custom quote.',
    },
    {
      question: 'How many years of experience do you have?',
      answer:
        'We have over 10 years of experience in delivering high-quality digital solutions across various industries including tech, healthcare, e-commerce, and more.',
    },
    {
      question: 'What companies have you worked with?',
      answer:
        'We’ve had the privilege of working with startups, mid-size businesses, and global enterprises such as Techverse, Mediwell, and Gymstory.',
    },
    {
      question: 'Am I safe leaving my company in your hands?',
      answer:
        'Absolutely. We treat every client’s business like our own, ensuring confidentiality, transparency, and a commitment to delivering measurable results.',
    },
  ];
  

const FAQCard = () => {
  const [openIndex, setOpenIndex] = useState(null); // All FAQs are initially closed
  const answerRefs = useRef([]); // To hold refs for each answer div

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    // Animate open/close based on openIndex
    answerRefs.current.forEach((ref, index) => {
      if (index === openIndex) {
        // Animate open
        gsap.to(ref, {
          height: 'auto',
          autoAlpha: 1, // Fades in and sets visibility
          duration: 0.4,
          ease: 'power2.inOut',
          overwrite: 'auto', // Prevents conflicting animations
        });
      } else {
        // Animate close
        gsap.to(ref, {
          height: 0,
          autoAlpha: 0, // Fades out and sets visibility: hidden
          duration: 0.4,
          ease: 'power2.inOut',
          overwrite: 'auto',
        });
      }
    });
  }, [openIndex]); // Re-run effect when openIndex changes

  return (
    <div className="space-y-4 max-w-2xl mx-auto px-4">
      {faqData.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={index}
            className="bg-black text-white rounded-xl px-[34px] py-[29px] transition-all duration-300 border border-transparent"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="flex justify-between items-center w-full"
            >
              <span className="text-[18px] font-medium text-left">
                {item.question}
              </span>
              <span className="text-black p-2 rounded-full bg-red-500">
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </button>

            {/* The answer div is always in the DOM but its height and visibility are controlled by GSAP */}
            <div
              ref={el => (answerRefs.current[index] = el)}
              className="h-0 overflow-hidden invisible" // Initial state for GSAP
            >
              <p className="mt-3 text-[16px] text-gray-300">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQCard;