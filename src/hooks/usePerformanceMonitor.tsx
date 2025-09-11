import { useEffect } from 'react';

interface FIDEntry extends PerformanceEntry {
  processingStart: number;
}

interface CLSEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Critical Request Chains
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        // Monitor long tasks that could block rendering
        if (entry.entryType === 'longtask') {
          console.warn('Long task detected:', {
            duration: entry.duration,
            startTime: entry.startTime,
            name: entry.name
          });
        }
        
        // Monitor resource loading performance
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          
          // Flag slow-loading critical resources
          if (resourceEntry.duration > 1000) {
            console.warn('Slow resource detected:', {
              name: resourceEntry.name,
              duration: resourceEntry.duration,
              transferSize: resourceEntry.transferSize,
              type: resourceEntry.initiatorType
            });
          }
        }
      });
    });

    // Observe performance entries
    try {
      observer.observe({ entryTypes: ['longtask', 'resource'] });
    } catch (e) {
      // Fallback for browsers that don't support certain entry types
      console.log('Performance monitoring partially supported');
    }

    // Monitor Core Web Vitals
    const measureWebVitals = () => {
      // Largest Contentful Paint
      try {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.log('LCP monitoring not supported');
      }

      // First Input Delay (FID)
      try {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries() as FIDEntry[];
          entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime);
          });
        }).observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.log('FID monitoring not supported');
      }

      // Cumulative Layout Shift
      try {
        new PerformanceObserver((entryList) => {
          let clsValue = 0;
          const entries = entryList.getEntries() as CLSEntry[];
          for (const entry of entries) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          console.log('CLS:', clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.log('CLS monitoring not supported');
      }
    };

    measureWebVitals();

    return () => {
      observer.disconnect();
    };
  }, []);
};