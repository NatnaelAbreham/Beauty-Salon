import React, { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { Calendar, Clock, User, Mail, Phone, Scissors, Sparkles, Heart, Star, Gift } from 'lucide-react'

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
  const [selectedService, setSelectedService] = useState(null)
  const [sectionRef, isVisible] = useScrollAnimation()

  const services = [
    { id: 'hair-styling', name: 'Hair Styling', icon: Scissors, price: '$49+', duration: '1h', color: 'from-amber-400 to-rose-400' },
    { id: 'makeup', name: 'Professional Makeup', icon: Sparkles, price: '$79+', duration: '1.5h', color: 'from-pink-400 to-purple-400' },
    { id: 'skincare', name: 'Skincare & Facials', icon: Heart, price: '$89+', duration: '1h', color: 'from-emerald-400 to-teal-400' },
    { id: 'nail-care', name: 'Nail Care', icon: Star, price: '$39+', duration: '45min', color: 'from-violet-400 to-fuchsia-400' }
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleServiceSelect = (service) => {
    setSelectedService(service.id)
    setFormData({
      ...formData,
      service: service.id
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`✨ Thank you ${formData.name}! Your glamorous appointment has been booked. A confirmation will be sent to ${formData.email} ✨`)
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    })
    setSelectedService(null)
  }

  return (
    <section id="booking" className="relative py-24 overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={sectionRef} className={`text-center mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full mb-4 shadow-lg">
            <Gift className="w-4 h-4" />
            <span className="text-sm font-semibold">✨ LIMITED TIME OFFER: 20% OFF FIRST VISIT ✨</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
            Book Your Glow-Up
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience luxury and transformation. Reserve your moment of beauty with us.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Service Selection & Info */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Choose Your Experience</h3>
                  <p className="text-gray-300">Select from our signature services</p>
                </div>

                <div className="space-y-4 mb-8">
                  {services.map((service) => {
                    const Icon = service.icon
                    const isSelected = selectedService === service.id
                    return (
                      <button
                        key={service.id}
                        onClick={() => handleServiceSelect(service)}
                        className={`w-full text-left p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                          isSelected 
                            ? `bg-gradient-to-r ${service.color} shadow-xl` 
                            : 'bg-gray-800 hover:bg-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/20' : 'bg-gray-700'}`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{service.name}</h4>
                              <div className="flex items-center gap-2 text-sm opacity-90">
                                <Clock className="w-3 h-3" />
                                <span>{service.duration}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">{service.price}</div>
                            <div className="text-xs opacity-75">starting at</div>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Complimentary Consultation</p>
                      <p className="text-sm text-gray-300">With every service</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Loyalty Rewards</p>
                      <p className="text-sm text-gray-300">Earn points on every visit</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Booking Form */}
              <div className="p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="group">
                      <label className="block text-gray-700 font-semibold mb-2 text-sm flex items-center gap-2">
                        <User className="w-4 h-4 text-pink-500" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                        placeholder="Your beautiful name"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-gray-700 font-semibold mb-2 text-sm flex items-center gap-2">
                        <Mail className="w-4 h-4 text-pink-500" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                        placeholder="hello@beauty.com"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-gray-700 font-semibold mb-2 text-sm flex items-center gap-2">
                        <Phone className="w-4 h-4 text-pink-500" />
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-gray-700 font-semibold mb-2 text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-pink-500" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                      />
                    </div>
                    <div className="group md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-2 text-sm flex items-center gap-2">
                        <Clock className="w-4 h-4 text-pink-500" />
                        Preferred Time *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({...formData, time})}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                              formData.time === time
                                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg transform scale-105'
                                : 'bg-gray-100 text-gray-700 hover:bg-pink-100'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Special Requests</label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all duration-300 resize-none"
                      placeholder="Tell us about your dream look or any special requirements..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Reserve My Glam Session
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    ✨ We'll send a confirmation to your email within 2 hours ✨
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking