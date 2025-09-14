import React from 'react';

// Critical CSS component for above-the-fold styles
const CriticalCSS = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical above-the-fold styles with performance optimizations */
        body { 
          font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
          background-color: hsl(0 0% 8%);
          color: hsl(0 0% 95%);
          margin: 0;
          padding: 0;
          font-display: swap;
          /* Performance optimizations */
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeSpeed;
          contain: layout style;
        }
        
        .cosmic-gradient {
          background: linear-gradient(135deg, rgba(64, 64, 64, 0.2) 0%, rgba(32, 32, 32, 0.4) 100%);
        }
        
        .cosmic-glow::before {
          content: "";
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          z-index: -1;
          border-radius: inherit;
        }
        
        /* Optimize animations for performance */
        * {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
        
        /* Animations optimized for performance - use transform instead of layout properties */
        .animate-fade-in {
          animation: fade-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, opacity;
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translate3d(0, 10px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        
        /* Optimize scroll performance */
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        
        /* Prevent layout shifts during loading */
        .loading-placeholder {
          contain: layout style paint;
        }
      `
    }} />
  );
};

export default CriticalCSS;