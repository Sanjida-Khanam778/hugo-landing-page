import { useState, useEffect, useRef } from "react";
import { X, Plus, Upload, Calendar } from "lucide-react";
import { useGetProgramByIdQuery } from "../../../Api/universityApi";

export default function ProgramForm({ programId, onSave, onCancel, isEdit }) {
  const { data: program, isLoading, error } = useGetProgramByIdQuery(isEdit ? programId : null);
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Helper to parse comma-separated string to array
  const parseCourses = (str) =>
    str ? str.split(",").map((s) => s.trim()).filter(Boolean) : [];

  const defaultFormData = {
    title: "",
    level: "Bachelor",
    duration: "",
    language: "English",
    status: "Draft",
    description: "",
    credit: null,
    curriculum_overview: "",
    requirements: "",
    curriculum: { year1: "", year2: "", year3: "", year4: "" },
    learningOutcomes: [],
    faculties: [],
    deadlines: [],
    appProcess: [],
    image: null,
  };

  const [formData, setFormData] = useState(defaultFormData);

  useEffect(() => {
    if (program && isEdit) {
      setFormData({
        id: program.id,
        title: program.title || "",
        level: program.level || "Bachelor",
        duration: program.duration || "",
        language: program.language || "English",
        status: program.status || "Draft",
        description: program.description || "",
        curriculum_overview: program.curriculum_overview || "",
        requirements: program.requirements || "",

        // Map API strings to arrays for UI -> Join by newline for textarea
        curriculum: {
          year1: parseCourses(program.first_year_courses).join("\n"),
          year2: parseCourses(program.second_year_courses).join("\n"),
          year3: parseCourses(program.third_year_courses).join("\n"),
          year4: parseCourses(program.fourth_year_courses).join("\n"),
        },
        // API: [{id, outcome_text}] -> UI: [string]
        learningOutcomes: program.learning_outcomes?.map(l => l.outcome_text) || [],
        faculties: program.faculties || [],
        deadlines: program.deadlines || [],
        // API: [{step_title, step_description}] -> UI: [{title, description}]
        appProcess: program.steps?.map(s => ({
          title: s.step_title,
          description: s.step_description
        })) || [],
        image: program.image || null,
      });
      setImagePreview(program.image || null);
    } else {
      setFormData(defaultFormData);
      setImagePreview(null);
    }
  }, [program, isEdit]);

  // New item states
  const [newOutcome, setNewOutcome] = useState("");
  const [newFaculty, setNewFaculty] = useState({ name: "", department: "", expertise: "" });
  const [newDeadline, setNewDeadline] = useState({ batch_name: "", deadline_date: "" });
  const [newAppProcess, setNewAppProcess] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // --- Learning Outcomes ---
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

  // --- Faculties ---
  const handleAddFaculty = () => {
    if (newFaculty.name.trim()) {
      setFormData((prev) => ({
        ...prev,
        faculties: [...prev.faculties, newFaculty],
      }));
      setNewFaculty({ name: "", department: "", expertise: "" });
    }
  };

  const handleRemoveFaculty = (index) => {
    setFormData((prev) => ({
      ...prev,
      faculties: prev.faculties.filter((_, i) => i !== index),
    }));
  };

  // --- Deadlines ---
  const handleAddDeadline = () => {
    if (newDeadline.batch_name.trim() && newDeadline.deadline_date) {
      setFormData((prev) => ({
        ...prev,
        deadlines: [...prev.deadlines, newDeadline],
      }));
      setNewDeadline({ batch_name: "", deadline_date: "", start_date: "", next_start_date: "" });
    }
  };

  const handleRemoveDeadline = (index) => {
    setFormData((prev) => ({
      ...prev,
      deadlines: prev.deadlines.filter((_, i) => i !== index),
    }));
  };

  // --- App Process (Steps) ---
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

  // --- Curriculum ---
  const handleCurriculumChange = (year, value) => {
    // Store as string to support typing spaces/newlines normally
    setFormData((prev) => ({
      ...prev,
      curriculum: {
        ...(prev.curriculum || {}),
        [year]: value,
      },
    }));
  };

  const handleSubmit = () => {
    const processCurriculum = (str) => {
      if (!str) return "";
      return str
        .split("\n")
        .map(s => s.trim())
        .filter(Boolean)
        .join(", ");
    };

    const payload = {
      // Basic Fields
      id: formData.id,
      title: formData.title,
      level: formData.level,
      duration: formData.duration,
      language: formData.language,
      credits: formData.credit,
      status: formData.status,
      description: formData.description,
      curriculum_overview: formData.curriculum_overview,
      requirements: formData.requirements,

      // Process Strings
      first_year_courses: processCurriculum(formData.curriculum.year1),
      second_year_courses: processCurriculum(formData.curriculum.year2),
      third_year_courses: processCurriculum(formData.curriculum.year3),
      fourth_year_courses: processCurriculum(formData.curriculum.year4),

      // Expand Learning Outcomes to Objects
      learning_outcomes: formData.learningOutcomes.map(text => ({ outcome_text: text })),

      // Faculties (already objects)
      faculties: formData.faculties,

      // Deadlines
      deadlines: formData.deadlines,

      // Steps (Rename title/desc to step_title/step_description)
      steps: formData.appProcess.map((step, index) => ({
        step_title: step.title,
        step_description: step.description,
        order: index + 1
      })),
    };

    console.log("Constructing FormData from payload:", payload);

    const fd = new FormData();
    Object.keys(payload).forEach(key => {
      const value = payload[key];
      if (value === null || value === undefined) return;

      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (typeof item === "object") {
            Object.keys(item).forEach((subKey) => {
              // Using key[index]subKey format which is common for DRF multipart
              fd.append(`${key}[${index}]${subKey}`, item[subKey]);
            });
          } else {
            // For simple arrays like learningOutcomes if they were strings
            fd.append(`${key}[${index}]`, item);
          }
        });
      } else {
        fd.append(key, value);
      }
    });

    if (formData.image instanceof File) {
      fd.append("image", formData.image);
    }

    onSave(fd);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 overflow-auto p-4 rounded-lg">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#F5E6E3] to-[#DEF0EC] text-lg px-6 py-4 rounded-t-lg border-gray-200 flex justify-between items-start sticky top-0 w-full z-10">
          <div className="font-semibold"> {isEdit ? "Edit Program" : "Add New Program"}</div>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-200px)] p-8">
          <div className="space-y-6">

            {/* Top Section: Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1 md:col-span-2">
                  <label className="block font-semibold text-xl text-gray-700 mb-2">
                    Program Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Bachelor of Computer Science"
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
                 <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Credit
                  </label>
                  <input
                    type="number"
                    name="credit"
                    value={formData.credit}
                    onChange={handleInputChange}
                    placeholder="e.g. 120"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                  />
                </div>
              </div>

              {/* Upload Section */}
              <div
                className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 h-full cursor-pointer relative overflow-hidden"
                onClick={() => fileInputRef.current.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleImageChange}
                  accept="image/*"
                />

                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <>
                    <Upload size={32} className="text-gray-400 mb-2" />
                    <button className="text-blue font-medium hover:underline">
                      Upload Image
                    </button>
                    <span className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</span>
                  </>
                )}
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Program Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Detailed program description..."
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>

            {/* Learning Outcomes */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                Learning Outcomes
              </h2>
              <div className="space-y-2 mb-4">
                {formData.learningOutcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded border border-gray-200"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-blue mt-1">•</span>
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                    <button
                      onClick={() => handleRemoveOutcome(index)}
                      className="text-gray-400 hover:text-red-600 p-1"
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
                  placeholder="Add a new learning outcome..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                />
                <button
                  onClick={handleAddOutcome}
                  className="px-4 py-2 bg-blue text-white rounded font-semibold hover:bg-blue-600 transition"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Faculties */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                Key Faculties
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {formData.faculties.map((faculty, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded flex items-start gap-3 border border-gray-200"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center font-bold text-gray-500">
                      {faculty.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900">{faculty.name}</p>
                      <p className="text-sm text-gray-600">{faculty.department}</p>
                      <p className="text-sm text-gray-500">{faculty.expertise}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveFaculty(index)}
                      className="text-gray-400 hover:text-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <input
                  type="text"
                  value={newFaculty.name}
                  onChange={(e) =>
                    setNewFaculty((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Faculty Name"
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                />
                <input
                  type="text"
                  value={newFaculty.department}
                  onChange={(e) => setNewFaculty(prev => ({ ...prev, department: e.target.value }))}
                  placeholder="Department"
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                />
                <input
                  type="text"
                  value={newFaculty.expertise}
                  onChange={(e) =>
                    setNewFaculty((prev) => ({ ...prev, expertise: e.target.value }))
                  }
                  placeholder="Expertise"
                  className=" col-span-1 md:col-span-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                />
                <button
                  onClick={handleAddFaculty}
                  className="md:col-span-4 px-4 py-2 bg-blue text-white rounded font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-2"
                >
                  <Plus size={18} /> Add Faculty
                </button>
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                Program Curriculum
              </h2>
              <div className="mb-4">
                <label className="block font-semibold text-gray-700 mb-2">Curriculum Overview</label>
                <textarea
                  name="curriculum_overview"
                  value={formData.curriculum_overview}
                  onChange={handleInputChange}
                  placeholder="Brief overview of the curriculum..."
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["year1", "year2", "year3", "year4"].map((year, idx) => (
                  <div key={year} className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <label className="block font-semibold text-blue-800 mb-2">
                      {["First", "Second", "Third", "Fourth"][idx]} Year Courses
                    </label>
                    <textarea
                      placeholder={`Enter courses for year ${idx + 1}...`}
                      rows="5"
                      // Use value directly since it's now a string in state
                      value={formData.curriculum[year] || ""}
                      onChange={(e) =>
                        handleCurriculumChange(year, e.target.value)
                      }
                      className="w-full px-3 py-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue bg-white"
                    />
                    <p className="text-xs text-gray-500 mt-1 text-right">Separate courses with new lines</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deadlines & Requirements */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                Admission Requirements & Deadlines
              </h2>

              <div className="mb-6">
                <label className="block font-semibold text-gray-700 mb-2">Requirements</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="Enter admission requirements..."
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue mb-4"
                />
              </div>

              <div className="bg-[#EFF6FF] p-5 border border-[#BFDBFE] rounded-lg">
                <p className="font-semibold text-blue mb-4">
                  Application Deadlines
                </p>
                <div className="space-y-3 mb-4">
                  {formData.deadlines.map((deadline, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white p-3 rounded shadow-sm">
                      <Calendar className="text-blue" size={20} />
                      <div className="flex-1">
                        <span className="font-semibold text-gray-800">{deadline.batch_name}:</span><br />
                        <span className=" text-gray-600 "> <span className="font-semibold">Start: </span>{deadline.start_date}</span>
                        <span className="ml-2 text-gray-600"><span className="font-semibold">End: </span>{deadline.deadline_date}</span>
                        <span className="ml-2 text-gray-600"><span className="font-semibold">Next Start: </span>{deadline.next_start_date}</span>
                      </div>
                      <button onClick={() => handleRemoveDeadline(index)} className="text-gray-400 hover:text-red-500">
                        <X size={18} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 items-end">
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Batch Name</label>
                    <input
                      type="text"
                      value={newDeadline.batch_name}
                      onChange={(e) => setNewDeadline(prev => ({ ...prev, batch_name: e.target.value }))}
                      placeholder="e.g. Spring 2026"
                      className="w-full px-3 py-2 border border-blue-200 rounded mt-1 focus:ring-2 focus:ring-blue focus:outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Start Date</label>
                    <input
                      type="date"
                      value={newDeadline.start_date}
                      onChange={(e) => setNewDeadline(prev => ({ ...prev, start_date: e.target.value }))}
                      className="w-full px-3 py-2 border border-blue-200 rounded mt-1 focus:ring-2 focus:ring-blue focus:outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase">End Date</label>
                    <input
                      type="date"
                      value={newDeadline.deadline_date}
                      onChange={(e) => setNewDeadline(prev => ({ ...prev, deadline_date: e.target.value }))}
                      className="w-full px-3 py-2 border border-blue-200 rounded mt-1 focus:ring-2 focus:ring-blue focus:outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Next Start Date</label>
                    <input
                      type="date"
                      value={newDeadline.next_start_date}
                      onChange={(e) => setNewDeadline(prev => ({ ...prev, next_start_date: e.target.value }))}
                      className="w-full px-3 py-2 border border-blue-200 rounded mt-1 focus:ring-2 focus:ring-blue focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={handleAddDeadline}
                    className="px-4 py-2 bg-blue text-white rounded font-semibold hover:bg-blue-600 h-[42px]"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Application Steps */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                Application Process
              </h2>
              <div className="space-y-3 mb-4">
                {formData.appProcess.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-gray-50 p-4 rounded border border-gray-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900">
                        {step.title}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveAppProcess(index)}
                      className="text-gray-400 hover:text-red-600 flex-shrink-0 mt-1"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded border border-gray-200 border-dashed">
                <div className="col-span-1 md:col-span-2 text-sm font-semibold text-gray-500 uppercase">Add New Step</div>
                <input
                  type="text"
                  value={newAppProcess.title}
                  onChange={(e) =>
                    setNewAppProcess((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  placeholder="Step Title (e.g. Online Application)"
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
                  placeholder="Description (e.g. Fill out the admission form...)"
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
                />
                <button
                  onClick={handleAddAppProcess}
                  className="col-span-1 md:col-span-2 px-4 py-2 bg-blue text-white rounded font-semibold hover:bg-blue-600 transition"
                >
                  Add Step
                </button>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 justify-end pt-6 border-t mt-8">
              <button
                onClick={onCancel}
                className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-semibold text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-8 py-2.5 bg-blue text-white rounded-lg hover:bg-blue-600 transition font-semibold shadow-sm hover:shadow"
              >
                {isEdit ? "Save Changes" : "Create Program"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
