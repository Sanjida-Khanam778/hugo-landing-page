"use client"

import { useState, useEffect } from "react"

const stories = [
  {
    id: 1,
    quote:
      "EduConnect helped me find my dream university abroad. The platform made it easy to compare programs and apply directly. I'm now studying Computer Science at MIT!",
    name: "Sarah Johnson",
    title: "Computer Science Student MIT",
    image: "/student-sarah.jpg",
  },
  {
    id: 2,
    quote:
      "The scholarship finder feature saved me thousands of dollars. I found multiple funding opportunities that matched my profile perfectly. Highly recommend EduConnect!",
    name: "Michael Chen",
    title: "Engineering Student Stanford",
    image: "/student-michael.jpg",
  },
  {
    id: 3,
    quote:
      "As an international student, navigating university applications was overwhelming. EduConnect's guidance and resources made the entire process smooth and stress-free.",
    name: "Emma Rodriguez",
    title: "Business Student Oxford",
    image: "/student-emma.jpg",
  },
]

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const story = stories[currentSlide]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Student Success Stories</h2>
          <p className="text-gray-600 text-lg">
            Hear from students who found their path to academic success through EduConnect
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Quote Section */}
            <div className="flex-1">
              <div className="text-5xl text-blue-500 mb-4">"</div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{story.quote}</p>
              <p className="text-gray-500 text-sm">"</p>
            </div>

            {/* Student Info */}
            <div className="flex flex-col items-center md:items-start justify-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-gray-200">
                <img src={story.image || "/placeholder.svg"} alt={story.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
              <p className="text-gray-600 text-sm">{story.title}</p>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          {/* Dot Indicators */}
          <div className="flex gap-2 justify-center flex-1">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-blue-500 w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex gap-3 ml-4">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors"
              aria-label="Previous story"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors"
              aria-label="Next story"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
