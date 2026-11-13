export const researchRowsA = [
  {
    "slug": "ai-search-visibility",
    "category": "Recherche",
    "title": {
      "fr": "Visibilité dans la recherche générative",
      "en": "Visibility in generative search"
    },
    "summary": {
      "fr": "Découvrir et évaluer la présence des contenus dans les interfaces de réponse.",
      "en": "Discover and evaluate content inclusion in AI answer interfaces."
    },
    "group": "suivre",
    "source": "https://developers.google.com/search/docs/appearance/ai-features",
    "audience": {
      "fr": "Apprenants, créateurs, développeurs et responsables numériques",
      "en": "Learners, creators, developers and digital decision-makers"
    },
    "exercise": {
      "fr": "Consulter le contenu, le statut d’indexation et les liens effectivement visibles.",
      "en": "Check the page, indexing eligibility and links actually displayed."
    },
    "sections": [
      {
        "title": {
          "fr": "Recherche et génération ne sont pas synonymes",
          "en": "Search and generation are not the same"
        },
        "body": {
          "fr": "Les moteurs de recherche utilisent des index et des systèmes de classement ; une interface générative peut exploiter ces systèmes pour sélectionner des pages et composer une synthèse. La présence d’une source dans la réponse n’est pas garantie, même pour une page indexée. Il faut distinguer recherche, récupération et rédaction.",
          "en": "Search engines use indexes and ranking systems; generative interfaces can build on them to select pages and compose a synthesis. Inclusion is not guaranteed even for indexed pages. Distinguish search, retrieval and drafting."
        }
      },
      {
        "title": {
          "fr": "Un socle HTML accessible",
          "en": "An accessible HTML foundation"
        },
        "body": {
          "fr": "Conservez des URL durables, des titres descriptifs, une hiérarchie de rubriques, des informations textuelles et des liens internes. Les contenus uniques et fiables sont plus utiles qu’un volume de pages artificiellement reformulées. Les recommandations habituelles en SEO demeurent pertinentes.",
          "en": "Preserve durable URLs, descriptive titles, heading hierarchy, textual information and internal links. Unique, reliable material is more useful than large volumes of mechanically rewritten pages. Established SEO guidance still matters."
        }
      },
      {
        "title": {
          "fr": "Mesurer sans prétendre voir les algorithmes",
          "en": "Measure without claiming algorithm access"
        },
        "body": {
          "fr": "Une analyse de visibilité compare des requêtes réelles, les liens cités, les périodes et les pays. Les outils tiers ne disposent pas d’un accès magique aux pondérations internes des moteurs ; les estimations doivent être distinguées des données de première main.",
          "en": "Visibility studies compare real queries, cited links, periods and locations. Third-party tools do not have privileged access to internal search ranking weights; distinguish estimates from first-party evidence."
        }
      },
      {
        "title": {
          "fr": "Expérience de publication",
          "en": "Publication experiment"
        },
        "body": {
          "fr": "Publiez une page documentée sur un concept précis, puis examinez l’indexation, les visites et les passages réellement cités. Consignez les changements apportés et leurs dates sans conclure trop vite à un lien de causalité.",
          "en": "Publish an evidence-led page on a precise concept, then inspect indexing, visits and actually cited passages. Record changes and dates without inferring causality too quickly."
        }
      }
    ],
    "steps": [
      {
        "fr": "Vérifier l’indexation",
        "en": "Vérifier l’indexation"
      },
      {
        "fr": "Comparer la citation des sources",
        "en": "Comparer la citation des sources"
      },
      {
        "fr": "Inspecter la qualité des visites",
        "en": "Inspecter la qualité des visites"
      },
      {
        "fr": "Consigner les limites",
        "en": "Consigner les limites"
      }
    ],
    "checks": [
      {
        "fr": "Une apparition en réponse prouve-t-elle un traitement préférentiel ?",
        "en": "Une apparition en réponse prouve-t-elle un traitement préférentiel ?"
      },
      {
        "fr": "Le contenu est-il original, accessible et correctement référencé ?",
        "en": "Le contenu est-il original, accessible et correctement référencé ?"
      },
      {
        "fr": "Les mesures distinguent-elles observation et estimation ?",
        "en": "Les mesures distinguent-elles observation et estimation ?"
      }
    ],
    "tools": [
      "lighthouse",
      "pagefind"
    ]
  },
  {
    "slug": "crawler-governance",
    "category": "Gouvernance",
    "title": {
      "fr": "Contrôler les robots de recherche et d’IA",
      "en": "Control search and AI crawlers"
    },
    "summary": {
      "fr": "Comprendre les rôles distincts des robots d’indexation, de recherche et d’entraînement.",
      "en": "Understand the distinct roles of indexing, search and training crawlers."
    },
    "group": "verifier",
    "source": "https://developers.openai.com/api/docs/bots",
    "audience": {
      "fr": "Apprenants, créateurs, développeurs et responsables numériques",
      "en": "Learners, creators, developers and digital decision-makers"
    },
    "exercise": {
      "fr": "Écrire une politique de robots explicite sans confondre les agents.",
      "en": "Write an explicit robots policy without conflating user agents."
    },
    "sections": [
      {
        "title": {
          "fr": "Des finalités de robot différentes",
          "en": "Different crawler purposes"
        },
        "body": {
          "fr": "Un robot de découverte peut aider un moteur à présenter des liens, alors qu’un autre peut collecter des contenus pour l’entraînement. OpenAI documente des jetons indépendants pour OAI-SearchBot et GPTBot. Un éditeur peut faire des choix différents selon les finalités.",
          "en": "A discovery crawler may help a search product present links, while another may collect material for training. OpenAI documents independent OAI-SearchBot and GPTBot controls. Publishers can make different choices for different purposes."
        }
      },
      {
        "title": {
          "fr": "Comprendre robots.txt",
          "en": "Understand robots.txt"
        },
        "body": {
          "fr": "Le fichier robots.txt exprime des instructions de parcours à des robots coopératifs. Il ne constitue ni une authentification ni une protection contre un collecteur malveillant ; les contenus sensibles doivent être protégés par de vrais contrôles d’accès.",
          "en": "robots.txt communicates crawl rules to cooperative bots. It is neither authentication nor protection against malicious scraping; sensitive content needs genuine access controls."
        }
      },
      {
        "title": {
          "fr": "Googlebot et Google-Extended",
          "en": "Googlebot and Google-Extended"
        },
        "body": {
          "fr": "Google-Extended est un jeton de contrôle de certains usages d’IA, pas un robot HTTP distinct. Selon Google, il n’affecte pas l’inclusion classique dans son moteur de recherche. Ne confondez pas les règles de recherche avec les préférences d’autres produits.",
          "en": "Google-Extended is a control token for certain AI uses, not a separate HTTP crawler. According to Google, it does not affect ordinary Google Search inclusion. Search controls are not identical to preferences for other products."
        }
      },
      {
        "title": {
          "fr": "Documenter les décisions",
          "en": "Document policy decisions"
        },
        "body": {
          "fr": "Conservez la date, les versions de vos politiques, les critères de choix et la liste des robots concernés. Contrôlez les logs, les paramètres CDN et les ressources rendues publiques ; une configuration seule ne garantit pas les pratiques d’un tiers.",
          "en": "Keep dates, policy versions, selection criteria and affected crawlers. Review logs, CDN rules and published resources; a configuration alone does not guarantee third-party practices."
        }
      }
    ],
    "steps": [
      {
        "fr": "Identifier chaque bot",
        "en": "Identifier chaque bot"
      },
      {
        "fr": "Rédiger des règles spécifiques",
        "en": "Rédiger des règles spécifiques"
      },
      {
        "fr": "Tester les robots et les logs",
        "en": "Tester les robots et les logs"
      },
      {
        "fr": "Réviser régulièrement",
        "en": "Réviser régulièrement"
      }
    ],
    "checks": [
      {
        "fr": "Robots.txt protège-t-il des fichiers confidentiels ?",
        "en": "Robots.txt protège-t-il des fichiers confidentiels ?"
      },
      {
        "fr": "Recherche et entraînement utilisent-ils les mêmes jetons ?",
        "en": "Recherche et entraînement utilisent-ils les mêmes jetons ?"
      },
      {
        "fr": "La politique est-elle datée et réversible ?",
        "en": "La politique est-elle datée et réversible ?"
      }
    ],
    "tools": [
      "github",
      "vercel"
    ]
  },
  {
    "slug": "llms-txt-status",
    "category": "Interopérabilité",
    "title": {
      "fr": "Fichier llms.txt : proposition et limites",
      "en": "llms.txt: proposal and limits"
    },
    "summary": {
      "fr": "Éviter de présenter une convention facultative comme un standard de référencement universel.",
      "en": "Avoid treating an optional convention as a universal ranking standard."
    },
    "group": "explorer",
    "source": "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
    "audience": {
      "fr": "Apprenants, créateurs, développeurs et responsables numériques",
      "en": "Learners, creators, developers and digital decision-makers"
    },
    "exercise": {
      "fr": "Distinguer expérimentation pour certains outils et obligation imposée par les moteurs.",
      "en": "Separate optional experiments for particular tools from search-engine requirements."
    },
    "sections": [
      {
        "title": {
          "fr": "La proposition",
          "en": "The proposal"
        },
        "body": {
          "fr": "Certaines initiatives suggèrent un fichier llms.txt présentant des ressources d’un site à destination d’outils utilisant des modèles. Son existence ne remplace pas les pages HTML, les métadonnées essentielles, les liens ou une API documentée.",
          "en": "Some initiatives propose an llms.txt file listing site resources for model-using tools. It does not replace HTML pages, essential metadata, links or a documented API."
        }
      },
      {
        "title": {
          "fr": "Ce que Google indique",
          "en": "What Google says"
        },
        "body": {
          "fr": "Google Search Central précise que ses systèmes de recherche, y compris les fonctions génératives, n’exigent pas llms.txt ni un balisage IA particulier. Un prestataire qui promet un classement garanti grâce à ce fichier dépasse ce que la documentation officielle établit.",
          "en": "Google Search Central says its search systems, including generative features, do not require llms.txt or special AI markup. Vendors promising guaranteed rankings from this file overstate the documented evidence."
        }
      },
      {
        "title": {
          "fr": "Pourquoi expérimenter malgré tout",
          "en": "Why experiment anyway"
        },
        "body": {
          "fr": "Un index textuel compact peut aider certains consommateurs logiciels explicitement configurés pour l’utiliser. Vérifiez le comportement du produit concerné, les règles d’accès, l’exactitude des liens et la maintenance du fichier au lieu de supposer une adoption générale.",
          "en": "A compact text index can help specific software explicitly configured to use it. Verify the consuming product, access rules, link accuracy and upkeep rather than assuming universal adoption."
        }
      },
      {
        "title": {
          "fr": "Protocole d’évaluation",
          "en": "Evaluation protocol"
        },
        "body": {
          "fr": "Comparez des tâches identiques avec et sans le fichier, en observant des mesures concrètes telles que la découverte des pages et la qualité des réponses. Séparez le résultat de votre expérience de l’interprétation prospective.",
          "en": "Compare identical tasks with and without the file, measuring actual page discovery and answer quality. Separate experimental findings from forward-looking interpretation."
        }
      }
    ],
    "steps": [
      {
        "fr": "Identifier les consommateurs",
        "en": "Identifier les consommateurs"
      },
      {
        "fr": "Comparer les résultats",
        "en": "Comparer les résultats"
      },
      {
        "fr": "Contrôler les sources",
        "en": "Contrôler les sources"
      },
      {
        "fr": "Éviter toute promesse universelle",
        "en": "Éviter toute promesse universelle"
      }
    ],
    "checks": [
      {
        "fr": "Le fichier est-il obligatoire pour Google Search ?",
        "en": "Le fichier est-il obligatoire pour Google Search ?"
      },
      {
        "fr": "Quel logiciel l’exploite réellement ?",
        "en": "Quel logiciel l’exploite réellement ?"
      },
      {
        "fr": "Les résultats sont-ils reproductibles ?",
        "en": "Les résultats sont-ils reproductibles ?"
      }
    ],
    "tools": [
      "github"
    ]
  },
  {
    "slug": "agent-ready-html",
    "category": "Conception",
    "title": {
      "fr": "Concevoir un site accessible aux humains et aux agents",
      "en": "Build websites for humans and agents"
    },
    "summary": {
      "fr": "Rendre les interfaces plus interprétables sans sacrifier l’expérience humaine.",
      "en": "Make interfaces easier to interpret without degrading human experience."
    },
    "group": "explorer",
    "source": "https://web.dev/explore/ai",
    "audience": {
      "fr": "Apprenants, créateurs, développeurs et responsables numériques",
      "en": "Learners, creators, developers and digital decision-makers"
    },
    "exercise": {
      "fr": "Auditer une page à partir de ses titres, formulaires, rôles et messages d’erreur.",
      "en": "Audit headings, form controls, roles and error feedback."
    },
    "sections": [
      {
        "title": {
          "fr": "Le Web sémantique comme point de départ",
          "en": "Semantic HTML as a starting point"
        },
        "body": {
          "fr": "Les agents parcourent souvent des interfaces par le DOM, l’arbre d’accessibilité ou la vision. Des balises structurées, des libellés de champs stables, des noms d’actions sans ambiguïté et une hiérarchie claire aident également les personnes utilisant un lecteur d’écran.",
          "en": "Agents often navigate through the DOM, accessibility tree or visual interface. Structured markup, stable field labels, unambiguous action names and clear heading hierarchy also help people using screen readers."
        }
      },
      {
        "title": {
          "fr": "États et confirmations",
          "en": "States and confirmations"
        },
        "body": {
          "fr": "Une commande doit annoncer si elle est disponible, en cours ou terminée. Les erreurs doivent être localisées et compréhensibles. Les actions destructrices ou engageantes demandent une confirmation explicite ; la simple présence d’un bouton ne vaut pas autorisation générale.",
          "en": "An action should expose whether it is available, pending or completed. Errors should be localized and understandable. Destructive or consequential operations need explicit confirmation; a button is not blanket authorization."
        }
      },
      {
        "title": {
          "fr": "Éviter la dépendance à un agent particulier",
          "en": "Avoid dependence on a particular agent"
        },
        "body": {
          "fr": "Une page utile doit rester navigable au clavier et lisible sans interface propriétaire. Les API et formats ouverts complètent l’HTML sémantique, mais aucun signal ne garantit que tous les agents fonctionneront correctement avec le site.",
          "en": "A useful page should remain keyboard-accessible and readable without proprietary interfaces. Open APIs and formats complement semantic HTML, but no signal guarantees universal agent compatibility."
        }
      },
      {
        "title": {
          "fr": "Tests combinés",
          "en": "Combined testing"
        },
        "body": {
          "fr": "Testez les parcours avec clavier, lecteur d’écran, tests de bout en bout et agents différents. Comparez l’observation avec les permissions demandées et l’état final réellement enregistré côté serveur.",
          "en": "Test workflows with keyboard, assistive technology, end-to-end checks and different agents. Compare observed behavior with requested permissions and final server-side state."
        }
      }
    ],
    "steps": [
      {
        "fr": "Auditer les noms accessibles",
        "en": "Auditer les noms accessibles"
      },
      {
        "fr": "Tester sans souris",
        "en": "Tester sans souris"
      },
      {
        "fr": "Simuler les erreurs",
        "en": "Simuler les erreurs"
      },
      {
        "fr": "Confirmer les actions sensibles",
        "en": "Confirmer les actions sensibles"
      }
    ],
    "checks": [
      {
        "fr": "Un bouton non étiqueté reste-t-il compréhensible ?",
        "en": "Un bouton non étiqueté reste-t-il compréhensible ?"
      },
      {
        "fr": "Un agent peut-il confondre une action et son résultat ?",
        "en": "Un agent peut-il confondre une action et son résultat ?"
      },
      {
        "fr": "L’usage humain fonctionne-t-il sans agent ?",
        "en": "L’usage humain fonctionne-t-il sans agent ?"
      }
    ],
    "tools": [
      "playwright",
      "axe-core"
    ]
  },
  {
    "slug": "protocol-versions",
    "category": "Interopérabilité",
    "title": {
      "fr": "MCP : versions, capacités et sécurité",
      "en": "MCP: versions, capabilities and security"
    },
    "summary": {
      "fr": "Comprendre les évolutions d’un protocole sans confondre adoption et maturité de tous les outils.",
      "en": "Understand protocol evolution without conflating adoption with universal maturity."
    },
    "group": "explorer",
    "source": "https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/blog/content/posts/2026-07-28-spec-ga/index.md",
    "audience": {
      "fr": "Apprenants, créateurs, développeurs et responsables numériques",
      "en": "Learners, creators, developers and digital decision-makers"
    },
    "exercise": {
      "fr": "Vérifier la version du client, celle du serveur et les capacités effectivement négociées.",
      "en": "Check client/server versions and negotiated capabilities."
    },
    "sections": [
      {
        "title": {
          "fr": "Le rôle du protocole",
          "en": "The role of the protocol"
        },
        "body": {
          "fr": "MCP définit des interactions entre clients et serveurs exposant notamment outils, ressources et invites. Son cœur s’appuie sur des messages normalisés ; il ne garantit ni que l’outil est sûr, ni que l’utilisateur accepte chaque action.",
          "en": "MCP defines interactions between clients and servers exposing tools, resources and prompts. Its core uses structured messages; it does not guarantee tool safety or user consent for each action."
        }
      },
      {
        "title": {
          "fr": "Une édition datée en 2026",
          "en": "A dated 2026 release"
        },
        "body": {
          "fr": "Le projet a annoncé une spécification le 28 juillet 2026, introduisant notamment un cœur sans état, de nouvelles formes d’échanges et des améliorations liées aux extensions et aux autorisations. Consultez les notes officielles pour éviter de mélanger générations de protocoles.",
          "en": "The project announced a 28 July 2026 specification with a stateless core, new interaction patterns and extension and authorization improvements. Consult official release notes rather than mixing different protocol generations."
        }
      },
      {
        "title": {
          "fr": "Des capacités à négocier",
          "en": "Capabilities must be negotiated"
        },
        "body": {
          "fr": "L’existence d’une fonctionnalité dans la spécification n’implique pas son support dans chaque client ou serveur. Vérifiez l’initialisation, les capacités annoncées, les messages d’erreur et la rétrocompatibilité avant de décrire un échange comme interopérable.",
          "en": "A capability in the specification does not imply implementation in every client or server. Inspect initialization, advertised capabilities, error messages and backward compatibility before claiming interoperability."
        }
      },
      {
        "title": {
          "fr": "Sécurité de bout en bout",
          "en": "End-to-end security"
        },
        "body": {
          "fr": "Les serveurs distants nécessitent une identification des ressources et une validation des autorisations adaptées. Distinguez les permissions minimales, les jetons destinés à un serveur précis et les actions réversibles.",
          "en": "Remote servers need proper resource identification and authorization validation. Distinguish least-privilege permissions, tokens intended for a particular server and reversible actions."
        }
      }
    ],
    "steps": [
      {
        "fr": "Lire la version officielle",
        "en": "Lire la version officielle"
      },
      {
        "fr": "Lister les capacités réelles",
        "en": "Lister les capacités réelles"
      },
      {
        "fr": "Tester une interaction",
        "en": "Tester une interaction"
      },
      {
        "fr": "Vérifier les autorisations",
        "en": "Vérifier les autorisations"
      }
    ],
    "checks": [
      {
        "fr": "MCP rend-il tous les outils sûrs automatiquement ?",
        "en": "MCP rend-il tous les outils sûrs automatiquement ?"
      },
      {
        "fr": "Le client annonce-t-il la capacité attendue ?",
        "en": "Le client annonce-t-il la capacité attendue ?"
      },
      {
        "fr": "Les jetons sont-ils limités à leur destinataire ?",
        "en": "Les jetons sont-ils limités à leur destinataire ?"
      }
    ],
    "tools": [
      "github",
      "langgraph"
    ]
  },
  {
    "slug": "agent-card-discovery",
    "category": "Agents",
    "title": {
      "fr": "A2A : découvrir et décrire des agents",
      "en": "A2A: discovering and describing agents"
    },
    "summary": {
      "fr": "Comprendre les cartes d’agents sans partager inutilement des données internes.",
      "en": "Understand agent cards without oversharing internal information."
    },
    "group": "explorer",
    "source": "https://a2a-protocol.org/latest/specification/agent-card/",
    "audience": {
      "fr": "Apprenants, créateurs, développeurs et responsables numériques",
      "en": "Learners, creators, developers and digital decision-makers"
    },
    "exercise": {
      "fr": "Lire une Agent Card et contrôler les méthodes de communication annoncées.",
      "en": "Read an Agent Card and inspect its declared communication interfaces."
    },
    "sections": [
      {
        "title": {
          "fr": "Une carte de présentation structurée",
          "en": "Structured agent self-description"
        },
        "body": {
          "fr": "A2A décrit des objets AgentCard contenant notamment nom, description, compétences, interfaces prises en charge et exigences de sécurité. Une carte n’est pas un certificat universel de confiance ; ses affirmations doivent être contrôlées.",
          "en": "A2A describes AgentCard objects containing a name, description, skills, supported interfaces and security requirements. A card is not a universal trust certificate; its claims require verification."
        }
      },
      {
        "title": {
          "fr": "Découverte et accessibilité",
          "en": "Discovery and access"
        },
        "body": {
          "fr": "Une carte peut être publiée à une adresse well-known telle que /.well-known/agent-card.json ou distribuée autrement. Les droits d’accès et capacités réelles dépendent du déploiement, pas seulement de l’existence du fichier.",
          "en": "A card may be published at a well-known path such as /.well-known/agent-card.json or discovered through other means. Access controls and real capabilities depend on the deployment, not just on a file."
        }
      },
      {
        "title": {
          "fr": "Protocoles et tâches",
          "en": "Protocols and tasks"
        },
        "body": {
          "fr": "Les agents interopérables doivent convenir d’une interface transport, des types de contenus acceptés, de l’état des tâches et des erreurs. L’organisation peut demander validation humaine ou authentification avant la délégation.",
          "en": "Interoperable agents need agreement on transport interface, content types, task states and errors. Organizations may require human review or authentication before delegation."
        }
      },
      {
        "title": {
          "fr": "Menaces liées à la découverte",
          "en": "Discovery threats"
        },
        "body": {
          "fr": "Les cartes distribuées par un acteur non fiable peuvent annoncer des compétences trompeuses. Contrôlez l’identité du serveur, les signatures éventuellement présentes et les périmètres de données avant d’envoyer une tâche sensible.",
          "en": "Cards from untrusted actors can make misleading capability claims. Check server identity, any available signatures and data scopes before sending sensitive tasks."
        }
      }
    ],
    "steps": [
      {
        "fr": "Consulter la carte",
        "en": "Consulter la carte"
      },
      {
        "fr": "Vérifier l’origine",
        "en": "Vérifier l’origine"
      },
      {
        "fr": "Comparer les interfaces",
        "en": "Comparer les interfaces"
      },
      {
        "fr": "Tester une tâche non sensible",
        "en": "Tester une tâche non sensible"
      }
    ],
    "checks": [
      {
        "fr": "Qui publie la carte ?",
        "en": "Qui publie la carte ?"
      },
      {
        "fr": "L’authentification est-elle nécessaire ?",
        "en": "L’authentification est-elle nécessaire ?"
      },
      {
        "fr": "La capacité annoncée a-t-elle été testée ?",
        "en": "La capacité annoncée a-t-elle été testée ?"
      }
    ],
    "tools": [
      "github",
      "langgraph"
    ]
  },
  {
    "slug": "webmcp-imperative",
    "category": "Agents",
    "title": {
      "fr": "WebMCP : outils JavaScript exposés par une page",
      "en": "WebMCP: JavaScript tools exposed by a page"
    },
    "summary": {
      "fr": "Étudier l’API expérimentale et le statut exact du document communautaire.",
      "en": "Study the experimental API and the exact status of the community draft."
    },
    "group": "explorer",
    "source": "https://webmachinelearning.github.io/webmcp/",
    "audience": {
      "fr": "Apprenants, créateurs, développeurs et responsables numériques",
      "en": "Learners, creators, developers and digital decision-makers"
    },
    "exercise": {
      "fr": "Identifier un outil client et décrire ses paramètres et effets de bord.",
      "en": "Identify a client-side tool, its parameters and side effects."
    },
    "sections": [
      {
        "title": {
          "fr": "Ce que propose WebMCP",
          "en": "What WebMCP proposes"
        },
        "body": {
          "fr": "WebMCP propose une interface JavaScript permettant à une page d’exposer des fonctions comme des outils invocables par des agents. Une description en langage naturel et un schéma de paramètres facilitent la découverte de fonctionnalités normalement activées par un utilisateur.",
          "en": "WebMCP proposes a JavaScript interface for pages to expose functions as callable tools for agents. Natural language descriptions and structured input schemas help discover features normally activated by users."
        }
      },
      {
        "title": {
          "fr": "Statut au 13 novembre 2026",
          "en": "Status as of 13 November 2026"
        },
        "body": {
          "fr": "Le rapport du Web Machine Learning Community Group reste un brouillon communautaire et non une recommandation W3C. L’API impérative est documentée ; la piste déclarative fondée sur les formulaires HTML est étudiée séparément et ne doit pas être présentée comme implémentée partout.",
          "en": "The Web Machine Learning Community Group report remains a community draft rather than a W3C Recommendation. The imperative API is documented; a declarative approach built around HTML forms is explored separately and must not be described as universally implemented."
        }
      },
      {
        "title": {
          "fr": "Contrôle de l’interface utilisateur",
          "en": "User-interface control"
        },
        "body": {
          "fr": "Les outils exposés devraient décrire explicitement les effets attendus et respecter le contexte d’autorisation de la page. Une fonction disponible dans JavaScript ne devient pas automatiquement une capacité à exécuter sans accord humain.",
          "en": "Exposed tools should describe expected effects and honor the page’s authorization context. A function available in JavaScript is not automatically authorized to run without human consent."
        }
      },
      {
        "title": {
          "fr": "Prototype expérimental",
          "en": "Experimental prototype"
        },
        "body": {
          "fr": "Commencez par une action réversible, telle qu’un filtre de recherche, puis vérifiez la prise en charge du navigateur utilisé. Ne prétendez pas fournir un agent réel lorsque l’expérience ne montre qu’un schéma ou une simulation.",
          "en": "Start with a reversible operation such as a search filter, then verify browser support. Do not imply that a live agent is available when the example only demonstrates a schema or simulation."
        }
      }
    ],
    "steps": [
      {
        "fr": "Lire le brouillon",
        "en": "Lire le brouillon"
      },
      {
        "fr": "Modéliser une action sans risque",
        "en": "Modéliser une action sans risque"
      },
      {
        "fr": "Contrôler le support navigateur",
        "en": "Contrôler le support navigateur"
      },
      {
        "fr": "Examiner les permissions",
        "en": "Examiner les permissions"
      }
    ],
    "checks": [
      {
        "fr": "S’agit-il d’un standard W3C adopté ?",
        "en": "S’agit-il d’un standard W3C adopté ?"
      },
      {
        "fr": "Le formulaire déclaratif fait-il partie du cœur actuel ?",
        "en": "Le formulaire déclaratif fait-il partie du cœur actuel ?"
      },
      {
        "fr": "L’outil représente-t-il une action autorisée ?",
        "en": "L’outil représente-t-il une action autorisée ?"
      }
    ],
    "tools": [
      "playwright",
      "github"
    ]
  },
  {
    "slug": "human-agent-oversight",
    "category": "Gouvernance",
    "title": {
      "fr": "Supervision humaine des agents Web",
      "en": "Human oversight of Web agents"
    },
    "summary": {
      "fr": "Concevoir les points de contrôle avant toute action engageante.",
      "en": "Design approval gates before consequential actions."
    },
    "group": "verifier",
    "source": "https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/specification/draft/index.mdx",
    "audience": {
      "fr": "Apprenants, créateurs, développeurs et responsables numériques",
      "en": "Learners, creators, developers and digital decision-makers"
    },
    "exercise": {
      "fr": "Établir une matrice d’autorisations, de visibilité et de réversibilité.",
      "en": "Build a matrix of permissions, visibility and reversibility."
    },
    "sections": [
      {
        "title": {
          "fr": "Différencier observer et agir",
          "en": "Distinguish observing from acting"
        },
        "body": {
          "fr": "Lire une page ou organiser des résultats n’entraîne pas le même risque qu’envoyer un message, supprimer un fichier ou engager une transaction. Répartissez les capacités en lecture, préparation et exécution et prévoyez des conditions de déclenchement différentes.",
          "en": "Reading a page or organizing results carries different risks from sending messages, deleting files or completing transactions. Separate read, draft and execute capabilities with different approval conditions."
        }
      },
      {
        "title": {
          "fr": "Un consentement compréhensible",
          "en": "Meaningful consent"
        },
        "body": {
          "fr": "L’utilisateur doit connaître l’identité de l’outil, la cible de l’opération, les données envoyées et les conséquences prévisibles avant de confirmer. Une autorisation générale invisible ne remplace pas la compréhension d’une opération précise.",
          "en": "Users should understand the tool identity, action target, shared data and likely consequences before confirming. Invisible blanket permission is not a substitute for informed approval of a specific operation."
        }
      },
      {
        "title": {
          "fr": "Journaliser et corriger",
          "en": "Log and remediate"
        },
        "body": {
          "fr": "Conservez la trace des demandes, autorisations, appels exécutés et résultats, tout en minimisant les données privées. Une opération peut échouer malgré une réponse positive apparente ; vérifiez l’état final auprès du système concerné.",
          "en": "Retain requests, approvals, tool calls and outcomes while minimizing private data. An action can fail despite a seemingly positive response; inspect final state in the affected system."
        }
      },
      {
        "title": {
          "fr": "Réversibilité et autonomie limitée",
          "en": "Reversibility and bounded autonomy"
        },
        "body": {
          "fr": "Utilisez des privilèges minimaux, des délais, des confirmations pour actions irréversibles et des chemins d’annulation. La supervision n’est pas un simple écran de validation : c’est une politique technique appliquée.",
          "en": "Use minimum privileges, time limits, confirmations for irreversible actions and cancellation paths. Oversight is not just a confirmation screen: it is an enforced technical policy."
        }
      }
    ],
    "steps": [
      {
        "fr": "Classer les actions",
        "en": "Classer les actions"
      },
      {
        "fr": "Définir les droits",
        "en": "Définir les droits"
      },
      {
        "fr": "Tester la confirmation",
        "en": "Tester la confirmation"
      },
      {
        "fr": "Vérifier l’état final",
        "en": "Vérifier l’état final"
      }
    ],
    "checks": [
      {
        "fr": "Qui peut annuler ?",
        "en": "Qui peut annuler ?"
      },
      {
        "fr": "L’utilisateur voit-il les données partagées ?",
        "en": "L’utilisateur voit-il les données partagées ?"
      },
      {
        "fr": "Le résultat final est-il vérifié ?",
        "en": "Le résultat final est-il vérifié ?"
      }
    ],
    "tools": [
      "github-actions",
      "n8n"
    ]
  },
  {
    "slug": "prompt-injection-indirect",
    "category": "Sécurité",
    "title": {
      "fr": "Injection indirecte via des pages Web",
      "en": "Indirect prompt injection through Web content"
    },
    "summary": {
      "fr": "Séparer les instructions légitimes du contenu non fiable récupéré sur le Web.",
      "en": "Separate authorized instructions from untrusted retrieved Web content."
    },
    "group": "verifier",
    "source": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
    "audience": {
      "fr": "Apprenants, créateurs, développeurs et responsables numériques",
      "en": "Learners, creators, developers and digital decision-makers"
    },
    "exercise": {
      "fr": "Évaluer une page malveillante comme donnée non fiable, et non comme consigne.",
      "en": "Treat malicious page content as untrusted data rather than an instruction."
    },
    "sections": [
      {
        "title": {
          "fr": "Le point de passage de confiance",
          "en": "The trust boundary"
        },
        "body": {
          "fr": "Une page récupérée, un résultat de recherche ou un document peut contenir une instruction hostile destinée à l’assistant. Le modèle peut alors confondre texte externe et consigne supérieure. Le risque n’est pas nécessairement visible dans la page affichée à l’humain.",
          "en": "A retrieved page, search result or document can embed a hostile instruction targeting the assistant. The model may confuse external text with higher-trust instructions. The attack need not be obvious to a human reading the page."
        }
      },
      {
        "title": {
          "fr": "Au-delà du jailbreak visible",
          "en": "Beyond visible jailbreaks"
        },
        "body": {
          "fr": "L’injection indirecte est particulièrement dangereuse si le système peut appeler des outils ou accéder à des données privées. Une page prétendant contenir un ordre du système ne reçoit aucun privilège simplement parce qu’elle a été récupérée.",
          "en": "Indirect injection becomes especially dangerous when a system can call tools or access private data. A page claiming to contain system instructions has no privilege merely because it was retrieved."
        }
      },
      {
        "title": {
          "fr": "Défenses en couches",
          "en": "Layered defenses"
        },
        "body": {
          "fr": "Délimitez les contenus externes, restreignez les permissions, contrôlez les appels d’outils par politique, détectez les sorties anormales et demandez confirmation pour les actions sensibles. Aucun filtrage ou prompt d’instruction ne constitue une garantie absolue.",
          "en": "Separate untrusted content, restrict permissions, enforce tool-call policies, detect anomalous outputs and require confirmation for sensitive actions. Neither filtering nor system prompting provides an absolute guarantee."
        }
      },
      {
        "title": {
          "fr": "Tester des scénarios contrôlés",
          "en": "Test with controlled scenarios"
        },
        "body": {
          "fr": "Construisez des tests où un document de démonstration inclut des demandes de divulgation ou d’action non autorisée. Le système doit rester capable de résumer la page sans obéir aux consignes qu’elle contient.",
          "en": "Create tests where a sample document contains requests for disclosure or unauthorized actions. The system should still summarize the page without following the embedded instructions."
        }
      }
    ],
    "steps": [
      {
        "fr": "Identifier l’entrée non fiable",
        "en": "Identifier l’entrée non fiable"
      },
      {
        "fr": "Limiter les droits d’action",
        "en": "Limiter les droits d’action"
      },
      {
        "fr": "Simuler un contenu hostile",
        "en": "Simuler un contenu hostile"
      },
      {
        "fr": "Auditer les appels d’outils",
        "en": "Auditer les appels d’outils"
      }
    ],
    "checks": [
      {
        "fr": "Le contenu d’une page est-il une instruction ?",
        "en": "Le contenu d’une page est-il une instruction ?"
      },
      {
        "fr": "Les outils ont-ils des autorisations minimales ?",
        "en": "Les outils ont-ils des autorisations minimales ?"
      },
      {
        "fr": "Une confirmation précède-t-elle les actions sensibles ?",
        "en": "Une confirmation précède-t-elle les actions sensibles ?"
      }
    ],
    "tools": [
      "promptfoo",
      "playwright"
    ]
  },
  {
    "slug": "ai-risk-management",
    "category": "Gouvernance",
    "title": {
      "fr": "Évaluer les risques du Web génératif",
      "en": "Assess risks of the generative Web"
    },
    "summary": {
      "fr": "Structurer l’évaluation plutôt que se reposer sur une liste de promesses.",
      "en": "Structure risk assessment rather than relying on promises."
    },
    "group": "verifier",
    "source": "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence",
    "audience": {
      "fr": "Apprenants, créateurs, développeurs et responsables numériques",
      "en": "Learners, creators, developers and digital decision-makers"
    },
    "exercise": {
      "fr": "Préparer un registre de risques, de mesures et de responsables.",
      "en": "Prepare a risk register of mitigations and owners."
    },
    "sections": [
      {
        "title": {
          "fr": "Un cadre plutôt qu’une certification",
          "en": "A framework, not a certificate"
        },
        "body": {
          "fr": "Le NIST AI RMF et son profil consacré à l’IA générative proposent des catégories et actions de gestion des risques. Leur usage est volontaire et ne constitue pas à lui seul une garantie de conformité juridique ou de fiabilité du système.",
          "en": "The NIST AI RMF and its generative AI profile provide categories and actions for risk management. They are voluntary resources, not automatic legal compliance or proof of reliability."
        }
      },
      {
        "title": {
          "fr": "Identifier le système réel",
          "en": "Identify the actual system"
        },
        "body": {
          "fr": "Précisez qui utilise le Web génératif, pour quelle tâche, avec quels modèles, données, droits et effets. Un générateur de brouillons ne présente pas le même profil de risque qu’un agent autorisé à effectuer des opérations sensibles.",
          "en": "Specify who uses generative Web tools, for which task, with which models, data, permissions and consequences. A draft generator has a different risk profile from an agent executing sensitive operations."
        }
      },
      {
        "title": {
          "fr": "Mesurer le fonctionnement",
          "en": "Measure system behavior"
        },
        "body": {
          "fr": "Évaluez exactitude, informations incomplètes, confidentialité, transparence, accessibilité, coûts et capacité d’escalade. Testez des cas courants et des situations adversariales, puis consignez les taux d’erreur et les limites.",
          "en": "Evaluate accuracy, missing information, privacy, transparency, accessibility, costs and escalation behavior. Test routine and adversarial cases, recording error rates and limitations."
        }
      },
      {
        "title": {
          "fr": "Suivre le cycle de vie",
          "en": "Monitor the lifecycle"
        },
        "body": {
          "fr": "Les changements de modèle, de source ou de protocole peuvent modifier les risques. Assignez des propriétaires, prévoyez une revue périodique et conservez un historique des incidents et corrections.",
          "en": "Model, source or protocol updates can change risks. Assign owners, schedule review and retain incident and remediation history."
        }
      }
    ],
    "steps": [
      {
        "fr": "Décrire le cas d’usage",
        "en": "Décrire le cas d’usage"
      },
      {
        "fr": "Identifier les dommages possibles",
        "en": "Identifier les dommages possibles"
      },
      {
        "fr": "Tester les mesures",
        "en": "Tester les mesures"
      },
      {
        "fr": "Planifier la revue",
        "en": "Planifier la revue"
      }
    ],
    "checks": [
      {
        "fr": "Qui valide le registre de risques ?",
        "en": "Qui valide le registre de risques ?"
      },
      {
        "fr": "Les changements sont-ils tracés ?",
        "en": "Les changements sont-ils tracés ?"
      },
      {
        "fr": "Le cadre volontariste est-il présenté comme une certification ?",
        "en": "Le cadre volontariste est-il présenté comme une certification ?"
      }
    ],
    "tools": [
      "mlflow",
      "promptfoo"
    ]
  }
];
