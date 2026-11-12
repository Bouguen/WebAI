export const deepDossiersPart1 = {
  "rag": {
    "stage": {
      "fr": "Architecture de recherche",
      "en": "Retrieval architecture"
    },
    "audience": {
      "fr": "Développeurs, enseignants, chercheurs",
      "en": "Developers, educators, researchers"
    },
    "lead": {
      "fr": "Le RAG n'est pas une base de connaissances magique. C'est une méthode qui cherche d'abord des passages dans un corpus, puis les présente au modèle pour construire une réponse documentée. L'exactitude finale dépend de la chaîne entière.",
      "en": "RAG is not a magical knowledge base. It first retrieves passages from a corpus, then supplies them to a model to produce an evidence-led answer. The final accuracy depends on the whole pipeline."
    },
    "sections": [
      {
        "title": {
          "fr": "Construire un corpus utilisable",
          "en": "Build a usable corpus"
        },
        "body": {
          "fr": "Choisissez les documents avec leur autorisation de réutilisation, la date, la version et un identifiant stable. Le découpage en passages facilite la récupération mais peut faire perdre le contexte : conservez l'emplacement et les références d'origine.",
          "en": "Select documents with reuse permission, date, version and stable identifiers. Chunking helps retrieval but may remove context; retain original locations and references."
        }
      },
      {
        "title": {
          "fr": "Retrouver, puis synthétiser",
          "en": "Retrieve, then synthesize"
        },
        "body": {
          "fr": "Une recherche lexicale, vectorielle ou hybride sélectionne des passages candidats. Un classement supplémentaire peut les réordonner. Le modèle compose ensuite une réponse ; il peut omettre des nuances, même si les documents récupérés étaient pertinents.",
          "en": "Lexical, vector or hybrid retrieval selects candidate passages. A second-stage ranking can reorder them. The model then drafts an answer and may still omit nuance even when the retrieved material was relevant."
        }
      },
      {
        "title": {
          "fr": "Évaluer séparément les composants",
          "en": "Evaluate the components separately"
        },
        "body": {
          "fr": "Un bon résultat exige plusieurs mesures : couverture du corpus, pertinence de récupération, exactitude des citations, fidélité de la réponse et capacité à signaler l'absence de preuve. La présence d'un hyperlien ne valide pas son contenu.",
          "en": "A trustworthy outcome requires separate measures for corpus coverage, retrieval relevance, citation accuracy, answer faithfulness and the ability to report missing evidence. A hyperlink alone does not validate its contents."
        }
      },
      {
        "title": {
          "fr": "Exemple pédagogique",
          "en": "Teaching example"
        },
        "body": {
          "fr": "Une bibliothèque scolaire rassemble dix documents officiels sur une période historique. Pour répondre à une question, l'assistant doit présenter les passages et leurs dates, puis refuser de conclure si les sources se contredisent.",
          "en": "A school library collects ten official documents about a historical period. In answering a question, an assistant should present the passages and dates, then avoid a firm conclusion if sources conflict."
        }
      }
    ],
    "steps": [
      {
        "fr": "Collecter et attribuer",
        "en": "Collect and attribute"
      },
      {
        "fr": "Rechercher les passages",
        "en": "Retrieve passages"
      },
      {
        "fr": "Générer avec références",
        "en": "Generate with references"
      },
      {
        "fr": "Contrôler les affirmations",
        "en": "Verify claims"
      }
    ],
    "checks": [
      {
        "fr": "Les passages cités répondent-ils précisément à la question ?",
        "en": "Do the cited passages answer the exact question?"
      },
      {
        "fr": "Comment le système traite-t-il l'absence de documents pertinents ?",
        "en": "How does the system handle missing relevant documents?"
      },
      {
        "fr": "La date et la version des sources restent-elles accessibles ?",
        "en": "Are dates and versions of the sources available?"
      }
    ],
    "relations": [
      "knowledge-graph",
      "security",
      "evaluation"
    ],
    "tools": [
      "llamaindex",
      "haystack",
      "chromadb",
      "qdrant"
    ],
    "refs": [
      {
        "label": "Article RAG de Lewis et al. (2020)",
        "url": "https://arxiv.org/abs/2005.11401"
      },
      {
        "label": "Documentation LlamaIndex",
        "url": "https://docs.llamaindex.ai/"
      }
    ],
    "review_status": "a_verifier",
    "snapshot_date": "2026-11-12"
  },
  "agents": {
    "stage": {
      "fr": "Agent et automatisation",
      "en": "Agentic workflows"
    },
    "audience": {
      "fr": "Grand public, organisations, développeurs",
      "en": "Readers, organizations, developers"
    },
    "lead": {
      "fr": "Un agent peut enchaîner des décisions et des appels d'outils pour atteindre un objectif. Cette autonomie est toujours relative : elle dépend des moyens mis à sa disposition et des règles définies par l'application et la personne responsable.",
      "en": "An agent can sequence decisions and tool calls to reach a goal. This autonomy is always bounded by the tools it receives and the rules set by the host application and responsible user."
    },
    "sections": [
      {
        "title": {
          "fr": "De la réponse à l'action",
          "en": "From answering to acting"
        },
        "body": {
          "fr": "Contrairement à un chatbot limité à la génération d'une réponse, un agent équipé d'outils peut rechercher une page, interroger une base, préparer un fichier ou déclencher une opération. Le résultat doit pouvoir être inspecté après chaque étape significative.",
          "en": "Unlike a chatbot that only generates an answer, a tool-equipped agent can find a page, query a database, prepare a file or trigger an operation. Its results should be inspectable after each meaningful step."
        }
      },
      {
        "title": {
          "fr": "Déléguer sans donner carte blanche",
          "en": "Delegate without unlimited authority"
        },
        "body": {
          "fr": "Les permissions doivent suivre le principe du moindre privilège. Une lecture de document n'exige pas une autorisation d'envoi de courriel ou de paiement. Les opérations sensibles nécessitent une confirmation explicite et contextualisée.",
          "en": "Permissions should follow least privilege. Reading a document does not justify permission to send email or pay. Sensitive operations require explicit, contextual approval."
        }
      },
      {
        "title": {
          "fr": "L'injection par les données",
          "en": "Instructions hidden in data"
        },
        "body": {
          "fr": "Une page consultée peut contenir du texte qui demande à l'agent d'ignorer ses instructions. Ce texte reste une donnée non fiable : l'hôte doit séparer le contenu analysé de l'autorité qui définit les actions permises.",
          "en": "A retrieved page can contain text telling an agent to ignore instructions. That text is untrusted data: the host must separate analyzed content from the authority that defines allowed actions."
        }
      },
      {
        "title": {
          "fr": "Exemple concret",
          "en": "Practical example"
        },
        "body": {
          "fr": "Un agent aide à préparer un voyage : il compare des itinéraires et établit une liste. Il ne réserve ni n'achète sans vérifier le prix, l'identité du destinataire et le consentement de la personne.",
          "en": "An agent helps plan travel: it compares routes and drafts a shortlist. It neither books nor purchases without verifying the price, recipient identity and user approval."
        }
      }
    ],
    "steps": [
      {
        "fr": "Décrire la tâche",
        "en": "Define the task"
      },
      {
        "fr": "Limiter les outils",
        "en": "Restrict tools"
      },
      {
        "fr": "Examiner les résultats",
        "en": "Review outputs"
      },
      {
        "fr": "Confirmer les actions sensibles",
        "en": "Approve sensitive actions"
      }
    ],
    "checks": [
      {
        "fr": "Qui peut accéder à quels outils et données ?",
        "en": "Who can access which tools and data?"
      },
      {
        "fr": "Une instruction hostile dans une page peut-elle modifier les permissions ?",
        "en": "Can hostile page content change permissions?"
      },
      {
        "fr": "Peut-on annuler ou arrêter l'exécution sans dommage ?",
        "en": "Can the run be safely stopped or undone?"
      }
    ],
    "relations": [
      "mcp",
      "a2a",
      "security",
      "webmcp"
    ],
    "tools": [
      "langgraph",
      "langchain",
      "n8n"
    ],
    "refs": [
      {
        "label": "OWASP — risques des applications LLM (2026)",
        "url": "https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/"
      },
      {
        "label": "NIST — AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      }
    ],
    "review_status": "a_verifier",
    "snapshot_date": "2026-11-12"
  },
  "mcp": {
    "stage": {
      "fr": "Protocole publié",
      "en": "Published protocol"
    },
    "audience": {
      "fr": "Développeurs, intégrateurs, organisations",
      "en": "Developers, integrators, organizations"
    },
    "lead": {
      "fr": "Le Model Context Protocol organise la manière dont une application d'IA accède à des outils et ressources externes. Il définit des interfaces, mais ne garantit pas qu'un serveur est fiable ou qu'une action est autorisée.",
      "en": "The Model Context Protocol structures how an AI application accesses external tools and resources. It defines interfaces but does not guarantee a server is trustworthy or an action is authorized."
    },
    "sections": [
      {
        "title": {
          "fr": "Clients, hôtes et serveurs",
          "en": "Hosts, clients and servers"
        },
        "body": {
          "fr": "Une application hôte décide quels serveurs connecter et ce qu'un agent est autorisé à faire. Les serveurs exposent des capacités telles que des outils ou des ressources. Une description d'outil indique comment l'appeler ; elle ne confère aucun droit d'accès indépendant.",
          "en": "A host application controls connected servers and which actions are allowed. Servers expose capabilities such as tools and resources. A tool description explains how to call it; it does not independently grant access rights."
        }
      },
      {
        "title": {
          "fr": "Lire une capacité avant de l'appeler",
          "en": "Inspect before invoking"
        },
        "body": {
          "fr": "La découverte des capacités doit être suivie d'une validation du schéma des paramètres et d'une évaluation des effets secondaires. Un appel d'outil peut lire, écrire ou transmettre des données selon sa conception ; la permission doit refléter cette différence.",
          "en": "Capability discovery must be followed by input-schema validation and evaluation of side effects. A tool call can read, write or transmit data depending on its design; permissions must reflect this."
        }
      },
      {
        "title": {
          "fr": "Évolutions des versions",
          "en": "Version evolution"
        },
        "body": {
          "fr": "Le protocole évolue : la version publiée le 28 juillet 2026 comporte notamment des changements de cœur de protocole et d'autorisation. Une intégration doit documenter la version utilisée et tester la compatibilité des clients et serveurs.",
          "en": "The protocol evolves: its July 28, 2026 specification included core and authorization changes. An integration should document the version it implements and test client/server compatibility."
        }
      },
      {
        "title": {
          "fr": "Sécurité des connexions",
          "en": "Connection security"
        },
        "body": {
          "fr": "Un serveur peut être mal configuré ou compromis. Appliquer une liste d'origines autorisées, minimiser l'accès aux secrets, inspecter les paramètres et enregistrer les opérations sensibles reste la responsabilité de l'application.",
          "en": "A server can be misconfigured or compromised. Restricting allowed origins, minimizing secret access, validating inputs and logging sensitive actions remain host responsibilities."
        }
      }
    ],
    "steps": [
      {
        "fr": "Découvrir le serveur",
        "en": "Discover a server"
      },
      {
        "fr": "Lire les capacités",
        "en": "Inspect capabilities"
      },
      {
        "fr": "Approuver et appeler",
        "en": "Authorize and invoke"
      },
      {
        "fr": "Auditer les effets",
        "en": "Audit effects"
      }
    ],
    "checks": [
      {
        "fr": "La version de la spécification et du SDK est-elle documentée ?",
        "en": "Are specification and SDK versions documented?"
      },
      {
        "fr": "Les paramètres et résultats des outils sont-ils traités comme non fiables ?",
        "en": "Are tool parameters and outputs treated as untrusted?"
      },
      {
        "fr": "L'accès sensible est-il soumis à une confirmation ?",
        "en": "Are sensitive accesses subject to approval?"
      }
    ],
    "relations": [
      "agents",
      "a2a",
      "webmcp",
      "security"
    ],
    "tools": [
      "langchain",
      "langgraph"
    ],
    "refs": [
      {
        "label": "MCP Specification",
        "url": "https://modelcontextprotocol.io/specification/"
      },
      {
        "label": "MCP release du 28 juillet 2026",
        "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28/"
      }
    ],
    "review_status": "a_verifier",
    "snapshot_date": "2026-11-12"
  },
  "a2a": {
    "stage": {
      "fr": "Protocole publié",
      "en": "Published protocol"
    },
    "audience": {
      "fr": "Développeurs d'agents, architectes",
      "en": "Agent developers, architects"
    },
    "lead": {
      "fr": "Agent2Agent (A2A) facilite la communication entre systèmes agents indépendants, y compris lorsqu'ils utilisent des frameworks ou des fournisseurs différents. Son rôle est distinct de l'accès d'un agent à un outil local.",
      "en": "Agent2Agent (A2A) enables communication between independent agent systems, including systems built with different frameworks or providers. That differs from an agent using a local tool."
    },
    "sections": [
      {
        "title": {
          "fr": "Découvrir une capacité distante",
          "en": "Discover remote capabilities"
        },
        "body": {
          "fr": "La description des capacités permet à un client de déterminer ce qu'un agent distant sait offrir. Cette découverte ne prouve pas son identité ni la fiabilité de ses réponses : la confiance doit être établie séparément.",
          "en": "Capability descriptions help a client understand what a remote agent offers. Discovery does not prove identity or the correctness of responses; trust must be established separately."
        }
      },
      {
        "title": {
          "fr": "Messages, tâches et artefacts",
          "en": "Messages, tasks and artifacts"
        },
        "body": {
          "fr": "Le protocole sépare les messages de coordination, l'état d'une tâche et les artefacts produits comme résultats. Une tâche peut comporter plusieurs échanges, des états d'avancement et des sorties structurées.",
          "en": "The protocol separates coordination messages, task state and output artifacts. A task may involve multiple exchanges, progress states and structured outputs."
        }
      },
      {
        "title": {
          "fr": "La compatibilité dépend des versions",
          "en": "Versions shape interoperability"
        },
        "body": {
          "fr": "La spécification expose des versions publiées, dont la 1.0.0. Il faut identifier les fonctionnalités négociées et éviter de supposer qu'un agent distant accepte chaque modalité ou chaque version.",
          "en": "The specification publishes releases including 1.0.0. Implementations need to identify negotiated features and avoid assuming that every remote agent accepts every modality or version."
        }
      },
      {
        "title": {
          "fr": "Exemple d'orchestration",
          "en": "Orchestration example"
        },
        "body": {
          "fr": "Un agent responsable d'un dossier scientifique demande à un autre agent d'extraire des métadonnées. Le résultat transmis doit rester associé à son origine et être vérifié avant d'alimenter une page publique.",
          "en": "An agent preparing a research file asks another to extract metadata. The returned result must retain provenance and be checked before contributing to a public page."
        }
      }
    ],
    "steps": [
      {
        "fr": "Identifier l'agent",
        "en": "Find the agent"
      },
      {
        "fr": "Négocier la tâche",
        "en": "Negotiate the task"
      },
      {
        "fr": "Échanger les messages",
        "en": "Exchange messages"
      },
      {
        "fr": "Recevoir les artefacts",
        "en": "Receive artifacts"
      }
    ],
    "checks": [
      {
        "fr": "L'identité de l'agent distant est-elle vérifiée ?",
        "en": "Is the remote agent's identity verified?"
      },
      {
        "fr": "La version utilisée est-elle explicite ?",
        "en": "Is the protocol version explicit?"
      },
      {
        "fr": "Le résultat possède-t-il une provenance et des critères de succès ?",
        "en": "Do outputs have provenance and success criteria?"
      }
    ],
    "relations": [
      "agents",
      "mcp",
      "security"
    ],
    "tools": [
      "langgraph",
      "langchain"
    ],
    "refs": [
      {
        "label": "A2A Specification v1.0.0",
        "url": "https://a2a-protocol.org/v1.0.0/specification/"
      }
    ],
    "review_status": "a_verifier",
    "snapshot_date": "2026-11-12"
  },
  "webmcp": {
    "stage": {
      "fr": "Rapport communautaire — non normatif",
      "en": "Community Group draft — not a W3C standard"
    },
    "audience": {
      "fr": "Développeurs Web, concepteurs d'interfaces",
      "en": "Web developers, interface designers"
    },
    "lead": {
      "fr": "WebMCP propose un mécanisme par lequel une page Web peut exposer certaines fonctions de son interface sous forme d'outils pour des agents. Au 12 novembre 2026, la spécification est un projet de groupe communautaire et non une norme W3C.",
      "en": "WebMCP proposes a way for a Web page to expose some interface functions as agent-callable tools. As of November 12, 2026, its specification is a Community Group draft, not a W3C Standard."
    },
    "sections": [
      {
        "title": {
          "fr": "Décrire des fonctions réutilisables",
          "en": "Describe reusable functions"
        },
        "body": {
          "fr": "Le développeur peut décrire une fonction JavaScript avec un nom, une description et un schéma d'entrée. L'objectif est d'éviter qu'un agent doive uniquement déduire toutes les actions à partir de boutons et de pixels.",
          "en": "A developer can describe a JavaScript function with a name, description and input schema. The goal is to reduce reliance on agents guessing every action from buttons and pixels."
        }
      },
      {
        "title": {
          "fr": "Une capacité proposée n'est pas une garantie",
          "en": "Proposed is not universally supported"
        },
        "body": {
          "fr": "L'existence d'un brouillon n'implique pas que tous les navigateurs ou agents exposent l'API. Les déploiements doivent prévoir une navigation Web traditionnelle et tester les éventuelles implémentations prises en charge.",
          "en": "A published draft does not mean all browsers or agents implement the API. Deployments need conventional Web fallbacks and must test supported implementations."
        }
      },
      {
        "title": {
          "fr": "Accès contrôlé et expérience humaine",
          "en": "Authorization and user experience"
        },
        "body": {
          "fr": "Exposer un outil ne doit pas donner à un agent le droit de soumettre des commandes ou de modifier des données sans consentement. Les paramètres doivent être validés et les opérations sensibles visibles et contrôlées.",
          "en": "Exposing a tool should not grant an agent rights to place orders or edit data without consent. Inputs require validation and sensitive operations must remain visible and controllable."
        }
      },
      {
        "title": {
          "fr": "Exemple pédagogique",
          "en": "Learning example"
        },
        "body": {
          "fr": "Une interface de catalogue pourrait exposer une fonction de filtrage documentaire. Elle doit conserver les mécanismes de recherche utilisables directement au clavier par les personnes.",
          "en": "A catalog interface could expose a document filtering function. It should preserve keyboard-accessible search for human visitors."
        }
      }
    ],
    "steps": [
      {
        "fr": "Décrire la fonction",
        "en": "Describe a function"
      },
      {
        "fr": "Définir les paramètres",
        "en": "Define inputs"
      },
      {
        "fr": "Vérifier permissions et repli",
        "en": "Verify permission and fallback"
      },
      {
        "fr": "Tester avec et sans agent",
        "en": "Test with and without agents"
      }
    ],
    "checks": [
      {
        "fr": "Le statut de brouillon communautaire est-il affiché ?",
        "en": "Is its community draft status clearly stated?"
      },
      {
        "fr": "Une personne peut-elle toujours accéder au service sans agent ?",
        "en": "Can a human still use the service without an agent?"
      },
      {
        "fr": "Quelles actions exigent une confirmation ?",
        "en": "Which actions require confirmation?"
      }
    ],
    "relations": [
      "mcp",
      "agents",
      "accessibility"
    ],
    "tools": [
      "playwright",
      "axe-core"
    ],
    "refs": [
      {
        "label": "WebMCP — Community Group Draft",
        "url": "https://webmachinelearning.github.io/webmcp/"
      }
    ],
    "review_status": "a_verifier",
    "snapshot_date": "2026-11-12"
  }
};
