import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Round Digital's cybersecurity solution has completely transformed our security posture. We now have complete confidence in our systems and zero security incidents.",
      author: "Andy Smith",
      company: "Metropolitan Bank",
      role: "Chief Security Officer",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 2,
      quote: "From UX to backend, they nailed every requirement. Communication was clear, and delivery was on point. We couldn't be happier with the results.",
      author: "Sarah Chen",
      company: "TechCorp Industries",
      role: "Chief Technology Officer",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      id: 3,
      quote: "The compliance automation and data protection features have saved us countless hours. We achieved 100% regulatory compliance within three months.",
      author: "Dr. Michael Torres",
      company: "HealthSecure Medical",
      role: "Chief Medical Officer",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      id: 4,
      quote: "It's rare to find a team that blends creativity, technical expertise, and professionalism so effortlessly. Highly recommended for startups.",
      author: "James Rodriguez",
      company: "SecureLogistics Corp",
      role: "Security Director",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/90.jpg",
    },
    {
      id: 5,
      quote: "Round Digital's 24/7 security monitoring gives us peace of mind. Their incident response team is incredibly fast and professional.",
      author: "Lisa Wang",
      company: "DataSafe Corp",
      role: "Chief Information Officer",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`} />
      ));
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e14242]/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#e14242] rounded-full"></div>
            <span className="text-sm font-semibold text-[#e14242] uppercase tracking-wide">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#191a23] mb-6">
            Trusted by Industry
            <span className="block text-[#e14242]">Leaders Worldwide</span>
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
                    {/* Quote Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-[#e14242] to-[#c93838] rounded-2xl flex items-center justify-center mb-6">
                      <FaQuoteLeft className="text-white text-xl" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">{renderStars(testimonial.rating)}</div>

                    {/* Quote */}
                    <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-gray-100">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#191a23]">{testimonial.author}</h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                        <p className="text-sm font-semibold text-[#e14242]">{testimonial.company}</p>
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#191a23] hover:bg-[#e14242] hover:text-white transition-all duration-300 border border-gray-200"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#191a23] hover:bg-[#e14242] hover:text-white transition-all duration-300 border border-gray-200"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-8 h-3 bg-[#e14242]"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
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
