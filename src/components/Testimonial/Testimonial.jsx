"use client";
import student1 from "../../assets/images/student1.jpg";
import student2 from "../../assets/images/student2.jpg";
import student3 from "../../assets/images/student3.jpg";
import { useState, useEffect } from "react";
import comment from "../../assets/images/comment.png";
import background from "../../assets/images/background3.png";
const stories = [
  {
    id: 1,
    quote:
      "EduConnect helped me find my dream university abroad. The platform made it easy to compare programs and apply directly. I'm now studying Computer Science at MIT!",
    name: "Sarah Johnson",
    title: "Computer Science Student MIT",
    image: student1,
  },
  {
    id: 2,
    quote:
      "The scholarship finder feature saved me thousands of dollars. I found multiple funding opportunities that matched my profile perfectly. Highly recommend EduConnect!",
    name: "Michael Chen",
    title: "Engineering Student Stanford",
    image: student2,
  },
  {
    id: 3,
    quote:
      "As an international student, navigating university applications was overwhelming. EduConnect's guidance and resources made the entire process smooth and stress-free.",
    name: "Emma Rodriguez",
    title: "Business Student Oxford",
    image: student3,
  },
];

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const story = stories[currentSlide];

  return (
    <section
      className="w-full py-10 md:py-20 bg-contain bg-center relative -top-6 z-50 rounded-t-3xl bg-[#F3F4F6]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Student Success Stories
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from students who found their path to academic success through
            EduConnect
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 xl:px-16 mb-8 relative">
          <div className="flex flex-col">
            {/* Quote Section */}
            <div className="absolute left-2 top-2 sm:top-4">
              <img className="h-8 sm:h-auto" src={comment} alt="" />
            </div>
            <div className="">
              <p className="text-gray-700 sm:text-lg leading-relaxed mb-6">
                " {story.quote} "
              </p>
            </div>

            {/* Student Info */}
            <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:items-end md:justify-between">
              <div className="flex items-center gap-6 justify-start">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {story.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{story.title}</p>
                </div>
              </div>
              {/* Navigation Controls */}
              <div className="flex items-center justify-between">
                {/* Arrow Buttons */}
                <div className="flex gap-3 ml-4">
                  <button
                    onClick={goToPrevious}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors"
                    aria-label="Previous story"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors"
                    aria-label="Next story"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </section>
  );
}
