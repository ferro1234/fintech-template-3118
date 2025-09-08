import React from 'react';
import { FileText, Camera, Mic } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="sluzby" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-16">
          Naše služby
        </h2>
        
        <div className="space-y-16">
          {/* Main service */}
          <div className="cosmic-card rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Prepisovanie textov a dokumentov
              </h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Na prepisovanie textov využívame kombináciu AI modelov a špecializovaných OCR knižníc. Vďaka tomu vieme efektívne spracovať text aj pri horšej kvalite dokumentov alebo obrázkov. Po načítaní obsahu do databázy získate prístup k obsahu, s ktorým budete môcť ďalej pracovať, filtrovať ho a triediť.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  Prepisovanie textov z naskenovaných dokumentov
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Dodáte nám naskenované dokumenty na USB alebo zabezpečenom cloude. Sken je potrebné realizovať v dostatočnom rozlíšení. Požiadavku vyriešime jednorazovo alebo vám navrhneme spôsob, ako celý tento proces automatizovať.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  Prepisovanie textov a dokumentov v PDF
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  V prípade PDF dokumentov je prepis spoľahlivejší, ak je obsah v PDF súbore skopírovateľný. Môže ísť o formuláre, testy, správy, faktúry, doklady, bločky, objednávky či kalkulácie.
                </p>
              </div>
            </div>
          </div>
          
          {/* Service cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="cosmic-card rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Prepisovanie textov z fotiek a obrázkov
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Potrebujete prepísať z fotky texty alebo z obrázku vybrať údaje o produkte? Texty môžeme prepísať a predmety na obrázku rozpoznať a roztriediť. Dôležité je, aby bola čitateľnosť dostupná aj voľným okom.
              </p>
            </div>
            
            <div className="cosmic-card rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mic className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Prepisovanie audio a video nahrávok
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Používame AI nástroje na rozpoznávanie reči (ASR – Automatic Speech Recognition). Nahrali ste si konzultáciu, školenie, workshop na svoj telefón, kameru alebo diktafón? Prepíšeme vám tento záznam do formy textu a roztriedime ho na základe kľúčových slov do kategórií. Ukážeme vám, ako z rozhovoru vybrať dôležité informácie a pracovať s nimi ďalej.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;