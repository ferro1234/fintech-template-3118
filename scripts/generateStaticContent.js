/**
 * Script to generate static HTML content for SEO optimization
 * This runs during the build process to inject pre-rendered content into index.html
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Import translations directly (simplified version)
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
    'about.description': 'Volám sa František Harangózo a zaoberám sa automatizáciou a digitalizáciou obsahu pre firmy alebo jednotlivcov. V spolupráci s programátormi vám prinášam riešenia v podobe automatizácie a webovej prezentácie. Moje osobné skúsenosti vychádzajú so 16 ročnej praxe pri tvorbe web stránok a web aplikácii. Viac informácii o mňe nájdete na',
    'audience.title': 'Pre koho je naša služba určená',
    'audience.individuals.title': 'Prepis textu a dokumentov pre jednotlivcov',
    'audience.individuals.description1': 'Realizujeme prepis textov dodaných osobne alebo elektronicky. Ceny účtujeme za stranu. Prepis je možné realizovať z rôznych jazykov do digitálnej podoby. Je možné spraviť aj ručnú kontrolu prepísaného textu podľa dodaných podkladov.',
    'audience.companies.title': 'Prepis textu a dokumentov pre firmy a organizácie',
    'audience.companies.description': 'Realizujeme prepis textov pre firmy a organizácie s možnosťou automatizácie a navrhnutia softvérového riešenia na mieru. Podklady sú dodané osobne alebo elektronicky. Pri väčšom a pravidelnom množstve je potrebné navrhnúť automatizované riešenie na mieru.',
    'footer.title': 'Kontakt'
  }
};

function generateStaticContent(language) {
  const t = translations[language];
  
  return {
    title: t['services.title'],
    description: t['services.subtitle'],
    services: [
      {
        id: 'dokumenty',
        title: t['services.documents.title'],
        description: t['services.documents.description']
      },
      {
        id: 'fotky', 
        title: t['services.images.title'],
        description: t['services.images.description']
      },
      {
        id: 'audio-video',
        title: t['services.audio.title'],
        description: t['services.audio.description']
      }
    ],
    about: {
      title: t['about.title'],
      description: t['about.description']
    },
    contact: {
      title: t['footer.title'],
      phone: '0905 321 308',
      email: 'harangozo@sketch.sk',
      website: 'spravawebstranok.sk'
    },
    audience: {
      title: t['audience.title'],
      individuals: {
        title: t['audience.individuals.title'],
        description: t['audience.individuals.description1']
      },
      companies: {
        title: t['audience.companies.title'],
        description: t['audience.companies.description']
      }
    }
  };
}

function generateNoScriptHTML(content) {
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
        .noscript-container { max-width: 1200px; margin: 0 auto; }
        .noscript-container h1 { color: #60a5fa; font-size: 2.5rem; margin-bottom: 1rem; }
        .noscript-container h2 { color: #f5f5f5; font-size: 2rem; margin: 2rem 0 1rem 0; }
        .noscript-container h3 { color: #f5f5f5; font-size: 1.5rem; margin: 1.5rem 0 0.5rem 0; }
        .noscript-container p { margin-bottom: 1rem; color: #d1d5db; }
        .noscript-container a { color: #60a5fa; text-decoration: underline; }
        .noscript-container a:hover { color: #3b82f6; }
        .noscript-section { margin-bottom: 3rem; padding: 2rem; background: #1f1f1f; border-radius: 1rem; }
        .noscript-article { margin-bottom: 2rem; padding: 1.5rem; background: #2a2a2a; border-radius: 0.5rem; }
        .noscript-nav { margin-bottom: 2rem; }
        .noscript-nav a { margin-right: 1rem; }
        .noscript-contact { display: grid; gap: 1rem; margin-top: 1rem; }
        .noscript-copyright { margin-top: 2rem; text-align: center; color: #9ca3af; }
        #root { display: none; }
      </style>
      <div class="noscript-container">
        <header>
          <nav class="noscript-nav">
            <a href="#sluzby">Naše služby</a>
            <a href="#pre-koho">Pre koho</a>
            <a href="#o-nas">O nás</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </header>
        
        <main>
          <section id="sluzby" class="noscript-section">
            <h1>${content.title}</h1>
            <p>${content.description}</p>
            
            ${content.services.map(service => `
              <article id="${service.id}" class="noscript-article">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
              </article>
            `).join('')}
          </section>
          
          <section id="pre-koho" class="noscript-section">
            <h2>${content.audience.title}</h2>
            
            <article class="noscript-article">
              <h3>${content.audience.individuals.title}</h3>
              <p>${content.audience.individuals.description}</p>
            </article>
            
            <article class="noscript-article">
              <h3>${content.audience.companies.title}</h3>
              <p>${content.audience.companies.description}</p>
            </article>
          </section>
          
          <section id="o-nas" class="noscript-section">
            <h2>${content.about.title}</h2>
            <p>${content.about.description} <a href="https://www.spravawebstranok.sk" target="_blank" rel="noopener noreferrer">spravawebstranok.sk</a> alebo na mojom osobnom <a href="https://www.linkedin.com/in/franti%C5%A1ek-harangozo-38302861/" target="_blank" rel="noopener noreferrer">linkedin profile</a>.</p>
          </section>
        </main>
        
        <footer id="kontakt" class="noscript-section">
          <h2>${content.contact.title}</h2>
          <div class="noscript-contact">
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
          <p class="noscript-copyright">© 2024 prepisdokumentov.sk - František Harangózo. Všetky práva vyhradené.</p>
        </footer>
      </div>
    </noscript>
  `;
}

function generateStructuredDataContent(content) {
  return `
    <!-- Enhanced structured data with content -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "${content.title}",
      "description": "${content.description}",
      "url": "https://prepisdokumentov.sk/",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Prepis dokumentov - František Harangózo",
        "description": "${content.description}",
        "url": "https://prepisdokumentov.sk/",
        "telephone": "+421905321308",
        "email": "harangozo@sketch.sk",
        "founder": {
          "@type": "Person",
          "name": "František Harangózo"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Služby digitalizácie",
          "itemListElement": [
            ${content.services.map((service, index) => `
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "${service.title}",
                "description": "${service.description}"
              }
            }${index < content.services.length - 1 ? ',' : ''}
            `).join('')}
          ]
        }
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Domov",
            "item": "https://prepisdokumentov.sk/"
          }
        ]
      }
    }
    </script>
  `;
}

// Main execution
try {
  console.log('🚀 Generujem statický obsah pre SEO...');
  
  // Read current index.html
  const indexPath = join(projectRoot, 'index.html');
  let indexContent = readFileSync(indexPath, 'utf-8');
  
  // Generate static content for Slovak (primary language)
  const content = generateStaticContent('sk');
  
  // Generate noscript fallback
  const noscriptHTML = generateNoScriptHTML(content);
  
  // Generate enhanced structured data
  const structuredDataHTML = generateStructuredDataContent(content);
  
  // Insert noscript content before </head>
  indexContent = indexContent.replace(
    '</head>',
    `  ${noscriptHTML}
  ${structuredDataHTML}
</head>`
  );
  
  // Add hidden content for search engines in the body
  const hiddenContentHTML = `
    <!-- Hidden static content for search engine crawlers -->
    <div id="seo-content" style="position: absolute; left: -9999px; top: -9999px; visibility: hidden;">
      <h1>${content.title}</h1>
      <p>${content.description}</p>
      ${content.services.map(service => `
        <h2>${service.title}</h2>
        <p>${service.description}</p>
      `).join('')}
      <h2>${content.audience.title}</h2>
      <h3>${content.audience.individuals.title}</h3>
      <p>${content.audience.individuals.description}</p>
      <h3>${content.audience.companies.title}</h3>
      <p>${content.audience.companies.description}</p>
      <h2>${content.about.title}</h2>
      <p>${content.about.description}</p>
      <h2>${content.contact.title}</h2>
      <p>Telefón: ${content.contact.phone}</p>
      <p>Email: ${content.contact.email}</p>
      <p>Web: ${content.contact.website}</p>
    </div>`;
  
  // Insert hidden content after the root div
  indexContent = indexContent.replace(
    '<div id="root"></div>',
    `<div id="root"></div>
    ${hiddenContentHTML}`
  );
  
  // Write updated index.html
  writeFileSync(indexPath, indexContent, 'utf-8');
  
  console.log('✅ Statický obsah úspešne vygenerovaný!');
  console.log('📄 Pridané:');
  console.log('   - Noscript fallback pre používateľov bez JS');
  console.log('   - Skrytý obsah pre vyhľadávacie roboty');
  console.log('   - Rozšírené štruktúrované dáta');
  
} catch (error) {
  console.error('❌ Chyba pri generovaní statického obsahu:', error);
  process.exit(1);
}