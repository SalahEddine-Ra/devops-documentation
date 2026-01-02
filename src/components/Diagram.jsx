
import React from 'react';
import { motion } from 'framer-motion';

const InfinityLoop = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2, 
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-12 p-6">
      <svg viewBox="0 0 800 500" className="w-full h-auto drop-shadow-2xl">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#9333EA', stopOpacity: 1 }} />
          </linearGradient>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#4F46E5" />
          </marker>
        </defs>

        {/* Background Loop */}
        <path
          d="M 400,250 C 350,120 280,50 200,50 C 120,50 50,120 50,250 C 50,380 120,450 200,450 C 280,450 350,380 400,250 C 450,120 520,50 600,50 C 680,50 750,120 750,250 C 750,380 680,450 600,450 C 520,450 450,380 400,250"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="50"
          strokeLinecap="round"
        />

        {/* Animated Path */}
        <motion.path
          d="M 400,250 C 350,120 280,50 200,50 C 120,50 50,120 50,250 C 50,380 120,450 200,450 C 280,450 350,380 400,250 C 450,120 520,50 600,50 C 680,50 750,120 750,250 C 750,380 680,450 600,450 C 520,450 450,380 400,250"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="12"
          strokeLinecap="round"
          initial="hidden"
          animate="visible"
          variants={pathVariants}
        />

        {/* Labels - Dev Side */}
        <g className="font-bold fill-indigo-700">
          <text x="200" y="80" textAnchor="middle" fontSize="24" fontWeight="bold">PLAN</text>
          <text x="200" y="108" textAnchor="middle" fontSize="16" className="fill-gray-600">📋 Jira • Trello</text>
          
          <text x="70" y="240" textAnchor="middle" fontSize="24" fontWeight="bold">CODE</text>
          <text x="70" y="268" textAnchor="middle" fontSize="16" className="fill-gray-600">🔧 Git • GitLab</text>
          <text x="70" y="290" textAnchor="middle" fontSize="16" className="fill-gray-600">VS Code</text>
          
          <text x="200" y="430" textAnchor="middle" fontSize="24" fontWeight="bold">BUILD</text>
          <text x="200" y="458" textAnchor="middle" fontSize="16" className="fill-gray-600">🐳 Docker </text>
          <text x="200" y="480" textAnchor="middle" fontSize="16" className="fill-gray-600"></text>
          
          <text x="330" y="240" textAnchor="middle" fontSize="24" fontWeight="bold">TEST</text>
          <text x="330" y="268" textAnchor="middle" fontSize="16" className="fill-gray-600">🧪 Jest • JUnit</text>
          <text x="330" y="290" textAnchor="middle" fontSize="16" className="fill-gray-600">SonarQube</text>
        </g>

        {/* Labels - Ops Side */}
        <g className="font-bold fill-purple-700">
          <text x="600" y="80" textAnchor="middle" fontSize="24" fontWeight="bold">RELEASE</text>
          <text x="600" y="108" textAnchor="middle" fontSize="16" className="fill-gray-600">🦊 GitLab CI/CD</text>
          <text x="600" y="130" textAnchor="middle" fontSize="16" className="fill-gray-600">🎩 Jenkins</text>
          
          <text x="730" y="240" textAnchor="middle" fontSize="24" fontWeight="bold">DEPLOY</text>
          <text x="730" y="268" textAnchor="middle" fontSize="16" className="fill-gray-600">☸️ Kubernetes</text>
          <text x="730" y="290" textAnchor="middle" fontSize="16" className="fill-gray-600"></text>
          
          <text x="600" y="430" textAnchor="middle" fontSize="24" fontWeight="bold">OPERATE</text>
          <text x="600" y="458" textAnchor="middle" fontSize="16" className="fill-gray-600">☸️ K8s • Docker</text>
          <text x="600" y="480" textAnchor="middle" fontSize="16" className="fill-gray-600">AWS</text>
          
          <text x="470" y="240" textAnchor="middle" fontSize="24" fontWeight="bold">MONITOR</text>
          <text x="470" y="268" textAnchor="middle" fontSize="16" className="fill-gray-600">📊 Prometheus</text>
          <text x="470" y="290" textAnchor="middle" fontSize="16" className="fill-gray-600">Grafana</text>
        </g>

        {/* Central Text */}
        <text x="400" y="260" textAnchor="middle" fontSize="18" fontWeight="bold" className="fill-gray-500">CI / CD</text>
      </svg>
    </div>
  );
};

export default InfinityLoop;
