import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import { sections } from './data/content';

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Scroll spy to update active section in sidebar
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      
      for (const section of sectionElements) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={scrollToSection}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col min-w-0 lg:ml-64 transition-all duration-300 h-screen">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white shadow-sm p-4 flex items-center sticky top-0 z-10 flex-shrink-0">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
          >
            <Menu size={24} />
          </button>
          <span className="ml-4 font-bold text-gray-800">DevOps Guide</span>
        </div>

        <main className="flex-1 p-4 md:p-8 overflow-y-auto scroll-smooth">
          <div className="w-full">
            {sections.map((section, index) => {
              const prevSection = sections[index - 1];
              const showCategory = !prevSection || prevSection.category !== section.category;
              
              return (
                <React.Fragment key={section.id}>
                  {showCategory && (
                    <div className="mb-8 mt-12 first:mt-0 pb-4 border-b-2 border-gray-200">
                      <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">
                        {section.category}
                      </h2>
                    </div>
                  )}
                  <Section activeSectionId={section.id} />
                </React.Fragment>
              );
            })}
            
            <footer className="mt-12 border-t border-gray-200 pt-6 pb-12 text-center text-gray-500 text-sm">
              <p>© 2025 DevOps Documentation. Created for the team.</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
