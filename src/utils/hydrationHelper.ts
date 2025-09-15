/**
 * Hydration helper for smooth transition from static to dynamic content
 * Ensures React takes over seamlessly from pre-rendered content
 */

/**
 * Hides static SEO content once React is loaded
 */
export function hideStaticContent(): void {
  // Hide SEO content that's only for crawlers
  const seoContent = document.getElementById('seo-content');
  if (seoContent) {
    seoContent.style.display = 'none';
  }
  
  // Hide static content if it exists
  const staticContent = document.getElementById('static-content');
  if (staticContent) {
    staticContent.style.display = 'none';
  }
}

/**
 * Ensures smooth hydration without layout shift
 */
export function prepareHydration(): void {
  // Add loading indicator
  const root = document.getElementById('root');
  if (root && root.innerHTML.trim() === '') {
    root.innerHTML = `
      <div class="loading-spinner">
        <div class="spinner"></div>
      </div>
    `;
  }
}

/**
 * Handles hydration completion
 */
export function onHydrationComplete(): void {
  hideStaticContent();
  
  // Remove any loading indicators
  const loadingElements = document.querySelectorAll('.loading-spinner');
  loadingElements.forEach(el => el.remove());
  
  // Ensure smooth scroll behavior is enabled
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Add hydrated class to body for any post-hydration styles
  document.body.classList.add('hydrated');
  
  console.log('🎉 React hydration complete');
}

/**
 * Handles failed hydration (fallback to static content)
 */
export function onHydrationError(error: Error): void {
  console.error('❌ React hydration failed:', error);
  
  // Show noscript content as fallback
  const noscript = document.querySelector('noscript');
  if (noscript) {
    const noscriptContent = noscript.innerHTML;
    document.body.innerHTML = noscriptContent;
  }
}

/**
 * Enhanced scroll to section with proper offset for sticky header
 */
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80; // Height of sticky header
    const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerOffset;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Preload critical resources after hydration
 */
export function preloadCriticalResources(): void {
  // Preload images that will be shown above the fold
  const criticalImages = [
    '/src/assets/services-photo.jpg',
    '/src/assets/logo-sws.svg',
    '/lovable-uploads/701323ab-fb0e-4e72-b4e9-996050083520.png'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  });
}