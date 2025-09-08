import React from 'react';
import { FileText, Table, File, Code, Image, Database } from 'lucide-react';

const OutputFormatSection = () => {
  const formats = [
    { icon: FileText, label: 'Word' },
    { icon: Table, label: 'Excel' },
    { icon: File, label: 'PDF' },
    { icon: Code, label: 'CSV' },
    { icon: Code, label: 'XML' },
    { icon: Image, label: 'AI' },
    { icon: File, label: 'INDD' },
    { icon: File, label: 'EPS' },
    { icon: Code, label: 'HTML' }
  ];

  return (
    <section id="vystupny-format" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-16">
          Výstupný formát
        </h2>
        
        <div className="space-y-12">
          {/* File formats */}
          <div className="cosmic-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              V samostatných súboroch:
            </h3>
            
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
              {formats.map((format, index) => (
                <div key={index} className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center">
                    <format.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {format.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* API solution */}
          <div className="cosmic-card rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                API, XML riešenie
              </h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Vytvoríme vám zabezpečený export dát do vašej aplikácii. Tiež vieme zabezpečiť import dát do našej databázy pre doplnenie údajov.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutputFormatSection;