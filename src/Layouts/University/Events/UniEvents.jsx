"use client";

import { useState } from "react";
import EventsCalendarView from "./EventsCalendarView";
import EventsListView from "./EventsListView";
import EventFormModal from "../Modal/EventFormModal";
import ViewRegistrationsModal from "../Modal/ViewRegistrationsModal";
import { useGetAllEventsQuery } from "../../../Api/universityApi";

export default function UniEvents() {
  const [activeTab, setActiveTab] = useState("calendar"); // calendar, list
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [viewingRegistrations, setViewingRegistrations] = useState(null);

  const { data: events = [], isLoading, error } = useGetAllEventsQuery();

  const handleCreateEvent = () => {
    setEditingEvent(null);
    setShowEventForm(true);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setShowEventForm(true);
  };

  const handleSaveEvent = (eventData) => {
    // This will be handled by mutations later
    setShowEventForm(false);
  };

  const handleViewRegistrations = (event) => {
    setViewingRegistrations(event);
  };

  if (isLoading) return <div className="p-8">Loading events...</div>;
  if (error) return <div className="p-8 text-red-500">Error loading events.</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Event Manager</h1>
        <button
          onClick={handleCreateEvent}
          className="bg-blue text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <span className="text-xl">+</span> Create Event
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("calendar")}
          className={`px-4 py-3 transition-colors ${activeTab === "calendar"
              ? "text-blue bg-[#DBEAFE] rounded-lg"
              : "text-gray-600 hover:text-gray-900"
            }`}
        >
          Calendar
        </button>
        <button
          onClick={() => setActiveTab("list")}
          className={`px-4 py-3 transition-colors ${activeTab === "list"
              ? "text-blue bg-[#DBEAFE] rounded-lg"
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
