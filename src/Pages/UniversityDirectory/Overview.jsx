import React from "react";
import banner from "../../assets/video/banner.mp4";
import shape from "../../assets/images/shape.png";
export default function Overview() {
  return (
    <div>
      <div className="inset-0 flex gap-6">
        <div className="w-1/2 h-full space-y-4">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover rounded-lg"
          >
            <source src={banner} type="video/mp4" />
            {/* <source src={banner} type="video/mp4" /> */}
          </video>
          <img src={shape} alt="" />
        </div>
        <div className="w-1/2 h-full">
          {/* About Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              About Harvard University
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Harvard University is a private Ivy League research university in
              Cambridge, Massachusetts. Founded in 1636, Harvard is the oldest
              institution of higher learning in the United States and among the
              most prestigious in the world.
            </p>
          </div>
          {/* Accreditation Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Accreditation</h3>
            <p className="text-gray-700 leading-relaxed">
              Harvard University is accredited by the New England Commission of
              Higher Education (NECHE).
            </p>
          </div>
        </div>
      </div>

      {/* Rankings Section */}
      <div className="rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Rankings</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-[#CCCCCC]">
            <span className="text-gray-700">QS World University Rankings</span>
            <span className="text-blue font-semibold">#5</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#CCCCCC]">
            <span className="text-gray-700">Times Higher Education</span>
            <span className="text-blue font-semibold">#2</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-700">U.S. News & World Report</span>
            <span className="text-blue font-semibold">#1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
