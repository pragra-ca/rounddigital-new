import React from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Atin Singh",
      role: "CEO & Founder",
      description: "Leads with vision and purpose, driving strategic growth and innovation across the organization.",
      image: "https://res.cloudinary.com/dm1txojyd/image/upload/v1727253393/Atin_pp4vjq.jpg",
      social: { linkedin: "https://www.linkedin.com/" },
    },
    {
      id: 2,
      name: "Vivek Ghartan",
      role: "CTO",
      description: "Oversees the company's technical strategy, ensuring cutting-edge solutions and infrastructure.",
      image: "https://res.cloudinary.com/dkyp14kzf/image/upload/v1736773360/Vivek_hboeow.jpg",
      social: { linkedin: "https://www.linkedin.com/" },
    },
    {
      id: 3,
      name: "Sonali Singla",
      role: "Technical Recruiter",
      description: "Connects top tech talent with opportunities, ensuring the growth of high-performing teams.",
      image: "https://res.cloudinary.com/dm1txojyd/image/upload/v1727254953/SonaliSingla_k2j0vx.png",
      social: { linkedin: "https://www.linkedin.com/" },
    },
    {
      id: 4,
      name: "Rahul Singh",
      role: "Software Developer",
      description: "Builds scalable and high-performance web applications using modern development practices.",
      image: "https://res.cloudinary.com/dm1txojyd/image/upload/v1727255082/passport_size_photo.._idtrmu.jpg",
      social: { linkedin: "https://www.linkedin.com/" },
    },
    {
      id: 5,
      name: "Abhinav Roy",
      role: "Software Developer",
      description: "Designs and implements robust backend and frontend systems that power great user experiences.",
      image: "https://res.cloudinary.com/pragra/image/upload/v1744022235/Employees/small.jpg",
      social: { linkedin: "https://www.linkedin.com/" },
    },
    {
      id: 6,
      name: "Priyanshu Chakraborty",
      role: "Web Designer",
      description: "Creates visually appealing and user-friendly designs that align with brand identity and goals.",
      image: "https://res.cloudinary.com/dm1txojyd/image/upload/v1727255058/Priyanshu_Image_vfkqgf.png",
      social: { linkedin: "https://www.linkedin.com/" },
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e14242]/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#e14242] rounded-full"></div>
            <span className="text-sm font-semibold text-[#e14242] uppercase tracking-wide">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#191a23] mb-6">
            Meet the Experts
            <span className="block text-[#e14242]">Behind Your Success</span>
          </h2>
          <p className="text-lg text-gray-600">
            A dedicated team of professionals committed to delivering excellence and driving innovation in every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#191a23]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Social Link - appears on hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#e14242] rounded-full flex items-center justify-center hover:bg-[#c93838] transition-colors shadow-lg"
                    >
                      <FaLinkedinIn className="text-white w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-[#191a23] group-hover:text-[#e14242] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
