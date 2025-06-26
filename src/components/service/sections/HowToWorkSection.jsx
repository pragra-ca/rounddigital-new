import React from 'react'
import Button from '../components/Button'
import { pensil, rocket, repeate, arrow } from '@/constant/constant'
import Image from 'next/image'

const HowToWorkSection = () => {
    const steps = [
        {
            icon: rocket,
            title: 'Subscribe & get started',
            description:
                'Submit as many design requests as you need without worrying about individual project fees.',
        },
        {
            icon: pensil,
            title: 'Polished designs – on time',
            description:
                'Our design team works quickly to deliver your request. Receive your design within a few days.',
        },
        {
            icon: repeate,
            title: 'Revisions made simple',
            description:
                'Custom designs with no limits. Request changes and as many revisions as you need.',
        },
    ]

    return (
        <section className="bg-fistBg text-header pt-10 pb-[100px] px-6 sm:px-10 lg:px-16 flex flex-col items-center justify-center text-center w-full">
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
                {/* Left Text: Centered on mobile, left-aligned on desktop */}
                <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
                    <span className="uppercase text-[#E14242] text-[16px] font-semibold tracking-wider mb-2 block">
                        How We Work
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold leading-snug max-w-[606px] text-white">
                        Get a dedicated design <br />
                        team at fraction of the <br />
                        cost.
                    </h2>
                </div>

                {/* Right Text: Centered on mobile, left-aligned on desktop */}
                <div className="flex flex-col w-full text-white md:w-1/2 justify-center items-center md:items-start text-center md:text-left">
                    <p className="text-text mt-6 md:mt-0 text-sm sm:text-base leading-relaxed">
                        Grow your brand with high-quality design for a <br className="hidden sm:block" />
                        flat monthly fee. Work with senior designers. <br className="hidden sm:block" />
                        Subscribe and make as many requests as you <br className="hidden sm:block" />
                        need – no limits.
                    </p>
                    <Button className="mt-6 w-[149px] h-[56px] text-black bg-[#e14242]">
                        See Pricing
                    </Button>
                </div>
            </div>


            {/* Steps: Increased vertical gap on mobile for better separation */}
            <div className="mt-16 flex flex-col md:flex-row gap-16 md:gap-12 justify-center items-start relative w-full flex-wrap px-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center max-w-[283px] text-center relative mx-auto"
                    >
                        {/* Circle Icon */}
                        <div className="w-[93px] h-[93px] bg-primary rounded-full bg-[#e14242] flex items-center justify-center mb-4">
                            <Image
                                src={step.icon}
                                alt={step.title}
                                className="w-7 h-7 object-contain"
                            />
                        </div>

                        {/* Step Title */}
                        <h3 className="text-white text-lg font-semibold mb-2">
                            {step.title}
                        </h3>

                        {/* Step Description */}
                        <p className="text-[#989696]  text-sm leading-relaxed">
                            {step.description}
                        </p>

                        {/* Arrow (between steps, visible only on md and up with responsive positioning) */}
                        {index < steps.length - 1 && (
                            <Image
                                src={arrow}
                                alt="arrow"
                                className="hidden md:block absolute top-[45px] w-[50px] h-auto right-[-3rem] lg:right-[-4.5rem] xl:right-[-6rem]"
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HowToWorkSection