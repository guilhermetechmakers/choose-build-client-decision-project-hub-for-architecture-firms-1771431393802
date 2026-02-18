import { CreditCard } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function DashboardBilling() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Billing</h1>
        <p className="mt-1 text-muted-foreground">
          Subscription and payment management.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16">
            <CreditCard className="h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-sm font-medium">No active subscription</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Select a plan and add payment method to get started.
            </p>
            <Button className="mt-4" disabled>
              View plans
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
