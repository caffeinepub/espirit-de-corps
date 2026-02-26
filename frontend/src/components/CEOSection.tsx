import { useEffect, useRef } from 'react';
import { Quote, Linkedin, Instagram } from 'lucide-react';

export default function CEOSection() {
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
      id="ceo"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-fade-in py-28 relative overflow-hidden"
      style={{ background: 'oklch(0.1 0 0)' }}
    >
      {/* Background glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'oklch(0.78 0.14 85)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="section-label">Leadership</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="section-title">
            Meet the{' '}
            <span className="gold-text-gradient">Visionary</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -inset-4 rounded-sharp border border-gold/20"
                style={{ background: 'oklch(0.13 0 0)' }}
              />
              <div
                className="absolute -inset-8 rounded-sharp border border-gold/10"
                style={{ background: 'transparent' }}
              />

              {/* Image container */}
              <div
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-sharp overflow-hidden border-2 border-gold/40 glow-gold"
              >
                <img
                  src="/assets/generated/ceo-portrait.dim_600x600.png"
                  alt="CEO of Espirit de corps"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, oklch(0.1 0 0 / 60%) 0%, transparent 60%)',
                  }}
                />
              </div>

              {/* Badge */}
              <div
                className="absolute -bottom-5 -right-5 px-5 py-3 rounded-sharp border border-gold/40 glow-gold"
                style={{ background: 'oklch(0.13 0 0)' }}
              >
                <div className="font-heading text-xs font-bold text-gold tracking-widest uppercase">
                  Founder & CEO
                </div>
                <div className="font-display text-sm font-semibold text-foreground/80 mt-0.5">
                  Espirit de corps
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="mb-2">
              <span className="font-heading text-xs tracking-widest uppercase text-foreground/40">
                Chief Executive Officer
              </span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
              Saravana Kumar
            </h3>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="font-heading text-xs tracking-widest uppercase text-gold">
                Founder & Visionary
              </span>
            </div>

            {/* Quote */}
            <div
              className="relative p-6 rounded-sharp border border-gold/20 mb-8"
              style={{ background: 'oklch(0.13 0 0)' }}
            >
              <Quote size={24} className="text-gold/40 mb-3" />
              <p className="font-display text-lg italic text-foreground/80 leading-relaxed">
                "In the age of social media, your digital presence is your most powerful asset.
                We exist to make that asset extraordinary."
              </p>
            </div>

            <p className="font-sans text-foreground/60 leading-relaxed mb-5">
              With over a decade of experience in digital marketing and social media strategy,
              Alex Mercer founded Espirit de corps with a singular vision: to give celebrities,
              influencers, and brands the elite-level social media management they deserve.
            </p>
            <p className="font-sans text-foreground/60 leading-relaxed mb-8">
              Having worked with A-list celebrities and Fortune 500 brands, Alex brings an
              unparalleled understanding of what it takes to build authentic, viral, and
              commercially powerful social media presences. Under their leadership, Espirit de
              corps has grown into a powerhouse agency trusted by the world's most influential names.
            </p>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                'Social Media Strategy',
                'Content Creation',
                'Brand Building',
                'Viral Marketing',
                'Crisis Management',
                'Digital Growth',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-sharp border border-gold/20 font-heading text-xs font-semibold text-gold/70 hover:border-gold/50 hover:text-gold transition-colors"
                  style={{ background: 'oklch(0.78 0.14 85 / 5%)' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-sharp border border-gold/20 flex items-center justify-center text-foreground/50 hover:text-gold hover:border-gold/50 transition-colors"
                style={{ background: 'oklch(0.13 0 0)' }}
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sharp border border-gold/20 flex items-center justify-center text-foreground/50 hover:text-gold hover:border-gold/50 transition-colors"
                style={{ background: 'oklch(0.13 0 0)' }}
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
