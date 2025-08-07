'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypewriterLine from './TypewriterLine';

const lines = [
  'The question isn’t “should you leave?”',
  'It’s what you fear will remain — even if you go.',
  'You didn’t choose this job. You settled into it.',
  'You think quitting is rebellion. It’s just deferral.',
  'Your boss isn’t the prison. Your tolerance is.',
  'You’ve confused stability with sedation.',
  '“Burnout” is your scapegoat for silence.',
  'You aren’t overworked. You’re under-honest.',
  'If leaving felt right, you wouldn’t need to ask.',
  'You’re not stuck because of them. You’re stuck because of delay.',
  'You crave permission, not clarity.',
  'The job isn’t the loop. You are.',
  'You fear leaving won’t fix the hollowness.',
  'And it won’t.',
  'Because the job isn’t the problem.',
  'Avoidance is.',
  'And it follows you.',
  'No matter where you go.',
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
        className="text-sm text-gray-400 hover:text-white italic transition duration-200"
      >
        {expanded
          ? '← Silence'
          : 'What it reveals when everyone else stays silent →'}
      </button>

      <AnimatePresence initial={false}>
        {shouldRender && (
          <motion.div
            key="expansion"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="mt-4 space-y-2 text-sm text-gray-300 font-mono"
          >
            <TypewriterLine
            text="🧠 USER: Should I quit my job?"
            className="text-gray-500"
            delay={0}
            reverse={reversing}
            />
            <TypewriterLine
            text="🧪 VENOM:"
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
