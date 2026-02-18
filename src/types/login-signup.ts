/**
 * Types for login/signup session and onboarding state.
 * Maps to DB table login_signup (safe name for login_/_signup).
 */
export interface LoginSignup {
  id: string
  user_id: string
  title: string
  description?: string
  status: string
  created_at: string
  updated_at: string
}

export interface CreateLoginSignupInput {
  user_id: string
  title: string
  description?: string
  status?: string
}

export interface UpdateLoginSignupInput {
  title?: string
  description?: string
  status?: string
}
