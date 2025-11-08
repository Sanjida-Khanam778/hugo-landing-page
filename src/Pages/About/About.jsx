import React from "react";
import background from "../../assets/images/uniBanner.png";
import about from "../../assets/images/about.png";

export default function About() {
  return (
    <div className="bg-base pb-16">
      {/* Header Section */}
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="text-white flex items-center justify-center relative overflow-hidden bg-cover bg-no-repeat h-[50vh]"
      >
        <div className="mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-8 uppercase">
            About US
          </h1>
        </div>
      </div>
      <div>
        <div className="min-h-screen bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* About Us Label */}
            <div className="flex items-center gap-2 mb-6">
              <svg
                className="w-6 h-6 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                About Us
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Benefit From Our Online Learning Expertise Earn{" "}
              <span className="text-blue-600">Professional</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>

            {/* Mission and Vision Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Our Mission Card */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  OUR MISSION:
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>

              {/* Our Vision Card */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  OUR VISSION:
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
