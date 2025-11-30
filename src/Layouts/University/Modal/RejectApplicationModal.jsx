"use client"

import { useState } from "react"

export default function RejectApplicationModal({ application, onConfirm, onClose }) {
  const [reason, setReason] = useState("")
  const [comments, setComments] = useState("")

  const handleSubmit = () => {
    if (!reason.trim()) {
      alert("Please provide a reason for rejection")
      return
    }
    onConfirm(reason, comments)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
        <div className="flex justify-between items-center mb-4 border-b pb-3">
          <h2 className="text-xl font-semibold text-gray-900">Reject Student Application</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl leading-none">
            ×
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 mb-2">
            Are you sure you want to reject the <span className="font-semibold">{application.program}</span> program?
          </p>
         
        </div>

        <div className="bg-[#FECACA]/50 text-[#991B1B] border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700 font-semibold text-sm mb-2">Important</p>
          <p className="text-red-600 text-sm">
            A rejection email will be automatically sent to the student. Please provide a reason for the rejection
            below.
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Rejection</label>
          <input
            type="text"
            placeholder="Enter a reason..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Comments (Optional)</label>
          <textarea
            placeholder="Add any additional feedback or explanation..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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
            className="px-4 py-2 bg-red text-white rounded-lg hover:bg-red-700"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  )
}
