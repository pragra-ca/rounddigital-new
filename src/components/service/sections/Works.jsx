import { Loader } from "lucide-react"
import { work1, work2, work3, work4, work5, work6, work7, work8, work9, work10, work11, work12 } from "@/constant/constant"
import Image from "next/image"


const Works = () => {
  return (
    <div className="flex flex-col pt-[70px] max-w-7xl mx-auto container">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-[48px] font-bold">Our Beautiful Works</h1>
        <p className="text-[18px] text-[#111204CC]">We help our clients grow their bottom-line with clear and <br /> professional websites.</p>
        <button className="flex items-center justify-center gap-2 w-[184px] mt-5 h-[64px] border-[1px] text-[18px] border-[#111204] rounded-[5px]">
          <Loader className="w-[24px] h-[24px]" />
          Load More
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2 pt-[100px]">
          <Image className="w-[300px] h-[300px] rounded-[5px]" src={work1} alt="work1" />
          <Image className="w-[300px] h-[300px] rounded-[5px]" src={work2} alt="work2" />
          <Image className="w-[300px] h-[300px] rounded-[5px]" src={work3} alt="work3" />
        </div>
        <div className="flex flex-col gap-2">
          <Image className="w-[300px] h-[300px] rounded-[5px]" src={work4} alt="work4" />
          <Image className="w-[300px] h-[300px] rounded-[5px]" src={work5} alt="work5" />
          <Image className="w-[300px] h-[300px] rounded-[5px]" src={work6} alt="work6" />
        </div>
        <div className="flex flex-col gap-2 pt-[100px]">
          <Image className="w-[300px] h-[300px] rounded-[5px]" src={work7} alt="work7" />
          <Image className="w-[300px] h-[300px] rounded-[5px]" src={work8} alt="work8" />
          <Image className="w-[300px] h-[300px] rounded-[5px]" src={work9} alt="work9" />
        </div>
        <div className="flex flex-col gap-2">
          <Image className="w-[300px] h-[300px] rounded-[5px]" src={work10} alt="work10" />
          <Image className="w-[300px] h-[300px] rounded-[5px]" src={work11} alt="work11" />
          <Image className="w-[300px] h-[300px] rounded-[5px]" src={work12} alt="work12" />
        </div>

      </div>
    </div>
  )
}

export default Works