// Supabase Edge Function: validate invite token (server-side only).
// Invoke from client: supabase.functions.invoke('auth-invite-validate', { body: { token } })

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { token } = (await req.json()) as { token?: string }
    if (!token || typeof token !== 'string') {
      return new Response(
        JSON.stringify({
          valid: false,
          message: 'Token is required',
        }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // Server-side validation: check invite in DB or external service.
    // Placeholder: accept non-empty token for demo; replace with real lookup.
    const valid = token.length >= 8
    return new Response(
      JSON.stringify({
        valid,
        email: valid ? undefined : undefined,
        project_id: valid ? undefined : undefined,
        firm_id: valid ? undefined : undefined,
        message: valid ? undefined : 'Invalid or expired invite token',
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch {
    return new Response(
      JSON.stringify({ valid: false, message: 'Validation failed' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
