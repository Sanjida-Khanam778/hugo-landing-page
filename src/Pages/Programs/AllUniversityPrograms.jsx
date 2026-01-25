import React from "react";
import { useState } from "react";
import { Star, ChevronDown, X } from "lucide-react";
import { PiBookOpenBold, PiGlobeSimpleBold } from "react-icons/pi";
import program1 from "../../assets/images/program1.png";
import program2 from "../../assets/images/program2.png";
import { Link } from "react-router-dom";
import FiltersContent from "../../components/Shared/FiltersContent";
export default function AllUniversityPrograms() {
  const [levelFilter, setLevelFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    univ_type: "all",
    location: "all",
    study_type: "all",
    field: "all",
  });

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };


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

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-inter">
      {/* Header Section */}
      <div className="text-white flex items-center justify-center relative overflow-hidden bg-primary h-[50vh]">
        <div className="w-11/12 mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-8">
            University Directory
          </h1>
          <p className="text-[#BFDBFE] max-w-3xl md:text-xl">
            Explore our comprehensive directory of top universities worldwide.
            Filter by location, programs, and more to find your perfect match.
          </p>
        </div>
      </div>

      {/* Search and Sort Bar */}
      <div className="bg-white border-b border-gray-200 py-4 px-8">
        <div className="max-w-7xl flex mx-auto">
          <input
            type="text"
            placeholder="Search universities, locations, or programs..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* <div className="ml-4 flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by Ranking</span>
              <ChevronDown size={16} className="text-gray-600" />
            </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile: filter toggle (visible on small screens) */}
          <div className="lg:hidden w-full mb-4 flex items-center justify-between">
            <button
              onClick={() => setShowFilters(true)}
              className="px-4 py-2 bg-white border border-gray-300 rounded shadow-sm text-sm"
            >
              Filters
            </button>
            <div>
              <p className="text-sm text-gray-600">Showing 3 programs</p>
            </div>
          </div>

          {/* Desktop sidebar (hidden on small) */}
          <div className="w-68 flex-shrink-0 hidden lg:block">
            <FiltersContent filters={filters} onFilterChange={handleFilterChange} />
          </div>

          {/* Mobile filter panel (overlay) */}
          {showFilters && (
            <>
              <div
                className="fixed inset-0 bg-black/40 z-[10000]"
                onClick={() => setShowFilters(false)}
              />
              <div className="fixed left-0 top-0 bottom-0 w-72 z-[10000] overflow-auto bg-[#ECF5FF] p-4">
                <div className="flex absolute right-2 items-center justify-end">
                  <button onClick={() => setShowFilters(false)} className="p-2">
                    <X />
                  </button>
                </div>
                <FiltersContent filters={filters} onFilterChange={handleFilterChange} />
              </div>
            </>
          )}

          {/* University Grid */}
          <div className="flex-1 p-4 md:p-7 bg-[#ECF5FF]">
            <div className="mb-4">
              <p className="text-sm text-gray-600">Showing 3 programs</p>
            </div>
            <div className="border p-6 bg-white rounded-xl">


              {/* Program Cards (rendered from data) */}
              {programs.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-lg shadow-sm mb-4 border"
                >
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
                      <img
                        className="rounded-lg w-full"
                        src={p.image}
                        alt={p.title}
                      />
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

            {/* Load More Button */}
            <div className="mt-8 text-center">
              <button className="px-6 py-3 text-lg border-2 border-blue text-blue rounded-md font-medium hover:bg-blue-50 transition-colors inline-flex items-center">
                Load More
                <ChevronDown size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
