import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function ApplyModal({ open, onClose, uniName = "University" }) {
  const [step, setStep] = useState("form"); // form | summary | chat
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    placeOfBirth: "",
    program: "",
    campus: "",
    address: "",
    phone: "",     
    email: "",
    nationality: "",
    previousStudies: "",
    currentSituation: "",
    specialNeeds: "",
    letterOfInterest: "",
    dataProcessingAccepted: false,
  });

  const [idFront, setIdFront] = useState(null);
  const [idBack, setIdBack] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [previews, setPreviews] = useState({
    front: null,
    back: null,
    docs: [],
  });

  useEffect(() => {
    if (!open) {
      // reset state when modal is closed
      setStep("form");
      setForm({
        fullName: "",
        dob: "",
        placeOfBirth: "",
        program: "",
        campus: "",
        address: "",
        phone: "",
        email: "",
        nationality: "",
        previousStudies: "",
        currentSituation: "",
        specialNeeds: "",
        letterOfInterest: "",
        dataProcessingAccepted: false,
      });
      setIdFront(null);
      setIdBack(null);
      setDocuments([]);
      setPreviews({ front: null, back: null, docs: [] });
    }
  }, [open]);

  if (!open) return null;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  }

  function handleFileChange(e, which) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (which === "front") {
      setIdFront(file);
      setPreviews((p) => ({ ...p, front: url }));
    } else if (which === "back") {
      setIdBack(file);
      setPreviews((p) => ({ ...p, back: url }));
    }
  }

  function handleDocsChange(e) {
    const files = Array.from(e.target.files || []);
    setDocuments(files);
    const docPreviews = files.map((f) => ({ name: f.name }));
    setPreviews((p) => ({ ...p, docs: docPreviews }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Basic validation (require name and email)
    if (!form.fullName || !form.email) {
      alert("Please provide at least your full name and email.");
      return;
    }

    // In a real app, send to API here. For now, move to summary step.
    setStep("summary");
  }

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative w-[95%] md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-auto bg-white rounded-lg shadow-lg p-6 z-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Apply to {uniName}</h2>
          <button
            aria-label="Close"
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-100"
          >
            <X />
          </button>
        </div>

        {step === "form" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Full name</label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Date of birth
                </label>
                <input
                  name="dob"
                  type="date"
                  value={form.dob}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Place of birth
                </label>
                <input
                  name="placeOfBirth"
                  value={form.placeOfBirth}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Nationality</label>
                <input
                  name="nationality"
                  value={form.nationality}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Desired program of study
                </label>
                <input
                  name="program"
                  value={form.program}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Campus</label>
                <input
                  name="campus"
                  value={form.campus}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium">Address</label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium">
                  Previous studies
                </label>
                <textarea
                  name="previousStudies"
                  value={form.previousStudies}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                  rows={3}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium">
                  Current situation
                </label>
                <textarea
                  name="currentSituation"
                  value={form.currentSituation}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                  rows={2}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium">
                  Special needs (if any)
                </label>
                <textarea
                  name="specialNeeds"
                  value={form.specialNeeds}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                  rows={2}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  ID photo (front)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "front")}
                  className="mt-1 block w-full"
                />
                {previews.front && (
                  <img
                    src={previews.front}
                    alt="id-front"
                    className="mt-2 h-24 object-contain"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium">
                  ID photo (back)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "back")}
                  className="mt-1 block w-full"
                />
                {previews.back && (
                  <img
                    src={previews.back}
                    alt="id-back"
                    className="mt-2 h-24 object-contain"
                  />
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium">
                  Upload supporting documents (transcripts, health insurance,
                  birth certificate, etc.)
                </label>
                <input
                  type="file"
                  multiple
                  onChange={handleDocsChange}
                  className="mt-1 block w-full"
                />
                {previews.docs.length > 0 && (
                  <ul className="mt-2 list-disc list-inside text-sm">
                    {previews.docs.map((d, i) => (
                      <li key={i}>{d.name}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium">
                  Letter of interest (optional)
                </label>
                <textarea
                  name="letterOfInterest"
                  value={form.letterOfInterest}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-3 py-2"
                  rows={4}
                />
              </div>

              <div className="md:col-span-2 flex items-center space-x-2">
                <input
                  id="dataProcessing"
                  name="dataProcessingAccepted"
                  type="checkbox"
                  checked={form.dataProcessingAccepted}
                  onChange={handleChange}
                />
                <label htmlFor="dataProcessing" className="text-sm">
                  I authorize processing of my data for admissions purposes.
                </label>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded"
              >
                Submit
              </button>
            </div>
          </form>
        )}

        {step === "summary" && (
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Enrollment process</h3>
            <p className="text-sm">
              Thank you for your application. Below is an overview of the next
              steps (example):
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Initial application review within 7–14 business days.</li>
              <li>
                Possible interview (phone/video) — you will be notified by email
                if selected.
              </li>
              <li>
                Acceptance notification timeframe: 2–6 weeks depending on
                program.
              </li>
              <li>
                Fees & pricing will be provided in your acceptance letter;
                please check program page for tuition estimates.
              </li>
            </ul>

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setStep("form")}
                className="px-4 py-2 border rounded"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep("chat")}
                className="px-4 py-2 bg-primary text-white rounded"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === "chat" && (
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-semibold">Need more help?</h3>
            <p className="text-sm">
              If you have further questions, you can speak directly with the
              Student Communications Manager.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Link
                to="/message"
                onClick={onClose}
                className="px-4 py-2 bg-primary text-white rounded"
              >
                Speak with {uniName}, Student Communications Manager
              </Link>
              <button onClick={onClose} className="px-4 py-2 border rounded">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
