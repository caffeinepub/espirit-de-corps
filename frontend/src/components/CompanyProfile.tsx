import { useEffect, useRef } from 'react';
import { SiInstagram, SiYoutube, SiFacebook, SiX, SiTiktok } from 'react-icons/si';
import { CheckCircle } from 'lucide-react';

const highlights = [
  'End-to-end social media account management',
  'Content creation, editing & viral strategy',
  'Celebrity & influencer account specialists',
  'Brand identity & digital presence building',
  'Data-driven growth & engagement optimization',
  'Crisis management & reputation protection',
];

const platforms = [
  { icon: SiInstagram, label: 'Instagram' },
  { icon: SiYoutube, label: 'YouTube' },
  { icon: SiTiktok, label: 'TikTok' },
  { icon: SiX, label: 'X (Twitter)' },
  { icon: SiFacebook, label: 'Facebook' },
];

export default function CompanyProfile() {
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
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-fade-in py-28 relative overflow-hidden"
      style={{ background: 'oklch(0.1 0 0)' }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background: 'radial-gradient(ellipse at top right, oklch(0.78 0.14 85), transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="section-label">Who We Are</span>
            </div>
            <h2 className="section-title mb-6">
              The Agency Behind{' '}
              <span className="gold-text-gradient">Iconic Presences</span>
            </h2>
            <div className="divider-gold" />
            <p className="font-sans text-foreground/60 text-lg leading-relaxed mb-6 mt-6">
              <strong className="text-gold font-semibold">Espirit de corps</strong> is a
              full-service social media management agency dedicated to building, growing, and
              maintaining powerful digital presences for celebrities, influencers, and brands.
            </p>
            <p className="font-sans text-foreground/60 leading-relaxed mb-8">
              We don't just manage accounts — we craft narratives, engineer virality, and
              build communities. From content ideation to reel editing, from crisis response
              to landing page development, we provide complete end-to-end support so our
              clients can focus on what they do best.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-gold mt-0.5 shrink-0" />
                  <span className="font-sans text-sm text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>

            {/* Platforms */}
            <div>
              <p className="font-heading text-xs tracking-widest uppercase text-foreground/40 mb-4">
                Platforms We Master
              </p>
              <div className="flex flex-wrap gap-4">
                {platforms.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-sharp border border-gold/20 hover:border-gold/50 transition-colors"
                    style={{ background: 'oklch(0.13 0 0)' }}
                  >
                    <Icon size={16} className="text-gold" />
                    <span className="font-heading text-xs font-semibold text-foreground/60">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="relative">
            <div
              className="relative rounded-sharp overflow-hidden border border-gold/20 glow-gold"
              style={{ background: 'oklch(0.13 0 0)' }}
            >
              {/* Top bar */}
              <div
                className="h-1 w-full"
                style={{
                  background: 'linear-gradient(90deg, oklch(0.78 0.14 85), oklch(0.88 0.12 95), oklch(0.72 0.16 75))',
                }}
              />
              <div className="p-10">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { num: '500+', desc: 'Accounts Managed' },
                    { num: '10M+', desc: 'Total Reach' },
                    { num: '5+', desc: 'Years Experience' },
                    { num: '50+', desc: 'Viral Campaigns' },
                  ].map(({ num, desc }) => (
                    <div
                      key={desc}
                      className="p-5 rounded-sharp border border-gold/10 hover:border-gold/30 transition-colors"
                      style={{ background: 'oklch(0.16 0 0)' }}
                    >
                      <div className="font-display text-3xl font-bold text-gold mb-1">{num}</div>
                      <div className="font-heading text-xs tracking-wider uppercase text-foreground/50">
                        {desc}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="p-5 rounded-sharp border border-gold/20"
                  style={{ background: 'oklch(0.16 0 0)' }}
                >
                  <p className="font-display text-lg italic text-foreground/80 leading-relaxed">
                    "We don't just grow accounts — we build legacies in the digital world."
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-px flex-1 bg-gold/20" />
                    <span className="font-heading text-xs tracking-widest uppercase text-gold/60">
                      Espirit de corps
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-sharp border border-gold/10 -z-10"
              style={{ background: 'oklch(0.13 0 0)' }}
            />
            <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-sharp border border-gold/10 -z-10"
              style={{ background: 'oklch(0.13 0 0)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
