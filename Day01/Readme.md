## Installed Extensions

Below are the extensions installed:

- **Prettier - Code formatter** (`esbenp.prettier-vscode`) by Esben Petersen
- **Live Server** (`ritwickdey.LiveServer`) by Ritwick Dey
- **ESLint** (`dbaeumer.vscode-eslint`) by Microsoft

To install these extensions, run the following commands:

In Command Line (Ctrl + `)
```bash
code --install-extension esbenp.prettier-vscode
code --install-extension ritwickdey.LiveServer
code --install-extension dbaeumer.vscode-eslint
```

---

# Commit Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages. This convention provides a set of rules for writing clear, consistent commit messages that help with versioning, changelogs, and automation.

### Commit Message Structure

A commit message consists of a **type**, an optional **scope**, and a **description**:


- **type**: Describes the kind of change.
  - `feat`: A new feature.
  - `fix`: A bug fix.
  - `docs`: Documentation only changes.
  - `style`: Code style changes (formatting, missing semi colons, etc.).
  - `refactor`: Code changes that neither fix a bug nor add a feature.
  - `perf`: Performance improvements.
  - `test`: Adding or updating tests.
  - `chore`: Routine tasks (e.g., updates to build scripts, dependencies).

- **scope** (optional): A noun describing the area of the codebase being affected (e.g., `auth`, `core`, `ui`).

- **description**: A short, concise explanation of the change.

### Examples

- `feat(auth): add JWT authentication`
- `fix(ui): resolve button alignment issue`
- `docs(readme): update commit convention section`

By adhering to this convention, we ensure that our commit history remains organized, meaningful, and easy to navigate.