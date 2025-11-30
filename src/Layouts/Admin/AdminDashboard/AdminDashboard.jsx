"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import icon1 from "../../../assets/icons/program.png";
import icon2 from "../../../assets/icons/universities.png";
import icon3 from "../../../assets/icons/students.png";
import icon4 from "../../../assets/icons/upcoming-event.png";
import AdminStat from "./AdminStat";

const monthlyData = [
  { month: "Jan", universityUsers: 400, studentUsers: 300 },
  { month: "Feb", universityUsers: 300, studentUsers: 200 },
  { month: "Mar", universityUsers: 200, studentUsers: 221 },
  { month: "Apr", universityUsers: 278, studentUsers: 229 },
  { month: "May", universityUsers: 190, studentUsers: 200 },
  { month: "Jun", universityUsers: 239, studentUsers: 221 },
  { month: "Jul", universityUsers: 349, studentUsers: 250 },
  { month: "Aug", universityUsers: 430, studentUsers: 410 },
  { month: "Sep", universityUsers: 350, studentUsers: 300 },
  { month: "Oct", universityUsers: 280, studentUsers: 270 },
  { month: "Nov", universityUsers: 320, studentUsers: 290 },
  { month: "Dec", universityUsers: 400, studentUsers: 350 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminStat
          title="Total Universities"
          value="124"
          icon={icon1}
          bgColor="bg-blue-50"
          iconBg="bg-blue-100"
        />
        <AdminStat
          title="Active Students"
          value="45,231"
          icon={icon2}
          bgColor="bg-green-50"
          iconBg="bg-green-100"
        />
        <AdminStat
          title="Active Offers"
          value="1,892"
          icon={icon3}
          bgColor="bg-purple-50"
          iconBg="bg-purple-100"
        />
        <AdminStat
          title="Upcoming Events"
          icon={icon4}
          value="26"
          bgColor="bg-yellow-50"
          iconBg="bg-yellow-100"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* University Users Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            University User
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                }}
              />
              <Bar dataKey="universityUsers" fill="#8b5cf6" barSize={14} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Student Users Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Student User
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                }}
              />
              <Bar dataKey="studentUsers" fill="#06b6d4" barSize={14} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
