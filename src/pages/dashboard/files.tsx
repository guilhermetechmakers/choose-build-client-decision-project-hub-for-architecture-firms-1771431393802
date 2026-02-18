import { FileText, Upload } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function DashboardFiles() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Files & Drawings
          </h1>
          <p className="mt-1 text-muted-foreground">
            Manage project assets with versions and access control.
          </p>
        </div>
        <Button disabled>
          <Upload className="mr-2 h-4 w-4" />
          Upload
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Folder browser</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16">
            <FileText className="h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-sm font-medium">No files yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Upload drawings and link them to decisions.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
