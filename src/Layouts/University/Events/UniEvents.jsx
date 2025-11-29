"use client";

import { useState } from "react";
import EventsCalendarView from "./EventsCalendarView";
import EventsListView from "./EventsListView";
import EventFormModal from "../Modal/EventFormModal";
import ViewRegistrationsModal from "../Modal/ViewRegistrationsModal";

export default function UniEvents() {
  const [activeTab, setActiveTab] = useState("calendar"); // calendar, list
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [viewingRegistrations, setViewingRegistrations] = useState(null);

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Virtual Open Day",
      date: "2025-10-15",
      time: "10:00 - 14:00",
      type: "Online",
      status: "Upcoming",
      description:
        "This is a sample event description. In a real application, this would contain detailed information about the event.",
      registrations: 128,
      registrationsList: [
        {
          id: 1,
          name: "John Smith",
          email: "john.smith@email.com",
          program: "Computer Science",
          registeredOn: "2025-09-28",
        },
        {
          id: 2,
          name: "Emma Johnson",
          email: "emma.j@email.com",
          program: "Business Administration",
          registeredOn: "2025-09-28",
        },
        {
          id: 3,
          name: "Michael Brown",
          email: "michael.b@email.com",
          program: "Engineering",
          registeredOn: "2025-09-28",
        },
        {
          id: 4,
          name: "Sophia Williams",
          email: "sophia.w@email.com",
          program: "Psychology",
          registeredOn: "2025-09-28",
        },
        {
          id: 5,
          name: "Daniel Martinez",
          email: "daniel.m@email.com",
          program: "Medicine",
          registeredOn: "2025-09-28",
        },
      ],
    },
    {
      id: 2,
      title: "MBA Information Session",
      date: "2025-10-18",
      time: "10:00 - 14:00",
      type: "Online",
      status: "Upcoming",
      description: "Learn about MBA program opportunities",
      registrations: 76,
      registrationsList: [
        {
          id: 1,
          name: "Sarah Cooper",
          email: "sarah.c@email.com",
          program: "MBA",
          registeredOn: "2025-09-28",
        },
        {
          id: 2,
          name: "James Wilson",
          email: "james.w@email.com",
          program: "Finance",
          registeredOn: "2025-09-28",
        },
      ],
    },
    {
      id: 3,
      title: "Campus Tour",
      date: "2025-10-19",
      time: "10:00 - 14:00",
      type: "Campus",
      status: "Upcoming",
      description: "Guided tour of campus facilities",
      registrations: 42,
      registrationsList: [
        {
          id: 1,
          name: "Lisa Anderson",
          email: "lisa.a@email.com",
          program: "Engineering",
          registeredOn: "2025-09-28",
        },
      ],
    },
    {
      id: 4,
      title: "Alumni Networking Event",
      date: "2025-10-25",
      time: "10:00 - 14:00",
      type: "Campus",
      status: "Upcoming",
      description: "Network with university alumni",
      registrations: 89,
      registrationsList: [
        {
          id: 1,
          name: "Robert Taylor",
          email: "robert.t@email.com",
          program: "Entrepreneurship",
          registeredOn: "2025-09-28",
        },
      ],
    },
  ]);

  const handleCreateEvent = () => {
    setEditingEvent(null);
    setShowEventForm(true);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setShowEventForm(true);
  };

  const handleSaveEvent = (eventData) => {
    if (editingEvent) {
      setEvents(
        events.map((e) =>
          e.id === editingEvent.id ? { ...e, ...eventData } : e
        )
      );
    } else {
      const newEvent = {
        id: Math.max(...events.map((e) => e.id), 0) + 1,
        ...eventData,
        registrations: 0,
        registrationsList: [],
      };
      setEvents([...events, newEvent]);
    }
    setShowEventForm(false);
  };

  const handleViewRegistrations = (event) => {
    setViewingRegistrations(event);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Event Manager</h1>
        <button
          onClick={handleCreateEvent}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <span className="text-xl">+</span> Create Event
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("calendar")}
          className={`px-4 py-3 font-medium transition-colors ${
            activeTab === "calendar"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Calendar
        </button>
        <button
          onClick={() => setActiveTab("list")}
          className={`px-4 py-3 font-medium transition-colors ${
            activeTab === "list"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          List View
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "calendar" && (
        <EventsCalendarView
          events={events}
          onEdit={handleEditEvent}
          onViewRegistrations={handleViewRegistrations}
        />
      )}

      {activeTab === "list" && (
        <EventsListView
          events={events}
          onEdit={handleEditEvent}
          onViewRegistrations={handleViewRegistrations}
        />
      )}

      {/* Event Form Modal */}
      {showEventForm && (
        <EventFormModal
          event={editingEvent}
          onSave={handleSaveEvent}
          onClose={() => setShowEventForm(false)}
          isEdit={!!editingEvent}
        />
      )}

      {/* View Registrations Modal */}
      {viewingRegistrations && (
        <ViewRegistrationsModal
          event={viewingRegistrations}
          onClose={() => setViewingRegistrations(null)}
        />
      )}
    </div>
  );
}
