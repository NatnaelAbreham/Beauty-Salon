import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setShowSuccess(true)
    setEmail('')

    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Warm Shine Background */}
      <div className="absolute inset-0">
        {/* Base gradient - dark purple to black */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a1f] via-[#330026] to-[#000000]" />

        {/* Metallic shine overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500/10 to-transparent" />

        {/* Animated light sweep */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/5 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ width: '50%', height: '100%', skewX: '-20deg' }}
        />

        {/* Glowing orbs - pink/gold tones */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        {/* Shimmering grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F9A8D4' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Sparkle particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-400/60 rounded-full"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 5 }}
          />
        ))}

        {/* Diagonal shine stripes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-transparent via-pink-400/10 to-transparent"
              style={{ width: '200%', height: '100%', rotate: '25deg', top: `${i * 50}%`, left: '-50%' }}
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 12, repeat: Infinity, delay: i * 4, ease: "linear" }}
            />
          ))}
        </div>
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 backdrop-blur-[1px]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-amber-400/10 backdrop-blur-md border border-pink-400/30 mb-6 shadow-lg"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-pink-300 to-amber-300 bg-clip-text text-transparent">
              ✨ Exclusive Access ✨
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-white via-pink-200 to-amber-200 bg-clip-text text-transparent">
              Join the
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-amber-400 to-pink-500 bg-clip-text text-transparent">
              Glamour Circle
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-pink-100/80 text-lg mb-8"
          >
            Get VIP access to exclusive offers, beauty tips, and early product launches
          </motion.p>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="relative flex flex-col md:flex-row gap-4">
              <div className="relative flex-1 group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-md border border-pink-400/30 rounded-full text-white placeholder-pink-200/50 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all duration-300 shadow-lg"
                />
                {isFocused && (
                  <motion.div
                    layoutId="input-glow"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-amber-400/20 blur-xl -z-10"
                  />
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 via-pink-500 to-amber-500 text-white font-semibold shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-700 via-amber-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
              </motion.button>
            </div>
          </motion.form>

          {/* Success Message */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 p-4 rounded-lg bg-pink-500/20 backdrop-blur-sm border border-pink-400/50 text-pink-200"
              >
                ✨ Thanks for subscribing! Welcome to the Glamour Circle ✨
              </motion.div>
            )}
          </AnimatePresence>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-sm text-pink-200/60"
          >
            💎 Join 10,000+ beauty VIPs • Exclusive updates • Unsubscribe anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter