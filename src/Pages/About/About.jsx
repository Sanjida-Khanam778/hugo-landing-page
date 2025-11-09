import React from "react";
import background from "../../assets/images/uniBanner.png";
import about from "../../assets/images/about.png";
import icon from "../../assets/icons/about.png";

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
      <div className="flex justify-center gap-16 items-center w-11/12 mx-auto mt-16">
        <img src={about} alt="Sign In" className="" />

        <div className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* About Us Label */}
            <div className="flex items-center gap-2 mb-6">
                <img src={icon} alt="" />
              <span className="text-blue uppercase">
                About Us
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl font-bold text-[#0E2A46] leading-snug">
              Benefit From Our Online Learning Expertise Earn
              <span className="text-blue ml-2">Professional</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg my-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>

            {/* Mission and Vision Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Our Mission Card */}
              <div className="">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  OUR MISSION:
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>

              {/* Our Vision Card */}
              <div className="">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
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
