"use client";
import * as React from "react";

function BenefitsSection() {
  return (
    <div className="w-full mx-auto 2xl:container">
      <div className="flex flex-col py-24 pr-40 pl-36 max-md:px-5">
        <div className="flex flex-col w-full max-w-7xl max-md:max-w-full">
          <div className="flex flex-col justify-center self-start">
            <div className="flex flex-col justify-center items-start self-start">
              <div className="relative text-sm font-bold text-white whitespace-nowrap w-[83px]">
                <div className="flex z-0 gap-2.5 w-full bg-red-500 min-h-[21px] rounded-[30px]" />
                <div className="absolute z-0 bottom-[3px] h-[15px] right-[11px] w-[61px]">
                  BENEFITS
                </div>
              </div>
              <div className="mt-5 text-4xl font-semibold tracking-tighter text-center text-zinc-800">
                Our Rock and Roll
              </div>
            </div>
            <div className="mt-6 text-xl font-medium tracking-tight text-neutral-400">
              We bring ideas to life by combining years of
            </div>
          </div>
          <div className="flex flex-wrap gap-10 items-center mt-11 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex grow shrink gap-2.5 items-start self-stretch my-auto text-white min-w-60 w-[376px] max-md:max-w-full">
              <div className="pt-7 rounded-none min-w-60 w-[470px]">
                <div className="px-9 pb-14 bg-amber-100 rounded-3xl shadow-sm max-md:px-5 max-md:max-w-full">
                  <div className="flex z-10 flex-col items-center mt-0">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/3e34db4d81c4fb4209440e4d4a07748c37b734ba?placeholderIfAbsent=true"
                      className="object-contain max-w-full aspect-[0.85] w-[315px]"
                    />
                    <div className="w-full max-w-[393px]">
                      <div className="flex relative flex-col w-full">
                        <div className="flex z-0 w-full rounded-3xl bg-zinc-800 min-h-32" />
                        <div className="flex absolute z-0 gap-8 items-center self-start bottom-[27px] right-[25px]">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/b00d39b9eb03f3bfe06739030f30d4e230129f36?placeholderIfAbsent=true"
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[71px]"
                          />
                          <div className="self-stretch my-auto w-[238px]">
                            <div className="text-2xl font-semibold tracking-tight">
                              Expert Team
                            </div>
                            <div className="mt-2 text-xl font-medium tracking-tight">
                              Start free while you learn
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden gap-2.5 self-stretch px-40 py-6 mt-2 text-xl font-semibold tracking-tight bg-zinc-800 rounded-[30px] max-md:px-5">
                        Try Us
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col grow shrink self-stretch my-auto min-w-60 w-[469px] max-md:max-w-full">
              <div className="flex flex-col self-start max-md:max-w-full">
                <div className="self-start max-md:max-w-full">
                  <div className="relative text-sm font-bold whitespace-nowrap text-zinc-800 w-[75px]">
                    <div className="flex z-0 gap-2.5 w-full border border-red-500 border-solid min-h-[21px] rounded-[30px]" />
                    <div className="absolute z-0 w-12 bottom-[3px] h-[15px] left-[13px]">
                      DESIGN
                    </div>
                  </div>
                  <div className="mt-8 text-4xl font-semibold tracking-tighter text-zinc-800 max-md:max-w-full">
                    Pulsar was designed with the <br />
                    idea of being easy to use
                  </div>
                </div>
                <div className="mt-9 text-xl font-medium tracking-tight text-neutral-400 max-md:max-w-full">
                  Easy as just on click to edit and be online in on time
                </div>
              </div>
              <div className="mt-8 max-w-full w-[555px]">
                <div className="text-xl font-semibold tracking-tight text-zinc-800">
                  Overview
                </div>
                <div className="mt-4 text-xl font-medium tracking-tight text-neutral-400 max-md:max-w-full">
                  Pulsar boasts a visually striking and modern design that{" "}
                  <br />
                  is sure to leave a lasting impact on your visitors start{" "}
                  <br />
                  today with Pulsar Template
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 items-center self-start max-md:max-w-full">
          <div className="self-stretch my-auto min-w-60 w-[470px] max-md:max-w-full">
            <div className="max-w-full w-[470px]">
              <div className="max-md:max-w-full">
                <div className="text-4xl font-semibold tracking-tighter text-zinc-800">
                  Seamless Responsiveness <br />
                  We are fully responsive
                </div>
                <div className="mt-9 text-xl font-medium tracking-tight text-neutral-400 max-md:max-w-full">
                  Lorem Ipsum is simply dummy text of the printing.
                </div>
              </div>
              <div className="mt-8 text-xl font-medium tracking-tight text-neutral-400 max-md:max-w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </div>
            </div>
            <div className="overflow-hidden gap-2.5 self-stretch py-6 pr-10 pl-10 mt-8 max-w-full text-xl font-semibold tracking-tight text-center text-white bg-red-500 min-h-16 rounded-[30px] w-[195px] max-md:px-5">
              Try This Plan
            </div>
          </div>
          <div className="flex relative gap-2.5 items-start self-stretch my-auto min-w-60 w-[547px] max-md:max-w-full">
            <div className="flex z-0 shrink-0 bg-red-500 rounded-3xl border border-red-500 border-solid shadow-sm h-[547px] min-w-60 w-[547px] max-md:max-w-full" />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/f5c95a5175ebf90c6f13edef664500cadccaeb2a?placeholderIfAbsent=true"
              className="object-contain absolute right-0 bottom-0 z-0 rounded-none aspect-[0.88] h-[452px] min-w-60 w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
