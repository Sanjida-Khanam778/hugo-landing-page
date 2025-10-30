import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email submitted:', email);
    setEmail('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">EduConnect</h2>
            <p className="text-slate-400 text-sm mb-4">
              Connecting students with the best educational opportunities worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Universities
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Newsletter</h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-2 bg-white text-slate-900 text-sm rounded-l focus:outline-none"
              />
              <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 EduConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}