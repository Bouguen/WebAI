// WebAI editorial starter collection. All entries are descriptive and must be reviewed for publication.
import {researchTopics} from './researchExpansion.js';
import {researchSources,researchCatalog,researchGlossary} from './researchDirectories.js';
import {enrichTool} from './toolProfiles.js';
import {scienceSources} from './scienceSources.js';
export const atlas = {
  "catalog": [
    {
      "slug": "astro",
      "category": "creation",
      "name": "Astro",
      "desc": {
        "fr": "Framework pour sites riches en contenus, composants et génération statique.",
        "en": "Framework for content-rich sites, components and static generation."
      },
      "url": "https://docs.astro.build/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "pagefind",
      "category": "recherche",
      "name": "Pagefind",
      "desc": {
        "fr": "Moteur de recherche statique avec prise en charge multilingue.",
        "en": "Static search engine with multilingual support."
      },
      "url": "https://pagefind.app/docs/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "transformers-js",
      "category": "local",
      "name": "Transformers.js",
      "desc": {
        "fr": "Exécuter des modèles de machine learning directement en JavaScript.",
        "en": "Run machine-learning models directly in JavaScript."
      },
      "url": "https://huggingface.co/docs/transformers.js/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "webllm",
      "category": "local",
      "name": "WebLLM",
      "desc": {
        "fr": "Exécution locale de modèles de langage dans des navigateurs compatibles.",
        "en": "Local language-model inference in compatible browsers."
      },
      "url": "https://github.com/mlc-ai/web-llm",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "ollama",
      "category": "local",
      "name": "Ollama",
      "desc": {
        "fr": "Environnement pour faire fonctionner des modèles sur un ordinateur.",
        "en": "Environment for running models on a personal computer."
      },
      "url": "https://ollama.com/",
      "kind": "logiciel",
      "audience": "dev"
    },
    {
      "slug": "lmstudio",
      "category": "local",
      "name": "LM Studio",
      "desc": {
        "fr": "Interface pour explorer et exécuter des modèles localement.",
        "en": "Interface to explore and run local models."
      },
      "url": "https://lmstudio.ai/",
      "kind": "logiciel",
      "audience": "creator"
    },
    {
      "slug": "huggingface",
      "category": "modeles",
      "name": "Hugging Face Hub",
      "desc": {
        "fr": "Répertoire de modèles, jeux de données et démonstrations.",
        "en": "Hub for models, datasets and demos."
      },
      "url": "https://huggingface.co/",
      "kind": "plateforme",
      "audience": "research"
    },
    {
      "slug": "diffusers",
      "category": "multimedia",
      "name": "Diffusers",
      "desc": {
        "fr": "Bibliothèque open source de pipelines de génération d'images et de médias.",
        "en": "Open-source library for image and media generation pipelines."
      },
      "url": "https://huggingface.co/docs/diffusers/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "comfyui",
      "category": "multimedia",
      "name": "ComfyUI",
      "desc": {
        "fr": "Interface visuelle de workflows de génération et traitement par modèles.",
        "en": "Visual interface for generative-model workflows."
      },
      "url": "https://github.com/comfyanonymous/ComfyUI",
      "kind": "open-source",
      "audience": "creator"
    },
    {
      "slug": "blender",
      "category": "multimedia",
      "name": "Blender",
      "desc": {
        "fr": "Outil libre de création 3D, pertinent pour les workflows combinés avec l'IA.",
        "en": "Open 3D creation suite for AI-assisted creative workflows."
      },
      "url": "https://www.blender.org/",
      "kind": "open-source",
      "audience": "creator"
    },
    {
      "slug": "threejs",
      "category": "multimedia",
      "name": "Three.js",
      "desc": {
        "fr": "Bibliothèque 3D pour créer des scènes et visualisations Web.",
        "en": "Web 3D library for interactive scenes and visualizations."
      },
      "url": "https://threejs.org/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "react-three-fiber",
      "category": "multimedia",
      "name": "React Three Fiber",
      "desc": {
        "fr": "Rendu 3D déclaratif avec React et Three.js.",
        "en": "Declarative 3D rendering with React and Three.js."
      },
      "url": "https://r3f.docs.pmnd.rs/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "langchain",
      "category": "agents",
      "name": "LangChain",
      "desc": {
        "fr": "Composants pour applications LLM et systèmes utilisant des outils.",
        "en": "Components for LLM applications and tool-using systems."
      },
      "url": "https://docs.langchain.com/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "langgraph",
      "category": "agents",
      "name": "LangGraph",
      "desc": {
        "fr": "Orchestration de workflows et agents à états.",
        "en": "Orchestration of stateful agent workflows."
      },
      "url": "https://docs.langchain.com/oss/javascript/langgraph/overview",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "llamaindex",
      "category": "recherche",
      "name": "LlamaIndex",
      "desc": {
        "fr": "Infrastructure de récupération et d'indexation documentaire pour applications IA.",
        "en": "Retrieval and document indexing for AI applications."
      },
      "url": "https://docs.llamaindex.ai/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "haystack",
      "category": "recherche",
      "name": "Haystack",
      "desc": {
        "fr": "Framework pour la recherche et les pipelines RAG.",
        "en": "Framework for retrieval and RAG pipelines."
      },
      "url": "https://haystack.deepset.ai/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "chromadb",
      "category": "recherche",
      "name": "Chroma",
      "desc": {
        "fr": "Base vectorielle pour prototypage et recherche sémantique.",
        "en": "Vector database for prototypes and semantic search."
      },
      "url": "https://docs.trychroma.com/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "qdrant",
      "category": "recherche",
      "name": "Qdrant",
      "desc": {
        "fr": "Moteur de recherche vectorielle et de similarité.",
        "en": "Vector search and similarity engine."
      },
      "url": "https://qdrant.tech/documentation/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "weaviate",
      "category": "recherche",
      "name": "Weaviate",
      "desc": {
        "fr": "Base de données et recherche vectorielle.",
        "en": "Vector database and search tooling."
      },
      "url": "https://docs.weaviate.io/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "n8n",
      "category": "automatisation",
      "name": "n8n",
      "desc": {
        "fr": "Conception de workflows et automatisations connectant des services.",
        "en": "Workflows and automation across connected services."
      },
      "url": "https://docs.n8n.io/",
      "kind": "source-disponible",
      "audience": "pro"
    },
    {
      "slug": "github-actions",
      "category": "automatisation",
      "name": "GitHub Actions",
      "desc": {
        "fr": "Exécution de tests et automatisations à partir des dépôts Git.",
        "en": "Run tests and automations from Git repositories."
      },
      "url": "https://docs.github.com/en/actions",
      "kind": "plateforme",
      "audience": "dev"
    },
    {
      "slug": "playwright",
      "category": "evaluation",
      "name": "Playwright",
      "desc": {
        "fr": "Automatisation des navigateurs et tests de sites.",
        "en": "Browser automation and website tests."
      },
      "url": "https://playwright.dev/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "lighthouse",
      "category": "evaluation",
      "name": "Lighthouse",
      "desc": {
        "fr": "Audit de performance, accessibilité et bonnes pratiques Web.",
        "en": "Audits for web performance, accessibility and best practices."
      },
      "url": "https://developer.chrome.com/docs/lighthouse/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "axe-core",
      "category": "evaluation",
      "name": "axe-core",
      "desc": {
        "fr": "Moteur d'analyse automatisée de problèmes d'accessibilité.",
        "en": "Automated accessibility-issue analysis engine."
      },
      "url": "https://github.com/dequelabs/axe-core",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "c2patool",
      "category": "confiance",
      "name": "c2patool",
      "desc": {
        "fr": "Outil de ligne de commande pour consulter et travailler avec des métadonnées C2PA.",
        "en": "Command-line tool for inspecting and working with C2PA metadata."
      },
      "url": "https://github.com/contentauth/c2patool",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "openwebui",
      "category": "local",
      "name": "Open WebUI",
      "desc": {
        "fr": "Interface auto-hébergeable pour interagir avec des modèles IA.",
        "en": "Self-hostable interface for interacting with AI models."
      },
      "url": "https://docs.openwebui.com/",
      "kind": "logiciel",
      "audience": "creator"
    },
    {
      "slug": "gradio",
      "category": "creation",
      "name": "Gradio",
      "desc": {
        "fr": "Interface rapide pour démonstrations et outils de machine learning.",
        "en": "Quick interfaces for machine-learning demos and tools."
      },
      "url": "https://www.gradio.app/docs/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "streamlit",
      "category": "creation",
      "name": "Streamlit",
      "desc": {
        "fr": "Création rapide d'applications Web autour de données et modèles.",
        "en": "Rapid web apps around data and models."
      },
      "url": "https://docs.streamlit.io/",
      "kind": "open-source",
      "audience": "pro"
    },
    {
      "slug": "vercel",
      "category": "creation",
      "name": "Vercel",
      "desc": {
        "fr": "Plateforme de déploiement pour projets Web modernes.",
        "en": "Deployment platform for modern web projects."
      },
      "url": "https://vercel.com/docs",
      "kind": "service",
      "audience": "dev"
    },
    {
      "slug": "github",
      "category": "automatisation",
      "name": "GitHub",
      "desc": {
        "fr": "Hébergement de code, collaboration et suivi des changements.",
        "en": "Code hosting, collaboration and change tracking."
      },
      "url": "https://docs.github.com/",
      "kind": "service",
      "audience": "dev"
    },
    {
      "slug": "aider",
      "category": "creation",
      "name": "Aider",
      "desc": {
        "fr": "Assistant de programmation utilisant le dépôt local.",
        "en": "Coding assistant operating on a local repository."
      },
      "url": "https://aider.chat/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "continue",
      "category": "creation",
      "name": "Continue",
      "desc": {
        "fr": "Outils de programmation assistée par IA et intégrations d'IDE.",
        "en": "AI-assisted coding tools and IDE integrations."
      },
      "url": "https://docs.continue.dev/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "mlflow",
      "category": "evaluation",
      "name": "MLflow",
      "desc": {
        "fr": "Suivi des expériences, modèles et évaluations ML.",
        "en": "Tracking of ML experiments, models and evaluations."
      },
      "url": "https://mlflow.org/docs/latest/",
      "kind": "open-source",
      "audience": "research"
    },
    {
      "slug": "promptfoo",
      "category": "evaluation",
      "name": "Promptfoo",
      "desc": {
        "fr": "Évaluation et tests de prompts et applications LLM.",
        "en": "Prompt and LLM-app testing and evaluation."
      },
      "url": "https://www.promptfoo.dev/docs/intro/",
      "kind": "open-source",
      "audience": "dev"
    },
    {
      "slug": "arxiv",
      "category": "recherche",
      "name": "arXiv",
      "desc": {
        "fr": "Archive ouverte de prépublications scientifiques.",
        "en": "Open archive of scientific preprints."
      },
      "url": "https://arxiv.org/",
      "kind": "ressource",
      "audience": "research"
    },
    {
      "slug": "semantic-scholar",
      "category": "recherche",
      "name": "Semantic Scholar",
      "desc": {
        "fr": "Outil de découverte d'articles et de citations scientifiques.",
        "en": "Research paper and citation discovery service."
      },
      "url": "https://www.semanticscholar.org/",
      "kind": "ressource",
      "audience": "research"
    },
    {
      "slug": "crossref",
      "category": "recherche",
      "name": "Crossref",
      "desc": {
        "fr": "Métadonnées et identifiants des publications de recherche.",
        "en": "Scholarly publication metadata and identifiers."
      },
      "url": "https://www.crossref.org/",
      "kind": "ressource",
      "audience": "research"
    }
  ],
  "sources": [
    {
      "name": "W3C Web & AI Interest Group",
      "category": "standards",
      "desc": {
        "fr": "Groupe de réflexion sur l'intersection entre le Web et l'IA.",
        "en": "Forum on the intersection of Web standards and AI."
      },
      "url": "https://www.w3.org/groups/ig/webai/"
    },
    {
      "name": "W3C WebGPU",
      "category": "standards",
      "desc": {
        "fr": "État de la spécification de calcul graphique WebGPU.",
        "en": "Current WebGPU specification and status."
      },
      "url": "https://www.w3.org/TR/webgpu/"
    },
    {
      "name": "W3C WebNN",
      "category": "standards",
      "desc": {
        "fr": "Travaux sur une API d'inférence neurale côté navigateur.",
        "en": "Work on browser-native neural network inference."
      },
      "url": "https://www.w3.org/TR/webnn/"
    },
    {
      "name": "W3C JSON-LD 1.1",
      "category": "standards",
      "desc": {
        "fr": "Format de données liées pour le Web.",
        "en": "Linked-data format for the Web."
      },
      "url": "https://www.w3.org/TR/json-ld11/"
    },
    {
      "name": "W3C WCAG 2.2",
      "category": "standards",
      "desc": {
        "fr": "Exigences pour l'accessibilité des contenus Web.",
        "en": "Web content accessibility guidelines."
      },
      "url": "https://www.w3.org/TR/WCAG22/"
    },
    {
      "name": "WHATWG HTML",
      "category": "standards",
      "desc": {
        "fr": "Standard vivant du langage HTML.",
        "en": "The HTML Living Standard."
      },
      "url": "https://html.spec.whatwg.org/"
    },
    {
      "name": "Model Context Protocol",
      "category": "agents",
      "desc": {
        "fr": "Spécification et documentation du protocole MCP.",
        "en": "Specification and documentation for MCP."
      },
      "url": "https://modelcontextprotocol.io/specification/"
    },
    {
      "name": "Agent2Agent Protocol",
      "category": "agents",
      "desc": {
        "fr": "Spécification des échanges et tâches interagents.",
        "en": "Specification for agent-to-agent messages and tasks."
      },
      "url": "https://a2a-protocol.org/latest/specification/"
    },
    {
      "name": "W3C WebMCP",
      "category": "agents",
      "desc": {
        "fr": "Proposition communautaire pour exposer des outils aux agents Web.",
        "en": "Community proposal for exposing tools to Web agents."
      },
      "url": "https://webmachinelearning.github.io/webmcp/"
    },
    {
      "name": "C2PA Specifications",
      "category": "confiance",
      "desc": {
        "fr": "Spécifications techniques de provenance des médias.",
        "en": "Technical specifications for media provenance."
      },
      "url": "https://spec.c2pa.org/specifications/"
    },
    {
      "name": "NIST AI RMF",
      "category": "confiance",
      "desc": {
        "fr": "Cadre de gestion des risques des systèmes d'IA.",
        "en": "Framework for managing AI system risks."
      },
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    },
    {
      "name": "European AI Act",
      "category": "reglementation",
      "desc": {
        "fr": "Portail officiel du règlement européen sur l'IA.",
        "en": "Official portal for the EU AI Act."
      },
      "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
    },
    {
      "name": "OWASP LLM Top 10",
      "category": "confiance",
      "desc": {
        "fr": "Risques de sécurité pour applications reposant sur des LLM.",
        "en": "Security risks for LLM applications."
      },
      "url": "https://genai.owasp.org/llm-top-10/"
    },
    {
      "name": "Google Search Central",
      "category": "decouverte",
      "desc": {
        "fr": "Documentation officielle sur l'indexation et la recherche Google.",
        "en": "Official Google indexing and search documentation."
      },
      "url": "https://developers.google.com/search/docs"
    },
    {
      "name": "Bing Webmaster Guidelines",
      "category": "decouverte",
      "desc": {
        "fr": "Documentation de Microsoft pour la découverte des sites.",
        "en": "Microsoft documentation for site discoverability."
      },
      "url": "https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a"
    },
    {
      "name": "Pagefind Multilingual",
      "category": "decouverte",
      "desc": {
        "fr": "Documentation de la recherche statique multilingue.",
        "en": "Multilingual static search documentation."
      },
      "url": "https://pagefind.app/docs/multilingual/"
    },
    {
      "name": "Astro Content Collections",
      "category": "creation",
      "desc": {
        "fr": "Organisation de contenus structurés dans Astro.",
        "en": "Structured content collections in Astro."
      },
      "url": "https://docs.astro.build/en/guides/content-collections/"
    },
    {
      "name": "MDN Web Docs",
      "category": "creation",
      "desc": {
        "fr": "Documentation des technologies fondamentales du Web.",
        "en": "Reference documentation for core Web technologies."
      },
      "url": "https://developer.mozilla.org/"
    },
    {
      "name": "Web.dev",
      "category": "creation",
      "desc": {
        "fr": "Conseils de conception, performances et technologies Web.",
        "en": "Design, performance and web technology guidance."
      },
      "url": "https://web.dev/"
    },
    {
      "name": "Hugging Face Docs",
      "category": "modeles",
      "desc": {
        "fr": "Documentation des modèles et bibliothèques IA.",
        "en": "Documentation for AI models and libraries."
      },
      "url": "https://huggingface.co/docs"
    },
    {
      "name": "Transformers paper",
      "category": "recherche",
      "desc": {
        "fr": "Article fondateur sur l'architecture Transformer.",
        "en": "Foundational paper on Transformer architecture."
      },
      "url": "https://arxiv.org/abs/1706.03762"
    },
    {
      "name": "RAG paper",
      "category": "recherche",
      "desc": {
        "fr": "Article de recherche sur génération augmentée par récupération.",
        "en": "Research paper on retrieval-augmented generation."
      },
      "url": "https://arxiv.org/abs/2005.11401"
    },
    {
      "name": "WebArena paper",
      "category": "recherche",
      "desc": {
        "fr": "Évaluation d'agents sur des tâches Web réalistes.",
        "en": "Evaluation of agents on realistic web tasks."
      },
      "url": "https://arxiv.org/abs/2307.13854"
    },
    {
      "name": "VisualWebArena paper",
      "category": "recherche",
      "desc": {
        "fr": "Évaluation de l'usage d'interfaces visuelles par les agents.",
        "en": "Evaluation of agents using visually grounded interfaces."
      },
      "url": "https://arxiv.org/abs/2401.13649"
    },
    {
      "name": "OSWorld paper",
      "category": "recherche",
      "desc": {
        "fr": "Environnement d'évaluation des agents utilisant un ordinateur.",
        "en": "Evaluation environment for computer-using agents."
      },
      "url": "https://arxiv.org/abs/2404.07972"
    },
    {
      "name": "GEO paper",
      "category": "recherche",
      "desc": {
        "fr": "Publication sur l'optimisation pour les moteurs génératifs.",
        "en": "Paper on optimization for generative search engines."
      },
      "url": "https://arxiv.org/abs/2311.09735"
    },
    {
      "name": "WebAssembly",
      "category": "local",
      "desc": {
        "fr": "Spécifications de l'exécution WebAssembly.",
        "en": "Specifications for WebAssembly execution."
      },
      "url": "https://webassembly.org/"
    },
    {
      "name": "WebXR Device API",
      "category": "immersif",
      "desc": {
        "fr": "Spécification pour expériences immersives accessibles via le Web.",
        "en": "Specification for immersive experiences on the Web."
      },
      "url": "https://www.w3.org/TR/webxr/"
    },
    {
      "name": "IETF Datatracker",
      "category": "standards",
      "desc": {
        "fr": "Travaux des groupes et brouillons de l'IETF.",
        "en": "IETF working group documents and internet drafts."
      },
      "url": "https://datatracker.ietf.org/"
    },
    {
      "name": "OpenAlex",
      "category": "recherche",
      "desc": {
        "fr": "Index ouvert de métadonnées scientifiques.",
        "en": "Open research metadata index."
      },
      "url": "https://openalex.org/"
    },
    {
      "name": "Crossref REST API",
      "category": "recherche",
      "desc": {
        "fr": "API de métadonnées et identifiants scientifiques.",
        "en": "Research metadata and identifier API."
      },
      "url": "https://api.crossref.org/"
    },
    {
      "name": "GitHub Docs",
      "category": "creation",
      "desc": {
        "fr": "Documentation de versionnement, sécurité et automatisation.",
        "en": "Version control, security and automation documentation."
      },
      "url": "https://docs.github.com/"
    }
  ],
  "glossary": [
    {
      "fr": "Web génératif",
      "en": "Generative Web",
      "definition": {
        "fr": "Ensemble d’usages où l’IA participe à la création ou l’adaptation de contenus et d’interfaces Web.",
        "en": "Web experiences where AI helps create or adapt content and interfaces."
      },
      "category": "fondations"
    },
    {
      "fr": "Web agentique",
      "en": "Agentic Web",
      "definition": {
        "fr": "Web utilisé aussi par des agents capables de découvrir des outils et d’exécuter des tâches autorisées.",
        "en": "A Web also used by agents that can discover tools and carry out authorized tasks."
      },
      "category": "agents"
    },
    {
      "fr": "LLM",
      "en": "Large language model",
      "definition": {
        "fr": "Modèle statistique entraîné sur de grandes quantités de données textuelles et autres modalités.",
        "en": "A statistical model trained on large quantities of text and sometimes other modalities."
      },
      "category": "modeles"
    },
    {
      "fr": "Transformer",
      "en": "Transformer",
      "definition": {
        "fr": "Architecture de réseau neuronal basée notamment sur des mécanismes d’attention.",
        "en": "Neural network architecture built around attention mechanisms."
      },
      "category": "modeles"
    },
    {
      "fr": "RAG",
      "en": "Retrieval-augmented generation",
      "definition": {
        "fr": "Méthode combinant récupération documentaire et génération d’une réponse.",
        "en": "A method combining document retrieval with answer generation."
      },
      "category": "recherche"
    },
    {
      "fr": "Embedding",
      "en": "Embedding",
      "definition": {
        "fr": "Représentation numérique compacte d’un texte, d’une image ou d’un autre objet.",
        "en": "Compact numerical representation of text, images or other objects."
      },
      "category": "recherche"
    },
    {
      "fr": "Recherche vectorielle",
      "en": "Vector search",
      "definition": {
        "fr": "Recherche fondée sur une mesure de proximité entre représentations numériques.",
        "en": "Search based on proximity between numerical representations."
      },
      "category": "recherche"
    },
    {
      "fr": "Recherche hybride",
      "en": "Hybrid search",
      "definition": {
        "fr": "Combinaison de plusieurs approches, par exemple lexicale et vectorielle.",
        "en": "Combination of multiple retrieval approaches, such as keyword and vector search."
      },
      "category": "recherche"
    },
    {
      "fr": "Réordonnancement",
      "en": "Reranking",
      "definition": {
        "fr": "Nouvelle estimation de l’ordre de pertinence des documents récupérés.",
        "en": "Reassessment of the ranking of retrieved documents."
      },
      "category": "recherche"
    },
    {
      "fr": "Chunk",
      "en": "Chunk",
      "definition": {
        "fr": "Portion de document créée pour l’indexation ou le traitement.",
        "en": "A piece of a document prepared for indexing or processing."
      },
      "category": "recherche"
    },
    {
      "fr": "Contexte",
      "en": "Context window",
      "definition": {
        "fr": "Volume de tokens qu’un modèle peut traiter dans un échange donné.",
        "en": "Amount of tokens a model can process within an exchange."
      },
      "category": "modeles"
    },
    {
      "fr": "Token",
      "en": "Token",
      "definition": {
        "fr": "Unité de texte ou autre représentation manipulée par un modèle.",
        "en": "Unit of text or another representation processed by a model."
      },
      "category": "modeles"
    },
    {
      "fr": "Prompt",
      "en": "Prompt",
      "definition": {
        "fr": "Instruction ou ensemble d’informations donné à un système d’IA.",
        "en": "Instruction or set of information supplied to an AI system."
      },
      "category": "usages"
    },
    {
      "fr": "Prompt injection",
      "en": "Prompt injection",
      "definition": {
        "fr": "Tentative d’influencer le comportement d’un système via des instructions contenues dans des données non fiables.",
        "en": "Attempt to redirect a system through instructions embedded in untrusted data."
      },
      "category": "confiance"
    },
    {
      "fr": "Hallucination",
      "en": "Hallucination",
      "definition": {
        "fr": "Réponse générée plausible, mais factuellement erronée ou non étayée.",
        "en": "Plausible generated answer that is factually wrong or unsupported."
      },
      "category": "confiance"
    },
    {
      "fr": "Citation",
      "en": "Citation",
      "definition": {
        "fr": "Renvoi permettant de retrouver une source ; ne garantit pas à lui seul la véracité.",
        "en": "Reference to a source; on its own it does not guarantee accuracy."
      },
      "category": "confiance"
    },
    {
      "fr": "Provenance",
      "en": "Provenance",
      "definition": {
        "fr": "Informations décrivant l’origine et certaines transformations d’un contenu.",
        "en": "Information describing a piece of content’s origin and certain transformations."
      },
      "category": "confiance"
    },
    {
      "fr": "Content Credentials",
      "en": "Content Credentials",
      "definition": {
        "fr": "Informations de provenance liées à certaines images et autres médias.",
        "en": "Provenance information associated with certain images and other media."
      },
      "category": "confiance"
    },
    {
      "fr": "C2PA",
      "en": "C2PA",
      "definition": {
        "fr": "Ensemble de spécifications pour la provenance technique des contenus numériques.",
        "en": "Set of specifications for technical provenance of digital content."
      },
      "category": "confiance"
    },
    {
      "fr": "MCP",
      "en": "Model Context Protocol",
      "definition": {
        "fr": "Protocole ouvert pour la connexion d’applications IA à des outils et ressources.",
        "en": "Open protocol for connecting AI applications to tools and resources."
      },
      "category": "agents"
    },
    {
      "fr": "A2A",
      "en": "Agent2Agent",
      "definition": {
        "fr": "Protocole pour faire communiquer et coopérer des systèmes agents indépendants.",
        "en": "Protocol for communication and collaboration between independent agent systems."
      },
      "category": "agents"
    },
    {
      "fr": "WebMCP",
      "en": "Web Model Context Protocol",
      "definition": {
        "fr": "Proposition de mécanismes pour exposer certaines fonctions Web aux agents.",
        "en": "Proposal for exposing some Web functionality to agents."
      },
      "category": "agents"
    },
    {
      "fr": "Agent IA",
      "en": "AI agent",
      "definition": {
        "fr": "Système capable de planifier ou d’enchaîner des actions dans des limites définies.",
        "en": "System that plans or sequences actions within defined boundaries."
      },
      "category": "agents"
    },
    {
      "fr": "Outil d’agent",
      "en": "Agent tool",
      "definition": {
        "fr": "Fonction externe qu’un agent peut appeler avec des paramètres autorisés.",
        "en": "External function an agent may call with authorized parameters."
      },
      "category": "agents"
    },
    {
      "fr": "Multiagent",
      "en": "Multi-agent system",
      "definition": {
        "fr": "Ensemble de plusieurs agents coordonnés ou interopérables.",
        "en": "System of multiple coordinated or interoperable agents."
      },
      "category": "agents"
    },
    {
      "fr": "Human-in-the-loop",
      "en": "Human-in-the-loop",
      "definition": {
        "fr": "Étape où une personne examine ou approuve une décision d’un système.",
        "en": "Step where a person reviews or approves a system’s decision."
      },
      "category": "confiance"
    },
    {
      "fr": "WebGPU",
      "en": "WebGPU",
      "definition": {
        "fr": "API Web donnant accès à des opérations graphiques et de calcul sur GPU.",
        "en": "Web API for GPU graphics and compute operations."
      },
      "category": "local"
    },
    {
      "fr": "WebNN",
      "en": "Web Neural Network API",
      "definition": {
        "fr": "API Web destinée à l’exécution d’opérations de réseaux neuronaux.",
        "en": "Web API designed for neural network operations."
      },
      "category": "local"
    },
    {
      "fr": "WebAssembly",
      "en": "WebAssembly",
      "definition": {
        "fr": "Format exécutable portable utilisé notamment dans les navigateurs.",
        "en": "Portable executable format used in browsers and elsewhere."
      },
      "category": "local"
    },
    {
      "fr": "Inférence locale",
      "en": "On-device inference",
      "definition": {
        "fr": "Exécution de calculs de modèle sur l’appareil de l’utilisateur.",
        "en": "Running model computations on the user’s own device."
      },
      "category": "local"
    },
    {
      "fr": "Quantification",
      "en": "Quantization",
      "definition": {
        "fr": "Réduction de la précision numérique des paramètres ou calculs d’un modèle.",
        "en": "Reduction of numerical precision in model parameters or computations."
      },
      "category": "modeles"
    },
    {
      "fr": "Diffusion",
      "en": "Diffusion model",
      "definition": {
        "fr": "Famille de modèles génératifs apprenant un processus de débruitage.",
        "en": "Generative model family trained through denoising processes."
      },
      "category": "modeles"
    },
    {
      "fr": "Multimodal",
      "en": "Multimodal AI",
      "definition": {
        "fr": "Capacité de traiter plusieurs types de signaux, comme texte et image.",
        "en": "Ability to process multiple kinds of signals, such as text and images."
      },
      "category": "modeles"
    },
    {
      "fr": "Génération augmentée",
      "en": "Augmented generation",
      "definition": {
        "fr": "Production de contenus s’appuyant sur des outils ou informations supplémentaires.",
        "en": "Content generation informed by extra tools or information."
      },
      "category": "modeles"
    },
    {
      "fr": "Sémantique",
      "en": "Semantics",
      "definition": {
        "fr": "Interprétation du sens des informations plutôt que de leur seule forme.",
        "en": "Interpretation of meaning beyond raw representation."
      },
      "category": "fondations"
    },
    {
      "fr": "JSON-LD",
      "en": "JSON-LD",
      "definition": {
        "fr": "Format JSON pour représenter des données liées.",
        "en": "JSON format for representing linked data."
      },
      "category": "standards"
    },
    {
      "fr": "Graphe de connaissances",
      "en": "Knowledge graph",
      "definition": {
        "fr": "Structure d’entités reliées par des relations définies.",
        "en": "Structure of entities connected by defined relationships."
      },
      "category": "fondations"
    },
    {
      "fr": "SEO",
      "en": "Search engine optimization",
      "definition": {
        "fr": "Ensemble de pratiques d’amélioration de l’accès et de la compréhension d’un site par les moteurs.",
        "en": "Practices to improve site accessibility and interpretation by search engines."
      },
      "category": "recherche"
    },
    {
      "fr": "AEO",
      "en": "Answer engine optimization",
      "definition": {
        "fr": "Terme éditorial pour des pratiques visant la visibilité dans les moteurs de réponse.",
        "en": "Editorial term for practices aimed at visibility in answer engines."
      },
      "category": "recherche"
    },
    {
      "fr": "GEO",
      "en": "Generative engine optimization",
      "definition": {
        "fr": "Champ d’étude et d’usage concernant la visibilité dans des réponses génératives.",
        "en": "Research and practice concerning visibility in generative responses."
      },
      "category": "recherche"
    },
    {
      "fr": "API",
      "en": "Application programming interface",
      "definition": {
        "fr": "Interface contractuelle permettant à des logiciels de communiquer.",
        "en": "Contract allowing software components to communicate."
      },
      "category": "standards"
    },
    {
      "fr": "OAuth",
      "en": "OAuth",
      "definition": {
        "fr": "Cadre d’autorisation déléguée pour l’accès à certaines ressources.",
        "en": "Framework for delegated authorization to resources."
      },
      "category": "confiance"
    },
    {
      "fr": "JSON Schema",
      "en": "JSON Schema",
      "definition": {
        "fr": "Vocabulaire de description et validation des structures JSON.",
        "en": "Vocabulary for describing and validating JSON structures."
      },
      "category": "standards"
    },
    {
      "fr": "RSS",
      "en": "RSS",
      "definition": {
        "fr": "Format de syndication utilisé pour diffuser des mises à jour.",
        "en": "Syndication format for distributing updates."
      },
      "category": "standards"
    },
    {
      "fr": "Atom",
      "en": "Atom",
      "definition": {
        "fr": "Format de syndication et de publication de contenus.",
        "en": "Syndication and publishing format."
      },
      "category": "standards"
    },
    {
      "fr": "Preprint",
      "en": "Preprint",
      "definition": {
        "fr": "Manuscrit scientifique diffusé avant, ou indépendamment de, l’évaluation par les pairs.",
        "en": "Research manuscript shared before or independently of peer review."
      },
      "category": "recherche"
    },
    {
      "fr": "Évaluation",
      "en": "Evaluation",
      "definition": {
        "fr": "Mesure explicite de la qualité d’un système selon des critères définis.",
        "en": "Measurement of system quality against defined criteria."
      },
      "category": "confiance"
    },
    {
      "fr": "Benchmark",
      "en": "Benchmark",
      "definition": {
        "fr": "Ensemble de tâches et métriques utilisé pour comparer des systèmes.",
        "en": "Task and metric set used to compare systems."
      },
      "category": "confiance"
    },
    {
      "fr": "Fine-tuning",
      "en": "Fine-tuning",
      "definition": {
        "fr": "Adaptation d’un modèle préentraîné avec des données supplémentaires.",
        "en": "Adaptation of a pretrained model using additional data."
      },
      "category": "modeles"
    },
    {
      "fr": "Guardrail",
      "en": "Guardrail",
      "definition": {
        "fr": "Mécanisme visant à limiter certains comportements ou risques d’un système.",
        "en": "Mechanism to constrain specific behaviors or risks of a system."
      },
      "category": "confiance"
    },
    {
      "fr": "HTML",
      "en": "HTML",
      "definition": {
        "fr": "Langage de balisage structurant les documents Web.",
        "en": "Markup language that structures Web documents."
      },
      "category": "fondations"
    },
    {
      "fr": "Accessibilité",
      "en": "Accessibility",
      "definition": {
        "fr": "Conception pour permettre l’accès aux contenus et fonctions à diverses personnes.",
        "en": "Design that enables access for people with diverse abilities."
      },
      "category": "confiance"
    }
  ],
  "topics": [
    {
      "slug": "webai",
      "category": "Fondations",
      "title": {
        "fr": "Qu’est-ce que WebAI ?",
        "en": "What is WebAI?"
      },
      "summary": {
        "fr": "Le Web généré par l’IA ne se réduit pas aux textes produits par un modèle.",
        "en": "The AI-generated Web is more than model-written text."
      },
      "body": {
        "fr": "WebAI est un cadre éditorial pour étudier trois transformations qui coexistent : la production de contenus et d’interfaces avec l’IA, la découverte des ressources avec la recherche générative, et l’action sur le Web avec des agents. Il ne s’agit ni d’un protocole officiel ni d’un remplacement de HTML et HTTP.",
        "en": "WebAI is an editorial frame for three coexisting shifts: AI-assisted content and interface creation, generative discovery of resources, and agents acting on the Web. It is neither an official protocol nor a replacement for HTML and HTTP."
      },
      "source": "https://www.w3.org/groups/ig/webai/"
    },
    {
      "slug": "generative-web",
      "category": "Fondations",
      "title": {
        "fr": "Comprendre le Web génératif",
        "en": "Understanding the Generative Web"
      },
      "summary": {
        "fr": "Production, adaptation et publication des ressources avec des modèles.",
        "en": "Creation, adaptation and publication with generative models."
      },
      "body": {
        "fr": "Une page peut contenir des passages rédigés par une personne, des synthèses calculées automatiquement ou des interfaces adaptées à une requête. La qualité dépend toujours de la provenance des données, de la révision et de la clarté du contexte d’usage.",
        "en": "A page may combine human writing, automatically synthesized passages and interfaces adapted to a query. Quality still depends on data provenance, review and clear context."
      },
      "source": "https://www.w3.org/groups/ig/webai/"
    },
    {
      "slug": "rag",
      "category": "Recherche & connaissances",
      "title": {
        "fr": "RAG : la génération augmentée par récupération",
        "en": "RAG: retrieval-augmented generation"
      },
      "summary": {
        "fr": "Récupérer des documents pour orienter une réponse générée.",
        "en": "Retrieve documents to inform a generated answer."
      },
      "body": {
        "fr": "Un pipeline RAG indexe des documents, sélectionne des passages pertinents puis les transmet à un générateur. Les erreurs peuvent venir de l’indexation, de la recherche, de passages trompeurs ou de la synthèse. Un lien vers une source n’est pas une preuve suffisante.",
        "en": "A RAG pipeline indexes documents, retrieves relevant passages and passes them to a generator. Errors can arise from indexing, retrieval, misleading passages or synthesis. Linking to a source is not sufficient proof."
      },
      "source": "https://arxiv.org/abs/2005.11401"
    },
    {
      "slug": "agents",
      "category": "Agents & protocoles",
      "title": {
        "fr": "Le Web agentique",
        "en": "The Agentic Web"
      },
      "summary": {
        "fr": "Agents, outils, permissions et contrôle des actions.",
        "en": "Agents, tools, permissions and control of actions."
      },
      "body": {
        "fr": "Un agent peut décomposer une tâche, choisir des outils et obtenir des résultats intermédiaires. La fiabilité d’un parcours dépend des permissions, de l’identité des ressources, de la vérification des paramètres et d’un point d’arrêt avant les actes sensibles.",
        "en": "An agent can break down a task, select tools and inspect intermediate outcomes. Reliability depends on permissions, trusted resource identity, parameter checks and approval before sensitive actions."
      },
      "source": "https://www.w3.org/groups/ig/webai/"
    },
    {
      "slug": "mcp",
      "category": "Agents & protocoles",
      "title": {
        "fr": "Comprendre MCP",
        "en": "Understanding MCP"
      },
      "summary": {
        "fr": "Relier applications IA, ressources et fonctions externes.",
        "en": "Connect AI applications to external tools and resources."
      },
      "body": {
        "fr": "MCP décrit des échanges structurés entre des clients et des serveurs qui exposent outils, ressources ou invites. Il ne confère pas de privilège universel : l’application hôte doit contrôler les permissions, les entrées et la confiance accordée au serveur.",
        "en": "MCP describes structured exchanges between clients and servers exposing tools, resources or prompts. It does not confer universal privileges: the host must manage permissions, inputs and trust in servers."
      },
      "source": "https://modelcontextprotocol.io/specification/"
    },
    {
      "slug": "a2a",
      "category": "Agents & protocoles",
      "title": {
        "fr": "Comprendre A2A",
        "en": "Understanding A2A"
      },
      "summary": {
        "fr": "Permettre à plusieurs agents indépendants de coopérer.",
        "en": "Enable independent agents to collaborate."
      },
      "body": {
        "fr": "A2A se concentre sur la découverte des capacités d’un autre agent et l’échange de messages ou tâches. Il ne remplace pas MCP : les deux protocoles couvrent des relations différentes dans les systèmes agentiques.",
        "en": "A2A focuses on discovering another agent’s capabilities and exchanging messages or tasks. It does not replace MCP: both protocols address different relationships in agent systems."
      },
      "source": "https://a2a-protocol.org/latest/specification/"
    },
    {
      "slug": "webmcp",
      "category": "Agents & protocoles",
      "title": {
        "fr": "WebMCP : une interface pour les agents Web",
        "en": "WebMCP: an interface for Web agents"
      },
      "summary": {
        "fr": "Exposer des capacités structurées depuis une application Web.",
        "en": "Expose structured capabilities from a Web application."
      },
      "body": {
        "fr": "WebMCP fait l’objet de travaux communautaires visant à rendre certaines fonctions des sites compréhensibles par des agents. Le statut de proposition ne signifie pas une prise en charge généralisée dans les navigateurs.",
        "en": "WebMCP is a community proposal to make some website functions understandable to agents. Proposal status does not imply broad browser support."
      },
      "source": "https://webmachinelearning.github.io/webmcp/"
    },
    {
      "slug": "c2pa",
      "category": "Confiance",
      "title": {
        "fr": "C2PA et provenance des contenus",
        "en": "C2PA and content provenance"
      },
      "summary": {
        "fr": "Décrire l’origine et certaines modifications d’un média.",
        "en": "Describe the origin and some edits of a media asset."
      },
      "body": {
        "fr": "Les informations C2PA peuvent fournir des déclarations signées sur l’histoire d’un média. Elles ne démontrent ni que tous les événements sont représentés, ni que les affirmations du contenu sont vraies.",
        "en": "C2PA information can carry signed assertions about a media asset’s history. It does not prove completeness of that history or truth of the content’s claims."
      },
      "source": "https://spec.c2pa.org/specifications/"
    },
    {
      "slug": "webgpu",
      "category": "IA locale",
      "title": {
        "fr": "WebGPU et l’IA dans le navigateur",
        "en": "WebGPU and in-browser AI"
      },
      "summary": {
        "fr": "Utiliser le GPU pour accélérer calculs et interfaces.",
        "en": "Use the GPU to accelerate computation and interfaces."
      },
      "body": {
        "fr": "WebGPU fournit une interface pour des opérations graphiques et de calcul. Certaines bibliothèques l’emploient pour l’inférence locale, sous réserve de compatibilité du navigateur, de performances et de mémoire disponibles.",
        "en": "WebGPU is an interface for graphics and compute operations. Some libraries use it for local inference, subject to browser compatibility, performance and available memory."
      },
      "source": "https://www.w3.org/TR/webgpu/"
    },
    {
      "slug": "models",
      "category": "Modèles & médias",
      "title": {
        "fr": "Du Transformer aux modèles multimodaux",
        "en": "From Transformers to multimodal models"
      },
      "summary": {
        "fr": "Comprendre les familles de modèles et leurs limites.",
        "en": "Understand model families and their limitations."
      },
      "body": {
        "fr": "L’architecture Transformer a joué un rôle majeur dans les modèles de séquences. Les modèles multimodaux combinent différents types d’entrée ou de sortie ; leurs performances varient selon la tâche et les conditions de mesure.",
        "en": "Transformer architecture played a major role in sequence models. Multimodal models combine different kinds of inputs or outputs; their performance varies by task and evaluation conditions."
      },
      "source": "https://arxiv.org/abs/1706.03762"
    },
    {
      "slug": "seo-geo",
      "category": "Découverte",
      "title": {
        "fr": "SEO, AEO et GEO : quelles différences ?",
        "en": "SEO, AEO and GEO: key differences"
      },
      "summary": {
        "fr": "Visibilité dans les moteurs classiques et interfaces de réponse.",
        "en": "Visibility in conventional search and answer interfaces."
      },
      "body": {
        "fr": "Le SEO recouvre notamment l’accessibilité, la structure des pages et la qualité des contenus. AEO et GEO désignent des approches de visibilité dans les réponses et systèmes génératifs ; les promesses d’optimisation doivent être confrontées à des preuves plutôt qu’aux seuls discours marketing.",
        "en": "SEO includes technical accessibility, page structure and content quality. AEO and GEO describe approaches to visibility in answer and generative systems; optimization claims need evidence, not only marketing."
      },
      "source": "https://developers.google.com/search/docs"
    },
    {
      "slug": "knowledge-graph",
      "category": "Données structurées",
      "title": {
        "fr": "Graphes de connaissances et JSON-LD",
        "en": "Knowledge graphs and JSON-LD"
      },
      "summary": {
        "fr": "Structurer les relations entre concepts, sources et technologies.",
        "en": "Structure links between concepts, sources and technologies."
      },
      "body": {
        "fr": "Un graphe de connaissances relie des entités au moyen de relations typées. JSON-LD facilite la publication de données liées ; mais une relation créée automatiquement doit rester vérifiable avant de devenir une assertion encyclopédique.",
        "en": "A knowledge graph connects entities through typed relations. JSON-LD helps publish linked data, but automatically suggested links need verification before becoming encyclopedic claims."
      },
      "source": "https://www.w3.org/TR/json-ld11/"
    },
    {
      "slug": "accessibility",
      "category": "Confiance",
      "title": {
        "fr": "Accessibilité et IA : concevoir pour chacun",
        "en": "Accessibility and AI: design for everyone"
      },
      "summary": {
        "fr": "Des interfaces utilisables au clavier, lisibles et compréhensibles.",
        "en": "Interfaces usable by keyboard, readable and understandable."
      },
      "body": {
        "fr": "Une interface générée ou personnalisée par IA doit rester utilisable au clavier, compatible avec les technologies d’assistance et stable dans ses interactions. Un test automatique contribue au contrôle mais ne remplace pas l’évaluation humaine.",
        "en": "An AI-generated or adaptive interface must remain keyboard usable, compatible with assistive technology and predictable. Automated tests assist but do not replace human evaluation."
      },
      "source": "https://www.w3.org/TR/WCAG22/"
    },
    {
      "slug": "webxr",
      "category": "Interfaces & 3D",
      "title": {
        "fr": "WebXR et expériences génératives",
        "en": "WebXR and generative experiences"
      },
      "summary": {
        "fr": "Croisement possible entre Web immersif et IA générative.",
        "en": "Potential intersection of immersive Web and generative AI."
      },
      "body": {
        "fr": "WebXR permet des expériences immersives selon les appareils compatibles. Des contenus 3D générés peuvent les alimenter, mais leur génération et la disponibilité matérielle sont deux problèmes distincts.",
        "en": "WebXR enables immersive experiences on supported devices. Generated 3D media may be used, but content generation and hardware capability are separate concerns."
      },
      "source": "https://www.w3.org/TR/webxr/"
    },
    {
      "slug": "evaluation",
      "category": "Méthodologie",
      "title": {
        "fr": "Évaluer les agents et leurs limites",
        "en": "Evaluating agents and their limits"
      },
      "summary": {
        "fr": "Tests, succès partiels, sécurité et reproductibilité.",
        "en": "Tests, partial success, safety and reproducibility."
      },
      "body": {
        "fr": "Les agents doivent être évalués sur des tâches reproductibles avec critères de succès explicites. Les environnements d’évaluation comme WebArena et OSWorld aident à mesurer des capacités, mais leurs scores ne prouvent pas l’efficacité dans tous les contextes réels.",
        "en": "Agents should be assessed on reproducible tasks with explicit success criteria. Environments such as WebArena and OSWorld help measure capabilities, but their scores do not prove effectiveness in every real setting."
      },
      "source": "https://arxiv.org/abs/2307.13854"
    },
    {
      "slug": "security",
      "category": "Confiance",
      "title": {
        "fr": "Prompt injection et sécurité des agents",
        "en": "Prompt injection and agent security"
      },
      "summary": {
        "fr": "Séparer les instructions autorisées des données non fiables.",
        "en": "Keep authorized instructions separate from untrusted data."
      },
      "body": {
        "fr": "Une page ou un fichier consulté peut contenir des instructions destinées à détourner un agent. Pour limiter ce risque, il faut cloisonner les privilèges, limiter les capacités sensibles, examiner les sorties des outils et prévoir des confirmations humaines.",
        "en": "A page or file can contain instructions designed to redirect an agent. Mitigations include privilege separation, restricted capabilities, reviewing tool outputs and human confirmation."
      },
      "source": "https://genai.owasp.org/llm-top-10/"
    }
  ],
  "lessons": [
    {
      "slug": "debutant",
      "title": {
        "fr": "Débuter sans jargon",
        "en": "Start without jargon"
      },
      "audience": {
        "fr": "Curieux, grand public",
        "en": "Curious readers"
      },
      "duration": "25–40 min",
      "topics": [
        "webai",
        "generative-web",
        "rag",
        "seo-geo"
      ],
      "desc": {
        "fr": "Comprendre les grands changements sans coder.",
        "en": "Understand the big changes without coding."
      }
    },
    {
      "slug": "enseignant",
      "title": {
        "fr": "Enseigner le Web de l’IA",
        "en": "Teach the AI-driven Web"
      },
      "audience": {
        "fr": "Enseignants et formateurs",
        "en": "Educators"
      },
      "duration": "45–60 min",
      "topics": [
        "webai",
        "rag",
        "c2pa",
        "accessibility"
      ],
      "desc": {
        "fr": "Comparer contenus, sources et mécanismes en classe.",
        "en": "Compare content, sources and mechanisms in class."
      }
    },
    {
      "slug": "createur",
      "title": {
        "fr": "Créer des expériences responsables",
        "en": "Build responsible experiences"
      },
      "audience": {
        "fr": "Créateurs et designers",
        "en": "Creators and designers"
      },
      "duration": "60–90 min",
      "topics": [
        "generative-web",
        "accessibility",
        "webxr",
        "security"
      ],
      "desc": {
        "fr": "Concevoir une expérience, puis en vérifier les usages.",
        "en": "Design an experience and verify its impact."
      }
    },
    {
      "slug": "developpeur",
      "title": {
        "fr": "Construire un Web agentique",
        "en": "Build an agentic Web"
      },
      "audience": {
        "fr": "Développeurs",
        "en": "Developers"
      },
      "duration": "90–120 min",
      "topics": [
        "rag",
        "mcp",
        "a2a",
        "webmcp",
        "security"
      ],
      "desc": {
        "fr": "Explorer les protocoles et le contrôle des outils.",
        "en": "Explore protocols and tool control."
      }
    },
    {
      "slug": "chercheur",
      "title": {
        "fr": "Évaluer les modèles et agents",
        "en": "Evaluate models and agents"
      },
      "audience": {
        "fr": "Chercheurs et analystes",
        "en": "Researchers and analysts"
      },
      "duration": "60–90 min",
      "topics": [
        "models",
        "evaluation",
        "knowledge-graph",
        "c2pa"
      ],
      "desc": {
        "fr": "Passer des démonstrations aux preuves reproductibles.",
        "en": "Move from demos to reproducible evidence."
      }
    },
    {
      "slug": "organisation",
      "title": {
        "fr": "Déployer avec discernement",
        "en": "Deploy with care"
      },
      "audience": {
        "fr": "Responsables et organisations",
        "en": "Organizations"
      },
      "duration": "50–75 min",
      "topics": [
        "rag",
        "security",
        "c2pa",
        "accessibility"
      ],
      "desc": {
        "fr": "Concilier valeur d’usage, risques et documentation.",
        "en": "Balance practical value, risk and documentation."
      }
    }
  ],
  "cases": [
    {
      "slug": "education",
      "sector": {
        "fr": "Éducation",
        "en": "Education"
      },
      "title": {
        "fr": "Assistant de lecture documentée",
        "en": "Evidence-led reading assistant"
      },
      "desc": {
        "fr": "Une interface d’apprentissage utilisant des documents sélectionnés, avec références visibles et contrôle de l’enseignant.",
        "en": "A learning interface using curated documents, visible references and teacher oversight."
      },
      "audience": "enseignant"
    },
    {
      "slug": "recherche",
      "sector": {
        "fr": "Recherche",
        "en": "Research"
      },
      "title": {
        "fr": "Veille scientifique avec contrôle humain",
        "en": "Human-reviewed research monitoring"
      },
      "desc": {
        "fr": "Collecte de métadonnées, dédoublonnage et revue critique avant publication.",
        "en": "Metadata collection, deduplication and critical review before publication."
      },
      "audience": "chercheur"
    },
    {
      "slug": "culture",
      "sector": {
        "fr": "Culture & musées",
        "en": "Culture & museums"
      },
      "title": {
        "fr": "Médiation multimodale des œuvres",
        "en": "Multimodal museum interpretation"
      },
      "desc": {
        "fr": "Descriptions et parcours adaptés avec attribution correcte des œuvres et sources.",
        "en": "Adapted descriptions and tours with accurate artwork attribution and sources."
      },
      "audience": "createur"
    },
    {
      "slug": "accessibilite",
      "sector": {
        "fr": "Accessibilité",
        "en": "Accessibility"
      },
      "title": {
        "fr": "Lecture simplifiée et navigation assistée",
        "en": "Simplified reading and assisted navigation"
      },
      "desc": {
        "fr": "Adaptation des présentations sans masquer les informations essentielles ni réduire l’accessibilité.",
        "en": "Adapt presentation without hiding essential information or undermining accessibility."
      },
      "audience": "organisation"
    },
    {
      "slug": "medias",
      "sector": {
        "fr": "Médias",
        "en": "Media"
      },
      "title": {
        "fr": "Provenance et vérification éditoriale",
        "en": "Provenance and editorial verification"
      },
      "desc": {
        "fr": "Traitement de médias et vérification des déclarations de provenance avant diffusion.",
        "en": "Media review and verification of provenance claims before publication."
      },
      "audience": "organisation"
    },
    {
      "slug": "commerce",
      "sector": {
        "fr": "Commerce en ligne",
        "en": "E-commerce"
      },
      "title": {
        "fr": "Découverte conversationnelle de produits",
        "en": "Conversational product discovery"
      },
      "desc": {
        "fr": "Recherche guidée avec transparence des comparaisons et confirmation avant transaction.",
        "en": "Guided search with transparent comparisons and confirmation before transactions."
      },
      "audience": "organisation"
    },
    {
      "slug": "services",
      "sector": {
        "fr": "Services publics",
        "en": "Public services"
      },
      "title": {
        "fr": "Orientation vers des démarches officielles",
        "en": "Official procedure guidance"
      },
      "desc": {
        "fr": "Explication de documents publics en privilégiant sources à jour et accès humain.",
        "en": "Explain public documents with current sources and human contact options."
      },
      "audience": "organisation"
    },
    {
      "slug": "creation",
      "sector": {
        "fr": "Création Web",
        "en": "Web creation"
      },
      "title": {
        "fr": "Site éditorial génératif responsable",
        "en": "Responsible generative publishing"
      },
      "desc": {
        "fr": "Production assistée avec contrôle des droits, de l’accessibilité et de la fraîcheur.",
        "en": "Assisted publishing with rights, accessibility and freshness checks."
      },
      "audience": "developpeur"
    },
    {
      "slug": "agents",
      "sector": {
        "fr": "Automatisation",
        "en": "Automation"
      },
      "title": {
        "fr": "Agent avec autorisation explicite",
        "en": "Explicitly authorized agent"
      },
      "desc": {
        "fr": "Orchestration d’étapes réversibles et confirmations humaines pour les actions sensibles.",
        "en": "Orchestrate reversible steps and human approval for sensitive actions."
      },
      "audience": "developpeur"
    },
    {
      "slug": "3d",
      "sector": {
        "fr": "Web immersif",
        "en": "Immersive Web"
      },
      "title": {
        "fr": "Exploration 3D contextualisée",
        "en": "Contextual 3D exploration"
      },
      "desc": {
        "fr": "Objets ou environnements 3D accompagnés d’indications de source et de capacités techniques.",
        "en": "3D objects or environments accompanied by source and capability information."
      },
      "audience": "createur"
    }
  ]
};
atlas.topics.push(...researchTopics);
atlas.sources.push(...researchSources,...scienceSources);
atlas.catalog.push(...researchCatalog);
atlas.catalog=atlas.catalog.map(enrichTool);
atlas.glossary.push(...researchGlossary);
export const localized = (value, lang) => typeof value === 'string' ? value : value?.[lang] ?? value?.fr ?? '';
