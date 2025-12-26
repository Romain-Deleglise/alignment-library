'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Book, Menu, X, ChevronDown } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import ThemeToggle from './ThemeToggle'
import SearchBar from './SearchBar'
import LanguageSelector from './LanguageSelector'

const navStructureBase = [
  {
    key: 'introduction',
    slug: 'introduction',
    items: [
      { key: 'whatIsAlignment', slug: 'what-is-alignment' },
      { key: 'whyUrgent', slug: 'why-urgent' },
      { key: 'currentState', slug: 'current-state' },
    ],
  },
  {
    key: 'problems',
    slug: 'problems',
    items: [
      {
        key: 'outerAlignment',
        slug: 'outer-alignment',
        subitems: [
          { key: 'specification', slug: 'specification' },
          { key: 'goodhart', slug: 'goodhart' },
          { key: 'rewardHacking', slug: 'reward-hacking' },
        ],
      },
      {
        key: 'innerAlignment',
        slug: 'inner-alignment',
        subitems: [
          { key: 'mesaOptimization', slug: 'mesa-optimization' },
          { key: 'deceptive', slug: 'deceptive' },
          { key: 'proxy', slug: 'proxy' },
        ],
      },
      {
        key: 'other',
        slug: 'other',
        subitems: [
          { key: 'corrigibility', slug: 'corrigibility' },
          { key: 'scalableOversight', slug: 'scalable-oversight' },
          { key: 'distributionalShift', slug: 'distributional-shift' },
          { key: 'instrumentalConvergence', slug: 'instrumental-convergence' },
          { key: 'treacherousTurn', slug: 'treacherous-turn' },
        ],
      },
    ],
  },
  {
    key: 'solutions',
    slug: 'solutions',
    items: [
      { key: 'rlhf', slug: 'rlhf' },
      { key: 'constitutionalAi', slug: 'constitutional-ai' },
      { key: 'debate', slug: 'debate' },
      { key: 'iteratedAmplification', slug: 'iterated-amplification' },
      { key: 'interpretability', slug: 'interpretability' },
      { key: 'elk', slug: 'elk' },
    ],
  },
  {
    key: 'concepts',
    slug: 'concepts',
    items: [
      { key: 'technical', slug: 'technical' },
      { key: 'philosophical', slug: 'philosophical' },
    ],
  },
  {
    key: 'organizations',
    slug: 'organizations',
    items: [
      { key: 'miri', slug: 'miri' },
      { key: 'anthropic', slug: 'anthropic' },
      { key: 'openai', slug: 'openai' },
      { key: 'researchers', slug: 'researchers' },
    ],
  },
  {
    key: 'resources',
    slug: 'resources',
    items: [
      { key: 'readingLists', slug: 'reading-lists' },
      { key: 'papers', slug: 'papers' },
      { key: 'videos', slug: 'videos' },
      { key: 'communities', slug: 'communities' },
    ],
  },
]

export default function TopNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const t = useTranslations('navigation')
  const locale = useLocale()

  const closeMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 group hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <Book className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg hidden sm:inline">{t('title')}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navStructureBase.map((section) => (
              <div
                key={section.slug}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(section.slug)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                  {t(`sections.${section.key}.title`)}
                  <ChevronDown className="w-3 h-3 inline ml-1" />
                </button>

                {/* Dropdown */}
                {openDropdown === section.slug && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-lg shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {section.items.map((item: any) => (
                      <div key={item.slug}>
                        {item.subitems ? (
                          <div>
                            <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                              {t(`sections.${section.key}.${item.key}.title`)}
                            </div>
                            {item.subitems.map((subitem: any) => (
                              <Link
                                key={subitem.slug}
                                href={`/${locale}/${section.slug}/${item.slug}/${subitem.slug}`}
                                onClick={closeMenu}
                                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                              >
                                {t(`sections.${section.key}.${item.key}.${subitem.key}`)}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <Link
                            href={`/${locale}/${section.slug}/${item.slug}`}
                            onClick={closeMenu}
                            className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                          >
                            {t(`sections.${section.key}.items.${item.key}`)}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block w-48">
              <SearchBar />
            </div>
            <ThemeToggle />
            <LanguageSelector />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <SearchBar />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {navStructureBase.map((section) => (
              <div key={section.slug} className="border-b border-border pb-4 last:border-0">
                <button
                  onClick={() => setOpenDropdown(openDropdown === section.slug ? null : section.slug)}
                  className="flex items-center justify-between w-full px-3 py-2 font-semibold hover:bg-muted rounded-lg transition-colors"
                >
                  {t(`sections.${section.key}.title`)}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === section.slug ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openDropdown === section.slug && (
                  <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    {section.items.map((item: any) => (
                      <div key={item.slug}>
                        {item.subitems ? (
                          <div>
                            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                              {t(`sections.${section.key}.${item.key}.title`)}
                            </div>
                            <div className="ml-3 space-y-1">
                              {item.subitems.map((subitem: any) => (
                                <Link
                                  key={subitem.slug}
                                  href={`/${locale}/${section.slug}/${item.slug}/${subitem.slug}`}
                                  onClick={closeMenu}
                                  className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                                    pathname === `/${locale}/${section.slug}/${item.slug}/${subitem.slug}`
                                      ? 'bg-primary/10 text-primary font-medium'
                                      : 'hover:bg-muted'
                                  }`}
                                >
                                  {t(`sections.${section.key}.${item.key}.${subitem.key}`)}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={`/${locale}/${section.slug}/${item.slug}`}
                            onClick={closeMenu}
                            className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                              pathname === `/${locale}/${section.slug}/${item.slug}`
                                ? 'bg-primary/10 text-primary font-medium'
                                : 'hover:bg-muted'
                            }`}
                          >
                            {t(`sections.${section.key}.items.${item.key}`)}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
