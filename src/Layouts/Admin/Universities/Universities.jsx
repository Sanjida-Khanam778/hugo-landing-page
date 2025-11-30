"use client"

import { useState } from "react"
import UniversityDetailsModal from "../Modal/UniversityDetailsModal"

// Sample universities data
const universitiesData = [
  {
    id: 1,
    name: "Oxford University",
    logo: "🎓",
    status: "pending",
    appliedDate: "2023-10-15",
    description: "One of the world's oldest universities...",
    foundedDate: "1096",
    applicationSeats: 150,
    applicationDeadline: "2024-03-15",
    email: "admissions@oxford.ac.uk",
  },
  {
    id: 2,
    name: "Stanford University",
    logo: "🎓",
    status: "approved",
    appliedDate: "2023-09-20",
    description: "A private research university...",
    foundedDate: "1891",
    applicationSeats: 200,
    applicationDeadline: "2024-04-30",
    email: "admissions@stanford.edu",
  },
  {
    id: 3,
    name: "ETH Zurich",
    logo: "🎓",
    status: "approved",
    appliedDate: "2023-08-10",
    description: "Swiss Federal Institute of Technology...",
    foundedDate: "1855",
    applicationSeats: 120,
    applicationDeadline: "2024-05-15",
    email: "admissions@ethz.ch",
  },
  {
    id: 4,
    name: "University of Tokyo",
    logo: "🎓",
    status: "pending",
    appliedDate: "2023-11-05",
    description: "Japan's leading comprehensive university...",
    foundedDate: "1877",
    applicationSeats: 180,
    applicationDeadline: "2024-06-30",
    email: "admissions@tokyo.ac.jp",
  },
  {
    id: 5,
    name: "University of Melbourne",
    logo: "🎓",
    status: "rejected",
    appliedDate: "2023-07-12",
    description: "Australia's premier research university...",
    foundedDate: "1853",
    applicationSeats: 100,
    applicationDeadline: "2024-02-28",
    email: "admissions@unimelb.edu.au",
  },
  {
    id: 6,
    name: "National University of Singapore",
    logo: "🎓",
    status: "approved",
    appliedDate: "2023-06-20",
    description: "Asia's leading research university...",
    foundedDate: "1905",
    applicationSeats: 160,
    applicationDeadline: "2024-07-15",
    email: "admissions@nus.edu.sg",
  },
]

const getStatusColor = (status) => {
  switch (status) {
    case "approved":
      return "bg-green-50 text-green-700"
    case "pending":
      return "bg-yellow-50 text-yellow-700"
    case "rejected":
      return "bg-red-50 text-red-700"
    default:
      return "bg-gray-50 text-gray-700"
  }
}

const getStatusBadgeColor = (status) => {
  switch (status) {
    case "approved":
      return "bg-green-100 text-green-800"
    case "pending":
      return "bg-yellow-100 text-yellow-800"
    case "rejected":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function Universities() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUniversity, setSelectedUniversity] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const filteredUniversities = universitiesData.filter((uni) =>
    uni.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUniversities = filteredUniversities.slice(startIndex, startIndex + itemsPerPage)

  const handleViewUniversity = (university) => {
    setSelectedUniversity(university)
    setShowModal(true)
  }

  const handleAddUniversity = () => {
    setSelectedUniversity(null)
    setShowModal(true)
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Partner University Onboarding</h1>
        </div>
        <button
          onClick={handleAddUniversity}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          + Add University
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search universities..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setCurrentPage(1)
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Universities List */}
      <div className="space-y-4">
        {paginatedUniversities.map((university) => (
          <div key={university.id} className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="text-4xl">{university.logo}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{university.name}</h3>
                <p className="text-sm text-gray-600">Applied on {university.appliedDate}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeColor(university.status)}`}>
                {university.status.charAt(0).toUpperCase() + university.status.slice(1)}
              </span>
              <button
                onClick={() => handleViewUniversity(university)}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50"
          >
            ←
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 border rounded ${
                currentPage === page ? "bg-blue-600 text-white border-blue-600" : "border-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50"
          >
            →
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <UniversityDetailsModal
          university={selectedUniversity}
          onClose={() => setShowModal(false)}
          onApprove={() => {
            console.log("University approved")
            setShowModal(false)
          }}
          onReject={() => {
            console.log("University rejected")
            setShowModal(false)
          }}
        />
      )}
    </div>
  )
}
