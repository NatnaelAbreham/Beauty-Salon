import React, { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const categories = ["All", "Hair", "Makeup", "Skincare"];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
    title: "Elegant Hair Styling",
    category: "Hair",
  },
  {
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600",
    title: "Professional Makeup",
    category: "Makeup",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600",
    title: "Luxury Skincare",
    category: "Skincare",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600",
    title: "Bridal Look",
    category: "Makeup",
  },
  {
    src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600",
    title: "Hair Coloring",
    category: "Hair",
  },
  {
    src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600",
    title: "Facial Treatment",
    category: "Skincare",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sectionRef, isVisible] = useScrollAnimation();

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section
      className="py-24 bg-gradient-to-b from-pink-50 via-white to-pink-100"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-pink-500 font-semibold tracking-widest uppercase">
            Our Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Beauty Gallery
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Discover our latest transformations and premium beauty services
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-pink-500 text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-pink-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/400x400?text=Beauty")
                }
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-4 translate-y-6 group-hover:translate-y-0 transition duration-300">
                  <h3 className="text-white font-semibold text-lg">
                    {image.title}
                  </h3>
                  <span className="text-pink-300 text-sm">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full rounded-xl"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-pink-400"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
