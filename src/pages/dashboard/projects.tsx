import { Link } from 'react-router-dom'
import { Plus, FolderKanban } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

const mockProjects = [
  { id: '1', name: 'Riverside Residence', phase: 'Schematic', progress: 60, decisions: 4 },
  { id: '2', name: 'Oak Studio', phase: 'DD', progress: 85, decisions: 2 },
  { id: '3', name: 'Hill House', phase: 'Concept', progress: 30, decisions: 6 },
]

export function DashboardProjects() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h1>
          <p className="mt-1 text-muted-foreground">
            Manage project timelines and phases.
          </p>
        </div>
        <Button asChild>
          <Link to="/dashboard/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            New project
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Input
          placeholder="Search projects..."
          className="max-w-sm"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project) => (
          <Link key={project.id} to={`/dashboard/projects/${project.id}`}>
          <Card className="transition-all duration-300 hover:shadow-card-hover hover:scale-[1.01]">
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <FolderKanban className="h-10 w-10 text-primary" />
                <Badge variant="secondary">{project.phase}</Badge>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.decisions} pending decisions
                </p>
              </CardContent>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
