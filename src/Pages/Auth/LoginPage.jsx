import banner from "../../assets/video/login.mp4";

import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative overflow-hidden text-white">
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
      <div className="flex flex-col items-center justify-center relative z-10 h-full xl:h-[80vh] mx-auto">
        <div className="text-center space-y-8 max-w-4xl my-10">
          <h1 className="text-3xl xl:text-[56px] font-bold xl:leading-tight">Welcome to the University Management Portal</h1>
          <h4 className="text-xl xl:text-3xl font-medium">
            This platform is designed to streamline and centralize all critical
            university operations. Please select your user type to proceed to
            login or registration.
          </h4>
        </div>
        <div className="max-w-7xl flex flex-col lg:flex-row items-center justify-start gap-6 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border text-center border-white border-opacity-40 bg-white/5 text-white font-medium p-4 md:p-6 lg:p-10 rounded-lg transition-colors backdrop-blur-md">
            {/* Heading */}
            <h1 className="text-2xl font-semibold text-white mb-4">
              University User
            </h1>
            <p className="text-lg mb-4">Staff & Faculty</p>

            {/* Subtitle */}
            <p className="text-base text-gray-100 mb-8 leading-relaxed">
              Access the Admin Portal for managing programs, events, and
              essential staff communication tools.
            </p>

           <Link to={'/university-login'}> <button className="bg-blue text-white font-semibold w-full py-3 rounded transition-colors text-sm sm:text-base">
              Log In as University User
            </button></Link>
          </div>
          <div className="border text-center border-white border-opacity-40 bg-white/5 text-white font-medium p-4 md:p-6 lg:p-10 rounded-lg transition-colors backdrop-blur-md">
            {/* Heading */}
            <h1 className="text-2xl font-semibold text-white mb-4">
              Student User
            </h1>
            <p className="text-lg mb-4">Current & Prospective</p>

            {/* Subtitle */}
            <p className="text-base text-gray-100 mb-8 leading-relaxed">
              Access the Student Portal for grades, course registration,
              application tracking, and student services.
            </p>

           <Link to={"/login"}> <button className="bg-blue text-white font-semibold w-full py-3 rounded transition-colors text-sm sm:text-base">
              Log In as Student User
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
