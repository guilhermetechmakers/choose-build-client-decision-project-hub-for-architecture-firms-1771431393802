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

export default function LoginSignupPage() {
  const signIn = useSignIn()
  const inviteToken = useInviteToken()

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
    <div className="flex min-h-screen flex-col bg-background">
      <AuthHeader />

      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-8">
          <section className="animate-fade-in-up">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Sign in or create an account</CardTitle>
                <CardDescription>
                  Use email and password, SSO, or an invite link to get started.
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

          <section className="grid gap-6 sm:grid-cols-2">
            <SignupCTA onSubmit={handleSignupCTASubmit} />
            <ClientInviteFlowLink
              onTokenSubmit={handleInviteTokenSubmit}
              isLoading={inviteToken.isPending}
            />
          </section>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              Log in
            </Link>
            {' · '}
            <Link
              to="/signup"
              className="font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              Sign up
            </Link>
            {' · '}
            <Link
              to="/"
              className="font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
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
