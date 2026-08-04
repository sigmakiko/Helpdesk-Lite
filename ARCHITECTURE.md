# System Architecture & Server Actions 📐

This document outlines the core architectural patterns, data flow, and server actions implemented in HelpDesk Lite.

---

## 📂 Core Architecture Overview

HelpDesk Lite utilizes the **Next.js App Router** paradigm, leveraging **Server Actions** for secure mutations and **Server Components** for fast initial data fetching.

```text
app/
├── dashboard/
│   ├── page.tsx          # Server Component: Fetches tickets & renders UI
│   └── actions.ts        # Server Actions: Handles database mutations
├── login/
│   └── actions.ts        # Server Actions: Handles user authentication & session
└── layout.tsx            # Global Layout wrapping shared Navbar component



⚡ Server Actions Reference
1. Update Ticket Status

    File: app/dashboard/actions.ts

    Function: updateTicketStatus(ticketId: string, currentStatus: string)

    Description: Toggles a ticket's status between open and closed inside the Supabase tickets table, validates the action, and triggers revalidatePath("/dashboard") to clear the cache instantly.

2. User Authentication & Logout

    File: app/login/actions.ts

    Function: logout()

    Description: Calls Supabase Auth signOut(), terminates the current session cookie, and redirects the user safely back to /login.
```
