'use client'

import Link from 'next/link'
import { Book, Github, ExternalLink, ArrowUp } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { useState, useEffect } from 'react'

export default function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t mt-20 bg-gradient-to-b from-background to-muted/20">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Book className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                The Alignment Library
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {t('description')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Romain-Deleglise/alignment-library"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-foreground/80">
              {t('getStarted')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href={`/${locale}/introduction/what-is-alignment`}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all" />
                  {t('links.whatIsAlignment')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/introduction/why-urgent`}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all" />
                  {t('links.whyUrgent')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/resources/reading-lists`}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all" />
                  {t('links.readingLists')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/resources/communities`}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all" />
                  {t('links.communities')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Sections */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-foreground/80">
              {t('sections')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href={`/${locale}/problems/outer-alignment/specification`}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all" />
                  {t('links.fundamentalProblems')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/solutions/rlhf`}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all" />
                  {t('links.proposedSolutions')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/concepts/technical`}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all" />
                  {t('links.keyConcepts')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/organizations/miri`}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all" />
                  {t('links.organizations')}
                </Link>
              </li>
            </ul>
          </div>

          {/* External Resources */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-foreground/80">
              {t('resources')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.alignmentforum.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                  Alignment Forum
                </a>
              </li>
              <li>
                <a
                  href="https://www.lesswrong.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                  LessWrong
                </a>
              </li>
              <li>
                <a
                  href="https://intelligence.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                  MIRI
                </a>
              </li>
              <li>
                <a
                  href="https://www.anthropic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                  Anthropic
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center sm:text-left">
            {t('copyright')}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Romain-Deleglise/alignment-library"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  )
}
