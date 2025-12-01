"use client";

import { useState } from "react";

export default function AddCareerModal({
  onSave,
  onClose,
  initialData = null,
}) {
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      description: "",
      careerPaths: [""],
      employmentRate: "",
      averageSalary: "",
      graduatePlacement: "",
      careerServices: [""],
    }
  );

  const handleSubmit = () => {
    if (!formData.title || !formData.description) {
      alert("Please fill in all required fields");
      return;
    }
    onSave(formData);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">
            {initialData ? "Edit Career Path" : "Add Career Path"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-6">
          <div className="space-y-5">
            <div>
              <label className="block font-semibold text-gray-900 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Describe this career path..."
                rows="4"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              />
            </div>

            <div className="border-t pt-5">
              <h3 className="text-base font-bold text-gray-900 mb-4">
                Career Paths
              </h3>
              <div className="space-y-3">
                {formData.careerPaths.map((path, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={path}
                      onChange={(e) => {
                        const newPaths = [...formData.careerPaths];
                        newPaths[index] = e.target.value;
                        handleChange("careerPaths", newPaths);
                      }}
                      placeholder="e.g., Economic Analyst"
                      className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={() => {
                        const newPaths = formData.careerPaths.filter(
                          (_, i) => i !== index
                        );
                        handleChange("careerPaths", newPaths);
                      }}
                      className="px-3 py-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  onClick={() =>
                    handleChange("careerPaths", [...formData.careerPaths, ""])
                  }
                  className="w-full px-4 py-2.5 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  + Add Career Path
                </button>
              </div>
            </div>

            <div className="border-t pt-5">
              <h3 className="text-base font-bold text-gray-900 mb-4">
                Employment Statistics
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block font-semibold text-gray-900 mb-2">
                    Employment Rate (within 6 months)
                  </label>
                  <input
                    type="text"
                    value={formData.employmentRate}
                    onChange={(e) =>
                      handleChange("employmentRate", e.target.value)
                    }
                    placeholder="e.g., 95%"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-900 mb-2">
                    Average Starting Salary
                  </label>
                  <input
                    type="text"
                    value={formData.averageSalary}
                    onChange={(e) =>
                      handleChange("averageSalary", e.target.value)
                    }
                    placeholder="e.g., $72,000"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-900 mb-2">
                    Graduate School Placement
                  </label>
                  <input
                    type="text"
                    value={formData.graduatePlacement}
                    onChange={(e) =>
                      handleChange("graduatePlacement", e.target.value)
                    }
                    placeholder="e.g., 25%"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="border-t pt-5">
              <h3 className="text-base font-bold text-gray-900 mb-4">
                Career Services
              </h3>
              <div>
                <label className="block font-semibold text-gray-900 mb-2">
                  Service Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="Describe this career path..."
                  rows="4"
                  className="w-full mb-3 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                />
              </div>
              <div className="space-y-3">
                {formData.careerServices.map((service, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={service}
                      onChange={(e) => {
                        const newServices = [...formData.careerServices];
                        newServices[index] = e.target.value;
                        handleChange("careerServices", newServices);
                      }}
                      placeholder="e.g., One-on-one career counseling"
                      className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={() => {
                        const newServices = formData.careerServices.filter(
                          (_, i) => i !== index
                        );
                        handleChange("careerServices", newServices);
                      }}
                      className="px-3 py-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  onClick={() =>
                    handleChange("careerServices", [
                      ...formData.careerServices,
                      "",
                    ])
                  }
                  className="w-full px-4 py-2.5 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  + Add Career Service
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-6 py-4 flex gap-3 justify-end bg-gray-50">
          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2.5 bg-blue text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
          >
            {initialData ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
