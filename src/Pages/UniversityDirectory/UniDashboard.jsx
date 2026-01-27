import React, { useState } from "react";
import UniBanner from "./UniBanner";
import { Award, Building, Calendar, Users } from "lucide-react";
import UniversityTab from "./Universitytab";
import { useParams } from "react-router-dom";
import { useGetUniversityOverviewQuery } from "../../Api/universityApi";
import ApplyModal from "../../components/ApplyModal/ApplyModal";

export default function UniDashboard() {
  const { id } = useParams();
  const { data: uniData, isLoading, error } = useGetUniversityOverviewQuery(id);
  const [showApply, setShowApply] = useState(false);

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">Loading...</div>
    );
  if (error)
    return (
      <div className="h-screen flex items-center justify-center">
        Error loading university data
      </div>
    );

  return (
    <div className="bg-base min-h-screen">
      <UniBanner data={uniData} setShowApply={setShowApply} />
      {/* Tabs */}
      <div className="bg-white rounded-t-3xl relative -top-6 p-6 shadow-lg z-10">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between gap-8">
            <div className="grid place-items-center gap-2">
              <div className="flex items-center gap-3">
                <Calendar size={22} className="text-blue" />
                <p className="text-dark font-medium text-lg">Founded</p>
              </div>
              <p className=" text-[#374151]">{uniData?.year_founded || "N/A"}</p>
            </div>
            <div className="grid place-items-center gap-2">
              <div className="flex items-center gap-3">
                <Building size={22} className="text-blue" />
                <p className="text-dark font-medium text-lg">Campuses</p>
              </div>
              <p className=" text-[#374151]">{uniData?.total_campuses || "0"}</p>
            </div>
            <div className="grid place-items-center gap-2">
              <div className="flex items-center gap-3">
                <Users size={22} className="text-blue" />
                <p className="text-dark font-medium text-lg">Students</p>
              </div>
              <p className=" text-[#374151]">{uniData?.total_students || "0"}</p>
            </div>
            <div className="grid place-items-center gap-2">
              <div className="flex items-center gap-3">
                <Award size={22} className="text-blue" />
                <p className="text-dark font-medium text-lg">Faculty</p>
              </div>
              <p className=" text-[#374151]">{uniData?.total_faculty || "0"}</p>
            </div>
          </div>
        </div>
      </div>
      <UniversityTab data={uniData} setShowApply={setShowApply} />
      <ApplyModal
        open={showApply}
        onClose={() => setShowApply(false)}
        uniName={uniData?.univ_name || "University"}
        uniId={uniData?.id}
      />
    </div>
  );
}
