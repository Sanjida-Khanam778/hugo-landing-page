"use client";

import { useState, useEffect } from "react";
import { Search, User, Menu, X, LogOut } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  // Check localStorage on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const name = localStorage.getItem("userName");
    if (loggedIn === "true" && name) {
      setIsLoggedIn(true);
      setUserName(name);
    }
  }, []);

  const navLinks = [
    { label: "Universities", href: "/universities" },
    { label: "Events", href: "/events" },
    { label: "Jobs", href: "/jobs" },
    { label: "About us", href: "/about" },
  ];

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPhone");
    navigate("/");
  };

  // Function to set user as logged in (call this from SignIn/SignUp pages)
  const loginUser = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  return (
    <nav className={`w-full sticky top-0 bg-[#F3F4F5]/70 z-[9999]`}>
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to={"/"}>
            <div>
              <img src={logo} className="h-10 xl:h-auto" alt="" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Search Bar and Dashboard Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Input - Hidden on mobile */}
            <div className="hidden lg:flex items-center bg-gray-50 border border-gray-300 rounded-full px-4 py-2 gap-2 focus-within:border-gray-400 transition-colors">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="bg-transparent outline-none text-gray-700 placeholder-gray-400 w-32 sm:w-40"
              />
            </div>

            {/* Dashboard Button */}
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 bg-primary text-white font-medium px-4 sm:px-6 py-2 rounded-lg whitespace-nowrap hover:bg-blue-700 transition-colors">
                  <User size={18} />
                  <span className="hidden sm:inline">Dashboard</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-600 text-white font-medium px-4 sm:px-6 py-2 rounded-lg whitespace-nowrap hover:bg-red-700 transition-colors"
                >
                  <LogOut size={18} />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="flex items-center gap-2 bg-primary text-white font-medium px-4 sm:px-6 py-2 rounded-lg whitespace-nowrap hover:bg-blue-700 transition-colors"
              >
                <User size={18} />
                <span className="hidden sm:inline">Login</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            {/* Mobile Search */}
            <div className="mb-4 flex items-center bg-gray-50 border border-gray-300 rounded-full px-4 py-2 gap-2">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="bg-transparent outline-none text-gray-700 placeholder-gray-400 flex-1"
              />
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-2 px-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
