Qu’est-ce que l’Infrastructure as Code (IaC) ?

Infrastructure as Code (IaC) est une pratique DevOps qui consiste à gérer et provisionner l’infrastructure informatique à l’aide de code, au lieu de configurations manuelles.

👉 L’infrastructure (serveurs, réseaux, bases de données, load balancers, etc.) est :

décrite dans des fichiers (YAML, JSON, HCL…)

versionnée (Git)

automatisée

reproductible

📌 Exemple : créer un serveur AWS, un réseau et une base de données avec un simple fichier Terraform.

2️⃣ Pourquoi l’IaC est essentielle en DevOps ?

DevOps vise :

la rapidité

la fiabilité

la collaboration

l’automatisation

L’IaC est le pilier qui permet tout ça.

Sans IaC ❌

Configurations manuelles

Erreurs humaines

Environnements différents (dev ≠ prod)

Déploiements lents

Avec IaC ✅

Infrastructure standardisée

Environnements identiques

Déploiements rapides

Rollback facile

3️⃣ Comment fonctionne l’IaC ?
Étapes principales :

Écrire le code d’infrastructure

resource "aws_instance" "web" {
  ami           = "ami-0abcd1234"
  instance_type = "t2.micro"
}


Versionner le code

Git (GitHub, GitLab, Bitbucket)

Appliquer le code

terraform apply


Provision automatique

Serveurs

Réseaux

Sécurité

Stockage

4️⃣ Types d’Infrastructure as Code
🔹 IaC déclarative

➡️ On décrit l’état final souhaité

Exemples :

Terraform

AWS CloudFormation

ARM Templates

📌 Avantage : simple, propre, moins d’erreurs

🔹 IaC impérative

➡️ On décrit les étapes à suivre

Exemples :

Scripts Bash

Ansible (partiellement)

📌 Avantage : plus de contrôle

5️⃣ Outils populaires d’IaC
Outil	Usage
Terraform	Multi-cloud (AWS, Azure, GCP)
AWS CloudFormation	AWS uniquement
Ansible	Configuration & automatisation
Pulumi	IaC avec des langages (Python, JS)
Chef / Puppet	Configuration management
6️⃣ IaC dans un pipeline DevOps (CI/CD)
Exemple de workflow :

Commit Git

Pipeline CI/CD déclenché

Validation du code IaC

Provision infra automatique

Déploiement application

Developer → Git → CI/CD → IaC → Cloud → Application


📌 Résultat : déploiement rapide, fiable et automatique.

7️⃣ Avantages clés de l’IaC

✅ Automatisation complète
✅ Reproductibilité des environnements
✅ Réduction des coûts
✅ Sécurité intégrée
✅ Scalabilité
✅ Audit & traçabilité

8️⃣ Sécurité et IaC (DevSecOps)

Secrets stockés dans des Vaults

Scans de sécurité automatiques

Permissions définies dans le code

Politiques IAM versionnées

📌 La sécurité devient du code aussi.

9️⃣ Exemple concret (Dev / Test / Prod)

Avec IaC :

Même code

Variables différentes

instance_type = var.env == "prod" ? "t3.large" : "t2.micro"


👉 Résultat :

Dev léger

Prod robuste

Zéro configuration manuelle

🔟 Cas d’usage réels

Création automatique d’environnements de test

Scaling automatique d’infrastructure

Disaster Recovery

Cloud migration

Microservices & Kubernetes

🎯 Conclusion (slide finale)

Infrastructure as Code transforme l’infrastructure en logiciel
➜ Plus rapide
➜ Plus fiable
➜ Plus sécurisée
➜ Essentielle au DevOps moderne
