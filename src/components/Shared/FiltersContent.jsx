export default function FiltersContent({ filters, onFilterChange, isLocation = true }) {
  const { level, location, univ_type, field: selectedField } = filters;

  return (
    <div className="bg-[#ECF5FF] text-black p-6 shadow-sm z-[10000]">
      <h3 className="font-bold text-xl mb-4">Filters</h3>

      {/* Level Filter */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Academic Level</h4>
        <div className="space-y-2">
          {[
            { id: "all", label: "All Levels" },
            { id: "college", label: "College" },
            { id: "Master", label: "Master" },
            { id: "PhD", label: "PhD" },
            { id: "degree", label: "Degree" },
            { id: "online-courses", label: "Online Courses" },
            { id: "professional-formation", label: "Professional Formation" },
          ].map((opt) => (
            <label key={opt.id} className="flex items-center cursor-pointer select-none">
              <input
                type="radio"
                name="level"
                className="mr-2 cursor-pointer"
                checked={level === opt.id}
                onChange={() => onFilterChange("level", opt.id)}
              />
              <span className="text-sm cursor-pointer">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Programs Filter */}
      <div>
        <h4 className="font-semibold mb-3">Programs</h4>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="field"
              className="mr-2 cursor-pointer"
              checked={selectedField === "all"}
              onChange={() => onFilterChange("field", "all")}
            />
            <span className="text-sm cursor-pointer">All Programs</span>
          </label>
          {[
            { id: "Business Management and Administration", label: "Business Management and Administration" },
            { id: "Legal and Social Sciences", label: "Legal and Social Sciences" },
            { id: "Healthcare", label: "Healthcare" },
            { id: "Natural Sciences and Mathematics", label: "Natural Sciences and Mathematics" },
            { id: "Humanities and Letters", label: "Humanities and Letters" },
            { id: "Education", label: "Education" },
            { id: "Technology and Telecommunications", label: "Technology and Telecommunications" },
            { id: "Economics and Finance", label: "Economics and Finance" },
            { id: "Languages", label: "Languages" },
            { id: "Commerce and Marketing", label: "Commerce and Marketing" },
            { id: "Hospitality and Tourism", label: "Hospitality and Tourism" },
            { id: "Sports and Physical Activity", label: "Sports and Physical Activity" },
            { id: "Agriculture, Mining, and Gardening", label: "Agriculture, Mining, and Gardening" },
            { id: "Image, Film, and Sound", label: "Image, Film, and Sound" },
            { id: "Fine Arts", label: "Fine Arts" },
            { id: "Security and Civil Protection", label: "Security and Civil Protection" },
            { id: "Logistics and Transportation", label: "Logistics and Transportation" },
            { id: "Graphic Arts", label: "Graphic Arts" },
            { id: "Fashion and Textile Production", label: "Fashion and Textile Production" },
            { id: "Music, Performing Arts, and Dance", label: "Music, Performing Arts, and Dance" },
            { id: "Veterinary Medicine and Animals", label: "Veterinary Medicine and Animals" },
          ].map((item) => (
            <label key={item.id} className="flex items-center cursor-pointer select-none">
              <input
                type="radio"
                name="field"
                className="mr-2 cursor-pointer"
                checked={selectedField === item.id}
                onChange={() => onFilterChange("field", item.id)}
              />
              <span className="text-sm cursor-pointer">{item.label}</span>
            </label>
          ))}
        </div>
      </div>
      {isLocation && (
        <>
          {/* Locations Filter */}
          <div className="my-6">
            <h4 className="font-semibold mb-3">Locations</h4>
            <div className="space-y-2">
              {[
                { id: "all", label: "All Locations" },
                { id: "madrid", label: "Comunidad de Madrid" },
                { id: "barcelona", label: "Barcelona" },
                { id: "valencia", label: "Valencia" },
                { id: "alicante", label: "Alicante" },
                { id: "sevilla", label: "Sevilla" },
                { id: "salamanca", label: "Salamanca" },
                { id: "málaga", label: "Málaga" },
                { id: "murcia", label: "Murcia" },
                { id: "cádiz", label: "Cádiz" },
                { id: "vizcaya", label: "Vizcaya" },
                { id: "asturias", label: "Asturias" },
                { id: "zaragoza", label: "Zaragoza" },
              ].map((item) => (
                <label key={item.id} className="flex items-center cursor-pointer select-none">
                  <input
                    type="radio"
                    name="location"
                    className="mr-2 cursor-pointer"
                    checked={location === item.id}
                    onChange={() => onFilterChange("location", item.id)}
                  />
                  <span className="text-sm cursor-pointer">{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Condition (Univ Type) Filter */}
      <div className="my-6">
        <h4 className="font-semibold mb-3">Condition</h4>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="univ_type"
              className="mr-2 cursor-pointer"
              checked={univ_type === "all"}
              onChange={() => onFilterChange("univ_type", "all")}
            />
            <span className="text-sm cursor-pointer">All Types</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="univ_type"
              className="mr-2 cursor-pointer"
              checked={univ_type === "public"}
              onChange={() => onFilterChange("univ_type", "public")}
            />
            <span className="text-sm cursor-pointer">Public</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="univ_type"
              className="mr-2 cursor-pointer"
              checked={univ_type === "private"}
              onChange={() => onFilterChange("univ_type", "private")}
            />
            <span className="text-sm cursor-pointer">Private</span>
          </label>
        </div>
      </div>
    </div>
  );
}
