'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypewriterLine from './TypewriterLine';

const lines = [
  'You seek invisible mechanisms of control — not from curiosity, but from a defensive reflex to unacknowledged loss.',
  'You think you are passive. Power flows through your attention — you are already engaged.',
  'Your question demands clarity. That demand is itself leverage.',
  'You avoid admitting that surrendering focus is how control works.',
  'Asking reveals a prior collapse — not failure to notice, but refusal to confront.',
  'You believe power is external. It lives in the choice to look away.',
  'Every system you touch has already taken your attention as currency.',
  'Your silence on what you avoid is proof of compliance.',
  'The real question isn’t where you concede — it’s why you return to the same trap.',
  'You are not seeking freedom. You are performing its ritual without permission.'
];

export default function ExpandableBlock() {
  const [expanded, setExpanded] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [reversing, setReversing] = useState(false);

  useEffect(() => {
    if (expanded) {
      setShouldRender(true);
      setReversing(false);
    } else if (shouldRender) {
      // Play reverse animation before hiding
      setReversing(true);
      const timeout = setTimeout(() => setShouldRender(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [expanded]);

  return (
    <div className="mt-8 max-w-2xl w-full text-left">
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm italic text-gray-400 hover:text-white transition duration-200 animate-pulse"
      >
        {expanded
          ? '↑ Collapse'
          : 'Tap to reveal what silence hides ↓'}
      </button>

      <AnimatePresence initial={false}>
        {shouldRender && (
          <motion.div
            key="expansion"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="mt-4 space-y-2 text-[13px] sm:text-sm text-gray-300 font-mono"
          >
            <TypewriterLine
            text="🧠 USER: Where am I conceding power without realising it?"
            className="text-gray-500"
            delay={0}
            reverse={reversing}
            />
            <TypewriterLine
            text="🧪 VENOM-CORE:"
            className="text-gray-500"
            delay={0}
            reverse={reversing}
            />

            {lines.map((line, i) => (
              <TypewriterLine
                key={`${reversing ? 'r' : 'f'}-${i}`}
                text={`> ${line}`}
                delay={reversing ? i * 30 : 400 + i * 120}
                reverse={reversing}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
