// Import Supabase client properly



const supabaseUrl = 'https://jfsxeinyjeebbwxzuloc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmc3hlaW55amVlYmJ3eHp1bG9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1MDk0MzksImV4cCI6MjA1OTA4NTQzOX0.BO3fc9Ujz8ZpvQMgLhY9yt7tpshftDZ9Ervi0kqWZRI';

const messageBlock = document.getElementById('message');

// Create the Supabase client correctly
const supabase = createClient(supabaseUrl, supabaseAnonKey);

document.getElementById('login-btn').addEventListener('click', async (e) => {
    e.preventDefault(); // this is imporatnt as it will prevent reloading the page. reloading the page while cancel logging up 
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        displayMessage(error.message);
    } else {
        window.location.href = 'dashboard.html';
    }
});

document.getElementById('signup-btn').addEventListener('click', async (e) => {
    e.preventDefault(); // this is imporatnt as it will prevent reloading the page. reloading the page while cancel signing up 
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
    messageBlock.textContent = msg;
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