import Link from 'next/link';

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a18] py-11 px-[6%]">
      <div className="max-w-[1140px] mx-auto flex justify-between items-center flex-wrap gap-5">
        <div>
          <div className="font-serif text-xl font-bold">
            <span className="text-primary">Uppi</span>
            <span className="text-[#888780]">ttu</span>
          </div>
          <div className="text-xs text-[#5F5E5A] mt-1.5">
            Authentic South Indian cuisine · Zaheerabad, Telangana
          </div>
        </div>

        <div className="flex gap-5">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-[#5F5E5A] hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto mt-6 pt-5 border-t border-[#2C2C2A] text-xs text-[#444441] text-center">
        © 2026 Uppittu Restaurant, Zaheerabad. All rights reserved. · Parcel charges extra as applicable.
      </div>
    </footer>
  );
}
