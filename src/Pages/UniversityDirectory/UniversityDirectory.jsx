import React, { useState } from "react";
import { MapPin, BookOpen, Star, ChevronDown, X } from "lucide-react";
import background from "../../assets/images/uniBanner.png";
import { PiBookOpenBold, PiGlobeSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function UniversityDirectory() {
  const [studyType, setStudyType] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedField, setSelectedField] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const universities = [
    {
      id: 1,
      name: "Harvard University",
      location: "Cambridge, USA",
      programs: 201,
      rating: 4.9,
      badges: ["Top Ranked"],
      image: "https://i.imgur.com/hfqSqa0.jpeg",
    },
    {
      id: 2,
      name: "Stanford University",
      location: "Stanford, USA",
      programs: 231,
      rating: 4.8,
      badges: ["Top Rated Average"],
      image: "https://i.imgur.com/hfqSqa0.jpeg",
    },
    {
      id: 3,
      name: "Oxford University",
      location: "Oxford, UK",
      programs: 180,
      rating: 4.8,
      badges: ["Top Rated Average"],
      image: "https://i.imgur.com/hfqSqa0.jpeg",
    },
    {
      id: 4,
      name: "MIT",
      location: "Cambridge, USA",
      programs: 150,
      rating: 4.8,
      badges: ["Top Rated Average"],
      image: "https://i.imgur.com/hfqSqa0.jpeg",
    },
    {
      id: 5,
      name: "University of Tokyo",
      location: "Tokyo, Japan",
      programs: 90,
      rating: 4.6,
      badges: ["Top Rated Average"],
      image: "https://i.imgur.com/hfqSqa0.jpeg",
    },
    {
      id: 6,
      name: "ETH Zurich",
      location: "Zurich, Switzerland",
      programs: 130,
      rating: 4.8,
      badges: ["Top Rated Average"],
      image: "https://i.imgur.com/hfqSqa0.jpeg",
    },
  ];

  // reusable filters markup so we can render it in desktop sidebar and mobile panel
  const FiltersContent = () => (
    <div className="bg-[#ECF5FF] p-6 shadow-sm">
      <h3 className="font-semibold mb-4">Filters</h3>

      {/* Study type Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3">Study Type</h4>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={studyType === "all"}
              onChange={() => setStudyType("all")}
            />
            <span className="text-sm cursor-pointer">All Type</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={studyType === "college"}
              onChange={() => setStudyType("college")}
            />
            <span className="text-sm cursor-pointer">College</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={studyType === "master"}
              onChange={() => setStudyType("master")}
            />
            <span className="text-sm cursor-pointer">Master</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={studyType === "degree"}
              onChange={() => setStudyType("degree")}
            />
            <span className="text-sm cursor-pointer">Degree</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={studyType === "academy"}
              onChange={() => setStudyType("academy")}
            />
            <span className="text-sm cursor-pointer">Academy</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={studyType === "online courses"}
              onChange={() => setStudyType("online courses")}
            />
            <span className="text-sm cursor-pointer">Online courses</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={studyType === "professional Formation"}
              onChange={() => setStudyType("professional Formation")}
            />
            <span className="text-sm cursor-pointer">
              Professional Formation
            </span>
          </label>
        </div>
      </div>
      {/* Country Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3">Country</h4>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "all"}
              onChange={() => setSelectedCountry("all")}
            />
            <span className="text-sm cursor-pointer">All Countries</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "us"}
              onChange={() => setSelectedCountry("us")}
            />
            <span className="text-sm cursor-pointer">United States</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "uk"}
              onChange={() => setSelectedCountry("uk")}
            />
            <span className="text-sm cursor-pointer">United Kingdom</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "canada"}
              onChange={() => setSelectedCountry("canada")}
            />
            <span className="text-sm cursor-pointer">Canada</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="country"
              className="mr-2 cursor-pointer"
              checked={selectedCountry === "australia"}
              onChange={() => setSelectedCountry("australia")}
            />
            <span className="text-sm cursor-pointer">Australia</span>
          </label>
        </div>
      </div>

      {/* Study Level Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3">Study Level</h4>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="level"
              className="mr-2 cursor-pointer"
              checked={selectedLevel === "all"}
              onChange={() => setSelectedLevel("all")}
            />
            <span className="text-sm cursor-pointer">All Levels</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="level"
              className="mr-2 cursor-pointer"
              checked={selectedLevel === "bachelor"}
              onChange={() => setSelectedLevel("bachelor")}
            />
            <span className="text-sm cursor-pointer">Bachelor's</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="level"
              className="mr-2 cursor-pointer"
              checked={selectedLevel === "master"}
              onChange={() => setSelectedLevel("master")}
            />
            <span className="text-sm cursor-pointer">Master's</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="level"
              className="mr-2 cursor-pointer"
              checked={selectedLevel === "doctorate"}
              onChange={() => setSelectedLevel("doctorate")}
            />
            <span className="text-sm cursor-pointer">Doctorate</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="level"
              className="mr-2 cursor-pointer"
              checked={selectedLevel === "certificate"}
              onChange={() => setSelectedLevel("certificate")}
            />
            <span className="text-sm cursor-pointer">Certificate</span>
          </label>
        </div>
      </div>

      {/* Field of Study Filter */}
      <div>
        <h4 className="text-sm font-medium mb-3">Field of Study</h4>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "all"}
              onChange={() => setSelectedField("all")}
            />
            <span className="text-sm cursor-pointer">All Fields</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "business"}
              onChange={() => setSelectedField("business")}
            />
            <span className="text-sm cursor-pointer">Business</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "engineering"}
              onChange={() => setSelectedField("engineering")}
            />
            <span className="text-sm cursor-pointer">Engineering</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "medicine"}
              onChange={() => setSelectedField("medicine")}
            />
            <span className="text-sm cursor-pointer">Medicine</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "cs"}
              onChange={() => setSelectedField("cs")}
            />
            <span className="text-sm cursor-pointer">Computer Science</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "law"}
              onChange={() => setSelectedField("law")}
            />
            <span className="text-sm cursor-pointer">Law</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "arts"}
              onChange={() => setSelectedField("arts")}
            />
            <span className="text-sm cursor-pointer">Arts</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "humanities"}
              onChange={() => setSelectedField("humanities")}
            />
            <span className="text-sm cursor-pointer">Humanities</span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-inter">
      {/* Header Section */}
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="text-white flex items-center justify-center relative overflow-hidden bg-cover bg-no-repeat h-[50vh]"
      >
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
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile: filter toggle (visible on small screens) */}
          <div className="md:hidden w-full mb-4 flex items-center justify-between">
            <button
              onClick={() => setShowFilters(true)}
              className="px-4 py-2 bg-white border border-gray-300 rounded shadow-sm text-sm"
            >
              Filters
            </button>
            <div>
              <p className="text-sm text-gray-600">
                Showing {universities.length} universities
              </p>
            </div>
          </div>

          {/* Desktop sidebar (hidden on small) */}
          <div className="w-64 flex-shrink-0 hidden md:block">
            <FiltersContent />
          </div>

          {/* Mobile filter panel (overlay) */}
          {showFilters && (
            <>
              <div
                className="fixed inset-0 bg-black/40 z-40"
                onClick={() => setShowFilters(false)}
              />
              <div className="fixed left-0 top-0 bottom-0 w-72 z-50 overflow-auto bg-[#ECF5FF] p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Filters</h3>
                  <button onClick={() => setShowFilters(false)} className="p-2">
                    <X />
                  </button>
                </div>
                <FiltersContent />
              </div>
            </>
          )}

          {/* University Grid */}
          <div className="flex-1 p-4 md:p-7 bg-[#ECF5FF]">
            <div className="mb-4">
              <p className="text-sm text-gray-600">Showing 6 universities</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {universities.map((uni) => (
                <div
                  key={uni.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Image Placeholder */}
                  <div className="">
                    <div>
                      <img
                        src={uni.image}
                        className="w-full h-[120px]"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex bg-[#374151] items-center gap-4 p-4">
                    <div className="w-10 h-10 bg-white rounded-full"></div>
                    <h3 className="font-semibold mb-2 text-white">
                      {uni.name}
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <div className="flex items-center text-sm text-[#374151] mb-2">
                      <PiGlobeSimpleBold className="mr-1 text-2xl" />
                      <span>{uni.location}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm mb-3">
                      <div className="flex items-center text-[#374151]">
                        <PiBookOpenBold className="mr-1 text-2xl" />
                        <span>{uni.programs} Programs</span>
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <Star size={14} className="mr-1 fill-current" />
                        <span className="text-gray-900 font-medium">
                          {uni.rating}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-[#BFDBFE] text-[#1E40AF] px-3 py-1 rounded-[4px]">
                        {uni.badges[0]}
                      </span>
                      <Link to={`/universities/${uni.id}`}>
                        <button className="text-[#002B5B] text-sm font-medium">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-8 text-center">
              <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center">
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
