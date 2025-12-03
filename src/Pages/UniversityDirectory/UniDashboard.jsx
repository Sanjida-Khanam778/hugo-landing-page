import React from "react";
import UniBanner from "./UniBanner";
import { Award, Building, Calendar, Users } from "lucide-react";
import UniversityTab from "./Universitytab";

export default function UniDashboard() {
  return (
    <div className="bg-base">
      <UniBanner />
      {/* Tabs */}
      <div className="bg-white rounded-t-3xl relative -top-6 p-6 shadow-lg">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between gap-8">
            <div className="grid place-items-center gap-2">
              <div className="flex items-center gap-3">
                <Calendar size={22} className="text-blue" />
                <p className="text-dark font-medium text-lg">Founded</p>
              </div>
              <p className=" text-[#374151]">1636</p>
            </div>
            <div className="grid place-items-center gap-2">
              <div className="flex items-center gap-3">
                <Building size={22} className="text-blue" />
                <p className="text-dark font-medium text-lg">Campuses</p>
              </div>
              <p className=" text-[#374151]">3</p>
            </div>
            <div className="grid place-items-center gap-2">
              <div className="flex items-center gap-3">
                <Users size={22} className="text-blue" />
                <p className="text-dark font-medium text-lg">Students</p>
              </div>
              <p className=" text-[#374151]">23,000</p>
            </div>
            <div className="grid place-items-center gap-2">
              <div className="flex items-center gap-3">
                <Award size={22} className="text-blue" />
                <p className="text-dark font-medium text-lg">Faculty</p>
              </div>
              <p className=" text-[#374151]">2,400</p>
            </div>
          </div>
        </div>
      </div>
      <UniversityTab />
    </div>
  );
}
