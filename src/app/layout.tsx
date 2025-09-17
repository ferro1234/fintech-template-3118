import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: 'Správa Webstránok - Digitalizácia dokumentov, prepis textu, OCR služby na Slovensku',
    template: '%s | Správa Webstránok'
  },
  description: 'Profesionálne služby digitalizácie dokumentov, prepis textov z PDF, OCR rozpoznávanie textu, prepis audio a video súborov. Rýchle a presné riešenia pre firmy a jednotlivcov na Slovensku.',
  keywords: [
    'digitalizácia dokumentov',
    'prepis textu',
    'OCR služby',
    'prepis audio',
    'prepis video',
    'PDF do textu',
    'správa webstránok',
    'slovensko',
    'digitalizácia',
    'rozpoznávanie textu'
  ],
  authors: [{ name: 'František Harangózo', url: 'https://www.linkedin.com/in/frantisek-harangozo-38302861/' }],
  creator: 'František Harangózo',
  publisher: 'Správa Webstránok',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.spravawebstranok.sk'),
  alternates: {
    canonical: '/',
    languages: {
      'sk-SK': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: 'https://www.spravawebstranok.sk',
    siteName: 'Správa Webstránok',
    title: 'Správa Webstránok - Digitalizácia dokumentov a prepis textu',
    description: 'Profesionálne služby digitalizácie dokumentov, prepis textov z PDF, OCR rozpoznávanie textu, prepis audio a video súborov.',
    images: [
      {
        url: '/assets/social-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Správa Webstránok - Digitalizácia dokumentov',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Správa Webstránok - Digitalizácia dokumentov',
    description: 'Profesionálne služby digitalizácie dokumentov, prepis textov z PDF a OCR rozpoznávanie textu.',
    images: ['/assets/social-preview.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Správa Webstránok",
              "description": "Profesionálne služby digitalizácie dokumentov, prepis textov z PDF, OCR rozpoznávanie textu",
              "url": "https://www.spravawebstranok.sk",
              "telephone": "+421905123456",
              "email": "info@spravawebstranok.sk",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SK",
                "addressLocality": "Slovensko"
              },
              "founder": {
                "@type": "Person",
                "name": "František Harangózo",
                "url": "https://www.linkedin.com/in/frantisek-harangozo-38302861/"
              },
              "sameAs": [
                "https://www.linkedin.com/in/frantisek-harangozo-38302861/"
              ],
              "offers": {
                "@type": "Offer",
                "category": "Digitalizácia dokumentov"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {children}
            </TooltipProvider>
          </LanguageProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}