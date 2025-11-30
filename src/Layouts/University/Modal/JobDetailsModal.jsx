"use client";

import { CheckCircle } from "lucide-react";

export default function JobDetailsModal({ job, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Job Description</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Main Content */}
        <div className="col-span-2 space-y-6 bg-white rounded-lg p-6">
          {/* Job Description */}
          <div className="">
            <p className="text-gray-700 mb-4">{job.jobDescription}</p>
            <h2 className="text-lg font-bold mb-4">Responsibilities</h2>

            {job.responsibilities && (
              <div className="space-y-2">
                {job.responsibilities.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle
                      size={16}
                      strokeWidth={3.0}
                      className="text-green flex-shrink-0"
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Requirements */}
          {job.requirements && (
            <div className="bg-white rounded-lg">
              <h2 className="text-lg font-bold mb-4">Requirements</h2>
              <div className="space-y-2">
                {job.requirements.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle
                      size={16}
                      strokeWidth={3.0}
                      className="text-green flex-shrink-0"
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preferred Qualifications */}
          {job.qualifications && (
            <div className="bg-white rounded-lg">
              <h2 className="text-lg font-bold mb-4">
                Preferred Qualifications
              </h2>
              <div className="space-y-2">
                {job.qualifications.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle
                      size={16}
                      strokeWidth={3.0}
                      className="text-green flex-shrink-0"
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {job.benefits && (
            <div className="bg-white rounded-lg">
              <h2 className="text-lg font-bold mb-4">Benefits</h2>
              <div className="space-y-2">
                {job.benefits.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div>
                      <CheckCircle
                        size={16}
                        strokeWidth={3.0}
                        className="text-green"
                      />
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Application Process */}
          {job.applicationProcess && (
            <div className="bg-white rounded-lg">
              <h2 className="text-lg font-bold mb-4">Application Process</h2>
              <div className="space-y-3">
                {job.applicationProcess.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                      {index + 1}
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          {job.contact && (
            <div className="bg-base rounded-lg p-6">
              <h2 className="text-lg font-bold mb-4">Contact Information</h2>
              <div className="space-y-2">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Email:</span>{" "}
                  {job.contact.email}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Phone:</span>{" "}
                  {job.contact.phone}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
