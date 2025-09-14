
import React, { Suspense } from 'react';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import ServiceDetailSections from '@/components/ServiceDetailSections';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import OutputFormatSection from '@/components/OutputFormatSection';
import ErrorBoundary from '@/components/ErrorBoundary';

// Only lazy load the heaviest components
const SoftwareSolutionSection = React.lazy(() => import('@/components/SoftwareSolutionSection'));
const AboutSection = React.lazy(() => import('@/components/AboutSection'));
const Footer = React.lazy(() => import('@/components/Footer'));

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
          <Suspense fallback={<LoadingSpinner />}>
            <SoftwareSolutionSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <AboutSection />
          </Suspense>
        </ErrorBoundary>
      </main>
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Index;
