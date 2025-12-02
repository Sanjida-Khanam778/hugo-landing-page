import { useState } from "react";
import { X, Plus, Upload, Calendar } from "lucide-react";

export default function ProgramForm({ program, onSave, onCancel, isEdit }) {
  const defaultCurriculum = { year1: [], year2: [], year3: [], year4: [] };

  const normalizeCurriculum = (curr) => {
    if (!curr) return { ...defaultCurriculum };
    // If curriculum comes from Programs sample (curr.years[].courses)
    if (Array.isArray(curr.years)) {
      return {
        year1: Array.isArray(curr.years[0]?.courses)
          ? curr.years[0].courses
          : [],
        year2: Array.isArray(curr.years[1]?.courses)
          ? curr.years[1].courses
          : [],
        year3: Array.isArray(curr.years[2]?.courses)
          ? curr.years[2].courses
          : [],
        year4: Array.isArray(curr.years[3]?.courses)
          ? curr.years[3].courses
          : [],
      };
    }
    // If curriculum already has year1..year4 keys, ensure they are arrays
    return {
      year1: Array.isArray(curr.year1) ? curr.year1 : [],
      year2: Array.isArray(curr.year2) ? curr.year2 : [],
      year3: Array.isArray(curr.year3) ? curr.year3 : [],
      year4: Array.isArray(curr.year4) ? curr.year4 : [],
    };
  };

  const initialFormData = program
    ? { ...program, curriculum: normalizeCurriculum(program.curriculum) }
    : {
        name: "",
        code: "",
        status: "Draft",
        level: "Bachelor",
        duration: "",
        language: "English",
        description: "",
        learningOutcomes: [],
        faculties: [],
        curriculum: { ...defaultCurriculum },
        requirements: [],
        admissionReqs: [],
        appProcess: [],
      };

  const [formData, setFormData] = useState(initialFormData);

  const [newOutcome, setNewOutcome] = useState("");
  const [newFaculty, setNewFaculty] = useState({ name: "", expertise: "" });
  const [newAppProcess, setNewAppProcess] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOutcome = () => {
    if (newOutcome.trim()) {
      setFormData((prev) => ({
        ...prev,
        learningOutcomes: [...prev.learningOutcomes, newOutcome],
      }));
      setNewOutcome("");
    }
  };

  const handleRemoveOutcome = (index) => {
    setFormData((prev) => ({
      ...prev,
      learningOutcomes: prev.learningOutcomes.filter((_, i) => i !== index),
    }));
  };

  const handleAddFaculty = () => {
    if (newFaculty.name.trim()) {
      setFormData((prev) => ({
        ...prev,
        faculties: [...prev.faculties, newFaculty],
      }));
      setNewFaculty({ name: "", expertise: "" });
    }
  };

  const handleRemoveFaculty = (index) => {
    setFormData((prev) => ({
      ...prev,
      faculties: prev.faculties.filter((_, i) => i !== index),
    }));
  };

  const handleAddAppProcess = () => {
    if (newAppProcess.title.trim()) {
      setFormData((prev) => ({
        ...prev,
        appProcess: [...prev.appProcess, newAppProcess],
      }));
      setNewAppProcess({ title: "", description: "" });
    }
  };

  const handleRemoveAppProcess = (index) => {
    setFormData((prev) => ({
      ...prev,
      appProcess: prev.appProcess.filter((_, i) => i !== index),
    }));
  };

  const handleCurriculumChange = (year, value) => {
    setFormData((prev) => ({
      ...prev,
      curriculum: {
        ...(prev.curriculum || {}),
        [year]: value
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
      },
    }));
  };

  const handleSubmit = () => {
    // Convert internal year1..year4 structure back to the 'years' array shape
    // used elsewhere in the app to keep data consistent.
    const years = [
      { title: "First Year", courses: formData.curriculum.year1 || [] },
      { title: "Second Year", courses: formData.curriculum.year2 || [] },
      { title: "Third Year", courses: formData.curriculum.year3 || [] },
      { title: "Fourth Year", courses: formData.curriculum.year4 || [] },
    ];

    const payload = {
      ...formData,
      curriculum: { years },
    };

    onSave(payload);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 overflow-auto p-4 rounded-lg">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#F5E6E3] to-[#DEF0EC] text-lg px-6 py-4 rounded-t-lg border-gray-200 flex justify-between items-start sticky top-0 w-full">
          <div> {isEdit ? "Edit Program" : "Add New Program"}</div>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[calc(100vh-200px)] p-8">
          <div className="space-y-4">
            {/* Program Description */}
            <div className="">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="grid grid-cols-2 gap-4 mb-4 col-span-2">
                  <div className="col-span-2">
                    <label className="block font-semibold text-xl text-gray-700 mb-2">
                      Program Description
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Bachelor of Computer Science"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                      Level
                    </label>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                    >
                      <option>Bachelor</option>
                      <option>Master</option>
                      <option>PhD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                      Duration
                    </label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      placeholder="e.g. 4 years"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                      Language
                    </label>
                    <input
                      type="text"
                      name="language"
                      value={formData.language}
                      onChange={handleInputChange}
                      placeholder="e.g. English"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                    >
                      <option>Draft</option>
                      <option>Published</option>
                    </select>
                  </div>
                </div>
                <div className="text-center">
                  <button className="flex justify-center w-full h-full bg-base items-center gap-1 px-3 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50">
                    <Upload size={14} strokeWidth={2.75} /> Upload new
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="col-span-2"></div>
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Program Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Program description..."
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                />
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                Learning Outcomes
              </h2>
              <div className="space-y-2 mb-4">
                {formData.learningOutcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-50 p-3 rounded"
                  >
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-700 flex-1">{outcome}</span>
                    <button
                      onClick={() => handleRemoveOutcome(index)}
                      className="text-gray-400 hover:text-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newOutcome}
                  onChange={(e) => setNewOutcome(e.target.value)}
                  placeholder="Add learning outcome..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                />
                <button
                  onClick={handleAddOutcome}
                  className="px-4 py-2 bg-blue text-white rounded font-semibold"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Faculties */}
            <div className="">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                Key Faculties
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {formData.faculties.map((faculty, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900">
                        {faculty.name}
                      </p>
                      <p className="text-gray-600">Department</p>
                      <p className="text-gray-600">{faculty.expertise}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveFaculty(index)}
                      className="text-gray-400 hover:text-red-600 flex-shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  value={newFaculty.name}
                  onChange={(e) =>
                    setNewFaculty((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Faculty name..."
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                />
                <input
                  type="text"
                  onChange={(e) => e.target.value}
                  placeholder="Department..."
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                />
                <input
                  type="text"
                  value={newFaculty.expertise}
                  onChange={(e) =>
                    setNewFaculty((prev) => ({
                      ...prev,
                      expertise: e.target.value,
                    }))
                  }
                  placeholder="Expertise..."
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                />
                <button
                  onClick={handleAddFaculty}
                  className="col-span-3 px-4 py-2 bg-blue text-white rounded font-semibold"
                >
                  Add Faculty
                </button>
              </div>
            </div>

            {/* Curriculum */}
            <div className="">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                Program Curriculum
              </h2>
              <textarea
                placeholder={`The curriculum is...`}
                rows="4"
                onChange={(e) => e.target.value}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue mb-4"
              />
              <div className="grid grid-cols-2 gap-4">
                {["year1", "year2", "year3", "year4"].map((year, idx) => (
                  <div key={year} className="border-l-4 border-blue pl-4">
                    <label className="block font-semibold text-gray-900 mb-2">
                      {["First", "Second", "Third", "Fourth"][idx]} Year
                    </label>
                    <textarea
                      placeholder={`Year ${idx + 1} courses...`}
                      rows="4"
                      value={
                        formData.curriculum &&
                        Array.isArray(formData.curriculum[year])
                          ? formData.curriculum[year].join("\n")
                          : ""
                      }
                      onChange={(e) =>
                        handleCurriculumChange(year, e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Requirements */}
            <div className="">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                Admission Requirements
              </h2>
              <div className="bg-[#EFF6FF] p-4 border border-[#BFDBFE] rounded-lg ">
                <div className="flex items-start gap-3 mb-3">
                
                  <div className="space-y-2">
                    <p className="font-semibold text-blue">
                      Application Deadlines
                    </p>
                    <p className="text-gray-600 flex items-center gap-2">
                      <Calendar className="text-blue" size={20} strokeWidth={3.0} />
                      Batch name: <span className="text-black font-semibold">January 1, 2025</span>
                    </p>
                    <p className="text-gray-600 flex items-center gap-2">
                      <Calendar className="text-blue" size={20} strokeWidth={3.0} />
                      Batch name:  <span className="text-black font-semibold">October 1, 2025 </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Process */}
            <div className="">
              <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                Requirements
              </h2>

              <textarea
                placeholder={`High School Diploma...`}
                rows="4"
                onChange={(e) => e.target.value}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue mb-4"
              />
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  Application Process{" "}
                </h2>
                {formData.appProcess.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-blue-50 p-3 rounded"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900">
                        {step.title}
                      </p>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveAppProcess(index)}
                      className="text-gray-400 hover:text-red-600 flex-shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  value={newAppProcess.title}
                  onChange={(e) =>
                    setNewAppProcess((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  placeholder="Step title..."
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                />
                <input
                  type="text"
                  value={newAppProcess.description}
                  onChange={(e) =>
                    setNewAppProcess((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Step description..."
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                />
                <button
                  onClick={handleAddAppProcess}
                  className="col-span-2 px-4 py-2 bg-blue text-white rounded font-semibold"
                >
                  Add Step
                </button>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-3 justify-end pt-6 border-t">
              <button
                onClick={onCancel}
                className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue text-white rounded transition font-semibold"
              >
                {isEdit ? "Save Changes" : "Add"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
