import React from 'react';
import { User, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TargetAudienceSection = () => {
  const { t } = useLanguage();
  return (
    <section id="pre-koho" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-16">
          {t('audience.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Jednotlivci */}
          <div className="cosmic-card rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {t('audience.individuals.title')}
              </h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {t('audience.individuals.description1')}
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              {t('audience.individuals.description2')}
            </p>
          </div>
          
          {/* Firmy */}
          <div className="cosmic-card rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {t('audience.companies.title')}
              </h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {t('audience.companies.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;