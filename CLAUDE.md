# Base Project

This is the **canonical base project** for the Antigravity workspace. It contains a curated set of skills, workflows, rules, and agents that serve as the standard foundation for all new projects.

## Purpose

Use this project as the starting point when bootstrapping new projects. All resources here represent the team's standard capabilities and architectural conventions.

## Project Structure

```
.agents/
├── skills/       # Reusable Claude Code skills
├── workflows/    # CI/CD and infrastructure workflows
├── rules/        # Architectural constraints and conventions
└── agents/       # Specialized agent definitions
```

---

## Skills

| Skill | Path | When to Use |
|-------|------|-------------|
| `angular-best-practices` | `.agents/skills/angular-best-practices/` | Angular v17+ performance: Signals, OnPush, @defer, SSR hydration |
| `database-design` | `.agents/skills/database-design/` | Schema design, indexing strategy, ORM selection, migrations |
| `find-skills` | `.agents/skills/find-skills/` | Discover and install skills from the open ecosystem via `npx skills` |
| `github-automation` | `.agents/skills/github-automation/` | Automate GitHub issues, PRs, and repository management |
| `hibernate-mysql-pro` | `.agents/skills/hibernate-mysql-pro/` | Hibernate + MySQL 8 entity mapping, relationships, and performance tuning |
| `java-spring-ddd` | `.agents/skills/java-spring-ddd/` | Java 21 / Spring Boot 3 with 4-layer DDD architecture |
| `programmatic-seo` | `.agents/skills/programmatic-seo/` | SEO at scale using templates and data (12 playbooks) |
| `project-intro` | `.agents/skills/project-intro/` | Auto-generate a live project overview: stack, skills, workflows, rules |
| `project-planner` | `.agents/skills/project-planner/` | Orchestrate project bootstrapping: suggest and install workflows, agents, rules, skills |
| `prompt-generator` | `.agents/skills/prompt-generator/` | Expert prompt engineering via strategic requirement refinement |
| `skill-creator` | `.agents/skills/skill-creator/` | Create new skills within the workspace following standard conventions |

---

## Workflows

| Workflow | Path | Purpose |
|----------|------|---------|
| `maven-github-ci` | `.agents/workflows/maven-github-ci.md` | Java 21 / Spring Boot 3 / Maven build, test, and QA via GitHub Actions |
| `angular-github-ci` | `.agents/workflows/angular-github-ci.md` | Angular 21 lint, build, and optimization via GitHub Actions |
| `docker-compose-infra` | `.agents/workflows/docker-compose-infra.md` | Local development orchestration: Java backend + Angular frontend + MySQL 8 |

---

## Rules

| Rule | Path | Enforces |
|------|------|---------|
| `ddd-layer-rules` | `.agents/rules/ddd-layer-rules.md` | 4-layer DDD architecture: Interface → Application → Domain → Infrastructure. No cross-layer leakage. |

---

## Agents

| Agent | Path | Specialization |
|-------|------|---------------|
| `backend-ddd-lead` | `.agents/agents/backend-ddd-lead/` | Java 21 / Spring Boot 3 / DDD architecture decisions and code reviews |
| `frontend-spa-lead` | `.agents/agents/frontend-spa-lead/` | Angular 21 SPA: components, state, performance, and build optimization |
| `mysql-dba-lead` | `.agents/agents/mysql-dba-lead/` | MySQL 8 schema design, indexing, query optimization, and Hibernate tuning |
| `devops-infra-lead` | `.agents/agents/devops-infra-lead/` | Docker, Docker Compose, GitHub Actions CI/CD pipelines |

---

## Tech Stack

- **Backend:** Java 21 + Spring Boot 3 + Maven + Hibernate
- **Frontend:** Angular 21 + TypeScript strict mode
- **Database:** MySQL 8.0+
- **Infrastructure:** Docker + Docker Compose + GitHub Actions

---

## Using This as a Base

When starting a new project:

1. Reference the relevant skills from `.agents/skills/` by copying or symlinking them into the new project
2. Copy the applicable workflow files from `.agents/workflows/` into the new project's CI/CD configuration
3. Apply `ddd-layer-rules.md` if the project follows DDD architecture
4. Use `project-planner` skill to scaffold the new project structure
5. Use `skill-creator` skill to add any project-specific skills
