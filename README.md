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
- Provider: Email and Google

> ⚠️ This project does not include email confirmation, or password strength validation You're encouraged to extend based on your needs.
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

## **Getting Started**

## **Requirements**

You'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (only for future extensions or serving)
⚠️ No Node.js setup required to run it as static files — just open `login.html` in a browser!

```bash
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher

```


## Installation

```bash
# Clone the repository
git clone https://github.com/theashutoshn/supabase-auth.git

# Move into the directory
cd supabase-auth
```

## Install dependencies

```bash
npm install
```

## Setup Supabase

1. Create a Supabase project
2. Enable **Email Auth Provider** under **Authentication → Providers**
3. Go to **Settings → API** and copy:
    - **Project URL**
    - **Anon public key**
4. Open `supabaseClient.js` and paste:

```jsx
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

## Usage

Make sure this line is added **before all other scripts** (like `login.js`, `dashboard.js`, etc):

```jsx
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="supabaseClient.js"></script>
```

Now you can directly test the user creation, authentication and authorization.

## Notes

- Supabase auto-logs in users from password reset links — no need to handle tokens manually.
- No email confirmation by default. You can enable it from Supabase Auth Settings.
- Add buffer or success message after signup before redirecting to login page.
