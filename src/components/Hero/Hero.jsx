import banner from "../../assets/video/banner.mp4";

import { useState } from "react";
import {
  Search,
  Info,
  BookOpen,
  Calendar,
  ShieldPlus,
  MessageCircleMore,
  Bot,
} from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleCompare = () => {
    // Logic to navigate to compare centers page
    toast("It will be available soon", {
      icon: <ShieldPlus />,
      position: "bottom-center",
      style: {
        borderRadius: "10px",
        background: "#002B5B",
        color: "#fff",
      },
    });
  };
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
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-start w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl border border-white border-opacity-40 bg-primary p-4 md:p-6 lg:p-10 rounded-lg transition-colors backdrop-blur-md">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-8 leading-tight text-balance">
            Find Your Perfect University & Program
          </h1>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-2 mb-6 flex flex-col sm:flex-row gap-3 shadow-lg">
            <div className="flex-1 flex items-center gap-2 rounded px-3 py-3">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search universities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-black"
              />
            </div>

            <div className="text-black my-auto px-4 h-full border-l border-[#CCCCCC] py-3">
              University
            </div>

            <button className="bg-blue text-white px-6 rounded transition-colors">
              Search
            </button>
          </div>
          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-100 mb-4 leading-relaxed">
            Do you have doubts or want to make sure you choose your future well?
            Check out these tools.
          </p>
          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {/* <Link to={"/ai-assistant"}>
              <button className="flex items-center justify-center gap-2 w-full bg-white/20 hover:bg-white/30 text-white font-medium py-3 rounded-lg transition-colors backdrop-blur-sm text-sm sm:text-base">
                <Info className="w-5 h-5" />
                <span>Orientator chat</span>
              </button>
            </Link> */}

            <button
              onClick={handleCompare}
              className="flex items-center justify-center gap-2 bg-white/10 text-white font-medium py-3 rounded-lg transition-colors backdrop-blur-sm text-sm sm:text-base"
            >
              <BookOpen className="w-5 h-5" />
              <span>Compare centers</span>
            </button>
            <button
              onClick={handleCompare}
              className="flex items-center justify-center gap-2 bg-white/10 text-white font-medium py-3 rounded-lg transition-colors backdrop-blur-sm text-sm sm:text-base"
            >
              <MessageCircleMore className="w-5 h-5" />
              <span>Vocational orientator</span>
            </button>
            <Link to={"/ai-assistant"}>
              <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium w-full py-3 rounded-lg transition-colors backdrop-blur-sm text-sm sm:text-base">
                <Bot className="w-6 h-6" />
                <span>Talk to Robot Hugo</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
