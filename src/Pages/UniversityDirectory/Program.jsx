import React from "react";
import program1 from "../../assets/images/program1.png";
import program2 from "../../assets/images/program2.png";
export default function Program() {
  return (
    <div>
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
      <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">Bachelor of Arts in Economics</h3>
          <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
            Bachelor's
          </span>
        </div>
        <div className="flex gap-6">
          <div className="h-auto w-full">
            <img className="rounded-lg w-full" src={program1} alt="" />
          </div>
          <div className="w-full">
            <p className="text-gray-700 text-sm mb-6">
              A comprehensive program covering microeconomic and macroeconomic
              theory, econometrics, and specialized fields.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs text-gray-500 mb-1">Duration</p>
                <p className="text-sm font-semibold">4 years</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Language</p>
                <p className="text-sm font-semibold">English</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Start Dates</p>
                <p className="text-sm font-semibold">September 2023</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Tuition</p>
                <p className="text-sm font-semibold">$52,000 per year</p>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-blue text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Program Card 2 - Master's */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">
            Master of Business Administration
          </h3>
          <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full">
            Master's
          </span>
        </div>
        <div className="flex gap-6">
          <div className="h-auto w-full">
            <img className="rounded-lg w-full" src={program2} alt="" />
          </div>
          <div className="w-full">
            <p className="text-gray-700 text-sm mb-6">
              A rigorous program preparing students for leadership roles in
              global business.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs text-gray-500 mb-1">Duration</p>
                <p className="text-sm font-semibold">2 years</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Language</p>
                <p className="text-sm font-semibold">English</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Start Dates</p>
                <p className="text-sm font-semibold">
                  September 2023, January 2024
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Tuition</p>
                <p className="text-sm font-semibold">$75,000 per year</p>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-blue hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Program Card 3 - Doctorate */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">PhD in Computer Science</h3>
          <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
            Doctorate
          </span>
        </div>
        <div className="flex gap-6">
          <div className="h-auto w-full">
            <img className="rounded-lg w-full" src={program1} alt="" />
          </div>
          <div className="w-full">
            <p className="text-gray-700 text-sm mb-6">
              Advanced research program focusing on artificial intelligence,
              machine learning, and theoretical computer science.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs text-gray-500 mb-1">Duration</p>
                <p className="text-sm font-semibold">5 years</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Language</p>
                <p className="text-sm font-semibold">English</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Start Dates</p>
                <p className="text-sm font-semibold">September 2023</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Tuition</p>
                <p className="text-sm font-semibold">Fully funded</p>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-blue hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
