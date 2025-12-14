import {
  MapPin,
  Briefcase,
  DollarSign,
  Building,
  ChevronDown,
  GraduationCap,
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
      <div className="text-white flex items-center justify-center relative overflow-hidden bg-primary h-[50vh] px-8">
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
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
        
        </div>
      </div>

      {/* Main Content */}
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-56 flex-shrink-0 text-sm">
            <div className="bg-[#ECF5FF] rounded p-6">
              <h3 className="font-semibold mb-4 text-xl">Filters</h3>

              {/* Job Type */}
              <div className="mb-5">
                <h4 className=" font-medium mb-3 text-gray-900 text-base">
                  Job Type
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center  text-gray-700">
                    <input
                      type="radio"
                      name="jobType"
                      className="mr-2 text-blue-600"
                      defaultChecked
                    />
                    <span>All Types</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="jobType" className="mr-2" />
                    <span>Full-time</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="jobType" className="mr-2" />
                    <span>Part-time</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="jobType" className="mr-2" />
                    <span>Internship</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="jobType" className="mr-2" />
                    <span>Research</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="jobType" className="mr-2" />
                    <span>PhD Positions</span>
                  </label>
                </div>
              </div>

              {/* Category */}
              <div className="mb-5">
                <h4 className=" font-medium mb-3 text-gray-900 text-base">
                  Category
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center  text-gray-700">
                    <input
                      type="radio"
                      name="category"
                      className="mr-2 text-blue-600"
                      defaultChecked
                    />
                    <span>All Categories</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Business Management and Administration</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Legal and Social Sciences</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Healthcare</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Natural Sciences and Mathematics</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Humanities and Letter</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Education</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Technology and Telecommunications</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Economics and Finance</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Languages</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Commerce and Marketing</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Hospitality and Tourism</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Sports and Physical Activity</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Agriculture, Mining, and Gardening</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Image, Film, and Sound</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span> Fine Arts</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span> Security and Civil Protection</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span> Logistics and Transportation</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span> Graphic Arts</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span> Fashion and Textile Production</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span>Music, Performing Arts, and Dance</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="category" className="mr-2" />
                    <span> Veterinary Medicine and Animals</span>
                  </label>
                </div>
              </div>

              {/* Posted Within */}
              <div>
                <h4 className="font-medium mb-3 text-gray-900 text-base">
                  Posted Within
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center  text-gray-700">
                    <input
                      type="radio"
                      name="posted"
                      className="mr-2 text-blue-600"
                      defaultChecked
                    />
                    <span>Any Time</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
                    <input type="radio" name="posted" className="mr-2" />
                    <span>Past Week</span>
                  </label>
                  <label className="flex items-center  text-gray-700">
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
              <p className=" text-gray-600">Showing {jobs.length} jobs</p>
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
                        <p className=" text-gray-600 flex gap-2">
                          <GraduationCap strokeWidth={3.0} />
                          {job.company}
                        </p>
                      </div>
                    </div>
                    <span
                      className={` px-3 py-1 rounded-md ${getBadgeColor(
                        job.badgeColor
                      )}`}
                    >
                      {job.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-4  text-gray-600 mb-3">
                    <span className="flex items-center">
                      <GrLocation className="mr-1 text-dark text-lg" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <MdOutlineWatchLater className="mr-1 text-dark text-lg" />
                      {job.details.duration}
                    </span>
                    <span className="flex items-center">
                      <BiDollarCircle className="mr-1 text-dark text-lg" />
                      {job.salary}
                    </span>
                  </div>

                  <p className=" text-gray-700 mb-4">{job.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="space-x-4">
                      <span className="bg-base p-2 rounded-lg">
                        {job.details.category}
                      </span>
                      <span className=" text-gray-500">{job.posted}</span>
                    </div>
                    <div>
                      <span className=" text-gray-500 mr-4">
                        Apply by: Jul 30, 2023
                      </span>
                      <button
                        onClick={() => onViewDetails(job)}
                        className="bg-blue text-white px-4 py-2 rounded  transition-colors"
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
