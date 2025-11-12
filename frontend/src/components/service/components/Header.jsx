import { useState, useRef, useEffect } from "react"; // <-- Import useEffect
import { logo } from "../constant";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const navLinks = ["Process", "Benefits", "Services", "Portfolio", "FAQ"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const container = useRef();
  const menuRef = useRef();
  const tl = useRef(); // <-- Ref to store the timeline

  // useGSAP now runs only once to create the animation timeline
  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true })
      .fromTo(menuRef.current, 
        { y: -20, autoAlpha: 0 }, // Start from
        { y: 0, autoAlpha: 1, duration: 0.3, ease: "power2.inOut" } // Animate to
      );
  }, { scope: container });

  // useEffect now controls the animation based on the state
  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <nav ref={container} className="flex items-center justify-between bg-fistBg px-4 py-4 sm:px-6 md:px-20 md:py-6 relative">
      <div className="flex items-center">
        <img src={logo} alt="RoundDigital Logo" />
      </div>

      <div className="hidden md:flex gap-6 lg:gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-white hover:text-primary transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        <Button>Get Started</Button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-50 relative">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* GSAP will now correctly handle the 'invisible' class via autoAlpha */}
      <div ref={menuRef} className="absolute top-full left-0 w-full bg-fistBg flex-col items-start gap-4 p-6 md:hidden z-40 shadow-md flex invisible">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-white text-lg hover:text-primary w-full transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <Button className="w-full mt-4" onClick={() => setIsMenuOpen(false)}>
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Header;