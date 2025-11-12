import {
    Mail,
    Phone,
    Facebook,
    Instagram,
    Linkedin,
    Dribbble,
} from "lucide-react";

import { footerLogo } from "../constant";

const FooterSection = () => {
    return (
        // Added horizontal padding for mobile
        <div className="pb-[50px] pt-[310px] px-6 md:px-8">
            {/* Top section: Centered items on mobile and adjusted gap */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-8">
                {/* Left Section: Centered text on mobile */}
                <div className="max-w-md text-center md:text-left">
                    <img src={footerLogo} alt="footer logo" className="mx-auto md:mx-0" />
                    <p className="text-[16px] mt-[25px] text-gray-300 leading-relaxed">
                        Kronix – the leading digital agency based in <br /> the UK, working with
                        top-tier clients, from <br /> start-ups to enterprises.
                    </p>
                </div>

                {/* Contact & Social: Aligned items to center on mobile */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    <div className="flex items-center cursor-pointer gap-2 text-[#FFFFFF]">
                        <Mail size={16} />
                        <span className="text-[16px]">info@kronix.com</span>
                    </div>
                    <div className="flex items-center cursor-pointer gap-2 text-[#FFFFFF]">
                        <Phone size={16} />
                        <span className="text-[16px]">(001) 1231 3435</span>
                    </div>
                    <div className="flex items-center cursor-pointer text-white gap-4 text-xl">
                        <Facebook className="text-red-500" size={24} />
                        <Instagram size={24} />
                        <Linkedin size={24} />
                        <Dribbble size={24} />
                    </div>
                </div>
            </div>

            <hr className="my-8 border-[#404040]" />

            {/* Bottom Links & Copyright: Centered on mobile and added gap for stacking */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-[16px] text-gray-400">
                {/* Added flex-wrap to allow links to wrap on small screens */}
                <div className="flex flex-wrap cursor-pointe justify-center gap-x-6 gap-y-2">
                    <span className="hover:text-white cursor-pointer">Process</span>
                    <span className="hover:text-white cursor-pointer">Benefits</span>
                    <span className="hover:text-white cursor-pointer">Services</span>
                    <span className="hover:text-white cursor-pointer">Portfolio</span>
                    <span className="hover:text-white cursor-pointer">FAQ</span>
                </div>
                <div>© 2025 – All Right Reserved ~ Sumit Kumar</div>
            </div>
        </div>
    );
};

export default FooterSection;