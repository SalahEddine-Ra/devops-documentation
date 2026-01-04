
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { sections } from '../data/content';
import InfinityLoop from './Diagram';
import ComparisonTable from './ComparisonTable';
import CIDiagram from './CIDiagram';

const Section = ({ activeSectionId }) => {
  const section = sections.find(s => s.id === activeSectionId);
  const contentRef = useRef(null);
  const [notification, setNotification] = useState(false);

  // Utiliser useCallback pour éviter les re-renders inutiles
  const handleCopyClick = useCallback((e) => {
    const pre = e.target.closest('pre');
    if (!pre) return;
    
    const codeElement = pre.querySelector('code');
    if (!codeElement) return;
    
    const code = codeElement.textContent;
    navigator.clipboard.writeText(code).then(() => {
      setNotification(true);
      setTimeout(() => setNotification(false), 2000);
    }).catch(err => {
      console.error('Erreur de copie:', err);
    });
  }, []);

  // Effect pour styler les blocs de code (seulement quand la section change)
  useEffect(() => {
    if (!contentRef.current) return;

    const preBlocks = contentRef.current.querySelectorAll('pre');
    
    preBlocks.forEach(pre => {
      const codeElement = pre.querySelector('code');
      if (!codeElement) return;

      pre.style.cursor = 'pointer';
      pre.style.position = 'relative';
      pre.title = '📋 Cliquer pour copier';
      
      // Vérifier si l'indicateur n'existe pas déjà
      const existingIndicator = pre.querySelector('.copy-indicator');
      if (!existingIndicator) {
        const copyIndicator = document.createElement('span');
        copyIndicator.textContent = '📋 Copier';
        copyIndicator.style.cssText = `
          position: absolute;
          right: 10px;
          top: 10px;
          font-size: 0.85em;
          opacity: 0.6;
          transition: opacity 0.3s;
          pointer-events: none;
          color: #a8edea;
        `;
        copyIndicator.className = 'copy-indicator';
        pre.appendChild(copyIndicator);
      }

      // Hover effects
      pre.onmouseenter = () => {
        const indicator = pre.querySelector('.copy-indicator');
        if (indicator) indicator.style.opacity = '1';
      };
      pre.onmouseleave = () => {
        const indicator = pre.querySelector('.copy-indicator');
        if (indicator) indicator.style.opacity = '0.6';
      };
    });
  }, [activeSectionId]);

  // Délégation d'événement pour le clic - attaché une seule fois
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    container.addEventListener('click', handleCopyClick);
    
    return () => {
      container.removeEventListener('click', handleCopyClick);
    };
  }, [handleCopyClick]);

  if (!section) return null;

  return (
    <>
      {notification && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-down">
          ✅ Commande copiée !
        </div>
      )}
      
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
            ref={contentRef}
            className="prose prose-indigo max-w-none"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Section;
