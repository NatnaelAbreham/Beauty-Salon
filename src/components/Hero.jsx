import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [counts, setCounts] = useState({
    clients: 0,
    experts: 0,
    years: 0,
    products: 0,
  });
  
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring for cursor following
  const springConfig = { damping: 30, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  // For parallax effect on mouse move
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [5, -5]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-5, 5]);

  // Premium beauty salon images that actually represent a salon
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2070&auto=format",
      alt: "Professional hairstylist cutting hair in luxury salon",
      type: "hair"
    },
    {
      url: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=2071&auto=format",
      alt: "Woman getting facial treatment at luxury spa salon",
      type: "facial"
    },
    {
      url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2070&auto=format",
      alt: "Nail artist doing manicure in modern salon",
      type: "nails"
    },
    {
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format",
      alt: "Hair coloring service in premium beauty salon",
      type: "color"
    }
  ];

  useEffect(() => {
    setLoaded(true);
    
    // Auto-rotate images every 5 seconds
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (!loaded) return;

    const targets = {
      clients: 15234,
      experts: 48,
      years: 15,
      products: 100,
    };

    const duration = 2500;
    const steps = 80;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out

      setCounts({
        clients: Math.min(Math.floor(targets.clients * easeProgress), targets.clients),
        experts: Math.min(Math.floor(targets.experts * easeProgress), targets.experts),
        years: Math.min(Math.floor(targets.years * easeProgress), targets.years),
        products: Math.min(Math.floor(targets.products * easeProgress), targets.products),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [loaded]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Custom cursor for desktop */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 border-white/50 pointer-events-none z-50 hidden lg:block backdrop-blur-sm"
        style={{
          left: cursorX,
          top: cursorY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      
      {/* Background Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroImages[activeSlide].url}
            alt={heroImages[activeSlide].alt}
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(0.85) contrast(1.1) saturate(1.05)",
            }}
          />
          
          {/* Premium gradient overlays - more subtle now */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] z-5" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
        animate={{
          x: ["-200%", "200%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{
              top: `${25 + i * 25}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 1.5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`transition-all duration-300 ${
              activeSlide === index 
                ? "w-12 h-1.5 bg-white" 
                : "w-6 h-1.5 bg-white/30 hover:bg-white/50"
            } rounded-full`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            {/* Premium Badge with animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={loaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6 shadow-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-white text-sm font-medium tracking-wide">
                ✨ PREMIER LUXURY SALON • VOTED #1 2025 ✨
              </span>
            </motion.div>

            {/* Main Heading with split text effect */}
            <div className="space-y-2 mb-6">
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
                initial={{ opacity: 0 }}
                animate={loaded ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                <span className="text-white drop-shadow-2xl">Where</span>
                <br />
                <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Beauty Meets
                </span>
                <br />
                <span className="text-white drop-shadow-2xl">Artistry</span>
              </motion.h1>
              
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-4"
                initial={{ width: 0 }}
                animate={loaded ? { width: 96 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-white/90 text-lg md:text-xl max-w-xl mb-10 leading-relaxed drop-shadow-md"
            >
              Experience the pinnacle of luxury beauty. From precision cuts to transformative treatments, 
              our award-winning artists create bespoke experiences tailored to your unique beauty journey.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex gap-5 flex-wrap mb-16"
            >
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white font-semibold shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Your Experience 
                  <motion.span 
                    className="text-lg"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.a>
              
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full border-2 border-white/30 text-white font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex gap-6 text-white/40 text-sm"
            >
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                5-Star Rated
              </span>
              <span>•</span>
              <span>✓ 15,000+ Happy Clients</span>
              <span>•</span>
              <span>✓ Luxury Guaranteed</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { icon: "💎", label: "Happy Clients", value: counts.clients, suffix: "+", subtext: "Worldwide" },
              { icon: "✂️", label: "Expert Stylists", value: counts.experts, suffix: "+", subtext: "Certified Pros" },
              { icon: "🏆", label: "Years of Excellence", value: counts.years, suffix: "+", subtext: "Industry Leaders" },
              { icon: "🌿", label: "Natural Products", value: counts.products, suffix: "%", subtext: "Eco-Friendly" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-pink-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500" />
                
                <div className="relative">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    {stat.value.toLocaleString()}{stat.suffix}
                  </h3>
                  <p className="text-white/70 text-sm font-medium mt-1">{stat.label}</p>
                  <p className="text-white/30 text-xs mt-0.5">{stat.subtext}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-white/40 text-xs tracking-wider font-medium">
              SCROLL TO EXPLORE
            </span>
            <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-white/40 rounded-full mt-1.5"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;