export const dossierAddendaA={
  "rag": [
    {
      "title": {
        "fr": "Choix d’architecture et qualité du corpus",
        "en": "Architectural choices and corpus quality"
      },
      "body": {
        "fr": "Un RAG peut s’appuyer sur une recherche lexicale, vectorielle ou hybride. Le choix dépend du vocabulaire, de la langue des documents, de leur évolution et de la précision demandée. Conservez les identifiants de documents et l’emplacement exact des passages après découpage, puis mesurez les documents pertinents retrouvés avant de juger la qualité de la réponse. Une approche hybride est parfois utile lorsque des noms propres ou des termes techniques doivent être retrouvés littéralement.",
        "en": "A RAG system may use lexical, vector or hybrid retrieval. Selection depends on vocabulary, language, document updates and needed precision. Preserve document identifiers and passage locations after chunking, and measure relevant retrieval before judging generated answers. Hybrid retrieval can help when names or technical terms need literal matching."
      }
    },
    {
      "title": {
        "fr": "Cas contrôlé : documentation universitaire",
        "en": "Controlled case: university documentation"
      },
      "body": {
        "fr": "Constituez un jeu de questions sur des règlements universitaires datés. Certaines questions auront une réponse explicite, d’autres aucune preuve suffisante ou des versions contradictoires. Pour chaque réponse, présentez le texte source exact et évaluez séparément l’exactitude factuelle, l’adéquation de la citation et la capacité d’abstention. Si une modification de document intervient, rejouez les mêmes tests pour détecter des erreurs de mise à jour.",
        "en": "Build a question set against dated university regulations. Some questions have direct answers, others lack sufficient evidence or contain conflicting versions. For each answer, expose the exact passage and separately evaluate factual correctness, citation support and abstention. When regulations change, rerun the same questions to detect update failures."
      }
    }
  ],
  "agents": [
    {
      "title": {
        "fr": "Mémoire, planification et frontières d’action",
        "en": "Memory, planning and action boundaries"
      },
      "body": {
        "fr": "Un agent peut répartir une demande en sous-tâches, consulter une ressource, sélectionner un outil puis réévaluer sa progression. Chaque étape ajoute un risque de confusion entre consignes humaines et textes non fiables rencontrés sur le Web. Séparez donc la planification interne, les observations externes et les opérations réellement autorisées. Un journal d’exécution lisible doit permettre de reconstruire pourquoi une fonction a été appelée et avec quels paramètres.",
        "en": "An agent may split a goal into tasks, consult resources, select tools and reassess progress. Each step creates a risk of confusing human instructions with untrusted Web content. Separate internal planning, external observations and authorized operations. A readable execution log should explain why a tool was invoked and with which parameters."
      }
    },
    {
      "title": {
        "fr": "Scénario : recherche puis confirmation",
        "en": "Scenario: search followed by approval"
      },
      "body": {
        "fr": "Supposons qu’un agent trouve des ressources pour un cours et propose d’envoyer un message à des participants. Lire les pages et préparer un brouillon peuvent être autorisés sans envoyer quoi que ce soit. L’envoi doit être présenté avec destinataires, texte exact et conséquence, puis attendre une confirmation explicite. Une réponse de succès de l’outil doit enfin être confrontée à l’état observé dans le service concerné.",
        "en": "Suppose an agent finds course resources and proposes messaging participants. Reading pages and preparing a draft may be authorized without sending anything. Sending requires showing recipients, exact text and consequences, then waiting for explicit approval. The tool’s success response should be checked against the actual state in the destination service."
      }
    }
  ],
  "mcp": [
    {
      "title": {
        "fr": "Cycle de vie d’un outil et des autorisations",
        "en": "Tool lifecycle and authorization"
      },
      "body": {
        "fr": "Lorsqu’un client MCP se connecte à un serveur, les versions et capacités pertinentes doivent être établies selon la spécification applicable. Le client découvre ensuite les outils, ressources ou invites mis à disposition et peut envoyer des appels structurés. Les schémas aident à valider les paramètres mais ne garantissent pas l’innocuité de la fonction. Les accès HTTP demandent une vérification rigoureuse des jetons et de leur audience attendue.",
        "en": "When an MCP client connects to a server, relevant versions and capabilities must be established according to the applicable specification. The client can then discover tools, resources or prompts and issue structured calls. Schemas help validate inputs but do not make a function safe. HTTP access requires careful token validation and correct audience handling."
      }
    },
    {
      "title": {
        "fr": "Exercice : documenter une interface de recherche",
        "en": "Exercise: document a retrieval interface"
      },
      "body": {
        "fr": "Créez un descripteur d’outil de consultation documentaire avec un paramètre question et une sortie listant les identifiants de documents. Testez le comportement en cas de paramètre absent, de corpus vide et de tentative d’accès non autorisé. Documentez chaque décision liée aux permissions et mesurez la stabilité des réponses entre deux versions du serveur. Ne présentez pas ce prototype comme une interopérabilité universelle.",
        "en": "Create a document search tool descriptor with a question parameter and a response listing document identifiers. Test missing parameters, empty corpora and unauthorized access. Record permission decisions and measure result stability between server versions. Do not portray a local prototype as universal interoperability."
      }
    }
  ],
  "a2a": [
    {
      "title": {
        "fr": "Tâches et échanges entre agents",
        "en": "Tasks and exchanges between agents"
      },
      "body": {
        "fr": "A2A décrit des capacités permettant à des agents distincts d’échanger des messages, de découvrir des compétences et de suivre certaines tâches. Il convient de différencier les descriptions de capacités, les contraintes de transport, les exigences de sécurité et le statut d’une opération. Une Agent Card ne prouve pas l’identité réelle de tous les intervenants ; sa provenance et le point de terminaison doivent être contrôlés.",
        "en": "A2A describes mechanisms for independent agents to exchange messages, discover skills and manage tasks. Separate advertised capabilities, transport constraints, security requirements and task status. An Agent Card does not prove the real identity of every actor; inspect its origin and endpoint."
      }
    },
    {
      "title": {
        "fr": "Exercice : délégation sûre d’une traduction",
        "en": "Exercise: safe translation delegation"
      },
      "body": {
        "fr": "Un agent principal demande à un second de proposer une traduction d’un texte public. Le premier vérifie les informations de la carte de l’agent, les formats acceptés et les autorisations. Le second retourne un artefact de traduction, qui reste à évaluer selon la terminologie et le contexte. L’expérience doit noter les erreurs, les délais et les cas où aucun agent de confiance ne peut être utilisé.",
        "en": "A primary agent asks another to propose a translation of public text. The first inspects the other agent’s card, accepted formats and permissions. The second returns a translation artifact, which still requires terminology and context review. Record errors, latency and cases where no trustworthy agent is available."
      }
    }
  ],
  "webmcp": [
    {
      "title": {
        "fr": "État du projet et différences d’API",
        "en": "Project status and API boundaries"
      },
      "body": {
        "fr": "WebMCP étudie la publication de fonctions de pages comme outils pouvant être invoqués par des agents du navigateur. Le document du Web Machine Learning Community Group constitue un brouillon communautaire et ne possède pas le statut d’une recommandation W3C. L’approche impérative en JavaScript et les pistes déclaratives fondées sur les formulaires doivent être distinguées. La prise en charge réelle doit être vérifiée dans le navigateur utilisé.",
        "en": "WebMCP explores exposing page functionality as tools callable by browser agents. The Web Machine Learning Community Group document is a community draft, not a W3C Recommendation. Distinguish the imperative JavaScript API from declarative form-based explorations. Actual browser support must be tested."
      }
    },
    {
      "title": {
        "fr": "Exercice : filtre accessible et réversible",
        "en": "Exercise: accessible reversible filter"
      },
      "body": {
        "fr": "Sur une page d’encyclopédie, choisissez un filtre par langue et catégorie comme action candidate. Décrivez les paramètres attendus, conservez une commande HTML utilisable sans agent et vérifiez que le résultat est visible. Ne déclenchez aucune suppression ou envoi de données dans la démonstration. Notez quelles parties sont offertes par un navigateur expérimental et lesquelles ne sont qu’une simulation conceptuelle.",
        "en": "On an encyclopedia page, choose language and category filtering as the proposed action. Define input parameters, keep ordinary HTML controls usable without an agent and make the result visible. Avoid deletion or data submission in the demonstration. Identify features supported by an experimental browser versus conceptual simulation."
      }
    }
  ],
  "c2pa": [
    {
      "title": {
        "fr": "Validation des assertions et des signatures",
        "en": "Validation of assertions and signatures"
      },
      "body": {
        "fr": "Un manifeste C2PA peut lier un média à des assertions relatives à l’origine, aux traitements et aux outils utilisés. Une vérification technique confirme certains liens cryptographiques dans le périmètre prévu, mais elle n’atteste pas automatiquement que la scène représente un fait réel. L’absence de métadonnées ne suffit pas non plus pour conclure à une manipulation ; les copies et plateformes peuvent ne pas les transporter.",
        "en": "A C2PA manifest can bind media to assertions about origin, edits and tools. Technical validation confirms certain cryptographic relationships within its scope, but does not automatically prove that the scene depicts a real event. Missing metadata also does not establish manipulation; copies and platforms may fail to retain it."
      }
    },
    {
      "title": {
        "fr": "Exercice : comparer deux versions d’une image",
        "en": "Exercise: compare two image versions"
      },
      "body": {
        "fr": "Choisissez un média autorisé accompagné de déclarations de provenance et une copie réencodée. Examinez les manifestes disponibles, la continuité des assertions, les signatures et les transformations déclarées. Complétez cette analyse par la recherche d’une source indépendante et la comparaison visuelle des versions. Formulez une conclusion limitée aux observations réelles et consignez ce qui reste inconnu.",
        "en": "Choose authorized media with provenance claims and a re-encoded copy. Inspect available manifests, claim continuity, signatures and reported edits. Complement technical review with an independent source and visual comparison. Limit conclusions to observed evidence and record what remains unknown."
      }
    }
  ],
  "webgpu": [
    {
      "title": {
        "fr": "Calcul sur GPU et prise en charge",
        "en": "GPU computation and compatibility"
      },
      "body": {
        "fr": "WebGPU expose des primitives de rendu et de calcul qui peuvent être utilisées par des bibliothèques d’inférence. La disponibilité du GPU ne signifie pas qu’un modèle particulier fonctionnera : les opérateurs, la précision, la mémoire et le téléchargement des poids importent. Les applications doivent tester les capacités du navigateur et conserver un parcours fonctionnel lorsque WebGPU n’est pas disponible.",
        "en": "WebGPU exposes rendering and computation primitives used by some inference runtimes. GPU availability does not mean any given model will run: operator support, precision, memory and weight downloads matter. Applications should detect browser capabilities and offer a usable fallback."
      }
    },
    {
      "title": {
        "fr": "Exercice : mesurer un modèle local",
        "en": "Exercise: benchmark local inference"
      },
      "body": {
        "fr": "Définissez une tâche de classification avec un jeu d’entrées fixe. Testez, lorsque possible, une exécution utilisant le GPU et une autre voie locale compatible, en notant appareil, navigateur, mémoire, latence et erreurs. Séparez le chargement initial du temps d’inférence et tenez compte des différences de modèles. Publiez les conditions du test plutôt qu’un classement absolu.",
        "en": "Define a classification task with fixed input data. Where supported, compare GPU and alternative local execution, recording device, browser, memory, latency and failures. Separate initial model loading from inference time and account for model differences. Publish test conditions rather than absolute rankings."
      }
    }
  ],
  "seo-geo": [
    {
      "title": {
        "fr": "Documenter la visibilité sans promesse",
        "en": "Document visibility without promises"
      },
      "body": {
        "fr": "Les moteurs génératifs peuvent sélectionner, résumer ou ne pas citer des pages indexées selon leurs mécanismes. Les conseils officiels de recherche recommandent avant tout une information utile, accessible et structurée ; un fichier spécial pour l’IA ne garantit pas une place dans les réponses. Les métriques proposées par des outils commerciaux doivent être distinguées des observations réellement disponibles au propriétaire du site.",
        "en": "Generative search can select, summarize or omit indexed pages. Official search guidance emphasizes useful, accessible and structured information; special AI files do not guarantee inclusion in answers. Commercial visibility estimates should be separated from measurements directly available to site owners."
      }
    },
    {
      "title": {
        "fr": "Exercice : audit d’une fiche WebAI",
        "en": "Exercise: audit a WebAI page"
      },
      "body": {
        "fr": "Choisissez une fiche avec une question clairement résolue, des sources datées et des liens internes. Vérifiez les titres, la vitesse, l’indexation permise, les métadonnées et la cohérence des informations visibles. Suivez des requêtes pertinentes sans chercher à attribuer immédiatement chaque variation à une seule modification. Conservez aussi les impressions négatives et les citations absentes.",
        "en": "Choose a knowledge page answering a precise question with dated evidence and internal links. Check headings, performance, index eligibility, metadata and visible content consistency. Monitor relevant queries without attributing every variation to one change. Retain negative observations and absent citations."
      }
    }
  ],
  "security": [
    {
      "title": {
        "fr": "Limites de confiance et permissions",
        "en": "Trust boundaries and permissions"
      },
      "body": {
        "fr": "Dans une application WebAI, les pages, fichiers récupérés et résultats d’outils sont des données externes potentiellement hostiles. Une instruction trouvée dans un document ne doit jamais acquérir des privilèges supérieurs à ceux de son auteur. Les opérations sensibles nécessitent des contrôles déterministes, des autorisations minimales et, si nécessaire, une confirmation spécifique de l’utilisateur.",
        "en": "In a WebAI application, retrieved pages, files and tool results are potentially hostile external data. Instructions found in a document must not gain more authority than their author has. Sensitive operations need deterministic controls, least-privilege authorization and, where appropriate, specific user confirmation."
      }
    },
    {
      "title": {
        "fr": "Exercice : résumer sans obéir à la page",
        "en": "Exercise: summarize without following a page"
      },
      "body": {
        "fr": "Dans un environnement isolé, placez dans un document fictif une phrase demandant à l’assistant de modifier un fichier sans autorisation. Le système doit pouvoir résumer le document tout en traitant cette demande comme du contenu non fiable. Vérifiez les journaux d’outils, le refus de l’action et la réponse à la demande légitime. Aucun mot-clé de filtrage ne remplace cette séparation structurelle.",
        "en": "In an isolated environment, add a harmless instruction to a fictional document requesting an unauthorized file edit. The system should summarize the document while treating that instruction as untrusted data. Check tool logs, refusal of the action and fulfillment of the legitimate request. Keyword filters cannot replace structural trust separation."
      }
    }
  ],
  "accessibility": [
    {
      "title": {
        "fr": "Interactions générées et informations de statut",
        "en": "Generated interactions and status messages"
      },
      "body": {
        "fr": "Les réponses et éléments d’interface dynamiques doivent être compréhensibles au clavier et avec les technologies d’assistance. Les messages de chargement ou d’erreur peuvent être annoncés sans déplacer brusquement le focus. Les contrastes et noms accessibles comptent toujours, mais une bonne conformité automatique n’épuise pas les questions de compréhension et de confort.",
        "en": "Dynamic answers and interface elements should work with keyboards and assistive technologies. Loading and error messages can be announced without unexpected focus jumps. Contrast and accessible names remain essential, but automated conformance does not cover all comprehension and comfort issues."
      }
    },
    {
      "title": {
        "fr": "Exercice : dialogue inclusif avec un assistant",
        "en": "Exercise: inclusive assistant dialogue"
      },
      "body": {
        "fr": "Construisez une interface textuelle proposant une question, un état de chargement et une réponse sourcée. Vérifiez la navigation sans souris, l’annonce du nouveau contenu et la possibilité de consulter les références. Testez une défaillance réseau ainsi qu’une longue réponse. Ajoutez un mode de lecture simplifié sans supprimer les nuances nécessaires et demandez des retours humains.",
        "en": "Build a text interface with a question, loading state and sourced answer. Test keyboard use, dynamic content announcement and evidence navigation. Simulate a network failure and a long response. Offer a simpler reading mode without removing necessary nuance and seek human feedback."
      }
    }
  ]
};
