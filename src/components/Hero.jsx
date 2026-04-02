// src/components/Hero.jsx - Enhanced version
import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Hero = () => {
  const [heroRef, isVisible] = useScrollAnimation();

  return (
    <section
      id="home"
      className="pt-24 md:pt-32 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-pink-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-salon-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-salon-rose rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className={`animate-on-scroll ${isVisible ? "visible" : ""}`}
          >
            <span className="text-salon-pink font-semibold text-lg inline-block mb-4 relative">
              Welcome to Glamour Haven
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-salon transform scale-x-0 transition-transform duration-300 origin-left"></span>
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              Where Beauty Meets <span className="gradient-text">Elegance</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Experience luxury beauty treatments tailored just for you. Our
              expert stylists and therapists are dedicated to making you look
              and feel your absolute best.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#booking" className="btn-primary ripple-effect">
                Book Appointment
              </a>
              <a href="#services" className="btn-outline">
                Explore Services
              </a>
            </div>

            {/* Stats with Counter Animation */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center group">
                <h3 className="text-3xl font-bold text-salon-pink mb-1 group-hover:scale-110 transition-transform">
                  <span className="counter" data-target="5000">
                    5000
                  </span>
                  +
                </h3>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center group">
                <h3 className="text-3xl font-bold text-salon-pink mb-1 group-hover:scale-110 transition-transform">
                  50+
                </h3>
                <p className="text-sm text-gray-600">Expert Stylists</p>
              </div>
              <div className="text-center group">
                <h3 className="text-3xl font-bold text-salon-pink mb-1 group-hover:scale-110 transition-transform">
                  10+
                </h3>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          <div
            className={`relative animate-on-scroll ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl floating">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop"
                alt="Beauty Salon"
                className="w-full h-auto object-cover zoom-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-salon text-white p-4 rounded-xl shadow-lg animate-bounce-slow glass-effect">
              <p className="font-semibold">✨ Special Offer</p>
              <p className="text-sm">20% Off First Visit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
