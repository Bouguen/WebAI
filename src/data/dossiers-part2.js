export const deepDossiersPart2 = {
  "c2pa": {
    "stage": {
      "fr": "Provenance technique",
      "en": "Technical provenance"
    },
    "audience": {
      "fr": "Médias, enseignants, créateurs, chercheurs",
      "en": "Media, educators, creators, researchers"
    },
    "lead": {
      "fr": "C2PA décrit des moyens de lier des déclarations signées à l'histoire d'un contenu numérique. Il aide à étudier des assertions de provenance, mais ne transforme pas un média en preuve incontestable de ce qu'il représente.",
      "en": "C2PA defines ways to bind signed assertions to the history of digital content. It supports provenance checks but does not make a media file indisputable evidence of what it depicts."
    },
    "sections": [
      {
        "title": {
          "fr": "Ce que contient un manifeste",
          "en": "What a manifest records"
        },
        "body": {
          "fr": "Un manifeste peut contenir des informations déclarées sur l'origine, les modifications et l'outil utilisé, accompagnées de mécanismes de signature. Il faut distinguer l'émetteur de la déclaration, la validation cryptographique et la réalité des événements décrits.",
          "en": "A manifest may include declarations about origin, edits and tools, together with signing mechanisms. Distinguish the claim issuer, cryptographic validation and the real-world events that are depicted."
        }
      },
      {
        "title": {
          "fr": "Présence, absence et continuité",
          "en": "Presence, absence and continuity"
        },
        "body": {
          "fr": "Une information de provenance peut être absente, supprimée ou incomprise par un logiciel sans que cela permette de conclure à une falsification. À l'inverse, une assertion signée peut être techniquement valide et néanmoins incomplète ou trompeuse.",
          "en": "Provenance information may be absent, stripped or unsupported by software without proving that media was manipulated. Conversely, a signed assertion can be technically valid yet incomplete or misleading."
        }
      },
      {
        "title": {
          "fr": "Les bonnes questions à poser",
          "en": "Questions worth asking"
        },
        "body": {
          "fr": "Qui a signé ? Que couvre la signature ? Quelles transformations sont déclarées ? Peut-on retrouver un média antérieur et confronter l'histoire technique à des sources indépendantes ?",
          "en": "Who signed the claim? What does the signature cover? Which edits are disclosed? Can an earlier media asset be found and technical history compared with independent evidence?"
        }
      },
      {
        "title": {
          "fr": "Usage responsable",
          "en": "Responsible use"
        },
        "body": {
          "fr": "Un service d'archives peut conserver des métadonnées C2PA à côté d'une description de ses méthodes d'acquisition, des droits et d'une chronologie des transformations. La provenance complète l'enquête, elle ne la remplace pas.",
          "en": "An archive may retain C2PA metadata alongside acquisition methods, rights and an edit timeline. Provenance complements investigation rather than replacing it."
        }
      }
    ],
    "steps": [
      {
        "fr": "Chercher le manifeste",
        "en": "Locate the manifest"
      },
      {
        "fr": "Examiner les assertions",
        "en": "Inspect the assertions"
      },
      {
        "fr": "Valider les signatures",
        "en": "Validate signatures"
      },
      {
        "fr": "Confronter aux faits",
        "en": "Cross-check the facts"
      }
    ],
    "checks": [
      {
        "fr": "Que démontre exactement la signature ?",
        "en": "What exactly does the signature demonstrate?"
      },
      {
        "fr": "Les conditions d'acquisition et de modification sont-elles documentées ?",
        "en": "Are acquisition and editing conditions documented?"
      },
      {
        "fr": "L'absence de métadonnées est-elle interprétée avec prudence ?",
        "en": "Is absence of metadata interpreted cautiously?"
      }
    ],
    "relations": [
      "security",
      "evaluation",
      "generative-web"
    ],
    "tools": [
      "c2patool",
      "promptfoo"
    ],
    "refs": [
      {
        "label": "C2PA Technical Specifications",
        "url": "https://spec.c2pa.org/specifications/"
      },
      {
        "label": "c2patool — outil de référence",
        "url": "https://github.com/contentauth/c2patool"
      }
    ],
    "review_status": "a_verifier",
    "snapshot_date": "2026-11-12"
  },
  "webgpu": {
    "stage": {
      "fr": "W3C Candidate Recommendation Draft (15 sept. 2026)",
      "en": "W3C Candidate Recommendation Draft (Sep 15, 2026)"
    },
    "audience": {
      "fr": "Développeurs, concepteurs 3D et IA locale",
      "en": "Developers, 3D creators and on-device AI builders"
    },
    "lead": {
      "fr": "WebGPU donne aux applications Web un accès contrôlé à des opérations de calcul et de rendu sur processeur graphique. Cela ouvre des possibilités pour l'inférence locale mais ne signifie pas que tous les navigateurs et appareils peuvent exécuter n'importe quel modèle.",
      "en": "WebGPU gives Web applications controlled access to GPU compute and rendering. This can enable on-device inference but does not mean every browser and device can run any model."
    },
    "sections": [
      {
        "title": {
          "fr": "Une API de calcul et de rendu",
          "en": "Compute and rendering API"
        },
        "body": {
          "fr": "WebGPU fournit un modèle de périphériques, buffers et commandes pour effectuer des calculs ou dessiner des scènes. Les capacités et restrictions varient selon les pilotes, le navigateur, le matériel et les politiques de sécurité.",
          "en": "WebGPU defines devices, buffers and command submission for compute or graphics rendering. Capabilities and limits differ across drivers, browsers, hardware and security policies."
        }
      },
      {
        "title": {
          "fr": "Inférence locale et compromis",
          "en": "On-device inference trade-offs"
        },
        "body": {
          "fr": "Certains runtimes emploient WebGPU pour accélérer les opérateurs d'un modèle. Cette approche peut réduire des transferts de données vers un serveur, mais consomme la mémoire et la batterie de l'appareil ; la taille du modèle et les formats pris en charge restent déterminants.",
          "en": "Some runtimes use WebGPU to accelerate model operations. This can reduce server data transfer, but uses device memory and energy; model size and supported formats still matter."
        }
      },
      {
        "title": {
          "fr": "Statut du standard",
          "en": "Standards status"
        },
        "body": {
          "fr": "La publication de référence consultée indique une Candidate Recommendation Draft datée du 15 septembre 2026. Cette étape fait partie du processus du W3C et ne doit pas être présentée comme une Recommendation finale. Vérifier les dernières révisions avant tout déploiement.",
          "en": "The referenced W3C publication is a Candidate Recommendation Draft dated September 15, 2026. This is part of the W3C process and should not be described as a final Recommendation. Check current revisions before deployment."
        }
      },
      {
        "title": {
          "fr": "Dégradation progressive",
          "en": "Progressive enhancement"
        },
        "body": {
          "fr": "Une expérience WebAI peut afficher des informations sur la disponibilité de WebGPU puis proposer une solution de repli lorsque l'API manque. Les contrôles d'accessibilité restent indispensables même pour une interface animée ou immersive.",
          "en": "A WebAI experience can check WebGPU availability and offer fallback behavior if the API is absent. Accessibility remains essential even in animated or immersive interfaces."
        }
      }
    ],
    "steps": [
      {
        "fr": "Détecter le support",
        "en": "Detect support"
      },
      {
        "fr": "Choisir le runtime",
        "en": "Choose a runtime"
      },
      {
        "fr": "Mesurer mémoire et latence",
        "en": "Measure memory and latency"
      },
      {
        "fr": "Prévoir une alternative",
        "en": "Provide a fallback"
      }
    ],
    "checks": [
      {
        "fr": "Le navigateur et le pilote prennent-ils en charge la fonctionnalité requise ?",
        "en": "Do browser and driver support the needed feature?"
      },
      {
        "fr": "Le modèle fonctionne-t-il correctement sur des machines modestes ?",
        "en": "Does the model work acceptably on lower-end devices?"
      },
      {
        "fr": "Une interface de repli est-elle accessible ?",
        "en": "Is an accessible fallback available?"
      }
    ],
    "relations": [
      "models",
      "webxr",
      "accessibility"
    ],
    "tools": [
      "webllm",
      "transformers-js",
      "threejs"
    ],
    "refs": [
      {
        "label": "W3C WebGPU Candidate Recommendation Draft",
        "url": "https://www.w3.org/TR/webgpu/"
      },
      {
        "label": "WebNN W3C Candidate Recommendation Draft (oct. 2026)",
        "url": "https://www.w3.org/TR/webnn/"
      }
    ],
    "review_status": "a_verifier",
    "snapshot_date": "2026-11-12"
  },
  "seo-geo": {
    "stage": {
      "fr": "Recherche, découverte et publication",
      "en": "Search, discovery and publishing"
    },
    "audience": {
      "fr": "Éditeurs, communicants, chercheurs, développeurs",
      "en": "Publishers, communicators, researchers, developers"
    },
    "lead": {
      "fr": "Les pratiques historiques du SEO et les expressions AEO/GEO concernent la découverte des contenus, mais il n'existe pas de recette garantie pour figurer dans une réponse générative. La qualité, la structure, l'accessibilité et l'originalité du contenu restent fondamentales.",
      "en": "Conventional SEO and the labels AEO/GEO concern content discoverability, but no technique guarantees inclusion in a generative answer. Quality, structure, accessibility and original value remain foundational."
    },
    "sections": [
      {
        "title": {
          "fr": "La base : contenu accessible et utile",
          "en": "The foundation: accessible, useful content"
        },
        "body": {
          "fr": "Des pages accessibles, claires et stables offrent aux visiteurs et moteurs de meilleures conditions de compréhension. Les titres, les liens cohérents, la structure sémantique et les sources vérifiables servent d'abord le lecteur.",
          "en": "Accessible, clear and stable pages improve understanding for people and search systems alike. Headings, coherent links, semantic structure and verifiable sources should serve readers first."
        }
      },
      {
        "title": {
          "fr": "AEO/GEO : termes et limites",
          "en": "AEO/GEO: labels and limits"
        },
        "body": {
          "fr": "Les termes Answer Engine Optimization et Generative Engine Optimization sont employés avec des sens variables. Les études expérimentales peuvent être utiles, mais leurs résultats ne se généralisent pas nécessairement à tous les moteurs ou interfaces.",
          "en": "The terms Answer Engine Optimization and Generative Engine Optimization are used inconsistently. Experimental studies can inform practice, but results do not necessarily generalize across engines or interfaces."
        }
      },
      {
        "title": {
          "fr": "Publier avec une réelle valeur ajoutée",
          "en": "Publish with genuine value"
        },
        "body": {
          "fr": "La documentation de Google déconseille la multiplication de pages produites en masse sans valeur ajoutée. Un portail de référence doit investir dans la vérification, la synthèse originale, les exemples et la transparence plutôt que dans le seul volume.",
          "en": "Google's guidance warns against producing large volumes of low-value pages. A reference portal should invest in verification, original synthesis, meaningful examples and transparency rather than volume alone."
        }
      },
      {
        "title": {
          "fr": "Mesurer sans promesse magique",
          "en": "Measure without magic claims"
        },
        "body": {
          "fr": "Observer l'indexabilité et la qualité des visites, documenter les changements et conserver une architecture pérenne. Les réponses générées par des plateformes tierces ne sont ni entièrement contrôlables ni garanties dans le temps.",
          "en": "Observe crawlability and visitor experience, document changes and keep durable site architecture. Third-party generative answers are neither fully controllable nor guaranteed over time."
        }
      }
    ],
    "steps": [
      {
        "fr": "Clarifier l'objectif du lecteur",
        "en": "Clarify reader intent"
      },
      {
        "fr": "Structurer et attribuer",
        "en": "Structure and attribute"
      },
      {
        "fr": "Auditer l'accessibilité",
        "en": "Audit accessibility"
      },
      {
        "fr": "Mesurer et corriger",
        "en": "Measure and improve"
      }
    ],
    "checks": [
      {
        "fr": "Le contenu apporte-t-il une information originale ou vérifiée ?",
        "en": "Does the content add original or verified value?"
      },
      {
        "fr": "Les termes de marketing sont-ils distingués des résultats scientifiques ?",
        "en": "Are marketing labels separated from research findings?"
      },
      {
        "fr": "Les dates et sources sont-elles clairement lisibles ?",
        "en": "Are dates and sources visible?"
      }
    ],
    "relations": [
      "knowledge-graph",
      "generative-web",
      "accessibility"
    ],
    "tools": [
      "astro",
      "pagefind",
      "lighthouse"
    ],
    "refs": [
      {
        "label": "Google — guidance on generative AI content",
        "url": "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content"
      },
      {
        "label": "Google Search — 2026 generative search guidance",
        "url": "https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing"
      },
      {
        "label": "Recherche GEO (prépublication)",
        "url": "https://arxiv.org/abs/2311.09735"
      }
    ],
    "review_status": "a_verifier",
    "snapshot_date": "2026-11-12"
  },
  "security": {
    "stage": {
      "fr": "Sécurité et responsabilité",
      "en": "Security and accountability"
    },
    "audience": {
      "fr": "Développeurs, organismes, responsables de sécurité",
      "en": "Developers, organizations and security teams"
    },
    "lead": {
      "fr": "Un système utilisant des modèles ou des agents présente des surfaces de risque nouvelles sans rendre les principes de sécurité classiques obsolètes. L'injection de prompt, l'accès excessif aux outils et la confiance mal placée dans des réponses générées exigent des contrôles spécifiques.",
      "en": "Systems using models and agents introduce new risk surfaces without making classical security principles obsolete. Prompt injection, excessive tool access and misplaced trust in generated output require targeted controls."
    },
    "sections": [
      {
        "title": {
          "fr": "Frontières de confiance",
          "en": "Trust boundaries"
        },
        "body": {
          "fr": "Les instructions de l'application, les décisions de l'utilisateur et les documents externes n'ont pas le même niveau d'autorité. Une page Web consultée par un agent ne doit pas pouvoir modifier les permissions ni autoriser une transaction.",
          "en": "Application instructions, user decisions and external documents carry different authority. A page visited by an agent must not be able to change permissions or authorize a transaction."
        }
      },
      {
        "title": {
          "fr": "Moindre privilège et séparation",
          "en": "Least privilege and separation"
        },
        "body": {
          "fr": "Chaque outil doit exposer les opérations strictement nécessaires. Les secrets, jetons et données personnelles ne doivent pas être placés dans des contextes accessibles à des ressources non fiables. Les opérations sensibles nécessitent une confirmation.",
          "en": "Each tool should expose only necessary operations. Secrets, tokens and personal information should not be available to untrusted resources. Sensitive operations require confirmation."
        }
      },
      {
        "title": {
          "fr": "Tester autrement qu'avec des exemples faciles",
          "en": "Test beyond happy paths"
        },
        "body": {
          "fr": "Un test d'agent doit inclure des documents hostiles, des réponses contradictoires, des erreurs réseau et des états incomplets. Les journaux doivent permettre d'expliquer qui a demandé quoi sans stocker inutilement des données personnelles.",
          "en": "Agent tests should include hostile documents, conflicting evidence, network failures and partial states. Logs should make actions auditable while minimizing unnecessary personal data."
        }
      },
      {
        "title": {
          "fr": "Se tenir à jour",
          "en": "Keep controls current"
        },
        "body": {
          "fr": "Les guides de risques évoluent, notamment ceux de l'OWASP. Un classement de risques ne constitue pas une garantie de couverture complète ; des évaluations adaptées aux usages et au contexte sont indispensables.",
          "en": "Risk guidance, including OWASP materials, evolves. A risk ranking does not guarantee comprehensive coverage; assessments need to match the application and its operating context."
        }
      }
    ],
    "steps": [
      {
        "fr": "Cartographier les accès",
        "en": "Map access"
      },
      {
        "fr": "Isoler les sources",
        "en": "Separate sources"
      },
      {
        "fr": "Limiter les permissions",
        "en": "Restrict permissions"
      },
      {
        "fr": "Tester les attaques",
        "en": "Test attacks"
      }
    ],
    "checks": [
      {
        "fr": "Le système peut-il distinguer commande autorisée et instruction présente dans une page ?",
        "en": "Can it distinguish an authorized command from an instruction embedded in a page?"
      },
      {
        "fr": "Les outils dangereux exigent-ils une autorisation explicite ?",
        "en": "Do sensitive tools require explicit approval?"
      },
      {
        "fr": "Les erreurs et les refus sont-ils observables ?",
        "en": "Are failures and refusals observable?"
      }
    ],
    "relations": [
      "agents",
      "mcp",
      "rag",
      "webmcp"
    ],
    "tools": [
      "promptfoo",
      "playwright",
      "github-actions"
    ],
    "refs": [
      {
        "label": "OWASP LLM Top 10 (2026)",
        "url": "https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/"
      },
      {
        "label": "NIST AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      }
    ],
    "review_status": "a_verifier",
    "snapshot_date": "2026-11-12"
  },
  "accessibility": {
    "stage": {
      "fr": "Accessibilité du Web",
      "en": "Web accessibility"
    },
    "audience": {
      "fr": "Tous les publics, designers, responsables de produits",
      "en": "All readers, designers and product teams"
    },
    "lead": {
      "fr": "Une expérience produite ou personnalisée par IA reste une interface Web. Elle doit respecter les besoins des personnes : navigation au clavier, contrastes lisibles, compatibilité avec les aides techniques, repères cohérents et contrôle de la personnalisation.",
      "en": "An AI-generated or adaptive experience remains a Web interface. It must meet human needs: keyboard navigation, readable contrast, assistive technology support, predictable structure and control over personalization."
    },
    "sections": [
      {
        "title": {
          "fr": "Le design ne suffit pas",
          "en": "A polished design is not enough"
        },
        "body": {
          "fr": "Une capture attractive ne montre pas ce qui se passe au clavier, avec un lecteur d'écran ou lors d'une erreur de saisie. Les éléments interactifs doivent recevoir un nom accessible, afficher l'état actuel et annoncer les changements importants.",
          "en": "A polished screenshot does not show keyboard behavior, screen-reader use or input errors. Interactive controls need accessible names, state exposure and announcements for important changes."
        }
      },
      {
        "title": {
          "fr": "L'IA doit préserver l'autonomie",
          "en": "AI should preserve agency"
        },
        "body": {
          "fr": "Des interfaces qui reformulent ou simplifient des textes peuvent aider, mais elles risquent aussi de masquer des détails essentiels. Proposer une version originale accessible, des options de retour en arrière et une explication de la transformation.",
          "en": "Interfaces that rewrite or simplify can help but may hide essential details. Offer an accessible original, ways to undo changes and an explanation of what was transformed."
        }
      },
      {
        "title": {
          "fr": "WCAG 2.2 et tests réels",
          "en": "WCAG 2.2 and hands-on testing"
        },
        "body": {
          "fr": "WCAG 2.2 est une recommandation W3C ; ses critères offrent une base de contrôle pour les contenus Web. Les outils automatiques signalent certaines erreurs, mais ne remplacent pas les tests humains et l'évaluation avec des utilisateurs.",
          "en": "WCAG 2.2 is a W3C Recommendation; its success criteria are a baseline for reviewing Web content. Automated tools find some issues, but cannot replace human testing and user research."
        }
      },
      {
        "title": {
          "fr": "Exemple de contrôle",
          "en": "Example audit"
        },
        "body": {
          "fr": "Un guide interactif devrait rester compréhensible sans animation, fonctionner en mode sombre et clair, offrir des libellés explicites et conserver les étapes effectuées de façon prévisible pendant la session.",
          "en": "An interactive guide should remain understandable without motion, work in light and dark modes, include explicit labels and retain predictable session progress."
        }
      }
    ],
    "steps": [
      {
        "fr": "Auditer le clavier",
        "en": "Audit keyboard access"
      },
      {
        "fr": "Contrôler les contrastes",
        "en": "Check contrast"
      },
      {
        "fr": "Tester les aides techniques",
        "en": "Test assistive tech"
      },
      {
        "fr": "Valider avec les personnes",
        "en": "Test with people"
      }
    ],
    "checks": [
      {
        "fr": "Toutes les actions restent-elles disponibles au clavier ?",
        "en": "Are all actions available by keyboard?"
      },
      {
        "fr": "La personnalisation conserve-t-elle le sens du contenu ?",
        "en": "Does personalization preserve essential meaning?"
      },
      {
        "fr": "Les résultats ne reposent-ils pas uniquement sur la couleur ?",
        "en": "Do outcomes avoid relying solely on color?"
      }
    ],
    "relations": [
      "webmcp",
      "webgpu",
      "seo-geo"
    ],
    "tools": [
      "axe-core",
      "lighthouse",
      "playwright"
    ],
    "refs": [
      {
        "label": "W3C WCAG 2.2 Recommendation",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "label": "WAI — accessibility evaluation",
        "url": "https://www.w3.org/WAI/test-evaluate/"
      }
    ],
    "review_status": "a_verifier",
    "snapshot_date": "2026-11-12"
  }
};
