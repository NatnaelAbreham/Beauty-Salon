import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

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
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-gradient-to-r from-black/50 via-black/30 to-black/50 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center text-white text-xl font-bold shadow-md hover:scale-110 transition-transform duration-300">
              ✨
            </div>
            <h1 className={`text-2xl font-bold tracking-wide ${scrolled ? "text-gray-800" : "text-white"}`}>
              Glamour <span className="text-pink-500">Haven</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`relative group font-medium transition ${
                  active === link.href 
                    ? "text-pink-500" 
                    : scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#booking"
            className={`hidden md:block px-5 py-2 rounded-full bg-pink-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ${
              !scrolled && "shadow-black/20"
            }`}
          >
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <div className="space-y-1">
              <span className={`block w-6 h-0.5 ${scrolled ? "bg-gray-800" : "bg-white"}`}></span>
              <span className={`block w-6 h-0.5 ${scrolled ? "bg-gray-800" : "bg-white"}`}></span>
              <span className={`block w-6 h-0.5 ${scrolled ? "bg-gray-800" : "bg-white"}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setIsMenuOpen(false);
                }}
                className={`text-lg font-medium transition ${
                  active === link.href ? "text-pink-500" : "text-white/90"
                } hover:text-pink-500`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 px-5 py-2 rounded-full bg-pink-500 text-white text-center font-medium shadow-md"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;