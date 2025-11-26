"use client";
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  Calendar,
  Briefcase,
  Star,
  CheckCircle,
  ImageIcon,
  MessageSquare,
  Settings,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/university/dashboard",
  },
  {
    id: "profile",
    label: "University Profile",
    icon: FileText,
    path: "/university/profile",
  },
  {
    id: "programs",
    label: "Programs",
    icon: BookOpen,
    path: "/university/programs",
  },
  { id: "events", label: "Events", icon: Calendar, path: "/university/events" },
  {
    id: "jobs",
    label: "Jobs & Internships",
    icon: Briefcase,
    path: "/university/jobs",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    icon: Star,
    path: "/university/testimonials",
  },
  {
    id: "approvals",
    label: "Student Approvals",
    icon: CheckCircle,
    path: "/university/approvals",
  },
  {
    id: "gallery",
    label: "Gallery",
    icon: ImageIcon,
    path: "/university/gallery",
  },
  {
    id: "chat",
    label: "Chat Management",
    icon: MessageSquare,
    path: "/university/chat",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    path: "/university/settings",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-56 bg-white shadow-md h-screen overflow-y-auto">
      <div className="p-6">
        <h1 className="text-xl font-bold text-blue">University Admin</h1>
      </div>
      <nav className="p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                active ? "bg-blue-100 text-blue" : "text-gray-700"
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
