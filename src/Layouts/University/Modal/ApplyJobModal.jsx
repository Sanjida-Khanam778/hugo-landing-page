"use client";

import { useState } from "react";
import { X, Upload, Calendar, FileText } from "lucide-react";
import { toast } from "react-hot-toast";
import { useApplyToJobMutation } from "../../../Api/universityApi";

export default function ApplyJobModal({ job, onClose }) {
    console.log(job)
    const [applyToJob, { isLoading: isSubmitting }] = useApplyToJobMutation();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        resume: null,
        coverLetter: null,
        applicationDate: new Date().toISOString().split("T")[0],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, [field]: file }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.resume) {
            toast.error("Please upload your resume");
            return;
        }

        const data = new FormData();
        data.append("job", job.id);
        data.append("first_name", formData.firstName);
        data.append("last_name", formData.lastName);
        data.append("email", formData.email);
        data.append("phone_number", formData.phone);
        if (formData.resume) data.append("resume", formData.resume);
        if (formData.coverLetter) data.append("cover_letter", formData.coverLetter);

        try {
            const res = await applyToJob(data).unwrap();
            toast.success(res.message || "Application submitted successfully!", {
                position: "bottom-center",
            });
            onClose();
        } catch (err) {
            console.error("Application error:", err);
            const msg = err?.data?.message || err?.data?.error || "Failed to submit application.";
                        onClose();

            toast.error(msg, {
                position: "bottom-center",
            });
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100000] p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center z-10">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Apply for Position</h2>
                        <p className="text-sm text-gray-500">{job.title} • {job.company}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Job Info (ReadOnly) */}
                    <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Department</label>
                            <p className="text-sm font-medium text-gray-900">{job?.category || "N/A"}</p>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Job Type</label>
                            <p className="text-sm font-medium text-gray-900">{job?.job_type}</p>
                        </div>
                    </div>

                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    {/* Application Date (ReadOnly) */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Application Date</label>
                        <div className="relative">
                            <input
                                type="date"
                                disabled
                                value={formData.applicationDate}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                            />
                            <Calendar className="absolute right-3 top-2.5 text-gray-400" size={18} />
                        </div>
                    </div>

                    {/* Resume Upload */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Resume / CV</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:border-blue-500 hove:bg-blue-50 transition-all cursor-pointer relative">
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                required
                                onChange={(e) => handleFileChange(e, "resume")}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                            <Upload className="text-gray-400 mb-2" size={32} />
                            <p className="text-sm text-gray-600">
                                {formData.resume ? (
                                    <span className="text-blue font-medium">{formData.resume.name}</span>
                                ) : (
                                    "Click to upload or drag and drop resume"
                                )}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX up to 10MB</p>
                        </div>
                    </div>

                    {/* Cover Letter Upload */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Cover Letter (Optional)</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:border-blue-500 hove:bg-blue-50 transition-all cursor-pointer relative">
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => handleFileChange(e, "coverLetter")}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                            <FileText className="text-gray-400 mb-2" size={32} />
                            <p className="text-sm text-gray-600">
                                {formData.coverLetter ? (
                                    <span className="text-blue font-medium">{formData.coverLetter.name}</span>
                                ) : (
                                    "Click to upload cover letter"
                                )}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX up to 10MB</p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 justify-end pt-4 border-t border-gray-100">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 border border-gray-300 rounded-lg font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-8 py-2 bg-blue text-white rounded-lg font-bold shadow-lg hover:bg-blue-600 transition-all disabled:opacity-50"
                        >
                            {isSubmitting ? "Submitting..." : "Submit Application"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
