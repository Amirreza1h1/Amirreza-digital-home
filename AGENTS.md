## Git Safety Policy

- Never run `git commit`.
- Never run `git push`.
- Never create Git tags or releases.
- Never rewrite Git history.
- Never run `git rebase`, `git reset --hard`, `git commit --amend`, `git push --force`, or similar history-changing commands.
- Never create or delete branches unless Amirreza explicitly requests it.
- Never publish anything to GitHub or another remote unless Amirreza explicitly requests it.
- Git state may be inspected with read-only commands such as:
  - `git status`
  - `git diff`
  - `git log`
  - `git branch`
  - `git remote -v`
- Run `git add` only when Amirreza explicitly asks for files to be staged.
- By default, leave all modified files uncommitted and unstaged after completing work.
- After making code changes, report which files were modified and leave the final commit/push decision to Amirreza.
- After any task that creates, modifies, or deletes project files (including documentation), always include a suggested commit message in the final response, even if Amirreza does not ask for one. Describe only the changes made for that task. Suggesting a message never authorizes staging, committing, or pushing.
- If Amirreza asks for a commit message, suggest the message only; do not execute the commit unless Amirreza explicitly and separately instructs you to do so.
- If any existing instruction conflicts with this Git safety policy, this Git safety policy takes precedence.

## Workspace Boundary

- The `sjd/` directory is strictly read-only and must never be modified.
- Never include files from `sjd/` in the `Amirreza/` Git repository.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
