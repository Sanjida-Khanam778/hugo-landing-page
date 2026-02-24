import { Calendar, Clock, MapPin } from "lucide-react";
import eventPlaceholder from "../../assets/images/event1.png";
import logoPlaceholder from "../../assets/icons/uni_logo.png";
import { useGetEventsByUniIdQuery } from "../../Api/universityApi";

export default function Events({ data: universityData, onViewDetails }) {
  const { data: eventsData, isLoading, error } = useGetEventsByUniIdQuery(universityData?.id);
console.log(eventsData);
  if (isLoading) return <div className="p-8 text-center text-gray-500">Loading events...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error loading events.</div>;
  if (!eventsData || eventsData.length === 0) return <div className="p-8 text-center text-gray-500">No events found for this university.</div>;

  const getFullUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("blob:")) return path;
    return `http://10.10.13.20:8005${path}`;
  };

  return (
    <div>
      {/* Events Header */}
      <div className="mb-6">
        <p className="text-sm text-gray-800">Showing {eventsData.length} events</p>
      </div>

      {eventsData.map((event, index) => (
        <div key={event.id} className={`rounded-lg shadow-sm overflow-hidden mb-4 flex flex-col md:flex-row ${index % 2 === 0 ? "bg-[#EEEAE6]" : "bg-[#DFF0EC]"}`}>
          {/* Event Image */}
          <div className="flex-shrink-0 w-full md:w-1/3 h-auto">
            <img
              src={event.image ? getFullUrl(event.image) : eventPlaceholder}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Event Content */}
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <img src={event.univ_logo ? getFullUrl(event.univ_logo) : logoPlaceholder} alt="" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm text-gray-800">{event.univ_name}</span>
              </div>
              <span className={`text-sm px-3 py-1 rounded-md ${event.event_type === "Online" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#BFDBFE] text-[#1E40AF]"}`}>
                {event.event_type}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3">
              {event.title}
            </h3>

            <div className="flex items-center gap-4 text-sm text-gray-800 mb-3">
              <span className="flex items-center gap-1">
                <Calendar strokeWidth={3.00} size={14} />
                {event.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock strokeWidth={3.00} size={14} />
                {event.time}
              </span>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-800 mb-4">
              <MapPin strokeWidth={3.00} size={14} />
              <span>{event.address}</span>
            </div>

            <p className=" text-gray-700 mb-4 line-clamp-2">
              {event.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm bg-[#F3F4F6] rounded p-2 py-1 ">
                {event.category}
              </span>
              <button
                onClick={() => onViewDetails(event.id)}
                className="bg-blue hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
