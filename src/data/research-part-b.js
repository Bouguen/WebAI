export const researchRowsB = [
  {
    "slug": "browser-ai-models",
    "category": "Modèles",
    "title": {
      "fr": "IA intégrée au navigateur : capacités et limites",
      "en": "Built-in browser AI: capabilities and limits"
    },
    "summary": {
      "fr": "Évaluer les APIs de traduction, résumé et génération directement accessibles dans certains navigateurs.",
      "en": "Assess translation, summarization and generation APIs offered by some browsers."
    },
    "group": "explorer",
    "source": "https://developer.chrome.com/docs/ai/built-in",
    "audience": {
      "fr": "Enseignants, chercheurs, développeurs et public curieux",
      "en": "Educators, researchers, developers and curious readers"
    },
    "sections": [
      {
        "title": {
          "fr": "Des modèles gérés par le navigateur",
          "en": "Browser-managed models"
        },
        "body": {
          "fr": "Certaines fonctions de Chrome permettent de faire appel à des modèles intégrés pour résumer, traduire, détecter une langue ou produire du texte. La disponibilité dépend de la version, du matériel et des conditions d’accès ; un site ne peut supposer une prise en charge universelle.",
          "en": "Some Chrome features expose browser-managed models for summarizing, translating, language detection or text production. Availability depends on browser version, hardware and conditions; websites cannot assume universal support."
        }
      },
      {
        "title": {
          "fr": "Traitement local et ses nuances",
          "en": "Local processing and its nuances"
        },
        "body": {
          "fr": "L’exécution locale peut réduire certains transferts de données et permettre des usages hors ligne lorsque les ressources nécessaires sont déjà disponibles. Le téléchargement initial de modèles, la mémoire, l’autonomie et les politiques du navigateur imposent néanmoins des contraintes.",
          "en": "Local inference can reduce some data transfers and support offline uses once required resources are available. Initial model downloads, memory, battery life and browser policies still impose constraints."
        }
      },
      {
        "title": {
          "fr": "Détection et repli",
          "en": "Feature detection and fallback"
        },
        "body": {
          "fr": "Une application robuste teste explicitement la disponibilité des fonctions et offre une alternative accessible. Elle explique si le texte est généré localement ou via un service distant et ne prétend pas garantir la confidentialité par le seul mot « local ».",
          "en": "A robust application explicitly checks available features and offers an accessible fallback. It explains local versus remote generation and does not promise privacy based solely on the word 'local'."
        }
      },
      {
        "title": {
          "fr": "Cas d’usage pédagogique",
          "en": "Teaching use case"
        },
        "body": {
          "fr": "Un glossaire bilingue pourrait tester la traduction de définitions courtes, puis comparer le sens avec la source. L’activité demande un jugement humain, en particulier pour les notions scientifiques ou juridiques.",
          "en": "A bilingual glossary could try translating short definitions, then compare meaning against the original. Human judgment is essential, especially for scientific and legal concepts."
        }
      }
    ],
    "steps": [
      {
        "fr": "Détecter les fonctions disponibles",
        "en": "Détecter les fonctions disponibles"
      },
      {
        "fr": "Choisir un repli",
        "en": "Choisir un repli"
      },
      {
        "fr": "Comparer qualité et ressources",
        "en": "Comparer qualité et ressources"
      },
      {
        "fr": "Documenter les limites",
        "en": "Documenter les limites"
      }
    ],
    "checks": [
      {
        "fr": "Does the browser support the API?",
        "en": "Does the browser support the API?"
      },
      {
        "fr": "What happens when a model is unavailable?",
        "en": "What happens when a model is unavailable?"
      },
      {
        "fr": "Is sensitive data sent remotely?",
        "en": "Is sensitive data sent remotely?"
      }
    ],
    "tools": [
      "transformers-js",
      "webllm"
    ]
  },
  {
    "slug": "webnn-inference",
    "category": "Exécution",
    "title": {
      "fr": "WebNN et accélération neuronale",
      "en": "WebNN and neural acceleration"
    },
    "summary": {
      "fr": "Comprendre une API Web conçue pour l’inférence sur les dispositifs des utilisateurs.",
      "en": "Understand a Web API designed for inference on user devices."
    },
    "group": "explorer",
    "source": "https://webmachinelearning.github.io/webnn-intro/",
    "audience": {
      "fr": "Enseignants, chercheurs, développeurs et public curieux",
      "en": "Educators, researchers, developers and curious readers"
    },
    "sections": [
      {
        "title": {
          "fr": "Le rôle de WebNN",
          "en": "The role of WebNN"
        },
        "body": {
          "fr": "WebNN vise à exposer des fonctions de calcul neuronal qui peuvent exploiter des processeurs et accélérateurs matériels. Son objectif n’est pas de fournir un chatbot complet, mais un moyen de construire et exécuter des graphes de calcul appropriés.",
          "en": "WebNN aims to expose neural computation that can use processors and dedicated accelerators. Its purpose is not to provide a complete chatbot but a way to construct and execute suitable computational graphs."
        }
      },
      {
        "title": {
          "fr": "Compatibilité et performances",
          "en": "Compatibility and performance"
        },
        "body": {
          "fr": "L’appareil et l’implémentation influencent les opérateurs disponibles, la précision et le temps de calcul. Les applications doivent vérifier les capacités réellement prises en charge et comparer des modèles représentatifs plutôt que s’en tenir à une promesse théorique.",
          "en": "Device and implementation affect supported operators, precision and execution time. Applications should inspect actual capabilities and benchmark representative models rather than rely on theoretical claims."
        }
      },
      {
        "title": {
          "fr": "Confidentialité et ressources",
          "en": "Privacy and resources"
        },
        "body": {
          "fr": "L’inférence locale peut éviter l’envoi de certaines données à un serveur. Cela ne rend pas le modèle impartial, sûr ni léger : les fichiers du modèle peuvent rester volumineux et les données traitées demandent une gouvernance explicite.",
          "en": "Local inference can avoid sending some data to a server. It does not make the model unbiased, safe or lightweight: model files may be large and processed data still requires explicit governance."
        }
      },
      {
        "title": {
          "fr": "Comparaison pratique",
          "en": "Practical comparison"
        },
        "body": {
          "fr": "Testez une tâche simple, telle que la classification d’un texte, sur des appareils compatibles. Notez mémoire, latence, réussite, consommation et dégradations possibles ; évitez de comparer des architectures de modèles différentes comme si seul WebNN changeait.",
          "en": "Test a simple task, such as text classification, on compatible devices. Record memory, latency, success, power use and failure modes; do not compare different model architectures as if WebNN were the only variable."
        }
      }
    ],
    "steps": [
      {
        "fr": "Vérifier les capacités",
        "en": "Vérifier les capacités"
      },
      {
        "fr": "Sélectionner un modèle compatible",
        "en": "Sélectionner un modèle compatible"
      },
      {
        "fr": "Mesurer l’inférence",
        "en": "Mesurer l’inférence"
      },
      {
        "fr": "Consigner les échecs",
        "en": "Consigner les échecs"
      }
    ],
    "checks": [
      {
        "fr": "Which operators are available?",
        "en": "Which operators are available?"
      },
      {
        "fr": "Is inference actually local?",
        "en": "Is inference actually local?"
      },
      {
        "fr": "Are latency and accuracy both measured?",
        "en": "Are latency and accuracy both measured?"
      }
    ],
    "tools": [
      "transformers-js",
      "webllm"
    ]
  },
  {
    "slug": "webgpu-ai",
    "category": "Exécution",
    "title": {
      "fr": "WebGPU pour le calcul et les modèles Web",
      "en": "WebGPU for computation and Web models"
    },
    "summary": {
      "fr": "Distinguer l’API graphique/calcul de la logique des modèles d’IA.",
      "en": "Separate GPU computation from model-level AI logic."
    },
    "group": "explorer",
    "source": "https://www.w3.org/TR/webgpu/",
    "audience": {
      "fr": "Enseignants, chercheurs, développeurs et public curieux",
      "en": "Educators, researchers, developers and curious readers"
    },
    "sections": [
      {
        "title": {
          "fr": "Une API de calcul GPU",
          "en": "A GPU computation API"
        },
        "body": {
          "fr": "WebGPU permet à une application Web d’effectuer du rendu graphique et certains calculs sur le GPU. Au 13 novembre 2026, la publication W3C consultée est un Candidate Recommendation Draft ; cela n’équivaut pas à une disponibilité identique sur tous les appareils.",
          "en": "WebGPU lets Web applications render graphics and perform certain computations on GPUs. As of 13 November 2026 the consulted W3C publication is a Candidate Recommendation Draft; availability is not identical across all devices."
        }
      },
      {
        "title": {
          "fr": "Du GPU à l’inférence",
          "en": "From GPU to inference"
        },
        "body": {
          "fr": "Les bibliothèques d’exécution IA peuvent exploiter WebGPU pour certaines opérations. WebGPU, à lui seul, ne contient pas un modèle ni un corpus : il fournit des primitives de calcul.",
          "en": "AI runtimes may use WebGPU for particular operations. WebGPU alone contains neither a model nor a dataset; it provides computation primitives."
        }
      },
      {
        "title": {
          "fr": "Performance et coût local",
          "en": "Performance and local cost"
        },
        "body": {
          "fr": "Mesurez temps de chargement, latence, empreinte mémoire, consommation et comportement hors ligne. Le calcul sur le terminal évite certains coûts serveur mais transfère une partie des exigences vers les appareils des utilisateurs.",
          "en": "Measure load time, latency, memory footprint, power usage and offline behavior. On-device compute can avoid some server costs while shifting requirements to users' devices."
        }
      },
      {
        "title": {
          "fr": "Dégradation progressive",
          "en": "Progressive enhancement"
        },
        "body": {
          "fr": "Une application sérieuse teste navigator.gpu et prévoit un autre parcours lorsque le GPU, le navigateur ou la politique de sécurité ne prend pas en charge l’API. L’accessibilité et la lisibilité de la page doivent subsister.",
          "en": "A robust application checks navigator.gpu and provides alternatives when GPU, browser or security policies do not support the API. Accessibility and readability must remain intact."
        }
      }
    ],
    "steps": [
      {
        "fr": "Inspecter le GPU",
        "en": "Inspecter le GPU"
      },
      {
        "fr": "Mesurer la charge",
        "en": "Mesurer la charge"
      },
      {
        "fr": "Prévoir un repli",
        "en": "Prévoir un repli"
      },
      {
        "fr": "Documenter la prise en charge",
        "en": "Documenter la prise en charge"
      }
    ],
    "checks": [
      {
        "fr": "Does GPU availability imply a supported AI model?",
        "en": "Does GPU availability imply a supported AI model?"
      },
      {
        "fr": "Is a CPU fallback possible?",
        "en": "Is a CPU fallback possible?"
      },
      {
        "fr": "What is the model download cost?",
        "en": "What is the model download cost?"
      }
    ],
    "tools": [
      "webllm",
      "transformers-js"
    ]
  },
  {
    "slug": "rag-quality-evaluation",
    "category": "Recherche",
    "title": {
      "fr": "Évaluer un système RAG de manière rigoureuse",
      "en": "Rigorous evaluation of RAG systems"
    },
    "summary": {
      "fr": "Identifier les erreurs à chaque étape d’un système de recherche augmentée.",
      "en": "Identify errors at each stage of retrieval-augmented generation."
    },
    "group": "comprendre",
    "source": "https://arxiv.org/abs/2005.11401",
    "audience": {
      "fr": "Enseignants, chercheurs, développeurs et public curieux",
      "en": "Educators, researchers, developers and curious readers"
    },
    "sections": [
      {
        "title": {
          "fr": "Indexer des preuves, pas seulement des phrases",
          "en": "Index evidence, not just text"
        },
        "body": {
          "fr": "Un système RAG sélectionne des passages candidats puis les transmet à un modèle pour composer une réponse. L’identité, l’édition, la date et les droits des documents doivent rester associés aux fragments indexés ; sinon la citation perd son contexte.",
          "en": "A RAG system selects candidate passages and supplies them to a model to draft an answer. Document identity, edition, date and rights should remain attached to indexed fragments; otherwise citations lose context."
        }
      },
      {
        "title": {
          "fr": "Séparer rappel et fidélité",
          "en": "Separate retrieval recall from faithfulness"
        },
        "body": {
          "fr": "Un système peut retrouver les bons passages sans produire une réponse fidèle, ou générer un texte plausible sur la base de passages non pertinents. Évaluez séparément récupération, classement, fidélité, exactitude de citation et abstention en l’absence de preuve.",
          "en": "A system can retrieve relevant passages yet write an unfaithful answer, or generate plausible prose from irrelevant evidence. Evaluate retrieval, reranking, faithfulness, citation accuracy and abstention when evidence is missing separately."
        }
      },
      {
        "title": {
          "fr": "Constituer un jeu d’évaluation",
          "en": "Build an evaluation set"
        },
        "body": {
          "fr": "Préparez des questions positives, négatives, ambiguës et contradictoires avec leurs références de contrôle. Séparez les cas d’apprentissage, de réglage et d’évaluation afin de limiter l’adaptation aux exemples de test.",
          "en": "Prepare positive, negative, ambiguous and conflicting questions with reference evidence. Separate training, tuning and evaluation examples to reduce overfitting to test cases."
        }
      },
      {
        "title": {
          "fr": "Mesurer les défaillances",
          "en": "Measure failures"
        },
        "body": {
          "fr": "Une citation inventée est un défaut différent d’une récupération non pertinente. Présentez les résultats par type d’erreur avec des exemples auditables et une date de la version du corpus et du modèle.",
          "en": "A fabricated citation is a different failure from irrelevant retrieval. Report results by error class, with auditable examples and dates for corpus and model versions."
        }
      }
    ],
    "steps": [
      {
        "fr": "Préparer des questions témoins",
        "en": "Préparer des questions témoins"
      },
      {
        "fr": "Mesurer la récupération",
        "en": "Mesurer la récupération"
      },
      {
        "fr": "Évaluer la fidélité",
        "en": "Évaluer la fidélité"
      },
      {
        "fr": "Tracer les versions",
        "en": "Tracer les versions"
      }
    ],
    "checks": [
      {
        "fr": "Is retrieved evidence actually relevant?",
        "en": "Is retrieved evidence actually relevant?"
      },
      {
        "fr": "Does each citation support its claim?",
        "en": "Does each citation support its claim?"
      },
      {
        "fr": "Does the system abstain when evidence is absent?",
        "en": "Does the system abstain when evidence is absent?"
      }
    ],
    "tools": [
      "llamaindex",
      "haystack",
      "promptfoo"
    ]
  },
  {
    "slug": "structured-data-agents",
    "category": "Données",
    "title": {
      "fr": "Données structurées, JSON-LD et découvrabilité",
      "en": "Structured data, JSON-LD and discoverability"
    },
    "summary": {
      "fr": "Comprendre les liens entre sémantique, métadonnées et systèmes d’IA.",
      "en": "Understand relationships between semantics, metadata and AI systems."
    },
    "group": "comprendre",
    "source": "https://www.w3.org/TR/json-ld11/",
    "audience": {
      "fr": "Enseignants, chercheurs, développeurs et public curieux",
      "en": "Educators, researchers, developers and curious readers"
    },
    "sections": [
      {
        "title": {
          "fr": "Les données liées sur le Web",
          "en": "Linked data on the Web"
        },
        "body": {
          "fr": "JSON-LD permet d’exprimer des ressources et relations en JSON avec un contexte qui définit leurs identifiants. Une donnée liée n’est pas une instruction agentique ni une garantie que le contenu sera repris par un modèle.",
          "en": "JSON-LD represents resources and relations in JSON with a context defining identifiers. Linked data is neither an agent instruction nor a promise that a model will reproduce the content."
        }
      },
      {
        "title": {
          "fr": "Schema.org et les moteurs",
          "en": "Schema.org and search"
        },
        "body": {
          "fr": "Les descriptions de pages peuvent clarifier le type d’une ressource, son auteur, sa date ou ses relations. Google demande que les données structurées correspondent au contenu visible ; un marquage artificiel ou trompeur n’améliore pas nécessairement l’éligibilité aux fonctionnalités de recherche.",
          "en": "Page descriptions can clarify resource type, author, date or relationships. Google requires structured data to match visible content; artificial or misleading markup does not necessarily improve search eligibility."
        }
      },
      {
        "title": {
          "fr": "Interopérabilité et limites",
          "en": "Interoperability and limits"
        },
        "body": {
          "fr": "Des identifiants stables et des types définis facilitent l’échange entre systèmes, mais les graphes doivent être maintenus. Les éléments mal typés ou sortis de leur contexte peuvent introduire autant d’ambiguïtés que le langage naturel.",
          "en": "Stable identifiers and defined types facilitate exchange across systems, but graphs require maintenance. Mistyped or context-free elements can introduce ambiguities comparable to natural language."
        }
      },
      {
        "title": {
          "fr": "Mise en pratique",
          "en": "Hands-on exercise"
        },
        "body": {
          "fr": "Représentez une page de cours par son titre, son auteur, sa date, sa langue et ses références, puis vérifiez que ces informations existent effectivement sur la page. Comparez ce modèle à un texte sans métadonnées.",
          "en": "Represent a course page with title, author, date, language and references, then verify that those facts really appear on the page. Compare that model with text without metadata."
        }
      }
    ],
    "steps": [
      {
        "fr": "Choisir des identifiants",
        "en": "Choisir des identifiants"
      },
      {
        "fr": "Définir le contexte",
        "en": "Définir le contexte"
      },
      {
        "fr": "Vérifier le contenu visible",
        "en": "Vérifier le contenu visible"
      },
      {
        "fr": "Tester la cohérence",
        "en": "Tester la cohérence"
      }
    ],
    "checks": [
      {
        "fr": "Does the markup match the visible page?",
        "en": "Does the markup match the visible page?"
      },
      {
        "fr": "Is it a search ranking guarantee?",
        "en": "Is it a search ranking guarantee?"
      },
      {
        "fr": "Are identifiers stable and meaningful?",
        "en": "Are identifiers stable and meaningful?"
      }
    ],
    "tools": [
      "github",
      "astro"
    ]
  },
  {
    "slug": "provenance-evidence",
    "category": "Confiance",
    "title": {
      "fr": "Provenance C2PA et vérification indépendante",
      "en": "C2PA provenance and independent verification"
    },
    "summary": {
      "fr": "Ne pas confondre signature, attribution et vérité d’une publication.",
      "en": "Avoid conflating signatures, attribution and factual truth."
    },
    "group": "verifier",
    "source": "https://spec.c2pa.org/specifications/specifications/2.3/specs/C2PA_Specification",
    "audience": {
      "fr": "Enseignants, chercheurs, développeurs et public curieux",
      "en": "Educators, researchers, developers and curious readers"
    },
    "sections": [
      {
        "title": {
          "fr": "Ce qui est techniquement signé",
          "en": "What is technically signed"
        },
        "body": {
          "fr": "Un manifeste C2PA associe des assertions relatives à l’origine ou à l’édition d’un média à des mécanismes de signature. La validation peut confirmer l’intégrité de certaines informations déclarées, sans confirmer que la scène représentée correspond à la réalité.",
          "en": "A C2PA manifest binds origin or edit assertions about media to signing mechanisms. Validation can confirm integrity of certain claims without proving that the depicted scene corresponds to reality."
        }
      },
      {
        "title": {
          "fr": "Ce que l’absence signifie",
          "en": "What absence means"
        },
        "body": {
          "fr": "L’absence de métadonnées C2PA ne prouve pas qu’un média a été généré par une IA. Des transformations, exports ou plateformes peuvent supprimer ou ne pas transporter certaines informations.",
          "en": "Missing C2PA metadata does not prove AI generation. Transformations, exports or platforms may strip or fail to carry some information."
        }
      },
      {
        "title": {
          "fr": "Un standard en évolution",
          "en": "An evolving specification"
        },
        "body": {
          "fr": "La spécification technique 2.3 publiée en décembre 2025 étend notamment la prise en charge de médias et certaines méthodes de validation. Les développeurs doivent se référer à une version datée, car les formats et profils évoluent.",
          "en": "The 2.3 technical specification published in December 2025 extends media support and certain validation mechanisms. Developers should reference a dated version because formats and profiles evolve."
        }
      },
      {
        "title": {
          "fr": "Confronter les sources",
          "en": "Cross-check sources"
        },
        "body": {
          "fr": "Interrogez l’auteur, la chaîne d’acquisition, les versions antérieures et des témoignages indépendants. Pour le journalisme, la science ou les archives, la provenance est une pièce de l’enquête et non un verdict.",
          "en": "Inspect the author, acquisition chain, earlier versions and independent testimony. In journalism, science or archives, provenance is a piece of the investigation, not a verdict."
        }
      }
    ],
    "steps": [
      {
        "fr": "Rechercher le manifeste",
        "en": "Rechercher le manifeste"
      },
      {
        "fr": "Vérifier la signature",
        "en": "Vérifier la signature"
      },
      {
        "fr": "Lire les assertions",
        "en": "Lire les assertions"
      },
      {
        "fr": "Comparer les preuves",
        "en": "Comparer les preuves"
      }
    ],
    "checks": [
      {
        "fr": "Is absence evidence of manipulation?",
        "en": "Is absence evidence of manipulation?"
      },
      {
        "fr": "Can a signed statement still be misleading?",
        "en": "Can a signed statement still be misleading?"
      },
      {
        "fr": "What does the manifest actually cover?",
        "en": "What does the manifest actually cover?"
      }
    ],
    "tools": [
      "c2patool"
    ]
  },
  {
    "slug": "ai-transparency-eu",
    "category": "Droit et éthique",
    "title": {
      "fr": "Transparence des contenus générés : cadre européen",
      "en": "EU transparency for AI-generated content"
    },
    "summary": {
      "fr": "Lire les obligations de transparence sans généraliser au-delà du texte applicable.",
      "en": "Read transparency requirements without generalizing beyond applicable law."
    },
    "group": "verifier",
    "source": "https://eur-lex.europa.eu/eli/reg/2024/1689",
    "audience": {
      "fr": "Enseignants, chercheurs, développeurs et public curieux",
      "en": "Educators, researchers, developers and curious readers"
    },
    "sections": [
      {
        "title": {
          "fr": "L’article 50 et ses objets",
          "en": "Article 50 and its scope"
        },
        "body": {
          "fr": "Le règlement européen sur l’IA prévoit notamment des obligations d’information pour certaines interactions avec des systèmes IA et de signalement pour certains contenus synthétiques. Les obligations, les exceptions et les calendriers d’application doivent être lus dans le texte consolidé.",
          "en": "The EU AI Act provides disclosure duties for certain interactions with AI systems and marking or disclosure for some synthetic content. Obligations, exceptions and application dates need to be read in the consolidated text."
        }
      },
      {
        "title": {
          "fr": "Marquage et détection",
          "en": "Marking and detection"
        },
        "body": {
          "fr": "Le texte prévoit des exigences concernant le marquage lisible par machine de certaines sorties synthétiques dans la mesure techniquement réalisable. Il faut distinguer cette exigence de la simple présence d’un filigrane graphique visible.",
          "en": "The law addresses machine-readable marking of certain synthetic outputs to the extent technically feasible. This is different from merely placing a visible graphic watermark."
        }
      },
      {
        "title": {
          "fr": "Des exceptions à considérer",
          "en": "Exceptions matter"
        },
        "body": {
          "fr": "La divulgation concernant les textes d’intérêt public et les hypertrucages comporte des cas particuliers, notamment liés à la responsabilité éditoriale ou à certains usages artistiques. Une analyse juridique doit vérifier les dispositions actuelles et le contexte d’application.",
          "en": "Disclosure for public-interest text and deepfakes includes context-specific exceptions, including editorial accountability or certain artistic uses. Legal analysis must check current provisions and the deployment context."
        }
      },
      {
        "title": {
          "fr": "Méthode de conformité",
          "en": "Compliance method"
        },
        "body": {
          "fr": "Recensez les types de sorties, les destinataires, les zones de diffusion, les responsables et les solutions de signalement. Soumettez les conclusions importantes à une expertise juridique plutôt que de faire d’un tableau pédagogique une certification.",
          "en": "Inventory output types, audiences, jurisdictions, accountable parties and disclosure mechanisms. Seek legal review for consequential conclusions rather than treating an educational chart as certification."
        }
      }
    ],
    "steps": [
      {
        "fr": "Identifier le cas",
        "en": "Identifier le cas"
      },
      {
        "fr": "Lire les exceptions",
        "en": "Lire les exceptions"
      },
      {
        "fr": "Décrire le marquage",
        "en": "Décrire le marquage"
      },
      {
        "fr": "Vérifier l’application",
        "en": "Vérifier l’application"
      }
    ],
    "checks": [
      {
        "fr": "Which Article 50 duty actually applies?",
        "en": "Which Article 50 duty actually applies?"
      },
      {
        "fr": "Are there exceptions for the context?",
        "en": "Are there exceptions for the context?"
      },
      {
        "fr": "Has a legal review confirmed the interpretation?",
        "en": "Has a legal review confirmed the interpretation?"
      }
    ],
    "tools": [
      "c2patool"
    ]
  },
  {
    "slug": "accessible-ai-web",
    "category": "Accessibilité",
    "title": {
      "fr": "Interfaces d’IA accessibles et compréhensibles",
      "en": "Accessible and understandable AI interfaces"
    },
    "summary": {
      "fr": "Appliquer WCAG à des contenus et interactions dynamiques.",
      "en": "Apply WCAG to dynamic content and AI interactions."
    },
    "group": "comprendre",
    "source": "https://www.w3.org/TR/WCAG22/",
    "audience": {
      "fr": "Enseignants, chercheurs, développeurs et public curieux",
      "en": "Educators, researchers, developers and curious readers"
    },
    "sections": [
      {
        "title": {
          "fr": "Les exigences de base restent valables",
          "en": "The fundamentals still apply"
        },
        "body": {
          "fr": "Une interface IA reste une interface Web. Les textes alternatifs, contrastes, formulaires correctement étiquetés, focus visible et navigation clavier demeurent importants, qu’une réponse soit générée ou non.",
          "en": "An AI interface is still a Web interface. Alternative text, contrast, correctly labeled forms, visible focus and keyboard navigation matter whether a response is generated or not."
        }
      },
      {
        "title": {
          "fr": "Annoncer les contenus dynamiques",
          "en": "Announce dynamic content"
        },
        "body": {
          "fr": "Les nouvelles réponses doivent être identifiables sans déclencher de mouvements de focus inattendus. Les messages de chargement, d’erreur et de fin de tâche peuvent utiliser des régions de statut accessibles adaptées au contexte.",
          "en": "New replies should be discoverable without unexpected focus jumps. Loading, error and completion messages can use accessible status regions appropriate to the context."
        }
      },
      {
        "title": {
          "fr": "Gérer l’incertitude",
          "en": "Communicate uncertainty"
        },
        "body": {
          "fr": "Une affirmation générée doit présenter clairement ses limites et les moyens de consulter les sources. L’accessibilité cognitive implique un langage structuré, la possibilité de revenir en arrière et des erreurs non culpabilisantes.",
          "en": "Generated claims should clearly state limitations and ways to inspect evidence. Cognitive accessibility benefits from structured language, undo paths and non-blaming error messages."
        }
      },
      {
        "title": {
          "fr": "Tester avec des personnes",
          "en": "Test with people"
        },
        "body": {
          "fr": "Les vérifications automatiques ne détectent pas toutes les difficultés. Associez tests WCAG, parcours clavier, lecteurs d’écran et retours de personnes concernées, puis publiez les limites connues.",
          "en": "Automated checks miss some barriers. Combine WCAG tests, keyboard paths, screen readers and feedback from affected users, then publish known limitations."
        }
      }
    ],
    "steps": [
      {
        "fr": "Lister les parcours",
        "en": "Lister les parcours"
      },
      {
        "fr": "Tester au clavier",
        "en": "Tester au clavier"
      },
      {
        "fr": "Vérifier les statuts",
        "en": "Vérifier les statuts"
      },
      {
        "fr": "Évaluer la compréhension",
        "en": "Évaluer la compréhension"
      }
    ],
    "checks": [
      {
        "fr": "Can users navigate by keyboard?",
        "en": "Can users navigate by keyboard?"
      },
      {
        "fr": "Are loading states announced?",
        "en": "Are loading states announced?"
      },
      {
        "fr": "Can people inspect evidence and undo actions?",
        "en": "Can people inspect evidence and undo actions?"
      }
    ],
    "tools": [
      "axe-core",
      "playwright"
    ]
  },
  {
    "slug": "ai-model-efficiency",
    "category": "Durabilité",
    "title": {
      "fr": "Sobriété et modèles adaptés au Web",
      "en": "Right-sized AI and sustainability on the Web"
    },
    "summary": {
      "fr": "Choisir une architecture proportionnée à la tâche et aux appareils.",
      "en": "Choose model architecture proportionate to tasks and devices."
    },
    "group": "comprendre",
    "source": "https://web.dev/explore/ai",
    "audience": {
      "fr": "Enseignants, chercheurs, développeurs et public curieux",
      "en": "Educators, researchers, developers and curious readers"
    },
    "sections": [
      {
        "title": {
          "fr": "Un problème avant un modèle",
          "en": "Problem first, model second"
        },
        "body": {
          "fr": "Toutes les fonctions ne nécessitent pas un grand modèle génératif. Recherche classique, règles explicites et modèles spécialisés peuvent résoudre de nombreux besoins avec une complexité et un coût plus faibles.",
          "en": "Not every feature needs a large generative model. Conventional search, explicit rules and specialized models can solve many tasks with lower complexity and cost."
        }
      },
      {
        "title": {
          "fr": "Mesures comparables",
          "en": "Comparable measures"
        },
        "body": {
          "fr": "Comparez qualité, temps de réponse, énergie, bande passante, taille du modèle et coûts réels. Le simple nombre de paramètres ne résume ni l’empreinte d’un service ni ses performances sur tous les appareils.",
          "en": "Compare quality, response time, energy, bandwidth, model size and actual costs. Parameter count alone does not summarize footprint or performance across devices."
        }
      },
      {
        "title": {
          "fr": "Choix local, hybride ou distant",
          "en": "Local, hybrid or remote"
        },
        "body": {
          "fr": "Une architecture locale peut réduire certaines transmissions mais exiger des téléchargements importants et un matériel performant. Une architecture distante peut centraliser les mises à jour, au prix de transferts et d’exigences de confidentialité supplémentaires.",
          "en": "Local architecture can reduce some data transfers but require substantial downloads and capable hardware. Remote architecture centralizes updates while introducing transmission and privacy trade-offs."
        }
      },
      {
        "title": {
          "fr": "Expérimentation honnête",
          "en": "Honest experimentation"
        },
        "body": {
          "fr": "Mesurez une tâche définie sur des scénarios réalistes et plusieurs appareils. Publiez l’échantillon, les versions et les échecs plutôt que de choisir uniquement les résultats favorables.",
          "en": "Benchmark a defined task on realistic scenarios and multiple devices. Publish samples, versions and failures rather than cherry-picking favorable results."
        }
      }
    ],
    "steps": [
      {
        "fr": "Définir l’objectif",
        "en": "Définir l’objectif"
      },
      {
        "fr": "Comparer des solutions simples",
        "en": "Comparer des solutions simples"
      },
      {
        "fr": "Mesurer sur plusieurs appareils",
        "en": "Mesurer sur plusieurs appareils"
      },
      {
        "fr": "Publier les compromis",
        "en": "Publier les compromis"
      }
    ],
    "checks": [
      {
        "fr": "Does this task require a generative model?",
        "en": "Does this task require a generative model?"
      },
      {
        "fr": "Are quality and resource use both measured?",
        "en": "Are quality and resource use both measured?"
      },
      {
        "fr": "Is the fallback accessible?",
        "en": "Is the fallback accessible?"
      }
    ],
    "tools": [
      "webllm",
      "ollama"
    ]
  },
  {
    "slug": "education-ai-literacy",
    "category": "Éducation",
    "title": {
      "fr": "Former à l’esprit critique face au Web synthétique",
      "en": "Teaching critical AI literacy for the synthetic Web"
    },
    "summary": {
      "fr": "Passer de la consommation passive d’une réponse à l’enquête documentée.",
      "en": "Move from passive acceptance of answers to evidence-led inquiry."
    },
    "group": "apprendre",
    "source": "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence",
    "audience": {
      "fr": "Enseignants, chercheurs, développeurs et public curieux",
      "en": "Educators, researchers, developers and curious readers"
    },
    "sections": [
      {
        "title": {
          "fr": "Enseigner les distinctions fondamentales",
          "en": "Teach foundational distinctions"
        },
        "body": {
          "fr": "Une leçon doit distinguer un texte sourcé, une synthèse générée, une simulation et un agent qui accomplit une action. L’outil ne doit pas être présenté comme une autorité : les élèves doivent retrouver les documents originaux.",
          "en": "A lesson should distinguish sourced text, generated synthesis, simulation and an agent taking an action. The tool must not be presented as an authority: learners should find the original documents."
        }
      },
      {
        "title": {
          "fr": "Comparer des affirmations et leurs preuves",
          "en": "Compare claims and evidence"
        },
        "body": {
          "fr": "Proposez deux réponses contradictoires sur un thème de cours, puis faites identifier leur origine, leurs dates et les passages pertinents. Une réponse fluide peut être fausse, tout comme une réponse maladroite peut contenir une information exacte.",
          "en": "Present two conflicting answers on a course topic, then identify origins, dates and relevant passages. Fluent writing may be false, while awkward writing may contain accurate facts."
        }
      },
      {
        "title": {
          "fr": "Cultiver l’autonomie",
          "en": "Support learner autonomy"
        },
        "body": {
          "fr": "L’apprenant doit pouvoir expliquer les limites d’un outil, garder un historique de ses décisions et choisir quand utiliser ou non l’IA. La correction humaine demeure essentielle pour les travaux évalués et les décisions sensibles.",
          "en": "Learners should explain tool limitations, keep a record of decisions and decide when not to use AI. Human review remains central for assessed work and sensitive decisions."
        }
      },
      {
        "title": {
          "fr": "Évaluer les compétences, pas l’effet spectacle",
          "en": "Assess skills, not spectacle"
        },
        "body": {
          "fr": "Évaluez la qualité des questions, la vérification des sources, le traitement des désaccords et la justification des conclusions. Les productions démonstratives doivent être distinguées des connaissances effectivement acquises.",
          "en": "Assess question quality, source checks, handling of disagreement and justification of conclusions. Showy demonstrations must be distinguished from genuinely acquired knowledge."
        }
      }
    ],
    "steps": [
      {
        "fr": "Choisir un fait vérifiable",
        "en": "Choisir un fait vérifiable"
      },
      {
        "fr": "Comparer deux réponses",
        "en": "Comparer deux réponses"
      },
      {
        "fr": "Consulter la source originale",
        "en": "Consulter la source originale"
      },
      {
        "fr": "Justifier la conclusion",
        "en": "Justifier la conclusion"
      }
    ],
    "checks": [
      {
        "fr": "Can a fluent answer be wrong?",
        "en": "Can a fluent answer be wrong?"
      },
      {
        "fr": "How does a primary source differ from a citation?",
        "en": "How does a primary source differ from a citation?"
      },
      {
        "fr": "Can the learner explain an uncertainty?",
        "en": "Can the learner explain an uncertainty?"
      }
    ],
    "tools": [
      "pagefind",
      "arxiv"
    ]
  }
];
