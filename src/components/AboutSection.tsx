import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section id="o-nas" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="cosmic-card rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">{t('about.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.description')}{' '}
                 <a href="https://www.spravawebstranok.sk" target="_blank" rel="noopener noreferrer" aria-label="Návštíviť webstránku Správa Webstránok" className="text-blue-600 underline decoration-2 underline-offset-2 hover:text-blue-500 font-medium transition-colors">
                   {t('about.link1')}
                </a>{' '}
                {t('about.linkText')}{' '}
                 <a href="https://www.linkedin.com/in/franti%C5%A1ek-harangozo-38302861/" target="_blank" rel="noopener noreferrer" aria-label="František Harangózo LinkedIn profil" className="text-blue-600 underline decoration-2 underline-offset-2 hover:text-blue-500 font-medium transition-colors">
                   {t('about.link2')}
                </a>.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-3xl overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="František Harangózo" 
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;