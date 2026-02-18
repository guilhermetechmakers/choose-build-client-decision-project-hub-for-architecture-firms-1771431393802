-- Login/signup session and onboarding state (safe name for login_/_signup).
-- Run with: supabase db push or supabase migration up

CREATE TABLE IF NOT EXISTS login_signup (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE login_signup ENABLE ROW LEVEL SECURITY;

CREATE POLICY "login_signup_read_own" ON login_signup
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "login_signup_insert_own" ON login_signup
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "login_signup_update_own" ON login_signup
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "login_signup_delete_own" ON login_signup
  FOR DELETE USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_login_signup_user_id ON login_signup(user_id);
CREATE INDEX IF NOT EXISTS idx_login_signup_status ON login_signup(status);
