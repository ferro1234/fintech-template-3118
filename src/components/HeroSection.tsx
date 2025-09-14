import React, { useState, useEffect } from 'react';

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
      
      {/* Hero images */}
      <div className={`w-full max-w-6xl z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="cosmic-glow relative rounded-3xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
              <img 
                src="/lovable-uploads/701323ab-fb0e-4e72-b4e9-996050083520.png"
                alt="PDF, obrazok, audio, video"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground text-center">
              pdf, obrazok, audio, video
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="cosmic-glow relative rounded-3xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
              <img 
                src="/lovable-uploads/35295c25-6566-4eed-b87a-b03b03cb6ec2.png"
                alt="Digitalizujeme dokumenty do novej podoby"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground text-center">
              Digitalizujeme dokumenty do novej podoby
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="cosmic-glow relative rounded-3xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
              <img 
                src="/lovable-uploads/1dbba9c9-5aae-4230-8b7a-4e534bc13e3e.png"
                alt="Zvyšujeme efektivitu práce"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground text-center">
              Zvyšujeme efektivitu práce
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;