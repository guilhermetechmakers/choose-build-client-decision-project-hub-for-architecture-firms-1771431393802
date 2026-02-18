import { LayoutTemplate } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function DashboardTemplates() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Templates Library
        </h1>
        <p className="mt-1 text-muted-foreground">
          Reusable project and decision templates.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16">
            <LayoutTemplate className="h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-sm font-medium">No templates yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Create or import templates to speed up project setup.
            </p>
            <Button className="mt-4" disabled>
              Create template
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
