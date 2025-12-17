import React, { useState, useRef } from "react";
import comment from "../../assets/images/comment.png";
import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";

export default function TestimonialTab() {
  const [sortOrder, setSortOrder] = useState("newest"); // newest or oldest
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      text: "My time at Harvard Business School transformed my career trajectory and provided me with an incredible network of peers and mentors.",
      author: "Sarah Johnson",
      meta: "MBA, Class of 2022",
      date: "2022-06-15",
      avatar: profile2,
      reviewImage: null,
    },
    {
      id: 2,
      text: "The research opportunities and faculty mentorship at Harvard prepared me exceptionally well for my career in AI research.",
      author: "David Chen",
      meta: "Computer Science, Class of 2021",
      date: "2021-09-10",
      avatar: profile1,
      reviewImage: null,
    },
  ]);

  // form state
  // Simulated current user/profile info - replace with real auth data when available
  const currentUser = {
    name: "You",
    meta: "Prospective Student",
    avatar: profile1,
  };

  const [newText, setNewText] = useState("");
  const [newPhoto, setNewPhoto] = useState(null); // review image
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();
  const [lightbox, setLightbox] = useState(null);

  function handlePhotoChange(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    setNewPhoto(f);
    setPreview(URL.createObjectURL(f));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newText) {
      alert("Please enter your testimonial.");
      return;
    }
    const id = Date.now();
    const entry = {
      id,
      text: newText,
      author: currentUser.name,
      meta: currentUser.meta,
      date: new Date().toISOString().slice(0, 10), // default to today
      avatar: currentUser.avatar,
      reviewImage: preview || null,
    };
    setTestimonials((t) => [entry, ...t]);
    // reset form
    setNewText("");
    setNewPhoto(null);
    setPreview(null);
    if (fileRef.current) fileRef.current.value = null;
  }

  const sorted = [...testimonials].sort((a, b) => {
    if (sortOrder === "newest") return new Date(b.date) - new Date(a.date);
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <div>
      {/* Testimonials Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Student Testimonials</h2>
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

        <div className="space-y-6">
          {sorted.map((t) => (
            <div key={t.id} className="bg-base p-4 rounded-lg">
              <div className="flex gap-4 mb-4">
                <div>
                  {/* author avatar */}
                  <img
                    className="w-12 h-12 object-cover rounded-full"
                    src={t.avatar || comment}
                    alt="author"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex gap-4">
                    <p className="text-gray-700 text-base">{t.text}</p>
                    {t.reviewImage && (
                      <button
                        type="button"
                        onClick={() => setLightbox(t.reviewImage)}
                        className="ml-2 flex-shrink-0"
                      >
                        <img
                          src={t.reviewImage}
                          alt="review"
                          className="w-20 h-20 object-cover rounded"
                        />
                      </button>
                    )}
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <div>
                      <p className="font-semibold text-sm">{t.author}</p>
                      <p className="text-sm text-gray-600">{t.meta}</p>
                    </div>
                    <div className="ml-auto text-sm text-gray-500">
                      {new Date(t.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Testimonial Button */}
      <div className="flex justify-end my-4">
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
              Your testimonial
            </label>
            <textarea
              placeholder="My time at ..."
              rows="5"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="w-full px-4 py-3 bg-base rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
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
              className="bg-blue text-white px-6 py-2.5 rounded-lg text-sm transition-colors"
            >
              Submit
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
