import React, { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Regular Client',
    text: 'Absolutely amazing experience! The staff is incredibly professional and made me feel so comfortable. My hair has never looked better. Highly recommend Glamour Haven!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Emily Rodriguez',
    role: 'Bridal Client',
    text: 'The best makeup artist I\'ve ever worked with! Did my bridal makeup and I felt like a princess. The attention to detail is impeccable. Thank you for making my day special!',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Spa Client',
    text: 'Great atmosphere and professional service. The facial treatment was incredibly relaxing and my skin looks radiant. Will definitely be coming back!',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5
  }
]

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sectionRef, isVisible] = useScrollAnimation()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className={`text-center mb-12 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <span className="text-salon-pink font-semibold">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Don't just take our word for it - hear from our satisfied clients</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-salon-pink text-4xl mb-4">"</div>
            <p className="text-gray-700 text-lg mb-6">{testimonials[currentSlide].text}</p>
            <h4 className="font-bold text-xl">{testimonials[currentSlide].name}</h4>
            <p className="text-gray-500">{testimonials[currentSlide].role}</p>
            <div className="flex justify-center mt-4">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-salon-pink hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-salon-pink hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? 'bg-salon-pink w-6 opacity-100'
                    : 'bg-gray-300 opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials