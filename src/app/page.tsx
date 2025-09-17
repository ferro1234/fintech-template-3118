import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import CriticalCSS from '@/components/CriticalCSS';

// Dynamic imports for better performance
const Header = dynamic(() => import('@/components/Header'), {
  loading: () => <div className="h-20 bg-background/80 backdrop-blur-sm" />
});

const ServicesSection = dynamic(() => import('@/components/ServicesSection'), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
});

const ServiceDetailSections = dynamic(() => import('@/components/ServiceDetailSections'), {
  loading: () => <div className="h-96 animate-pulse bg-muted" />
});

const SoftwareSolutionSection = dynamic(() => import('@/components/SoftwareSolutionSection'), {
  loading: () => <div className="h-96 animate-pulse bg-background" />
});

const TargetAudienceSection = dynamic(() => import('@/components/TargetAudienceSection'), {
  loading: () => <div className="h-96 animate-pulse bg-muted" />
});

const OutputFormatSection = dynamic(() => import('@/components/OutputFormatSection'), {
  loading: () => <div className="h-96 animate-pulse bg-background" />
});

const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <div className="h-96 animate-pulse bg-muted" />
});

const DashboardPreview = dynamic(() => import('@/components/DashboardPreview'), {
  loading: () => <div className="h-96 animate-pulse bg-background" />
});

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="h-96 animate-pulse bg-muted" />
});

const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="h-96 animate-pulse bg-background" />
});

const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <div className="h-96 animate-pulse bg-muted" />
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 animate-pulse bg-background" />
});

export const metadata: Metadata = {
  title: 'Správa Webstránok - Digitalizácia dokumentov, prepis textu, OCR služby',
  description: 'Profesionálne služby digitalizácie dokumentov, prepis textov z PDF, OCR rozpoznávanie textu, prepis audio a video súborov. Rýchle a presné riešenia pre firmy a jednotlivcov na Slovensku.',
  keywords: [
    'digitalizácia dokumentov slovakia',
    'prepis textu z pdf',
    'ocr služby slovensko',
    'prepis audio video',
    'rozpoznávanie textu',
    'digitalizácia papierových dokumentov',
    'prepis dokumentov',
    'správa webstránok'
  ],
  alternates: {
    canonical: 'https://www.spravawebstranok.sk',
  },
  openGraph: {
    title: 'Digitalizácia dokumentov a prepis textu - Správa Webstránok',
    description: 'Profesionálne služby digitalizácie dokumentov, OCR rozpoznávanie textu a prepis audio/video súborov. Rýchle a presné riešenia.',
    url: 'https://www.spravawebstranok.sk',
    images: [
      {
        url: '/assets/social-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Digitalizácia dokumentov - Správa Webstránok',
      },
    ],
  },
  other: {
    'format-detection': 'telephone=no',
  },
};

export default function HomePage() {
  return (
    <>
      <CriticalCSS />
      <main className="min-h-screen bg-background">
        <Header />
        <ServicesSection />
        <ServiceDetailSections />
        <SoftwareSolutionSection />
        <TargetAudienceSection />
        <OutputFormatSection />
        <Features />
        <DashboardPreview />
        <Testimonials />
        <Pricing />
        <AboutSection />
        <Footer />
      </main>
    </>
  );
}