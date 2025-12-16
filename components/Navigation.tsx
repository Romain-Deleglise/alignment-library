'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Book, Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import ThemeToggle from './ThemeToggle'
import SearchBar from './SearchBar'
import LanguageSelector from './LanguageSelector'

// Structure du contenu avec slugs uniquement
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

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>(['introduction'])
  const pathname = usePathname()
  const t = useTranslations('navigation')
  const locale = useLocale()

  const toggleSection = (slug: string) => {
    setExpandedSections(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    )
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Toggle - Improved positioning */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] p-2.5 bg-background border-2 border-border rounded-lg shadow-lg hover:shadow-xl transition-all"
        aria-label={t('toggleMenu')}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-80 bg-background border-r
          overflow-y-auto z-50 lg:z-auto transition-transform duration-300 shadow-2xl lg:shadow-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="p-6 border-b">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 group"
            onClick={closeMenu}
          >
            <Book className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <div>
              <h1 className="text-xl font-bold group-hover:text-primary transition-colors">
                {t('title')}
              </h1>
              <p className="text-sm text-muted-foreground">{t('subtitle')}</p>
            </div>
          </Link>
          <div className="mt-4 flex gap-2">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b">
          <SearchBar />
        </div>

        {/* Navigation */}
        <nav className="p-4 pb-8">
          {navStructureBase.map((section) => (
            <div key={section.slug} className="mb-2">
              <button
                onClick={() => toggleSection(section.slug)}
                className="flex items-center justify-between w-full p-2 hover:bg-muted rounded-lg text-left transition-colors group"
              >
                <span className="font-semibold group-hover:text-primary transition-colors">
                  {t(`sections.${section.key}.title`)}
                </span>
                {expandedSections.includes(section.slug) ? (
                  <ChevronDown className="w-4 h-4 transition-transform" />
                ) : (
                  <ChevronRight className="w-4 h-4 transition-transform" />
                )}
              </button>

              {expandedSections.includes(section.slug) && (
                <div className="ml-4 mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                  {section.items.map((item: any) => (
                    <div key={item.slug}>
                      {item.subitems ? (
                        <div>
                          <div className="p-2 text-sm font-medium text-muted-foreground">
                            {t(`sections.${section.key}.${item.key}.title`)}
                          </div>
                          <div className="ml-4 space-y-1">
                            {item.subitems.map((subitem: any) => (
                              <Link
                                key={subitem.slug}
                                href={`/${locale}/${section.slug}/${item.slug}/${subitem.slug}`}
                                onClick={closeMenu}
                                className={`block p-2 text-sm rounded hover:bg-muted transition-all ${
                                  pathname === `/${locale}/${section.slug}/${item.slug}/${subitem.slug}`
                                    ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary pl-3'
                                    : 'hover:pl-3 hover:border-l-2 hover:border-muted-foreground/30'
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
                          className={`block p-2 text-sm rounded hover:bg-muted transition-all ${
                            pathname === `/${locale}/${section.slug}/${item.slug}`
                              ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary pl-3'
                              : 'hover:pl-3 hover:border-l-2 hover:border-muted-foreground/30'
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
        </nav>
      </aside>

      {/* Overlay (mobile) */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-200"
        />
      )}
    </>
  )
}
