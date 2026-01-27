import { useState } from "react";
import { MapPin } from "lucide-react";
import defaultLogo from "../../assets/icons/harvard.png";
import { Link } from "react-router-dom";

export default function UniBannerWrapper({ data, setShowApply }) {
  return (
    <>
      <UniBannerInner setShowApply={setShowApply} data={data} />
    </>
  );
}

// Split the component so we can use stateful wrapper while preserving original structure
function UniBannerInner({ setShowApply, data }) {
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
    <div>
      <div className="relative overflow-hidden h-[50vh]">
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
      <div className="w-full flex border-opacity-40 bg-primary text-white font-medium lg:p-6 lg:pb-10 transition-colors backdrop-blur-md">
        <div className="flex w-11/12 mx-auto">
          <div className="flex">
            <div className="w-28 h-28 p-2 bg-white rounded-lg mr-4 self-center">
              <img
                src={getFullUrl(data?.logo || defaultLogo)}
                className="h-full w-full object-contain"
                alt={data?.univ_name}
              />
            </div>
            {/* Heading */}
            <div className="self-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2 leading-tight text-balance">
                {data?.univ_name || "University Name"}
              </h1>

              {/* Subtitle */}
              <p className="sm:text-lg">
                <MapPin className="inline mb-1 mr-2" />
                {locationString}
              </p>
            </div>
          </div>
          <div className="space-x-4 ml-auto self-center">
            <button
              onClick={() => setShowApply(true)}
              className="px-4 py-2 border rounded-md"
            >
              Apply Now
            </button>
            <Link to="/message">
              <button className="px-4 py-2 border rounded-md">Message</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
