/**
 * Supabase client for Auth, DB (with RLS), Realtime, Storage.
 * For server-only logic (LLM, secrets) use Edge Functions and invoke via supabase.functions.invoke().
 */
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let client: SupabaseClient | null = null

export function getSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) return null
  if (client) return client
  client = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  })
  return client
}

export const supabase = typeof window !== 'undefined' ? getSupabase() : null
