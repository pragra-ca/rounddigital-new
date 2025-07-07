import React from "react";
import Image from "next/image";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

// Image imports remain the same
import team1 from "@/assets/home/mask-group.png";
import team2 from "@/assets/home/mask-group-2.png";
import team3 from "@/assets/home/mask-group-3.png";
import team4 from "@/assets/home/mask-group-4.png";
import team5 from "@/assets/home/team5.png";
import team6 from "@/assets/home/mask-group-6.png";

const Team = () => {
const teamMembers = [
  {
    id: 1,
    name: "Atin Singh",
    role: "CEO & Founder",
    description:
      "Leads with vision and purpose, driving strategic growth and innovation across the organization.",
    image: "https://res.cloudinary.com/dm1txojyd/image/upload/v1727253393/Atin_pp4vjq.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Vivek Ghartan",
    role: "CTO",
    description:
      "Oversees the company’s technical strategy, ensuring cutting-edge solutions and infrastructure.",
    image: "https://res.cloudinary.com/dkyp14kzf/image/upload/v1736773360/Vivek_hboeow.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Sonali Singla",
    role: "Technical Recruiter",
    description:
      "Connects top tech talent with opportunities, ensuring the growth of high-performing teams.",
    image:   "https://res.cloudinary.com/dm1txojyd/image/upload/v1727254953/SonaliSingla_k2j0vx.png",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "Rahul Singh",
    role: "Software Developer",
    description:
      "Builds scalable and high-performance web applications using modern development practices.",
    image: "https://res.cloudinary.com/dm1txojyd/image/upload/v1727255082/passport_size_photo.._idtrmu.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 5,
    name: "Abhinav Roy",
    role: "Software Developer",
    description:
      "Designs and implements robust backend and frontend systems that power great user experiences.",
    image: "https://res.cloudinary.com/pragra/image/upload/v1744022235/Employees/small.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 6,
    name: "Priyanshu Chakraborty",
    role: "Web Designer",
    description:
      "Creates visually appealing and user-friendly designs that align with brand identity and goals.",
    image: 'https://res.cloudinary.com/dm1txojyd/image/upload/v1727255058/Priyanshu_Image_vfkqgf.png',
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];


  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10 mb-16">
        <div className="bg-[#e14242] px-3 py-1 rounded-md">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
            Team
          </h2>
        </div>
        <p className="max-w-3xl text-black text-base sm:text-lg">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col max-w-full w-full items-start gap-4 p-6 bg-white rounded-[45px] border border-[#191a23] shadow-[5px_5px_0px_#191a23] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center gap-5 w-full">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 80px, 96px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-black text-lg sm:text-xl font-semibold break-words">
                  {member.name}
                </h3>
                <p className="text-black text-sm sm:text-base">{member.role}</p>
              </div>
              <div className="flex gap-2">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-700"
                  >
                    <FaLinkedinIn className="text-white w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
            <hr className="w-full border-gray-300 my-2" />
            <p className="text-black text-sm sm:text-base">
              {member.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {/* <div className="flex flex-wrap justify-center gap-4 mt-16">
        <button className="w-60 bg-black text-white py-4 rounded-xl text-lg font-medium transition-all duration-300 border-b-4 border-[#e14242] shadow-[0_4px_24px_0_rgba(225,66,66,0.10)] hover:bg-[#e14242] hover:text-white hover:shadow-[0_8px_32px_0_rgba(225,66,66,0.18)] hover:-translate-y-1 hover:scale-105">
          See all team
        </button>
      </div> */}
    </section>
  );
};

export default Team;
