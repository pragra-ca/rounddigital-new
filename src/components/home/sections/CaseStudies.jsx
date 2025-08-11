import Link from "next/link";
import React from "react";

const CaseStudies = () => {
  return (
    <section className="py-16 md:py-24 w-full bg-white relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#e14242]/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-[#e14242]/20 rounded-full blur-3xl z-0" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 w-full mb-12">
          <div className="inline-flex flex-col items-start">
            <div className="inline-flex items-center gap-2.5 px-2 py-1 bg-[#e14242] rounded-[7px] shadow">
              <h2 className="font-h-2 font-semibold text-white text-2xl md:text-3xl">
                Case Studies
              </h2>
            </div>
          </div>
          <p className="relative w-full md:max-w-[580px] text-[#000000] text-lg md:text-xl leading-relaxed font-normal">
            Discover how we've helped businesses transform their IT
            infrastructure, enhance cybersecurity, and accelerate growth through
            custom software and cloud solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Case Study 1 */}
          <div className="group bg-dark p-10 rounded-[36px] border-b-4 border-white shadow-2xl hover:shadow-[0_8px_32px_0_rgba(225,66,66,0.18)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl bg-[#e14242]/20 group-hover:bg-[#e14242]/40 z-0 transition-all duration-300"></div>
            <div className="relative z-10">
              <p className="mb-6 text-white text-lg leading-relaxed">
                Implemented comprehensive cybersecurity solutions for a
                financial institution, reducing security incidents by 95% and
                achieving complete regulatory compliance.
              </p>
              <Link
                href="/use-cases"
                className="inline-flex items-center gap-2 text-white hover:text-[#e14242] transition-colors font-semibold group"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-all duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <div
              className="pointer-events-none absolute inset-0 rounded-[36px] opacity-0 group-hover:opacity-100 transition duration-300"
              style={{
                boxShadow: "0 0 0 8px #e1424222, 0 8px 32px 0 #e1424222",
              }}
            />
          </div>

          {/* Case Study 2 */}
          <div className="group bg-dark p-10 rounded-[36px] border-b-4 border-white shadow-2xl hover:shadow-[0_8px_32px_0_rgba(225,66,66,0.18)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl bg-[#e14242]/20 group-hover:bg-[#e14242]/40 z-0 transition-all duration-300"></div>
            <div className="relative z-10">
              <p className="mb-6 text-white text-lg leading-relaxed">
                Developed and deployed a cloud-native enterprise application
                that automated business processes and improved operational
                efficiency by 60%.
              </p>
              <Link
                href="/use-cases"
                className="inline-flex items-center gap-2 text-white hover:text-[#e14242] transition-colors font-semibold group"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-all duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <div
              className="pointer-events-none absolute inset-0 rounded-[36px] opacity-0 group-hover:opacity-100 transition duration-300"
              style={{
                boxShadow: "0 0 0 8px #e1424222, 0 8px 32px 0 #e1424222",
              }}
            />
          </div>

          {/* Case Study 3 */}
          <div className="group bg-dark p-10 rounded-[36px] border-b-4 border-white shadow-2xl hover:shadow-[0_8px_32px_0_rgba(225,66,66,0.18)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl bg-[#e14242]/20 group-hover:bg-[#e14242]/40 z-0 transition-all duration-300"></div>
            <div className="relative z-10">
              <p className="mb-6 text-white text-lg leading-relaxed">
                Migrated a legacy system to modern cloud infrastructure with
                enhanced security, resulting in 40% cost reduction and improved
                scalability.
              </p>
              <Link
                href="/use-cases"
                className="inline-flex items-center gap-2 text-white hover:text-[#e14242] transition-colors font-semibold group"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-all duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <div
              className="pointer-events-none absolute inset-0 rounded-[36px] opacity-0 group-hover:opacity-100 transition duration-300"
              style={{
                boxShadow: "0 0 0 8px #e1424222, 0 8px 32px 0 #e1424222",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
