// src/components/Services.jsx - Enhanced version
import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const services = [
  {
    id: 1,
    icon: '💇‍♀️',
    title: 'Hair Styling',
    description: 'Expert cuts, coloring, and styling for all hair types',
    price: 'From $50',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a2943084e?w=400&h=300&fit=crop',
    popular: true,
    gradient: 'from-pink-500 to-rose-500'
  },
  // ... other services
]

const Services = () => {
  const [sectionRef, isVisible] = useScrollAnimation()

  return (
    <section id="services" className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b8b' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={sectionRef} className={`text-center mb-12 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <span className="text-salon-pink font-semibold text-lg">Our Services</span>
          <h2 className="section-title animated-gradient-text">Premium Beauty Services</h2>
          <p className="section-subtitle">
            Discover our wide range of professional beauty treatments designed to enhance your natural beauty
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card shimmer-card group ${isVisible ? 'slide-in-bottom' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-salon text-white px-3 py-1 rounded-full text-sm shadow-lg">
                    🌟 Popular
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative bg-white">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-salon-pink transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <p className="text-salon-pink font-bold text-lg">{service.price}</p>
                
                {/* Animated Button */}
                <button className="mt-4 text-salon-pink font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Book Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services