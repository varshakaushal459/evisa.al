/**
 * Supabase – Auth (admin login) + Database (records), har device par same data.
 *
 * Setup:
 * 1. https://supabase.com → New project banao
 * 2. Project Settings → API: Project URL aur anon public key copy karo
 * 3. SQL Editor mein evisa_records table + RLS ke liye niche wala SQL chalao (supabase-schema.sql)
 * 4. Authentication → Users → Add user (email + password) – yahi admin login hoga
 * 5. Yahan url aur anonKey paste karo. Khali = sirf is device (localStorage), auth = admin-config
 */
window.EvisaSupabaseConfig = {
  url: '',
  anonKey: ''
};
