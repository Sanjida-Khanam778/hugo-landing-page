import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", enrollment: 40, applications: 24 },
  { month: "Feb", enrollment: 30, applications: 13 },
  { month: "Mar", enrollment: 20, applications: 98 },
  { month: "Apr", enrollment: 27, applications: 39 },
  { month: "May", enrollment: 20, applications: 48 },
  { month: "Jun", enrollment: 36, applications: 38 },
]

export default function EnrollmentChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="enrollment" fill="#3b82f6" />
        <Bar dataKey="applications" fill="#10b981" />
      </BarChart>
    </ResponsiveContainer>
  )
}
