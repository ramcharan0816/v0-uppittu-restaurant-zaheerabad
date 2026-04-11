import { Utensils, Heart, Coins, Coffee, Home, Package } from 'lucide-react';

const whyCards = [
  {
    icon: Utensils,
    title: 'Authentic Flavours',
    description: 'Recipes rooted in South Indian culinary tradition — no shortcuts, ever.',
  },
  {
    icon: Heart,
    title: '100% Vegetarian',
    description: 'A completely pure veg menu, freshly prepared each morning with care.',
  },
  {
    icon: Coins,
    title: 'Value for Money',
    description: 'Wholesome meals and snacks that are light on the pocket, rich in taste.',
  },
  {
    icon: Coffee,
    title: 'Perfect Beverages',
    description: 'Filter Coffee, Ginger Tea, Badam Milk — the ideal companions to your meal.',
  },
  {
    icon: Home,
    title: 'Warm Atmosphere',
    description: 'A cozy, welcoming space that feels just like a home kitchen.',
  },
  {
    icon: Package,
    title: 'Parcel Available',
    description: "Can't dine in? Take your favourite dishes home — parcel service available.",
  },
];

export function WhySection() {
  return (
    <section className="bg-muted py-16 md:py-[72px] px-[6%]" id="why">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center">
          <div className="text-[11px] font-medium text-primary tracking-[1.5px] uppercase mb-2">
            Why Uppittu
          </div>
          <div className="font-serif text-[34px] text-foreground mb-1.5">
            The Uppittu Difference
          </div>
          <div className="text-[15px] text-muted-foreground mb-10">
            Why Zaheerabad loves us
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {whyCards.map((card) => (
            <div
              key={card.title}
              className="bg-card rounded-2xl py-6.5 px-5 text-center border border-border"
            >
              <div className="text-3xl mb-3 flex justify-center">
                <card.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-sm font-medium text-foreground mb-2">
                {card.title}
              </h4>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
