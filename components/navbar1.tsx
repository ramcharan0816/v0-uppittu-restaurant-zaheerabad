'use client';

import { useState } from 'react';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#why', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-card border-b border-border px-[6%] flex items-center justify-between h-16 sticky top-0 z-50">
      <Link href="/" className="font-serif text-[22px] font-bold">
        <span className="text-primary">Uppi</span>
        <span className="text-foreground">ttu</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-7 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Button
        onClick={scrollToMenu}
        className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-5 py-2 text-[13px] font-medium"
      >
        View Menu
      </Button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6 text-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-foreground" />
        )}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-card border-b border-border p-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            onClick={scrollToMenu}
            className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
          >
            View Menu
          </Button>
        </div>
      )}
    </nav>
  );
}
