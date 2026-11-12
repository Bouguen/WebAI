# WebAI — Vercel preview verification

This document tracks the initial review deployment. The production branch remains `main`; the implementation under review is `feat/webai-portal-foundation`.

## Project settings

- Vercel project: **webai** (Scolaria workspace).
- Expected Git repository: **Bouguen/WebAI**.
- Framework preset: **Astro** (automatically detected if possible).
- Root directory: repository root (`./`).
- Build command: `npm run build`.
- Output directory: `dist`.
- Install command: `npm install`.
- Production branch: `main`.
- Preview branch: `feat/webai-portal-foundation`.
- No environment variables or AI API keys required for this starter.

## Verify the preview

1. In Vercel, open **webai → Deployments** and filter by `feat/webai-portal-foundation` (Preview).
2. Inspect the preview deployment's Git commit. It should match the latest head of [PR #1](https://github.com/Bouguen/WebAI/pull/1), not the original `main` commit.
3. Visit `/fr/`, `/en/`, `/fr/recherche/`, and `/fr/experimenter/`.
4. Verify navigation, language switch, theme persistence, the local section filter, and the explicitly labeled RAG simulation.
5. Review mobile layout, keyboard support and contrast before approval.

If no preview appears, check **Settings → Git** for the linked repository and whether preview deployments are enabled for branches. A new push to this feature branch can cause Vercel Git integration to re-evaluate the branch. A successful GitHub Actions build does *not* prove a Vercel deployment exists.

**Do not merge or promote this branch to production before explicit validation.**
