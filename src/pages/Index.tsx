
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import OutputFormatSection from '@/components/OutputFormatSection';
import SoftwareSolutionSection from '@/components/SoftwareSolutionSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TargetAudienceSection />
        <OutputFormatSection />
        <SoftwareSolutionSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
