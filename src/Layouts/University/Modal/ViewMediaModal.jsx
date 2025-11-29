"use client"

export default function ViewMediaModal({ media, onClose }) {
  const getMediaPreview = () => {
    if (media.type === "image") {
      return (
        <img
          src={media.url || "/placeholder.svg"}
          alt={media.name}
          className="max-w-full max-h-[60vh] object-contain"
        />
      )
    } else if (media.type === "video") {
      return (
        <video controls className="max-w-full max-h-[60vh]">
          <source src={media.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
    } else {
      return (
        <div className="bg-gray-100 p-12 rounded-lg text-center">
          <div className="text-6xl mb-4">📄</div>
          <p className="text-gray-600">{media.name}</p>
        </div>
      )
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">{media.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
            ✕
          </button>
        </div>

        <div className="p-6 flex justify-center">{getMediaPreview()}</div>

        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-600 text-xs">Type</p>
              <p className="font-medium text-gray-900">{media.type.toUpperCase()}</p>
            </div>
            <div>
              <p className="text-gray-600 text-xs">Size</p>
              <p className="font-medium text-gray-900">{media.size}</p>
            </div>
            <div>
              <p className="text-gray-600 text-xs">Uploaded</p>
              <p className="font-medium text-gray-900">{media.date}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
          <button onClick={onClose} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
