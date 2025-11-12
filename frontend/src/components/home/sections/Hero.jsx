import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Accent circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#e14242]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#191a23]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-[#e14242] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Trusted by Leading Companies</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#191a23] leading-tight">
                Transform Your Business with
                <span className="block text-[#e14242] mt-2">AI & Technology</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Enterprise-grade IT solutions, cutting-edge AI development, and cybersecurity services that drive innovation and protect your digital assets.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-[#e14242] text-white font-semibold rounded-lg hover:bg-[#c93838] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Schedule Consultation
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 bg-white text-[#191a23] font-semibold rounded-lg border-2 border-gray-200 hover:border-[#e14242] transition-all duration-300 shadow-sm hover:shadow-md">
                    Explore Services
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#191a23]">100+ Projects Delivered</p>
                  <p className="text-xs text-gray-500">Trusted by leading enterprises</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px]">
                {/* Main card */}
                <div className="absolute top-0 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#e14242] rounded-lg"></div>
                    <h3 className="text-xl font-bold text-[#191a23]">AI-Powered Solutions</h3>
                    <p className="text-gray-600 text-sm">Revolutionize your business with intelligent automation and data-driven insights.</p>
                    <div className="space-y-2 pt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">Custom AI Agents</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">ML Integration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">Intelligent Automation</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Secondary card */}
                <div className="absolute bottom-0 left-0 w-72 h-64 bg-gradient-to-br from-[#191a23] to-[#2a2b35] rounded-2xl shadow-xl p-6 text-white transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Success Rate</span>
                      <span className="text-2xl font-bold">98%</span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-[98%] bg-[#e14242] rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div>
                        <p className="text-3xl font-bold">100+</p>
                        <p className="text-xs text-gray-400">Projects</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold">50+</p>
                        <p className="text-xs text-gray-400">Experts</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute top-10 left-10 px-4 py-2 bg-white rounded-lg shadow-lg">
                  <p className="text-xs font-semibold text-[#191a23]">🔒 ISO Certified</p>
                </div>
                <div className="absolute bottom-40 right-20 px-4 py-2 bg-[#e14242] rounded-lg shadow-lg">
                  <p className="text-xs font-semibold text-white">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
