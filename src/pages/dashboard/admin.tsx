import { Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function DashboardAdmin() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Admin</h1>
        <p className="mt-1 text-muted-foreground">
          Firm-level controls: users, templates, billing, audit logs.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="transition-shadow hover:shadow-card-hover">
          <CardHeader>
            <Users className="h-10 w-10 text-primary" />
            <CardTitle>User management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Invite users and manage roles.
            </p>
            <Button asChild className="mt-4">
              <Link to="/dashboard/admin/users">Manage users</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="transition-shadow hover:shadow-card-hover">
          <CardHeader>
            <CardTitle>Audit logs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              View firm-wide audit trail.
            </p>
            <Button variant="outline" className="mt-4" disabled>
              View logs
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
