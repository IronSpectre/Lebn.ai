import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  title: 'Lebn.ai - Your AI Health Companion',
  description: 'Chat naturally about symptoms, upload photos, and get GP-ready summaries. Trusted by patients, NHS GPs, private practices, and care homes.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="pt-28 md:pt-36">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}