"use client";

import { useState, useRef } from "react";
import { Upload, Plus, Edit2, Trash2, X } from "lucide-react";
import AddRankingModal from "../Modal/AddRankingModal";
import AddLocationModal from "../Modal/AddLocationModal";
import AddAccreditationModal from "../Modal/AddAccreditationModal";

export default function UniversityProfile() {
  const [activeModal, setActiveModal] = useState(null);
  const [logo, setLogo] = useState(null);
  const [sectionVideo, setSectionVideo] = useState(null);
  const [bannerVideo, setBannerVideo] = useState(null);

  const logoInputRef = useRef(null);
  const sectionVideoInputRef = useRef(null);
  const bannerVideoInputRef = useRef(null);
  const [rankings, setRankings] = useState([
    { id: 1, org: "QS World University Rankings", rank: "#45", year: "2024" },
    { id: 2, org: "Times Higher Education", rank: "#67", year: "2024" },
  ]);
  const [locations, setLocations] = useState([
    { id: 1, name: "LARC Campus", address: "Main St, City, Country" },
  ]);
  const [accreditations, setAccreditations] = useState([
    {
      id: 1,
      name: "New England Commission of Higher Education (NECHE)",
      status: "Valid",
    },
    {
      id: 2,
      name: "Association of American Universities (AAU)",
      status: "Valid",
    },
  ]);

  const handleAddRanking = (data) => {
    setRankings([...rankings, { id: Date.now(), ...data }]);
    setActiveModal(null);
  };

  const handleAddLocation = (data) => {
    setLocations([...locations, { id: Date.now(), ...data }]);
    setActiveModal(null);
  };

  const handleAddAccreditation = (data) => {
    setAccreditations([...accreditations, { id: Date.now(), ...data }]);
    setActiveModal(null);
  };

  const handleDeleteRanking = (id) => {
    setRankings(rankings.filter((r) => r.id !== id));
  };

  const handleDeleteLocation = (id) => {
    setLocations(locations.filter((l) => l.id !== id));
  };

  const handleDeleteAccreditation = (id) => {
    setAccreditations(accreditations.filter((a) => a.id !== id));
  };

  // File upload handlers
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogo({
          name: file.name,
          data: event.target.result,
          type: file.type,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSectionVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSectionVideo({
          name: file.name,
          data: event.target.result,
          type: file.type,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBannerVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setBannerVideo({
          name: file.name,
          data: event.target.result,
          type: file.type,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogo(null);
    if (logoInputRef.current) logoInputRef.current.value = "";
  };

  const handleRemoveSectionVideo = () => {
    setSectionVideo(null);
    if (sectionVideoInputRef.current) sectionVideoInputRef.current.value = "";
  };

  const handleRemoveBannerVideo = () => {
    setBannerVideo(null);
    if (bannerVideoInputRef.current) bannerVideoInputRef.current.value = "";
  };

  return (
    <div className=" p-8">
      {/* Header with Save Changes Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">University Profile</h1>
        <button
          type="button"
          className="bg-blue text-white px-6 py-2 rounded-lg transition-colors"
        >
          Save Changes
        </button>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Branding Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Branding</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Logo Upload */}
            <div>
              {logo ? (
                <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden group">
                  <img
                    src={logo.data}
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveLogo}
                    className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={20} />
                  </button>
                  <p className="absolute bottom-2 left-2 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded truncate w-40">
                    {logo.name}
                  </p>
                </div>
              ) : (
                <div
                  onClick={() => logoInputRef.current?.click()}
                  className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-blue-500 transition-colors cursor-pointer h-48"
                >
                  <Upload size={24} className="text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600">Upload Logo</span>
                  <span className="text-xs text-gray-400 mt-1">
                    Recommended: 400x400px
                  </span>
                </div>
              )}
              <input
                ref={logoInputRef}
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="hidden"
              />
            </div>

            {/* Section Video Upload */}
            <div>
              {sectionVideo ? (
                <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden group">
                  <video
                    src={sectionVideo.data}
                    className="w-full h-full object-cover"
                    controls
                  />
                  <button
                    type="button"
                    onClick={handleRemoveSectionVideo}
                    className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={20} />
                  </button>
                  <p className="absolute bottom-2 left-2 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded truncate w-40">
                    {sectionVideo.name}
                  </p>
                </div>
              ) : (
                <div
                  onClick={() => sectionVideoInputRef.current?.click()}
                  className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-blue-500 transition-colors cursor-pointer h-48"
                >
                  <Upload size={24} className="text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600">Section Video</span>
                  <span className="text-xs text-gray-400 mt-1">
                    Recommended: 400x400px
                  </span>
                </div>
              )}
              <input
                ref={sectionVideoInputRef}
                type="file"
                accept="video/*"
                onChange={handleSectionVideoUpload}
                className="hidden"
              />
            </div>

            {/* Banner Video Upload */}
            <div>
              {bannerVideo ? (
                <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden group">
                  <video
                    src={bannerVideo.data}
                    className="w-full h-full object-cover"
                    controls
                  />
                  <button
                    type="button"
                    onClick={handleRemoveBannerVideo}
                    className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={20} />
                  </button>
                  <p className="absolute bottom-2 left-2 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded truncate w-40">
                    {bannerVideo.name}
                  </p>
                </div>
              ) : (
                <div
                  onClick={() => bannerVideoInputRef.current?.click()}
                  className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-blue-500 transition-colors cursor-pointer h-48"
                >
                  <Upload size={24} className="text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600">Banner Video</span>
                  <span className="text-xs text-gray-400 mt-1">
                    Recommended: 1200x400px
                  </span>
                </div>
              )}
              <input
                ref={bannerVideoInputRef}
                type="file"
                accept="video/*"
                onChange={handleBannerVideoUpload}
                className="hidden"
              />
            </div>
          </div>
        </div>
        {/* University Information Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            University Information
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University Name
              </label>
              <input
                type="text"
                placeholder="Harvard University"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tagline
              </label>
              <input
                type="url"
                placeholder="www.harvard.edu"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                About
              </label>
              <textarea
                placeholder="Description about your university..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows="4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year Founded
              </label>
              <input
                type="number"
                placeholder="1636"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Students
              </label>
              <input
                type="number"
                placeholder="21000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
        {/* Accreditations Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Accreditations</h2>
            <button
              type="button"
              onClick={() => setActiveModal("accreditation")}
              className="bg-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus size={18} />
              Add Accreditation
            </button>
          </div>
          <div className="space-y-3">
            {accreditations.map((acc) => (
              <div
                key={acc.id}
                className="flex justify-between items-center p-4 border rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-800">{acc.name}</p>
                  <p className="text-sm text-grey">Valid until Dec 2025</p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setActiveModal("accreditation")}
                    className="text-blue mr-4"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteAccreditation(acc.id)}
                    className="text-red"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Rankings Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Rankings</h2>
            <button
              type="button"
              onClick={() => setActiveModal("ranking")}
              className="bg-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus size={18} />
              Add Ranking
            </button>
          </div>
          <div className="space-y-3">
            {rankings.map((rank) => (
              <div
                key={rank.id}
                className="flex justify-between items-center p-4 border rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-800">{rank.org}</p>
                  <p className="text-sm text-gray-600">Rank: {rank.rank}</p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setActiveModal("ranking")}
                    className="text-blue mr-4"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteRanking(rank.id)}
                    className="text-red"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Location Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Location</h2>
            <button
              type="button"
              onClick={() => setActiveModal("location")}
              className="bg-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus size={18} />
              Add Location
            </button>
          </div>
          <div className="space-y-3">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="flex justify-between items-center p-4 border rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-800">{loc.name}</p>
                  <p className="text-sm text-grey">{loc.address}</p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setActiveModal("location")}
                    className="text-blue mr-4"
                  >
                    Edit
                  </button>{" "}
                  <button
                    type="button"
                    onClick={() => handleDeleteLocation(loc.id)}
                    className="text-red"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>

      {/* Modals */}
      {activeModal === "ranking" && (
        <AddRankingModal
          onAdd={handleAddRanking}
          onClose={() => setActiveModal(null)}
        />
      )}
      {activeModal === "location" && (
        <AddLocationModal
          onAdd={handleAddLocation}
          onClose={() => setActiveModal(null)}
        />
      )}
      {activeModal === "accreditation" && (
        <AddAccreditationModal
          onAdd={handleAddAccreditation}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}
