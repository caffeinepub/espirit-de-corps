import { ArrowDown, Play, TrendingUp, Users, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';

const stats = [
  { value: '500+', label: 'Accounts Managed' },
  { value: '10M+', label: 'Reach Generated' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'oklch(0.08 0 0)' }}
    >
      {/* Background Image with Parallax */}
      <div
        ref={heroRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/40" />

      {/* Decorative gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.78 0.14 85), transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="h-px w-12 bg-gold" />
            <span className="section-label">Elite Social Media Management</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 animate-fade-up">
            <span className="block text-foreground">We Make</span>
            <span className="block shimmer-text">Brands Go</span>
            <span className="block text-foreground">Viral.</span>
          </h1>

          {/* Subheading */}
          <p
            className="font-sans text-lg md:text-xl text-foreground/60 max-w-2xl mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Espirit de corps — the agency behind the most powerful social media presences.
            We build, manage, and amplify accounts for celebrities, influencers, and brands
            with end-to-end creative excellence.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 mb-16 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <button onClick={scrollToContact} className="btn-gold text-sm py-4 px-10">
              Get Started
            </button>
            <button
              onClick={scrollToPortfolio}
              className="btn-outline-gold text-sm py-4 px-10 flex items-center gap-2"
            >
              <Play size={14} className="fill-current" />
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 md:gap-12 animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-3xl md:text-4xl font-bold text-gold">
                  {stat.value}
                </span>
                <span className="font-heading text-xs tracking-widest uppercase text-foreground/50 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute right-8 top-1/3 hidden xl:flex flex-col gap-4 z-10">
        {[
          { icon: TrendingUp, label: 'Viral Strategy' },
          { icon: Users, label: 'Community Growth' },
          { icon: Zap, label: 'Rapid Execution' },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 px-4 py-3 rounded-sharp border border-gold/20 float-anim"
            style={{
              background: 'oklch(0.13 0 0 / 80%)',
              backdropFilter: 'blur(10px)',
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <Icon size={16} className="text-gold" />
            <span className="font-heading text-xs font-semibold tracking-wider text-foreground/70">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
        <span className="font-heading text-xs tracking-widest uppercase text-foreground/30">
          Scroll
        </span>
        <ArrowDown size={16} className="text-gold/50" />
      </div>
    </section>
  );
}
