import React from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer id="kontakt" className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            {t('footer.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {/* Mobile: Inline layout, Desktop: Original card layout */}
            <div className="cosmic-card rounded-2xl p-4 md:p-6 md:space-y-4">
              <div className="flex items-center gap-3 md:flex-col md:gap-0">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center md:mx-auto">
                  <Phone className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="md:text-center md:space-y-2">
                  <h3 className="font-semibold text-foreground md:mt-4">{t('footer.phone')}</h3>
                  <a href="tel:0905321308" className="text-muted-foreground hover:text-primary transition-colors block">
                    0905 321 308
                  </a>
                </div>
              </div>
            </div>
            
            <div className="cosmic-card rounded-2xl p-4 md:p-6 md:space-y-4">
              <div className="flex items-center gap-3 md:flex-col md:gap-0">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center md:mx-auto">
                  <Mail className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="md:text-center md:space-y-2">
                  <h3 className="font-semibold text-foreground md:mt-4">{t('footer.email')}</h3>
                  <a href="mailto:harangozo@sketch.sk" className="text-muted-foreground hover:text-primary transition-colors block">
                    harangozo@sketch.sk
                  </a>
                </div>
              </div>
            </div>
            
            <div className="cosmic-card rounded-2xl p-4 md:p-6 md:space-y-4">
              <div className="flex items-center gap-3 md:flex-col md:gap-0">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center md:mx-auto">
                  <ExternalLink className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="md:text-center md:space-y-2">
                  <h3 className="font-semibold text-foreground md:mt-4">{t('footer.website')}</h3>
                  <a 
                    href="https://www.spravawebstranok.sk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors block underline decoration-2 underline-offset-2 font-medium"
                  >
                    spravawebstranok.sk
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8">
            <a 
              href="https://www.linkedin.com/in/franti%C5%A1ek-harangozo-38302861/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors underline decoration-2 underline-offset-2 font-medium"
            >
              {t('footer.linkedin')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;