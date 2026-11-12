# WebAI — Explore the AI-generated & Agentic Web

Bilingual French/English knowledge portal with an encyclopedia, curated directories, research references, learning pathways and five **working, local-only** laboratory utilities. Built with Astro and static routes.

## Phase V — portal reference prototype

- 7 intent-led navigation hubs + 9 specialized Atlas sections.
- 37 tool and platform entries (official links, price/availability intentionally not asserted).
- 32 primary reference links, including standards and research.
- 52 bilingual glossary entries and 16 introductory encyclopedia topics (individual localized pages).
- 6 audience-specific learning paths and 10 explicitly **illustrative** use-case scenarios.
- Five client-side studio tools: prompt composer, JSON validator/minifier, word/rough-token estimator, WCAG contrast checker, mock agent-approval flow.
- Cross-portal search filtering current pages/resources/tools/glossary entries.
- Light/dark modes, responsive layout, external links labeled, no API keys.

**Important:** This is a curated *first edition* and a prototype, not a claim of exhaustive scientific validation. Phase III's scientific manuscript records and the automated publishing pipeline remain excluded until human editorial review. Introductory explanations link to primary sources. No live AI assistant or RSS feed is claimed.

### Run

```bash
npm install
npm run dev
npm run build
npm run preview
```

Node 22+. Astro output is static in `dist/`. For preview use branch `feat/webai-portal-foundation`; leave `main` unchanged until reviewed. All preview routes have `noindex,nofollow`.

### Editorial model

- Source URLs are primarily original specifications, providers, or papers.
- Pricing and maturity are not asserted without a dated review.
- Sources and educational drafts are separate data types.
- No Phase III `a_verifier` content is published as validated.
- No external scripts, analytics, model APIs, secrets or payments are required.
- WebAI is independent of the W3C Web & AI Interest Group.

See `docs/EDITORIAL_POLICY.md` and `docs/ROADMAP.md` for the review pipeline.
