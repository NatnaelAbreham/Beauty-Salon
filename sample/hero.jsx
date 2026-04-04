import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Luxury Hair Styling",
    description:
      "Precision cuts, balayage, and premium styling tailored to your personality.",
    price: "From $60",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
    tag: "Popular",
  },
  {
    id: 2,
    title: "Glow Facial Therapy",
    description:
      "Deep cleansing and hydrating facials for radiant, youthful skin.",
    price: "From $45",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800",
  },
  {
    id: 3,
    title: "Nail Art & Manicure",
    description: "Trendy nail designs, gel polish, and luxury hand care.",
    price: "From $30",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800",
  },
  {
    id: 4,
    title: "Makeup Studio",
    description: "Professional makeup for events, weddings, and photoshoots.",
    price: "From $80",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 text-transparent bg-clip-text">
            Our Premium Services
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Indulge in luxury beauty treatments designed to enhance your natural
            elegance and confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Tag */}
              {service.tag && (
                <span className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  {service.tag}
                </span>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-500 transition">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-pink-500 font-bold">
                    {service.price}
                  </span>
                  <button className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600">
                    Book
                  </button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-pink-200/20 to-transparent"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
