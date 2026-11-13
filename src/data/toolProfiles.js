import {toolProfilesA} from './toolProfilesA.js';
import {toolProfilesB} from './toolProfilesB.js';

const ref=(fr,en,url)=>({label:{fr,en},url});
/** References below cover the category, not a claim that they endorse a given product. */
export const toolDomains={
 creation:{
  context:{fr:'La conception d’un portail d’IA ne consiste pas seulement à générer une interface. Elle demande des ressources durables, des contenus réellement utilisables sans modèle, une information accessible, des tests de performance et une chaîne de validation avant publication.',en:'Building an AI-enabled portal is not just generating an interface. It requires durable resources, content usable without a model, accessibility, performance checks and an editorial release workflow.'},
  questions:{fr:['Le contenu reste-t-il utile sans modèle IA ?','La solution produit-elle un HTML accessible et indexable ?','Les droits et données sont-ils contrôlés ?'],en:['Does the content remain useful without AI?','Is the HTML accessible and indexable?','Are rights and data governed?']},
  refs:[ref('WHATWG · Standard HTML','WHATWG HTML Standard','https://html.spec.whatwg.org/'),ref('W3C · Accessibilité WCAG 2.2','W3C WCAG 2.2 accessibility','https://www.w3.org/TR/WCAG22/')]
 },
 recherche:{
  context:{fr:'Un outil de recherche ou de récupération documentaire doit être évalué sur la qualité des résultats, la couverture, la fidélité aux textes, le respect des droits et la possibilité de vérifier chaque affirmation. Un moteur d’indexation n’est pas nécessairement un générateur.',en:'Search and retrieval tools should be evaluated for result relevance, coverage, evidence fidelity, rights and the ability to check each claim. Indexing does not automatically imply generation.'},
  questions:{fr:['Quelles données sont indexées et avec quels droits ?','La réponse cite-t-elle réellement le passage pertinent ?','La récupération et la synthèse sont-elles évaluées séparément ?'],en:['Which data and rights govern the index?','Does each citation truly support the claim?','Are retrieval and synthesis assessed separately?']},
  refs:[ref('Étude originale · RAG','Original research · RAG','https://arxiv.org/abs/2005.11401'),ref('W3C · Données liées JSON-LD','W3C · Linked data JSON-LD','https://www.w3.org/TR/json-ld11/')]
 },
 local:{
  context:{fr:'Le traitement local déplace le coût du serveur vers le navigateur ou le poste. Il faut mesurer la compatibilité, la mémoire, la taille du modèle, la consommation, le temps de réponse et la disponibilité d’un repli lorsque les capacités manquent.',en:'Local inference shifts part of the cost from servers to the browser or device. Measure support, memory, model download size, power, latency and a working fallback.'},
  questions:{fr:['La tâche s’exécute-t-elle effectivement sur le terminal ?','Quels matériels et navigateurs sont requis ?','Que se passe-t-il hors ligne ou sans accélération ?'],en:['Does inference really happen on-device?','Which browsers and hardware are required?','What happens offline or without acceleration?']},
  refs:[ref('W3C · WebGPU','W3C WebGPU','https://www.w3.org/TR/webgpu/'),ref('Chrome · APIs IA intégrées','Chrome built-in AI API documentation','https://developer.chrome.com/docs/ai/built-in-apis')]
 },
 modeles:{
  context:{fr:'Un répertoire de modèles aide à comparer les tâches, versions, données déclarées, licences et évaluations. Les fiches produites par les fournisseurs restent des déclarations à examiner et non une certification scientifique indépendante.',en:'Model directories help compare tasks, revisions, declared data, licenses and evaluations. Vendor-supplied cards are claims to inspect, not independent scientific certification.'},
  questions:{fr:['La carte du modèle est-elle à jour ?','Les conditions de réutilisation sont-elles claires ?','Les tests correspondent-ils au domaine visé ?'],en:['Is the model card current?','Are reuse conditions clear?','Do tests match the actual target domain?']},
  refs:[ref('Hugging Face · Model Cards','Hugging Face Model Cards','https://huggingface.co/docs/hub/model-cards'),ref('NIST · AI Risk Management Framework','NIST AI Risk Management Framework','https://www.nist.gov/itl/ai-risk-management-framework')]
 },
 multimedia:{
  context:{fr:'La génération et la présentation de médias requièrent une attention aux formats, à la fidélité de représentation, aux droits, aux métadonnées de provenance et aux alternatives accessibles. Un rendu attrayant ne garantit pas la véracité historique ou scientifique.',en:'Media generation and presentation require attention to formats, representational fidelity, rights, provenance metadata and accessible alternatives. Attractive rendering is not historical or scientific proof.'},
  questions:{fr:['Le média possède-t-il une attribution correcte ?','La provenance a-t-elle été documentée sans confondre signature et vérité ?','Existe-t-il une alternative accessible ?'],en:['Is media attribution accurate?','Is provenance documented without confusing signatures and truth?','Is there an accessible alternative?']},
  refs:[ref('C2PA · Content Credentials','C2PA Content Credentials','https://spec.c2pa.org/'),ref('W3C · WCAG 2.2','W3C WCAG 2.2','https://www.w3.org/TR/WCAG22/')]
 },
 agents:{
  context:{fr:'Les outils d’agents doivent être documentés en distinguant découverte, invocation, résultat, autorisation et traçabilité. Le protocole de communication ne garantit pas à lui seul les permissions ni la sécurité d’une action.',en:'Agent tools must distinguish discovery, invocation, outcomes, authorization and audit trails. A communication protocol alone does not ensure permission or safe execution.'},
  questions:{fr:['Quelle opération est réellement autorisée ?','L’action exige-t-elle confirmation humaine ?','La sortie externe peut-elle contenir une injection de consignes ?'],en:['Which operation is actually authorized?','Is human approval required?','Can external output carry prompt injection?']},
  refs:[ref('MCP · Spécification officielle','MCP official specification','https://modelcontextprotocol.io/specification/2026-07-28'),ref('OWASP · Injection de prompts','OWASP prompt injection guidance','https://genai.owasp.org/llmrisk/llm01-prompt-injection/')]
 },
 automatisation:{
  context:{fr:'Les chaînes automatisées ont besoin de permissions minimales, d’un historique des changements, de contrôles d’échec et d’une revue avant action sensible. Une tâche réussie du point de vue technique peut rester inappropriée sur le plan éditorial.',en:'Automated workflows need minimum permissions, change history, failure handling and review before consequential actions. Technical execution success does not establish editorial appropriateness.'},
  questions:{fr:['Les actions sont-elles réversibles ?','Les secrets sont-ils protégés ?','Les erreurs bloquent-elles la publication ?'],en:['Are actions reversible?','Are credentials protected?','Do failures block publishing?']},
  refs:[ref('OpenTelemetry · Observabilité','OpenTelemetry observability','https://opentelemetry.io/docs/'),ref('OWASP · Risques Web','OWASP Top 10','https://owasp.org/Top10/')]
 },
 evaluation:{
  context:{fr:'Les mesures de qualité doivent porter sur des jeux de test représentatifs avec versions, conditions de comparaison et classes d’erreurs. Un score unique peut dissimuler les échecs importants pour l’accessibilité, la sécurité ou la fidélité documentaire.',en:'Quality measurement needs representative test sets, versions, comparative conditions and error categories. A single score can hide serious failures of accessibility, security or evidence faithfulness.'},
  questions:{fr:['Les jeux de test sont-ils reproductibles ?','Quels cas échoués ont été conservés ?','Une revue humaine complète-t-elle les métriques ?'],en:['Can evaluations be reproduced?','Which failures are retained?','Does human review complement metrics?']},
  refs:[ref('NIST · Gestion des risques IA','NIST AI risk management','https://www.nist.gov/itl/ai-risk-management-framework'),ref('W3C · WCAG 2.2','W3C WCAG 2.2','https://www.w3.org/TR/WCAG22/')]
 },
 confiance:{
  context:{fr:'Les outils de provenance et de confiance doivent exposer le périmètre de leurs résultats. Valider une signature ou un format ne prouve ni l’identité de tous les acteurs ni la véracité des événements représentés.',en:'Provenance and trust tools should clearly define what their results cover. Validating a signature or file format does not prove every actor identity or the factual truth of depicted events.'},
  questions:{fr:['Quel élément exact est attesté ?','Une preuve indépendante est-elle disponible ?','Que signifie l’absence d’une métadonnée ?'],en:['Which exact claim is attested?','Is independent evidence available?','What does missing metadata mean?']},
  refs:[ref('C2PA · Spécifications','C2PA specifications','https://spec.c2pa.org/'),ref('NIST · Risques IA générative','NIST generative AI risk profile','https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence')]
 },
 standards:{
  context:{fr:'Les normes et schémas précisent la structure d’échanges entre systèmes. Il importe de lire le statut réel du document, les profils pris en charge et les garanties qui relèvent d’autres composants comme l’authentification.',en:'Standards and schemas define structures exchanged by systems. Read the document status, supported profiles and guarantees that still depend on other components such as authentication.'},
  questions:{fr:['Le document est-il une recommandation ou un brouillon ?','Les implémentations sont-elles interopérables ?','Les permissions sont-elles définies hors du schéma ?'],en:['Is it a recommendation or draft?','Do implementations interoperate?','Are permissions defined outside the schema?']},
  refs:[ref('W3C · JSON-LD 1.1','W3C JSON-LD 1.1','https://www.w3.org/TR/json-ld11/'),ref('WHATWG · HTML Living Standard','WHATWG HTML Living Standard','https://html.spec.whatwg.org/')]
 }
};
export const toolProfiles=Object.fromEntries([...toolProfilesA,...toolProfilesB].map(p=>[p.slug,p]));
export const enrichTool=(tool)=>{
 const profile=toolProfiles[tool.slug];
 if(!profile)return {...tool,profile:null};
 const domain=toolDomains[tool.category]??toolDomains.creation;
 return {...tool,profile:{
   ...profile,context:domain.context,questions:domain.questions,
   references:[
      {label:{fr:'Documentation technique et exemples',en:'Technical documentation and examples'},url:profile.docs,kind:'documentation'},
      ...domain.refs.map(r=>({...r,kind:'reference'}))
   ],
   reviewed:false,updated_at:'2026-11-13'
 }};
};
