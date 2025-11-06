import React from "react";

export default function Testimonial() {
  return (
    <div>
      {/* Testimonials Section */}
      <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
        <h2 className="text-2xl font-bold mb-6">Student Testimonials</h2>

        {/* Testimonial 1 */}
        <div className="mb-8">
          <div className="flex gap-4 mb-4">
            <div className="text-blue-600 text-5xl leading-none">"</div>
            <p className="text-gray-700 text-base pt-2">
              My time at Harvard Business School transformed my career
              trajectory and provided me with an incredible network of peers and
              mentors.
            </p>
          </div>
          <div className="flex items-center gap-3 ml-16">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-sm">Sarah Johnson</p>
              <p className="text-sm text-gray-600">MBA , Class of 2022</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="mb-6">
          <div className="flex gap-4 mb-4">
            <div className="text-blue-600 text-5xl leading-none">"</div>
            <p className="text-gray-700 text-base pt-2">
              The research opportunities and faculty mentorship at Harvard
              prepared me exceptionally well for my career in AI research.
            </p>
          </div>
          <div className="flex items-center gap-3 ml-16">
            <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-sm">David Chen</p>
              <p className="text-sm text-gray-600">
                Computer Science , Class of 2021
              </p>
            </div>
          </div>
        </div>

        {/* Add Testimonial Button */}
        <div className="flex justify-end mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
            Add your Testimonials
          </button>
        </div>
      </div>

      {/* Add Testimonial Form */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Student Testimonials</h2>

        <div className="mb-6">
          <div className="flex gap-4">
            <div className="text-blue-600 text-5xl leading-none">"</div>
            <div className="flex-1">
              <textarea
                placeholder="My time at ..."
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg text-sm font-medium transition-colors">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
