import { Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function DashboardMeetings() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Meetings & Agendas
          </h1>
          <p className="mt-1 text-muted-foreground">
            Schedule meetings and capture agendas, minutes, and action items.
          </p>
        </div>
        <Button disabled>New meeting</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16">
            <Calendar className="h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-sm font-medium">No meetings scheduled</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Create a meeting to add agendas and export minutes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
