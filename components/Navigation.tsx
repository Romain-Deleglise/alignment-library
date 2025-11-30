'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Book, Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import SearchBar from './SearchBar'

// Structure du contenu
const navStructure = [
  {
    title: 'Introduction',
    slug: 'introduction',
    items: [
      { title: "Qu'est-ce que l'AI Alignment ?", slug: 'what-is-alignment' },
      { title: "Pourquoi c'est urgent ?", slug: 'why-urgent' },
      { title: 'État actuel (2024)', slug: 'current-state' },
    ],
  },
  {
    title: 'Problèmes Fondamentaux',
    slug: 'problems',
    items: [
      {
        title: 'Outer Alignment',
        slug: 'outer-alignment',
        subitems: [
          { title: 'Specification Problem', slug: 'specification' },
          { title: "Goodhart's Law", slug: 'goodhart' },
          { title: 'Reward Hacking', slug: 'reward-hacking' },
        ],
      },
      {
        title: 'Inner Alignment',
        slug: 'inner-alignment',
        subitems: [
          { title: 'Mesa-Optimization', slug: 'mesa-optimization' },
          { title: 'Deceptive Alignment', slug: 'deceptive' },
          { title: 'Proxy Alignment', slug: 'proxy' },
        ],
      },
      {
        title: 'Autres Problèmes',
        slug: 'other',
        subitems: [
          { title: 'Corrigibility', slug: 'corrigibility' },
          { title: 'Scalable Oversight', slug: 'scalable-oversight' },
          { title: 'Distributional Shift', slug: 'distributional-shift' },
          { title: 'Instrumental Convergence', slug: 'instrumental-convergence' },
          { title: 'Treacherous Turn', slug: 'treacherous-turn' },
        ],
      },
    ],
  },
  {
    title: 'Solutions Proposées',
    slug: 'solutions',
    items: [
      { title: 'RLHF', slug: 'rlhf' },
      { title: 'Constitutional AI', slug: 'constitutional-ai' },
      { title: 'Debate', slug: 'debate' },
      { title: 'Iterated Amplification', slug: 'iterated-amplification' },
      { title: 'Mechanistic Interpretability', slug: 'interpretability' },
      { title: 'ELK', slug: 'elk' },
    ],
  },
  {
    title: 'Concepts Clés',
    slug: 'concepts',
    items: [
      { title: 'Techniques', slug: 'technical' },
      { title: 'Philosophiques', slug: 'philosophical' },
    ],
  },
  {
    title: 'Organisations & Chercheurs',
    slug: 'organizations',
    items: [
      { title: 'MIRI', slug: 'miri' },
      { title: 'Anthropic', slug: 'anthropic' },
      { title: 'OpenAI Safety', slug: 'openai' },
      { title: 'Chercheurs Clés', slug: 'researchers' },
    ],
  },
  {
    title: 'Ressources',
    slug: 'resources',
    items: [
      { title: 'Reading Lists', slug: 'reading-lists' },
      { title: 'Papers', slug: 'papers' },
      { title: 'Videos & Podcasts', slug: 'videos' },
      { title: 'Communautés', slug: 'communities' },
    ],
  },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>(['introduction'])
  const pathname = usePathname()

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
        aria-label="Toggle menu"
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
            href="/"
            className="flex items-center gap-3 group"
            onClick={closeMenu}
          >
            <Book className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <div>
              <h1 className="text-xl font-bold group-hover:text-primary transition-colors">
                The Alignment Library
              </h1>
              <p className="text-sm text-muted-foreground">AI Alignment Knowledge Base</p>
            </div>
          </Link>
          <div className="mt-4 flex gap-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b">
          <SearchBar />
        </div>

        {/* Navigation */}
        <nav className="p-4 pb-8">
          {navStructure.map((section) => (
            <div key={section.slug} className="mb-2">
              <button
                onClick={() => toggleSection(section.slug)}
                className="flex items-center justify-between w-full p-2 hover:bg-muted rounded-lg text-left transition-colors group"
              >
                <span className="font-semibold group-hover:text-primary transition-colors">
                  {section.title}
                </span>
                {expandedSections.includes(section.slug) ? (
                  <ChevronDown className="w-4 h-4 transition-transform" />
                ) : (
                  <ChevronRight className="w-4 h-4 transition-transform" />
                )}
              </button>

              {expandedSections.includes(section.slug) && (
                <div className="ml-4 mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                  {section.items.map((item) => (
                    <div key={item.slug}>
                      {/* @ts-ignore */}
                      {item.subitems ? (
                        <div>
                          <div className="p-2 text-sm font-medium text-muted-foreground">
                            {item.title}
                          </div>
                          <div className="ml-4 space-y-1">
                            {/* @ts-ignore */}
                            {item.subitems.map((subitem) => (
                              <Link
                                key={subitem.slug}
                                href={`/${section.slug}/${item.slug}/${subitem.slug}`}
                                onClick={closeMenu}
                                className={`block p-2 text-sm rounded hover:bg-muted transition-all ${
                                  pathname === `/${section.slug}/${item.slug}/${subitem.slug}`
                                    ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary pl-3'
                                    : 'hover:pl-3 hover:border-l-2 hover:border-muted-foreground/30'
                                }`}
                              >
                                {subitem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={`/${section.slug}/${item.slug}`}
                          onClick={closeMenu}
                          className={`block p-2 text-sm rounded hover:bg-muted transition-all ${
                            pathname === `/${section.slug}/${item.slug}`
                              ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary pl-3'
                              : 'hover:pl-3 hover:border-l-2 hover:border-muted-foreground/30'
                          }`}
                        >
                          {item.title}
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
