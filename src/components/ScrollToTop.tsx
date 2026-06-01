import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      
      const tryScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // Try immediately
      if (!tryScroll()) {
        // If not found (navigating from another page), poll for it
        let attempts = 0;
        const interval = setInterval(() => {
          if (tryScroll() || attempts >= 10) {
            clearInterval(interval);
          }
          attempts++;
        }, 100);
      }
    } else {
      // Scroll to top on normal page transition
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}
