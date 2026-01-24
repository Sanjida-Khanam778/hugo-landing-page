"use client"

import { Calendar, Dot, MapPin, Users, Video } from "lucide-react"
import { useState } from "react"

export default function EventsListView({ events = [], onEdit, onViewRegistrations }) {
  const [currentDate, setCurrentDate] = useState(new Date())

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
    return type === "Online" ? <Video size={20} strokeWidth={3.00} /> : <MapPin size={20} strokeWidth={3.00} />
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Month Navigation */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <button
          onClick={handlePrevMonth}
          className="text-gray-600 hover:text-gray-900 text-lg"
        >
          ‹
        </button>
        <h2 className="text-lg font-semibold text-gray-900">{monthName}</h2>
        <button
          onClick={handleNextMonth}
          className="text-gray-600 hover:text-gray-900 text-lg"
        >
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
                <div className="flex gap-4">
             
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span className="flex gap-2">
                        <Calendar size={18} strokeWidth={3.00} />{event.date}
                      </span>
                      <span className="flex items-center"> <Dot /> {event.time}</span>
                    </div>
                    <span className={`flex items-center gap-2 text-gray-600`}>
                      {getEventTypeIcon(event.event_type)} {event.event_type} Event
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right flex gap-8 items-center">
                    <div className="text-sm text-gray-600 flex gap-2">
                      <Users size={18} strokeWidth={3.00} /> {event.registration_count} registrations
                    </div>
                    <span className={`inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-1 ${event.status === "Upcoming" ? "bg-[#DCFCE7] text-[#166534]" : ""}`}>
                      {event.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex gap-3 text-sm border-t pt-4">
                <button onClick={() => onEdit(event)} className="text-blue">
                  Edit Event
                </button>
                <button
                  onClick={() => onViewRegistrations(event)}
                  className="text-blue"
                >
                  View Registrations
                </button>
                <button className="text-red">Cancel Event</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
