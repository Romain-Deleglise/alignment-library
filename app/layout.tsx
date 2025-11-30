import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'The Alignment Library',
  description: 'Comprehensive knowledge base on AI Alignment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="flex min-h-screen">
            {/* Sidebar Navigation */}
            <Navigation />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
              <div className="container mx-auto px-4 py-8 max-w-4xl">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
