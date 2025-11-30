"use client"

import { useState } from "react"

export default function ApproveApplicationModal({ application, onConfirm, onClose }) {
  const [notes, setNotes] = useState("")

  const handleSubmit = () => {
    onConfirm(notes)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Approve Student Application</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl leading-none">
            ×
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 mb-2">
            Are you sure you want to approve <span className="font-semibold">{application.name}</span>'s application to
            the <span className="font-semibold">{application.program}</span> program?
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-700 font-semibold text-sm mb-2">What happens next?</p>
          <p className="text-green-600 text-sm">
            An acceptance email will be automatically sent to the student with further instructions on how to complete
            their enrollment.
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
          <textarea
            placeholder="Add any notes or special instructions for the student..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  )
}
