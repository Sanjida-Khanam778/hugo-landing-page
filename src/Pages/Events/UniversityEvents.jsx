import { useState } from "react";
import speakerImg from "../../assets/images/speaker.png";
import event1 from "../../assets/images/event1.png";
import event2 from "../../assets/images/event2.png";
import event3 from "../../assets/images/event3.png";
import event from "../../assets/icons/event.png";
import uni_logo from "../../assets/icons/uni_logo.png";

import {
  MapPin,
  Calendar,
  Users,
  ChevronDown,
  Clock,
  Check,
  Clock1,
  Building,
  Badge,
  Award,
} from "lucide-react";
import background from "../../assets/images/uniBanner.png";
import backgroundBanner from "../../assets/images/uni_directory.png";
import { FiCalendar } from "react-icons/fi";

export default function UniversityEvents() {
  const [view, setView] = useState("list"); // 'list' or 'detail'
  const [selectedEvent, setSelectedEvent] = useState(null);
  // single-select filters
  const [eventFormat, setEventFormat] = useState("all");
  const [eventType, setEventType] = useState("all");

  const events = [
    {
      id: 1,
      title: "Harvard Business School Open Day",
      university: "Harvard University",
      date: "August 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Harvard Business School, Boston, MA",
      attendees: "200 Students",
      category: "Open Day",
      badge: "In-person",
      image: event1,
      description:
        "Explore the Harvard Business School campus and learn about our MBA programs.",
      fullDescription:
        "Explore the Harvard Business School campus and learn about our MBA programs. This open day provides students with the opportunity to tour the facilities, meet faculty and current students, and learn about the admissions process.",
      agenda: [
        {
          time: "10:00 AM - 10:30 AM",
          title: "Welcome and Introduction",
          description: "Opening remarks by the Dean of Harvard Business School",
        },
        {
          time: "10:30 AM - 11:30 AM",
          title: "MBA Program Overview",
          description:
            "Presentation on curriculum, learning approach, and student life",
        },
        {
          time: "11:30 AM - 12:30 PM",
          title: "Campus Tour",
          description:
            "Guided tour of classrooms, libraries, and student facilities",
        },
        {
          time: "12:30 PM - 01:30 PM",
          title: "Lunch Break",
          description:
            "Casual networking opportunity with MBA field candidates",
        },
        {
          time: "01:30 PM - 02:30 PM",
          title: "Admissions Workshop",
          description: "Tips and guidance on the application process",
        },
        {
          time: "02:30 PM - 03:30 PM",
          title: "Career Opportunities Panel",
          description: "Alumni share career success stories and MBA prospects",
        },
        {
          time: "03:30 PM - 04:00 PM",
          title: "Q&A Session",
          description: "Open forum for questions with admissions team",
        },
      ],
      events: [
        {
          name: "Dr. James Wilson",
          title: "Dean of Harvard Business School",
          bio: "Dr. Wilson has led Harvard Business School for over a decade, fostering innovation and global partnerships.",
        },
        {
          name: "Dr. Sarah Martinez",
          title: "Director of Admissions",
          bio: "Dr. Martinez has led Harvard Business School admissions for several years, fostering innovation and global partnerships.",
        },
        {
          name: "Dr. David Johnson",
          title: "Professor of Finance",
          bio: "An expert in corporate finance with over 20 years of experience in academia and industry.",
        },
      ],
      venue: {
        name: "Harvard Business School, Boston, MA",
        address: "Harvard Business School, Boston, Massachusetts 02163",
        parking: "Paid parking available at the HBS Parking Garage",
        accessibility: "All venue are wheelchair accessible",
        transport:
          "Public transportation available via the Red Line and shuttle buses (Shuttle)",
      },
    },
    {
      id: 2,
      title: "International Students Webinar",
      university: "Stanford University",
      date: "August 20, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event",
      attendees: "500 Students",
      category: "Webinar",
      badge: "Online",
      image: event2,
      description:
        "Join us for an online webinar to learn about studying at Stanford for international students.",
      fullDescription:
        "Join us for an online webinar to learn about studying at Stanford for international students. This webinar will cover admissions process, visa requirements, and student life.",
    },
    {
      id: 3,
      title: "Engineering Graduate Programs Info Session",
      university: "MIT",
      date: "August 25, 2025",
      time: "1:00 PM - 6:00 PM",
      location: "MIT Campus",
      attendees: "150 Students",
      category: "Info Session",
      badge: "Online",
      image: event3,
      description:
        "Learn about MIT's graduate programs in engineering, including application requirements and research opportunities.",
      fullDescription:
        "Learn about MIT's graduate programs in engineering, including application requirements and research opportunities.",
    },
  ];

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
    setView("detail");
  };

  const handleBackToList = () => {
    setView("list");
    setSelectedEvent(null);
  };

  if (view === "detail" && selectedEvent) {
    return (
      <div className="min-h-screen bg-base">
        {/* Header */}
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="bg-cover bg-no-repeat h-[50vh] text-white py-12 px-8 relative overflow-hidden flex items-center justify-center"
        >
          <div className="w-11/12 mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
            <button
              onClick={handleBackToList}
              className="mb-10 text-white/80 hover:text-white "
            >
              ← Back to Events
            </button>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white rounded-full flex-shrink-0"></div>
              <div>
                <h1 className="text-3xl xl:text-5xl font-bold mb-2">
                  {selectedEvent.title}
                </h1>
                <p className="text-blue-100 flex items-center">
                  <MapPin size={16} className="mr-2" />
                  {selectedEvent.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="col-span-2 bg-white rounded-lg">
              {/* About This Event */}
              <div className=" rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">About This Event</h2>
                <p className="text-gray-700 mb-6">
                  {selectedEvent.fullDescription}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 bg-[#EFF6FF] p-4 rounded-lg">
                    <Calendar className="text-blue mt-2" size={20} />
                    <div>
                      <p className=" text-grey">Date</p>
                      <p className=" font-medium">{selectedEvent.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-[#EFF6FF] p-4 rounded-lg">
                    <Clock className="text-blue mt-2" size={20} />
                    <div>
                      <p className=" text-grey">Time</p>
                      <p className=" font-medium">{selectedEvent.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-[#EFF6FF] p-4 rounded-lg">
                    <Users className="text-blue mt-2" size={20} />
                    <div>
                      <p className=" text-grey">Category</p>
                      <p className=" font-medium">Open Day</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Agenda */}
              {selectedEvent.agenda && (
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
                  <div className="space-y-6">
                    {selectedEvent.agenda.map((item, index) => (
                      <div className="flex gap-4">
                        <div className="border-r-2 border-[#BFDBFE] pr-4 w-40">
                          <p className=" text-grey">{item.time}</p>
                        </div>

                        <div key={index} className="pl-4 pb-6">
                          <p className="font-medium text-[#111827]">
                            {item.title}
                          </p>
                          <p className=" text-[#374151] mt-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Speakers */}
              {selectedEvent.speakers && (
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4">Speakers</h2>
                  <div className="grid grid-cols-2 gap-6">
                    {selectedEvent.speakers.map((speaker, index) => (
                      <div
                        key={index}
                        className="flex gap-6 border border-[#CCCCCC] p-4 rounded-lg"
                      >
                        <div className="w-16 h-16 flex-shrink-0">
                          <img src={event} className="w-full h-full" alt="" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{speaker.name}</h3>
                          <p className=" text-gray-600">{speaker.title}</p>
                          <p className=" text-gray-700 mt-2">{speaker.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Venue Information */}
              {selectedEvent.venue && (
                <div className="rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Venue Information</h2>
                  <div className="bg-[#F3F4F6] p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">
                      {selectedEvent.venue.name}
                    </h3>
                    <p className=" text-gray-700 mb-4">
                      {selectedEvent.venue.address}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="text-[#16A34A]" size={22} />
                        <div>
                          <p className=" font-medium">Parking:</p>
                          <p className=" text-gray-600">
                            {selectedEvent.venue.parking}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="text-[#16A34A]" size={22} />

                        <div>
                          <p className=" font-medium">Accessibility:</p>
                          <p className=" text-gray-600">
                            {selectedEvent.venue.accessibility}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="text-[#16A34A]" size={22} />
                        <div>
                          <p className=" font-medium">Public Transport:</p>
                          <p className=" text-gray-600">
                            {selectedEvent.venue.transport}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Additional Information */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">
                  Additional Information
                </h2>
                <p className=" text-gray-700">
                  Business casual attire recommended. Bring government-issued ID
                  for campus access.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Event Registration */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold mb-4">Event Registration</h3>
                <img src={event} className="mx-auto" alt="" />
                <p className="font-medium text-center my-4">Event Ended</p>
                <p className=" text-gray-600 mb-4 text-center">
                  This event has already taken place. Check out our upcoming
                  events.
                </p>
                <button className="w-full bg-white text-blue py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Browse Events
                </button>
              </div>

              {/* About the Host */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold mb-4">About the Host</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="">
                    <img src={uni_logo} className="h-full w-full" alt="" />
                  </div>
                  <div>
                    <p className="font-medium">Harvard University</p>
                  </div>
                </div>
                <p className=" text-gray-700 mb-4">
                  Learn more about programs, admissions, and life as a Harvard
                  student at University.
                </p>
                <button className="text-blue-600 bg-base w-full p-3 rounded-lg ">
                  Visit University Profile
                </button>
              </div>

              {/* Related Events */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold mb-4">Related Events</h3>
                <button className="text-blue text-center w-full  font-medium">
                  View All Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base">
      {/* Header */}
      <div
        className="bg-primary h-[50vh] text-white py-12 px-8 relative overflow-hidden flex items-center justify-center"
      >
        <div className="w-11/12 mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl xl:text-5xl font-bold mb-2">
            University Directory
          </h1>
          <p className="text-sky xl:text-xl mt-10">
            Explore our comprehensive directory of top universities worldwide.
            Filter by location, programs, and more to find your perfect match.
          </p>
        </div>
      </div>

      {/* Tabs */}
      {/* <div className="bg-white border-b border-gray-200 p-6">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between gap-8">
            <div className="grid place-items-center gap-2">
              <div className="flex items-center gap-3">
                <Calendar size={22} className="text-blue" />
                <p className="text-dark font-medium text-lg">Founded</p>
              </div>
              <p className=" text-[#374151]">1636</p>
            </div>
            <div className="grid place-items-center gap-2">
              <div className="flex items-center gap-3">
                <Building size={22} className="text-blue" />
                <p className="text-dark font-medium text-lg">Campuses</p>
              </div>
              <p className=" text-[#374151]">3</p>
            </div>
            <div className="grid place-items-center gap-2">
              <div className="flex items-center gap-3">
                <Users size={22} className="text-blue" />
                <p className="text-dark font-medium text-lg">Students</p>
              </div>
              <p className=" text-[#374151]">23,000</p>
            </div>
            <div className="grid place-items-center gap-2">
              <div className="flex items-center gap-3">
                <Award size={22} className="text-blue" />
                <p className="text-dark font-medium text-lg">Faculty</p>
              </div>
              <p className=" text-[#374151]">2,400</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-lg">Filters</h3>

              <div className="mb-4">
                <h4 className=" font-medium mb-2 text-gray-700">
                  Event Format
                </h4>
                <div className="space-y-1.5">
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      name="eventFormat"
                      className="mr-2 cursor-pointer"
                      checked={eventFormat === "all"}
                      onChange={() => setEventFormat("all")}
                    />
                    <span className="text-sm">All Events</span>
                  </label>
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      name="eventFormat"
                      className="mr-2 cursor-pointer"
                      checked={eventFormat === "in-person"}
                      onChange={() => setEventFormat("in-person")}
                    />
                    <span className="text-sm">In-Person</span>
                  </label>
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      name="eventFormat"
                      className="mr-2 cursor-pointer"
                      checked={eventFormat === "virtual"}
                      onChange={() => setEventFormat("virtual")}
                    />
                    <span className="text-sm">Virtual</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <h4 className=" font-medium mb-2 text-gray-700">Event Type</h4>
                <div className="space-y-1.5">
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      name="eventType"
                      className="mr-2 cursor-pointer"
                      checked={eventType === "all"}
                      onChange={() => setEventType("all")}
                    />
                    <span className="text-sm">All Types</span>
                  </label>
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      name="eventType"
                      className="mr-2 cursor-pointer"
                      checked={eventType === "open-day"}
                      onChange={() => setEventType("open-day")}
                    />
                    <span className="text-sm">Open Day</span>
                  </label>
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      name="eventType"
                      className="mr-2 cursor-pointer"
                      checked={eventType === "webinar"}
                      onChange={() => setEventType("webinar")}
                    />
                    <span className="text-sm">Webinar</span>
                  </label>
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      name="eventType"
                      className="mr-2 cursor-pointer"
                      checked={eventType === "info-session"}
                      onChange={() => setEventType("info-session")}
                    />
                    <span className="text-sm">Info Session</span>
                  </label>
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      name="eventType"
                      className="mr-2 cursor-pointer"
                      checked={eventType === "workshop"}
                      onChange={() => setEventType("workshop")}
                    />
                    <span className="text-sm">Workshop</span>
                  </label>
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      name="eventType"
                      className="mr-2 cursor-pointer"
                      checked={eventType === "conference"}
                      onChange={() => setEventType("conference")}
                    />
                    <span className="text-sm">Conference</span>
                  </label>
                </div>
              </div>

              <div>
                <h4 className=" font-medium mb-2 text-gray-700">Date</h4>
                <input type="date" className="border p-2 rounded-lg w-full" />
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="flex-1">
            {/* Events Header */}
            <div className="mb-4">
              <p className="text-sm text-gray-600">Showing 3 events</p>
            </div>
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className={`${
                    event.id % 2 === 0 ? "bg-[#EEEAE6]" : "bg-[#DFF0EC]"
                  } rounded-lg overflow-hidden flex`}
                >
                  {/* Image Placeholder */}
                  <div className=" flex-shrink-0">
                    <img src={event.image} className="h-full" alt="" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="">
                              <img src={uni_logo} alt="" />
                            </div>
                            <span className=" text-gray-600">
                              {event.university}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold">
                            {event.title}
                          </h3>
                        </div>
                        {event.badge && (
                          <span
                            className={` px-3 py-1 rounded-md ${
                              event.badge === "In-person"
                                ? "bg-[#BFDBFE] text-[#1E40AF]"
                                : "bg-[#DCFCE7] text-[#16A34A]"
                            }`}
                          >
                            {event.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4  text-[#374151] mb-2">
                        <span className="flex items-center">
                          <Calendar size={16} className="mr-1 text-dark" />
                          {event.date}
                        </span>
                        <span className="flex items-center">
                          <Clock size={16} className="mr-1 text-dark" />
                          {event.time}
                        </span>
                      </div>
                      <div className="flex items-center  text-[#374151] mb-4">
                        <MapPin size={16} className="mr-1 text-dark" />
                        {event.location}
                      </div>

                      <p className=" text-gray-700">{event.description}</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <span className=" text-dark bg-[#F3F4F6] px-2 py-1 rounded-md">
                        {event.category}
                      </span>
                      <button
                        onClick={() => handleViewDetails(event)}
                        className="bg-blue text-white px-4 py-2 rounded  transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
