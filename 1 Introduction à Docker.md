🎯 1. Introduction à Docker
👉 Docker c’est quoi ?

Docker est une plateforme qui permet de :

Créer

Déployer

Exécuter

des applications dans des conteneurs, de façon rapide et standardisée.

👉 C’est quoi un conteneur ?

Un conteneur = un mini-ordinateur qui contient :

ton application

les dépendances

les configurations

l’environnement nécessaire

→ Il garantit que l’application fonctionne partout de la même manière.

🚀 2. Pourquoi Docker est essentiel dans DevOps ?
Besoin DevOps	Comment Docker aide ?
Automatiser	Image + pipeline
Déployer rapidement	Conteneurs très rapides
Éviter les bugs "ça marche chez moi"	Environnement standard
Scalabilité	Lancer plusieurs conteneurs
CI/CD	CI = build docker, CD = déploiement docker
🧠 3. Concepts clés de Docker
🔹 Image Docker

Un modèle qui contient le code + les dépendances.
Exemple : python:3.11, nginx, mysql:8.

🔹 Conteneur Docker

Une instance d’une image (comme "lancer l’image").

🔹 Dockerfile

Un fichier qui décrit comment construire une image.

Exemple simple :

FROM python:3.11
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "app.py"]

🔹 Docker Hub

Un magasin d’images (comme Play Store mais pour Docker).

🏗️ 4. Workflow DevOps avec Docker

Le développeur écrit son code

Il crée une image Docker

Il pousse l’image vers Docker Hub

CI/CD lance l’image sur le serveur

L’application est déployée automatiquement

🛠️ 5. Architecture Docker dans DevOps
Code → Dockerfile → Image → Registry → Déploiement → Prod


Avec Kubernetes, Docker devient scalable.

🎓 6. TP Pratique : Créer et déployer une application Flask avec Docker
🟢 Objectif

Créer une application web à partir de zéro
→ La mettre dans Docker
→ Lancer l’application dans un conteneur

🔰 PARTIE 1 – Créer l’application Flask
📁 Étape 1 : Créer ton projet

Crée un dossier :

mon_projet
 ├── app.py
 ├── requirements.txt
 └── Dockerfile

📝 Étape 2 : Fichier app.py
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Bonjour ! Mon premier projet Docker + Flask !"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

📝 Étape 3 : Fichier requirements.txt
Flask

🔰 PARTIE 2 – Dockeriser le projet
📝 Étape 4 : Créer le fichier Dockerfile
# 1. Utiliser une image python officielle
FROM python:3.11

# 2. Définir le dossier de travail
WORKDIR /app

# 3. Copier les fichiers
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

# 4. Exposer le port
EXPOSE 5000

# 5. Lancer l'application
CMD ["python", "app.py"]

🔰 PARTIE 3 – Créer l'image Docker

Ouvre ton terminal dans le dossier du projet.

👉 Construire l’image :
docker build -t flask-app .

🔰 PARTIE 4 – Lancer un conteneur
docker run -d -p 5000:5000 flask-app


✔️ Ensuite ouvre dans ton navigateur :
👉 http://localhost:5000

Tu dois voir :
"Bonjour ! Mon premier projet Docker + Flask !"

🔰 PARTIE 5 – Modifier ton app

Tu changes app.py, puis :

docker build -t flask-app .
docker run -d -p 5000:5000 flask-app

8. Conclusion

Docker est indispensable dans DevOps car il :

simplifie le développement

sécurise le déploiement

accélère les pipelines CI/CD

rend les applications portables et scalables
