import { useState } from "react";
import { Edit3, ChevronDown, ChevronUp, X, CircleCheckBig } from "lucide-react";
import program1 from "../../../assets/images/program1.png";
export default function ProgramDetailView({ program, onEdit, onClose }) {
  if (!program) return null;

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 overflow-auto p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#F5E6E3] to-[#DEF0EC] px-6 py-5 border-b border-gray-200 flex justify-between items-start">
          <div>Program Details</div>
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
                {program.name}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
                  program.status === "Published"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {program.status}
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="grid grid-cols-2 gap-4 flex-1">
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Level
                </p>
                <p className="font-semibold text-gray-900 mt-1">
                  {program.level}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Duration
                </p>
                <p className="font-semibold text-gray-900 mt-1">
                  {program.duration}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Language
                </p>
                <p className="font-semibold text-gray-900 mt-1">
                  {program.language}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Applications
                </p>
                <p className="font-semibold text-gray-900 mt-1">
                  {program.applications || 0}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Last Updated
                </p>
                <p className="font-semibold text-gray-900 mt-1">2024-09-15</p>
              </div>
            </div>
            <div>
              <img className="rounded-xl" src={program1} alt="" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-h-[60vh] overflow-y-auto">
          {/* Program Description */}
          <DetailSection title="Program Description" section="description">
            <p className="text-gray-700 leading-relaxed text-sm">
              {program.description}
            </p>
          </DetailSection>

          {/* Learning Outcomes */}
          <DetailSection title="Learning Outcomes" section="outcomes">
            <div className="space-y-3">
              {program.learningOutcomes &&
              program.learningOutcomes.length > 0 ? (
                program.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <span className="text-[#16A34A]">
                      <CircleCheckBig size={18} strokeWidth={2.5} />
                    </span>
                    <p className="text-sm text-gray-700">{outcome}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">
                  No learning outcomes added
                </p>
              )}
            </div>
          </DetailSection>

          {/* Program Faculties */}
          <DetailSection title="Program Faculties" section="faculties">
            {program.faculties && program.faculties.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {program.faculties.map((faculty, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-center border p-4 rounded-lg"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex-shrink-0 flex items-center justify-center">
                      <span className="text-xs font-semibold text-white">
                        {faculty.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-gray-900">
                        {faculty.name}
                      </p>
                      <p className="text-xs text-gray-600">Department Chair</p>
                      <p className="text-xs text-gray-600">
                        Macroeconomic Theory
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No faculties added</p>
            )}
          </DetailSection>

          {/* Program Curriculum */}
        <DetailSection title="Program Curriculum" section="curriculum">
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              The curriculum is designed to provide a comprehensive understanding of economic principles and their applications. Students will progress through foundational courses to advanced topics and specialized areas.
            </p>
          </div>
          {program.curriculum ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {program.curriculum.years.map((year, idx) => (
                <div key={idx} className="border-l-4 border-blue pl-6">
                  <h2 className="text-xl font-medium text-gray-900 mb-6">{year.title}</h2>
                  <ul className="space-y-3">
                    {year.courses.map((course, courseIdx) => (
                      <li key={courseIdx} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue/20 text-blue text-sm font-medium mr-3 flex-shrink-0">
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
            <p className="text-sm text-gray-500">No curriculum added</p>
          )}
        </DetailSection>

          {/* Administrative Requirements */}
          <DetailSection title="Admission Requirements" section="requirements">
            {program.admissionReqs && program.admissionReqs.length > 0 ? (
              <div className="space-y-2">
                {program.admissionReqs.map((req, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <span className="text-emerald-500 font-bold flex-shrink-0">
                      ✓
                    </span>
                    <p className="text-sm text-gray-700">{req}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No requirements added</p>
            )}
          </DetailSection>

          {/* Application Process */}
          <DetailSection
            title="Application Process"
            section="process"
            isLast={true}
          >
            {program.appProcess && program.appProcess.length > 0 ? (
              <ol className="space-y-3">
                {program.appProcess.map((step, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-sm text-gray-700 pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-sm text-gray-500">
                No application steps added
              </p>
            )}
          </DetailSection>
        </div>

        {/* Footer */}
        <div className="bg-white px-6 py-4 border-t border-gray-100 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-sm text-gray-700"
          >
            Close
          </button>
          <button
            onClick={() => {
              onEdit(program);
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm"
          >
            Edit Program
          </button>
        </div>
      </div>
    </div>
  );
}
