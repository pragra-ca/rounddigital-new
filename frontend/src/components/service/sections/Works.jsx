import { Loader } from "lucide-react";
import Link from "next/link";
import insyght from "@/assets/service/projects/insyght.png";
import attendify from "@/assets/service/projects/attendify.png";
import unseal from "@/assets/service/projects/unseal.png";
import katimet from "@/assets/service/projects/katimet.png";
import Image from "next/image";

export const works = [
  {
    id: 1,
    slug: "securebank",
    title: "SecureBank",
    subtitle:
      "A comprehensive banking security system with advanced threat detection and real-time fraud prevention capabilities.",
    client: "Metropolitan Bank",
    year: "2024",
    service: "Financial Cybersecurity",
    caseStudyImage: insyght,
    description:
      "SecureBank is a cutting-edge banking security platform that provides multi-layered protection against cyber threats and financial fraud.",
    technologyStack: [
      "Advanced Threat Detection",
      "Machine Learning",
      "Encryption Protocols",
      "Multi-Factor Authentication",
      "SIEM Integration",
      "Blockchain Security",
      "Real-time Monitoring",
      "Incident Response",
      "Compliance Management",
    ],
    keyFeatures: [
      "AI-powered fraud detection",
      "Real-time transaction monitoring",
      "Advanced encryption protocols",
      "Multi-layered security barriers",
      "Automated threat response",
      "Compliance reporting",
      "24/7 security monitoring",
      "Risk assessment dashboard",
    ],
    impact: {
      fraudReduction: "85%",
      threatDetection: "99.7%",
      responseTime: "3 minutes",
      complianceRate: "100%",
      securityIncidents: "Zero breaches",
      uptime: "99.99%",
    },
    testimonial: {
      quote:
        "Round Digital's cybersecurity solution has completely transformed our security posture. We now have complete confidence in our systems.",
      name: "Andy Smith",
      role: "Chief Security Officer, Metropolitan Bank",
    },
  },
  {
    id: 2,
    slug: "cybershield",
    title: "CyberShield",
    subtitle:
      "An enterprise-grade security platform providing comprehensive protection against advanced persistent threats and malware.",
    client: "TechCorp Industries",
    year: "2023",
    service: "Enterprise Security",
    caseStudyImage: attendify,
    description:
      "CyberShield is a robust enterprise security system built to defend against sophisticated cyber attacks and ensure business continuity.",
    technologyStack: [
      "Endpoint Detection",
      "Network Security",
      "Cloud Protection",
      "Behavioral Analysis",
      "Threat Intelligence",
    ],
    keyFeatures: [
      "Advanced malware protection",
      "Network intrusion detection",
      "Cloud security monitoring",
      "Behavioral threat analysis",
      "Automated incident response",
      "Security orchestration platform",
    ],
    impact: {
      threatsPrevented: "50,000+ monthly",
      securityPosture: "95% improvement",
      incidentResponse: "80% faster",
    },
    testimonial: {
      quote:
        "CyberShield has given us the security confidence we needed to scale our operations globally with zero compromises.",
      name: "Sarah Chen",
      role: "CTO, TechCorp Industries",
    },
  },
  {
    id: 3,
    slug: "datafortress",
    title: "DataFortress",
    subtitle:
      "A comprehensive data protection and privacy compliance solution designed for healthcare and financial institutions.",
    client: "HealthSecure Medical",
    year: "2023",
    service: "Data Protection & Compliance",
    caseStudyImage: unseal,
    description:
      "DataFortress ensures complete data protection and regulatory compliance with advanced encryption and privacy controls.",
    technologyStack: [
      "Data Encryption",
      "Access Controls",
      "Audit Logging",
      "Compliance Automation",
      "Privacy Management",
    ],
    keyFeatures: [
      "End-to-end data encryption",
      "Role-based access controls",
      "Automated compliance reporting",
      "Data loss prevention",
      "Privacy impact assessments",
    ],
    impact: {
      dataProtection: "100% compliance",
      auditReadiness: "90% faster",
      privacyViolations: "Zero incidents",
    },
    testimonial: {
      quote:
        "Our data has never been more secure. The compliance automation has saved us countless hours and eliminated risks.",
      name: "Dr. Michael Torres",
      role: "Chief Medical Officer, HealthSecure Medical",
    },
  },
  {
    id: 4,
    slug: "threatguard",
    title: "ThreatGuard",
    subtitle:
      "An AI-powered threat intelligence platform that provides real-time security insights and predictive threat analysis.",
    client: "SecureLogistics Corp",
    year: "2022",
    service: "Threat Intelligence",
    caseStudyImage: katimet,
    description:
      "ThreatGuard leverages artificial intelligence to predict, detect, and neutralize cyber threats before they impact business operations.",
    technologyStack: [
      "AI/ML Analytics",
      "Threat Intelligence",
      "Predictive Analysis",
      "Security Automation",
      "Risk Assessment",
    ],
    keyFeatures: [
      "Predictive threat modeling",
      "Real-time threat intelligence",
      "Automated security responses",
      "Risk visualization dashboard",
      "Threat hunting capabilities",
    ],
    impact: {
      threatPrediction: "92% accuracy",
      falsePositives: "70% reduction",
      securityEfficiency: "60% improvement",
    },
    testimonial: {
      quote:
        "ThreatGuard's predictive capabilities have revolutionized our security operations. We're always one step ahead of threats.",
      name: "James Rodriguez",
      role: "Security Director, SecureLogistics Corp",
    },
  },
];

const Works = () => {
  return (
    <div className="flex flex-col pt-[70px] max-w-7xl mx-auto container pb-16">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-[40px] sm:text-[48px] font-extrabold bg-gradient-to-r from-[#e14242] via-[#ff6a6a] to-[#e14242] bg-clip-text text-transparent drop-shadow-[0_4px_24px_#e1424222]">
          Our IT Projects
        </h1>
        <p className="text-[18px] text-[#111204CC] max-w-2xl">
          We help businesses grow with comprehensive <br /> IT solutions and
          digital transformation services.
        </p>
        {/** Load More button commented out as requested **/}
        {/**
        <Link href="/works" className="inline-flex items-center justify-center gap-2 w-[184px] mt-5 h-[64px] border-[1.5px] text-[18px] border-[#e14242] rounded-[12px] bg-gradient-to-r from-[#e14242]/10 to-[#ff6a6a]/10 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-[#e14242] font-semibold">
          <Loader className="w-[24px] h-[24px] animate-spin" />
          Load More
        </Link>
        **/}
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
