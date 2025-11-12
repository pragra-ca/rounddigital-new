import React from "react";
import Link from "next/link";
import Image from "next/image";
import ctabg from "@/assets/home/ctabg.png";
import { 
  ShieldCheckIcon, 
  CpuChipIcon, 
  CloudIcon, 
  CodeBracketIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CogIcon,
  BeakerIcon
} from "@heroicons/react/24/outline";

const services = [
  {
    id: 1,
    title: "AI Agent Development",
    subtitle: "Intelligent Automation",
    description: "Build custom AI agents that automate complex workflows, enhance decision-making, and drive business efficiency.",
    icon: SparklesIcon,
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
  },
  {
    id: 2,
    title: "AI Product Integration",
    subtitle: "Embed Intelligence",
    description: "Seamlessly integrate AI capabilities into your existing products with machine learning, NLP, and computer vision.",
    icon: CpuChipIcon,
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
  },
  {
    id: 3,
    title: "Cybersecurity",
    subtitle: "Enterprise Protection",
    description: "Advanced threat detection, compliance management, and proactive security solutions to safeguard your business.",
    icon: ShieldCheckIcon,
    gradient: "from-red-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    subtitle: "Scalable Infrastructure",
    description: "Cloud-native architecture, migration services, and optimization for AWS, Azure, and Google Cloud Platform.",
    icon: CloudIcon,
    gradient: "from-indigo-500 to-purple-500",
    bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
  },
  {
    id: 5,
    title: "Custom Software Development",
    subtitle: "Tailored Solutions",
    description: "Enterprise-grade software designed specifically for your business needs with modern tech stacks.",
    icon: CodeBracketIcon,
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
  },
  {
    id: 6,
    title: "Digital Transformation",
    subtitle: "Modernize Operations",
    description: "Strategic consulting and implementation to modernize legacy systems and adopt cutting-edge technologies.",
    icon: RocketLaunchIcon,
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
  },
];

const Services = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e14242]/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#e14242] rounded-full"></div>
            <span className="text-sm font-semibold text-[#e14242] uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#191a23] mb-6">
            Enterprise Solutions for
            <span className="block text-[#e14242]">Modern Businesses</span>
          </h2>
          <p className="text-lg text-gray-600">
            From AI-powered automation to enterprise security, we deliver comprehensive IT solutions that transform businesses and drive growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative ${service.bgColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-[#191a23] group-hover:text-[#e14242] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-[#e14242] font-semibold text-sm mt-4 group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-[#191a23] to-[#2a2b35] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                  <div className="w-2 h-2 bg-[#e14242] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Ready to Get Started?</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Let's Build Something
                  <span className="block text-[#e14242]">Extraordinary Together</span>
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Partner with us to transform your vision into reality with cutting-edge technology and expert execution.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/contact">
                    <button className="px-8 py-4 bg-[#e14242] text-white font-semibold rounded-lg hover:bg-[#c93838] transition-all duration-300 shadow-lg hover:shadow-xl">
                      Get Free Consultation
                    </button>
                  </Link>
                  <Link href="/industries">
                    <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                      View Industries
                    </button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                  <div>
                    <p className="text-3xl font-bold text-white">100+</p>
                    <p className="text-sm text-gray-400">Projects</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">98%</p>
                    <p className="text-sm text-gray-400">Success Rate</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">24/7</p>
                    <p className="text-sm text-gray-400">Support</p>
                  </div>
                </div>
              </div>

              {/* Right Visual (hidden on mobile) */}
              <div className="hidden lg:block">
                <div className="relative w-full h-64">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#e14242]/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
