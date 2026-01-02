3.1 La Différence Fondamentale (Delivery vs Deployment)

C'est LA question piège en entretien DevOps. Il faut être très clair dessus.
Continuous Delivery (Livraison Continue)

    Concept : Le pipeline est automatisé jusqu'à l'étape de "Staging" (Pré-production). L'artéfact est prêt, testé et validé.

    Le frein à main : Le déploiement final vers la Production est manuel.

    Pourquoi ? C'est un choix "Business". Peut-être qu'on attend une date marketing précise, ou qu'on veut une validation humaine finale par un manager.

    L'état d'esprit : "Notre code est toujours déployable, mais on décide quand on appuie sur le bouton."

Continuous Deployment (Déploiement Continu)

    Concept : Automatisation de bout en bout. Si les tests passent, le code est en production 10 minutes après le git push.

    Le risque : Il n'y a plus de filet de sécurité humain. Cela nécessite une confiance absolue dans ses tests automatiques (couverture de code > 90%).

    Les géants qui l'utilisent : Netflix, Amazon, Google (ils déploient des milliers de fois par jour).

3.2 Le Concept d'Environnements

Le code ne saute pas du PC du développeur à la Production. Il voyage à travers des "sas" de validation.

    L'environnement de Dev (Local) : C'est le PC du développeur (Docker local). C'est le chaos, tout change tout le temps.

    L'environnement de Test / QA (Quality Assurance) :

        C'est là que les testeurs (ou scripts auto) vérifient les fonctionnalités.

        Objectif : Chasser les bugs fonctionnels.

    L'environnement de Staging (Pré-production) :

        C'est le clone exact de la production (même base de données anonymisée, même puissance serveur).

        Objectif : Tester la charge et la configuration. Si ça marche ici, ça marchera en Prod.

    L'environnement de Production :

        Le "Live". Là où sont les vrais clients. On n'y touche jamais manuellement (interdit de modifier un fichier config à la main ici !).

3.3 Diagramme de Flux : Delivery vs Deployment

Voici le code Mermaid pour visualiser la différence. C'est très parlant pour une slide.
Extrait de code

flowchart TD
    Start((Artéfact Prêt)) --> Stage[Déploiement en Staging]
    Stage --> Test[Tests d'Intégration / E2E]
    
    Test --> Decision{Type de Pipeline?}
    
    Decision -->|Continuous Delivery| Human[Attente Validation Humaine]
    Human -->|Approuvé| Prod[Déploiement en Production]
    
    Decision -->|Continuous Deployment| Prod
    
    style Human fill:#ff9999,stroke:#333,stroke-width:2px,stroke-dasharray: 5 5
    style Prod fill:#99ff99,stroke:#333,stroke-width:2px

3.4 Les Stratégies de Déploiement (Zéro Downtime)

Comment mettre à jour l'application sans afficher une page "Maintenance en cours" ?
1. Rolling Update (Mise à jour progressive)

    Comment ça marche : On a 3 serveurs (A, B, C). On met à jour A. Quand A est prêt, on met à jour B, puis C.

    Avantage : Pas besoin de double infrastructure (économique).

    Inconvénient : Le déploiement est lent. Pendant un moment, certains clients voient l'ancienne version, d'autres la nouvelle.

2. Blue/Green Deployment (Bleu/Vert)

    Comment ça marche :

        Bleu (Actuel) : La Prod qui tourne.

        Vert (Nouveau) : On déploie la nouvelle version à côté. Personne ne la voit.

        Le Switch : Une fois le Vert testé, on change le routeur (Load Balancer) pour envoyer tout le trafic sur Vert. Le Bleu devient inactif.

    Avantage : Switch instantané. Rollback facile (on rebascule sur Bleu si Vert plante).

    Inconvénient : Coûte 2x plus cher en ressources (il faut maintenir deux environnements).

3. Canary Deployment (Le Canari dans la mine)

    Comment ça marche : On envoie la nouvelle version à seulement 5% des utilisateurs.

    Avantage : Si le code plante, seuls 5% des clients sont mécontents. Si tout va bien, on augmente progressivement à 100%.

3.5 ZOOM SUR LES OUTILS DE CD

Pour ta présentation, tu dois parler des deux "rois" actuels : ArgoCD (pour le moderne/Kubernetes) et Ansible (pour le classique/Serveurs).
1. ArgoCD (Le standard GitOps pour Kubernetes)

C'est l'outil le plus "tendance". Il fonctionne selon le principe GitOps.

    Philosophie : "Git est la source de vérité".

    Fonctionnement :

        Tu ne touches jamais au cluster Kubernetes (K8s) directement.

        Tu décris l'état désiré de ton application dans un fichier YAML sur Git.

        ArgoCD (installé dans le cluster) surveille ce dépôt Git.

        S'il voit une différence entre Git et ce qui tourne réellement, il synchronise automatiquement le cluster.

    Pourquoi l'utiliser ?

        Visualisation incroyable de l'état des applications.

        Si un humain fait une erreur manuelle sur le serveur, ArgoCD la corrige tout seul (Self-healing).

2. Ansible (L'automatisation des configurations)

C'est un outil de "Configuration Management". Il est sans agent (Agentless), ce qui est sa grande force.

    Comment ça marche :

        Il utilise SSH (comme toi quand tu te connectes à un serveur) pour envoyer des ordres.

        Il utilise des fichiers YAML appelés "Playbooks".

    À quoi ça sert ?

        Préparer les serveurs (installer Docker, mettre à jour Linux, configurer le Firewall).

        Déployer des applications sur des serveurs classiques (non-conteneurisés).

    Exemple de Playbook (Conceptuel) :
    YAML

    - name: Installer Nginx
      hosts: webservers
      tasks:
        - name: Ensure Nginx is installed
          apt:
            name: nginx
            state: present

3. Le lien avec Jenkins ?

Souvent, Jenkins (CI) construit l'image Docker, puis demande à Ansible ou ArgoCD de faire le déploiement (CD). Jenkins orchestre le tout, mais laisse les outils spécialisés faire le travail final.
Résumé pour ta conclusion sur le CD

    "Le Continuous Deployment est le but ultime du DevOps : transformer une idée en fonctionnalité utilisable par le client en quelques minutes, de manière sûre et répétable. Des outils comme ArgoCD rendent cela possible grâce à l'approche GitOps."
