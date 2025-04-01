# Supabase Auth Starter (HTML + JS)
A simple and customizable user authentication and authorization system using [Supabase](https://supabase.com/).
Built with plain HTML, CSS, and JavaScript — perfect for quickly bootstrapping authentication in any web project.

## Features
- Login / Signup
- Forget Password + Reset Password
- Update Password Flow
- Protected Dashboard (for logged-in users only)
- No frontend frameworks — easy to plug into any project
- Built using **Supabase** Auth

> ⚠️ This project does not include email confirmation, password strength validation, or social logins by default. You're encouraged to extend based on your needs.
>

## File Structure
```
supabase-auth/
├── index.html (login)
├── dashboard.html (protected page after login)
├── forgetpass.html (enter email to reset password)
├── reset-password.html (enter new password)
├── style.css
├── login.js
├── dashboard.js
├── supabaseClient.js  # centralized Supabase init file
```
