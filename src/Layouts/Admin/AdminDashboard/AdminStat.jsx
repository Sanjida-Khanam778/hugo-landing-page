export default function AdminStat({ title, value, change, color, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-8">
        <img className="w-16" src={icon} alt="" />
        <div>
          <p className="text-grey font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div> 
      </div>
    </div>
  );
}
