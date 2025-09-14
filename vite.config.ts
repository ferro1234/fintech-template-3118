import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    
    // Compression plugins for production
    mode === 'production' && compression({
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false,
      threshold: 1024, // Only compress files larger than 1KB
      filter: /\.(js|mjs|json|css|html|svg)$/i,
    }),
    
    // Brotli compression for even better compression ratios
    mode === 'production' && compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: false,
      threshold: 1024,
      filter: /\.(js|mjs|json|css|html|svg)$/i,
    }),
    
    // Bundle analyzer for development
    mode === 'development' && visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize bundle size with advanced chunk splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks - split by library type
          if (id.includes('node_modules')) {
            // React ecosystem
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            
            // UI component libraries
            if (id.includes('@radix-ui') || id.includes('lucide-react')) {
              return 'ui-vendor';
            }
            
            // Router and navigation
            if (id.includes('react-router')) {
              return 'router-vendor';
            }
            
            // Utilities and smaller libraries
            if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
              return 'utils-vendor';
            }
            
            // Performance monitoring
            if (id.includes('web-vitals')) {
              return 'analytics-vendor';
            }
            
            // Everything else goes to general vendor
            return 'vendor';
          }
          
          // App chunks - split by feature/route
          if (id.includes('/components/')) {
            // UI components
            if (id.includes('/ui/')) {
              return 'ui-components';
            }
            
            // Large components that can be split
            if (id.includes('SoftwareSolutionSection') || id.includes('ServiceDetailSections')) {
              return 'heavy-components';
            }
            
            return 'components';
          }
          
          // Utils and hooks
          if (id.includes('/utils/') || id.includes('/hooks/')) {
            return 'app-utils';
          }
          
          // Context providers
          if (id.includes('/contexts/')) {
            return 'contexts';
          }
        },
        
        // Optimize chunk naming
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()?.replace(/\.(ts|tsx|js|jsx)$/, '')
            : 'chunk';
          return `assets/[name]-[hash].js`;
        },
        
        // Optimize asset naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info.pop();
          const name = info.join('.');
          
          // Group assets by type
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {
            return `assets/images/[name]-[hash].[ext]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return `assets/fonts/[name]-[hash].[ext]`;
          }
          return `assets/[name]-[hash].[ext]`;
        },
        
        // Entry file naming
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    
    // Asset inlining optimization
    assetsInlineLimit: (filePath, content) => {
      // Inline small SVGs and images (< 4KB)
      if (filePath.endsWith('.svg') && content.length < 4096) {
        return true;
      }
      
      // Inline small CSS files (< 2KB)
      if (filePath.endsWith('.css') && content.length < 2048) {
        return true;
      }
      
      // Don't inline other assets
      return false;
    },
    
    // Use default esbuild minifier for compatibility
    target: 'es2020',
    
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 800,
    
    // Enable source maps in development only
    sourcemap: mode === 'development',
    
    // Optimize CSS
    cssCodeSplit: true,
    cssMinify: true,
    
    // Report compressed size in production
    reportCompressedSize: mode === 'production',
  },
  // Optimize dev server and build dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      'lucide-react',
      'clsx',
      'tailwind-merge',
      'class-variance-authority',
    ],
    // Force optimization of problematic dependencies
    force: mode === 'development',
  },
  
  // Optimize CSS processing
  css: {
    devSourcemap: mode === 'development',
    preprocessorOptions: {
      // Add any CSS preprocessor options here if needed
    },
  },
  
  // JSON optimization
  json: {
    stringify: true, // Faster JSON parsing
  },
  
  // Worker optimization
  worker: {
    format: 'es',
  },
}));
