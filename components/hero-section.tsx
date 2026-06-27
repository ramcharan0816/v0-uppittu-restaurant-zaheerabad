'use client';

import { MapPin, Utensils, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative py-24 md:py-36 px-[6%] bg-cover bg-center bg-no-repeat overflow-hidden"
      id="home"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Dark overlay so text stays readable over the photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
      {/* Ember glow accent, bottom-left */}
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1140px] mx-auto">
        <div className="max-w-[640px]">
          <div className="inline-flex items-center gap-1.5 bg-white/5 text-accent text-xs font-medium py-1.5 px-3.5 rounded-full mb-5 backdrop-blur-sm border border-white/15 uppercase tracking-wider">
            <Utensils className="h-3.5 w-3.5" />
            Authentic South Indian Cuisine
          </div>

          <h1 className="font-serif text-4xl md:text-[52px] leading-[1.1] text-white mb-4 font-medium">
            The soul of Karnataka,
            <br />
            served fresh in{' '}
            <em className="text-primary not-italic font-semibold text-glow">
              Zaheerabad.
            </em>
          </h1>

          <p className="text-[15px] leading-relaxed text-white/75 mb-3 max-w-md">
            From golden crispy Dosas to heartwarming Bisibele Bath — Uppittu brings you
            time-honoured South Indian breakfast and snack traditions, crafted fresh every day.
          </p>

          <div className="inline-flex items-center gap-1.5 text-[13px] text-white/60 mb-8 uppercase tracking-wider">
            <MapPin className="h-4 w-4" />
            Zaheerabad, Telangana
          </div>

          <div className="flex gap-3 flex-wrap mb-12">
            <div className="ember-glow is-active rounded-[10px]">
              <Button
                onClick={() => scrollToSection('menu')}
                className="relative bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-3 rounded-[10px] text-[14px] font-semibold h-auto uppercase tracking-wide"
              >
                Explore Menu
              </Button>
            </div>
            <a href="tel:+919999999999">
              <Button
                variant="outline"
                className="border-white/25 text-white hover:bg-white/10 px-7 py-3 rounded-[10px] text-[14px] font-semibold h-auto bg-transparent uppercase tracking-wide gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Status-readout style stats */}
          <div className="flex gap-8 border-t border-white/10 pt-6">
            <div>
              <div className="font-mono text-2xl font-bold text-accent">40+</div>
              <div className="text-[11px] text-white/50 mt-0.5 uppercase tracking-wider">
                Menu items
              </div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-accent">₹20</div>
              <div className="text-[11px] text-white/50 mt-0.5 uppercase tracking-wider">
                Starting price
              </div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-accent">100%</div>
              <div className="text-[11px] text-white/50 mt-0.5 uppercase tracking-wider">
                Pure veg
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
