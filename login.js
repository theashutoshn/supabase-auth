// Import Supabase client properly
const supabaseUrl = 'https://uhfnuwjbqszsjtechohf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoZm51d2picXN6c2p0ZWNob2hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MTU2NTUsImV4cCI6MjA1ODk5MTY1NX0.81zmgnLIKslCnU1VmAEaXPVgG11g4_E7kxI50m5TL8Y';

// Create the Supabase client correctly
const supabase = createClient(supabaseUrl, supabaseAnonKey);

document.getElementById('login-btn').addEventListener('click', async () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        displayMessage(error.message);
    } else {
        window.location.href = 'dashboard.html';
    }
});

document.getElementById('signup-btn').addEventListener('click', async () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
        displayMessage(error.message);
    } else {
        displayMessage('Signup successful!');
    }
});

function displayMessage(msg) {
    document.getElementById('message').textContent = msg;
}

function toggleForm() {
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    const questionLogin = document.querySelector('.login');
    const questionSignup = document.querySelector('.signup');

    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';

    questionLogin.style.display = questionLogin.style.display === 'none' ? 'block' : 'none';
    questionSignup.style.display = questionSignup.style.display === 'none' ? 'block' : 'none';
}