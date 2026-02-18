import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const reportData = [
  { name: 'Pending approvals', count: 7 },
  { name: 'Approved this month', count: 12 },
  { name: 'Change requests', count: 2 },
  { name: 'Avg. turnaround (days)', count: 3 },
]

export function DashboardReports() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Reports & Analytics
        </h1>
        <p className="mt-1 text-muted-foreground">
          Project health and KPI reporting.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>KPIs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={reportData} layout="vertical" margin={{ left: 80 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis type="number" className="text-xs" />
                <YAxis dataKey="name" type="category" width={120} className="text-xs" />
                <Tooltip
                  contentStyle={{
                    borderRadius: '8px',
                    border: '1px solid rgb(var(--border))',
                  }}
                />
                <Bar dataKey="count" fill="rgb(var(--primary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
