import React from "react";

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-base p-8">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>

        <div className="bg-white p-6 mb-6 rounded-lg shadow">
          {/* Profile Section */}
          <div className=" border-b border-[#CCCCCC] pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#BFDBFE] rounded-full flex items-center justify-center text-blue font-semibold">
                  JD
                </div>
                <div>
                  <h2 className="font-semibold text-lg">John Doe</h2>
                  <p className="text-gray-600 text-sm">
                    Computer Science Student
                  </p>
                </div>
              </div>
              <button className="bg-blue text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-700">
                Message
              </button>
            </div>
          </div>

          {/* Your Activity Section */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Your Activity</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-base rounded-lg  p-4">
                <p className="text-gray-600 text-sm mb-1">Applications</p>
                <p className="text-blue  text-2xl font-bold">3</p>
              </div>
              <div className="bg-base rounded-lg  p-4">
                <p className="text-gray-600 text-sm mb-1">Saved Universities</p>
                <p className="text-blue  text-2xl font-bold">7</p>
              </div>
              <div className="bg-base rounded-lg  p-4">
                <p className="text-gray-600 text-sm mb-1">Upcoming Events</p>
                <p className="text-blue  text-2xl font-bold">2</p>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Recent Applications */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">Recent Applications</h3>
            <div className="space-y-4 divide-y-2 divide-[#CCCCCC]">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">Oxford University</h4>
                  <p className="text-gray-600 text-sm">MSc Computer Science</p>
                </div>
                <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded font-medium">
                  In Review
                </span>
              </div>

              <div className="flex justify-between items-start pt-4">
                <div>
                  <h4 className="font-semibold">MIT</h4>
                  <p className="text-gray-600 text-sm">
                    PhD Artificial Intelligence
                  </p>
                </div>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded font-medium">
                  Accepted
                </span>
              </div>

              <div className="flex justify-between items-start pt-4">
                <div>
                  <h4 className="font-semibold">Stanford University</h4>
                  <p className="text-gray-600 text-sm">MSc Data Science</p>
                </div>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded font-medium">
                  Submitted
                </span>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-4 divide-y-2 divide-[#CCCCCC]">
              <div>
                <h4 className="font-semibold">Virtual University Fair</h4>
                <p className="text-gray-600 text-sm">Tomorrow, 10:00 AM</p>
              </div>

              <div className="pt-4 ">
                <h4 className="font-semibold">
                  Scholarship Application Workshop
                </h4>
                <p className="text-gray-600 text-sm">May 15, 2025, 3:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
