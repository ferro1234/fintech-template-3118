import React from 'react';
import { FileText, Camera, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import servicesPhoto from '@/assets/services-photo.jpg';
const ServicesSection = () => {
  const { t } = useLanguage();
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
          
           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
             {t('services.title').split(' ').map((word, index) => 
               ['PREPISOVANIE', 'DOKUMENTOV'].includes(word) ? 
                 <span key={index} className="text-blue-400">{word} </span> : 
                 word + ' '
             )}
           </h1>
        </div>
      </div>

      {/* Photo and text layout - only on desktop/tablet */}
      <div className="hidden lg:block relative z-10 max-w-6xl mx-auto mb-0">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Photo - Left column */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <img src={servicesPhoto} alt="Realizátor digitalizačných služieb" className="w-auto h-[500px] object-cover rounded-2xl shadow-2xl" loading="lazy" />
            </div>
          </div>
          
          {/* Text - Right column */}
          <div className="space-y-6 flex flex-col justify-center h-full">
            <div>
              
              <h1 className="text-5xl font-bold text-white leading-tight mb-6">
                {t('services.title').split(' ').map((word, index) => 
                  ['PREPISOVANIE', 'DOKUMENTOV', 'TRANSCRIPTION', 'DOCUMENTS'].includes(word) ? 
                    <span key={index} className="text-blue-400">{word} </span> : 
                    word + ' '
                )}
              </h1>
            </div>
            <p className="text-blue-100 leading-relaxed text-lg">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Photo positioned directly above services - Mobile only */}
      <div className="lg:hidden relative z-10 max-w-6xl mx-auto mb-0">
        <div className="flex justify-center mb-0">
          <div className="w-full max-w-md">
            <img src={servicesPhoto} alt="Realizátor digitalizačných služieb" className="w-auto h-[400px] object-cover rounded-2xl shadow-2xl" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="group rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-80" style={{
          background: 'linear-gradient(to right, #1e3a8a, #3756ad)'
        }}>
            <div className="flex items-center gap-4 mb-6 md:flex-col md:items-center md:text-center lg:flex-row lg:items-center lg:text-left">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <FileText strokeWidth={1.5} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-lg lg:text-xl font-semibold text-white leading-tight">
                {t('services.documents.title')}
              </h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              {t('services.documents.description')}
            </p>
            
            <Button onClick={() => scrollToSection('dokumenty')} className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 group-hover:bg-white/25" variant="outline">
              {t('services.button')}
            </Button>
          </div>

          {/* Service 2 */}
          <div className="group rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-80" style={{
          background: 'linear-gradient(to right, #1e3a8a, #3756ad)'
        }}>
            <div className="flex items-center gap-4 mb-6 md:flex-col md:items-center md:text-center lg:flex-row lg:items-center lg:text-left">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Camera strokeWidth={1.5} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-lg lg:text-xl font-semibold text-white leading-tight">
                {t('services.images.title')}
              </h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              {t('services.images.description')}
            </p>
            
            <Button onClick={() => scrollToSection('fotky')} className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 group-hover:bg-white/25" variant="outline">
              {t('services.button')}
            </Button>
          </div>

          {/* Service 3 */}
          <div className="group rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-80" style={{
          background: 'linear-gradient(to right, #1e3a8a, #3756ad)'
        }}>
            <div className="flex items-center gap-4 mb-6 md:flex-col md:items-center md:text-center lg:flex-row lg:items-center lg:text-left">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Mic strokeWidth={1.5} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-lg lg:text-xl font-semibold text-white leading-tight">
                {t('services.audio.title')}
              </h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              {t('services.audio.description')}
            </p>
            
            <Button onClick={() => scrollToSection('audio-video')} className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 group-hover:bg-white/25" variant="outline">
              {t('services.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;