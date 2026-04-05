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
    location: "New York, NY",
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    role: "Bridal Client",
    text: "The best makeup artist I've ever worked with! Did my bridal makeup and I felt like a princess. The attention to detail is impeccable.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
    location: "Miami, FL",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Spa Client",
    text: "Great atmosphere and professional service. The facial treatment was incredibly relaxing and my skin looks radiant.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    location: "Los Angeles, CA",
  },
];

// Floating decorative element component
const FloatingElement = ({ delay, duration, x, y, children }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ x, y }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, 0],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

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
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-gradient-to-br from-rose-50 via-white to-amber-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Floating Decorative Elements */}
      <FloatingElement delay={0} duration={6} x="5%" y="10%">
        <div className="text-4xl opacity-20">✨</div>
      </FloatingElement>
      <FloatingElement delay={1.5} duration={8} x="90%" y="20%">
        <div className="text-5xl opacity-20">🌸</div>
      </FloatingElement>
      <FloatingElement delay={0.8} duration={7} x="85%" y="70%">
        <div className="text-3xl opacity-15">⭐</div>
      </FloatingElement>
      <FloatingElement delay={2} duration={9} x="10%" y="80%">
        <div className="text-4xl opacity-20">💫</div>
      </FloatingElement>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with animated underline */}
        <div
          ref={sectionRef}
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <motion.span
            className="inline-block text-rose-500 font-semibold tracking-[0.2em] uppercase text-sm mb-3"
            initial={{ letterSpacing: "0.2em" }}
            animate={{ letterSpacing: "0.3em" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Testimonials
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight bg-gradient-to-r from-gray-800 via-rose-600 to-gray-800 bg-clip-text text-transparent">
            Loved By Our Clients
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-rose-300 via-rose-500 to-rose-300 mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-500 mt-5 max-w-md mx-auto font-light">
            Real stories. Real results. Real happiness.
          </p>
        </div>

        {/* Main Testimonial Card - Split Layout */}
        <div className="max-w-5xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
              className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500"
            >
              {/* Gradient Border Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10"></div>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Client Info with Gradient Background */}
                <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-300 opacity-10 rounded-full blur-2xl"></div>

                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl">
                      <img
                        src={testimonials[currentSlide].image}
                        alt={testimonials[currentSlide].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-amber-400 rounded-full p-2 shadow-lg">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {testimonials[currentSlide].name}
                  </h3>
                  <p className="text-rose-100 text-sm mb-3">
                    {testimonials[currentSlide].role}
                  </p>
                  <div className="flex items-center space-x-1 text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-rose-100 text-xs mt-3">
                    📍 {testimonials[currentSlide].location}
                  </p>
                </div>

                {/* Right Side - Testimonial Text */}
                <div className="bg-white p-10 flex flex-col justify-center relative">
                  <div className="absolute text-8xl text-rose-200 opacity-30 top-4 left-4 font-serif">
                    "
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10 italic">
                    {testimonials[currentSlide].text}
                  </p>
                  <div className="flex items-center space-x-2 text-rose-400 mt-4">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.041-.934c-1.125.575-2.673.934-4.959.934 1.105-1.283 1.8-2.7 1.8-4 0-.583-.125-1.134-.345-1.636C2.169 9.688 2 8.867 2 8c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
                    </svg>
                    <span className="text-sm text-gray-400">
                      Verified Client
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Elegant Navigation */}
          <button
            onClick={prevSlide}
            className="absolute -left-5 md:-left-8 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group z-20"
          >
            <svg
              className="w-6 h-6 text-gray-600 group-hover:text-rose-500 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-5 md:-right-8 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group z-20"
          >
            <svg
              className="w-6 h-6 text-gray-600 group-hover:text-rose-500 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Elegant Dots */}
          <div className="flex justify-center mt-12 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  currentSlide === index
                    ? "w-12 h-1.5 bg-gradient-to-r from-rose-500 to-pink-500"
                    : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 shadow-sm">
            <span className="text-amber-500 text-lg">★★★★★</span>
            <span className="text-sm text-gray-600">4.9 · 500+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
