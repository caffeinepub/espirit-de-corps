import { Heart } from 'lucide-react';
import { SiInstagram, SiYoutube, SiFacebook, SiX, SiTiktok } from 'react-icons/si';

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Vision & Mission', href: '#vision' },
  { label: 'Meet the CEO', href: '#ceo' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Video Reels',
  'Poster Advertisements',
  'Crisis Campaign Management',
  'Landing Page Development',
  'Full Account Management',
];

const socials = [
  { icon: SiInstagram, label: 'Instagram', href: '#' },
  { icon: SiX, label: 'X', href: '#' },
  { icon: SiTiktok, label: 'TikTok', href: '#' },
  { icon: SiYoutube, label: 'YouTube', href: '#' },
  { icon: SiFacebook, label: 'Facebook', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'espirit-de-corps'
  );

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden border-t border-gold/15"
      style={{ background: 'oklch(0.08 0 0)' }}
    >
      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.78 0.14 85 / 50%), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-display text-2xl font-bold text-gold">Espirit</span>
              <br />
              <span className="font-heading text-xs font-semibold tracking-[0.25em] uppercase text-foreground/50">
                de corps
              </span>
            </div>
            <p className="font-sans text-sm text-foreground/45 leading-relaxed mb-6">
              The elite social media management agency behind the world's most powerful
              digital presences.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-sharp border border-gold/15 flex items-center justify-center text-foreground/40 hover:text-gold hover:border-gold/40 transition-colors"
                  style={{ background: 'oklch(0.13 0 0)' }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-xs font-bold tracking-widest uppercase text-gold/70 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-sans text-sm text-foreground/45 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-xs font-bold tracking-widest uppercase text-gold/70 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="font-sans text-sm text-foreground/45 hover:text-gold transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-heading text-xs font-bold tracking-widest uppercase text-gold/70 mb-5">
              Ready to Grow?
            </h4>
            <p className="font-sans text-sm text-foreground/45 leading-relaxed mb-5">
              Join the elite brands and celebrities who trust Espirit de corps with their
              digital presence.
            </p>
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-gold text-xs py-3 px-6 w-full"
            >
              Get Started Today
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-sans text-xs text-foreground/30">
            © {year} Espirit de corps. All rights reserved.
          </p>
          <p className="font-sans text-xs text-foreground/30 flex items-center gap-1.5">
            Built with{' '}
            <Heart size={12} className="text-gold fill-current" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
