import React, { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })
  const [sectionRef, isVisible] = useScrollAnimation()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you ${formData.name}! Your appointment request has been sent. We'll contact you shortly.`)
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    })
  }

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className={`text-center mb-12 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <span className="text-salon-pink font-semibold">Book Now</span>
          <h2 className="section-title">Schedule Your Appointment</h2>
          <p className="section-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-salon-pink transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-salon-pink transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-salon-pink transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Service *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-salon-pink transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="hair-styling">Hair Styling</option>
                  <option value="makeup">Professional Makeup</option>
                  <option value="skincare">Skincare & Facials</option>
                  <option value="nail-care">Nail Care</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-salon-pink transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Time *</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-salon-pink transition-colors"
                >
                  <option value="">Select time</option>
                  <option value="9:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">Special Requests</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-salon-pink transition-colors"
                placeholder="Any specific requirements or questions?"
              />
            </div>
            <div className="mt-8 text-center">
              <button type="submit" className="btn-primary w-full md:w-auto">Book Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Booking