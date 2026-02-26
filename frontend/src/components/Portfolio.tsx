import { useState, useEffect, useRef } from 'react';
import { Play, X, ExternalLink } from 'lucide-react';

const reels = [
  {
    id: 1,
    thumb: '/assets/generated/reel-thumb-1.dim_400x700.png',
    title: 'Celebrity Brand Launch',
    views: '2.4M views',
    platform: 'Instagram Reels',
  },
  {
    id: 2,
    thumb: '/assets/generated/reel-thumb-2.dim_400x700.png',
    title: 'Viral Product Drop',
    views: '5.1M views',
    platform: 'TikTok',
  },
  {
    id: 3,
    thumb: '/assets/generated/reel-thumb-3.dim_400x700.png',
    title: 'Influencer Campaign',
    views: '3.8M views',
    platform: 'YouTube Shorts',
  },
];

const posters = [
  {
    id: 1,
    src: '/assets/generated/poster-sample-1.dim_800x800.png',
    title: 'Brand Identity Campaign',
    type: 'Social Ad',
    aspect: 'square',
  },
  {
    id: 2,
    src: '/assets/generated/poster-sample-2.dim_800x1000.png',
    title: 'Product Launch Poster',
    type: 'Story Ad',
    aspect: 'portrait',
  },
  {
    id: 3,
    src: '/assets/generated/poster-sample-3.dim_1080x566.png',
    title: 'Event Promotion Banner',
    type: 'Banner Ad',
    aspect: 'landscape',
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'reels' | 'posters'>('reels');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-fade-in py-28 relative overflow-hidden"
      style={{ background: 'oklch(0.1 0 0)' }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.78 0.14 85 / 30%), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="section-label">Our Work</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="section-title mb-4">
            Portfolio &{' '}
            <span className="gold-text-gradient">Showcase</span>
          </h2>
          <p className="font-sans text-foreground/50 max-w-xl mx-auto">
            A glimpse into the viral content, stunning visuals, and impactful campaigns
            we've created for our clients.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div
            className="flex rounded-sharp border border-gold/20 overflow-hidden"
            style={{ background: 'oklch(0.13 0 0)' }}
          >
            <button
              onClick={() => setActiveTab('reels')}
              className={`px-8 py-3 font-heading text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                activeTab === 'reels'
                  ? 'bg-gold text-charcoal'
                  : 'text-foreground/50 hover:text-gold'
              }`}
            >
              Video Reels
            </button>
            <button
              onClick={() => setActiveTab('posters')}
              className={`px-8 py-3 font-heading text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                activeTab === 'posters'
                  ? 'bg-gold text-charcoal'
                  : 'text-foreground/50 hover:text-gold'
              }`}
            >
              Poster Ads
            </button>
          </div>
        </div>

        {/* Reels Grid */}
        {activeTab === 'reels' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="group relative rounded-sharp overflow-hidden border border-gold/15 card-hover cursor-pointer"
                style={{ background: 'oklch(0.13 0 0)' }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img
                    src={reel.thumb}
                    alt={reel.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(to top, oklch(0.08 0 0 / 90%) 0%, oklch(0.08 0 0 / 30%) 50%, transparent 100%)',
                    }}
                  />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-gold/60 play-btn-pulse group-hover:border-gold group-hover:scale-110 transition-all duration-300"
                      style={{ background: 'oklch(0.78 0.14 85 / 20%)', backdropFilter: 'blur(4px)' }}
                    >
                      <Play size={22} className="text-gold fill-current ml-1" />
                    </div>
                  </div>
                  {/* Platform badge */}
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-sharp border border-gold/30"
                    style={{ background: 'oklch(0.08 0 0 / 80%)', backdropFilter: 'blur(8px)' }}
                  >
                    <span className="font-heading text-xs font-semibold text-gold/80">
                      {reel.platform}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-4">
                  <h4 className="font-heading text-sm font-bold text-foreground mb-1">
                    {reel.title}
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="font-sans text-xs text-gold/70">{reel.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Posters Grid */}
        {activeTab === 'posters' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {posters.map((poster) => (
              <div
                key={poster.id}
                className="group relative rounded-sharp overflow-hidden border border-gold/15 card-hover cursor-pointer"
                style={{ background: 'oklch(0.13 0 0)' }}
                onClick={() => setLightboxImg(poster.src)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={poster.src}
                    alt={poster.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: 'oklch(0.08 0 0 / 60%)' }}
                  >
                    <div
                      className="w-12 h-12 rounded-sharp flex items-center justify-center border border-gold/50"
                      style={{ background: 'oklch(0.78 0.14 85 / 20%)' }}
                    >
                      <ExternalLink size={18} className="text-gold" />
                    </div>
                  </div>
                  {/* Type badge */}
                  <div
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-sharp border border-gold/30"
                    style={{ background: 'oklch(0.08 0 0 / 80%)', backdropFilter: 'blur(8px)' }}
                  >
                    <span className="font-heading text-xs font-semibold text-gold/80">
                      {poster.type}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-heading text-sm font-bold text-foreground">{poster.title}</h4>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="font-sans text-foreground/40 text-sm mb-4">
            Want to see more of our work?
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline-gold text-xs py-3 px-8"
          >
            Request Full Portfolio
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'oklch(0.05 0 0 / 95%)', backdropFilter: 'blur(10px)' }}
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-sharp border border-gold/30 flex items-center justify-center text-foreground/60 hover:text-gold hover:border-gold/60 transition-colors"
            style={{ background: 'oklch(0.13 0 0)' }}
            onClick={() => setLightboxImg(null)}
          >
            <X size={18} />
          </button>
          <img
            src={lightboxImg}
            alt="Portfolio preview"
            className="max-w-full max-h-[90vh] object-contain rounded-sharp border border-gold/20"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
