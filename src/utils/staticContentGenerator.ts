/**
 * Static content generator for SEO optimization
 * Generates static HTML content for search engines while preserving React functionality
 */

export interface StaticContent {
  title: string;
  description: string;
  services: Array<{
    title: string;
    description: string;
    id: string;
  }>;
  about: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    phone: string;
    email: string;
    website: string;
  };
  audience: {
    title: string;
    individuals: {
      title: string;
      description: string;
    };
    companies: {
      title: string;
      description: string;
    };
  };
}

/**
 * Generates static content for a specific language
 */
export function generateStaticContent(language: 'sk' | 'en'): StaticContent {
  // Use static translations to avoid import issues
  const translations = {
    sk: {
      'services.title': 'PREPISOVANIE TEXTOV Z DOKUMENTOV A OBRÁZKOV',
      'services.subtitle': 'Digitalizácia osobných alebo firemných dát na mieru. Prinášame riešenia automatizovaného prepisu rôznych súborov alebo obrázkov do digitálnej podoby.',
      'services.documents.title': 'Prepisovanie textov a dokumentov',
      'services.documents.description': 'Digitalizujeme naskenované dokumenty a PDF súbory pomocou AI alebo OCR technológií. Prepisovanie textov z naskenovaných dokumentov alebo PDF.',
      'services.images.title': 'Prepisovanie textov z fotiek a obrázkov',
      'services.images.description': 'Rozpoznávame a prepísané texty z fotografií dokumentov, vizitkiek, štítkov a ďalších objektov s pokročilými algoritmami.',
      'services.audio.title': 'Prepisovanie audio a video nahrávok',
      'services.audio.description': 'Používame AI nástroje pre automatické rozpoznávanie reči. Prepíseme vaše nahrávky do textovej podoby a roztriedime podľa kľúčových slov.',
      'about.title': 'O nás',
      'about.description': 'Volám sa František Harangózo a zaoberám sa automatizáciou a digitalizáciou obsahu pre firmy alebo jednotlivcov.',
      'audience.title': 'Pre koho je naša služba určená',
      'audience.individuals.title': 'Prepis textu a dokumentov pre jednotlivcov',
      'audience.individuals.description1': 'Realizujeme prepis textov dodaných osobne alebo elektronicky. Ceny účtujeme za stranu.',
      'audience.companies.title': 'Prepis textu a dokumentov pre firmy a organizácie',
      'audience.companies.description': 'Realizujeme prepis textov pre firmy a organizácie s možnosťou automatizácie.',
      'footer.title': 'Kontakt'
    },
    en: {
      'services.title': 'TEXT TRANSCRIPTION FROM DOCUMENTS AND IMAGES',
      'services.subtitle': 'Custom digitization of personal or business data. We provide automated transcription solutions.',
      'services.documents.title': 'Text and document transcription',
      'services.documents.description': 'We digitize scanned documents and PDF files using AI or OCR technologies.',
      'services.images.title': 'Text transcription from photos and images',
      'services.images.description': 'We recognize and transcribe texts from photos using advanced algorithms.',
      'services.audio.title': 'Audio and video recording transcription',
      'services.audio.description': 'We use AI tools for automatic speech recognition.',
      'about.title': 'About Us',
      'about.description': 'My name is František Harangózo and I specialize in automation and content digitization.',
      'audience.title': 'Who is our service for',
      'audience.individuals.title': 'Text and document transcription for individuals',
      'audience.individuals.description1': 'We perform text transcription delivered personally or electronically.',
      'audience.companies.title': 'Text and document transcription for companies and organizations',
      'audience.companies.description': 'We perform text transcription for companies with automation possibilities.',
      'footer.title': 'Contact'
    }
  };

  const t = (key: keyof typeof translations[typeof language]) => translations[language][key] || key;
  
  return {
    title: t('services.title'),
    description: t('services.subtitle'),
    services: [
      {
        id: 'dokumenty',
        title: t('services.documents.title'),
        description: t('services.documents.description')
      },
      {
        id: 'fotky', 
        title: t('services.images.title'),
        description: t('services.images.description')
      },
      {
        id: 'audio-video',
        title: t('services.audio.title'),
        description: t('services.audio.description')
      }
    ],
    about: {
      title: t('about.title'),
      description: t('about.description')
    },
    contact: {
      title: t('footer.title'),
      phone: '0905 321 308',
      email: 'harangozo@sketch.sk',
      website: 'spravawebstranok.sk'
    },
    audience: {
      title: t('audience.title'),
      individuals: {
        title: t('audience.individuals.title'),
        description: t('audience.individuals.description1')
      },
      companies: {
        title: t('audience.companies.title'),
        description: t('audience.companies.description')
      }
    }
  };
}

/**
 * Generates static HTML for search engines
 */
export function generateStaticHTML(content: StaticContent): string {
  return `
    <!-- Static content for SEO - will be hydrated by React -->
    <div id="static-content" style="display: none;">
      <header>
        <nav>
          <a href="#sluzby">Naše služby</a>
          <a href="#pre-koho">Pre koho</a>
          <a href="#vystupny-format">Výstupný formát</a>
          <a href="#softverove-riesenie">Softvérové riešenie</a>
          <a href="#o-nas">O nás</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>
      
      <main>
        <section id="sluzby">
          <h1>${content.title}</h1>
          <p>${content.description}</p>
          
          ${content.services.map(service => `
            <article id="${service.id}">
              <h2>${service.title}</h2>
              <p>${service.description}</p>
            </article>
          `).join('')}
        </section>
        
        <section id="pre-koho">
          <h2>${content.audience.title}</h2>
          
          <article>
            <h3>${content.audience.individuals.title}</h3>
            <p>${content.audience.individuals.description}</p>
          </article>
          
          <article>
            <h3>${content.audience.companies.title}</h3>
            <p>${content.audience.companies.description}</p>
          </article>
        </section>
        
        <section id="o-nas">
          <h2>${content.about.title}</h2>
          <p>${content.about.description} <a href="https://www.spravawebstranok.sk" target="_blank" rel="noopener noreferrer">spravawebstranok.sk</a> alebo na mojom osobnom <a href="https://www.linkedin.com/in/franti%C5%A1ek-harangozo-38302861/" target="_blank" rel="noopener noreferrer">linkedin profile</a>.</p>
        </section>
      </main>
      
      <footer id="kontakt">
        <h2>${content.contact.title}</h2>
        <div>
          <h3>Telefón</h3>
          <a href="tel:0905321308">${content.contact.phone}</a>
        </div>
        <div>
          <h3>Email</h3>
          <a href="mailto:harangozo@sketch.sk">${content.contact.email}</a>
        </div>
        <div>
          <h3>Web stránka</h3>
          <a href="https://www.spravawebstranok.sk" target="_blank" rel="noopener noreferrer">${content.contact.website}</a>
        </div>
        <p>© 2024 prepisdokumentov.sk - František Harangózo. Všetky práva vyhradené.</p>
      </footer>
    </div>
  `;
}

/**
 * Generates noscript fallback HTML for when JavaScript is disabled
 */
export function generateNoScriptHTML(content: StaticContent): string {
  return `
    <noscript>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: #141414;
          color: #f5f5f5;
          line-height: 1.6;
          margin: 0;
          padding: 20px;
        }
        .container { max-width: 1200px; margin: 0 auto; }
        h1 { color: #60a5fa; font-size: 2.5rem; margin-bottom: 1rem; }
        h2 { color: #f5f5f5; font-size: 2rem; margin: 2rem 0 1rem 0; }
        h3 { color: #f5f5f5; font-size: 1.5rem; margin: 1.5rem 0 0.5rem 0; }
        p { margin-bottom: 1rem; color: #d1d5db; }
        a { color: #60a5fa; text-decoration: underline; }
        a:hover { color: #3b82f6; }
        section { margin-bottom: 3rem; padding: 2rem; background: #1f1f1f; border-radius: 1rem; }
        article { margin-bottom: 2rem; padding: 1.5rem; background: #2a2a2a; border-radius: 0.5rem; }
        nav { margin-bottom: 2rem; }
        nav a { margin-right: 1rem; }
      </style>
      <div class="container">
        <header>
          <nav>
            <a href="#sluzby">Naše služby</a>
            <a href="#pre-koho">Pre koho</a>
            <a href="#o-nas">O nás</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </header>
        
        <main>
          <section id="sluzby">
            <h1>${content.title}</h1>
            <p>${content.description}</p>
            
            ${content.services.map(service => `
              <article id="${service.id}">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
              </article>
            `).join('')}
          </section>
          
          <section id="pre-koho">
            <h2>${content.audience.title}</h2>
            
            <article>
              <h3>${content.audience.individuals.title}</h3>
              <p>${content.audience.individuals.description}</p>
            </article>
            
            <article>
              <h3>${content.audience.companies.title}</h3>
              <p>${content.audience.companies.description}</p>
            </article>
          </section>
          
          <section id="o-nas">
            <h2>${content.about.title}</h2>
            <p>${content.about.description} <a href="https://www.spravawebstranok.sk" target="_blank" rel="noopener noreferrer">spravawebstranok.sk</a> alebo na mojom osobnom <a href="https://www.linkedin.com/in/franti%C5%A1ek-harangozo-38302861/" target="_blank" rel="noopener noreferrer">linkedin profile</a>.</p>
          </section>
        </main>
        
        <footer id="kontakt">
          <h2>${content.contact.title}</h2>
          <div style="display: grid; gap: 1rem; margin-top: 1rem;">
            <div>
              <h3>Telefón</h3>
              <a href="tel:0905321308">${content.contact.phone}</a>
            </div>
            <div>
              <h3>Email</h3>
              <a href="mailto:harangozo@sketch.sk">${content.contact.email}</a>
            </div>
            <div>
              <h3>Web stránka</h3>
              <a href="https://www.spravawebstranok.sk" target="_blank" rel="noopener noreferrer">${content.contact.website}</a>
            </div>
          </div>
          <p style="margin-top: 2rem; text-align: center; color: #9ca3af;">© 2024 prepisdokumentov.sk - František Harangózo. Všetky práva vyhradené.</p>
        </footer>
      </div>
    </noscript>
  `;
}