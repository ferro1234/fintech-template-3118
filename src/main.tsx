import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import reportWebVitals, { observePerformance } from './utils/reportWebVitals'
import { preloadCriticalImages } from './utils/performanceUtils'
import { 
  prepareHydration, 
  onHydrationComplete, 
  onHydrationError,
  preloadCriticalResources
} from './utils/hydrationHelper'

// Start performance monitoring
observePerformance();

// Preload critical images
preloadCriticalImages();

// Prepare for hydration
prepareHydration();

try {
  // Create React root and render app
  const root = createRoot(document.getElementById("root")!);
  root.render(<App />);
  
  // Handle successful hydration
  requestAnimationFrame(() => {
    onHydrationComplete();
    
    // Preload additional resources after hydration
    setTimeout(preloadCriticalResources, 100);
  });
} catch (error) {
  // Handle hydration errors
  onHydrationError(error as Error);
}

// Measure and report Web Vitals
reportWebVitals((metric) => {
  // In production, you would send this to your analytics service
  console.log('Web Vitals:', metric);
});
