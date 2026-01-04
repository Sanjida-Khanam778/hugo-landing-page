import React, { useState } from "react";
import banner from "../../assets/video/uni_banner.mp4";
import { MapPin } from "lucide-react";
import uni_logo from "../../assets/icons/harvard.png";
import ApplyModal from "../../components/ApplyModal/ApplyModal";
import { Link } from "react-router-dom";

export default function UniBannerWrapper() {
  const [showApply, setShowApply] = useState(false);

  return (
    <>
      <UniBannerInner setShowApply={setShowApply} />
      <ApplyModal
        open={showApply}
        onClose={() => setShowApply(false)}
        uniName="Harvard University"
      />
    </>
  );
}

// Split the component so we can use stateful wrapper while preserving original structure
function UniBannerInner({ setShowApply }) {
  return (
    <div>
      <div className="relative overflow-hidden h-[50vh]">
        {/* Video Background Container */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={banner} type="video/mp4" />
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
            <div className="w-28">
              <img src={uni_logo} className="h-full w-full" alt="" />
            </div>
            {/* Heading */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2 leading-tight text-balance">
                Harvard University
              </h1>

              {/* Subtitle */}
              <p className="sm:text-lg">
                <MapPin className="inline mb-1 mr-2" />
                Cambridge, Massachusetts, USA
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
