import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  MessageSquare,
} from "lucide-react";
import background from "../../assets/images/background4.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Email submitted:", email);
    setEmail("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <footer
      className="text-white bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-10/12 md:w-full lg:w-10/12 mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">EduConnect</h2>
            <p className="text-[#CCCCCC] mb-4">
              Connecting students with the best educational opportunities
              worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <Facebook size={22} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <Twitter size={22} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to={'/'}
                  className="text-[#CCCCCC] hover:text-[#CCCCCC] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/universities'}
                  className="text-[#CCCCCC] hover:text-[#CCCCCC] transition-colors"
                >
                  Universities
                </Link>
              </li>
              <li>
                <Link to={'/programs'}
                  className="text-[#CCCCCC] hover:text-[#CCCCCC] transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link to={'/events'}
                  className="text-[#CCCCCC] hover:text-[#CCCCCC] transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link to={'/jobs'}
                  className="text-[#CCCCCC] hover:text-[#CCCCCC] transition-colors"
                >
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to={'/about'} className="text-[#CCCCCC] hover:text-[#CCCCCC] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CCCCCC] hover:text-[#CCCCCC] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CCCCCC] hover:text-[#CCCCCC] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-[#CCCCCC] mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-3 bg-white text-slate-900 rounded-l w-24 focus:outline-none"
              />
              <button
                onClick={handleSubmit}
                className="bg-blue px-4 py-2 rounded-r transition-colors"
              >
                <MessageSquare size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#374151] py-4 text-center">
          <p className="text-white text-sm">
            © 2025 EduConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
