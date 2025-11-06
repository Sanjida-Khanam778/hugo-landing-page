import banner from "../../assets/video/banner.mp4";

import { useState } from "react";
import { Search, Info, BookOpen, Calendar } from "lucide-react";
import Navbar from "../Navbar/Navbar";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative overflow-hidden h-screen">
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
      <Navbar />
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-start w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl border border-white border-opacity-40 bg-white/5 text-white font-medium p-4 md:p-6 lg:p-10 rounded-lg transition-colors backdrop-blur-md">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
            Find Your Perfect University & Program
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-100 mb-8 leading-relaxed">
            Connect with top universities worldwide and discover your path to
            success
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-2 mb-8 flex flex-col sm:flex-row gap-3 shadow-lg">
            <div className="flex-1 flex items-center gap-2 rounded px-3 py-3">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search universities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
              />
            </div>

            <div className="text-black my-auto px-4 h-full border-l border-[#CCCCCC] py-3">University</div>

            <button className="bg-blue text-white font-semibold px-6  rounded transition-colors text-sm sm:text-base">
              Search
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium px-4 sm:px-6 py-3 rounded-lg transition-colors backdrop-blur-sm text-sm sm:text-base">
              <Info className="w-5 h-5" />
              <span>Request information</span>
            </button>

            <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium px-4 sm:px-6 py-3 rounded-lg transition-colors backdrop-blur-sm text-sm sm:text-base">
              <BookOpen className="w-5 h-5" />
              <span>Browse Programs</span>
            </button>

            <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium px-4 sm:px-6 py-3 rounded-lg transition-colors backdrop-blur-sm text-sm sm:text-base">
              <Calendar className="w-5 h-5" />
              <span>Upcoming Events</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
