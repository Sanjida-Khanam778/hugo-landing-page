import { useState } from "react"

export default function ProgramForm({ program, onSave, onCancel, isEdit }) {
  const [formData, setFormData] = useState(program || {
    name: "",
    code: "",
    status: "Draft",
    level: "Bachelor",
    duration: "",
    language: "English",
    description: "",
    learningOutcomes: [],
    faculties: [],
    curriculum: { year1: [], year2: [], year3: [], year4: [] },
    requirements: [],
    admissionReqs: [],
    appProcess: [],
  })

  const [newOutcome, setNewOutcome] = useState("")
  const [newFaculty, setNewFaculty] = useState({ name: "", expertise: "" })
  const [newAppProcess, setNewAppProcess] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleAddOutcome = () => {
    if (newOutcome.trim()) {
      setFormData(prev => ({
        ...prev,
        learningOutcomes: [...prev.learningOutcomes, newOutcome]
      }))
      setNewOutcome("")
    }
  }

  const handleRemoveOutcome = (index) => {
    setFormData(prev => ({
      ...prev,
      learningOutcomes: prev.learningOutcomes.filter((_, i) => i !== index)
    }))
  }

  const handleAddFaculty = () => {
    if (newFaculty.name.trim()) {
      setFormData(prev => ({
        ...prev,
        faculties: [...prev.faculties, newFaculty]
      }))
      setNewFaculty({ name: "", expertise: "" })
    }
  }

  const handleRemoveFaculty = (index) => {
    setFormData(prev => ({
      ...prev,
      faculties: prev.faculties.filter((_, i) => i !== index)
    }))
  }

  const handleAddAppProcess = () => {
    if (newAppProcess.trim()) {
      setFormData(prev => ({
        ...prev,
        appProcess: [...prev.appProcess, newAppProcess]
      }))
      setNewAppProcess("")
    }
  }

  const handleRemoveAppProcess = (index) => {
    setFormData(prev => ({
      ...prev,
      appProcess: prev.appProcess.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{isEdit ? "Edit Program" : "Add New Program"}</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Program Description */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Program Description</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Program Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Bachelor of Computer Science"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Program Code</label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleInputChange}
                  placeholder="e.g. BCS"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Level</label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option>Bachelor</option>
                  <option>Master</option>
                  <option>PhD</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="e.g. 4 years"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Language</label>
                <input
                  type="text"
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  placeholder="e.g. English"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option>Draft</option>
                  <option>Published</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Program description..."
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Learning Outcomes */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Learning Outcomes</h2>
            <div className="space-y-2">
              {formData.learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                  <span>{outcome}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveOutcome(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              <input
                type="text"
                value={newOutcome}
                onChange={(e) => setNewOutcome(e.target.value)}
                placeholder="Add learning outcome..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="button"
                onClick={handleAddOutcome}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>

          {/* Faculties */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Program Faculties</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {formData.faculties.map((faculty, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold">{faculty.name}</p>
                      <p className="text-sm text-gray-600">{faculty.expertise}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveFaculty(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                value={newFaculty.name}
                onChange={(e) => setNewFaculty(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Faculty name..."
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                value={newFaculty.expertise}
                onChange={(e) => setNewFaculty(prev => ({ ...prev, expertise: e.target.value }))}
                placeholder="Expertise..."
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="button"
                onClick={handleAddFaculty}
                className="col-span-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Faculty
              </button>
            </div>
          </div>

          {/* Curriculum */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Program Curriculum</h2>
            <div className="grid grid-cols-2 gap-4">
              {['year1', 'year2', 'year3', 'year4'].map((year, idx) => (
                <div key={year}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Year {idx + 1}</label>
                  <textarea
                    placeholder={`Year ${idx + 1} courses...`}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Administrative Requirements</h2>
            <textarea
              placeholder="List requirements..."
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Application Process */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Application Process</h2>
            <ol className="space-y-2 mb-4">
              {formData.appProcess.map((step, index) => (
                <li key={index} className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">{index + 1}</span>
                  <span className="flex-1">{step}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveAppProcess(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ol>
            <div className="flex gap-2">
              <input
                type="text"
                value={newAppProcess}
                onChange={(e) => setNewAppProcess(e.target.value)}
                placeholder="Add application step..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="button"
                onClick={handleAddAppProcess}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex gap-4 justify-end pt-4 border-t">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              {isEdit ? "Save Changes" : "Create Program"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
