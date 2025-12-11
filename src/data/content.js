
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
  Cpu
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
      
      <div class="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-indigo-500">
        <h3 class="text-xl font-semibold mb-3 text-gray-800">Définition</h3>
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          DevOps est une culture, une pratique et un ensemble d'outils qui intègrent et automatisent les processus entre les équipes de développement ("Dev") et d'opérations ("Ops").
        </p>
        <p class="text-gray-600">
          L'objectif principal est de raccourcir le cycle de vie du développement des logiciels et de fournir des livraisons continues de haute qualité. Ce n'est pas un simple poste ou un outil, mais une transformation profonde de la collaboration.
        </p>
      </div>

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

      <h3 class="text-2xl font-bold mb-4 text-gray-800">Objectifs du DevOps</h3>
      <ul class="grid md:grid-cols-3 gap-4">
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
    id: 'dora',
    category: 'Fondamentaux de DevOps',
    title: 'Métriques DORA & ROI',
    timing: '1.5h',
    icon: TrendingUp,
    content: `
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">DORA et la Performance DevOps</h2>
      
      <!-- 2.1 Qu'est-ce que DORA -->
      <div class="mb-10">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">2.1. Qu’est-ce que DORA ?</h3>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="mr-2 mt-1 text-blue-500">●</span>
              <span><strong>DORA (DevOps Research and Assessment)</strong> est une organisation créée en 2014 par Nicole Forsgren, Jez Humble et Gene Kim.</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 mt-1 text-blue-500">●</span>
              <span><strong>Objectif :</strong> Analyser scientifiquement la performance des équipes DevOps pour identifier les pratiques qui permettent de livrer plus vite et plus fiablement.</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 mt-1 text-blue-500">●</span>
              <span>Étude basée sur des milliers d'équipes mondiales pour distinguer les "élites" des autres.</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 2.2 Les 4 métriques -->
      <div class="mb-10">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">2.2. Les 4 Métriques Clés</h3>
        <p class="mb-4 text-gray-600">Ces indicateurs évaluent l'efficacité selon deux axes : la <strong>Vélocité</strong> (Throughput) et la <strong>Stabilité</strong>.</p>
        
        <div class="overflow-x-auto shadow-lg rounded-lg mb-6">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-800 text-white">
              <tr>
                <th class="py-3 px-4 text-left w-1/4">Métrique</th>
                <th class="py-3 px-4 text-left w-1/3">Description</th>
                <th class="py-3 px-4 text-left">Pourquoi c’est important</th>
              </tr>
            </thead>
            <tbody class="text-gray-700 text-sm">
              <tr class="border-b bg-green-50">
                <td class="py-3 px-4 font-bold text-green-800">Deployment Frequency<br><span class="text-xs font-normal text-gray-500">(Vélocité)</span></td>
                <td class="py-3 px-4">Fréquence de déploiement en production.</td>
                <td class="py-3 px-4">Mesure l’agilité et la capacité à réagir aux besoins du marché.</td>
              </tr>
              <tr class="border-b bg-green-50">
                <td class="py-3 px-4 font-bold text-green-800">Lead Time for Changes<br><span class="text-xs font-normal text-gray-500">(Vélocité)</span></td>
                <td class="py-3 px-4">Temps entre le commit et la mise en production.</td>
                <td class="py-3 px-4">Indicateur d'efficacité du pipeline CI/CD.</td>
              </tr>
              <tr class="border-b bg-purple-50">
                <td class="py-3 px-4 font-bold text-purple-800">Change Failure Rate<br><span class="text-xs font-normal text-gray-500">(Stabilité)</span></td>
                <td class="py-3 px-4">% de déploiements causant une panne.</td>
                <td class="py-3 px-4">Mesure la qualité : un bon DevOps ne livre pas juste vite, mais bien.</td>
              </tr>
              <tr class="border-b bg-purple-50">
                <td class="py-3 px-4 font-bold text-purple-800">MTTR (Recovery)<br><span class="text-xs font-normal text-gray-500">(Stabilité)</span></td>
                <td class="py-3 px-4">Temps moyen pour rétablir le service après incident.</td>
                <td class="py-3 px-4">Évalue la résilience et la capacité de correction rapide.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 2.3 Benchmarks -->
      <div class="mb-10">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">2.3. Benchmarks DORA (Élite vs Faible)</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-xl border border-yellow-200">
            <h4 class="text-xl font-bold text-yellow-800 mb-4 flex items-center">🏆 Équipes Élites</h4>
            <ul class="space-y-3">
              <li class="flex justify-between border-b border-yellow-200 pb-2">
                <span class="text-gray-600">Fréquence</span>
                <span class="font-bold text-gray-900">Plusieurs / jour</span>
              </li>
              <li class="flex justify-between border-b border-yellow-200 pb-2">
                <span class="text-gray-600">Lead Time</span>
                <span class="font-bold text-gray-900">< 1 heure</span>
              </li>
              <li class="flex justify-between border-b border-yellow-200 pb-2">
                <span class="text-gray-600">MTTR</span>
                <span class="font-bold text-gray-900">< 1 heure</span>
              </li>
              <li class="flex justify-between">
                <span class="text-gray-600">Taux d'échec</span>
                <span class="font-bold text-gray-900">0 - 15%</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-100 p-6 rounded-xl border border-gray-200">
            <h4 class="text-xl font-bold text-gray-600 mb-4 flex items-center">🐢 Équipes Faibles</h4>
            <ul class="space-y-3">
              <li class="flex justify-between border-b border-gray-200 pb-2">
                <span class="text-gray-500">Fréquence</span>
                <span class="font-bold text-gray-700">1 / mois ou moins</span>
              </li>
              <li class="flex justify-between border-b border-gray-200 pb-2">
                <span class="text-gray-500">Lead Time</span>
                <span class="font-bold text-gray-700">> 6 mois</span>
              </li>
              <li class="flex justify-between border-b border-gray-200 pb-2">
                <span class="text-gray-500">MTTR</span>
                <span class="font-bold text-gray-700">Très élevé</span>
              </li>
              <li class="flex justify-between">
                <span class="text-gray-500">Taux d'échec</span>
                <span class="font-bold text-gray-700">46 - 60%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 3. Avantages -->
      <div class="mb-10">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">3. Avantages Business</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-white rounded shadow-sm border-l-4 border-green-500">
            <h4 class="font-bold text-green-700">🚀 Time-to-market réduit</h4>
            <p class="text-sm text-gray-600">Livrer plus tôt pour répondre aux besoins utilisateurs.</p>
          </div>
          <div class="p-4 bg-white rounded shadow-sm border-l-4 border-blue-500">
            <h4 class="font-bold text-blue-700">💎 Qualité & Fiabilité</h4>
            <p class="text-sm text-gray-600">Moins d'incidents, expérience utilisateur stable.</p>
          </div>
          <div class="p-4 bg-white rounded shadow-sm border-l-4 border-orange-500">
            <h4 class="font-bold text-orange-700">💰 Efficacité Opérationnelle</h4>
            <p class="text-sm text-gray-600">Moins de downtime et de correctifs d'urgence coûteux.</p>
          </div>
          <div class="p-4 bg-white rounded shadow-sm border-l-4 border-purple-500">
            <h4 class="font-bold text-purple-700">🤝 Satisfaction & Culture</h4>
            <p class="text-sm text-gray-600">Meilleure collaboration, moins de burnout.</p>
          </div>
        </div>
      </div>

      <!-- 4. Cas d'étude -->
      <div class="mb-10 bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <div class="flex items-center mb-6">
          <div class="bg-indigo-600 text-white p-2 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-gray-900">Cas d'Étude : TechShop Morocco</h3>
            <p class="text-gray-500">E-commerce électronique • 35 employés (12 Devs, 3 Ops)</p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h4 class="font-bold text-red-600 mb-2 uppercase text-sm tracking-wide">Le Problème (Black Friday 2024)</h4>
            <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500 mb-4">
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>❌ <strong>4 heures de panne</strong> totale pendant le pic.</li>
                <li>💸 <strong>Perte :</strong> 200 000 DH.</li>
                <li>🐛 <strong>Cause :</strong> Bug déploiement manuel raté.</li>
              </ul>
            </div>
            
            <h4 class="font-bold text-gray-700 mb-2 text-sm">Situation Actuelle</h4>
            <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Déploiements 1x/mois (Vendredi soir 😱).</li>
              <li>35% des déploiements cassent la prod.</li>
              <li>Note client : 3.2/5.</li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-indigo-600 mb-2 uppercase text-sm tracking-wide">Audit DORA</h4>
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <table class="min-w-full text-sm">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="p-3 text-left">Métrique</th>
                    <th class="p-3 text-left">Valeur</th>
                    <th class="p-3 text-center">Niveau</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Frequency</td>
                    <td class="p-3">1 / mois</td>
                    <td class="p-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">LOW</span></td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Lead Time</td>
                    <td class="p-3">3-4 sem.</td>
                    <td class="p-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">LOW</span></td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Failure Rate</td>
                    <td class="p-3">35%</td>
                    <td class="p-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">HIGH</span></td>
                  </tr>
                  <tr>
                    <td class="p-3 font-medium">MTTR</td>
                    <td class="p-3">6-8h</td>
                    <td class="p-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">LOW</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- 5. Conclusion -->
      <div class="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
        <h3 class="font-bold text-indigo-800 mb-2">Conclusion</h3>
        <p class="text-indigo-700">
          Les métriques DORA offrent un cadre clair pour mesurer l'efficacité. Pour TechShop Morocco, l'objectif est de passer de "Low" à "Medium" en automatisant le pipeline (CI/CD) pour réduire le taux d'échec et accélérer les déploiements.
        </p>
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
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">Agile vs DevOps</h2>
      <p class="mb-6 text-gray-600">Comparaison détaillée des approches.</p>
      
<!-- Table rendered via React Component -->
    `
  },
  {
    id: 'scrum-devops',
    category: 'Fondamentaux de DevOps',
    title: 'Scrum + DevOps',
    timing: '1.5h',
    icon: RefreshCw,
    content: `
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">Intégration Scrum + DevOps</h2>
      <p class="mb-6 text-gray-600 text-lg">Le but est de combiner les cérémonies agiles avec l’automatisation DevOps pour créer un "Sprint with CI/CD".</p>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div class="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
          <h3 class="font-bold text-xl">Le Sprint DevOps Idéal</h3>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="p-6 flex flex-col md:flex-row">
            <div class="md:w-1/4 font-bold text-indigo-600 mb-2 md:mb-0">Sprint Planning</div>
            <div class="md:w-3/4 text-gray-700">
              <p>Ne pas planifier que du code ! Planifier aussi les pipelines.</p>
              <ul class="list-disc list-inside mt-2 text-sm text-gray-600">
                <li>Définir les User Stories ET les critères de déploiement.</li>
                <li>Inclure des tâches techniques (mise à jour CI, infra).</li>
              </ul>
            </div>
          </div>
          <div class="p-6 flex flex-col md:flex-row bg-gray-50">
            <div class="md:w-1/4 font-bold text-indigo-600 mb-2 md:mb-0">Daily Scrum</div>
            <div class="md:w-3/4 text-gray-700">
              <p>Suivre l'avancement du code ET de l'état des builds.</p>
              <ul class="list-disc list-inside mt-2 text-sm text-gray-600">
                <li>"Le build est-il passé ?"</li>
                <li>"L'environnement de staging est-il stable ?"</li>
              </ul>
            </div>
          </div>
          <div class="p-6 flex flex-col md:flex-row">
            <div class="md:w-1/4 font-bold text-indigo-600 mb-2 md:mb-0">Développement</div>
            <div class="md:w-3/4 text-gray-700">
              <p>Intégration Continue en temps réel.</p>
              <ul class="list-disc list-inside mt-2 text-sm text-gray-600">
                <li>Commits fréquents sur Git.</li>
                <li>Chaque commit déclenche les tests automatiques.</li>
              </ul>
            </div>
          </div>
          <div class="p-6 flex flex-col md:flex-row bg-gray-50">
            <div class="md:w-1/4 font-bold text-indigo-600 mb-2 md:mb-0">Sprint Review</div>
            <div class="md:w-3/4 text-gray-700">
              <p>Démo sur un environnement iso-prod, pas en local.</p>
              <ul class="list-disc list-inside mt-2 text-sm text-gray-600">
                <li>Le logiciel est déployé automatiquement.</li>
                <li>On valide le fonctionnement réel.</li>
              </ul>
            </div>
          </div>
          <div class="p-6 flex flex-col md:flex-row">
            <div class="md:w-1/4 font-bold text-indigo-600 mb-2 md:mb-0">Retrospective</div>
            <div class="md:w-3/4 text-gray-700">
              <p>Améliorer le processus ET le pipeline.</p>
              <ul class="list-disc list-inside mt-2 text-sm text-gray-600">
                <li>"Pourquoi le build a cassé 3 fois ?"</li>
                <li>"Comment accélérer le déploiement ?"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
  },
  {
    id: 'ci-cd-deep',
    category: 'Outils et Automatisation',
    title: 'CI/CD Approfondi',
    timing: '2h',
    icon: Server,
    content: `
      <div class="flex flex-col items-center justify-center h-64 text-gray-400">
        <h2 class="text-2xl font-bold mb-2">Contenu à venir...</h2>
        <p>Cette section sera dédiée à l'approfondissement du CI/CD.</p>
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
      <div class="flex flex-col items-center justify-center h-64 text-gray-400">
        <h2 class="text-2xl font-bold mb-2">Contenu à venir...</h2>
        <p>Cette section sera dédiée à Terraform et Ansible.</p>
      </div>
    `
  },
  {
    id: 'containers',
    category: 'Outils et Automatisation',
    title: 'Conteneurisation',
    timing: '1.5h',
    icon: Box,
    content: `
      <div class="flex flex-col items-center justify-center h-64 text-gray-400">
        <h2 class="text-2xl font-bold mb-2">Contenu à venir...</h2>
        <p>Cette section sera dédiée à Docker et Kubernetes.</p>
      </div>
    `
  }
];
