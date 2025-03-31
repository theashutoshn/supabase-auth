// Import Supabase client properly
const supabaseUrl = 'https://uhfnuwjbqszsjtechohf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoZm51d2picXN6c2p0ZWNob2hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MTU2NTUsImV4cCI6MjA1ODk5MTY1NX0.81zmgnLIKslCnU1VmAEaXPVgG11g4_E7kxI50m5TL8Y';

// Create the Supabase client correctly
const supabase = createClient(supabaseUrl, supabaseAnonKey);

supabase.auth.getUser().then(({ data, error }) => {
    if (error || !data.user) {
        window.location.href = 'index.html';
    }
});

document.getElementById('logout-btn').addEventListener('click', async () => {
    await supabase.auth.signOut();
    window.location.href = 'index.html';
});