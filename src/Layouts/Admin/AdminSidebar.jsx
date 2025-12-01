"use client";
import { LayoutDashboard, FileText, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    id: "universities",
    label: "Universities",
    icon: FileText,
    path: "/admin/universities",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 bg-white shadow-md h-screen overflow-y-auto">
      <div className="p-4">
        <img src={logo} className="h-10 xl:h-auto" alt="" />
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
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
