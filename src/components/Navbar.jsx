import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-salon-pink rounded-full flex items-center justify-center animate-pulse-slow">
              <span className="text-white text-2xl">✨</span>
            </div>
            <h1 className="text-2xl font-playfair font-bold text-salon-dark">
              Glamour <span className="text-salon-pink">Haven</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-gray-700 hover:text-salon-pink transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Book Now Button */}
          <a href="#booking" className="hidden md:block btn-primary text-sm">
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link text-gray-700 hover:text-salon-pink transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a href="#booking" className="btn-primary text-center text-sm" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar