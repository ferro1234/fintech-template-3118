import React from 'react';
import { FileText, Camera, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import servicesPhoto from '@/assets/services-photo.jpg';
const ServicesSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="sluzby" className="py-20 px-6 relative overflow-hidden bg-black">
      {/* Header Section - Text only on desktop/tablet, hidden on mobile */}
      <div className="relative z-10 max-w-6xl mx-auto mb-16 lg:hidden">
        <div className="text-center">
          <p className="text-blue-400 uppercase tracking-wide font-medium text-sm">O NÁS</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            DIGITALIZAČNÉ &<br />
            <span className="text-blue-400">AI SLUŽBY</span>
          </h1>
        </div>
      </div>

      {/* Photo and text layout - only on desktop/tablet */}
      <div className="hidden lg:block relative z-10 max-w-6xl mx-auto mb-0">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Photo - Left column */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <img src={servicesPhoto} alt="Realizátor digitalizačných služieb" className="w-auto h-[500px] object-cover rounded-2xl shadow-2xl" />
            </div>
          </div>
          
          {/* Text - Right column */}
          <div className="space-y-6 flex flex-col justify-center h-full">
            <div>
              
              <h1 className="text-5xl font-bold text-white leading-tight mb-6">
                DIGITALIZAČNÉ &<br />
                <span className="text-blue-400">AI SLUŽBY</span>
              </h1>
            </div>
            <p className="text-blue-100 leading-relaxed text-lg">
              Špecializujeme sa na moderné riešenia digitalizácie dát pomocou umelej inteligencie. 
              Transformujeme vaše dokumenty, fotografie a audio záznamy do digitálnej podoby 
              s vysokou presnosťou a efektivitou.
            </p>
          </div>
        </div>
      </div>

      {/* Photo positioned directly above services - Mobile only */}
      <div className="lg:hidden relative z-10 max-w-6xl mx-auto mb-0">
        <div className="flex justify-center mb-0">
          <div className="w-full max-w-md">
            <img src={servicesPhoto} alt="Realizátor digitalizačných služieb" className="w-auto h-[400px] object-cover rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Service 1 */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-center min-h-80 rounded-2xl">
            <FileText className="w-12 h-12 text-white mx-auto mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white mb-4">
              Prepisovanie textov a dokumentov
            </h3>
            <p className="text-white/90 text-sm mb-6 leading-relaxed">
              Digitalizujeme naskenované dokumenty a PDF súbory pomocou pokročilých AI modelov a OCR technológií pre vysokú presnosť prepisu.
            </p>
            <Button onClick={() => scrollToSection('dokumenty')} className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
              Zistiť viac
            </Button>
          </div>

          {/* Service 2 */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-center min-h-80 rounded-2xl">
            <Camera className="w-12 h-12 text-white mx-auto mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white mb-4">
              Prepisovanie textov z fotiek a obrázkov
            </h3>
            <p className="text-white/90 text-sm mb-6 leading-relaxed">
              Rozpoznávame a prepísame texty z fotografií dokumentov, vizitkiek, štítkov a ďalších objektov s pokročilými algoritmami na zlepšenie kvality obrazu.
            </p>
            <Button onClick={() => scrollToSection('fotky')} className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
              Zistiť viac
            </Button>
          </div>

          {/* Service 3 */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 p-8 text-center min-h-80 rounded-2xl">
            <Mic className="w-12 h-12 text-white mx-auto mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white mb-4">
              Prepisovanie audio a video nahrávok
            </h3>
            <p className="text-white/90 text-sm mb-6 leading-relaxed">
              Používame AI nástroje pre automatické rozpoznávanie reči. Prepíseme vaše nahrávky do textovej podoby a roztriedime podľa kľúčových slov.
            </p>
            <Button onClick={() => scrollToSection('audio-video')} className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
              Zistiť viac
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;