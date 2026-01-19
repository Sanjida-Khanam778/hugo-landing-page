import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  X,
  CircleCheckBig,
  Calendar,
} from "lucide-react";
import program1 from "../../../assets/images/program1.png";
import { useGetProgramByIdQuery } from "../../../Api/universityApi";

export default function ProgramDetailView({ programId, onEdit, onClose }) {
  if (!programId) return null;
  const { data: program, isLoading, error } = useGetProgramByIdQuery(programId);


  const [expandedSections, setExpandedSections] = useState({
    description: true,
    outcomes: true,
    faculties: true,
    curriculum: true,
    requirements: true,
    process: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const DetailSection = ({ title, section, children, isLast }) => (
    <div className={!isLast ? "border-b border-gray-100" : ""}>
      <button
        onClick={() => toggleSection(section)}
        className="w-full flex justify-between items-center py-4 px-6 hover:bg-gray-50 transition group"
      >
        <h2 className="text-base font-semibold text-gray-900 text-left">
          {title}
        </h2>
        <span className="text-gray-400 group-hover:text-gray-600">
          {expandedSections[section] ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </span>
      </button>
      {expandedSections[section] && (
        <div className="px-6 pb-4 text-gray-700">{children}</div>
      )}
    </div>
  );

  // Data Adapters
  const curriculumYears = [
    { title: "First Year", courses: program?.first_year_courses ? program.first_year_courses.split(",").map(s => s.trim()) : [] },
    { title: "Second Year", courses: program?.second_year_courses ? program.second_year_courses.split(",").map(s => s.trim()) : [] },
    { title: "Third Year", courses: program?.third_year_courses ? program.third_year_courses.split(",").map(s => s.trim()) : [] },
    { title: "Fourth Year", courses: program?.fourth_year_courses ? program.fourth_year_courses.split(",").map(s => s.trim()) : [] },
  ].filter(y => y.courses.length > 0);

  const outcomes = program?.learning_outcomes?.map(o => o.outcome_text) || [];

  const deadlines = program?.deadlines || [];

  const steps = program?.steps ? [...program.steps].sort((a, b) => a.order - b.order) : [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 overflow-auto p-4 ">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl my-8 max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#F5E6E3] to-[#DEF0EC] px-6 py-5 border-b border-gray-200 flex justify-between items-start sticky top-0 w-full max-w-3xl z-10">
          <div className="font-semibold text-lg">Program Details</div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Quick Info Grid */}
        <div className="px-6 py-4 border-b border-gray-100 bg-white">
          <div className="flex-1 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">
                {program?.title}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`inline-block px-2.5 py-1 rounded-full text-sm font-medium ${program?.status === "Published"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-yellow-100 text-yellow-700"
                  }`}
              >
                {program?.status}
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="grid grid-cols-2 gap-4 flex-1">
              <div>
                <p className=" text-gray-500 font-medium uppercase tracking-wide text-xs">
                  Level
                </p>
                <p className="font-semibold text-gray-900 mt-1">
                  {program?.level}
                </p>
              </div>
              <div>
                <p className=" text-gray-500 font-medium uppercase tracking-wide text-xs">
                  Duration
                </p>
                <p className="font-semibold text-gray-900 mt-1">
                  {program?.duration}
                </p>
              </div>
              <div>
                <p className=" text-gray-500 font-medium uppercase tracking-wide text-xs">
                  Language
                </p>
                <p className="font-semibold text-gray-900 mt-1">
                  {program?.language}
                </p>
              </div>
              <div>
                <p className=" text-gray-500 font-medium uppercase tracking-wide text-xs">
                  Last Updated
                </p>
                <p className="font-semibold text-gray-900 mt-1">{program?.updated_at ? program?.updated_at.split("T")[0] : "N/A"}</p>
              </div>
            </div>
            <div>
              <img className="rounded-xl w-32 h-24 object-cover" src={program?.image || program1} alt="" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="">
          {/* Program Description */}
          <DetailSection title="Program Description" section="description">
            <p className="text-gray-700 leading-relaxed">
              {program?.description}
            </p>
          </DetailSection>

          {/* Learning Outcomes */}
          <DetailSection title="Learning Outcomes" section="outcomes">
            <div className="space-y-3">
              {outcomes.length > 0 ? (
                outcomes.map((outcome, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <span className="text-[#16A34A] mt-1">
                      <CircleCheckBig size={18} strokeWidth={2.75} />
                    </span>
                    <p className=" text-gray-700">{outcome}</p>
                  </div>
                ))
              ) : (
                <p className=" text-gray-500">No learning outcomes added</p>
              )}
            </div>
          </DetailSection>

          {/* Program Faculties */}
          <DetailSection title="Program Faculties" section="faculties">
            {program?.faculties && program.faculties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program?.faculties.map((faculty, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-center border p-4 rounded-lg"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex-shrink-0 flex items-center justify-center">
                      <span className=" font-semibold text-white">
                        {faculty.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900">
                        {faculty.name}
                      </p>
                      <p className=" text-gray-600 text-sm">{faculty.department}</p>
                      <p className=" text-gray-500 text-sm">
                        {faculty.expertise}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className=" text-gray-500">No faculties added</p>
            )}
          </DetailSection>

          {/* Program Curriculum */}
          <DetailSection title="Program Curriculum" section="curriculum">
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {program?.curriculum_overview || "No curriculum overview available."}
              </p>
            </div>
            {curriculumYears.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4">
                {curriculumYears.map((year, idx) => (
                  <div key={idx} className="border-l-4 border-blue pl-6">
                    <h2 className="text-xl font-medium text-gray-900 mb-6">
                      {year.title}
                    </h2>
                    <ul className="space-y-3">
                      {year.courses.map((course, courseIdx) => (
                        <li key={courseIdx} className="flex items-start">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue/20 text-blue font-medium mr-3 flex-shrink-0 text-sm">
                            {courseIdx + 1}
                          </span>
                          <span className="text-gray-700">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className=" text-gray-500">No curriculum courses added</p>
            )}
          </DetailSection>

          {/* Admission Requirements */}
          <DetailSection title="Admission Requirements" section="requirements">
            {deadlines.length > 0 ? (
              <div className="bg-blue-50 border border-[#BFDBFE] rounded-lg p-6 bg-[#EFF6FF] mb-6">
                <h3 className="text-lg font-semibold text-blue mb-4 flex items-center">
                  Application Deadlines
                </h3>

                <div className="space-y-3 ">
                  {deadlines.map((item, idx) => (
                    <div key={idx} className="flex items-center text-gray-800 ">
                      <Calendar
                        strokeWidth={3.0}
                        className="w-4 h-4 text-blue mr-3 flex-shrink-0"
                      />
                      <span className="text-blue-600 font-medium">{item.batch_name}</span>
                      <span className="mx-2">:</span>
                      <span className="font-semibold">{item.deadline_date}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            <div>
              <h3 className="font-semibold my-4 text-black text-lg">Requirements</h3>
              <p className="text-gray-700 whitespace-pre-wrap">
                {program?.requirements || "No specific requirements listed."}
              </p>
            </div>
          </DetailSection>

          {/* Application Process */}
          <DetailSection
            title="Application Process"
            section="process"
            isLast={true}
          >
            {steps.length > 0 ? (
              <ol className="space-y-4">
                {steps.map((step, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <span className="bg-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      {step.order}
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        {step.step_title}
                      </p>

                      <p className="text-gray-600 mt-1">
                        {step.step_description}
                      </p>

                    </div>
                  </li>
                ))}
              </ol>
            ) : (
              <p className=" text-gray-500">No application steps added</p>
            )}
          </DetailSection>
        </div>

        {/* Footer */}
        <div className="bg-white px-6 py-4 border-t border-gray-100 flex gap-3 justify-end sticky bottom-0 z-10 p-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700"
          >
            Close
          </button>
          <button
            onClick={() => {
              onEdit(program);
              onClose();
            }}
            className="px-4 py-2 bg-blue text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Edit Program
          </button>
        </div>
      </div>
    </div>
  );
}
