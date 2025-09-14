
import React from 'react';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import ServiceDetailSections from '@/components/ServiceDetailSections';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import OutputFormatSection from '@/components/OutputFormatSection';
import ErrorBoundary from '@/components/ErrorBoundary';

// Direct imports used to avoid lazy-loading issues in preview
import SoftwareSolutionSection from '@/components/SoftwareSolutionSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <ServicesSection />
        <ServiceDetailSections />
        <TargetAudienceSection />
        <OutputFormatSection />
        
        <ErrorBoundary>
          <SoftwareSolutionSection />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <AboutSection />
        </ErrorBoundary>
      </main>
      
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Index;
