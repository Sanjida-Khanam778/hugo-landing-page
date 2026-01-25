import { useState, useMemo } from "react";
import {
  MapPin,
  Calendar,
  CheckCircle,
  GraduationCap,
  Building,
} from "lucide-react";
import ApplyJobModal from "../../Layouts/University/Modal/ApplyJobModal";

export default function JobDetails({ job, onBackClick, uni_logo }) {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Check if job application deadline has passed
  const isExpired = useMemo(() => {
    if (!job?.details?.deadline) return false;
    try {
      const deadlineDate = new Date(job.details.deadline);
      const today = new Date();
      // Set hours to 0 to compare only dates
      today.setHours(0, 0, 0, 0);
      return deadlineDate < today;
    } catch (e) {
      console.error("Deadline parsing error:", e);
      return false;
    }
  }, [job?.details?.deadline]);

  return (
    <div className="min-h-screen bg-base font-inter">
      {/* Header */}
      <div className="bg-primary h-[50vh] text-white py-12 px-8 relative overflow-hidden flex items-center justify-center">
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
              {job.company}
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
      </div>

      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <input
            type="text"
            placeholder="Search for job title, company, keywords..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 bg-white rounded-lg p-6 h-fit">
            {/* Job Description */}
            <div className="">
              <h2 className="text-lg font-bold mb-4">Job Description</h2>
              <p className="text-gray-700 mb-4">{job.fullDescription || job.description}</p>

              {job.responsibilities && job.responsibilities.length > 0 && (
                <>
                  <h2 className="text-lg font-bold mb-4">Responsibilities</h2>
                  <div className="space-y-2">
                    {job.responsibilities.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle
                          size={18}
                          strokeWidth={2.75}
                          className="text-[#16A34A] mt-1 flex-shrink-0"
                        />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Requirements */}
            {job.requirements && job.requirements.length > 0 && (
              <div className="bg-white rounded-lg">
                <h2 className="text-lg font-bold mb-4">Requirements</h2>
                <div className="space-y-2">
                  {job.requirements.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle
                        size={18}
                        strokeWidth={2.75}
                        className="text-[#16A34A] mt-1 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preferred Qualifications */}
            {job.qualifications && job.qualifications.length > 0 && (
              <div className="bg-white rounded-lg">
                <h2 className="text-lg font-bold mb-4">
                  Preferred Qualifications
                </h2>
                <div className="space-y-2">
                  {job.qualifications.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle
                        size={18}
                        strokeWidth={2.75}
                        className="text-[#16A34A] mt-1 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <div className="bg-white rounded-lg">
                <h2 className="text-lg font-bold mb-4">Benefits</h2>
                <div className="space-y-2">
                  {job.benefits.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        strokeWidth={2.75}
                        className="text-[#16A34A] mt-1 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Application Process */}
            {job.applicationProcess && job.applicationProcess.length > 0 && (
              <div className="bg-white rounded-lg">
                <h2 className="text-lg font-bold mb-4">Application Process</h2>
                <div className="space-y-3">
                  {job.applicationProcess.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-sm text-gray-700">{item.step || item}</span>
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
                  {job.contact.email && (
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Email:</span>{" "}
                      {job.contact.email}
                    </p>
                  )}
                  {job.contact.phone && (
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Phone:</span>{" "}
                      {job.contact.phone}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 sticky top-8">
              {/* Job Details */}
              {job.details && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-4 text-gray-900">Job Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 font-medium">Job Type</span>
                      <span className="font-semibold text-gray-900">{job.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 font-medium">Category</span>
                      <span className="font-semibold text-gray-900">
                        {job.details.category}
                      </span>
                    </div>
                    {job.details.duration && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 font-medium">Duration</span>
                        <span className="font-semibold text-gray-900">
                          {job.details.duration}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 font-medium">Salary</span>
                      <span className="font-semibold text-gray-900">{job.salary || "Not Specified"}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 font-medium">Deadline</span>
                      <span className={`font-semibold ${isExpired ? 'text-red' : 'text-gray-900'}`}>
                        {job.details.deadline}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Application Status / Action Button */}
              <div className="pt-6 border-t border-gray-100">
                {isExpired ? (
                  <div className="text-center">
                    <div className="bg-red-50 p-2 mx-auto mb-4 h-12 w-12 text-red rounded-full flex items-center justify-center">
                      <Calendar size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">Application Closed</h3>
                    <p className="text-xs text-gray-500 mb-4 px-2">
                      The deadline for this position has passed. Browse other opportunities at our university.
                    </p>
                    <button
                      onClick={onBackClick}
                      className="w-full py-2.5 rounded-lg font-bold border-2 border-gray-200 text-gray-600 hover:bg-gray-50 transition-all text-sm"
                    >
                      Browse Other Jobs
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <button
                      onClick={() => setIsApplyModalOpen(true)}
                      className="w-full py-3.5 bg-blue text-white rounded-lg font-bold shadow-lg hover:shadow-blue-200 hover:bg-blue-600 transition-all text-sm mb-3"
                    >
                      Apply Now
                    </button>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                      Hurry! Application is open
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* University Card */}
            <div className="bg-white rounded-lg p-6 text-[#374151]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gray-50 p-2 flex-shrink-0 border border-gray-100">
                  <img src={uni_logo} alt="University Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-gray-900 leading-tight">Harvard University</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                This position is posted through Harvard University's career
                services. Join our global community of scholars and innovators.
              </p>
              <button className="text-sm font-bold text-blue bg-blue-50 w-full py-2.5 rounded-lg hover:bg-blue-100 transition-colors">
                View University Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {isApplyModalOpen && (
        <ApplyJobModal
          job={job}
          onClose={() => setIsApplyModalOpen(false)}
        />
      )}
    </div>
  );
}
