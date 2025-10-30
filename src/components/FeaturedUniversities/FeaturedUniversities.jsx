import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import universities from "../../../public/data/universities.json";

export default function FeaturedUniversities() {
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
      Math.min(
        prev,
        Math.max(0, universities.universities.length - itemsPerPage)
      )
    );
  }, [itemsPerPage]);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? universities.universities.length - itemsPerPage : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === universities.universities.length - itemsPerPage ? 0 : prev + 1
    );
  };

  const visibleUniversities = universities.universities.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="w-full bg-[#F3F4F6] py-16 rounded-t-3xl relative -top-6">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Featured Universities
          </h2>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
              aria-label="Previous universities"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 hover:text-blue-600" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
              aria-label="Next universities"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 hover:text-blue-600" />
            </button>
          </div>
        </div>

        {/* University Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {visibleUniversities.map((uni) => (
            <div
              key={uni.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* University Image */}
              <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                <img
                  src={uni.image || "/placeholder.svg"}
                  alt={uni.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#002B5B] mb-1">
                  {uni.name}
                </h3>
                <p className="text-sm text-[#374151] mb-3">{uni.location}</p>

                {/* Programs and Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6B7280]">
                    {uni.programs} Programs
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-900">
                      {uni.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="px-8 py-3 border-2 border-blue-500 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
            View All Universities
          </button>
        </div>
      </div>
    </section>
  );
}
