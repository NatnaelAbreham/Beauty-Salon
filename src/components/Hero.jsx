import React, { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    experts: 0,
    years: 0,
    products: 0,
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (!loaded) return;

    const targets = {
      clients: 5000,
      experts: 35,
      years: 12,
      products: 100,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        clients: Math.min(
          Math.floor(targets.clients * progress),
          targets.clients,
        ),
        experts: Math.min(
          Math.floor(targets.experts * progress),
          targets.experts,
        ),
        years: Math.min(Math.floor(targets.years * progress), targets.years),
        products: Math.min(
          Math.floor(targets.products * progress),
          targets.products,
        ),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [loaded]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Minimal Overlay - Image Now Visible */}
      <div className="absolute inset-0 z-0">
        {/* Light blue-black gradient overlay that doesn't hide the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-slate-900/30 to-blue-950/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-slate-900/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent z-10" />

        {/* Beauty Salon Hero Image - High quality */}
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2070&auto=format"
          alt="Luxury Beauty Salon - Professional stylist working with client"
          className="w-full h-full object-cover"
          style={{
            filter: "brightness(0.9) contrast(1.05) saturate(1.02)",
          }}
        />
      </div>

      {/* Animated Shimmer Lines - Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-0 -left-1/2 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-shimmer" />
        <div className="absolute top-1/2 -left-1/2 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-indigo-400/15 to-transparent animate-shimmer delay-1000" />
      </div>

      {/* Decorative Glow Effects - Subtle */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6 shadow-lg hover:bg-black/40 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              <span className="text-white text-sm font-medium tracking-wide">
                ✨ AWARD-WINNING LUXURY SALON • EST. 2014 ✨
              </span>
            </div>

            {/* Main Heading - More Impactful */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-white drop-shadow-2xl">Your Beauty,</span>
              <br />
              <span className="bg-gradient-to-r from-blue-200 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-lg">
                Our Passion
              </span>
            </h1>

            {/* Description - More Engaging */}
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md font-medium">
              Step into a world where luxury meets transformation. From
              precision haircuts to rejuvenating facials, our expert artists
              craft bespoke beauty experiences just for you.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-5 flex-wrap justify-center mb-16">
              <a
                href="#booking"
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Reserve Your Moment <span className="text-lg">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300 hover:scale-105"
              >
                View Services
              </a>
            </div>

            {/* Stats with Animated Numbers */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <div className="group backdrop-blur-md bg-black/30 border border-white/20 rounded-2xl px-6 py-4 min-w-[130px] hover:bg-black/40 transition-all duration-300 hover:scale-105 hover:border-blue-400/40">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    💙
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 to-sky-200 bg-clip-text text-transparent">
                    {counts.clients.toLocaleString()}+
                  </h3>
                </div>
                <p className="text-white/80 text-sm mt-1 font-medium">
                  Happy Clients
                </p>
                <p className="text-white/40 text-xs mt-0.5">
                  Trusted & Satisfied
                </p>
              </div>

              <div className="group backdrop-blur-md bg-black/30 border border-white/20 rounded-2xl px-6 py-4 min-w-[130px] hover:bg-black/40 transition-all duration-300 hover:scale-105 hover:border-blue-400/40">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    💇‍♀️
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 to-sky-200 bg-clip-text text-transparent">
                    {counts.experts}+
                  </h3>
                </div>
                <p className="text-white/80 text-sm mt-1 font-medium">
                  Expert Stylists
                </p>
                <p className="text-white/40 text-xs mt-0.5">
                  Certified Artists
                </p>
              </div>

              <div className="group backdrop-blur-md bg-black/30 border border-white/20 rounded-2xl px-6 py-4 min-w-[130px] hover:bg-black/40 transition-all duration-300 hover:scale-105 hover:border-blue-400/40">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    🏆
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 to-sky-200 bg-clip-text text-transparent">
                    {counts.years}+
                  </h3>
                </div>
                <p className="text-white/80 text-sm mt-1 font-medium">
                  Years of Excellence
                </p>
                <p className="text-white/40 text-xs mt-0.5">Since 2014</p>
              </div>

              <div className="group backdrop-blur-md bg-black/30 border border-white/20 rounded-2xl px-6 py-4 min-w-[130px] hover:bg-black/40 transition-all duration-300 hover:scale-105 hover:border-blue-400/40">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    🌿
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 to-sky-200 bg-clip-text text-transparent">
                    {counts.products}%
                  </h3>
                </div>
                <p className="text-white/80 text-sm mt-1 font-medium">
                  Natural Products
                </p>
                <p className="text-white/40 text-xs mt-0.5">Eco-Friendly</p>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-12 flex items-center justify-center gap-4 text-white/50 text-xs">
              <span>✓ 5-Star Rated</span>
              <span>•</span>
              <span>✓ 10,000+ Appointments</span>
              <span>•</span>
              <span>✓ Luxury Guaranteed</span>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
              <div className="flex flex-col items-center gap-1">
                <span className="text-white/40 text-xs tracking-wider">
                  DISCOVER MORE
                </span>
                <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
                  <div className="w-1 h-2 bg-white/40 rounded-full mt-1.5 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 5s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
