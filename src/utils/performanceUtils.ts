// Performance utilities for monitoring and optimization

export const measureComponentLoad = (componentName: string) => {
  const startTime = performance.now();
  
  return {
    end: () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      if (loadTime > 100) { // Log if component takes more than 100ms
        console.warn(`Slow component load: ${componentName} took ${loadTime.toFixed(2)}ms`);
      }
      
      // Send to analytics in production
      if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'component_load_time', {
          event_category: 'Performance',
          event_label: componentName,
          value: Math.round(loadTime),
        });
      }
      
      return loadTime;
    }
  };
};

export const preloadImages = (imageSrcs: string[]) => {
  return Promise.all(
    imageSrcs.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    })
  );
};

export const preloadCriticalImages = () => {
  const criticalImages = [
    '/src/assets/services-photo.jpg',
    '/lovable-uploads/701323ab-fb0e-4e72-b4e9-996050083520.png',
    '/src/assets/profile-photo.jpg',
  ];
  
  preloadImages(criticalImages).catch((error) => {
    console.warn('Failed to preload some critical images:', error);
  });
};

// Lazy load optimization
export const createIntersectionObserver = (callback: IntersectionObserverCallback) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px 0px', // Start loading 50px before element enters viewport
    threshold: 0.1,
  });
};

// Bundle size analysis helper
export const logBundleInfo = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Bundle analysis available at build time with --analyze flag');
  }
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}