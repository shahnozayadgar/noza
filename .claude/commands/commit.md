---
name: commit
description: Commit staged or unstaged changes with a conventional commit message matching project conventions
allowed-tools: Bash(git *) Bash(cd backend && ruff *) Bash(cd frontend && npx tsc *) Bash(cd frontend && npx eslint *)
---

Commit changes in the Neoclaw project following Conventional Commits and project lint rules.

## Step 1: Check status and diff

Run in parallel:
- `git status` — see what has changed
- `git diff` — review unstaged changes
- `git diff --cached` — review staged changes

If there is nothing to commit, stop and say so.

## Step 2: Run lint before committing

For any changed **backend** files (`.py`):
```bash
cd backend && ruff check . && mypy app/
```

For any changed **frontend** files (`.ts`, `.tsx`):
```bash
cd frontend && npx tsc --noEmit && npx eslint src/
```

If lint or type-check fails, fix the issues first — do not skip with `--no-verify`.

## Step 3: Stage files

Add only the relevant files by name. Never use `git add -A` or `git add .` blindly — avoid accidentally staging `.env` or unrelated files.

## Step 4: Write the commit message

Format: `<type>(<scope>): <short summary> (#<issue>)`

| Type | Use for |
|------|---------|
| `feat` | New feature |
| `fix` | Bug fix |
| `refactor` | Code change that doesn't fix or add |
| `test` | Adding or updating tests |
| `docs` | Documentation only |
| `chore` | Build, CI, dependency updates |

- Summary: imperative mood, lowercase start, no period, max 72 chars
- Include `(#<issue-number>)` at the end if this branch has one (parse from `git rev-parse --abbrev-ref HEAD`)
- Omit scope if the change is truly cross-cutting

Examples:
```
feat(scoring): add confidence threshold validation (#42)
fix(pipeline): propagate abort signal to nested subagents (#58)
refactor(export): extract PDF layout into separate module (#63)
test(scorer): add contract tests for edge-case outputs (#71)
```

## Step 5: Commit

```bash
git commit -m "$(cat <<'EOF'
<message here>
EOF
)"
```

## Step 6: Confirm and offer to push

Show `git log -1 --oneline` and ask (AskUserQuestion) whether to push to origin:
- "Yes, push now" → `git push`
- "No, keep it local"
