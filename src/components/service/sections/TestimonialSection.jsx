import React from 'react'
import TestimonialCard from '../components/TestimonialCard'
const TestimonialSection = () => {
  return (
    <div className='py-[100px]'>
      <div className='text-center'>
        <p className="text-[16px] tracking-widest text-gray-500">TESTIMONIAL</p>
        <h2 className="text-[48px] font-extrabold text-black leading-tight mt-2">
          Customer is Our Top <br /> Priority
        </h2>
        <p className="text-[18px] text-gray-600 mt-4">
          We survey all of our clients, the results of which go directly <br /> to our CEO.
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <TestimonialCard />
      </div>
    </div>
  )
}

export default TestimonialSection