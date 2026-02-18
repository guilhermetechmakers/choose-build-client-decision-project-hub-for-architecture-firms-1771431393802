import { Link } from 'react-router-dom'
import { ArrowRight, FileCheck, MessageSquare, LayoutTemplate } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: FileCheck,
    title: 'Decision Log',
    description: 'Structured decision cards with options, cost deltas, and audit-ready approvals.',
  },
  {
    icon: MessageSquare,
    title: 'Contextual Messaging',
    description: 'Threads tied to decisions and drawings—no more scattered email.',
  },
  {
    icon: LayoutTemplate,
    title: 'Templates & Workflows',
    description: 'Reusable project templates to scale delivery and reduce setup time.',
  },
]

export function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Animated gradient hero background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <header className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <span className="text-xl font-semibold text-primary">Choose & Build</span>
          <nav className="flex items-center gap-4">
            <Link
              to="/login-/-signup"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </Link>
            <Button asChild variant="primary" size="sm">
              <Link to="/login-/-signup">Get started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Project management and client decisions,{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                in one place
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
              Reduce scope creep and approval latency with a single source of truth for decisions,
              deliverables, and audit trails—built for architecture firms.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="min-h-[44px]">
                <Link to="/login-/-signup">
                  Start free trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[44px]">
                <Link to="/dashboard">View demo</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-2xl font-semibold sm:text-3xl">
              Built for how you work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              From kickoff to handover—decisions, files, and messages in context.
            </p>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className={cn(
                    'rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02]',
                    'animate-fade-in-up'
                  )}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <feature.icon className="h-10 w-10 text-primary" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Ready to streamline your projects?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join architecture firms using Choose & Build for audit-ready decisions and faster approvals.
            </p>
            <Button asChild size="lg" className="mt-6 min-h-[44px]">
              <Link to="/login-/-signup">Get started</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-sm text-muted-foreground">© Choose & Build</span>
            <nav className="flex gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground">
                Help
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
