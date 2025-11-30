"use client"

export default function UniversityDetailsModal({ university, onClose, onApprove, onReject }) {
  if (!university) return null

  const isPending = university.status === "pending"

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-4">
        {/* Header with University Info */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{university.logo}</div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{university.name}</h2>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  university.status === "approved"
                    ? "bg-green-100 text-green-800"
                    : university.status === "rejected"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {university.status.charAt(0).toUpperCase() + university.status.slice(1)}
              </span>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
            ×
          </button>
        </div>

        {/* Description */}
        <div>
          <p className="text-sm text-gray-600">{university.description}</p>
        </div>

        {/* University Details */}
        <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-200">
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold">Founded Date</p>
            <p className="text-gray-900 font-medium">{university.foundedDate}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold">Application Seats</p>
            <p className="text-gray-900 font-medium">{university.applicationSeats}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold">Application Deadline</p>
            <p className="text-gray-900 font-medium">{university.applicationDeadline}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold">Email</p>
            <p className="text-gray-900 font-medium text-sm">{university.email}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          {isPending ? (
            <>
              <button
                onClick={onReject}
                className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Reject
              </button>
              <button
                onClick={onApprove}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Approve
              </button>
            </>
          ) : (
            <button
              onClick={onClose}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
