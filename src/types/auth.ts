export interface AuthResponse {
  token: string
  refresh_token?: string
  user: AuthUser
}

export interface AuthUser {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface SignInInput {
  email: string
  password: string
  remember_me?: boolean
}

export interface SignUpInput {
  email: string
  password: string
  full_name?: string
  company_name?: string
  admin_contact?: string
}

export interface InviteTokenInput {
  token: string
}

export interface InviteValidationResult {
  valid: boolean
  email?: string
  project_id?: string
  firm_id?: string
  message?: string
}
