// Asi Media - Supabase Database Configurations
const SUPABASE_URL = "https://kvdfdflygyssnldvahzv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_CrFqmZHxB__p9akDmKoaIQ_T0Lm9VnX";

// Public Client (Sirf read karne ke liye)
const supabasePublic = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Note: Admin Secret Key code me nahi hai. First time Admin Panel me login karte waqt add karni hogi.
