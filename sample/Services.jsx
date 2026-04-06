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
      gradient: "from-stone-500 to-stone-700",
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
      gradient: "from-stone-500 to-stone-700",
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
      gradient: "from-stone-500 to-stone-700",
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
      gradient: "from-stone-500 to-stone-700",
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
      gradient: "from-stone-500 to-stone-700",
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
      gradient: "from-stone-500 to-stone-700",
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
      gradient: "from-stone-500 to-stone-700",
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
      gradient: "from-stone-500 to-stone-700",
      features: ["Private Suite", "Champagne Bar", "Personal Assistant"],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-white relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Refined Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-stone-100 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-50 rounded-full filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section - More Refined */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-stone-300"></span>
            <span className="text-stone-400 text-sm font-medium tracking-wider uppercase">
              Signature Services
            </span>
            <span className="w-8 h-px bg-stone-300"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-stone-800 tracking-tight">
            Refined Beauty
          </h2>
          <p className="text-stone-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Curated treatments that honor individuality and enhance natural
            radiance
          </p>
        </div>

        {/* Services Grid - Clean and Sophisticated */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container - Minimalist */}
              <div className="relative h-72 overflow-hidden bg-stone-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Popular Badge - Refined */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-stone-700 px-3 py-1 text-xs font-medium tracking-wide shadow-sm">
                    Editor's Pick
                  </div>
                )}

                {/* Duration Badge - Minimal */}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm text-stone-600 px-2 py-1 text-xs font-light">
                  {service.duration}
                </div>
              </div>

              {/* Content - Clean Typography */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-medium text-stone-800 mb-2 tracking-wide">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-stone-400 text-sm mb-4 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Features - Minimal Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-stone-400 border border-stone-200 px-2 py-1"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price - Refined */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-xl font-medium text-stone-800">
                    {service.price}
                  </span>
                  <span className="text-stone-300 line-through text-sm">
                    {service.originalPrice}
                  </span>
                </div>

                {/* Book Now Button - Minimalist */}
                <button className="w-full py-2.5 border border-stone-200 text-stone-600 text-sm font-medium hover:bg-stone-50 hover:border-stone-300 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  <span>Book Appointment</span>
                  <span className="opacity-0 group-hover/btn:opacity-100 transform translate-x-0 group-hover/btn:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Elegant */}
        <div
          className={`text-center mt-20 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="px-8 py-3 bg-stone-800 text-white text-sm font-medium tracking-wide hover:bg-stone-700 transition-colors duration-300 inline-flex items-center gap-2 group"
            >
              Explore Full Menu
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-stone-200 text-stone-600 text-sm font-medium hover:border-stone-300 hover:text-stone-800 transition-all duration-300 inline-flex items-center gap-2"
            >
              Request Consultation
            </a>
          </div>

          {/* Trust Indicators - Subtle */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-xs text-stone-400 tracking-wide">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
              <span>5,000+ Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
              <span>Premium Products</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
              <span>Certified Experts</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;
