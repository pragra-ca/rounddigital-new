import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Working with this team has been an absolute game-changer for our business. Their innovative approach and attention to detail are unmatched in the industry.",
      author: "Alex Johnson",
      company: "TechCorp Inc.",
      role: "CEO",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      quote: "The results have exceeded our expectations. Their expertise in digital transformation helped us reach new heights in our industry and connect with our audienc.",
      author: "Maria Garcia",
      company: "Global Solutions",
      role: "Marketing Director",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      quote: "Professional, creative, and reliable. They delivered our project on time and within budget, exceeding our expectations at every turn. Highly recommended!",
      author: "James Wilson",
      company: "InnovateX",
      role: "Product Manager",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 4,
      quote: "Their team's ability to understand our vision and bring it to life is remarkable. The website they built for us has significantly increased our online presence.",
      author: "Sarah Chen",
      company: "Creative Minds",
      role: "Founder",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 5,
      quote: "From the initial consultation to the final delivery, the entire process was smooth and transparent. We've seen a 40% increase in leads since launching our new site.",
      author: "David Kim",
      company: "NextGen Tech",
      role: "CTO",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 drop-shadow' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 w-full bg-white px-4 relative overflow-hidden">
      {/* Decorative 3D Blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#e14242]/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-3xl z-0" />

      <div className="container max-w-6xl mx-auto bg-black rounded-3xl shadow-[0_12px_48px_0_rgba(25,26,35,0.18),0_4px_16px_0_rgba(225,66,66,0.10)] py-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-red-100 text-red-600 text-sm font-medium px-4 py-1 rounded-full mb-4 shadow-md text-lg">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            What Our <span className="text-red-500">Clients Say</span>
          </h2>
          <p className="text-lg text-white/80">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="relative bg-white p-10 rounded-3xl shadow-[0_8px_32px_0_rgba(225,66,66,0.10),0_2px_8px_0_rgba(25,26,35,0.10)] border-b-4 border-[#e14242] group hover:shadow-[0_16px_48px_0_rgba(225,66,66,0.18),0_8px_32px_0_rgba(25,26,35,0.18)] transition-all duration-300">
                    {/* 3D Glass Shine */}
                    <div className="pointer-events-none absolute left-6 top-6 w-2/3 h-1/4 bg-white/40 rounded-t-3xl blur-[2px] opacity-60 z-10" />
                    <div className="text-red-500 text-5xl mb-6 drop-shadow-lg">
                      <FaQuoteLeft />
                    </div>
                    <p className="text-xl text-gray-800 mb-8 font-medium leading-relaxed drop-shadow">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 shadow-[0_4px_16px_0_rgba(225,66,66,0.12)] border-4 border-white group-hover:border-[#e14242] transition-all duration-300">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-black group-hover:text-[#e14242] transition-colors duration-300">{testimonial.author}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 hover:shadow-[0_8px_32px_0_rgba(225,66,66,0.13)] transition-all duration-300 z-10 border-b-4 border-[#e14242]"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 hover:shadow-[0_8px_32px_0_rgba(225,66,66,0.13)] transition-all duration-300 z-10 border-b-4 border-[#e14242]"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${currentSlide === index ? 'bg-red-500 border-red-500 scale-125 shadow' : 'bg-gray-300 border-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
