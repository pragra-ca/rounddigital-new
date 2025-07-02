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
        <div className="bg-[#f6f6f6] rounded-2xl p-6 sm:p-10 md:p-12 flex flex-col md:flex-row gap-10 md:items-center border-b-4 border-[#e14242] shadow-[0_8px_32px_0_rgba(225,66,66,0.10),0_2px_8px_0_rgba(25,26,35,0.10)]">
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
          <div className="flex-1 hidden md:flex justify-end relative">
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
