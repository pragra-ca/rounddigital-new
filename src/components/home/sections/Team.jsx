import React from "react";
import Image from "next/image";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

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
      name: "John Smith",
      role: "CEO & Founder",
      description:
        "Visionary leader with 15+ years of experience in digital transformation and business strategy.",
      image: team1,
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Creative Director",
      description:
        "Passionate about creating beautiful and intuitive user experiences that drive engagement.",
      image: team2,
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Developer",
      description:
        "Expert in modern web technologies and scalable architecture solutions.",
      image: team3,
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Marketing Director",
      description:
        "Data-driven marketer focused on growth strategies and brand development.",
      image: team4,
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 5,
      name: "David Kim",
      role: "UX Designer",
      description:
        "Creates intuitive and delightful user experiences that solve real problems.",
      image: team5,
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 6,
      name: "Lisa Wong",
      role: "Project Manager",
      description:
        "Ensures projects are delivered on time, on budget, and exceed expectations.",
      image: team6,
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

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col max-w-full w-full items-start gap-4 p-6 bg-white rounded-[45px] border border-[#191a23] shadow-[5px_5px_0px_#191a23]"
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

      {/* Button */}
      <div className="flex justify-center mt-16">
        <button className="w-60 bg-black text-white py-4 rounded-xl hover:bg-gray-800 text-lg font-medium transition">
          See all team
        </button>
      </div>
    </section>
  );
};

export default Team;
