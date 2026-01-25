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
  const { data: profileResponse, isLoading: profileLoading } = useGetUniversityProfileQuery();
  const profile = profileResponse?.data || profileResponse;
  const [setupProfile, { isLoading: isUpdating }] = useSetupProfileMutation();
  const [activeModal, setActiveModal] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [logo, setLogo] = useState({ preview: null, file: null });
  const [sectionVideo, setSectionVideo] = useState({ preview: null, file: null });
  const [bannerVideo, setBannerVideo] = useState({ preview: null, file: null });

  const [basicInfo, setBasicInfo] = useState({
    univ_name: "",
    tagline: "",
    univ_type: "private",
    total_campuses: "",
    about: "",
    year_founded: "",
    total_faculty: "",
    total_students: "",
    total_programs: "",
  });

  const logoInputRef = useRef(null);
  const sectionVideoInputRef = useRef(null);
  const bannerVideoInputRef = useRef(null);
  const [rankings, setRankings] = useState([]);
  const [locations, setLocations] = useState([]);
  const [accreditations, setAccreditations] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (profile) {
      setBasicInfo({
        univ_name: profile.univ_name || "",
        tagline: profile.tagline || "",
        univ_type: profile.univ_type || "private",
        total_campuses: profile.total_campuses || "",
        about: profile.about || "",
        year_founded: profile.year_founded || "",
        total_faculty: profile.total_faculty || "",
        total_students: profile.total_students || "",
        total_programs: profile.total_programs || "",
      });
      // Map 'title' from backend to 'org' for local state/modals if needed
      setRankings(profile.rankings?.map(r => ({ ...r, org: r.title })) || []);
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
    if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
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
    setLogo({ preview: null, file: null });
    if (logoInputRef.current) logoInputRef.current.value = "";
  };

  const handleRemoveSectionVideo = () => {
    setSectionVideo({ preview: null, file: null });
    if (sectionVideoInputRef.current) sectionVideoInputRef.current.value = "";
  };

  const handleRemoveBannerVideo = () => {
    setBannerVideo({ preview: null, file: null });
    if (bannerVideoInputRef.current) bannerVideoInputRef.current.value = "";
  };

  const handleSave = async () => {
    const fd = new FormData();

    // 1. Basic Info - Send all fields as strings (ensure empty strings instead of skipping)
    Object.keys(basicInfo).forEach((key) => {
      fd.append(key, basicInfo[key] !== null && basicInfo[key] !== undefined ? String(basicInfo[key]) : "");
    });

    // 2. Editor Content
    fd.append("what_makes_us_different", editorContent || "");

    // 3. Rankings List - Ensure numeric 'year' and mapping org -> title
    const rankings_data = rankings.map((r) => ({
      id: r.id && r.id < 1000000000000 ? r.id : undefined, // Keep existing IDs, ignore local timestamps
      title: r.org || r.title || "",
      rank: r.rank || "",
      year: parseInt(r.year) || r.year || 0,
    }));
    fd.append("rankings_list", JSON.stringify(rankings_data));

    // 4. Locations List
    const locations_data = locations.map((l) => ({
      id: l.id && l.id < 1000000000000 ? l.id : undefined,
      name: l.name || "",
      address: l.address || "",
    }));
    fd.append("locations_list", JSON.stringify(locations_data));

    // 5. Accreditations List
    const accreditations_data = accreditations.map((a) => ({
      id: a.id && a.id < 1000000000000 ? a.id : undefined,
      name: a.name || "",
      valid_until: a.valid_until || "",
    }));
    fd.append("accreditations_list", JSON.stringify(accreditations_data));

    // 6. Files - Only append if there's a NEW file object selected
    if (logo.file instanceof File) {
      fd.append("logo", logo.file);
    }
    if (sectionVideo.file instanceof File) {
      fd.append("section_video", sectionVideo.file);
    }
    if (bannerVideo.file instanceof File) {
      fd.append("banner_video", bannerVideo.file);
    }

    // Debug: Log EXACTLY what is being sent to identify why the server returns 500
    console.log("--- SUBMITTING PROFILE DATA ---");
    for (const [key, value] of fd.entries()) {
      if (value instanceof File) {
        console.log(`${key}: [File] ${value.name} (${value.size} bytes, ${value.type})`);
      } else {
        console.log(`${key}:`, value);
      }
    }

    try {
      await setupProfile(fd).unwrap();
      toast.success("Profile updated successfully!");

      // Clear all form data after successful update
      setBasicInfo({
        univ_name: "",
        tagline: "",
        univ_type: "private",
        total_campuses: "",
        about: "",
        year_founded: "",
        total_faculty: "",
        total_students: "",
        total_programs: "",
      });
      setRankings([]);
      setLocations([]);
      setAccreditations([]);
      setEditorContent("");
      setLogo({ preview: null, file: null });
      setSectionVideo({ preview: null, file: null });
      setBannerVideo({ preview: null, file: null });

      // Clear file input values
      if (logoInputRef.current) logoInputRef.current.value = "";
      if (sectionVideoInputRef.current) sectionVideoInputRef.current.value = "";
      if (bannerVideoInputRef.current) bannerVideoInputRef.current.value = "";

    } catch (err) {
      console.error("Profile update error detail:", err);
      // Detailed error for 500 parsing error or other server issues
      const errorMessage = err?.data?.message || err?.data?.detail || "Server Error (500). Please check console for payload data.";
      toast.error(errorMessage);
    }
  };

  if (profileLoading) return <div className="p-8">Loading profile...</div>;

  const getFullUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("blob:")) return path;
    return `http://10.10.13.20:8005${path}`;
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
                    src={getFullUrl(logo.preview)}
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
                    src={getFullUrl(sectionVideo.preview)}
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
                    src={getFullUrl(bannerVideo.preview)}
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University Name
              </label>
              <input
                type="text"
                name="univ_name"
                value={basicInfo.univ_name}
                onChange={handleInputChange}
                placeholder="Harvard University"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tagline
              </label>
              <input
                type="text"
                name="tagline"
                value={basicInfo.tagline}
                onChange={handleInputChange}
                placeholder="The Future starts Here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University Type
              </label>
              <select
                name="univ_type"
                value={basicInfo.univ_type}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="private">Private</option>
                <option value="public">Public</option>
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
                placeholder="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                placeholder="2005"
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
                placeholder="65"
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
                placeholder="15,000+"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Programs
              </label>
              <input
                type="number"
                name="total_programs"
                value={basicInfo.total_programs}
                onChange={handleInputChange}
                placeholder="100"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="col-span-1 md:col-span-3">
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
            {accreditations.map((acc, index) => (
              <div
                key={acc.id || index}
                className="flex justify-between items-center p-4 border rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-800">{acc.name}</p>
                  <p className="text-sm text-grey">Valid until {acc.valid_until || "N/A"}</p>
                </div>
                <div>
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
            {rankings.map((rank, index) => (
              <div
                key={rank.id || index}
                className="flex justify-between items-center p-4 border rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-800">{rank.org || rank.title}</p>
                  <p className="text-sm text-gray-600">Rank: {rank.rank} ({rank.year})</p>
                </div>
                <div>
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
            {locations.map((loc, index) => (
              <div
                key={loc.id || index}
                className="flex justify-between items-center p-4 border rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-800">{loc.name}</p>
                  <p className="text-sm text-grey">{loc.address}</p>
                </div>
                <div>
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
