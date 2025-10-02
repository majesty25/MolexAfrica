import { useEffect, useRef } from 'react';

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  delay?: number;
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  animationClass = 'animate-fade-in-up',
  delay = 0
}: ScrollAnimationOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add initial hidden state
    element.classList.add('opacity-0', 'translate-y-8');
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    if (delay > 0) {
      element.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation
            setTimeout(() => {
              entry.target.classList.remove('opacity-0', 'translate-y-8');
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, delay);
            
            // Stop observing once animated
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, animationClass, delay]);

  return elementRef;
}

export function useStaggeredAnimation(itemCount: number, staggerDelay: number = 100) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.children;
    
    // Add initial hidden state to all items
    Array.from(items).forEach((item, index) => {
      const element = item as HTMLElement;
      element.classList.add('opacity-0', 'translate-y-8');
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      element.style.transitionDelay = `${index * staggerDelay}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger staggered animation
            Array.from(items).forEach((item, index) => {
              const element = item as HTMLElement;
              setTimeout(() => {
                element.classList.remove('opacity-0', 'translate-y-8');
                element.classList.add('opacity-100', 'translate-y-0');
              }, index * staggerDelay);
            });
            
            // Stop observing once animated
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [itemCount, staggerDelay]);

  return containerRef;
}