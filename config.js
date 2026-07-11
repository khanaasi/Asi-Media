// Asi Media - Supabase Database Configurations
window.SUPABASE_URL = "https://kvdfdflygyssnldvahzv.supabase.co";
window.SUPABASE_PUBLISHABLE_KEY = "sb_publishable_CrFqmZHxB__p9akDmKoaIQ_T0Lm9VnX";

// Public Client (Sirf read karne ke liye - Index.html ke liye)
window.supabasePublic = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_PUBLISHABLE_KEY);
