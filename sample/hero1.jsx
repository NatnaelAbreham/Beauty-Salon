// src/components/Services.jsx
import React, { useEffect, useRef, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      icon: "💇‍♀️",
      title: "Luxury Hair Styling",
      description:
        "Precision cuts, expert coloring, and transformative styling for every hair type",
      price: "From $85",
      originalPrice: "$120",
      image:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=500&fit=crop",
      popular: true,
      duration: "60-90 min",
      gradient: "from-pink-500 to-rose-500",
      features: ["Expert Stylists", "Premium Products", "Complimentary Drink"],
    },
    {
      id: 2,
      icon: "💅",
      title: "Manicure & Pedicure",
      description:
        "Pampering hand and foot treatments with premium gels and relaxing massage",
      price: "From $65",
      originalPrice: "$90",
      image:
        "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&h=500&fit=crop",
      popular: true,
      duration: "75 min",
      gradient: "from-purple-500 to-pink-500",
      features: ["Paraffin Treatment", "Hot Stone Massage", "Long-lasting Gel"],
    },
    {
      id: 3,
      icon: "💆‍♀️",
      title: "Spa Facial",
      description:
        "Rejuvenating facials customized for your skin type with organic ingredients",
      price: "From $95",
      originalPrice: "$130",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=500&fit=crop",
      popular: true,
      duration: "60 min",
      gradient: "from-teal-500 to-emerald-500",
      features: ["Deep Cleansing", "Anti-aging Mask", "Face Massage"],
    },
    {
      id: 4,
      icon: "💄",
      title: "Makeup Artistry",
      description:
        "Flawless makeup application for any occasion using luxury brands",
      price: "From $75",
      originalPrice: "$110",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=500&fit=crop",
      popular: false,
      duration: "45-60 min",
      gradient: "from-orange-500 to-pink-500",
      features: ["Airbrush Option", "Lash Application", "Touch-up Kit"],
    },
    {
      id: 5,
      icon: "✂️",
      title: "Hair Treatment",
      description:
        "Restorative hair treatments for damaged, dry, or color-treated hair",
      price: "From $55",
      originalPrice: "$80",
      image:
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=500&fit=crop",
      popular: false,
      duration: "45 min",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Keratin Boost", "Scalp Massage", "Heat Protection"],
    },
    {
      id: 6,
      icon: "👰",
      title: "Bridal Package",
      description:
        "Complete bridal transformation including trial session and day-of service",
      price: "From $350",
      originalPrice: "$500",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=500&fit=crop",
      popular: true,
      duration: "3-4 hours",
      gradient: "from-red-500 to-pink-500",
      features: ["Trial Session", "Group Discount", "Champagne Service"],
    },
    {
      id: 7,
      icon: "🌿",
      title: "Body Treatment",
      description:
        "Exfoliating scrubs and hydrating wraps for silky smooth skin",
      price: "From $120",
      originalPrice: "$160",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=500&fit=crop",
      popular: false,
      duration: "90 min",
      gradient: "from-green-500 to-teal-500",
      features: ["Full Body Scrub", "Hydrating Wrap", "Aromatherapy"],
    },
    {
      id: 8,
      icon: "👑",
      title: "VIP Experience",
      description:
        "Ultimate luxury package with premium services and private suite",
      price: "From $499",
      originalPrice: "$750",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=500&fit=crop",
      popular: true,
      duration: "Half-day",
      gradient: "from-yellow-500 to-red-500",
      features: ["Private Suite", "Champagne Bar", "Personal Assistant"],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-pink-50 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b8b' fill-opacity='0.15'%3E%3Cpath d='M40 20 L45 35 L60 35 L48 45 L52 60 L40 50 L28 60 L32 45 L20 35 L35 35 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-6 py-2 mb-6 shadow-sm">
            <span className="text-2xl">✨</span>
            <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">
              Premium Services
            </span>
            <span className="text-2xl">✨</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Indulge in Luxury
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Experience our curated collection of premium beauty treatments,
            designed to rejuvenate, transform, and celebrate your unique beauty
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                    ⭐ Most Popular
                  </div>
                )}

                {/* Duration Badge */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                  ⏱️ {service.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Icon */}
                <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 mt-2 group-hover:text-pink-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-full"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {service.price}
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    {service.originalPrice}
                  </span>
                </div>

                {/* Book Now Button */}
                <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  <span>Book Now</span>
                  <span className="transform group-hover/btn:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-pink-200 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              View Full Service Menu
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-pink-300 text-pink-600 rounded-full font-semibold hover:bg-pink-50 hover:border-pink-400 transition-all duration-300 inline-flex items-center gap-2"
            >
              Request Consultation
              <span>💬</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> 5000+ Happy Clients
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> 100% Satisfaction
              Guarantee
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Premium Products Used
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Certified Experts
            </div>
          </div>
        </div>
      </div>

      {/* Add these styles to your global CSS or Tailwind config */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Services;

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        blob: "blob 7s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
};
