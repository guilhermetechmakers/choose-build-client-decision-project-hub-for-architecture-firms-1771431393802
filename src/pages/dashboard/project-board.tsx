import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const phases = [
  { id: 'kickoff', name: 'Kickoff', progress: 100 },
  { id: 'concept', name: 'Concept', progress: 100 },
  { id: 'schematic', name: 'Schematic', progress: 60 },
  { id: 'dd', name: 'DD', progress: 0 },
  { id: 'permitting', name: 'Permitting', progress: 0 },
  { id: 'ca', name: 'CA', progress: 0 },
  { id: 'handover', name: 'Handover', progress: 0 },
]

export function ProjectBoard() {
  const { projectId } = useParams()

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/dashboard/projects">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Project timeline
          </h1>
          <p className="mt-1 text-muted-foreground">
            Project {projectId ?? '—'} · Phases and decision checkpoints
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Phase timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 md:flex-nowrap md:gap-0">
            {phases.map((phase) => (
              <div
                key={phase.id}
                className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
              >
                <span className="text-sm font-medium">{phase.name}</span>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${phase.progress}%` }}
                  />
                </div>
                {phase.progress === 100 && (
                  <Badge variant="success" className="text-xs">Done</Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Decision checkpoints</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Decision milestones appear here. Create decisions from the Decision Log and link them to phases.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
