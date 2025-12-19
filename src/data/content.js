
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
    title: 'Intégration Continue (CI)',
    timing: '2h',
    icon: Server,
    content: `
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">L'Intégration Continue (CI) – Construire et Tester</h2>

      <!--Introduction -->
      <div class="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-indigo-500">
        <h3 class="text-xl font-semibold mb-3 text-gray-800">Introduction : Le Scénario du "Merge Day"</h3>
        <p class="mb-4 text-gray-700 italic">
          Imaginez ce scénario classique : Vous travaillez sur une fonctionnalité depuis deux semaines. Le vendredi soir, vous décidez d'envoyer votre code sur la branche principale (Main). Et là... C'est le drame.
        </p>
        <p class="mb-4 text-gray-700">
          Votre code casse tout. L'application ne démarre plus. Vos collègues sont bloqués. C'est ce qu'on appelle <strong>"l'Enfer de l'Intégration"</strong>.
        </p>
        <p class="text-gray-700">
          Pour éviter cela, les équipes modernes utilisent le Feature Branch Workflow combiné à un gardien impitoyable : <strong>L'Intégration Continue</strong>.
        </p>
      </div>

      <!--Qu'est-ce que la CI -->
      <h3 class="text-2xl font-bold mb-4 text-gray-800">Qu'est-ce que l'Intégration Continue (CI) ?</h3>
      <p class="mb-4 text-gray-700">
        L'Intégration Continue est une pratique où les développeurs fusionnent leurs modifications de code dans un dépôt central (GitHub/GitLab) plusieurs fois par jour.
      </p>
      <ul class="list-disc list-inside bg-gray-50 p-4 rounded-lg text-gray-700 space-y-2 mb-8">
        <li><strong>Le Concept :</strong> Automatiser la validation de chaque petit changement.</li>
        <li><strong>L'Objectif :</strong> Le "Fail Fast" (Échouer vite). Si une erreur existe, nous voulons le savoir dans les 5 minutes via une notification automatique.</li>
      </ul>

      <!-- La Pyramide des Tests -->

<h3 class="text-2xl font-bold mb-4 text-gray-800">
  La Stratégie de Qualité : La Pyramide des Tests
</h3>

<p class="mb-6 text-gray-600">
  Principe clé : plus un test est bas dans la pyramide, plus il doit être
  <strong>nombreux</strong>, <strong>rapide</strong> et <strong>automatique</strong>.
  <br />
  En CI, on ne cherche pas à tout tester partout, mais à détecter les erreurs
  le plus tôt possible, au coût le plus faible.
</p>

<div class="space-y-6 mb-8">

  <!-- Analyse Statique & Linting -->
  <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
    <h4 class="font-bold text-blue-800 text-lg">
      1. Analyse Statique & Linting — le filtre d’entrée
    </h4>

    <p class="text-sm text-gray-700 mt-2">
      Ici, le code n’est pas exécuté. On analyse uniquement le texte du code
      pour vérifier qu’il respecte les règles techniques de base.
    </p>

    <ul class="list-disc list-inside mt-3 text-sm text-gray-600 space-y-1">
      <li>Détecte les erreurs évidentes : variables inutilisées, imports morts.</li>
      <li>Vérifie le style et la lisibilité du code.</li>
      <li>Repère des vulnérabilités simples et du code trop complexe.</li>
      <li>Très rapide : quelques secondes seulement.</li>
    </ul>

    <p class="text-sm text-gray-700 mt-3">
      Règle claire en CI : <strong>si le lint échoue, le pipeline s’arrête</strong>.
      Ce n’est pas du cosmétique, c’est une vraie barrière de qualité technique.
    </p>
  </div>

  <!-- Tests Unitaires -->
  <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
    <h4 class="font-bold text-green-800 text-lg">
      2. Tests Unitaires — le socle de la qualité
    </h4>

    <p class="text-sm text-gray-700 mt-2">
      Les tests unitaires vérifient une seule fonction ou méthode, en isolation
      totale, sans base de données, sans réseau et sans API externe.
    </p>

    <p class="text-sm text-gray-700 mt-2">
      Exemple simple : <code class="bg-gray-100 px-1 rounded">calculerTTC(100)</code>
      doit retourner <strong>120</strong>.
    </p>

    <ul class="list-disc list-inside mt-3 text-sm text-gray-600 space-y-1">
      <li>Valident la logique métier et les règles de calcul.</li>
      <li>Attrapent la majorité des bugs.</li>
      <li>Ultra rapides et exécutés à chaque push.</li>
      <li>Faciles à comprendre et à maintenir.</li>
    </ul>

    <p class="text-sm text-gray-700 mt-3">
      Erreur fréquente : appeler “test unitaire” un test qui touche la base de
      données. Dans ce cas, ce n’est plus unitaire, c’est de l’intégration.
    </p>
  </div>

  <!-- Tests d’Intégration -->
  <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
    <h4 class="font-bold text-purple-800 text-lg">
      3. Tests d’Intégration — vérifier que les briques s’assemblent
    </h4>

    <p class="text-sm text-gray-700 mt-2">
      Les tests d’intégration vérifient que plusieurs composants fonctionnent
      correctement ensemble, dans des conditions proches du réel.
    </p>

    <ul class="list-disc list-inside mt-3 text-sm text-gray-600 space-y-1">
      <li>API ↔ Base de données</li>
      <li>Service ↔ Service</li>
      <li>ORM ↔ Schéma de base de données</li>
    </ul>

    <p class="text-sm text-gray-700 mt-3">
      Ces tests sont plus lents, plus fragiles et plus coûteux à maintenir,
      c’est pourquoi on en fait moins. Bonne pratique CI : utiliser Docker
      avec une base de données éphémère et nettoyer l’environnement après chaque test.
    </p>
  </div>

  <!-- Tests End-to-End -->
  <!-- Tests End-to-End -->
<div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
  <h4 class="font-bold text-red-800 text-lg">
    4. Tests End-to-End (E2E) — validation finale
  </h4>

  <p class="text-sm text-gray-700 mt-2">
    Les tests End-to-End vérifient le fonctionnement du système complet,
    du point de vue d’un utilisateur réel.
  </p>

  <ul class="list-disc list-inside mt-3 text-sm text-gray-600 space-y-1">
    <li>Simulent de vrais parcours utilisateur (login, formulaire, paiement).</li>
    <li>Impliquent toute l’application : front, back, base de données.</li>
    <li>Lents et fragiles, donc volontairement peu nombreux.</li>
  </ul>

  <p class="text-sm text-gray-700 mt-3">
    Bonne pratique CI : exécuter ces tests uniquement sur les scénarios
    critiques, souvent avant une release ou en exécution planifiée.
  </p>
</div>


  <!-- conclusion -->
  <h4 class="font-bold text-lg text-blue-700 mt-2 " > Dans le pipeline CI, chaque niveau a son rôle.</h4>
  <ul class="list-disc list-inside mt-3 text-sm text-gray-600 space-y-1">
    <li> Le lint empêche le mauvais code d’entrer.</li>
    <li> Les tests unitaires vérifient la logique.</li>
    <li> Les tests d’intégration vérifient que tout fonctionne ensemble.</li>
    <li> Les tests End-to-End valident le système complet.</li>
  </ul>


</div>


      <!--Le Pipeline CI -->
      <h3 class="text-2xl font-bold mb-4 text-gray-800">Le Pipeline CI : Les Étapes Techniques</h3>
      <p class="mb-4 text-gray-600">Voici ce qui se passe réellement dans le serveur CI à chaque git push.</p>
      
      <div class="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm space-y-4 mb-8">
        <div>
          <span class="text-yellow-400 font-bold">Étape 1 : Le Déclencheur (Trigger)</span>
          <p class="ml-4 text-gray-400">Le serveur CI détecte un changement sur le dépôt Git (via Webhook).</p>
        </div>
        <div>
          <span class="text-yellow-400 font-bold">Étape 2 : Linting & Analyse Statique</span>
          <p class="ml-4 text-gray-400">Vérifier la syntaxe. Si ça échoue, stop.</p>
        </div>
        <div>
          <span class="text-yellow-400 font-bold">Étape 3 : Tests Unitaires</span>
          <p class="ml-4 text-gray-400">Lancement de milliers de petits tests en parallèle (Jest, JUnit).</p>
        </div>
        <div>
          <span class="text-yellow-400 font-bold">Étape 4 : Tests d'Intégration</span>
          <p class="ml-4 text-gray-400">Vérification avec base de données temporaire.</p>
        </div>
        <div>
          <span class="text-yellow-400 font-bold">Étape 5 : Build & Packaging</span>
          <p class="ml-4 text-gray-400">Compilation et création de l'Artéfact (Image Docker, .jar).</p>
        </div>
      </div>

      <!-- resume -->
    <div class="bg-indigo-50 p-6 rounded-lg border border-indigo-100 mb-8">
      <p class="text-xl font-bold text-indigo-700">
        Le pipeline d'Intégration Continue (CI) vise à automatiser
        la construction et le test immédiat de chaque changement de code,
        arantissant ainsi la détection précoce des erreurs (Fail Fast) et l'établissement 
        d'une confiance constante dans la qualité et la préparation du produit pour le déploiement.
    </p>
    </div>
      <!--Jenkins -->
      <h3 class="text-2xl font-bold mb-4 text-gray-800">JENKINS : Le Chef d'Orchestre du DevOps</h3>
      
      <div class="bg-indigo-50 p-6 rounded-lg mb-8 border-l-4 border-indigo-500">
        <p class="mb-4 text-indigo-900 italic font-medium">
          "Si la CI/CD était une usine, Jenkins en serait le contremaître. Il ne fabrique pas le produit lui-même, mais il crie les ordres pour que les machines le fassent."
        </p>
        
        <h4 class="font-bold text-indigo-800 text-lg mb-2">1. C'est quoi exactement ?</h4>
        <p class="mb-4 text-indigo-900">
          Jenkins n'est pas juste un "serveur". C'est un <strong>Orchestrateur d'Automatisation</strong>. C'est un projet Open Source (gratuit), écrit en Java, et c'est le standard absolu du marché (utilisé par 80% des grandes entreprises).
        </p>
        <div class="bg-white p-4 rounded-lg shadow-sm mb-4">
          <p class="text-gray-700"><strong>🎩 L'analogie :</strong> Imaginez un Majordome Suisse. Il a 1000 bras, il parle toutes les langues (Java, Python, Docker...) et il travaille 24h/24 sans jamais se plaindre.</p>
        </div>

        <h4 class="font-bold text-indigo-800 text-lg mb-4">2. Pourquoi est-il incontournable ? (Les 3 Piliers)</h4>
        
        <div class="space-y-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h5 class="font-bold text-indigo-700 mb-2">A. L'Architecture "Cerveau & Muscles" (Master / Agent)</h5>
            <p class="text-sm text-gray-700 mb-2">C'est sa plus grande force architecturale. Jenkins sépare la réflexion de l'action.</p>
            <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li><strong>Le Controller (Le Cerveau) :</strong> Il gère l'interface web, les utilisateurs et planifie le travail. Il ne doit jamais lancer de compilations lourdes lui-même.</li>
              <li><strong>Les Agents (Les Muscles) :</strong> Ce sont des serveurs esclaves (ou des conteneurs éphémères) qui exécutent les tâches sales.</li>
            </ul>
            <p class="text-sm text-gray-500 mt-2 italic">👉 Avantage : Vous pouvez avoir un Agent Windows pour compiler du .NET, un Agent Linux pour du Docker, et un Agent Mac pour une appli iOS. Jenkins pilote les trois en même temps.</p>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h5 class="font-bold text-indigo-700 mb-2">B. Le "Couteau Suisse" (Les Plugins)</h5>
            <p class="text-sm text-gray-700 mb-2">La puissance de Jenkins ne vient pas du logiciel lui-même, mais de ses <strong>1800+ Plugins</strong>. Vous utilisez AWS ? Il y a un plugin. Slack ? Un plugin. Kubernetes ? Un plugin.</p>
            <p class="text-sm font-bold text-indigo-600">Règle d'or : "Si un outil DevOps existe, il existe un plugin Jenkins pour lui parler."</p>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h5 class="font-bold text-indigo-700 mb-2">C. La Révolution : "Pipeline as Code"</h5>
            <p class="text-sm text-gray-700 mb-2">Avant, on configurait Jenkins en cliquant partout dans l'interface (ce qu'on appelle péjorativement le "ClickOps"). C'était fragile et impossible à sauvegarder.</p>
            <p class="text-sm text-gray-700 mb-2">Aujourd'hui, nous utilisons le <code>Jenkinsfile</code>.</p>
            <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>C'est un fichier texte qui décrit tout le pipeline.</li>
              <li>Il vit <strong>DANS</strong> votre dépôt Git, à côté de votre code source.</li>
            </ul>
            <p class="text-sm text-gray-500 mt-2 italic">👉 Bénéfice : Si le serveur Jenkins brûle demain, on en installe un nouveau, on lui donne l'URL du Git, et il sait instantanément comment reconstruire le projet. C'est l'immortalité de la configuration.</p>
          </div>
        </div>
      </div>

      <!-- GitHub Actions -->
      <h3 class="text-2xl font-bold mb-4 text-gray-800">L'Alternative Moderne : GitHub Actions</h3>
      <p class="mb-4 text-gray-700">
        Si Jenkins est le "père", GitHub Actions est le "fils prodige". C'est un outil SaaS intégré à GitHub, sans serveur à gérer.
      </p>

      <div class="overflow-x-auto shadow-lg rounded-lg mb-8">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="py-3 px-4 text-left">Critère</th>
              <th class="py-3 px-4 text-left">Jenkins 👴</th>
              <th class="py-3 px-4 text-left">GitHub Actions 🚀</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            <tr class="border-b"><td class="py-3 px-4 font-bold">Type</td><td class="py-3 px-4">Serveur (Self-Hosted)</td><td class="py-3 px-4">SaaS (Cloud)</td></tr>
            <tr class="border-b"><td class="py-3 px-4 font-bold">Config</td><td class="py-3 px-4">Jenkinsfile (Groovy)</td><td class="py-3 px-4">Workflow .yaml</td></tr>
            <tr class="border-b"><td class="py-3 px-4 font-bold">Maintenance</td><td class="py-3 px-4">Élevée</td><td class="py-3 px-4">Nulle</td></tr>
            <tr class="border-b"><td class="py-3 px-4 font-bold">Cible</td><td class="py-3 px-4">Grandes Entreprises</td><td class="py-3 px-4">Startups, Moderne</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Guide GitHub Actions -->
      <h3 class="text-2xl font-bold mb-4 text-gray-800">GUIDE PRATIQUE : GitHub Actions</h3>
      <p class="mb-4 text-gray-600">Tout se passe dans <code>.github/workflows/mon-pipeline.yml</code>.</p>
      
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm"><code>name: Mon Super Pipeline CI

# 1. Le Déclencheur
on:
  push:
    branches: [ "main" ]

# 2. Les Tâches
jobs:
  build-and-test:
    runs-on: ubuntu-latest

    # 3. Les Étapes
    steps:
    # A. Récupérer le code
    - name: Checkout du code
      uses: actions/checkout@v3

    # B. Préparer Node.js
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    # C. Installer
    - name: Installation
      run: npm install

    # D. Tests & Qualité
    - name: Tests & Qualité
      run: |
        npm run lint
        npm test

    # E. Build
    - name: Build Production
      run: npm run build</code></pre>

      <div class="bg-green-50 p-6 rounded-lg border border-green-100 text-center">
        <p class="text-green-800 italic font-medium">
          "GitHub Actions représente la démocratisation du DevOps. Il a supprimé la barrière technique de l'installation de serveur."
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
    id: 'containers',
    category: 'Outils et Automatisation',
    title: 'Conteneurisation (Docker)',
    timing: '1.5h',
    icon: Box,
    content: `
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">Introduction à Docker</h2>
      
      <div class="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-blue-500">
        <h3 class="text-xl font-semibold mb-3 text-gray-800">Docker c’est quoi ?</h3>
        <p class="mb-4 text-gray-700">
          Docker est une plateforme qui permet de <strong>Créer, Déployer et Exécuter</strong> des applications dans des conteneurs, de façon rapide et standardisée.
        </p>
        <div class="bg-blue-50 p-4 rounded mt-4">
          <h4 class="font-bold text-blue-800">C’est quoi un conteneur ?</h4>
          <p class="text-blue-700">Un mini-ordinateur qui contient : ton application + les dépendances + les configurations. Il garantit que l’application fonctionne partout de la même manière.</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold mb-4 text-gray-800">Concepts Clés</h3>
      <div class="grid md:grid-cols-3 gap-4 mb-8">
        <div class="bg-white p-4 rounded shadow border border-gray-200">
          <strong class="block text-lg mb-2 text-indigo-600">Image Docker</strong>
          <p class="text-sm text-gray-600">Un modèle qui contient le code + les dépendances (ex: python:3.11).</p>
        </div>
        <div class="bg-white p-4 rounded shadow border border-gray-200">
          <strong class="block text-lg mb-2 text-indigo-600">Conteneur</strong>
          <p class="text-sm text-gray-600">Une instance d’une image (l'application qui tourne).</p>
        </div>
        <div class="bg-white p-4 rounded shadow border border-gray-200">
          <strong class="block text-lg mb-2 text-indigo-600">Dockerfile</strong>
          <p class="text-sm text-gray-600">Le fichier recette pour construire l'image.</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold mb-4 text-gray-800">Exemple de Dockerfile</h3>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8"><code># 1. Utiliser une image python officielle
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
CMD ["python", "app.py"]</code></pre>

      <h3 class="text-2xl font-bold mb-4 text-gray-800">Commandes Essentielles</h3>
      <div class="bg-gray-800 text-gray-200 p-4 rounded-lg font-mono text-sm space-y-2 mb-8">
        <p><span class="text-green-400"># Construire l'image</span><br>docker build -t mon-app .</p>
        <p><span class="text-green-400"># Lancer un conteneur</span><br>docker run -d -p 5000:5000 mon-app</p>
      </div>
    `
  },
  {
    id: 'devsecops',
    category: 'Sécurité',
    title: 'DevSecOps',
    timing: '1h',
    icon: Cpu,
    content: `
      <h2 class="text-3xl font-bold mb-6 text-indigo-700">DevSecOps & The Security Gate</h2>
      
      <div class="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-red-500">
        <h3 class="text-xl font-semibold mb-3 text-gray-800">Pourquoi DevSecOps ?</h3>
        <p class="mb-4 text-gray-700">
          Le DevSecOps n'est pas seulement une méthode, c'est une évolution culturelle du DevOps qui intègre la sécurité comme une responsabilité partagée dès le début du cycle de développement.
        </p>
        <p class="font-semibold text-red-700">Objectif : Garantir un déploiement fiable et sécurisé sans ralentir la vitesse de livraison.</p>
      </div>

      <h3 class="text-2xl font-bold mb-4 text-gray-800">La "Security Gate" (La Porte de Sécurité)</h3>
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <p class="mb-4 text-gray-700">C'est un point de contrôle automatisé placé dans le pipeline CI/CD :</p>
        <ul class="space-y-2 mb-4">
          <li class="flex items-center"><span class="text-green-500 mr-2">✅</span> Si le code est sûr → La porte s'ouvre.</li>
          <li class="flex items-center"><span class="text-red-500 mr-2">⛔</span> Si vulnérabilité critique → La porte se ferme (Pipeline échoue).</li>
        </ul>
        <p class="text-sm text-gray-600"><strong>Outil de choix :</strong> SonarQube.</p>
      </div>

      <h3 class="text-2xl font-bold mb-4 text-gray-800">Les 3 Piliers de SonarQube</h3>
      <div class="grid md:grid-cols-3 gap-4 mb-8">
        <div class="bg-white p-4 rounded shadow border-t-4 border-yellow-500">
          <h4 class="font-bold text-lg mb-2">🐞 Les Bugs</h4>
          <p class="text-sm text-gray-600">Anomalies qui provoquent des erreurs (Fiabilité).</p>
        </div>
        <div class="bg-white p-4 rounded shadow border-t-4 border-red-500">
          <h4 class="font-bold text-lg mb-2">🔓 Vulnérabilités</h4>
          <p class="text-sm text-gray-600">Faiblesses exploitables par des pirates (Sécurité).</p>
        </div>
        <div class="bg-white p-4 rounded shadow border-t-4 border-blue-500">
          <h4 class="font-bold text-lg mb-2">code Code Smells</h4>
          <p class="text-sm text-gray-600">Code mal écrit, difficile à maintenir (Dette technique).</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold mb-4 text-gray-800">Configuration (sonar-project.properties)</h3>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8"><code># Clé unique du projet
sonar.projectKey=DevOps_Presentation_Project
# Nom affiché
sonar.projectName=Projet DevOps Team
# Version
sonar.projectVersion=1.0
# Sources
sonar.sources=.</code></pre>

      <h2 class="text-3xl font-bold mb-6 text-indigo-700">La Sécurité des Conteneurs (Container Scanning)</h2>
      
      <div class="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-orange-500">
        <h3 class="text-xl font-semibold mb-3 text-gray-800">Pourquoi scanner le code ne suffit pas ?</h3>
        <p class="mb-4 text-gray-700">
          Même si votre code est parfait, si vous utilisez une image de base (ex: <code>node:14</code>) qui contient une faille de sécurité critique dans le système d'exploitation (Linux), les hackers passeront par là.
        </p>
        <p class="font-semibold text-orange-700">C'est la sécurité de la "Supply Chain" (Chaîne d'approvisionnement).</p>
      </div>

      <h3 class="text-2xl font-bold mb-4 text-gray-800">L'Outil : Trivy</h3>
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-gray-50 p-6 rounded-lg">
          <h4 class="font-bold text-indigo-600 mb-2">Comment ça marche ?</h4>
          <p class="text-sm text-gray-600 mb-2">
            Trivy scanne votre image Docker avant le déploiement. Il regarde la liste des paquets installés (OS et dépendances) et la compare à une base de données de vulnérabilités mondiales (CVE - Common Vulnerabilities and Exposures).
          </p>
        </div>
        <div class="bg-gray-50 p-6 rounded-lg">
          <h4 class="font-bold text-indigo-600 mb-2">La Règle d'Or</h4>
          <p class="text-sm text-gray-600">
            Si Trivy trouve une faille classée <strong>"CRITICAL"</strong>, le pipeline CI/CD doit <strong>bloquer le déploiement</strong> immédiatement.
          </p>
        </div>
      </div>

      <h3 class="text-2xl font-bold mb-4 text-gray-800">Exemple d'Intégration CI/CD</h3>
      <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-8">
        <p class="text-gray-400 mb-2"># 1. Scan informatif (ne bloque pas)</p>
        <p class="mb-4">trivy image my-app:latest</p>
        
        <p class="text-gray-400 mb-2"># 2. Scan bloquant (Security Gate)</p>
        <p class="text-green-400">trivy image --exit-code 1 --severity CRITICAL my-app:latest</p>
        <p class="text-gray-500 mt-2 text-xs">// Si une faille critique est trouvée, la commande renvoie une erreur (exit 1) et le pipeline s'arrête.</p>
      </div>

      <div class="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
        <h3 class="font-bold text-indigo-800 mb-2">Conclusion</h3>
        <p class="text-indigo-700">
          L'intégration de SonarQube comme "Security Gate" permet de passer d'une sécurité subjective à une sécurité mesurable et automatisée.
        </p>
      </div>
    `
  }
];
