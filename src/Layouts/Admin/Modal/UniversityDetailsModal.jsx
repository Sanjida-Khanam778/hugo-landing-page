"use client";
import uni_logo from "../../../assets/icons/uni_logo.png";
export default function UniversityDetailsModal({
  university,
  onClose,
  onApprove,
  onReject,
}) {
  if (!university) return null;

  const isPending = university.status === "pending";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 space-y-4">
        {/* Header with University Info */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1">
            <img src={uni_logo} className="w-20" alt="" />
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {university.name}
              </h2>
              <span className="text-grey">United States</span>
            </div>
          </div>
          <span
            className={`inline-block px-3 py-1 rounded-full  font-medium ${
              university.status === "approved"
                ? "bg-[#DCFCE7] text-[#166534]"
                : university.status === "rejected"
                ? "bg-[#FEE2E2] text-[#991B1B]"
                : "bg-[#FEF9C3] text-[#854D0E]"
            }`}
          >
            {university.status.charAt(0).toUpperCase() +
              university.status.slice(1)}
          </span>
        </div>

        {/* University Details */}
        <div className="pt-4 border-t border-gray-200">
          {/* Description */}
          <div>
            <p className=" text-gray-600">
              A world-leading teaching and research institution dedicated to
              finding solutions to big challenges and preparing students for
              leadership.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <p className=" text-gray-500 font-medium">Contact Email</p>
              <p className="text-gray-900">{university.email}</p>
            </div>
            <div>
              <p className=" text-gray-500 font-medium">Application Date</p>
              <p className="text-gray-900">9/28/2023</p>
            </div>
            <div>
              <p className=" text-gray-500 font-medium">Programs</p>
              <p className="text-gray-900">280</p>
            </div>
            <div>
              <p className=" text-gray-500 font-medium">Students</p>
              <p className="text-gray-900 ">17,000</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          {isPending ? (
            <>
              <button
                onClick={onReject}
                className="flex-1 bg-red text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Reject
              </button>
              <button
                onClick={onApprove}
                className="flex-1 bg-green text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Approve
              </button>
            </>
          ) : (
            <button
              onClick={onClose}
              className="w-full bg-blue-600 py-2 rounded-lg border shadow-md transition-colors font-medium"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
