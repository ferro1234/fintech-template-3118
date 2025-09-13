import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, Target, Shield, Palette, Zap } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import solutionNoMonthly from '@/assets/solution-nomonthly.jpg';
import solutionDesign from '@/assets/solution-design.jpg';
import solutionAutomation from '@/assets/solution-automation.jpg';

const SoftwareSolutionSection = () => {
  const [currentExample, setCurrentExample] = useState(0);
  
  const solutionFeatures = [
    {
      image: solutionNoMonthly,
      title: "Riešenie vášho problému bez mesačných poplatkov",
      description: "Vytvoríme vám internú webaplikáciu na správu vášho digitalizovaného obsahu. Môžete si tak bez ďalších poplatkov navyše realizovať automatizovaný prepis podľa vašich procesov."
    },
    {
      image: solutionDesign,
      title: "Nový vzhľad výstupných dát",
      description: "Navrhneme vám nový vzhľad z prepísaných firemných dokumentov bez nutnosti grafického spracovania interným alebo externým grafikom.",
      features: [
        'Generovanie vizitiek',
        'Generovanie nálepiek, štítkov', 
        'Generovanie výročných správ',
        'Generovanie QR kódov',
        'Generovanie cenových ponúk',
        'Generovanie objednávok',
        'Generovanie grafov a tabuliek'
      ]
    },
    {
      image: solutionAutomation,
      title: "Automatizácia procesov",
      description: "Naše riešenie zohľadní aj vaše súčasné aplikácie, s ktorými pracujete. Navrhneme aktívne prepojenie medzi súčasnými aplikáciami a procesmi.",
      additionalText: "V prípade, ak nemáte žiadnu automatizáciu procesov vo firme, navrhneme vám riešenie na mieru."
    }
  ];
  
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
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-16">
          Softvérové riešenie na mieru
        </h2>
        
        {/* Main features carousel */}
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 mb-16 overflow-hidden">
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="flex items-center">
              {solutionFeatures.map((feature, index) => (
                <CarouselItem key={index} className="basis-full md:basis-4/5 lg:basis-3/4">
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mx-4 transition-all duration-500 hover:from-gray-700/60 hover:to-gray-800/60 border border-gray-700/30">
                    <div className="flex flex-col lg:flex-row items-center gap-8 min-h-[400px]">
                      <div className="lg:w-1/3">
                        <img 
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-64 object-cover rounded-xl shadow-2xl border border-gray-600/30"
                        />
                      </div>
                      <div className="lg:w-2/3 text-center lg:text-left">
                        <h3 className="text-2xl font-semibold text-white mb-4 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg mb-6">
                          {feature.description}
                        </p>
                        
                        {feature.features && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-6">
                            {feature.features.map((item, idx) => (
                              <div key={idx} className="text-sm text-gray-400 flex items-center group">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-110 transition-transform"></div>
                                <span className="group-hover:text-gray-300 transition-colors">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {feature.additionalText && (
                          <p className="text-gray-300 leading-relaxed text-lg">
                            {feature.additionalText}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/30 hover:scale-110 transition-all duration-200" />
            <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/30 hover:scale-110 transition-all duration-200" />
          </Carousel>
          
          {/* Auto-scroll indicator dots */}
          <div className="flex justify-center gap-2 mt-6">
            {solutionFeatures.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-gray-600 opacity-50"></div>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {/* Example case study */}
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