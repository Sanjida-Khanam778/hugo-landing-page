import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProgramsByUniIdQuery } from "../../Api/universityApi";

export default function Program({ data, onViewDetails }) {
  const { id } = useParams();
  console.log(data);
  const { data: programsData, isLoading, error } = useGetProgramsByUniIdQuery(id);
  console.log(programsData);
  const [levelFilter, setLevelFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const getFullUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("blob:")) return path;
    return `http://10.10.13.20:8005${path}`;
  };

  const programs = programsData || [];

  const filtered = programs.filter((p) => {
    const matchesLevel = levelFilter === "all" || p.level.toLowerCase() === levelFilter.toLowerCase();
    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  if (isLoading) return <div>Loading programs...</div>;
  if (error) return <div>Error loading programs.</div>;

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
      {filtered.length > 0 ? (
        filtered.map((p) => (
          <div key={p.id} className="bg-white rounded-lg shadow-sm mb-4 border overflow-hidden">
            <div className="flex justify-between items-start bg-gradient-to-r from-[#F5E7E4] to-[#DEF0EC] p-4">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <span className="bg-sky text-[#1E40AF] text-xs font-semibold px-3 py-1 rounded-full uppercase">
                {p.level}
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {p.image && (
                <div className="h-48 md:w-1/3 flex-shrink-0">
                  <img className="rounded-lg w-full h-full object-cover" src={getFullUrl(p.image)} alt={p.title} />
                </div>
              )}
              <div className="flex-grow">
                <p className="text-gray-700 mb-6 line-clamp-3">{p.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <p className=" text-gray-400 mb-1">Duration</p>
                    <p className=" font-semibold text-dark">{p.duration || "N/A"}</p>
                  </div>
                  <div>
                    <p className=" text-gray-400 mb-1">Language</p>
                    <p className=" font-semibold text-dark">{p.language || "N/A"}</p>
                  </div>
                  <div>
                    <p className=" text-gray-400 mb-1"> Tution</p>
                    <p className=" font-semibold text-dark">
                      {p.domestic_tuition ? `$${p.domestic_tuition}` : "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className=" text-gray-400 mb-1">Last updated</p>
                    <p className=" font-semibold text-dark">
                      {p.updated_at}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end items-center">

                  <button
                    onClick={() => onViewDetails && onViewDetails(p.id)}
                    className="bg-blue hover:shadow-lg hover:scale-105 transition-transform text-white px-6 py-2 rounded-lg text-sm font-medium"
                  >
                    View Details
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-12 text-gray-500">No programs found matching your criteria.</div>
      )}
    </div>
  );
}
