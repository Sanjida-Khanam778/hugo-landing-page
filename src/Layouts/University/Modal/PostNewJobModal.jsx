"use client";

import { useState } from "react";

export default function PostNewJobModal({ job, onSave, onClose }) {
  const [formData, setFormData] = useState(
    job || {
      title: "",
      department: "",
      type: "",
      category: "",
      salary: "",
      jobDescription: "",
      responsibilities: [],
      requirements: [],
      qualifications: [],
      benefits: [],
      applicationProcess: [],
      admissionRequirements: [],
    }
  );

  const [currentList, setCurrentList] = useState({
    responsibilities: "",
    requirements: "",
    qualifications: "",
    benefits: "",
    applicationProcess: "",
    admissionRequirements: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleListInput = (field, value) => {
    setCurrentList({ ...currentList, [field]: value });
  };

  const addToList = (field) => {
    if (currentList[field].trim()) {
      setFormData({
        ...formData,
        [field]: [...(formData[field] || []), currentList[field]],
      });
      setCurrentList({ ...currentList, [field]: "" });
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
        <div className="sticky top-0 bg-gradient-to-r from-[#F5E6E3] to-[#DEF0EC] border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl text-gray-900">
            {job ? "Edit Job" : "Post New Job"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Info */}
          <div>
            <label className="block font-semibold text-gray-900 mb-2">
              Job Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              placeholder="e.g., Research Assistant"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-900 mb-2">
                Department
              </label>
              <input
                type="text"
                value={formData.department}
                onChange={(e) =>
                  handleInputChange("department", e.target.value)
                }
                placeholder="e.g., Computer Science"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-900 mb-2">
                Job Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => handleInputChange("type", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-900 mb-2">
                Location
              </label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                placeholder="e.g., Research"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-900 mb-2">
                Salary
              </label>
              <input
                type="text"
                value={formData.salary}
                onChange={(e) => handleInputChange("salary", e.target.value)}
                placeholder="e.g., $45,000 - $55,000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold text-gray-900 mb-2">
              Job Description
            </label>
            <textarea
              value={formData.jobDescription}
              onChange={(e) =>
                handleInputChange("jobDescription", e.target.value)
              }
              placeholder="Detailed job description..."
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Responsibilities */}
          <div>
            <label className="block font-semibold text-gray-900 mb-2">
              Responsibilities
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={currentList.responsibilities}
                onChange={(e) =>
                  handleListInput("responsibilities", e.target.value)
                }
                placeholder="Add responsibility"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) =>
                  e.key === "Enter" &&
                  (e.preventDefault(), addToList("responsibilities"))
                }
              />
              <button
                type="button"
                onClick={() => addToList("responsibilities")}
                className="bg-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Add
              </button>
            </div>
            <div className="space-y-2">
              {formData.responsibilities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-base p-3 rounded"
                >
                  <span className="text-sm">{item}</span>
                  <button
                    type="button"
                    onClick={() => removeFromList("responsibilities", idx)}
                    className="text-red text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div>
            <label className="block font-semibold text-gray-900 mb-2">
              Requirements
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={currentList.requirements}
                onChange={(e) =>
                  handleListInput("requirements", e.target.value)
                }
                placeholder="Add requirement"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) =>
                  e.key === "Enter" &&
                  (e.preventDefault(), addToList("requirements"))
                }
              />
              <button
                type="button"
                onClick={() => addToList("requirements")}
                className="bg-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Add
              </button>
            </div>
            <div className="space-y-2">
              {formData.requirements.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-base p-3 rounded"
                >
                  <span className="text-sm">{item}</span>
                  <button
                    type="button"
                    onClick={() => removeFromList("requirements", idx)}
                    className="text-red text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Qualifications */}
          <div>
            <label className="block font-semibold text-gray-900 mb-2">
              Preferred Qualifications
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={currentList.qualifications}
                onChange={(e) =>
                  handleListInput("qualifications", e.target.value)
                }
                placeholder="Add qualification"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) =>
                  e.key === "Enter" &&
                  (e.preventDefault(), addToList("qualifications"))
                }
              />
              <button
                type="button"
                onClick={() => addToList("qualifications")}
                className="bg-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Add
              </button>
            </div>
            <div className="space-y-2">
              {formData.qualifications.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-base p-3 rounded"
                >
                  <span className="text-sm">{item}</span>
                  <button
                    type="button"
                    onClick={() => removeFromList("qualifications", idx)}
                    className="text-red text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <label className="block font-semibold text-gray-900 mb-2">
              Benefits
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={currentList.benefits}
                onChange={(e) => handleListInput("benefits", e.target.value)}
                placeholder="Add benefit"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) =>
                  e.key === "Enter" &&
                  (e.preventDefault(), addToList("benefits"))
                }
              />
              <button
                type="button"
                onClick={() => addToList("benefits")}
                className="bg-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Add
              </button>
            </div>
            <div className="space-y-2">
              {formData.benefits.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-base p-3 rounded"
                >
                  <span className="text-sm">{item}</span>
                  <button
                    type="button"
                    onClick={() => removeFromList("benefits", idx)}
                    className="text-red text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div>
            <label className="block font-semibold text-gray-900 mb-2">
              Application Process
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={currentList.applicationProcess}
                onChange={(e) =>
                  handleListInput("applicationProcess", e.target.value)
                }
                placeholder="Add step"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) =>
                  e.key === "Enter" &&
                  (e.preventDefault(), addToList("applicationProcess"))
                }
              />
              <button
                type="button"
                onClick={() => addToList("applicationProcess")}
                className="bg-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Add
              </button>
            </div>
            <div className="space-y-2">
              {formData.applicationProcess.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-base p-3 rounded"
                >
                  <span className="text-sm">{item}</span>
                  <button
                    type="button"
                    onClick={() => removeFromList("applicationProcess", idx)}
                    className="text-red text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Admission Requirements */}
          <div>
            <label className="block font-semibold text-gray-900 mb-2">
              Admission Deadline
            </label>
            <div className="flex gap-2 mb-3">
              <div className="w-full">
                <label className="block text-gray-900 mb-2 w-full">
                  Posted
                </label>

                <input
                  type="date"
                  value={currentList.admissionRequirements}
                  onChange={(e) =>
                    handleListInput("admissionRequirements", e.target.value)
                  }
                  placeholder="Add requirement"
                  className="flex-1 px-4 py-2 border border-gray-300 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) =>
                    e.key === "Enter" &&
                    (e.preventDefault(), addToList("admissionRequirements"))
                  }
                />
              </div>

              <div className="w-full">
                <label className="block text-gray-900 mb-2">Deadline</label>

                <input
                  type="date"
                  value={currentList.admissionRequirements}
                  onChange={(e) =>
                    handleListInput("admissionRequirements", e.target.value)
                  }
                  placeholder="Add requirement"
                  className="flex-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) =>
                    e.key === "Enter" &&
                    (e.preventDefault(), addToList("admissionRequirements"))
                  }
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-end pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue text-white rounded-lg"
            >
              {job ? "Save Changes" : "Post Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
