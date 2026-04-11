export default function Home() {
  return (
    <div>
      <h1>Uppittu Restaurant in Zaheerabad</h1>
      <p>Best South Indian breakfast, dosa, idly, and meals in Zaheerabad.</p>

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
