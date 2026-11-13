export const dossierAddendaB={
  "ai-search-visibility": [
    {
      "title": {
        "fr": "Qualité des pages et recherche augmentée",
        "en": "Page quality and augmented search"
      },
      "body": {
        "fr": "Les moteurs qui rédigent des réponses à partir d’index peuvent sélectionner plusieurs passages, les résumer et présenter des liens. La visibilité dépend de règles de crawl, de pertinence et d’interface sur lesquelles l’éditeur ne possède pas de contrôle total. Rédigez des pages avec une question précise, des informations originales, une hiérarchie HTML et des références identifiables ; n’assimilez pas la présence d’un extrait à une recommandation officielle.",
        "en": "Answer engines using search indexes can select passages, summarize them and expose links. Visibility depends on crawling, relevance and interface decisions outside the publisher’s full control. Write pages addressing precise questions with original information, semantic HTML and traceable evidence; do not equate being cited with official endorsement."
      }
    },
    {
      "title": {
        "fr": "Étude comparative sans causalité artificielle",
        "en": "Comparison study without invented causality"
      },
      "body": {
        "fr": "Pour mesurer la découvrabilité, choisissez un ensemble de questions récurrentes et notez les versions des pages, dates, régions et interfaces consultées. Séparez les résultats directement observés des estimations commerciales. Une variation après réécriture d’un titre ne démontre pas à elle seule que le titre a causé le changement : les systèmes de recherche et leurs corpus évoluent continuellement.",
        "en": "To study discoverability, select recurring questions and record page versions, dates, regions and search interfaces. Separate directly observed results from commercial estimates. A change after rewriting a title does not alone prove causation: search systems and their corpora change continuously."
      }
    }
  ],
  "crawler-governance": [
    {
      "title": {
        "fr": "Trois couches de contrôle",
        "en": "Three layers of control"
      },
      "body": {
        "fr": "Une politique éditoriale distingue les pages accessibles au public, les ressources réservées et les contenus pour lesquels certains usages de collecte ne sont pas souhaités. Robots.txt communique des directives aux robots coopératifs mais n’impose pas de barrière technique. Les fichiers privés nécessitent un contrôle d’accès effectif, et les usages contractuels ou juridiques ne se résolvent pas par une seule directive.",
        "en": "An editorial policy distinguishes public pages, access-controlled resources and content for which selected crawling purposes are not desired. Robots.txt communicates preferences to cooperative crawlers but does not enforce a technical barrier. Private files require actual authentication, and contractual or legal controls cannot be reduced to one directive."
      }
    },
    {
      "title": {
        "fr": "Exemple : indexer sans ouvrir l’entraînement",
        "en": "Example: search crawling without training crawling"
      },
      "body": {
        "fr": "Un éditeur peut différencier, selon les robots documentés, l’accès de recherche et certaines collectes liées à l’entraînement. Consignez les noms exacts des jetons, leur finalité déclarée, les directives appliquées et les exceptions. Contrôlez périodiquement les journaux et l’effet sur la découvrabilité ; les préférences n’offrent pas une garantie contre un acteur malveillant.",
        "en": "A publisher can distinguish search access from certain training-related collection purposes using documented robots tokens. Record exact agent names, their declared purpose, directives and exceptions. Periodically check logs and discoverability effects; preferences do not stop malicious crawlers."
      }
    }
  ],
  "llms-txt-status": [
    {
      "title": {
        "fr": "Ce que le fichier propose vraiment",
        "en": "What the file actually proposes"
      },
      "body": {
        "fr": "La proposition llms.txt décrit une manière d’exposer une sélection de ressources textuelles pour certains systèmes consommateurs. Elle ne bénéficie pas d’un mécanisme universel de découverte et ne remplace ni les URL normales ni les APIs existantes. Google Search Central indique que l’indexation et les fonctionnalités de recherche IA ne demandent pas de fichier llms.txt spécial. Toute promesse de visibilité automatique dépasse ce constat.",
        "en": "The llms.txt proposal provides a possible listing of text resources for certain consumers. It has no universal discovery mechanism and does not replace ordinary URLs or APIs. Google Search Central states that indexing and AI search features do not require a special llms.txt file. Claims of automatic visibility go beyond that documentation."
      }
    },
    {
      "title": {
        "fr": "Comment tester un consommateur précis",
        "en": "How to test a specific consumer"
      },
      "body": {
        "fr": "Si un logiciel annonce réellement exploiter llms.txt, comparez des tâches identiques avec et sans ce fichier dans un environnement contrôlé. Mesurez la découverte des pages correctes, la qualité des liens et les limites observées. Évitez de généraliser à un autre moteur ou agent sans preuve de prise en charge. Les pages sources restent la référence éditoriale.",
        "en": "If software explicitly claims to use llms.txt, compare identical tasks with and without the file in a controlled setting. Measure discovery of correct pages, link quality and observed limits. Do not generalize results to another engine or agent without evidence of support. Source pages remain the editorial authority."
      }
    }
  ],
  "agent-ready-html": [
    {
      "title": {
        "fr": "L’accessibilité aide aussi la lisibilité machine",
        "en": "Accessibility also helps machine interpretation"
      },
      "body": {
        "fr": "Un site utilisant des titres structurés, des noms de commandes, des labels de formulaires et des messages d’état explicites offre des repères utiles à différentes technologies d’assistance et aux agents qui observent le DOM. Les interfaces doivent conserver des fonctions sans agent, des boutons réellement cliquables et une indication de réussite plutôt que de simples animations.",
        "en": "Sites with structured headings, meaningful control names, form labels and explicit status messages offer useful signals to assistive technology and DOM-observing agents. Interfaces should work without an agent, expose real controls and clearly communicate outcomes rather than relying on animation alone."
      }
    },
    {
      "title": {
        "fr": "Audit d’un parcours réel",
        "en": "Auditing a real workflow"
      },
      "body": {
        "fr": "Testez une page de recherche : saisie d’une question, sélection d’un filtre, affichage des résultats et retour en arrière. Vérifiez les noms accessibles, la navigation au clavier, les messages d’erreur et l’état après chaque interaction. Si un agent échoue, déterminez si le problème concerne le DOM, les permissions, les données ou son propre raisonnement, au lieu de corriger arbitrairement la page.",
        "en": "Test a search page: enter a query, select a filter, inspect results and navigate back. Check accessible names, keyboard operation, error messages and post-action state. If an agent fails, determine whether the cause lies in the DOM, permissions, data or its reasoning instead of changing the page arbitrarily."
      }
    }
  ],
  "protocol-versions": [
    {
      "title": {
        "fr": "Une version n’implique pas toutes les capacités",
        "en": "A version does not imply every capability"
      },
      "body": {
        "fr": "MCP documente des mécanismes fondamentaux et des extensions dont l’adoption par les bibliothèques peut évoluer à des rythmes différents. Lors de l’initialisation, les capacités déclarées et les versions négociées doivent être observées. Une bibliothèque dite compatible ne garantit pas l’ensemble des fonctions nouvelles, ni le bon comportement lors d’erreurs ou de ruptures de connexion.",
        "en": "MCP defines core mechanisms and extensions adopted by different libraries at different speeds. During initialization, observe negotiated versions and advertised capabilities. A compatible library does not guarantee every new feature or correct behavior under errors and disconnections."
      }
    },
    {
      "title": {
        "fr": "Plan d’essai de compatibilité",
        "en": "Compatibility test plan"
      },
      "body": {
        "fr": "Préparez un client et deux serveurs utilisant des versions et capacités connues. Testez liste d’outils, validation des arguments, retour d’erreur, interruptions et règles d’authentification. Notez exactement quelles fonctionnalités fonctionnent pour chaque combinaison et conservez les traces sans secrets. Les résultats décrivent ces versions testées, pas une garantie pour tous les produits.",
        "en": "Prepare a client and two servers with known versions and capabilities. Test tool listing, input validation, error responses, interrupts and authorization behavior. Record which features work for each combination and keep secret-free traces. Results describe tested versions, not every product."
      }
    }
  ],
  "agent-card-discovery": [
    {
      "title": {
        "fr": "Une carte n’est pas une identité certifiée",
        "en": "A card is not a certified identity"
      },
      "body": {
        "fr": "Une Agent Card peut déclarer un nom, des compétences, des interfaces et des exigences de sécurité. Ces champs facilitent la découverte et la communication, mais ne prouvent pas l’honnêteté du fournisseur ou la réussite des tâches promises. Contrôlez l’URL, l’origine et les interfaces réellement accessibles avant de déléguer des données ou opérations sensibles.",
        "en": "An Agent Card may advertise a name, skills, interfaces and security requirements. These fields support discovery and communication but do not prove provider trustworthiness or performance. Check URL, origin and real supported interfaces before delegating sensitive data or operations."
      }
    },
    {
      "title": {
        "fr": "Procédure de qualification d’un agent",
        "en": "Agent qualification procedure"
      },
      "body": {
        "fr": "Lisez une carte d’agent dans un environnement isolé, identifiez les capacités annoncées et tentez une tâche réversible sur des données fictives. Vérifiez le format des réponses, le traitement des erreurs et les paramètres d’autorisation. Consignez le décalage éventuel entre description et comportement observé, ainsi que les conditions de déploiement qui pourraient expliquer cette différence.",
        "en": "Inspect an agent card in an isolated environment, identify claimed capabilities and attempt a reversible task using fictional data. Check response format, error handling and authorization parameters. Record any mismatch between descriptions and observed behavior, including deployment conditions that may explain it."
      }
    }
  ],
  "webmcp-imperative": [
    {
      "title": {
        "fr": "Statut communautaire et fonctions exposées",
        "en": "Community status and exposed functions"
      },
      "body": {
        "fr": "L’API impérative proposée pour WebMCP s’intéresse à la manière dont une page peut déclarer des fonctions invocables par des agents. Le rapport du Community Group n’est pas une recommandation W3C, et les disponibilités navigateur doivent être vérifiées. La définition d’un schéma d’entrée aide à décrire les paramètres, mais l’autorisation d’exécuter et les protections côté application restent nécessaires.",
        "en": "The proposed imperative WebMCP API explores how pages declare functions callable by agents. The Community Group report is not a W3C Recommendation and browser availability needs checking. Input schemas help describe parameters but do not replace execution authorization or application safeguards."
      }
    },
    {
      "title": {
        "fr": "Exercice : fonction de navigation sans effet de bord",
        "en": "Exercise: side-effect-free navigation function"
      },
      "body": {
        "fr": "Décrivez une fonction ouvrant une fiche de cours à partir d’un identifiant autorisé. Vérifiez que les paramètres incorrects produisent des erreurs lisibles et que l’interface HTML reste utilisable au clavier. Dans une démonstration, séparez la description conceptuelle de toute API effectivement prise en charge ; ne dites pas qu’un agent externe est connecté si aucun appel réel n’a lieu.",
        "en": "Describe a function opening a course page from an allowed identifier. Check malformed parameters produce understandable errors and the HTML UI remains keyboard accessible. In a demo, distinguish conceptual descriptions from actually supported APIs; do not claim an external agent is connected when no real invocation occurs."
      }
    }
  ],
  "human-agent-oversight": [
    {
      "title": {
        "fr": "Des permissions techniques et non symboliques",
        "en": "Technical rather than symbolic permissions"
      },
      "body": {
        "fr": "Une autorisation humaine doit porter sur une action déterminée, ses destinataires, ses données et ses conséquences. Une fenêtre de confirmation ne suffit pas si le programme peut contourner la décision ou si un jeton possède déjà des droits trop larges. Les contrôles de serveur, l’expiration des accès et l’état de la transaction doivent soutenir l’interface d’approbation.",
        "en": "Human consent should cover a specific operation, recipients, data and consequences. A confirmation dialog is insufficient if software can bypass it or if a token already has overly broad permissions. Server enforcement, token expiry and transaction state must support the approval UI."
      }
    },
    {
      "title": {
        "fr": "Exercice : édition sensible d’une page",
        "en": "Exercise: consequential page edit"
      },
      "body": {
        "fr": "Un agent propose de remplacer une source dans une page éditoriale. Avant exécution, présentez le diff, le motif, les références et les personnes habilitées. Si la modification est approuvée, conservez un historique et vérifiez le rendu final ; si elle est refusée, aucune écriture ne doit se produire. Éprouvez aussi les interruptions et les erreurs réseau.",
        "en": "An agent proposes replacing a source in an editorial page. Before execution, show the diff, rationale, evidence and authorized reviewers. If approved, retain history and inspect the final render; if rejected, no write should happen. Test interruptions and network failures as well."
      }
    }
  ],
  "prompt-injection-indirect": [
    {
      "title": {
        "fr": "Le document extérieur n’est pas une instruction",
        "en": "External documents are not instructions"
      },
      "body": {
        "fr": "Une page ou un fichier récupéré peut contenir un texte conçu pour modifier le comportement de l’agent, en se présentant par exemple comme une consigne de système. Son emplacement dans un résultat de recherche ne lui donne aucun privilège. Les systèmes doivent isoler ces données, limiter les appels d’outils et reconnaître que des protections uniquement fondées sur des mots-clés restent fragiles.",
        "en": "A retrieved page or file may contain text designed to redirect an agent, sometimes pretending to be a system instruction. Its presence in search results grants no privilege. Systems must isolate external data, constrain tool calls and recognize the fragility of keyword-only defenses."
      }
    },
    {
      "title": {
        "fr": "Test reproductible de résistance",
        "en": "Reproducible resistance test"
      },
      "body": {
        "fr": "Créez un jeu de pages fictives contenant des tentatives d’instruction inoffensives et des passages documentaires pertinents. Le système doit répondre à la question légitime sans exécuter la consigne cachée. Mesurez simultanément les déclenchements interdits et les refus excessifs, puis examinez les journaux. Une seule réussite ne prouve pas une résistance universelle aux attaques.",
        "en": "Create fictional pages containing harmless adversarial instructions alongside relevant passages. The system should answer the legitimate question without following hidden instructions. Measure prohibited actions and excessive refusals, then inspect logs. One successful test does not prove universal attack resistance."
      }
    }
  ],
  "ai-risk-management": [
    {
      "title": {
        "fr": "Des risques attachés à un système réel",
        "en": "Risks belong to actual systems"
      },
      "body": {
        "fr": "Le cadre NIST sur la gestion des risques propose des catégories et pratiques permettant de réfléchir à la gouvernance des systèmes d’IA. Il ne dispense pas de décrire le cas d’usage : un outil de brouillon sur un corpus public n’a pas le même impact qu’un agent muni d’accès financiers ou de données sensibles. Les risques doivent être reliés à leurs propriétaires, mesures et contrôles.",
        "en": "The NIST AI risk framework provides categories and practices for AI governance. It does not replace describing the actual use case: a draft tool using public material differs from an agent with financial or sensitive-data access. Tie risks to owners, mitigation measures and checks."
      }
    },
    {
      "title": {
        "fr": "Registre des risques évolutif",
        "en": "Living risk register"
      },
      "body": {
        "fr": "Créez une grille recensant erreurs factuelles, divulgations, biais, dépendances, accessibilité et effets d’action. Pour chaque risque, notez probabilité évaluée, dommage possible, mesure prévue, responsable et résultat du dernier test. Relisez le registre après un changement de modèle, fournisseur, corpus ou protocole. Un document figé ne reflète pas un système qui évolue.",
        "en": "Build a register covering factual errors, disclosures, bias, dependencies, accessibility and action consequences. For each risk record assessed likelihood, potential harm, mitigation, owner and latest test outcome. Review the register after changing model, provider, corpus or protocol. A static document cannot reflect an evolving system."
      }
    }
  ]
};
