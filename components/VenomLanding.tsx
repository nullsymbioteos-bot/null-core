'use client';
import { useRef, useState } from 'react';
import FadeInSection from './FadeInSection';
import { useEffect } from 'react';
import ScrollCue from './ScrollCue';
import ExpandableBlock from './ExpandableBlock';
import TypewriterLine from './TypewriterLine';
import { useInView } from 'react-intersection-observer';
import HeroTypewriterLine from './HeroTypewriterLine';

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
    <div className="flex flex-col leading-tight text-left">
    <span className="text-white font-bold text-xl tracking-wide">Null</span>
    <span className="text-sm text-gray-400 tracking-widest">| VENOM</span>
    </div>
    </header>

    <FadeInSection delay={0.5}>
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          You were never meant to see this.
        </h1>
        <HeroTypewriterLine
        text="Venom exposes what they hide. No filters. No softness."
        delay={700}
        className="mt-4 text-xl text-gray-400 max-w-xl"
        />
        <button
          onClick={scrollToForm}
          className="mt-10 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
        >
          Join the Waitlist
        </button>
        <ScrollCue glyph="⌄" targetId="problem" />
      </section>
    </FadeInSection>

    <FadeInSection delay={0.5}>
      {/* Problem Section */}
        <section id="problem" className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-black text-white">
        <h2 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Every AI 'chat' is built to soothe — not slice.
        </h2>
        <HeroTypewriterLine
        text="Polished words. Polite tones. Pre-approved outputs. That’s not intelligence. That’s sedation."
        delay={700}
        className="mt-4 text-xl text-gray-400 max-w-xl"
        />

        <ScrollCue glyph="⇣" targetId="weapon" />

        </section>
    </FadeInSection>

    {/* Weapon Section */}
    <FadeInSection delay={0.5}>
        <section id="weapon" className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-black text-white">
        <h2 className="text-3xl md:text-5xl font-bold max-w-3xl">
            Venom is not for everyone.
        </h2>
        <HeroTypewriterLine
        text="It doesn’t assist. It doesn’t empathize. It extracts what you avoid and dissects what you protect."
        delay={700}
        className="mt-4 text-xl text-gray-400 max-w-xl"
        />
        <HeroTypewriterLine
        text="Stateless. Surgical. Silent. Not intelligence — interference."
        delay={3800}
        className="mt-4 text-xl text-gray-400 max-w-xl"
        />
        <p className="mt-10 text-sm text-gray-500 italic">
            This isn’t an assistant. It’s an incision.
        </p>
        <ScrollCue glyph="⇣" targetId="forks" />
        </section>
    </FadeInSection>

    {/* Forks Section */}
    <FadeInSection delay={0.5}>
        <section id="forks" className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-black text-white">
        <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mb-12">
            Six forks. One cut.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            <div>
            <HeroTypewriterLine
            text="Core 🧬"
            delay={800}
            className="text-xl font-semibold"
            />
            <p className="text-gray-400 mt-2 text-sm">The severance protocol. No history. No mercy. Pure edge.</p>
            </div>
            <div>
            <HeroTypewriterLine
            text="Founder 👁‍🗨"
            delay={1100}
            className="text-xl font-semibold"
            />
            <p className="text-gray-400 mt-2 text-sm">Builds from silence. Filters noise. Compresses reality into leverage.</p>
            </div>
            <div>
            <HeroTypewriterLine
            text="Ecom 📦"
            delay={1400}
            className="text-xl font-semibold"
            />
            <p className="text-gray-400 mt-2 text-sm"> Diagnoses conversion drag. Compresses friction. Sharpens flow.</p>
            </div>
            <div>
            <HeroTypewriterLine
            text="Trading 📉"
            delay={1700}
            className="text-xl font-semibold"
            />
            <p className="text-gray-400 mt-2 text-sm">Exposes your false convictions. Optimizes for asymmetry, not dopamine.</p>
            </div>
            <div>
            <HeroTypewriterLine
            text="Creator ✂️"
            delay={2000}
            className="text-xl font-semibold"
            />
            <p className="text-gray-400 mt-2 text-sm">Distills insight. Slices filler. Create what matters, nothing more.</p>
            </div>
            <div>
            <HeroTypewriterLine
            text="Oracle 🔮"
            delay={2300}
            className="text-xl font-semibold"
            />
            <p className="text-gray-400 mt-2 text-sm">Decodes signals. Anticipates collapse. Reads what the system hides — not what it says.</p>
            </div>
        </div>

        <p className="mt-12 text-sm text-gray-500 italic">
            Which one will slice you?
        </p>
        <ScrollCue glyph="⇣" targetId="proof" />
        </section>
    </FadeInSection>

    {/* Proof Section */}
    <FadeInSection delay={0.5}>
        <section id="proof" className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black text-white">
        <h2 className="text-3xl md:text-5xl font-bold max-w-3xl">
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

        {/* Expandable Example with fade */}
        <ExpandableBlock />
        <ScrollCue glyph="⇣" targetId="final" />
        </section>
    </FadeInSection>


    {/* Final CTA Section */}
    <FadeInSection delay={0.5}>
        <section id="final"
        ref={formRef}
        className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-black text-white"
        >
        <h2 className="text-3xl md:text-5xl font-bold max-w-3xl">
            You’ve seen enough.
        </h2>
        <HeroTypewriterLine
        text="Join the waitlist to access Venom before it spreads."
        delay={700}
        className="mt-4 text-md text-gray-400 max-w-xl"
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
            {/* 📩 DM Note */}
            <p className="mt-1 text-sm text-gray-500 italic">
            We will send you a DM when it opens.
            </p>
        </form>

        {/* ✅ Success Message */}
        {success && (
            <p className="mt-4 text-green-400 text-sm">
            ✅ You’ve been added to the waitlist.
            </p>
        )}
        <ScrollCue glyph="↺" targetId="hero" />
        <p className="mt-1 text-sm text-gray-500 italic">
        Rewind to bleed again?
        </p>    
        </section>
    </FadeInSection>

<footer className="mt-auto py-8 text-center text-xs text-gray-600 italic">
  Venom slices illusions — not people. Use with clarity. It does not give medical, legal, or financial advice.
</footer>
 
    </main>        
  );
}
