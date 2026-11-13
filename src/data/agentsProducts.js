export const agentProducts=[
  {
    "slug": "chatgpt-work",
    "name": "ChatGPT Work",
    "provider": "OpenAI",
    "kind": "pret",
    "category": "general",
    "runtime": "interface",
    "website": "https://openai.com/index/chatgpt-for-your-most-ambitious-work/",
    "docs": "https://openai.com/index/chatgpt-for-your-most-ambitious-work/",
    "description": {
      "fr": "Environnement agentique pour mener des tâches complexes sur plusieurs étapes, produire des livrables et exploiter les applications ou fichiers autorisés. C’est un produit opérationnel, et non un framework que l’on installe dans son site.",
      "en": "An agentic work environment for multi-step tasks, deliverables and authorized connected apps or files. This is an end-user product, not a framework you embed in your website."
    },
    "scenario": {
      "fr": "Produire un dossier comparatif à partir de documents de référence et le livrer sous une forme réutilisable.",
      "en": "Produce a source-led comparison dossier and deliver it in a reusable format."
    },
    "start": {
      "fr": "Ouvrir ChatGPT, choisir Work lorsqu’il est disponible et décrire un résultat vérifiable avec ses sources et contraintes.",
      "en": "Open ChatGPT, select Work where available and describe an auditable deliverable with sources and constraints."
    },
    "steps": [
      {
        "fr": "Définir les accès autorisés",
        "en": "Define authorized access"
      },
      {
        "fr": "Fournir les documents sources",
        "en": "Provide source documents"
      },
      {
        "fr": "Décrire le livrable attendu",
        "en": "Describe the requested deliverable"
      },
      {
        "fr": "Revoir les conclusions et les actions avant diffusion",
        "en": "Review conclusions and actions before distribution"
      }
    ],
    "limits": {
      "fr": "L’accès dépend de l’offre et du déploiement. Les résultats, permissions et documents doivent être contrôlés par le responsable de la tâche.",
      "en": "Availability depends on the plan and rollout. Outcomes, permissions and documents require human review."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "chatgpt-atlas-agent",
    "name": "ChatGPT Atlas — Agent mode",
    "provider": "OpenAI",
    "kind": "pret",
    "category": "browser",
    "runtime": "interface",
    "website": "https://help.openai.com/en/articles/12628199",
    "docs": "https://help.openai.com/en/articles/12628199",
    "description": {
      "fr": "Mode agent intégré au navigateur ChatGPT Atlas pour parcourir des pages, cliquer et accomplir des étapes Web sous contrôle de l’utilisateur. Les fonctions varient selon le navigateur et les paramètres de sécurité.",
      "en": "Agent mode in the ChatGPT Atlas browser for navigating pages, clicking and completing Web steps under user control. Available functions depend on browser and security settings."
    },
    "scenario": {
      "fr": "Consulter trois pages officielles, extraire des informations comparables et préparer un compte rendu sourcé.",
      "en": "Visit three official pages, extract comparable details and draft a sourced report."
    },
    "start": {
      "fr": "Dans Atlas, ouvrir l’interface ChatGPT latérale et choisir Agent mode avant de formuler une tâche de navigation.",
      "en": "In Atlas, open the ChatGPT sidebar and choose Agent mode before describing a browsing task."
    },
    "steps": [
      {
        "fr": "Préciser les sites permis",
        "en": "Specify permitted sites"
      },
      {
        "fr": "Lancer une navigation non sensible",
        "en": "Start with a low-risk browsing task"
      },
      {
        "fr": "Contrôler les pages visitées",
        "en": "Review visited pages"
      },
      {
        "fr": "Confirmer séparément toute action engageante",
        "en": "Separately approve consequential actions"
      }
    ],
    "limits": {
      "fr": "Un agent navigant peut rencontrer des instructions malveillantes sur les pages. Ne lui accorder ni mots de passe ni autorisations globales inutiles.",
      "en": "Browser agents may encounter malicious instructions in pages. Avoid unnecessary credentials or broad permissions."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "codex",
    "name": "OpenAI Codex",
    "provider": "OpenAI",
    "kind": "pret",
    "category": "coding",
    "runtime": "code",
    "website": "https://developers.openai.com/learn/codex",
    "docs": "https://developers.openai.com/api/docs/guides/code-generation",
    "description": {
      "fr": "Agent de développement logiciel capable d’explorer un dépôt, préparer des modifications, exécuter des contrôles et aider à examiner le code. Les interfaces et droits disponibles dépendent du contexte d’utilisation.",
      "en": "Software development agent for inspecting repositories, preparing changes, running checks and helping review code. Interfaces and permissions vary by environment."
    },
    "scenario": {
      "fr": "Corriger un bug documenté dans une branche, ajouter des tests, puis examiner le diff avant fusion.",
      "en": "Fix a documented bug in a branch, add tests and review the diff before merging."
    },
    "start": {
      "fr": "Utiliser l’interface Codex adaptée au projet (éditeur, application ou CLI) et fournir une demande précise avec les critères de test.",
      "en": "Use an appropriate Codex interface (editor, app or CLI) and give a scoped request with test criteria."
    },
    "steps": [
      {
        "fr": "Créer une branche de travail",
        "en": "Create a working branch"
      },
      {
        "fr": "Décrire le comportement attendu",
        "en": "Describe expected behavior"
      },
      {
        "fr": "Analyser les modifications proposées",
        "en": "Inspect the proposed changes"
      },
      {
        "fr": "Lancer les tests et valider avant fusion",
        "en": "Run tests and approve before merging"
      }
    ],
    "limits": {
      "fr": "Les modifications peuvent casser l’application, dépendre de secrets ou générer des coûts. Vérifier les diff, les accès et les tests.",
      "en": "Changes can break the app, involve secrets or incur costs. Review diffs, access scopes and tests."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "claude-code",
    "name": "Claude Code",
    "provider": "Anthropic",
    "kind": "pret",
    "category": "coding",
    "runtime": "code",
    "website": "https://code.claude.com/docs/en/overview",
    "docs": "https://support.claude.com/en/articles/14553517-claude-code-common-developer-use-cases",
    "description": {
      "fr": "Agent de programmation agissant sur des fichiers et commandes dans des environnements pris en charge. Il sert à analyser, modifier et tester du code, avec mécanismes de permissions et de revue.",
      "en": "Coding agent working with files and commands in supported environments. It supports code inspection, editing and testing with permission controls and review."
    },
    "scenario": {
      "fr": "Examiner une fonction, expliquer la cause d’une erreur et proposer un correctif accompagné d’un test.",
      "en": "Inspect a function, explain the cause of a bug and prepare a patch with a regression test."
    },
    "start": {
      "fr": "Consulter la documentation d’installation officielle et lancer Claude Code dans un projet de démonstration.",
      "en": "Follow the official installation guide and launch Claude Code in a demo project."
    },
    "steps": [
      {
        "fr": "Choisir un dépôt non sensible",
        "en": "Choose a non-sensitive repository"
      },
      {
        "fr": "Demander un plan de modification",
        "en": "Request a modification plan"
      },
      {
        "fr": "Contrôler les permissions d’exécution",
        "en": "Control execution permissions"
      },
      {
        "fr": "Vérifier la sortie et les tests",
        "en": "Review output and tests"
      }
    ],
    "limits": {
      "fr": "Les commandes et accès aux fichiers ont des conséquences réelles ; limiter les permissions et vérifier le code exécuté.",
      "en": "Commands and file access can have real consequences; limit permissions and inspect executed code."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "github-copilot-agent",
    "name": "GitHub Copilot Agents",
    "provider": "GitHub",
    "kind": "pret",
    "category": "coding",
    "runtime": "cloud",
    "website": "https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents",
    "docs": "https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents/about-github-copilot-agents",
    "description": {
      "fr": "Famille d’agents de développement intégrés aux flux GitHub et aux outils de programmation : sessions assistées, tâches déléguées et propositions de modifications sous forme de branches ou de PR.",
      "en": "Family of coding agents integrated with GitHub workflows and development tools: assisted sessions, delegated tasks and branch or pull-request changes."
    },
    "scenario": {
      "fr": "Déléguer le traitement d’une issue simple et examiner la Pull Request créée avant toute fusion.",
      "en": "Delegate a small issue and review the resulting pull request before merging."
    },
    "start": {
      "fr": "Depuis GitHub ou un environnement Copilot pris en charge, choisir l’agent adapté et décrire un objectif limité.",
      "en": "From GitHub or a supported Copilot environment, select the appropriate agent and assign a scoped goal."
    },
    "steps": [
      {
        "fr": "Choisir une issue précise",
        "en": "Choose a specific issue"
      },
      {
        "fr": "Vérifier les accès du dépôt",
        "en": "Review repository access"
      },
      {
        "fr": "Examiner la PR et les journaux",
        "en": "Inspect the PR and logs"
      },
      {
        "fr": "Exécuter les tests avant validation",
        "en": "Run tests before approval"
      }
    ],
    "limits": {
      "fr": "La disponibilité dépend du forfait et des politiques de dépôt. Les PR restent à examiner, y compris lorsque les tests automatiques passent.",
      "en": "Availability depends on plan and repository policies. Pull requests still require review even if automated tests pass."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "cursor-agent",
    "name": "Cursor Agent",
    "provider": "Cursor",
    "kind": "pret",
    "category": "coding",
    "runtime": "editor",
    "website": "https://cursor.com/",
    "docs": "https://docs.cursor.com/en/agent/overview",
    "description": {
      "fr": "Assistant agentique de développement dans l’éditeur Cursor, capable de rechercher du code, modifier plusieurs fichiers et lancer des commandes dans un contexte de projet.",
      "en": "Agentic coding assistant inside the Cursor editor, able to search code, edit multiple files and run project commands."
    },
    "scenario": {
      "fr": "Réorganiser un composant complexe tout en conservant son comportement et ses tests.",
      "en": "Refactor a complex component while preserving behavior and tests."
    },
    "start": {
      "fr": "Ouvrir le projet dans Cursor et utiliser le mode Agent avec un objectif et des contraintes de modification.",
      "en": "Open a project in Cursor and use Agent mode with a clearly defined goal and edit constraints."
    },
    "steps": [
      {
        "fr": "Établir le périmètre des fichiers",
        "en": "Set file boundaries"
      },
      {
        "fr": "Activer Agent",
        "en": "Activate Agent mode"
      },
      {
        "fr": "Examiner les différences et les commandes",
        "en": "Review changes and commands"
      },
      {
        "fr": "Annuler ou valider après vérification",
        "en": "Undo or approve after checks"
      }
    ],
    "limits": {
      "fr": "Le degré d’automatisation et l’exécution de commandes nécessitent une surveillance. Les fonctions varient selon la configuration.",
      "en": "Automation level and command execution require oversight. Features vary with configuration."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "jules",
    "name": "Jules",
    "provider": "Google",
    "kind": "pret",
    "category": "coding",
    "runtime": "cloud",
    "website": "https://jules.google/",
    "docs": "https://jules.google/docs/",
    "description": {
      "fr": "Agent logiciel connecté aux dépôts GitHub qui prépare un plan, travaille dans un environnement de développement isolé et propose des changements pour revue.",
      "en": "GitHub-connected software agent that creates a plan, works in an isolated development environment and presents proposed changes for review."
    },
    "scenario": {
      "fr": "Ajouter des tests à une fonction et ouvrir une proposition de modification dans GitHub.",
      "en": "Add tests to a function and prepare a proposed change through GitHub."
    },
    "start": {
      "fr": "Se connecter à Jules, autoriser un dépôt GitHub choisi, sélectionner une branche et fournir une tâche.",
      "en": "Sign in to Jules, grant access to a selected GitHub repository, choose a branch and describe a task."
    },
    "steps": [
      {
        "fr": "Limiter la portée des dépôts connectés",
        "en": "Restrict connected repositories"
      },
      {
        "fr": "Lire le plan",
        "en": "Read the plan"
      },
      {
        "fr": "Inspecter les modifications",
        "en": "Inspect changes"
      },
      {
        "fr": "Approuver la PR après tests",
        "en": "Approve the pull request after testing"
      }
    ],
    "limits": {
      "fr": "Les fonctionnalités et limites de quotas évoluent. Ne jamais confondre création d’une PR et publication en production.",
      "en": "Features and usage limits can change. Creating a pull request is not the same as deploying to production."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "gemini-cli",
    "name": "Gemini CLI",
    "provider": "Google",
    "kind": "pret",
    "category": "coding",
    "runtime": "terminal",
    "website": "https://github.com/google-gemini/gemini-cli",
    "docs": "https://github.com/google-gemini/gemini-cli",
    "description": {
      "fr": "Interface agentique de terminal orientée développement et automatisation de tâches locales via les modèles Gemini et des outils configurables.",
      "en": "Agentic terminal interface for coding and local task automation with Gemini models and configurable tools."
    },
    "scenario": {
      "fr": "Analyser les dépendances d’un projet et préparer un plan d’amélioration sans modifier la production.",
      "en": "Inspect project dependencies and prepare an improvement plan without changing production."
    },
    "start": {
      "fr": "Lire les instructions du dépôt officiel, installer l’outil adapté et démarrer dans un dossier de test.",
      "en": "Read the official repository setup, install the appropriate client and start in a test folder."
    },
    "steps": [
      {
        "fr": "Installer depuis la source officielle",
        "en": "Install from official sources"
      },
      {
        "fr": "Vérifier les capacités accordées",
        "en": "Review granted capabilities"
      },
      {
        "fr": "Décrire une tâche en lecture seule",
        "en": "Start with a read-only task"
      },
      {
        "fr": "Valider toute commande avant exécution",
        "en": "Approve commands before execution"
      }
    ],
    "limits": {
      "fr": "Une interface de terminal peut lire des secrets et modifier le disque ; limiter son environnement et les commandes accessibles.",
      "en": "A terminal agent can read secrets and modify files; limit its environment and commands."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "openhands",
    "name": "OpenHands",
    "provider": "OpenHands",
    "kind": "pret",
    "category": "coding",
    "runtime": "mixed",
    "website": "https://github.com/OpenHands/OpenHands",
    "docs": "https://github.com/OpenHands/docs",
    "description": {
      "fr": "Écosystème d’agents de développement logiciel proposant une application Web ou des modes en ligne de commande, ainsi que des SDK pour construire des automatisations de programmation.",
      "en": "Software-agent ecosystem with Web and command-line experiences, alongside SDKs for developing coding automations."
    },
    "scenario": {
      "fr": "Explorer un dépôt, proposer une correction de bug et recueillir les résultats de tests dans un environnement contrôlé.",
      "en": "Explore a repository, propose a bug fix and gather test results in a controlled environment."
    },
    "start": {
      "fr": "Consulter la documentation officielle OpenHands et choisir un environnement isolé pour une première tâche.",
      "en": "Read the official OpenHands documentation and select an isolated environment for a first task."
    },
    "steps": [
      {
        "fr": "Choisir l’environnement et ses limites",
        "en": "Choose the environment and limits"
      },
      {
        "fr": "Configurer uniquement les accès requis",
        "en": "Configure only needed access"
      },
      {
        "fr": "Demander une correction mesurable",
        "en": "Request a measurable correction"
      },
      {
        "fr": "Inspecter les fichiers et les résultats",
        "en": "Inspect files and results"
      }
    ],
    "limits": {
      "fr": "Le projet regroupe plusieurs produits et bibliothèques ; ne pas supposer que chaque fonction existe dans toutes les éditions.",
      "en": "The ecosystem contains several products and libraries; do not assume every feature exists in every edition."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "cline",
    "name": "Cline",
    "provider": "Cline",
    "kind": "pret",
    "category": "coding",
    "runtime": "editor",
    "website": "https://github.com/cline/cline",
    "docs": "https://docs.cline.bot/",
    "description": {
      "fr": "Agent de programmation intégré à des environnements d’édition, spécialisé dans les modifications de code et l’exécution encadrée d’étapes techniques avec un modèle configuré.",
      "en": "Coding agent integrated with editor workflows, focused on source changes and supervised technical tasks using a configured model."
    },
    "scenario": {
      "fr": "Explorer un projet, corriger un problème de mise en page et documenter les fichiers modifiés.",
      "en": "Explore a project, fix a layout defect and document changed files."
    },
    "start": {
      "fr": "Installer l’extension depuis une source officielle, configurer les modèles et commencer sur une branche de test.",
      "en": "Install from an official source, configure model access and start on a test branch."
    },
    "steps": [
      {
        "fr": "Connecter une configuration contrôlée",
        "en": "Connect a controlled setup"
      },
      {
        "fr": "Décrire les fichiers autorisés",
        "en": "Specify allowed files"
      },
      {
        "fr": "Lire les demandes de permission",
        "en": "Read permission prompts"
      },
      {
        "fr": "Tester avant d’accepter les changements",
        "en": "Test before accepting edits"
      }
    ],
    "limits": {
      "fr": "Des modèles externes peuvent engendrer des coûts ou recevoir du contexte de code ; examiner les règles de partage et de confidentialité.",
      "en": "External models may incur charges or receive source context; examine data-sharing and privacy terms."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "aider",
    "name": "Aider",
    "provider": "Aider",
    "kind": "pret",
    "category": "coding",
    "runtime": "terminal",
    "website": "https://aider.chat/",
    "docs": "https://aider.chat/docs/",
    "description": {
      "fr": "Assistant de programmation en terminal travaillant avec Git pour produire des modifications contrôlables et faciliter les allers-retours entre demandes, diff et tests.",
      "en": "Terminal coding assistant working with Git for inspectable changes and iterative requests, diffs and tests."
    },
    "scenario": {
      "fr": "Modifier une petite fonction, créer un test et examiner le commit associé.",
      "en": "Change a small function, add a test and inspect the related commit."
    },
    "start": {
      "fr": "Installer Aider à partir de la documentation officielle, puis démarrer dans un dépôt Git avec des fichiers de test.",
      "en": "Install Aider following the official guide, then start inside a Git repository with test files."
    },
    "steps": [
      {
        "fr": "Préparer une branche",
        "en": "Prepare a branch"
      },
      {
        "fr": "Choisir le modèle et les fichiers",
        "en": "Choose the model and files"
      },
      {
        "fr": "Demander une modification circonscrite",
        "en": "Request a narrow change"
      },
      {
        "fr": "Vérifier diff et tests",
        "en": "Review diffs and tests"
      }
    ],
    "limits": {
      "fr": "Les modèles, licences et modalités de facturation ne sont pas uniformes. Les commits doivent être relus.",
      "en": "Models, licenses and billing models vary. Commits require review."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  },
  {
    "slug": "manus",
    "name": "Manus",
    "provider": "Manus",
    "kind": "pret",
    "category": "general",
    "runtime": "cloud",
    "website": "https://www.manus.im/features",
    "docs": "https://help.manus.im/en/articles/17768086-what-are-the-differences-between-chat-mode-and-agent-mode",
    "description": {
      "fr": "Service agentique proposant notamment recherche, navigation, création de documents et automatisations selon le mode et l’offre choisis. Il faut distinguer les annonces de fonctions de leur disponibilité dans un compte.",
      "en": "Agentic service offering research, browsing, document creation and automations depending on mode and subscription. Announced features must be distinguished from account availability."
    },
    "scenario": {
      "fr": "Préparer une étude comparative de sites avec un rapport, puis contrôler séparément les affirmations et les sources.",
      "en": "Prepare a website comparison report, then separately verify claims and cited sources."
    },
    "start": {
      "fr": "Depuis Manus, choisir le mode adapté à la tâche et préciser les résultats attendus, les limites de navigation et les sources souhaitées.",
      "en": "In Manus, choose the appropriate task mode and specify expected deliverables, browsing boundaries and requested sources."
    },
    "steps": [
      {
        "fr": "Définir le périmètre de la recherche",
        "en": "Define research scope"
      },
      {
        "fr": "Vérifier la disponibilité du mode agent",
        "en": "Check agent mode availability"
      },
      {
        "fr": "Examiner les opérations et crédits",
        "en": "Review operations and credits"
      },
      {
        "fr": "Contrôler la qualité du rendu",
        "en": "Validate deliverables"
      }
    ],
    "limits": {
      "fr": "Les fonctions, quotas et tarifs changent. Les actions sur des services connectés exigent un contrôle des permissions.",
      "en": "Features, quotas and pricing change. Actions on connected services require permission review."
    },
    "updated_at": "2026-11-13",
    "status": "a_verifier"
  }
];
