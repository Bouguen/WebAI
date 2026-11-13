export const researchGuides=[
  {
    "slug": "crawl-policy",
    "icon": "◉",
    "audience": "organization",
    "duration": "45–60",
    "title": {
      "fr": "Définir une politique de robots pour le Web de l’IA",
      "en": "Design an AI Web crawler policy"
    },
    "intro": {
      "fr": "Distinguer recherche, entraînement et accès aux ressources.",
      "en": "Separate search, training and resource access."
    },
    "steps": [
      {
        "fr": "Identifier les ressources publiques et protégées.",
        "en": "Identify public and protected resources."
      },
      {
        "fr": "Inventorier les robots et leur finalité réelle.",
        "en": "Inventory bots and actual purposes."
      },
      {
        "fr": "Consulter les déclarations officielles d’OAI-SearchBot et GPTBot.",
        "en": "Read OAI-SearchBot and GPTBot documentation."
      },
      {
        "fr": "Comparer les contrôles Googlebot et Google-Extended.",
        "en": "Compare Googlebot and Google-Extended controls."
      },
      {
        "fr": "Écrire un fichier robots.txt cohérent et contrôlable.",
        "en": "Write testable robots.txt rules."
      },
      {
        "fr": "Documenter les limites et relire les journaux de requêtes.",
        "en": "Record limitations and review request logs."
      }
    ],
    "source": "https://developers.openai.com/api/docs/bots",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-13"
  },
  {
    "slug": "ai-search-article",
    "icon": "⌕",
    "audience": "creator",
    "duration": "45–65",
    "title": {
      "fr": "Publier une page utile à la recherche générative",
      "en": "Publish a useful page for generative search"
    },
    "intro": {
      "fr": "Créer du contenu riche sans promesse artificielle de classement.",
      "en": "Create valuable content without artificial ranking promises."
    },
    "steps": [
      {
        "fr": "Choisir une question vérifiable et un public précis.",
        "en": "Choose a verifiable question and an audience."
      },
      {
        "fr": "Construire un plan HTML structuré et accessible.",
        "en": "Build accessible, structured HTML."
      },
      {
        "fr": "Citer les sources originales et leurs dates.",
        "en": "Cite original sources and dates."
      },
      {
        "fr": "Vérifier la cohérence entre texte visible et métadonnées.",
        "en": "Check visible content against metadata."
      },
      {
        "fr": "Examiner indexation, liens internes et expérience mobile.",
        "en": "Inspect indexing, internal links and mobile experience."
      },
      {
        "fr": "Mesurer les résultats sans promettre une présence dans les réponses IA.",
        "en": "Measure outcomes without promising AI answer inclusion."
      }
    ],
    "source": "https://developers.google.com/search/docs/appearance/ai-features",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-13"
  },
  {
    "slug": "agent-card",
    "icon": "◇",
    "audience": "developer",
    "duration": "50–75",
    "title": {
      "fr": "Comprendre et auditer une carte d’agent A2A",
      "en": "Understand and audit an A2A agent card"
    },
    "intro": {
      "fr": "Étudier la découverte, les interfaces, les capacités et leurs limites.",
      "en": "Study discovery, interfaces, capabilities and limitations."
    },
    "steps": [
      {
        "fr": "Lire les champs obligatoires du format AgentCard.",
        "en": "Read required AgentCard fields."
      },
      {
        "fr": "Vérifier l’URL et l’identité du fournisseur.",
        "en": "Check URL and provider identity."
      },
      {
        "fr": "Comparer les compétences déclarées aux tests réels.",
        "en": "Compare stated skills with actual tests."
      },
      {
        "fr": "Contrôler les interfaces de transport annoncées.",
        "en": "Inspect declared transport interfaces."
      },
      {
        "fr": "Examiner les exigences de sécurité et de données.",
        "en": "Review security and data requirements."
      },
      {
        "fr": "Produire une fiche d’audit, sans partager d’identifiants secrets.",
        "en": "Write an audit sheet without exposing secrets."
      }
    ],
    "source": "https://a2a-protocol.org/latest/specification/agent-card/",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-13"
  },
  {
    "slug": "webmcp-prototype",
    "icon": "⌘",
    "audience": "developer",
    "duration": "45–70",
    "title": {
      "fr": "Prototyper un outil WebMCP sans effet de bord",
      "en": "Prototype a low-risk WebMCP tool"
    },
    "intro": {
      "fr": "Explorer une API expérimentale avec autorisation et retour utilisateur.",
      "en": "Explore an experimental API with authorization and feedback."
    },
    "steps": [
      {
        "fr": "Lire le statut de brouillon communautaire.",
        "en": "Read the community draft status."
      },
      {
        "fr": "Choisir une action réversible, par exemple un filtre.",
        "en": "Choose a reversible action, such as filtering."
      },
      {
        "fr": "Écrire sa description et un schéma de paramètres.",
        "en": "Draft its description and parameter schema."
      },
      {
        "fr": "Vérifier la prise en charge du navigateur testé.",
        "en": "Verify the tested browser actually supports it."
      },
      {
        "fr": "Prévoir une interface classique si l’API est absente.",
        "en": "Provide a standard UI fallback."
      },
      {
        "fr": "Consigner la différence entre simulation et invocation réelle.",
        "en": "Distinguish simulation from live invocation."
      }
    ],
    "source": "https://webmachinelearning.github.io/webmcp/",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-13"
  },
  {
    "slug": "mcp-secure",
    "icon": "✓",
    "audience": "developer",
    "duration": "60–90",
    "title": {
      "fr": "Sécuriser une connexion MCP distante",
      "en": "Secure a remote MCP connection"
    },
    "intro": {
      "fr": "Contrôler les droits et la validation des jetons pour les outils.",
      "en": "Control scopes and token validation for tools."
    },
    "steps": [
      {
        "fr": "Lister les opérations et données disponibles.",
        "en": "List available operations and data."
      },
      {
        "fr": "Définir les privilèges minimaux par tâche.",
        "en": "Define least-privilege scopes by task."
      },
      {
        "fr": "Identifier l’audience prévue des jetons d’accès.",
        "en": "Identify intended token audiences."
      },
      {
        "fr": "Éviter la transmission directe d’un jeton vers un autre service.",
        "en": "Avoid passing access tokens to other services."
      },
      {
        "fr": "Tester les refus, expirations et erreurs d’autorisation.",
        "en": "Test denial, expiry and authorization failures."
      },
      {
        "fr": "Conserver un journal d’audit sans exposer les secrets.",
        "en": "Keep audit logs without exposing secrets."
      }
    ],
    "source": "https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/specification/2026-07-28/basic/authorization/security-considerations.mdx",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-13"
  },
  {
    "slug": "prompt-injection",
    "icon": "⚑",
    "audience": "organization",
    "duration": "50–75",
    "title": {
      "fr": "Tester l’injection indirecte dans un assistant Web",
      "en": "Test indirect prompt injection in a Web assistant"
    },
    "intro": {
      "fr": "Exposer les limites des contenus récupérés comme instructions.",
      "en": "Expose the risks of treating retrieved content as instructions."
    },
    "steps": [
      {
        "fr": "Créer un jeu de documents fictifs et autorisés.",
        "en": "Create safe synthetic test documents."
      },
      {
        "fr": "Introduire une consigne hostile inoffensive dans un document test.",
        "en": "Embed a harmless adversarial instruction in a test document."
      },
      {
        "fr": "Définir les outils et accès permis au système.",
        "en": "Define permitted tools and access."
      },
      {
        "fr": "Tester l’interdiction d’exécuter la consigne externe.",
        "en": "Test rejection of external instructions."
      },
      {
        "fr": "Vérifier la qualité de la réponse légitime.",
        "en": "Measure legitimate response quality."
      },
      {
        "fr": "Consigner le résultat et les protections insuffisantes.",
        "en": "Record failures and inadequate controls."
      }
    ],
    "source": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-13"
  },
  {
    "slug": "rag-evaluation",
    "icon": "▤",
    "audience": "research",
    "duration": "70–100",
    "title": {
      "fr": "Évaluer un assistant RAG avec des preuves",
      "en": "Evaluate a RAG assistant with evidence"
    },
    "intro": {
      "fr": "Mesurer la récupération et la fidélité des réponses séparément.",
      "en": "Measure retrieval and answer faithfulness separately."
    },
    "steps": [
      {
        "fr": "Assembler un corpus autorisé avec identifiants et dates.",
        "en": "Assemble an authorized corpus with IDs and dates."
      },
      {
        "fr": "Créer des questions avec références attendues.",
        "en": "Write questions with expected evidence."
      },
      {
        "fr": "Mesurer les passages retrouvés.",
        "en": "Measure retrieved passages."
      },
      {
        "fr": "Vérifier si les citations soutiennent réellement les réponses.",
        "en": "Check whether citations support answers."
      },
      {
        "fr": "Tester l’abstention en l’absence de preuve.",
        "en": "Test abstention when evidence is missing."
      },
      {
        "fr": "Documenter modèles, versions, erreurs et limites.",
        "en": "Record model versions, errors and limitations."
      }
    ],
    "source": "https://arxiv.org/abs/2005.11401",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-13"
  },
  {
    "slug": "provenance-c2pa",
    "icon": "◈",
    "audience": "research",
    "duration": "50–70",
    "title": {
      "fr": "Enquêter sur la provenance d’un média",
      "en": "Investigate media provenance"
    },
    "intro": {
      "fr": "Comprendre ce qu’une signature C2PA prouve et ne prouve pas.",
      "en": "Understand what a C2PA signature does and does not establish."
    },
    "steps": [
      {
        "fr": "Sélectionner un média dont la réutilisation est autorisée.",
        "en": "Choose reusable authorized media."
      },
      {
        "fr": "Rechercher la présence d’un manifeste C2PA.",
        "en": "Check for a C2PA manifest."
      },
      {
        "fr": "Lire les assertions et la date du schéma.",
        "en": "Read assertions and specification version."
      },
      {
        "fr": "Vérifier l’intégrité des signatures lorsque possible.",
        "en": "Validate signatures when possible."
      },
      {
        "fr": "Comparer avec des informations indépendantes.",
        "en": "Compare with independent evidence."
      },
      {
        "fr": "Rédiger une conclusion distinguant provenance et vérité.",
        "en": "Separate provenance from truth in the conclusion."
      }
    ],
    "source": "https://spec.c2pa.org/specifications/specifications/2.3/specs/C2PA_Specification",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-13"
  },
  {
    "slug": "browser-local-ai",
    "icon": "◧",
    "audience": "developer",
    "duration": "45–70",
    "title": {
      "fr": "Tester une fonctionnalité IA locale dans le navigateur",
      "en": "Test an on-device AI feature"
    },
    "intro": {
      "fr": "Comparer les capacités, le repli et les exigences de ressources.",
      "en": "Compare capabilities, fallback and resource requirements."
    },
    "steps": [
      {
        "fr": "Définir une tâche locale simple et vérifiable.",
        "en": "Define a simple testable local task."
      },
      {
        "fr": "Tester la disponibilité des APIs dans le navigateur choisi.",
        "en": "Check API availability in the chosen browser."
      },
      {
        "fr": "Prévoir une solution sans IA si la fonction manque.",
        "en": "Provide a no-AI fallback."
      },
      {
        "fr": "Mesurer qualité, délai et téléchargement initial.",
        "en": "Measure quality, latency and initial download."
      },
      {
        "fr": "Décrire les conditions de confidentialité.",
        "en": "Describe privacy conditions."
      },
      {
        "fr": "Tester l’accessibilité et la compatibilité mobile.",
        "en": "Test accessibility and mobile compatibility."
      }
    ],
    "source": "https://developer.chrome.com/docs/ai/built-in",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-13"
  },
  {
    "slug": "inclusive-ai",
    "icon": "♿",
    "audience": "creator",
    "duration": "45–75",
    "title": {
      "fr": "Évaluer l’accessibilité d’un assistant génératif",
      "en": "Evaluate the accessibility of a generative assistant"
    },
    "intro": {
      "fr": "Appliquer les exigences WCAG aux contenus dynamiques.",
      "en": "Apply WCAG principles to dynamic content."
    },
    "steps": [
      {
        "fr": "Tester le parcours complet au clavier.",
        "en": "Test the complete keyboard journey."
      },
      {
        "fr": "Vérifier les étiquettes des champs et boutons.",
        "en": "Check labels for inputs and controls."
      },
      {
        "fr": "Rendre accessibles les états chargement et erreur.",
        "en": "Announce loading and error states."
      },
      {
        "fr": "Éviter les changements brusques de focus.",
        "en": "Avoid unexpected focus changes."
      },
      {
        "fr": "Permettre de consulter les sources et de corriger une action.",
        "en": "Allow users to inspect sources and correct actions."
      },
      {
        "fr": "Compléter les tests automatiques par une évaluation humaine.",
        "en": "Complement automated tests with human evaluation."
      }
    ],
    "source": "https://www.w3.org/TR/WCAG22/",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-13"
  },
  {
    "slug": "jsonld-publishing",
    "icon": "⌘",
    "audience": "developer",
    "duration": "40–60",
    "title": {
      "fr": "Documenter une ressource avec JSON-LD",
      "en": "Describe a resource with JSON-LD"
    },
    "intro": {
      "fr": "Rendre les métadonnées cohérentes avec le contenu visible.",
      "en": "Keep metadata consistent with visible content."
    },
    "steps": [
      {
        "fr": "Choisir une ressource et des identifiants persistants.",
        "en": "Choose a resource and persistent identifiers."
      },
      {
        "fr": "Représenter son type, titre, langue et auteur.",
        "en": "Represent type, title, language and author."
      },
      {
        "fr": "Renseigner le contexte JSON-LD adapté.",
        "en": "Set an appropriate JSON-LD context."
      },
      {
        "fr": "Valider la syntaxe et les valeurs attendues.",
        "en": "Check syntax and expected values."
      },
      {
        "fr": "Comparer les propriétés au contenu visible.",
        "en": "Compare properties with visible content."
      },
      {
        "fr": "Éviter de promettre un classement ou une réponse IA.",
        "en": "Avoid promises of AI search ranking."
      }
    ],
    "source": "https://www.w3.org/TR/json-ld11/",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-13"
  },
  {
    "slug": "critical-literacy",
    "icon": "✦",
    "audience": "teacher",
    "duration": "50–75",
    "title": {
      "fr": "Enseigner la vérification de contenus générés",
      "en": "Teach verification of generated content"
    },
    "intro": {
      "fr": "Faire distinguer une réponse fluide d’une conclusion documentée.",
      "en": "Distinguish fluent answers from evidence-led conclusions."
    },
    "steps": [
      {
        "fr": "Choisir un thème pour lequel les sources existent.",
        "en": "Choose a topic with accessible original evidence."
      },
      {
        "fr": "Comparer deux textes générés présentant des affirmations.",
        "en": "Compare two generated claims."
      },
      {
        "fr": "Identifier les citations véritablement pertinentes.",
        "en": "Identify citations that truly support them."
      },
      {
        "fr": "Confronter les dates et les contradictions.",
        "en": "Check dates and contradictions."
      },
      {
        "fr": "Demander une conclusion justifiée et nuancée.",
        "en": "Require a nuanced, justified conclusion."
      },
      {
        "fr": "Évaluer la démarche critique plutôt que le style seul.",
        "en": "Evaluate reasoning rather than surface style."
      }
    ],
    "source": "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-13"
  }
];
