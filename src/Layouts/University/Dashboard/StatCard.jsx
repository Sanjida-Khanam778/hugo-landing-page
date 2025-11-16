export default function StatCard({ label, value, change, color, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-grey text-sm font-medium mb-1">{label}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <img src={icon} alt="" />
      </div>
      <p className="text-green text-sm font-medium">{change}</p>
    </div>
  )
}
