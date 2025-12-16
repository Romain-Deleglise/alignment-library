import '../globals.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { locales } from '@/i18n'

export const metadata: Metadata = {
  title: 'The Alignment Library',
  description: 'Comprehensive knowledge base on AI Alignment',
}

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className="flex min-h-screen font-sans antialiased">
          {/* Sidebar Navigation */}
          <Navigation />

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto px-4 py-8">
              {children}
            </div>
            <Footer />
          </main>
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
