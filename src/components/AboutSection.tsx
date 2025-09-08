import React from 'react';

const AboutSection = () => {
  return (
    <section id="o-nas" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="cosmic-card rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">O nás</h2>
              <p className="text-muted-foreground leading-relaxed">
                Volám sa František Harangózo a zaoberám sa automatizáciou a digitalizáciou obsahu pre firmy alebo jednotlivcov. V spolupráci s programátormi vám prinášam riešenia v podobe automatizácie a webovej prezentácie. Moje osobné skúsenosti vychádzajú so 16 ročnej praxe pri tvorbe web stránok a web aplikácii. Viac informácii o mňe nájdete na{' '}
                <a href="https://www.spravawebstranok.sk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  spravawebstranok.sk
                </a>{' '}
                alebo na mojom osobnom{' '}
                <a href="https://www.linkedin.com/in/franti%C5%A1ek-harangozo-38302861/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  linkedin profile
                </a>.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-3xl bg-muted flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-foreground/10 flex items-center justify-center">
                  <span className="text-4xl text-foreground">FH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;