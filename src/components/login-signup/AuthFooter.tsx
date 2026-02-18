import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface AuthFooterProps {
  className?: string
}

export function AuthFooter({ className }: AuthFooterProps) {
  return (
    <footer
      className={cn(
        'flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-border bg-muted/30 px-4 py-4 text-sm text-muted-foreground',
        className
      )}
    >
      <Link
        to="/terms"
        className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
      >
        Terms
      </Link>
      <Link
        to="/privacy"
        className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
      >
        Privacy
      </Link>
      <Link
        to="/help"
        className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
      >
        Help
      </Link>
    </footer>
  )
}
