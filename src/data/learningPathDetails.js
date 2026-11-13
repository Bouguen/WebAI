export const learningPathDetails={
  "debutant": {
    "goal": {
      "fr": "Distinguer les trois rôles du WebAI : créer, découvrir et agir, puis apprendre à retrouver les documents qui soutiennent une réponse.",
      "en": "Distinguish WebAI’s creation, discovery and action dimensions, then learn to trace answers to evidence."
    },
    "steps": [
      {
        "fr": "Lire deux pages sur le même sujet, une rédigée et une générée.",
        "en": "Read two pages on the same topic, one authored and one generated."
      },
      {
        "fr": "Identifier trois affirmations vérifiables et leurs sources.",
        "en": "Identify three verifiable claims and their sources."
      },
      {
        "fr": "Repérer les métadonnées de date, d’auteur et de statut.",
        "en": "Locate date, author and status metadata."
      },
      {
        "fr": "Utiliser un laboratoire sans confondre simulation et IA réelle.",
        "en": "Use a lab without confusing simulation with live AI."
      },
      {
        "fr": "Rédiger une synthèse de 200 mots indiquant les incertitudes.",
        "en": "Write a 200-word summary stating uncertainties."
      }
    ],
    "artifact": {
      "fr": "Une fiche de lecture comparant faits, interprétations et affirmations insuffisamment étayées.",
      "en": "A reading worksheet comparing facts, interpretations and unsupported claims."
    },
    "criteria": {
      "fr": "Le débutant peut identifier une référence primaire, expliquer le rôle d’un agent et refuser une conclusion sans preuve.",
      "en": "Beginners can identify primary evidence, explain agent roles and avoid unsupported conclusions."
    },
    "source": "https://www.w3.org/groups/ig/webai/"
  },
  "enseignant": {
    "goal": {
      "fr": "Construire une activité pédagogique qui vérifie la compréhension des concepts plutôt que de récompenser uniquement un texte généré fluide.",
      "en": "Design a learning activity that assesses concept understanding instead of rewarding fluent generated text alone."
    },
    "steps": [
      {
        "fr": "Choisir des documents et consignes compatibles avec le programme.",
        "en": "Choose course-aligned sources and tasks."
      },
      {
        "fr": "Faire comparer deux réponses contradictoires.",
        "en": "Compare two contradictory generated answers."
      },
      {
        "fr": "Demander une justification fondée sur des passages originaux.",
        "en": "Require justification using original evidence."
      },
      {
        "fr": "Présenter les limites de génération et la provenance des médias.",
        "en": "Explain generation limitations and media provenance."
      },
      {
        "fr": "Évaluer la démarche argumentée avec une grille explicite.",
        "en": "Assess evidence-led reasoning with a transparent rubric."
      }
    ],
    "artifact": {
      "fr": "Une séquence de cours, une grille d’évaluation et un dossier de sources à remettre aux élèves.",
      "en": "A lesson sequence, assessment rubric and source pack for learners."
    },
    "criteria": {
      "fr": "Les élèves peuvent expliquer pourquoi une citation soutient ou non une affirmation et distinguer synthèse et preuve.",
      "en": "Learners explain whether a citation supports a claim and distinguish synthesis from evidence."
    },
    "source": "https://www.w3.org/TR/WCAG22/"
  },
  "createur": {
    "goal": {
      "fr": "Concevoir des expériences Web génératives utiles, accessibles et documentées, avec un processus de revue avant diffusion.",
      "en": "Build useful, accessible and evidenced generative Web experiences with review before publication."
    },
    "steps": [
      {
        "fr": "Définir le besoin réel et les personas.",
        "en": "Define genuine needs and user personas."
      },
      {
        "fr": "Choisir une structure HTML et une interface sans dépendance IA obligatoire.",
        "en": "Choose HTML structure and UI without mandatory AI dependence."
      },
      {
        "fr": "Élaborer un prototype et des contenus sourcés.",
        "en": "Prototype with sourced content."
      },
      {
        "fr": "Tester contraste, clavier, performance et compatibilité.",
        "en": "Test contrast, keyboard, performance and compatibility."
      },
      {
        "fr": "Documenter licences, attributions et révisions.",
        "en": "Document licenses, attribution and revisions."
      }
    ],
    "artifact": {
      "fr": "Un prototype accessible avec sources, parcours alternatif et rapport des tests de conformité.",
      "en": "An accessible prototype with sources, fallback and a testing report."
    },
    "criteria": {
      "fr": "Le visiteur accède à l’information même sans modèle, tandis que les contenus générés restent clairement indiqués.",
      "en": "Visitors reach the information without a model and generated content remains clearly identified."
    },
    "source": "https://html.spec.whatwg.org/"
  },
  "developpeur": {
    "goal": {
      "fr": "Orchestrer des outils et des agents sans confondre la description des capacités, les droits d’exécution et le résultat final.",
      "en": "Orchestrate tools and agents while separating capability descriptions, execution permissions and actual outcomes."
    },
    "steps": [
      {
        "fr": "Créer un outil de consultation sans effet de bord.",
        "en": "Create a side-effect-free retrieval tool."
      },
      {
        "fr": "Décrire ses paramètres dans un schéma JSON.",
        "en": "Document its arguments using JSON Schema."
      },
      {
        "fr": "Comparer les rôles de MCP, A2A et WebMCP.",
        "en": "Compare the roles of MCP, A2A and WebMCP."
      },
      {
        "fr": "Implémenter une confirmation avant action engageante.",
        "en": "Implement confirmation before consequential operations."
      },
      {
        "fr": "Tester des contenus injectés et observer les journaux.",
        "en": "Test untrusted content and inspect traces."
      }
    ],
    "artifact": {
      "fr": "Un schéma d’outil commenté, un diagramme de permissions et des tests d’exécution reproductibles.",
      "en": "A documented tool schema, permission diagram and reproducible execution checks."
    },
    "criteria": {
      "fr": "L’outil refuse les accès non autorisés et présente les résultats réellement observés sans prétendre connecter un service absent.",
      "en": "The tool rejects unauthorized operations and reports observed outcomes without claiming nonexistent connections."
    },
    "source": "https://modelcontextprotocol.io/specification/2026-07-28"
  },
  "chercheur": {
    "goal": {
      "fr": "Construire une évaluation scientifique séparant récupération documentaire, fidélité générative, réussite agentique et sécurité.",
      "en": "Build research evaluations separating retrieval, answer faithfulness, agent task success and security."
    },
    "steps": [
      {
        "fr": "Définir questions, hypothèses et métriques.",
        "en": "Define research questions, hypotheses and metrics."
      },
      {
        "fr": "Construire un jeu de données dont les droits sont connus.",
        "en": "Build a dataset with known rights."
      },
      {
        "fr": "Préparer des cas négatifs et contradictoires.",
        "en": "Include negative and contradictory cases."
      },
      {
        "fr": "Mesurer composants, intervalles et erreurs.",
        "en": "Measure components, uncertainty and failures."
      },
      {
        "fr": "Publier méthodes, versions et limites.",
        "en": "Publish methods, versions and limitations."
      }
    ],
    "artifact": {
      "fr": "Un protocole d’évaluation daté, un tableau de résultats détaillés et une analyse des échecs.",
      "en": "A dated evaluation protocol, detailed results and failure analysis."
    },
    "criteria": {
      "fr": "Les mesures sont reproductibles et accompagnées de limites, plutôt que d’une affirmation générale de supériorité.",
      "en": "Results are reproducible with limitations rather than broad superiority claims."
    },
    "source": "https://arxiv.org/abs/2005.11401"
  },
  "organisation": {
    "goal": {
      "fr": "Déployer des applications IA sous supervision avec gestion des risques, gouvernance documentaire et contrôle humain.",
      "en": "Deploy AI applications with risk governance, documentary controls and human oversight."
    },
    "steps": [
      {
        "fr": "Identifier les usages et les acteurs responsables.",
        "en": "Identify use cases and accountable roles."
      },
      {
        "fr": "Cartographier les données et permissions des outils.",
        "en": "Map data and tool permissions."
      },
      {
        "fr": "Évaluer confidentialité, sécurité et accessibilité.",
        "en": "Evaluate privacy, security and accessibility."
      },
      {
        "fr": "Choisir des mesures et seuils de validation.",
        "en": "Define metrics and approval gates."
      },
      {
        "fr": "Préparer un processus de surveillance et correction.",
        "en": "Set up monitoring and correction processes."
      }
    ],
    "artifact": {
      "fr": "Un registre de risques, une matrice d’autorisations et un processus d’approbation lisible.",
      "en": "A risk register, permission matrix and review process."
    },
    "criteria": {
      "fr": "L’équipe peut expliquer les décisions, suspendre une automatisation et corriger ses défaillances.",
      "en": "The team can explain decisions, suspend automation and correct failures."
    },
    "source": "https://www.nist.gov/itl/ai-risk-management-framework"
  }
};
