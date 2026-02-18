import { MessageSquare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function DashboardMessages() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Messages</h1>
        <p className="mt-1 text-muted-foreground">
          Contextual threads tied to decisions, files, and tasks.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Threads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16">
            <MessageSquare className="h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-sm font-medium">No threads yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Conversations linked to decisions and files will appear here.
            </p>
            <Button className="mt-4" disabled>
              Start a thread (from a decision or file)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
