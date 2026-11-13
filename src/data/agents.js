
import {agentProducts} from './agentsProducts.js';
import {agentFrameworks} from './agentsFrameworks.js';

export const agentDirectory=[...agentProducts,...agentFrameworks];
export const agentBySlug=Object.fromEntries(agentDirectory.map(agent=>[agent.slug,agent]));
export const agentCategories={
 general:{fr:'Travail et recherche',en:'Work and research'},
 browser:{fr:'Navigation Web',en:'Web navigation'},
 coding:{fr:'Développement logiciel',en:'Software engineering'},
 orchestration:{fr:'Orchestration multi-agents',en:'Multi-agent orchestration'},
 framework:{fr:'SDK et frameworks',en:'SDKs and frameworks'},
 workflow:{fr:'Workflows visuels',en:'Visual workflows'}
};
export const agentKinds={
 pret:{fr:'Agent prêt à utiliser',en:'Ready-to-use agent'},
 creation:{fr:'Framework ou plateforme de création',en:'Agent building framework or platform'}
};
export const agentGuides=[
 {
 title:{fr:'Choisir un agent existant',en:'Select a ready-to-use agent'},
 audience:{fr:'Utilisateurs et équipes',en:'Users and teams'},
 intro:{fr:'Commencez par le résultat attendu, pas par la promesse marketing : recherche sourcée, programmation, navigation ou production de livrables. Un assistant de conversation n’est pas nécessairement un agent qui exécute des actions.',en:'Start with the outcome rather than marketing language: sourced research, coding, browsing or deliverables. A conversational assistant is not necessarily an agent that executes actions.'},
 steps:[
 {fr:'Décrire une tâche réversible et son résultat vérifiable',en:'Describe a reversible task and its verifiable outcome'},
 {fr:'Vérifier le mode réellement proposé et les conditions d’accès',en:'Confirm actual mode availability and access terms'},
 {fr:'Limiter les documents, comptes et permissions autorisés',en:'Limit permitted documents, accounts and permissions'},
 {fr:'Observer les étapes et refuser les actions non demandées',en:'Monitor steps and reject unauthorized actions'},
 {fr:'Contrôler le résultat final et conserver les sources',en:'Check the final result and retain evidence'}
 ],
 source:'https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents'
 },
 {
 title:{fr:'Construire un agent pour le Web',en:'Build an agent for the Web'},
 audience:{fr:'Développeurs et architectes',en:'Developers and architects'},
 intro:{fr:'Un agent personnalisé combine consignes, modèle, outils et politique d’autorisation. Le framework ne garantit ni la sécurité des outils ni l’exactitude du modèle : ces aspects se conçoivent et s’évaluent.',en:'A custom agent combines instructions, a model, tools and authorization policy. A framework cannot guarantee safe tool use or factual accuracy: those must be designed and evaluated.'},
 steps:[
 {fr:'Choisir une seule tâche et la décomposer en opérations',en:'Choose one job and break it into operations'},
 {fr:'Définir les entrées, sorties et schémas des outils',en:'Define tool inputs, outputs and schemas'},
 {fr:'Limiter les droits et isoler les données externes non fiables',en:'Limit permissions and isolate untrusted external data'},
 {fr:'Ajouter une confirmation avant les actions importantes',en:'Require approval before consequential actions'},
 {fr:'Mesurer erreurs, coûts, reproductibilité et cas sans réponse',en:'Measure failures, costs, reproducibility and no-answer cases'}
 ],
 source:'https://openai.github.io/openai-agents-python/'
 }
];
export const agentFaq=[
 {q:{fr:'Quelle différence entre chatbot et agent IA ?',en:'How does an AI agent differ from a chatbot?'},a:{fr:'Un chatbot peut principalement dialoguer et répondre. Un agent vise un objectif en plusieurs étapes, choisit ou invoque des outils et peut évaluer le résultat d’une action. Certains produits combinent les deux modes.',en:'A chatbot primarily converses and answers. An agent pursues a multi-step goal, calls tools and may inspect action outcomes. Products may combine both experiences.'},source:'https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents'},
 {q:{fr:'Une plateforme de création est-elle un agent utilisable directement ?',en:'Is an agent-building platform a ready-to-use agent?'},a:{fr:'Non, pas nécessairement. LangGraph, CrewAI ou les SDK fournissent un environnement pour développer des agents. Les modèles, outils, autorisations, infrastructure et évaluations restent à configurer.',en:'Not necessarily. LangGraph, CrewAI and SDKs provide development frameworks. Models, tools, permissions, infrastructure and evaluation still need configuration.'},source:'https://docs.langchain.com/oss/python/langgraph/overview'},
 {q:{fr:'Peut-on exécuter un agent gratuitement ?',en:'Can agents be used for free?'},a:{fr:'Cela dépend de chaque produit, de son mode d’hébergement et du modèle choisi. Certains logiciels sont ouverts ou proposent des offres sans frais, mais l’inférence, les connexions, les quotas et l’hébergement peuvent être facturés. Toujours consulter les conditions officielles au moment de l’utilisation.',en:'It depends on the product, hosting and model. Some are open source or offer free tiers, but inference, integrations, usage quotas and hosting may be billed. Always check current official terms.'},source:'https://jules.google/docs/faq/'},
 {q:{fr:'Un agent peut-il agir sans risque sur mes comptes ?',en:'Can an agent safely operate my accounts without risk?'},a:{fr:'Non. Accorder à un agent un accès Web, des outils ou des identifiants crée de nouveaux risques : action non souhaitée, contenu malveillant rencontré sur une page, fuite de données ou erreur. Limitez les permissions et exigez une confirmation des opérations importantes.',en:'No. Web, tool and account access introduce risks: unintended actions, malicious page content, data leakage and errors. Limit permissions and require approval for consequential operations.'},source:'https://genai.owasp.org/llmrisk/llm01-prompt-injection/'},
 {q:{fr:'MCP, A2A et agents sont-ils synonymes ?',en:'Are MCP, A2A and AI agents the same thing?'},a:{fr:'Non. Un agent est un système capable de poursuivre une tâche avec des outils ; MCP décrit des échanges entre clients IA et ressources ou outils ; A2A traite de communication entre agents. Les protocoles ne garantissent pas à eux seuls la fiabilité ou les permissions.',en:'No. An agent carries out tasks using tools; MCP defines exchanges with tools and resources; A2A addresses communication between agents. Protocols alone do not ensure safety or authorization.'},source:'https://modelcontextprotocol.io/'}
];
export const agentSources=[
 {name:'GitHub Docs — About agents',url:'https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents'},
 {name:'OpenAI — Agents SDK',url:'https://openai.github.io/openai-agents-python/'},
 {name:'Anthropic — Claude Code',url:'https://code.claude.com/docs/en/overview'},
 {name:'Google — Agent Development Kit',url:'https://google.github.io/adk-docs/'},
 {name:'OWASP — Prompt injection',url:'https://genai.owasp.org/llmrisk/llm01-prompt-injection/'},
 {name:'MCP — Protocol documentation',url:'https://modelcontextprotocol.io/'}
];
