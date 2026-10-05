import React, { useEffect, useRef, useState } from 'react';

// Fades and slides content in smoothly when scrolled into view.
// `delay` (ms) makes items appear one by one.
export default function Reveal({ children, delay = 0, as: Tag = 'div', dir = 'up', className = '', ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${dir} ${shown ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }} {...rest}>{children}</Tag>
  );
}
