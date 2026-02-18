import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ClientInviteFlowLinkProps {
  onTokenSubmit?: (token: string) => void | Promise<void>
  isLoading?: boolean
  className?: string
}

export function ClientInviteFlowLink({
  onTokenSubmit,
  isLoading = false,
  className,
}: ClientInviteFlowLinkProps) {
  const [token, setToken] = useState('')
  const [expanded, setExpanded] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = token.trim()
    if (!trimmed) return
    await onTokenSubmit?.(trimmed)
  }

  return (
    <Card
      className={cn(
        'animate-fade-in-up border-border/80 bg-card/95 transition-all duration-300 hover:shadow-card-hover hover:border-primary/20',
        className
      )}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Have an invite?</CardTitle>
        <CardDescription>
          Enter your invite token or open the link from your email.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!expanded ? (
          <Button
            type="button"
            variant="outline"
            className="w-full transition-all duration-200 hover:scale-[1.02] hover:shadow-card active:scale-[0.98]"
            onClick={() => setExpanded(true)}
          >
            Enter invite token
          </Button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="invite-token">Invite token or paste link</Label>
              <Input
                id="invite-token"
                type="text"
                placeholder="Paste token or invitation link"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                autoComplete="off"
                aria-describedby="invite-token-hint"
              />
              <p id="invite-token-hint" className="text-xs text-muted-foreground">
                Token is in your invitation email or project invite link.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setExpanded(false)}
              >
                Back
              </Button>
              <Button
                type="submit"
                className="flex-1 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                disabled={isLoading || !token.trim()}
              >
                {isLoading ? 'Validating…' : 'Continue'}
              </Button>
            </div>
          </form>
        )}
        <p className="text-center text-sm text-muted-foreground">
          Access via{' '}
          <Link
            to="/login-/-signup"
            className="font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            project invitation
          </Link>{' '}
          or{' '}
          <Link
            to="/login-/-signup"
            className="font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            email invitation
          </Link>
          .
        </p>
      </CardContent>
    </Card>
  )
}
