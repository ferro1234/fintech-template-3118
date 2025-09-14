import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import solutionNoMonthly from '@/assets/solution-nomonthly.jpg';
import solutionDesign from '@/assets/solution-design.jpg';
import solutionAutomation from '@/assets/solution-automation.jpg';

const SoftwareSolutionMobile = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([0]);
  const { t } = useLanguage();

  const solutionFeatures = [
    {
      image: solutionNoMonthly,
      title: t('solution.feature1.title'),
      description: t('solution.feature1.description')
    },
    {
      image: solutionDesign,
      title: t('solution.feature2.title'),
      description: t('solution.feature2.description'),
      features: [
        t('solution.features.1'),
        t('solution.features.2'),
        t('solution.features.3'),
        t('solution.features.4'),
        t('solution.features.5'),
        t('solution.features.6'),
        t('solution.features.7')
      ]
    },
    {
      image: solutionAutomation,
      title: t('solution.feature3.title'),
      description: t('solution.feature3.description'),
      additionalText: t('solution.feature3.additional')
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
              <h3 className="text-lg font-semibold text-white leading-tight mb-3 w-full break-words text-center px-4 whitespace-pre-line max-w-[280px] mx-auto">
                {feature.title}
              </h3>
              <div className="flex items-center justify-center gap-2 text-base text-gray-400">
                <span className="text-blue-400 font-medium animate-pulse text-lg">{isExpanded ? t('solution.mobile.showLess') : t('solution.mobile.showMore')}</span>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-blue-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-400" />
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