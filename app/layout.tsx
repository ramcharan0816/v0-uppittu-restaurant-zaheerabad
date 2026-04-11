import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="EHQ8mx_rVWgL5kCryZgTAYUiK0I36q_92YuORjQf22E" />
      </Head>
      <h1>Uppittu Restaurant</h1>
    </>
  );
}
const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Uppittu — Authentic South Indian Cuisine | Zaheerabad',
  description: 'Experience authentic South Indian breakfast and snacks at Uppittu, Zaheerabad. From golden crispy Dosas to heartwarming Bisibele Bath — traditional recipes, fresh ingredients, 100% pure vegetarian.',
  keywords: ['South Indian food', 'Zaheerabad', 'Uppittu', 'Dosa', 'Idly', 'Karnataka cuisine', 'vegetarian restaurant'],
  openGraph: {
    title: 'Uppittu — Authentic South Indian Cuisine | Zaheerabad',
    description: 'Experience authentic South Indian breakfast and snacks at Uppittu, Zaheerabad.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased scroll-smooth">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
