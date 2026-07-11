// Asi Media - Supabase Database Configurations
// Jab ek DB full ho jaye toh aap doosra add kar sakte hain, abhi ACTIVE_DB_INDEX 0 hai
const SUPABASE_CONFIGS = [
    {
        // Aapka Old/Current Supabase Account
        url: "https://kvdfdflygyssnldvahzv.supabase.co", 
        key: "sb_publishable_7MW440PYXtbHbJpAq1v-OQ__1KZvK4R"               
    }
    // Future ke liye jab yeh full ho jaye, tab aap niche naya add kar sakte hain:
    // ,{ url: "https://new-project.supabase.co", key: "new-key" } 
];

// Jisme active rakhna hai uska number yaha dalein (0 matlab pehla account, 1 matlab doosra)
const ACTIVE_DB_INDEX = 0; 

// Supabase Initialize 
const supabaseClient = window.supabase.createClient(
    SUPABASE_CONFIGS[ACTIVE_DB_INDEX].url, 
    SUPABASE_CONFIGS[ACTIVE_DB_INDEX].key
);
