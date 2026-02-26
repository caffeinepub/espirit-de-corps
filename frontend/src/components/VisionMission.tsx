import { useEffect, useRef } from 'react';
import { Eye, Target } from 'lucide-react';

export default function VisionMission() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-fade-in py-28 relative overflow-hidden"
      style={{ background: 'oklch(0.12 0 0)' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            oklch(0.78 0.14 85) 0px,
            oklch(0.78 0.14 85) 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="section-label">Our Purpose</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="section-title">
            Vision &{' '}
            <span className="gold-text-gradient">Mission</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div
            className="relative rounded-sharp border border-gold/20 p-10 card-hover overflow-hidden group"
            style={{ background: 'oklch(0.13 0 0)' }}
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(90deg, transparent, oklch(0.78 0.14 85), transparent)',
              }}
            />

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-sharp flex items-center justify-center mb-8 border border-gold/30"
              style={{ background: 'oklch(0.78 0.14 85 / 10%)' }}
            >
              <Eye size={28} className="text-gold" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="section-label">Vision</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              To Lead the Digital Revolution
            </h3>
            <div className="divider-gold mb-6" />
            <p className="font-sans text-foreground/60 leading-relaxed mb-6">
              To be the world's most trusted and innovative social media management agency —
              the definitive force behind the digital identities of tomorrow's most influential
              celebrities, brands, and thought leaders.
            </p>
            <p className="font-sans text-foreground/50 leading-relaxed">
              We envision a future where every client we partner with becomes a dominant,
              authentic voice in their industry — recognized, respected, and followed by millions.
            </p>

            {/* Decorative number */}
            <div
              className="absolute bottom-6 right-8 font-display text-8xl font-black opacity-5 text-gold select-none"
            >
              01
            </div>
          </div>

          {/* Mission */}
          <div
            className="relative rounded-sharp border border-gold/20 p-10 card-hover overflow-hidden group"
            style={{ background: 'oklch(0.13 0 0)' }}
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(90deg, transparent, oklch(0.78 0.14 85), transparent)',
              }}
            />

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-sharp flex items-center justify-center mb-8 border border-gold/30"
              style={{ background: 'oklch(0.78 0.14 85 / 10%)' }}
            >
              <Target size={28} className="text-gold" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="section-label">Mission</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Deliver Excellence, Drive Virality
            </h3>
            <div className="divider-gold mb-6" />
            <p className="font-sans text-foreground/60 leading-relaxed mb-6">
              Our mission is to deliver end-to-end social media excellence — from crafting
              compelling content and editing viral reels to managing crises and building
              high-converting digital experiences.
            </p>
            <p className="font-sans text-foreground/50 leading-relaxed">
              We are committed to understanding each client's unique voice, amplifying their
              story, and engineering measurable growth through data-driven creativity and
              relentless execution.
            </p>

            {/* Decorative number */}
            <div
              className="absolute bottom-6 right-8 font-display text-8xl font-black opacity-5 text-gold select-none"
            >
              02
            </div>
          </div>
        </div>

        {/* Values strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Authenticity', desc: 'Real voices, real impact' },
            { label: 'Innovation', desc: 'Always ahead of the curve' },
            { label: 'Excellence', desc: 'No compromises on quality' },
            { label: 'Results', desc: 'Measurable growth always' },
          ].map(({ label, desc }) => (
            <div
              key={label}
              className="p-5 rounded-sharp border border-gold/10 hover:border-gold/30 transition-colors text-center"
              style={{ background: 'oklch(0.13 0 0)' }}
            >
              <div className="font-heading text-sm font-bold text-gold mb-1">{label}</div>
              <div className="font-sans text-xs text-foreground/40">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
