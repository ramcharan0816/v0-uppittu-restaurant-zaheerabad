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
