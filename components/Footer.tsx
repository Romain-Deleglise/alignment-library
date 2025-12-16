'use client'

import Link from 'next/link'
import { Book, Github } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()

  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Book className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">The Alignment Library</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('getStarted')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/introduction/what-is-alignment`} className="text-muted-foreground hover:text-primary transition">
                  {t('links.whatIsAlignment')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/introduction/why-urgent`} className="text-muted-foreground hover:text-primary transition">
                  {t('links.whyUrgent')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/resources/reading-lists`} className="text-muted-foreground hover:text-primary transition">
                  {t('links.readingLists')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/resources/communities`} className="text-muted-foreground hover:text-primary transition">
                  {t('links.communities')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Sections */}
          <div>
            <h3 className="font-semibold mb-4">{t('sections')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/problems/outer-alignment/specification`} className="text-muted-foreground hover:text-primary transition">
                  {t('links.fundamentalProblems')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/solutions/rlhf`} className="text-muted-foreground hover:text-primary transition">
                  {t('links.proposedSolutions')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/concepts/technical`} className="text-muted-foreground hover:text-primary transition">
                  {t('links.keyConcepts')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/organizations/miri`} className="text-muted-foreground hover:text-primary transition">
                  {t('links.organizations')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h3 className="font-semibold mb-4">{t('resources')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.alignmentforum.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Alignment Forum
                </a>
              </li>
              <li>
                <a
                  href="https://www.lesswrong.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  LessWrong
                </a>
              </li>
              <li>
                <a
                  href="https://intelligence.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  MIRI
                </a>
              </li>
              <li>
                <a
                  href="https://www.anthropic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Anthropic
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            {t('copyright')}
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Romain-Deleglise/alignment-library"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
