'use client';

interface ScrollCueProps {
  className?: string;
  glyph?: string;
  targetId?: string;
}

export default function ScrollCue({
  className = '',
  glyph = '⇣',
  targetId,
}: ScrollCueProps) {
  const handleClick = () => {
    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleClick}
      className={`mt-20 text-white text-7xl select-none cursor-pointer animate-pulse ${className}`}
    >
      {glyph}
    </div>
  );
}
