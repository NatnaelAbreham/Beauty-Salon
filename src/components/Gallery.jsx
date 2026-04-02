// src/components/Gallery.jsx - Enhanced version
import React, { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [sectionRef, isVisible] = useScrollAnimation()

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1560869713-7d0a2943084e?w=400&h=400&fit=crop', title: 'Hair Styling', category: 'hair' },
    { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop', title: 'Makeup', category: 'makeup' },
    { src: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=400&h=400&fit=crop', title: 'Skincare', category: 'skincare' },
    // ... more images
  ]

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className={`text-center mb-12 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <span className="text-salon-pink font-semibold">Our Work</span>
          <h2 className="section-title gradient-text">Gallery</h2>
          <p className="section-subtitle">Browse through our stunning transformations and salon experiences</p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12 animate-on-scroll">
          {['All', 'Hair', 'Makeup', 'Skincare'].map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full border-2 border-salon-pink text-salon-pink hover:bg-salon-pink hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm">View Details →</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-salon-pink text-white px-2 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <img src={selectedImage.src} alt={selectedImage.title} className="max-w-full max-h-full rounded-lg" />
            <button className="absolute top-4 right-4 text-white text-2xl hover:text-salon-pink">&times;</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery