"use client"

import { useRef, useState } from "react"

export default function UploadModal({ onUpload, onClose }) {
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef(null)
  const [selectedFiles, setSelectedFiles] = useState([])

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files)
    }
  }

  const handleFiles = (files) => {
    const newFiles = Array.from(files).map((file) => ({
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      type: file.type.startsWith("image/") ? "image" : file.type.startsWith("video/") ? "video" : "document",
      url: URL.createObjectURL(file),
    }))
    setSelectedFiles([...selectedFiles, ...newFiles])
  }

  const handleRemoveFile = (index) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index))
  }

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      onUpload(selectedFiles)
      setSelectedFiles([])
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white">
          <h2 className="text-xl font-bold text-gray-900">Upload Files</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
            ✕
          </button>
        </div>

        <div className="p-6">
          {/* Drop Zone */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
            className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
              dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <div className="text-4xl mb-3">📁</div>
            <p className="font-medium text-gray-900 mb-1">Drag and drop your files here</p>
            <p className="text-sm text-gray-500">or click to browse (Images, Videos, Documents)</p>
            <input
              ref={inputRef}
              type="file"
              multiple
              onChange={handleChange}
              className="hidden"
              accept="image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
            />
          </div>

          {/* Selected Files */}
          {selectedFiles.length > 0 && (
            <div className="mt-6">
              <h3 className="font-medium text-gray-900 mb-3">Selected Files ({selectedFiles.length})</h3>
              <div className="space-y-2">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="text-xl flex-shrink-0">
                        {file.type === "image" ? "🖼️" : file.type === "video" ? "🎥" : "📄"}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.size}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFile(index)}
                      className="ml-2 text-gray-500 hover:text-red-600 flex-shrink-0"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 p-6 border-t border-gray-200 sticky bottom-0 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={selectedFiles.length === 0}
            className="px-4 py-2 bg-blue text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Upload {selectedFiles.length > 0 ? `(${selectedFiles.length})` : ""}
          </button>
        </div>
      </div>
    </div>
  )
}
