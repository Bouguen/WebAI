export const toolProfilesB=[
  {
    "slug": "openwebui",
    "explain": {
      "fr": "Open WebUI propose une interface conversationnelle adaptable pouvant se connecter à des moteurs locaux ou distants et offrir des expériences documentaires. Les fonctionnalités dépendent de la configuration retenue.",
      "en": "Open WebUI provides a customizable chat interface that can connect to local or hosted engines and support document-centered workflows. Features depend on the chosen setup."
    },
    "use": {
      "fr": "Construire une interface de consultation interne pour des documents autorisés avec provenance des passages et limites visibles.",
      "en": "Build an internal consultation interface for authorized documents with visible passage provenance and limits."
    },
    "limit": {
      "fr": "Protéger le stockage des conversations, les comptes, les clés de modèles et les connecteurs de données sensibles.",
      "en": "Protect conversation storage, accounts, model credentials and sensitive data connectors."
    },
    "docs": "https://github.com/open-webui/open-webui"
  },
  {
    "slug": "gradio",
    "explain": {
      "fr": "Gradio permet de créer rapidement des interfaces Web de démonstration autour de fonctions Python et de modèles. Ses composants conviennent au prototypage pédagogique ou à la collecte de retours.",
      "en": "Gradio makes it easy to build Web demo interfaces around Python functions and models. Its components suit educational prototypes and collecting feedback."
    },
    "use": {
      "fr": "Créer un banc de comparaison de sorties de deux modèles avec champs d’entrée et limites de chaque expérience.",
      "en": "Create a small comparison demo for two model outputs with clear input fields and experimental limitations."
    },
    "limit": {
      "fr": "Une démonstration publique peut consommer des ressources ou exposer des entrées ; définir les quotas et la confidentialité.",
      "en": "A public demo can consume resources or expose user inputs; define quotas and privacy boundaries."
    },
    "docs": "https://github.com/gradio-app/gradio"
  },
  {
    "slug": "streamlit",
    "explain": {
      "fr": "Streamlit facilite la création d’applications Web de données et de visualisations en Python. Il est souvent utile pour des tableaux d’étude, des explorations et des démonstrations d’IA.",
      "en": "Streamlit supports data apps and visualizations written in Python. It is useful for exploratory dashboards and AI demonstration interfaces."
    },
    "use": {
      "fr": "Présenter des métriques d’évaluation RAG avec filtres de corpus, classes d’erreurs et dates de versions.",
      "en": "Present RAG evaluation metrics with corpus filters, error categories and version dates."
    },
    "limit": {
      "fr": "Ne pas confondre visualisation des mesures et preuve de qualité ; vérifier autorisations et partage de données.",
      "en": "Do not mistake a metric dashboard for proof of quality; review authentication and data sharing."
    },
    "docs": "https://github.com/streamlit/streamlit"
  },
  {
    "slug": "vercel",
    "explain": {
      "fr": "Vercel héberge des applications Web et automatise des déploiements depuis des dépôts. Les environnements preview permettent de tester une interface avant sa mise en production.",
      "en": "Vercel hosts Web applications and automates deployments from repositories. Preview environments support verification before production release."
    },
    "use": {
      "fr": "Déployer un portail statique bilingue avec une URL de preview, contrôler les tests puis promouvoir après validation.",
      "en": "Deploy a bilingual static portal to a preview URL, review checks and promote only after approval."
    },
    "limit": {
      "fr": "La disponibilité, les quotas et les protections des déploiements dépendent du compte ; ne pas exposer de secrets côté client.",
      "en": "Availability, quotas and deployment protection depend on account settings; never expose secrets client-side."
    },
    "docs": "https://vercel.com/docs/deployments"
  },
  {
    "slug": "github",
    "explain": {
      "fr": "GitHub offre la gestion de code, des propositions de modifications, des historiques et des outils de collaboration. Il aide à documenter les choix éditoriaux et techniques d’un portail.",
      "en": "GitHub provides source control, pull requests, history and collaboration. It helps document technical and editorial decisions for a portal."
    },
    "use": {
      "fr": "Conserver les fichiers de recherche avec auteur, revue de modifications, tests et lien à la source originale.",
      "en": "Maintain research files with authorship, change review, tests and primary-source links."
    },
    "limit": {
      "fr": "Des dépôts publics ne conviennent pas aux secrets ; une PR approuvée ne constitue pas une vérification scientifique.",
      "en": "Public repositories cannot safely store secrets; an approved PR is not independent scientific review."
    },
    "docs": "https://docs.github.com/en/pull-requests"
  },
  {
    "slug": "aider",
    "explain": {
      "fr": "Aider est un assistant de programmation utilisable depuis un terminal et associé à des modifications de dépôt. Son intérêt pédagogique tient à la possibilité de relire les diff et d’exécuter des tests.",
      "en": "Aider is a terminal coding assistant that works on repository files. Its educational value includes reviewing code diffs and running tests."
    },
    "use": {
      "fr": "Expérimenter une correction de composant dans une branche, puis auditer les changements avant de les publier.",
      "en": "Try a component fix in a branch, inspect its diff and run tests before release."
    },
    "limit": {
      "fr": "Le code proposé peut introduire des erreurs ou vulnérabilités ; vérifier les permissions, les coûts et les données transmises.",
      "en": "Generated code may contain errors or vulnerabilities; review permissions, costs and transmitted data."
    },
    "docs": "https://github.com/Aider-AI/aider"
  },
  {
    "slug": "continue",
    "explain": {
      "fr": "Continue est un environnement d’assistance à la programmation intégré aux workflows de développement. Il peut connecter des modèles et du contexte de code selon la configuration.",
      "en": "Continue is a coding assistant integrated into development workflows. It can connect models and code context according to its configuration."
    },
    "use": {
      "fr": "Comparer l’explication de deux implémentations d’une API avec revue humaine des fichiers et des résultats des tests.",
      "en": "Compare explanations of two API implementations while reviewing files and test outcomes manually."
    },
    "limit": {
      "fr": "Les données du projet et les clés ne doivent pas être envoyées à des services non autorisés ; surveiller les versions.",
      "en": "Project data and credentials must not be sent to unauthorized services; watch version changes."
    },
    "docs": "https://github.com/continuedev/continue"
  },
  {
    "slug": "mlflow",
    "explain": {
      "fr": "MLflow organise le suivi d’expériences, métriques, paramètres et artefacts associés aux systèmes d’apprentissage automatique. Le suivi documenté aide à reproduire une comparaison.",
      "en": "MLflow tracks experiments, metrics, parameters and artifacts for machine-learning systems. Documented tracking helps reproduce comparisons."
    },
    "use": {
      "fr": "Comparer les performances de modèles sur un jeu d’évaluation fixé et garder les configurations exactes.",
      "en": "Compare model results on a fixed evaluation set while preserving exact configurations."
    },
    "limit": {
      "fr": "Les comparaisons nécessitent des données représentatives et une gouvernance des artefacts ; une métrique unique est insuffisante.",
      "en": "Comparisons require representative data and artifact governance; a single metric is insufficient."
    },
    "docs": "https://github.com/mlflow/mlflow"
  },
  {
    "slug": "promptfoo",
    "explain": {
      "fr": "Promptfoo permet de construire des évaluations et tests de robustesse pour des applications utilisant des modèles de langage. Il peut documenter des scénarios adversariaux contrôlés.",
      "en": "Promptfoo supports evaluations and robustness tests for language-model applications. It can document controlled adversarial scenarios."
    },
    "use": {
      "fr": "Définir des jeux d’essai de réponses sourcées et de résistance aux instructions injectées dans des textes non fiables.",
      "en": "Define test cases for sourced answers and resistance to instructions embedded in untrusted documents."
    },
    "limit": {
      "fr": "Les jeux de tests doivent être maintenus et les résultats interprétés selon le modèle ; aucun outil ne garantit la sécurité.",
      "en": "Tests need maintenance and results depend on the model; no tool guarantees safety."
    },
    "docs": "https://github.com/promptfoo/promptfoo"
  },
  {
    "slug": "arxiv",
    "explain": {
      "fr": "arXiv héberge des manuscrits scientifiques et leurs versions déposées par des auteurs. Il permet de suivre rapidement la recherche sans présumer qu’un texte est évalué par les pairs.",
      "en": "arXiv hosts scientific manuscripts and author-submitted versions. It enables timely research discovery without assuming a manuscript has passed peer review."
    },
    "use": {
      "fr": "Retrouver l’article RAG fondateur, sa date de soumission, ses mises à jour et des travaux ultérieurs.",
      "en": "Find the foundational RAG paper, its submission date, revisions and follow-up research."
    },
    "limit": {
      "fr": "Une prépublication peut évoluer ; vérifier la version, les citations, les critiques et l’éventuelle publication finale.",
      "en": "Preprints can evolve; verify version, citations, critique and any eventual journal publication."
    },
    "docs": "https://info.arxiv.org/"
  },
  {
    "slug": "semantic-scholar",
    "explain": {
      "fr": "Semantic Scholar aide à rechercher des publications et à explorer leurs métadonnées et relations de citations. Il constitue un outil de découverte, non une validation des conclusions.",
      "en": "Semantic Scholar helps discover papers, metadata and citation relationships. It supports literature exploration rather than validating claims."
    },
    "use": {
      "fr": "Identifier des travaux reliés aux agents Web et comparer leurs méthodes d’évaluation ainsi que les sources citées.",
      "en": "Find papers related to Web agents and compare evaluation methods and cited evidence."
    },
    "limit": {
      "fr": "La couverture et les relations automatiques peuvent être incomplètes ; consulter les articles originaux.",
      "en": "Coverage and automated relationships can be incomplete; read the original papers."
    },
    "docs": "https://www.semanticscholar.org/product/api"
  },
  {
    "slug": "crossref",
    "explain": {
      "fr": "Crossref facilite l’identification et la récupération de métadonnées bibliographiques associées aux DOI. Il est utile pour consolider les références et vérifier des informations d’édition.",
      "en": "Crossref provides DOI-linked bibliographic metadata useful for consolidating citations and checking publication information."
    },
    "use": {
      "fr": "Vérifier le DOI, le titre, les auteurs et la date d’une référence scientifique avant de l’ajouter à un dossier.",
      "en": "Verify DOI, title, authors and publication date before adding a scientific citation to a dossier."
    },
    "limit": {
      "fr": "Un DOI ne garantit pas l’exactitude d’un travail ni son statut d’accès libre ; vérifier la fiche de l’éditeur.",
      "en": "A DOI does not guarantee research correctness or open access; inspect the publisher record."
    },
    "docs": "https://www.crossref.org/documentation/retrieve-metadata/rest-api/"
  },
  {
    "slug": "mcp-inspector",
    "explain": {
      "fr": "MCP Inspector est un outil de développement pour examiner les connexions aux serveurs MCP et les opérations déclarées. Il facilite la compréhension des paramètres, réponses et erreurs.",
      "en": "MCP Inspector is a development tool for inspecting MCP server connections and advertised operations. It helps examine parameters, responses and failures."
    },
    "use": {
      "fr": "Tester des outils sur un serveur de démonstration et comparer les résultats aux schémas d’entrée déclarés.",
      "en": "Test tools on a safe demo server and compare outputs against declared input schemas."
    },
    "limit": {
      "fr": "Les tests peuvent invoquer de vraies fonctions : utiliser un serveur de confiance et des données non sensibles.",
      "en": "Tests can invoke real functions: use a trusted server and non-sensitive data."
    },
    "docs": "https://modelcontextprotocol.io/docs/tools/inspector"
  },
  {
    "slug": "onnxruntime-web",
    "explain": {
      "fr": "ONNX Runtime Web exécute des modèles au format ONNX dans des navigateurs compatibles selon les moteurs disponibles. Il s’insère dans des applications de prédiction, de vision ou de classification.",
      "en": "ONNX Runtime Web executes compatible ONNX models in browsers using available backends. It can power prediction, vision or classification apps."
    },
    "use": {
      "fr": "Comparer une inférence CPU/WebAssembly et GPU lorsque prise en charge, en conservant des jeux d’entrée identiques.",
      "en": "Compare CPU/WebAssembly and GPU inference where supported using identical inputs."
    },
    "limit": {
      "fr": "La compatibilité des opérateurs et les performances dépendent de l’export du modèle et du navigateur.",
      "en": "Operator support and performance depend on model export and browser."
    },
    "docs": "https://github.com/microsoft/onnxruntime"
  },
  {
    "slug": "tensorflow-js",
    "explain": {
      "fr": "TensorFlow.js permet de développer et d’exécuter des modèles de machine learning en JavaScript. Il prend en charge des tâches adaptées aux environnements Web et à leurs contraintes.",
      "en": "TensorFlow.js lets developers build and run machine-learning models in JavaScript. It supports tasks suited to Web environments and their constraints."
    },
    "use": {
      "fr": "Enseigner une classification simple avec entrées et prédictions visibles, sans prétendre remplacer une validation statistique.",
      "en": "Teach a simple classification task with visible inputs and predictions without claiming statistical validation."
    },
    "limit": {
      "fr": "Il faut mesurer exactitude, consommation et biais ; une interface intuitive n’est pas une garantie de fiabilité.",
      "en": "Measure accuracy, resource use and bias; an intuitive UI is not proof of reliability."
    },
    "docs": "https://www.tensorflow.org/js/tutorials"
  },
  {
    "slug": "mediapipe",
    "explain": {
      "fr": "MediaPipe propose des solutions de traitement multimodal et de vision sur appareil. Ses composants peuvent alimenter des expériences accessibles seulement si les appareils et les permissions conviennent.",
      "en": "MediaPipe provides on-device multimodal and computer vision solutions. Its components can power interactive experiences when hardware and permissions permit."
    },
    "use": {
      "fr": "Tester une détection de main ou de pose sur des données autorisées et afficher un résultat compréhensible sans caméra.",
      "en": "Test pose or hand detection on authorized data and provide an understandable non-camera alternative."
    },
    "limit": {
      "fr": "Attention aux autorisations caméra, à la qualité inégale selon les utilisateurs et au caractère sensible des images.",
      "en": "Respect camera permissions, variable performance across users and sensitivity of images."
    },
    "docs": "https://github.com/google-ai-edge/mediapipe"
  },
  {
    "slug": "ragas",
    "explain": {
      "fr": "Ragas propose des métriques et méthodes pour évaluer des systèmes de recherche augmentée et leurs réponses. Il aide à séparer les dimensions d’évaluation au lieu de résumer la qualité à un score unique.",
      "en": "Ragas provides metrics and methods for assessing retrieval-augmented systems and answers. It helps separate evaluation dimensions instead of compressing quality into one score."
    },
    "use": {
      "fr": "Étudier la fidélité des réponses à un corpus et la pertinence des passages sur un jeu de questions documenté.",
      "en": "Assess answer faithfulness and retrieved passage relevance on a documented question set."
    },
    "limit": {
      "fr": "Les évaluations par modèle peuvent elles-mêmes se tromper ; auditer les exemples, versions et désaccords humains.",
      "en": "Model-based evaluators can themselves be wrong; audit examples, versions and human disagreements."
    },
    "docs": "https://github.com/explodinggradients/ragas"
  },
  {
    "slug": "langfuse",
    "explain": {
      "fr": "Langfuse sert au traçage, à l’observation et à l’évaluation d’applications reposant sur des modèles. Il aide à visualiser quelles étapes ont produit une réponse ou une action.",
      "en": "Langfuse supports tracing, observation and evaluation of model-based applications. It helps inspect which steps led to an answer or action."
    },
    "use": {
      "fr": "Tracer une chaîne RAG avec les passages récupérés, les prompts et les métriques de sortie sur des données de test.",
      "en": "Trace a RAG chain with retrieved passages, prompts and output metrics on test data."
    },
    "limit": {
      "fr": "Les journaux peuvent contenir des informations personnelles ; configurer la minimisation et la rétention.",
      "en": "Traces may hold personal information; configure minimization and retention."
    },
    "docs": "https://github.com/langfuse/langfuse"
  },
  {
    "slug": "opentelemetry",
    "explain": {
      "fr": "OpenTelemetry standardise la collecte de traces, métriques et journaux pour les systèmes logiciels. Il peut servir à observer un agent Web à travers les composants de son exécution.",
      "en": "OpenTelemetry standardizes collection of traces, metrics and logs across software systems. It can help observe Web agents across execution components."
    },
    "use": {
      "fr": "Relier une requête utilisateur aux étapes de recherche, génération et appel d’outil via des identifiants de trace.",
      "en": "Link user requests to retrieval, generation and tool-call steps via trace identifiers."
    },
    "limit": {
      "fr": "La traçabilité technique n’est pas une preuve de qualité ; protéger les attributs et données sensibles.",
      "en": "Technical traces are not proof of quality; protect attributes and sensitive data."
    },
    "docs": "https://github.com/open-telemetry/opentelemetry-specification"
  },
  {
    "slug": "schema-org",
    "explain": {
      "fr": "Schema.org publie un vocabulaire de types et propriétés destinés aux descriptions structurées sur le Web. Il peut accompagner JSON-LD et clarifier le sens de ressources publiées.",
      "en": "Schema.org publishes types and properties for structured Web descriptions. It can be used with JSON-LD to clarify the meaning of published resources."
    },
    "use": {
      "fr": "Décrire une ressource pédagogique avec type, titre, auteur et langue, en restant fidèle à son contenu visible.",
      "en": "Describe a learning resource with type, title, author and language consistent with visible content."
    },
    "limit": {
      "fr": "Les propriétés ne garantissent pas une fonctionnalité de recherche ; vérifier les exigences du moteur cible.",
      "en": "Vocabulary properties do not guarantee search features; check the target engine's requirements."
    },
    "docs": "https://schema.org/docs/schemas.html"
  },
  {
    "slug": "json-schema",
    "explain": {
      "fr": "JSON Schema définit des contraintes descriptives et de validation sur des données JSON. Il permet de communiquer des types, champs attendus et structures aux consommateurs d’une API.",
      "en": "JSON Schema defines descriptive and validation constraints on JSON data. It communicates types, expected fields and structures to API consumers."
    },
    "use": {
      "fr": "Vérifier le format d’un outil d’agent déclarant un objet de paramètres, indépendamment de l’algorithme exécuté.",
      "en": "Validate an agent tool input object independently of the implemented algorithm."
    },
    "limit": {
      "fr": "Une donnée conforme au schéma peut rester fausse ou dangereuse ; prévoir une validation métier et d’autorisation.",
      "en": "Schema-valid data can still be false or unsafe; include business and authorization checks."
    },
    "docs": "https://json-schema.org/learn/getting-started-step-by-step"
  },
  {
    "slug": "openapi",
    "explain": {
      "fr": "OpenAPI permet de décrire de manière structurée des services HTTP, leurs opérations, paramètres et réponses. La documentation machine-readable favorise l’outillage et la génération de clients.",
      "en": "OpenAPI describes HTTP services, their operations, parameters and responses in machine-readable form. It supports documentation tooling and client generation."
    },
    "use": {
      "fr": "Documenter une API de consultation WebAI avec routes, paramètres, codes d’erreur et schémas de réponse.",
      "en": "Document a WebAI retrieval API with routes, parameters, error codes and response schemas."
    },
    "limit": {
      "fr": "Décrire une opération ne lui confère pas d’autorisation et n’assure pas l’innocuité des données traitées.",
      "en": "Describing an operation does not authorize it or ensure handled data is safe."
    },
    "docs": "https://github.com/OAI/OpenAPI-Specification"
  },
  {
    "slug": "trafilatura",
    "explain": {
      "fr": "Trafilatura extrait des éléments textuels et métadonnées à partir de pages Web. Son utilisation doit préserver les références et respecter les politiques de collecte et les droits.",
      "en": "Trafilatura extracts text and metadata from Web pages. Use should preserve citations and respect crawl policies and content rights."
    },
    "use": {
      "fr": "Préparer un corpus RAG en gardant URL d’origine, date de consultation, titre et extraits utilisés.",
      "en": "Prepare a RAG corpus retaining original URL, access date, title and used excerpts."
    },
    "limit": {
      "fr": "L’extraction peut omettre des éléments ou perdre le contexte ; vérifier les licences et la qualité du texte obtenu.",
      "en": "Extraction may omit elements or context; verify rights and output quality."
    },
    "docs": "https://github.com/adbar/trafilatura"
  },
  {
    "slug": "browser-use",
    "explain": {
      "fr": "Browser Use propose des éléments logiciels pour piloter des navigateurs par des agents. C’est une solution d’expérimentation à entourer de confirmations et de permissions minimales.",
      "en": "Browser Use offers software for agents controlling browser workflows. It is best explored with explicit confirmations and least-privilege permissions."
    },
    "use": {
      "fr": "Faire naviguer un agent dans un formulaire fictif sans envoi réel de données, puis auditer les actions demandées.",
      "en": "Let an agent navigate a fictional form without submitting real data, then audit requested actions."
    },
    "limit": {
      "fr": "Les pages peuvent contenir des instructions adversariales et les actions peuvent être engageantes ; isoler les tests.",
      "en": "Pages can contain adversarial instructions and actions may have consequences; isolate testing."
    },
    "docs": "https://docs.browser-use.com/"
  },
  {
    "slug": "chrome-ai",
    "explain": {
      "fr": "Les APIs IA intégrées de Chrome donnent accès à certaines fonctions gérées par le navigateur, notamment pour traduire, détecter une langue ou résumer selon les versions. Leur disponibilité varie.",
      "en": "Chrome built-in AI APIs offer browser-managed features such as translation, language detection or summarization depending on version. Availability varies."
    },
    "use": {
      "fr": "Tester un résumé local avec détection de capacité et une alternative sans IA pour les navigateurs non compatibles.",
      "en": "Test local summarization with feature detection and a non-AI fallback for unsupported browsers."
    },
    "limit": {
      "fr": "Ne pas promettre un support universel ou une conservation locale sans examiner l’API et le matériel réels.",
      "en": "Avoid claims of universal support or local processing without checking the actual API and device."
    },
    "docs": "https://developer.chrome.com/docs/ai/get-started"
  },
  {
    "slug": "webnn-api",
    "explain": {
      "fr": "WebNN décrit une interface de calcul neuronal destinée aux navigateurs, pouvant exploiter du matériel accéléré. Il s’agit d’une API de bas niveau, non d’un chatbot complet.",
      "en": "WebNN describes a neural computation interface for browsers that may use hardware acceleration. It is a lower-level API rather than a complete chatbot."
    },
    "use": {
      "fr": "Comparer la disponibilité de WebNN selon navigateurs et machines sur une même tâche de classification.",
      "en": "Compare WebNN availability across browsers and machines on the same classification task."
    },
    "limit": {
      "fr": "Les opérateurs, la précision et la prise en charge diffèrent selon les implémentations ; prévoir une alternative.",
      "en": "Operators, precision and implementation support vary; provide a fallback."
    },
    "docs": "https://www.w3.org/TR/webnn/"
  }
];
