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
- If Amirreza asks for a commit message, suggest the message only; do not execute the commit unless Amirreza explicitly and separately instructs you to do so.
- If any existing instruction conflicts with this Git safety policy, this Git safety policy takes precedence.

## Workspace Boundary

- The `sjd/` directory is strictly read-only and must never be modified.
- Never include files from `sjd/` in the `Amirreza/` Git repository.
