import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SSOButtonsProps {
  onGoogle?: () => void
  onMicrosoft?: () => void
  onSAML?: () => void
  disabled?: boolean
  className?: string
}

export function SSOButtons({
  onGoogle,
  onMicrosoft,
  onSAML,
  disabled = false,
  className,
}: SSOButtonsProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <p className="text-xs text-center text-muted-foreground">
        Or continue with
      </p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <Button
          type="button"
          variant="outline"
          className="transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          onClick={onGoogle}
          disabled={disabled}
          aria-label="Sign in with Google"
        >
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          className="transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          onClick={onMicrosoft}
          disabled={disabled}
          aria-label="Sign in with Microsoft"
        >
          Microsoft
        </Button>
        <Button
          type="button"
          variant="outline"
          className="transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          onClick={onSAML}
          disabled={disabled}
          aria-label="Sign in with SAML (enterprise)"
        >
          SAML (enterprise)
        </Button>
      </div>
    </div>
  )
}
