import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Performance optimization: Lazy load non-critical resources
const loadNonCriticalResources = () => {
  // Preload critical images
  const criticalImages = [
    '/src/assets/process-image-new.png',
    '/src/assets/stats-image-new.png'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Load non-critical resources after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNonCriticalResources);
} else {
  loadNonCriticalResources();
}

createRoot(document.getElementById("root")!).render(<App />);
