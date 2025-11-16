import { BookOpen, Building2, Users, Factory as Faculty } from "lucide-react";

const actions = [
  { label: "Founded", value: "1636", icon: BookOpen },
  { label: "Campuses", value: "3", icon: Building2 },
  { label: "Students", value: "23,000", icon: Users },
  { label: "Faculty", value: "2,400", icon: Faculty },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
      <div className="space-y-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#DBEAFE] rounded-full flex items-center justify-center">
                  <Icon size={20} className="text-blue" />
                </div>
                <span className="font-medium text-gray-900">
                  {action.label}
                </span>
              </div>
              <span className="text-gray-600 font-semibold">
                {action.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
