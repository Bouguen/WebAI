export const agentFrameworks=[
  {
    "slug": "browser-use",
    "name": "Browser Use",
    "provider": "Browser Use",
    "kind": "creation",
    "category": "browser",
    "runtime": "python",
    "website": "https://docs.browser-use.com/",
    "docs": "https://github.com/browser-use/browser-use",
    "description": {
      "fr": "Bibliothèque et écosystème permettant de concevoir des agents pilotant un navigateur. À distinguer d’un assistant prêt à l’emploi : le développeur configure le modèle, les outils, les accès et les règles d’exécution.",
      "en": "Library and ecosystem for building browser-controlling agents. Unlike a ready-to-use assistant, the developer configures models, tools, access and execution policy."
    },
    "scenario": {
      "fr": "Tester un agent chargé de parcourir un catalogue de démonstration et d’extraire des fiches sans effectuer d’achat.",
      "en": "Test an agent navigating a demo catalog and extracting listings without making purchases."
    },
    "start": {
      "fr": "Consulter le guide officiel, préparer un environnement isolé et tester une tâche sans connexion personnelle.",
      "en": "Read the official guide, prepare an isolated environment and test a task without personal credentials."
    },
    "steps": [
      {
        "fr": "Décrire les sites autorisés",
        "en": "Define permitted websites"
      },
      {
        "fr": "Préparer un environnement isolé",
        "en": "Prepare an isolated environment"
      },
      {
        "fr": "Tester sur des données fictives",
        "en": "Test on fictional data"
      },
      {
        "fr": "Vérifier la journalisation et les résultats",
        "en": "Review action logs and results"
      }
    ],
    "limits": {
      "fr": "La manipulation de pages expose les agents à l’injection indirecte et aux changements de DOM. Les opérations importantes exigent confirmation et contrôle.",
      "en": "Page interaction exposes agents to indirect injection and changing DOM structures. Consequential actions need approval and review."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "langgraph",
    "name": "LangGraph",
    "provider": "LangChain",
    "kind": "creation",
    "category": "orchestration",
    "runtime": "python-js",
    "website": "https://www.langchain.com/langgraph",
    "docs": "https://docs.langchain.com/oss/python/langgraph/overview",
    "description": {
      "fr": "Framework et runtime d’orchestration basés sur des états, des nœuds et des transitions. Il convient aux processus agentiques nécessitant des reprises, des interruptions et un contrôle du déroulement.",
      "en": "Stateful orchestration framework and runtime based on graph nodes and transitions. Useful for agent workflows requiring resumption, interruption and explicit control flow."
    },
    "scenario": {
      "fr": "Construire un assistant documentaire avec étapes de récupération, synthèse et approbation humaine.",
      "en": "Build a document assistant with retrieval, synthesis and human-approval stages."
    },
    "start": {
      "fr": "Lire les concepts d’état et de graphe avant de réaliser un flux minimal avec un seul outil.",
      "en": "Study graph and state concepts before building a minimal workflow with one tool."
    },
    "steps": [
      {
        "fr": "Modéliser les états",
        "en": "Model state transitions"
      },
      {
        "fr": "Définir nœuds et permissions",
        "en": "Define nodes and permissions"
      },
      {
        "fr": "Prévoir l’interruption humaine",
        "en": "Add a human interruption point"
      },
      {
        "fr": "Tracer chaque transition",
        "en": "Trace each transition"
      }
    ],
    "limits": {
      "fr": "Le graphe ne remplace pas la sécurité des API ni la vérification des décisions du modèle.",
      "en": "Graphs do not replace API authorization or checking model decisions."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "crewai",
    "name": "CrewAI",
    "provider": "CrewAI",
    "kind": "creation",
    "category": "orchestration",
    "runtime": "python",
    "website": "https://www.crewai.com/",
    "docs": "https://docs.crewai.com/",
    "description": {
      "fr": "Framework orienté équipes d’agents spécialisés (« crews ») et flux d’orchestration. L’outil permet de définir rôles, tâches, interactions et sorties pour des automatisations structurées.",
      "en": "Framework for teams of specialized agents (crews) and orchestrated flows. Developers define roles, tasks, interactions and structured outputs."
    },
    "scenario": {
      "fr": "Faire coopérer un agent collecteur de sources et un agent rédacteur, avec une relecture humaine finale.",
      "en": "Coordinate a source-gathering agent and a drafting agent, followed by human review."
    },
    "start": {
      "fr": "Installer les dépendances via la documentation CrewAI et préparer un premier projet de test avec deux rôles.",
      "en": "Follow CrewAI installation documentation and create a test project with two roles."
    },
    "steps": [
      {
        "fr": "Définir les rôles",
        "en": "Define roles"
      },
      {
        "fr": "Séparer les sources des consignes",
        "en": "Separate sources from instructions"
      },
      {
        "fr": "Limiter les outils par agent",
        "en": "Restrict tools per agent"
      },
      {
        "fr": "Évaluer le livrable commun",
        "en": "Evaluate their joint output"
      }
    ],
    "limits": {
      "fr": "Multiplier les agents peut accroître coûts, erreurs et complexité sans améliorer les résultats.",
      "en": "Adding agents may increase cost, errors and complexity without improving outcomes."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "openai-agents-sdk",
    "name": "OpenAI Agents SDK",
    "provider": "OpenAI",
    "kind": "creation",
    "category": "framework",
    "runtime": "python",
    "website": "https://openai.github.io/openai-agents-python/",
    "docs": "https://openai.github.io/openai-agents-python/quickstart/",
    "description": {
      "fr": "SDK pour assembler des agents avec outils, transferts entre spécialistes, garde-fous, sessions et traces. Il fournit un runtime de développement, pas un produit agent autonome utilisable sans intégration.",
      "en": "SDK for composing agents with tools, specialist handoffs, guardrails, sessions and tracing. A developer runtime rather than a finished standalone agent product."
    },
    "scenario": {
      "fr": "Créer un agent chargé de classer des demandes, d’appeler une fonction fictive et de produire une sortie structurée.",
      "en": "Create an agent that triages requests, calls a dummy function and produces structured output."
    },
    "start": {
      "fr": "Suivre le quickstart officiel, configurer un projet avec les identifiants requis et limiter les premiers outils à des fonctions sans effet de bord.",
      "en": "Follow the official quickstart, configure credentials as required and start with side-effect-free tools."
    },
    "steps": [
      {
        "fr": "Définir un agent et sa consigne",
        "en": "Define an agent and instructions"
      },
      {
        "fr": "Ajouter un outil de test",
        "en": "Add a test tool"
      },
      {
        "fr": "Activer les traces",
        "en": "Enable traces"
      },
      {
        "fr": "Contrôler les validations et permissions",
        "en": "Review validation and permissions"
      }
    ],
    "limits": {
      "fr": "Le SDK ne garantit pas l’absence d’hallucinations, ni la sécurité des fonctions connectées. L’exécution réelle peut entraîner des coûts API.",
      "en": "The SDK does not guarantee factual accuracy or secure connected tools. Real runs may incur API charges."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "google-adk",
    "name": "Google Agent Development Kit",
    "provider": "Google",
    "kind": "creation",
    "category": "framework",
    "runtime": "python-js",
    "website": "https://google.github.io/adk-docs/",
    "docs": "https://developers.googleblog.com/agent-development-kit-easy-to-build-multi-agent-applications/",
    "description": {
      "fr": "Framework de développement d’agents et systèmes multi-agents permettant de combiner modèles, outils et phases de test. Il fournit des briques de construction et de déploiement plutôt qu’un répertoire d’agents déjà configurés.",
      "en": "Development framework for agents and multi-agent systems combining models, tools and testing. Provides building blocks instead of a ready-made directory of agents."
    },
    "scenario": {
      "fr": "Créer deux agents pour rechercher des documents et reformuler les résultats avec références.",
      "en": "Create two agents for retrieving documents and summarizing results with references."
    },
    "start": {
      "fr": "Consulter la documentation ADK et réaliser le tutoriel d’agent minimal avant toute délégation.",
      "en": "Read ADK documentation and complete the minimal agent tutorial before delegation."
    },
    "steps": [
      {
        "fr": "Installer le SDK choisi",
        "en": "Install the selected SDK"
      },
      {
        "fr": "Décrire outils et modèles",
        "en": "Describe tools and models"
      },
      {
        "fr": "Tester le transfert entre agents",
        "en": "Test handoffs"
      },
      {
        "fr": "Vérifier traces et coûts",
        "en": "Review traces and costs"
      }
    ],
    "limits": {
      "fr": "Les modèles et outils externes ont leurs propres limites, permissions et tarifs ; l’intégration n’est pas une validation.",
      "en": "External models and tools have their own limits, permissions and pricing; integration is not validation."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "mastra",
    "name": "Mastra",
    "provider": "Mastra",
    "kind": "creation",
    "category": "framework",
    "runtime": "typescript",
    "website": "https://mastra.ai/",
    "docs": "https://mastra.ai/docs",
    "description": {
      "fr": "Framework TypeScript pour créer des agents, outils et workflows avec mémoire, intégrations et fonctionnalités d’observation selon les modules employés.",
      "en": "TypeScript framework for agents, tools and workflows with memory, integrations and observability according to configured modules."
    },
    "scenario": {
      "fr": "Construire une recherche documentaire avec outils contrôlés et résultat sous forme de résumé vérifiable.",
      "en": "Build document retrieval with constrained tools and an auditable summary output."
    },
    "start": {
      "fr": "Créer un projet selon les instructions officielles, puis connecter une seule fonction de démonstration.",
      "en": "Create a project following official instructions, then connect a single demonstration function."
    },
    "steps": [
      {
        "fr": "Créer un agent minimal",
        "en": "Create a minimal agent"
      },
      {
        "fr": "Décrire le schéma de l’outil",
        "en": "Define a tool schema"
      },
      {
        "fr": "Tester les permissions",
        "en": "Test permissions"
      },
      {
        "fr": "Comparer traces et résultats",
        "en": "Compare traces and outputs"
      }
    ],
    "limits": {
      "fr": "Les fonctionnalités et garanties peuvent évoluer selon les modules. Ne pas utiliser de données sensibles avant revue des frontières d’accès.",
      "en": "Capabilities and guarantees vary by module. Avoid sensitive data before reviewing access boundaries."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "pydanticai",
    "name": "PydanticAI",
    "provider": "Pydantic",
    "kind": "creation",
    "category": "framework",
    "runtime": "python",
    "website": "https://ai.pydantic.dev/",
    "docs": "https://ai.pydantic.dev/agents/",
    "description": {
      "fr": "Bibliothèque Python pour applications agentiques utilisant validation des données, dépendances typées et outils structurés. Particulièrement utile quand les entrées et sorties doivent respecter un schéma explicite.",
      "en": "Python library for agent applications with data validation, typed dependencies and structured tools. Useful where inputs and outputs must follow explicit schemas."
    },
    "scenario": {
      "fr": "Extraire des métadonnées bibliographiques sous forme validée, puis détecter les champs manquants.",
      "en": "Extract bibliographic metadata into a validated structure and detect missing fields."
    },
    "start": {
      "fr": "Suivre le guide de démarrage PydanticAI avec une sortie structurée sur un petit corpus fictif.",
      "en": "Follow PydanticAI getting-started guidance using structured output from a fictional corpus."
    },
    "steps": [
      {
        "fr": "Définir le schéma",
        "en": "Define the schema"
      },
      {
        "fr": "Configurer le modèle",
        "en": "Configure the model"
      },
      {
        "fr": "Tester les erreurs de validation",
        "en": "Test validation failures"
      },
      {
        "fr": "Vérifier manuellement le contenu",
        "en": "Manually inspect content"
      }
    ],
    "limits": {
      "fr": "Une structure conforme au schéma n’implique pas que les informations sont correctes.",
      "en": "Schema-compliant output does not imply factual accuracy."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "n8n-ai-agent",
    "name": "n8n — AI Agent node",
    "provider": "n8n",
    "kind": "creation",
    "category": "workflow",
    "runtime": "visual",
    "website": "https://n8n.io/",
    "docs": "https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/",
    "description": {
      "fr": "Composant d’automatisation visuelle ajoutant des capacités de raisonnement avec outils à des workflows n8n. La présence d’un nœud IA ne rend pas toutes les étapes du scénario agentiques.",
      "en": "Visual automation component adding model-driven tool use to n8n workflows. Adding an AI node does not make every step agentic."
    },
    "scenario": {
      "fr": "Préparer un circuit de collecte de sources, classification et proposition de notification soumise à validation.",
      "en": "Build a source-monitoring, classification and proposed-notification workflow awaiting approval."
    },
    "start": {
      "fr": "Dans un environnement n8n de test, ajouter un nœud AI Agent et des outils non sensibles.",
      "en": "In a test n8n environment, add an AI Agent node with non-sensitive tools."
    },
    "steps": [
      {
        "fr": "Décrire le déclencheur",
        "en": "Describe the trigger"
      },
      {
        "fr": "Configurer l’agent et ses outils",
        "en": "Configure agent and tools"
      },
      {
        "fr": "Ajouter validation humaine",
        "en": "Add human approval"
      },
      {
        "fr": "Tester les erreurs et journaux",
        "en": "Test failures and logs"
      }
    ],
    "limits": {
      "fr": "Une automatisation peut exécuter des actions réelles et stocker des données. Restreindre les identifiants et permissions.",
      "en": "Automations may execute real actions and store data. Restrict credentials and permissions."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "dify",
    "name": "Dify",
    "provider": "Dify",
    "kind": "creation",
    "category": "workflow",
    "runtime": "visual",
    "website": "https://dify.ai/",
    "docs": "https://docs.dify.ai/",
    "description": {
      "fr": "Plateforme de composition d’applications IA et de workflows avec modèles, outils, sources documentaires et logique de traitement. Les fonctionnalités varient selon l’édition et les intégrations.",
      "en": "Platform for building AI apps and workflows using models, tools, document sources and processing logic. Features vary by edition and integration."
    },
    "scenario": {
      "fr": "Créer un assistant de recherche documentaire sur un petit jeu de documents publics avec citations à contrôler.",
      "en": "Create a documentary research assistant using a small public corpus with citations to review."
    },
    "start": {
      "fr": "Se référer à la documentation Dify et concevoir un prototype sur données publiques avant d’ajouter des connecteurs.",
      "en": "Use Dify documentation to prototype with public data before adding connectors."
    },
    "steps": [
      {
        "fr": "Préparer les données autorisées",
        "en": "Prepare licensed data"
      },
      {
        "fr": "Définir le workflow",
        "en": "Define the workflow"
      },
      {
        "fr": "Tester les sorties et citations",
        "en": "Test outputs and citations"
      },
      {
        "fr": "Définir les restrictions d’accès",
        "en": "Define access restrictions"
      }
    ],
    "limits": {
      "fr": "Une plateforme de workflow ne garantit pas la précision documentaire ni la confidentialité des connecteurs externes.",
      "en": "A workflow platform does not guarantee evidence accuracy or privacy of external connectors."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "flowise",
    "name": "Flowise",
    "provider": "FlowiseAI",
    "kind": "creation",
    "category": "workflow",
    "runtime": "visual",
    "website": "https://flowiseai.com/",
    "docs": "https://docs.flowiseai.com/",
    "description": {
      "fr": "Environnement visuel pour assembler des applications et agents utilisant modèles, outils et flux de récupération documentaire. Les graphes d’exécution doivent être évalués avant usage sur des données sensibles.",
      "en": "Visual environment for assembling model applications and agents using tools and retrieval flows. Execution graphs require review before using sensitive data."
    },
    "scenario": {
      "fr": "Prototyper un agent qui consulte des documents publics, extrait des passages et prépare une réponse sourcée.",
      "en": "Prototype an agent that reads public documents, extracts passages and drafts a sourced answer."
    },
    "start": {
      "fr": "Suivre la documentation Flowise, configurer un environnement d’essai et commencer par un workflow sans opérations sensibles.",
      "en": "Follow Flowise documentation, configure a test environment and start with a workflow without sensitive actions."
    },
    "steps": [
      {
        "fr": "Choisir les sources",
        "en": "Choose sources"
      },
      {
        "fr": "Construire le flux",
        "en": "Build the flow"
      },
      {
        "fr": "Tester les cas sans réponse",
        "en": "Test unanswerable cases"
      },
      {
        "fr": "Vérifier autorisations et résultats",
        "en": "Review permissions and results"
      }
    ],
    "limits": {
      "fr": "Les intégrations et graphes peuvent exposer des données ou des secrets. Le contrôle des accès reste essentiel.",
      "en": "Integrations and flows may expose data or secrets. Access control remains essential."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  }
];
