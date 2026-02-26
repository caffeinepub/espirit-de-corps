import { useState, useEffect, useRef } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function ContactCTA() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setForm(initialForm);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-sharp border font-sans text-sm text-foreground placeholder-foreground/30 outline-none transition-all duration-200 focus:border-gold/60 focus:ring-1 focus:ring-gold/30 ${
      errors[field]
        ? 'border-red-500/50 bg-red-500/5'
        : 'border-gold/15 hover:border-gold/30'
    }`;

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-fade-in py-28 relative overflow-hidden"
      style={{ background: 'oklch(0.12 0 0)' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'oklch(0.78 0.14 85)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="section-label">Get In Touch</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="section-title mb-4">
            Ready to{' '}
            <span className="gold-text-gradient">Go Viral?</span>
          </h2>
          <p className="font-sans text-foreground/50 max-w-xl mx-auto">
            Let's build something extraordinary together. Tell us about your brand and
            we'll craft a strategy that makes you impossible to ignore.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* CTA Card */}
            <div
              className="relative rounded-sharp border border-gold/30 p-8 overflow-hidden"
              style={{ background: 'oklch(0.13 0 0)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: 'linear-gradient(90deg, oklch(0.78 0.14 85), oklch(0.88 0.12 95))' }}
              />
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Let's Work Together
              </h3>
              <p className="font-sans text-foreground/55 text-sm leading-relaxed mb-6">
                Whether you're a celebrity looking to grow your fanbase, a brand seeking
                viral campaigns, or an influencer ready to level up — we're here for you.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: 'Email Us',
                    value: 'saravana@espiritdecrops.com',
                    href: 'mailto:saravana@espiritdecrops.com',
                  },
                  {
                    icon: Phone,
                    label: 'Call Us',
                    value: '+91 7259145275',
                    href: 'tel:+917259145275',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Bangalore – All India Remote Available',
                    href: undefined,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-sharp flex items-center justify-center shrink-0 border border-gold/20"
                      style={{ background: 'oklch(0.78 0.14 85 / 10%)' }}
                    >
                      <Icon size={15} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-heading text-xs tracking-wider uppercase text-foreground/40 mb-0.5">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="font-sans text-sm text-foreground/70 hover:text-gold transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="font-sans text-sm text-foreground/70">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services quick links */}
            <div
              className="rounded-sharp border border-gold/15 p-6"
              style={{ background: 'oklch(0.13 0 0)' }}
            >
              <h4 className="font-heading text-xs font-bold tracking-widest uppercase text-gold/70 mb-4">
                Our Services
              </h4>
              <div className="space-y-2">
                {['Video Reels', 'Poster Advertisements', 'Crisis Campaign Management', 'Landing Page Development'].map(
                  (service) => (
                    <div key={service} className="flex items-center gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-gold/50" />
                      <span className="font-sans text-sm text-foreground/55">{service}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-sharp border border-gold/20 p-8 md:p-10"
              style={{ background: 'oklch(0.13 0 0)' }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border border-gold/30"
                    style={{ background: 'oklch(0.78 0.14 85 / 10%)' }}
                  >
                    <CheckCircle size={36} className="text-gold" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    Message Sent!
                  </h3>
                  <p className="font-sans text-foreground/55 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline-gold mt-8 text-xs py-3 px-8"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">
                    Start Your Journey
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label className="font-heading text-xs font-semibold tracking-wider uppercase text-foreground/50 mb-2 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass('name')}
                        style={{ background: 'oklch(0.16 0 0)' }}
                      />
                      {errors.name && (
                        <p className="font-sans text-xs text-red-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="font-heading text-xs font-semibold tracking-wider uppercase text-foreground/50 mb-2 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass('email')}
                        style={{ background: 'oklch(0.16 0 0)' }}
                      />
                      {errors.email && (
                        <p className="font-sans text-xs text-red-400 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {/* Phone */}
                    <div>
                      <label className="font-heading text-xs font-semibold tracking-wider uppercase text-foreground/50 mb-2 block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 7259145275"
                        className={inputClass('phone')}
                        style={{ background: 'oklch(0.16 0 0)' }}
                      />
                      {errors.phone && (
                        <p className="font-sans text-xs text-red-400 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label className="font-heading text-xs font-semibold tracking-wider uppercase text-foreground/50 mb-2 block">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={`${inputClass('service')} cursor-pointer`}
                        style={{ background: 'oklch(0.16 0 0)' }}
                      >
                        <option value="">Select a service</option>
                        <option value="reels">Video Reels</option>
                        <option value="posters">Poster Advertisements</option>
                        <option value="crisis">Crisis Campaign Management</option>
                        <option value="landing">Landing Page Development</option>
                        <option value="full">Full Account Management</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="font-heading text-xs font-semibold tracking-wider uppercase text-foreground/50 mb-2 block">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your brand, goals, and what you're looking to achieve..."
                      rows={5}
                      className={`${inputClass('message')} resize-none`}
                      style={{ background: 'oklch(0.16 0 0)' }}
                    />
                    {errors.message && (
                      <p className="font-sans text-xs text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold w-full text-sm py-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
