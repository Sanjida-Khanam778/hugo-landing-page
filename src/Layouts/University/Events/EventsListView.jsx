"use client"

import { useState } from "react"

export default function EventsListView({ events, onEdit, onViewRegistrations }) {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1))

  const monthName = currentDate.toLocaleString("default", { month: "long", year: "numeric" })

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const currentMonthEvents = events
    .filter((e) => {
      const eventDate = new Date(e.date)
      return eventDate.getMonth() === currentDate.getMonth() && eventDate.getFullYear() === currentDate.getFullYear()
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))

  const getEventTypeIcon = (type) => {
    return type === "Online" ? "📡" : "📍"
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={handlePrevMonth} className="text-gray-600 hover:text-gray-900 text-lg">
          ‹
        </button>
        <h2 className="text-lg font-semibold text-gray-900">{monthName}</h2>
        <button onClick={handleNextMonth} className="text-gray-600 hover:text-gray-900 text-lg">
          ›
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {currentMonthEvents.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No events in this month</div>
        ) : (
          currentMonthEvents.map((event) => (
            <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <span>
                      📅 {event.date} • {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      {getEventTypeIcon(event.type)} {event.type} Event
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm text-gray-600">👥 {event.registrations} registrations</div>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-1">
                      {event.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex gap-3 text-sm">
                <button onClick={() => onEdit(event)} className="text-blue-600 hover:text-blue-700 font-medium">
                  Edit Event
                </button>
                <button
                  onClick={() => onViewRegistrations(event)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Registrations
                </button>
                <button className="text-red-600 hover:text-red-700 font-medium">Cancel Event</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
