import React, { useState } from "react";
import { MapPin, BookOpen, Star, ChevronDown } from "lucide-react";
import background from "../../assets/images/uniBanner.png";

export default function UniversityDirectory() {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedField, setSelectedField] = useState("all");

  const universities = [
    {
      id: 1,
      name: "Harvard University",
      location: "Cambridge, USA",
      programs: 201,
      rating: 4.9,
      badges: ["Top Ranked"],
    },
    {
      id: 2,
      name: "Stanford University",
      location: "Stanford, USA",
      programs: 231,
      rating: 4.8,
      badges: ["Top Rated Average"],
    },
    {
      id: 3,
      name: "Oxford University",
      location: "Oxford, UK",
      programs: 180,
      rating: 4.8,
      badges: ["Top Rated Average"],
    },
    {
      id: 4,
      name: "MIT",
      location: "Cambridge, USA",
      programs: 150,
      rating: 4.8,
      badges: ["Top Rated Average"],
    },
    {
      id: 5,
      name: "University of Tokyo",
      location: "Tokyo, Japan",
      programs: 90,
      rating: 4.6,
      badges: ["Top Rated Average"],
    },
    {
      id: 6,
      name: "ETH Zurich",
      location: "Zurich, Switzerland",
      programs: 130,
      rating: 4.8,
      badges: ["Top Rated Average"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div   style={{ backgroundImage: `url(${background})` }} className="text-white flex items-center justify-center relative overflow-hidden bg-cover bg-no-repeat h-[50vh]">
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <h1 className="text-4xl font-bold mb-8">University Directory</h1>
          <p className="text-[#BFDBFE] max-w-3xl text-xl">
            Explore our comprehensive directory of top universities worldwide.
            Filter by location, programs, and more to find your perfect match.
          </p>
        </div>
      </div>

      {/* Search and Sort Bar */}
      <div className="bg-white border-b border-gray-200 py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <input
            type="text"
            placeholder="Search universities, locations, or programs..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="ml-4 flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by Ranking</span>
            <ChevronDown size={16} className="text-gray-600" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Filters</h3>

              {/* Country Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Country</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="country"
                      className="mr-2"
                      checked={selectedCountry === "all"}
                      onChange={() => setSelectedCountry("all")}
                    />
                    <span className="text-sm">All Countries</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="country"
                      className="mr-2"
                      onChange={() => setSelectedCountry("us")}
                    />
                    <span className="text-sm">United States</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="country"
                      className="mr-2"
                      onChange={() => setSelectedCountry("uk")}
                    />
                    <span className="text-sm">United Kingdom</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="country"
                      className="mr-2"
                      onChange={() => setSelectedCountry("canada")}
                    />
                    <span className="text-sm">Canada</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="country"
                      className="mr-2"
                      onChange={() => setSelectedCountry("australia")}
                    />
                    <span className="text-sm">Australia</span>
                  </label>
                </div>
              </div>

              {/* Study Level Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Study Level</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="level"
                      className="mr-2"
                      checked={selectedLevel === "all"}
                      onChange={() => setSelectedLevel("all")}
                    />
                    <span className="text-sm">All Levels</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="level"
                      className="mr-2"
                      onChange={() => setSelectedLevel("bachelor")}
                    />
                    <span className="text-sm">Bachelor's</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="level"
                      className="mr-2"
                      onChange={() => setSelectedLevel("master")}
                    />
                    <span className="text-sm">Master's</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="level"
                      className="mr-2"
                      onChange={() => setSelectedLevel("doctorate")}
                    />
                    <span className="text-sm">Doctorate</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="level"
                      className="mr-2"
                      onChange={() => setSelectedLevel("certificate")}
                    />
                    <span className="text-sm">Certificate</span>
                  </label>
                </div>
              </div>

              {/* Field of Study Filter */}
              <div>
                <h4 className="text-sm font-medium mb-3">Field of Study</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="field"
                      className="mr-2"
                      checked={selectedField === "all"}
                      onChange={() => setSelectedField("all")}
                    />
                    <span className="text-sm">All Fields</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="field"
                      className="mr-2"
                      onChange={() => setSelectedField("business")}
                    />
                    <span className="text-sm">Business</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="field"
                      className="mr-2"
                      onChange={() => setSelectedField("engineering")}
                    />
                    <span className="text-sm">Engineering</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="field"
                      className="mr-2"
                      onChange={() => setSelectedField("medicine")}
                    />
                    <span className="text-sm">Medicine</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="field"
                      className="mr-2"
                      onChange={() => setSelectedField("cs")}
                    />
                    <span className="text-sm">Computer Science</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="field"
                      className="mr-2"
                      onChange={() => setSelectedField("law")}
                    />
                    <span className="text-sm">Law</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="field"
                      className="mr-2"
                      onChange={() => setSelectedField("arts")}
                    />
                    <span className="text-sm">Arts</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="field"
                      className="mr-2"
                      onChange={() => setSelectedField("humanities")}
                    />
                    <span className="text-sm">Humanities</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* University Grid */}
          <div className="flex-1">
            <div className="mb-4">
              <p className="text-sm text-gray-600">Showing 6 universities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.map((uni) => (
                <div
                  key={uni.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Image Placeholder */}
                  <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 relative">
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{uni.name}</h3>

                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin size={14} className="mr-1" />
                      <span>{uni.location}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm mb-3">
                      <div className="flex items-center text-gray-600">
                        <BookOpen size={14} className="mr-1" />
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
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {uni.badges[0]}
                      </span>
                      <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                        View Details
                      </button>
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
