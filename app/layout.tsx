import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Uppittu — Authentic South Indian Cuisine | Zaheerabad',
  description: 'Experience authentic South Indian breakfast and snacks at Uppittu, Zaheerabad.',
  keywords: ['South Indian food', 'Zaheerabad', 'Uppittu'],
  verification: {
    google: 'EHQ8mx_rVWgL5kCryZgTAYUiK0I36q_92YuORjQf22E',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased scroll-smooth">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
