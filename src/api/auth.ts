import { api } from '@/lib/api'
import { getSupabase } from '@/lib/supabase'
import type {
  AuthResponse,
  SignInInput,
  SignUpInput,
  InviteTokenInput,
  InviteValidationResult,
} from '@/types/auth'

/** Prefer Edge Function when Supabase is configured; fallback to REST. */
export const authApi = {
  signIn: async (credentials: SignInInput): Promise<AuthResponse> => {
    const supabase = getSupabase()
    if (supabase) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      })
      if (error) throw new Error(error.message)
      const session = data.session
      const user = data.user
      if (!session?.access_token || !user)
        throw new Error('Sign in failed')
      if (credentials.remember_me && session.refresh_token)
        localStorage.setItem('auth_refresh', session.refresh_token)
      localStorage.setItem('auth_token', session.access_token)
      return {
        token: session.access_token,
        refresh_token: session.refresh_token ?? undefined,
        user: {
          id: user.id,
          email: user.email ?? '',
          full_name: user.user_metadata?.full_name,
          avatar_url: user.user_metadata?.avatar_url,
          created_at: user.created_at,
          updated_at: user.updated_at ?? user.created_at,
        },
      }
    }
    const data = await api.post<AuthResponse>('/auth/login', credentials)
    if (data.token) localStorage.setItem('auth_token', data.token)
    return data
  },

  signUp: async (input: SignUpInput): Promise<AuthResponse> => {
    const supabase = getSupabase()
    if (supabase) {
      const { data, error } = await supabase.auth.signUp({
        email: input.email,
        password: input.password,
        options: {
          data: {
            full_name: input.full_name,
            company_name: input.company_name,
            admin_contact: input.admin_contact,
          },
        },
      })
      if (error) throw new Error(error.message)
      const session = data.session
      const user = data.user
      if (!user)
        throw new Error('Sign up failed')
      const token = session?.access_token ?? ''
      if (token) localStorage.setItem('auth_token', token)
      return {
        token,
        refresh_token: session?.refresh_token,
        user: {
          id: user.id,
          email: user.email ?? '',
          full_name: user.user_metadata?.full_name,
          avatar_url: user.user_metadata?.avatar_url,
          created_at: user.created_at,
          updated_at: user.updated_at ?? user.created_at,
        },
      }
    }
    const data = await api.post<AuthResponse>('/auth/register', input)
    if (data.token) localStorage.setItem('auth_token', data.token)
    return data
  },

  signOut: async (): Promise<void> => {
    const supabase = getSupabase()
    if (supabase) await supabase.auth.signOut()
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_refresh')
    localStorage.removeItem('access_token')
  },

  validateInvite: async (
    input: InviteTokenInput
  ): Promise<InviteValidationResult> => {
    const supabase = getSupabase()
    if (supabase) {
      const { data, error } = await supabase.functions.invoke(
        'auth-invite-validate',
        { body: input }
      )
      if (error) throw new Error(error.message)
      return data as InviteValidationResult
    }
    return api.post<InviteValidationResult>('/auth/invite/validate', input)
  },
}
