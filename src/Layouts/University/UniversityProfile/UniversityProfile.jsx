"use client"

import { useState } from "react"
import { Upload, Plus, Edit2, Trash2, X } from 'lucide-react'
import AddRankingModal from "./Modal/AddRankingModal"
import AddLocationModal from "./Modal/AddLocationModal"
import AddAccreditationModal from "./Modal/AddAccreditationModal"

export default function UniversityProfile() {
  const [activeModal, setActiveModal] = useState(null)
  const [rankings, setRankings] = useState([
    { id: 1, org: "QS World University Rankings", rank: "#45", year: "2024" },
    { id: 2, org: "Times Higher Education", rank: "#67", year: "2024" },
  ])
  const [locations, setLocations] = useState([{ id: 1, name: "LARC Campus", address: "Main St, City, Country" }])
  const [accreditations, setAccreditations] = useState([
    { id: 1, name: "New England Commission of Higher Education (NECHE)", status: "Valid" },
    { id: 2, name: "Association of American Universities (AAU)", status: "Valid" },
  ])

  const handleAddRanking = (data) => {
    setRankings([...rankings, { id: Date.now(), ...data }])
    setActiveModal(null)
  }

  const handleAddLocation = (data) => {
    setLocations([...locations, { id: Date.now(), ...data }])
    setActiveModal(null)
  }

  const handleAddAccreditation = (data) => {
    setAccreditations([...accreditations, { id: Date.now(), ...data }])
    setActiveModal(null)
  }

  const handleDeleteRanking = (id) => {
    setRankings(rankings.filter((r) => r.id !== id))
  }

  const handleDeleteLocation = (id) => {
    setLocations(locations.filter((l) => l.id !== id))
  }

  const handleDeleteAccreditation = (id) => {
    setAccreditations(accreditations.filter((a) => a.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Header with Save Changes Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">University Profile</h1>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Save Changes
        </button>
      </div>

      {/* Branding Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Branding</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-blue-500 transition-colors cursor-pointer">
            <Upload size={24} className="text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">Upload Logo</span>
            <span className="text-xs text-gray-400 mt-1">Recommended: 200x200px</span>
          </div>

          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-blue-500 transition-colors cursor-pointer">
            <Upload size={24} className="text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">Banner Image</span>
            <span className="text-xs text-gray-400 mt-1">Recommended: 1200x400px</span>
          </div>

          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-blue-500 transition-colors cursor-pointer">
            <Upload size={24} className="text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">Upload Favicon</span>
            <span className="text-xs text-gray-400 mt-1">Recommended: 32x32px</span>
          </div>
        </div>
      </div>

      {/* University Information Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">University Information</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">University Name</label>
            <input
              type="text"
              placeholder="Harvard University"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
            <input
              type="url"
              placeholder="www.harvard.edu"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">About</label>
            <textarea
              placeholder="Description about your university..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows="4"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Year Founded</label>
            <input
              type="number"
              placeholder="1636"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Total Students</label>
            <input
              type="number"
              placeholder="21000"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Accreditations Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Accreditations</h2>
          <button
            onClick={() => setActiveModal("accreditation")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus size={18} />
            Add Accreditation
          </button>
        </div>
        <div className="space-y-3">
          {accreditations.map((acc) => (
            <div key={acc.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">{acc.name}</p>
                <p className="text-sm text-gray-600">Valid until Dec 2025</p>
              </div>
              <button
                onClick={() => handleDeleteAccreditation(acc.id)}
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Rankings Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Rankings</h2>
          <button
            onClick={() => setActiveModal("ranking")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus size={18} />
            Add Ranking
          </button>
        </div>
        <div className="space-y-3">
          {rankings.map((rank) => (
            <div key={rank.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">{rank.org}</p>
                <p className="text-sm text-gray-600">Rank: {rank.rank}</p>
              </div>
              <button
                onClick={() => handleDeleteRanking(rank.id)}
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Location</h2>
          <button
            onClick={() => setActiveModal("location")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus size={18} />
            Add Location
          </button>
        </div>
        <div className="space-y-3">
          {locations.map((loc) => (
            <div key={loc.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">{loc.name}</p>
                <p className="text-sm text-gray-600">{loc.address}</p>
              </div>
              <button
                onClick={() => handleDeleteLocation(loc.id)}
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {activeModal === "ranking" && (
        <AddRankingModal onAdd={handleAddRanking} onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "location" && (
        <AddLocationModal onAdd={handleAddLocation} onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "accreditation" && (
        <AddAccreditationModal onAdd={handleAddAccreditation} onClose={() => setActiveModal(null)} />
      )}
    </div>
  )
}
