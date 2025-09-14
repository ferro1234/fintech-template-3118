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
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Three hero images from the original content */}
          <div className="space-y-4">
            <div className="cosmic-glow relative rounded-3xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
              <img 
                src="/lovable-uploads/701323ab-fb0e-4e72-b4e9-996050083520.png"
                alt="PDF, obrazok, audio, video"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-lg text-muted-foreground text-center">
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
            <p className="text-lg text-muted-foreground text-center">
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
            <p className="text-lg text-muted-foreground text-center">
              Zvyšujeme efektivitu práce
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;