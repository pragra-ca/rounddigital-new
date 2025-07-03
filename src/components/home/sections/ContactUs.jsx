'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import contactimage from '@/assets/home/contactgroup.png';

const ContactUs = () => {
  const [selectedOption, setSelectedOption] = useState("Say Hi");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('');
      return;
    }

    // Mock form submission
    console.log({ ...formData, type: selectedOption });
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <div className="w-full bg-white py-16 md:py-24 px-2 sm:px-4 lg:px-8 overflow-x-hidden">
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
        <div className="bg-[#f6f6f6] rounded-2xl p-4 sm:p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-10 md:items-center border-b-4 border-[#e14242] shadow-[0_8px_32px_0_rgba(225,66,66,0.10),0_2px_8px_0_rgba(25,26,35,0.10)]">
          {/* Left: Form */}
          <div className="flex-1 w-full min-w-0">
            {/* Radio Buttons */}
            <div className="flex gap-4 sm:gap-6 mb-6 flex-wrap">
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
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-sm text-black">Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black shadow focus:border-[#e14242] focus:ring-2 focus:ring-[#e14242]/20 transition"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block mb-1 text-sm text-black">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black shadow focus:border-[#e14242] focus:ring-2 focus:ring-[#e14242]/20 transition"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block mb-1 text-sm text-black">Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black resize-none shadow focus:border-[#e14242] focus:ring-2 focus:ring-[#e14242]/20 transition"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg border-b-4 border-[#e14242] shadow-[0_4px_24px_0_rgba(225,66,66,0.10)] hover:bg-[#e14242] hover:shadow-[0_8px_32px_0_rgba(225,66,66,0.18)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-semibold text-lg"
              >
                Send Message
              </button>
              {status && <p className="text-green-600 font-medium mt-2">{status}</p>}
            </form>
          </div>

          {/* Right: Decorative Image */}
          <div className="flex-1 hidden md:flex justify-end relative min-w-0">
            <Image
              src={contactimage}
              alt="Decorative"
              width={400}
              height={400}
              className="z-10 object-contain rounded-2xl max-w-full h-auto -mr-24"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
