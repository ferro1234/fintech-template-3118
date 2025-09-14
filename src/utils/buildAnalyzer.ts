// Build analysis utilities for monitoring bundle performance

export const analyzeBundle = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Bundle Analysis:');
    console.log('- Run `npm run build` to generate bundle stats');
    console.log('- Check dist/stats.html for detailed bundle analysis');
    console.log('- Monitor chunk sizes and compression ratios');
  }
};

export const logChunkInfo = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('🔧 Chunk Strategy:');
    console.log('- react-vendor: React core libraries');
    console.log('- ui-vendor: UI component libraries (@radix-ui, lucide-react)');
    console.log('- router-vendor: React Router');
    console.log('- utils-vendor: Utility libraries (clsx, tailwind-merge)');
    console.log('- analytics-vendor: Performance monitoring (web-vitals)');
    console.log('- ui-components: Reusable UI components');
    console.log('- heavy-components: Large feature components');
    console.log('- app-utils: Application utilities and hooks');
    console.log('- contexts: React context providers');
  }
};

export const compressionInfo = () => {
  if (process.env.NODE_ENV === 'production') {
    console.log('📦 Compression Applied:');
    console.log('- Gzip compression for broad browser support');
    console.log('- Brotli compression for modern browsers (better ratio)');
    console.log('- Assets over 1KB are compressed');
    console.log('- Static files served with appropriate compression headers');
  }
};

// Performance budget warnings
export const checkPerformanceBudget = () => {
  const budget = {
    mainChunk: 150, // KB
    vendorChunk: 300, // KB
    totalJS: 500, // KB
    totalCSS: 50, // KB
  };
  
  console.log('🎯 Performance Budget:');
  console.log(`- Main chunk: < ${budget.mainChunk}KB`);
  console.log(`- Vendor chunk: < ${budget.vendorChunk}KB`);
  console.log(`- Total JS: < ${budget.totalJS}KB`);
  console.log(`- Total CSS: < ${budget.totalCSS}KB`);
  
  return budget;
};

// Runtime chunk analysis
export const getRuntimeChunkInfo = () => {
  if (typeof window !== 'undefined' && performance.getEntriesByType) {
    const resourceEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    const jsChunks = resourceEntries.filter(entry => 
      entry.name.includes('.js') && !entry.name.includes('node_modules')
    );
    
    const cssChunks = resourceEntries.filter(entry => 
      entry.name.includes('.css')
    );
    
    console.log('📈 Runtime Chunk Analysis:');
    console.log(`JS Chunks loaded: ${jsChunks.length}`);
    console.log(`CSS Chunks loaded: ${cssChunks.length}`);
    
    jsChunks.forEach(chunk => {
      console.log(`${chunk.name.split('/').pop()}: ${chunk.duration.toFixed(2)}ms`);
    });
  }
};