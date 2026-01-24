"use client";

import { useState, useEffect } from "react";
import { X, Plus, Calendar } from "lucide-react";
import { useGetJobByIdQuery } from "../../../Api/universityApi";

export default function PostNewJobModal({ job, onSave, onClose }) {
  const { data: jobSingle } = useGetJobByIdQuery(job?.id, { skip: !job?.id });

  const [formData, setFormData] = useState({
    title: "",
    company_name: "",
    department: "",
    job_type: "Full Time",
    location: "",
    salary: "",
    description: "",
    posted_date: new Date().toISOString().split("T")[0],
    deadline: "",
    responsibilities: [],
    requirements: [],
    qualifications: [],
    benefits: [],
    application_process: [],
    contact_email: "",
  });

  useEffect(() => {
    // Priority: use jobSingle (detailed data) if available, otherwise fallback to job (summary data)
    const source = jobSingle || job;
    if (source) {
      setFormData({
        id: source.id,
        title: source.title || "",
        company_name: source.company_name || "",
        department: source.department || "",
        job_type: source.job_type || source.type || "Full Time",
        location: source.location || "",
        salary: source.salary || "",
        description: source.description || source.jobDescription || "",
        posted_date: source.posted_date || new Date().toISOString().split("T")[0],
        deadline: source.deadline || "",
        responsibilities: source.responsibilities || [],
        requirements: source.requirements || [],
        qualifications: source.qualifications || [],
        benefits: source.benefits || [],
        application_process: source.application_process || source.applicationProcess || [],
        contact_email: source.contact_email || source.contact?.email || "",
      });
    }
  }, [job, jobSingle]);

  const [currentListInputs, setCurrentListInputs] = useState({
    responsibilities: "",
    requirements: "",
    qualifications: "",
    benefits: "",
    application_process: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleListInput = (field, value) => {
    setCurrentListInputs({ ...currentListInputs, [field]: value });
  };

  const addToList = (field) => {
    if (currentListInputs[field].trim()) {
      setFormData({
        ...formData,
        [field]: [...(formData[field] || []), currentListInputs[field]],
      });
      setCurrentListInputs({ ...currentListInputs, [field]: "" });
    }
  };

  const removeFromList = (field, index) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-[#F5E6E3] to-[#DEF0EC] border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
          <h2 className="text-xl font-bold text-gray-900">
            {job ? "Edit Job" : "Post New Job"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl transition-colors"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title and Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1.5">Job Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="e.g., Research Assistant"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1.5">Company Name</label>
              <input
                type="text"
                value={formData.company_name}
                onChange={(e) => handleInputChange("company_name", e.target.value)}
                placeholder="e.g., University of Dhaka"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                required
              />
            </div>
          </div>

          {/* Department and Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1.5">Department</label>
              <input
                type="text"
                value={formData.department}
                onChange={(e) => handleInputChange("department", e.target.value)}
                placeholder="e.g., Computer Science"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1.5">Job Type</label>
              <select
                value={formData.job_type}
                onChange={(e) => handleInputChange("job_type", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue appearance-none bg-white"
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>

          {/* Location and Salary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1.5">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="e.g., Remote / Dhaka, BD"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1.5">Contact Email</label>
              <input
                type="email"
                value={formData.contact_email}
                onChange={(e) => handleInputChange("contact_email", e.target.value)}
                placeholder="e.g., recruitment@dhaka.edu"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1.5">Salary / Range</label>
              <input
                type="text"
                value={formData.salary}
                onChange={(e) => handleInputChange("salary", e.target.value)}
                placeholder="e.g., $40 per hour"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1.5">Posted Date</label>
              <input
                type="date"
                value={formData.posted_date}
                onChange={(e) => handleInputChange("posted_date", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1.5">Application Deadline</label>
            <input
              type="date"
              value={formData.deadline}
              onChange={(e) => handleInputChange("deadline", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1.5">Job Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Detailed job description..."
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
              required
            />
          </div>

          {/* List Fields Helper */}
          {[
            { id: "responsibilities", label: "Responsibilities", placeholder: "e.g., Managing project timelines" },
            { id: "requirements", label: "Requirements", placeholder: "e.g., 3+ years experience" },
            { id: "qualifications", label: "Preferred Qualifications", placeholder: "e.g., PMP certification" },
            { id: "benefits", label: "Benefits", placeholder: "e.g., Flexible working hours" },
            { id: "application_process", label: "Application Process", placeholder: "e.g., Send your resume" },
          ].map((listField) => (
            <div key={listField.id}>
              <label className="block font-semibold text-gray-700 mb-1.5">{listField.label}</label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={currentListInputs[listField.id]}
                  onChange={(e) => handleListInput(listField.id, e.target.value)}
                  placeholder={listField.placeholder}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addToList(listField.id))}
                />
                <button
                  type="button"
                  onClick={() => addToList(listField.id)}
                  className="bg-blue text-white px-5 py-2 rounded-lg hover:bg-blue-600 font-bold shadow-sm transition-colors"
                >
                  Add
                </button>
              </div>
              <div className="space-y-2">
                {formData[listField.id]?.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-gray-50 border border-gray-100 p-3 rounded-lg group">
                    <span className="text-sm text-gray-700">{item}</span>
                    <button
                      type="button"
                      onClick={() => removeFromList(listField.id, idx)}
                      className="text-red-400 hover:text-red-600 p-1 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Buttons */}
          <div className="flex gap-3 justify-end pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 border border-gray-300 rounded-lg font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-2.5 bg-blue text-white rounded-lg font-bold shadow-md hover:bg-blue-600 transition-all"
            >
              {job ? "Update Job" : "Post Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
