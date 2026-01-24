"use client";

import { useState, useRef, useEffect } from "react";
import { Upload, Plus, X } from "lucide-react";
import AddRankingModal from "../Modal/AddRankingModal";
import AddLocationModal from "../Modal/AddLocationModal";
import AddAccreditationModal from "../Modal/AddAccreditationModal";
import TextEditor from "../../../editor";
import { useGetUniversityProfileQuery, useSetupProfileMutation } from "../../../Api/universityApi";
import { toast } from "react-hot-toast";

export default function UniversityProfile() {
  const { data: profile, isLoading: profileLoading } = useGetUniversityProfileQuery();
  const [setupProfile, { isLoading: isUpdating }] = useSetupProfileMutation();
  const [activeModal, setActiveModal] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [logo, setLogo] = useState({ preview: null, file: null });
  const [sectionVideo, setSectionVideo] = useState({ preview: null, file: null });
  const [bannerVideo, setBannerVideo] = useState({ preview: null, file: null });

  const [basicInfo, setBasicInfo] = useState({
    name: "",
    university_type: "Private",
    total_campuses: "",
    about: "",
    year_founded: "",
    total_faculty: "",
    total_students: "",
  });

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
  const [accreditations, setAccreditations] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (profile) {
      setBasicInfo({
        name: profile.name || "",
        university_type: profile.university_type || "Private",
        total_campuses: profile.total_campuses || "",
        about: profile.about || "",
        year_founded: profile.year_founded || "",
        total_faculty: profile.total_faculty || "",
        total_students: profile.total_students || "",
      });
      setRankings(profile.rankings || []);
      setLocations(profile.locations || []);
      setAccreditations(profile.accreditations || []);
      setEditorContent(profile.what_makes_us_different || "");
      if (profile.logo) setLogo({ preview: profile.logo, file: null });
      if (profile.section_video) setSectionVideo({ preview: profile.section_video, file: null });
      if (profile.banner_video) setBannerVideo({ preview: profile.banner_video, file: null });
    }
  }, [profile]);

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
      setLogo({
        preview: URL.createObjectURL(file),
        file: file,
      });
    }
  };

  const handleSectionVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setSectionVideo({
        preview: URL.createObjectURL(file),
        file: file,
      });
    }
  };

  const handleBannerVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setBannerVideo({
        preview: URL.createObjectURL(file),
        file: file,
      });
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
    setBannerVideo({ preview: null, file: null });
    if (bannerVideoInputRef.current) bannerVideoInputRef.current.value = "";
  };

  const handleSave = async () => {
    const fd = new FormData();
    // Basic Info
    Object.keys(basicInfo).forEach((key) => {
      fd.append(key, basicInfo[key]);
    });

    // Content
    fd.append("what_makes_us_different", editorContent);

    // Lists (JSON stringify for mixed arrays in FormData)
    fd.append("rankings", JSON.stringify(rankings.map(({ id, ...rest }) => rest)));
    fd.append("locations", JSON.stringify(locations.map(({ id, ...rest }) => rest)));
    fd.append("accreditations", JSON.stringify(accreditations.map(({ id, ...rest }) => rest)));

    // Files
    if (logo.file) fd.append("logo", logo.file);
    if (sectionVideo.file) fd.append("section_video", sectionVideo.file);
    if (bannerVideo.file) fd.append("banner_video", bannerVideo.file);

    try {
      await setupProfile(fd).unwrap();
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error(err?.data?.message || "Failed to update profile");
      console.error("Profile update error:", err);
    }
  };

  return (
    <div className=" p-8">
      {/* Header with Save Changes Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">University Profile</h1>
        <button
          type="button"
          onClick={handleSave}
          disabled={isUpdating}
          className="bg-blue text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
        >
          {isUpdating ? "Saving..." : "Save Changes"}
        </button>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Branding Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Branding</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Logo Upload */}
            <div>
              {logo.preview ? (
                <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden group">
                  <img
                    src={logo.preview}
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveLogo}
                    className="absolute top-2 right-2 bg-red text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={20} />
                  </button>
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
              {sectionVideo.preview ? (
                <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden group">
                  <video
                    src={sectionVideo.preview}
                    className="w-full h-full object-cover"
                    controls
                  />
                  <button
                    type="button"
                    onClick={handleRemoveSectionVideo}
                    className="absolute top-2 right-2 bg-red text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={20} />
                  </button>
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
              {bannerVideo.preview ? (
                <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden group">
                  <video
                    src={bannerVideo.preview}
                    className="w-full h-full object-cover"
                    controls
                  />
                  <button
                    type="button"
                    onClick={handleRemoveBannerVideo}
                    className="absolute top-2 right-2 bg-red text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={20} />
                  </button>
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
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University Name
              </label>
              <input
                type="text"
                name="name"
                value={basicInfo.name}
                onChange={handleInputChange}
                placeholder="Harvard University"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University Type
              </label>
              <select
                name="university_type"
                value={basicInfo.university_type}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Private">Private</option>
                <option value="Public">Public</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Campuses
              </label>
              <input
                type="number"
                name="total_campuses"
                value={basicInfo.total_campuses}
                onChange={handleInputChange}
                placeholder="2"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                About
              </label>
              <textarea
                name="about"
                value={basicInfo.about}
                onChange={handleInputChange}
                placeholder="Description about your university..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year Founded
              </label>
              <input
                type="number"
                name="year_founded"
                value={basicInfo.year_founded}
                onChange={handleInputChange}
                placeholder="1636"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Faculty
              </label>
              <input
                type="number"
                name="total_faculty"
                value={basicInfo.total_faculty}
                onChange={handleInputChange}
                placeholder="200"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Students
              </label>
              <input
                type="number"
                name="total_students"
                value={basicInfo.total_students}
                onChange={handleInputChange}
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
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">What makes us different</h2>

          <div className="col-span-2">

            {/* <textarea

              placeholder="Description about your university..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
            /> */}
            <TextEditor htmlElement={editorContent} onChange={(value) => setEditorContent(value)} isEditable={true} />
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
