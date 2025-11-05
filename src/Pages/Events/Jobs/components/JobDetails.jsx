import { useState } from "react";
import {
  MapPin,
  DollarSign,
  Calendar,
  Share2,
  Bookmark,
  CheckCircle,
  FileText,
  GraduationCap,
  Building,
} from "lucide-react";


export default function JobDetails({ job, onBackClick, getBadgeColor, background, uni_logo }) {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-cover bg-no-repeat h-[50vh] text-white py-12 px-8 relative overflow-hidden flex items-center justify-center"
      >
        <div className="w-11/12 mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBackClick}
            className="mb-10 text-white/80 hover:text-white text-sm flex items-center"
          >
            ← Back to Jobs
          </button>
          <h1 className="text-3xl font-bold mb-6">{job.title}</h1>
          <div className="flex items-center gap-8 text-sm text-sky">
           
            <span className="flex items-center">
              <Building size={22} className="mr-1" />
           Microsoft
            </span>
            <span className="flex items-center">
              <GraduationCap size={22} className="mr-2" />
              Harvard University
            </span>
            <span className="flex items-center">
              <MapPin size={20} className="mr-1" />
              {job.location}
            </span>
          </div>
          <div className="mt-6">
             <span
              className={`px-4 text-sm py-2 rounded-full bg-white/20 text-white`}
            >
              {job.badge}
            </span>
          </div>
        </div>
        <div className="absolute top-6 right-20 w-16 h-16 border-2 border-white/30 rounded-full"></div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white border-b border-gray-200 py-4 px-8">
        <div className="max-w-6xl mx-auto flex justify-end gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
            <Share2 size={16} />
            Share
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
            <Bookmark size={16} />
            Save
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Apply Now
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-6">
            {/* Job Description */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-4">Job Description</h2>
              <p className="text-gray-700 mb-4">{job.fullDescription}</p>

              {job.responsibilities && (
                <div className="space-y-2">
                  {job.responsibilities.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="text-green-600 mt-1 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Requirements */}
            {job.requirements && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-bold mb-4">Requirements</h2>
                <div className="space-y-2">
                  {job.requirements.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="text-green-600 mt-1 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preferred Qualifications */}
            {job.qualifications && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-bold mb-4">
                  Preferred Qualifications
                </h2>
                <div className="space-y-2">
                  {job.qualifications.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="text-blue-600 mt-1 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {job.benefits && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-bold mb-4">Benefits</h2>
                <div className="space-y-2">
                  {job.benefits.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={16} className="text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Application Process */}
            {job.applicationProcess && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-bold mb-4">Application Process</h2>
                <div className="space-y-3">
                  {job.applicationProcess.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                        {index + 1}
                      </div>
                      <span className="text-sm text-gray-700">{item.step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Information */}
            {job.contact && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
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

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Job Details */}
            {job.details && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Job Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium">{job.details.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-medium">{job.details.experience}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Type</span>
                    <span className="font-medium">{job.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Openings</span>
                    <span className="font-medium">{job.details.openings}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Deadline</span>
                    <span className="font-medium">{job.details.deadline}</span>
                  </div>
                  {job.details.duration && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium">{job.details.duration}</span>
                    </div>
                  )}
                </div>
                <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
                  <FileText size={16} />
                  Download PDF
                </button>
              </div>
            )}

            {/* Application Closed */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-2">Application Closed</h3>
              <p className="text-sm text-gray-600 mb-4">
                This position is currently closed. For similar jobs, sign up for
                our newsletter
              </p>
              <button className="w-full bg-white border-2 border-blue-600 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm">
                Browse Other Jobs
              </button>
            </div>

            {/* You Might Also Like */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-4">You Might Also Like</h3>
              <button className="text-blue-600 text-sm font-medium">
                View all Jobs
              </button>
            </div>

            {/* Similar Jobs */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Similar Jobs</h3>
              <button className="text-blue-600 text-sm font-medium">
                View all Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}