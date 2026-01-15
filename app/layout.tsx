import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ETF Administration Agent',
  description: 'AI-powered ETF administration and management assistant',
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
