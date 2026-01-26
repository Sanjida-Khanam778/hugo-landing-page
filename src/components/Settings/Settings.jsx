"use client";

import { useState, useRef, useEffect } from "react";
import {
  LuAlignCenter,
  LuAlignJustify,
  LuAlignLeft,
  LuAlignRight,
} from "react-icons/lu";
import { MdOutlineFormatAlignLeft } from "react-icons/md";
import { useLocation } from "react-router-dom";

export default function Settings() {
  const location = useLocation();
  // Only allow editing if on /admin/settings route; view-only on /university/settings
  const isAdmin = location.pathname === "/admin/settings";

  const [activeTab, setActiveTab] = useState("terms");
  // Per-tab editing flags so editing state doesn't interfere across tabs
  const [editingPrivacy, setEditingPrivacy] = useState(isAdmin);
  const [editingTerms, setEditingTerms] = useState(isAdmin);
  const [editorContent, setEditorContent] = useState("");


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

  // refs for rich text editors
  const privacyRef = useRef(null);
  const termsRef = useRef(null);

  // helper to escape plain text -> html
  const escapeHtml = (unsafe) =>
    unsafe
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const plainToHtml = (text) => text.split("\n").map(escapeHtml).join("<br/>");

  useEffect(() => {
    // initialize temp HTML values if they are plain text
    if (!tempPrivacyPolicy.includes("<") && tempPrivacyPolicy.includes("\n")) {
      setTempPrivacyPolicy(plainToHtml(tempPrivacyPolicy));
    }
    if (
      !tempTermsConditions.includes("<") &&
      tempTermsConditions.includes("\n")
    ) {
      setTempTermsConditions(plainToHtml(tempTermsConditions));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (editingPrivacy && privacyRef.current) {
      privacyRef.current.innerHTML = tempPrivacyPolicy;
    }
  }, [editingPrivacy, tempPrivacyPolicy]);

  useEffect(() => {
    if (editingTerms && termsRef.current) {
      termsRef.current.innerHTML = tempTermsConditions;
    }
  }, [editingTerms, tempTermsConditions]);

  const exec = (ref, command, value = null) => {
    if (!ref || !ref.current) return;
    ref.current.focus();
    try {
      document.execCommand(command, false, value);
    } catch (e) {
      // fallback noop
    }
  };

  const handleSavePrivacy = () => {
    setPrivacyPolicy(tempPrivacyPolicy);
    setEditingPrivacy(false);
  };

  const handleCancelPrivacy = () => {
    setTempPrivacyPolicy(privacyPolicy);
    setEditingPrivacy(false);
  };

  const handleSaveTerms = () => {
    setTermsConditions(tempTermsConditions);
    setEditingTerms(false);
  };

  const handleCancelTerms = () => {
    setTempTermsConditions(termsConditions);
    setEditingTerms(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">System Settings</h1>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-8">

        <button
          onClick={() => {
            setActiveTab("terms");
          }}
          className={`pb-3 px-1 font-medium  border-b-2 transition ${activeTab === "terms"
            ? "border-blue text-blue"
            : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
        >
          Terms & Conditions
        </button>
        <button
          onClick={() => {
            setActiveTab("privacy");
          }}
          className={`pb-3 px-1 font-medium  border-b-2 transition ${activeTab === "privacy"
            ? "border-blue text-blue"
            : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
        >
          Privacy Policy
        </button>
      </div>



      {/* Privacy Policy Tab */}
      {activeTab === "privacy" && (
        <div className="bg-white rounded-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Privacy Policy
            </h2>
            {isAdmin && (
              <button
                onClick={() => setEditingPrivacy(!editingPrivacy)}
                className="px-6 py-2 bg-blue text-white rounded-lg font-medium"
              >
                {editingPrivacy ? "Cancel" : "Edit"}
              </button>
            )}
          </div>

          {editingPrivacy && isAdmin ? (
            <div className="space-y-4">
              {/* toolbar */}
              <div className="flex items-center gap-2 mb-2">
                <button
                  type="button"
                  onClick={() => exec(privacyRef, "bold")}
                  className="px-2 py-1 border rounded"
                >
                  B
                </button>
                <button
                  type="button"
                  onClick={() => exec(privacyRef, "italic")}
                  className="px-2 py-1 border rounded"
                >
                  I
                </button>
                <button
                  type="button"
                  onClick={() => exec(privacyRef, "underline")}
                  className="px-2 py-1 border rounded"
                >
                  U
                </button>
                <select
                  onChange={(e) => exec(privacyRef, "fontSize", e.target.value)}
                  defaultValue="3"
                  className="ml-2 border px-2 py-1 rounded"
                >
                  <option value="1">XS</option>
                  <option value="2">S</option>
                  <option value="3">M</option>
                  <option value="4">L</option>
                  <option value="5">XL</option>
                </select>
                <div className="ml-2 flex gap-1">
                  <button
                    type="button"
                    onClick={() => exec(privacyRef, "justifyLeft")}
                    className="px-2 py-1 border rounded"
                  >
                    <LuAlignLeft />
                  </button>
                  <button
                    type="button"
                    onClick={() => exec(privacyRef, "justifyCenter")}
                    className="px-2 py-1 border rounded"
                  >
                    <LuAlignCenter />
                  </button>
                  <button
                    type="button"
                    onClick={() => exec(privacyRef, "justifyRight")}
                    className="px-2 py-1 border rounded"
                  >
                    <LuAlignRight />
                  </button>
                  {/* <button
                    type="button"
                    onClick={() => exec(privacyRef, "justifyJustify")}
                    className="px-2 py-1 border rounded"
                  >
                    <LuAlignJustify />
                  </button> */}
                </div>
              </div>

              <div
                ref={privacyRef}
                contentEditable
                suppressContentEditableWarning
                className="w-full min-h-[200px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white "
              />

              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => {
                    // reset editor content
                    if (privacyRef.current)
                      privacyRef.current.innerHTML = privacyPolicy;
                    handleCancelPrivacy();
                  }}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    const html = privacyRef.current
                      ? privacyRef.current.innerHTML
                      : tempPrivacyPolicy;
                    setTempPrivacyPolicy(html);
                    handleSavePrivacy();
                  }}
                  className="px-6 py-2 bg-blue text-white rounded-lg font-medium"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="prose prose-sm max-w-none">
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: privacyPolicy }}
              />
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
                onClick={() => setEditingTerms(!editingTerms)}
                className="px-6 py-2 bg-blue text-white rounded-lg font-medium"
              >
                {editingTerms ? "Cancel" : "Edit"}
              </button>
            )}
          </div>

          {editingTerms && isAdmin ? (
            <div className="space-y-4">
              {/* toolbar */}
              <div className="flex items-center gap-2 mb-2">
                <button
                  type="button"
                  onClick={() => exec(termsRef, "bold")}
                  className="px-2 py-1 border rounded"
                >
                  B
                </button>
                <button
                  type="button"
                  onClick={() => exec(termsRef, "italic")}
                  className="px-2 py-1 border rounded"
                >
                  I
                </button>
                <button
                  type="button"
                  onClick={() => exec(termsRef, "underline")}
                  className="px-2 py-1 border rounded"
                >
                  U
                </button>
                <select
                  onChange={(e) => exec(termsRef, "fontSize", e.target.value)}
                  defaultValue="3"
                  className="ml-2 border px-2 py-1 rounded"
                >
                  <option value="1">XS</option>
                  <option value="2">S</option>
                  <option value="3">M</option>
                  <option value="4">L</option>
                  <option value="5">XL</option>
                </select>
                <div className="ml-2 flex gap-1">
                  <button
                    type="button"
                    onClick={() => exec(termsRef, "justifyLeft")}
                    className="px-2 py-1 border rounded"
                  >
                    <LuAlignLeft />
                  </button>
                  <button
                    type="button"
                    onClick={() => exec(termsRef, "justifyCenter")}
                    className="px-2 py-1 border rounded"
                  >
                    <LuAlignCenter />
                  </button>
                  <button
                    type="button"
                    onClick={() => exec(termsRef, "justifyRight")}
                    className="px-2 py-1 border rounded"
                  >
                    <LuAlignRight />
                  </button>
                </div>
              </div>

              <div
                ref={termsRef}
                contentEditable
                suppressContentEditableWarning
                className="w-full min-h-[200px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white "
              />

              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => {
                    if (termsRef.current)
                      termsRef.current.innerHTML = termsConditions;
                    handleCancelTerms();
                  }}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    const html = termsRef.current
                      ? termsRef.current.innerHTML
                      : tempTermsConditions;
                    setTempTermsConditions(html);
                    handleSaveTerms();
                  }}
                  className="px-6 py-2 bg-blue text-white rounded-lg font-medium"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="prose prose-sm max-w-none space-y-4">
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: termsConditions }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
