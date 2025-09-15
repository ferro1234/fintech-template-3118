import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'sk' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
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
    
    // About Section
    'about.title': 'O nás',
    'about.description': 'Volám sa František Harangózo a zaoberám sa automatizáciou a digitalizáciou obsahu pre firmy alebo jednotlivcov. V spolupráci s programátormi vám prinášam riešenia v podobe automatizácie a webovej prezentácie. Moje osobné skúsenosti vychádzajú so 16 ročnej praxe pri tvorbe web stránok a web aplikácii. Viac informácii o mňe nájdete na',
    'about.link1': 'spravawebstranok.sk',
    'about.link2': 'linkedin profile',
    'about.linkText': 'alebo na mojom osobnom',
    
    // Target Audience Section
    'audience.title': 'Pre koho je naša služba určená',
    'audience.individuals.title': 'Prepis textu a dokumentov pre jednotlivcov',
    'audience.individuals.description1': 'Realizujeme prepis textov dodaných osobne alebo elektronicky. Ceny účtujeme za stranu. Prepis je možné realizovať z rôznych jazykov do digitálnej podoby. Je možné spraviť aj ručnú kontrolu prepísaného textu podľa dodaných podkladov.',
    'audience.individuals.description2': 'Digitalizovaný obsah vo vopred dohodnutých súboroch, ako napríklad: Word, Excel, PDF, CSV, XML, AI, INDD, EPS, HTML',
    'audience.companies.title': 'Prepis textu a dokumentov pre firmy a organizácie',
    'audience.companies.description': 'Realizujeme prepis textov pre firmy a organizácie s možnosťou automatizácie a navrhnutia softvérového riešenia na mieru. Podklady sú dodané osobne alebo elektronicky. Pri väčšom a pravidelnom množstve je potrebné navrhnúť automatizované riešenie na mieru.',
    
    // Output Format Section
    'format.title': 'Výstupný formát',
    'format.files.title': 'V samostatných súboroch:',
    'format.api.title': 'API, XML riešenie',
    'format.api.description': 'Vytvoríme vám zabezpečený export dát do vašej aplikácii. Tiež vieme zabezpečiť import dát do našej databázy pre doplnenie údajov.',
    
    // Software Solution Section
    'solution.title': 'Softvérové riešenie na mieru',
    'solution.feature1.title': 'Riešenie vášho problému bez mesačných poplatkov',
    'solution.feature1.description': 'Vytvoríme vám internú webaplikáciu na správu vášho digitalizovaného obsahu. Môžete si tak bez ďalších poplatkov navyše realizovať automatizovaný prepis podľa vašich procesov.',
    'solution.feature2.title': 'Nový vzhľad výstupných dát',
    'solution.feature2.description': 'Navrhneme vám nový vzhľad z prepísaných firemných dokumentov bez nutnosti grafického spracovania interným alebo externým grafikom.',
    'solution.feature3.title': 'Automatizácia procesov',
    'solution.feature3.description': 'Naše riešenie zohľadní aj vaše súčasné aplikácie, s ktorými pracujete. Navrhneme aktívne prepojenie medzi súčasnými aplikáciami a procesmi.',
    'solution.feature3.additional': 'V prípade, ak nemáte žiadnu automatizáciu procesov vo firme, navrhneme vám riešenie na mieru.',
    'solution.features.1': 'Generovanie vizitiek',
    'solution.features.2': 'Generovanie nálepiek, štítkov',
    'solution.features.3': 'Generovanie výročných správ',
    'solution.features.4': 'Generovanie QR kódov',
    'solution.features.5': 'Generovanie cenových ponúk',
    'solution.features.6': 'Generovanie objednávok',
    'solution.features.7': 'Generovanie grafov a tabuliek',
    'solution.example.title': 'Príklad riešenia',
    'solution.example.problem': 'Problém:',
    'solution.example.solution': 'Riešenie:',
    'solution.example.benefits': 'Čo z toho má klient:',
    'solution.example.description1': 'Klient ručne prepisoval hodnoty z jedného PDF formulára do druhého.',
    'solution.example.description2': 'Napriek tomu, že sme už pred rokmi vytvorili editovateľný PDF formulár s dizajnom na mieru, ručné kopírovanie z iných dokumentov bolo zdĺhavé, chybové a frustrujúce.',
    'solution.example.aiIssue': 'AI zatiaľ nebola spoľahlivá – vždy tam bola nejaká chybička.',
    'solution.example.webSolution': 'Preto sme išli cestou webovej aplikácie na mieru.',
    'solution.steps.1': 'čítanie údajov priamo z PDF súboru',
    'solution.steps.2': 'uloženie do databázy',
    'solution.steps.3': 'automatické predvyplnenie nového formulára',
    'solution.steps.4': 'export do PDF s dizajnom a brandingom klienta',
    'solution.benefits.1': 'ušetrených desiatky hodín mesačne',
    'solution.benefits.2': 'výrazne nižšia chybovosť',
    'solution.benefits.3': 'zamestnanci sa môžu sústrediť na dôležitejšie úlohy',
    'solution.mobile.showMore': 'Ukáž viac',
    'solution.mobile.showLess': 'Skryť',
    
    // Service Detail Sections
    'detail.documents.title': 'Prepisovanie textov a dokumentov',
    'detail.documents.description': 'Na prepisovanie textov využívame kombináciu AI modelov a špecializovaných OCR knižníc. Vďaka tomu vieme efektívne spracovať text aj pri horšej kvalite dokumentov alebo obrázkov. Po načítaní obsahu do databázy získate prístup k obsahu, s ktorým budete môcť ďalej pracovať, filtrovať ho a triediť.',
    'detail.documents.scanned.title': 'Prepisovanie textov z naskenovaných dokumentov:',
    'detail.documents.scanned.description': 'Dodáte nám naskenované dokumenty na USB alebo zabezpečenom cloude. Sken je potrebné realizovať v dostatočnom rozlíšení. Požiadavku vyriešime jednorazovo alebo vám navrhneme spôsob, ako celý tento proces automatizovať.',
    'detail.documents.pdf.title': 'Prepisovanie textov a dokumentov v PDF:',
    'detail.documents.pdf.description': 'V prípade PDF dokumentov je prepis spoľahlivejší, ak je obsah v PDF súbore skopírovateľný. Môže ísť o formuláre, testy, správy, faktúry, doklady, bločky, objednávky či kalkulácie.',
    'detail.documents.imageCaption': 'pdf, obrazok, audio, video',
    'detail.photos.title': 'Prepisovanie textov z fotiek a obrázkov',
    'detail.photos.description1': 'Potrebujete prepísať z fotky texty alebo z obrázku vybrať údaje o produkte? Texty môžeme prepísať a predmety na obrázku rozpoznať a roztriediť. Dôležité je, aby bola čitateľnosť dostupná aj voľným okom.',
    'detail.photos.description2': 'Naša technológia dokáže rozpoznať text aj z fotografií dokumentov, tableiek, vizitkiek, štítkov na produktoch a ďalších objektov. Využívame pokročilé algoritmy na zlepšenie kvality obrazu a zvýšenie presnosti rozpoznávania textu.',
    'detail.photos.imageCaption': 'Digitalizujeme dokumenty do novej podoby',
    'detail.audio.title': 'Prepisovanie audio a video nahrávok',
    'detail.audio.description1': 'Používame AI nástroje na rozpoznávanie reči (ASR – Automatic Speech Recognition). Nahrali ste si konzultáciu, školenie, workshop na svoj telefón, kameru alebo diktafón? Prepíšeme vám tento záznam do formy textu a roztriedime ho na základe kľúčových slov do kategórií.',
    'detail.audio.description2': 'Ukážeme vám, ako z rozhovoru vybrať dôležité informácie a pracovať s nimi ďalej. Naša technológia podporuje rôzne jazyky a dokáže rozpoznať viacerých rečníkov v jednej nahrávke.',
    'detail.audio.imageCaption': 'Zvyšujeme efektivitu práce',
    
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
    
    // About Section
    'about.title': 'About Us',
    'about.description': 'My name is František Harangózo and I specialize in automation and content digitization for companies or individuals. In collaboration with programmers, I bring you solutions in the form of automation and web presentation. My personal experience comes from 16 years of practice in creating websites and web applications. You can find more information about me at',
    'about.link1': 'spravawebstranok.sk',
    'about.link2': 'linkedin profile',
    'about.linkText': 'or on my personal',
    
    // Target Audience Section
    'audience.title': 'Who is our service for',
    'audience.individuals.title': 'Text and document transcription for individuals',
    'audience.individuals.description1': 'We perform text transcription delivered personally or electronically. We charge per page. Transcription can be done from various languages into digital format. Manual verification of transcribed text according to provided materials is also possible.',
    'audience.individuals.description2': 'Digitized content in pre-agreed file formats, such as: Word, Excel, PDF, CSV, XML, AI, INDD, EPS, HTML',
    'audience.companies.title': 'Text and document transcription for companies and organizations',
    'audience.companies.description': 'We perform text transcription for companies and organizations with the possibility of automation and custom software solution design. Materials are delivered personally or electronically. For larger and regular volumes, it is necessary to design a custom automated solution.',
    
    // Output Format Section
    'format.title': 'Output Format',
    'format.files.title': 'In separate files:',
    'format.api.title': 'API, XML solution',
    'format.api.description': 'We will create a secure data export to your application. We can also ensure data import to our database for data completion.',
    
    // Software Solution Section
    'solution.title': 'Custom Software Solution',
    'solution.feature1.title': 'Solving your problem without monthly fees',
    'solution.feature1.description': 'We will create an internal web application for managing your digitized content. You can perform automated transcription according to your processes without additional fees.',
    'solution.feature2.title': 'New look for output data',
    'solution.feature2.description': 'We will design a new look for your transcribed business documents without the need for graphic processing by internal or external designers.',
    'solution.feature3.title': 'Process automation',
    'solution.feature3.description': 'Our solution will consider your current applications you work with. We will design active integration between current applications and processes.',
    'solution.feature3.additional': 'If you do not have any process automation in your company, we will design a custom solution for you.',
    'solution.features.1': 'Business card generation',
    'solution.features.2': 'Label and sticker generation',
    'solution.features.3': 'Annual report generation',
    'solution.features.4': 'QR code generation',
    'solution.features.5': 'Price quote generation',
    'solution.features.6': 'Order generation',
    'solution.features.7': 'Chart and table generation',
    'solution.example.title': 'Solution Example',
    'solution.example.problem': 'Problem:',
    'solution.example.solution': 'Solution:',
    'solution.example.benefits': 'What the client gets:',
    'solution.example.description1': 'The client manually copied values from one PDF form to another.',
    'solution.example.description2': 'Despite having created an editable PDF form with custom design years ago, manual copying from other documents was time-consuming, error-prone and frustrating.',
    'solution.example.aiIssue': 'AI was not yet reliable – there was always some small error.',
    'solution.example.webSolution': 'Therefore, we went with a custom web application.',
    'solution.steps.1': 'reading data directly from PDF file',
    'solution.steps.2': 'saving to database',
    'solution.steps.3': 'automatic pre-filling of new form',
    'solution.steps.4': 'export to PDF with client design and branding',
    'solution.benefits.1': 'saved tens of hours monthly',
    'solution.benefits.2': 'significantly lower error rate',
    'solution.benefits.3': 'employees can focus on more important tasks',
    'solution.mobile.showMore': 'Show more',
    'solution.mobile.showLess': 'Hide',
    
    // Service Detail Sections
    'detail.documents.title': 'Text and document transcription',
    'detail.documents.description': 'For text transcription, we use a combination of AI models and specialized OCR libraries. This allows us to effectively process text even with poor quality documents or images. After loading content into the database, you get access to content you can further work with, filter and sort.',
    'detail.documents.scanned.title': 'Text transcription from scanned documents:',
    'detail.documents.scanned.description': 'You provide us with scanned documents on USB or secure cloud. Scanning needs to be done in sufficient resolution. We can solve the request one-time or propose a way to automate this entire process.',
    'detail.documents.pdf.title': 'Text and document transcription in PDF:',
    'detail.documents.pdf.description': 'For PDF documents, transcription is more reliable if the content in the PDF file is copyable. This can include forms, tests, reports, invoices, documents, receipts, orders or calculations.',
    'detail.documents.imageCaption': 'pdf, image, audio, video',
    'detail.photos.title': 'Text transcription from photos and images',
    'detail.photos.description1': 'Need to transcribe texts from a photo or extract product data from an image? We can transcribe texts and recognize and sort objects in the image. It is important that readability is available to the naked eye.',
    'detail.photos.description2': 'Our technology can recognize text from photos of documents, tables, business cards, product labels and other objects. We use advanced algorithms to improve image quality and increase text recognition accuracy.',
    'detail.photos.imageCaption': 'We digitize documents into new form',
    'detail.audio.title': 'Audio and video recording transcription',
    'detail.audio.description1': 'We use AI tools for speech recognition (ASR – Automatic Speech Recognition). Did you record a consultation, training, workshop on your phone, camera or voice recorder? We will transcribe this recording into text form and categorize it based on keywords.',
    'detail.audio.description2': 'We will show you how to extract important information from conversations and work with it further. Our technology supports various languages and can recognize multiple speakers in one recording.',
    'detail.audio.imageCaption': 'We increase work efficiency',
    
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