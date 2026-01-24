"use client"

import { Mail } from "lucide-react"

export default function ViewRegistrationsModal({ event, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-122 overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Registrations for {event.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">
            ×
          </button>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm font-medium text-gray-900">
              Total registrations: <span className="font-bold">{event?.registrationsList?.length}</span>
            </div>
            <button className="text-blue text-sm font-medium flex items-center gap-2">
             <Mail size={20} strokeWidth={2.50} /> Email All
            </button>
          </div>

          {/* Registrations Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-[#F9FAFB]">
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Name</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Email</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Program</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Registered on</th>
                </tr>
              </thead>
              <tbody>
                {event.registrationsList.map((registration) => (
                  <tr key={registration.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-2 font-medium text-gray-900">{registration.name}</td>
                    <td className="py-3 px-2 text-gray-600">{registration.email}</td>
                    <td className="py-3 px-2 text-gray-600">{registration.program}</td>
                    <td className="py-3 px-2 text-gray-600">{registration.registeredOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 flex justify-end bg-[#F9FAFB]">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
