import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'North Shore Cleaning Pros | Airbnb Turnover Specialists | Boston & North Shore MA',
  description: 'Professional Airbnb and vacation rental cleaning services in Greater Boston & North Shore. Same-day turnovers, photo documentation, backup cleaners. Trusted by 500+ hosts. Call 978-312-7711',
  keywords: 'Airbnb cleaning Newburyport, vacation rental cleaning North Shore, same-day turnover cleaning Boston, Airbnb cleaning service Massachusetts, short-term rental cleaning, Airbnb turnover Salem, VRBO cleaning Gloucester',
  openGraph: {
    title: 'North Shore Cleaning Pros - Airbnb Turnover Specialists',
    description: 'Same-day turnovers, photo documentation, backup cleaners. Trusted by 500+ Airbnb hosts across Greater Boston & North Shore.',
    type: 'website',
    locale: 'en_US',
    siteName: 'North Shore Cleaning Pros',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'North Shore Cleaning Pros - Airbnb Turnover Specialists',
    description: 'Professional Airbnb cleaning with same-day turnovers. Serving Greater Boston & North Shore.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}