import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import reportWebVitals, { observePerformance } from './utils/reportWebVitals'
import { preloadCriticalImages } from './utils/performanceUtils'

// Start performance monitoring
observePerformance();

// Preload critical images
preloadCriticalImages();

createRoot(document.getElementById("root")!).render(<App />);

// Measure and report Web Vitals
reportWebVitals((metric) => {
  // In production, you would send this to your analytics service
  console.log('Web Vitals:', metric);
});
