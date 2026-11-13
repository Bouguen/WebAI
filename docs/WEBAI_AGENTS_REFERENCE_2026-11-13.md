# WebAI — Répertoire des agents IA

**Date de préparation documentaire :** 13 novembre 2026  
**Statut :** préversion en cours de relecture humaine, `a_verifier`  
**Portail :** WebAI — Web généré par et pour l’IA  
**Routes :** `/fr/agents/` et `/en/agents/` ; 44 fiches individuelles bilingues

## Pourquoi une rubrique autonome ?

Un agent IA se distingue d'un modèle de génération de texte et d'une automatisation classique par sa capacité à organiser des étapes, à utiliser des outils et à adapter son comportement à l'état d'une tâche. Les mécanismes précis dépendent des produits et des permissions disponibles. Un « assistant » commercial n'est pas nécessairement agentique dans tous ses modes.

Cette distinction est étayée notamment par la [documentation GitHub sur les agents](https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents) et la [présentation de l'Agents SDK](https://openai.github.io/openai-agents-python/). Une application peut mélanger conversation, recherche, exécution de code, navigation et orchestration ; WebAI ne doit pas attribuer ces fonctions à un produit si leur disponibilité n'est pas confirmée dans sa documentation courante.

Le répertoire sépare donc :

1. **12 agents et produits prêts à utiliser** — solutions d'assistance au travail, au développement, à la navigation et à la création.
2. **10 frameworks et plateformes de création** — SDK, moteurs de workflows, bibliothèques et plateformes nécessitant conception, configuration ou intégration avant de fonctionner comme agent spécialisé.

Les produits ne sont ni ordonnés par score ni recommandés contre rémunération. Leur présence ne vaut pas certification, comparaison indépendante de performance ou partenariat.

## Agents et produits directement utilisables

| Produit | Domaine | Référence |
|---|---|---|
| ChatGPT Work | Travail et livrables | https://openai.com/index/chatgpt-for-your-most-ambitious-work/ |
| ChatGPT Atlas Agent | Navigation Web | https://help.openai.com/en/articles/12628199 |
| OpenAI Codex | Développement | https://developers.openai.com/learn/codex |
| Claude Code | Développement | https://code.claude.com/docs/en/overview |
| GitHub Copilot Agents | Développement et GitHub | https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents |
| Cursor Agent | Développement en IDE | https://docs.cursor.com/en/agent/overview |
| Jules | Développement et GitHub | https://jules.google/docs/ |
| Gemini CLI | Interface terminal | https://github.com/google-gemini/gemini-cli |
| OpenHands | Agents de développement | https://github.com/OpenHands/OpenHands |
| Cline | Développement en IDE | https://docs.cline.bot/ |
| Aider | Développement terminal | https://aider.chat/docs/ |
| Manus | Recherche et production de livrables | https://www.manus.im/features |

**Attention à l'obsolescence des noms :** l'ancien « ChatGPT agent mode » et Operator sont documentés dans des sources historiques, mais le centre d'aide actuel signale une évolution vers ChatGPT Work et d'autres expériences. Le catalogue présente les produits actuels nommés dans les documentations consultées, non un ancien service présenté à tort comme encore disponible.

## Frameworks et plateformes de construction

| Projet | Nature | Référence |
|---|---|---|
| Browser Use | Bibliothèque d'agents navigateur | https://docs.browser-use.com/ |
| LangGraph | Orchestration avec état | https://docs.langchain.com/oss/python/langgraph/overview |
| CrewAI | Agents collaboratifs et flows | https://docs.crewai.com/ |
| OpenAI Agents SDK | Agents, outils, garde-fous et transfert | https://openai.github.io/openai-agents-python/ |
| Google ADK | Développement de systèmes agentiques | https://google.github.io/adk-docs/ |
| Mastra | Agent framework TypeScript | https://mastra.ai/docs |
| PydanticAI | Agent Python et validation structurée | https://ai.pydantic.dev/ |
| n8n AI Agent | Nœud de workflows visuels | https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/ |
| Dify | Workflow et application IA | https://docs.dify.ai/ |
| Flowise | Construction visuelle de flows et agents | https://docs.flowiseai.com/ |

## Contenu de chaque fiche

Chaque dossier individuel présente, en français et en anglais : nature et fournisseur, domaine, description documentée, cas d'usage, consigne de démarrage, quatre étapes d'essai, limites et risques, trois sources (site, documentation, lecture transversale sur la sécurité), liens vers les agents apparentés et les standards correspondants.

Le catalogue peut être filtré par produit ou framework, puis par domaine. Une recherche textuelle locale n'envoie pas les requêtes à un fournisseur de modèles. Le comparateur permet de sélectionner jusqu'à trois produits et d'examiner nature, domaine, environnement et cas d'usage dans une même interface. Cette comparaison est éditoriale, non une mesure de performance.

## Gouvernance et sécurité

Une tâche d'agent doit être décomposée en actions **autorisées** et contrôlables. Même si un protocole expose un outil, il n'accorde pas implicitement le droit de l'invoquer.

- Les pages Web, documents récupérés et sorties de modèles sont des données potentiellement non fiables. Voir https://genai.owasp.org/llmrisk/llm01-prompt-injection/
- Les opérations d'envoi, publication, achat, suppression et accès à des données privées doivent être limitées et confirmées explicitement.
- Les résultats d'un agent doivent être vérifiés dans l'environnement concerné, pas seulement dans sa déclaration de succès.
- Les coûts dépendent des versions, abonnements, APIs, crédits et hébergements. Ne pas indiquer de prix non vérifié comme stable.
- Le statut « open source », la gratuité d'une bibliothèque et le coût des modèles connectés doivent être considérés séparément.
- Les fiches ont un statut `a_verifier` : leur présence n'est pas un test de compatibilité, une promesse de confidentialité ni un examen de licence.

## Évolution et contrôle qualité

- Compléter ou corriger les fiches à partir des documentations officielles actualisées.
- Vérifier périodiquement disponibilité, versions, changements de nom, liens et modes d'accès.
- Évaluer des scénarios reproductibles avec environnements, objectifs, erreurs, confirmation et mesure des coûts, sans présenter des résultats inventés.
- Conserver les pages FR/EN alignées et les noms des solutions non traduits.
- Ajouter ultérieurement des exemples publics de comparaison réellement exécutés et datés.

## Intégration dans l'architecture WebAI

La rubrique « Agents IA » devient un accès du menu principal, entre **Standards** et **AI Tools**. Pour conserver huit éléments facilement visibles, « Observatoire » passe dans le menu secondaire (les pages existantes restent disponibles). La page d'accueil met en avant les 22 fiches. L'encyclopédie, les normes MCP/A2A/WebMCP et le laboratoire restent accessibles par liens internes.

Cette réalisation est une **préversion GitHub/Vercel** ; aucune fusion vers `main` ni publication publique ne doit avoir lieu avant validation explicite.
