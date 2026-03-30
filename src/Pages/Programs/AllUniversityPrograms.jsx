import React, { useState, useMemo } from "react";
import { Star, ChevronDown, X } from "lucide-react";
import { PiBookOpenBold, PiGlobeSimpleBold } from "react-icons/pi";
import programPlaceholder from "../../assets/images/program1.png";
import { Link } from "react-router-dom";
import FiltersContent from "../../components/Shared/FiltersContent";
import { useGetDiscoveryProgramsQuery } from "../../Api/universityApi";

export default function AllUniversityPrograms() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    univ_type: "all",
    level: "all",
    field: "all",
  });

  const queryParams = useMemo(() => {
    const params = {};
    if (filters.univ_type !== "all") params.univ_type = filters.univ_type;
    if (filters.level !== "all") params.level = filters.level;
    const effectiveTitle =
      searchTerm || (filters.field !== "all" ? filters.field : "");
    if (effectiveTitle) params.title = effectiveTitle;
    return params;
  }, [filters, searchTerm]);

  const {
    data: programsData,
    isLoading,
    error,
  } = useGetDiscoveryProgramsQuery(queryParams);
  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const programs = programsData || [];

  const getFullUrl = (path) => {
    if (!path) return programPlaceholder;
    if (path.startsWith("https") || path.startsWith("blob:")) return path;
    return `https://api.clasia.io${path}`;
  };

  if (error)
    return (
      <div className="p-8 text-center text-red-500">
        Error loading programs.
      </div>
    );

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
            placeholder="Search programs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile: filter toggle */}
          <div className="lg:hidden w-full mb-4 flex items-center justify-between">
            <button
              onClick={() => setShowFilters(true)}
              className="px-4 py-2 bg-white border border-gray-300 rounded shadow-sm text-sm"
            >
              Filters
            </button>
            <div>
              <p className="text-sm text-gray-600">
                Showing {programs.length} programs
              </p>
            </div>
          </div>

          {/* Desktop sidebar */}
          <div className="w-68 flex-shrink-0 hidden lg:block">
            <FiltersContent
              isLocation={false}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Mobile filter panel */}
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
                <FiltersContent
                  isLocation={false}
                  filters={filters}
                  onFilterChange={handleFilterChange}
                />
              </div>
            </>
          )}

          {/* Program Grid */}
          <div className="flex-1 p-4 md:p-7 bg-[#ECF5FF]">
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Showing {programs.length} programs
              </p>
            </div>

            {isLoading ? (
              <div className="p-8 text-center text-gray-500">
                Loading programs...
              </div>
            ) : programs.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No programs found.
              </div>
            ) : (
              <div className="border p-6 bg-white rounded-xl">
                {/* Program Cards */}
                {programs.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-lg shadow-sm mb-4 border overflow-hidden"
                  >
                    <div className="flex justify-between items-start bg-gradient-to-r from-[#F5E7E4] to-[#DEF0EC] p-4">
                      <h3 className="text-xl font-bold">{p.title}</h3>
                      <span className="bg-sky text-[#1E40AF] text-sm px-3 py-1 rounded-full whitespace-nowrap">
                        {p.level}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 p-6">
                      <div className="w-full md:w-1/3 flex-shrink-0">
                        <img
                          className="rounded-lg w-full h-48 object-cover"
                          src={getFullUrl(p.image)}
                          alt={p.title}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 mb-6 line-clamp-3">
                          {p.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
                          <div>
                            <p className="text-gray-500 text-xs uppercase font-semibold mb-1">
                              Duration
                            </p>
                            <p className="font-semibold text-sm">
                              {p.duration}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs uppercase font-semibold mb-1">
                              Language
                            </p>
                            <p className="font-semibold text-sm">
                              {p.language}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs uppercase font-semibold mb-1">
                              Start Date
                            </p>
                            <p className="font-semibold text-sm">
                              {p.start_date}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs uppercase font-semibold mb-1">
                              International Tuition
                            </p>
                            <p className="font-semibold text-sm text-green-600">
                              ${p.international_tuition}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <Link to={`/program-details/${p.id}`}>
                            <button className="bg-blue hover:shadow-lg hover:scale-105 transition-transform text-white px-6 py-2 rounded-lg font-medium">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {!isLoading && programs.length > 0 && (
              <div className="mt-8 text-center">
                <button className="px-6 py-3 text-lg border-2 border-blue text-blue rounded-md font-medium hover:bg-blue-50 transition-colors inline-flex items-center">
                  Load More
                  <ChevronDown size={16} className="ml-2" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
