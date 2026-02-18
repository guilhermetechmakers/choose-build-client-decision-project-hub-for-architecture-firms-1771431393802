import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  AuthHeader,
  AuthFooter,
  LoginForm,
  SSOButtons,
  SignupCTA,
  ClientInviteFlowLink,
} from '@/components/login-signup'
import {
  useSignIn,
  useInviteToken,
  loginFormToSignIn,
} from '@/hooks/useAuth'
import type { LoginFormValues } from '@/components/login-signup/LoginForm'
import type { SignupCTAFormValues } from '@/components/login-signup/SignupCTA'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { toast } from 'sonner'

const PAGE_TITLE = 'Sign in or sign up | Choose & Build'
const PAGE_DESCRIPTION =
  'Sign in with email, SSO, or use an invite link. Start your firm sign-up for architecture project management.'

export default function LoginSignupPage() {
  const signIn = useSignIn()
  const inviteToken = useInviteToken()

  useEffect(() => {
    document.title = PAGE_TITLE
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', PAGE_DESCRIPTION)
    return () => {
      document.title = 'Choose & Build'
    }
  }, [])

  const handleLoginSubmit = async (data: LoginFormValues) => {
    await signIn.mutateAsync(loginFormToSignIn(data))
  }

  const handleSSOGoogle = () => {
    toast.info('Google SSO will be configured with your identity provider.')
  }

  const handleSSOMicrosoft = () => {
    toast.info('Microsoft SSO will be configured with your identity provider.')
  }

  const handleSSOSAML = () => {
    toast.info('SAML (enterprise) will be configured by your admin.')
  }

  const handleSignupCTASubmit = async (_data: SignupCTAFormValues) => {
    toast.success(
      'Request received. We will contact the admin to complete firm sign-up.'
    )
  }

  const handleInviteTokenSubmit = async (token: string) => {
    await inviteToken.mutateAsync(token)
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-1/4 left-1/4 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <AuthHeader />

      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Hero heading */}
          <div className="mb-8 text-center animate-fade-in-up">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Sign in or{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                create an account
              </span>
            </h1>
            <p className="mt-3 text-muted-foreground sm:text-lg">
              Use email and password, SSO, or an invite link to get started.
            </p>
          </div>

          {/* Bento-style grid: main login card + side cards */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Primary login card - larger */}
            <section
              className="animate-fade-in-up lg:col-span-7"
              style={{ animationDelay: '50ms' }}
            >
              <Card className="h-full border-border/80 bg-card/95 shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Sign in</CardTitle>
                  <CardDescription>
                    Use your email and password to sign in.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <LoginForm
                    onSubmit={handleLoginSubmit}
                    isSubmitting={signIn.isPending}
                  />
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-card px-2 text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <SSOButtons
                    onGoogle={handleSSOGoogle}
                    onMicrosoft={handleSSOMicrosoft}
                    onSAML={handleSSOSAML}
                    disabled={signIn.isPending}
                  />
                </CardContent>
              </Card>
            </section>

            {/* Right column: Signup CTA + Invite */}
            <div
              className="flex flex-col gap-6 lg:col-span-5"
              style={{ animationDelay: '100ms' }}
            >
              <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <SignupCTA onSubmit={handleSignupCTASubmit} />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <ClientInviteFlowLink
                  onTokenSubmit={handleInviteTokenSubmit}
                  isLoading={inviteToken.isPending}
                />
              </div>
            </div>
          </div>

          {/* Secondary links */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-primary hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Log in
            </Link>
            {' · '}
            <Link
              to="/signup"
              className="font-medium text-primary hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Sign up
            </Link>
            {' · '}
            <Link
              to="/"
              className="font-medium text-primary hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Back to home
            </Link>
          </p>
        </div>
      </main>

      <AuthFooter />
    </div>
  )
}
