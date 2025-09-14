// Performance optimizer to prevent forced reflows
export class PerformanceOptimizer {
  private readQueue: (() => void)[] = [];
  private writeQueue: (() => void)[] = [];
  private scheduled = false;

  // Batch DOM reads and writes to prevent forced reflows
  read(callback: () => void) {
    this.readQueue.push(callback);
    this.schedule();
  }

  write(callback: () => void) {
    this.writeQueue.push(callback);
    this.schedule();
  }

  private schedule() {
    if (this.scheduled) return;
    this.scheduled = true;
    
    requestAnimationFrame(() => {
      // Execute all reads first
      while (this.readQueue.length) {
        const callback = this.readQueue.shift();
        callback?.();
      }
      
      // Then execute all writes
      while (this.writeQueue.length) {
        const callback = this.writeQueue.shift();
        callback?.();
      }
      
      this.scheduled = false;
    });
  }
}

// Global instance
export const domScheduler = new PerformanceOptimizer();

// Debounced scroll handler to prevent excessive reflows
export const createOptimizedScrollHandler = (callback: () => void, delay = 16) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  let lastExecution = 0;
  
  return () => {
    const now = Date.now();
    
    if (now - lastExecution > delay) {
      lastExecution = now;
      domScheduler.read(callback);
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastExecution = Date.now();
        domScheduler.read(callback);
      }, delay);
    }
  };
};

// Optimized intersection observer
export const createOptimizedIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver((entries) => {
    domScheduler.read(() => callback(entries, this));
  }, {
    rootMargin: '50px 0px',
    threshold: 0.1,
    ...options,
  });
};

// Prevent layout thrashing during animations
export const animateWithTransform = (
  element: HTMLElement,
  properties: { x?: number; y?: number; scale?: number; opacity?: number },
  duration = 300
) => {
  return new Promise<void>((resolve) => {
    const transforms: string[] = [];
    
    if (properties.x !== undefined || properties.y !== undefined) {
      const x = properties.x ?? 0;
      const y = properties.y ?? 0;
      transforms.push(`translate3d(${x}px, ${y}px, 0)`);
    }
    
    if (properties.scale !== undefined) {
      transforms.push(`scale(${properties.scale})`);
    }
    
    domScheduler.write(() => {
      element.style.transition = `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${duration}ms ease`;
      element.style.transform = transforms.join(' ');
      
      if (properties.opacity !== undefined) {
        element.style.opacity = properties.opacity.toString();
      }
      
      setTimeout(resolve, duration);
    });
  });
};

// Optimized element measurement
export const measureElement = (element: HTMLElement) => {
  return new Promise<DOMRect>((resolve) => {
    domScheduler.read(() => {
      resolve(element.getBoundingClientRect());
    });
  });
};