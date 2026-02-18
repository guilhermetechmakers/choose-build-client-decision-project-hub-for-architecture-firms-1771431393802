import { Link } from 'react-router-dom'
import { FileCheck, Filter } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

const mockDecisions = [
  {
    id: '1',
    title: 'Kitchen finish options',
    project: 'Riverside Residence',
    status: 'pending',
    costDelta: '+$2,400',
    updated: '2 days ago',
  },
  {
    id: '2',
    title: 'Exterior cladding',
    project: 'Riverside Residence',
    status: 'approved',
    costDelta: '$0',
    updated: '1 week ago',
  },
  {
    id: '3',
    title: 'Flooring material',
    project: 'Oak Studio',
    status: 'changes_requested',
    costDelta: '+$1,100',
    updated: '3 days ago',
  },
]

export function DashboardDecisions() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Decision Log</h1>
          <p className="mt-1 text-muted-foreground">
            Centralized list and detail view of decision cards.
          </p>
        </div>
        <Button asChild>
          <Link to="/dashboard/decisions/new">Create decision</Link>
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Input placeholder="Search decisions..." className="max-w-sm" />
        <Button variant="outline" size="sm">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Decisions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockDecisions.map((d) => (
              <Link
                key={d.id}
                to={`/dashboard/decisions/${d.id}`}
                className="flex flex-wrap items-center gap-4 rounded-lg border border-border p-4 transition-all duration-200 hover:bg-muted/50 hover:shadow-card"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <FileCheck className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{d.title}</p>
                  <p className="text-sm text-muted-foreground">{d.project}</p>
                </div>
                <Badge
                  variant={
                    d.status === 'approved'
                      ? 'success'
                      : d.status === 'changes_requested'
                        ? 'warning'
                        : 'default'
                  }
                >
                  {d.status.replace('_', ' ')}
                </Badge>
                <span className="text-sm font-medium">{d.costDelta}</span>
                <span className="text-sm text-muted-foreground">{d.updated}</span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
