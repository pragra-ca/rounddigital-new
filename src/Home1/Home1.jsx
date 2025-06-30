import Link from "next/link";
import React from "react";
import Image from "next/image";

// Image paths - now pointing to public directory
const arrow1 = "/images/home/arrow-1.svg";
const arrow32 = "/images/home/arrow-3-2.svg";
const arrow3 = "/images/home/arrow-3.svg";
const bubble3 = "/images/home/bubble-3.svg";
const bubble = "/images/home/bubble.svg";
const companyLogo = "/images/home/company-logo.svg";
const companyLogo2 = "/images/home/company-logo-2.svg";
const companyLogo3 = "/images/home/company-logo-3.svg";
const companyLogo4 = "/images/home/company-logo-4.svg";
const companyLogo5 = "/images/home/company-logo-5.svg";
const companyLogo6 = "/images/home/company-logo-6.svg";
const frame2 = "/images/home/frame-2.svg";
const frame = "/images/home/frame.svg";

// Other assets
const group2 = "/images/home/group-2.png";
const group = "/images/home/group.png";
const icon2 = "/images/home/icon-2.png";
const icon3 = "/images/home/icon-3.png";
const icon = "/images/home/icon.png";
const image2 = "/images/home/image-2.svg";
const image = "/images/home/image.png";
const image1 = "/images/home/image-1.svg";
const line3 = "/images/home/line-3.svg";
const line4 = "/images/home/line-4.svg";
const line17 = "/images/home/line-17.svg";
const line25 = "/images/home/line-25.svg";
const linkedin = "/images/home/linkedin.svg";
const maskGroup2 = "/images/home/mask-group-2.png";
const maskGroup3 = "/images/home/mask-group-3.png";
const maskGroup4 = "/images/home/mask-group-4.png";
const maskGroup5 = "/images/home/mask-group-5.png";
const maskGroup6 = "/images/home/mask-group-6.png";
const maskGroup = "/images/home/mask-group.png";
const page1 = "/images/home/page-1.svg";
const socialIcon = "/images/home/social-icon.svg";
const star2 = "/images/home/star-2.svg";
const star4 = "/images/home/star-4.svg";
const tokyoBrowserWindowWithEmoticonLikesAndStarsAround2 =
  "/images/home/tokyo-browser-window-with-emoticon-likes-and-stars-around-2.png";
const tokyoMagnifierWebSearchWithElements2 =
  "/images/home/tokyo-magnifier-web-search-with-elements-2.png";
const tokyoSendingMessagesFromOnePlaceToAnother1 =
  "/images/home/tokyo-sending-messages-from-one-place-to-another-1.png";
const twitter = "/images/home/twitter.svg";
const vector2 = "/images/home/vector-2.svg";
const vector3 = "/images/home/vector-3.svg";
const vector = "/images/home/vector.svg";

export const HomeComponent = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] relative">
        <div className="flex w-[1440px] items-start gap-10 px-[100px] py-0 absolute top-[971px] left-0">
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-[#e14242] rounded-[7px]">
              <div className="relative w-fit mt-[-1.00px] font-h-2 font-[number:var(--h-2-font-weight)] text-white text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
                Services
              </div>
            </div>
          </div>

          <p className="relative w-[580px] mt-[-1.00px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        <div className="flex w-[1440px] items-start gap-10 px-[100px] py-0 absolute top-[2746px] left-0">
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-[#e14242] rounded-[7px]">
              <div className="relative w-fit mt-[-1.00px] font-h-2 font-[number:var(--h-2-font-weight)] text-white text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
                Case Studies
              </div>
            </div>
          </div>

          <p className="relative w-[580px] mt-[-1.00px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>

        <div className="flex w-[1440px] items-start gap-10 px-[100px] py-0 absolute top-[3343px] left-0">
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-[#e14242] rounded-[7px]">
              <div className="relative w-fit mt-[-1.00px] font-h-2 font-[number:var(--h-2-font-weight)] text-white text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
                Our Working Process
              </div>
            </div>
          </div>

          <p className="relative w-[292px] max-w-full mt-[-1.00px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full items-start gap-4 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] py-0 mt-20 md:mt-0 md:absolute md:top-[4838px] left-0">
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-[#e14242] rounded-[7px]">
              <div className="relative w-fit mt-[-1.00px] font-h-2 font-[number:var(--h-2-font-weight)] text-white text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
                Team
              </div>
            </div>
          </div>

          <p className="relative w-[473px] mt-[-1.00px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full items-start gap-4 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] py-0 mt-20 md:mt-0 md:absolute md:top-[5902px] left-0">
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-[#e14242] rounded-[7px]">
              <div className="relative w-fit mt-[-1.00px] font-h-2 font-[number:var(--h-2-font-weight)] text-white text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
                Testimonials
              </div>
            </div>
          </div>

          <p className="relative w-[473px] mt-[-1.00px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full items-start gap-4 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] py-0 mt-20 md:mt-0 md:absolute md:top-[6798px] left-0">
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-[#e14242] rounded-[7px]">
              <div className="relative w-fit mt-[-1.00px] font-h-2 font-[number:var(--h-2-font-weight)] text-white text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
                Contact Us
              </div>
            </div>
          </div>

          <p className="relative w-full lg:max-w-[323px] mt-[-1.00px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
            Connect with Us: Let&#39;s Discuss Your Digital Marketing Needs
          </p>
        </div>

        <div className="flex flex-col w-full items-start gap-8 mt-12 md:gap-16 lg:gap-[70px] absolute top-[30px] md:top-[45px] lg:top-[60px] left-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
          <header className="flex flex-col lg:flex-row w-full items-start lg:items-center justify-between gap-8 lg:gap-0 py-0 relative bg-transparent px-4 sm:px-6 md:px-12">
            {/* Left Content */}
            <div className="inline-flex flex-col items-start gap-[35px] relative flex-[0_0_auto] max-w-full">
              <p className="relative w-full lg:max-w-[531px] mt-[-1.00px] font-h-1 font-[number:var(--h-1-font-weight)] text-[#000000] text-3xl sm:text-4xl md:text-5xl lg:text-[length:var(--h-1-font-size)] tracking-[var(--h-1-letter-spacing)] leading-tight md:leading-[var(--h-1-line-height)] [font-style:var(--h-1-font-style)]">
                Navigating the digital landscape for success
              </p>

              <p className="relative w-full lg:max-w-[502px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#000000] text-base sm:text-lg lg:text-xl tracking-[0] leading-relaxed">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>

              <button className="all-[unset] box-border inline-flex items-start relative flex-[0_0_auto] bg-dark gap-2.5 px-[35px] py-5 rounded-[14px]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
                  Book a consultation
                </div>
              </button>
            </div>

            {/* Right Content */}
            <div className="relative w-full max-w-[600px] h-[400px] sm:h-[450px] md:h-[480px] lg:h-[515px] mt-8 lg:mt-0 mx-auto lg:mx-0">
              <div className="relative w-full h-full">
                <img
                  className="absolute w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 top-[82%] sm:top-[84%] lg:top-[83%] left-1/2 lg:left-[293px] transform -translate-x-1/2 lg:translate-x-0"
                  alt="Frame"
                  src={frame}
                />

                <div className="absolute inset-0">
                  <img
                    className="absolute w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[99px] lg:h-[99px] top-[60%] sm:top-[62%] lg:top-[61%] left-4 sm:left-8 lg:left-[58px]"
                    alt="Frame2"
                    src={frame2}
                  />

                  <div className="absolute w-[566px] h-[119px] top-[193px] left-[34px] rounded-[283.13px/59.47px] border border-solid border-[#000000] rotate-[28.88deg]" />
                  <div className="absolute w-[566px] h-[119px] top-[230px] left-3.5 rounded-[283.13px/59.47px] border border-solid border-[#000000] rotate-[28.88deg]" />
                  <div className="absolute w-[566px] h-[119px] top-[267px] -left-1.5 rounded-[283.13px/59.47px] border border-solid border-[#000000] rotate-[28.88deg]" />

                  <img
                    className="absolute w-[74%] max-w-[446px] h-auto top-0 left-[26%] object-contain"
                    alt="Group"
                    src={group}
                  />
                </div>

                <div className="absolute w-[25px] h-[25px] sm:w-[28px] sm:h-[28px] lg:w-[31px] lg:h-[31px] top-[70px] sm:top-[80px] lg:top-[89px] left-[90px] sm:left-[100px] lg:left-[116px] bg-[#ff8181] rounded-full" />

                <div className="absolute w-4 h-4 sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5 top-[82%] sm:top-[84%] lg:top-[83%] left-[85%] sm:left-[400px] lg:left-[411px] bg-[#ff8181] rounded-full" />

                <div className="absolute w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] lg:w-[47px] lg:h-[47px] top-[30px] sm:top-[36px] lg:top-[41px] left-4 sm:left-8 lg:left-[58px] bg-[#000000] rounded-full" />
              </div>
            </div>
          </header>

          <div className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-8 lg:px-[100px] py-4 w-full max-w-screen-xl mx-auto">
            <img
              className="h-12 w-auto"
              alt="Company logo"
              src={companyLogo6}
            />

            <img className="h-12 w-auto" alt="Company logo" src={companyLogo} />

            <img
              className="h-12 w-auto"
              alt="Company logo"
              src={companyLogo5}
            />

            <img
              className="h-12 w-auto"
              alt="Company logo"
              src={companyLogo2}
            />

            <img
              className="h-12 w-auto"
              alt="Company logo"
              src={companyLogo4}
            />

            <img
              className="h-12 w-auto"
              alt="Company logo"
              src={companyLogo3}
            />
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-10 absolute top-[1102px] left-0">
          <div className="inline-flex gap-10 px-[100px] py-0 items-start relative flex-[0_0_auto]">
            <div className="flex w-[600px] items-center justify-between p-[50px] relative bg-grey rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
              <div className="inline-flex flex-col items-start justify-center gap-[93px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-[#e14242] rounded-[7px]">
                    <div className="relative w-fit mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#f3f3f3] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      Search engine
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-[#e14242] rounded-[7px]">
                    <div className="relative w-fit mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#f3f3f3] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      optimization
                    </div>
                  </div>
                </div>

                <Link href="#" key="Learn more">
                  <div className="relative w-[41px] h-[41px] bg-dark rounded-[20.5px]">
                    <img
                      className="absolute w-5 h-5 top-[11px] left-2.5"
                      alt="Arrow"
                      src={arrow1}
                    />
                  </div>
                  Learn more
                </Link>
              </div>

              <div className="relative w-[210px] h-[170px]">
                <img
                  className="absolute w-[210px] h-[166px] top-0.5 left-0"
                  alt="Tokyo magnifier web"
                  src={tokyoMagnifierWebSearchWithElements2}
                />
              </div>
            </div>

            <div className="flex w-[600px] items-center justify-between p-[50px] relative bg-[#e14242] rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
              <div className="inline-flex flex-col items-start gap-[93px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-white rounded-[7px]">
                    <div className="relative w-fit mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#000000] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      Pay-per-click
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-white rounded-[7px]">
                    <div className="relative w-fit mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#000000] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      advertising
                    </div>
                  </div>
                </div>

                <Link href="#" key="Learn more">
                  <div className="relative w-[41px] h-[41px] bg-dark rounded-[20.5px]">
                    <img
                      className="absolute w-5 h-5 top-[11px] left-2.5"
                      alt="Arrow"
                      src={arrow1}
                    />
                  </div>
                  Learn more
                </Link>
              </div>

              <div className="relative w-[210px] h-[147.62px] bg-[url(/tokyo-selecting-a-value-in-the-browser-window-1.png)] bg-[100%_100%]" />
            </div>
          </div>

          <div className="inline-flex items-start gap-10 px-[100px] py-0 relative flex-[0_0_auto]">
            <div className="flex w-[600px] items-center justify-between p-[50px] relative bg-dark rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
              <div className="inline-flex flex-col items-start gap-[93px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-white rounded-[7px]">
                    <div className="relative w-fit mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#000000] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      Social Media
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-white rounded-[7px]">
                    <div className="relative w-fit mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#000000] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      Marketing
                    </div>
                  </div>
                </div>

                <Link href="/" key="Learn more">
                  <div className="relative w-[41px] h-[41px] bg-white rounded-[20.5px]">
                    <img
                      className="absolute w-5 h-5 top-[11px] left-2.5"
                      alt="Arrow"
                      src={arrow1}
                    />
                  </div>
                  Learn more
                </Link>
              </div>

              <div className="relative w-[210px] h-[210px]">
                <img
                  className="absolute w-[209px] h-[210px] top-0 left-px"
                  alt="Tokyo browser window"
                  src={tokyoBrowserWindowWithEmoticonLikesAndStarsAround2}
                />
              </div>
            </div>

            <div className="flex w-[600px] items-center justify-between p-[50px] relative bg-grey rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
              <div className="inline-flex flex-col items-start justify-center gap-[93px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-[#e14242] rounded-[7px]">
                    <div className="relative w-fit mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#f3f3f3] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      Workforce
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-[#e14242] rounded-[7px]">
                    <div className="relative w-fit mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#f3f3f3] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      Solution
                    </div>
                  </div>
                </div>

                <Link href="#" key="Learn more">
                  <div className="relative w-[41px] h-[41px] bg-dark rounded-[20.5px]">
                    <img
                      className="absolute w-5 h-5 top-[11px] left-2.5"
                      alt="Arrow"
                      src={arrow1}
                    />
                  </div>
                  Learn more
                </Link>
              </div>

              <img
                className="relative w-[210px] h-[192.68px]"
                alt="Tokyo sending"
                src={tokyoSendingMessagesFromOnePlaceToAnother1}
              />
            </div>
          </div>

          <div className="inline-flex items-start gap-10 px-[100px] py-0 relative flex-[0_0_auto]">
            <div className="flex w-[600px] items-center justify-between p-[50px] relative bg-[#e14242] rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-shadow">
              <div className="inline-flex flex-col items-start gap-[93px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-white rounded-[7px]">
                    <div className="relative w-fit mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#000000] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      Train
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-white rounded-[7px]">
                    <div className="relative w-fit mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#000000] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      Deploy
                    </div>
                  </div>
                </div>

                <Link href="#" key="Learn more">
                  <div className="relative w-[41px] h-[41px] bg-dark rounded-[20.5px]">
                    <img
                      className="absolute w-5 h-5 top-[11px] left-2.5"
                      alt="Arrow"
                      src={arrow1}
                    />
                  </div>
                  Learn more
                </Link>
              </div>

              <div className="relative w-[210px] h-[195.91px] bg-[url(/tokyo-many-browser-windows-with-different-information-1.png)] bg-[100%_100%]" />
            </div>

            <div className="flex w-[600px] items-center justify-between p-[50px] relative bg-dark rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
              <div className="inline-flex flex-col items-start gap-[93px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-[#e14242] rounded-[7px]">
                    <div className="relative w-fit mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#f3f3f3] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      Talent
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-[#e14242] rounded-[7px]">
                    <div className="relative w-fit mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#f3f3f3] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      Factory
                    </div>
                  </div>
                </div>

                <Link href="/" key="Learn more">
                  <div className="relative w-[41px] h-[41px] bg-white rounded-[20.5px]">
                    <img
                      className="absolute w-5 h-5 top-[11px] left-2.5"
                      alt="Arrow"
                      src={arrow1}
                    />
                  </div>
                  Learn more
                </Link>
              </div>

              <div className="relative w-[210px] h-[170px] bg-[url(/tokyo-volumetric-analytics-of-different-types-in-web-browsers-2.png)] bg-[100%_100%]" />
            </div>
          </div>
        </div>

        <div className="absolute w-[1440px] h-[394px] top-[2212px] left-0">
          <div className="flex w-[1440px] items-center px-[100px] py-0 relative">
            <div className="flex w-[1240px] h-[347px] items-center gap-[275px] px-[60px] py-0 relative bg-grey rounded-[45px]">
              <div className="flex-col gap-[26px] inline-flex items-start relative flex-[0_0_auto]">
                <div className="relative w-[500px] mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#000000] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                  Let’s make things happen
                </div>

                <p className="relative w-[500px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                  Contact us today to learn more about how our digital marketing
                  services can help your business grow and succeed online.
                </p>

                <button className="all-[unset] box-border inline-flex items-start relative flex-[0_0_auto] bg-dark gap-2.5 px-[35px] py-5 rounded-[14px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
                    Get your free proposal
                  </div>
                </button>
              </div>
            </div>

            <div className="relative w-[494px] h-[394px] ml-[-715px]">
              <div className="w-[359px] h-[394px] rotate-180">
                <div className="relative w-[357px] h-[394px] left-0.5">
                  <div className="absolute w-[338px] h-[71px] top-40 left-[19px] rounded-[169px/35.5px] border border-solid border-[#000000] rotate-180" />

                  <div className="absolute w-[338px] h-[71px] top-[135px] left-[19px] rounded-[169px/35.5px] border border-solid border-[#000000] rotate-180" />

                  <div className="absolute w-[338px] h-[71px] top-[110px] left-[19px] rounded-[169px/35.5px] border border-solid border-[#000000] rotate-180" />

                  <img
                    className="w-[199px] h-[209px] top-[185px] left-[17px] absolute -rotate-180"
                    alt="Star"
                    src={star2}
                  />

                  <img
                    className="w-40 h-[156px] top-[61px] left-0 absolute -rotate-180"
                    alt="Star"
                    src={star4}
                  />

                  <img
                    className="absolute w-[130px] h-[130px] top-0 left-[157px] -rotate-180"
                    alt="Vector"
                    src={vector3}
                  />

                  <div className="absolute w-[125px] h-[125px] top-[145px] left-[142px] bg-[#000000] rounded-[62.5px] border border-solid rotate-180" />

                  <div className="absolute w-5 h-10 top-[201px] left-[215px] bg-white rounded-[10px/20px] rotate-180" />

                  <div className="absolute w-5 h-10 top-[201px] left-[174px] bg-white rounded-[10px/20px] rotate-180" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-2.5 px-[100px] py-0 absolute top-[2877px] left-[3px]">
          <div className="gap-16 px-[60px] py-[70px] bg-dark rounded-[45px] inline-flex items-start relative flex-[0_0_auto]">
            <div className="flex-col gap-5 inline-flex items-start relative flex-[0_0_auto]">
              <p className="relative w-[286px] mt-[-1.00px] font-p font-[number:var(--p-font-weight)] text-white text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </p>

              <Link href="/">
                Learn more
                <img
                  className="relative w-[20.32px] h-[19.53px] mr-[-1.50px]"
                  alt="Icon"
                  src={icon}
                />
              </Link>
            </div>

            <img
              className="w-px h-[186px] relative object-cover"
              alt="Line"
              src={line4}
            />

            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              <p className="relative w-[286px] mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                For a B2B software company, we developed an SEO strategy that
                resulted in a first page ranking for key keywords and a 200%
                increase in organic traffic.
              </p>

              <Link href="/">
                Learn more
                <img
                  className="relative w-[20.32px] h-[19.53px] mr-[-1.50px]"
                  alt="Icon"
                  src={icon2}
                />
              </Link>
            </div>

            <img
              className="w-px h-[186px] relative object-cover"
              alt="Line"
              src={line4}
            />

            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              <p className="relative w-[286px] mt-[-1.00px] font-p font-[number:var(--p-font-weight)] text-white text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                For a national retail chain, we created a social media marketing
                campaign that increased followers by 25% and generated a 20%
                increase in online sales.
              </p>

              <Link href="/" key="Learn more">
                Learn more
                <img
                  className="relative w-[20.32px] h-[19.53px] mr-[-1.50px]"
                  alt="Icon"
                  src={icon3}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-[30px] px-[100px] py-0 absolute top-[3474px] left-[3px]">
          <div className="flex flex-col w-[1234px] items-start gap-[30px] px-[60px] py-[41px] relative flex-[0_0_auto] bg-[#e14242] rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
            <div className="flex w-[1117px] items-center justify-between relative flex-[0_0_auto] mr-[-3.00px]">
              <div className="inline-flex items-center gap-[25px] relative flex-[0_0_auto]">
                <div className="text-white relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-6xl tracking-[0] leading-[normal]">
                  01
                </div>

                <div className="relative w-[612px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-white text-3xl tracking-[0] leading-[normal]">
                  Consultation
                </div>
              </div>

              <div className="relative w-[58px] h-[58px] bg-[#f3f3f3] rounded-[29px] border border-solid border-[#191a23]">
                <img
                  className="absolute w-[18px] h-1.5 top-[25px] left-[19px]"
                  alt="Img"
                  src={image2}
                />
              </div>
            </div>

            <img
              className="w-[1114px] h-px relative object-cover"
              alt="Line"
              src={line25}
            />

            <p className="relative w-[1114px] h-[60px] font-p font-[number:var(--p-font-weight)] text-white text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>

          <div className="flex flex-col w-[1234px] items-start gap-2.5 px-[60px] py-[41px] relative flex-[0_0_auto] bg-grey rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
            <div className="flex w-[1117px] items-center justify-between relative flex-[0_0_auto] mr-[-3.00px]">
              <div className="inline-flex items-center gap-[25px] relative flex-[0_0_auto]">
                <div className="text-[#000000] relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-6xl tracking-[0] leading-[normal]">
                  02
                </div>

                <div className="relative w-[612px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-[#000000] text-3xl tracking-[0] leading-[normal]">
                  Research and Strategy Development
                </div>
              </div>

              <div className="relative w-[58px] h-[58px] bg-[#f3f3f3] rounded-[29px] border border-solid border-[#191a23]">
                <img
                  className="absolute w-[25px] h-[25px] top-[15px] left-[15px]"
                  alt="Img"
                  src={image1}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[1234px] items-start gap-2.5 px-[60px] py-[41px] relative flex-[0_0_auto] bg-grey rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
            <div className="flex w-[1117px] items-center justify-between relative flex-[0_0_auto] mr-[-3.00px]">
              <div className="inline-flex items-center gap-[25px] relative flex-[0_0_auto]">
                <div className="text-[#000000] relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-6xl tracking-[0] leading-[normal]">
                  03
                </div>

                <div className="relative w-[612px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-[#000000] text-3xl tracking-[0] leading-[normal]">
                  Implementation
                </div>
              </div>

              <div className="relative w-[58px] h-[58px] bg-[#f3f3f3] rounded-[29px] border border-solid border-[#191a23]">
                <img
                  className="absolute w-[25px] h-[25px] top-[15px] left-[15px]"
                  alt="Img"
                  src={image1}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[1234px] items-start gap-2.5 px-[60px] py-[41px] relative flex-[0_0_auto] bg-grey rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
            <div className="flex w-[1117px] items-center justify-between relative flex-[0_0_auto] mr-[-3.00px]">
              <div className="inline-flex items-center gap-[25px] relative flex-[0_0_auto]">
                <div className="text-[#000000] relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-6xl tracking-[0] leading-[normal]">
                  04
                </div>

                <div className="relative w-[612px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#000000] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                  Monitoring and Optimization
                </div>
              </div>

              <div className="relative w-[58px] h-[58px] bg-[#f3f3f3] rounded-[29px] border border-solid border-[#191a23]">
                <img
                  className="absolute w-[25px] h-[25px] top-[15px] left-[15px]"
                  alt="Img"
                  src={image1}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[1234px] items-start gap-2.5 px-[60px] py-[41px] relative flex-[0_0_auto] bg-grey rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
            <div className="flex w-[1117px] items-center justify-between relative flex-[0_0_auto] mr-[-3.00px]">
              <div className="inline-flex items-center gap-[25px] relative flex-[0_0_auto]">
                <div className="text-[#000000] relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-6xl tracking-[0] leading-[normal]">
                  05
                </div>

                <div className="relative w-[612px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#000000] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                  Reporting and Communication
                </div>
              </div>

              <div className="relative w-[58px] h-[58px] bg-[#f3f3f3] rounded-[29px] border border-solid border-[#191a23]">
                <img
                  className="absolute w-[25px] h-[25px] top-[15px] left-[15px]"
                  alt="Img"
                  src={image1}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[1234px] items-start gap-2.5 px-[60px] py-[41px] relative flex-[0_0_auto] bg-grey rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
            <div className="flex w-[1117px] items-center justify-between relative flex-[0_0_auto] mr-[-3.00px]">
              <div className="inline-flex items-center gap-[25px] relative flex-[0_0_auto]">
                <div className="text-[#000000] relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-6xl tracking-[0] leading-[normal]">
                  06
                </div>

                <div className="relative w-[612px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#191a23] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                  Continual Improvement
                </div>
              </div>

              <div className="relative w-[58px] h-[58px] bg-[#f3f3f3] rounded-[29px] border border-solid border-[#191a23]">
                <img
                  className="absolute w-[25px] h-[25px] top-[15px] left-[15px]"
                  alt="Img"
                  src={image1}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-10 absolute top-[4969px] left-0">
          <div className="inline-flex items-start gap-10 px-[100px] py-0 relative flex-[0_0_auto]">
            <div className="flex flex-col w-[387px] h-[331px] items-start gap-2.5 px-[35px] py-10 relative bg-white rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
              <div className="inline-flex flex-col items-start gap-7 relative flex-[0_0_auto]">
                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-end gap-5 pl-0 pr-[76px] py-0 relative flex-1 grow">
                    <div className="w-[105.65px] relative h-[102.82px]">
                      <div className="relative w-[106px] h-[103px]">
                        <img
                          className="absolute w-[98px] h-[98px] top-[5px] left-2"
                          alt="Vector"
                          src={vector2}
                        />

                        <img
                          className="absolute w-[98px] h-[98px] top-0 left-0"
                          alt="Mask group"
                          src={image}
                        />
                      </div>
                    </div>

                    <div className="relative w-[152px] h-[49px] mr-[-36.65px]">
                      <div className="absolute top-0 left-0 font-h-4 font-[number:var(--h-4-font-weight)] text-[#000000] text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                        John Smith
                      </div>

                      <div className="absolute top-[26px] left-0 font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                        CEO and Founder
                      </div>
                    </div>
                  </div>

                  <div className="relative w-[34px] h-[34px] ml-[-67px] bg-[#000000] rounded-[17px]">
                    <img
                      className="absolute w-[17px] h-[17px] top-2 left-[9px]"
                      alt="Linkedin"
                      src={linkedin}
                    />
                  </div>
                </div>

                <img
                  className="w-[317px] h-px relative object-cover"
                  alt="Line"
                  src={line3}
                />

                <p className="relative w-[317px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                  10+ years of experience in digital marketing. Expertise in
                  SEO, PPC, and content strategy
                </p>
              </div>
            </div>

            <div className="flex flex-col w-[387px] items-start gap-2.5 px-[35px] py-10 relative bg-white rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
              <div className="inline-flex flex-col items-start gap-7 relative flex-[0_0_auto]">
                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-end gap-5 pl-0 pr-[76px] py-0 relative flex-1 grow">
                    <div className="w-[102.82px] relative h-[102.82px]">
                      <div className="relative w-[103px] h-[103px]">
                        <img
                          className="absolute w-[98px] h-[98px] top-[5px] left-[5px]"
                          alt="Vector"
                          src={vector2}
                        />

                        <img
                          className="absolute w-[98px] h-[98px] top-0 left-0"
                          alt="Mask group"
                          src={maskGroup4}
                        />
                      </div>
                    </div>

                    <div className="relative w-[198.18px] h-[49.18px] mr-[-80.00px]">
                      <div className="absolute top-0 left-0 font-h-4 font-[number:var(--h-4-font-weight)] text-[#000000] text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                        Jane Doe
                      </div>

                      <div className="absolute w-[194px] top-[26px] left-0 font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                        Director of Operations
                      </div>
                    </div>
                  </div>

                  <div className="relative w-[34px] h-[34px] ml-[-67px] bg-[#000000] rounded-[17px]">
                    <img
                      className="absolute w-[17px] h-[17px] top-2 left-[9px]"
                      alt="Linkedin"
                      src={linkedin}
                    />
                  </div>
                </div>

                <img
                  className="w-[317px] h-px relative object-cover"
                  alt="Line"
                  src={line3}
                />

                <p className="relative w-[317px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                  7+ years of experience in project management and team
                  leadership. Strong organizational and communication skills
                </p>
              </div>
            </div>

            <div className="flex flex-col w-[387px] items-start gap-2.5 px-[35px] py-10 relative bg-white rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
              <div className="inline-flex flex-col items-start gap-7 relative flex-[0_0_auto]">
                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-end gap-5 pl-0 pr-[76px] py-0 relative flex-1 grow">
                    <div className="w-[102.82px] relative h-[102.82px]">
                      <div className="relative w-[103px] h-[103px]">
                        <img
                          className="absolute w-[98px] h-[98px] top-[5px] left-[5px]"
                          alt="Vector"
                          src={vector2}
                        />

                        <img
                          className="absolute w-[98px] h-[98px] top-0 left-0"
                          alt="Mask group"
                          src={maskGroup}
                        />
                      </div>
                    </div>

                    <div className="relative w-[187px] h-[49px] mr-[-68.82px]">
                      <div className="absolute top-0 left-0 font-h-4 font-[number:var(--h-4-font-weight)] text-[#000000] text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                        Michael Brown
                      </div>

                      <div className="absolute top-[26px] left-0 font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                        Senior SEO Specialist
                      </div>
                    </div>
                  </div>

                  <div className="relative w-[34px] h-[34px] ml-[-67px] bg-[#000000] rounded-[17px]">
                    <img
                      className="absolute w-[17px] h-[17px] top-2 left-[9px]"
                      alt="Linkedin"
                      src={linkedin}
                    />
                  </div>
                </div>

                <img
                  className="w-[317px] h-px relative object-cover"
                  alt="Line"
                  src={line3}
                />

                <p className="relative w-[317px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                  5+ years of experience in SEO and content creation. Proficient
                  in keyword research and on-page optimization
                </p>
              </div>
            </div>
          </div>

          <div className="inline-flex items-start gap-10 px-[100px] py-0 relative flex-[0_0_auto]">
            <div className="flex flex-col w-[387px] h-[354px] items-start gap-2.5 px-[35px] py-10 relative bg-white rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
              <div className="inline-flex flex-col items-start gap-7 relative flex-[0_0_auto]">
                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-end gap-5 pl-0 pr-[76px] py-0 relative flex-1 grow">
                    <div className="w-[102.82px] relative h-[102.82px]">
                      <div className="relative w-[103px] h-[103px]">
                        <img
                          className="absolute w-[98px] h-[98px] top-[5px] left-[5px]"
                          alt="Vector"
                          src={vector2}
                        />

                        <img
                          className="absolute w-[98px] h-[98px] top-0 left-0"
                          alt="Mask group"
                          src={maskGroup6}
                        />
                      </div>
                    </div>

                    <div className="relative w-36 h-[49px] mr-[-25.82px]">
                      <div className="absolute top-0 left-0 font-h-4 font-[number:var(--h-4-font-weight)] text-[#000000] text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                        Emily Johnson
                      </div>

                      <div className="absolute top-[26px] left-0 font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                        PPC Manager
                      </div>
                    </div>
                  </div>

                  <div className="relative w-[34px] h-[34px] ml-[-67px] bg-[#000000] rounded-[17px]">
                    <img
                      className="absolute w-[17px] h-[17px] top-2 left-[9px]"
                      alt="Linkedin"
                      src={linkedin}
                    />
                  </div>
                </div>

                <img
                  className="w-[317px] h-px relative object-cover"
                  alt="Line"
                  src={line3}
                />

                <p className="relative w-[317px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                  3+ years of experience in paid search advertising. Skilled in
                  campaign management and performance analysis
                </p>
              </div>
            </div>

            <div className="flex flex-col w-[387px] h-[354px] items-start gap-2.5 px-[35px] py-10 relative bg-white rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
              <div className="inline-flex flex-col items-start gap-7 relative flex-[0_0_auto]">
                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-end gap-5 pl-0 pr-[76px] py-0 relative flex-1 grow">
                    <div className="w-[102.82px] relative h-[102.82px]">
                      <div className="relative w-[103px] h-[103px]">
                        <img
                          className="absolute w-[98px] h-[98px] top-[5px] left-[5px]"
                          alt="Vector"
                          src={vector2}
                        />

                        <img
                          className="absolute w-[98px] h-[98px] top-0 left-0"
                          alt="Mask group"
                          src={maskGroup3}
                        />
                      </div>
                    </div>

                    <div className="relative w-[198.18px] h-[72.18px] mr-[-80.00px]">
                      <div className="absolute top-0 left-0 font-h-4 font-[number:var(--h-4-font-weight)] text-[#000000] text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                        Brian Williams
                      </div>

                      <div className="absolute w-[194px] top-[26px] left-0 font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                        Social Media Specialist
                      </div>
                    </div>
                  </div>

                  <div className="relative w-[34px] h-[34px] ml-[-67px] bg-[#000000] rounded-[17px]">
                    <img
                      className="absolute w-[17px] h-[17px] top-2 left-[9px]"
                      alt="Linkedin"
                      src={linkedin}
                    />
                  </div>
                </div>

                <img
                  className="w-[317px] h-px relative object-cover"
                  alt="Line"
                  src={line3}
                />

                <p className="relative w-[317px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                  4+ years of experience in social media marketing. Proficient
                  in creating and scheduling content, analyzing metrics, and
                  building engagement
                </p>
              </div>
            </div>

            <div className="flex flex-col w-[387px] h-[354px] items-start gap-2.5 px-[35px] py-10 relative bg-white rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
              <div className="inline-flex flex-col items-start gap-7 relative flex-[0_0_auto]">
                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-end gap-5 pl-0 pr-[76px] py-0 relative flex-1 grow">
                    <div className="w-[102.82px] relative h-[102.82px]">
                      <div className="relative w-[103px] h-[103px]">
                        <img
                          className="absolute w-[98px] h-[98px] top-[5px] left-[5px]"
                          alt="Vector"
                          src={vector2}
                        />

                        <img
                          className="absolute w-[98px] h-[98px] top-0 left-0"
                          alt="Mask group"
                          src={maskGroup2}
                        />
                      </div>
                    </div>

                    <div className="relative w-[198.18px] h-[49.18px] mr-[-80.00px]">
                      <div className="absolute top-0 left-0 font-h-4 font-[number:var(--h-4-font-weight)] text-[#000000] text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                        Sarah Kim
                      </div>

                      <div className="absolute w-[194px] top-[26px] left-0 font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                        Content Creator
                      </div>
                    </div>
                  </div>

                  <div className="relative w-[34px] h-[34px] ml-[-67px] bg-[#000000] rounded-[17px]">
                    <img
                      className="absolute w-[17px] h-[17px] top-2 left-[9px]"
                      alt="Linkedin"
                      src={linkedin}
                    />
                  </div>
                </div>

                <img
                  className="w-[317px] h-px relative object-cover"
                  alt="Line"
                  src={line3}
                />

                <p className="relative w-[317px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                  2+ years of experience in writing and editing
                  <br />
                  Skilled in creating compelling, SEO-optimized content for
                  various industries
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="all-[unset] box-border flex w-[269px] items-center justify-center absolute top-[5734px] left-[1071px] bg-dark gap-2.5 px-[35px] py-5 rounded-[14px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
            See all team
          </div>
        </button>

        <div className="absolute w-[1240px] h-[625px] top-[6033px] left-[100px] bg-dark rounded-[45px] overflow-hidden">
          <div className="inline-flex flex-col items-center gap-[124px] relative top-[84px] left-[-346px]">
            <div className="flex w-[1918px] justify-between items-start relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-end gap-5 relative flex-[0_0_auto]">
                <div className="relative w-[606px] h-[266px]">
                  <div className="relative w-[554px] h-[266px] left-[52px]">
                    <img
                      className="absolute w-[260px] h-[266px] top-0 left-[294px]"
                      alt="Bubble"
                      src={bubble}
                    />

                    <p className="absolute w-[502px] top-[47px] left-0 font-p font-[number:var(--p-font-weight)] text-white text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                      &#34;We have been working with Positivus for the past year
                      and have seen a significant increase in website traffic
                      and leads as a result of their efforts. The team is
                      professional, responsive, and truly cares about the
                      success of our business. We highly recommend Positivus to
                      any company looking to grow their online presence.&#34;
                    </p>
                  </div>
                </div>

                <p className="relative w-[526px] [font-family:'Space_Grotesk-Medium',Helvetica] font-normal text-transparent text-xl tracking-[0] leading-5">
                  <span className="font-[number:var(--h-4-font-weight)] text-[#e14242] font-h-4 [font-style:var(--h-4-font-style)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] text-[length:var(--h-4-font-size)]">
                    John Smith
                    <br />
                  </span>

                  <span className="[font-family:'Space_Grotesk-Regular',Helvetica] text-white text-lg">
                    Marketing Director at XYZ Corp
                  </span>
                </p>
              </div>

              <div className="inline-flex flex-col items-end gap-5 relative flex-[0_0_auto]">
                <div className="relative w-[606px] h-[266px] bg-[url(/bubble-2.svg)] bg-[100%_100%]">
                  <p className="absolute w-[502px] top-[47px] left-[52px] font-p font-[number:var(--p-font-weight)] text-white text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                    &#34;We have been working with Positivus for the past year
                    and have seen a significant increase in website traffic and
                    leads as a result of their efforts. The team is
                    professional, responsive, and truly cares about the success
                    of our business. We highly recommend Positivus to any
                    company looking to grow their online presence.&#34;
                  </p>
                </div>

                <p className="relative w-[526px] [font-family:'Space_Grotesk-Medium',Helvetica] font-normal text-transparent text-xl tracking-[0] leading-5">
                  <span className="font-[number:var(--h-4-font-weight)] text-[#e14242] font-h-4 [font-style:var(--h-4-font-style)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] text-[length:var(--h-4-font-size)]">
                    John Smith
                    <br />
                  </span>

                  <span className="[font-family:'Space_Grotesk-Regular',Helvetica] text-white text-lg">
                    Marketing Director at XYZ Corp
                  </span>
                </p>
              </div>

              <div className="inline-flex flex-col items-end gap-5 relative flex-[0_0_auto]">
                <div className="relative w-[606px] h-[266px]">
                  <div className="relative w-[554px] h-[266px]">
                    <img
                      className="absolute w-[274px] h-[266px] top-0 left-0"
                      alt="Bubble"
                      src={bubble3}
                    />

                    <p className="absolute w-[502px] top-[47px] left-[52px] font-p font-[number:var(--p-font-weight)] text-white text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                      &#34;We have been working with Positivus for the past year
                      and have seen a significant increase in website traffic
                      and leads as a result of their efforts. The team is
                      professional, responsive, and truly cares about the
                      success of our business. We highly recommend Positivus to
                      any company looking to grow their online presence.&#34;
                    </p>
                  </div>
                </div>

                <p className="relative w-[526px] [font-family:'Space_Grotesk-Medium',Helvetica] font-normal text-transparent text-xl tracking-[0] leading-5">
                  <span className="font-[number:var(--h-4-font-weight)] text-[#e14242] font-h-4 [font-style:var(--h-4-font-style)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] text-[length:var(--h-4-font-size)]">
                    John Smith
                    <br />
                  </span>

                  <span className="[font-family:'Space_Grotesk-Regular',Helvetica] text-white text-lg">
                    Marketing Director at XYZ Corp
                  </span>
                </p>
              </div>
            </div>

            <div className="flex w-[564px] items-center justify-between relative flex-[0_0_auto]">
              <div className="relative w-5 h-px">
                <img
                  className="absolute w-[23px] h-[22px] top-[-11px] -left-0.5"
                  alt="Arrow"
                  src={arrow32}
                />
              </div>

              <div className="relative w-[146px] h-3.5 bg-[url(/stars.png)] bg-[100%_100%]" />

              <div className="relative w-5 h-px -rotate-180">
                <img
                  className="absolute w-[23px] h-[22px] top-[-11px] -left-0.5 rotate-180"
                  alt="Arrow"
                  src={arrow3}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-[1440px] items-center px-[100px] py-0 absolute top-[6929px] left-0">
          <div className="flex w-[1240px] items-start gap-2.5 pt-[60px] pb-20 px-[100px] relative bg-grey rounded-[45px]">
            <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
              <div className="inline-flex items-start gap-[35px] relative flex-[0_0_auto]">
                <div className="relative w-[98px] h-7">
                  <div className="absolute top-0.5 left-[42px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                    Say Hi
                  </div>

                  <div className="absolute w-7 h-7 top-0 left-0">
                    <div className="relative w-[30px] h-[30px] -top-px -left-px bg-white rounded-[29px] border border-solid border-[#000000]">
                      <div className="relative w-4 h-4 top-1.5 left-1.5 bg-[#e14242] rounded-lg" />
                    </div>
                  </div>
                </div>

                <div className="relative w-[147px] h-7 mr-[-2.00px]">
                  <div className="absolute w-[30px] h-[30px] -top-px -left-px bg-white rounded-[29px] border border-solid border-[#000000]" />

                  <div className="absolute top-0.5 left-[42px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                    Get a Quote
                  </div>
                </div>
              </div>

              <div className="inline-flex flex-col items-start gap-[25px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col gap-[5px] flex-[0_0_auto] items-start relative">
                  <input
                    className="text-[#000000] text-base leading-7 whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal tracking-[0] [background:transparent] border-[none] p-0"
                    placeholder="Name"
                    type="text"
                  />

                  <input
                    className="w-[556px] px-[30px] py-[18px] relative bg-white rounded-[14px] overflow-hidden border border-solid border-[#000000] text-[#898989] text-lg leading-[normal] mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal tracking-[0]"
                    placeholder="Name"
                    type="text"
                  />
                </div>

                <div className="inline-flex flex-col gap-[5px] flex-[0_0_auto] items-start relative">
                  <input
                    className="text-[#000000] text-base leading-7 whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal tracking-[0] [background:transparent] border-[none] p-0"
                    placeholder="Email*"
                    type="email"
                  />

                  <input
                    className="w-[556px] px-[30px] py-[18px] relative bg-white rounded-[14px] overflow-hidden border border-solid border-[#000000] text-[#898989] text-lg leading-[normal] mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal tracking-[0]"
                    placeholder="Email"
                    type="email"
                  />
                </div>

                <div className="inline-flex flex-col h-[223px] gap-[5px] items-start relative">
                  <div className="text-[#000000] text-base leading-7 whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal tracking-[0]">
                    Message*
                  </div>

                  <div className="h-[190px] flex w-[556px] items-start gap-2.5 px-[30px] py-[18px] relative bg-white rounded-[14px] overflow-hidden border border-solid border-[#000000]">
                    <div className="text-[#898989] text-lg leading-[normal] relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal tracking-[0]">
                      Message
                    </div>
                  </div>
                </div>
              </div>

              <button className="all-[unset] box-border flex w-[556px] items-center justify-center relative flex-[0_0_auto] bg-dark gap-2.5 px-[35px] py-5 rounded-[14px]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
                  Send Message
                </div>
              </button>
            </div>
          </div>

          <div className="relative w-[691.57px] h-[648px] mr-[-324.57px] ml-[-367px]">
            <div className="relative w-[692px] h-[648px]">
              <img
                className="absolute w-[650px] h-[648px] top-0 left-[42px]"
                alt="Mask group"
                src={maskGroup5}
              />

              <img
                className="absolute w-[141px] h-[141px] top-[424px] left-0"
                alt="Vector"
                src={vector}
              />

              <img
                className="absolute w-[253px] h-[253px] top-[162px] left-[46px]"
                alt="Vector"
                src={vector}
              />
            </div>
          </div>
        </div>

        <div className="gap-2.5 px-[100px] py-0 absolute top-[7842px] left-0 inline-flex flex-col items-start">
          <div className="gap-[50px] pt-[55px] pb-[50px] px-[60px] relative flex-[0_0_auto] bg-dark rounded-[45px_45px_0px_0px] inline-flex flex-col items-start">
            <div className="inline-flex flex-col items-start gap-[66px] relative flex-[0_0_auto]">
              <div className="flex w-[1121px] items-center gap-[155px] relative flex-[0_0_auto]">
                <img
                  className="relative w-[170.81px] h-[30.16px]"
                  alt="Group"
                  src={group2}
                />

                <div className="inline-flex items-start gap-10 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] underline">
                    About us
                  </div>

                  <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] underline">
                    Services
                  </div>

                  <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] underline">
                    Use Cases
                  </div>

                  <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] underline">
                    Pricing
                  </div>

                  <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] underline">
                    Blog
                  </div>
                </div>

                <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
                  <div className="bg-white rounded-[15px] relative w-[30px] h-[30px]">
                    <img
                      className="absolute w-[15px] h-[15px] top-[7px] left-2"
                      alt="Linkedin"
                      src={linkedin}
                    />
                  </div>

                  <img
                    className="relative w-[30px] h-[30px]"
                    alt="Social icon"
                    src={socialIcon}
                  />

                  <div className="bg-white rounded-[15px] relative w-[30px] h-[30px]">
                    <img
                      className="absolute w-[18px] h-3.5 top-2 left-1.5"
                      alt="Twitter"
                      src={twitter}
                    />
                  </div>
                </div>
              </div>

              <div className="inline-flex items-start gap-[154px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-[27px] relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-[#e14242] rounded-[7px]">
                      <div className="relative w-fit mt-[-1.00px] font-h-4 font-[number:var(--h-4-font-weight)] text-[#000000] text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                        Contact us:
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                    <div className="text-white text-[length:var(--p-font-size)] leading-[var(--p-line-height)] relative w-fit mt-[-1.00px] font-p font-[number:var(--p-font-weight)] tracking-[var(--p-letter-spacing)] [font-style:var(--p-font-style)]">
                      Email: info@rounddigital.com
                    </div>

                    <div className="relative w-fit font-p font-[number:var(--p-font-weight)] text-white text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                      Phone: 555-567-8901
                    </div>

                    <p className="relative w-fit font-p font-[number:var(--p-font-weight)] text-white text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                      Address: 1234 Main St
                      <br />
                      Moonstone City, Stardust State 12345
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-start gap-5 px-10 py-[58px] relative flex-[0_0_auto] bg-[#292a32] rounded-[14px] overflow-hidden">
                  <input
                    className="w-[285px] px-[35px] py-[22px] rounded-[14px] overflow-hidden border border-solid border-white relative [background:none] text-white text-[length:var(--p-font-size)] leading-[var(--p-line-height)] mt-[-1.00px] font-p font-[number:var(--p-font-weight)] tracking-[var(--p-letter-spacing)] [font-style:var(--p-font-style)]"
                    placeholder="Email"
                    type="email"
                  />

                  <button className="all-[unset] box-border inline-flex items-start relative flex-[0_0_auto] bg-[#e14242] gap-2.5 px-[35px] py-5 rounded-[14px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
                      Subscribe to news
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-[50px] relative flex-[0_0_auto]">
              <img
                className="w-[1120px] h-px mt-[-1.00px] relative object-cover"
                alt="Line"
                src={line17}
              />

              <div className="gap-10 inline-flex items-start relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                  © 2023 Positivus. All Rights Reserved.
                </p>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-7 underline whitespace-nowrap">
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
