supabase.auth.getUser().then(({ data, error }) => {
    if (error || !data.user) {
        window.location.href = 'index.html';
    }
});

document.getElementById('logout-btn').addEventListener('click', async () => {
    await supabase.auth.signOut();
    window.location.href = 'login.html';
});