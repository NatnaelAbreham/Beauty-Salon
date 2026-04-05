import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Client",
    text: "Absolutely amazing experience! The staff is incredibly professional and made me feel so comfortable. My hair has never looked better. Highly recommend Glamour Haven!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    role: "Bridal Client",
    text: "The best makeup artist I've ever worked with! Did my bridal makeup and I felt like a princess. The attention to detail is impeccable.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Spa Client",
    text: "Great atmosphere and professional service. The facial treatment was incredibly relaxing and my skin looks radiant.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sectionRef, isVisible] = useScrollAnimation();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-br from-pink-50 to-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="text-salon-pink font-semibold tracking-widest uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mt-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Real stories from our happy clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white/70 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-10 md:p-14 text-center"
            >
              {/* Quote Decoration */}
              <div className="absolute text-7xl text-pink-200 opacity-20 top-6 left-8">
                "
              </div>

              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-pink-100 shadow-lg">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                {testimonials[currentSlide].text}
              </p>

              {/* Name */}
              <h4 className="text-xl font-semibold tracking-wide">
                {testimonials[currentSlide].name}
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                {testimonials[currentSlide].role}
              </p>

              {/* Stars */}
              <div className="flex justify-center mt-4 space-x-1">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-salon-pink hover:text-white transition-all duration-300"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-salon-pink hover:text-white transition-all duration-300"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentSlide === index
                    ? "bg-salon-pink w-8"
                    : "bg-gray-300 w-2 opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
