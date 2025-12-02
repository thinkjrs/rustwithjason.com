import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Rust With Jason',
  description:
    'Learn Rust — from fundamentals to advanced concepts. Practical, hands-on guides and examples for Rustaceans of all levels.',
  openGraph: {
    title: 'Rust With Jason',
    description:
      'Learn Rust — from fundamentals to advanced concepts. Practical, hands-on guides and examples for Rustaceans of all levels.',
    url: 'https://rustwithjason.com',
    siteName: 'Rust With Jason',
    images: [
      {
        url: '/og.webp',
        width: 1200,
        height: 630,
        alt: 'Rust With Jason — Learn Rust',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rust With Jason',
    description:
      'Learn Rust — from fundamentals to advanced concepts. Practical, hands-on guides and examples for Rustaceans of all levels.',
    images: ['/og.webp'],
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
      )}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
