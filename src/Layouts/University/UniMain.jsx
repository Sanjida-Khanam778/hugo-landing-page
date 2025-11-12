"use client"

import { useState } from "react"
import UniNavbar from "./UniNavbar"
import Sidebar from "./Sidebar"
import UniversityDashboard from "../UniversityDashboard"

export default function UniMain() {
  const [activePage, setActivePage] = useState("dashboard")

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="flex-1 flex flex-col ml-56">
        <UniNavbar />

        <main className="flex-1 overflow-auto p-8">{activePage === "dashboard" && <UniversityDashboard />}</main>
      </div>
    </div>
  )
}
