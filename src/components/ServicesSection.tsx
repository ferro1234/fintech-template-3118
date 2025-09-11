import React from 'react';
import { FileText, Camera, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  return (
    <section id="sluzby" className="py-20 px-6 relative overflow-hidden bg-black">
      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
          {/* Photo placeholder */}
          <div className="order-2 lg:order-1">
            <div className="w-full h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-dashed border-blue-500/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-blue-300 font-medium">Miesto pre vašu fotografiu</p>
                <p className="text-blue-400/70 text-sm mt-2">Odporúčaná veľkosť: 400x500px</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
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
            
            <Button variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8">
              VIAC INFORMÁCIÍ
            </Button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-0">
          {/* Service 1 */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-center min-h-80 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                DOKUMENTY
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Prepisovanie textov z naskenovaných dokumentov a PDF súborov pomocou 
                kombinácie AI modelov a špecializovaných OCR knižníc pre maximálnu presnosť.
              </p>
            </div>
            <Button variant="outline" className="bg-white text-blue-600 border-white hover:bg-blue-50 font-semibold">
              VIAC
            </Button>
          </div>

          {/* Service 2 */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-center min-h-80 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                FOTOGRAFIE
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Extrakcia textov z fotografií a obrázkov s rozpoznávaním objektov. 
                Spracovanie aj menej kvalitných snímok s automatickým triedením obsahu.
              </p>
            </div>
            <Button variant="outline" className="bg-white text-blue-700 border-white hover:bg-blue-50 font-semibold">
              VIAC
            </Button>
          </div>

          {/* Service 3 */}
          <div className="bg-gradient-to-br from-blue-800 to-slate-900 p-8 text-center min-h-80 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Mic className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                AUDIO & VIDEO
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Automatické rozpoznávanie reči (ASR) pre prepis audio a video nahrávok. 
                Kategorizácia obsahu podľa kľúčových slov s možnosťou ďalšieho spracovania.
              </p>
            </div>
            <Button variant="outline" className="bg-white text-blue-800 border-white hover:bg-blue-50 font-semibold">
              VIAC
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;