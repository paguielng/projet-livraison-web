# Projet-livraison-web

## Description
Livraison-Manager est une application web permettant la gestion des livraisons de colis. Elle comprend une interface pour les livreurs et les clients, facilitant le suivi et l'affectation des colis.
*Consignes* : https://vianneymaletras.github.io/nsitermstsernin/bdd/web/projetWeb.html

## Membres de l'équipe

Devs : Paguiel, [@Hristo](https://github.com/hrosters), [@Gabriel](https://github.com/gabrielrahier)

## Installation

### Prérequis
- Serveur Apache avec PHP
- MySQL
- UWAMP (optionnel)

### Étapes d'installation
1. Cloner ce dépôt :
   ```bash
   git clone https://github.com/paguielng/projet-livraison-web.git
   ```
2. Configurer la base de données en exécutant `creation.php`
3. Remplir la base de données avec `remplissage.php`
4. Lancer le serveur local et accéder à `client.php` ou `livreur.php`

## Structure du projet

```
Livraison-Manager/
livraison/
│── sql/
│   ├── creation.php       # Création des tables MySQL
│   ├── remplissage.php    # Insertion des données initiales
│
│── livreur/
│   ├── livreur.php        # Sélection du livreur
│   ├── gestion-livreur.php # Gestion des colis du livreur
│   ├── statut-livreur.php  # Modification du statut des colis
│   ├── selection-livreur.php # Sélection de nouveaux colis
│
│── client/
│   ├── client.php         # Sélection du client
│   ├── gestion-client.php # Suivi des colis envoyés et dépôt
│   ├── depot-client.php   # Déposer un nouveau colis
│
│── includes/
│   ├── db.php             # Connexion à la base de données
│   ├── header.php         # En-tête commun
│   ├── footer.php         # Pied de page commun
│
│── assets/
│   ├── styles.css         # Fichier CSS pour le design
│
│── index.php              # Page d'accueil principale
│── README.md              # Explication du projet
```

## Fonctionnalités
- Interface pour les clients et les livreurs
- Gestion et suivi des colis
- Sélection et mise à jour du statut des livraisons

## Tests
Les fonctionnalités suivantes seront testées :
- Initialisation de la base
- Sélection d’un livreur
- Sélection de nouveaux colis à prendre en charge
- Changement du statut d’un colis
- Sélection d’un client
- Dépôt d’un colis

![Description de l'image](https://github.com/paguielng/projet-livraison-web/blob/main/model-complet.png)

## License
Ce projet est sous licence MIT.
