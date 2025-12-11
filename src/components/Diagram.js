
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
    <div className="w-full max-w-3xl mx-auto my-8 p-4">
      <svg viewBox="0 0 800 400" className="w-full h-auto drop-shadow-xl">
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
          d="M 400,200 C 350,100 280,50 200,50 C 120,50 50,120 50,200 C 50,280 120,350 200,350 C 280,350 350,300 400,200 C 450,100 520,50 600,50 C 680,50 750,120 750,200 C 750,280 680,350 600,350 C 520,350 450,300 400,200"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="40"
          strokeLinecap="round"
        />

        {/* Animated Path */}
        <motion.path
          d="M 400,200 C 350,100 280,50 200,50 C 120,50 50,120 50,200 C 50,280 120,350 200,350 C 280,350 350,300 400,200 C 450,100 520,50 600,50 C 680,50 750,120 750,200 C 750,280 680,350 600,350 C 520,350 450,300 400,200"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="8"
          strokeLinecap="round"
          initial="hidden"
          animate="visible"
          variants={pathVariants}
        />

        {/* Labels - Dev Side */}
        <g className="font-bold text-sm fill-indigo-700">
          <text x="200" y="90" textAnchor="middle">PLAN</text>
          <text x="80" y="205" textAnchor="middle">CODE</text>
          <text x="200" y="320" textAnchor="middle">BUILD</text>
          <text x="320" y="205" textAnchor="middle">TEST</text>
        </g>

        {/* Labels - Ops Side */}
        <g className="font-bold text-sm fill-purple-700">
          <text x="600" y="90" textAnchor="middle">RELEASE</text>
          <text x="720" y="205" textAnchor="middle">DEPLOY</text>
          <text x="600" y="320" textAnchor="middle">OPERATE</text>
          <text x="480" y="205" textAnchor="middle">MONITOR</text>
        </g>

        {/* Central Text */}
        <text x="400" y="205" textAnchor="middle" className="text-xs font-bold fill-gray-500">CI / CD</text>
      </svg>
    </div>
  );
};

export default InfinityLoop;
