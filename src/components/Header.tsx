import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from './Logo';
const Header = () => {
  const [activeSection, setActiveSection] = useState('titulka');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['titulka', 'o-nas', 'pre-koho', 'vystupny-format', 'softverove-riesenie', 'sluzby', 'kontakt'];
      const scrollPosition = window.scrollY + 100; // offset for sticky header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // height of sticky header
      const elementPosition = element.offsetTop - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };
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
        <Logo />
        
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
          
          <a href="mailto:harangozo@sketch.sk">
            
          </a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-slide-in-right">
          <div className="container mx-auto px-6 py-6">
            <div className="flex justify-center mb-6">
              <Logo />
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
};
export default Header;