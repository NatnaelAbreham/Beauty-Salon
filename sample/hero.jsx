import React, { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Sharp Background Image with Soft Beauty-Focused Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Multi-layer gradient for better text readability and beauty vibe */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/60 via-purple-900/40 to-pink-900/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 via-transparent to-amber-500/10 z-10" />

        {/* New Beauty Salon Image - Woman getting hair treatment in luxurious salon */}
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2070&auto=format"
          alt="Luxury Beauty Salon - Hair treatment"
          className="w-full h-full object-cover scale-105"
          style={{ filter: "brightness(0.85) contrast(1.08) saturate(1.1)" }}
        />
      </div>

      {/* Decorative Elements - Beauty inspired */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl pointer-events-none z-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-rose-500/5 rounded-full blur-2xl pointer-events-none z-10" />

      {/* Floating beauty elements - subtle sparkles */}
      <div className="absolute top-1/4 right-1/4 text-2xl opacity-20 animate-ping z-10 pointer-events-none">
        ✨
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-xl opacity-10 animate-bounce z-10 pointer-events-none delay-1000">
        💫
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Premium Badge - Beauty Salon */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-6 shadow-lg hover:bg-white/15 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-400"></span>
              </span>
              <span className="text-white/90 text-sm font-medium tracking-wide">
                ✨ PREMIUM BEAUTY SALON • SINCE 2014 ✨
              </span>
            </div>

            {/* Main Heading - More beauty focused */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-white drop-shadow-2xl">Where Beauty</span>
              <br />
              <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                Meets Elegance
              </span>
            </h1>

            {/* Description - More engaging */}
            <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg font-light">
              Experience transformative beauty treatments in a sanctuary of
              luxury. From rejuvenating facials to expert hair styling — we make
              you feel radiant.
            </p>

            {/* CTA Buttons - Refined styling */}
            <div className="flex gap-5 flex-wrap justify-center mb-16">
              <a
                href="#booking"
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold shadow-2xl shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Your Escape <span className="text-lg">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                Discover Services
              </a>
            </div>

            {/* Stats with Beauty-Focused Icons and Modern Cards */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                {
                  value: "5,000+",
                  label: "Happy Clients",
                  icon: "💖",
                  desc: "Loyal beauties",
                },
                {
                  value: "35+",
                  label: "Expert Artists",
                  icon: "💇‍♀️",
                  desc: "Certified pros",
                },
                {
                  value: "12+",
                  label: "Years of Radiance",
                  icon: "✨",
                  desc: "Excellence since 2012",
                },
                {
                  value: "100%",
                  label: "Natural Products",
                  icon: "🌿",
                  desc: "Clean beauty",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-5 py-3 min-w-[120px] hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-pink-400/30"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-200 to-rose-200 bg-clip-text text-transparent">
                      {stat.value}
                    </h3>
                  </div>
                  <p className="text-gray-200 text-sm mt-1 font-medium">
                    {stat.label}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Elegant Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
              <div className="flex flex-col items-center gap-1">
                <span className="text-white/50 text-xs tracking-wider">
                  SCROLL
                </span>
                <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
                  <div className="w-1 h-2 bg-white/50 rounded-full mt-1.5 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
