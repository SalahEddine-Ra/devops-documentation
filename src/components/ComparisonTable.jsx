import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

const ComparisonTable = () => {
  const [data, setData] = useState([
    { criteria: "Objectif Principal", agile: "Vitesse et flexibilité du développement.", devops: "Qualité et rapidité de la livraison/déploiement.", combined: "Chaîne de valeur continue (Code → Prod)." },
    { criteria: "Focus", agile: "Collaboration Devs + Clients.", devops: "Collaboration Dev + Ops.", combined: "Global (Dev, Ops, QA, Business)." },
    { criteria: "Cycle de livraison", agile: "Itératif (Sprints courts).", devops: "Continu (CI/CD, Automation).", combined: "Sprints + CI/CD + Deploy auto." },
    { criteria: "Outils clés", agile: "Jira, Trello, Git.", devops: "Jenkins, Docker, K8s, Ansible.", combined: "Stack intégrée (Agile + CI/CD)." },
    { criteria: "Qualité", agile: "Tests manuels, Code review.", devops: "Tests auto, Monitoring continu.", combined: "Qualité vérifiée à chaque étape." },
    { criteria: "Résultat final", agile: "Produit prêt à livrer.", devops: "Produit livré et stable.", combined: "Produit livré en continu et amélioré." },
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
