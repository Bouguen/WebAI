export const sectorPlaybooks=[
  {
    "sector": {
      "fr": "Éducation",
      "en": "Education"
    },
    "scenario": {
      "fr": "Un établissement souhaite aider des élèves à comprendre des textes de cours sans remplacer le travail de lecture. Le système propose des passages retrouvés, la référence du document et un espace pour expliquer les désaccords.",
      "en": "A school wants to help learners understand assigned documents without replacing reading. The system shows retrieved passages, source references and a way to examine disagreement."
    },
    "steps": [
      {
        "fr": "Choisir des documents dont la diffusion est autorisée.",
        "en": "Choose licensed course documents."
      },
      {
        "fr": "Créer des questions associées aux extraits attendus.",
        "en": "Write questions with reference passages."
      },
      {
        "fr": "Afficher les passages avant la synthèse éventuelle.",
        "en": "Show retrieved evidence before any synthesis."
      },
      {
        "fr": "Tester les erreurs et les cas sans réponse.",
        "en": "Test errors and unanswerable questions."
      },
      {
        "fr": "Faire valider les conclusions sensibles par un enseignant.",
        "en": "Have sensitive conclusions reviewed by an educator."
      }
    ],
    "risks": {
      "fr": "Une réponse plausible peut mal interpréter un cours ou présenter une source non pertinente. La confidentialité des travaux d’élèves, les différences linguistiques et le temps consacré à l’enquête méritent un contrôle explicite.",
      "en": "A plausible answer may misread the course or cite irrelevant evidence. Learner privacy, language differences and time spent investigating need explicit attention."
    },
    "outcome": {
      "fr": "Un élève peut retrouver la source, justifier une conclusion et identifier ce qui demeure incertain.",
      "en": "Learners can retrieve the original passage, justify their conclusion and identify uncertainty."
    },
    "refs": [
      {
        "name": {
          "fr": "Référence principale",
          "en": "Primary reference"
        },
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "name": {
          "fr": "Lecture complémentaire",
          "en": "Further reading"
        },
        "url": "https://arxiv.org/abs/2005.11401"
      }
    ],
    "topics": [
      "rag",
      "education-ai-literacy"
    ]
  },
  {
    "sector": {
      "fr": "Recherche",
      "en": "Research"
    },
    "scenario": {
      "fr": "Un centre de recherche souhaite identifier de nouvelles publications sans transformer automatiquement les résultats de collecte en actualités validées. La procédure conserve les versions, DOI, dates et sources originales.",
      "en": "A research center wants to discover recent papers without automatically turning monitored records into verified news. The workflow keeps original versions, DOIs, dates and sources."
    },
    "steps": [
      {
        "fr": "Lister les revues et archives pertinentes.",
        "en": "List relevant journals and archives."
      },
      {
        "fr": "Collecter métadonnées et identifiants uniques.",
        "en": "Collect metadata and unique identifiers."
      },
      {
        "fr": "Dédoublonner sans supprimer les variantes importantes.",
        "en": "Deduplicate while preserving meaningful versions."
      },
      {
        "fr": "Marquer les prépublications et leurs statuts.",
        "en": "Label preprints and publication status."
      },
      {
        "fr": "Effectuer une relecture critique avant diffusion.",
        "en": "Review evidence before publication."
      }
    ],
    "risks": {
      "fr": "Le nombre de citations, la présence dans un index ou une classification automatique ne suffisent pas pour prouver la qualité scientifique. Les droits de réutilisation des résumés et images doivent être vérifiés.",
      "en": "Citation counts, index inclusion and automatic classifications do not prove scientific quality. Rights to reuse abstracts and images need checking."
    },
    "outcome": {
      "fr": "La veille produit une bibliographie datée et corrigeable, avec des documents sources traçables.",
      "en": "Monitoring produces a dated, revisable bibliography with traceable primary materials."
    },
    "refs": [
      {
        "name": {
          "fr": "Référence principale",
          "en": "Primary reference"
        },
        "url": "https://api.crossref.org/"
      },
      {
        "name": {
          "fr": "Lecture complémentaire",
          "en": "Further reading"
        },
        "url": "https://info.arxiv.org/"
      }
    ],
    "topics": [
      "evaluation",
      "ai-risk-management"
    ]
  },
  {
    "sector": {
      "fr": "Culture & musées",
      "en": "Culture & museums"
    },
    "scenario": {
      "fr": "Un musée souhaite enrichir ses notices avec des visites adaptées et des descriptions multimodales, tout en conservant les attributions vérifiées des œuvres, les inventaires et les droits associés.",
      "en": "A museum seeks more adaptable labels and multimodal visits while preserving verified artwork attributions, catalog records and reuse rights."
    },
    "steps": [
      {
        "fr": "Sélectionner des notices issues du catalogue officiel.",
        "en": "Use entries from an official collection catalog."
      },
      {
        "fr": "Documenter dates, auteurs, lieux et droits.",
        "en": "Document dates, authors, locations and rights."
      },
      {
        "fr": "Produire des versions de médiation adaptées au public.",
        "en": "Draft audience-appropriate interpretive versions."
      },
      {
        "fr": "Contrôler chaque attribution et interprétation.",
        "en": "Review every attribution and interpretation."
      },
      {
        "fr": "Proposer des alternatives textuelles aux expériences 3D.",
        "en": "Provide text alternatives to 3D experiences."
      }
    ],
    "risks": {
      "fr": "Une interprétation IA peut confondre deux artistes, inventer une relation ou reconstruire une architecture incorrecte. Les activités de médiation doivent distinguer faits historiques, hypothèses et créations artistiques.",
      "en": "AI interpretation may confuse artists, invent relationships or rebuild inaccurate architecture. Heritage interpretation should distinguish historical facts, hypotheses and artistic invention."
    },
    "outcome": {
      "fr": "Le visiteur peut distinguer une information du catalogue d’une interprétation pédagogique et accéder à la source.",
      "en": "Visitors can separate catalog facts from educational interpretation and find the original source."
    },
    "refs": [
      {
        "name": {
          "fr": "Référence principale",
          "en": "Primary reference"
        },
        "url": "https://www.w3.org/TR/webxr/"
      },
      {
        "name": {
          "fr": "Lecture complémentaire",
          "en": "Further reading"
        },
        "url": "https://www.w3.org/TR/WCAG22/"
      }
    ],
    "topics": [
      "knowledge-graph",
      "webxr"
    ]
  },
  {
    "sector": {
      "fr": "Accessibilité",
      "en": "Accessibility"
    },
    "scenario": {
      "fr": "Un service souhaite aider des personnes à lire des contenus complexes tout en conservant la possibilité d’accéder au texte original, d’utiliser un clavier et d’identifier les parties générées.",
      "en": "A service aims to help people understand complex information while preserving access to original text, keyboard navigation and clear indication of generated portions."
    },
    "steps": [
      {
        "fr": "Repérer les obstacles dans les parcours existants.",
        "en": "Identify barriers in existing user journeys."
      },
      {
        "fr": "Tester navigation clavier et technologies d’assistance.",
        "en": "Test keyboard and assistive technology workflows."
      },
      {
        "fr": "Préparer des explications simplifiées sans perte de sens.",
        "en": "Draft simpler explanations without removing meaning."
      },
      {
        "fr": "Annoncer les réponses et erreurs accessibles.",
        "en": "Announce responses and errors accessibly."
      },
      {
        "fr": "Faire tester les variantes par des personnes concernées.",
        "en": "Test variants with affected users."
      }
    ],
    "risks": {
      "fr": "Une simplification peut effacer une condition importante ou donner une impression trompeuse. Les contrôles automatiques ne remplacent pas une évaluation des besoins et du contexte réel.",
      "en": "Simplification may omit important conditions or mislead readers. Automated checkers do not replace context-aware assessment and user testing."
    },
    "outcome": {
      "fr": "Les personnes peuvent accomplir la tâche sans dépendre d’une seule modalité ou d’un modèle IA.",
      "en": "People can complete tasks without depending on a single modality or AI model."
    },
    "refs": [
      {
        "name": {
          "fr": "Référence principale",
          "en": "Primary reference"
        },
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "name": {
          "fr": "Lecture complémentaire",
          "en": "Further reading"
        },
        "url": "https://www.w3.org/WAI/test-evaluate/"
      }
    ],
    "topics": [
      "accessibility",
      "accessible-ai-web"
    ]
  },
  {
    "sector": {
      "fr": "Médias",
      "en": "Media"
    },
    "scenario": {
      "fr": "Une rédaction veut distinguer les éléments de provenance d’une vidéo, les modifications déclarées et les preuves indépendantes utiles avant sa diffusion.",
      "en": "A newsroom wants to distinguish a video’s declared provenance, edits and independent evidence before publication."
    },
    "steps": [
      {
        "fr": "Conserver le fichier original et ses conditions d’utilisation.",
        "en": "Preserve original media and reuse conditions."
      },
      {
        "fr": "Inspecter les métadonnées ou manifestes disponibles.",
        "en": "Inspect available metadata and manifests."
      },
      {
        "fr": "Contrôler les signatures lorsque possible.",
        "en": "Check signatures when supported."
      },
      {
        "fr": "Comparer l’image à des sources indépendantes.",
        "en": "Compare against independent evidence."
      },
      {
        "fr": "Rédiger une note sur les limites constatées.",
        "en": "Write a limitations note."
      }
    ],
    "risks": {
      "fr": "Un manifeste absent ne démontre pas que le média est faux. Un manifeste signé ne démontre pas que l’événement représenté est réel. L’enquête doit rester distincte du contrôle cryptographique.",
      "en": "A missing manifest does not prove media is fake. A signed manifest does not establish the depicted event as real. Investigation remains distinct from cryptographic checks."
    },
    "outcome": {
      "fr": "La publication indique clairement ce qui est vérifié, ce qui est déclaré et ce qui reste incertain.",
      "en": "Publication clearly separates validated observations, declared claims and uncertainty."
    },
    "refs": [
      {
        "name": {
          "fr": "Référence principale",
          "en": "Primary reference"
        },
        "url": "https://spec.c2pa.org/"
      },
      {
        "name": {
          "fr": "Lecture complémentaire",
          "en": "Further reading"
        },
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      }
    ],
    "topics": [
      "c2pa",
      "provenance-evidence"
    ]
  },
  {
    "sector": {
      "fr": "Commerce en ligne",
      "en": "E-commerce"
    },
    "scenario": {
      "fr": "Une boutique souhaite proposer une découverte conversationnelle de produits sans manipuler les comparaisons ni passer de commande avant confirmation.",
      "en": "A shop wants conversational product discovery without manipulating comparisons or placing orders without approval."
    },
    "steps": [
      {
        "fr": "Définir les critères et filtres disponibles.",
        "en": "Define available criteria and filters."
      },
      {
        "fr": "Lister les sources des caractéristiques des produits.",
        "en": "Identify sources of product properties."
      },
      {
        "fr": "Afficher prix et disponibilité avec date ou statut.",
        "en": "Display prices and availability with their status."
      },
      {
        "fr": "Expliquer les limites des recommandations.",
        "en": "Explain recommendation limitations."
      },
      {
        "fr": "Exiger confirmation avant toute commande.",
        "en": "Require approval before placing an order."
      }
    ],
    "risks": {
      "fr": "Un prix ancien ou une caractéristique générée peut induire une décision erronée. Les achats demandent une identification correcte du produit, du montant, des conditions et des permissions.",
      "en": "Outdated prices or fabricated attributes can mislead decisions. Purchases need correct product identity, amount, terms and permissions."
    },
    "outcome": {
      "fr": "Chaque recommandation peut être confrontée à ses critères et une transaction reste sous le contrôle de l’utilisateur.",
      "en": "Every recommendation can be checked against its criteria and transactions stay under user control."
    },
    "refs": [
      {
        "name": {
          "fr": "Référence principale",
          "en": "Primary reference"
        },
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "name": {
          "fr": "Lecture complémentaire",
          "en": "Further reading"
        },
        "url": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
      }
    ],
    "topics": [
      "agents",
      "human-agent-oversight"
    ]
  },
  {
    "sector": {
      "fr": "Services publics",
      "en": "Public services"
    },
    "scenario": {
      "fr": "Un portail d’information aide à retrouver des procédures administratives officielles et à comprendre leurs étapes, sans s’exprimer comme une autorité administrative.",
      "en": "An information portal helps residents locate official procedures and understand steps without impersonating public authorities."
    },
    "steps": [
      {
        "fr": "Choisir les sites administratifs de référence.",
        "en": "Select authoritative administration websites."
      },
      {
        "fr": "Conserver les versions et dates de procédures.",
        "en": "Track versions and procedure dates."
      },
      {
        "fr": "Présenter les conditions et exceptions sans les simplifier abusivement.",
        "en": "Present conditions and exceptions without harmful simplification."
      },
      {
        "fr": "Prévoir des chemins vers un interlocuteur humain.",
        "en": "Provide a path to human assistance."
      },
      {
        "fr": "Tester les erreurs et changements de situation.",
        "en": "Test errors and changing circumstances."
      }
    ],
    "risks": {
      "fr": "Une erreur sur une condition d’éligibilité ou un délai peut avoir un impact important. L’information doit rester sourcée, actualisable et ne pas être présentée comme un conseil juridique personnalisé.",
      "en": "Errors about eligibility or deadlines can have significant consequences. Information must remain sourced, updatable and not be passed off as personalized legal advice."
    },
    "outcome": {
      "fr": "Le visiteur retrouve le texte officiel actuel et sait quand demander une confirmation à l’administration.",
      "en": "Visitors can locate current official rules and know when to seek confirmation from the authority."
    },
    "refs": [
      {
        "name": {
          "fr": "Référence principale",
          "en": "Primary reference"
        },
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "name": {
          "fr": "Lecture complémentaire",
          "en": "Further reading"
        },
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      }
    ],
    "topics": [
      "rag",
      "ai-risk-management"
    ]
  },
  {
    "sector": {
      "fr": "Création Web",
      "en": "Web creation"
    },
    "scenario": {
      "fr": "Une équipe éditoriale utilise l’IA pour préparer des contenus et interfaces, mais conserve un processus de validation des sources, du code, de l’accessibilité et des droits avant diffusion.",
      "en": "An editorial team uses AI to prepare content and interfaces while retaining review of evidence, code, accessibility and reuse rights before release."
    },
    "steps": [
      {
        "fr": "Définir la fonction et le public de la page.",
        "en": "Define page purpose and audience."
      },
      {
        "fr": "Créer un brouillon avec un plan documenté.",
        "en": "Draft from a documented outline."
      },
      {
        "fr": "Vérifier les affirmations et les licences.",
        "en": "Review claims and licensing."
      },
      {
        "fr": "Tester les interactions, la responsivité et l’accessibilité.",
        "en": "Test interactions, responsiveness and accessibility."
      },
      {
        "fr": "Publier après revue et garder un historique.",
        "en": "Publish after approval and retain history."
      }
    ],
    "risks": {
      "fr": "Une génération rapide peut produire des pages semblables, de fausses références ou des interfaces inutilisables. La production doit s’appuyer sur des tests humains et des critères éditoriaux.",
      "en": "Fast generation can create repetitive pages, fabricated references or unusable interfaces. Production needs human testing and editorial criteria."
    },
    "outcome": {
      "fr": "La page est utile sans modèle, conserve des références originales et fonctionne sur plusieurs appareils.",
      "en": "The page is useful without a model, preserves original references and works across devices."
    },
    "refs": [
      {
        "name": {
          "fr": "Référence principale",
          "en": "Primary reference"
        },
        "url": "https://html.spec.whatwg.org/"
      },
      {
        "name": {
          "fr": "Lecture complémentaire",
          "en": "Further reading"
        },
        "url": "https://www.w3.org/TR/WCAG22/"
      }
    ],
    "topics": [
      "generative-web",
      "accessibility"
    ]
  },
  {
    "sector": {
      "fr": "Automatisation",
      "en": "Automation"
    },
    "scenario": {
      "fr": "Une organisation prépare des tâches avec des agents mais protège les opérations engageantes par une autorisation humaine et une vérification finale.",
      "en": "An organization uses agents for preparation while protecting consequential operations with human approval and final-state checks."
    },
    "steps": [
      {
        "fr": "Classer les opérations selon leurs risques.",
        "en": "Classify operations by risk."
      },
      {
        "fr": "Définir les droits minimaux de chaque outil.",
        "en": "Apply least-privilege tool scopes."
      },
      {
        "fr": "Préparer les tâches en mode simulation.",
        "en": "Prepare tasks in simulation mode."
      },
      {
        "fr": "Montrer le détail avant confirmation.",
        "en": "Show exact details before approval."
      },
      {
        "fr": "Journaliser et vérifier l’état final.",
        "en": "Log execution and verify final state."
      }
    ],
    "risks": {
      "fr": "Le fait qu’un agent annonce une réussite ne prouve pas que l’opération a été exécutée correctement. Les contenus externes peuvent tenter d’injecter des consignes. Les secrets doivent être minimisés.",
      "en": "An agent reporting success does not prove the operation completed correctly. External content can contain prompt injection and credentials need minimization."
    },
    "outcome": {
      "fr": "L’utilisateur peut comprendre, confirmer, annuler et auditer les actions du système.",
      "en": "Users can understand, approve, cancel and audit the system’s actions."
    },
    "refs": [
      {
        "name": {
          "fr": "Référence principale",
          "en": "Primary reference"
        },
        "url": "https://modelcontextprotocol.io/specification/2026-07-28"
      },
      {
        "name": {
          "fr": "Lecture complémentaire",
          "en": "Further reading"
        },
        "url": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
      }
    ],
    "topics": [
      "mcp",
      "human-agent-oversight"
    ]
  },
  {
    "sector": {
      "fr": "Web immersif",
      "en": "Immersive Web"
    },
    "scenario": {
      "fr": "Une expérience spatiale permet d’explorer un contenu 3D avec des indications de provenance et un chemin alternatif pour les visiteurs ne disposant pas de casque.",
      "en": "A spatial experience presents a 3D resource with provenance labels and an alternative for visitors without headsets."
    },
    "steps": [
      {
        "fr": "Sélectionner des médias autorisés et datés.",
        "en": "Choose licensed, dated assets."
      },
      {
        "fr": "Choisir le niveau de fidélité recherché.",
        "en": "Decide the intended fidelity level."
      },
      {
        "fr": "Concevoir la scène et l’interface 2D.",
        "en": "Design both 3D scene and 2D interface."
      },
      {
        "fr": "Tester les performances et les commandes.",
        "en": "Test performance and controls."
      },
      {
        "fr": "Vérifier accessibilité et exactitude du contenu.",
        "en": "Review accessibility and content accuracy."
      }
    ],
    "risks": {
      "fr": "Une scène réaliste peut être une approximation artistique plutôt qu’une reconstruction historique. La fluidité, le confort et la disponibilité des appareils influencent fortement l’expérience.",
      "en": "A realistic scene may be an artistic approximation rather than historical reconstruction. Frame rate, comfort and device availability strongly affect usability."
    },
    "outcome": {
      "fr": "La visite reste utilisable sans équipement spécialisé et distingue les faits de l’interprétation.",
      "en": "The visit remains usable without specialist equipment and distinguishes facts from interpretation."
    },
    "refs": [
      {
        "name": {
          "fr": "Référence principale",
          "en": "Primary reference"
        },
        "url": "https://www.w3.org/TR/webxr/"
      },
      {
        "name": {
          "fr": "Lecture complémentaire",
          "en": "Further reading"
        },
        "url": "https://www.w3.org/TR/WCAG22/"
      }
    ],
    "topics": [
      "webxr",
      "knowledge-graph"
    ]
  }
];
