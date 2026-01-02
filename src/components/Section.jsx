
import React from 'react';
import { motion } from 'framer-motion';
import { sections } from '../data/content';
import InfinityLoop from './Diagram';
import ComparisonTable from './ComparisonTable';
import CIDiagram from './CIDiagram';

const Section = ({ activeSectionId }) => {
  const section = sections.find(s => s.id === activeSectionId);

  if (!section) return null;

  return (
    <motion.div
      id={activeSectionId}
      key={activeSectionId}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full mb-16"
    >
      <div className="py-8">
        <div className="flex items-center mb-8 pb-6 border-b border-gray-200">
          <div className="p-3 bg-white rounded-lg text-indigo-600 mr-4 shadow-sm">
            <section.icon size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{section.title}</h1>
        </div>
        
        {section.id === 'lifecycle' && (
          <div className="mb-12 flex justify-center">
            <InfinityLoop />
          </div>
        )}

        {section.id === 'agile-devops' && (
          <ComparisonTable />
        )}

        {section.id === 'ci-cd-deep' && (
          <div className="mb-12 flex justify-center">
            <CIDiagram />
          </div>
        )}

        <div 
          className="prose prose-indigo max-w-none"
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      </div>
    </motion.div>
  );
};

export default Section;
