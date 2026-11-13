import {researchGuides} from './researchGuides.js';
export const guides = [
  {
    "slug": "publication",
    "icon": "✎",
    "audience": "creator",
    "duration": "35–50",
    "title": {
      "fr": "Publier un contenu Web créé avec l’IA",
      "en": "Publish AI-assisted Web content"
    },
    "intro": {
      "fr": "De la génération à un article original, accessible et attribué.",
      "en": "From generation to an original, accessible and attributed article."
    },
    "steps": [
      {
        "fr": "Formuler la promesse éditoriale et l’audience visée.",
        "en": "Define the editorial promise and intended audience."
      },
      {
        "fr": "Distinguer les passages rédigés, générés et vérifiés.",
        "en": "Separate authored, generated and checked sections."
      },
      {
        "fr": "Remonter aux sources primaires de chaque affirmation importante.",
        "en": "Trace material claims to primary evidence."
      },
      {
        "fr": "Contrôler droits, citations, images et données personnelles.",
        "en": "Review rights, quotations, images and personal data."
      },
      {
        "fr": "Tester lisibilité, navigation et accessibilité sur plusieurs écrans.",
        "en": "Test readability, navigation and accessibility across screens."
      },
      {
        "fr": "Consigner relecteur, date, corrections et limites.",
        "en": "Record reviewer, date, corrections and limitations."
      }
    ],
    "source": "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-12"
  },
  {
    "slug": "rag",
    "icon": "⌕",
    "audience": "developer",
    "duration": "50–75",
    "title": {
      "fr": "Concevoir un assistant RAG documenté",
      "en": "Build an evidence-led RAG assistant"
    },
    "intro": {
      "fr": "Tracer les sources et séparer récupération et génération.",
      "en": "Trace evidence and separate retrieval from generation."
    },
    "steps": [
      {
        "fr": "Sélectionner un corpus autorisé, pertinent et daté.",
        "en": "Select an authorized, relevant and dated corpus."
      },
      {
        "fr": "Découper et indexer les documents avec identifiants persistants.",
        "en": "Chunk and index documents with stable identifiers."
      },
      {
        "fr": "Évaluer les passages récupérés sur des questions de test.",
        "en": "Evaluate retrieval on representative test questions."
      },
      {
        "fr": "Afficher les références précises utilisées dans chaque réponse.",
        "en": "Expose precise references behind every answer."
      },
      {
        "fr": "Mesurer omissions, citations incorrectes et refus justifiés.",
        "en": "Measure omissions, incorrect citations and warranted refusals."
      },
      {
        "fr": "Prévoir une vérification humaine avant tout usage sensible.",
        "en": "Require human review for high-stakes uses."
      }
    ],
    "source": "https://arxiv.org/abs/2005.11401",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-12"
  },
  {
    "slug": "agents",
    "icon": "⌘",
    "audience": "developer",
    "duration": "60–90",
    "title": {
      "fr": "Créer une expérience agentique sûre",
      "en": "Design a safer agentic experience"
    },
    "intro": {
      "fr": "Permissions minimales, outils contrôlés, actions traçables.",
      "en": "Least privilege, controlled tools and traceable actions."
    },
    "steps": [
      {
        "fr": "Décrire la tâche et les actions qui ne doivent jamais être autonomes.",
        "en": "Define the task and actions that must never be autonomous."
      },
      {
        "fr": "Limiter l’accès aux seuls outils et données nécessaires.",
        "en": "Restrict access to the minimum required tools and data."
      },
      {
        "fr": "Traiter toute page ou réponse d’outil comme une donnée potentiellement non fiable.",
        "en": "Treat pages and tool responses as potentially untrusted data."
      },
      {
        "fr": "Valider les paramètres et isoler secrets et permissions.",
        "en": "Validate tool parameters and isolate secrets and permissions."
      },
      {
        "fr": "Faire confirmer explicitement dépenses, envois et modifications irréversibles.",
        "en": "Require approval for spending, sending or irreversible changes."
      },
      {
        "fr": "Tester injections de prompt, échecs et interruption du processus.",
        "en": "Test prompt injection, failures and safe shutdown."
      }
    ],
    "source": "https://genai.owasp.org/llm-top-10/",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-12"
  },
  {
    "slug": "verification",
    "icon": "✓",
    "audience": "teacher",
    "duration": "25–40",
    "title": {
      "fr": "Vérifier une réponse générée",
      "en": "Verify a generated answer"
    },
    "intro": {
      "fr": "Transformer une réponse persuasive en affirmations vérifiables.",
      "en": "Turn a persuasive answer into testable claims."
    },
    "steps": [
      {
        "fr": "Isoler chaque affirmation factuelle et les dates qu’elle suppose.",
        "en": "Isolate each factual claim and its implied dates."
      },
      {
        "fr": "Identifier la source primaire pertinente, pas seulement un lien cité.",
        "en": "Identify relevant primary evidence, not merely a cited link."
      },
      {
        "fr": "Lire le passage exact et en comprendre le contexte.",
        "en": "Read the exact passage in context."
      },
      {
        "fr": "Rechercher une deuxième source indépendante lorsque nécessaire.",
        "en": "Seek independent corroboration where appropriate."
      },
      {
        "fr": "Noter les contradictions et incertitudes sans les masquer.",
        "en": "Record disagreements and uncertainties transparently."
      },
      {
        "fr": "Publier avec attribution, limites et date de vérification.",
        "en": "Publish with attribution, limitations and verification date."
      }
    ],
    "source": "https://www.nist.gov/itl/ai-risk-management-framework",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-12"
  },
  {
    "slug": "provenance",
    "icon": "⬡",
    "audience": "teacher",
    "duration": "30–45",
    "title": {
      "fr": "Examiner la provenance d’un média",
      "en": "Examine media provenance"
    },
    "intro": {
      "fr": "Comprendre la différence entre historique technique et vérité factuelle.",
      "en": "Understand the difference between media history and factual truth."
    },
    "steps": [
      {
        "fr": "Conserver l’original et noter où le média a été obtenu.",
        "en": "Keep the original and record where the media came from."
      },
      {
        "fr": "Rechercher des informations de provenance éventuellement intégrées.",
        "en": "Inspect any embedded provenance information."
      },
      {
        "fr": "Vérifier l’identité de l’émetteur et la chaîne de validation disponible.",
        "en": "Check the issuer identity and available validation chain."
      },
      {
        "fr": "Ne pas déduire la vérité d’un contenu de la seule présence de métadonnées.",
        "en": "Do not infer truth solely from metadata presence."
      },
      {
        "fr": "Rechercher des éléments de contexte indépendants si nécessaire.",
        "en": "Seek independent context when needed."
      },
      {
        "fr": "Documenter les limites et la conclusion provisoire.",
        "en": "Document limitations and a provisional conclusion."
      }
    ],
    "source": "https://spec.c2pa.org/specifications/",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-12"
  },
  {
    "slug": "accessibilite",
    "icon": "◧",
    "audience": "creator",
    "duration": "40–60",
    "title": {
      "fr": "Auditer une interface Web générée",
      "en": "Audit an AI-generated web interface"
    },
    "intro": {
      "fr": "Aller au-delà d’une jolie capture pour construire un accès réel.",
      "en": "Go beyond a polished screenshot to real usability."
    },
    "steps": [
      {
        "fr": "Naviguer entièrement au clavier, y compris les menus et dialogues.",
        "en": "Navigate the entire interface with a keyboard."
      },
      {
        "fr": "Contrôler l’ordre des titres, les labels et les messages d’erreur.",
        "en": "Check heading order, labels and error messages."
      },
      {
        "fr": "Tester le contraste et la lisibilité à plusieurs tailles de texte.",
        "en": "Test contrast and readability at multiple text sizes."
      },
      {
        "fr": "Vérifier les états focus, survol, chargement et absence de données.",
        "en": "Check focus, hover, loading and empty states."
      },
      {
        "fr": "Tester avec au moins une technologie d’assistance pertinente.",
        "en": "Test with at least one relevant assistive technology."
      },
      {
        "fr": "Documenter les obstacles et la correction réellement réalisée.",
        "en": "Document barriers and the actual fix."
      }
    ],
    "source": "https://www.w3.org/TR/WCAG22/",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-12"
  },
  {
    "slug": "selection",
    "icon": "◈",
    "audience": "organization",
    "duration": "45–60",
    "title": {
      "fr": "Choisir un outil IA pour son organisation",
      "en": "Choose an AI tool for your organization"
    },
    "intro": {
      "fr": "Comparer les solutions avec des critères documentés plutôt que des promesses.",
      "en": "Compare solutions using documented criteria, not promises."
    },
    "steps": [
      {
        "fr": "Préciser le problème métier et les personnes concernées.",
        "en": "Define the user need and affected people."
      },
      {
        "fr": "Identifier les catégories d’outils adaptées sans préjuger du fournisseur.",
        "en": "Identify fitting categories without assuming a vendor."
      },
      {
        "fr": "Vérifier licences, coûts et conditions sur les sources actuelles.",
        "en": "Verify licensing, costs and conditions at current sources."
      },
      {
        "fr": "Évaluer confidentialité, export des données et dépendances.",
        "en": "Evaluate privacy, data export and dependencies."
      },
      {
        "fr": "Tester la qualité avec un petit corpus de tâches représentatives.",
        "en": "Trial quality with representative tasks."
      },
      {
        "fr": "Comparer résultats, risques et plan de sortie avant l’adoption.",
        "en": "Compare outcomes, risk and exit plans before adoption."
      }
    ],
    "source": "https://www.nist.gov/itl/ai-risk-management-framework",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-12"
  },
  {
    "slug": "veille",
    "icon": "◎",
    "audience": "research",
    "duration": "40–55",
    "title": {
      "fr": "Organiser une veille scientifique fiable",
      "en": "Run trustworthy research monitoring"
    },
    "intro": {
      "fr": "Collecter des pistes, puis qualifier avant de diffuser.",
      "en": "Collect leads, then qualify before sharing."
    },
    "steps": [
      {
        "fr": "Choisir des sources officielles et périodiques.",
        "en": "Choose official sources and update frequencies."
      },
      {
        "fr": "Enregistrer date d’événement, date de publication et date de collecte.",
        "en": "Record event, publication and collection dates separately."
      },
      {
        "fr": "Normaliser les URL et dédoublonner les références.",
        "en": "Normalize URLs and deduplicate references."
      },
      {
        "fr": "Distinguer prépublications, travaux évalués et annonces produit.",
        "en": "Distinguish preprints, peer-reviewed work and product news."
      },
      {
        "fr": "Confier les candidats à une file de relecture explicite.",
        "en": "Move candidates to an explicit human review queue."
      },
      {
        "fr": "Tracer les corrections et ne publier que les éléments approuvés.",
        "en": "Track corrections and publish only approved items."
      }
    ],
    "source": "https://www.w3.org/news/",
    "status": "guide_pedagogique",
    "updated_at": "2026-11-12"
  }
];

guides.push(...researchGuides);
