import { Leaf, ChefHat, Wallet, MapPin } from 'lucide-react';

const pillars = [
  {
    icon: Leaf,
    title: '100% Pure Vegetarian',
    subtitle: 'Always fresh, always veg',
  },
  {
    icon: ChefHat,
    title: 'Traditional Recipes',
    subtitle: 'Authentic Karnataka & Andhra flavours',
  },
  {
    icon: Wallet,
    title: 'Pocket-Friendly Prices',
    subtitle: 'Great food starting at ₹20',
  },
  {
    icon: MapPin,
    title: 'Proudly in Zaheerabad',
    subtitle: 'Serving our local community',
  },
];

export function AboutSection() {
  return (
    <section className="bg-primary py-14 px-[6%]" id="about">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        <div>
          <h2 className="font-serif text-[30px] text-primary-foreground mb-3.5">
            Where every morning feels like home
          </h2>
          <p className="text-[15px] text-primary-foreground/85 leading-relaxed">
            Uppittu is Zaheerabad&apos;s go-to South Indian breakfast destination. 
            We&apos;re dedicated to preserving the authentic flavours of Karnataka and 
            Andhra cuisine — from our signature Masala Uppittu to Day&apos;s Special Dosa — 
            all crafted with traditional recipes, fresh ingredients, and a whole lot of heart.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-primary-foreground/10 rounded-xl py-3.5 px-4.5 flex items-center gap-3.5"
            >
              <div className="text-xl min-w-8 text-center">
                <pillar.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <strong className="text-sm text-primary-foreground block font-medium">
                  {pillar.title}
                </strong>
                <span className="text-xs text-primary-foreground/70">
                  {pillar.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
