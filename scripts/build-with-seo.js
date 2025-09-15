#!/usr/bin/env node

/**
 * Build script that generates production build with SEO optimizations
 * This script runs the standard build process and then adds SEO enhancements
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

console.log('🚀 Spúšťam production build s SEO optimalizáciami...\n');

try {
  // Run standard Vite build
  console.log('📦 Building aplikácia...');
  execSync('npm run build', { 
    stdio: 'inherit', 
    cwd: projectRoot 
  });
  
  // Check if build was successful
  const distPath = join(projectRoot, 'dist');
  if (!existsSync(distPath)) {
    throw new Error('Build sa nepodaril - dist folder neexistuje');
  }
  
  console.log('\n🎯 Generujem SEO optimalizácie...');
  
  // Run SEO content generation
  const { execSync: exec } = await import('child_process');
  exec('node ./scripts/generateStaticContent.mjs', { 
    stdio: 'inherit', 
    cwd: projectRoot 
  });
  
  console.log('\n✅ Production build s SEO optimalizáciami dokončený!');
  console.log('📁 Build output je v ./dist/ folder');
  console.log('\n🎉 Vaša aplikácia je teraz pripravená pre nasadenie s optimálnym SEO!');
  
} catch (error) {
  console.error('❌ Chyba pri build procese:', error.message);
  process.exit(1);
}