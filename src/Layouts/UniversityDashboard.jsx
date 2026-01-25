import EnrollmentChart from "./University/Dashboard/EnrollmentChart";
import QuickActions from "./University/Dashboard/QuickActions";
import RecentActivity from "./University/Dashboard/RecentActivity";
import StatCard from "./University/Dashboard/StatCard";
import events from "../assets/icons/events.png"
import testimonials from "../assets/icons/testimonials.png"
import applications from "../assets/icons/applications.png"
import posting from "../assets/icons/posting.png"
import { useGetDashboardStatsQuery } from "../Api/universityApi";
import { useMemo } from "react";

export default function UniversityDashboard() {
  const { data: dashboardData, isLoading, error } = useGetDashboardStatsQuery();

  const stats = useMemo(() => {
    if (!dashboardData?.cards) return [];

    const { active_events, job_postings, student_applications, pending_testimonials } = dashboardData.cards;

    return [
      {
        label: "Active Events",
        value: active_events.value,
        change: `+${active_events.growth} from last month`,
        color: "bg-green-500",
        icon: events,
      },
      {
        label: "Job Postings",
        value: job_postings.value,
        change: `+${job_postings.growth} from last month`,
        color: "bg-purple-500",
        icon: posting,
      },
      {
        label: "Student Applications",
        value: student_applications.value,
        change: `+${student_applications.growth} from last month`,
        color: "bg-orange-500",
        icon: applications,
      },
      {
        label: "Pending Testimonials",
        value: pending_testimonials.value,
        change: `+${pending_testimonials.growth} from last month`,
        color: "bg-pink-500",
        icon: testimonials,
      },
    ];
  }, [dashboardData]);

  const chartData = useMemo(() => {
    if (!dashboardData?.chart_data) return [];

    const { labels, applications, enrollment } = dashboardData.chart_data;

    return labels.map((label, index) => ({
      month: label,
      applications: applications[index],
      enrollment: enrollment[index],
    }));
  }, [dashboardData]);

  if (isLoading) return <div className="p-8 text-center text-gray-500">Loading dashboard stats...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error loading dashboard stats.</div>;

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
        <EnrollmentChart data={chartData} />
      </div>

      {/* Bottom Section */}
      {/* <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <RecentActivity />
        </div>
        <div>
          <QuickActions />
        </div>
      </div> */}
    </div>
  );
}
