
import { Navbar } from '@/components/navbar1';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { MenuSection } from '@/components/menu-section';
import { WhySection } from '@/components/why-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div>
      <h1 className="sr-only">
  Uppittu Restaurant in Zaheerabad
</h1>

<p className="sr-only">
  Best South Indian breakfast, dosa, idly, and meals in Zaheerabad.
</p>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <WhySection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
