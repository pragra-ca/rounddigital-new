"use client";

import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "Do you have specific pricing plans to show?",
    answer: "",
  },
  {
    question: "How many years of experience do you have?",
    answer:
      "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
  },
  {
    question: "What companies have you worked with?",
    answer: "",
  },
  {
    question: "Am I safe leaving my company in your hands?",
    answer: "",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-4 md:px-10 text-black font-sans">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">FAQ's</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Providing answers to your questions
        </p>
      </div>

      <div className="max-w-xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className="bg-black text-white rounded-xl px-5 py-4 cursor-pointer shadow-sm"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm md:text-base font-medium">
                {faq.question}
              </p>
              {openIndex === index ? (
                <ChevronUpIcon className="w-5 h-5 text-red-500" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-red-500" />
              )}
            </div>
            {openIndex === index && faq.answer && (
              <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}

        <div className="pt-8">
          <textarea
            className="w-full h-24 rounded-md border border-black p-4 text-sm resize-none focus:outline-none placeholder:text-gray-400"
            placeholder="Ask us what you want to know..."
          />
          <div className="flex justify-between items-center mt-3">
            <p className="text-xs text-gray-500">
              We will answer your questions via email within 48 hours.
            </p>
            <button className="bg-red-500 text-white px-6 py-1.5 rounded-full text-sm font-semibold">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}