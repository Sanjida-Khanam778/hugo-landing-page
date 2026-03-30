import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import uni_default from "../../assets/images/uni_default.jpg";
import { useGetAllUniversitiesQuery } from "../../Api/universityApi";

export default function FeaturedUniversities() {
  const { data: universitiesData, isLoading } = useGetAllUniversitiesQuery();
  const universitiesList = universitiesData || [];
  console.log(universitiesList);
  const [currentIndex, setCurrentIndex] = useState(0);

  // responsive items per page: mobile=1, tablet=2, laptop+ = 4
  const getItemsPerPage = () => {
    if (typeof window === "undefined") return 4;
    // check largest breakpoints first (desktop/laptop -> 4)
    if (window.matchMedia("(min-width: 1024px)").matches) return 4; // lg and up
    if (window.matchMedia("(min-width: 640px)").matches) return 2; // tablet
    return 1; // mobile
  };

  const [itemsPerPage, setItemsPerPage] = useState(() => getItemsPerPage());
  const getFullUrl = (path) => {
    if (!path) return "";
       if (path.startsWith("https") || path.startsWith("blob:")) {
      return path;
    }
    return `https://api.clasia.io${path}`;
  };

  useEffect(() => {
    const update = () => setItemsPerPage(getItemsPerPage());
    // initial set
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ensure currentIndex remains valid if itemsPerPage changes
  useEffect(() => {
    setCurrentIndex((prev) =>
      Math.min(prev, Math.max(0, universitiesList.length - itemsPerPage)),
    );
  }, [itemsPerPage, universitiesList.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(0, universitiesList.length - itemsPerPage)
        : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= universitiesList.length - itemsPerPage ? 0 : prev + 1,
    );
  };

  const visibleUniversities = universitiesList.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  return (
    <section className="w-full bg-[#F3F4F6] pt-10 lg:pt-16 rounded-t-3xl relative -top-6">
      <div className="w-11/12 mx-auto px-0 sm:px-6 lg:px-8">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-6 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Featured Universities
          </h2>

          {/* Navigation Arrows */}
          {/* View All Button */}
          <div className="flex items-center gap-4 lg:gap-8">
            <Link
              to={"/universities"}
              className="flex justify-center hidden md:block"
            >
              <button className="px-4 lg:px-8 py-2 md:py-3 hover:shadow-lg hover:scale-105 transition-transform border-2 border-blue text-blue font-semibold rounded-lg duration-200">
                View All Universities
              </button>
            </Link>
            <div className="flex gap-1 md:gap-2">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                aria-label="Previous universities"
              >
                <ChevronLeft className="md:w-5 md:h-5 w-4 h-4 text-gray-600 hover:text-blue-600" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                aria-label="Next universities"
              >
                <ChevronRight className="md:w-5 md:h-5 w-4 h-4 text-gray-600 hover:text-blue-600" />
              </button>
            </div>
          </div>
        </div>

        {/* University Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 md:mb-0 lg:mb-12">
          {isLoading ? (
            <div className="col-span-full flex justify-center py-10">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
            </div>
          ) : (
            visibleUniversities.map((uni) => (
              <div
                key={uni.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* University Image */}
                <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={getFullUrl(uni?.picture) || uni_default}
                    alt={uni.univ_name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-[#002B5B] mb-1 truncate">
                        {uni.univ_name}
                      </h3>
                      <p className="text-sm text-[#374151] mb-3 truncate">
                        {uni.address || "Location not specified"}
                      </p>
                    </div>
                    <img
                      src={getFullUrl(uni.logo)}
                      alt=""
                      className="w-10 h-10 rounded-full object-contain ml-2 flex-shrink-0"
                    />
                  </div>
                  {/* Programs and Rating */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6B7280]">
                      {uni.programs_count} Programs
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-900">
                        {uni.average_rating || 0}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <Link to={"/universities"} className="flex justify-center md:hidden">
          <button className="px-4 md:px-8 py-1 md:py-3 hover:shadow-lg hover:scale-105 transition-transform border-2 border-blue text-blue font-semibold rounded-lg duration-200">
            View All Universities
          </button>
        </Link>
      </div>
    </section>
  );
}
