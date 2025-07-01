"use client";
import * as React from "react";

function TeamSection() {
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
            We bring ideas to life by combining years of experience, creativity, and the passion of our talented team.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full justify-items-center">
          {/* Member 1 */}
          <div className="relative bg-white/80 border border-zinc-200 rounded-3xl shadow-2xl flex flex-col items-center p-8 w-full max-w-xs hover:scale-[1.04] hover:shadow-red-200 transition-all duration-300 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-5 py-1 rounded-full shadow border border-white/80 z-20 tracking-wider">
              CEO
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/ec96215ed4d59d849e1601798c71a01a91d569dc?placeholderIfAbsent=true"
              alt="Alfredo Ottis"
              className="w-36 h-48 object-cover rounded-2xl mb-6 shadow-lg border-4 border-white"
            />
            <h3 className="text-2xl font-bold text-zinc-900 mb-1 text-center">Alfredo Ottis</h3>
            <p className="text-red-600 font-semibold text-base mb-2 text-center">Chief Executive Officer</p>
            <p className="text-zinc-600 text-center text-sm">
              Visionary leader with a passion for innovation and results.
            </p>
          </div>
          {/* Member 2 */}
          <div className="relative bg-white/80 border border-zinc-200 rounded-3xl shadow-2xl flex flex-col items-center p-8 w-full max-w-xs hover:scale-[1.04] hover:shadow-red-200 transition-all duration-300 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-5 py-1 rounded-full shadow border border-red-600 z-20 tracking-wider">
              CFO
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/6b9cd41e86322aa3c77bcc6cfa8abedfc44a5b28?placeholderIfAbsent=true"
              alt="Jordan Sambo"
              className="w-36 h-48 object-cover rounded-2xl mb-6 shadow-lg border-4 border-white"
            />
            <h3 className="text-2xl font-bold text-zinc-900 mb-1 text-center">Jordan Sambo</h3>
            <p className="text-red-600 font-semibold text-base mb-2 text-center">Chief Financial Officer</p>
            <p className="text-zinc-600 text-center text-sm">
              Financial strategist ensuring sustainable growth.
            </p>
          </div>
          {/* Member 3 */}
          <div className="relative bg-white/80 border border-zinc-200 rounded-3xl shadow-2xl flex flex-col items-center p-8 w-full max-w-xs hover:scale-[1.04] hover:shadow-red-200 transition-all duration-300 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-5 py-1 rounded-full shadow border border-white/80 z-20 tracking-wider">
              CTO
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/c043c3cd33c1cb6f1ed98a3fadb5bdee32609270?placeholderIfAbsent=true"
              alt="Tom Yhorke"
              className="w-36 h-48 object-cover rounded-2xl mb-6 shadow-lg border-4 border-white"
            />
            <h3 className="text-2xl font-bold text-zinc-900 mb-1 text-center">Tom Yhorke</h3>
            <p className="text-red-600 font-semibold text-base mb-2 text-center">Chief Technology Officer</p>
            <p className="text-zinc-600 text-center text-sm">
              Tech innovator driving digital transformation.
            </p>
          </div>
          {/* Member 4 */}
          <div className="relative bg-white/80 border border-zinc-200 rounded-3xl shadow-2xl flex flex-col items-center p-8 w-full max-w-xs hover:scale-[1.04] hover:shadow-red-200 transition-all duration-300 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-5 py-1 rounded-full shadow border border-red-600 z-20 tracking-wider">
              DESIGNER
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/fded70869e6cda2e4c858eb93692638d8f2c9d4a?placeholderIfAbsent=true"
              alt="Catty Hills"
              className="w-36 h-48 object-cover rounded-2xl mb-6 shadow-lg border-4 border-white"
            />
            <h3 className="text-2xl font-bold text-zinc-900 mb-1 text-center">Catty Hills</h3>
            <p className="text-red-600 font-semibold text-base mb-2 text-center">Lead Designer</p>
            <p className="text-zinc-600 text-center text-sm">
              Creative mind behind our stunning visuals.
            </p>
          </div>
          {/* Member 5 */}
          <div className="relative bg-white/80 border border-zinc-200 rounded-3xl shadow-2xl flex flex-col items-center p-8 w-full max-w-xs hover:scale-[1.04] hover:shadow-red-200 transition-all duration-300 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-5 py-1 rounded-full shadow border border-white/80 z-20 tracking-wider">
              CODER
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/e9c1adb1fee9c8d6c7ed8509a80681f3e0b28514?placeholderIfAbsent=true"
              alt="Brandon Murphy"
              className="w-36 h-48 object-cover rounded-2xl mb-6 shadow-lg border-4 border-white"
            />
            <h3 className="text-2xl font-bold text-zinc-900 mb-1 text-center">Brandon Murphy</h3>
            <p className="text-red-600 font-semibold text-base mb-2 text-center">Full Stack Developer</p>
            <p className="text-zinc-600 text-center text-sm">
              Building robust and scalable solutions.
            </p>
          </div>
          {/* Member 6 */}
          <div className="relative bg-white/80 border border-zinc-200 rounded-3xl shadow-2xl flex flex-col items-center p-8 w-full max-w-xs hover:scale-[1.04] hover:shadow-red-200 transition-all duration-300 group">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-5 py-1 rounded-full shadow border border-red-600 z-20 tracking-wider">
              SUPPORT
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/e72cc61962955ac6d8a69a99323fcb91ee3ef38f?placeholderIfAbsent=true"
              alt="Maria Zurich"
              className="w-36 h-48 object-cover rounded-2xl mb-6 shadow-lg border-4 border-white"
            />
            <h3 className="text-2xl font-bold text-zinc-900 mb-1 text-center">Maria Zurich</h3>
            <p className="text-red-600 font-semibold text-base mb-2 text-center">Support Lead</p>
            <p className="text-zinc-600 text-center text-sm">
              Always here to help our clients succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;