import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];justment

  // Smooth scroll function
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(href);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20"
            : "bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-md border-b border-white/10"
        }`}
        style={{ height: scrolled ? "70px" : "80px" }}
      >
        {/* Animated gradient background on scroll */}
        {!scrolled && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-400/5 via-purple-400/5 to-pink-400/5"
            animate={{
              background: [
                "linear-gradient(90deg, rgba(236,72,153,0.05) 0%, rgba(168,85,247,0.05) 50%, rgba(236,72,153,0.05) 100%)",
                "linear-gradient(90deg, rgba(168,85,247,0.05) 0%, rgba(236,72,153,0.05) 50%, rgba(168,85,247,0.05) 100%)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        )}

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo with Animation */}
            <motion.a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="flex items-center space-x-3 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="relative w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <span>✨</span>
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-pink-400"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              <div className="flex flex-col">
                <h1 className={`text-xl md:text-2xl font-bold tracking-tight leading-tight ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}>
                  Glamour <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Haven</span>
                </h1>
                <p className={`text-[10px] tracking-wider ${
                  scrolled ? "text-gray-500" : "text-white/60"
                }`}>
                  LUXURY BEAUTY SALON
                </p>
              </div>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {link.icon}
                    </span>
                    <span className={`font-medium transition-colors duration-300 ${
                      active === link.href 
                        ? "text-pink-500" 
                        : scrolled 
                          ? "text-gray-700 hover:text-pink-500" 
                          : "text-white/90 hover:text-white"
                    }`}>
                      {link.label}
                    </span>
                  </div>
                  
                  {/* Active indicator */}
                  {active === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover indicator */}
                  {hoveredLink === link.href && active !== link.href && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500/50 to-purple-500/50 rounded-full"
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* CTA Button with Animation */}
            <motion.a
              href="#booking"
              onClick={(e) => handleSmoothScroll(e, "#booking")}
              className="hidden md:block relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-md overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Book Now
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>

            {/* Mobile Menu Button - Elegant */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden focus:outline-none relative w-8 h-8"
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-1.5">
                  <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`block w-6 h-0.5 rounded-full ${
                      scrolled ? "bg-gray-800" : "bg-white"
                    }`}
                  />
                  <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`block w-6 h-0.5 rounded-full ${
                      scrolled ? "bg-gray-800" : "bg-white"
                    }`}
                  />
                  <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`block w-6 h-0.5 rounded-full ${
                      scrolled ? "bg-gray-800" : "bg-white"
                    }`}
                  />
                </div>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Modern Full-Screen */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-gradient-to-b from-white to-pink-50 shadow-2xl z-40 md:hidden overflow-y-auto"
            >
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-pink-100 to-transparent" />
              
              {/* Mobile Menu Header */}
              <div className="relative p-6 pt-20">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-2xl">
                      ✨
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">Glamour Haven</h2>
                      <p className="text-xs text-gray-500">Luxury Beauty Salon</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                        active === link.href
                          ? "bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-600"
                          : "text-gray-700 hover:bg-pink-50"
                      }`}
                    >
                      <span className="text-2xl">{link.icon}</span>
                      <span className="font-medium text-lg">{link.label}</span>
                      {active === link.href && (
                        <motion.div
                          layoutId="mobileActive"
                          className="ml-auto w-1.5 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                        />
                      )}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile CTA Button */}
                <motion.a
                  href="#booking"
                  onClick={(e) => handleSmoothScroll(e, "#booking")}
                  className="block mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center font-semibold shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Your Appointment
                </motion.a>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-pink-100">
                  <p className="text-xs text-gray-500 text-center">
                    ✨ 5-Star Rated • 15,000+ Happy Clients ✨
                  </p>
                  <div className="flex justify-center gap-4 mt-4">
  <motion.a
    href="#"
    whileHover={{ y: -3 }}
    className="w-10 h-10 rounded-full bg-pink-100"
  />
  
  <motion.a
    href="#"
    whileHover={{ y: -3 }}
    className="w-10 h-10 rounded-full bg-pink-100"
  />
  
  <motion.a
    href="#"
    whileHover={{ y: -3 }}
    className="w-10 h-10 rounded-full bg-pink-100"
  />
</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;