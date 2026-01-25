import { useState } from "react";

export default function FiltersContent({ filters, onFilterChange }) {
  const { study_type, location, univ_type, field: selectedField } = filters;
  return (
    <div className="bg-[#ECF5FF] text-black p-6 shadow-sm z-[10000]">
      <h3 className="font-bold text-xl mb-4">Filters</h3>

      {/* Study type Filter */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Study Type</h4>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={study_type === "all"}
              onChange={() => onFilterChange("study_type", "all")}
            />
            <span className="text-sm cursor-pointer">All Type</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={study_type === "college"}
              onChange={() => onFilterChange("study_type", "college")}
            />
            <span className="text-sm cursor-pointer">College</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={study_type === "master"}
              onChange={() => onFilterChange("study_type", "master")}
            />
            <span className="text-sm cursor-pointer">Master</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={study_type === "degree"}
              onChange={() => onFilterChange("study_type", "degree")}
            />
            <span className="text-sm cursor-pointer">Degree</span>
          </label>

          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={study_type === "online courses"}
              onChange={() => onFilterChange("study_type", "online courses")}
            />
            <span className="text-sm cursor-pointer">Online courses</span>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="type"
              className="mr-2 cursor-pointer"
              checked={study_type === "professional Formation"}
              onChange={() => onFilterChange("study_type", "professional Formation")}
            />
            <span className="text-sm cursor-pointer">Professional Formation</span>
          </label>
        </div>
      </div>

      {/* Programs Filter */}
      <div>
        <h4 className="font-semibold mb-3">Programs</h4>
        <div className="space-y-2">
          {[
            { id: "bma", label: "Business Management and Administration" },
            { id: "lss", label: "Legal and Social Sciences" },
            { id: "healthcare", label: "Healthcare" },
            { id: "mathematics", label: "Natural Sciences and Mathematics" },
            { id: "humanities", label: "Humanities and Letters" },
            { id: "education", label: "Education" },
            { id: "technology", label: "Technology and Telecommunications" },
            { id: "economics", label: "Economics and Finance" },
            { id: "languages", label: "Languages" },
            { id: "marketing", label: "Commerce and Marketing" },
            { id: "tourism", label: "Hospitality and Tourism" },
            { id: "sports", label: "Sports and Physical Activity" },
            { id: "agriculture", label: "Agriculture, Mining, and Gardening" },
            { id: "image", label: "Image, Film, and Sound" },
            { id: "arts", label: "Fine Arts" },
            { id: "civil", label: "Security and Civil Protection" },
            { id: "logistics", label: "Logistics and Transportation" },
            { id: "graphic", label: "Graphic Arts" },
            { id: "textile", label: "Fashion and Textile Production" },
            { id: "music", label: "Music, Performing Arts, and Dance" },
            { id: "animals", label: "Veterinary Medicine and Animals" },
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
      {/* Locations Filter */}
      <div className="my-6">
        <h4 className="font-semibold mb-3">Locations</h4>
        <div className="space-y-2">
          {[
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
      {/* Condition */}
      <div className="my-6">
        <h4 className="font-semibold mb-3">Condition</h4>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="level"
              className="mr-2 cursor-pointer"
              checked={univ_type === "public"}
              onChange={() => onFilterChange("univ_type", "public")}
            />
            <span className="text-sm cursor-pointer">Public</span>
          </label>

          <label className="flex items-center cursor-pointer select-none">
            <input
              type="radio"
              name="level"
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
