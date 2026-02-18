import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { authApi } from '@/api/auth'
import type { SignInInput, SignUpInput } from '@/types/auth'
import type { LoginFormValues } from '@/components/login-signup/LoginForm'
import type { SignupCTAFormValues } from '@/components/login-signup/SignupCTA'

const authKeys = { user: ['auth', 'user'] as const }

export function useSignIn() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (credentials: SignInInput) => authApi.signIn(credentials),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authKeys.user })
      toast.success('Signed in successfully')
      navigate('/dashboard')
    },
    onError: (err: Error) => {
      toast.error(err.message || 'Sign in failed')
    },
  })
}

export function useSignUp() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (input: SignUpInput) => authApi.signUp(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authKeys.user })
      toast.success('Account created. Please verify your email to continue.')
      navigate('/verify-email')
    },
    onError: (err: Error) => {
      toast.error(err.message || 'Sign up failed')
    },
  })
}

export function useSignOut() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: () => authApi.signOut(),
    onSuccess: () => {
      queryClient.clear()
      toast.success('Signed out successfully')
      navigate('/login-/-signup')
    },
    onError: (err: Error) => {
      toast.error(err.message || 'Sign out failed')
    },
  })
}

export function useInviteToken() {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (token: string) => authApi.validateInvite({ token }),
    onSuccess: (result) => {
      if (result.valid) {
        toast.success('Invite valid. You can sign up or log in.')
        navigate('/login-/-signup')
      } else {
        toast.error(result.message ?? 'Invalid or expired invite')
      }
    },
    onError: (err: Error) => {
      toast.error(err.message || 'Invalid invite token')
    },
  })
}

/** Map LoginForm values to SignInInput */
export function loginFormToSignIn(values: LoginFormValues): SignInInput {
  return {
    email: values.email,
    password: values.password,
    remember_me: values.remember_me,
  }
}

/** Map SignupCTA form values to start of sign-up (company + admin contact stored in metadata or backend) */
export function signupCTAToSignUpInput(
  values: SignupCTAFormValues,
  email: string,
  password: string,
  full_name?: string
): SignUpInput {
  return {
    email,
    password,
    full_name,
    company_name: values.company_name,
    admin_contact: values.admin_contact,
  }
}
