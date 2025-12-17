import React from "react";
import banner from "../../assets/video/banner.mp4";
import shape from "../../assets/images/shape.png";
export default function Overview() {
  return (
    <div>
      <div className="flex gap-6">
        <div className="w-1/2 h-auto">
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

      {/* "What makes us different" - expanded profile section */}
      <div className="rounded-lg p-6 mt-6 bg-white shadow-sm">
        <h3 className="text-2xl font-semibold mb-3">What makes us different</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          We are a problem-centric, solution focused University with a strong
          philosophy around shaping tomorrow, today. Our students, graduates and
          staff are making an impact in our region and around the world by using
          their expertise and experience to drive innovation and make positive
          changes. You can be part of that story.
        </p>

        <p className="text-gray-700 leading-relaxed mb-3">
          We are continuously investing in our facilities and have added a
          multi-million pound Bioscience Superlab and Research Hub. A brand-new
          International Business School has opened in the heart of the city
          centre as a modern, zero-carbon hub for students and start-up
          companies to learn, network and prosper.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 border rounded">
            <h4 className="font-semibold mb-2">Research & Innovation</h4>
            <p className="text-sm text-gray-600">
              World-class research centres and industry partnerships driving new
              discoveries.
            </p>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold mb-2">Student Experience</h4>
            <p className="text-sm text-gray-600">
              Strong student support, modern facilities and a vibrant campus
              life.
            </p>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold mb-2">Sustainability</h4>
            <p className="text-sm text-gray-600">
              Committed to reducing environmental impact across teaching and
              operations.
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mt-4">
          The University ranked in the Top 15 for satisfaction with feedback and
          continues to focus on high-quality teaching, employability and an
          inclusive learning environment.
        </p>
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
