# WebAI — Architecture de référence sur le Web généré par l’IA

**Édition de recherche :** 13 novembre 2026  
**Statut :** préversion éditoriale, indexation désactivée ; relecture scientifique encore nécessaire.  
**Dépôt :** Bouguen/WebAI — Pull Request n° 4  
**Projet de référence étudié :** [Augmentiverse.org](https://www.augmentiverse.org/).

## 1. Positionnement

WebAI ne doit plus être présenté principalement comme un site de cours ou de découverte pour débutants. Sa mission est de fournir une **référence documentaire indépendante** sur les transformations du Web induites par l’intelligence artificielle : contenus produits par modèles, récupération et synthèse de connaissances, systèmes agentiques, interopérabilité, confiance, droits et accessibilité.

Le Web généré par l’IA n’est pas une norme universelle officiellement nommée ni le remplacement des protocoles existants. Le champ est étudié de manière interdisciplinaire : architecture technique, production, recherche, usages et conséquences.

WebAI n’est pas le groupe Web & AI du W3C et ne revendique aucun mandat de normalisation, soutien ou partenariat institutionnel.

## 2. Référence structurante : Augmentiverse.org

La structure publique d’Augmentiverse distingue les rubriques concept, technologies, standards, outils, cas d’usage, acteurs, chronologie, glossaire, bibliographie et FAQ. La présente architecture en **adapte la logique de navigation** au Web généré par et pour l’IA, sans reproduire ses textes, ses logos, ses schémas, ni ses médias.

Source de référence architecturale :
- https://www.augmentiverse.org/
- https://www.augmentiverse.org/fr/about/
- https://www.augmentiverse.org/fr/resources/tools/

## 3. Menu principal WebAI

| Rubrique | URL | Contenu |
|---|---|---|
| Concept | `/{fr,en}/concept/` | Quatre dimensions et frontières : créer, découvrir, agir, vérifier |
| Technologies | `/{fr,en}/technologies/` | Sept familles, dossiers et outils associés |
| Standards | `/{fr,en}/standards/` | Onze textes, versions et statuts : standards publiés, versions, brouillons |
| AI Tools | `/{fr,en}/outils/` | Cinquante et une fiches détaillées, quatre références par outil |
| Applications | `/{fr,en}/secteurs/` | Dix secteurs et études de cas scénarisées, avec limites |
| Recherche | `/{fr,en}/publications/` | Publications et méthodes scientifiques, avec avertissement de statut |
| Acteurs | `/{fr,en}/acteurs/` | Organismes, projets, chercheurs et publications fondatrices |
| Observatoire | `/{fr,en}/observatoire/` | Versions, évolutions datées et méthodologie de veille |

Le menu secondaire donne directement accès à l’encyclopédie, aux sources et bibliographies, au glossaire, à la chronologie, aux FAQ, au laboratoire, aux comparateurs, aux cartes de connaissances et aux méthodes de vérification.

Les anciens parcours `decouvrir`, `comprendre`, `explorer`, `experimenter`, `apprendre`, `suivre` et `verifier` sont conservés comme contenu de compatibilité, sans demeurer le menu principal. Aucun dossier ou outil antérieur n’est supprimé.

## 4. Les quatre dimensions conceptuelles

1. **Création et publication :** textes, médias, interfaces, sites produits ou transformés par des modèles. Surveiller provenance, fidélité, droits, HTML accessible et qualité éditoriale.
2. **Découverte et connexion :** indexation, recherche générative, RAG, graphes et métadonnées. Vérifier pertinence, contexte et citations.
3. **Interaction et action :** agents, outils, interfaces Web, protocoles MCP/A2A et proposition WebMCP. Distinguer capacité annoncée, authentification et permission explicite.
4. **Confiance et gouvernance :** origine, signatures, risques, transparence, évaluation et accessibilité. Une signature valide ne prouve pas la vérité d’un contenu.

Ces dimensions constituent une **taxonomie éditoriale WebAI**, pas une classification normalisée par le W3C.

## 5. Registre des standards : traitement responsable

Sources originales documentaires prioritaires :
- HTML Living Standard : https://html.spec.whatwg.org/
- JSON-LD : https://www.w3.org/TR/json-ld11/
- WebGPU : https://www.w3.org/TR/webgpu/
- WebNN : https://www.w3.org/TR/webnn/
- MCP : https://modelcontextprotocol.io/
- A2A : https://a2a-protocol.org/
- WebMCP : https://webmachinelearning.github.io/webmcp/
- C2PA : https://spec.c2pa.org/
- WCAG : https://www.w3.org/TR/WCAG22/
- JSON Schema : https://json-schema.org/
- OpenAPI : https://spec.openapis.org/oas/latest.html

WebMCP est identifié comme un rapport de groupe communautaire, non une norme W3C. La présence d’un protocole dans ce registre ne certifie ni son implémentation générale ni son adoption industrielle.

## 6. Organismes et personnes

Le registre présente le rôle **décrit par l’organisme lui-même** : W3C, WHATWG, IETF, projets MCP/A2A, C2PA, NIST, OWASP, Hugging Face, MLCommons, OpenTelemetry et Schema.org. Des chercheurs et groupes d’auteurs sont reliés à leurs travaux originaux : Tim Berners-Lee, Vaswani et collaborateurs, Lewis et collaborateurs, Yao et collaborateurs, Bommasani et collaborateurs.

Ni leur présence ni la citation de leur travail n’implique la participation, un partenariat ou une approbation de WebAI.

## 7. Chronologie et observatoire

La chronologie signale les jalons étayés du World Wide Web, de JSON-LD, des Transformers, du RAG, des interfaces conversationnelles, de MCP, d’A2A et de WebMCP. Les dates sont celles de travaux ou annonces identifiés, pas des mesures d’adoption.

L’observatoire reste un espace de documentation et de contrôle de versions : aucune collecte d’actualités en temps réel n’est déclarée active tant qu’elle n’est pas effectivement vérifiée.

## 8. Exigences documentaires

Chaque fiche de référence devrait comporter :
- Une définition et un périmètre explicites, sans langage promotionnel.
- Mécanisme, architecture, applications documentées et limitations.
- Statut réel de la spécification (le cas échéant), sa version et sa date.
- Sources originales identifiables, complétées si utile par de la recherche évaluée.
- Relations vers les technologies, outils, travaux, personnes et secteurs.
- État de vérification : `a_verifier` tant qu’une revue indépendante n’est pas réalisée.

Les travaux de prospective doivent être visiblement séparés des faits établis. Une date de consultation ne remplace pas la date réelle d’un événement.

## 9. Laboratoire et guides : services complémentaires

Les quinze modules existants de WebAI Lab restent des instruments d’inspection et d’expérimentation **locaux**, sans prétendre se connecter à un modèle IA lorsque ce n’est pas le cas. Les guides et parcours sont proposés comme ressources secondaires, utiles aux développeurs et analystes, mais ne structurent plus l’identité principale du portail.

## 10. Conditions de mise en ligne

La branche de travail ne doit pas être fusionnée dans `main` sans validation explicite de l’utilisateur. L’indexation doit rester désactivée sur les préversions. Les tests Astro, vérifications bilingues, liens internes et contrôles de structures constituent une condition nécessaire mais pas suffisante ; la relecture factuelle, juridique et de l’ergonomie reste à accomplir.
