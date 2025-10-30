"use client";

import { useState } from "react";
import { Search, User, Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";
export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Universities", href: "#" },
    { label: "Events", href: "#" },
    { label: "Jobs", href: "#" },
    { label: "About us", href: "#" },
  ];

  return (
    <nav className="w-full bg-[#F3F4F5] opacity-70 border-b border-gray-200 sticky top-0 z-50">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div>
            <img src={logo} className="h-10 xl:h-auto" alt="" />
          </div>

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
            <button className="flex items-center gap-2 bg-[#002B5B] text-white font-medium px-4 sm:px-6 py-2 rounded-lg hover:bg-[#001f42] transition-colors whitespace-nowrap">
              <User size={18} />
              <span className="hidden sm:inline">Dashboard</span>
            </button>

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
