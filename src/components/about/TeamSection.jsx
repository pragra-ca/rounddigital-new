"use client";
import * as React from "react";

function TeamSection() {
  return (
    <div className="w-full mx-auto 2xl:container">
      <div className="px-40 py-24 max-md:px-5">
        <div className="max-md:max-w-full">
          <div className="max-w-full w-[428px]">
            <div className="w-full">
              <div className="relative text-sm font-bold whitespace-nowrap text-zinc-100 w-[68px]">
                <div className="flex z-0 gap-2.5 w-full bg-red-500 min-h-[21px] rounded-[30px]" />
                <div className="absolute z-0 bottom-[3px] h-[15px] left-[15px] w-[37px]">
                  TEAM
                </div>
              </div>
              <div className="mt-5 text-4xl font-semibold tracking-tighter text-zinc-800 max-md:max-w-full">
                Our Talented People
              </div>
            </div>
            <div className="mt-9 text-xl font-medium tracking-tight text-neutral-400">
              We bring ideas to life by combining years of <br />
              experiences of our talented team.
            </div>
          </div>
          <div className="flex flex-wrap gap-10 items-start mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col min-w-60 w-[336px]">
              <div className="flex gap-2.5 items-start max-w-full w-[336px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/ec96215ed4d59d849e1601798c71a01a91d569dc?placeholderIfAbsent=true"
                  className="object-contain aspect-[0.7] min-w-60 w-[336px]"
                />
              </div>
              <div className="self-start mt-16 max-md:mt-10">
                <div className="text-4xl font-semibold tracking-tighter text-zinc-800">
                  Alfredo Ottis
                </div>
                <div className="mt-4 text-xl font-medium tracking-tight text-neutral-400">
                  CEO
                </div>
              </div>
            </div>
            <div className="flex flex-col min-w-60 w-[336px]">
              <div className="flex gap-2.5 items-start max-w-full w-[336px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/6b9cd41e86322aa3c77bcc6cfa8abedfc44a5b28?placeholderIfAbsent=true"
                  className="object-contain aspect-[0.7] min-w-60 w-[336px]"
                />
              </div>
              <div className="self-start mt-16 max-md:mt-10">
                <div className="text-4xl font-semibold tracking-tighter text-zinc-800">
                  Jordan Sambo
                </div>
                <div className="mt-4 text-xl font-medium tracking-tight text-neutral-400">
                  CFO
                </div>
              </div>
            </div>
            <div className="flex flex-col min-w-60 w-[336px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/c043c3cd33c1cb6f1ed98a3fadb5bdee32609270?placeholderIfAbsent=true"
                className="object-contain max-w-full aspect-[0.7] w-[336px]"
              />
              <div className="flex flex-col justify-center self-start p-2.5 mt-14 max-md:mt-10">
                <div>
                  <div className="text-4xl font-semibold tracking-tighter text-zinc-800">
                    Tom Yhorke
                  </div>
                  <div className="mt-4 text-xl font-medium tracking-tight text-neutral-400">
                    CTO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-28 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col min-w-60 w-[336px]">
            <div className="flex gap-2.5 items-start max-w-full w-[336px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/fded70869e6cda2e4c858eb93692638d8f2c9d4a?placeholderIfAbsent=true"
                className="object-contain aspect-[0.7] min-w-60 w-[336px]"
              />
            </div>
            <div className="self-start mt-16 max-md:mt-10">
              <div className="text-4xl font-semibold tracking-tighter text-zinc-800">
                Catty Hills
              </div>
              <div className="mt-4 text-xl font-medium tracking-tight text-neutral-400">
                DESIGNER
              </div>
            </div>
          </div>
          <div className="flex flex-col min-w-60 w-[336px]">
            <div className="flex relative gap-2.5 items-start max-w-full w-[336px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/e9c1adb1fee9c8d6c7ed8509a80681f3e0b28514?placeholderIfAbsent=true"
                className="object-contain z-0 aspect-[0.7] min-w-60 w-[336px]"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/73b7d61d09de1bc288e3037c66a18a2e486a0fc5?placeholderIfAbsent=true"
                className="object-contain absolute right-0 bottom-0 z-0 aspect-[0.88] h-[383px] min-w-60 w-[336px]"
              />
            </div>
            <div className="self-start mt-16 max-md:mt-10">
              <div className="text-4xl font-semibold tracking-tighter text-zinc-800">
                Brandon Murphy
              </div>
              <div className="mt-4 text-xl font-medium tracking-tight text-neutral-400">
                CODER
              </div>
            </div>
          </div>
          <div className="flex flex-col min-w-60 w-[336px]">
            <div className="flex gap-2.5 items-start max-w-full w-[336px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/e72cc61962955ac6d8a69a99323fcb91ee3ef38f?placeholderIfAbsent=true"
                className="object-contain aspect-[0.7] min-w-60 w-[336px]"
              />
            </div>
            <div className="flex flex-col justify-center self-start p-2.5 mt-14 max-md:mt-10">
              <div>
                <div className="text-4xl font-semibold tracking-tighter text-zinc-800">
                  Maria Zurich
                </div>
                <div className="mt-4 text-xl font-medium tracking-tight text-neutral-400">
                  SUPPORT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
