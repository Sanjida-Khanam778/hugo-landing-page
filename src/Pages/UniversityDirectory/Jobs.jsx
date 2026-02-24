import { GraduationCap } from "lucide-react";
import { BiDollarCircle } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { MdOutlineWatchLater } from "react-icons/md";
import logoPlaceholder from "../../assets/icons/uni_logo.png";
import { useState } from "react";
import JobDetails from "../Jobs/JobDetails";
import { useGetJobsByUniIdQuery } from "../../Api/universityApi";

export default function Jobs({ data: universityData }) {
  const { data: jobsData, isLoading, error } = useGetJobsByUniIdQuery(universityData?.id);
  const [view, setView] = useState("list");
  const [selectedJobId, setSelectedJobId] = useState(null);

  const onViewDetails = (jobId) => {
    setSelectedJobId(jobId);
    setView("detail");
  };

  const handleBackToList = () => {
    setView("list");
    setSelectedJobId(null);
  };

  const getBadgeColor = (type) => {
    const types = {
      "Full Time": "bg-[#DCFCE7] text-[#16A34A]",
      "Part Time": "bg-[#BFDBFE] text-[#1E40AF]",
      "Internship": "bg-[#FEF9C3] text-[#854D0E]",
      "Remote": "bg-[#F3E8FF] text-[#6B21A8]",
    };
    return types[type] || "bg-[#F3F4F6] text-[#111827]";
  };

  if (isLoading) return <div className="p-8 text-center text-gray-500">Loading jobs...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error loading jobs.</div>;
  if (!jobsData || jobsData.length === 0) return <div className="p-8 text-center text-gray-500">No jobs found for this university.</div>;

  if (view === "detail" && selectedJobId) {
    return (
      <JobDetails

        jobId={selectedJobId}
        onBackClick={handleBackToList}

      />
    );
  }

  return (
    <div className="flex-1">
      <div className="mb-4 flex justify-between items-center">
        <p className=" text-gray-600">Showing {jobsData.length} jobs</p>
      </div>

      <div className="space-y-4">
        {jobsData.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg flex-shrink-0 overflow-hidden">
                  <img src={job.univ_logo || logoPlaceholder} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                  </div>
                  <p className="text-gray-600 flex items-center gap-2">
                    <GraduationCap strokeWidth={3.0} size={18} />
                    {job.company_name}
                  </p>
                </div>
              </div>
              <span
                className={`px-3 py-1 mt-4 md:mt-0 rounded-md ${getBadgeColor(job.job_type)}`}
              >
                {job.job_type}
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-gray-600 mb-3">
              <span className="flex items-center text-sm">
                <GrLocation className="mr-1 text-dark text-lg" />
                {job.location}
              </span>
              <span className="flex items-center text-sm">
                <MdOutlineWatchLater className="mr-1 text-dark text-lg" />
                Until {job.deadline}
              </span>
              <span className="flex items-center text-sm">
                <BiDollarCircle className="mr-1 text-dark text-lg" />
                {job.salary}
              </span>
            </div>

            <p className=" text-gray-700 mb-4 line-clamp-2">{job.description}</p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">
              <div className="space-x-4">
                <span className="bg-base p-2 rounded-lg text-sm text-gray-700">
                  {job.category}
                </span>
                <span className=" text-gray-500 text-sm">Posted on {job.posted_date}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className=" text-gray-500 text-sm">
                  Apply by: {job.deadline}
                </span>
                <button
                  onClick={() => onViewDetails(job.id)}
                  className="bg-blue text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
