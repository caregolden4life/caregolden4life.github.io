import { useEffect, useRef } from 'react';

export function useAutoScroll(isActive = true, interval = 3000) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!isActive || !scrollRef.current) return;

    const container = scrollRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (!container) return;

        const children = Array.from(container.children);
        if (children.length <= 1) return;

        const itemWidth = children[0].offsetWidth + parseInt(window.getComputedStyle(container).gap || 0);
        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (currentScroll + itemWidth >= maxScroll + 10) {
          // Loop back to start
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll to next
          container.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
      }, interval);
    };

    startScrolling();

    // Pause on touch/mouse interaction
    const handleInteraction = () => clearInterval(scrollInterval);
    const handleEndInteraction = () => {
      clearInterval(scrollInterval);
      startScrolling();
    };

    container.addEventListener('touchstart', handleInteraction, { passive: true });
    container.addEventListener('touchend', handleEndInteraction, { passive: true });
    container.addEventListener('mouseenter', handleInteraction);
    container.addEventListener('mouseleave', handleEndInteraction);

    return () => {
      clearInterval(scrollInterval);
      container.removeEventListener('touchstart', handleInteraction);
      container.removeEventListener('touchend', handleEndInteraction);
      container.removeEventListener('mouseenter', handleInteraction);
      container.removeEventListener('mouseleave', handleEndInteraction);
    };
  }, [isActive, interval]);

  return scrollRef;
}
