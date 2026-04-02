import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = ['Home', 'Services', 'About', 'Gallery']
  const services = ['Hair Styling', 'Professional Makeup', 'Skincare & Facials', 'Nail Care']
  const hours = [
    'Monday - Friday: 9am - 8pm',
    'Saturday: 10am - 6pm',
    'Sunday: 11am - 5pm'
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-salon-pink rounded-full flex items-center justify-center">
                <span className="text-white text-xl">✨</span>
              </div>
              <h3 className="text-xl font-playfair font-bold">Glamour Haven</h3>
            </div>
            <p className="text-gray-400">
              Luxury beauty salon dedicated to enhancing your natural beauty with premium treatments and expert care.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-salon-pink transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-400">
              {hours.map((hour, index) => (
                <li key={index}>{hour}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Glamour Haven. All rights reserved. | Designed with ❤️ for beauty enthusiasts</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer