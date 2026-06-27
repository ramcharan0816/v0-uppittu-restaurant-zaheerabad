import { MapPin, Clock, Leaf, Package } from 'lucide-react';

const todaysSpecials = [
  { name: "Day's Special Dosa", price: '₹90' },
  { name: "Day's Special Uppittu", price: '₹50' },
  { name: 'Poori Meals', price: '₹99' },
  { name: 'Akki Rotti Meals', price: '₹99' },
  { name: 'Ragi Rotti Meals', price: '₹99' },
  { name: 'Bisibele Bath', price: '₹60' },
];

export function ContactSection() {
  return (
    <section className="py-16 md:py-[72px] px-[6%]" id="contact">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
        <div>
          <h2 className="font-serif text-[30px] text-foreground mb-4.5">
            Find Us in Zaheerabad
          </h2>

          <div className="flex gap-3.5 items-start mb-5">
            <MapPin className="h-4.5 w-4.5 mt-0.5 min-w-6 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wider">
                Address
              </div>
              <div className="text-[15px] text-foreground leading-normal">
                Uppittu Restaurant
                <br />
                Dattagiri Colony, Zaheerabad, Telangana, India
              </div>
            </div>
          </div>

          <div className="flex gap-3.5 items-start mb-5">
            <Clock className="h-4.5 w-4.5 mt-0.5 min-w-6 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wider">
                Hours
              </div>
              <div className="text-[15px] text-foreground leading-normal">
                Open daily — Breakfast & Snack hours
              </div>
            </div>
          </div>

          <div className="flex gap-3.5 items-start mb-5">
            <Leaf className="h-4.5 w-4.5 mt-0.5 min-w-6 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wider">
                Cuisine
              </div>
              <div className="text-[15px] text-foreground leading-normal">
                South Indian · Karnataka · Andhra
                <br />
                100% Pure Vegetarian
              </div>
            </div>
          </div>

          <div className="flex gap-3.5 items-start">
            <Package className="h-4.5 w-4.5 mt-0.5 min-w-6 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wider">
                Parcel
              </div>
              <div className="text-[15px] text-foreground leading-normal">
                Available — extra charges applicable
              </div>
            </div>
          </div>
        </div>

        <div className="bg-accent rounded-2xl p-7">
          <h4 className="font-serif text-lg text-primary mb-4.5">
            Today&apos;s Specials
          </h4>

          {todaysSpecials.map((item, index) => (
            <div
              key={item.name}
              className={`flex justify-between py-2.5 text-sm ${
                index !== todaysSpecials.length - 1 ? 'border-b border-primary/10' : ''
              }`}
            >
              <span className="text-secondary-foreground">{item.name}</span>
              <strong className="text-foreground font-medium">{item.price}</strong>
            </div>
          ))}

          <p className="mt-4 text-xs text-muted-foreground">
            Parcel charges will be extra as applicable
          </p>
        </div>
      </div>
    </section>
  );
}
