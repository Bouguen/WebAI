
const bi=(fr,en)=>({fr,en});
const sourceRows=[
['MCP 2026 specification','agents','Spécification de juillet 2026 : capacités et sécurité.','July 2026 specification: capabilities and security.','https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/specification/2026-07-28/basic/index.mdx'],
['A2A Agent Card specification','agents','Découverte d’agents et description des capacités.','Agent discovery and capability descriptions.','https://a2a-protocol.org/latest/specification/agent-card/'],
['WebMCP Community Draft','standards','Brouillon communautaire, pas une recommandation W3C.','Community draft, not a W3C Recommendation.','https://webmachinelearning.github.io/webmcp/'],
['Google AI Search guidance','decouverte','Conseils officiels sur les résultats de recherche génératifs.','Official guidance for generative search results.','https://developers.google.com/search/docs/appearance/ai-features'],
['Google AI optimization guide','decouverte','Précisions sur llms.txt et le balisage IA.','Clarification on llms.txt and special AI markup.','https://developers.google.com/search/docs/fundamentals/ai-optimization-guide'],
['Google crawlers and Extended','decouverte','Règles de crawl et jetons aux finalités différentes.','Crawler controls and tokens with distinct purposes.','https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers'],
['OpenAI crawler docs','decouverte','OAI-SearchBot, GPTBot et préférences de crawl.','OAI-SearchBot, GPTBot and crawl preferences.','https://developers.openai.com/api/docs/bots'],
['Chrome built-in AI APIs','standards','APIs IA du navigateur et limites de disponibilité.','Built-in browser AI APIs and availability limits.','https://developer.chrome.com/docs/ai/built-in'],
['WebNN introduction','standards','Calcul neuronal accéléré côté navigateur.','Accelerated neural computation in browsers.','https://webmachinelearning.github.io/webnn-intro/'],
['C2PA 2.3','confiance','Provenance des médias, version décembre 2025.','Media provenance, December 2025 version.','https://spec.c2pa.org/specifications/specifications/2.3/specs/C2PA_Specification'],
['OWASP prompt injection','confiance','Injection de consignes issues de contenus non fiables.','Instruction injection from untrusted content.','https://genai.owasp.org/llmrisk/llm01-prompt-injection/'],
['NIST Generative AI RMF','confiance','Cadre volontaire de gestion des risques IA générative.','Voluntary generative AI risk management framework.','https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence'],
['EU AI Act consolidated','reglementation','Texte juridique consolidé et article 50.','Consolidated legal text and Article 50.','https://eur-lex.europa.eu/eli/reg/2024/1689'],
['Web.dev AI','recherche','Conception responsable et Web destiné aux agents.','Responsible AI design and agent-friendly Web.','https://web.dev/explore/ai'],
['RAG foundation paper','recherche','Publication fondatrice de Lewis et al. (2020).','Foundational paper by Lewis et al. (2020).','https://arxiv.org/abs/2005.11401'],
['WebGPU 2026','standards','Draft de recommandation candidate W3C.','W3C Candidate Recommendation Draft.','https://www.w3.org/TR/webgpu/'],
['WCAG 2.2 French','standards','Traduction française agréée des règles d’accessibilité.','Authorized French accessibility translation.','https://www.w3.org/Translations/WCAG22-fr-20250317/']
];
export const researchSources=sourceRows.map(([name,category,fr,en,url])=>({name,category,desc:bi(fr,en),url}));
const toolRows=[
['mcp-inspector','agents','MCP Inspector','Inspecter et déboguer les échanges avec des serveurs MCP.','Inspect and debug MCP server exchanges.','https://github.com/modelcontextprotocol/inspector','open-source','dev'],
['onnxruntime-web','local','ONNX Runtime Web','Inférence ONNX dans des navigateurs compatibles.','ONNX inference in compatible browsers.','https://onnxruntime.ai/docs/tutorials/web/','open-source','dev'],
['tensorflow-js','local','TensorFlow.js','Machine learning avec JavaScript.','Machine learning with JavaScript.','https://www.tensorflow.org/js','open-source','dev'],
['mediapipe','local','MediaPipe','Solutions d’inférence et vision sur appareils.','On-device inference and vision solutions.','https://ai.google.dev/edge/mediapipe/solutions/guide','open-source','dev'],
['ragas','evaluation','Ragas','Évaluer les chaînes RAG.','Evaluate RAG pipelines.','https://docs.ragas.io/','open-source','research'],
['langfuse','evaluation','Langfuse','Traces et évaluation d’applications à modèles.','Traces and evaluation for model applications.','https://langfuse.com/docs','source-disponible','dev'],
['opentelemetry','evaluation','OpenTelemetry','Traces et métriques d’observabilité.','Observability traces and metrics.','https://opentelemetry.io/docs/','open-source','dev'],
['schema-org','standards','Schema.org','Vocabulaire de données structurées pour le Web.','Structured Web data vocabulary.','https://schema.org/','ressource','creator'],
['json-schema','standards','JSON Schema','Description et validation des structures JSON.','JSON structure description and validation.','https://json-schema.org/','open-source','dev'],
['openapi','standards','OpenAPI','Décrire les interfaces et opérations HTTP.','Describe HTTP interfaces and operations.','https://spec.openapis.org/oas/latest.html','open-source','dev'],
['trafilatura','recherche','Trafilatura','Extraction de contenu de pages Web.','Web page content extraction.','https://trafilatura.readthedocs.io/','open-source','research'],
['browser-use','agents','Browser Use','Expérimenter des agents de navigation.','Experiment with browsing agents.','https://github.com/browser-use/browser-use','open-source','dev'],
['chrome-ai','local','Chrome Built-in AI','Documentation des APIs IA du navigateur.','Browser AI API documentation.','https://developer.chrome.com/docs/ai/built-in','ressource','dev'],
['webnn-api','local','WebNN API','Documentation du calcul neuronal accéléré.','Accelerated neural computation documentation.','https://webmachinelearning.github.io/webnn-intro/','ressource','dev']
];
export const researchCatalog=toolRows.map(([slug,category,name,fr,en,url,kind,audience])=>({slug,category,name,desc:bi(fr,en),url,kind,audience}));
const termRows=[
['AgentCard','Agent card','Description structurée des capacités d’un agent A2A.','Structured description of A2A agent capabilities.','agents'],
['WebMCP','WebMCP','Proposition d’API d’outils JavaScript destinés aux agents.','Proposed API for JavaScript tools exposed to agents.','agents'],
['llms.txt','llms.txt','Convention proposée, non exigée par Google Search.','Proposed convention, not required by Google Search.','decouverte'],
['GEO','Generative engine optimization','Optimisation de découvrabilité sans garantie de classement.','Discovery optimization without ranking guarantees.','decouverte'],
['OAI-SearchBot','OAI-SearchBot','Robot pour la recherche ChatGPT.','Crawler for ChatGPT search.','decouverte'],
['GPTBot','GPTBot','Jeton de robot lié à la collecte pour l’entraînement.','Crawler token for training collection.','decouverte'],
['Google-Extended','Google-Extended','Jeton de préférence Google pour certains usages IA.','Google preference token for certain AI uses.','decouverte'],
['Fidélité documentaire','Groundedness','Lien vérifiable entre réponse et preuves.','Verifiable link between an answer and evidence.','evaluation'],
['Abstention','Abstention','Signalement de preuve insuffisante au lieu d’inventer.','Acknowledging missing evidence instead of fabricating.','evaluation'],
['Frontière de confiance','Trust boundary','Séparation entre instructions et contenus externes.','Separation between instructions and external content.','securite'],
['Injection indirecte','Indirect prompt injection','Instruction hostile dans un contenu récupéré.','Hostile instruction inside retrieved content.','securite'],
['Contrôle humain','Human oversight','Vérification explicite des actions sensibles.','Explicit oversight for sensitive actions.','agents'],
['Privilège minimal','Least privilege','Droits limités au besoin réel.','Permissions scoped to actual needs.','securite'],
['Inférence locale','On-device inference','Exécution du modèle sur le terminal.','Running the model on the device.','local'],
['WebNN','WebNN','API pour le calcul neuronal accéléré.','API for accelerated neural computation.','local'],
['WebGPU','WebGPU','API de calcul et de rendu sur GPU.','GPU computation and rendering API.','local'],
['APIs IA natives','Built-in AI APIs','Fonctions IA gérées par le navigateur.','Browser-managed AI capabilities.','local'],
['JSON-LD','JSON-LD','Données liées à l’aide d’un contexte JSON.','Linked data using a JSON context.','standards'],
['Manifeste C2PA','C2PA manifest','Déclarations signées sur l’historique du média.','Signed assertions on media history.','confiance'],
['Preuve de provenance','Provenance evidence','Historique technique distinct de la vérité factuelle.','Technical history distinct from factual truth.','confiance'],
['Validation éditoriale','Editorial review','Relecture humaine des sources, droits et formulations.','Human review of sources, rights and wording.','confiance'],
['Article 50 du règlement IA','AI Act Article 50','Obligations européennes de transparence pour certains contenus.','EU transparency requirements for certain content.','reglementation'],
['Accessibilité cognitive','Cognitive accessibility','Conception claire et prévisible pour les utilisateurs.','Clear and predictable interaction design.','accessibilite'],
['Mode de repli','Fallback','Alternative si une API ou un modèle est indisponible.','Alternative when an API or model is unavailable.','local'],
['IA frugale','Right-sized AI','Solution proportionnée à la tâche et aux ressources.','Solution proportionate to task and resources.','environnement']
];
export const researchGlossary=termRows.map(([fr,en,frDesc,enDesc,category])=>({fr,en,definition:bi(frDesc,enDesc),category}));
