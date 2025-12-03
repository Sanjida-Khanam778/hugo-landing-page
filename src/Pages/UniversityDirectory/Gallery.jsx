import React from "react";
import gallery from "../../assets/images/gallery.png";
export default function Gallery() {
  return (
    <div className="bg-white p-6 rounded-lg">
      {/* Gallery Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Media Gallery</h2>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Gallery Item 1 */}
        <div className="bg-base rounded-lg overflow-hidden shadow-sm">
          <img className="w-full" src={gallery} alt="" />
          <div className="p-4 ">
            <p className=" font-medium text-gray-800">Harvard Yard</p>
          </div>
        </div>

        {/* Gallery Item 2 */}
        <div className="bg-base rounded-lg overflow-hidden shadow-sm">
          <img className="w-full" src={gallery} alt="" />
          <div className="p-4 ">
            <p className=" font-medium text-gray-800">
              Harvard Business School
            </p>
          </div>
        </div>

        {/* Gallery Item 3 */}
        <div className="bg-base rounded-lg overflow-hidden shadow-sm">
          <img className="w-full" src={gallery} alt="" />
          <div className="p-4 ">
            <p className=" font-medium text-gray-800">Harvard Library</p>
          </div>
        </div>

        {/* Gallery Item 4 */}
        <div className="bg-base rounded-lg overflow-hidden shadow-sm">
          <img className="w-full" src={gallery} alt="" />
          <div className="p-4 ">
            <p className=" font-medium text-gray-800">Science Center</p>
          </div>
        </div>
      </div>
    </div>
  );
}
