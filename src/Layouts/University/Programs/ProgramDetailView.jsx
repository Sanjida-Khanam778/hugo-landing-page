import { useState } from "react";

export default function ProgramDetailView({ program, onEdit, onClose }) {
  // defensive: if program is not provided, don't render the modal
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

  const DetailSection = ({ title, section, children }) => (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => toggleSection(section)}
        className="w-full flex justify-between items-center py-2 hover:bg-gray-50 px-2 rounded transition"
      >
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <span className="text-gray-600">
          {expandedSections[section] ? "−" : "+"}
        </span>
      </button>
      {expandedSections[section] && <div className="mt-3 pl-2">{children}</div>}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl my-8 mx-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-b border-gray-200 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{program.name}</h1>
            <p className="text-gray-600 mt-1">Code: {program.code}</p>
            <div className="mt-3">
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  program.status === "Published"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {program.status}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
            <div>
              <p className="text-xs text-gray-600 font-semibold">Level</p>
              <p className="font-semibold text-gray-900">{program.level}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-semibold">Duration</p>
              <p className="font-semibold text-gray-900">{program.duration}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-semibold">Language</p>
              <p className="font-semibold text-gray-900">{program.language}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-semibold">
                Applications
              </p>
              <p className="font-semibold text-gray-900">
                {program.applications || 0}
              </p>
            </div>
          </div>

          {/* Program Description */}
          <DetailSection title="Program Description" section="description">
            <p className="text-gray-700 leading-relaxed">
              {program.description}
            </p>
          </DetailSection>

          {/* Learning Outcomes */}
          <DetailSection title="Learning Outcomes" section="outcomes">
            <div className="space-y-2">
              {program.learningOutcomes &&
              program.learningOutcomes.length > 0 ? (
                program.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <p className="text-gray-700">{outcome}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No learning outcomes added</p>
              )}
            </div>
          </DetailSection>

          {/* Faculties */}
          <DetailSection title="Program Faculties" section="faculties">
            {program.faculties && program.faculties.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {program.faculties.map((faculty, index) => (
                  <div key={index} className="bg-gray-100 p-3 rounded-lg">
                    <img
                      src="/student-graduation.jpg"
                      alt={faculty.name}
                      className="w-12 h-12 rounded-full mb-2"
                    />
                    <p className="font-semibold text-gray-900">
                      {faculty.name}
                    </p>
                    <p className="text-sm text-gray-600">{faculty.expertise}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No faculties added</p>
            )}
          </DetailSection>

          {/* Curriculum */}
          <DetailSection title="Program Curriculum" section="curriculum">
            {program.curriculum ? (
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(program.curriculum).map(([year, content]) => (
                  <div
                    key={year}
                    className="bg-blue-50 p-4 rounded-lg border border-blue-200"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2 capitalize">
                      {year.replace("year", "Year ")} Curriculum
                    </h3>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">
                      {content || "No content"}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No curriculum added</p>
            )}
          </DetailSection>

          {/* Administrative Requirements */}
          <DetailSection
            title="Administrative Requirements"
            section="requirements"
          >
            {program.admissionReqs && program.admissionReqs.length > 0 ? (
              <div className="space-y-2">
                {program.admissionReqs.map((req, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <p className="text-gray-700">{req}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No requirements added</p>
            )}
          </DetailSection>

          {/* Application Process */}
          <DetailSection title="Application Process" section="process">
            {program.appProcess && program.appProcess.length > 0 ? (
              <ol className="space-y-3">
                {program.appProcess.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-gray-500">No application steps added</p>
            )}
          </DetailSection>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition font-semibold"
          >
            Close
          </button>
          <button
            onClick={() => {
              onEdit(program);
              onClose();
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Edit Program
          </button>
        </div>
      </div>
    </div>
  );
}
