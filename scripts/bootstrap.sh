#!/bin/bash
# bootstrap.sh — Copy base-project resources into a target project directory.
#
# Usage:
#   bash bootstrap.sh [target-dir] [--skills] [--workflows] [--rules] [--agents] [--all]
#
# Examples:
#   bash bootstrap.sh ../my-new-project --all
#   bash bootstrap.sh ../my-new-project --skills --workflows
#   bash bootstrap.sh .                  --all

set -e

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGET_DIR="${1:-.}"
shift || true

COPY_SKILLS=false
COPY_WORKFLOWS=false
COPY_RULES=false
COPY_AGENTS=false

if [[ $# -eq 0 ]]; then
  COPY_SKILLS=true
  COPY_WORKFLOWS=true
  COPY_RULES=true
  COPY_AGENTS=true
fi

for arg in "$@"; do
  case $arg in
    --all)       COPY_SKILLS=true; COPY_WORKFLOWS=true; COPY_RULES=true; COPY_AGENTS=true ;;
    --skills)    COPY_SKILLS=true ;;
    --workflows) COPY_WORKFLOWS=true ;;
    --rules)     COPY_RULES=true ;;
    --agents)    COPY_AGENTS=true ;;
  esac
done

echo "Bootstrap base-project → $TARGET_DIR"
echo "Source: $BASE_DIR"
echo "---"

mkdir -p "$TARGET_DIR/.agents"

copy_dir() {
  local src="$BASE_DIR/.agents/$1"
  local dst="$TARGET_DIR/.agents/$1"
  if [ -d "$src" ]; then
    mkdir -p "$dst"
    cp -r "$src"/. "$dst/"
    echo "  ✓ $1 ($(ls "$src" | wc -l | tr -d ' ') items)"
  fi
}

$COPY_SKILLS    && copy_dir "skills"
$COPY_WORKFLOWS && copy_dir "workflows"
$COPY_RULES     && copy_dir "rules"
$COPY_AGENTS    && copy_dir "agents"

# Always copy CONCEPTS.md
cp "$BASE_DIR/.agents/CONCEPTS.md" "$TARGET_DIR/.agents/CONCEPTS.md" 2>/dev/null && echo "  ✓ CONCEPTS.md"

# Copy skills-lock.json if skills were included
if $COPY_SKILLS && [ -f "$BASE_DIR/skills-lock.json" ]; then
  cp "$BASE_DIR/skills-lock.json" "$TARGET_DIR/skills-lock.json"
  echo "  ✓ skills-lock.json"
fi

# Add .gitignore entry for settings.local.json
GITIGNORE="$TARGET_DIR/.gitignore"
if ! grep -q "settings.local.json" "$GITIGNORE" 2>/dev/null; then
  echo ".claude/settings.local.json" >> "$GITIGNORE"
  echo "  ✓ .gitignore updated"
fi

# Initialize CLAUDE.md if missing
CLAUDE_MD="$TARGET_DIR/CLAUDE.md"
if [ ! -f "$CLAUDE_MD" ]; then
  PROJECT_NAME="$(basename "$(cd "$TARGET_DIR" && pwd)")"
  cat > "$CLAUDE_MD" <<EOF
# $PROJECT_NAME

> Bootstrapped from [base-project](https://github.com/ai-with-ai/base-project).

## Resources

- Skills: \`.agents/skills/\`
- Workflows: \`.agents/workflows/\`
- Rules: \`.agents/rules/\`
- Agents: \`.agents/agents/\`
- Concepts reference: \`.agents/CONCEPTS.md\`
EOF
  echo "  ✓ CLAUDE.md created"
else
  echo "  — CLAUDE.md already exists, skipping"
fi

echo ""
echo "Done. Run /project-intro inside Claude Code to see the project overview."
