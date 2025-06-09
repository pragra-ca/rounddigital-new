import React from 'react';
import { CodeBracketIcon, DevicePhoneMobileIcon, PaintBrushIcon, MagnifyingGlassIcon, ChatBubbleLeftRightIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Assets
const arrow1 = "/images/home/arrow-1.svg";
const tokyoBrowserWindowWithEmoticonLikesAndStarsAround2 = "/images/home/tokyo-browser-window-with-emoticon-likes-and-stars-around-2.png";
const tokyoMagnifierWebSearchWithElements2 = "/images/home/tokyo-magnifier-web-search-with-elements-2.png";
const tokyoSendingMessagesFromOnePlaceToAnother1 = "/images/home/tokyo-sending-messages-from-one-place-to-another-1.png";

const services = [
  {
    id: 1,
    title: 'Development',
    subtitle: 'of websites',
    description: 'Custom websites and web applications built with the latest technologies.',
    bgColor: 'bg-white',
    textColor: 'text-black',
    badgeBg: 'bg-[#e14242]',
    badgeText: 'text-white',
    image: tokyoBrowserWindowWithEmoticonLikesAndStarsAround2,
    icon: <CodeBracketIcon className="h-8 w-8 text-red-500" />
  },
  {
    id: 2,
    title: 'Search engine',
    subtitle: 'optimization',
    description: 'Improve your search engine rankings and drive organic traffic.',
    bgColor: 'bg-grey',
    textColor: 'text-black',
    badgeBg: 'bg-[#e14242]',
    badgeText: 'text-white',
    image: tokyoMagnifierWebSearchWithElements2,
    icon: <MagnifyingGlassIcon className="h-8 w-8 text-red-500" />
  },
  {
    id: 3,
    title: 'Pay-per-click',
    subtitle: 'advertising',
    description: 'Targeted PPC campaigns that drive qualified traffic and maximize ROI.',
    bgColor: 'bg-[#e14242]',
    textColor: 'text-white',
    badgeBg: 'bg-white',
    badgeText: 'text-black',
    image: tokyoSendingMessagesFromOnePlaceToAnother1,
    icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
  },
  {
    id: 4,
    title: 'Social Media',
    subtitle: 'Marketing',
    description: 'Engage with your audience and build your brand across all major social media platforms.',
    bgColor: 'bg-dark',
    textColor: 'text-white',
    badgeBg: 'bg-white',
    badgeText: 'text-black',
    image: tokyoBrowserWindowWithEmoticonLikesAndStarsAround2,
    icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
  },
  {
    id: 5,
    title: 'Workforce',
    subtitle: 'Solution',
    description: 'Custom workforce solutions to help businesses succeed.',
    bgColor: 'bg-[#e14242]',
    textColor: 'text-white',
    badgeBg: 'bg-white',
    badgeText: 'text-black',
    image: tokyoSendingMessagesFromOnePlaceToAnother1,
    icon: <LightBulbIcon className="h-8 w-8 text-white" />
  },
  {
    id: 6,
    title: 'Talent',
    subtitle: 'Factory',
    description: 'Custom talent solutions to help businesses succeed.',
    bgColor: 'bg-white',
    textColor: 'text-black',
    badgeBg: 'bg-[#e14242]',
    badgeText: 'text-white',
    image: tokyoMagnifierWebSearchWithElements2,
    icon: <LightBulbIcon className="h-8 w-8 text-red-500" />
  }
];

const Services = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 w-full mb-12">
          <div className="inline-flex flex-col items-start">
            <div className="inline-flex items-center gap-2.5 px-2 py-1 bg-[#e14242] rounded-[7px]">
              <h2 className="font-h-2 font-[number:var(--h-2-font-weight)] text-white text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
                Services
              </h2>
            </div>
          </div>
          <p className="relative w-full md:max-w-[580px] font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className={`p-[30px] rounded-[45px] border-2 border-black shadow-[0_5px_0_#191a23] ${service.bgColor} ${service.textColor}`}>
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <div className="inline-block mb-2">
                    <div className={`inline-flex items-center gap-2.5 px-2 py-1 ${service.badgeBg} rounded-[7px]`}>
                      <div className={`font-h-3 font-[number:var(--h-3-font-weight)] ${service.badgeText} text-[length:var(--h-3-font-size)]`}>
                        {service.title}
                      </div>
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className={`inline-flex items-center gap-2.5 px-2 py-1 ${service.badgeBg} rounded-[7px]`}>
                      <div className={`font-h-3 font-[number:var(--h-3-font-weight)] ${service.badgeText} text-[length:var(--h-3-font-size)]`}>
                        {service.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto flex justify-between items-end">
                  <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="group flex items-center">
                    <span className="mr-2 group-hover:underline">Learn more</span>
                    <div className="w-10 h-10 bg-dark rounded-full flex items-center justify-center group-hover:bg-[#e14242] transition-colors">
                      <img src={arrow1} alt="" className="w-5 h-5" />
                    </div>
                  </Link>
                  <div className="w-[180px] h-[150px] relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="absolute bottom-0 right-0 max-w-full h-auto" 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-[600px] items-center justify-between p-[50px] relative bg-[#e14242] rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]">
          <div className="inline-flex flex-col items-start gap-[93px] relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 relative flex-[0_0_auto] bg-white rounded-[7px]">
                  <div className="relative w-fit mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-[#000000] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                    Pay-per-click
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* CTA Section */}
        <div className="mt-24 bg-grey rounded-[45px] p-12 md:p-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s make things happen</h3>
              <p className="text-lg mb-8">
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <button className="bg-dark text-white px-8 py-4 rounded-xl hover:bg-[#e14242] transition-colors">
                Get your free proposal
              </button>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <div className="relative w-full max-w-md h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-grey" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
