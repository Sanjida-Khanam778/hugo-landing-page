import { useState } from "react";
import {
  MapPin,
  Calendar,
  CheckCircle,
  GraduationCap,
  Building,
  ChevronDown,
} from "lucide-react";

export default function JobDetails({ job, onBackClick, background, uni_logo }) {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedType, setSelectedType] = useState("All Types");
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  return (
    <div className="min-h-screen bg-base font-inter">
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
      </div>

      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <input
            type="text"
            placeholder="Search for job title, company, keywords..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <div className="ml-4 flex gap-3 relative text-[#111827]">
            {/* Job Type Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowTypeDropdown(!showTypeDropdown);
                  setShowCategoryDropdown(false);
                }}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2"
              >
                {selectedType}
                <ChevronDown size={16} />
              </button>

              {showTypeDropdown && (
                <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg border border-gray-200 py-4 px-6 min-w-[280px] z-50">
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        setSelectedType("All Types");
                        setShowTypeDropdown(false);
                      }}
                      className="block w-full text-left text-lg hover:text-blue-600 transition-colors"
                    >
                      All Types
                    </button>
                    <button
                      onClick={() => {
                        setSelectedType("Internship");
                        setShowTypeDropdown(false);
                      }}
                      className="block w-full text-left text-lg hover:text-blue-600 transition-colors"
                    >
                      Internship
                    </button>
                    <button
                      onClick={() => {
                        setSelectedType("Full Time");
                        setShowTypeDropdown(false);
                      }}
                      className="block w-full text-left text-lg hover:text-blue-600 transition-colors"
                    >
                      Full Time
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowCategoryDropdown(!showCategoryDropdown);
                  setShowTypeDropdown(false);
                }}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2"
              >
                {selectedCategory}
                <ChevronDown size={16} />
              </button>

              {showCategoryDropdown && (
                <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg border border-gray-200 py-4 px-6 min-w-[280px] z-50">
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        setSelectedCategory("Technology");
                        setShowCategoryDropdown(false);
                      }}
                      className="block w-full text-left text-lg hover:text-blue-600 transition-colors"
                    >
                      Technology
                    </button>
                    <button
                      onClick={() => {
                        setSelectedCategory("Marketing");
                        setShowCategoryDropdown(false);
                      }}
                      className="block w-full text-left text-lg hover:text-blue-600 transition-colors"
                    >
                      Marketing
                    </button>
                    <button
                      onClick={() => {
                        setSelectedCategory("Finance");
                        setShowCategoryDropdown(false);
                      }}
                      className="block w-full text-left text-lg hover:text-blue-600 transition-colors"
                    >
                      Finance
                    </button>
                    <button
                      onClick={() => {
                        setSelectedCategory("Research");
                        setShowCategoryDropdown(false);
                      }}
                      className="block w-full text-left text-lg hover:text-blue-600 transition-colors"
                    >
                      Research
                    </button>
                    <button
                      onClick={() => {
                        setSelectedCategory("Education");
                        setShowCategoryDropdown(false);
                      }}
                      className="block w-full text-left text-lg hover:text-blue-600 transition-colors"
                    >
                      Education
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-6 bg-white rounded-lg p-6">
            {/* Job Description */}
            <div className="">
              <h2 className="text-lg font-bold mb-4">Job Description</h2>
              <p className="text-gray-700 mb-4">{job.fullDescription}</p>
              <h2 className="text-lg font-bold mb-4">Responsibilities</h2>

              {job.responsibilities && (
                <div className="space-y-2">
                  {job.responsibilities.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle
                        size={18}
                        strokeWidth={2.75}
                        className="text-[#16A34A] mt-1 flex-shrink-0"
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
            {job.qualifications && (
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
            {job.benefits && (
              <div className="bg-white rounded-lg">
                <h2 className="text-lg font-bold mb-4">Benefits</h2>
                <div className="space-y-2">
                  {job.benefits.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div>
                        <CheckCircle
                          size={18}
                          strokeWidth={2.75}
                          className="text-[#16A34A] mt-1 flex-shrink-0"
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
                      <span className="text-sm text-gray-700">{item.step}</span>
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

          {/* Sidebar */}
          <div className="space-y-6 ">
            <div className="bg-white rounded-lg p-6">
              {/* Job Details */}
              {job.details && (
                <div className="">
                  <h3 className="font-semibold mb-4">Job Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Job Type:</span>
                      <span className="font-medium">{job.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Category</span>
                      <span className="font-medium">
                        {job.details.category}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">
                        {job.details.duration}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Salary</span>
                      <span className="font-medium">$35/hour</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Posted</span>
                      <span className="font-medium">
                        {job.details.deadline}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Deadline</span>
                      <span className="font-medium">
                        {job.details.deadline}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Application Closed */}
              <div className=" text-center pt-10">
                <div className="bg-base p-2 mx-auto mb-4 h-10 w-10 text-[#374151] rounded-full">
                  <Calendar />
                </div>
                <h3 className="font-semibold mb-2">Application Closed</h3>
                <p className="text-sm text-gray-600 mb-4">
                  This position is currently closed. For similar jobs, sign up
                  for our newsletter
                </p>
                <button className="w-full py-2 rounded-lg font-medium text-blue transition-colors text-sm">
                  Browse Other Jobs
                </button>
              </div>
            </div>

            {/* You Might Also Like */}
            <div className=" bg-white rounded-lg p-6 text-[#374151]">
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-lg flex-shrink-0">
                  <img src={uni_logo} alt="" />
                </div>
                <h3 className="font-semibold mb-4">Harvard University</h3>
              </div>
              <p className="text-sm tracking-wide leading-relaxed">
                This position is posted through Harvard University's career
                services. Learn more about the university and other
                opportunities.
              </p>
              <button className="text-sm text-[#111827] bg-base w-full p-2 rounded mt-4">
                View University Profile
              </button>
            </div>

            {/* Similar Jobs */}
            {/* <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold mb-4">Similar Jobs</h3>
              <button className="text-blue text-sm text-center font-medium mx-auto">
                View all Jobs
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
