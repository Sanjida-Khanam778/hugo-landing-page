import React, { useState, useRef } from "react";
import comment from "../../assets/images/comment.png";
import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";
import { useAddTestimonialMutation, useGetTestimonialsByUniIdQuery } from "../../Api/universityApi";
import { toast } from "react-hot-toast";

export default function TestimonialTab({ data: universityData }) {
  const [addTestimonial, { isLoading: isSubmitting }] = useAddTestimonialMutation();
  const { data: testimonialsData, isLoading: isFetching } = useGetTestimonialsByUniIdQuery(universityData?.id, {
    skip: !universityData?.id
  });

  const [sortOrder, setSortOrder] = useState("newest"); // newest or oldest

  const [newText, setNewText] = useState("");
  const [studentTitle, setStudentTitle] = useState("");
  const [newPhoto, setNewPhoto] = useState(null); // review image
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();
  const [lightbox, setLightbox] = useState(null);

  const getFullUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("blob:")) return path;
    return `http://10.10.13.20:8005${path}`;
  };

  function handlePhotoChange(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    setNewPhoto(f);
    setPreview(URL.createObjectURL(f));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!newText) {
      toast.error("Please enter your testimonial.");
      return;
    }
    if (!studentTitle) {
      toast.error("Please enter your title (e.g., Computer Science, Class of 2024).");
      return;
    }

    if (!universityData?.id) {
      toast.error("University information is missing. Please refresh and try again.");
      return;
    }

    const formData = new FormData();
    formData.append("university", universityData.id);
    formData.append("student_title", studentTitle);
    formData.append("content", newText);
    if (newPhoto) {
      formData.append("photo", newPhoto);
    }

    try {
      const res = await addTestimonial(formData).unwrap();
      console.log("Success:", res);
      toast.success(res?.message || "Submitted and awaiting approval!", {
        position: "bottom-center",
      });

      // Reset form
      setNewText("");
      setStudentTitle("");
      setNewPhoto(null);
      setPreview(null);
      if (fileRef.current) fileRef.current.value = null;
    } catch (err) {
      console.error("Submission error:", err);
      const errorMessage = err?.data?.non_field_errors?.[0] || err?.data?.error || err?.error || "Failed to submit testimonial.";
      toast.error(errorMessage, {
        position: "bottom-center",
      });

      setNewText("");
      setStudentTitle("");
      setNewPhoto(null);
      setPreview(null);
    }
  }

  const testimonials = testimonialsData || [];

  const sorted = [...testimonials].sort((a, b) => {
    if (sortOrder === "newest") return new Date(b.created_at) - new Date(a.created_at);
    return new Date(a.created_at) - new Date(b.created_at);
  });

  return (
    <div>
      {/* Testimonials Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
          <h2 className="text-2xl font-bold mb-2 md:mb-0">Student Testimonials</h2>
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-600">Sort:</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>
        </div>

        {isFetching ? (
          <div className="py-10 text-center text-gray-500">Loading testimonials...</div>
        ) : sorted.length === 0 ? (
          <div className="py-10 text-center text-gray-500">No testimonials found.</div>
        ) : (
          <div className="space-y-6">
            {sorted.map((t) => (
              <div key={t.id} className="bg-base p-4 rounded-lg">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div>
                    {/* author avatar */}
                    <img
                      className="w-12 h-12 object-cover rounded-full"
                      src={getFullUrl(t.profile_picture) || comment}
                      alt="author"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row gap-4">
                      <p className="text-gray-700 text-base">{t.content}</p>
                      {t.photo && (
                        <button
                          type="button"
                          onClick={() => setLightbox(getFullUrl(t.photo))}
                          className="ml-2 flex-shrink-0"
                        >
                          <img
                            src={getFullUrl(t.photo)}
                            alt="review"
                            className="w-20 h-20 object-cover rounded"
                          />
                        </button>
                      )}
                    </div>
                    <div className="mt-3 flex flex-col md:flex-row items-start md:items-center gap-3">
                      <div>
                        <p className="font-semibold text-sm">{t.student_name}</p>
                        <p className="text-sm text-gray-600">{t.student_title}</p>
                      </div>
                      <div className="md:ml-auto text-sm text-gray-500">
                        {new Date(t.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Testimonial Button */}
      <div className="flex md:justify-end my-4">
        <div className="text-primary text-xl font-medium transition-colors">
          Add your Testimonials
        </div>
      </div>

      {/* Add Testimonial Form */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Add a Testimonial</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Student Title (e.g. Major, Class of Year)
            </label>
            <input
              type="text"
              placeholder="Computer Science, Class of 2024"
              value={studentTitle}
              onChange={(e) => setStudentTitle(e.target.value)}
              className="w-full px-4 py-2 bg-base rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your testimonial
            </label>
            <textarea
              placeholder="This university has changed my life!..."
              rows="5"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="w-full px-4 py-3 bg-base rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload photo (optional)
            </label>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full"
            />
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="mt-2 h-24 object-contain"
              />
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue text-white px-8 py-2.5 rounded-lg text-sm transition-colors font-bold disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Testimonial"}
            </button>
          </div>
        </form>
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={lightbox}
            alt="large review"
            className="max-h-[85vh] max-w-[90vw] rounded"
          />
        </div>
      )}
    </div>
  );
}
