import React, { use } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  const location = useLocation();
  return (
    <div className="font-rubik">
      {location.pathname === "/" ? <Navbar /> : <Navbar />}

      <Outlet />
      {location.pathname === "/" || location.pathname === "/message" ? null : <Footer />}
    </div>
  );
}
