import { Link } from 'react-router-dom'
import { FileCheck, FolderKanban, Calendar, ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const mockApprovals = [
  { id: '1', title: 'Kitchen finish options', project: 'Riverside Residence', due: '2 days' },
  { id: '2', title: 'Exterior cladding', project: 'Riverside Residence', due: '5 days' },
]
const mockActivity = [
  { action: 'Decision approved', project: 'Riverside', time: '1h ago' },
  { action: 'New file uploaded', project: 'Riverside', time: '3h ago' },
  { action: 'Meeting scheduled', project: 'Oak Studio', time: 'Yesterday' },
]
const chartData = [
  { name: 'Jan', decisions: 4, approvals: 3 },
  { name: 'Feb', decisions: 6, approvals: 5 },
  { name: 'Mar', decisions: 8, approvals: 7 },
  { name: 'Apr', decisions: 5, approvals: 4 },
]

export function DashboardOverview() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Overview</h1>
        <p className="mt-1 text-muted-foreground">
          Situational awareness and prioritization for your projects.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="transition-shadow duration-300 hover:shadow-card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending approvals
            </CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">Across 3 projects</p>
          </CardContent>
        </Card>
        <Card className="transition-shadow duration-300 hover:shadow-card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active projects
            </CardTitle>
            <FolderKanban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 in schematic</p>
          </CardContent>
        </Card>
        <Card className="transition-shadow duration-300 hover:shadow-card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Decisions this month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-success">↑ 2 from last month</p>
          </CardContent>
        </Card>
        <Card className="transition-shadow duration-300 hover:shadow-card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Upcoming meetings
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next 7 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Pending approvals</CardTitle>
              <CardDescription>Decisions awaiting client sign-off</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/dashboard/decisions">View all</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {mockApprovals.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.project}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="warning">Due {item.due}</Badge>
                    <Button variant="ghost" size="icon-sm" asChild>
                      <Link to={`/dashboard/decisions/${item.id}`}>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity</CardTitle>
            <CardDescription>Recent activity across projects</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {mockActivity.map((a, i) => (
                <li key={i} className="flex justify-between text-sm">
                  <span>{a.action}</span>
                  <span className="text-muted-foreground">{a.project} · {a.time}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Decision & approval trend</CardTitle>
          <CardDescription>Last 4 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    borderRadius: '8px',
                    border: '1px solid rgb(var(--border))',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="decisions"
                  stroke="rgb(var(--primary))"
                  fill="rgb(var(--primary) / 0.2)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="approvals"
                  stroke="rgb(var(--success))"
                  fill="rgb(var(--success) / 0.2)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
