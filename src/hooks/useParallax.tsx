
import { useEffect, useState } from 'react';

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Only update if scroll difference is significant (debouncing)
      if (Math.abs(currentScrollY - lastScrollY) > 2) {
        setScrollY(currentScrollY);
        lastScrollY = currentScrollY;
      }
    };

    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  const getParallaxStyle = (speed: number = 0.5) => ({
    transform: `translate3d(0, ${scrollY * speed}px, 0)`,
    willChange: 'transform',
  });

  return {
    scrollY,
    getParallaxStyle,
  };
};
