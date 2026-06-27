'use client';

import { MapPin, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-[72px] px-[6%] max-w-[1140px] mx-auto" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-7 lg:gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-xs font-medium py-1.5 px-3.5 rounded-full mb-5">
            <Utensils className="h-3.5 w-3.5" />
            Authentic South Indian Cuisine
          </div>
          
          <h1 className="font-serif text-3xl md:text-[46px] leading-tight text-foreground mb-4">
            The soul of Karnataka, served fresh in{' '}
            <em className="text-primary">Zaheerabad.</em>
          </h1>
          
          <p className="text-[15px] leading-relaxed text-muted-foreground mb-3">
            From golden crispy Dosas to heartwarming Bisibele Bath — Uppittu brings you 
            time-honoured South Indian breakfast and snack traditions, crafted fresh every day.
          </p>
          
          <div className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground mb-7">
            <MapPin className="h-4 w-4" />
            Zaheerabad, Telangana
          </div>
          
          <div className="flex gap-3 flex-wrap">
            <Button
              onClick={() => scrollToSection('menu')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-[10px] text-[15px] font-medium h-auto"
            >
              Explore Menu
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-primary text-primary hover:bg-accent px-6 py-3 rounded-[10px] text-[15px] font-medium h-auto"
            >
              Visit Us
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#FFF5EE] to-[#FDEBD8] rounded-3xl p-9 min-h-[340px] flex flex-col items-center justify-center text-center gap-3.5 relative overflow-hidden">
          <div className="absolute w-[180px] h-[180px] bg-primary/10 rounded-full -bottom-[60px] -right-[60px]" />
          
          <div className="text-5xl flex gap-2.5 relative z-10">
            <span role="img" aria-label="bowl">🥣</span>
            <span role="img" aria-label="curry">🍛</span>
            <span role="img" aria-label="coffee">☕</span>
          </div>
          
          <h3 className="font-serif text-[17px] text-foreground relative z-10">
            Home-style. Freshly Made.
          </h3>
          
          <p className="text-[13px] text-muted-foreground relative z-10">
            Pure veg · Traditional recipes · Affordable
          </p>
          
          <div className="flex gap-7 mt-2 relative z-10">
            <div className="text-center">
              <div className="font-serif text-2xl font-bold text-primary">40+</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">Menu items</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl font-bold text-primary">₹20</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">Starting price</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl font-bold text-primary">100%</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">Pure veg</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
