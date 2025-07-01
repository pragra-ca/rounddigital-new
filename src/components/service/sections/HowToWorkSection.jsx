import React from 'react'
import Button from '../components/Button'
import { pensil, rocket, repeate } from '@/constant/constant'
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
        <section className="relative text-header pt-16 pb-[100px] px-2 sm:px-8 lg:px-24 flex flex-col items-center justify-center w-full overflow-hidden">
            {/* Decorative 3D Blobs */}
            <div className="absolute -top-24 -left-24 w-72 h-72  z-0" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-[#e14242]/10 via-transparent to-transparent rounded-full blur-[80px] z-0 pointer-events-none" />

            {/* Header Section */}
            <div className="flex flex-col items-center text-center relative z-10 mb-16">
                <span className="uppercase text-[#E14242] text-[16px] font-semibold tracking-wider mb-2 block animate-pulse">
                    How We Work
                </span>
                <h2 className="text-3xl sm:text-4xl font-black leading-snug max-w-[606px] text-white drop-shadow-[0_2px_8px_#e1424222]">
                    Get a dedicated design <br />
                    team at fraction of the <br />
                    cost.
                </h2>
                <p className="text-gray-300 mt-6 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                    Grow your brand with high-quality design for a flat monthly fee.<br className="hidden sm:block" />
                    Work with senior designers. Subscribe and make as many requests as you need – no limits.
                </p>
                <Button className="mt-6 w-[149px] h-[56px] text-white bg-gradient-to-r from-[#e14242] to-[#ff6a6a] font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 border-b-4 border-[#e14242]">
                    See Pricing
                </Button>
            </div>

            {/* Steps Timeline */}
            <div className="relative flex flex-col md:flex-row items-center justify-center w-full z-10 mt-6">
                {/* Timeline line */}
                <div className="absolute md:top-1/2 md:left-0 md:right-0 md:h-1 md:w-full top-0 left-1/2 right-1/2 w-1 h-full bg-gradient-to-b md:bg-gradient-to-r from-[#e14242]/30 via-[#e14242]/10 to-transparent md:from-[#e14242]/30 md:via-[#e14242]/10 md:to-transparent z-0" />

                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`
                            relative z-10 flex flex-col items-center text-center bg-gradient-to-br from-[#232323]/90 via-[#181818]/90 to-[#e14242]/10
                            rounded-3xl shadow-lg border border-[#e14242]/10 px-6 py-10 mx-0 md:mx-4 mb-12 md:mb-0 w-full max-w-xs
                            transition-all duration-300 hover:scale-105 hover:shadow-2xl
                        `}
                    >
                        {/* Step Number with connecting line */}
                        <div className="flex flex-col items-center">
                            
                            {/* Connector line (vertical on mobile, horizontal on desktop) */}
                            {index < steps.length - 1 && (
                                <div className="md:hidden w-1 h-8 bg-gradient-to-b from-[#e14242]/40 to-transparent mx-auto" />
                            )}
                        </div>
                        {/* 3D Circle Icon */}
                        <div className="w-[70px] h-[70px] bg-gradient-to-br from-[#e14242] via-[#ff6a6a] to-[#e14242] rounded-full flex items-center justify-center mb-4 mt-4 shadow-md group-hover:shadow-xl transition-all duration-300 border-b-4 border-[#e14242] relative z-10">
                            <div className="absolute -inset-2 rounded-full bg-[#e14242]/20 blur-lg opacity-0 group-hover:opacity-80 transition-all duration-300 pointer-events-none" />
                            <Image
                                src={step.icon}
                                alt={step.title}
                                className="w-8 h-8 object-contain drop-shadow-[0_2px_8px_#e14242]"
                            />
                        </div>
                        {/* Step Title */}
                        <h3 className="text-white text-lg font-bold mb-2 drop-shadow">
                            {step.title}
                        </h3>
                        {/* Step Description */}
                        <p className="text-[#bdbdbd] text-sm leading-relaxed mb-2">
                            {step.description}
                        </p>
                        {/* Connector line for desktop */}
                        {index < steps.length - 1 && (
                            <div className="hidden md:block absolute top-1/2 right-[-2.5rem] w-16 h-1 bg-gradient-to-r from-[#e14242]/40 to-transparent -translate-y-1/2 z-20" />
                        )}
                    </div>
                ))}
            </div>
            <style jsx>{`
                @keyframes bounce {
                  0%, 100% { transform: translateY(0);}
                  50% { transform: translateY(-10px);}
                }
                .animate-bounce {
                  animation: bounce 1.2s infinite;
                }
            `}</style>
        </section>
    )
}

export default HowToWorkSection