import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'sk' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  sk: {
    // Header
    'nav.services': 'Naše služby',
    'nav.audience': 'Pre koho',
    'nav.format': 'Výstupný formát',
    'nav.solution': 'Softvérové riešenie',
    'nav.about': 'O nás',
    'nav.contact': 'Kontakt',
    
    // Services Section
    'services.title': 'PREPISOVANIE TEXTOV Z DOKUMENTOV A OBRÁZKOV',
    'services.subtitle': 'Digitalizácia osobných alebo firemných dát na mieru. Prinášame riešenia automatizovaného prepisu rôznych súborov alebo obrázkov do digitálnej podoby.',
    'services.documents.title': 'Prepisovanie textov a dokumentov',
    'services.documents.description': 'Digitalizujeme naskenované dokumenty a PDF súbory pomocou AI alebo OCR technológií. Prepisovanie textov z naskenovaných dokumentov alebo PDF.',
    'services.images.title': 'Prepisovanie textov z fotiek a obrázkov',
    'services.images.description': 'Rozpoznávame a prepísané texty z fotografií dokumentov, vizitkiek, štítkov a ďalších objektov s pokročilými algoritmami.',
    'services.audio.title': 'Prepisovanie audio a video nahrávok',
    'services.audio.description': 'Používame AI nástroje pre automatické rozpoznávanie reči. Prepíseme vaše nahrávky do textovej podoby a roztriedime podľa kľúčových slov.',
    'services.button': 'Zistiť viac',
    
    // Footer
    'footer.title': 'Kontakt',
    'footer.phone': 'Telefón',
    'footer.email': 'Email',
    'footer.website': 'Web stránka',
    'footer.linkedin': 'LinkedIn profil',
    'footer.copyright': '© 2024 prepisdokumentov.sk - František Harangózo. Všetky práva vyhradené.',
  },
  en: {
    // Header
    'nav.services': 'Our Services',
    'nav.audience': 'For Whom',
    'nav.format': 'Output Format',
    'nav.solution': 'Software Solution',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    
    // Services Section
    'services.title': 'TEXT TRANSCRIPTION FROM DOCUMENTS AND IMAGES',
    'services.subtitle': 'Custom digitization of personal or business data. We provide automated transcription solutions for various files or images into digital format.',
    'services.documents.title': 'Text and document transcription',
    'services.documents.description': 'We digitize scanned documents and PDF files using AI or OCR technologies. Text transcription from scanned documents or PDFs.',
    'services.images.title': 'Text transcription from photos and images',
    'services.images.description': 'We recognize and transcribe texts from photos of documents, business cards, labels and other objects using advanced algorithms.',
    'services.audio.title': 'Audio and video recording transcription',
    'services.audio.description': 'We use AI tools for automatic speech recognition. We transcribe your recordings into text format and categorize them by keywords.',
    'services.button': 'Learn more',
    
    // Footer
    'footer.title': 'Contact',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.website': 'Website',
    'footer.linkedin': 'LinkedIn profile',
    'footer.copyright': '© 2024 prepisdokumentov.sk - František Harangózo. All rights reserved.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sk');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};