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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            <span className="text-blue-400">PREPISOVANIE TEXTOV</span><br />
            <span className="text-white">z dokumentov a obrazkov</span>
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
              
              <h1 className="text-5xl font-bold leading-tight mb-6">
                <span className="text-blue-400">PREPISOVANIE TEXTOV</span><br />
                <span className="text-white">z dokumentov a obrazkov</span>
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
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="group backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-80" style={{background: 'linear-gradient(135deg, #3756ad, #2563eb)'}}>
            <div className="flex items-center gap-4 mb-6">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <FileText strokeWidth={1.5} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white leading-tight">
                Prepisovanie textov a dokumentov
              </h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              Digitalizujeme naskenované dokumenty a PDF súbory pomocou pokročilých AI modelov a OCR technológií pre vysokú presnosť prepisu.
            </p>
            
            <Button 
              onClick={() => scrollToSection('dokumenty')} 
              className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 group-hover:bg-white/25"
              variant="outline"
            >
              Zistiť viac
            </Button>
          </div>

          {/* Service 2 */}
          <div className="group backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-80" style={{background: 'linear-gradient(135deg, #3756ad, #2563eb)'}}>
            <div className="flex items-center gap-4 mb-6">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Camera strokeWidth={1.5} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white leading-tight">
                Prepisovanie textov z fotiek a obrázkov
              </h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              Rozpoznávame a prepísame texty z fotografií dokumentov, vizitkiek, štítkov a ďalších objektov s pokročilými algoritmami na zlepšenie kvality obrazu.
            </p>
            
            <Button 
              onClick={() => scrollToSection('fotky')} 
              className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 group-hover:bg-white/25"
              variant="outline"
            >
              Zistiť viac
            </Button>
          </div>

          {/* Service 3 */}
          <div className="group backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-80" style={{background: 'linear-gradient(135deg, #3756ad, #2563eb)'}}>
            <div className="flex items-center gap-4 mb-6">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Mic strokeWidth={1.5} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white leading-tight">
                Prepisovanie audio a video nahrávok
              </h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              Používame AI nástroje pre automatické rozpoznávanie reči. Prepíseme vaše nahrávky do textovej podoby a roztriedime podľa kľúčových slov.
            </p>
            
            <Button 
              onClick={() => scrollToSection('audio-video')} 
              className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 group-hover:bg-white/25"
              variant="outline"
            >
              Zistiť viac
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;