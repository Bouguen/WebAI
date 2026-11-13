export const dossierAddendaC={
  "browser-ai-models": [
    {
      "title": {
        "fr": "Détecter les capacités sans supposition",
        "en": "Detect capabilities without assumptions"
      },
      "body": {
        "fr": "Les APIs IA gérées par le navigateur peuvent être disponibles dans certaines versions, avec des conditions propres au matériel, au stockage ou à la distribution. Ne déduisez pas la prise en charge d’une API à partir de la seule marque du navigateur. Testez la disponibilité de chaque fonction et prévoyez une solution utile lorsque le modèle ne peut pas être téléchargé ou exécuté.",
        "en": "Browser-managed AI APIs may be offered in selected versions and depend on device, storage and distribution conditions. Do not infer API support from a browser brand alone. Test each feature and provide a usable alternative when the model cannot be downloaded or run."
      }
    },
    {
      "title": {
        "fr": "Exercice : traduction contrôlée",
        "en": "Exercise: verified translation"
      },
      "body": {
        "fr": "Préparez un petit glossaire contenant des définitions en français et en anglais. Si une API de traduction locale est accessible, comparez ses propositions avec les textes de référence et notez les contre-sens. Sinon, offrez une consultation bilingue classique. Consignez précisément où le traitement a lieu, sans promettre une confidentialité que vous n’avez pas mesurée.",
        "en": "Prepare a glossary with French and English definitions. If a local translation API is supported, compare its output to reference texts and record meaning errors. Otherwise, provide conventional bilingual access. Record where processing occurs without promising unmeasured privacy guarantees."
      }
    }
  ],
  "webnn-inference": [
    {
      "title": {
        "fr": "API d’inférence et accélération matérielle",
        "en": "Inference API and hardware acceleration"
      },
      "body": {
        "fr": "WebNN propose des primitives de graphes de calcul neuronal qui peuvent exploiter des capacités matérielles selon l’implémentation. Son périmètre diffère d’une bibliothèque fournissant directement un modèle de chat. Les développeurs doivent examiner les opérateurs disponibles, les formats de poids, les contraintes numériques et les éventuels replis avant d’annoncer un gain de vitesse.",
        "en": "WebNN proposes neural computation graph primitives that may leverage available hardware according to the implementation. It differs from libraries providing complete chat models. Developers should inspect supported operators, weight formats, numerical constraints and fallbacks before claiming speedups."
      }
    },
    {
      "title": {
        "fr": "Exercice : classifier sur deux appareils",
        "en": "Exercise: classification across devices"
      },
      "body": {
        "fr": "Choisissez un même modèle et un petit jeu d’entrées de classification. Comparez la disponibilité, les erreurs, la latence et la mémoire sur deux appareils pris en charge. Conservez les détails d’environnement et distinguez le coût initial de chargement du temps d’exécution. Ne comparez pas des modèles différents comme si la seule variable était l’API.",
        "en": "Use the same supported model and a small classification input set. Compare availability, failures, latency and memory across two devices. Record environment details and separate initial loading from execution time. Avoid comparing different models as though the API were the only variable."
      }
    }
  ],
  "webgpu-ai": [
    {
      "title": {
        "fr": "API Web graphique et modèles locaux",
        "en": "Web graphics API and local models"
      },
      "body": {
        "fr": "WebGPU est une API de calcul et de rendu que des bibliothèques de modèles peuvent exploiter. Elle n’apporte ni des poids de modèle, ni un tokenizer, ni une qualité de génération intrinsèque. Les exigences de mémoire et de navigateur déterminent ce qui fonctionne réellement. Une page pédagogique doit distinguer les performances du moteur graphique de celles de l’algorithme d’inférence.",
        "en": "WebGPU is a computation and rendering API used by certain model runtimes. It provides neither model weights nor a tokenizer nor intrinsic generation quality. Memory and browser requirements shape what works. Educational pages should distinguish graphics backend performance from inference algorithm behavior."
      }
    },
    {
      "title": {
        "fr": "Scénario : mesurer l’inférence et la consommation",
        "en": "Scenario: benchmark inference and resource use"
      },
      "body": {
        "fr": "Définissez des entrées reproductibles, la version du navigateur, la configuration matérielle et les paramètres du modèle. Mesurez le temps de chargement, la latence de réponse et les erreurs, avec et sans accélération lorsqu’un repli existe. Interprétez les différences avec prudence car le matériel, le modèle et les stratégies de calcul peuvent changer simultanément.",
        "en": "Fix repeatable inputs, browser version, hardware and model parameters. Measure load time, response latency and failures, with and without acceleration where a fallback exists. Interpret differences carefully because hardware, model and computation paths may change together."
      }
    }
  ],
  "rag-quality-evaluation": [
    {
      "title": {
        "fr": "Répartition des échecs entre étapes",
        "en": "Failure analysis across pipeline stages"
      },
      "body": {
        "fr": "Un système RAG peut retrouver une source pertinente mais en déformer une nuance, ou retrouver un passage inadapté et rédiger une réponse convaincante. L’évaluation distingue couverture du corpus, récupération des documents, classement, fidélité des réponses et précision des citations. Les cas sans preuve doivent être représentés afin de mesurer la capacité à signaler une incertitude plutôt qu’à inventer.",
        "en": "A RAG system can retrieve valid evidence and still distort a nuance, or retrieve unrelated text and write persuasive prose. Evaluate corpus coverage, retrieval, ranking, answer faithfulness and citation accuracy separately. Include no-evidence cases to test meaningful abstention rather than fabrication."
      }
    },
    {
      "title": {
        "fr": "Exercice : matrice d’évaluation vérifiable",
        "en": "Exercise: auditable evaluation matrix"
      },
      "body": {
        "fr": "Préparez un tableau où chaque question est liée à des extraits attendus, une réponse possible et un niveau de confiance évalué par un humain. Pour chaque sortie, documentez les passages réellement retrouvés et les affirmations non soutenues. Comparez plusieurs variantes du découpage ou du classement en gardant le jeu de test fixe, puis publiez les erreurs qui résistent aux améliorations.",
        "en": "Build a table linking each question to expected passages, possible answers and human-assessed confidence. For each output, record actual retrieved passages and unsupported claims. Compare chunking or reranking variants with a fixed test set and publish persistent errors."
      }
    }
  ],
  "structured-data-agents": [
    {
      "title": {
        "fr": "Des métadonnées utiles, mais non magiques",
        "en": "Useful metadata, not magic"
      },
      "body": {
        "fr": "JSON-LD et Schema.org peuvent clarifier le type d’une ressource, ses auteurs, ses dates ou ses relations. Ils n’obligent aucun agent ou moteur à exploiter ces déclarations. Les valeurs doivent correspondre aux informations réelles et visibles. Les URI persistantes aident à relier les ressources, mais des identifiants ne suffisent pas à prouver l’existence d’un lien sémantique.",
        "en": "JSON-LD and Schema.org can clarify resource types, authors, dates and relationships. They do not force any agent or search service to use these claims. Values should match real visible information. Stable URIs help connect resources, but identifiers do not prove semantic relationships."
      }
    },
    {
      "title": {
        "fr": "Exercice : fiche de cours interopérable",
        "en": "Exercise: interoperable course record"
      },
      "body": {
        "fr": "Décrivez un cours par son titre, sa langue, un auteur documenté et son URL. Publiez les mêmes informations dans la page lisible et les données structurées, puis contrôlez la syntaxe et la cohérence. Modifiez volontairement une date dans le JSON-LD et demandez à l’apprenant d’identifier la contradiction. Une bonne pratique inclut la maintenance conjointe des deux représentations.",
        "en": "Describe a course with title, language, documented author and URL. Publish consistent visible and structured information, then validate syntax and meaning. Deliberately alter a date in JSON-LD and ask learners to identify the inconsistency. Good practice includes maintaining both representations together."
      }
    }
  ],
  "provenance-evidence": [
    {
      "title": {
        "fr": "Authenticité technique et vérité des événements",
        "en": "Technical authenticity and truth of events"
      },
      "body": {
        "fr": "C2PA permet de documenter des assertions et de vérifier certains éléments cryptographiques liés à un média. Une signature indique qu’un signataire a produit ou approuvé des déclarations selon un format donné, non que tous les événements représentés sont historiques ou exacts. Les copies dépourvues de manifeste exigent une enquête prudente ; ne les étiquetez pas automatiquement comme falsifiées.",
        "en": "C2PA helps document assertions and verify certain cryptographic elements tied to media. A signature indicates that a signer issued or approved claims under a format, not that every depicted event is historically accurate. Copies lacking manifests require careful investigation rather than automatic accusations of manipulation."
      }
    },
    {
      "title": {
        "fr": "Méthode : relier les assertions aux sources",
        "en": "Method: connect claims to independent evidence"
      },
      "body": {
        "fr": "Pour un document photographique, recueillez le fichier original autorisé, les assertions de provenance, l’identité déclarée des signataires et les éventuelles versions antérieures. Vérifiez les signatures lorsque le logiciel le permet, puis confrontez les déclarations à des témoignages ou archives indépendants. Consignez les limites de la vérification et ce qu’une signature ne démontre pas.",
        "en": "For a documentary photograph, gather authorized original media, provenance assertions, declared signer identities and earlier versions when available. Validate signatures where supported, then compare statements against independent archives or testimony. Record limitations and claims the signature cannot establish."
      }
    }
  ],
  "ai-transparency-eu": [
    {
      "title": {
        "fr": "Prendre en compte la portée et les exceptions",
        "en": "Scope and exceptions matter"
      },
      "body": {
        "fr": "Le règlement européen sur l’IA comporte des obligations différenciées selon le rôle de l’acteur, le type de contenu et les usages. L’article 50 doit être lu avec ses exceptions, définitions et dispositions temporelles. Une simple étiquette « généré par IA » ne couvre pas nécessairement toute obligation applicable. Les lecteurs ne doivent pas traiter une fiche de vulgarisation comme un avis juridique.",
        "en": "The EU AI Act assigns different duties according to roles, content types and use cases. Article 50 needs to be read together with exceptions, definitions and timing provisions. A basic 'AI-generated' label may not satisfy every applicable obligation. Educational summaries are not legal advice."
      }
    },
    {
      "title": {
        "fr": "Exercice : analyse de cas de publication",
        "en": "Exercise: analyze a publishing scenario"
      },
      "body": {
        "fr": "Comparez trois situations : une traduction assistée, une image synthétique destinée à illustrer une fiction et une vidéo modifiée présentée comme reportage. Identifiez pour chacune les acteurs responsables, les informations données au public et les exceptions possibles. Référez-vous au texte juridique en vigueur et faites relire toute conclusion réglementaire utilisée pour une activité réelle.",
        "en": "Compare assisted translation, a fictional synthetic illustration and an altered video presented as reportage. Identify relevant roles, public disclosures and possible exceptions in each case. Refer to current legal text and seek qualified review for conclusions used in actual operations."
      }
    }
  ],
  "accessible-ai-web": [
    {
      "title": {
        "fr": "Une interface accessible au-delà des tests automatiques",
        "en": "Accessible beyond automated checks"
      },
      "body": {
        "fr": "Les systèmes génératifs introduisent des états dynamiques, de l’attente, des réponses longues et des possibilités de correction. Les champs doivent avoir des noms accessibles, les changements de statut être signalés et le focus rester prévisible. Les tests automatiques détectent certaines erreurs techniques mais ne révèlent pas tous les obstacles cognitifs ou liés à l’usage réel.",
        "en": "Generative systems introduce dynamic states, waiting, long answers and correction workflows. Inputs need accessible names, status changes should be announced and focus behavior should remain predictable. Automated tests catch some technical errors but miss many cognitive and real-world barriers."
      }
    },
    {
      "title": {
        "fr": "Exercice : vérifier l’interface de conversation",
        "en": "Exercise: test a conversation interface"
      },
      "body": {
        "fr": "Faites parcourir un assistant au clavier depuis la saisie jusqu’à la vérification des sources. Simulez une erreur de génération ou de connexion et notez la compréhension des messages. Vérifiez qu’une personne peut interrompre ou corriger la demande. Reproduisez l’essai avec des technologies d’assistance et des personnes représentatives lorsque possible.",
        "en": "Navigate an assistant by keyboard from input through source inspection. Simulate generation or connection failures and assess status-message clarity. Check whether a user can interrupt or correct a request. Repeat with assistive technologies and representative users where possible."
      }
    }
  ],
  "ai-model-efficiency": [
    {
      "title": {
        "fr": "Choisir l’approche la plus légère qui résout le problème",
        "en": "Choose the lightest sufficient approach"
      },
      "body": {
        "fr": "Pour une tâche de tri, des règles ou un modèle spécialisé peuvent suffire là où un grand modèle génératif introduirait complexité et coûts. Comparez aussi la taille des téléchargements, la mémoire, le temps de réponse et les réseaux utilisés. Une solution locale réduit certains transferts mais peut imposer des contraintes matérielles fortes aux appareils des utilisateurs.",
        "en": "For sorting tasks, deterministic rules or small specialized models may suffice where a large generative model adds complexity and cost. Compare downloads, memory, response time and network use. Local execution may reduce transfers while requiring more capable user devices."
      }
    },
    {
      "title": {
        "fr": "Exercice : comparer trois architectures",
        "en": "Exercise: compare three architectures"
      },
      "body": {
        "fr": "Définissez une classification simple de documents et testez une règle, un petit modèle local et un service distant lorsque son usage est autorisé. Mesurez la qualité sur les mêmes exemples, la latence, la transmission de données et les contraintes de déploiement. Publiez des résultats contextualisés sans extrapoler un bilan environnemental complet à partir de la seule durée d’un appel.",
        "en": "Define a simple document classification task and test a rule, a small local model and a hosted service if authorized. Measure accuracy on the same examples, latency, data transfer and deployment constraints. Report contextual results without inferring full environmental impact from request duration alone."
      }
    }
  ],
  "education-ai-literacy": [
    {
      "title": {
        "fr": "L’apprentissage porte sur la vérification",
        "en": "Learning centers on verification"
      },
      "body": {
        "fr": "Une pédagogie critique montre comment une réponse générée se distingue d’une source, d’une citation et d’un raisonnement documenté. Les élèves doivent apprendre à formuler une question, repérer des affirmations vérifiables, retrouver les textes originaux et discuter les divergences. Le rôle d’un assistant peut être de suggérer des pistes, non de se substituer à la compréhension du sujet.",
        "en": "Critical literacy distinguishes generated answers from sources, citations and evidence-based reasoning. Learners practice framing questions, identifying checkable claims, retrieving original texts and discussing disagreements. An assistant may suggest paths but should not replace subject understanding."
      }
    },
    {
      "title": {
        "fr": "Exercice : deux réponses opposées",
        "en": "Exercise: two conflicting answers"
      },
      "body": {
        "fr": "Fournissez deux explications contradictoires sur un sujet dont les documents originaux sont accessibles. Demandez aux groupes d’identifier les affirmations précises, les dates, les citations trompeuses et les omissions. Chaque groupe prépare une synthèse nuancée avec les sources consultées et la liste des éléments encore incertains. L’évaluation porte sur la méthode critique, pas sur la fluidité du texte.",
        "en": "Give groups two conflicting explanations on a topic with accessible primary documents. Ask them to identify specific claims, dates, misleading citations and omissions. Each group produces a nuanced summary with consulted sources and remaining uncertainties. Assessment should focus on critical method rather than prose fluency."
      }
    }
  ]
};
