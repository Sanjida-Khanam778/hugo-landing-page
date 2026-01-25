import React, { useState, useEffect } from "react";
import { X, Upload, Eye, EyeOff } from "lucide-react";
import { toast } from "react-hot-toast";
import { useProfileUpdateMutation } from "../../../Api/authapi";

export default function ProfileEditModal({ profile, onClose }) {
    const [updateProfile, { isLoading }] = useProfileUpdateMutation();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        full_name: profile?.full_name || "",
        about: profile?.about || "",
        password: "",
    });
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(profile?.image || null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("full_name", formData.full_name);
        data.append("about", formData.about);
        if (formData.password) {
            data.append("password", formData.password);
        }
        if (imageFile) {
            data.append("image", imageFile);
        }

        try {
            await updateProfile(data).unwrap();
            toast.success("Profile updated successfully!");
            onClose();
        } catch (err) {
            console.error(err);
            toast.error(err.data?.error?.[0] || "Failed to update profile");
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <h2 className="text-xl font-bold">Edit Profile</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Image Upload */}
                    <div className="flex flex-col items-center gap-4 mb-4">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue bg-gray-100 flex items-center justify-center relative group">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-2xl font-bold text-blue">
                                    {formData.full_name?.charAt(0) || "U"}
                                </span>
                            )}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Upload className="text-white" size={24} />
                                <input
                                    type="file"
                                    onChange={handleImageChange}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    accept="image/*"
                                />
                            </div>
                        </div>
                        <p className="text-xs text-gray-500">Click to upload new image</p>
                    </div>

                    {/* Email (Readonly) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address (Cannot be changed)
                        </label>
                        <input
                            type="email"
                            value={profile?.email || ""}
                            readOnly
                            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-500 cursor-not-allowed"
                        />
                    </div>

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue outline-none"
                        />
                    </div>


                    {/* Actions */}
                    <div className="flex gap-4 pt-4 border-t">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-2 border border-gray-300 rounded-lg font-medium text-gray-600 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-1 py-2 bg-blue text-white rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50"
                        >
                            {isLoading ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
