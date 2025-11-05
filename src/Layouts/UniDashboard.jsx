import Navbar from "../components/Navbar/Navbar";
import banner from "../assets/video/uni_banner.mp4";
import { BookOpen, Calendar, Info, MapPin, Search } from "lucide-react";
import { useState } from "react";
import uni_logo from "../assets/icons/harvard.png";

export default function UniDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
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
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-start w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex max-w-4xl border border-white border-opacity-40 bg-white/5 text-white font-medium lg:p-10 rounded-lg transition-colors backdrop-blur-md">
          <div className="w-40">
            <img src={uni_logo} className="    h-full w-full" alt="" />
          </div>
          {/* Heading */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              Harvard University
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg">
              <MapPin className="inline mb-1 mr-2" />
              Cambridge, Massachusetts, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
