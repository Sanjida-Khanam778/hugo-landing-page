const activities = [
  {
    title: "New student application",
    description: "John Doe applied for Computer Science",
    time: "2 hours ago",
    icon: "👤",
    color: "blue",
  },
  {
    title: "Event registration",
    description: "Virtual Open Day reached 50 registrations",
    time: "3 hours ago",
    icon: "✓",
    color: "green",
  },
  {
    title: "Testimonial approved",
    description: "Admin approved Sarah's testimonial.",
    time: "6 hours ago",
    icon: "📋",
    color: "purple",
  },
  {
    title: "Program updated",
    description: "MBA program details were updated",
    time: "1 day ago",
    icon: "📊",
    color: "orange",
  },
]

const colorMap = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
  orange: "bg-orange-100 text-orange-600",
}

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4 pb-4 border-b last:border-b-0">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg ${
                colorMap[activity.color]
              }`}
            >
              {activity.icon}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="text-blue-600 text-sm font-medium mt-4 hover:text-blue-700">View all activity</button>
    </div>
  )
}
