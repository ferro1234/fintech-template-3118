import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalsMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

const reportWebVitals = (onPerfEntry?: (metric: WebVitalsMetric) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Report to console in development
    const reportToConsole = (metric: WebVitalsMetric) => {
      console.log(`${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`);
      onPerfEntry(metric);
    };

    // Report to analytics in production
    const reportToAnalytics = (metric: WebVitalsMetric) => {
      // Send to your analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Also log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`);
      }
      
      onPerfEntry(metric);
    };

    const handler = process.env.NODE_ENV === 'development' ? reportToConsole : reportToAnalytics;

    onCLS(handler);
    onINP(handler);
    onFCP(handler);
    onLCP(handler);
    onTTFB(handler);
  }
};

// Performance observer for additional metrics
export const observePerformance = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    // Resource timing
    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          if (resource.duration > 1000) { // Log slow resources (>1s)
            console.warn(`Slow resource: ${resource.name} took ${resource.duration}ms`);
          }
        }
      });
    });
    
    try {
      resourceObserver.observe({ entryTypes: ['resource'] });
    } catch (e) {
      console.warn('Performance observer not supported for resources');
    }

    // Navigation timing
    const navigationObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const nav = entry as PerformanceNavigationTiming;
          console.log('Navigation metrics:', {
            domContentLoaded: nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart,
            loadComplete: nav.loadEventEnd - nav.loadEventStart,
            firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
            firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
          });
        }
      });
    });
    
    try {
      navigationObserver.observe({ entryTypes: ['navigation'] });
    } catch (e) {
      console.warn('Performance observer not supported for navigation');
    }
  }
};

export default reportWebVitals;