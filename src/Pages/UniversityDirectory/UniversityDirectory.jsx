import { Star, ChevronDown, X } from "lucide-react";
import { PiBookOpenBold, PiGlobeSimpleBold } from "react-icons/pi";
import { Link, ScrollRestoration } from "react-router-dom";
import FiltersContent from "../../components/Shared/FiltersContent";
import { useGetAllUniversitiesQuery } from "../../Api/universityApi";
import { useState } from "react";

export default function UniversityDirectory() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    univ_type: "all",
    location: "all",
    study_type: "all",
    field: "all",
  });

  const { data: universitiesData, isLoading } = useGetAllUniversitiesQuery({
    univ_type: filters.univ_type === "all" ? "" : filters.univ_type,
    location: filters.location === "all" ? "" : filters.location,
    study_type: filters.study_type === "all" ? "" : filters.study_type,
    field: filters.field === "all" ? "" : filters.field,
    search: searchQuery,
  });

  console.log(universitiesData);

  const universities = universitiesData || [];

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const getFullUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("blob:")) return path;
    return `http://10.10.13.20:8005${path}`;
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-inter">
      <ScrollRestoration />
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
          <div className="w-68 flex-shrink-0 hidden md:block">
            <FiltersContent filters={filters} onFilterChange={handleFilterChange} />
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
                <FiltersContent filters={filters} onFilterChange={handleFilterChange} />
              </div>
            </>
          )}

          {/* University Grid */}
          <div className="flex-1 p-4 md:p-7 bg-[#ECF5FF]">
            <div className="mb-4">
              <p className="text-sm text-gray-600">Showing {universities.length} universities</p>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : (
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
                          src={getFullUrl(uni?.picture)}

                          className="w-fit object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex bg-[#374151] items-center gap-4 px-4 py-2">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                        {uni.logo && <img src={getFullUrl(uni?.logo)}
                          alt={uni.univ_name} className="w-full h-full object-contain" />}
                      </div>
                      <h3 className="font-semibold text-white truncate">{uni.univ_name}</h3>
                    </div>

                    {/* Card Content */}
                    <div className="p-4">
                      <div className="flex items-center text-sm text-[#374151] mb-2">
                        <PiGlobeSimpleBold className="mr-1 text-2xl" />
                        <span>{uni.address || "Location not specified"}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm mb-3">
                        <div className="flex items-center text-[#374151]">
                          <PiBookOpenBold className="mr-1 text-2xl" />
                          <span>{uni.programs_count} Programs</span>
                        </div>
                        <div className="flex items-center text-yellow-500">
                          <Star size={14} className="mr-1 fill-current" />
                          <span className="text-gray-900 font-medium">
                            {uni.average_rating || 0}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-[#BFDBFE] text-[#1E40AF] px-3 py-1 rounded-[4px] capitalize">
                          {uni.univ_type}
                        </span>
                        <Link to={`/universities/${uni.id}`}>
                          <button className="text-[#002B5B] text-sm hover:scale-105 transition-transform font-medium">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

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
