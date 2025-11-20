import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'North Shore Cleaning Pros | Trusted Home & Commercial Cleaning',
  description: 'Professional cleaning services in Newburyport, MA. Eco-friendly, insured & bonded. Home cleaning, commercial cleaning, deep cleaning. Get your free estimate today!',
  keywords: 'cleaning service Newburyport, home cleaning, commercial cleaning, deep cleaning, move out cleaning, carpet cleaning, eco-friendly cleaning',
  openGraph: {
    title: 'North Shore Cleaning Pros',
    description: 'Trusted partner for sparkling clean homes and businesses',
    type: 'website',
    locale: 'en_US',
    siteName: 'North Shore Cleaning Pros',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}