import { Link } from 'react-router-dom'
import { HelpCircle, BookOpen, Mail } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Help() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-xl font-semibold text-primary">
            Choose & Build
          </Link>
          <nav className="flex gap-4">
            <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground">
              Log in
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <HelpCircle className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-3xl font-bold">Help & Support</h1>
          <p className="mt-2 text-muted-foreground">
            FAQs, guides, and contact.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <BookOpen className="h-10 w-10 text-primary" />
              <CardTitle>Guides & FAQs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Onboarding guides and walkthroughs. Release notes and documentation.
              </p>
              <Button variant="outline" className="mt-4" disabled>
                View guides
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Mail className="h-10 w-10 text-primary" />
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Support request" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows={4}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Describe your issue…"
                  />
                </div>
                <Button type="submit" disabled>Send</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
