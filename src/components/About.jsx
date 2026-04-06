import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const features = [
  'Certified & Experienced Professionals',
  'Premium Quality Products',
  'Luxurious & Relaxing Environment',
]

const About = () => {
  const [leftRef, leftVisible] = useScrollAnimation()
  const [rightRef, rightVisible] = useScrollAnimation()

  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-pink-50 to-white overflow-hidden">
      {/* Decorative floating gradient shapes */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-200 rounded-full opacity-30 blur-3xl animate-spin-slow"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-pink-300 rounded-full opacity-20 blur-2xl animate-spin-slow-reverse"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image Collage */}
          <div
            ref={leftRef}
            className={`relative grid grid-cols-2 gap-4 transform transition-all duration-1000 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {[ 
              'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&h=600&fit=crop',
              'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&h=600&fit=crop',
              'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&h=600&fit=crop',
              'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&h=600&fit=crop',
            ].map((src, idx) => (
              <div key={idx} className={`relative group`}>
                <img
                  src={src}
                  alt={`Salon image ${idx + 1}`}
                  loading="lazy"
                  className={`rounded-3xl shadow-2xl w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-300/20 to-transparent rounded-3xl pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div
            ref={rightRef}
            className={`transform transition-all duration-1000 ${
              rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <span className="text-pink-500 font-semibold uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-gray-800">
              Your Journey to Beauty Starts Here
            </h2>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              Founded in 2015, Glamour Haven has been redefining beauty with a perfect blend of tradition and modern innovation. 
              Our mission is to make every client feel confident and radiant.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              With a team of certified professionals, we use only premium, cruelty-free products, ensuring the highest standards 
              of hygiene and luxury.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-4 opacity-0 animate-fadeInUp"
                  style={{ animationDelay: `${idx * 200}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="w-7 h-7 bg-pink-500 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Call-to-action */}
            <a
              href="#booking"
              className="inline-block px-8 py-4 bg-pink-500 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Book Your Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About