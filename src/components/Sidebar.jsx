
import React from 'react';
import { sections } from '../data/content';

const Sidebar = ({ activeSection, setActiveSection, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-30 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            DevOps Guide
          </h1>
          <p className="text-xs text-gray-400 mt-1">Formation & Documentation</p>
        </div>

        <nav className="p-4 overflow-y-auto h-[calc(100vh-88px)]">
          {['Fondamentaux de DevOps', 'Outils et Automatisation'].map((category) => (
            <div key={category} className="mb-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {sections.filter(s => s.category === category).map((section) => {
                  const Icon = section.icon;
                  return (
                    <li key={section.id}>
                      <button
                        onClick={() => {
                          setActiveSection(section.id);
                          setIsOpen(false);
                        }}
                        className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 ${
                          activeSection === section.id
                            ? 'bg-indigo-600 text-white shadow-lg'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        <Icon size={20} className="mr-3" />
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-medium text-left">{section.title}</span>
                          
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
