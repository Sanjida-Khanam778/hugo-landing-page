"use client"

import { useState } from "react"

export default function StudentApprovals() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Alexander Smith",
      email: "alex.smith@email.com",
      program: "Master of Computer Science",
      country: "United States",
      applicationDate: "2023-10-08",
      applicationId: "APP-000001",
      status: "Pending",
      documents: [
        { name: "Transcript", url: "#" },
        { name: "CV", url: "#" },
        { name: "Recommendation Letter", url: "#" },
      ],
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      email: "maria@email.com",
      program: "Bachelor of Business Administration",
      country: "Spain",
      applicationDate: "2023-10-07",
      applicationId: "APP-000002",
      status: "Pending",
      documents: [
        { name: "Transcript", url: "#" },
        { name: "CV", url: "#" },
        { name: "Personal Statement", url: "#" },
      ],
    },
  ])

  const [processedApplications, setProcessedApplications] = useState([
    {
      id: 3,
      name: "Hiroshi Tanaka",
      email: "h.tanaka@email.com",
      program: "PhD in Economics",
      country: "Japan",
      applicationDate: "2023-10-05",
      status: "Approved",
    },
    {
      id: 4,
      name: "Priya Patel",
      email: "priya.patel@email.com",
      program: "Master of Public Health",
      country: "India",
      applicationDate: "2023-10-03",
      status: "Rejected",
    },
  ])

  const [rejectingApp, setRejectingApp] = useState(null)
  const [approvingApp, setApprovingApp] = useState(null)
  const [viewingApp, setViewingApp] = useState(null)

  const handleReject = (application) => {
    setRejectingApp(application)
  }

  const handleConfirmReject = (reason, comments) => {
    const updated = applications.filter((a) => a.id !== rejectingApp.id)
    setApplications(updated)
    setProcessedApplications([
      ...processedApplications,
      {
        ...rejectingApp,
        status: "Rejected",
      },
    ])
    setRejectingApp(null)
  }

  const handleApprove = (application) => {
    setApprovingApp(application)
  }

  const handleConfirmApprove = (notes) => {
    const updated = applications.filter((a) => a.id !== approvingApp.id)
    setApplications(updated)
    setProcessedApplications([
      ...processedApplications,
      {
        ...approvingApp,
        status: "Approved",
      },
    ])
    setApprovingApp(null)
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Student Approvals</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
            All Applications
          </button>
        </div>
      </div>

      {/* Pending Applications Section */}
      <div className="mb-8 bg-white rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Pending Applications ({applications.length})</h2>

        {applications.length === 0 ? (
          <p className="text-gray-500">No pending applications</p>
        ) : (
          <div className="space-y-6">
            {applications.map((app) => (
              <div key={app.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 font-semibold">{getInitials(app.name)}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{app.name}</h3>
                      <p className="text-sm text-gray-600">{app.email}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Applied Program</p>
                    <p className="font-medium text-gray-900">{app.program}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Country</p>
                    <p className="font-medium text-gray-900">{app.country}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Application Date</p>
                    <p className="font-medium text-gray-900">{app.applicationDate}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Documents</p>
                  <div className="flex gap-4">
                    {app.documents.map((doc, idx) => (
                      <a key={idx} href={doc.url} className="text-blue-600 text-sm hover:underline">
                        {doc.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => handleApprove(app)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(app)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => setViewingApp(app)}
                    className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 font-medium"
                  >
                    View Details
                  </button>
                  <a
                    href={`mailto:${app.email}`}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recently Processed Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Recently Processed</h2>

        {processedApplications.length === 0 ? (
          <p className="text-gray-500">No processed applications</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Student</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Program</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Country</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Applied Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {processedApplications.map((app) => (
                  <tr key={app.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{app.name}</p>
                        <p className="text-sm text-gray-600">{app.email}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-900">{app.program}</td>
                    <td className="py-3 px-4 text-gray-900">{app.country}</td>
                    <td className="py-3 px-4 text-gray-900">{app.applicationDate}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          app.status === "Approved" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => setViewingApp(app)}
                          className="text-blue-600 hover:underline text-sm font-medium"
                        >
                          View
                        </button>
                        <a href={`mailto:${app.email}`} className="text-blue-600 hover:underline text-sm font-medium">
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
      {rejectingApp && (
        <RejectApplicationModal
          application={rejectingApp}
          onConfirm={handleConfirmReject}
          onClose={() => setRejectingApp(null)}
        />
      )}

      {approvingApp && (
        <ApproveApplicationModal
          application={approvingApp}
          onConfirm={handleConfirmApprove}
          onClose={() => setApprovingApp(null)}
        />
      )}

      {viewingApp && <StudentApplicationDetailsModal application={viewingApp} onClose={() => setViewingApp(null)} />}
    </div>
  )
}
