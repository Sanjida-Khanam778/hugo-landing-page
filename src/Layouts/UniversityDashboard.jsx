import EnrollmentChart from "./University/Dashboard/EnrollmentChart";
import QuickActions from "./University/Dashboard/QuickActions";
import RecentActivity from "./University/Dashboard/RecentActivity";
import StatCard from "./University/Dashboard/StatCard";
import events from "../assets/icons/events.png"
import testimonials from "../assets/icons/testimonials.png"
import applications from "../assets/icons/applications.png"
import posting from "../assets/icons/posting.png"
export default function UniversityDashboard() {
  const stats = [
    {
      label: "Active Events",
      value: "8",
      change: "+2 from last month",
      color: "bg-green-500",
      icon: events,
    },
    {
      label: "Job Postings",
      value: "16",
      change: "+5 from last month",
      color: "bg-purple-500",
      icon: posting,
    },
    {
      label: "Student Applications",
      value: "124",
      change: "+18 from last month",
      color: "bg-orange-500",
      icon: applications,
    },
    {
      label: "Pending Testimonials",
      value: "7",
      change: "+3 from last month",
      color: "bg-pink-500",
      icon: testimonials,
    },
  ];

  return (
    <div className="p-8 min-h-screen bg-base">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Enrollment Chart */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">
          Student Enrollment & Applications
        </h2>
        <EnrollmentChart />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <RecentActivity />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
