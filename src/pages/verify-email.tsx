import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail } from 'lucide-react'

export function VerifyEmail() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 block text-center text-xl font-semibold text-primary">
          Choose & Build
        </Link>
        <Card className="shadow-card">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-center text-2xl">Verify your email</CardTitle>
            <CardDescription className="text-center">
              We sent a verification link. Check your inbox and click the link to confirm your email.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button asChild className="w-full">
              <Link to="/dashboard">Go to dashboard</Link>
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Didn&apos;t receive the email?{' '}
              <Link to="/login" className="text-primary hover:underline">
                Resend
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
