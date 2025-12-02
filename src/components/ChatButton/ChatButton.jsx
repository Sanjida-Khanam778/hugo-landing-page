import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export default function ChatButton() {
  return (
    <Link to="/ai-assistant" className="fixed z-50 right-6 bottom-8">
      <div className="flex items-center gap-3 bg-blue text-white rounded-full shadow-lg px-4 py-3 hover:scale-105 transition-transform">
        <div className="rounded-full flex items-center justify-center">
          <MessageCircle size={25} className=" text-white" />
        </div>
        <span className="hidden sm:inline-block text-lg">Chat with us</span>
      </div>
    </Link>
  );
}
