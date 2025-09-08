import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Database, Download } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="titulka" className="relative w-full py-20 md:py-32 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      
      <div className={`relative z-10 max-w-4xl text-center space-y-8 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
          Prepisovanie textov z pdf dokumentov a obrázkov
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Digitalizácia osobných alebo firemných dát na mieru.
        </p>
        
        <div className="flex justify-center pt-6">
          <a href="mailto:harangozo@sketch.sk">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/80 text-base h-12 px-8 transition-all duration-200">
              Kontaktovať
            </Button>
          </a>
        </div>
      </div>
      
      {/* Hero illustration */}
      <div className={`w-full max-w-5xl mt-16 z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="cosmic-glow relative rounded-3xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 rounded-2xl bg-muted flex items-center justify-center">
                <FileText className="w-12 h-12 text-foreground" />
              </div>
              <span className="text-sm text-muted-foreground font-medium">Dokumenty</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-0.5 bg-primary opacity-60 hidden md:block"></div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mx-4">
                <div className="w-2 h-2 bg-background rounded-full"></div>
              </div>
              <div className="w-12 h-0.5 bg-primary opacity-60 hidden md:block"></div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 rounded-2xl bg-muted flex items-center justify-center">
                <Database className="w-12 h-12 text-foreground" />
              </div>
              <span className="text-sm text-muted-foreground font-medium">Databáza</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-0.5 bg-primary opacity-60 hidden md:block"></div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mx-4">
                <div className="w-2 h-2 bg-background rounded-full"></div>
              </div>
              <div className="w-12 h-0.5 bg-primary opacity-60 hidden md:block"></div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 rounded-2xl bg-muted flex items-center justify-center">
                <Download className="w-12 h-12 text-foreground" />
              </div>
              <span className="text-sm text-muted-foreground font-medium">Výstup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;