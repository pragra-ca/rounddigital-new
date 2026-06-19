import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

export default function ContactDetails() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-between">
      <main className="p-6 md:p-12 flex-grow">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Contact Info */}
            <div className="group space-y-6 bg-white p-8 rounded-3xl border-b-8 border-black shadow-2xl relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] hover:bg-red-600 hover:text-white animate-slideInLeft">
              <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-white rounded-3xl z-0 transition-all duration-500 animate-glow"></div>

              <div className="relative z-10 space-y-4">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-red-600 group-hover:text-white transition">
                  <EnvelopeIcon className="w-5 h-5" />
                  Service
                </h2>
                <a
                  href="mailto:info@rounddigital.co"
                  className="text-black group-hover:text-white transition block"
                >
                  info@rounddigital.co
                </a>

                <h2 className="flex items-center gap-2 text-xl font-semibold text-red-600 group-hover:text-white transition">
                  <EnvelopeIcon className="w-5 h-5" />
                  Careers
                </h2>
                <a
                  href="mailto:careers@rounddigital.co"
                  className="text-black group-hover:text-white transition block"
                >
                  careers@rounddigital.co
                </a>

                <h2 className="flex items-center gap-2 text-xl font-semibold text-red-600 group-hover:text-white transition">
                  <PhoneIcon className="w-5 h-5" />
                  Phone
                </h2>
                <p className="text-black group-hover:text-white transition">
                  905-407-5009
                </p>
              </div>
            </div>

            {/* Right Office Info */}
            <div className="group space-y-6 bg-white p-8 rounded-3xl border-b-8 border-black shadow-2xl relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] hover:bg-red-600 hover:text-white animate-slideInRight">
              <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-white rounded-3xl z-0 transition-all duration-500 animate-glow"></div>

              <div className="relative z-10 space-y-6">
                <div>
                  <h2 className="flex items-center gap-2 text-xl font-semibold text-red-600 group-hover:text-white transition">
                    <BuildingOffice2Icon className="w-5 h-5" />
                    Mississauga Office
                  </h2>
                  <p className="text-black group-hover:text-white transition">
                    160B - 110 Matheson Blvd W,<br />
                    Mississauga, ON L5M 6B8, Canada
                  </p>
                </div>
                <div>
                  <h2 className="flex items-center gap-2 text-xl font-semibold text-red-600 group-hover:text-white transition">
                    <BuildingOffice2Icon className="w-5 h-5" />
                    Texas Office
                  </h2>
                  <p className="text-black group-hover:text-white transition">
                    450 Century Pkwy<br />
                    Ste 250, Allen, Texas 75013
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] border-b-8 border-black animate-fadeIn">
            <iframe
              title="Google Maps - Mississauga Office"
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.7550013117786!2d-79.67468458450093!3d43.626956662832624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3ea1983f4cc3%3A0x746be57911f7a5f9!2s110%20Matheson%20Blvd%20W%2C%20Mississauga%2C%20ON%20L5R%204G7%2C%20Canada!5e0!3m2!1sen!2sin!4v1623071326949!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
