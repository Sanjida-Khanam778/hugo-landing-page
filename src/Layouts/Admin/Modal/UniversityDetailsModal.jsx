"use client";
import uni_logo from "../../../assets/icons/uni_logo.png";

export default function UniversityDetailsModal({
  university,
  onClose,
  onApprove,
  onReject,
  isProcessing,
}) {
  if (!university) return null;

  const isPending = university.status?.toLowerCase() === "pending";

  const getFullUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("https") || path.startsWith("blob:")) return path;
    return `https://api.clasia.io${path}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 space-y-4">
        {/* Header with University Info */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1">
            <img
              src={university.logo ? getFullUrl(university.logo) : uni_logo}
              className="w-20 h-20 object-contain"
              alt=""
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {university.univ_name}
              </h2>
              <span className="text-grey">
                {university.location || "No address provided"}
              </span>
            </div>
          </div>
          <span
            className={`inline-block px-3 py-1 rounded-full font-medium ${
              university.status?.toLowerCase() === "approved"
                ? "bg-[#DCFCE7] text-[#166534]"
                : university.status?.toLowerCase() === "rejected"
                  ? "bg-[#FEE2E2] text-[#991B1B]"
                  : "bg-[#FEF9C3] text-[#854D0E]"
            }`}
          >
            {university.status?.charAt(0).toUpperCase() +
              university.status?.slice(1)}
          </span>
        </div>

        {/* University Details */}
        <div className="pt-4 border-t border-gray-200">
          {/* Description */}
          <div>
            <p className=" text-gray-600">
              {university.description || "No description provided."}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <p className=" text-gray-500 font-medium">Contact Email</p>
              <p className="text-gray-900">{university.email}</p>
            </div>
            <div>
              <p className=" text-gray-500 font-medium">Application Date</p>
              <p className="text-gray-900">{university.applied_on}</p>
            </div>
            <div>
              <p className=" text-gray-500 font-medium">Profile Status</p>
              <p className="text-gray-900">
                {university.is_profile_complete ? "Complete" : "Incomplete"}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          {isPending ? (
            <>
              <button
                disabled={isProcessing}
                onClick={onReject}
                className="flex-1 bg-red text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? "Processing..." : "Reject"}
              </button>
              <button
                disabled={isProcessing}
                onClick={onApprove}
                className="flex-1 bg-green text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? "Processing..." : "Approve"}
              </button>
            </>
          ) : (
            <button
              onClick={onClose}
              className="w-full bg-blue text-white py-2 rounded-lg border shadow-md transition-colors font-medium"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
