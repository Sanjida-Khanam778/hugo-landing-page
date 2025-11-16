"use client"
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
} from "lucide-react"

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "profile", label: "University Profile", icon: FileText },
  { id: "programs", label: "Programs", icon: BookOpen },
  { id: "events", label: "Events", icon: Calendar },
  { id: "jobs", label: "Jobs & Internships", icon: Briefcase },
  { id: "testimonials", label: "Testimonials", icon: Star },
  { id: "approvals", label: "Student Approvals", icon: CheckCircle },
  { id: "gallery", label: "Gallery", icon: ImageIcon },
  { id: "chat", label: "Chat Management", icon: MessageSquare },
  { id: "settings", label: "Settings", icon: Settings },
]

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <div className="w-56 bg-white shadow-md h-screen fixed left-0 top-0 overflow-y-auto z-20">
      <div className="p-6">
        <h1 className="text-xl font-bold text-blue">University Admin</h1>
      </div>
      <nav className="p-4">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activePage === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                isActive ? "bg-blue-100 text-blue" : "text-gray-700"
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
