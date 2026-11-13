export const foundationalDossiersB={
  "knowledge-graph": {
    "stage": {
      "fr": "Graphes de connaissances et Web sémantique",
      "en": "Knowledge graphs and the semantic Web"
    },
    "audience": {
      "fr": "Architectes, documentalistes et chercheurs",
      "en": "Architects, information specialists and researchers"
    },
    "lead": {
      "fr": "Un graphe de connaissances représente explicitement des entités et des relations. Sur le Web, les vocabulaires, identifiants et formats de données liées peuvent faciliter la compréhension des ressources par des systèmes différents. Un graphe n’est toutefois pas une machine qui garantit la véracité de ses relations.",
      "en": "A knowledge graph explicitly represents entities and their relationships. On the Web, vocabularies, identifiers and linked-data formats support exchange between systems. A graph is not a mechanism that automatically guarantees its relationships are true."
    },
    "sections": [
      {
        "title": {
          "fr": "Entités, identifiants et relations",
          "en": "Entities, identifiers and relationships"
        },
        "body": {
          "fr": "Une ressource peut être une personne, une publication, un musée ou une œuvre. Les graphes relient ces ressources par des propriétés identifiées. Utiliser une URI stable limite la confusion entre deux objets portant le même nom, mais ne dispense pas de contrôler l’attribution et la réalité de la relation.",
          "en": "Resources may be people, publications, museums or artworks. Graphs connect them through identified properties. Stable URIs reduce confusion between identically named things but do not replace checking attribution and the actual relationship."
        }
      },
      {
        "title": {
          "fr": "RDF, JSON-LD et contexte",
          "en": "RDF, JSON-LD and context"
        },
        "body": {
          "fr": "RDF offre une manière de décrire des triplets sujet–prédicat–objet. JSON-LD exprime des données liées dans la syntaxe JSON avec un contexte indiquant l’interprétation des termes. Un document JSON-LD valide peut malgré tout déclarer une relation fausse : validation de structure et évaluation factuelle sont distinctes.",
          "en": "RDF describes subject–predicate–object triples. JSON-LD expresses linked data in JSON syntax using contexts that define term interpretation. A syntactically valid JSON-LD document may still claim a false relationship: structural validation and factual review remain distinct."
        }
      },
      {
        "title": {
          "fr": "Aligner des vocabulaires",
          "en": "Align vocabularies"
        },
        "body": {
          "fr": "Des plateformes peuvent employer des propriétés différentes pour représenter une même notion. L’alignement nécessite une compréhension précise des définitions et du contexte, particulièrement lorsque les données sont multilingues ou proviennent de collections hétérogènes. L’équivalence de termes doit être argumentée plutôt que supposée.",
          "en": "Systems may use different properties for similar concepts. Alignment requires precise definitions and context, especially for multilingual or heterogeneous collections. Equivalence should be justified rather than assumed."
        }
      },
      {
        "title": {
          "fr": "Recherche et assistant documentaire",
          "en": "Search and document assistants"
        },
        "body": {
          "fr": "Un portail peut utiliser un graphe pour proposer des navigations entre auteurs, œuvres et institutions, ou pour enrichir une recherche RAG. Les réponses générées doivent encore conserver les sources et distinguer la traversée du graphe d’une interprétation produite par un modèle.",
          "en": "A portal may use a graph to navigate between authors, works and institutions or enrich RAG retrieval. Generated answers still need source evidence and a distinction between graph traversal and model interpretation."
        }
      },
      {
        "title": {
          "fr": "Qualité, provenance et mise à jour",
          "en": "Quality, provenance and updates"
        },
        "body": {
          "fr": "Pour chaque relation importante, stockez la source, la date, la version et éventuellement le degré d’incertitude. Les graphes peuvent accumuler des identifiants obsolètes, des relations contradictoires et des doublons. Un processus de détection et de correction documenté améliore leur utilité.",
          "en": "Store source, date, version and possibly uncertainty for important relationships. Graphs can accumulate obsolete identifiers, contradictory relations and duplicates. Documented detection and correction processes improve usefulness."
        }
      },
      {
        "title": {
          "fr": "Exercice : une collection de musée",
          "en": "Exercise: a museum collection"
        },
        "body": {
          "fr": "Décrivez trois œuvres associées à leurs créateurs, dates, lieux et licences, avec des identifiants persistants. Vérifiez les informations dans les catalogues originaux. Affichez ensuite une navigation par artiste et par institution sans inventer de relations absentes des sources.",
          "en": "Describe three works with creators, dates, locations and licenses using stable identifiers. Confirm information against original catalogs. Then offer navigation by artist and institution without inventing unsupported relationships."
        }
      }
    ],
    "steps": [
      {
        "fr": "Définir les ressources et leurs URI",
        "en": "Define resources and their URIs"
      },
      {
        "fr": "Choisir des propriétés documentées",
        "en": "Choose documented properties"
      },
      {
        "fr": "Créer un petit graphe JSON-LD",
        "en": "Create a small JSON-LD graph"
      },
      {
        "fr": "Vérifier chaque relation à la source",
        "en": "Validate each relation against source"
      },
      {
        "fr": "Contrôler les doublons et contradictions",
        "en": "Check duplicates and contradictions"
      },
      {
        "fr": "Tester la navigation et la maintenance",
        "en": "Test navigation and maintenance"
      }
    ],
    "checks": [
      {
        "fr": "Le JSON-LD est-il automatiquement vrai ?",
        "en": "Is JSON-LD automatically true?"
      },
      {
        "fr": "Les identifiants distinguent-ils les homonymes ?",
        "en": "Do identifiers distinguish namesakes?"
      },
      {
        "fr": "Chaque relation a-t-elle une provenance ?",
        "en": "Is every relation sourced?"
      },
      {
        "fr": "Une relation est-elle toujours valide après une mise à jour ?",
        "en": "Does the relation remain valid after updates?"
      }
    ],
    "refs": [
      {
        "label": "Document principal · Primary source",
        "url": "https://www.w3.org/TR/json-ld11/"
      },
      {
        "label": "Référence complémentaire · Further reading",
        "url": "https://www.w3.org/TR/rdf12-concepts/"
      },
      {
        "label": "Référence complémentaire · Further reading",
        "url": "https://schema.org/"
      }
    ],
    "tools": [
      "schema-org",
      "json-schema",
      "pagefind"
    ],
    "relations": [
      "structured-data-agents",
      "rag",
      "webai"
    ],
    "review_status": "a_verifier",
    "snapshot_date": "2026-11-13"
  },
  "webxr": {
    "stage": {
      "fr": "Web immersif, interfaces spatiales et IA",
      "en": "Immersive Web, spatial interfaces and AI"
    },
    "audience": {
      "fr": "Créateurs 3D, concepteurs Web, enseignants",
      "en": "3D creators, Web designers and educators"
    },
    "lead": {
      "fr": "Le Web immersif combine représentation spatiale, interaction et contenu Web. Les API de réalité virtuelle ou augmentée permettent, lorsque l’appareil et le navigateur les prennent en charge, de proposer des expériences en trois dimensions. L’IA peut assister certains contenus ou comportements, mais ne remplace pas la rigueur géométrique, les sources ni les règles d’accessibilité.",
      "en": "The immersive Web combines spatial representation, interaction and Web content. VR and AR APIs may support three-dimensional experiences where devices and browsers allow. AI can assist content or behavior but does not replace geometric accuracy, evidence or accessibility requirements."
    },
    "sections": [
      {
        "title": {
          "fr": "Des scènes 3D dans le navigateur",
          "en": "3D scenes in the browser"
        },
        "body": {
          "fr": "Three.js et WebGL/WebGPU permettent de dessiner des objets et espaces 3D sur une page. Le WebXR Device API peut relier certaines expériences aux capacités de casques ou appareils compatibles. Une scène en 3D sur écran ordinaire n’est pas automatiquement une expérience VR ou AR.",
          "en": "Three.js and WebGL/WebGPU can display 3D objects and spaces in a page. WebXR Device API may connect supported experiences to headset or device capabilities. A 3D scene on a regular screen is not automatically a VR or AR experience."
        }
      },
      {
        "title": {
          "fr": "Le rôle potentiel de l’IA",
          "en": "Possible roles for AI"
        },
        "body": {
          "fr": "Des modèles peuvent aider à proposer des textures, légendes, descriptions audio, comportements d’avatars ou variantes d’objets. Pour un musée, il faut distinguer une reconstruction fondée sur des relevés, une approximation pédagogique et une invention artistique. Leur statut doit être visible pour le visiteur.",
          "en": "Models can help draft textures, labels, audio descriptions, avatar behaviors or object variants. In a museum, distinguish reconstruction from measurements, educational approximation and artistic invention. Visitors should see these statuses clearly."
        }
      },
      {
        "title": {
          "fr": "Interaction, sécurité et confort",
          "en": "Interaction, safety and comfort"
        },
        "body": {
          "fr": "Une expérience immersive doit proposer des contrôles compréhensibles, prévenir les mouvements inconfortables, limiter les effets lumineux et respecter les autorisations de capteurs. Prévoir une commande de sortie et un chemin alternatif au clavier permet de ne pas exclure les personnes qui n’utilisent pas de casque.",
          "en": "Immersive experiences need understandable controls, measures against uncomfortable motion, restrained visual effects and proper sensor permissions. An exit control and keyboard-accessible fallback serve people who do not use headsets."
        }
      },
      {
        "title": {
          "fr": "Performance et ressources",
          "en": "Performance and resources"
        },
        "body": {
          "fr": "La complexité de la géométrie, des textures et de l’éclairage influence le chargement et les performances. Mesurez les temps de chargement, la fluidité et l’utilisation mémoire sur plusieurs appareils. Les fonctionnalités IA ajoutées doivent être évaluées pour leur coût en calcul et leur intérêt réel.",
          "en": "Geometry, textures and lighting influence load time and performance. Measure load times, frame consistency and memory on multiple devices. Added AI features should be evaluated for compute requirements and actual user benefit."
        }
      },
      {
        "title": {
          "fr": "Conservation des sources",
          "en": "Preserving evidence"
        },
        "body": {
          "fr": "Pour des objets patrimoniaux, associez les fichiers 3D à des licences, un historique de production et des références aux archives. Une représentation numérique peut laisser de côté des détails ou altérer des proportions. Ne confondez pas la qualité visuelle avec l’exactitude architecturale.",
          "en": "For heritage objects, link 3D assets to licenses, production history and archival references. A digital representation may omit details or distort proportions. Visual polish is not the same as architectural accuracy."
        }
      },
      {
        "title": {
          "fr": "Exercice : visite virtuelle accessible",
          "en": "Exercise: an accessible virtual visit"
        },
        "body": {
          "fr": "Créez une petite scène autour d’un objet de collection autorisé, avec une notice sourcée, une vue 2D et une navigation clavier. Ajoutez une proposition de description générée puis soumettez-la à une vérification humaine et à l’organisme détenteur des informations.",
          "en": "Build a small scene around an authorized collection item with a sourced description, 2D view and keyboard navigation. Add a model-assisted description and have it reviewed by a person and the institution responsible for the information."
        }
      }
    ],
    "steps": [
      {
        "fr": "Sélectionner une collection autorisée",
        "en": "Choose an authorized collection"
      },
      {
        "fr": "Définir les besoins et appareils",
        "en": "Define device and user needs"
      },
      {
        "fr": "Créer une scène et une alternative 2D",
        "en": "Build a scene and 2D alternative"
      },
      {
        "fr": "Documenter les sources et licences",
        "en": "Document sources and licenses"
      },
      {
        "fr": "Tester confort et accessibilité",
        "en": "Test comfort and accessibility"
      },
      {
        "fr": "Mesurer et corriger les performances",
        "en": "Measure and improve performance"
      }
    ],
    "checks": [
      {
        "fr": "La scène fonctionne-t-elle sans casque ?",
        "en": "Does the scene work without a headset?"
      },
      {
        "fr": "La reconstruction est-elle documentée ou imaginée ?",
        "en": "Is the reconstruction sourced or imagined?"
      },
      {
        "fr": "Les droits sur les modèles sont-ils vérifiés ?",
        "en": "Are 3D asset rights checked?"
      },
      {
        "fr": "Le visiteur peut-il quitter facilement l’expérience ?",
        "en": "Can visitors exit the experience easily?"
      }
    ],
    "refs": [
      {
        "label": "Document principal · Primary source",
        "url": "https://www.w3.org/TR/webxr/"
      },
      {
        "label": "Référence complémentaire · Further reading",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "label": "Référence complémentaire · Further reading",
        "url": "https://threejs.org/docs/"
      }
    ],
    "tools": [
      "threejs",
      "react-three-fiber",
      "blender"
    ],
    "relations": [
      "webgpu-ai",
      "accessible-ai-web",
      "generative-web"
    ],
    "review_status": "a_verifier",
    "snapshot_date": "2026-11-13"
  },
  "evaluation": {
    "stage": {
      "fr": "Évaluation de modèles, agents et systèmes RAG",
      "en": "Evaluation of models, agents and RAG systems"
    },
    "audience": {
      "fr": "Chercheurs, enseignants, équipes techniques",
      "en": "Researchers, educators and engineering teams"
    },
    "lead": {
      "fr": "L’évaluation du WebAI consiste à confronter des systèmes à des tâches définies et à des preuves, sans confondre fluence et fiabilité. Les modèles, moteurs de recherche, agents et interfaces exigent des métriques différentes et des évaluations humaines adaptées.",
      "en": "WebAI evaluation means testing systems against defined tasks and evidence rather than equating fluency with reliability. Models, retrievers, agents and interfaces need different metrics and appropriate human review."
    },
    "sections": [
      {
        "title": {
          "fr": "Définir ce qui est évalué",
          "en": "Define the evaluation target"
        },
        "body": {
          "fr": "Une application peut échouer lors de la récupération d’un document, de la génération d’une synthèse, du choix d’un outil, de la validation d’une autorisation ou de l’affichage final. Identifiez ces composants et leurs objectifs avant de choisir une métrique. Un taux de réussite global ne dit pas quelle étape a réellement dysfonctionné.",
          "en": "An application can fail during document retrieval, answer generation, tool selection, approval or final display. Identify components and objectives before choosing metrics. A global success rate does not reveal which step actually failed."
        }
      },
      {
        "title": {
          "fr": "Jeux d’essai et reproductibilité",
          "en": "Test sets and reproducibility"
        },
        "body": {
          "fr": "Préparez des exemples représentatifs, négatifs, ambigus et contradictoires, avec des réponses ou preuves de référence. Conservez la version du modèle, la date, les paramètres, les données et la méthode d’annotation. Les résultats obtenus sur un petit jeu de démonstration ne sont pas une mesure robuste de performance générale.",
          "en": "Prepare representative, negative, ambiguous and contradictory cases with reference answers or evidence. Keep model version, date, parameters, data and annotation methods. A small demo set does not establish robust general performance."
        }
      },
      {
        "title": {
          "fr": "Fidélité documentaire",
          "en": "Evidence faithfulness"
        },
        "body": {
          "fr": "Dans un RAG, mesurez séparément les documents retrouvés, les passages pertinents, la fidélité de la réponse et la validité des citations. Une phrase soutenue par une source peut être entourée d’autres phrases inventées ; il faut évaluer les affirmations individuellement.",
          "en": "In RAG, measure document retrieval, passage relevance, answer faithfulness and citation validity separately. One supported statement may sit beside unsupported statements; evaluate claims individually."
        }
      },
      {
        "title": {
          "fr": "Évaluer les agents en action",
          "en": "Evaluate acting agents"
        },
        "body": {
          "fr": "Un agent peut produire le bon texte mais effectuer la mauvaise opération. Vérifiez les permissions demandées, le journal d’exécution, les appels d’outils, les confirmations et l’état final réel. Les environnements de test doivent isoler les actions sensibles et permettre l’annulation.",
          "en": "An agent may write correct prose but perform the wrong operation. Review permissions, execution traces, tool calls, approvals and actual final state. Test environments should isolate sensitive actions and permit cancellation."
        }
      },
      {
        "title": {
          "fr": "Mesures et jugement humain",
          "en": "Metrics and human judgment"
        },
        "body": {
          "fr": "La pertinence, l’accessibilité, les biais, la confidentialité, la sécurité et la qualité pédagogique ne se résument pas à une métrique automatisée. Combinez contrôles techniques, évaluateurs humains, révisions indépendantes et analyse d’erreurs. Consignez les désaccords plutôt que de les effacer.",
          "en": "Relevance, accessibility, bias, privacy, security and educational quality cannot be captured by a single automated score. Combine technical checks, human review, independent assessment and error analysis. Record disagreement rather than hiding it."
        }
      },
      {
        "title": {
          "fr": "Exercice : audit d’un assistant",
          "en": "Exercise: audit an assistant"
        },
        "body": {
          "fr": "Constituez vingt questions avec sources vérifiées, cinq cas sans réponse possible et plusieurs consignes adversariales inoffensives. Comparez deux configurations, classez les erreurs et expliquez les limites de l’échantillon. Ne publiez pas seulement un pourcentage de réussite : montrez aussi les exemples difficiles.",
          "en": "Build twenty questions with verified sources, five unanswerable cases and safe adversarial inputs. Compare two setups, classify failures and explain sample limitations. Do not publish only a success rate; show difficult examples too."
        }
      }
    ],
    "steps": [
      {
        "fr": "Décomposer la chaîne et ses risques",
        "en": "Decompose the system and its risks"
      },
      {
        "fr": "Créer un jeu d’essai documenté",
        "en": "Build a documented test set"
      },
      {
        "fr": "Mesurer les composants séparément",
        "en": "Measure components separately"
      },
      {
        "fr": "Tester les cas négatifs et adversariaux",
        "en": "Test negative and adversarial cases"
      },
      {
        "fr": "Faire relire un échantillon par des humains",
        "en": "Request independent human review"
      },
      {
        "fr": "Publier erreurs, limites et versions",
        "en": "Publish failures, limitations and versions"
      }
    ],
    "checks": [
      {
        "fr": "Une réponse fluide suffit-elle à prouver l’exactitude ?",
        "en": "Does fluent writing establish accuracy?"
      },
      {
        "fr": "Le système a-t-il vérifié l’état final d’une action ?",
        "en": "Was the final action state checked?"
      },
      {
        "fr": "Les erreurs difficiles sont-elles publiées ?",
        "en": "Are difficult failures reported?"
      },
      {
        "fr": "Le corpus d’évaluation est-il représentatif ?",
        "en": "Is the evaluation corpus representative?"
      }
    ],
    "refs": [
      {
        "label": "Document principal · Primary source",
        "url": "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
      },
      {
        "label": "Référence complémentaire · Further reading",
        "url": "https://arxiv.org/abs/2005.11401"
      },
      {
        "label": "Référence complémentaire · Further reading",
        "url": "https://www.w3.org/TR/WCAG22/"
      }
    ],
    "tools": [
      "mlflow",
      "promptfoo",
      "playwright"
    ],
    "relations": [
      "rag-quality-evaluation",
      "ai-risk-management",
      "security"
    ],
    "review_status": "a_verifier",
    "snapshot_date": "2026-11-13"
  }
};
