"use client";

import { useState } from "react";
import TestimonialDetailsModal from "../Modal/TestimonialDetailsModal";
import { CircleCheckBig, CirclePlus } from "lucide-react";

export default function Testimonials() {
  const [viewingTestimonial, setViewingTestimonial] = useState(null);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      author: "Emily Johnson",
      date: "Dec 15, 2023",
      rating: 5,
      program: "Computer Science",
      title: "Transformative Experience",
      content:
        "My MBA has course-changed my changing. The professors were world-class experts with enough real-world experience into the classroom. The university's network has been invaluable for my career progression.",
      status: "pending",
      category: "Student",
    },
    {
      id: 2,
      author: "Sarah Williams",
      date: "Dec 10, 2023",
      rating: 5,
      program: "Business Administration",
      title: "Excellent Research Opportunities",
      content:
        "Exceptional Research Opportunities The interdisciplinary research opportunities have allowed me to work on truly complex advanced problems at the intersection and produce her safety graduate. The facilities and resources are excellent.",
      status: "approved",
      category: "Alumni",
    },
    {
      id: 3,
      author: "James Taylor",
      date: "Dec 8, 2023",
      rating: 4,
      program: "Engineering",
      title: "Well-Rounded Education",
      content:
        "Solid Program and Hands-Leading University and student learning financial foundation, with a strong financial foundation, with a strong financial foundation, and strong working relationships. Strong financial foundation.",
      status: "rejected",
      category: "Faculty",
    },
    {
      id: 4,
      author: "Michael Chen",
      date: "Dec 5, 2023",
      rating: 5,
      program: "Medical Sciences",
      title: "Outstanding Faculty Support",
      content:
        "The faculty members are incredibly supportive and dedicated to student success. They go beyond the curriculum to ensure students understand complex concepts.",
      status: "pending",
      category: "Student",
    },
    {
      id: 5,
      author: "Rachel Brown",
      date: "Dec 1, 2023",
      rating: 4,
      program: "Psychology",
      title: "Great Campus Community",
      content:
        "Wonderful campus community with diverse student body. The extracurricular activities and clubs helped me develop leadership skills.",
      status: "pending",
      category: "Alumni",
    },
    {
      id: 6,
      author: "David Martinez",
      date: "Nov 28, 2023",
      rating: 5,
      program: "Economics",
      title: "Career Development Support",
      content:
        "Excellent career services and alumni network. The university helped me secure my dream internship and job placement.",
      status: "approved",
      category: "Student",
    },
  ]);

  const handleApprove = (id) => {
    setTestimonials(
      testimonials.map((t) => (t.id === id ? { ...t, status: "approved" } : t))
    );
  };

  const handleReject = (id) => {
    setTestimonials(
      testimonials.map((t) => (t.id === id ? { ...t, status: "rejected" } : t))
    );
  };

  const handleDeleteTestimonial = (id) => {
    setTestimonials(testimonials.filter((t) => t.id !== id));
  };

  const pendingTestimonials = testimonials.filter(
    (t) => t.status === "pending"
  );
  const processedTestimonials = testimonials.filter(
    (t) => t.status !== "pending"
  );

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  const getStatusColor = (status) => {
    if (status === "approved") return " text-[#15803D]";
    if (status === "rejected") return "text-[#B91C1C]";
    return "bg-yellow-100 text-yellow-700";
  };

  const getStatusText = (status) => {
    if (status === "approved") return "Approved";
    if (status === "rejected") return "Rejected";
    return "Pending";
  };

  if (showAllTestimonials) {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowAllTestimonials(false)}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back
            </button>
            <h1 className="text-3xl font-bold text-gray-900">
              All Testimonials
            </h1>
          </div>
        </div>

        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-gray-900">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.date}</p>
                  <p className="text-sm text-gray-600">{testimonial.program}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    testimonial.status
                  )}`}
                >
                  {getStatusText(testimonial.status)}
                </span>
              </div>

              <div className="mb-2">
                <span className="text-sm">
                  {renderStars(testimonial.rating)}
                </span>
              </div>

              <h4 className="font-semibold text-gray-900 mb-2">
                {testimonial.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                {testimonial.content.substring(0, 150)}...
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setViewingTestimonial(testimonial)}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleDeleteTestimonial(testimonial.id)}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                {testimonial.status==="approved"? "Unpublish": ""} 
                </button>
              </div>
            </div>
          ))}
        </div>

        {viewingTestimonial && (
          <TestimonialDetailsModal
            testimonial={viewingTestimonial}
            onClose={() => setViewingTestimonial(null)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="p-6 font-inter">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Testimonial Moderation
        </h1>
        <button
          onClick={() => setShowAllTestimonials(true)}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          All Testimonials
        </button>
      </div>

      {/* Pending Review Section */}
      <div className="mb-12 border p-4 bg-white rounded-xl ">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Pending Review ({pendingTestimonials.length})
        </h2>

        <div className="space-y-4">
          {pendingTestimonials.length > 0 ? (
            pendingTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm text-gray-600">
                    {testimonial.program}
                    </p>
                    <span className="text-sm">
                      {renderStars(testimonial.rating)}
                    </span> <span>Submitted on:  {testimonial.date}</span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleApprove(testimonial.id)}
                      className="bg-[#DCFCE7] text-[#15803D] px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                    >
                     <CircleCheckBig size={18} strokeWidth={2.75} /> Approve
                    </button>
                    <button
                      onClick={() => handleReject(testimonial.id)}
                      className="bg-[#FEE2E2] text-[#B91C1C] px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      <CirclePlus size={18} strokeWidth={2.75} className="rotate-45" /> Reject
                    </button>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-900 mb-2">
                  {testimonial.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {testimonial.content}
                </p>

                <div className="flex gap-3 flex-wrap mb-3">
                  <button
                    onClick={() => setViewingTestimonial(testimonial)}
                    className="text-blue text-sm font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center py-8">
              No pending testimonials
            </p>
          )}
        </div>
      </div>

      {/* Recently Processed Section */}
      <div className="bg-white p-4 rounded-xl">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Recently Processed
        </h2>

        <div className="space-y-4">
          {processedTestimonials.length > 0 ? (
            processedTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`rounded-lg p-6 shadow-sm border border-gray-200 ${
                  testimonial.status === "approved"
                    ? "bg-[#F0FDF4]"
                    : "bg-[#FEF2F2]"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.date} • {testimonial.program}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 flex items-center gap-2 rounded-full text-sm font-medium ${getStatusColor(
                      testimonial.status
                    )}`}
                  >
                   <CircleCheckBig size={18} strokeWidth={2.75} />   {getStatusText(testimonial.status)}
                  </span>
                 
                </div>

                <div className="mb-2">
                  <span className="text-sm">
                    {renderStars(testimonial.rating)}
                  </span>
                </div>

                <h4 className="font-semibold text-gray-900 mb-2">
                  {testimonial.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {testimonial.content.substring(0, 120)}...
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setViewingTestimonial(testimonial)}
                    className="text-blue text-sm font-medium"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleDeleteTestimonial(testimonial.id)}
                    className={`${testimonial.status === "approved" ? "text-[#B91C1C]": "text-[#15803D]"} text-red-600 hover:text-red-700 text-sm font-medium`}
                  >
                    {testimonial.status === "approved" ? "Unpublish" : "Reconsider"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center py-8">
              No processed testimonials
            </p>
          )}
        </div>
      </div>

      {/* Testimonial Details Modal */}
      {viewingTestimonial && (
        <TestimonialDetailsModal
          testimonial={viewingTestimonial}
          onClose={() => setViewingTestimonial(null)}
        />
      )}
    </div>
  );
}
