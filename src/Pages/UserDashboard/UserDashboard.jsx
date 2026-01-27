import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetUserProfileQuery } from "../../Api/authapi";
import ProfileEditModal from "../../Layouts/User/Modal/ProfileEditModal";
import { Edit2 } from "lucide-react";
import { useSelector } from "react-redux";

export default function UserDashboard() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const { data: profile, isLoading, error } = useGetUserProfileQuery();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
console.log(profile);
  const getFullUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("blob:")) return path;
    return `http://10.10.13.20:8005${path}`;
  };

  if (isLoading) return <div className="p-8 text-center">Loading dashboard...</div>;

  return (
    <div className="min-h-screen bg-base p-8 xl:pt-24">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>

        <div className="bg-white p-6 mb-6 rounded-lg shadow">
          {/* Profile Section */}
          <div className=" border-b border-[#CCCCCC] pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#BFDBFE] rounded-full flex items-center justify-center text-blue font-semibold overflow-hidden border-2 border-white shadow-sm">
                  {profile?.image ? (
                    <img src={getFullUrl(profile.image)} alt={profile.full_name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xl font-bold">
                      {profile?.full_name?.split(' ').map(n => n[0]).join('').toUpperCase() || "JD"}
                    </span>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-lg">{profile?.student_name}</h2>
                    <button
                      onClick={() => setIsEditModalOpen(true)}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors text-blue"
                      title="Edit Profile"
                    >
                      <Edit2 size={16} />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {profile?.role || "Student"}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    {profile?.email}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Link to={"/message"}>
                  <button className="bg-blue hover:shadow-lg hover:scale-105 transition-transform text-white px-6 py-2 rounded font-medium hover:bg-blue-700">
                    Message
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Your Activity Section */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Your Activity</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-base rounded-lg  p-4">
                <p className="text-gray-600 text-sm mb-1"> Applied Program</p>
                <p className="text-blue  text-2xl font-bold">3</p>
              </div>
              <div className="bg-base rounded-lg  p-4">
                <p className="text-gray-600 text-sm mb-1"> Applied Job</p>
                <p className="text-blue  text-2xl font-bold">7</p>
              </div>
              <div className="bg-base rounded-lg  p-4">
                <p className="text-gray-600 text-sm mb-1">Event Registered</p>
                <p className="text-blue  text-2xl font-bold">2</p>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6">
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

        
        </div>
      </div>
      {isEditModalOpen && (
        <ProfileEditModal
          profile={profile}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
}
