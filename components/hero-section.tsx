'use client';

import { MapPin, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative py-20 md:py-32 px-[6%] bg-cover bg-center bg-no-repeat"
      id="home"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Dark overlay so text stays readable over the photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />

      <div className="relative z-10 max-w-[1140px] mx-auto">
        <div className="max-w-[640px]">
          <div className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium py-1.5 px-3.5 rounded-full mb-5 backdrop-blur-sm border border-white/20">
            <Utensils className="h-3.5 w-3.5" />
            Authentic South Indian Cuisine
          </div>

          <h1 className="font-serif text-3xl md:text-[46px] leading-tight text-white mb-4">
            The soul of Karnataka, served fresh in{' '}
            <em className="text-primary">Zaheerabad.</em>
          </h1>

          <p className="text-[15px] leading-relaxed text-white/85 mb-3">
            From golden crispy Dosas to heartwarming Bisibele Bath — Uppittu brings you
            time-honoured South Indian breakfast and snack traditions, crafted fresh every day.
          </p>

          <div className="inline-flex items-center gap-1.5 text-[13px] text-white/80 mb-7">
            <MapPin className="h-4 w-4" />
            Zaheerabad, Telangana
          </div>

          <div className="flex gap-3 flex-wrap mb-10">
            <Button
              onClick={() => scrollToSection('menu')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-[10px] text-[15px] font-medium h-auto"
            >
              Explore Menu
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded-[10px] text-[15px] font-medium h-auto bg-transparent"
            >
              Visit Us
            </Button>
          </div>

          <div className="flex gap-7">
            <div className="text-center sm:text-left">
              <div className="font-serif text-2xl font-bold text-white">40+</div>
              <div className="text-[11px] text-white/70 mt-0.5">Menu items</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-serif text-2xl font-bold text-white">₹20</div>
              <div className="text-[11px] text-white/70 mt-0.5">Starting price</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-serif text-2xl font-bold text-white">100%</div>
              <div className="text-[11px] text-white/70 mt-0.5">Pure veg</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
