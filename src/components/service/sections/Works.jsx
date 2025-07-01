import { Loader } from "lucide-react"
import { work1, work2, work3, work4, work5, work6, work7, work8, work9, work10, work11, work12 } from "@/constant/constant"
import Image from "next/image"

const works = [
  work1, work2, work3, work4, work5, work6, work7, work8, work9, work10, work11, work12,
]

const Works = () => {
  return (
    <div className="flex flex-col pt-[70px] max-w-7xl mx-auto container pb-16">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-[40px] sm:text-[48px] font-extrabold bg-gradient-to-r from-[#e14242] via-[#ff6a6a] to-[#e14242] bg-clip-text text-transparent drop-shadow-[0_4px_24px_#e1424222]">
          Our Beautiful Works
        </h1>
        <p className="text-[18px] text-[#111204CC] max-w-2xl">
          We help our clients grow their bottom-line with clear and <br /> professional websites.
        </p>
        <button className="flex items-center justify-center gap-2 w-[184px] mt-5 h-[64px] border-[1.5px] text-[18px] border-[#e14242] rounded-[12px] bg-gradient-to-r from-[#e14242]/10 to-[#ff6a6a]/10 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-[#e14242] font-semibold">
          <Loader className="w-[24px] h-[24px] animate-spin" />
          Load More
        </button>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
        {works.map((img, i) => (
          <div
            key={i}
            className="relative group w-[270px] h-[270px] rounded-3xl bg-gradient-to-br from-[#232323] via-[#181818] to-[#e14242]/10 shadow-xl border border-[#e14242]/20 flex items-center justify-center overflow-visible transition-all duration-300 hover:scale-[1.07] hover:shadow-2xl"
            style={{ perspective: 1200 }}
          >
            {/* Animated floating glow */}
            <div className="absolute -inset-4 rounded-3xl bg-[#e14242]/20 blur-2xl opacity-0 group-hover:opacity-90 transition-all duration-500 pointer-events-none z-0 animate-glow" />
            {/* 3D tilt effect */}
            <div className="relative w-[230px] h-[230px] rounded-2xl bg-gradient-to-br from-white/10 via-[#232323]/10 to-[#e14242]/10 shadow-lg border border-[#e14242]/10 flex items-center justify-center transition-all duration-300 group-hover:rotate-[4deg] group-hover:scale-105">
              <Image
                src={img}
                alt={`work${i + 1}`}
                className="object-cover rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 bg-white/10 p-1 z-10"
                width={210}
                height={210}
                style={{ minWidth: 180, minHeight: 180 }}
              />
            </div>
            {/* Floating label for 3D effect */}
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-[#181818]/90 text-white text-sm rounded-full shadow-lg group-hover:bg-[#e14242]/90 group-hover:text-white transition-all duration-300 backdrop-blur-md z-20 font-semibold tracking-wide">
              Project #{i + 1}
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes glow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Works