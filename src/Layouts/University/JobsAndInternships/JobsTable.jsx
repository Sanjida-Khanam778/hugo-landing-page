"use client";

import { Calendar } from "lucide-react";

export default function JobsTable({ jobs, onView, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Job Title
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Department
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Type
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Location
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Applications
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Status
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {jobs.map((job) => (
            <tr key={job.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm flex flex-col gap-1">
                <span className="font-medium">{job.title}</span>
                <span className="text-gray-500 flex items-center gap-1">
                  <Calendar size={14} /> Posted: {job.posted_date}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {job.department}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{job.job_type}</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {job.location}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {job.applications}
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col gap-1">
                  <span className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-medium ${job.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                    }`}>
                    {job.status}
                  </span>
                  <span className="text-gray-500 text-xs font-medium">Expires: {job?.deadline}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm">
                <div className="flex gap-3">
                  <button
                    onClick={() => onView(job)}
                    className="text-blue hover:underline"
                    title="View"
                  >
                    View
                  </button>
                  <button
                    onClick={() => onEdit(job)}
                    className="text-blue hover:underline"
                    title="Edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete && onDelete(job.id)}
                    className="text-red hover:underline font-medium"
                    title="Delete"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
