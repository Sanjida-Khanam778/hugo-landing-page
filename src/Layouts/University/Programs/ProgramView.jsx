import { useState } from "react"

export default function ProgramsView({ programs, onAdd, onEdit, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [deleteModal, setDeleteModal] = useState(false)
  const [programToDelete, setProgramToDelete] = useState(null)

  const filteredPrograms = programs.filter(program =>
    program.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDeleteClick = (program) => {
    setProgramToDelete(program)
    setDeleteModal(true)
  }

  const handleConfirmDelete = () => {
    onDelete(programToDelete)
    setDeleteModal(false)
    setProgramToDelete(null)
  }

  const getStatusColor = (status) => {
    if (status === "Published") return "bg-green-100 text-green-700"
    if (status === "Draft") return "bg-yellow-100 text-yellow-700"
    return "bg-gray-100 text-gray-700"
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Programs</h1>
        <button
          onClick={onAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
        >
          + Add New Program
        </button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search programs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-8 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.map(program => (
          <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Header with Status */}
            <div className={`p-4 ${getStatusColor(program.status)}`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{program.name}</h3>
                <button className="text-gray-600 hover:text-gray-900">⋯</button>
              </div>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(program.status)}`}>
                {program.status}
              </span>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex gap-4 mb-4">
                <img
                  src="/student-graduation.jpg"
                  alt="Program"
                  className="w-16 h-16 rounded-lg"
                />
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-600">Level</p>
                      <p className="font-semibold">{program.level}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Duration</p>
                      <p className="font-semibold">{program.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Language</p>
                      <p className="font-semibold">{program.language}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Applications</p>
                      <p className="font-semibold">{program.applications}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t pt-3 flex justify-between items-center">
                <p className="text-xs text-gray-600">Last updated: {program.lastUpdated}</p>
                <div className="flex gap-3">
                  <button className="text-blue-600 hover:text-blue-800 text-lg">👁️</button>
                  <button
                    onClick={() => onEdit(program)}
                    className="text-green-600 hover:text-green-800 text-lg"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDeleteClick(program)}
                    className="text-red-600 hover:text-red-800 text-lg"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Modal */}
      {deleteModal && programToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Delete Program</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete <span className="font-semibold">{programToDelete.name}</span>? This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
