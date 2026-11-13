export const toolProfilesA=[
  {
    "slug": "astro",
    "explain": {
      "fr": "Astro assemble des pages HTML rapides à partir de composants et de contenus éditoriaux. Sa génération statique convient aux encyclopédies, dossiers multilingues et portails dont les sources doivent rester accessibles sans connexion à un modèle.",
      "en": "Astro assembles fast HTML pages from components and editorial content. Static generation suits encyclopedias, multilingual dossiers and portals whose sources must remain accessible without model access."
    },
    "use": {
      "fr": "Publier des pages de connaissance avec URL stables, métadonnées bilingues, liens vers les documents sources et recherche statique.",
      "en": "Publish knowledge pages with stable URLs, bilingual metadata, primary-source links and static search."
    },
    "limit": {
      "fr": "Attention à la maintenance des collections, au chargement de scripts inutiles et à la cohérence des routes FR/EN.",
      "en": "Watch content collection maintenance, unnecessary client scripts and consistency of FR/EN routes."
    },
    "docs": "https://github.com/withastro/astro"
  },
  {
    "slug": "pagefind",
    "explain": {
      "fr": "Pagefind indexe les pages d’un site statique après génération et propose une recherche côté navigateur. Sa méthode évite d’envoyer les requêtes vers un serveur de recherche propriétaire pour un petit corpus public.",
      "en": "Pagefind indexes generated static pages and offers browser-side search. Its approach avoids sending queries to a proprietary search backend for a modest public corpus."
    },
    "use": {
      "fr": "Créer un moteur multilingue pour les fiches de WebAI avec navigation vers les pages indexées, filtres et extraits.",
      "en": "Create multilingual search over WebAI knowledge pages with navigation to indexed pages, filters and snippets."
    },
    "limit": {
      "fr": "La pertinence dépend du HTML indexé et de la langue ; ce n’est ni un moteur vectoriel ni un système de RAG.",
      "en": "Relevance depends on indexed HTML and language; it is neither a vector search engine nor a RAG system."
    },
    "docs": "https://github.com/CloudCannon/pagefind"
  },
  {
    "slug": "transformers-js",
    "explain": {
      "fr": "Transformers.js exécute certains modèles de la famille Transformers en JavaScript, dans le navigateur ou dans des environnements compatibles. Il facilite l’inférence locale sans nécessiter systématiquement un service cloud.",
      "en": "Transformers.js runs supported Transformer models in JavaScript in the browser or compatible runtimes. It enables local inference without necessarily requiring a cloud service."
    },
    "use": {
      "fr": "Tester une classification de phrases ou des embeddings sur des documents publics avec une indication des modèles et appareils compatibles.",
      "en": "Try sentence classification or embeddings on public documents with explicit model and hardware requirements."
    },
    "limit": {
      "fr": "La taille des fichiers, la mémoire et la prise en charge des opérateurs varient selon le modèle et le navigateur.",
      "en": "Model size, memory needs and supported operators vary with model and browser."
    },
    "docs": "https://github.com/huggingface/transformers.js"
  },
  {
    "slug": "webllm",
    "explain": {
      "fr": "WebLLM apporte l’inférence de modèles de langage directement dans certains navigateurs via WebGPU. Il expose des interfaces JavaScript pour des dialogues locaux lorsque les ressources matérielles le permettent.",
      "en": "WebLLM provides language model inference inside supported browsers through WebGPU. It offers JavaScript interfaces for local conversations when hardware resources allow."
    },
    "use": {
      "fr": "Créer un assistant expérimental hors ligne après le chargement initial du modèle, puis mesurer qualité et latence.",
      "en": "Build an experimental offline assistant after the initial model download, then measure quality and latency."
    },
    "limit": {
      "fr": "Une connexion GPU adaptée et un téléchargement potentiellement volumineux sont nécessaires ; le local ne garantit pas la vérité des réponses.",
      "en": "Suitable GPU support and possibly large downloads are required; local execution does not guarantee truthful outputs."
    },
    "docs": "https://mlc.ai/web-llm/"
  },
  {
    "slug": "ollama",
    "explain": {
      "fr": "Ollama sert à télécharger et exécuter des modèles sur un ordinateur et à les interroger via une API locale. Il constitue une brique de prototypage utile pour distinguer le modèle, le serveur et l’interface Web.",
      "en": "Ollama downloads and runs models on a computer and exposes a local API. It helps prototype the separation between model, service and Web interface."
    },
    "use": {
      "fr": "Relier un prototype de recherche documentaire à une instance locale et comparer les résultats à une solution distante.",
      "en": "Connect a documentary prototype to a local instance and compare its results with a hosted service."
    },
    "limit": {
      "fr": "La disponibilité des modèles et leurs licences diffèrent ; ne pas exposer sans authentification une API locale sur Internet.",
      "en": "Models and licenses vary; avoid exposing an unauthenticated local API to the public Internet."
    },
    "docs": "https://github.com/ollama/ollama"
  },
  {
    "slug": "lmstudio",
    "explain": {
      "fr": "LM Studio fournit une interface de bureau pour découvrir, gérer et faire fonctionner des modèles de langage sur un poste personnel. Certaines fonctions permettent de tester des conversations et des API locales.",
      "en": "LM Studio is a desktop application for finding, managing and running language models on a personal computer. Its features support local conversations and selected API workflows."
    },
    "use": {
      "fr": "Comparer les sorties de deux modèles pour une même question documentée et garder les versions testées.",
      "en": "Compare two model outputs for the same sourced question and record tested versions."
    },
    "limit": {
      "fr": "Vérifier les conditions du logiciel, la licence des modèles, les ressources et l’exposition éventuelle du serveur.",
      "en": "Review application terms, model licenses, hardware requirements and potential local-server exposure."
    },
    "docs": "https://lmstudio.ai/docs"
  },
  {
    "slug": "huggingface",
    "explain": {
      "fr": "Hugging Face Hub organise des modèles, jeux de données, applications de démonstration et fiches de projet. Les cartes de modèles et de données donnent un point de départ pour examiner provenance, entraînement et limitations.",
      "en": "Hugging Face Hub hosts models, datasets, demo applications and project metadata. Model and dataset cards provide starting points for examining provenance, training and limitations."
    },
    "use": {
      "fr": "Comparer des modèles de langue ou de vision en lisant cartes, licences, tâches, évaluations déclarées et historiques.",
      "en": "Compare language or vision models using cards, licenses, task information, reported evaluations and history."
    },
    "limit": {
      "fr": "Une fiche publiée par l’auteur n’est pas une validation indépendante et une licence de dépôt ne couvre pas toujours les données.",
      "en": "An author-provided card is not independent verification, and repository licensing does not automatically settle data rights."
    },
    "docs": "https://huggingface.co/docs/hub/model-cards"
  },
  {
    "slug": "diffusers",
    "explain": {
      "fr": "Diffusers propose des pipelines de diffusion et des composants réutilisables pour la génération et l’édition de médias avec des modèles compatibles. Les paramètres, ressources et modèles doivent être documentés pour reproduire un résultat.",
      "en": "Diffusers provides diffusion pipelines and reusable components for compatible media generation and editing models. Parameters, compute needs and model choices matter for reproducibility."
    },
    "use": {
      "fr": "Comparer un pipeline texte-image avec différentes graines et conserver les informations de génération et de droits.",
      "en": "Compare a text-to-image pipeline across seeds and retain generation and rights metadata."
    },
    "limit": {
      "fr": "Des sorties plausibles peuvent être inexactes ; surveiller les droits, les biais et les ressources nécessaires.",
      "en": "Plausible outputs may be inaccurate; review rights, bias and computational requirements."
    },
    "docs": "https://github.com/huggingface/diffusers"
  },
  {
    "slug": "comfyui",
    "explain": {
      "fr": "ComfyUI permet de composer des processus de génération ou traitement de médias sous forme de graphes de nœuds. Cette présentation aide à comprendre les transformations et à partager les configurations.",
      "en": "ComfyUI models media generation and processing as connected node graphs. This helps inspect transformations and share reproducible configurations."
    },
    "use": {
      "fr": "Documenter un workflow de création d’images avec les nœuds, modèles et versions utilisés, puis comparer les variantes.",
      "en": "Document an image workflow with its nodes, models and versions, then compare variations."
    },
    "limit": {
      "fr": "Les extensions communautaires peuvent présenter des risques de compatibilité ou de sécurité ; vérifier la source des modèles et nœuds.",
      "en": "Community extensions may carry compatibility or security risks; verify node and model sources."
    },
    "docs": "https://docs.comfy.org/"
  },
  {
    "slug": "blender",
    "explain": {
      "fr": "Blender est une suite libre de création 3D pour la modélisation, l’animation et le rendu. Il peut compléter des chaînes de production assistées par IA mais n’est pas en soi un modèle génératif.",
      "en": "Blender is an open 3D suite for modeling, animation and rendering. It can complement AI-assisted content workflows but is not itself a generative model."
    },
    "use": {
      "fr": "Préparer un modèle 3D, corriger la topologie d’une sortie IA, puis exporter les ressources vers une scène Web.",
      "en": "Prepare a 3D model, repair AI-generated topology and export assets for a Web scene."
    },
    "limit": {
      "fr": "Distinguer la fidélité géométrique d’une reconstruction automatique de son esthétique ; vérifier les droits sur les ressources.",
      "en": "Separate geometric fidelity of an automated reconstruction from appearance; inspect asset rights."
    },
    "docs": "https://docs.blender.org/manual/en/latest/"
  },
  {
    "slug": "threejs",
    "explain": {
      "fr": "Three.js facilite le rendu de scènes 3D interactives dans des navigateurs compatibles. Il est utile pour mettre en scène des résultats de pipelines IA tout en conservant des interactions Web contrôlées.",
      "en": "Three.js makes interactive 3D scenes possible in supported browsers. It can present AI pipeline outputs while retaining conventional Web interaction controls."
    },
    "use": {
      "fr": "Afficher un objet 3D avec légendes et contrôles, puis ajouter un chemin textuel alternatif pour l’accessibilité.",
      "en": "Display a 3D asset with annotations and controls, and add a textual accessibility alternative."
    },
    "limit": {
      "fr": "Les performances et l’accessibilité dépendent du rendu, des appareils et de la navigation prévue.",
      "en": "Performance and accessibility depend on rendering choices, devices and navigation design."
    },
    "docs": "https://threejs.org/docs/"
  },
  {
    "slug": "react-three-fiber",
    "explain": {
      "fr": "React Three Fiber combine React et Three.js pour décrire des scènes 3D sous forme de composants. Il apporte un modèle d’organisation utile aux expériences Web complexes.",
      "en": "React Three Fiber combines React and Three.js to describe 3D scenes as components. It provides an organizational model for complex Web experiences."
    },
    "use": {
      "fr": "Construire une galerie de modèles 3D avec états et interactions synchronisés avec une interface React.",
      "en": "Build a 3D gallery whose states and interactions integrate with a React interface."
    },
    "limit": {
      "fr": "Les ressources graphiques doivent être libérées et les contenus importants doivent rester accessibles sans scène 3D.",
      "en": "Graphics resources need cleanup and essential content should remain accessible without the 3D scene."
    },
    "docs": "https://github.com/pmndrs/react-three-fiber"
  },
  {
    "slug": "langchain",
    "explain": {
      "fr": "LangChain fournit des composants pour assembler des applications impliquant modèles, récupération documentaire et appels d’outils. Il aide à organiser des intégrations sans prouver la qualité des réponses produites.",
      "en": "LangChain supplies components for applications that combine models, document retrieval and tool calls. It organizes integrations without proving output quality."
    },
    "use": {
      "fr": "Prototyper une chaîne question-document-réponse et enregistrer chaque passage source utilisé.",
      "en": "Prototype a question-document-answer chain with each cited passage recorded."
    },
    "limit": {
      "fr": "La complexité des abstractions et l’évolution des APIs imposent des tests de version, coût et sécurité.",
      "en": "Abstraction complexity and changing APIs require version, cost and security tests."
    },
    "docs": "https://github.com/langchain-ai/langchain"
  },
  {
    "slug": "langgraph",
    "explain": {
      "fr": "LangGraph décrit des workflows à états, avec transitions, interruptions et reprise d’exécution. Ces mécanismes sont utiles aux agents devant demander une confirmation avant certaines actions.",
      "en": "LangGraph defines stateful workflows with transitions, interrupts and resumable execution. These mechanisms help build agents requiring human approval before selected actions."
    },
    "use": {
      "fr": "Modéliser un assistant qui prépare une opération, attend une autorisation explicite puis vérifie son résultat.",
      "en": "Model an assistant that drafts an operation, waits for approval and verifies the final result."
    },
    "limit": {
      "fr": "Le graphe ne fournit pas automatiquement une politique d’autorisation ni une garantie contre l’injection indirecte.",
      "en": "A graph does not automatically enforce authorization policy or protect against indirect prompt injection."
    },
    "docs": "https://github.com/langchain-ai/langgraph"
  },
  {
    "slug": "llamaindex",
    "explain": {
      "fr": "LlamaIndex offre des composants de connexion, indexation et interrogation de documents pour des applications fondées sur des modèles. Il faut distinguer construction du corpus et qualité de génération.",
      "en": "LlamaIndex provides connectors, indexing and document query components for model-driven applications. Corpus preparation remains distinct from answer generation quality."
    },
    "use": {
      "fr": "Construire un prototype de recherche sur des notes de cours avec identifiants de documents et critères d’évaluation.",
      "en": "Build a search prototype for course notes with document identifiers and evaluation criteria."
    },
    "limit": {
      "fr": "Les connecteurs et découpages peuvent perdre le contexte ; vérifier confidentialité et fidélité des citations.",
      "en": "Connectors and chunking can lose context; verify privacy and citation faithfulness."
    },
    "docs": "https://github.com/run-llama/llama_index"
  },
  {
    "slug": "haystack",
    "explain": {
      "fr": "Haystack permet de composer des pipelines de recherche et de question-réponse mêlant documents, retrievers, classement et modèles. L’approche modulaire facilite la mesure des composants.",
      "en": "Haystack helps compose search and question-answering pipelines with documents, retrievers, ranking and models. Modularity supports component-level evaluation."
    },
    "use": {
      "fr": "Comparer recherche lexicale et vectorielle sur le même corpus puis examiner les passages réellement retrouvés.",
      "en": "Compare lexical and vector retrieval on the same corpus and inspect actual retrieved passages."
    },
    "limit": {
      "fr": "Une bonne métrique de récupération ne suffit pas pour confirmer l’exactitude de la synthèse générée.",
      "en": "Good retrieval metrics do not by themselves establish generated answer correctness."
    },
    "docs": "https://docs.haystack.deepset.ai/"
  },
  {
    "slug": "chromadb",
    "explain": {
      "fr": "Chroma stocke des documents et leurs vecteurs pour permettre des recherches par similarité. Il facilite des prototypes RAG, mais la proximité vectorielle reste un indicateur statistique, non une preuve.",
      "en": "Chroma stores documents and vectors for similarity search. It supports RAG prototypes, but vector proximity is statistical evidence, not factual proof."
    },
    "use": {
      "fr": "Indexer un petit corpus de ressources pédagogiques et comparer les passages selon différents paramètres de recherche.",
      "en": "Index a small educational corpus and compare results under different retrieval settings."
    },
    "limit": {
      "fr": "Suivre versions d’embeddings, suppression des données, permissions et risque de réponses hors contexte.",
      "en": "Track embedding versions, data deletion, permissions and out-of-context results."
    },
    "docs": "https://github.com/chroma-core/chroma"
  },
  {
    "slug": "qdrant",
    "explain": {
      "fr": "Qdrant propose un moteur de recherche vectorielle et hybride pour retrouver des éléments similaires et filtrer les résultats selon des métadonnées. Son usage exige des mesures de pertinence.",
      "en": "Qdrant is a vector and hybrid retrieval engine supporting similarity search and metadata filters. Effective use requires relevance measurement."
    },
    "use": {
      "fr": "Rechercher des passages par vecteurs et filtres de langue ou d’année, puis contrôler les correspondances.",
      "en": "Retrieve passages using vectors and language or year filters, then check matched evidence."
    },
    "limit": {
      "fr": "La performance dépend des paramètres d’index et des embeddings ; mettre en place les contrôles d’accès appropriés.",
      "en": "Performance depends on index and embedding choices; implement appropriate access controls."
    },
    "docs": "https://github.com/qdrant/qdrant"
  },
  {
    "slug": "weaviate",
    "explain": {
      "fr": "Weaviate associe stockage d’objets et capacités de recherche vectorielle et hybride. Il peut constituer une couche documentaire derrière des assistants de connaissance.",
      "en": "Weaviate combines object storage with vector and hybrid search capabilities. It can serve as a retrieval layer for knowledge assistants."
    },
    "use": {
      "fr": "Créer une collection de fiches avec leurs dates, provenance, langue et vecteurs afin d’illustrer la recherche hybride.",
      "en": "Create a collection of entries with date, provenance, language and vectors to illustrate hybrid retrieval."
    },
    "limit": {
      "fr": "Un schéma mal défini et des données non vérifiées peuvent propager des erreurs ; mesurer la qualité des résultats.",
      "en": "Poor schemas and unverified data can propagate errors; measure retrieval quality."
    },
    "docs": "https://github.com/weaviate/weaviate"
  },
  {
    "slug": "n8n",
    "explain": {
      "fr": "n8n est un outil d’orchestration de workflows reliant déclencheurs, applications, transformations et parfois modèles. Les automatisations demandent une gestion explicite des secrets et permissions.",
      "en": "n8n orchestrates workflows connecting triggers, apps, transformations and sometimes models. Automation requires explicit secret and permission management."
    },
    "use": {
      "fr": "Collecter des métadonnées de sources, dédoublonner les entrées et préparer une file de relecture manuelle.",
      "en": "Collect source metadata, deduplicate entries and prepare a manual editorial review queue."
    },
    "limit": {
      "fr": "Un workflow publié peut déclencher de vraies actions ; limiter les droits, tester les erreurs et vérifier les licences.",
      "en": "A deployed workflow can trigger real actions; restrict permissions, test failures and review licenses."
    },
    "docs": "https://github.com/n8n-io/n8n"
  },
  {
    "slug": "github-actions",
    "explain": {
      "fr": "GitHub Actions automatise des vérifications et déploiements associés aux dépôts. Il peut aider un portail documentaire à valider traductions, liens et tests avant une fusion.",
      "en": "GitHub Actions automates checks and deployments associated with repositories. It can help validate translations, links and tests before merging documentation changes."
    },
    "use": {
      "fr": "Exécuter une compilation, des tests de cohérence et un contrôle des références à chaque PR.",
      "en": "Run builds, integrity checks and reference validation on each pull request."
    },
    "limit": {
      "fr": "Les journaux et permissions des workflows doivent être protégés ; une CI réussie ne valide pas l’exactitude scientifique.",
      "en": "Workflow logs and permissions need protection; a successful CI run does not scientifically validate content."
    },
    "docs": "https://github.com/features/actions"
  },
  {
    "slug": "playwright",
    "explain": {
      "fr": "Playwright automatise les interactions de navigateur pour tester parcours, affichages et actions. Il peut reproduire des étapes de navigation d’un agent mais n’est pas lui-même un modèle d’intelligence artificielle.",
      "en": "Playwright automates browser interactions to test workflows, rendering and actions. It can reproduce agent-like navigation but is not itself an AI model."
    },
    "use": {
      "fr": "Tester le mode clair/sombre, le clavier, les formulaires et la navigation multilingue du portail.",
      "en": "Test theme modes, keyboard interaction, forms and multilingual portal navigation."
    },
    "limit": {
      "fr": "Les tests de bout en bout ne remplacent ni un audit de sécurité ni une vérification humaine d’accessibilité.",
      "en": "End-to-end tests do not replace security audits or human accessibility assessment."
    },
    "docs": "https://playwright.dev/docs/intro"
  },
  {
    "slug": "lighthouse",
    "explain": {
      "fr": "Lighthouse produit des audits automatisés de performance et de pratiques Web, dont certains contrôles d’accessibilité. Les scores sont des indicateurs partiels à interpréter selon les conditions de mesure.",
      "en": "Lighthouse generates automated performance and Web-practice audits, including selected accessibility checks. Scores are partial indicators requiring context."
    },
    "use": {
      "fr": "Comparer deux versions d’une page après modification des médias et scripts, à conditions proches.",
      "en": "Compare page versions after changing media or scripts under similar test conditions."
    },
    "limit": {
      "fr": "Un score élevé ne prouve pas l’absence de défauts d’accessibilité ou d’expérience utilisateur.",
      "en": "A high score does not prove absence of accessibility or usability problems."
    },
    "docs": "https://github.com/GoogleChrome/lighthouse"
  },
  {
    "slug": "axe-core",
    "explain": {
      "fr": "axe-core effectue des contrôles automatisés d’accessibilité sur l’HTML rendu. Il détecte certaines classes d’erreurs, sans remplacer les essais clavier et les tests avec des personnes.",
      "en": "axe-core performs automated accessibility checks on rendered HTML. It catches selected error classes but cannot replace keyboard and user testing."
    },
    "use": {
      "fr": "Vérifier les noms accessibles, le contraste et les relations des champs dans les nouvelles pages.",
      "en": "Check accessible names, contrast and field relationships on new pages."
    },
    "limit": {
      "fr": "Les résultats exigent une interprétation ; les problèmes cognitifs et contextuels ne sont pas tous détectables automatiquement.",
      "en": "Results require interpretation; cognitive and contextual issues are not all automatically detectable."
    },
    "docs": "https://www.deque.com/axe/"
  },
  {
    "slug": "c2patool",
    "explain": {
      "fr": "c2patool est un utilitaire permettant d’inspecter ou d’interagir avec certaines métadonnées de provenance conformes à C2PA. Il aide à lire des assertions signées sans juger la vérité de la scène décrite.",
      "en": "c2patool is a utility for inspecting or handling supported C2PA provenance metadata. It helps examine signed claims without judging whether a depicted scene is true."
    },
    "use": {
      "fr": "Analyser le manifeste d’un média de démonstration et confronter ses assertions à des sources indépendantes.",
      "en": "Inspect a sample media manifest and compare its claims with independent evidence."
    },
    "limit": {
      "fr": "L’absence de manifeste n’est pas une preuve de génération IA ; les signatures validées ne confirment pas la vérité factuelle.",
      "en": "Missing manifests are not proof of AI generation; valid signatures do not establish factual truth."
    },
    "docs": "https://spec.c2pa.org/"
  }
];
