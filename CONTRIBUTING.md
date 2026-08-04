# Contributing to HelpDesk Lite 🤝

First off, thank you for taking the time to contribute! Please follow these guidelines to ensure a smooth collaboration workflow.

---

## 🌿 Branching Strategy

We follow a Git flow structure to keep our codebase clean and organized:

- **`main`**: Production-ready code. Direct pushes are strictly prohibited.
- **`feature/*`**: For adding new features (e.g., `feature/K-15-navbar-logout`).
- **`bugfix/*`**: For fixing issues and bugs (e.g., `bugfix/ticket-status-sync`).
- **`docs/*`**: For updating documentation or writing guides.

---

## 💬 Conventional Commits

Please use clear and standardized commit messages so everyone can track changes easily:

- `feat: add global navbar and logout action`
- `fix: resolve database status check constraint error`
- `docs: add deployment and contribution guidelines`
- `style: format code using prettier`

---

## 🔄 Pull Request Workflow

1. Create a new branch from `main` using the appropriate prefix.
2. Push your changes and open a **Pull Request (PR)** targeting the `main` branch.
3. Link the relevant Jira ticket or issue in your PR description.
4. Request a code review from at least one team member before merging.
