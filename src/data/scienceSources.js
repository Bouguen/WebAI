export const scienceSources=[
  {
    "name": "ReAct — Reasoning and Acting (2022)",
    "category": "recherche",
    "desc": {
      "fr": "Étude de l’articulation entre production de plans et interactions avec des sources ou environnements. Elle aide à comprendre les agents utilisant des outils, sans établir une robustesse générale.",
      "en": "Study of combining reasoning traces and actions involving sources or environments. Useful for explaining tool-using agents without establishing general robustness."
    },
    "url": "https://arxiv.org/abs/2210.03629",
    "publication_year": 2022,
    "paper_status": "preprint",
    "method": {
      "fr": "Comparer les étapes de raisonnement rapportées et les interactions externes, puis examiner les succès comme les échecs dans les tâches expérimentales.",
      "en": "Compare reported reasoning steps and external interactions, then inspect successes and failures on the evaluated tasks."
    },
    "limits": {
      "fr": "Les résultats du papier dépendent d’environnements et modèles précis et ne garantissent ni sécurité ni fiabilité des agents actuels.",
      "en": "Results depend on particular environments and models, not a guarantee of safety or reliability for current agents."
    },
    "field": "agents"
  },
  {
    "name": "Toolformer — Language Models Using Tools (2023)",
    "category": "recherche",
    "desc": {
      "fr": "Travail NeurIPS sur l’apprentissage du recours à des outils externes par des modèles de langage. Le périmètre expérimental concerne certaines APIs et tâches ciblées.",
      "en": "NeurIPS work on learning to call external tools from language models. Experiments focus on selected APIs and tasks."
    },
    "url": "https://papers.neurips.cc/paper_files/paper/2023/hash/d842425e4bf79ba039352da0f658a906-Abstract-Conference.html",
    "publication_year": 2023,
    "paper_status": "published",
    "method": {
      "fr": "Observer comment la sélection d’outil, ses arguments et son résultat s’intègrent à une réponse, puis mesurer les erreurs de sélection.",
      "en": "Study tool selection, arguments and outputs within a response, then measure incorrect choices."
    },
    "limits": {
      "fr": "L’usage d’une API par un modèle ne suffit pas à établir autorisation, qualité de données ou conformité des systèmes déployés.",
      "en": "Model tool use alone does not establish authorization, data quality or deployed-system compliance."
    },
    "field": "agents"
  },
  {
    "name": "Lost in the Middle — Long Context (2024)",
    "category": "recherche",
    "desc": {
      "fr": "Étude publiée dans TACL montrant que la position d’informations pertinentes dans un long contexte peut influencer leur exploitation par des modèles. Important pour concevoir le RAG et tester les passages récupérés.",
      "en": "Published TACL study showing that position of relevant information in long contexts can affect model use. Important for RAG design and testing retrieved passages."
    },
    "url": "https://aclanthology.org/2024.tacl-1.9/",
    "publication_year": 2024,
    "paper_status": "published",
    "method": {
      "fr": "Comparer des tâches avec passage utile au début, au milieu et à la fin, en conservant les autres paramètres.",
      "en": "Compare tasks with key evidence at the beginning, middle and end while holding other variables constant."
    },
    "limits": {
      "fr": "Les effets varient selon le modèle, la tâche et la longueur de contexte ; ne pas transférer mécaniquement les résultats à tous les systèmes.",
      "en": "Effects vary with model, task and context length; do not mechanically generalize to every system."
    },
    "field": "recherche"
  },
  {
    "name": "WebArena — Realistic Web Agents (2023)",
    "category": "recherche",
    "desc": {
      "fr": "Environnement expérimental auto-hébergeable proposant des tâches Web réalistes pour mesurer l’aptitude d’agents à mener des actions. Les évaluations sont contextualisées par les sites et scénarios du banc d’essai.",
      "en": "Self-hostable research environment with realistic Web tasks for evaluating agents’ ability to complete actions. Findings depend on benchmark sites and scenarios."
    },
    "url": "https://webarena.dev/og/",
    "publication_year": 2023,
    "paper_status": "preprint",
    "method": {
      "fr": "Utiliser des tâches reproductibles et vérifier l’état final du site, plutôt que noter uniquement la qualité des textes produits.",
      "en": "Use reproducible tasks and check the website’s final state rather than scoring generated prose alone."
    },
    "limits": {
      "fr": "Un benchmark ne reproduit pas toutes les permissions et ambiguïtés d’un site public, ni les coûts d’une application réelle.",
      "en": "Benchmarks cannot capture every public-site permission, ambiguity or real deployment cost."
    },
    "field": "recherche"
  },
  {
    "name": "VisualWebArena — Visual Web Tasks (2024)",
    "category": "recherche",
    "desc": {
      "fr": "Environnement de tâches Web dans lesquelles la perception visuelle complète l’interprétation textuelle. Il aide à évaluer les agents qui naviguent dans des interfaces destinées aux humains.",
      "en": "Web benchmark where visual perception complements text interpretation, supporting evaluation of agents navigating human-facing interfaces."
    },
    "url": "https://arxiv.org/abs/2401.13649",
    "publication_year": 2024,
    "paper_status": "preprint",
    "method": {
      "fr": "Comparer les succès d’agents multimodaux sur des tâches nécessitant une information visuelle difficile à retrouver dans le texte.",
      "en": "Compare multimodal agent success on tasks requiring visual information not easily available from text alone."
    },
    "limits": {
      "fr": "Les résultats ne démontrent pas automatiquement la qualité d’accès pour les personnes handicapées ou les performances en production.",
      "en": "Results do not automatically establish accessibility for disabled people or performance in production."
    },
    "field": "recherche"
  },
  {
    "name": "OSWorld — Computer Use Benchmark (2024)",
    "category": "recherche",
    "desc": {
      "fr": "Banc d’essai de tâches informatiques impliquant plusieurs applications et états de système. Il illustre la difficulté de réussir des opérations réelles malgré des interfaces apparemment compréhensibles.",
      "en": "Benchmark of computer tasks spanning applications and system states, illustrating the difficulty of reliably completing real operations."
    },
    "url": "https://arxiv.org/abs/2404.07972",
    "publication_year": 2024,
    "paper_status": "preprint",
    "method": {
      "fr": "Comparer les versions des environnements, les critères de réussite et les contrôles d’état final, sans reporter des scores historiques comme performances actuelles.",
      "en": "Compare environment versions, success criteria and final-state checks without presenting historical scores as current results."
    },
    "limits": {
      "fr": "Le benchmark connaît des évolutions ; les scores issus de versions ou jeux de tâches différents ne sont pas directement comparables.",
      "en": "The benchmark evolves; results from different versions or task sets may not be directly comparable."
    },
    "field": "recherche"
  },
  {
    "name": "RAGAS — RAG Evaluation (2023)",
    "category": "recherche",
    "desc": {
      "fr": "Proposition d’évaluation de systèmes RAG sur plusieurs dimensions, notamment récupération des passages et fidélité de la génération. Les métriques automatiques demandent une validation appropriée.",
      "en": "Research on evaluating RAG systems along dimensions including passage retrieval and generated-answer faithfulness. Automated metrics require validation."
    },
    "url": "https://arxiv.org/abs/2309.15217",
    "publication_year": 2023,
    "paper_status": "preprint",
    "method": {
      "fr": "Composer une grille avec pertinence du contexte, fidélité et qualité de réponse sur des exemples annotés.",
      "en": "Build an evaluation sheet of context relevance, faithfulness and answer quality on annotated examples."
    },
    "limits": {
      "fr": "Les évaluations automatiques peuvent être instables ou manquer des erreurs de fond ; les comparaisons exigent des tests humains.",
      "en": "Automated judges may be inconsistent or miss substantive errors; comparisons benefit from human checks."
    },
    "field": "recherche"
  },
  {
    "name": "GEO — Generative Engine Optimization (2023)",
    "category": "recherche",
    "desc": {
      "fr": "Étude de stratégies et métriques de visibilité dans des moteurs de recherche génératifs. Les résultats portent sur des configurations d’essai, pas sur des garanties de classement universelles.",
      "en": "Study of strategies and visibility metrics in generative search engines. Results apply to experimental settings, not guaranteed universal rankings."
    },
    "url": "https://arxiv.org/abs/2311.09735",
    "publication_year": 2023,
    "paper_status": "preprint",
    "method": {
      "fr": "Comparer les mesures définies par les auteurs à des observations actuelles d’un site donné, en distinguant domaine, langue et interface.",
      "en": "Compare the authors’ metrics with actual observations for a given website, accounting for domain, language and interface."
    },
    "limits": {
      "fr": "Des effets expérimentaux ne prouvent pas que llms.txt ou une technique particulière est obligatoire pour les moteurs actuels.",
      "en": "Experimental effects do not prove llms.txt or a particular technique is required by current search engines."
    },
    "field": "recherche"
  },
  {
    "name": "SWE-bench — Software Agents (2024)",
    "category": "recherche",
    "desc": {
      "fr": "Étude ICLR sur des tâches de correction de code issues de problèmes de dépôts réels. Elle permet d’étudier des tests exécutables plutôt que de juger seulement des explications de code.",
      "en": "ICLR benchmark of code repair tasks derived from real repository issues, using executable checks rather than prose evaluation alone."
    },
    "url": "https://proceedings.iclr.cc/paper_files/paper/2024/hash/edac78c3e300629acfe6cbe9ca88fb84-Abstract-Conference.html",
    "publication_year": 2024,
    "paper_status": "published",
    "method": {
      "fr": "Examiner les tests échouant avant une modification et passant après, tout en contrôlant les régressions et les droits sur le code.",
      "en": "Inspect tests failing before a patch and passing afterward, while checking regressions and code rights."
    },
    "limits": {
      "fr": "Les résultats historiques ne représentent pas les capacités de tous les assistants ni la qualité de maintenance d’un logiciel déployé.",
      "en": "Historical scores do not represent all assistants or deployed software maintainability."
    },
    "field": "recherche"
  },
  {
    "name": "AgentDojo — Prompt Injection Evaluation",
    "category": "recherche",
    "desc": {
      "fr": "Environnement de recherche pour analyser les injections de consignes et les défenses dans des agents utilisant des outils. Il distingue les attaques simulées des incidents réellement observés.",
      "en": "Research environment for assessing prompt injections and defenses in tool-using agents. It separates simulated attacks from observed incidents."
    },
    "url": "https://agentdojo.spylab.ai/",
    "publication_year": 2024,
    "paper_status": "project",
    "method": {
      "fr": "Construire des tests contrôlés avec actions inoffensives, outils limités et journalisation des réussites comme des refus incorrects.",
      "en": "Build controlled tests with harmless actions, limited tool permissions and logs of both attack successes and incorrect refusals."
    },
    "limits": {
      "fr": "La réussite sur un jeu d’attaque ne démontre pas l’immunité face à de nouvelles variantes ou à des systèmes différents.",
      "en": "Passing a set of attack cases does not establish immunity to new variants or different systems."
    },
    "field": "confiance"
  }
];
