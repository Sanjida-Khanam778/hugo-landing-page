"use client";

import { Calendar } from "lucide-react";

export default function JobsTable({ jobs, onView, onEdit }) {
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
                <span className="text-grey flex gap-1"><Calendar size={18} strokeWidth={3.00} /> Posted: 2025-11-25</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {job.department}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{job.type}</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {job.location}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {job.applications}
              </td>
              <td className="px-6 py-4 space-x-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium bg-[#DCFCE7] text-green">
                  {job.status}
                </span>
                <span className="text-grey text-sm">Expires: 2025-12-30</span>
              </td>
              <td className="px-6 py-4 text-sm flex gap-4 ">
                <button
                  onClick={() => onView(job)}
                  className="text-blue"
                  title="View"
                >
                  View
                </button>
                <button
                  onClick={() => onEdit(job)}
                  className="text-blue"
                  title="Edit"
                >
                  Edit
                </button>
                {/* <button
                  onClick={() => onDelete(job.id)}
                  className="text-red-600 hover:text-red-700 font-medium"
                  title="Delete"
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
