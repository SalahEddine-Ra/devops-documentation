import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

const ComparisonTable = () => {
  const [data, setData] = useState([
    { criteria: "Nature", agile: "Méthode de gestion et développement.", devops: "Culture + pratiques techniques.", combined: "Développement rapide + livraison rapide." },
    { criteria: "Pratiques", agile: "Livraisons fréquentes (sprints).", devops: "Automatisation du build, tests et déploiement.", combined: "Sprints + CI/CD + monitoring." },
    { criteria: "Collaboration", agile: "Collaboration avec le client.", devops: "Unifie développeurs et operations.", combined: "Travail d'équipe global (Dev + Ops + QA + Business)." },
    { criteria: "Objectif", agile: "Flexibilité et adaptation au changement.", devops: "Déploiement rapide et fiable.", combined: "Une chaîne complète de valeur du backlog → production." },
    { criteria: "Résultat", agile: "Produit prêt à livrer.", devops: "Produit mis en production en continu.", combined: "Livraison continue et amélioration constante." },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    setData(sortedData);
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    
    <div className="overflow-x-auto shadow-lg rounded-lg mb-8">
      <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-600 mb-8">
        <p className="text-gray-700 text-lg leading-relaxed">Agile et DevOps sont deux approches complémentaires. L’Agilité se concentre sur l’organisation du travail
           et le développement itératif afin de livrer rapidement des fonctionnalités répondant aux besoins du client. 
          DevOps prolonge cette démarche en assurant l’automatisation, l’intégration continue et le déploiement
           rapide et fiable des applications. Ensemble, Agile et DevOps permettent de réduire le temps de mise sur le marché, 
          d’améliorer la collaboration entre les équipes et de fournir une valeur continue aux utilisateurs.</p>
    </div>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th 
              className="py-4 px-6 text-left cursor-pointer hover:bg-gray-700 transition-colors"
              onClick={() => requestSort('criteria')}
            >
              <div className="flex items-center">
                Critère
                <ArrowUpDown size={16} className="ml-2" />
              </div>
            </th>
            <th 
              className="py-4 px-6 text-left bg-blue-600 cursor-pointer hover:bg-blue-700 transition-colors"
              onClick={() => requestSort('agile')}
            >
              <div className="flex items-center">
                Agile
                <ArrowUpDown size={16} className="ml-2" />
              </div>
            </th>
            <th 
              className="py-4 px-6 text-left bg-purple-600 cursor-pointer hover:bg-purple-700 transition-colors"
              onClick={() => requestSort('devops')}
            >
              <div className="flex items-center">
                DevOps
                <ArrowUpDown size={16} className="ml-2" />
              </div>
            </th>
            <th 
              className="py-4 px-6 text-left bg-green-600 cursor-pointer hover:bg-green-700 transition-colors"
              onClick={() => requestSort('combined')}
            >
              <div className="flex items-center">
                Agile + DevOps
                <ArrowUpDown size={16} className="ml-2" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-4 px-6 font-bold">{row.criteria}</td>
              <td className="py-4 px-6">{row.agile}</td>
              <td className="py-4 px-6">{row.devops}</td>
              <td className="py-4 px-6">{row.combined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
