import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rishi Raj Manglesh',
  description:
    'Founder, author, and researcher. Solve First. Automate Later. Oslo · Delhi.',
  openGraph: {
    title: 'Rishi Raj Manglesh',
    description: 'Solve First. Automate Later.',
    url: 'https://rishirajmanglesh.com',
    siteName: 'Rishi Raj Manglesh',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rishi Raj Manglesh',
    description: 'Solve First. Automate Later.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
