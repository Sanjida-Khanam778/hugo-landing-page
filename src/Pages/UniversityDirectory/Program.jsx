import React, { useState } from "react";
import program1 from "../../assets/images/program1.png";
import program2 from "../../assets/images/program2.png";
import { Link } from "react-router-dom";

export default function Program() {
  const [levelFilter, setLevelFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const programs = [
    {
      id: 1,
      title: "Bachelor of Arts in Economics",
      level: "bachelor",
      image: program1,
      description:
        "A comprehensive program covering microeconomic and macroeconomic theory, econometrics, and specialized fields.",
      duration: "4 years",
      language: "English",
      startDates: "September 2023",
      tuition: "$52,000 per year",
      link: "/program-details",
    },
    {
      id: 2,
      title: "Master of Business Administration",
      level: "master",
      image: program2,
      description:
        "A rigorous program preparing students for leadership roles in global business.",
      duration: "2 years",
      language: "English",
      startDates: "September 2023",
      tuition: "$75,000 per year",
      link: "/program-details",
    },
    {
      id: 3,
      title: "PhD in Computer Science",
      level: "doctorate",
      image: program1,
      description:
        "Advanced research program focusing on artificial intelligence, machine learning, and theoretical computer science.",
      duration: "5 years",
      language: "English",
      startDates: "September 2023",
      tuition: "Fully funded",
      link: "/program-details",
    },
  ];

  const filtered = programs.filter((p) => {
    const matchesLevel = levelFilter === "all" || p.level === levelFilter;
    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="border p-6 bg-white rounded-xl">
      {/* Programs Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <h2 className="text-2xl font-bold">Programs</h2>
        <div className="flex items-center gap-3">
          <input
            type="search"
            placeholder="Search programs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Levels</option>
            <option value="bachelor">Bachelor's</option>
            <option value="master">Master's</option>
            <option value="doctorate">Doctorate</option>
          </select>
        </div>
      </div>

      {/* Program Cards (rendered from data) */}
      {filtered.map((p) => (
        <div key={p.id} className="bg-white rounded-lg shadow-sm mb-4 border">
          <div className="flex justify-between items-start bg-gradient-to-r from-[#F5E7E4] to-[#DEF0EC] rounded-t-lg p-4">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <span className="bg-sky text-[#1E40AF] text-sm px-3 py-1 rounded-full">
              {p.level === "bachelor"
                ? "Bachelor's"
                : p.level === "master"
                ? "Master's"
                : "Doctorate"}
            </span>
          </div>
          <div className="flex gap-6 p-6">
            <div className="h-auto w-full">
              <img className="rounded-lg w-full" src={p.image} alt={p.title} />
            </div>
            <div className="w-full">
              <p className="text-gray-700 mb-6">{p.description}</p>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className=" text-gray-500 mb-1">Duration</p>
                  <p className=" font-semibold">{p.duration}</p>
                </div>
                <div>
                  <p className=" text-gray-500 mb-1">Language</p>
                  <p className=" font-semibold">{p.language}</p>
                </div>
                <div>
                  <p className=" text-gray-500 mb-1">Start Dates</p>
                  <p className=" font-semibold">{p.startDates}</p>
                </div>
                <div>
                  <p className=" text-gray-500 mb-1">Tuition</p>
                  <p className=" font-semibold">{p.tuition}</p>
                </div>
              </div>

              <div className="flex justify-end">
                <Link to={p.link}>
                  <button className="bg-blue hover:shadow-lg hover:scale-105 transition-transform text-white px-6 py-2 rounded-lg">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
