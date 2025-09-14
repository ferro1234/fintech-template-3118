
import React, { Suspense } from 'react';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import ServiceDetailSections from '@/components/ServiceDetailSections';
import LoadingSpinner from '@/components/LoadingSpinner';

// Lazy load components that are not immediately visible
const TargetAudienceSection = React.lazy(() => import('@/components/TargetAudienceSection'));
const OutputFormatSection = React.lazy(() => import('@/components/OutputFormatSection'));
const SoftwareSolutionSection = React.lazy(() => import('@/components/SoftwareSolutionSection'));
const AboutSection = React.lazy(() => import('@/components/AboutSection'));
const Footer = React.lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <ServicesSection />
        <ServiceDetailSections />
        
        <Suspense fallback={<LoadingSpinner />}>
          <TargetAudienceSection />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <OutputFormatSection />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <SoftwareSolutionSection />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <AboutSection />
        </Suspense>
      </main>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
