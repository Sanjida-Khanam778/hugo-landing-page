import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useGetPublicUniversityGalleryQuery } from "../../Api/universityApi";
import { X, Play, FileText } from "lucide-react";

export default function Gallery({ data: universityData }) {
  const { data: galleryItems, isLoading, error } = useGetPublicUniversityGalleryQuery(universityData?.id, {
    skip: !universityData?.id
  });

  const [selectedMedia, setSelectedMedia] = useState(null);

  const getFullUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("blob:")) return path;
    return `http://10.10.13.20:8005${path}`;
  };

  if (isLoading) return <div className="p-10 text-center">Loading gallery...</div>;
  if (error) return <div className="p-10 text-center text-red-500">Error loading gallery.</div>;
  if (!galleryItems || galleryItems.length === 0) return <div className="p-10 text-center text-gray-500 bg-white rounded-lg shadow-sm">No media available in the gallery.</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Gallery Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Media Gallery</h2>
        <p className="text-sm text-gray-500 mt-1">Explore campus life through photos and videos</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="bg-base rounded-xl overflow-hidden shadow-sm group cursor-pointer relative border border-gray-100"
            onClick={() => setSelectedMedia(item)}
          >
            <div className="aspect-video relative overflow-hidden bg-gray-200">
              {item.media_type === "video" ? (
                <div className="relative h-full w-full">
                  <video
                    className="w-full h-full object-cover"
                    src={getFullUrl(item.file)}
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="text-blue fill-blue translate-x-0.5" size={20} />
                    </div>
                  </div>
                </div>
              ) : item.media_type === "document" ? (
                <div className="h-full w-full flex items-center justify-center bg-blue-50">
                  <FileText size={48} className="text-blue/40" />
                </div>
              ) : (
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={getFullUrl(item.file)}
                  alt={item.title}
                />
              )}

              {/* Media Type Badge */}
              <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] text-white font-bold uppercase tracking-wider">
                {item.media_type}
              </div>
            </div>

            <div className="p-4 bg-white border-t">
              <p className="font-bold text-gray-800 line-clamp-1">{item.title}</p>
              <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">
                Added {new Date(item.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedMedia && createPortal(
        <div
          className="fixed inset-0 z-[999999999] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[1000000000]"
            onClick={() => setSelectedMedia(null)}
          >
            <X size={24} />
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.media_type === "video" ? (
              <video
                className="max-h-[80vh] w-auto rounded shadow-2xl"
                controls
                autoPlay
                src={getFullUrl(selectedMedia.file)}
              />
            ) : selectedMedia.media_type === "document" ? (
              <div className="bg-white p-8 rounded-lg text-center max-w-md">
                <FileText size={64} className="text-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-dark">{selectedMedia.title}</h3>
                <p className="text-gray-500 mb-6 font-medium">This is a document file. You can view or download it using the link below.</p>
                <a
                  href={getFullUrl(selectedMedia.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-blue text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  View Document
                </a>
              </div>
            ) : (
              <img
                className="max-h-[80vh] w-auto rounded shadow-2xl object-contain"
                src={getFullUrl(selectedMedia.file)}
                alt={selectedMedia.title}
              />
            )}

            <div className="text-center">
              <h3 className="text-white text-xl font-bold">{selectedMedia.title}</h3>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
