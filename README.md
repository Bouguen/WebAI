# WebAI — Explore the AI-Generated & Agentic Web

WebAI is an independent, bilingual knowledge portal about the AI-generated, intelligent and agentic Web. Its editorial purpose is to **explain, explore, experiment, monitor and verify** without treating AI-generated drafts as established facts.

## Project status

**Foundation preview, not published.** This repository currently contains a bilingual Astro interface (FR/EN), responsive navigation, accessible theme toggle, topic hubs, a simple client-side discovery filter and a deterministic **RAG simulation**. It does not connect to a model, collect live news or claim the unreviewed Phase III corpus has been published.

All preview pages carry a \`noindex,nofollow\` robots directive. Content publication requires human review. Deployment and merge to \`main\` are separate decisions.

## Development

Node.js 22+ is recommended:

\`\`\`bash
npm install
npm run dev
npm run build
npm run preview
\`\`\`

Static site output: \`dist/\`. Vercel can import the GitHub repository with framework preset **Astro**; no secrets or API keys are required for the starter. **Do not enable a public production deployment before editorial and accessibility review.**

## Main routes

- \`/fr/\`, \`/en/\`: localized home.
- \`/fr/decouvrir/\`, \`/fr/comprendre/\`, \`/fr/explorer/\`, \`/fr/experimenter/\`, \`/fr/apprendre/\`, \`/fr/suivre/\`, \`/fr/verifier/\` and their EN equivalents.
- \`/fr/recherche/\`, \`/en/recherche/\`: preview-only client-side discovery of existing sections.

## Next integrations

1. Import original Phase I–IV reference artifacts in version-controlled, appropriately licensed form.
2. Audit Phase III article and glossary records (currently **à vérifier**); only publish records with editorial approval.
3. Add true content collections, Pagefind indexing of **validated** pages, reciprocal hreflang and sitemap.
4. Test keyboard/screen-reader navigation, responsive layouts, contrast and the RAG simulation.
5. Connect a Vercel preview only after the repository is reviewed.

## Editorial independence

This portal is independent of the W3C's Web & AI initiatives and of the providers discussed. See \`docs/EDITORIAL_POLICY.md\`.

## Licensing

No general license has been assigned yet; reuse requires permission from the copyright holder. Third-party sources and future contributions may have distinct licenses.
