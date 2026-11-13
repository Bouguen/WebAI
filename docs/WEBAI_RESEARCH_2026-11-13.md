# WebAI — État de la recherche documentaire du 13 novembre 2026

**Projet :** portail pédagogique indépendant consacré au Web généré par et pour l'intelligence artificielle.  
**État des contenus nouveaux :** `a_verifier`, en attente de relecture scientifique, éditoriale et des droits.  
**Périmètre :** sources originales, spécifications, documentations maintenues par leurs auteurs et travaux de recherche. Aucun protocole n'est présenté comme universellement implémenté.

## Corpus ajouté

La branche de recherche ajoute 20 dossiers bilingues FR/EN, chacun comportant quatre sections explicatives avec mécanismes, usages et limites, quatre étapes d'analyse, trois questions critiques et un lien principal. Elle ajoute également 12 ateliers pratiques bilingues, 14 fiches d'outils, 17 sources institutionnelles ou scientifiques et 25 termes de glossaire. Les sources déjà présentes dans la première édition sont conservées.

### 1. Découverte du Web et contenu orienté IA
- Google Search Central — AI features : https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central — AI optimization guide : https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google Crawlers — Google-Extended et Googlebot : https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers
- OpenAI — Bots, OAI-SearchBot et GPTBot : https://developers.openai.com/api/docs/bots

**Différences essentielles :** les pages utiles, accessibles et indexables ne garantissent aucune apparition dans une réponse générative. Le fichier `llms.txt` est une proposition et n'est pas obligatoire pour Google Search. Les préférences de crawl pour indexation et usages d'entraînement ne doivent pas être confondues. `robots.txt` ne remplace ni l'authentification ni un contrôle d'accès.

### 2. Agents, interopérabilité et actions Web
- MCP — Documentation du protocole et versions datées : https://modelcontextprotocol.io/
- MCP — Spécification 2026 (dépôt source) : https://github.com/modelcontextprotocol/modelcontextprotocol
- A2A — Spécification et Agent Card : https://a2a-protocol.org/latest/specification/agent-card/
- WebMCP — Community Group Draft : https://webmachinelearning.github.io/webmcp/
- WHATWG HTML : https://html.spec.whatwg.org/
- OpenAPI : https://spec.openapis.org/oas/latest.html

**Différences essentielles :** MCP met à disposition des outils et ressources ; A2A décrit la communication et les tâches entre agents ; WebMCP étudie les fonctions de pages exposées aux agents. Au 13 novembre 2026, WebMCP est un brouillon communautaire et non une recommandation W3C. L'exposition d'un outil ne représente pas automatiquement l'autorisation de l'exécuter.

### 3. Modèles, inférence locale et calcul
- Chrome — Built-in AI APIs : https://developer.chrome.com/docs/ai/built-in
- WebNN : https://webmachinelearning.github.io/webnn-intro/
- WebGPU : https://www.w3.org/TR/webgpu/
- ONNX Runtime Web : https://onnxruntime.ai/docs/tutorials/web/
- TensorFlow.js : https://www.tensorflow.org/js
- Transformers.js : https://huggingface.co/docs/transformers.js/

**Différences essentielles :** un navigateur, son matériel, sa version et ses paramètres de sécurité conditionnent l'accès aux fonctionnalités. Une inférence locale ne garantit ni exactitude, ni confidentialité totale du dispositif, ni absence de téléchargement. WebGPU permet du calcul et ne fournit pas à lui seul un modèle IA.

### 4. Recherche augmentée, documents et données liées
- Lewis et al. (2020), Retrieval-Augmented Generation : https://arxiv.org/abs/2005.11401
- W3C JSON-LD 1.1 : https://www.w3.org/TR/json-ld11/
- JSON Schema : https://json-schema.org/
- Schema.org : https://schema.org/
- Ragas : https://docs.ragas.io/

**Différences essentielles :** récupération pertinente, classement, fidélité au corpus, validité des citations et capacité d'abstention sont des évaluations distinctes. Les métadonnées JSON-LD structurent les informations mais ne garantissent ni le classement ni l'usage par un agent.

### 5. Confiance, sécurité, provenance et gouvernance
- C2PA — Spécifications : https://spec.c2pa.org/
- OWASP — Prompt Injection : https://genai.owasp.org/llmrisk/llm01-prompt-injection/
- NIST — AI RMF et Generative AI Profile : https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
- EU AI Act — Règlement (UE) 2024/1689 : https://eur-lex.europa.eu/eli/reg/2024/1689
- WCAG 2.2 : https://www.w3.org/TR/WCAG22/

**Différences essentielles :** C2PA documente des affirmations de provenance mais ne prouve pas que le contenu représenté est vrai. Un texte récupéré du Web demeure une donnée non fiable, pas une instruction privilégiée. Les obligations européennes dépendent des cas d'usage, dispositions et exceptions applicables ; une fiche pédagogique ne remplace pas un conseil juridique.

## Méthode de préparation des dossiers

1. Définir le périmètre d'une question (création, découverte, action, sécurité, droit, accessibilité ou pédagogie).
2. Identifier une source primaire pertinente (spécification datée, document officiel ou recherche fondatrice).
3. Rédiger une synthèse bilingue avec mécanismes, applications et limites.
4. Associer au dossier une démarche pratique et des questions invitant à contester les conclusions.
5. Relier la fiche aux autres notions et aux outils disponibles, **sans suggérer une certification ou un partenariat**.
6. Exécuter des tests de structure, de liens syntaxiquement valides et de cohérence des traductions.
7. Organiser une relecture humaine des sources, versions, citations, licences, dates et formulations avant d'étiqueter un dossier `valide`.

## Limites et avertissements

Les vérifications automatisées **ne** confirment **pas** que tous les liens sont accessibles aujourd'hui, que chaque interprétation juridique est complète ni que les versions de protocoles n'ont pas changé. Le contenu constitue une édition de recherche **datée**, destinée à la consultation critique et à l'enrichissement ultérieur. Les scénarios pratiques et les éléments prospectifs ne doivent jamais être présentés comme des performances réelles ou une implémentation disponible. Le portail ne publie pas automatiquement les résultats d'une veille RSS ou d'un assistant IA.

## Suites éditoriales

- Contrôle par un responsable scientifique des textes sur standards et protocoles.
- Relecture juridique des pages traitant de la réglementation.
- Vérification régulière des liens, versions et statuts de spécifications.
- Amélioration de la recherche thématique et de l'accessibilité des ressources bilingues.
- Indexation publique seulement après l'accord éditorial et le retrait explicite de `noindex,nofollow`.

## Complément V.5 — études approfondies, laboratoires et documentation d’outils

L’enrichissement documentaire est prolongé par les dispositifs suivants :

### Encyclopédie entièrement approfondie
Les 36 sujets disposent de six sections bilingues (72 pages FR/EN). Les dix dossiers d’origine et les vingt dossiers de recherche reçoivent deux sections de comparaison ou d’application supplémentaires ; les six anciennes introductions courtes sont remplacées par des dossiers autonomes détaillant concepts, architecture, exemples et limites. Chaque article garde son statut `a_verifier` et son plan de lecture, ses questions critiques, ses étapes pratiques et ses sources.

### 51 fiches AI Tools, 102 pages bilingues
Les 51 outils du répertoire existant sont décrits au-delà de la phrase d’introduction : rôle technique, exemple d’application, limites et risques, trois questions pour l’évaluer, cinq étapes de test, un site officiel et trois références techniques ou thématiques supplémentaires. **Les documents thématiques ne constituent pas une approbation par leurs auteurs.** Les liens sont des références à consulter, non la preuve que la dernière version du logiciel possède telle ou telle fonction.

### 15 outils du WebAI Lab
Les dix nouveaux modules se déroulent localement dans le navigateur et affichent leurs limitations. Leur usage pédagogique ne nécessite aucune clé API :
1. Préparation d’un fichier robots.txt pour des robots documentés.
2. Génération de données JSON-LD pour une ressource décrite.
3. Découpage de texte pour illustrer la fragmentation RAG.
4. Inspection syntaxique d’un sitemap XML.
5. Audit indicatif de balises HTML accessibles.
6. Décomposition d’une URL et de ses paramètres.
7. Exemple de schéma JSON pour un outil MCP, sans serveur connecté.
8. Comparaison de deux objets JSON.
9. Fiche de vérification manuelle d’une affirmation et de son extrait.
10. Aperçu Markdown volontairement limité, sans insertion de HTML externe.

**Ne pas confondre** : contrôle statique et validation complète ; simulation de RAG et récupération vectorielle ; objet de schéma MCP et service MCP réel ; saisie d’un jugement humain et vérification automatique des preuves.

### Applications, apprentissages et observatoire
Dix scénarios sectoriels présentent chacun un contexte, cinq actions bilingues, risques, résultat attendu, deux références et des liens vers des notions approfondies. Six parcours incluent objectifs, cinq activités, production attendue et critère de réussite. Les ressources reçoivent dix méthodes de lecture par catégorie. L’observatoire montre six documents avec leur statut et une méthode de suivi ; **aucun flux d’actualités n’est déclaré actif.**

### Bibliographie scientifique
Dix références nouvelles concernent ReAct, Toolformer, Lost in the Middle, WebArena, VisualWebArena, OSWorld, RAGAS, GEO, SWE-bench et AgentDojo. Les types `preprint`, `published` et `project` sont renseignés lorsque l’information est disponible. Chaque fiche signale le principe de l’étude, ce qu’il faut comparer et les limites des résultats. La date historique de publication ne doit pas être interprétée comme la date d’un événement récent ni comme un score actuel de modèle.

### Vérifications
- `npm run verify:data` : structure, traductions, nombre et statuts des fiches, URLs HTTPS, caractère distinct des références.
- Compilation syntaxique du script de laboratoire, sans prétendre qu’elle remplace un test manuel dans tous les navigateurs.
- `npm run build` et `verify:locales` : pages et routes FR/EN générées.
- Relecture scientifique et vérification manuelle de l’accessibilité et des liens encore nécessaires avant publication finale.

**Bilan de cette version de travail :** 36 dossiers, 51 fiches d’outils, 59 références de bibliothèque, 77 termes, 20 guides, 10 scénarios, 6 parcours et 15 outils du laboratoire.
