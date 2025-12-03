import { Calendar, Clock, MapPin } from "lucide-react";
import event from "../../assets/images/event1.png";
import logo from "../../assets/icons/uni_logo.png";
export default function Events() {
  return (
    <div>
      {/* Events Header */}
      <div className="mb-6">
        <p className="text-sm text-gray-800">Showing 6 events</p>
      </div>

      {/* Event Card 1 */}
      <div className="bg-[#EEEAE6] rounded-lg shadow-sm overflow-hidden mb-4 flex">
        {/* Event Image */}
        <div className=" flex-shrink-0">
          <img src={event} alt="" />
        </div>

        {/* Event Content */}
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="">
                <img src={logo} alt="" />
              </div>
              <span className="text-sm text-gray-800">Harvard University</span>
            </div>
            <span className="bg-[#BFDBFE] text-[#1E40AF] text-sm px-3 py-1 rounded-md">
              In-person
            </span>
          </div>

          <h3 className="text-xl font-bold mb-3">
            Harvard Business School Open Day
          </h3>

          <div className="flex items-center gap-4 text-sm text-gray-800 mb-3">
            <span className="flex items-center gap-1">
              <Calendar strokeWidth={3.00} size={14} />
              August 15, 2023
            </span>
            <span className="flex items-center gap-1">
              <Clock strokeWidth={3.00} size={14} />
              10:00 AM - 4:00 PM
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-800 mb-4">
            <MapPin strokeWidth={3.00} size={14} />
            <span>Harvard Business School, Boston, MA</span>
          </div>

          <p className=" text-gray-700 mb-4">
            Explore the Harvard Business School campus and learn about our MBA
            programs.
          </p>

          <div className="flex items-center justify-between">
            <span className="text-sm bg-[#F3F4F6] rounded p-2 py-1 ">
              Open Day
            </span>
            <button className="bg-blue hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Event Card 2 */}
      <div className="bg-[#DFF0EC] rounded-lg shadow-sm overflow-hidden mb-4 flex">
        {/* Event Image */}
        <div className="flex-shrink-0">
          <img src={event} alt="" />
        </div>

        {/* Event Content */}
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="">
                <img src={logo} alt="" />
              </div>
              <span className="text-sm text-gray-800">Harvard University</span>
            </div>
            <span className="bg-[#DCFCE7] text-[#16A34A] text-sm px-3 py-1 rounded-md">
              Online
            </span>
          </div>

          <h3 className="text-xl  font-bold mb-3">
            Harvard Business School Open Day
          </h3>

          <div className="flex items-center gap-4 text-sm text-gray-800 mb-3">
            <span className="flex items-center gap-1">
              <Calendar strokeWidth={3.00} size={14} />
              August 15, 2023
            </span>
            <span className="flex items-center gap-1">
              <Clock strokeWidth={3.00} size={14} />
              10:00 AM - 4:00 PM
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-800 mb-4">
            <MapPin strokeWidth={3.00} size={14} />
            <span>Harvard Business School, Boston, MA</span>
          </div>

          <p className=" text-gray-700 mb-4">
            Explore the Harvard Business School campus and learn about our MBA
            programs.
          </p>

          <div className="flex items-center justify-between">
            <span className="text-sm  bg-[#F3F4F6] rounded p-2 py-1">
              Open Day
            </span>
            <button className="bg-blue hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
