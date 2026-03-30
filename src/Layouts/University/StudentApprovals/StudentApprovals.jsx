"use client";

import { CheckCircle, CirclePlus, Eye, Mail } from "lucide-react";
import { useState } from "react";
import StudentApplicationDetailsModal from "../Modal/StudentApplicationDetailsModal";
import {
  useGetUniversityApplicationsQuery,
  useUpdateApplicationStatusMutation,
} from "../../../Api/universityApi";
import toast from "react-hot-toast";

export default function StudentApprovals() {
  const {
    data: applicationsResponse,
    isLoading,
    error,
  } = useGetUniversityApplicationsQuery();
  const [updateStatus, { isLoading: isUpdating }] =
    useUpdateApplicationStatusMutation();

  const [viewingApp, setViewingApp] = useState(null);

  const getFullUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `https://api.clasia.io${path}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString();
  };

  if (isLoading)
    return (
      <div className="p-8 text-center text-gray-500">
        Loading applications...
      </div>
    );
  if (error)
    return (
      <div className="p-8 text-center text-red-500">
        Error loading applications.
      </div>
    );

  const applications = applicationsResponse?.pending_applications || [];
  const processedApplications = applicationsResponse?.recently_processed || [];

  const handleStatusUpdate = async (id, status) => {
    try {
      await updateStatus({ id, status }).unwrap();
      toast.success(`Application ${status.toLowerCase()} successfully!`);
    } catch (err) {
      console.error(err);
      toast.error(
        err?.data?.error || `Failed to ${status.toLowerCase()} application`,
      );
    }
  };

  const getDocumentsList = (app) => {
    const docs = [];
    if (app.id_photo_front)
      docs.push({ name: "ID Front", url: getFullUrl(app.id_photo_front) });
    if (app.id_photo_back)
      docs.push({ name: "ID Back", url: getFullUrl(app.id_photo_back) });
    if (app.supporting_documents)
      docs.push({
        name: "Support Doc",
        url: getFullUrl(app.supporting_documents),
      });
    return docs;
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Student Approvals</h1>
      </div>

      {/* Pending Applications Section */}
      <div className="mb-8 bg-white rounded-lg">
        <h2 className="text-xl font-semibold text-gray-900 p-6 border-b">
          Pending Applications ({applications.length})
        </h2>

        {applications.length === 0 ? (
          <p className="p-8 text-gray-500 text-center">
            No pending applications
          </p>
        ) : (
          <div className="divide-y-2">
            {applications.map((app) => (
              <div key={app.id} className="p-6 grid grid-cols-4">
                <div className="col-span-3">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {app.full_name}
                        </h3>
                        <p className="text-gray-600 flex items-center gap-1">
                          <Mail size={18} strokeWidth={3.0} />
                          {app.email}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-gray-500">Applied Program</p>
                      <p className="font-medium text-gray-900">
                        {app.desired_program}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Nationality</p>
                      <p className="font-medium text-gray-900">
                        {app.nationality}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Application Date</p>
                      <p className="font-medium text-gray-900">
                        {formatDate(app.created_at)}
                      </p>
                    </div>
                    <div className="">
                      <p className="text-gray-500 mb-2">Documents</p>
                      <div className="flex gap-4 flex-wrap">
                        {getDocumentsList(app).map((doc, idx) => (
                          <a
                            key={idx}
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue hover:underline"
                          >
                            {doc.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 items-end justify-center col-span-1">
                  <button
                    onClick={() => handleStatusUpdate(app.id, "Approved")}
                    disabled={isUpdating}
                    className="px-4 py-2 bg-[#DCFCE7] w-full max-w-[160px] justify-center items-center gap-2 flex text-[#15803D] rounded-lg hover:bg-[#d1fadf] disabled:opacity-50"
                  >
                    <CheckCircle size={20} strokeWidth={3.0} /> Approve
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(app.id, "Rejected")}
                    disabled={isUpdating}
                    className="px-4 py-2 bg-[#FEE2E2] w-full max-w-[160px] justify-center items-center gap-2 flex text-[#B91C1C] rounded-lg hover:bg-[#fec8c8] disabled:opacity-50"
                  >
                    <CirclePlus
                      size={20}
                      strokeWidth={3.0}
                      className="rotate-45"
                    />{" "}
                    Reject
                  </button>
                  <button
                    onClick={() => setViewingApp(app)}
                    className="px-4 py-2 bg-[#DBEAFE] w-full max-w-[160px] justify-center items-center gap-2 flex text-blue rounded-lg hover:bg-blue-200"
                  >
                    <Eye size={20} strokeWidth={3.0} /> View Details
                  </button>
                  <a
                    href={`mailto:${app.email}`}
                    className="px-4 py-2 flex w-full max-w-[160px] justify-center items-center gap-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                  >
                    <Mail size={20} strokeWidth={3.0} /> Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recently Processed Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Recently Processed
        </h2>

        {processedApplications.length === 0 ? (
          <p className="text-gray-500 text-center">No processed applications</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Student
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Program
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Nationality
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {processedApplications.map((app) => (
                  <tr
                    key={app.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {app.full_name}
                        </p>
                        <p className="text-gray-600 text-sm">{app.email}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-900">
                      {app.desired_program}
                    </td>
                    <td className="py-3 px-4 text-gray-900">
                      {app.nationality}
                    </td>
                    <td className="py-3 px-4 text-gray-900">
                      {formatDate(app.created_at)}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          app.status === "Approved"
                            ? " bg-[#DCFCE7] text-[#15803D] "
                            : "bg-[#FEE2E2] text-[#B91C1C]"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex gap-3 justify-end">
                        <button
                          onClick={() => setViewingApp(app)}
                          className="text-blue hover:underline"
                        >
                          View
                        </button>
                        <a
                          href={`mailto:${app.email}`}
                          className="text-blue hover:underline"
                        >
                          Email
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modals */}
      {viewingApp && (
        <StudentApplicationDetailsModal
          application={viewingApp}
          onClose={() => setViewingApp(null)}
          getDocumentsList={getDocumentsList}
          formatDate={formatDate}
        />
      )}
    </div>
  );
}
