import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, Target, FileText, Database, Download, Shield, Palette, Zap } from 'lucide-react';

const SoftwareSolutionSection = () => {
  const [currentExample, setCurrentExample] = useState(0);
  
  const examples = [
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=600",
      title: "Príklad automatizácie PDF formulárov"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600", 
      title: "Webová aplikácia na mieru"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
      title: "Automatizácia procesov"
    }
  ];

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
  };

  const prevExample = () => {
    setCurrentExample((prev) => (prev - 1 + examples.length) % examples.length);
  };

  return (
    <section id="softverove-riesenie" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-8">
          Softvérové riešenie na mieru
        </h2>
        
        {/* Process visualization */}
        <div className="mb-16">
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
        
        
        {/* Main features grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* First feature */}
          <div className="cosmic-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Riešenie vášho problému bez mesačných poplatkov
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Vytvoríme vám internú webaplikáciu na správu vášho digitalizovaného obsahu. Môžete si tak bez ďalších poplatkov navyše realizovať automatizovaný prepis podľa vašich procesov.
            </p>
          </div>

          {/* Second feature */}
          <div className="cosmic-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Palette className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Nový vzhľad výstupných dát
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Navrhneme vám nový vzhľad z prepísaných firemných dokumentov bez nutnosti grafického spracovania interným alebo externým grafikom.
            </p>
            
            <div className="grid grid-cols-1 gap-2 text-left">
              {[
                'Generovanie vizitiek',
                'Generovanie nálepiek, štítkov', 
                'Generovanie výročných správ',
                'Generovanie QR kódov',
                'Generovanie cenových ponúk',
                'Generovanie objednávok',
                'Generovanie grafov a tabuliek'
              ].map((item, index) => (
                <div key={index} className="text-sm text-muted-foreground">
                  • {item}
                </div>
              ))}
            </div>
          </div>

          {/* Third feature */}
          <div className="cosmic-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Automatizácia procesov
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Naše riešenie zohľadní aj vaše súčasné aplikácie, s ktorými pracujete. Navrhneme aktívne prepojenie medzi súčasnými aplikáciami a procesmi.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              V prípade, ak nemáte žiadnu automatizáciu procesov vo firme, navrhneme vám riešenie na mieru.
            </p>
          </div>
        </div>

          <div className="space-y-16">
          <div className="cosmic-card rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Príklad riešenia
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image carousel */}
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                  <img 
                    src={examples[currentExample].image}
                    alt={examples[currentExample].title}
                    className="w-full h-full object-cover"
                  />
                  
                  <button 
                    onClick={prevExample}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background/90 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  
                  <button 
                    onClick={nextExample}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background/90 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </div>
                
                <div className="flex justify-center gap-2 mt-4">
                  {examples.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentExample(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentExample ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Case study text */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Problém:</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Klient ručne prepisoval hodnoty z jedného PDF formulára do druhého.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Napriek tomu, že sme už pred rokmi vytvorili editovateľný PDF formulár s dizajnom na mieru, ručné kopírovanie z iných dokumentov bolo zdĺhavé, chybové a frustrujúce.
                  </p>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-muted-foreground">AI zatiaľ nebola spoľahlivá – vždy tam bola nejaká chybička.</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">Preto sme išli cestou webovej aplikácie na mieru.</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Riešenie:</h4>
                  <div className="space-y-2">
                    {[
                      'čítanie údajov priamo z PDF súboru',
                      'uloženie do databázy', 
                      'automatické predvyplnenie nového formulára',
                      'export do PDF s dizajnom a brandingom klienta'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-primary" />
                    <h4 className="text-lg font-semibold text-foreground">Čo z toho má klient:</h4>
                  </div>
                  <div className="space-y-2">
                    {[
                      'ušetrených desiatky hodín mesačne',
                      'výrazne nižšia chybovosť',
                      'zamestnanci sa môžu sústrediť na dôležitejšie úlohy'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSolutionSection;