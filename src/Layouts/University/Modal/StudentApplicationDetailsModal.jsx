"use client";

import { Download } from "lucide-react";

export default function StudentApplicationDetailsModal({
  application,
  onClose,
}) {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h2 className="text-xl font-medium text-gray-900">
            Student Application Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="mb-6 border-b pb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-sky rounded-full flex items-center justify-center">
              <span className="text-2xl text-blue font-medium">
                {getInitials(application.name)}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {application.name}
              </h3>
              <p className="text-gray-600">{application.email}</p>
              <div className="mt-2">
                <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  {application.status} Review
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 border-b pb-4">
          <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Applied Program</p>
            <p className="font-medium text-gray-900">{application.program}</p>
          </div>
            <div>
              <p className="text-sm text-gray-500">Country</p>
              <p className="font-medium text-gray-900">{application.country}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Application Date</p>
              <p className="font-medium text-gray-900">
                {application.applicationDate}
              </p>
            </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm text-gray-500">Application ID</p>
            <p className="font-medium text-gray-900">
              {application.applicationId}
            </p>
          </div>
          </div>
        </div>

        {application.documents && (
          <div className="mb-6">
            <p className=" text-grey mb-3">Documents</p>
            <div className="space-y-2">
              {application.documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 border rounded-lg"
                >
                  <span className="text-gray-700">{doc.name}</span>
                  <a
                    href={doc.url}
                    className="text-blue hover:underline text-sm flex items-center gap-2"
                  >
                    <Download size={18} strokeWidth={3.0} /> Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
