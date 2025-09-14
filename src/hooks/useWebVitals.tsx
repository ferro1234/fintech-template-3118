import { useEffect } from 'react';

export const useWebVitals = () => {
  useEffect(() => {
    // Dynamic import to reduce bundle size
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      const reportMetric = (metric: any) => {
        console.log(`${metric.name}: ${metric.value} (${metric.rating})`);
        
        // Send to analytics if available
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', metric.name, {
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_category: 'Web Vitals',
            event_label: metric.rating,
            non_interaction: true,
          });
        }
      };

      onCLS(reportMetric);
      onINP(reportMetric);
      onFCP(reportMetric);
      onLCP(reportMetric);
      onTTFB(reportMetric);
    }).catch(() => {
      // Silently fail if web-vitals is not available
    });
  }, []);
};