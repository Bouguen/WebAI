# WebAI — Veille documentaire en prépublication

Cette composante reprend la stratégie de collecte préparatoire de la Phase IV : un outil peut découvrir des références, mais il ne peut pas valider automatiquement une information scientifique ni la publier.

## Implémentation

- Sources RSS/Atom sur hôtes HTTPS explicitement autorisés ; aucune adresse arbitraire.
- Limite de taille de 1,5 Mo, refus des déclarations DTD/entities et des redirections interdomaines.
- Données collectées : titre, URL normalisée, extrait court, date déclarée, provenance du flux.
- Déduplication uniquement au sein d'une exécution, sans historique persistant.
- Chaque candidat reste `review_status=a_verifier`, `rights_status=a_verifier` et `publishable=false`.
- GitHub Actions : lecture seule, fichier de sortie enregistré en artifact, aucune publication.
- Tests unitaires hors ligne avant toute collecte.

## État réel

Le workflow programmé de cette branche ne s'exécute pas automatiquement avant intégration sur la branche GitHub par défaut. Les endpoints doivent être vérifiés par un test réseau réel avant mise en service opérationnelle. Les artifacts GitHub ne constituent pas un flux public d'actualités.

## Commandes

python3 -m unittest discover -s tests -p 'test_*.py' -v
python3 scripts/monitoring.py --sources config/monitor-feeds.json --out outputs/monitoring

WebAI est indépendant des organisations surveillées.
