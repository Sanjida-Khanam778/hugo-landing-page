"use client";

import { useState } from "react";
import UploadModal from "../Modal/UploadModal";
import ViewMediaModal from "../Modal/ViewMediaModal";
import {
  Upload,
  Layers,
  Image,
  Video,
  FileText,
  Eye,
  Trash2,
  Folder,
} from "lucide-react";

export default function UniGallery() {
  const [activeTab, setActiveTab] = useState("all");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [viewingMedia, setViewingMedia] = useState(null);

  const [mediaFiles, setMediaFiles] = useState([
    {
      id: 1,
      name: "Campus Tour Video",
      type: "video",
      date: "2025-09-15",
      size: "245 MB",
      url: "/modern-video-player.png",
    },
    {
      id: 2,
      name: "University Brochure 2025",
      type: "document",
      date: "2025-09-15",
      size: "3.2 MB",
      url: "/pdf-document.png",
    },
    {
      id: 3,
      name: "Campus New Building",
      type: "image",
      date: "2025-09-15",
      size: "5.6 MB",
      url: "/modern-building-campus.jpg",
    },
    {
      id: 4,
      name: "Student Life Collage",
      type: "image",
      date: "2025-09-14",
      size: "8.3 MB",
      url: "/diverse-students-campus.png",
    },
    {
      id: 5,
      name: "Research Highlights PDF",
      type: "document",
      date: "2025-09-14",
      size: "2.1 MB",
      url: "/research-paper-stack.png",
    },
    {
      id: 6,
      name: "Graduation Ceremony",
      type: "video",
      date: "2025-09-13",
      size: "512 MB",
      url: "/graduation-ceremony.png",
    },
    {
      id: 7,
      name: "Library Tour",
      type: "image",
      date: "2025-09-13",
      size: "4.2 MB",
      url: "/library-interior.png",
    },
    {
      id: 8,
      name: "Academic Calendar",
      type: "document",
      date: "2025-09-12",
      size: "1.5 MB",
      url: "/calendar-schedule.png",
    },
  ]);

  const getFilteredMedia = () => {
    if (activeTab === "all") return mediaFiles;
    if (activeTab === "images")
      return mediaFiles.filter((m) => m.type === "image");
    if (activeTab === "videos")
      return mediaFiles.filter((m) => m.type === "video");
    if (activeTab === "documents")
      return mediaFiles.filter((m) => m.type === "document");
    return mediaFiles;
  };

  const handleUpload = (newFiles) => {
    const uploadedMedia = newFiles.map((file) => ({
      id: Math.max(...mediaFiles.map((m) => m.id), 0) + 1,
      name: file.name,
      type: file.type,
      date: new Date().toISOString().split("T")[0],
      size: file.size,
      url: file.url,
    }));
    setMediaFiles([...uploadedMedia, ...mediaFiles]);
    setShowUploadModal(false);
  };

  const handleDeleteMedia = (id) => {
    setMediaFiles(mediaFiles.filter((m) => m.id !== id));
  };

  const filteredMedia = getFilteredMedia();

  const getIconForType = (type) => {
    switch (type) {
      case "image":
        return <Image className="w-5 h-5" />;
      case "video":
        return <Video className="w-5 h-5" />;
      case "document":
        return <FileText className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
        <button
          onClick={() => setShowUploadModal(true)}
          className="bg-blue text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Upload size={18} strokeWidth={2.5} /> Upload Files
        </button>
      </div>

      {/* Search and View Options */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search media..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 overflow-x-auto">
        {["all", "images", "videos", "documents", "new-folder"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 transition-colors whitespace-nowrap ${
              activeTab === tab
                ? "text-blue bg-[#DBEAFE] rounded-lg"
                : ""
            }`}
          >
            {tab === "all" && (
              <span className="inline-flex items-center gap-2">
                <Folder className="w-4 h-4" />
                All Media
              </span>
            )}
            {tab === "images" && (
              <span className="inline-flex items-center gap-2">
                <Image className="w-4 h-4" />
                Images
              </span>
            )}
            {tab === "videos" && (
              <span className="inline-flex items-center gap-2">
                <Video className="w-4 h-4" />
                Videos
              </span>
            )}
            {tab === "documents" && (
              <span className="inline-flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Documents
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      {activeTab !== "new-folder" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMedia.map((media) => (
            <div
              key={media.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Thumbnail */}
              <div className="relative bg-gray-200 aspect-square overflow-hidden">
                <img
                  src={media.url || "/placeholder.svg"}
                  alt={media.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay with actions on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center gap-3">
                  <button
                    onClick={() => setViewingMedia(media)}
                    className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-all"
                    title="View"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteMedia(media.id)}
                    className="opacity-0 group-hover:opacity-100 bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-all"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* File Info */}
              <div className="p-4">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-xl">{getIconForType(media.type)}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">
                      {media.name}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Uploaded on {media.date}
                </p>
                <p className="text-xs text-gray-500">{media.size}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <UploadModal
          onUpload={handleUpload}
          onClose={() => setShowUploadModal(false)}
        />
      )}

      {/* View Media Modal */}
      {viewingMedia && (
        <ViewMediaModal
          media={viewingMedia}
          onClose={() => setViewingMedia(null)}
        />
      )}
    </div>
  );
}
