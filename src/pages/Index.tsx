
import React from 'react';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import ServiceDetailSections from '@/components/ServiceDetailSections';
import LoadingSpinner from '@/components/LoadingSpinner';

// Import components normally to avoid dynamic import issues
import TargetAudienceSection from '@/components/TargetAudienceSection';
import OutputFormatSection from '@/components/OutputFormatSection';
import SoftwareSolutionSection from '@/components/SoftwareSolutionSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <ServicesSection />
        <ServiceDetailSections />
        
        <TargetAudienceSection />
        <OutputFormatSection />
        <SoftwareSolutionSection />
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
