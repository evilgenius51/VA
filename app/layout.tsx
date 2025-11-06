import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Velocity Advisory - 30-Day Playbooks for Business Growth',
  description: 'Transform your business in 30 days with our proven playbooks. Expert consulting packages from £149. Get actionable strategies for rapid growth.',
  keywords: 'business consulting, growth playbook, business strategy, 30-day plan, business advisory',
  openGraph: {
    title: 'Velocity Advisory - 30-Day Playbooks',
    description: 'Transform your business in 30 days with our proven playbooks.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velocity Advisory - 30-Day Playbooks',
    description: 'Transform your business in 30 days with our proven playbooks.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
