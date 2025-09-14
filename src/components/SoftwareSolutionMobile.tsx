import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import solutionNoMonthly from '@/assets/solution-nomonthly.jpg';
import solutionDesign from '@/assets/solution-design.jpg';
import solutionAutomation from '@/assets/solution-automation.jpg';

const SoftwareSolutionMobile = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([0]);

  const solutionFeatures = [
    {
      image: solutionNoMonthly,
      title: "Riešenie vášho problému bez mesačných poplatkov",
      description: "Vytvoríme vám internú webaplikáciu na správu vášho digitalizovaného obsahu. Môžete si tak bez ďalších poplatkov navyše realizovať automatizovaný prepis podľa vašich procesov."
    },
    {
      image: solutionDesign,
      title: "Nový vzhľad výstupných dát",
      description: "Navrhneme vám nový vzhľad z prepísaných firemných dokumentov bez nutnosti grafického spracovania interným alebo externým grafikom.",
      features: [
        'Generovanie vizitiek',
        'Generovanie nálepiek, štítkov', 
        'Generovanie výročných správ',
        'Generovanie QR kódov',
        'Generovanie cenových ponúk',
        'Generovanie objednávok',
        'Generovanie grafov a tabuliek'
      ]
    },
    {
      image: solutionAutomation,
      title: "Automatizácia procesov",
      description: "Naše riešenie zohľadní aj vaše súčasné aplikácie, s ktorými pracujete. Navrhneme aktívne prepojenie medzi súčasnými aplikáciami a procesmi.",
      additionalText: "V prípade, ak nemáte žiadnu automatizáciu procesov vo firme, navrhneme vám riešenie na mieru."
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? []
        : [index]
    );
  };

  return (
    <div className="md:hidden space-y-4">
      {solutionFeatures.map((feature, index) => {
        const isExpanded = expandedItems.includes(index);
        
        return (
          <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30">
            {/* Header - Always visible */}
            <Button
              variant="ghost"
              className="w-full p-6 h-auto flex flex-col items-center text-center hover:bg-gray-700/30 bg-gray-800/40 min-h-[80px]"
              onClick={() => toggleExpanded(index)}
            >
              <h3 className="text-lg font-semibold text-white leading-tight mb-3 w-full break-words text-center px-4 hyphens-auto">
                {feature.title}
              </h3>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <span>{isExpanded ? 'Skryť' : 'Ukáž viac'}</span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </div>
            </Button>

            {/* Expandable content */}
            {isExpanded && (
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {feature.features && (
                    <div className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="text-sm text-gray-400 flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {feature.additionalText && (
                    <p className="text-gray-300 leading-relaxed">
                      {feature.additionalText}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SoftwareSolutionMobile;