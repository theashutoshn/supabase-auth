const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const resetBtn = document.getElementById('reset-btn');
const confirmPassBtn = document.getElementById('confirmPass-btn');
const messageBlock = document.getElementById('message');
const google = document.getElementById('google-login');

if (loginBtn) {

    loginBtn.addEventListener('click', async (e) => {
        e.preventDefault(); // this is imporatnt as it will prevent reloading the page. reloading the page while cancel logging up 
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            displayMessage(error.message);
        } else {
            window.location.href = 'dashboard.html'; // define file/page path you need once user is successfully logged in
        }
    });
}

if (signupBtn) {

    signupBtn.addEventListener('click', async (e) => {
        e.preventDefault(); // this is imporatnt as it will prevent reloading the page. reloading the page while cancel signing up 
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) {
            displayMessage(error.message);
        } else {
            displayMessage('Signup successful!');
            window.location.href = '/login.html'; //  once user is successfully signed up, redriects to login page
        }
    });
}

if (resetBtn) {

    resetBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const email = document.getElementById('reset-email').value;

        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'http://127.0.0.1:5500/reset-password.html',
        });
        if (error) {
            displayMessage(error.message);
        } else {
            displayMessage('Password reset link sent!');
        }
    });
}

if (confirmPassBtn) {

    resetBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const email = document.getElementById('confirmPass-btn').value;

        const { data, error } = await supabase.auth.updateUser({
            email: email
        });
        if (error) {
            displayMessage(error.message);
        } else {
            displayMessage('New password set!');
        }
    });
}

if (google) {
    google.addEventListener('click', async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://127.0.0.1:5500/dashboard.html'
            }
        })
        if (error) {
            console.error('Error signing in with Google:', error.message);
        }

    })
}


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