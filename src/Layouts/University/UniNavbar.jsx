import { Bell, LogOut } from "lucide-react";

export default function UniNavbar() {
  return (
    <nav className="bg-white shadow-sm border-b ml-56 fixed top-0 right-0 left-56 z-40">
      <div className="flex items-center justify-between px-8 py-4">
        <div></div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} className="text-gray-600" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
