import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, Target, Shield, Palette, Zap } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
import { useLanguage } from '@/contexts/LanguageContext';
import SoftwareSolutionMobile from './SoftwareSolutionMobile';
import solutionNoMonthly from '@/assets/solution-nomonthly.jpg';
import solutionDesign from '@/assets/solution-design.jpg';
import solutionAutomation from '@/assets/solution-automation.jpg';
import example1 from '@/assets/example-1.jpg';
import example2 from '@/assets/example-2.jpg';
import example3 from '@/assets/example-3.jpg';

const SoftwareSolutionSection = () => {
  const [currentExample, setCurrentExample] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
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
  
  const examples = [
    {
      image: example1,
      title: "Automatizácia PDF formulárov a certifikátov"
    },
    {
      image: example2,
      title: "Webová aplikácia pre správu výsledkov testov"
    },
    {
      image: example3,
      title: "Systém na správu atestov a dokumentácie"
    }
  ];

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
  };

  const prevExample = () => {
    setCurrentExample((prev) => (prev - 1 + examples.length) % examples.length);
  };

  useEffect(() => {
    if (!carouselApi) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate how much of the section is visible
      const visibleTop = Math.max(0, -rect.top);
      const visibleBottom = Math.min(sectionHeight, windowHeight - rect.top);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      
      // Only proceed if section is significantly visible
      if (visibleHeight < windowHeight * 0.3) return;
      
      // Calculate scroll progress through the section (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, (-rect.top + windowHeight * 0.5) / (sectionHeight - windowHeight * 0.5)));
      
      // Determine which slide should be active based on scroll progress
      const totalSlides = solutionFeatures.length;
      const targetSlide = Math.floor(scrollProgress * totalSlides);
      const clampedSlide = Math.min(targetSlide, totalSlides - 1);
      
      if (clampedSlide !== currentSlide) {
        setCurrentSlide(clampedSlide);
        carouselApi.scrollTo(clampedSlide);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [carouselApi, currentSlide, solutionFeatures.length]);

  return (
    <section ref={sectionRef} id="softverove-riesenie" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-16">
          {t('solution.title')}
        </h2>
        
        {/* Desktop carousel */}
        <div className="hidden md:block relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 mb-16 overflow-hidden">
          <Carousel 
            setApi={setCarouselApi}
            opts={{
              align: "center",
              loop: false,
              watchDrag: false,
            }}
            className="w-full"
          >
            <CarouselContent className="flex items-center">
              {solutionFeatures.map((feature, index) => (
                <CarouselItem key={index} className="basis-full md:basis-4/5 lg:basis-3/4">
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mx-4 transition-all duration-500 hover:from-gray-700/60 hover:to-gray-800/60 border border-gray-700/30">
                    <div className="flex flex-col lg:flex-row items-center gap-8 min-h-[400px]">
                      <div className="lg:w-1/3">
                        <img 
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-64 object-cover rounded-xl shadow-2xl border border-gray-600/30"
                        />
                      </div>
                      <div className="lg:w-2/3 text-center lg:text-left">
                        <h3 className="text-2xl font-semibold text-white mb-4 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg mb-6">
                          {feature.description}
                        </p>
                        
                        {feature.features && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-6">
                            {feature.features.map((item, idx) => (
                              <div key={idx} className="text-sm text-gray-400 flex items-center group">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-110 transition-transform"></div>
                                <span className="group-hover:text-gray-300 transition-colors">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {feature.additionalText && (
                          <p className="text-gray-300 leading-relaxed text-lg">
                            {feature.additionalText}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/30 hover:scale-110 transition-all duration-200" />
            <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/30 hover:scale-110 transition-all duration-200" />
          </Carousel>
          
          {/* Auto-scroll indicator dots */}
          <div className="flex justify-center gap-2 mt-6">
            {solutionFeatures.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary scale-125' : 'bg-gray-600 opacity-50'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6 mb-16 mx-[-1.5rem] sm:mx-0 sm:rounded-3xl">
          <SoftwareSolutionMobile />
        </div>

        <div className="space-y-16">
          {/* Example case study */}
          <div className="cosmic-card rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              {t('solution.example.title')}
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image carousel */}
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                  <img 
                    src={examples[currentExample].image}
                    alt={examples[currentExample].title}
                    className="w-full h-full object-cover"
                  />
                  
                  <button 
                    onClick={prevExample}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background/90 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  
                  <button 
                    onClick={nextExample}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background/90 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </div>
                
                <div className="flex justify-center gap-2 mt-4">
                  {examples.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentExample(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentExample ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Case study text */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{t('solution.example.problem')}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {t('solution.example.description1')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {t('solution.example.description2')}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-muted-foreground">{t('solution.example.aiIssue')}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">{t('solution.example.webSolution')}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{t('solution.example.solution')}</h4>
                  <div className="space-y-2">
                    {[
                      t('solution.steps.1'),
                      t('solution.steps.2'), 
                      t('solution.steps.3'),
                      t('solution.steps.4')
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-primary" />
                    <h4 className="text-lg font-semibold text-foreground">{t('solution.example.benefits')}</h4>
                  </div>
                  <div className="space-y-2">
                    {[
                      t('solution.benefits.1'),
                      t('solution.benefits.2'),
                      t('solution.benefits.3')
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSolutionSection;