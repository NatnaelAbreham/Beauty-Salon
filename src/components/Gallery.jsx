import React, { useState, useEffect } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Hair", "Makeup", "Skincare", "Nails", "Bridal"];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800",
    title: "Luxurious Hair Styling",
    category: "Hair",
    description: "Transform your look with our expert stylists",
    featured: true,
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
    title: "Flawless Bridal Makeup",
    category: "Makeup",
    description: "Perfect for your special day",
    featured: true,
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800",
    title: "Rejuvenating Facial",
    category: "Skincare",
    description: "Glowing skin starts here",
    featured: false,
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800",
    title: "Elegant Bridal Look",
    category: "Bridal",
    description: "Complete bridal transformation",
    featured: true,
  },
  {
    src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800",
    title: "Vibrant Hair Colors",
    category: "Hair",
    description: "Express your personality",
    featured: false,
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800",
    title: "Luxury Skincare Ritual",
    category: "Skincare",
    description: "Premium organic treatments",
    featured: false,
  },
  {
    src: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=800",
    title: "Perfect Nail Art",
    category: "Nails",
    description: "Intricate designs & care",
    featured: false,
  },
  {
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800",
    title: "Celebrity Makeup",
    category: "Makeup",
    description: "Red carpet ready",
    featured: true,
  },
  {
    src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800",
    title: "Manicure & Pedicure",
    category: "Nails",
    description: "Pamper your hands and feet",
    featured: false,
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sectionRef, isVisible] = useScrollAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const featuredImages = galleryImages.filter((img) => img.featured);

  // Preload images
  useEffect(() => {
    const imagePromises = galleryImages.map((img) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = img.src;
        image.onload = resolve;
        image.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative py-24 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50"
      id="gallery"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with enhanced animation */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg">
              ✨ Our Portfolio ✨
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 text-transparent bg-clip-text">
            Beauty Gallery
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our latest transformations and premium beauty services
          </p>
        </motion.div>

        {/* Featured Images Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Featured Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredImages.slice(0, 2).map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-gray-200">{image.description}</p>
                    <span className="inline-block mt-3 px-3 py-1 bg-pink-500 rounded-full text-sm">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modern Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "text-white"
                  : "bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-pink-100"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid with Masonry Effect */}
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative break-inside-avoid cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Modern Overlay with Glassmorphism */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end">
                    <div className="p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-bold text-xl mb-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-200 text-sm mb-3">
                        {image.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-pink-300 text-sm font-semibold">
                          {image.category}
                        </span>
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 8h16M4 16h16"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {image.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full overflow-hidden shadow-2xl hover:shadow-xl transition-all duration-300">
            <span className="relative z-10">Book Your Appointment</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </motion.div>
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full rounded-2xl shadow-2xl"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-200">{selectedImage.description}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-pink-500 rounded-full text-sm text-white">
                  {selectedImage.category}
                </span>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl hover:bg-pink-500 transition-colors"
              >
                ×
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredImages.findIndex(
                    (img) => img.src === selectedImage.src,
                  );
                  const prevIndex =
                    currentIndex === 0
                      ? filteredImages.length - 1
                      : currentIndex - 1;
                  setSelectedImage(filteredImages[prevIndex]);
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl hover:bg-pink-500 transition-colors"
              >
                ‹
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredImages.findIndex(
                    (img) => img.src === selectedImage.src,
                  );
                  const nextIndex =
                    currentIndex === filteredImages.length - 1
                      ? 0
                      : currentIndex + 1;
                  setSelectedImage(filteredImages[nextIndex]);
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl hover:bg-pink-500 transition-colors"
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
