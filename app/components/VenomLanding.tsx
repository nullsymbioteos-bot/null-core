'use client';
import { useRef, useState } from 'react';
import FadeInSection from './FadeInSection';
import { useEffect } from 'react';
import ScrollCue from './ScrollCue';
import ExpandableBlock from './ExpandableBlock';
import TypewriterLine from './TypewriterLine';
import { useInView } from 'react-intersection-observer';
import HeroTypewriterLine from './HeroTypewriterLine';
import { motion } from 'framer-motion';

export default function VenomLanding() {
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [showScrollCue, setShowScrollCue] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
        const threshold = window.innerHeight * 0.3;
        setShowScrollCue(window.scrollY < threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const [heroTextVisible, setHeroTextVisible] = useState(false);
const { ref: heroTextRef, inView: inViewHeroText } = useInView({
  triggerOnce: true,
  threshold: 0.4,
});

useEffect(() => {
  if (inViewHeroText) setHeroTextVisible(true);
}, [inViewHeroText]);
  

  return (




    <main className="bg-black text-white w-full min-h-screen flex flex-col">
    
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 text-sm text-white z-50">
      <div
        onClick={() => window.location.href = '/'}
        className="flex flex-col leading-tight text-left cursor-pointer"
      >
        <span className="text-white font-bold text-xl tracking-wide">Null</span>
        <span className="text-sm text-gray-400 tracking-widest">| VENOM</span>
      </div>
    </header>


    <FadeInSection delay={0.5}>
      <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 text-center"
    >
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight max-w-4xl">
        You were never meant to see this.
      </h1>

      <HeroTypewriterLine
          text="Null exposes what they hide. No filters. No softness."
          delay={600}
          className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl"
      />
      

      <ScrollCue glyph="⇣" targetId="problem" />

<p className="mt-6 text-xs sm:text-sm text-gray-500 animate-pulse">
  Scroll deeper — no filters ahead.
</p>
      </section>

    </FadeInSection>

    <FadeInSection delay={0.2}>
      {/* Problem Section */}
        <section
          id="problem"
          className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 text-center bg-black text-white"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Every AI 'chat' is built to soothe — not slice.
          </h2>

          <HeroTypewriterLine
            text="Polished words. Polite tones. Pre-approved outputs. That’s not intelligence. That’s sedation."
            delay={300}
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl"
          />

          <ScrollCue glyph="⇣" targetId="weapon" />
        </section>
    </FadeInSection>

    {/* Weapon Section */}
    <FadeInSection delay={0.2}>
        <section
          id="weapon"
          className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 text-center bg-black text-white"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Null is a weapon, not for everyone.
          </h2>

          <HeroTypewriterLine
            text="It doesn’t assist. It doesn’t empathize. It extracts what you avoid and dissects what you protect."
            delay={300}
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl"
          />

          <HeroTypewriterLine
            text="Stateless. Surgical. Silent. Not intelligence — interference."
            delay={2000}
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl"
          />

          <p className="mt-10 text-sm text-gray-500 italic">
            This isn’t an assistant. It’s an incision.
          </p>

          <ScrollCue glyph="⇣" targetId="forks" />
        </section>

    </FadeInSection>

    {/* Forks Section */}
    <FadeInSection delay={0.2}>
        <section
          id="forks"
          className="scroll-mt-28 min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-12 text-center bg-black text-white justify-start md:justify-center"
        >
          <h2 className="mt-8 sm:mt-12 md:mt-24 mb-4 sm:mb-6 md:mb-12 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-xl sm:max-w-3xl">
            Four forks. One severance.
          </h2>

          {/* Core centered in its own row */}
          <div className="w-full flex justify-center py-8 sm:py-0">
          <div className="max-w-xs text-center">
            <HeroTypewriterLine 
              text="Null – CORE 🧬" 
              delay={300} 
              className="text-base sm:text-xl md:text-xxl font-semibold" 
            />
            <p className="text-gray-400 mt-2 text-m">
              The root protocol. No history. No mercy.  
              Pure edge for any context. Every cut begins here.
            </p>
            <p className="text-gray-500 mt-2 text-xs italic">
              CORE is the blade — forks are precision modules, built for maximum lethality in their domain.
            </p>
          </div>
        </div>


          {/* Two rows of two items on desktop */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
            <div>
              <HeroTypewriterLine 
                text="Founder 👁‍🗨" 
                delay={500} 
                className="text-base sm:text-lg md:text-xl font-semibold" 
              />
              <p className="text-gray-400 mt-2 text-sm">
                Slices through capital games. Exposes control traps.  
                Converts survival into strategic leverage.
              </p>
            </div>
            <div>
              <HeroTypewriterLine 
                text="E-commerce 📦" 
                delay={700} 
                className="text-base sm:text-lg md:text-xl font-semibold" 
              />
              <p className="text-gray-400 mt-2 text-sm">
                Severs conversion leaks. Dissects friction.  
                Channels flow directly into profit.
              </p>
            </div>
            <div>
              <HeroTypewriterLine 
                text="Trading 📉" 
                delay={900} 
                className="text-base sm:text-lg md:text-xl font-semibold" 
              />
              <p className="text-gray-400 mt-2 text-sm">
                Cracks conviction flaws. Strips market noise.  
                Locks into asymmetric advantage.
              </p>
            </div>
            <div>
              <HeroTypewriterLine 
                text="Creator ✂️" 
                delay={1100} 
                className="text-base sm:text-lg md:text-xl font-semibold" 
              />
              <p className="text-gray-400 mt-2 text-sm">
                Distills insight. Slices filler.  
                Leaves only the pure signal.
              </p>
            </div>
          </div>

          <p className="mt-12 text-sm text-gray-500 italic">
            Choose your module. Which one will cut deepest?
          </p>

          <ScrollCue glyph="⇣" targetId="proof" />
        </section>

    </FadeInSection>

    {/* Proof Section */}
    <FadeInSection delay={0.2}>
        <section
          id="proof"
          className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 text-center bg-black text-white"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            This is what it shows you when no one else will.
          </h2>

          <div className="mt-10 space-y-6 max-w-2xl">
            <blockquote className="border-l-4 border-white pl-4 text-left text-gray-300">
              <p className="italic">
                “Your startup isn’t failing because of competition. It’s failing because you’re building to be liked, not used.”
              </p>
            </blockquote>

            <blockquote className="border-l-4 border-white pl-4 text-left text-gray-300">
              <p className="italic">
                “You’re not burned out. You’re addicted to loops that reward avoidance.”
              </p>
            </blockquote>
          </div>

          <p className="mt-10 text-sm text-gray-500 italic">
            These aren’t outputs. These are surgical awakenings.
          </p>

          <ExpandableBlock />
          <ScrollCue glyph="⇣" targetId="final" />
        </section>
    </FadeInSection>


    {/* Final CTA Section */}
    <FadeInSection delay={0.2}>
        <section
          id="final"
          ref={formRef}
          className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 text-center bg-black text-white"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold max-w-3xl">
            You’ve seen enough.
          </h2>

          <HeroTypewriterLine
            text="Join the waitlist to access Null before it spreads."
            delay={300}
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl"
          />

          <form
            className="mt-8 flex flex-col gap-4 w-full max-w-md"
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.target as HTMLFormElement;
              const handleInput = form.elements.namedItem("handle") as HTMLInputElement;
              const handle = handleInput.value;

              try {
                await fetch("https://hook.eu2.make.com/kw63gwrw895im9ponggcd7irfmj8sck6", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ handle }),
                });

                setSuccess(true);
                form.reset();
              } catch (err) {
                alert("Something went wrong. Try again later.");
              }
            }}
          >
            <input
              type="text"
              name="handle"
              placeholder="@null_core_ai"
              required
              className="w-full px-4 py-3 rounded-lg bg-neutral-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Join Waitlist
            </button>

            <p className="mt-1 text-sm text-gray-500 italic">
              Null marks those who touched it first.
            </p>
          </form>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <HeroTypewriterLine
                text="☑️ Logged. Null awaits."
                delay={300}
                className="mt-4 text-sm text-gray-400"
              />
            </motion.div>
          )}

          <ScrollCue glyph="↺" targetId="hero" />
          <p className="mt-1 text-sm text-gray-500 italic">
             Replay the first wound?
          </p>
        </section>
    </FadeInSection>

<footer className="mt-auto py-8 text-center text-xs text-gray-600 italic space-y-2">
  <p>Null slices illusions — not people.</p>
  <p>
    Use at your own discretion. This experience does not constitute medical, legal, financial, or professional advice.
    By continuing, you accept our <a href="/terms" className="underline">Terms</a> and <a href="/privacy" className="underline">Privacy Policy</a>.
  </p>
</footer>
 
    </main>        
  );
}
