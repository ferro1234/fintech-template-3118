import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import reportWebVitals, { observePerformance } from './utils/reportWebVitals'
import { preloadCriticalImages } from './utils/performanceUtils'

// Start performance monitoring
console.log("Bootstrap: starting app");
observePerformance();

// Preload critical images
preloadCriticalImages();

const rootEl = document.getElementById("root");
if (!rootEl) {
  console.error("Root element #root not found");
} else {
  createRoot(rootEl).render(<App />);
  console.log("Bootstrap: app rendered");
}

// Measure and report Web Vitals
reportWebVitals((metric) => {
  // In production, you would send this to your analytics service
  console.log('Web Vitals:', metric);
});
