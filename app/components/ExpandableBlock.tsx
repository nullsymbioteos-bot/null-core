'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypewriterLine from './TypewriterLine';

const lines = [
  'Motive: You accepted because delay tolerance is calibrated to scarcity.',
  'You confuse obligation with value.',
  'The unpaid hours are not investment. They are extraction.',
  'Your gratitude is a performance of exhaustion.',
  'Late payment is not negligence — it’s leverage.',
  'Extra work without notice is not oversight — it’s control.',
  'You are not honored. You are conditioned.',
  'Trust in the client is trust in their power to harm you.',
  'The "opportunity" is an access point for depletion.',
  'Every delay resets your boundaries.',
  'Your compliance is not professionalism. It is surrender.',
  'They do not need you. They need your silence.',
  'You are paid in permission, not currency.',
  'Repetition of this pattern proves the contract is self-destructive.',
  'The client’s behavior is not accidental — it is designed to break your resistance.',
  'You agreed because you believe scarcity demands compliance.',
  'Your identity as "reliable" depends on being exploited.',
  'This is not a project. It is recruitment into servitude.',
  'You are not serving them. You are sustaining their leverage.'
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
            text="🧠 USER: Why did I agree to take on a project for a client who always pays late, adds extra work without notice, and still expects me to thank them for the opportunity?"
            className="text-gray-500"
            delay={0}
            reverse={reversing}
            />
            <TypewriterLine
            text="🧬 Null-CORE:"
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
