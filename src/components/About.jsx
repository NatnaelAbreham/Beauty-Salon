import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const About = () => {
  const [leftRef, leftVisible] = useScrollAnimation()
  const [rightRef, rightVisible] = useScrollAnimation()

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={leftRef} className={`relative animate-on-scroll ${leftVisible ? 'visible' : ''}`}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=300&h=400&fit=crop"
                alt="Salon interior"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=400&fit=crop"
                alt="Salon treatment"
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&h=400&fit=crop"
                alt="Salon products"
                className="rounded-2xl shadow-lg w-full h-64 object-cover -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&h=400&fit=crop"
                alt="Salon service"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-salon-pink/20 to-transparent rounded-2xl"></div>
          </div>

          <div ref={rightRef} className={`animate-on-scroll ${rightVisible ? 'visible' : ''}`}>
            <span className="text-salon-pink font-semibold">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Your Journey to Beauty Starts Here</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, Glamour Haven has been at the forefront of beauty innovation, combining traditional 
              techniques with modern trends to deliver exceptional results.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of certified professionals is passionate about helping you look and feel your best. We use only 
              premium, cruelty-free products and maintain the highest standards of hygiene and safety.
            </p>

            <div className="space-y-3 mb-8">
              {['Certified & Experienced Professionals', 'Premium Quality Products', 'Luxurious & Relaxing Environment'].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-salon-pink rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a href="#booking" className="btn-primary">Book Your Experience</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About