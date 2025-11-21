import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Gaurav Patel - Product Engineer | MERN Stack Developer',
  description: 'Full Stack Engineer with 2+ years of experience building high-performance applications using React.js, Next.js, Node.js, and TypeScript. Specialized in creating scalable web solutions.',
  keywords: ['full-stack developer', 'mern stack', 'react', 'nextjs', 'nodejs', 'typescript', 'product engineer', 'gaurav patel', 'web developer', 'javascript', 'portfolio'],
  authors: [{ name: 'Gaurav Patel' }],
  openGraph: {
    title: 'Gaurav Patel - Product Engineer | MERN Stack Developer',
    description: 'Building high-performance, scalable applications with React, Next.js, and Node.js',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaurav Patel - Product Engineer',
    description: 'Building high-performance, scalable applications with modern web technologies',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
