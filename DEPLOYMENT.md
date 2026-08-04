# Deployment Guide 🚀

Follow these steps to deploy HelpDesk Lite to a production environment (recommended platform: **Vercel**).

---

## 1. Deploying to Vercel

1. Push your repository to your GitHub account.
2. Log in to [Vercel](https://vercel.com/) and click **Add New > Project**.
3. Import your `Helpdesk-Lite` repository.
4. Configure the project settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`

---

## 2. Environment Variables Configuration

In your Vercel project settings, navigate to **Environment Variables** and add your production credentials from Supabase:

| Key                             | Value                                    |
| :------------------------------ | :--------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | Your Supabase Production Project URL     |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase Production Anon/Public Key |

---

## 3. Supabase Production Setup

1. Go to your **Supabase Dashboard > Authentication > URL Configuration**.
2. Update the **Site URL** to your live Vercel deployment domain (e.g., `https://helpdesk-lite.vercel.app`).
3. Add your production redirect URLs under **Redirect URLs** to ensure authentication tokens parse correctly after login/logout.
