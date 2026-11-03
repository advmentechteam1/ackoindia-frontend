import React, { useEffect, useRef, useState } from 'react';

// Slides its children in from the left, right or bottom the first time they scroll into view.
export default function Reveal({ children, from = 'up', delay = 0, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);

    // Failsafe: never leave content hidden if the observer does not report in time.
    const timer = setTimeout(() => {
      if (el.getBoundingClientRect().top < window.innerHeight) setVisible(true);
    }, 2500);

    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal reveal-${from} ${visible ? 'reveal-in' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
