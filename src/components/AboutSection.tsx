import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

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
                <a href="https://www.spravawebstranok.sk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {t('about.link1')}
                </a>{' '}
                {t('about.linkText')}{' '}
                <a href="https://www.linkedin.com/in/franti%C5%A1ek-harangozo-38302861/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {t('about.link2')}
                </a>.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-3xl overflow-hidden">
                <img 
                  src="/src/assets/profile-photo.jpg" 
                  alt="František Harangózo" 
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