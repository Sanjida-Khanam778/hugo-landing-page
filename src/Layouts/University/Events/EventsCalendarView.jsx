"use client"

import { useState } from "react"

export default function EventsCalendarView({ events, onEdit, onViewRegistrations }) {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1)) // October 2025

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const monthName = currentDate.toLocaleString("default", { month: "long", year: "numeric" })
  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = []

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const getEventsForDate = (day) => {
    if (!day) return []
    const dateStr = `2025-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return events.filter((e) => e.date === dateStr)
  }

  const getEventColor = (eventType) => {
    return eventType === "Online" ? "bg-blue-100" : "bg-green-100"
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

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {/* Day headers */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold text-gray-700 py-3 bg-gray-50 rounded">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {days.map((day, index) => (
          <div key={index} className={`min-h-32 p-2 border rounded-lg ${day ? "bg-white" : "bg-gray-50"}`}>
            {day && (
              <>
                <div className="text-sm font-semibold text-gray-700 mb-2">{day}</div>
                <div className="space-y-1">
                  {getEventsForDate(day).map((event) => (
                    <div
                      key={event.id}
                      className={`text-xs p-1 rounded cursor-pointer hover:opacity-80 ${getEventColor(event.type)}`}
                    >
                      <div className="font-semibold text-gray-900 truncate">{event.title}</div>
                      <div className="text-gray-600 text-xs">{event.time}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
