import { Loader } from "lucide-react";
import insyght from "@/assets/service/projects/insyght.png";
import attendify from "@/assets/service/projects/attendify.png";
import unseal from "@/assets/service/projects/unseal.png";
import katimet from "@/assets/service/projects/katimet.png";
import Image from "next/image";
import Link from "next/link";



export const works = [
  {
    id: 1,
    slug: "insyght",
    title: "Insyght",
    subtitle:
      "A comprehensive job portal connecting employers and job seekers with intelligent matching algorithms and streamlined application processes.",
    client: "TechRecruit Solutions",
    year: "2024",
    service: "Web Development",
    caseStudyImage: insyght,
    description:
      "Insyght is a cutting-edge job portal management system that redefines job posting and application with intelligent features and modern UX.",
    technologyStack: [
      "React.js", "Redux", "Material UI", "Tailwind CSS",
      "Node.js", "Express", "MongoDB", "JWT",
      "Socket.io", "AWS S3", "Docker", "CI/CD (GitHub Actions)"
    ],
    keyFeatures: [
      "AI-powered job matching",
      "Location-based search filters",
      "Custom company branding profiles",
      "Application tracking system",
      "Resume parsing & profile creation",
      "Real-time notifications",
      "In-app messaging",
      "Hiring analytics dashboard"
    ],
    impact: {
      placementIncrease: "45%",
      timeToHireReduction: "60%",
      matchQualityImprovement: "78%",
      companiesUsing: "50+",
      monthlyApplications: "10,000+",
      uptime: "99.9%"
    },
    testimonial: {
      quote: "Insyght has completely transformed our recruitment process. The intelligent matching algorithm has saved us countless hours.",
      name: "Kane Johnson",
      role: "Head of Talent Acquisition, TechRecruit Solutions"
    }
  },
  {
    id: 2,
    slug: "attendify",
    title: "Attendify",
    subtitle:
      "An e-learning platform enabling seamless online course delivery, user tracking, and certification for global educators.",
    client: "SkillBridge Academy",
    year: "2023",
    service: "Edu-Tech Development",
    caseStudyImage: attendify,
    description:
      "SkillBridge LMS is a robust learning management system built to provide engaging course experiences and track learner performance.",
    technologyStack: [
      "Next.js", "Tailwind CSS", "Firebase", "Chart.js", "Cloudinary"
    ],
    keyFeatures: [
      "Course creation & video hosting",
      "Progress tracking",
      "Quiz & assessment modules",
      "Certificate generator",
      "Discussion forums",
      "Admin analytics dashboard"
    ],
    impact: {
      users: "25,000+ active learners",
      courseCompletion: "80% avg. rate",
      supportRequests: "50% drop"
    },
    testimonial: {
      quote: "SkillBridge made it easy for our instructors to launch, track, and improve courses globally with no tech hassle.",
      name: "Sara Mehta",
      role: "Founder, SkillBridge Academy"
    }
  },
  {
    id: 3,
    slug: "unseal",
    title: "Unseal",
    subtitle:
      "A powerful digital marketing dashboard designed to streamline campaign management and performance insights.",
    client: "BrandEdge Media",
    year: "2023",
    service: "Marketing & Analytics",
    caseStudyImage: unseal,
    description:
      "BrandBoost consolidates marketing efforts into a single dashboard with real-time performance tracking and client campaign reports.",
    technologyStack: [
      "Vue.js", "Node.js", "MongoDB", "Socket.io", "Chart.js"
    ],
    keyFeatures: [
      "Live campaign status",
      "Ad performance analytics",
      "Social media integrations",
      "Client-specific reports",
      "Team collaboration tools"
    ],
    impact: {
      campaignEfficiency: "35% improvement",
      reportingTime: "70% faster",
      clientsUsing: "200+"
    },
    testimonial: {
      quote: "Our teams now manage all campaigns from a single dashboard. The analytics and real-time updates are game-changing.",
      name: "James Nolan",
      role: "Marketing Director, BrandEdge Media"
    }
  },
  {
    id: 4,
    slug: "katimet",
    title: "Katimet",
    subtitle:
      "An AI-enabled fleet management app to optimize vehicle tracking, maintenance scheduling, and fuel efficiency.",
    client: "LogiTrack Corp",
    year: "2022",
    service: "Mobile App Development",
    caseStudyImage: katimet,
    description:
      "FleetFlow helps logistics companies monitor vehicle routes, automate maintenance reminders, and reduce operational costs.",
    technologyStack: [
      "React Native", "Firebase", "Google Maps API", "Node.js", "Figma"
    ],
    keyFeatures: [
      "Live vehicle tracking",
      "Predictive maintenance alerts",
      "Driver performance dashboard",
      "Fuel consumption analysis",
      "Push notifications"
    ],
    impact: {
      fuelSavings: "18%",
      maintenanceCostReduction: "22%",
      routeOptimization: "30% improvement"
    },
    testimonial: {
      quote: "FleetFlow simplified our logistics workflow. We now have full visibility and control over our operations.",
      name: "Amit Rao",
      role: "Operations Manager, LogiTrack Corp"
    }
  }
];


const Works = () => {
  return (
    <div className="flex flex-col pt-[70px] max-w-7xl mx-auto container pb-16">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-[40px] sm:text-[48px] font-extrabold bg-gradient-to-r from-[#e14242] via-[#ff6a6a] to-[#e14242] bg-clip-text text-transparent drop-shadow-[0_4px_24px_#e1424222]">
          Our Beautiful Works
        </h1>
        <p className="text-[18px] text-[#111204CC] max-w-2xl">
          We help our clients grow their bottom-line with clear and <br />{" "}
          professional websites.
        </p>
        <button className="flex items-center justify-center gap-2 w-[184px] mt-5 h-[64px] border-[1.5px] text-[18px] border-[#e14242] rounded-[12px] bg-gradient-to-r from-[#e14242]/10 to-[#ff6a6a]/10 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-[#e14242] font-semibold">
          <Loader className="w-[24px] h-[24px] animate-spin" />
          Load More
        </button>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
        {works.map((work, i) => (
          <Link
            href={`/works/${work.slug}`}
            key={work.id}
            onClick={() =>
              localStorage.setItem("selectedWork", JSON.stringify(work))
            }
          >
            <div
              className="relative group w-[270px] h-[270px] rounded-3xl bg-gradient-to-br from-[#232323] via-[#181818] to-[#e14242]/10 shadow-xl border border-[#e14242]/20 flex items-center justify-center overflow-visible transition-all duration-300 hover:scale-[1.07] hover:shadow-2xl"
              style={{ perspective: 1200 }}
            >
              {/* Animated glow */}
              <div className="absolute -inset-4 rounded-3xl bg-[#e14242]/20 blur-2xl opacity-0 group-hover:opacity-90 transition-all duration-500 pointer-events-none z-0 animate-glow" />

              {/* 3D tilt */}
              <div className="relative w-[230px] h-[230px] rounded-2xl bg-gradient-to-br from-white/10 via-[#232323]/10 to-[#e14242]/10 shadow-lg border border-[#e14242]/10 flex flex-col items-center justify-center transition-all duration-300 group-hover:rotate-[4deg] group-hover:scale-105">
                <Image
                  src={work.caseStudyImage}
                  alt={work.title}
                  className="object-cover rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 bg-white/10 p-1 z-10"
                  width={210}
                  height={210}
                  style={{ minWidth: 180, minHeight: 180 }}
                />
                <p className="mt-2 text-white font-semibold text-center px-2 text-sm line-clamp-2">
                  {work.title}
                </p>
              </div>

              {/* Floating label */}
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-[#181818]/90 text-white text-sm rounded-full shadow-lg group-hover:bg-[#e14242]/90 group-hover:text-white transition-all duration-300 backdrop-blur-md z-20 font-semibold tracking-wide">
                {work.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Works;
