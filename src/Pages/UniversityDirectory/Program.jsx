import React from "react";
import program1 from "../../assets/images/program1.png";
import program2 from "../../assets/images/program2.png";
import { Link } from "react-router-dom";
export default function Program() {
  return (
    <div className="border p-6 bg-white rounded-xl">
      {/* Programs Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Programs</h2>
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Levels</option>
          <option>Bachelor's</option>
          <option>Master's</option>
          <option>Doctorate</option>
        </select>
      </div>

      {/* Program Card 1 - Bachelor's */}
      <div className="bg-white rounded-lg shadow-sm mb-4 border">
        <div className="flex justify-between items-start bg-gradient-to-r from-[#F5E7E4] to-[#DEF0EC] rounded-t-lg p-4">
          <h3 className="text-xl font-bold">Bachelor of Arts in Economics</h3>
          <span className="bg-sky text-[#1E40AF] text-sm px-3 py-1 rounded-full">
            Bachelor's
          </span>
        </div>
        <div className="flex gap-6 p-6">
          <div className="h-auto w-full">
            <img className="rounded-lg w-full" src={program1} alt="" />
          </div>
          <div className="w-full">
            <p className="text-gray-700 mb-6">
              A comprehensive program covering microeconomic and macroeconomic
              theory, econometrics, and specialized fields.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className=" text-gray-500 mb-1">Duration</p>
                <p className=" font-semibold">4 years</p>
              </div>
              <div>
                <p className=" text-gray-500 mb-1">Language</p>
                <p className=" font-semibold">English</p>
              </div>
              <div>
                <p className=" text-gray-500 mb-1">Start Dates</p>
                <p className=" font-semibold">September 2023</p>
              </div>
              <div>
                <p className=" text-gray-500 mb-1">Tuition</p>
                <p className=" font-semibold">$52,000 per year</p>
              </div>
            </div>

            <div className="flex justify-end">
              <Link to={"/program-details"}>
                <button className="bg-blue hover:shadow-lg hover:scale-105 transition-transform text-white px-6 py-2 rounded-lg">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Program Card 2 - Master's */}
      <div className="bg-white rounded-lg shadow-sm mb-4 border">
        <div className="flex justify-between items-start bg-gradient-to-r from-[#F5E7E4] to-[#DEF0EC] rounded-t-lg p-4">
          <h3 className="text-xl font-bold">
            Master of Business Administration
          </h3>
          <span className="bg-cyan-100 text-cyan-700 text-sm px-3 py-1 rounded-full">
            Master's
          </span>
        </div>
        <div className="flex gap-6 p-6">
          <div className="h-auto w-full">
            <img className="rounded-lg w-full" src={program2} alt="" />
          </div>
          <div className="w-full">
            <p className="text-gray-700  mb-6">
              A rigorous program preparing students for leadership roles in
              global business.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className=" text-gray-500 mb-1">Duration</p>
                <p className=" font-semibold">2 years</p>
              </div>
              <div>
                <p className=" text-gray-500 mb-1">Language</p>
                <p className=" font-semibold">English</p>
              </div>
              <div>
                <p className=" text-gray-500 mb-1">Start Dates</p>
                <p className=" font-semibold">September 2023</p>
              </div>
              <div>
                <p className=" text-gray-500 mb-1">Tuition</p>
                <p className=" font-semibold">$75,000 per year</p>
              </div>
            </div>

            <div className="flex justify-end">
              <Link to={"/program-details"}>
                <button className="bg-blue text-white px-6 py-2 hover:shadow-lg hover:scale-105 transition-transform rounded-lg">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Program Card 3 - Doctorate */}
      <div className="bg-white rounded-lg shadow-sm mb-4 border">
        <div className="flex justify-between items-start bg-gradient-to-r from-[#F5E7E4] to-[#DEF0EC] rounded-t-lg p-4">
          <h3 className="text-xl font-bold">PhD in Computer Science</h3>
          <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
            Doctorate
          </span>
        </div>
        <div className="flex gap-6 p-6">
          <div className="h-auto w-full">
            <img className="rounded-lg w-full" src={program1} alt="" />
          </div>
          <div className="w-full">
            <p className="text-gray-700  mb-6">
              Advanced research program focusing on artificial intelligence,
              machine learning, and theoretical computer science.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className=" text-gray-500 mb-1">Duration</p>
                <p className=" font-semibold">5 years</p>
              </div>
              <div>
                <p className=" text-gray-500 mb-1">Language</p>
                <p className=" font-semibold">English</p>
              </div>
              <div>
                <p className=" text-gray-500 mb-1">Start Dates</p>
                <p className=" font-semibold">September 2023</p>
              </div>
              <div>
                <p className=" text-gray-500 mb-1">Tuition</p>
                <p className=" font-semibold">Fully funded</p>
              </div>
            </div>

            <div className="flex justify-end">
              <Link to={"/program-details"}>
                <button className="bg-blue text-white px-6 py-2 hover:shadow-lg hover:scale-105 transition-transform rounded-lg">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
