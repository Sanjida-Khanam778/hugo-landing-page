"use client"
import background from "../../assets/images/background2.png";
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="w-full bg-[#002B5B] py-16 md:py-24 bg-cover bg-center z-0" style={{ backgroundImage: `url(${background})` }}>
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Content Container */}
        <div className="text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Educational Opportunities
          </h2>

          {/* Subtitle */}
          <p className="text-[#BFDBFE] text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive the latest news about universities, scholarships, and exclusive
            events directly to your inbox.
          </p>

          {/* Email Input and Subscribe Button */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 mb-6 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#0047E9] hover:shadow-lg hover:scale-105 transition-transform text-white font-semibold rounded-lg duration-200"
            >
              Subscribe
            </button>
          </form>

          {/* Success Message */}
          {subscribed && <p className="text-green-300 text-sm mb-4">Thank you for subscribing!</p>}

          {/* Privacy Notice */}
          <p className="text-[#BFDBFE] text-sm">
            We respect your privacy and will never share your information. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
