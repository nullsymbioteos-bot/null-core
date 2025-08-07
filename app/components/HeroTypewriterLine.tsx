'use client';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface HeroTypewriterLineProps {
  text: string;
  delay?: number;
  className?: string; // ✅ added
}

export default function HeroTypewriterLine({
  text,
  delay = 700,
  className = '', // ✅ added
}: HeroTypewriterLineProps) {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;

    let i = 0;

    const startTyping = setTimeout(() => {
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayed(text.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
          setShowCursor(false);
        }
      }, 32);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [inView, delay, text]);

  return (
    <p ref={ref} className={className}>
      {displayed}
      {showCursor && <span className="inline-block animate-pulse ml-1">▌</span>}
    </p>
  );
}
