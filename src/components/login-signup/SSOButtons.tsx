import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Shield, Globe, Building2 } from 'lucide-react'

interface SSOButtonsProps {
  onGoogle?: () => void
  onMicrosoft?: () => void
  onSAML?: () => void
  disabled?: boolean
  className?: string
}

const ssoButtonClass =
  'transition-all duration-200 hover:scale-[1.02] hover:shadow-card active:scale-[0.98] min-h-[44px]'

export function SSOButtons({
  onGoogle,
  onMicrosoft,
  onSAML,
  disabled = false,
  className,
}: SSOButtonsProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <Button
          type="button"
          variant="outline"
          className={ssoButtonClass}
          onClick={onGoogle}
          disabled={disabled}
          aria-label="Sign in with Google"
        >
          <Globe className="mr-2 h-4 w-4" aria-hidden />
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          className={ssoButtonClass}
          onClick={onMicrosoft}
          disabled={disabled}
          aria-label="Sign in with Microsoft"
        >
          <Building2 className="mr-2 h-4 w-4" aria-hidden />
          Microsoft
        </Button>
        <Button
          type="button"
          variant="outline"
          className={ssoButtonClass}
          onClick={onSAML}
          disabled={disabled}
          aria-label="Sign in with SAML (enterprise)"
        >
          <Shield className="mr-2 h-4 w-4" aria-hidden />
          SAML (enterprise)
        </Button>
      </div>
    </div>
  )
}
