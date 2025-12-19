import React from 'react';
import { motion } from 'framer-motion';

const CIDiagram = () => {
  const arrowVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        type: "spring"
      }
    })
  };

  return (
    <div className="w-full max-w-9xl mx-auto my-8 p-4 overflow-x-auto">
      <svg viewBox="0 60 1050 180" className="w-full h-auto min-w-[1500px]">
        <defs>
          <marker id="arrowhead-ci" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#4F46E5" />
          </marker>
        </defs>

        {/* Nodes */}
        {/* Developer */}
        <motion.g custom={0} initial="hidden" animate="visible" variants={nodeVariants}>
          <rect x="20" y="120" width="100" height="60" rx="5" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="2" />
          <text x="70" y="155" textAnchor="middle" className="text-sm font-bold fill-indigo-900">Développeur</text>
        </motion.g>

        {/* Git Repo */}
        <motion.g custom={1} initial="hidden" animate="visible" variants={nodeVariants}>
          <rect x="180" y="120" width="100" height="60" rx="5" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="2" />
          <text x="230" y="145" textAnchor="middle" className="text-sm font-bold fill-indigo-900">Dépôt Git</text>
          <text x="230" y="165" textAnchor="middle" className="text-xs fill-indigo-700">(GitHub/GitLab)</text>
        </motion.g>

        /* CI Server */
          <motion.g custom={2} initial="hidden" animate="visible" variants={nodeVariants}>
            <polygon points="390,100 450,150 390,200 330,150" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
            <text x="390" y="145" textAnchor="middle" className="text-sm font-bold fill-amber-900">Serveur CI</text>
            <text x="390" y="165" textAnchor="middle" className="text-xs fill-amber-700">(Jenkins)</text>
          </motion.g>

          {/* Steps Group */}
        <g transform="translate(480, 0)">
            {/* Checkout */}
            <motion.g custom={3} initial="hidden" animate="visible" variants={nodeVariants}>
                <rect x="0" y="120" width="90" height="60" rx="5" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
                <text x="45" y="145" textAnchor="middle" className="text-sm font-bold fill-green-900">1. Checkout</text>
                <text x="45" y="160" textAnchor="middle" className="text-xs fill-green-700">Récupération</text>
            </motion.g>

            {/* Linting */}
            <motion.g custom={4} initial="hidden" animate="visible" variants={nodeVariants}>
                <rect x="110" y="120" width="90" height="60" rx="5" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
                <text x="155" y="145" textAnchor="middle" className="text-sm font-bold fill-green-900">2. Linting</text>
                <text x="155" y="160" textAnchor="middle" className="text-xs fill-green-700">Qualité</text>
            </motion.g>

            {/* Test */}
            <motion.g custom={5} initial="hidden" animate="visible" variants={nodeVariants}>
                <rect x="220" y="120" width="90" height="60" rx="5" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
                <text x="265" y="145" textAnchor="middle" className="text-sm font-bold fill-green-900">3. Test</text>
                <text x="265" y="160" textAnchor="middle" className="text-xs fill-green-700">Unitaires</text>
            </motion.g>

            {/* Build */}
            <motion.g custom={6} initial="hidden" animate="visible" variants={nodeVariants}>
                <rect x="330" y="120" width="90" height="60" rx="5" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" />
                <text x="375" y="145" textAnchor="middle" className="text-sm font-bold fill-blue-900">4. Build</text>
                <text x="375" y="160" textAnchor="middle" className="text-xs fill-blue-700">Artéfact</text>
            </motion.g>
        </g>

        {/* Registry */}
        <motion.g custom={7} initial="hidden" animate="visible" variants={nodeVariants}>
          <rect x="930" y="120" width="90" height="60" rx="5" fill="#F3E8FF" stroke="#9333EA" strokeWidth="2" />
          <text x="975" y="145" textAnchor="middle" className="text-sm font-bold fill-purple-900">5. Publish</text>
          <text x="975" y="160" textAnchor="middle" className="text-xs fill-purple-700">Registre</text>
        </motion.g>

        {/* Arrows */}
        {/* Dev -> Git */}
        <motion.path d="M 120,150 L 170,150" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead-ci)" variants={arrowVariants} initial="hidden" animate="visible" />
        <text x="145" y="140" textAnchor="middle" className="text-xs fill-gray-500">git push</text>

        {/* Git -> CI */}
        <motion.path d="M 280,150 L 330,150" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead-ci)" variants={arrowVariants} initial="hidden" animate="visible" />
        <text x="305" y="140" textAnchor="middle" className="text-xs fill-gray-500">Webhook</text>

        {/* CI -> Checkout */}
        <motion.path d="M 440,150 L 470,150" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead-ci)" variants={arrowVariants} initial="hidden" animate="visible" />

        {/* Checkout -> Linting */}
        <motion.path d="M 570,150 L 580,150" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead-ci)" variants={arrowVariants} initial="hidden" animate="visible" />

        {/* Linting -> Test */}
        <motion.path d="M 680,150 L 690,150" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead-ci)" variants={arrowVariants} initial="hidden" animate="visible" />

        {/* Test -> Build */}
        <motion.path d="M 790,150 L 800,150" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead-ci)" variants={arrowVariants} initial="hidden" animate="visible" />

        {/* Build -> Registry */}
        <motion.path d="M 900,150 L 920,150" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead-ci)" variants={arrowVariants} initial="hidden" animate="visible" />

      </svg>
    </div>
  );
};

export default CIDiagram;
