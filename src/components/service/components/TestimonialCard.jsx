import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialLogo, testimonialUser,sumit } from '../constant';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const testimonials = [
    {
        id: 'gymstory',
        company: 'Gymstory',
        logo: testimonialLogo,
        highlight: 'Kornix Is The Best Digital Agency I Have Ever Seen!<br />Highly Recommended!',
        text: `I recently partnered with <strong>Round Digital</strong> for a custom web development project<br />and couldn't be happier with the results.`,
        name: 'Sumit Kumar',
        role: 'Full Stack Developer',
        image: sumit,
    },
    {
        id: 'techverse',
        company: 'Techverse',
        logo: testimonialLogo,
        highlight: 'They Delivered Exactly What<br />We Needed!',
        text: `Our collaboration with <strong>Round Digital</strong> was a game-changer.<br />Their professionalism and attention to detail gave our brand a huge boost.`,
        name: 'Mark Henderson',
        role: 'CTO of TECHVERSE',
        image: testimonialUser,
    },
    {
        id: 'mediwell',
        company: 'Mediwell',
        logo: testimonialLogo,
        highlight: 'Amazing Web Development<br />Experience!',
        text: `Very impressed with the service quality.<br />The website is modern, fast, and exactly what we envisioned.`,
        name: 'Sophia Turner',
        role: 'Marketing Head of MEDIWELL',
        image: testimonialUser,
    },
];

const TestimonialCard = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState('next');
    const prevIndexRef = useRef(index);
    const intervalRef = useRef(null);
    const cardRefs = useRef([]);
    const containerRef = useRef(null);

    const handleSlide = (newDirection) => {
        setDirection(newDirection);
        if (newDirection === 'next') {
            setIndex((prev) => (prev + 1) % testimonials.length);
        } else {
            setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
    };
    
    // GSAP animation for sliding the entire card
    useGSAP(() => {
        if (cardRefs.current.length === 0) return;

        const prevIndex = prevIndexRef.current;
        const currentIndex = index;
        
        const outgoingCard = cardRefs.current[prevIndex];
        const incomingCard = cardRefs.current[currentIndex];

        const fromX = direction === 'next' ? '100%' : '-100%';
        const toX = direction === 'next' ? '-100%' : '100%';

        gsap.set(incomingCard, { x: fromX, autoAlpha: 1 });

        const tl = gsap.timeline();
        tl.to(outgoingCard, { x: toX, duration: 0.7, ease: 'power3.inOut' })
          .to(incomingCard, { x: '0%', duration: 0.7, ease: 'power3.inOut' }, '<');
        
        prevIndexRef.current = currentIndex;

    }, { dependencies: [index], scope: containerRef });

    // Initial setup to show the first card
    useGSAP(() => {
        gsap.set(cardRefs.current, { x: '100%', autoAlpha: 0 });
        gsap.set(cardRefs.current[0], { x: '0%', autoAlpha: 1 });
    }, { scope: containerRef });

    // Auto-slide functionality
    useEffect(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => handleSlide('next'), 5000);
        return () => clearInterval(intervalRef.current);
    }, [index]);

    return (
        <div className="w-full flex justify-between lg:justify-center items-center mt-[61px] lg:gap-7 px-4 lg:px-0">
            <div className='flex justify-center items-center'>
                <button onClick={() => handleSlide('prev')} className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100">
                    <ChevronLeft size={30} />
                </button>
            </div>
            
            <div ref={containerRef} className='w-full lg:w-[1000px] h-[550px] lg:h-[480px] relative overflow-hidden'>
                {testimonials.map((testimonial, i) => (
                    <div
                        key={testimonial.id}
                        ref={el => cardRefs.current[i] = el}
                        className="absolute top-0 left-0 w-full h-full invisible"
                    >
                        <div className="bg-gray-100 rounded-[40px] p-8 lg:p-[77px] flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-6 shadow-sm w-full h-full">
                            <div className="flex-1 text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                                    <img src={testimonial.logo} alt={`${testimonial.company} logo`} className="w-6 h-6" />
                                    <span className="font-medium text-gray-800">{testimonial.company}</span>
                                </div>
                                <h3
                                    className="text-2xl lg:text-[26px] font-bold text-red-600 mb-3"
                                    dangerouslySetInnerHTML={{ __html: testimonial.highlight }}
                                />
                                <p
                                    className="text-lg lg:text-[18px] text-gray-700 mb-4"
                                    dangerouslySetInnerHTML={{ __html: testimonial.text }}
                                />
                                <div>
                                    <p className="font-bold text-xl lg:text-[20px]">{testimonial.name}</p>
                                    <p className="text-base text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-48 h-48 lg:w-[325px] lg:h-[325px] rounded-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex justify-center items-center'>
                <button onClick={() => handleSlide('next')} className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100">
                    <ChevronRight size={30} />
                </button>
            </div>
        </div>
    );
};

export default TestimonialCard;