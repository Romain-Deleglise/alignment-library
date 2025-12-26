import '../globals.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import TopNavigation from '@/components/TopNavigation'
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
  params,
}: Props) {
  const { locale } = params;

  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Load messages
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className="min-h-screen font-sans antialiased">
          {/* Top Navigation */}
          <TopNavigation />

          {/* Main Content */}
          <main className="w-full">
            {children}
            <Footer />
          </main>
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
