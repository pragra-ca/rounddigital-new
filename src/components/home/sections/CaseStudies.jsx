import Link from 'next/link';
import React from 'react';

const arrow1 = "/images/home/arrow-1.svg";
const star2 = "/images/home/star-2.svg";
const star4 = "/images/home/star-4.svg";
const tokyoBrowserWindowWithEmoticonLikesAndStarsAround2 = "/images/home/tokyo-browser-window-with-emoticon-likes-and-stars-around-2.png";
const tokyoMagnifierWebSearchWithElements2 = "/images/home/tokyo-magnifier-web-search-with-elements-2.png";
const tokyoSendingMessagesFromOnePlaceToAnother1 = "/images/home/tokyo-sending-messages-from-one-place-to-another-1.png";
const icon2 = "/images/home/icon-2.png";
const icon3 = "/images/home/icon-3.png";
const icon = "/images/home/icon.png";
const vector3 = "/images/home/vector-3.svg";
const line4 = "/images/home/line-4.svg";

const CaseStudies = () => {
  return (
    <section className="py-16 md:py-24 w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 w-full mb-12">
          <div className="inline-flex flex-col items-start">
            <div className="inline-flex items-center gap-2.5 px-2 py-1 bg-[#e14242] rounded-[7px]">
              <h2 className="font-h-2 font-[number:var(--h-2-font-weight)] text-white text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
                Case Studies
              </h2>
            </div>
          </div>

          <p className="relative w-full md:max-w-[580px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Case Study 1 */}
          <div className="bg-dark p-8 rounded-3xl">
            <p className="mb-6 text-white text-lg leading-relaxed">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <Link href="/case-studies/restaurant" className="inline-flex items-center gap-2 text-white hover:text-red-300 transition-colors">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Case Study 2 */}
          <div className="bg-dark p-8 rounded-3xl">
            <p className="mb-6 text-white text-lg leading-relaxed">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <Link href="/case-studies/b2b-software" className="inline-flex items-center gap-2 text-white hover:text-red-300 transition-colors">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Case Study 3 */}
          <div className="bg-dark p-8 rounded-3xl">
            <p className="mb-6 text-white text-lg leading-relaxed">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <Link href="/case-studies/retail-chain" className="inline-flex items-center gap-2 text-white hover:text-red-300 transition-colors">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
