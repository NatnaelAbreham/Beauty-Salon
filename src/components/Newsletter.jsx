import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for subscribing with ${email}! You'll receive our latest updates.`)
    setEmail('')
  }

  return (
    <section className="py-16 bg-salon-dark text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-gray-300 mb-8">Stay updated with our latest offers and beauty tips</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-3 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-salon-pink"
          />
          <button type="submit" className="bg-salon-pink text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors font-semibold">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter