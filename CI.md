Partie 2 : L'Intégration Continue (CI) – Construire et Tester
2.0 Introduction : Le Scénario du "Merge Day"

(Ceci est ton accroche orale pour capter l'attention de la classe)

Imaginez ce scénario classique : Vous travaillez sur une fonctionnalité depuis deux semaines. Le vendredi soir, vous décidez d'envoyer votre code sur la branche principale (Main). Et là... C'est le drame.

Votre code casse tout. L'application ne démarre plus. Vos collègues sont bloqués. C'est ce qu'on appelle "l'Enfer de l'Intégration".

Pour éviter cela, les équipes modernes utilisent le Feature Branch Workflow (une branche par fonctionnalité) combiné à un gardien impitoyable : L'Intégration Continue.
2.1 Qu'est-ce que l'Intégration Continue (CI) ?

L'Intégration Continue est une pratique où les développeurs fusionnent leurs modifications de code dans un dépôt central (GitHub/GitLab) plusieurs fois par jour.

    Le Concept : Automatiser la validation de chaque petit changement.

    L'Objectif : Le "Fail Fast" (Échouer vite). Si une erreur existe, nous voulons le savoir dans les 5 minutes via une notification automatique, et non une semaine plus tard quand le client teste l'application.

2.2 La Stratégie de Qualité : La Pyramide des Tests

Avant de voir comment le pipeline fonctionne, il faut comprendre quoi nous testons. Nous suivons le modèle de la Pyramide des Tests.

    4.2 Les Tests dans le Pipeline CI (Intégration Continue)

Objectif : Valider la qualité technique et la logique du code immédiatement après un push.
1. Analyse Statique & Linting (Le "Code Police")

Ce n'est pas une exécution du code, mais une lecture automatique.

    Quoi : Vérifie le style (points-virgules, indentation), détecte le code mort, et repère les failles de sécurité simples (mots de passe en clair).

    Outils : ESLint (JS), Checkstyle (Java), SonarQube (Qualité globale).

    Quand : Dès le début du pipeline CI. Si ça échoue, on arrête tout.

2. Tests Unitaires (Unit Tests)

Le test le plus important pour les développeurs.

    Quoi : On teste la plus petite partie du code (une fonction, une méthode) en isolation, sans base de données ni réseau.

    Exemple : La fonction calculerTTC(100) retourne-t-elle bien 120 ?

    Outils : JUnit (Java), Jest (Node/React), PyTest (Python).

    Caractéristique : Doit s'exécuter en quelques secondes pour tout le projet.

3. Tests d'Intégration (Integration Tests)

    Quoi : On vérifie que plusieurs modules fonctionnent bien ensemble.

    Exemple : Est-ce que mon API arrive bien à lire et écrire dans la base de données de test ? Est-ce que le module "Panier" communique bien avec le module "Paiement" ?

    Différence : Ici, on utilise souvent une vraie base de données (ou un conteneur Docker éphémère).

2.3 Le Pipeline CI : Les Étapes Techniques

Voici ce qui se passe réellement dans le serveur CI à chaque git push. C'est l'application concrète de notre pyramide.

Étape 1 : Le Déclencheur (Trigger) Le serveur CI détecte un changement sur le dépôt Git (via Webhook).

Étape 2 : Linting & Analyse Statique (La "Police du Code") Avant même d'exécuter le code, on l'analyse.

    Objectif : Vérifier la syntaxe, le style et détecter les failles de sécurité de base.

    Outils : ESLint, SonarQube.

    Règle : Si ça échoue, le pipeline s'arrête immédiatement.

Étape 3 : Tests Unitaires (Base de la Pyramide) C'est l'étape critique.

    Action : Le serveur lance des milliers de petits tests en parallèle.

    Outils : JUnit (Java), Jest (Node.js).

    Temps : Quelques secondes.

Étape 4 : Tests d'Intégration

    Action : On lance une base de données temporaire et on vérifie que le code peut y écrire.

    Outils : Spring Boot Test.

Étape 5 : Build & Packaging Si tous les feux sont verts, le serveur compile le code et crée un Artéfact (un paquet immuable).

    Résultat : Une image Docker, un fichier .jar.

2.4 Diagramme de Flux CI
Extrait de code

graph LR
    A[Développeur] -->|git push| B(Dépôt Git)
    B -->|Trigger| C{Serveur CI<br/>Jenkins}
    C -->|1. Scan| D[Linting & Sécurité]
    D -->|2. Test| E[Tests Unitaires]
    E -->|3. Test| F[Tests d'Intégration]
    F -->|4. Build| G[Création Artéfact<br/>Docker Image]
    G -->|5. Push| H[Registre<br/>Docker Hub]
    
    style E fill:#f9f,stroke:#333
    style F fill:#f9f,stroke:#333
    style C fill:#f96,stroke:#333,stroke-width:2px
    
    
    
    
2.5 JENKINS : Le Chef d'Orchestre du DevOps

Si la CI/CD était une usine, Jenkins en serait le contremaître. Il ne fabrique pas le produit lui-même, mais il crie les ordres pour que les machines le fassent.
1. C'est quoi exactement ?

Jenkins n'est pas juste un "serveur". C'est un Orchestrateur d'Automatisation. C'est un projet Open Source (gratuit), écrit en Java, et c'est le standard absolu du marché (utilisé par 80% des grandes entreprises).

    L'analogie : Imaginez un Majordome Suisse. Il a 1000 bras, il parle toutes les langues (Java, Python, Docker...) et il travaille 24h/24 sans jamais se plaindre.

2. Pourquoi est-il incontournable ? (Les 3 Piliers)
A. L'Architecture "Cerveau & Muscles" (Master / Agent)

C'est sa plus grande force architecturale. Jenkins sépare la réflexion de l'action.

    Le Controller (Le Cerveau) : Il gère l'interface web, les utilisateurs et planifie le travail. Il ne doit jamais lancer de compilations lourdes lui-même.

    Les Agents (Les Muscles) : Ce sont des serveurs esclaves (ou des conteneurs éphémères) qui exécutent les tâches sales.

        Avantage : Vous pouvez avoir un Agent Windows pour compiler du .NET, un Agent Linux pour du Docker, et un Agent Mac pour une appli iOS. Jenkins pilote les trois en même temps.

B. Le "Couteau Suisse" (Les Plugins)

La puissance de Jenkins ne vient pas du logiciel lui-même, mais de ses 1800+ Plugins. Vous utilisez AWS ? Il y a un plugin. Slack ? Un plugin. Kubernetes ? Un plugin.

    Règle d'or : "Si un outil DevOps existe, il existe un plugin Jenkins pour lui parler."

C. La Révolution : "Pipeline as Code"

Avant, on configurait Jenkins en cliquant partout dans l'interface (ce qu'on appelle péjorativement le "ClickOps"). C'était fragile et impossible à sauvegarder.

Aujourd'hui, nous utilisons le Jenkinsfile.

    C'est un fichier texte qui décrit tout le pipeline.

    Il vit DANS votre dépôt Git, à côté de votre code source.

    Bénéfice : Si le serveur Jenkins brûle demain, on en installe un nouveau, on lui donne l'URL du Git, et il sait instantanément comment reconstruire le projet. C'est l'immortalité de la configuration.
    
    

    
2.7 L'Alternative Moderne : GitHub Actions

Si Jenkins est le "père" du CI/CD, GitHub Actions est le "fils prodige". Lancé en 2019, il a révolutionné la manière dont les développeurs abordent l'automatisation.
C'est quoi GitHub Actions ?

C'est un outil d'automatisation SaaS (Software as a Service) directement intégré dans GitHub. Contrairement à Jenkins, il n'y a aucun serveur à installer. Vous n'avez pas besoin de gérer les mises à jour ou la sécurité de la machine. GitHub vous prête des ordinateurs virtuels (Windows, Linux, Mac) à la demande pour exécuter vos tests.
Comparatif Stratégique : Jenkins vs GitHub Actions

Ce tableau est essentiel pour comprendre quel outil choisir selon le contexte.
Critère	Jenkins 👴	GitHub Actions 🚀
Type	Serveur à installer (Self-Hosted)	Service Cloud (SaaS)
Configuration	Jenkinsfile (Groovy/Java)	Workflow .yaml (YAML)
Maintenance	Élevée (Mises à jour, Plugins...)	Nulle (Géré par Microsoft/GitHub)
Infrastructure	Vous devez payer vos serveurs	Gratuit (pour projets publics)
Force	Contrôle total & Sécurité privée	Rapidité de mise en place
Cible	Banques, Grandes Entreprises	Startups, Open Source, Projets Modernes
Concepts Clés (Le Vocabulaire)

GitHub Actions utilise un vocabulaire spécifique :

    Workflow : Le processus complet (le pipeline).

    Event (Déclencheur) : Ce qui lance le workflow (ex: push, pull_request).

    Runner : Le serveur virtuel prêté par GitHub (ex: ubuntu-latest).

    Job : Une série d'étapes qui s'exécutent sur un même Runner.

    Action : C'est la force de l'outil. Ce sont des briques de code réutilisables créées par la communauté (ex: une action pour installer Node.js, une action pour se connecter à Docker Hub). On les trouve sur le GitHub Marketplace.

2.8 GUIDE PRATIQUE : GitHub Actions (Pas à Pas)

L'avantage majeur : vous pouvez mettre en place un pipeline en moins de 2 minutes.
Étape 1 : Création du Fichier

Tout se passe dans votre dépôt GitHub. Il suffit de créer un dossier spécifique :

    Dossier : .github/workflows/

    Fichier : mon-pipeline.yml

Étape 2 : Le Code (Syntaxe YAML)

Voici un exemple complet et commenté que vous pouvez utiliser dans votre présentation. Il fait la même chose que notre exemple Jenkins (Test + Build), mais regardez comme c'est plus court !
YAML

name: Mon Super Pipeline CI

# 1. Le Déclencheur (Trigger)
# Le pipeline se lance quand on push sur la branche 'main'
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

# 2. Les Tâches (Jobs)
jobs:
  build-and-test:
    # On demande à GitHub de nous prêter un serveur Linux (Ubuntu)
    runs-on: ubuntu-latest

    # 3. Les Étapes (Steps)
    steps:
    # A. Récupérer le code (Utilisation d'une Action officielle)
    - name: Checkout du code
      uses: actions/checkout@v3

    # B. Préparer l'environnement (Installer Node.js v18)
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    # C. Installer les dépendances
    - name: Installation
      run: npm install

    # D. Lancer le Linting et les Tests (Si ça rate, stop !)
    - name: Tests & Qualité
      run: |
        npm run lint
        npm test

    # E. Build (Création de l'artéfact)
    - name: Build Production
      run: npm run build

Étape 3 : Visualisation

Dès que vous faites un "Push" de ce fichier :

    Allez dans l'onglet "Actions" de votre dépôt GitHub.

    Vous verrez votre workflow tourner en temps réel.

    Vous pouvez cliquer sur chaque étape pour voir les logs (comme dans la console Jenkins).

Conclusion sur GitHub Actions

    "GitHub Actions représente la démocratisation du DevOps. Il a supprimé la barrière technique de l'installation de serveur. Aujourd'hui, un développeur seul peut configurer un pipeline CI/CD professionnel en copiant-collant un fichier YAML, ce qui était impossible il y a 10 ans."
