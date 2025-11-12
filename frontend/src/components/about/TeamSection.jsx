"use client";
import * as React from "react";

function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Atin Singh",
      role: "Chief Executive Officer",
      position: "CEO",
      description:
        "Visionary leader with a passion for innovation and results.",
      image:
        "https://res.cloudinary.com/dm1txojyd/image/upload/v1727253393/Atin_pp4vjq.jpg",
      badgeColor: "bg-red-600",
      textColor: "text-white",
      borderColor: "border-white/80",
    },
    {
      id: 2,
      name: "Vivek Ghartan",
      role: "Chief Technology Officer",
      position: "CTO",
      description: "Financial strategist ensuring sustainable growth.",
      image:
        "https://res.cloudinary.com/dkyp14kzf/image/upload/v1736773360/Vivek_hboeow.jpg",
      badgeColor: "bg-black",
      textColor: "text-white",
      borderColor: "border-red-600",
    },
    {
      id: 3,
      name: "Sonali Singla",
      role: "Technical Recruiter",
      position: "Recruiter",
      description: "Tech innovator driving digital transformation.",
      image:
        "https://res.cloudinary.com/dm1txojyd/image/upload/v1727254953/SonaliSingla_k2j0vx.png",
      badgeColor: "bg-red-600",
      textColor: "text-white",
      borderColor: "border-white/80",
    },
    {
      id: 4,
      name: "Rahul Singh",
      role: "Software Developer",
      position: "SDE",
      description: "Creative mind behind our stunning visuals.",
      image:
        "https://res.cloudinary.com/dm1txojyd/image/upload/v1727255082/passport_size_photo.._idtrmu.jpg",
      badgeColor: "bg-black",
      textColor: "text-white",
      borderColor: "border-red-600",
    },
    {
      id: 5,
      name: "Abhinav Roy",
      role: "Software Developer",
      position: "SDE",
      description: "Building robust and scalable solutions.",
      image:
        "https://res.cloudinary.com/pragra/image/upload/v1744022235/Employees/small.jpg",
      badgeColor: "bg-red-600",
      textColor: "text-white",
      borderColor: "border-white/80",
    },
    {
      id: 6,
      name: "Priyanshu Chakraborty",
      role: "Web Designer",
      position: "Designer",
      description: "Always here to help our clients succeed.",
      image:
        "https://res.cloudinary.com/dm1txojyd/image/upload/v1727255058/Priyanshu_Image_vfkqgf.png",
      badgeColor: "bg-black",
      textColor: "text-white",
      borderColor: "border-red-600",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-white via-zinc-100 to-white py-16 px-2 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-14">
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-6 py-1 rounded-full shadow tracking-widest uppercase letter-spacing-wider">
            TEAM
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 text-center drop-shadow">
            Our Talented People
          </h2>
          <p className="mt-2 text-lg sm:text-xl font-medium text-zinc-600 text-center max-w-2xl">
            We bring ideas to life by combining years of experience, creativity,
            and the passion of our talented team.
          </p>
        </div>

        {/* Team Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full justify-items-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative bg-white/80 border border-zinc-200 rounded-3xl shadow-2xl flex flex-col items-center p-8 w-full max-w-xs hover:scale-[1.04] hover:shadow-red-200 transition-all duration-300 group"
            >
              <span
                className={`absolute -top-5 left-1/2 -translate-x-1/2 ${member.badgeColor} ${member.textColor} text-xs font-bold px-5 py-1 rounded-full shadow ${member.borderColor} border z-20 tracking-wider`}
              >
                {member.position}
              </span>
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-48 object-cover rounded-2xl mb-6 shadow-lg border-4 border-white"
              />
              <h3 className="text-2xl font-bold text-zinc-900 mb-1 text-center">
                {member.name}
              </h3>
              <p className="text-red-600 font-semibold text-base mb-2 text-center">
                {member.role}
              </p>
              <p className="text-zinc-600 text-center text-sm">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
