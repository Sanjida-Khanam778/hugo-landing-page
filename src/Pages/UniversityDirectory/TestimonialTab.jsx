import React from "react";
import comment from "../../assets/images/comment.png";
import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";
export default function TestimonialTab() {
  return (
    <div>
      {/* Testimonials Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-2xl font-bold mb-6">Student Testimonials</h2>

        {/* Testimonial 1 */}
        <div className="mb-8 bg-base p-4 rounded-lg">
          <div className="flex gap-4 mb-4">
            <div>
              <img className="w-16" src={comment} alt="" />
            </div>
            <p className="text-gray-700 text-base pt-2">
              My time at Harvard Business School transformed my career
              trajectory and provided me with an incredible network of peers and
              mentors.
            </p>
          </div>
          <div className="flex items-center gap-3 ml-16">
            <img src={profile2} alt="" />
            <div>
              <p className="font-semibold text-sm">Sarah Johnson</p>
              <p className="text-sm text-gray-600">MBA , Class of 2022</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className=" bg-base p-4 rounded-lg">
          <div className="flex gap-4 mb-4">
            <div>
              <img className="w-16" src={comment} alt="" />
            </div>
            <p className="text-gray-700 text-base pt-2">
              The research opportunities and faculty mentorship at Harvard
              prepared me exceptionally well for my career in AI research.
            </p>
          </div>
          <div className="flex items-center gap-3 ml-16">
            <img src={profile1} alt="" />
            <div>
              <p className="font-semibold text-sm">David Chen</p>
              <p className="text-sm text-gray-600">
                Computer Science , Class of 2021
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Add Testimonial Button */}
      <div className="flex justify-end my-6">
        <button className="bg-blue hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm transition-colors">
          Add your Testimonials
        </button>
      </div>

      {/* Add Testimonial Form */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Student Testimonials</h2>

        <div className="mb-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <textarea
                placeholder="My time at ..."
                rows="6"
                className="w-full px-4 pl-16 py-4 bg-base rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
              ></textarea>
              <div className="absolute top-2 left-2">
                <img src={comment} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-blue text-white px-8 py-2.5 rounded-lg text-sm transition-colors">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
