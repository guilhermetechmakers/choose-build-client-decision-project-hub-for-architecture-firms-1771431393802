import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface AuthHeaderProps {
  className?: string
}

export function AuthHeader({ className }: AuthHeaderProps) {
  return (
    <header
      className={cn(
        'flex items-center justify-between border-b border-border bg-card/80 px-4 py-3 backdrop-blur-sm sm:px-6',
        className
      )}
    >
      <Link
        to="/"
        className="flex items-center gap-2 text-xl font-semibold transition-all duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
        aria-label="Choose & Build - Home"
      >
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Choose & Build
        </span>
      </Link>
      <Link
        to="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
      >
        Landing Page
      </Link>
    </header>
  )
}
