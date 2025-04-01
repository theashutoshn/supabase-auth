// Import Supabase client properly



const supabaseUrl = 'https://jfsxeinyjeebbwxzuloc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmc3hlaW55amVlYmJ3eHp1bG9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1MDk0MzksImV4cCI6MjA1OTA4NTQzOX0.BO3fc9Ujz8ZpvQMgLhY9yt7tpshftDZ9Ervi0kqWZRI';

// Create the Supabase client correctly
const supabase = createClient(supabaseUrl, supabaseAnonKey);

supabase.auth.getUser().then(({ data, error }) => {
    if (error || !data.user) {
        window.location.href = 'index.html';
    }
});

document.getElementById('logout-btn').addEventListener('click', async () => {
    await supabase.auth.signOut();
    window.location.href = 'login.html';
});