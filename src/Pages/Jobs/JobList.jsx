import {
  MapPin,
  Briefcase,
  DollarSign,
  Building,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { BiDollarCircle } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { MdOutlineWatchLater } from "react-icons/md";

export default function JobList({
  jobs,
  onViewDetails,
  getBadgeColor,
  background,
  uni_logo,
}) {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedType, setSelectedType] = useState("All Types");
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  return (
    <div className="min-h-screen bg-base">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="text-white flex items-center justify-center relative overflow-hidden bg-cover bg-no-repeat h-[50vh] px-8"
      >
        <div className="w-11/12 mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-8">
            Jobs & Internships
          </h1>
          <p className="text-[#BFDBFE] max-w-5xl md:text-xl">
            Find career opportunities and internships from top universities and
            partner companies. Kickstart your career with positions tailored for
            students and graduates.
          </p>
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

      {/* Main Content */}
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-48 flex-shrink-0">
            <div className="bg-[#ECF5FF] rounded p-6">
              <h3 className="font-semibold mb-4 text-sm">Filters</h3>

              {/* Job Type */}
              <div className="mb-5">
                <h4 className="text-xs font-medium mb-3 text-gray-900">
                  Job Type
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center text-sm text-gray-700">
                    <input
                      type="radio"
                      name="jobType"
                      className="mr-2 text-blue-600"
                      defaultChecked
                    />
                    <span>All Types</span>
                  </label>
                  <label className="flex items-center text-sm text-gray-700">
                    <input type="radio" name="jobType" className="mr-2" />
                    <span>Full-time</span>
                  </label>
                  <label className="flex items-center text-sm text-gray-700">
                    <input type="radio" name="jobType" className="mr-2" />
                    <span>Part-time</span>
                  </label>
                  <label className="flex items-center text-sm text-gray-700">
                    <input type="radio" name="jobType" className="mr-2" />
                    <span>Internship</span>
                  </label>
                  <label className="flex items-center text-sm text-gray-700">
                    <input type="radio" name="jobType" className="mr-2" />
                    <span>Research</span>
                  </label>
                  <label className="flex items-center text-sm text-gray-700">
                    <input type="radio" name="jobType" className="mr-2" />
                    <span>PhD Positions</span>
                  </label>
                </div>
              </div>

              {/* Category */}
              <div className="mb-5">
                <h4 className="text-xs font-medium mb-3 text-gray-900">
                  Category
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center text-sm text-gray-700">
                    <input
                      type="radio"
                      name="category"
                      className="mr-2 text-blue-600"
                      defaultChecked
                    />
                    <span>All Categories</span>
                  </label>
                  <label className="flex items-center text-sm text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Technology</span>
                  </label>
                  <label className="flex items-center text-sm text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Marketing</span>
                  </label>
                  <label className="flex items-center text-sm text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Design</span>
                  </label>
                  <label className="flex items-center text-sm text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Finance</span>
                  </label>
                  <label className="flex items-center text-sm text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Education</span>
                  </label>
                </div>
              </div>

              {/* Posted Within */}
              <div>
                <h4 className="text-xs font-medium mb-3 text-gray-900">
                  Posted Within
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center text-sm text-gray-700">
                    <input
                      type="radio"
                      name="posted"
                      className="mr-2 text-blue-600"
                      defaultChecked
                    />
                    <span>Any Time</span>
                  </label>
                  <label className="flex items-center text-sm text-gray-700">
                    <input type="radio" name="posted" className="mr-2" />
                    <span>Past Week</span>
                  </label>
                  <label className="flex items-center text-sm text-gray-700">
                    <input type="radio" name="posted" className="mr-2" />
                    <span>Past Month</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Jobs List */}
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Showing {jobs.length} jobs
              </p>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg flex-shrink-0">
                        <img src={uni_logo} alt="" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold">{job.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600">{job.company}</p>
                      </div>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-md ${getBadgeColor(
                        job.badgeColor
                      )}`}
                    >
                      {job.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                    <span className="flex items-center">
                      <GrLocation className="mr-1 text-dark text-lg" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <MdOutlineWatchLater className="mr-1 text-dark text-lg" />
                      {job.type}
                    </span>
                    <span className="flex items-center">
                      <BiDollarCircle className="mr-1 text-dark text-lg" />
                      {job.salary}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 mb-4">
                    {job.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{job.posted}</span>
                    <div>
                      <span className="text-xs text-gray-500 mr-4">
                        Apply by: Jul 30, 2023
                      </span>
                      <button
                        onClick={() => onViewDetails(job)}
                        className="bg-blue text-white px-4 py-2 rounded text-sm transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
