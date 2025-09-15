import React, { useState, useEffect, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from './Logo';
import { createOptimizedScrollHandler } from '@/utils/performanceOptimizer';
const Header = memo(() => {
  const [activeSection, setActiveSection] = useState('titulka');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleScroll = useCallback(() => {
    const sections = ['titulka', 'o-nas', 'pre-koho', 'vystupny-format', 'softverove-riesenie', 'sluzby', 'kontakt'];
    const scrollPosition = window.scrollY + 100; // offset for sticky header

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        // Use cached positions to avoid forced reflows
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        const offsetHeight = rect.height;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  // Create optimized scroll handler
  const optimizedScrollHandler = createOptimizedScrollHandler(handleScroll);

  useEffect(() => {
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', optimizedScrollHandler);
  }, [optimizedScrollHandler]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // height of sticky header
      // Use getBoundingClientRect instead of offsetTop to avoid forced reflow
      const rect = element.getBoundingClientRect();
      const elementPosition = rect.top + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  }, []);
  const menuItems = [{
    label: t('nav.services'),
    id: 'sluzby'
  }, {
    label: t('nav.audience'),
    id: 'pre-koho'
  }, {
    label: t('nav.format'),
    id: 'vystupny-format'
  }, {
    label: t('nav.solution'),
    id: 'softverove-riesenie'
  }, {
    label: t('nav.about'),
    id: 'o-nas'
  }, {
    label: t('nav.contact'),
    id: 'kontakt'
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="https://prepisdokumentov.sk/" 
          className="hover:opacity-80 transition-opacity"
          aria-label="Návrat na hlavnú stránku"
        >
          <Logo />
        </a>
        
        <nav className="hidden lg:flex items-center space-x-1">
          {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`px-4 py-2 text-sm rounded-full transition-colors ${activeSection === item.id ? 'bg-accent text-accent-foreground' : 'text-foreground hover:bg-accent hover:text-accent-foreground'}`}>
              {item.label}
            </button>)}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Switcher - Desktop */}
          <div className="hidden lg:flex items-center gap-1 bg-accent/50 rounded-full p-1">
            <button
              onClick={() => setLanguage('sk')}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                language === 'sk' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              SK
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                language === 'en' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>
          
          <button 
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <a href="mailto:harangozo@sketch.sk" aria-label="Kontaktovať nás emailom na harangozo@sketch.sk" className="text-blue-600 hover:text-blue-500 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-slide-in-right">
          <div className="container mx-auto px-6 py-6">
            <div className="flex justify-center mb-6">
              <a 
                href="https://prepisdokumentov.sk/" 
                className="hover:opacity-80 transition-opacity"
                aria-label="Návrat na hlavnú stránku"
              >
                <Logo />
              </a>
            </div>
            
            <nav className="flex flex-col space-y-4">
              {menuItems.map(item => (
                <button 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)} 
                  className={`px-4 py-3 text-lg rounded-lg transition-colors text-center ${
                    activeSection === item.id 
                      ? 'bg-accent text-accent-foreground' 
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center gap-1 bg-accent/50 rounded-full p-1 mt-6">
                <button
                  onClick={() => setLanguage('sk')}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    language === 'sk' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  SK
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    language === 'en' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  EN
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>;
});

export default Header;