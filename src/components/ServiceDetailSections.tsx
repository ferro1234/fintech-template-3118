import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LazyImage from '@/components/LazyImage';
import serviceDocuments from '@/assets/service-documents.jpg';
import servicePhotos from '@/assets/service-photos.jpg';
import serviceAudio from '@/assets/service-audio.jpg';
import audioTranscription from '@/assets/audio-transcription.jpg';

const ServiceDetailSections = () => {
  const { t } = useLanguage();
  return (
    <>
      {/* Service 1 - Documents */}
      <section id="dokumenty" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('detail.documents.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('detail.documents.description')}
              </p>
              
              <h4 className="text-xl font-semibold text-foreground mt-6">
                {t('detail.documents.scanned.title')}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {t('detail.documents.scanned.description')}
              </p>
              
              <h4 className="text-xl font-semibold text-foreground mt-6">
                {t('detail.documents.pdf.title')}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {t('detail.documents.pdf.description')}
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full max-w-lg space-y-4">
                <div className="cosmic-glow relative rounded-3xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                   <LazyImage 
                     src="/lovable-uploads/701323ab-fb0e-4e72-b4e9-996050083520.png"
                     alt="PDF, obrazok, audio, video"
                     className="w-full h-96 object-contain"
                   />
                </div>
                <p className="text-lg md:text-xl text-muted-foreground text-center">
                  {t('detail.documents.imageCaption')}
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
                   <LazyImage 
                     src="/lovable-uploads/35295c25-6566-4eed-b87a-b03b03cb6ec2.png"
                     alt="Digitalizujeme dokumenty do novej podoby"
                     className="w-full h-96 object-contain"
                   />
                </div>
                 <p className="text-lg md:text-xl text-muted-foreground text-center">
                   {t('detail.photos.imageCaption')}
                 </p>
              </div>
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('detail.photos.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('detail.photos.description1')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('detail.photos.description2')}
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
                {t('detail.audio.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('detail.audio.description1')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('detail.audio.description2')}
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full max-w-lg space-y-4">
                <div className="cosmic-glow relative rounded-3xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                   <img 
                     src={audioTranscription}
                     alt="Zvyšujeme efektivitu práce"
                     className="w-full h-96 object-contain"
                     loading="lazy"
                   />
                </div>
                 <p className="text-lg md:text-xl text-muted-foreground text-center">
                   {t('detail.audio.imageCaption')}
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