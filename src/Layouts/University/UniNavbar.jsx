import { Bell, LogOut } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function UniNavbar() {
  return (
    <nav className="bg-white shadow-sm border-b w-full">
      <div className="flex items-center justify-end px-8 py-4">
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-transform px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
            <LogOut size={18} />
           <Link to={'/login-page'}> Logout </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
