import { useEffect, useRef } from 'react';
import { Film, Image, ShieldAlert, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Video Reels',
    subtitle: 'Content That Captivates',
    description:
      'We craft, edit, and optimize short-form video content designed to stop the scroll. From concept to viral reel, our team handles every frame with cinematic precision.',
    features: ['Reel editing & production', 'Content ideation & scripting', 'Viral strategy & optimization', 'Platform-specific formatting'],
    color: 'oklch(0.78 0.14 85)',
  },
  {
    icon: Image,
    title: 'Poster Advertisements',
    subtitle: 'Visuals That Convert',
    description:
      'High-impact visual creatives that command attention and drive action. Our designers create stunning poster ads that align with your brand and resonate with your audience.',
    features: ['Brand-aligned design', 'Ad creative production', 'Multi-format delivery', 'A/B testing variants'],
    color: 'oklch(0.78 0.14 85)',
  },
  {
    icon: ShieldAlert,
    title: 'Crisis Campaign Management',
    subtitle: 'Protect Your Reputation',
    description:
      'When the unexpected happens, we respond with speed and strategy. Our crisis management team protects your reputation and turns challenges into opportunities.',
    features: ['24/7 monitoring & response', 'Rapid damage control', 'Narrative management', 'Recovery strategy'],
    color: 'oklch(0.78 0.14 85)',
  },
  {
    icon: Globe,
    title: 'Landing Page Development',
    subtitle: 'Pages That Perform',
    description:
      'Conversion-optimized landing pages that turn visitors into followers, fans, and customers. Built for speed, designed for impact, engineered for results.',
    features: ['Conversion-focused design', 'Mobile-first development', 'SEO optimization', 'Analytics integration'],
    color: 'oklch(0.78 0.14 85)',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-fade-in py-28 relative overflow-hidden"
      style={{ background: 'oklch(0.12 0 0)' }}
    >
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.78 0.14 85 / 30%), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="section-label">What We Do</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="section-title mb-4">
            Our{' '}
            <span className="gold-text-gradient">Services</span>
          </h2>
          <p className="font-sans text-foreground/50 max-w-xl mx-auto">
            Comprehensive social media solutions tailored for celebrities, influencers, and brands
            who demand nothing but the best.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-sharp border border-gold/15 p-8 card-hover overflow-hidden cursor-pointer"
                style={{ background: 'oklch(0.13 0 0)' }}
                onClick={scrollToContact}
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(ellipse at top left, oklch(0.78 0.14 85 / 8%), transparent 70%)',
                  }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-500"
                  style={{ background: 'linear-gradient(90deg, oklch(0.78 0.14 85), oklch(0.88 0.12 95))' }}
                />

                {/* Index number */}
                <div
                  className="absolute top-6 right-8 font-display text-6xl font-black opacity-5 text-gold select-none"
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-sharp flex items-center justify-center mb-6 border border-gold/20 group-hover:border-gold/50 transition-colors"
                    style={{ background: 'oklch(0.78 0.14 85 / 8%)' }}
                  >
                    <Icon size={24} className="text-gold" />
                  </div>

                  {/* Title */}
                  <div className="mb-1">
                    <span className="font-heading text-xs tracking-widest uppercase text-gold/60">
                      {service.subtitle}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-sans text-foreground/55 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <div className="w-1 h-1 rounded-full bg-gold shrink-0" />
                        <span className="font-sans text-xs text-foreground/50">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-gold/60 group-hover:text-gold transition-colors">
                    <span className="font-heading text-xs font-semibold tracking-widest uppercase">
                      Learn More
                    </span>
                    <ArrowRight
                      size={14}
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
