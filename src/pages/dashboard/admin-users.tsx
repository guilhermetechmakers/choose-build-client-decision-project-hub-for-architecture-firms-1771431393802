import { Link } from 'react-router-dom'
import { ArrowLeft, UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function AdminUsers() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/dashboard/admin">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            User management
          </h1>
          <p className="mt-1 text-muted-foreground">
            Invite users and assign roles.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Users</CardTitle>
          <Button disabled>
            <UserPlus className="mr-2 h-4 w-4" />
            Invite user
          </Button>
        </CardHeader>
        <CardContent>
          <Input placeholder="Search users..." className="max-w-sm mb-4" />
          <p className="text-sm text-muted-foreground">
            User table with role definitions and bulk actions will appear here.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
