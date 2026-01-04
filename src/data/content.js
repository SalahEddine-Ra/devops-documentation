
import { 
  BookOpen, 
  Users, 
  Infinity, 
  GitMerge, 
  RefreshCw, 
  Globe, 
  Server,
  Code,
  Box,
  TrendingUp,
  Cpu,
  Container,
  GitBranch,
  Rocket,
  Activity
} from 'lucide-react';

export const sections = [
  {
    id: 'intro',
    category: 'Fondamentaux de DevOps',
    title: 'Introduction',
    timing: '1h',
    icon: BookOpen,
    content: `
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">Introduction au DevOps</h2>
      
      

      <h3 class="text-2xl font-bold mb-4 text-gray-800">Le Contexte Problématique : Le "Mur de la Confusion"</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-red-50 p-6 rounded-xl border border-red-100">
          <h4 class="text-lg font-bold mb-2 text-red-700 flex items-center">
            <span class="bg-red-200 p-1 rounded mr-2">DEV</span> Équipe Développement
          </h4>
          <ul class="space-y-2 text-gray-700">
            <li>🎯 <strong>Objectif :</strong> Livrer rapidement de nouvelles fonctionnalités.</li>
            <li>📈 <strong>Mesure :</strong> Vitesse, Time-to-market.</li>
            <li>🗣️ <strong>Mentalité :</strong> "Ça marche sur ma machine."</li>
          </ul>
        </div>

        <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h4 class="text-lg font-bold mb-2 text-blue-700 flex items-center">
            <span class="bg-blue-200 p-1 rounded mr-2">OPS</span> Équipe Opérations
          </h4>
          <ul class="space-y-2 text-gray-700">
            <li>🎯 <strong>Objectif :</strong> Stabilité, fiabilité, sécurité.</li>
            <li>📈 <strong>Mesure :</strong> Uptime, absence d'incidents.</li>
            <li>🗣️ <strong>Mentalité :</strong> "Tout changement est un risque."</li>
          </ul>
        </div>
      </div>

      <div class="bg-gray-800 text-white p-6 rounded-lg mb-8 text-center">
        <h4 class="text-xl font-bold mb-2">🚧 Le Mur de la Confusion</h4>
        <p class="mb-4">Les Devs jettent le code "par-dessus le mur". Les Ops reçoivent une "boîte noire" difficile à déployer.</p>
        <div class="flex justify-center items-center space-x-4 text-2xl">
          <span>👨‍💻 Code</span>
          <span>➡️</span>
          <span class="text-4xl">🧱</span>
          <span>➡️</span>
          <span>🔥 Panne</span>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-indigo-500">
        <h3 class="text-xl font-semibold mb-3 text-gray-800">Définition</h3>
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          DevOps est une culture, une pratique et un ensemble d'outils qui intègrent et automatisent les processus entre les équipes de développement ("Dev") et d'opérations ("Ops").
        </p>
        <p class="text-gray-600">
          L'objectif principal est de raccourcir le cycle de vie du développement des logiciels et de fournir des livraisons continues de haute qualité. Ce n'est pas un simple poste ou un outil, mais une transformation profonde de la collaboration.
        </p>
      </div>

      <h3 class="text-2xl font-bold mb-4 text-gray-800">Objectifs du DevOps</h3>
      <ul class="grid md:grid-cols-3 gap-4 mb-8">
        <li class="bg-green-50 p-4 rounded-lg border border-green-200">
          <strong class="block text-green-700 mb-1">Vitesse</strong>
          Livrer plus vite et plus souvent.
        </li>
        <li class="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <strong class="block text-purple-700 mb-1">Fiabilité</strong>
          Assurer la stabilité et la qualité.
        </li>
        <li class="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <strong class="block text-orange-700 mb-1">Collaboration</strong>
          Briser les silos et partager la responsabilité.
        </li>
      </ul>

      

      <h3 class="text-2xl font-bold mb-4 text-gray-800">✅ Les Avantages du DevOps</h3>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 shadow-md">
          <h4 class="text-xl font-bold text-green-800 mb-4 flex items-center">
            <span class="text-3xl mr-3">⚡</span> Avantages Techniques
          </h4>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-green-600 mr-2">✓</span>
              <div>
                <strong>Déploiements plus rapides :</strong> De semaines/mois à plusieurs fois par jour
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">✓</span>
              <div>
                <strong>Qualité améliorée :</strong> Tests automatisés et intégration continue réduisent les bugs
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">✓</span>
              <div>
                <strong>Récupération rapide :</strong> Rollback automatisé et détection précoce des problèmes
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">✓</span>
              <div>
                <strong>Scalabilité :</strong> Infrastructure élastique et auto-scaling
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">✓</span>
              <div>
                <strong>Sécurité renforcée :</strong> DevSecOps intègre la sécurité dès le début (Shift-Left)
              </div>
            </li>
          </ul>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-md">
          <h4 class="text-xl font-bold text-blue-800 mb-4 flex items-center">
            <span class="text-3xl mr-3">🎯</span> Avantages Business
          </h4>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">✓</span>
              <div>
                <strong>Time-to-Market réduit :</strong> Livraison plus rapide des fonctionnalités aux clients
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">✓</span>
              <div>
                <strong>Satisfaction client :</strong> Feedback rapide et amélioration continue
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">✓</span>
              <div>
                <strong>Réduction des coûts :</strong> Moins de temps perdu, moins de gaspillage
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">✓</span>
              <div>
                <strong>Innovation accélérée :</strong> Expérimentation facilitée avec des petits lots
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">✓</span>
              <div>
                <strong>Compétitivité :</strong> Capacité à s'adapter rapidement au marché
              </div>
            </li>
          </ul>
        </div>

        <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 shadow-md">
          <h4 class="text-xl font-bold text-purple-800 mb-4 flex items-center">
            <span class="text-3xl mr-3">👥</span> Avantages Organisationnels
          </h4>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-purple-600 mr-2">✓</span>
              <div>
                <strong>Collaboration améliorée :</strong> Silos brisés entre Dev et Ops
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-purple-600 mr-2">✓</span>
              <div>
                <strong>Culture de responsabilité :</strong> Les équipes possèdent leurs produits de bout en bout
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-purple-600 mr-2">✓</span>
              <div>
                <strong>Moral des équipes :</strong> Moins de stress, plus d'autonomie
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-purple-600 mr-2">✓</span>
              <div>
                <strong>Apprentissage continu :</strong> Culture d'expérimentation et d'amélioration
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-purple-600 mr-2">✓</span>
              <div>
                <strong>Transparence :</strong> Visibilité accrue sur les processus et les métriques
              </div>
            </li>
          </ul>
        </div>

        
      </div>

      

      <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
        <h4 class="font-bold text-yellow-800 mb-2 flex items-center">
          <span class="text-2xl mr-2">⚠️</span> Important à Retenir
        </h4>
        <p class="text-gray-700 mb-2">
          DevOps n'est <strong>pas</strong> :
        </p>
        <ul class="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li>Un simple poste ou un titre</li>
          <li>Seulement des outils (Jenkins, Docker, Kubernetes)</li>
          <li>Une solution miracle qui résout tous les problèmes</li>
          <li>Uniquement de l'automatisation</li>
        </ul>
        <p class="text-gray-700 mt-3">
          DevOps <strong>est</strong> : Une <strong>culture</strong> et une <strong>philosophie</strong> qui transforme la façon dont les organisations développent, déploient et maintiennent leurs logiciels.
        </p>
      </div>
    `
  },
  {
    id: 'calms',
    category: 'Fondamentaux de DevOps',
    title: 'Culture C.A.L.M.S',
    timing: '1.5h',
    icon: Users,
    content: `
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">Les 5 Piliers C.A.L.M.S</h2>
      <p class="mb-8 text-gray-600 text-lg">Le DevOps repose sur cinq principes fondamentaux qui guident la transformation.</p>

      <div class="space-y-8">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-indigo-500 transform transition hover:scale-[1.01]">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-600 font-bold text-2xl">C</div>
              <h3 class="text-2xl font-bold text-gray-800">Culture</h3>
            </div>
            <p class="text-gray-600 mb-4">C'est le cœur du DevOps. Il s'agit de briser les silos humains avant les silos techniques.</p>
            <ul class="list-disc list-inside bg-gray-50 p-4 rounded-lg text-gray-700 space-y-2">
              <li>Responsabilité partagée ("You build it, you run it").</li>
              <li>Confiance et transparence entre les équipes.</li>
              <li>Culture "Blameless" (sans blâme) lors des post-mortems.</li>
              <li>Focus sur le produit global plutôt que sur des tâches isolées.</li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-blue-500 transform transition hover:scale-[1.01]">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="bg-blue-100 p-3 rounded-full mr-4 text-blue-600 font-bold text-2xl">A</div>
              <h3 class="text-2xl font-bold text-gray-800">Automatisation</h3>
            </div>
            <p class="text-gray-600 mb-4">"Si c'est pénible, automatise-le". L'automatisation libère du temps pour l'innovation.</p>
            <ul class="list-disc list-inside bg-gray-50 p-4 rounded-lg text-gray-700 space-y-2">
              <li>Automatiser les tests, l'intégration, le déploiement (CI/CD).</li>
              <li>Infrastructure as Code (IaC) pour provisionner les environnements.</li>
              <li>Réduire les erreurs humaines et accélérer les processus.</li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-green-500 transform transition hover:scale-[1.01]">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="bg-green-100 p-3 rounded-full mr-4 text-green-600 font-bold text-2xl">L</div>
              <h3 class="text-2xl font-bold text-gray-800">Lean</h3>
            </div>
            <p class="text-gray-600 mb-4">Inspiré du Lean Manufacturing (Toyota). Maximiser la valeur client, minimiser le gaspillage.</p>
            <ul class="list-disc list-inside bg-gray-50 p-4 rounded-lg text-gray-700 space-y-2">
              <li>Éliminer les gaspillages (attentes, retouches, fonctionnalités inutiles).</li>
              <li>Optimiser le flux de valeur (Value Stream Mapping).</li>
              <li>Livrer par petits lots (Small Batches) pour réduire le risque.</li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-purple-500 transform transition hover:scale-[1.01]">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="bg-purple-100 p-3 rounded-full mr-4 text-purple-600 font-bold text-2xl">M</div>
              <h3 class="text-2xl font-bold text-gray-800">Mesure (Measurement)</h3>
            </div>
            <p class="text-gray-600 mb-4">On ne peut pas améliorer ce qu'on ne mesure pas. Pilotage par la donnée.</p>
            <ul class="list-disc list-inside bg-gray-50 p-4 rounded-lg text-gray-700 space-y-2">
              <li>Métriques techniques (temps de réponse, taux d'erreur).</li>
              <li>Métriques processus (DORA metrics : fréquence de déploiement, Lead Time).</li>
              <li>Métriques business (satisfaction utilisateur, conversion).</li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-orange-500 transform transition hover:scale-[1.01]">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="bg-orange-100 p-3 rounded-full mr-4 text-orange-600 font-bold text-2xl">S</div>
              <h3 class="text-2xl font-bold text-gray-800">Partage (Sharing)</h3>
            </div>
            <p class="text-gray-600 mb-4">L'intelligence collective est plus forte que l'expertise isolée.</p>
            <ul class="list-disc list-inside bg-gray-50 p-4 rounded-lg text-gray-700 space-y-2">
              <li>Partager les connaissances, les outils et les succès.</li>
              <li>Communiquer sur les échecs pour apprendre (Post-mortems publics).</li>
              <li>Briser les silos d'information.</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'lifecycle',
    category: 'Fondamentaux de DevOps',
    title: 'Cycle de Vie DevOps',
    timing: '2h',
    icon: Infinity,
    content: `
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">Le Cycle de Vie DevOps (Infinity Loop)</h2>
      <p class="mb-6 text-gray-600 text-lg">
        Le cycle DevOps est une boucle continue. Il n'y a pas de fin : la surveillance de la production alimente la planification de la prochaine itération.
      </p>

      <!-- Diagram Placeholder -->
      <div id="diagram-container" class="mb-12"></div>

      <div class="grid gap-8">
        <!-- PLAN -->
        <div class="bg-white p-6 rounded-lg shadow border-l-4 border-indigo-600">
          <h3 class="text-xl font-bold text-indigo-800 mb-2">1. PLAN</h3>
          <p class="text-gray-600 mb-3">Planification continue et alignement des équipes.</p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>Gestion du backlog et User Stories.</li>
            <li>Alignement des objectifs business et techniques.</li>
            <li><strong>Outils :</strong> Jira, Trello, Azure Boards.</li>
          </ul>
        </div>

        <!-- CODE -->
        <div class="bg-white p-6 rounded-lg shadow border-l-4 border-indigo-500">
          <h3 class="text-xl font-bold text-indigo-700 mb-2">2. CODE</h3>
          <p class="text-gray-600 mb-3">Développement collaboratif et gestion de version.</p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>Utilisation de Git pour le versioning.</li>
            <li>Stratégies de branches (GitFlow, Trunk-Based).</li>
            <li>Code Review et Pull Requests systématiques.</li>
            <li><strong>Outils :</strong> Git, VS Code, GitLab, GitHub.</li>
          </ul>
        </div>

        <!-- BUILD -->
        <div class="bg-white p-6 rounded-lg shadow border-l-4 border-indigo-400">
          <h3 class="text-xl font-bold text-indigo-600 mb-2">3. BUILD</h3>
          <p class="text-gray-600 mb-3">Compilation et packaging automatisés.</p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>Transformation du code source en artefacts exécutables.</li>
            <li>Gestion des dépendances (npm, maven).</li>
            <li>Création d'images conteneurs (Docker).</li>
            <li><strong>Outils :</strong> Jenkins, Maven, Docker, Gradle.</li>
          </ul>
        </div>

        <!-- TEST -->
        <div class="bg-white p-6 rounded-lg shadow border-l-4 border-indigo-300">
          <h3 class="text-xl font-bold text-indigo-500 mb-2">4. TEST</h3>
          <p class="text-gray-600 mb-3">Assurance qualité continue.</p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>Tests unitaires, d'intégration et de bout en bout (E2E).</li>
            <li>Tests de sécurité (SAST/DAST).</li>
            <li>"Shift-Left" : tester le plus tôt possible.</li>
            <li><strong>Outils :</strong> Selenium, JUnit, SonarQube, Jest.</li>
          </ul>
        </div>

        <!-- RELEASE -->
        <div class="bg-white p-6 rounded-lg shadow border-l-4 border-purple-300">
          <h3 class="text-xl font-bold text-purple-500 mb-2">5. RELEASE</h3>
          <p class="text-gray-600 mb-3">Préparation à la mise en production.</p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>Gestion des versions (Semantic Versioning).</li>
            <li>Approbations et Release Gates.</li>
            <li>Génération de Release Notes.</li>
            <li><strong>Outils :</strong> Jenkins, GitLab CI, Artifactory.</li>
          </ul>
        </div>

        <!-- DEPLOY -->
        <div class="bg-white p-6 rounded-lg shadow border-l-4 border-purple-400">
          <h3 class="text-xl font-bold text-purple-600 mb-2">6. DEPLOY</h3>
          <p class="text-gray-600 mb-3">Mise en production automatisée.</p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>Infrastructure as Code (IaC) pour provisionner les serveurs.</li>
            <li>Stratégies : Blue-Green, Canary, Rolling Update.</li>
            <li>Déploiement sans interruption de service.</li>
            <li><strong>Outils :</strong> Ansible, Terraform, Kubernetes, ArgoCD.</li>
          </ul>
        </div>

        <!-- OPERATE -->
        <div class="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-purple-700 mb-2">7. OPERATE</h3>
          <p class="text-gray-600 mb-3">Gestion opérationnelle au quotidien.</p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>Gestion de la configuration et des patchs.</li>
            <li>Scaling automatique (Auto-scaling).</li>
            <li>Gestion des incidents et Runbooks.</li>
            <li><strong>Outils :</strong> Kubernetes, Ansible, PagerDuty.</li>
          </ul>
        </div>

        <!-- MONITOR -->
        <div class="bg-white p-6 rounded-lg shadow border-l-4 border-purple-600">
          <h3 class="text-xl font-bold text-purple-800 mb-2">8. MONITOR</h3>
          <p class="text-gray-600 mb-3">Surveillance et Feedback.</p>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>Collecte de logs, métriques et traces.</li>
            <li>Détection proactive des anomalies.</li>
            <li>Feedback vers les phases Plan et Code pour amélioration.</li>
            <li><strong>Outils :</strong> Prometheus, Grafana, ELK Stack, Datadog.</li>
          </ul>
        </div>
      </div>

      <div class="mt-8 bg-gray-100 p-6 rounded-lg text-center italic text-gray-700">
        "Le cycle infini brise les silos pour une livraison continue. La fin d'un cycle est le début du suivant."
      </div>
    `
  },
  {
    id: 'agile-devops',
    category: 'Fondamentaux de DevOps',
    title: 'Agile vs DevOps',
    timing: '1h',
    icon: GitMerge,
    content: `
      
    
      
<!-- Table rendered via React Component -->
    `
  },
  {
    id: 'safe',
    category: 'Fondamentaux de DevOps',
    title: 'SAFe & DevOps',
    timing: '1.5h',
    icon: Globe,
    content: `
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">SAFe (Scaled Agile Framework)</h2>
      <p class="mb-6 text-gray-600 text-lg">Comment appliquer l'Agilité et le DevOps à l'échelle d'une grande entreprise.</p>

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-500">
          <h3 class="font-bold text-xl text-blue-800 mb-3">Structure SAFe</h3>
          <ul class="space-y-3 text-gray-700">
            <li><strong>Team Level :</strong> Équipes Scrum/Kanban classiques.</li>
            <li><strong>Program Level :</strong> "Agile Release Train" (ART) - équipes synchronisées.</li>
            <li><strong>Portfolio Level :</strong> Alignement stratégique et budgétaire.</li>
          </ul>
        </div>
        <div class="bg-green-50 p-6 rounded-lg border-t-4 border-green-500">
          <h3 class="font-bold text-xl text-green-800 mb-3">Rôle du DevOps dans SAFe</h3>
          <p class="mb-2">DevOps est le moteur technique qui permet à SAFe de fonctionner.</p>
          <ul class="list-disc list-inside text-gray-700">
            <li><strong>Continuous Delivery Pipeline :</strong> Le cœur de l'ART.</li>
            <li><strong>Release on Demand :</strong> Découpler le déploiement de la release business.</li>
          </ul>
        </div>
      </div>

      <div class="bg-gray-100 p-6 rounded-lg">
        <h3 class="font-bold text-lg mb-2">En résumé :</h3>
        <p class="italic text-gray-700">
          "SAFe fournit l’organisation Agile à grande échelle, DevOps fournit l’automatisation technique qui rend cette échelle possible."
        </p>
      </div>
    `
  },{
    id: 'docker-intro',
    category: 'Outils et Automatisation',
    title: '🎯 Introduction à Docker',
    timing: '2.5h',
    icon: Container,
    content: `
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">🎯 Introduction à Docker</h2>

      <!-- VM vs Docker Comparison -->
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-lg mb-8 border-l-4 border-indigo-500">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Machine Virtuelle vs Docker : La Révolution du Déploiement</h3>
        <p class="mb-6 text-gray-700 text-lg leading-relaxed">
          Avant de comprendre Docker, il faut comprendre pourquoi les <strong>Machines Virtuelles (VM)</strong> ne suffisent plus dans le monde DevOps moderne.
        </p>
      </div>

      <h3 class="text-2xl font-bold mb-4 text-gray-800">Qu'est-ce qu'une Machine Virtuelle ?</h3>
      <div class="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-blue-500">
        <p class="mb-4 text-gray-700">
          Une <strong>Machine Virtuelle (VM)</strong> simule un ordinateur complet à l'intérieur d'un autre ordinateur. 
          Elle inclut un <strong>système d'exploitation entier</strong> (Windows, Linux), des pilotes, des bibliothèques système, etc.
        </p>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-bold text-blue-700 mb-2">Architecture d'une VM</h4>
          <div class="space-y-2 text-sm font-mono">
            <div class="bg-blue-100 p-2 rounded">👉 Application A (ex: Apache)</div>
            <div class="bg-blue-200 p-2 rounded">👉 OS Complet (ex: Ubuntu - 2 GB)</div>
            <div class="bg-blue-300 p-2 rounded">👉 Hyperviseur (VMware, VirtualBox)</div>
            <div class="bg-gray-700 text-white p-2 rounded">👉 Système Hôte</div>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-bold mb-4 text-gray-800">Qu'est-ce que Docker ?</h3>
      <div class="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-green-500">
        <p class="mb-4 text-gray-700">
          Docker utilise des <strong>conteneurs</strong> qui partagent le noyau du système hôte. 
          Au lieu d'embarquer un OS complet, le conteneur n'embarque que l'application et ses dépendances.
        </p>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-bold text-green-700 mb-2">Architecture Docker</h4>
          <div class="space-y-2 text-sm font-mono">
            <div class="bg-green-100 p-2 rounded">👉 Application A (Apache) + Dépendances (50 MB)</div>
            <div class="bg-green-100 p-2 rounded">👉 Application B (Node.js) + Dépendances (100 MB)</div>
            <div class="bg-green-200 p-2 rounded">👉 Docker Engine</div>
            <div class="bg-gray-700 text-white p-2 rounded">👉 Système Hôte (un seul OS partagé)</div>
          </div>
        </div>
      </div>

      

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-red-50 p-6 rounded-xl border border-red-200">
          <h4 class="text-lg font-bold mb-3 text-red-700 flex items-center">
            <span class="text-2xl mr-2">🖥️</span> Problèmes des VMs
          </h4>
          <ul class="space-y-2 text-gray-700 text-sm">
            <li>❌ <strong>Lourdes :</strong> Chaque VM = un OS complet (gaspillage de ressources)</li>
            <li>❌ <strong>Lentes :</strong> Démarrage en minutes</li>
            <li>❌ <strong>Coûteuses :</strong> Nécessitent beaucoup de RAM et CPU</li>
            <li>❌ <strong>Complexes :</strong> Maintenance d'OS multiples</li>
            <li>❌ <strong>Pas adaptées au DevOps :</strong> Trop lentes pour CI/CD moderne</li>
          </ul>
        </div>

        <div class="bg-green-50 p-6 rounded-xl border border-green-200">
          <h4 class="text-lg font-bold mb-3 text-green-700 flex items-center">
            <span class="text-2xl mr-2">🐳</span> Avantages de Docker
          </h4>
          <ul class="space-y-2 text-gray-700 text-sm">
            <li>✅ <strong>Léger :</strong> Ne contient que l'application</li>
            <li>✅ <strong>Rapide :</strong> Démarrage en secondes</li>
            <li>✅ <strong>Efficace :</strong> Partage les ressources du système hôte</li>
            <li>✅ <strong>Portable :</strong> "Build once, run anywhere"</li>
            <li>✅ <strong>Parfait pour DevOps :</strong> Idéal pour CI/CD et microservices</li>
          </ul>
        </div>
      </div>

      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 text-center shadow-lg">
        <h4 class="text-2xl font-bold mb-3">🎯 La Règle d'Or</h4>
        <p class="text-lg mb-2">
          <strong>Machine Virtuelle :</strong> Quand vous avez besoin d'un OS complet différent (Windows sur Linux, isolation maximale).
        </p>
        <p class="text-lg">
          <strong>Docker :</strong> Pour tout le reste ! Surtout pour les applications cloud-native, microservices et pipelines DevOps.
        </p>
      </div>

      <!-- Docker Definition -->
      <h3 class="text-2xl font-bold mb-4 text-gray-800">👉 Docker c'est quoi ?</h3>
      <div class="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-indigo-500">
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          Docker est une plateforme qui permet de :
        </p>
        <div class="grid md:grid-cols-3 gap-4 mb-4">
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <div class="text-3xl mb-2">🔨</div>
            <h4 class="font-bold text-blue-700">Créer</h4>
          </div>
          <div class="bg-green-50 p-4 rounded-lg text-center">
            <div class="text-3xl mb-2">🚀</div>
            <h4 class="font-bold text-green-700">Déployer</h4>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg text-center">
            <div class="text-3xl mb-2">▶️</div>
            <h4 class="font-bold text-purple-700">Exécuter</h4>
          </div>
        </div>
        <p class="text-gray-700">
          des applications dans des <strong>conteneurs</strong>, de façon <strong>rapide</strong> et <strong>standardisée</strong>.
        </p>
      </div>

      <h3 class="text-2xl font-bold mb-4 text-gray-800">👉 C'est quoi un conteneur ?</h3>
      <div class="bg-white p-6 rounded-lg shadow-md mb-8">
        <p class="mb-4 text-gray-700">
          Un conteneur = un mini-ordinateur qui contient :
        </p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="space-y-3">
            <div class="flex items-center bg-blue-50 p-3 rounded-lg">
              <span class="text-2xl mr-3">💻</span>
              <span class="font-semibold">ton application</span>
            </div>
            <div class="flex items-center bg-green-50 p-3 rounded-lg">
              <span class="text-2xl mr-3">📦</span>
              <span class="font-semibold">les dépendances</span>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-center bg-purple-50 p-3 rounded-lg">
              <span class="text-2xl mr-3">⚙️</span>
              <span class="font-semibold">les configurations</span>
            </div>
            <div class="flex items-center bg-orange-50 p-3 rounded-lg">
              <span class="text-2xl mr-3">🌍</span>
              <span class="font-semibold">l'environnement nécessaire</span>
            </div>
          </div>
        </div>
        <div class="mt-6 bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <p class="text-indigo-800 font-medium">
            → Il garantit que l'application fonctionne <strong>partout de la même manière</strong>.
          </p>
        </div>
      </div>

      <!-- Why Docker is Essential -->
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">🚀 Pourquoi Docker est essentiel dans DevOps ?</h2>
      <div class="overflow-x-auto shadow-lg rounded-lg mb-8">
        <table class="min-w-full bg-white">
          <thead class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
            <tr>
              <th class="py-3 px-6 text-left">Besoin DevOps</th>
              <th class="py-3 px-6 text-left">Comment Docker aide ?</th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr class="border-b bg-gray-50">
              <td class="py-3 px-6 font-bold">Automatiser</td>
              <td class="py-3 px-6">Image + pipeline</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-6 font-bold">Déployer rapidement</td>
              <td class="py-3 px-6">Conteneurs très rapides</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="py-3 px-6 font-bold">Éviter les bugs "ça marche chez moi"</td>
              <td class="py-3 px-6">Environnement standard</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-6 font-bold">Scalabilité</td>
              <td class="py-3 px-6">Lancer plusieurs conteneurs</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="py-3 px-6 font-bold">CI/CD</td>
              <td class="py-3 px-6">CI = build docker, CD = déploiement docker</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Key Concepts -->
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">🧠 Concepts clés de Docker</h2>
      <div class="space-y-6 mb-8">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-blue-500">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3 text-gray-800">🔹 Image Docker</h3>
            <p class="text-gray-700 mb-3">
              Un modèle qui contient le code + les dépendances.
            </p>
            <div class="bg-gray-50 p-3 rounded-lg">
              <p class="text-sm text-gray-600">
                <strong>Exemple :</strong> <code class="bg-gray-200 px-2 py-1 rounded">python:3.11</code>, 
                <code class="bg-gray-200 px-2 py-1 rounded">nginx</code>, 
                <code class="bg-gray-200 px-2 py-1 rounded">mysql:8</code>
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-green-500">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3 text-gray-800">🔹 Conteneur Docker</h3>
            <p class="text-gray-700">
              Une <strong>instance</strong> d'une image (comme "lancer l'image").
            </p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-purple-500">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3 text-gray-800">🔹 Dockerfile</h3>
            <p class="text-gray-700 mb-3">
              Un fichier qui décrit comment construire une image.
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm font-semibold text-gray-700 mb-2">Exemple simple :</p>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>FROM python:3.11
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "app.py"]</code></pre>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-orange-500">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3 text-gray-800">🔹 Docker Hub</h3>
            <p class="text-gray-700">
              Un magasin d'images (comme Play Store mais pour Docker).
            </p>
          </div>
        </div>
      </div>

      <!-- Workflow -->
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">🏗️ Workflow DevOps avec Docker</h2>
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <div class="space-y-4">
          <div class="flex items-center">
            <div class="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">1</div>
            <p class="text-gray-700">Le développeur écrit son code</p>
          </div>
          <div class="flex items-center">
            <div class="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">2</div>
            <p class="text-gray-700">Il crée une image Docker</p>
          </div>
          <div class="flex items-center">
            <div class="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">3</div>
            <p class="text-gray-700">Il pousse l'image vers Docker Hub</p>
          </div>
          <div class="flex items-center">
            <div class="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">4</div>
            <p class="text-gray-700">CI/CD lance l'image sur le serveur</p>
          </div>
          <div class="flex items-center">
            <div class="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">5</div>
            <p class="text-gray-700 font-semibold">L'application est déployée automatiquement</p>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 p-6 rounded-lg mb-8 text-center">
        <p class="text-xl font-mono text-gray-700">
          <span class="font-bold text-indigo-600">Code</span> → 
          <span class="font-bold text-blue-600">Dockerfile</span> → 
          <span class="font-bold text-purple-600">Image</span> → 
          <span class="font-bold text-green-600">Registry</span> → 
          <span class="font-bold text-orange-600">Déploiement</span> → 
          <span class="font-bold text-red-600">Prod</span>
        </p>
        <p class="mt-4 text-sm text-gray-600">
          Avec Kubernetes, Docker devient scalable.
        </p>
      </div>

      <!-- TP 1: Docker Command Center -->
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">🐳 Docker Command Center</h2>
      <p class="text-lg mb-8 text-gray-700 text-center">Guide interactif des commandes Docker - Cliquez sur les commandes pour les copier !</p>

      <!-- Commandes de Base -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-6 text-indigo-700 border-b-4 border-indigo-500 pb-3">🚀 Commandes de Base</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-3">✅</div>
            <h4 class="text-xl font-bold text-gray-800 mb-3">Vérifier Docker</h4>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code>docker --version</code></pre>
            <p class="text-gray-600 mt-3">Vérifie que Docker est installé et affiche la version</p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-3">📁</div>
            <h4 class="text-xl font-bold text-gray-800 mb-3">Créer le dossier de travail</h4>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code>mkdir docker-tp && cd docker-tp</code></pre>
            <p class="text-gray-600 mt-3">Crée et entre dans le dossier du projet</p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-3">🏗️</div>
            <h4 class="text-xl font-bold text-gray-800 mb-3">Construire l'image</h4>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code>docker build -t mon-image .</code></pre>
            <p class="text-gray-600 mt-3">Construit une image Docker à partir du Dockerfile</p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-3">🚀</div>
            <h4 class="text-xl font-bold text-gray-800 mb-3">Lancer le conteneur</h4>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code>docker run -d -p 8080:80 --name mon-conteneur mon-image</code></pre>
            <p class="text-gray-600 mt-3">Lance un conteneur en arrière-plan sur le port 8080</p>
          </div>
        </div>
      </div>

      <!-- Gestion des Conteneurs -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-6 text-purple-700 border-b-4 border-purple-500 pb-3">📦 Gestion des Conteneurs</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md">
            <div class="text-4xl mb-3">👀</div>
            <h4 class="text-xl font-bold text-gray-800 mb-3">Voir les conteneurs actifs</h4>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code>docker ps</code></pre>
            <p class="text-gray-600 mt-3">Affiche uniquement les conteneurs en cours d'exécution</p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md">
            <div class="text-4xl mb-3">📋</div>
            <h4 class="text-xl font-bold text-gray-800 mb-3">Voir tous les conteneurs</h4>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code>docker ps -a</code></pre>
            <p class="text-gray-600 mt-3">Affiche tous les conteneurs (actifs et arrêtés)</p>
          </div>

          <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-md">
            <div class="text-4xl mb-3">⏸️</div>
            <h4 class="text-xl font-bold text-gray-800 mb-3">Arrêter un conteneur</h4>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code>docker stop mon-conteneur</code></pre>
            <p class="text-gray-600 mt-3">Arrête un conteneur spécifique</p>
          </div>

          <div class="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl shadow-md">
            <div class="text-4xl mb-3">🗑️</div>
            <h4 class="text-xl font-bold text-gray-800 mb-3">Supprimer un conteneur</h4>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code>docker rm mon-conteneur</code></pre>
            <p class="text-gray-600 mt-3">Supprime un conteneur (doit être arrêté)</p>
          </div>
        </div>
      </div>

      <!-- Gestion des Images -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-6 text-green-700 border-b-4 border-green-500 pb-3">🖼️ Gestion des Images</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl shadow-md">
            <div class="text-4xl mb-3">🖼️</div>
            <h4 class="text-xl font-bold text-gray-800 mb-3">Lister les images</h4>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code>docker images</code></pre>
            <p class="text-gray-600 mt-3">Affiche toutes les images Docker disponibles</p>
          </div>

          <div class="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl shadow-md">
            <div class="text-4xl mb-3">❌</div>
            <h4 class="text-xl font-bold text-gray-800 mb-3">Supprimer une image</h4>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code>docker rmi mon-image</code></pre>
            <p class="text-gray-600 mt-3">Supprime une image spécifique</p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-md">
            <div class="text-4xl mb-3">🧹</div>
            <h4 class="text-xl font-bold text-gray-800 mb-3">Nettoyer les images</h4>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code>docker image prune -a</code></pre>
            <p class="text-gray-600 mt-3">Supprime toutes les images non utilisées</p>
          </div>
        </div>
      </div>

      <!-- Fichiers de Configuration -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-6 text-indigo-700 border-b-4 border-indigo-500 pb-3">📄 Fichiers de Configuration</h3>
        
        <div class="mb-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-4xl">🐳</span>
            <h4 class="text-xl font-bold text-gray-800">Dockerfile</h4>
          </div>
          <pre class="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm"><code># Utilise une image nginx légère
FROM nginx:alpine

# Copie tout le contenu vers nginx
COPY . /usr/share/nginx/html</code></pre>
        </div>

        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="text-4xl">🌐</span>
            <h4 class="text-xl font-bold text-gray-800">index.html</h4>
          </div>
          <pre class="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Accueil - Docker TP&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Bienvenue dans mon premier projet Docker 🐳&lt;/h1&gt;
    &lt;p&gt;Cette page tourne dans un conteneur Docker avec Nginx&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        </div>
      </div>

      <!-- TP 2: Partager une image Docker -->
      <h2 class="text-3xl font-bold mb-6 mt-12 text-indigo-700">🐳 TP : Partager une image Docker</h2>
      <p class="text-lg mb-8 text-gray-700 text-center">Guide pratique pour partager ton image avec d'autres postes</p>

      <!-- Comparaison des méthodes -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-6 text-center text-gray-800">📊 Comparaison des méthodes</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border-collapse">
            <thead class="bg-indigo-600 text-white">
              <tr>
                <th class="py-4 px-6 text-left font-bold">Méthode</th>
                <th class="py-4 px-6 text-left font-bold">Difficulté</th>
                <th class="py-4 px-6 text-left font-bold">Internet requis</th>
                <th class="py-4 px-6 text-left font-bold">Meilleur pour</th>
              </tr>
            </thead>
            <tbody class="text-gray-700">
              <tr class="border-b hover:bg-gray-50">
                <td class="py-4 px-6 font-semibold">🌐 Docker Hub</td>
                <td class="py-4 px-6">⭐ Facile</td>
                <td class="py-4 px-6">✅ Oui</td>
                <td class="py-4 px-6">Partage public/équipe</td>
              </tr>
              <tr class="border-b hover:bg-gray-50">
                <td class="py-4 px-6 font-semibold">💾 Export/Import</td>
                <td class="py-4 px-6">⭐⭐ Moyen</td>
                <td class="py-4 px-6">❌ Non</td>
                <td class="py-4 px-6">Transfert local/USB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Méthode 1: Docker Hub -->
      <div class="bg-white p-8 rounded-lg shadow-lg mb-8 border-t-4 border-blue-500">
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl">🌐</span>
          <div>
            <h3 class="text-2xl font-bold text-gray-800">Méthode 1 : Docker Hub</h3>
            <p class="text-gray-600">La plus utilisée et recommandée ⭐</p>
          </div>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
          <p class="font-bold text-blue-800 mb-2">💡 C'est quoi Docker Hub ?</p>
          <p class="text-gray-700">C'est comme GitHub mais pour les images Docker. Gratuit pour les images publiques !</p>
        </div>

        <div class="space-y-6">
          <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <div class="flex items-center gap-3 mb-3">
              <span class="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
              <h4 class="text-lg font-bold text-gray-800">Créer un compte Docker Hub</h4>
            </div>
            <p class="text-gray-700 mb-2">👉 Va sur <a href="https://hub.docker.com" target="_blank" class="text-indigo-600 font-bold hover:underline">hub.docker.com</a> et crée un compte gratuit</p>
            <p class="text-gray-700">📝 Note ton <strong>username</strong>, tu en auras besoin !</p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <div class="flex items-center gap-3 mb-3">
              <span class="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
              <h4 class="text-lg font-bold text-gray-800">Se connecter depuis ton terminal</h4>
            </div>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mb-2"><code>docker login</code></pre>
            <p class="text-gray-700">Entrer ton username et password</p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <div class="flex items-center gap-3 mb-3">
              <span class="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
              <h4 class="text-lg font-bold text-gray-800">Vérifier le nom de ton image</h4>
            </div>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mb-2"><code>docker images</code></pre>
            <p class="text-gray-700">📋 Tu verras la liste de tes images. Note le nom (exemple: <strong>mon-image</strong>)</p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <div class="flex items-center gap-3 mb-3">
              <span class="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
              <h4 class="text-lg font-bold text-gray-800">Taguer ton image avec ton username</h4>
            </div>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mb-3"><code>docker tag mon-image username/mon-image:v1.0</code></pre>
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
              <p class="font-bold text-yellow-800 mb-1">⚠️ Important</p>
              <p class="text-gray-700">Remplace <strong>username</strong> par ton vrai username Docker Hub !</p>
            </div>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <div class="flex items-center gap-3 mb-3">
              <span class="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">5</span>
              <h4 class="text-lg font-bold text-gray-800">Pousser l'image sur Docker Hub</h4>
            </div>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mb-2"><code>docker push username/mon-image:v1.0</code></pre>
            <p class="text-gray-700">⏳ Attends quelques minutes (selon la taille de l'image)</p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <div class="flex items-center gap-3 mb-3">
              <span class="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">6</span>
              <h4 class="text-lg font-bold text-gray-800">Vérifier sur Docker Hub</h4>
            </div>
            <p class="text-gray-700 mb-2">👉 Va sur <strong>hub.docker.com/r/username/mon-image</strong></p>
            <p class="text-gray-700">✅ Tu devrais voir ton image en ligne !</p>
          </div>
        </div>

        <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mt-6">
          <p class="font-bold text-green-800 text-lg mb-4">🎉 Sur l'autre poste (ton ami, collègue, etc.)</p>
          <p class="text-gray-700 mb-4"><strong>Ils n'ont besoin que de 2 commandes :</strong></p>
          <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mb-3"><code>docker pull username/mon-image:v1.0</code></pre>
          <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mb-3"><code>docker run -d -p 8080:80 username/mon-image:v1.0</code></pre>
          <p class="text-gray-700">🌐 Ils ouvrent <strong>localhost:8080</strong> et voilà ! 🚀</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
            <p class="font-bold text-green-800 mb-3">✅ Avantages</p>
            <ul class="space-y-2 text-gray-700">
              <li>• Super simple à utiliser</li>
              <li>• Accessible de n'importe où</li>
              <li>• Gratuit pour images publiques</li>
              <li>• Versionning facile (v1.0, v2.0...)</li>
            </ul>
          </div>
          <div class="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
            <p class="font-bold text-red-800 mb-3">❌ Inconvénients</p>
            <ul class="space-y-2 text-gray-700">
              <li>• Nécessite une connexion internet</li>
              <li>• Image publique (tout le monde peut voir)</li>
              <li>• Temps d'upload selon taille</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Méthode 2: Export/Import -->
      <div class="bg-white p-8 rounded-lg shadow-lg mb-8 border-t-4 border-red-500">
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl">💾</span>
          <div>
            <h3 class="text-2xl font-bold text-gray-800">Méthode 2 : Export/Import (Sans internet)</h3>
            <p class="text-gray-600">Parfait pour transfert local 📁</p>
          </div>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
          <p class="font-bold text-blue-800 mb-2">💡 Quand utiliser cette méthode ?</p>
          <p class="text-gray-700">Quand tu veux partager avec une clé USB, email, ou dans un réseau local sans internet</p>
        </div>

        <div class="space-y-6">
          <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
            <div class="flex items-center gap-3 mb-3">
              <span class="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
              <h4 class="text-lg font-bold text-gray-800">Vérifier le nom de ton image</h4>
            </div>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code>docker images</code></pre>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
            <div class="flex items-center gap-3 mb-3">
              <span class="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
              <h4 class="text-lg font-bold text-gray-800">Exporter l'image dans un fichier .tar</h4>
            </div>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mb-3"><code>docker save -o mon-image.tar mon-image</code></pre>
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
              <p class="font-bold text-yellow-800 mb-1">📍 Où trouver le fichier ?</p>
              <p class="text-gray-700">Le fichier <strong>mon-image.tar</strong> sera créé dans ton dossier actuel</p>
            </div>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
            <div class="flex items-center gap-3 mb-3">
              <span class="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
              <h4 class="text-lg font-bold text-gray-800">Transférer le fichier .tar</h4>
            </div>
            <p class="text-gray-700 mb-2">Tu peux le transférer par :</p>
            <ul class="space-y-2 text-gray-700 ml-4">
              <li>💾 Clé USB</li>
              <li>📧 Email (si pas trop gros)</li>
              <li>☁️ Google Drive / Dropbox</li>
              <li>🌐 WeTransfer</li>
            </ul>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
            <div class="flex items-center gap-3 mb-3">
              <span class="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
              <h4 class="text-lg font-bold text-gray-800">Sur l'autre poste : Charger l'image</h4>
            </div>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mb-2"><code>docker load -i mon-image.tar</code></pre>
            <p class="text-gray-700">⏳ Attends quelques secondes...</p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
            <div class="flex items-center gap-3 mb-3">
              <span class="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">5</span>
              <h4 class="text-lg font-bold text-gray-800">Vérifier que l'image est bien chargée</h4>
            </div>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code>docker images</code></pre>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
            <div class="flex items-center gap-3 mb-3">
              <span class="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">6</span>
              <h4 class="text-lg font-bold text-gray-800">Lancer le conteneur</h4>
            </div>
            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code>docker run -d -p 8080:80 mon-image</code></pre>
          </div>
        </div>

        <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mt-6">
          <p class="font-bold text-green-800 text-lg mb-2">🎉 C'est tout !</p>
          <p class="text-gray-700">Ouvre <strong>localhost:8080</strong> et ton application fonctionne !</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
            <p class="font-bold text-green-800 mb-3">✅ Avantages</p>
            <ul class="space-y-2 text-gray-700">
              <li>• Pas besoin d'internet</li>
              <li>• Image privée (pas publique)</li>
              <li>• Fonctionne offline</li>
              <li>• Contrôle total du transfert</li>
            </ul>
          </div>
          <div class="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
            <p class="font-bold text-red-800 mb-3">❌ Inconvénients</p>
            <ul class="space-y-2 text-gray-700">
              <li>• Fichier peut être gros (100Mo-1Go+)</li>
              <li>• Transfert manuel nécessaire</li>
              <li>• Pas de versionning automatique</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div class="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-6 text-center text-gray-800">❓ Questions Fréquentes</h3>
        <div class="space-y-6">
          <div>
            <h4 class="text-lg font-bold text-indigo-700 mb-2">💰 Docker Hub est-il gratuit ?</h4>
            <p class="text-gray-700">Oui ! Les images publiques sont gratuites. Pour les images privées, il existe un plan gratuit limité.</p>
          </div>
          <div>
            <h4 class="text-lg font-bold text-indigo-700 mb-2">📏 Quelle est la taille maximale ?</h4>
            <p class="text-gray-700">Pas de limite stricte, mais essaie de garder tes images légères (&lt; 500MB idéalement).</p>
          </div>
          <div>
            <h4 class="text-lg font-bold text-indigo-700 mb-2">🔒 Comment rendre mon image privée ?</h4>
            <p class="text-gray-700">Sur Docker Hub, tu peux créer des repositories privés (limité en version gratuite).</p>
          </div>
          <div>
            <h4 class="text-lg font-bold text-indigo-700 mb-2">🔄 Comment mettre à jour mon image ?</h4>
            <p class="text-gray-700">Modifie ton code, rebuild l'image, retag avec une nouvelle version (v1.1, v2.0...) et push à nouveau !</p>
          </div>
          <div>
            <h4 class="text-lg font-bold text-indigo-700 mb-2">⚡ Quelle méthode choisir ?</h4>
            <p class="text-gray-700"><strong>Docker Hub</strong> pour la simplicité et le partage à distance, <strong>Export/Import</strong> pour le transfert sans internet.</p>
          </div>
        </div>
      </div>

      <!-- Conclusion Finale -->
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg shadow-xl text-center">
        <h2 class="text-3xl font-bold mb-4">🎉 Félicitations !</h2>
        <p class="text-xl mb-4">Tu sais maintenant comment partager tes images Docker avec le monde entier ! 🚀</p>
        <p class="text-lg opacity-90">N'oublie pas : La pratique rend parfait. Teste les 2 méthodes ! 💪</p>
      </div>
    `
  },
  {
    id: 'kubernetes',
    category: 'Outils et Automatisation',
    title: '☸️ Kubernetes',
    timing: '3h',
    icon: Container,
    content: `
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">☸️ Kubernetes - Orchestration de Conteneurs</h2>

      <!-- Qu'est-ce que Kubernetes -->
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-lg mb-8 border-l-4 border-blue-500">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Qu'est-ce que Kubernetes ?</h3>
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          Kubernetes (K8s) est une plateforme open-source qui automatise le déploiement, la mise à l'échelle et la gestion des applications conteneurisées. 
          Créé par Google en 2014 et maintenu par la CNCF, il est devenu le <strong>standard de l'industrie</strong> pour l'orchestration de conteneurs.
        </p>
        <div class="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-5 rounded-lg mt-4">
          <p class="font-semibold text-center">Le nom "Kubernetes" vient du grec ancien et signifie "timonier" - celui qui guide le navire.</p>
        </div>
      </div>

      <!-- Historique -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Historique Clé</h3>
        <div class="space-y-4">
          <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
            <p class="font-bold text-blue-700 text-lg mb-2">2003-2004</p>
            <p class="text-gray-700">Google crée Borg, système interne d'orchestration de conteneurs</p>
          </div>
          <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-purple-500">
            <p class="font-bold text-purple-700 text-lg mb-2">7 Juin 2014</p>
            <p class="text-gray-700">Google lance Kubernetes en open-source</p>
          </div>
          <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
            <p class="font-bold text-green-700 text-lg mb-2">21 Juillet 2015</p>
            <p class="text-gray-700">Sortie de Kubernetes v1.0 et création de la CNCF</p>
          </div>
          <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-indigo-500">
            <p class="font-bold text-indigo-700 text-lg mb-2">2018-2025</p>
            <p class="text-gray-700">Kubernetes devient le standard pour l'orchestration de conteneurs</p>
          </div>
        </div>
      </div>

      <!-- Principes Fondamentaux -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Principes Fondamentaux</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
            <h4 class="font-bold text-lg text-blue-800 mb-3">Approche Déclarative</h4>
            <p class="text-gray-700">Vous décrivez l'état souhaité de votre système, Kubernetes maintient automatiquement cet état.</p>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
            <h4 class="font-bold text-lg text-green-800 mb-3">Auto-guérison</h4>
            <p class="text-gray-700">Redémarrage automatique des conteneurs défaillants, remplacement des nœuds, gestion des échecs.</p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
            <h4 class="font-bold text-lg text-purple-800 mb-3">Infrastructure Immuable</h4>
            <p class="text-gray-700">Les conteneurs ne sont pas modifiés mais remplacés par de nouvelles versions.</p>
          </div>
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
            <h4 class="font-bold text-lg text-orange-800 mb-3">Scalabilité</h4>
            <p class="text-gray-700">Ajustement automatique des ressources en fonction de la charge.</p>
          </div>
        </div>
      </div>

      <!-- Fonctionnalités Principales -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Fonctionnalités Principales</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start">
            <span class="text-blue-500 mr-3 text-xl">✓</span>
            <div>
              <strong class="text-gray-800">Déploiement automatisé</strong> - Gestion des déploiements avec rollback automatique
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-3 text-xl">✓</span>
            <div>
              <strong class="text-gray-800">Mise à l'échelle</strong> - Ajustement automatique du nombre d'instances
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-3 text-xl">✓</span>
            <div>
              <strong class="text-gray-800">Équilibrage de charge</strong> - Distribution du trafic entre les conteneurs
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-3 text-xl">✓</span>
            <div>
              <strong class="text-gray-800">Auto-guérison</strong> - Remplacement automatique des conteneurs défaillants
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-3 text-xl">✓</span>
            <div>
              <strong class="text-gray-800">Gestion des secrets</strong> - Stockage sécurisé des informations sensibles
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-3 text-xl">✓</span>
            <div>
              <strong class="text-gray-800">Orchestration du stockage</strong> - Gestion automatique des volumes persistants
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-3 text-xl">✓</span>
            <div>
              <strong class="text-gray-800">Multi-cloud</strong> - Portabilité entre différents fournisseurs
            </div>
          </li>
        </ul>
      </div>

      <!-- Avantages -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Avantages</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-6 rounded-xl transform transition hover:-translate-y-2 shadow-lg">
            <h4 class="font-bold text-lg mb-3">Portabilité</h4>
            <p class="text-sm">Déployez sur n'importe quelle infrastructure : cloud, on-premise, hybride</p>
          </div>
          <div class="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-xl transform transition hover:-translate-y-2 shadow-lg">
            <h4 class="font-bold text-lg mb-3">Scalabilité</h4>
            <p class="text-sm">Mise à l'échelle horizontale et verticale automatique ou manuelle</p>
          </div>
          <div class="bg-gradient-to-br from-green-500 to-teal-500 text-white p-6 rounded-xl transform transition hover:-translate-y-2 shadow-lg">
            <h4 class="font-bold text-lg mb-3">Haute Disponibilité</h4>
            <p class="text-sm">Architecture distribuée avec redondance intégrée</p>
          </div>
          <div class="bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-xl transform transition hover:-translate-y-2 shadow-lg">
            <h4 class="font-bold text-lg mb-3">Écosystème</h4>
            <p class="text-sm">Large communauté et nombreux outils compatibles</p>
          </div>
        </div>
      </div>

      <!-- Cas d'Usage -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Cas d'Usage</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p class="text-gray-700">✦ Applications microservices</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <p class="text-gray-700">✦ Applications cloud-native</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p class="text-gray-700">✦ CI/CD et automatisation DevOps</p>
          </div>
          <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
            <p class="text-gray-700">✦ Applications nécessitant une haute disponibilité</p>
          </div>
          <div class="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
            <p class="text-gray-700">✦ Environnements multi-cloud et hybrides</p>
          </div>
          <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
            <p class="text-gray-700">✦ Machine Learning et Big Data</p>
          </div>
        </div>
      </div>

      <!-- Points d'Attention -->
      <div class="bg-yellow-50 p-6 rounded-lg shadow-lg mb-8 border-l-4 border-yellow-500">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">⚠️ Points d'Attention</h3>
        <div class="space-y-4">
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-gray-800 mb-2">Complexité</h4>
            <p class="text-gray-700">Courbe d'apprentissage importante, nécessite une formation.</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-gray-800 mb-2">Overhead</h4>
            <p class="text-gray-700">Peut être trop lourd pour les petites applications simples.</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-gray-800 mb-2">Sécurité</h4>
            <p class="text-gray-700">Nécessite une configuration appropriée (RBAC, politiques réseau).</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-gray-800 mb-2">Coût</h4>
            <p class="text-gray-700">Infrastructure et ressources significatives nécessaires.</p>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-lg text-center">
        <h3 class="text-2xl font-bold mb-2">☸️ Kubernetes</h3>
        <p class="text-lg">Standard de l'Orchestration de Conteneurs</p>
        <p class="text-sm mt-2 opacity-80">© 2025 - Présentation Éducative</p>
      </div>
    `
  },
  {
    id: 'gitlab-ci',
    category: 'Outils et Automatisation',
    title: '🦊 GitLab CI/CD',
    timing: '3h',
    icon: GitBranch,
    content: `
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">🦊 GitLab CI/CD : La Plateforme All-in-One</h2>

      <!-- Introduction -->
      <div class="bg-gradient-to-r from-orange-50 to-purple-50 p-6 rounded-lg shadow-lg mb-8 border-l-4 border-orange-500">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Pourquoi GitLab est le Leader du DevOps ?</h3>
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          GitLab est considéré comme l'outil le plus <strong>complet</strong> du marché DevOps. 
          Contrairement à GitHub + GitHub Actions ou Jenkins séparés, GitLab offre une plateforme <strong>"All-in-One"</strong> :
        </p>
        <div class="grid md:grid-cols-4 gap-4 mt-4">
          <div class="bg-white p-3 rounded-lg text-center shadow-sm">
            <div class="text-2xl mb-1">📦</div>
            <p class="text-sm font-semibold text-gray-700">Gestion du Code</p>
          </div>
          <div class="bg-white p-3 rounded-lg text-center shadow-sm">
            <div class="text-2xl mb-1">🔄</div>
            <p class="text-sm font-semibold text-gray-700">CI/CD Intégré</p>
          </div>
          <div class="bg-white p-3 rounded-lg text-center shadow-sm">
            <div class="text-2xl mb-1">🔒</div>
            <p class="text-sm font-semibold text-gray-700">Sécurité (SAST/DAST)</p>
          </div>
          <div class="bg-white p-3 rounded-lg text-center shadow-sm">
            <div class="text-2xl mb-1">📋</div>
            <p class="text-sm font-semibold text-gray-700">Gestion de Projet</p>
          </div>
        </div>
      </div>

      <!-- PARTIE 1: Fondamentaux CI -->
      <h2 class="text-3xl font-bold mb-6 text-orange-600">📚 PARTIE 1 : Fondamentaux de la CI (Intégration Continue)</h2>

      <!-- Définitions -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-lg border-l-8 border-blue-500">
          <h3 class="text-xl font-bold mb-3 text-blue-800">📖 Définition Académique</h3>
          <p class="text-gray-700">
            L'<strong>Intégration Continue (CI)</strong> est une pratique de développement logiciel où les membres d'une équipe 
            <strong>intègrent fréquemment</strong> leur travail dans un référentiel partagé. Chaque intégration est vérifiée 
            par une <strong>construction automatisée</strong> (incluant des tests) pour détecter les erreurs d'intégration 
            le plus rapidement possible.
          </p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg border-l-8 border-green-500">
          <h3 class="text-xl font-bold mb-3 text-green-800">🍕 Analogie Simple</h3>
          <p class="text-gray-700">
            Imaginez une <strong>pizzeria</strong> avec plusieurs cuisiniers. Chaque cuisinier prépare un ingrédient différent.
            <br/><br/>
            <strong>Sans CI :</strong> Tous les ingrédients sont assemblés à la fin → "Oups, le fromage et la sauce ne vont pas ensemble!"
            <br/><br/>
            <strong>Avec CI :</strong> À chaque ajout d'ingrédient, on fait un test de goût immédiat → Problèmes détectés tôt !
          </p>
        </div>
      </div>

      <!-- Concepts GitLab -->
      <h3 class="text-2xl font-bold mb-4 text-gray-800">🔧 Les Concepts Clés de GitLab CI/CD</h3>
      
      <div class="overflow-x-auto shadow-lg rounded-lg mb-8">
        <table class="min-w-full bg-white">
          <thead class="bg-gradient-to-r from-orange-500 to-purple-600 text-white">
            <tr>
              <th class="py-4 px-6 text-left">Concept</th>
              <th class="py-4 px-6 text-left">Description</th>
              <th class="py-4 px-6 text-left">Analogie</th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr class="border-b bg-gray-50">
              <td class="py-4 px-6 font-bold text-orange-600">🔄 Pipeline</td>
              <td class="py-4 px-6">L'ensemble du processus CI/CD. Contient tous les <strong>stages</strong> et <strong>jobs</strong>.</td>
              <td class="py-4 px-6">La chaîne de montage complète d'une usine automobile.</td>
            </tr>
            <tr class="border-b">
              <td class="py-4 px-6 font-bold text-purple-600">📊 Stages</td>
              <td class="py-4 px-6">Les <strong>phases séquentielles</strong> du pipeline (build → test → deploy). S'exécutent dans l'ordre.</td>
              <td class="py-4 px-6">Les départements de l'usine : Soudure → Peinture → Assemblage.</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="py-4 px-6 font-bold text-blue-600">⚙️ Jobs</td>
              <td class="py-4 px-6">Les <strong>tâches individuelles</strong> à l'intérieur d'un stage. Les jobs d'un même stage s'exécutent <strong>en parallèle</strong>.</td>
              <td class="py-4 px-6">Les ouvriers dans chaque département qui travaillent simultanément.</td>
            </tr>
            <tr class="border-b">
              <td class="py-4 px-6 font-bold text-green-600">🏃 GitLab Runner</td>
              <td class="py-4 px-6">L'<strong>agent d'exécution</strong> qui exécute physiquement les jobs. Peut être partagé ou dédié.</td>
              <td class="py-4 px-6">Les machines/robots de l'usine qui font le travail réel.</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="py-4 px-6 font-bold text-red-600">📦 Artifacts</td>
              <td class="py-4 px-6">Les <strong>fichiers produits</strong> par un job (ex: build, rapports) qui peuvent être téléchargés ou passés entre jobs.</td>
              <td class="py-4 px-6">Les pièces produites qui passent au département suivant.</td>
            </tr>
            <tr class="border-b">
              <td class="py-4 px-6 font-bold text-yellow-600">💾 Cache</td>
              <td class="py-4 px-6">Stockage <strong>réutilisable entre pipelines</strong> pour accélérer les builds (ex: node_modules).</td>
              <td class="py-4 px-6">L'entrepôt de pièces communes qu'on ne refabrique pas à chaque voiture.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Stratégie Fail Fast -->
      <h3 class="text-2xl font-bold mb-4 text-gray-800">⚡ La Stratégie "Fail Fast" : Pourquoi elle est Vitale</h3>
      
      <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
        <h4 class="text-xl font-bold mb-3 text-red-800">🎯 Principe Fondamental</h4>
        <p class="text-gray-700 mb-4">
          <strong>"Fail Fast"</strong> signifie : <em>"Si quelque chose doit échouer, qu'il échoue le plus tôt possible."</em>
        </p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-lg">
            <h5 class="font-bold text-red-700 mb-2">❌ Sans Fail Fast</h5>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Erreur découverte après 30 min de build</li>
              <li>• Tests longs exécutés pour rien</li>
              <li>• Déploiement raté en production</li>
              <li>• Coût de correction : <strong>10x plus élevé</strong></li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h5 class="font-bold text-green-700 mb-2">✅ Avec Fail Fast</h5>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Lint échoue en 10 secondes → Stop</li>
              <li>• Feedback immédiat au développeur</li>
              <li>• Ressources économisées</li>
              <li>• Coût de correction : <strong>minimal</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-gray-100 p-6 rounded-lg mb-8">
        <h4 class="font-bold text-gray-800 mb-3">📐 Ordre Optimal des Stages (Fail Fast)</h4>
        <div class="flex flex-wrap items-center justify-center gap-2 text-center">
          <div class="bg-blue-100 px-4 py-2 rounded-lg">
            <span class="font-bold text-blue-700">1. Lint</span>
            <p class="text-xs text-gray-600">~10s</p>
          </div>
          <span class="text-2xl">→</span>
          <div class="bg-green-100 px-4 py-2 rounded-lg">
            <span class="font-bold text-green-700">2. Build</span>
            <p class="text-xs text-gray-600">~1min</p>
          </div>
          <span class="text-2xl">→</span>
          <div class="bg-yellow-100 px-4 py-2 rounded-lg">
            <span class="font-bold text-yellow-700">3. Unit Tests</span>
            <p class="text-xs text-gray-600">~2min</p>
          </div>
          <span class="text-2xl">→</span>
          <div class="bg-purple-100 px-4 py-2 rounded-lg">
            <span class="font-bold text-purple-700">4. Security Scan</span>
            <p class="text-xs text-gray-600">~3min</p>
          </div>
          <span class="text-2xl">→</span>
          <div class="bg-red-100 px-4 py-2 rounded-lg">
            <span class="font-bold text-red-700">5. Integration</span>
            <p class="text-xs text-gray-600">~5min</p>
          </div>
        </div>
        <p class="text-center text-sm text-gray-600 mt-4">
          💡 Les étapes rapides en premier → Feedback en secondes, pas en minutes !
        </p>
      </div>


      <!-- GitLab CI vs Jenkins: Battle des Géants -->
      <h3 class="text-2xl font-bold mb-4 text-gray-800">⚔️ GitLab CI vs Jenkins : Le Choix Stratégique</h3>
      
      <div class="bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-lg shadow-md mb-8 border-l-4 border-purple-600">
        <p class="text-gray-700 text-lg mb-4">
          <strong>Jenkins</strong> a été le roi de la CI/CD pendant des années. Mais <strong>GitLab CI</strong> représente 
          une nouvelle génération d'outils intégrés. Lequel choisir ?
        </p>
        <p class="text-gray-600">
          La réponse dépend de votre contexte : infrastructure existante, équipe, et besoins de personnalisation.
        </p>
      </div>

      <!-- Comparaison détaillée -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        
        <!-- GitLab CI Card -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-orange-500">
          <div class="bg-gradient-to-r from-orange-500 to-purple-600 p-4">
            <h4 class="text-white text-xl font-bold flex items-center">
              🦊 GitLab CI/CD
              <span class="ml-2 text-xs bg-white/20 px-2 py-1 rounded">Moderne</span>
            </h4>
          </div>
          <div class="p-6">
            <h5 class="font-bold text-green-700 mb-3">✅ Points Forts</h5>
            <ul class="space-y-2 text-sm text-gray-700 mb-4">
              <li>🎯 <strong>Tout-en-un</strong> : Code + CI/CD + Registry + Sécurité dans une seule plateforme</li>
              <li>📝 <strong>Configuration simple</strong> : Un seul fichier YAML (.gitlab-ci.yml)</li>
              <li>🚀 <strong>Démarrage rapide</strong> : Pas d'infrastructure à installer, runners cloud disponibles</li>
              <li>🔒 <strong>Sécurité intégrée</strong> : SAST, DAST, scan de dépendances inclus</li>
              <li>🎨 <strong>UI moderne</strong> : Interface intuitive, visualisation des pipelines claire</li>
              <li>🔄 <strong>Auto DevOps</strong> : Templates prêts à l'emploi pour démarrer en minutes</li>
              <li>📊 <strong>Environnements natifs</strong> : Gestion des déploiements dev/staging/prod intégrée</li>
            </ul>
            
            <h5 class="font-bold text-red-700 mb-3">⚠️ Limites</h5>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>💰 Version cloud limitée en minutes gratuites (400 min/mois)</li>
              <li>🔧 Moins de flexibilité extrême que Jenkins pour des cas ultra-spécifiques</li>
              <li>🏢 Nécessite GitLab comme plateforme de code (migration si vous êtes sur GitHub/Bitbucket)</li>
            </ul>

            <div class="mt-4 bg-orange-50 p-3 rounded">
              <p class="text-sm font-semibold text-orange-800">🎯 Idéal pour :</p>
              <p class="text-xs text-gray-600">Nouvelles équipes, startups, projets greenfield, équipes cherchant la simplicité</p>
            </div>
          </div>
        </div>

        <!-- Jenkins Card -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-700">
          <div class="bg-gradient-to-r from-blue-700 to-indigo-800 p-4">
            <h4 class="text-white text-xl font-bold flex items-center">
              🎩 Jenkins
              <span class="ml-2 text-xs bg-white/20 px-2 py-1 rounded">Vétéran</span>
            </h4>
          </div>
          <div class="p-6">
            <h5 class="font-bold text-green-700 mb-3">✅ Points Forts</h5>
            <ul class="space-y-2 text-sm text-gray-700 mb-4">
              <li>🏆 <strong>Mature et éprouvé</strong> : 15+ ans d'existence, ultra stable</li>
              <li>🔌 <strong>Écosystème massif</strong> : 1800+ plugins pour tout faire</li>
              <li>🛠️ <strong>Personnalisation extrême</strong> : Contrôle total sur chaque aspect</li>
              <li>🌍 <strong>Indépendant</strong> : Fonctionne avec GitHub, GitLab, Bitbucket, SVN...</li>
              <li>🆓 <strong>100% gratuit</strong> : Open source, pas de limite de minutes</li>
              <li>🏢 <strong>Enterprise ready</strong> : Utilisé par les plus grandes entreprises mondiales</li>
              <li>👥 <strong>Communauté énorme</strong> : Solutions disponibles pour tout problème</li>
            </ul>
            
            <h5 class="font-bold text-red-700 mb-3">⚠️ Limites</h5>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>🏗️ <strong>Infrastructure lourde</strong> : Nécessite serveur dédié, maintenance active</li>
              <li>⚙️ <strong>Configuration complexe</strong> : Groovy, UI vieillissante, courbe d'apprentissage élevée</li>
              <li>🔒 <strong>Sécurité manuelle</strong> : Pas de scan de sécurité natif, tout via plugins</li>
              <li>📦 <strong>Pas de registry intégré</strong> : Nécessite outils externes (Nexus, Artifactory)</li>
              <li>🔧 <strong>Maintenance importante</strong> : Plugins à mettre à jour, compatibilité à gérer</li>
              <li>⏱️ <strong>Démarrage lent</strong> : Plusieurs jours de configuration pour un pipeline complet</li>
            </ul>

            <div class="mt-4 bg-blue-50 p-3 rounded">
              <p class="text-sm font-semibold text-blue-800">🎯 Idéal pour :</p>
              <p class="text-xs text-gray-600">Grandes entreprises, systèmes legacy, besoins de customisation extrême, équipes DevOps expertes</p>
            </div>
          </div>
        </div>

      </div>

      

      <!-- Cas d'usage recommandés -->
      <div class="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg shadow-md mb-8">
        <h4 class="text-xl font-bold mb-4 text-gray-800">🎯 Quel outil choisir ? Guide de décision</h4>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded-lg shadow">
            <h5 class="font-bold text-orange-600 mb-3 flex items-center">
              <span class="text-2xl mr-2">🦊</span> Choisissez GitLab CI si...
            </h5>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>✅ Vous démarrez un nouveau projet</li>
              <li>✅ Vous voulez une solution "tout-en-un" simple</li>
              <li>✅ Vous n'avez pas d'équipe DevOps dédiée</li>
              <li>✅ La sécurité intégrée est prioritaire</li>
              <li>✅ Vous voulez une UI moderne et claire</li>
              <li>✅ Vous préférez le cloud au self-hosted</li>
              <li>✅ Vous utilisez déjà GitLab pour le code</li>
            </ul>
          </div>

          <div class="bg-white p-4 rounded-lg shadow">
            <h5 class="font-bold text-blue-700 mb-3 flex items-center">
              <span class="text-2xl mr-2">🎩</span> Choisissez Jenkins si...
            </h5>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>✅ Vous avez une infrastructure legacy complexe</li>
              <li>✅ Vous avez besoin de personnalisation extrême</li>
              <li>✅ Vous avez une équipe DevOps experte</li>
              <li>✅ Jenkins est déjà en place et fonctionne</li>
              <li>✅ Vous devez supporter des outils anciens (SVN, CVS...)</li>
              <li>✅ Vous voulez un contrôle total sans dépendance cloud</li>
              <li>✅ Vous utilisez plusieurs plateformes Git différentes</li>
            </ul>
          </div>
        </div>

        <div class="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
          <p class="text-sm text-gray-700">
            <strong>💡 Conseil de l'architecte :</strong> 
            Pour 80% des projets modernes, <strong>GitLab CI</strong> est le meilleur choix : plus simple, plus rapide, moins coûteux.
            <strong>Jenkins</strong> reste pertinent pour les infrastructures complexes existantes ou les besoins très spécifiques.
          </p>
        </div>
      </div>

      
      

      <!-- Schéma du Flux CI -->
      <h3 class="text-2xl font-bold mb-4 text-gray-800">📊 Schéma du Flux CI GitLab</h3>
      
      <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-8 font-mono text-sm overflow-x-auto">
        <pre>
┌─────────────────────────────────────────────────────────────────────────────┐
│                          🦊 GITLAB CI PIPELINE                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   👨‍💻 Developer                                                              │
│       │                                                                     │
│       │ git push                                                            │
│       ▼                                                                     │
│   ┌─────────────┐                                                           │
│   │   TRIGGER   │ ◄── Webhook détecte le changement                        │
│   └──────┬──────┘                                                           │
│          │                                                                  │
│          ▼                                                                  │
│   ╔═══════════════════════════════════════════════════════════════════╗    │
│   ║                    STAGE 1: BUILD                                  ║    │
│   ║  ┌──────────────┐                                                  ║    │
│   ║  │ 🐳 Docker    │ → Image: registry.gitlab.com/project/app:v1.0   ║    │
│   ║  │    Build     │                                                  ║    │
│   ║  └──────────────┘                                                  ║    │
│   ╚══════════════════════════════════════════════════════════════════╝    │
│          │                                                                  │
│          ▼                                                                  │
│   ╔═══════════════════════════════════════════════════════════════════╗    │
│   ║                    STAGE 2: TEST                                   ║    │
│   ║  ┌──────────────┐  ┌──────────────┐                                ║    │
│   ║  │ 🧪 Jest      │  │ 📊 Coverage  │  ← Exécution PARALLÈLE        ║    │
│   ║  │ Unit Tests   │  │   Report     │                                ║    │
│   ║  └──────────────┘  └──────────────┘                                ║    │
│   ╚══════════════════════════════════════════════════════════════════╝    │
│          │                                                                  │
│          ▼                                                                  │
│   ╔═══════════════════════════════════════════════════════════════════╗    │
│   ║                    STAGE 3: QUALITY                                ║    │
│   ║  ┌──────────────┐  ┌──────────────┐                                ║    │
│   ║  │ 🔍 SonarQube │  │ 🛡️ Trivy     │                                ║    │
│   ║  │ Code Quality │  │ Container   │                                 ║    │
│   ║  │              │  │ Scan        │                                 ║    │
│   ║  └──────────────┘  └──────────────┘                                ║    │
│   ║              │                                                     ║    │
│   ║              ▼                                                     ║    │
│   ║      ┌─────────────────┐                                           ║    │
│   ║      │ 🚨 QUALITY GATE │                                           ║    │
│   ║      │   Pass/Fail?    │                                           ║    │
│   ║      └────────┬────────┘                                           ║    │
│   ╚══════════════════════════════════════════════════════════════════╝    │
│          │                                                                  │
│    ┌─────┴─────┐                                                           │
│    ▼           ▼                                                           │
│  ❌ FAIL     ✅ PASS                                                        │
│    │           │                                                           │
│    │           ▼                                                           │
│    │    ╔═══════════════════════════════════════════════════════════╗     │
│    │    ║                 STAGE 4: DEPLOY                            ║     │
│    │    ║  ┌──────────────┐  ┌──────────────┐                        ║     │
│    │    ║  │ 🌐 Staging   │  │ 🚀 Production│                        ║     │
│    │    ║  │ (auto)       │  │ (manual)     │                        ║     │
│    │    ║  └──────────────┘  └──────────────┘                        ║     │
│    │    ╚═══════════════════════════════════════════════════════════╝     │
│    │                                                                       │
│    ▼                                                                       │
│  📧 Notification                                                           │
│  Slack/Email                                                               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
        </pre>
      </div>

      <!-- PARTIE 2: Fondamentaux CD -->
      <h2 class="text-3xl font-bold mb-6 text-purple-600">🚀 PARTIE 2 : Fondamentaux du CD (Déploiement)</h2>

      <!-- Delivery vs Deployment -->
      <h3 class="text-2xl font-bold mb-4 text-gray-800">🔄 Continuous Delivery vs Continuous Deployment</h3>
      
      <div class="overflow-x-auto shadow-lg rounded-lg mb-8">
        <table class="min-w-full bg-white">
          <thead class="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th class="py-4 px-6 text-left">Aspect</th>
              <th class="py-4 px-6 text-left">📦 Continuous Delivery</th>
              <th class="py-4 px-6 text-left">🚀 Continuous Deployment</th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr class="border-b bg-gray-50">
              <td class="py-3 px-6 font-bold">Définition</td>
              <td class="py-3 px-6">Le code est <strong>prêt</strong> à être déployé à tout moment.</td>
              <td class="py-3 px-6">Le code est <strong>automatiquement déployé</strong> en production.</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-6 font-bold">Validation Humaine</td>
              <td class="py-3 px-6 text-orange-600 font-semibold">✋ OUI - Bouton "Deploy" manuel</td>
              <td class="py-3 px-6 text-green-600 font-semibold">🤖 NON - 100% automatique</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="py-3 px-6 font-bold">Risque</td>
              <td class="py-3 px-6">Faible (humain vérifie)</td>
              <td class="py-3 px-6">Plus élevé (nécessite tests parfaits)</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-6 font-bold">Vitesse</td>
              <td class="py-3 px-6">Rapide (heures/jours)</td>
              <td class="py-3 px-6 text-green-600 font-semibold">Ultra-rapide (minutes)</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="py-3 px-6 font-bold">Cas d'usage</td>
              <td class="py-3 px-6">Banque, Santé, Industries réglementées</td>
              <td class="py-3 px-6">Netflix, Spotify, Tech companies</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-6 font-bold">GitLab Keyword</td>
              <td class="py-3 px-6"><code class="bg-gray-200 px-2 py-1 rounded">when: manual</code></td>
              <td class="py-3 px-6"><code class="bg-gray-200 px-2 py-1 rounded">when: on_success</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 mb-8">
        <h4 class="font-bold text-indigo-800 mb-2">💡 La Règle d'Or</h4>
        <p class="text-gray-700">
          <strong>Continuous Delivery</strong> = "Je PEUX déployer quand je veux" (bouton disponible).<br/>
          <strong>Continuous Deployment</strong> = "Ça SE déploie automatiquement" (aucune action humaine).
        </p>
      </div>

      <!-- Environnements -->
      <h3 class="text-2xl font-bold mb-4 text-gray-800">🌐 Les Environnements dans GitLab</h3>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
          <h4 class="text-xl font-bold mb-3 text-blue-700">🔧 Development</h4>
          <p class="text-gray-600 text-sm mb-3">Environnement de développement local ou partagé.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Données fictives</li>
            <li>• Debug activé</li>
            <li>• Déploiement auto sur chaque commit</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
          <h4 class="text-xl font-bold mb-3 text-yellow-700">🧪 Staging</h4>
          <p class="text-gray-600 text-sm mb-3">Copie identique de la production.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Données anonymisées</li>
            <li>• Tests de performance</li>
            <li>• Validation QA finale</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
          <h4 class="text-xl font-bold mb-3 text-green-700">🚀 Production</h4>
          <p class="text-gray-600 text-sm mb-3">L'environnement final accessible aux utilisateurs.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Données réelles</li>
            <li>• Monitoring actif</li>
            <li>• Déploiement manuel ou avec approbation</li>
          </ul>
        </div>
      </div>

      

      
      

      <!-- Commandes CLI Importantes -->
      <h3 class="text-2xl font-bold mb-4 text-gray-800">💻 Commandes CLI Essentielles pour la Démo</h3>
      
      <div class="overflow-x-auto shadow-lg rounded-lg mb-8">
        <table class="min-w-full bg-white">
          <thead class="bg-gradient-to-r from-gray-700 to-gray-900 text-white">
            <tr>
              <th class="py-3 px-4 text-left">Commande</th>
              <th class="py-3 px-4 text-left">Description</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm font-mono">
            <tr class="border-b bg-gray-50">
              <td class="py-3 px-4">git push origin main</td>
              <td class="py-3 px-4 font-sans">Déclenche le pipeline sur la branche principale</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-4">git log --oneline -5</td>
              <td class="py-3 px-4 font-sans">Voir les 5 derniers commits</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="py-3 px-4">docker images</td>
              <td class="py-3 px-4 font-sans">Lister les images Docker locales</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-4">kubectl get pods -n staging</td>
              <td class="py-3 px-4 font-sans">Voir les pods déployés en staging</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="py-3 px-4">kubectl logs -f deployment/voting-app -n staging</td>
              <td class="py-3 px-4 font-sans">Voir les logs en temps réel</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-4">npm run test -- --coverage</td>
              <td class="py-3 px-4 font-sans">Exécuter les tests avec couverture</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="py-3 px-4">npm run lint</td>
              <td class="py-3 px-4 font-sans">Vérifier la qualité du code</td>
            </tr>
            <tr>
              <td class="py-3 px-4">trivy image voting-app:latest</td>
              <td class="py-3 px-4 font-sans">Scanner une image pour les vulnérabilités</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Comparaison des outils CI/CD -->
      <h3 class="text-2xl font-bold mb-4 text-gray-800">📊 Comparaison : GitLab CI vs GitHub Actions vs Jenkins</h3>
      
      <div class="overflow-x-auto shadow-lg rounded-lg mb-8">
        <table class="min-w-full bg-white">
          <thead class="bg-gradient-to-r from-orange-500 to-purple-600 text-white">
            <tr>
              <th class="py-4 px-4 text-left">Critère</th>
              <th class="py-4 px-4 text-left">🦊 GitLab CI</th>
              <th class="py-4 px-4 text-left">🐙 GitHub Actions</th>
              <th class="py-4 px-4 text-left">🎩 Jenkins</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            <tr class="border-b bg-gray-50">
              <td class="py-3 px-4 font-bold">Type</td>
              <td class="py-3 px-4">SaaS + Self-hosted</td>
              <td class="py-3 px-4">SaaS (Cloud)</td>
              <td class="py-3 px-4">Self-hosted uniquement</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-4 font-bold">Configuration</td>
              <td class="py-3 px-4 text-green-600 font-semibold">.gitlab-ci.yml</td>
              <td class="py-3 px-4">.github/workflows/*.yml</td>
              <td class="py-3 px-4">Jenkinsfile (Groovy)</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="py-3 px-4 font-bold">Registry intégré</td>
              <td class="py-3 px-4 text-green-600 font-semibold">✅ Oui (Container + Package)</td>
              <td class="py-3 px-4">✅ Oui (ghcr.io)</td>
              <td class="py-3 px-4">❌ Non (externe)</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-4 font-bold">Sécurité (SAST/DAST)</td>
              <td class="py-3 px-4 text-green-600 font-semibold">✅ Intégré nativement</td>
              <td class="py-3 px-4">⚠️ Via Marketplace</td>
              <td class="py-3 px-4">⚠️ Via Plugins</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="py-3 px-4 font-bold">Environnements</td>
              <td class="py-3 px-4 text-green-600 font-semibold">✅ UI native</td>
              <td class="py-3 px-4">✅ Oui</td>
              <td class="py-3 px-4">⚠️ Configuration manuelle</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-4 font-bold">Kubernetes</td>
              <td class="py-3 px-4 text-green-600 font-semibold">✅ GitLab Agent</td>
              <td class="py-3 px-4">⚠️ Via Actions</td>
              <td class="py-3 px-4">⚠️ Via Plugins</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="py-3 px-4 font-bold">Courbe d'apprentissage</td>
              <td class="py-3 px-4">Moyenne</td>
              <td class="py-3 px-4 text-green-600 font-semibold">Facile</td>
              <td class="py-3 px-4 text-red-600">Difficile</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-bold">Idéal pour</td>
              <td class="py-3 px-4 text-green-600 font-semibold">Entreprises (All-in-One)</td>
              <td class="py-3 px-4">Startups, Open Source</td>
              <td class="py-3 px-4">Legacy, Grande Customisation</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Conclusion -->
      <div class="bg-gradient-to-r from-orange-500 to-purple-600 text-white p-8 rounded-lg shadow-xl">
        <h2 class="text-3xl font-bold mb-4">📌 Récapitulatif</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white/10 p-4 rounded-lg">
            <h4 class="font-bold text-xl mb-2">🔄 CI (Intégration Continue)</h4>
            <ul class="text-sm space-y-1">
              <li>✅ Build automatique à chaque push</li>
              <li>✅ Tests unitaires et d'intégration</li>
              <li>✅ Analyse de qualité (SonarQube)</li>
              <li>✅ Scan de sécurité (Trivy)</li>
            </ul>
          </div>
          <div class="bg-white/10 p-4 rounded-lg">
            <h4 class="font-bold text-xl mb-2">🚀 CD (Déploiement Continu)</h4>
            <ul class="text-sm space-y-1">
              <li>✅ Déploiement auto sur Staging</li>
              <li>✅ Approbation manuelle pour Prod</li>
              <li>✅ Rollback possible</li>
              <li>✅ Monitoring intégré</li>
            </ul>
          </div>
        </div>
        <p class="text-center mt-6 text-lg font-semibold">
          🦊 GitLab CI/CD : Une seule plateforme pour tout le cycle DevOps !
        </p>
      </div>
    `
  },
  {
    id: 'iac',
    category: 'Outils et Automatisation',
    title: 'Infrastructure as Code',
    timing: '1.5h',
    icon: Code,
    content: `
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">Infrastructure as Code (IaC)</h2>
      
      <div class="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-indigo-500">
        <h3 class="text-xl font-semibold mb-3 text-gray-800">Qu’est-ce que l’Infrastructure as Code ?</h3>
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          Infrastructure as Code (IaC) est une pratique DevOps qui consiste à gérer et provisionner l’infrastructure informatique à l’aide de code, au lieu de configurations manuelles.
        </p>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Décrite</strong> dans des fichiers (YAML, JSON, HCL…)</li>
            <li><strong>Versionnée</strong> (Git)</li>
            <li><strong>Automatisée</strong></li>
            <li><strong>Reproductible</strong></li>
        </ul>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-red-50 p-6 rounded-xl border border-red-100">
          <h4 class="text-lg font-bold mb-2 text-red-700">Sans IaC ❌</h4>
          <ul class="space-y-2 text-gray-700">
            <li>Configurations manuelles</li>
            <li>Erreurs humaines</li>
            <li>Environnements différents (dev ≠ prod)</li>
            <li>Déploiements lents</li>
          </ul>
        </div>
        <div class="bg-green-50 p-6 rounded-xl border border-green-100">
          <h4 class="text-lg font-bold mb-2 text-green-700">Avec IaC ✅</h4>
          <ul class="space-y-2 text-gray-700">
            <li>Infrastructure standardisée</li>
            <li>Environnements identiques</li>
            <li>Déploiements rapides</li>
            <li>Rollback facile</li>
          </ul>
        </div>
      </div>

      <h3 class="text-2xl font-bold mb-4 text-gray-800">Comment fonctionne l’IaC ?</h3>
      <div class="space-y-4 mb-8">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-bold text-indigo-600">1. Écrire le code d’infrastructure</h4>
          <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2"><code>resource "aws_instance" "web" {
  ami           = "ami-0abcd1234"
  instance_type = "t2.micro"
}</code></pre>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-bold text-indigo-600">2. Versionner le code</h4>
          <p class="text-sm text-gray-600">Git (GitHub, GitLab, Bitbucket)</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-bold text-indigo-600">3. Appliquer le code</h4>
          <pre class="bg-gray-900 text-gray-100 p-2 rounded-lg overflow-x-auto mt-2 text-sm"><code>terraform apply</code></pre>
        </div>
      </div>

      <h3 class="text-2xl font-bold mb-4 text-gray-800">Types d’Infrastructure as Code</h3>
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500">
          <h4 class="font-bold text-lg text-blue-800 mb-2">IaC Déclarative</h4>
          <p class="text-sm text-gray-600 mb-2">On décrit l’état final souhaité.</p>
          <p class="text-sm font-semibold">Exemples : Terraform, AWS CloudFormation</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow border-t-4 border-purple-500">
          <h4 class="font-bold text-lg text-purple-800 mb-2">IaC Impérative</h4>
          <p class="text-sm text-gray-600 mb-2">On décrit les étapes à suivre.</p>
          <p class="text-sm font-semibold">Exemples : Scripts Bash, Ansible</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold mb-4 text-gray-800">Outils Populaires</h3>
      <div class="overflow-x-auto shadow-lg rounded-lg mb-8">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="py-3 px-4 text-left">Outil</th>
              <th class="py-3 px-4 text-left">Usage</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            <tr class="border-b"><td class="py-3 px-4 font-bold">Terraform</td><td class="py-3 px-4">Multi-cloud (AWS, Azure, GCP)</td></tr>
            <tr class="border-b"><td class="py-3 px-4 font-bold">AWS CloudFormation</td><td class="py-3 px-4">AWS uniquement</td></tr>
            <tr class="border-b"><td class="py-3 px-4 font-bold">Ansible</td><td class="py-3 px-4">Configuration & automatisation</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: 'observability',
    category: 'Outils et Automatisation',
    title: '🔍 Observabilité',
    timing: '2h',
    icon: Activity,
    content: `
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">🔍 L'Observabilité Expliquée Simplement</h2>
      <p class="text-lg text-gray-600 mb-8 text-center">Du Problème à la Solution - Guide pour Débutants</p>

      <!-- Introduction avec histoire -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-4 text-indigo-700">📖 Commençons par une Histoire...</h3>
        
        <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500 mb-6 italic">
          <p class="text-lg leading-relaxed text-gray-700">
            <strong>Imaginez :</strong> Vous gérez un site e-commerce. C'est le Black Friday. Soudain, votre téléphone explose de messages : "Le site ne marche pas !", "Je ne peux pas payer !", "Tout est lent !".
            <br><br>
            Vous ouvrez votre ordinateur en panique... mais <strong>vous ne savez pas par où commencer</strong>. Quel est le problème ? Où chercher ? Pourquoi maintenant ?
            <br><br>
            🤔 Vous vous sentez aveugle face à votre propre système.
          </p>
        </div>

        <div class="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-lg mb-6">
          <h4 class="text-xl font-bold mb-3">❌ Le Problème</h4>
          <p class="text-lg leading-relaxed">
            Sans observabilité, gérer un système c'est comme conduire une voiture <strong>sans tableau de bord</strong> : pas de compteur de vitesse, pas de jauge d'essence, pas de voyant moteur. Vous ne savez ce qui se passe que quand il est trop tard !
          </p>
        </div>

        <div class="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
          <h4 class="text-xl font-bold mb-3">✅ La Solution : L'Observabilité</h4>
          <p class="text-lg leading-relaxed">
            L'observabilité, c'est installer un <strong>tableau de bord complet</strong> sur votre système. Vous voyez tout ce qui se passe en temps réel, vous êtes alerté avant que les problèmes deviennent critiques, et vous pouvez investiguer rapidement quand quelque chose ne va pas.
          </p>
        </div>
      </div>

      <!-- Analogie -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-4 text-indigo-700">🏥 Une Analogie : Votre Système = Un Patient</h3>
        
        <div class="bg-gradient-to-r from-teal-100 to-pink-100 p-6 rounded-lg">
          <p class="text-lg mb-4"><strong>Imaginez que votre application est un patient à l'hôpital :</strong></p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start"><span class="text-2xl mr-3">📊</span><div><strong>Les Métriques</strong> = Les signes vitaux (température, pression artérielle, rythme cardiaque)</div></li>
            <li class="flex items-start"><span class="text-2xl mr-3">📝</span><div><strong>Les Logs</strong> = Les symptômes détaillés racontés par le patient ("J'ai mal à la tête depuis ce matin")</div></li>
            <li class="flex items-start"><span class="text-2xl mr-3">🔗</span><div><strong>Les Traces</strong> = Scanner complet du corps pour voir comment tout est connecté</div></li>
            <li class="flex items-start"><span class="text-2xl mr-3">🚨</span><div><strong>Les Alertes</strong> = L'alarme qui sonne si le cœur s'arrête !</div></li>
          </ul>
        </div>
      </div>

      <!-- Avant/Après -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-4 text-indigo-700">⚖️ Avant vs Après l'Observabilité</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h4 class="text-xl font-bold mb-4 text-red-700">😰 Avant (Sans Observabilité)</h4>
            <ul class="space-y-2 text-gray-700">
              <li>• Vous découvrez les problèmes quand les clients se plaignent</li>
              <li>• Vous ne savez pas quelle partie du système est cassée</li>
              <li>• Le debugging prend des heures voire des jours</li>
              <li>• Vous devinez au hasard où chercher</li>
              <li>• Les pannes vous surprennent toujours</li>
            </ul>
          </div>
          
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h4 class="text-xl font-bold mb-4 text-green-700">😎 Après (Avec Observabilité)</h4>
            <ul class="space-y-2 text-gray-700">
              <li>• Vous êtes alerté AVANT que les clients ne remarquent</li>
              <li>• Vous savez exactement quel service a un problème</li>
              <li>• Le debugging prend des minutes</li>
              <li>• Vous avez toutes les données pour investiguer</li>
              <li>• Vous anticipez et prévenez les pannes</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Les 3 Piliers -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-4 text-indigo-700">🏛️ Les 3 Piliers de l'Observabilité</h3>
        <p class="text-lg mb-8 text-gray-700">
          Pour avoir une visibilité complète sur votre système, vous avez besoin de <strong>trois types d'informations différentes</strong>.
        </p>

        <!-- Pilier 1: Métriques -->
        <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl mb-6 border-l-6 border-green-500">
          <h4 class="text-xl font-bold mb-4 text-green-800"><span class="text-2xl mr-2">📊</span>1. Les Métriques - "Les Chiffres"</h4>
          
          <div class="bg-white p-4 rounded-lg mb-4 border-l-4 border-indigo-400 italic">
            <strong>Situation réelle :</strong> Votre site devient de plus en plus lent. Les clients se plaignent mais vous ne comprenez pas pourquoi.
          </div>

          <p class="text-gray-700 mb-4">
            Les métriques, ce sont des <span class="bg-yellow-200 px-2 py-1 rounded font-bold">nombres mesurés régulièrement</span>. Comme quand vous montez sur la balance tous les matins pour connaître votre poids.
          </p>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-4">
            <h5 class="font-bold text-yellow-800 mb-2">💡 Exemples Concrets de Métriques</h5>
            <ul class="space-y-2 text-gray-700">
              <li><strong>CPU Usage</strong> : "Mon serveur utilise 85% de sa puissance"</li>
              <li><strong>RAM Usage</strong> : "J'utilise 12 GB sur 16 GB disponibles"</li>
              <li><strong>Request Latency</strong> : "Mon site répond en 2.5 secondes"</li>
              <li><strong>Error Rate</strong> : "5% des requêtes échouent"</li>
            </ul>
          </div>

          <pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm"><code># Exemple de métriques simples
CPU: 75%           ⚠️ Un peu élevé
RAM: 8GB / 16GB    ✅ OK
Latency: 250ms     ✅ Rapide
Errors: 0.5%       ✅ Normal
Requests/sec: 1200 📈 Trafic élevé</code></pre>
        </div>

        <!-- Pilier 2: Logs -->
        <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl mb-6 border-l-6 border-orange-500">
          <h4 class="text-xl font-bold mb-4 text-orange-800"><span class="text-2xl mr-2">📝</span>2. Les Logs - "Le Journal Détaillé"</h4>
          
          <div class="bg-white p-4 rounded-lg mb-4 border-l-4 border-indigo-400 italic">
            <strong>Situation réelle :</strong> Vos métriques montrent un pic d'erreurs à 14h32. Mais QUELLE erreur exactement ? POURQUOI ?
          </div>

          <p class="text-gray-700 mb-4">
            Les logs, c'est comme un <span class="bg-yellow-200 px-2 py-1 rounded font-bold">journal de bord détaillé</span> de tout ce qui se passe dans votre application.
          </p>

          <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-4"><code>[2024-12-13 14:32:18] INFO: Utilisateur 'marie@gmail.com' s'est connecté
[2024-12-13 14:32:25] INFO: Panier créé pour la commande #12345
[2024-12-13 14:32:30] ERROR: ❌ Échec de paiement - Carte refusée
[2024-12-13 14:32:35] ERROR: ❌ Base de données inaccessible - Timeout
[2024-12-13 14:32:40] CRITICAL: 🔥 PANIQUE ! Impossible de se connecter à la DB !</code></pre>

          <div class="grid md:grid-cols-4 gap-3">
            <div class="bg-blue-100 p-3 rounded text-center"><strong class="text-blue-800">INFO</strong><br><span class="text-sm">Événements normaux</span></div>
            <div class="bg-yellow-100 p-3 rounded text-center"><strong class="text-yellow-800">WARN</strong><br><span class="text-sm">Attention</span></div>
            <div class="bg-red-100 p-3 rounded text-center"><strong class="text-red-800">ERROR</strong><br><span class="text-sm">Erreur</span></div>
            <div class="bg-red-200 p-3 rounded text-center"><strong class="text-red-900">CRITICAL</strong><br><span class="text-sm">Tout est cassé</span></div>
          </div>
        </div>

        <!-- Pilier 3: Traces -->
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl mb-6 border-l-6 border-blue-500">
          <h4 class="text-xl font-bold mb-4 text-blue-800"><span class="text-2xl mr-2">🔗</span>3. Les Traces - "Le GPS de vos Requêtes"</h4>
          
          <div class="bg-white p-4 rounded-lg mb-4 border-l-4 border-indigo-400 italic">
            <strong>Situation réelle :</strong> Un client met 10 secondes pour payer. Votre application utilise 5 services différents. Lequel est lent ?
          </div>

          <p class="text-gray-700 mb-4">
            Les traces suivent le <span class="bg-yellow-200 px-2 py-1 rounded font-bold">parcours complet d'une action</span> à travers tous vos services.
          </p>

          <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>🚀 Requête #ABC123 : "Payer la commande"

1. [API Gateway] ⏱️ 10ms
   ↓
2. [Service Authentification] ⏱️ 50ms
   ↓
3. [Service Panier] ⏱️ 100ms
   ↓
4. [Service Paiement] ⏱️ 3500ms ⚠️⚠️ LENT !
   ↓
   4a. [API Stripe externe] ⏱️ 3400ms 🐌
   ↓
5. [Service Email] ⏱️ 200ms

⏱️ TOTAL: 3860ms (~ 4 secondes)
🎯 PROBLÈME IDENTIFIÉ: L'API Stripe est lente !</code></pre>
        </div>
      </div>

      <!-- Les Alertes -->
      <div class="bg-gradient-to-r from-pink-500 to-red-500 text-white p-8 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-6"><span class="text-2xl mr-2">🚨</span>Les Alertes - "Ne Plus Être Surpris"</h3>
        
        <div class="bg-white/20 p-6 rounded-lg mb-6">
          <h4 class="font-bold text-lg mb-3">Le Problème Sans Alertes</h4>
          <p class="leading-relaxed">
            Vous ne pouvez pas rester 24h/24 devant vos dashboards. Vous avez besoin que le <strong>système vous prévienne automatiquement</strong> quand quelque chose ne va pas !
          </p>
        </div>

        <div class="bg-white/20 p-6 rounded-lg mb-6">
          <h4 class="font-bold text-lg mb-3">Exemples de règles d'alerte :</h4>
          <ul class="space-y-2">
            <li>🔴 Si le site est DOWN → Envoie un SMS immédiatement</li>
            <li>🟠 Si CPU > 80% pendant 5 minutes → Message Slack</li>
            <li>🟡 Si erreurs > 5% → Email à l'équipe</li>
            <li>🔴 Si temps de réponse > 3 secondes → Alerte PagerDuty</li>
          </ul>
        </div>

        <div class="bg-white/20 p-6 rounded-lg">
          <h4 class="font-bold text-lg mb-3">📱 Où vous recevez les alertes ?</h4>
          <div class="grid md:grid-cols-4 gap-4">
            <div class="text-center"><strong>Slack</strong><br><span class="text-sm">Canal #alerts</span></div>
            <div class="text-center"><strong>Email</strong><br><span class="text-sm">Détails complets</span></div>
            <div class="text-center"><strong>SMS</strong><br><span class="text-sm">Urgences</span></div>
            <div class="text-center"><strong>Téléphone</strong><br><span class="text-sm">Critique</span></div>
          </div>
        </div>
      </div>

      <!-- Workflow -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-6 text-indigo-700">🔄 Comment Ça Marche au Quotidien ?</h3>
        
        <div class="space-y-4">
          <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-500 flex items-center">
            <span class="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">1</span>
            <div><strong>Collecte Continue</strong> - Vos systèmes envoient constamment des métriques, logs et traces.</div>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500 flex items-center">
            <span class="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">2</span>
            <div><strong>Tout Va Bien ✅</strong> - CPU: 40%, Latence: 150ms, Erreurs: 0.1%. Vous pouvez dormir tranquille.</div>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500 flex items-center">
            <span class="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">3</span>
            <div><strong>Un Problème Apparaît 🚨</strong> - CPU monte à 95%, erreurs à 15%. Détection AVANT les clients !</div>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500 flex items-center">
            <span class="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">4</span>
            <div><strong>Alerte Instantanée 📱</strong> - Message Slack : "⚠️ ALERTE: CPU > 90% depuis 2 minutes"</div>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500 flex items-center">
            <span class="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">5</span>
            <div><strong>Investigation Rapide 🔍</strong> - Métriques → Logs → Traces → Problème identifié !</div>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-500 flex items-center">
            <span class="bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">6</span>
            <div><strong>Résolution 🛠️</strong> - Problème résolu en 10 minutes au lieu de 2 heures !</div>
          </div>
        </div>
      </div>

      <!-- Les Outils -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 class="text-2xl font-bold mb-6 text-indigo-700">🛠️ Les Outils Principaux</h3>
        
        <div class="space-y-4">
          <div class="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl">
            <h4 class="text-xl font-bold mb-3">📊 Prometheus - Pour les Métriques</h4>
            <p><strong>C'est quoi ?</strong> Un outil gratuit qui collecte et stocke vos métriques (CPU, RAM, etc.)</p>
            <p class="mt-2"><strong>Analogie :</strong> Un thermomètre qui prend votre température toutes les 30 secondes et garde l'historique.</p>
          </div>

          <div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl">
            <h4 class="text-xl font-bold mb-3">📈 Grafana - Pour les Dashboards Visuels</h4>
            <p><strong>C'est quoi ?</strong> Un outil pour créer de beaux graphiques avec vos métriques Prometheus.</p>
            <p class="mt-2"><strong>Analogie :</strong> Le tableau de bord de votre voiture qui affiche la vitesse, l'essence, etc.</p>
          </div>

          <div class="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-xl">
            <h4 class="text-xl font-bold mb-3">📝 ELK Stack - Pour les Logs</h4>
            <p><strong>C'est quoi ?</strong> Trois outils combinés (Elasticsearch + Logstash + Kibana) pour gérer vos logs.</p>
            <p class="mt-2"><strong>Analogie :</strong> Un journal ultra-organisé où vous pouvez rechercher et filtrer toutes les informations.</p>
          </div>

          <div class="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 rounded-xl">
            <h4 class="text-xl font-bold mb-3">🔗 Jaeger / OpenTelemetry - Pour les Traces</h4>
            <p><strong>C'est quoi ?</strong> Ces outils suivent le parcours complet d'une requête à travers tous vos services.</p>
            <p class="mt-2"><strong>Analogie :</strong> Un GPS détaillé qui montre chaque étape du trajet d'une commande.</p>
          </div>
        </div>
      </div>

      <!-- Conclusion -->
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg shadow-xl text-center">
        <h3 class="text-2xl font-bold mb-4">🎯 Conclusion</h3>
        <p class="text-lg leading-relaxed">
          L'observabilité, c'est <strong>la combinaison de métriques, logs, traces et alertes</strong> pour transformer votre système opaque en système transparent et contrôlable.
          <br><br>
          Avec les bons outils comme <strong>Prometheus, Grafana, ELK Stack</strong> et les outils de tracing, vous pouvez identifier, résoudre et prévenir les problèmes plus rapidement que jamais !
        </p>
      </div>
    `
  }
];
