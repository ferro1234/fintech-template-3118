import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk for core React dependencies
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            // UI components chunk
            if (id.includes('@radix-ui') || id.includes('lucide-react')) {
              return 'ui';
            }
            // Utilities chunk
            if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
              return 'utils';
            }
            // Router chunk
            if (id.includes('react-router')) {
              return 'router';
            }
            // Other node_modules
            return 'vendor-misc';
          }
          // App chunks by feature
          if (id.includes('src/components/Software')) {
            return 'software-solution';
          }
          if (id.includes('src/components/Service')) {
            return 'services';
          }
        }
      }
    },
    minify: mode === 'production' ? 'esbuild' : false,
    chunkSizeWarningLimit: 1000,
    sourcemap: mode === 'development'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query']
  }
}));
