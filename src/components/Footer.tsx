import React from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Kontakt
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="cosmic-card rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Telefón</h3>
              <a href="tel:0905321308" className="text-muted-foreground hover:text-primary transition-colors">
                0905 321 308
              </a>
            </div>
            
            <div className="cosmic-card rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <a href="mailto:harangozo@sketch.sk" className="text-muted-foreground hover:text-primary transition-colors">
                harangozo@sketch.sk
              </a>
            </div>
            
            <div className="cosmic-card rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                <ExternalLink className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Web stránka</h3>
              <a 
                href="https://www.spravawebstranok.sk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                spravawebstranok.sk
              </a>
            </div>
          </div>
          
          <div className="pt-8">
            <a 
              href="https://www.linkedin.com/in/franti%C5%A1ek-harangozo-38302861/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              LinkedIn profil
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 prepisdokumentov.sk - František Harangózo. Všetky práva vyhradené.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;