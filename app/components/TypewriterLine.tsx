'use client';
import { useEffect, useState } from 'react';

interface TypewriterLineProps {
  text: string;
  delay?: number;
  className?: string;
  reverse?: boolean;
}

export default function TypewriterLine({
  text,
  delay = 0,
  className = '',
  reverse = false,
}: TypewriterLineProps) {
  const [displayed, setDisplayed] = useState(reverse ? text : '');

  useEffect(() => {
    let i = reverse ? text.length : 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (reverse) {
          i--;
          setDisplayed(text.slice(0, i));
          if (i <= 0) clearInterval(interval);
        } else {
          i++;
          setDisplayed(text.slice(0, i));
          if (i > text.length) clearInterval(interval);
        }
      }, 24);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, reverse]);

  return <p className={className}>{displayed}</p>;
}
