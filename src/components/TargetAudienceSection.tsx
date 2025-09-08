import React from 'react';
import { User, Building2 } from 'lucide-react';

const TargetAudienceSection = () => {
  return (
    <section id="pre-koho" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-16">
          Pre koho je naša služba určená
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Jednotlivci */}
          <div className="cosmic-card rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Prepis textu a dokumentov pre jednotlivcov
              </h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Realizujeme prepis textov dodaných osobne alebo elektronicky. Ceny účtujeme za stranu. Prepis je možné realizovať z rôznych jazykov do digitálnej podoby. Je možné spraviť aj ručnú kontrolu prepísaného textu podľa dodaných podkladov.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Digitalizovaný obsah vo vopred dohodnutých súboroch, ako napríklad: Word, Excel, PDF, CSV, XML, AI, INDD, EPS, HTML
            </p>
          </div>
          
          {/* Firmy */}
          <div className="cosmic-card rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Prepis textu a dokumentov pre firmy a organizácie
              </h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Realizujeme prepis textov pre firmy a organizácie s možnosťou automatizácie a navrhnutia softvérového riešenia na mieru. Podklady sú dodané osobne alebo elektronicky. Pri väčšom a pravidelnom množstve je potrebné navrhnúť automatizované riešenie na mieru.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;