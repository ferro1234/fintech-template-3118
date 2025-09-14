import React from 'react';
import serviceDocuments from '@/assets/service-documents.jpg';
import servicePhotos from '@/assets/service-photos.jpg';
import serviceAudio from '@/assets/service-audio.jpg';

const ServiceDetailSections = () => {
  return (
    <>
      {/* Service 1 - Documents */}
      <section id="dokumenty" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Prepisovanie textov a dokumentov
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Na prepisovanie textov využívame kombináciu AI modelov a špecializovaných OCR knižníc. Vďaka tomu vieme efektívne spracovať text aj pri horšej kvalite dokumentov alebo obrázkov. Po načítaní obsahu do databázy získate prístup k obsahu, s ktorým budete môcť ďalej pracovať, filtrovať ho a triediť.
              </p>
              
              <h4 className="text-xl font-semibold text-foreground mt-6">
                Prepisovanie textov z naskenovaných dokumentov:
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Dodáte nám naskenované dokumenty na USB alebo zabezpečenom cloude. Sken je potrebné realizovať v dostatočnom rozlíšení. Požiadavku vyriešime jednorazovo alebo vám navrhneme spôsob, ako celý tento proces automatizovať.
              </p>
              
              <h4 className="text-xl font-semibold text-foreground mt-6">
                Prepisovanie textov a dokumentov v PDF:
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                V prípade PDF dokumentov je prepis spoľahlivejší, ak je obsah v PDF súbore skopírovateľný. Môže ísť o formuláre, testy, správy, faktúry, doklady, bločky, objednávky či kalkulácie.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full max-w-lg space-y-4">
                <div className="cosmic-glow relative rounded-3xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                  <img 
                    src="/lovable-uploads/701323ab-fb0e-4e72-b4e9-996050083520.png"
                    alt="PDF, obrazok, audio, video"
                    className="w-full h-60 object-contain"
                  />
                </div>
                <p className="text-lg md:text-xl text-muted-foreground text-center">
                  pdf, obrazok, audio, video
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 - Photos */}
      <section id="fotky" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <div className="w-full max-w-lg space-y-4">
                <div className="cosmic-glow relative rounded-3xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                  <img 
                    src="/lovable-uploads/35295c25-6566-4eed-b87a-b03b03cb6ec2.png"
                    alt="Digitalizujeme dokumenty do novej podoby"
                    className="w-full h-60 object-contain"
                  />
                </div>
                <p className="text-lg md:text-xl text-muted-foreground text-center">
                  Digitalizujeme dokumenty do novej podoby
                </p>
              </div>
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Prepisovanie textov z fotiek a obrázkov
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Potrebujete prepísať z fotky texty alebo z obrázku vybrať údaje o produkte? Texty môžeme prepísať a predmety na obrázku rozpoznať a roztriediť. Dôležité je, aby bola čitateľnosť dostupná aj voľným okom.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Naša technológia dokáže rozpoznať text aj z fotografií dokumentov, tableiek, vizitkiek, štítkov na produktoch a ďalších objektov. Využívame pokročilé algoritmy na zlepšenie kvality obrazu a zvýšenie presnosti rozpoznávania textu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 - Audio/Video */}
      <section id="audio-video" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Prepisovanie audio a video nahrávok
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Používame AI nástroje na rozpoznávanie reči (ASR – Automatic Speech Recognition). Nahrali ste si konzultáciu, školenie, workshop na svoj telefón, kameru alebo diktafón? Prepíšeme vám tento záznam do formy textu a roztriedime ho na základe kľúčových slov do kategórií.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ukážeme vám, ako z rozhovoru vybrať dôležité informácie a pracovať s nimi ďalej. Naša technológia podporuje rôzne jazyky a dokáže rozpoznať viacerých rečníkov v jednej nahrávke.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full max-w-lg space-y-4">
                <div className="cosmic-glow relative rounded-3xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                  <img 
                    src="/lovable-uploads/1dbba9c9-5aae-4230-8b7a-4e534bc13e3e.png"
                    alt="Zvyšujeme efektivitu práce"
                    className="w-full h-60 object-contain"
                  />
                </div>
                <p className="text-lg md:text-xl text-muted-foreground text-center">
                  Zvyšujeme efektivitu práce
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailSections;