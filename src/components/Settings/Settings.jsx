"use client";

import { useState } from "react";

export default function Settings() {
  // Mock user role - in real app, this would come from auth context
  const isAdmin = true;

  const [activeTab, setActiveTab] = useState("general");
  // Start editing mode automatically for admins so fields are editable
  const [isEditing, setIsEditing] = useState(isAdmin);

  const [generalSettings, setGeneralSettings] = useState({
    platformName: "UniConnect",
    description: "A platform connecting students with universities worldwide.",
    briefDescription:
      "A platform connecting students with universities worldwide.",
    contactEmail: "support@uniconnect.com",
    welcomeEmail: true,
    applicationStatusNotification: true,
  });

  const [tempSettings, setTempSettings] = useState(generalSettings);

  const [privacyPolicy, setPrivacyPolicy] = useState(
    `Your privacy is important to us. It is Brainstorming's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.

We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.

We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.`
  );

  const [termsConditions, setTermsConditions] = useState(
    `Clause 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet, sed in viverra pretium tellus neque. Ullamcorper suspendisse aenean leo phaatra in temperat. Amet quam placerat sem.

Clause 2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet, sed in viverra pretium tellus neque. Ullamcorper suspendisse aenean leo phaatra in temperat. Amet quam placerat sem.

Clause 3
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet, sed in viverra pretium tellus neque. Ullamcorper suspendisse aenean leo phaatra in temperat. Amet quam placerat sem.`
  );

  const [tempPrivacyPolicy, setTempPrivacyPolicy] = useState(privacyPolicy);
  const [tempTermsConditions, setTempTermsConditions] =
    useState(termsConditions);

  const handleGeneralChange = (field, value) => {
    setTempSettings({
      ...tempSettings,
      [field]: value,
    });
  };

  const handleSaveGeneral = () => {
    setGeneralSettings(tempSettings);
    setIsEditing(false);
  };

  const handleCancelGeneral = () => {
    setTempSettings(generalSettings);
    setIsEditing(false);
  };

  const handleSavePrivacy = () => {
    setPrivacyPolicy(tempPrivacyPolicy);
    setIsEditing(false);
  };

  const handleCancelPrivacy = () => {
    setTempPrivacyPolicy(privacyPolicy);
    setIsEditing(false);
  };

  const handleSaveTerms = () => {
    setTermsConditions(tempTermsConditions);
    setIsEditing(false);
  };

  const handleCancelTerms = () => {
    setTempTermsConditions(termsConditions);
    setIsEditing(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">System Settings</h1>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-8">
        <button
          onClick={() => {
            setActiveTab("general");
            setIsEditing(false);
          }}
          className={`pb-3 px-1 font-medium text-sm border-b-2 transition ${
            activeTab === "general"
              ? "border-blue text-blue"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          General
        </button>
        <button
          onClick={() => {
            setActiveTab("terms");
            setIsEditing(false);
          }}
          className={`pb-3 px-1 font-medium text-sm border-b-2 transition ${
            activeTab === "terms"
              ? "border-blue text-blue"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Terms & Conditions
        </button>
        <button
          onClick={() => {
            setActiveTab("privacy");
            setIsEditing(false);
          }}
          className={`pb-3 px-1 font-medium text-sm border-b-2 transition ${
            activeTab === "privacy"
              ? "border-blue text-blue"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Privacy Policy
        </button>
      </div>

      {/* General Tab */}
      {activeTab === "general" && (
        <div className="bg-white rounded-lg p-8">
          <div className="max-w-2xl">
            {/* Platform Information Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Platform Information
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Basic information about your platform.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Platform Name
                  </label>
                  <input
                    type="text"
                    disabled={!isEditing || !isAdmin}
                    value={
                      isEditing
                        ? tempSettings.platformName
                        : generalSettings.platformName
                    }
                    onChange={(e) =>
                      handleGeneralChange("platformName", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    disabled={!isEditing || !isAdmin}
                    value={
                      isEditing
                        ? tempSettings.description
                        : generalSettings.description
                    }
                    onChange={(e) =>
                      handleGeneralChange("description", e.target.value)
                    }
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brief description of your platform for SEO and social
                    sharing.
                  </label>
                  <textarea
                    disabled={!isEditing || !isAdmin}
                    value={
                      isEditing
                        ? tempSettings.briefDescription
                        : generalSettings.briefDescription
                    }
                    onChange={(e) =>
                      handleGeneralChange("briefDescription", e.target.value)
                    }
                    rows="2"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    disabled={!isEditing || !isAdmin}
                    value={
                      isEditing
                        ? tempSettings.contactEmail
                        : generalSettings.contactEmail
                    }
                    onChange={(e) =>
                      handleGeneralChange("contactEmail", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-600 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Notifications Section */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Notifications
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Configure email notifications sent to users.
              </p>

              <div className="space-y-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    disabled={!isEditing || !isAdmin}
                    checked={
                      isEditing
                        ? tempSettings.welcomeEmail
                        : generalSettings.welcomeEmail
                    }
                    onChange={(e) =>
                      handleGeneralChange("welcomeEmail", e.target.checked)
                    }
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 disabled:cursor-not-allowed"
                  />
                  <span className="ml-3 text-sm font-medium text-gray-700">
                    Send welcome email to new users
                  </span>
                </label>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    disabled={!isEditing || !isAdmin}
                    checked={
                      isEditing
                        ? tempSettings.applicationStatusNotification
                        : generalSettings.applicationStatusNotification
                    }
                    onChange={(e) =>
                      handleGeneralChange(
                        "applicationStatusNotification",
                        e.target.checked
                      )
                    }
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 disabled:cursor-not-allowed"
                  />
                  <span className="ml-3 text-sm font-medium text-gray-700">
                    Send notification when application status changes
                  </span>
                </label>
              </div>
            </div>

            {isAdmin && (
              <div className="flex gap-3 justify-end mt-8 pt-8">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleCancelGeneral}
                      className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveGeneral}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                  >
                    Edit
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Privacy Policy Tab */}
      {activeTab === "privacy" && (
        <div className="bg-white rounded-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Privacy Policy
            </h2>
            {isAdmin && (
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
              >
                {isEditing ? "Cancel" : "Edit"}
              </button>
            )}
          </div>

          {isEditing && isAdmin ? (
            <div className="space-y-4">
              <textarea
                value={tempPrivacyPolicy}
                onChange={(e) => setTempPrivacyPolicy(e.target.value)}
                rows="15"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              />
              <div className="flex gap-3 justify-end">
                <button
                  onClick={handleCancelPrivacy}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePrivacy}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {privacyPolicy}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Terms & Conditions Tab */}
      {activeTab === "terms" && (
        <div className="bg-white rounded-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Terms & Conditions
            </h2>
            {isAdmin && (
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
              >
                {isEditing ? "Cancel" : "Edit"}
              </button>
            )}
          </div>

          {isEditing && isAdmin ? (
            <div className="space-y-4">
              <textarea
                value={tempTermsConditions}
                onChange={(e) => setTempTermsConditions(e.target.value)}
                rows="15"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              />
              <div className="flex gap-3 justify-end">
                <button
                  onClick={handleCancelTerms}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveTerms}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="prose prose-sm max-w-none space-y-4">
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {termsConditions}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
