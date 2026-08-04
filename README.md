# HelpDesk Lite 🎫

A modern, full-stack ticketing and customer support system built with **Next.js** and **Supabase**, designed for seamless issue tracking and lightning-fast agent management.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router & Server Actions)
- **Database & Authentication:** [Supabase](https://supabase.com/) (PostgreSQL + Row Level Security)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

---

## ✨ Features

- 🔐 **Secure Authentication**
  - User sign-up and login
  - Session management with Supabase Auth

- 🎫 **Ticket Management**
  - Create support tickets
  - View and organize tickets
  - Priority levels:
    - 🟢 Low
    - 🟡 Medium
    - 🔴 High

- 📊 **Agent Dashboard**
  - Server-side rendered dashboard
  - View all active tickets
  - Update ticket status (`open` / `closed`)

- 🧭 **Global Navigation**
  - Shared navigation across all pages
  - Secure logout functionality

- 🛡️ **Row Level Security (RLS)**
  - Protect user data
  - Enforce authorization policies at the database level

---

## 📂 Project Structure

```text
helpdesk-lite/
├── app/
│   ├── dashboard/        # Agent dashboard & Server Actions
│   ├── login/            # Authentication pages
│   ├── layout.tsx        # Global layout with Navbar
│   └── page.tsx          # Ticket creation page
│
├── components/           # Reusable UI components
├── utils/                # Supabase client & server helpers
└── public/               # Static assets
```

---

# 🛠️ Getting Started

## Prerequisites

Make sure you have installed:

- Node.js (v18 or later)
- Git

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/sigmakiko/Helpdesk-Lite.git

cd helpdesk-lite
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

or

```bash
pnpm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 4️⃣ Run the Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

or

```bash
pnpm dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

# 📋 Database Schema

The application uses a single PostgreSQL table named **tickets**.

| Column        | Type        | Description                                 |
| ------------- | ----------- | ------------------------------------------- |
| `id`          | UUID        | Primary key (`gen_random_uuid()`)           |
| `title`       | TEXT        | Short summary of the issue                  |
| `description` | TEXT        | Detailed ticket description                 |
| `priority`    | TEXT        | `low`, `medium`, or `high`                  |
| `status`      | TEXT        | `open` or `closed`                          |
| `user_id`     | UUID        | Foreign key referencing Supabase Auth users |
| `created_at`  | TIMESTAMPTZ | Ticket creation timestamp                   |

---

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome!

If you'd like to improve the project, feel free to fork the repository and submit a pull request.

---

## 📝 License

This project is licensed under the **MIT License**.
