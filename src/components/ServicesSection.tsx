import React from 'react';
import { FileText, Camera, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  return (
    <section id="sluzby" className="py-20 px-6 relative overflow-hidden bg-black">
      {/* Header Section */}
      <div className="relative z-10 max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-dashed border-blue-500/30 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-blue-300 font-medium">Miesto pre vašu fotografiu</p>
                <p className="text-blue-400/70 text-sm mt-2">Odporúčaná veľkosť: 400x600px</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-400 uppercase tracking-wide font-medium text-sm">O NÁS</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                DIGITALIZAČNÉ &<br />
                <span className="text-blue-400">AI SLUŽBY</span>
              </h2>
            </div>
            
            <p className="text-blue-100 leading-relaxed text-lg">
              Špecializujeme sa na moderné riešenia digitalizácie dát pomocou umelej inteligencie. 
              Transformujeme vaše dokumenty, fotografie a audio záznamy do digitálnej podoby 
              s vysokou presnosťou a efektivitou.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-0">
          {/* Service 1 */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-left min-h-80">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Prepisovanie textov a dokumentov
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Na prepisovanie textov využívame kombináciu AI modelov a špecializovaných OCR knižníc. Vďaka tomu vieme efektívne spracovať text aj pri horšej kvalite dokumentov alebo obrázkov. Po načítaní obsahu do databázy získate prístup k obsahu, s ktorým budete môcť ďalej pracovať, filtrovať ho a triediť.
            </p>
            
            <h4 className="text-lg font-semibold text-white mb-3">
              Prepisovanie textov z naskenovaných dokumentov:
            </h4>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              Dodáte nám naskenované dokumenty na USB alebo zabezpečenom cloude. Sken je potrebné realizovať v dostatočnom rozlíšení. Požiadavku vyriešime jednorazovo alebo vám navrhneme spôsob, ako celý tento proces automatizovať.
            </p>
            
            <h4 className="text-lg font-semibold text-white mb-3">
              Prepisovanie textov a dokumentov v PDF:
            </h4>
            <p className="text-blue-100 text-sm leading-relaxed">
              V prípade PDF dokumentov je prepis spoľahlivejší, ak je obsah v PDF súbore skopírovateľný. Môže ísť o formuláre, testy, správy, faktúry, doklady, bločky, objednávky či kalkulácie.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-left min-h-80">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
              <Camera className="w-8 h-8 text-blue-700" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Prepisovanie textov z fotiek a obrázkov
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Potrebujete prepísať z fotky texty alebo z obrázku vybrať údaje o produkte? Texty môžeme prepísať a predmety na obrázku rozpoznať a roztriediť. Dôležité je, aby bola čitateľnosť dostupná aj voľným okom.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gradient-to-br from-blue-800 to-slate-900 p-8 text-left min-h-80">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
              <Mic className="w-8 h-8 text-blue-800" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Prepisovanie audio a video nahrávok
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Používame AI nástroje na rozpoznávanie reči (ASR – Automatic Speech Recognition). Nahrali ste si konzultáciu, školenie, workshop na svoj telefón, kameru alebo diktafón? Prepíšeme vám tento záznam do formy textu a roztriedime ho na základe kľúčových slov do kategórií. Ukážeme vám, ako z rozhovoru vybrať dôležité informácie a pracovať s nimi ďalej.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;