"use client";

import { useState } from "react";
import UniNavbar from "./UniNavbar";
import Sidebar from "./Sidebar";
import UniversityDashboard from "../UniversityDashboard";
import UniversityProfile from "./UniversityProfile/UniversityProfile";
import Programs from "./Programs/Programs";

export default function UniMain() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex h-screen bg-base font-rubik">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="flex-1 flex flex-col">
        <UniNavbar />

        <main className="overflow-auto">
          {activePage === "dashboard" && <UniversityDashboard />}
          {activePage === "profile" && <UniversityProfile />}
          {activePage === "programs" && <Programs />}
        </main>
      </div>
    </div>
  );
}
