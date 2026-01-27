import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import req from "../../assets/images/reqInfo.png";
import Program from "./Program";
import Events from "./Events";
import TestimonialTab from "./TestimonialTab";
import Gallery from "./Gallery";
import Overview from "./Overview";
import { FaMapMarkerAlt } from "react-icons/fa";
import Jobs from "./Jobs";
import UniProgramDetails from "./UniProgramDetails";

import UniEventsDetails from "./UniEventsDetails";

export default function UniversityTab({ data, setShowApply }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedProgramId, setSelectedProgramId] = useState(null);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  console.log(data);
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

  // Campus locations data from API
  const campuses = data?.locations || [];

  function openMap(address) {
    if (!address) return;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="bg-base">
      {/* Navigation Tabs */}
      <div className="">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 font-medium border-b-2 transition-colors ${activeTab === "overview"
                ? "border-blue text-blue"
                : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
            >
              Overview
            </button>
            <button
              onClick={() => {
                setActiveTab("programs");
                setSelectedProgramId(null);
              }}
              className={`py-4 font-medium border-b-2 transition-colors ${activeTab === "programs"
                ? "border-blue text-blue"
                : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
            >
              Programs
            </button>
            <button
              onClick={() => {
                setActiveTab("events");
                setSelectedEventId(null);
              }}
              className={`py-4 font-medium border-b-2 transition-colors ${activeTab === "events"
                ? "border-blue text-blue"
                : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveTab("jobs")}
              className={`py-4 font-medium border-b-2 transition-colors ${activeTab === "jobs"
                ? "border-blue text-blue"
                : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
            >
              Jobs
            </button>
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`py-4 font-medium border-b-2 transition-colors ${activeTab === "testimonials"
                ? "border-blue text-blue"
                : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`py-4 font-medium border-b-2 transition-colors ${activeTab === "gallery"
                ? "border-blue text-blue"
                : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
            >
              Student Life
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-10/12 mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Content - Tabs */}
          <div className="col-span-2 space-y-6">
            {activeTab === "overview" && <Overview data={data} />}

            {activeTab === "programs" && (
              <>
                {selectedProgramId ? (
                  <UniProgramDetails
                    UniData={data}
                    programId={selectedProgramId}
                    onBack={() => setSelectedProgramId(null)}
                  />
                ) : (
                  <Program
                    data={data}
                    onViewDetails={(id) => setSelectedProgramId(id)}
                  />
                )}
              </>
            )}

            {activeTab === "events" && (
              <>
                {selectedEventId ? (
                  <UniEventsDetails
                    eventId={selectedEventId}
                    univId={data?.id}
                    onBack={() => setSelectedEventId(null)}
                  />
                ) : (
                  <Events
                    data={data}
                    onViewDetails={(id) => setSelectedEventId(id)}
                  />
                )}
              </>
            )}

            {activeTab === "jobs" && <Jobs data={data} />}

            {activeTab === "testimonials" && <TestimonialTab data={data} />}

            {activeTab === "gallery" && <Gallery data={data} />}
          </div>

          {/* Right Sidebar - Request Information (Stable) */}
          <div className="space-y-6">
            <div className="sticky top-16">
              <div className="bg-white rounded-lg p-6 shadow-sm ">
                {" "}
                <h3 className="text-lg font-bold mb-3">Request Information</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Interested in learning more about {data?.univ_name || "the university"}? Fill out
                  the form and a university representative will contact you!
                </p>
                <button
                  onClick={() => setShowApply(true)}
                  className="w-full bg-blue text-white py-3 rounded-lg font-medium transition-colors mb-3"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => setShowRequestForm(true)}
                  className="w-full border border-blue text-blue hover:bg-blue/5 py-3 rounded-lg font-medium transition-colors"
                >
                  Request Information
                </button>
              </div>
              {/* Campus Locations */}
              <div
                className="mt-6 pt-6 rounded-xl p-6"
                style={{
                  backgroundImage: `url(${req})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="space-y-8">
                  {campuses.map((c, index) => (
                    <div
                      key={c.id || index}
                      className="flex items-start gap-3 cursor-pointer hover:bg-white/10 rounded-md p-2"
                      role="button"
                      tabIndex={0}
                      onClick={() => openMap(c.address)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                          openMap(c.address);
                      }}
                      aria-label={`Open ${c.location_name} in Google Maps`}
                    >
                      <div className=" bg-blue/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <FaMapMarkerAlt className="text-blue text-xl mt-1 flex-shrink-0" />
                      </div>
                      <div>
                        <p className="font-medium ">{c.location_name}</p>
                        <p className=" text-gray-600">{c.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Request Information Modal */}
      {showRequestForm && createPortal(
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[99999999] p-4">
          <div className="bg-white rounded-lg w-full max-w-md relative shadow-2xl border border-gray-100">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Request Information</h2>
                <button
                  onClick={() => setShowRequestForm(false)}
                  className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-full transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+123 456 7890"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Program of Interest
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition-all"
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
                  ></textarea>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-blue text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors shadow-md"
                >
                  Send Message
                </button>
                <button
                  onClick={() => setShowRequestForm(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-bold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
