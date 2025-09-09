import React from 'react';
import { FileText, Camera, Mic } from 'lucide-react';
import serviceDocuments from '@/assets/service-documents.jpg';
import servicePhotos from '@/assets/service-photos.jpg';
import serviceAudio from '@/assets/service-audio.jpg';

const ServicesSection = () => {
  return (
    <section id="sluzby" className="py-20 px-6 relative overflow-hidden">
      {/* Blue metallic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-blue-400/20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
          linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)
        `
      }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-16">
          Naše služby
        </h2>
        
        <div className="space-y-20">
          {/* Service 1 - Image left, text right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-blue-300/20">
                <img 
                  src={serviceDocuments}
                  alt="Prepisovanie textov a dokumentov"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 backdrop-blur-sm border border-blue-300/30 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Prepisovanie textov a dokumentov
                </h3>
              </div>
              
              <p className="text-blue-100 leading-relaxed text-lg">
                Na prepisovanie textov využívame kombináciu AI modelov a špecializovaných OCR knižníc. Vďaka tomu vieme efektívne spracovať text aj pri horšej kvalite dokumentov alebo obrázkov.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-500/10 backdrop-blur-sm border border-blue-300/20">
                  <h4 className="text-lg font-semibold text-blue-200 mb-2">
                    Prepisovanie z naskenovaných dokumentov
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Dodáte nám naskenované dokumenty na USB alebo zabezpečenom cloude. Sken je potrebné realizovať v dostatočnom rozlíšení.
                  </p>
                </div>
                
                <div className="p-4 rounded-xl bg-blue-500/10 backdrop-blur-sm border border-blue-300/20">
                  <h4 className="text-lg font-semibold text-blue-200 mb-2">
                    Prepisovanie PDF dokumentov
                  </h4>
                  <p className="text-blue-100 text-sm">
                    V prípade PDF dokumentov je prepis spoľahlivejší, ak je obsah v PDF súbore skopírovateľný. Môže ísť o formuláre, testy, správy, faktúry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service 2 - Text left, image right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 backdrop-blur-sm border border-cyan-300/30 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-cyan-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Prepisovanie textov z fotiek a obrázkov
                </h3>
              </div>
              
              <p className="text-blue-100 leading-relaxed text-lg">
                Potrebujete prepísať z fotky texty alebo z obrázku vybrať údaje o produkte? Texty môžeme prepísať a predmety na obrázku rozpoznať a roztriediť.
              </p>
              
              <div className="p-6 rounded-xl bg-cyan-500/10 backdrop-blur-sm border border-cyan-300/20">
                <p className="text-cyan-100 italic">
                  "Dôležité je, aby bola čitateľnosť dostupná aj voľným okom. Naša technológia dokáže spracovať aj menej kvalitné fotografie a extrahovať z nich použiteľné údaje."
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-cyan-300/20">
              <img 
                src={servicePhotos}
                alt="Prepisovanie textov z fotiek a obrázkov"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
          
          {/* Service 3 - Image left, text right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-purple-300/20">
                <img 
                  src={serviceAudio}
                  alt="Prepisovanie audio a video nahrávok"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 backdrop-blur-sm border border-purple-300/30 flex items-center justify-center">
                  <Mic className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Prepisovanie audio a video nahrávok
                </h3>
              </div>
              
              <p className="text-blue-100 leading-relaxed text-lg">
                Používame AI nástroje na rozpoznávanie reči (ASR – Automatic Speech Recognition). Nahrali ste si konzultáciu, školenie, workshop na svoj telefón, kameru alebo diktafón?
              </p>
              
              <div className="p-6 rounded-xl bg-purple-500/10 backdrop-blur-sm border border-purple-300/20">
                <p className="text-purple-100">
                  Prepíšeme vám tento záznam do formy textu a roztriedime ho na základe kľúčových slov do kategórií. Ukážeme vám, ako z rozhovoru vybrať dôležité informácie a pracovať s nimi ďalej.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;