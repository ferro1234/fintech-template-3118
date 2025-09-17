# Next.js Migration - Správa Webstránok

## 🚀 Úspešná migrácia na Next.js 15

Projekt bol úspešne migrovaný z React + Vite na **Next.js 15** s pokročilými SEO optimalizáciami.

## 📁 Nová štruktúra projektu

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Globálne štýly s cosmic témou
│   ├── layout.tsx         # Root layout s meta tagmi
│   ├── page.tsx           # Hlavná stránka s dynamic imports
│   ├── loading.tsx        # Loading UI
│   ├── not-found.tsx      # 404 stránka
│   ├── sitemap.ts         # Dynamické generovanie sitemap
│   └── robots.ts          # Robots.txt konfigurácia
├── components/            # Všetky existujúce komponenty (zachované)
├── contexts/              # LanguageContext (upravaný pre Next.js)
├── utils/                 # Performance utils (zachované)
└── assets/               # Obrázky a SVG súbory
```

## 🎯 Kľúčové vylepšenia

### SEO Optimalizácie
- **Metadata API**: Dynamické meta tagy pre každú sekciu
- **Open Graph**: Optimálne sociálne zdieľanie
- **Structured Data**: JSON-LD pre lepšie indexovanie
- **Sitemap**: Automatické generovanie s prioritami
- **Robots.txt**: Pokročilé crawling nastavenia

### Performance
- **Server Components**: Statické renderovanie obsahu
- **Dynamic Imports**: Lazy loading komponentov
- **Image Optimization**: Next.js Image component ready
- **Bundle Splitting**: Automatická optimalizácia
- **Critical CSS**: Zachovaný z pôvodného projektu

### Zachovaná funkcionalnost
- ✅ Všetky komponenty migrované 1:1
- ✅ LanguageContext adaptovaný pre Next.js
- ✅ Scroll navigácia medzi sekciami
- ✅ Performance optimalizácie
- ✅ Cosmic design systém
- ✅ Tailwind CSS konfigurácia
- ✅ shadcn/ui komponenty

## 🛠️ Build a Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Deployment na FTP
1. Spustiť `npm run build`
2. Upload obsahu `out/` priečinka na FTP
3. Konfigurácia `.htaccess` už je pripravená

## 📊 SEO Benefits

### Lighthouse Skóre očakávanie: 95+
- **Performance**: Server-side rendering
- **SEO**: Dokonalé meta tagy a structured data
- **Accessibility**: Zachované aria labels
- **Best Practices**: Security headers a optimalizácie

### Search Engine Features
- Rich Snippets pripravené
- Social Media Preview optimalizované
- Mobile-first approach
- Core Web Vitals optimalizované

## 🔄 Migračné zmeny

### Nové súbory
- `next.config.js` - Next.js konfigurácia
- `src/app/layout.tsx` - Root layout s SEO
- `src/app/page.tsx` - Hlavná stránka
- `src/app/sitemap.ts` - Dynamická sitemap
- `src/app/robots.ts` - Robots konfigurácia

### Upravené súbory
- `src/contexts/LanguageContext.tsx` - Pridané 'use client'
- `src/app/globals.css` - Cosmic téma zachovaná

### Zachované súbory
- Všetky komponenty v `src/components/`
- Všetky utility v `src/utils/`
- Všetky assets v `src/assets/`

## 🎨 Design System

Cosmic design systém zostáva nezmenený:
- HSL color tokens
- Cosmic gradients a animácie
- Responsive design
- Dark/Light mode podpora

## 📈 Next Steps

1. **Test deployment**: Upload na FTP a overiť funkcionalnosť
2. **SEO monitoring**: Sledovať indexovanie v Search Console
3. **Performance monitoring**: Lighthouse a Web Vitals
4. **Content updates**: Jednoduché úpravy cez komponenty

---

**Výsledok**: Moderný Next.js projekt s dokonalým SEO, zachovanou funkcionalnosťou a pripravený na production deployment!