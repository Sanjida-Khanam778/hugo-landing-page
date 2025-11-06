import React, { useState } from "react";
import { MapPin, X } from "lucide-react";
import banner from "../../assets/video/banner.mp4";
import shape from "../../assets/images/shape.png";
import Program from "./Program";
import Events from "./Events";
import Testimonial from "../../components/Testimonial/Testimonial";
import TestimonialTab from "./TestimonialTab";
export default function UniversityTab() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setShowRequestForm(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      program: "",
      message: "",
    });
  };

  return (
    <div className="bg-base">
      {/* Navigation Tabs */}
      <div className="">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "overview"
                  ? "border-blue text-blue"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("programs")}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "programs"
                  ? "border-blue text-blue"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Programs
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "events"
                  ? "border-blue text-blue"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "testimonials"
                  ? "border-blue text-blue"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "gallery"
                  ? "border-blue text-blue"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Content - Overview Tab */}
          <div className="col-span-2 space-y-6">
            {activeTab === "overview" && (
              <>
                <div className="inset-0 flex gap-6">
                  <div className="w-1/2 h-full space-y-4">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover rounded-lg"
                    >
                      <source src={banner} type="video/mp4" />
                      {/* <source src={banner} type="video/mp4" /> */}
                    </video>
                    <img src={shape} alt="" />
                  </div>
                  <div className="w-1/2 h-full">
                    {/* About Section */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <h2 className="text-2xl font-bold mb-4">
                        About Harvard University
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        Harvard University is a private Ivy League research
                        university in Cambridge, Massachusetts. Founded in 1636,
                        Harvard is the oldest institution of higher learning in
                        the United States and among the most prestigious in the
                        world.
                      </p>
                    </div>
                    {/* Accreditation Section */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-bold mb-3">Accreditation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Harvard University is accredited by the New England
                        Commission of Higher Education (NECHE).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rankings Section */}
                <div className="rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Rankings</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-[#CCCCCC]">
                      <span className="text-gray-700">
                        QS World University Rankings
                      </span>
                      <span className="text-blue font-semibold">#5</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#CCCCCC]">
                      <span className="text-gray-700">
                        Times Higher Education
                      </span>
                      <span className="text-blue font-semibold">#2</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">
                        U.S. News & World Report
                      </span>
                      <span className="text-blue font-semibold">#1</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "programs" && <Program />}

            {activeTab === "events" && <Events />}

            {activeTab === "testimonials" && <TestimonialTab />}

            {activeTab === "gallery" && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <p className="text-gray-600">
                  Gallery content will be added here...
                </p>
              </div>
            )}
          </div>

          {/* Right Sidebar - Request Information (Stable) */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-8">
              <h3 className="text-lg font-bold mb-3">Request Information</h3>
              <p className="text-sm text-gray-600 mb-4">
                Interested in learning more about Harvard University? Fill out
                the form and a university representative will contact you!
              </p>
              <button
                onClick={() => setShowRequestForm(true)}
                className="w-full bg-blue text-white py-3 rounded-lg font-medium transition-colors"
              >
                Request Information
              </button>

              {/* Campus Locations */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="text-blue-600 mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="font-medium text-sm">1. ABC Campus</p>
                      <p className="text-xs text-gray-600">
                        Road 00, Abc palace, etc
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="text-blue-600 mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="font-medium text-sm">2. ABC Campus</p>
                      <p className="text-xs text-gray-600">
                        Road 00, Abc palace, etc
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="text-blue-600 mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="font-medium text-sm">3. ABC Campus</p>
                      <p className="text-xs text-gray-600">
                        Road 00, Abc palace, etc
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Request Information Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md relative">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Request Information</h2>
                <button
                  onClick={() => setShowRequestForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Program of Interest
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  >
                    <option value="">Select a program</option>
                    <option value="business">Business Administration</option>
                    <option value="cs">Computer Science</option>
                    <option value="engineering">Engineering</option>
                    <option value="medicine">Medicine</option>
                    <option value="law">Law</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
                <button
                  onClick={() => setShowRequestForm(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2.5 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
