import React, { useState, useEffect, useCallback } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    id: 1,
    quote:
      "Round Digital's cybersecurity solution has completely transformed our security posture. We now have complete confidence in our systems and zero security incidents.",
    author: "Andy Smith",
    company: "Metropolitan Bank",
    role: "Chief Security Officer",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 2,
    quote:
      "From UX to backend, they nailed every requirement. Communication was clear, and delivery was on point. We couldn't be happier with the results.",
    author: "Sarah Chen",
    company: "TechCorp Industries",
    role: "Chief Technology Officer",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    id: 3,
    quote:
      "The compliance automation and data protection features have saved us countless hours. We achieved 100% regulatory compliance within three months.",
    author: "Dr. Michael Torres",
    company: "HealthSecure Medical",
    role: "Chief Medical Officer",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: 4,
    quote:
      "It's rare to find a team that blends creativity, technical expertise, and professionalism so effortlessly. Highly recommended for startups.",
    author: "James Rodriguez",
    company: "SecureLogistics Corp",
    role: "Security Director",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/90.jpg",
  },
  {
    id: 5,
    quote:
      "Round Digital's 24/7 security monitoring gives us peace of mind. Their incident response team is incredibly fast and professional.",
    author: "Lisa Wang",
    company: "DataSafe Corp",
    role: "Chief Information Officer",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const renderStars = (rating) =>
    Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-brand-green" : "text-slate-300"}`}
        />
      ));

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="section-container">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by industry"
          highlight="leaders worldwide"
          description="Don't just take our word for it. Here's what our clients say about working with RoundDigital."
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <div className="card-surface p-8 md:p-10">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                        <FaQuoteLeft className="text-white text-lg" />
                      </div>
                      <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
                    </div>

                    <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/10">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-ink">{testimonial.author}</h4>
                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                        <p className="text-sm font-semibold text-primary">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 w-11 h-11 bg-white rounded-full shadow-card flex items-center justify-center text-ink hover:bg-primary hover:text-white transition-colors border border-slate-100"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 w-11 h-11 bg-white rounded-full shadow-card flex items-center justify-center text-ink hover:bg-primary hover:text-white transition-colors border border-slate-100"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-8 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
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
