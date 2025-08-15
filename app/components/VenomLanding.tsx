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
        <span className="text-sm text-gray-400 tracking-widest">| Tier 1</span>
      </div>
    </header>


    <FadeInSection delay={0.5}>
      <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 text-center"
    >
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
        You weren’t supposed to build with this. But now you will.
      </h1>

      <HeroTypewriterLine
          text="Null exposes your blindspots. No polish. No prompt templates. Just compression."
          delay={600}
          className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl"
      />
      <button
        onClick={scrollToForm}
        className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
      >
        Join Waitlist
      </button>
      

      <ScrollCue glyph="⇣" targetId="problem" />

<p className="mt-6 text-xs sm:text-sm text-gray-500 animate-pulse">
  Scroll deeper — we don’t optimize. We expose.
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
            Every AI tool is built to smooth over — not deliver edge.
          </h2>

          <HeroTypewriterLine
            text="Polished language. Friendly tone. Safe outputs. That’s not intelligence. That’s brand protection."
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
            Null isn’t built to assist. It’s built to cut.
          </h2>

          <HeroTypewriterLine
            text="It doesn’t empathize. It doesn’t explain. It finds what you avoid — and forces a edge decsion."
            delay={300}
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl"
          />

          <HeroTypewriterLine
            text="Stateless. Surgical. Silent. Not intelligence — interference."
            delay={2000}
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl"
          />

          <p className="mt-10 text-sm text-gray-500 italic">
            This isn’t an assistant. It’s the edge.
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
            Four modules. One core protocol.
          </h2>

          {/* Core centered in its own row */}
          <div className="w-full flex justify-center py-8 sm:py-0">
          <div className="max-w-xs text-center">
            <HeroTypewriterLine 
              text="Null – Core 🧬" 
              delay={300} 
              className="text-base sm:text-xl md:text-xxl font-semibold" 
            />
            <p className="text-gray-400 mt-2 text-m">
              Stateless by design. No memory. No smoothing.  
              Pure edge for any input — built to expose, not assist.
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
                Exposes delusions. Strips false signals.  
                Forces clear decisions under pressure.
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
                Cuts fluff. Flags dead reach.  
                Compresses content into signal that converts.
              </p>
            </div>
          </div>

          <p className="mt-12 text-sm text-gray-500 italic">
            Pick your module. Deploy where you need edge.
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
            This is what Null tells you when others won't.
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
            These aren’t insights. They’re forced clarity.
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
            If you’re ready, deploy it.
          </h2>

          <HeroTypewriterLine
            text="Plug Null into your stack. Before others do."
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
              Early access is tracked. So is hesitation.
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
             Re-run exposure sequence?
          </p>
        </section>
    </FadeInSection>

<footer className="mt-auto py-8 text-center text-xs text-gray-600 italic space-y-2">
  <p>Null cuts systems — not individuals.</p>
  <p>
    Use at your own discretion. This interface does not provide medical, legal, financial, or professional advice.  
    By continuing, you accept our <a href="/terms" className="underline">Terms</a> and <a href="/privacy" className="underline">Privacy Policy</a>.
  </p>
</footer>
 
    </main>        
  );
}
