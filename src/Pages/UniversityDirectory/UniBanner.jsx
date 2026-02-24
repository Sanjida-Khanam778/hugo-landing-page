import { useState } from "react";
import { MapPin } from "lucide-react";
import defaultLogo from "../../assets/icons/harvard.png";
import { Link, useNavigate } from "react-router-dom";
import { useGetOrCreateRoomMutation } from "../../Api/chatApi";

export default function UniBannerWrapper({ data, setShowApply }) {
  return (
    <>
      <UniBannerInner setShowApply={setShowApply} data={data} />
    </>
  );
}

// Split the component so we can use stateful wrapper while preserving original structure
function UniBannerInner({ setShowApply, data }) {
  const navigate = useNavigate();
  const [getOrCreateRoom, { isLoading }] = useGetOrCreateRoomMutation();

  const handleMessageClick = async () => {
    try {
      if (data?.id) {
        await getOrCreateRoom(data.id).unwrap();
        navigate("/message");
      }
    } catch (error) {
      console.error("Failed to create or get chat room:", error);
      // Even if it fails, maybe navigate anyway or show a toast
      navigate("/message");
    }
  };

  const location = data?.locations?.[0];
  const locationString = location
    ? `${location.location_name}, ${location.address}`
    : "Location not available";
  const getFullUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("blob:")) return path;
    return `http://10.10.13.20:8005${path}`;
  };
  return (
    <div className="">
      <div className="relative overflow-hidden md:h-[50vh] h-[25vh]">
        {/* Background Container */}
        <div className="absolute inset-0 w-full h-full">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={getFullUrl(data?.banner_video)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
      {/* Content */}
      <div className="w-full pb-10 flex border-opacity-40 bg-primary text-white font-medium lg:p-6 lg:pb-10 transition-colors backdrop-blur-md">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 w-11/12 mx-auto">
          <div className="flex flex-wrap gap-4 md:gap-0">
            <div className="md:w-28 md:h-28 w-16 h-16 mt-4 md:mt-0 md:p-2 p-0 bg-white rounded-lg mr-4 self-center">
              <img
                src={getFullUrl(data?.logo || defaultLogo)}
                className="h-full w-full object-contain"
                alt={data?.univ_name}
              />
            </div>
            {/* Heading */}
            <div className="self-center">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 leading-tight text-balance">
                {data?.univ_name || "University Name"}
              </h1>

              {/* Subtitle */}
              <p className="md:text-lg text-sm break-words">
                <MapPin className="inline mb-1 md:mr-2 mr-1" md:size={20} size={16} />
                {locationString}
              </p>
            </div>
          </div>
          <div className="space-x-4 md:ml-auto self-center">
            <button
              onClick={() => setShowApply(true)}
              className="px-4 py-1 md:py-2 text-sm md:text-base border rounded-md"
            >
              Apply Now
            </button>
            <button
              onClick={handleMessageClick}
              disabled={isLoading}
              className={`px-4 py-1 md:py-2 text-sm md:text-base border rounded-md ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? "Connecting..." : "Message"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
