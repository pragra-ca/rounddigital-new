import React, { useState } from 'react';
import Image from 'next/image';
import contactimage from '@/assets/home/contactgroup.png'; // Adjust the path as necessary
const ContactUs = () => {
  const [selectedOption, setSelectedOption] = useState("Say Hi");

  const handleOptionChange = (e)=> {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          <div className="bg-[#e14242] text-white px-4 py-1 rounded-md font-semibold text-lg">
            Contact Us
          </div>
          <p className="text-sm md:text-base text-black">
            Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#f6f6f6] rounded-2xl p-6 sm:p-10 md:p-12 flex flex-col md:flex-row gap-10 md:items-center">
          {/* Left: Form */}
          <div className="flex-1 w-full">
            {/* Radio Buttons */}
            <div className="flex gap-6 mb-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Say Hi"
                  checked={selectedOption === "Say Hi"}
                  onChange={handleOptionChange}
                  className="form-radio accent-red-500"
                />
                <span className="text-black">Say Hi</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Get a Quote"
                  checked={selectedOption === "Get a Quote"}
                  onChange={handleOptionChange}
                  className="form-radio accent-red-500"
                />
                <span className="text-black">Get a Quote</span>
              </label>
            </div>

            {/* Form */}
            <form className="space-y-5">
              <div>
                <label className="block mb-1 text-sm text-black">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-400 rounded-md text-black"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-black">Email*</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-400 rounded-md text-black"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-black">Message*</label>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-400 rounded-md text-black resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Decorative Image */}
          <div className="flex-1 full hidden md:flex justify-end relative">
            <Image
              src={contactimage}
              alt="Decorative"
              width={500}
              height={500}
              className="z-10 object-cover rounded-2xl -mr-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
