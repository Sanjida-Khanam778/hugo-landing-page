import React from "react";

export default function Gallery() {
  return (
    <div>
      {/* Gallery Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Media Gallery</h2>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Gallery Item 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="relative aspect-video bg-gradient-to-br from-orange-900 to-orange-600">
            {/* Image Placeholder - Replace with actual image */}
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <p className="text-sm">Gallery Image Placeholder</p>
            </div>
          </div>
          <div className="p-4 bg-gray-50">
            <p className="text-sm font-medium text-gray-800">Harvard Yard</p>
          </div>
        </div>

        {/* Gallery Item 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="relative aspect-video bg-gradient-to-br from-orange-900 to-orange-600">
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <p className="text-sm">Gallery Image Placeholder</p>
            </div>
          </div>
          <div className="p-4 bg-gray-50">
            <p className="text-sm font-medium text-gray-800">
              Harvard Business School
            </p>
          </div>
        </div>

        {/* Gallery Item 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="relative aspect-video bg-gradient-to-br from-orange-900 to-orange-600">
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <p className="text-sm">Gallery Image Placeholder</p>
            </div>
          </div>
          <div className="p-4 bg-gray-50">
            <p className="text-sm font-medium text-gray-800">Harvard Library</p>
          </div>
        </div>

        {/* Gallery Item 4 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="relative aspect-video bg-gradient-to-br from-orange-900 to-orange-600">
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <p className="text-sm">Gallery Image Placeholder</p>
            </div>
          </div>
          <div className="p-4 bg-gray-50">
            <p className="text-sm font-medium text-gray-800">Science Center</p>
          </div>
        </div>
      </div>
    </div>
  );
}
