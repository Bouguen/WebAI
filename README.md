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

## Phase V.2 additions

New draft PR #2 adds eight bilingual practical workshops (48 steps), an interactive three-tool comparison, a local evidence worksheet with Markdown export, Pagefind full-text indexing of generated preview pages, a dated methodology page, and a staging-only RSS metadata collector. Both PRs remain separate from production until explicit publication approval.

The scheduled monitoring workflow only activates after its file is merged onto the default GitHub branch. Its output is a manual review artifact, never a public news feed. The original Phase III corpus remains unapproved (initial audit dated 2026-11-12: 212 items awaiting review and rights checks, 0 eligible for release). Test and build success is *technical*, not scientific validation.


## Phase V.3 — Dossiers approfondis et relations documentaires

- 10 dossiers bilingues FR/EN couvrant RAG, agentic Web, MCP, A2A, WebMCP, C2PA, WebGPU, SEO/GEO, sécurité et accessibilité.
- Chacun comporte quatre sections explicatives, quatre étapes, trois questions critiques, des ressources officielles, des notions associées et des outils à explorer.
- Carte thématique filtrable (`/fr/carte/`, `/en/carte/`), sans présenter ses liens comme des relations normatives.
- Tableau des statuts (`/fr/statuts/`, `/en/statuts/`) fondé sur un **instantané daté du 12 novembre 2026**, non actualisé automatiquement.
- La page d'accueil met en valeur les dossiers ; les collections filtrables identifient les sujets approfondis.
- Tous les dossiers restent `a_verifier` avant relecture scientifique/éditoriale. La prévisualisation reste `noindex,nofollow` et `main` demeure inchangée.


## Research Atlas — research expansion (13 November 2026)

This release candidate enriches WebAI's **seven editorial hubs** and the bilingual
encyclopedia without replacing the site's established conceptual boundaries.

- **36 encyclopedia concepts** in French and English; **30 extended dossiers**
  (10 previous + 20 new), each with four substantive explanation sections,
  a four-step investigation workflow, three critical questions and source links.
- **51 tools/platforms**, **49 primary-reference links**, **77 glossary entries**,
  and **20 practical guides** (12 new, with six steps each).
- New coverage: AI discovery and visibility, publisher crawler preferences,
  llms.txt limitations, semantic HTML for agents, MCP and A2A interoperability,
  WebMCP draft status, approval gates and prompt injection, local browser AI,
  WebNN and WebGPU, RAG evaluation, JSON-LD, C2PA, EU AI Act transparency,
  accessibility, environmental trade-offs and critical AI literacy.
- All seven editorial hub pages now contain explanatory source-linked cards and
  guided workflows; article pages have navigable outlines with anchored headings.
- Dossier research date: **2026-11-13**, status: **`a_verifier`**.
  Technical tests check data integrity, URLs syntax, localization and builds;
  **they are not external scientific, legal or copyright review**.
- Source catalogue and methodology: `docs/WEBAI_RESEARCH_2026-11-13.md`.
- The original Phase III manuscript collection remains unpublished.
  `noindex,nofollow` stays enabled, and publication to the default branch
  requires explicit approval.


## English-language experience

- The English edition starts at `/en/`; the French edition stays at `/fr/`.
- A permanent `FR | EN` selector in the header and native-name links in the footer preserve the current route, including its search query.
- Both language editions have their own titles, descriptions, navigation, encyclopaedia dossiers, curated resources, search and interactive workshops.
- Each built page declares its HTML language and FR/EN alternate URLs, so crawlers and assistive technologies can identify the correct language. Preview pages remain `noindex,nofollow`.
- `npm run verify:locales` checks equivalent routes, visible language controls and alternate metadata for each page; it does not replace editorial translation review.
