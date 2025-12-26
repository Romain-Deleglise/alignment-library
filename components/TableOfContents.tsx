'use client'

import { useEffect, useState } from 'react'
import { List, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

type Heading = {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false)
  const t = useTranslations('tableOfContents')

  useEffect(() => {
    // Extract headings from the article
    const elements = Array.from(document.querySelectorAll('article h2, article h3'))
    const headingData: Heading[] = elements.map((elem) => ({
      id: elem.id,
      text: elem.textContent || '',
      level: Number(elem.tagName.charAt(1)),
    }))
    setHeadings(headingData)

    // Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66% 0px' }
    )

    elements.forEach((elem) => observer.observe(elem))
    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) return null

  return (
    <>
      {/* Mobile TOC Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label={t('ariaLabel')}
      >
        <List className="w-5 h-5" />
      </button>

      {/* Desktop TOC - Collapsible */}
      <aside
        className={`hidden lg:block sticky top-24 transition-all duration-300 ${
          isDesktopCollapsed ? 'w-12' : 'w-56'
        }`}
      >
        <div className="bg-muted/30 border border-border rounded-xl overflow-hidden">
          {/* Desktop Header with Collapse Button */}
          <button
            onClick={() => setIsDesktopCollapsed(!isDesktopCollapsed)}
            className="w-full p-3 flex items-center justify-between hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <List className="w-4 h-4 flex-shrink-0" />
              {!isDesktopCollapsed && (
                <h3 className="text-sm font-semibold">{t('title')}</h3>
              )}
            </div>
            <ChevronRight
              className={`w-4 h-4 transition-transform ${
                isDesktopCollapsed ? '' : 'rotate-90'
              }`}
            />
          </button>

          {/* TOC Content */}
          {!isDesktopCollapsed && (
            <nav className="p-3 max-h-[calc(100vh-12rem)] overflow-y-auto">
              <ul className="space-y-1 text-sm">
                {headings.map((heading) => (
                  <li
                    key={heading.id}
                    className={heading.level === 3 ? 'ml-3' : ''}
                  >
                    <a
                      href={`#${heading.id}`}
                      className={`
                        block py-1.5 px-2 rounded transition-all text-xs
                        ${
                          activeId === heading.id
                            ? 'text-primary font-medium bg-primary/10'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }
                      `}
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </aside>

      {/* Mobile TOC Modal */}
      {isMobileOpen && (
        <>
          <aside className="lg:hidden fixed bottom-24 right-6 w-72 bg-background border-2 border-border rounded-2xl shadow-2xl z-40 max-h-[60vh] overflow-hidden">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <List className="w-4 h-4" />
                {t('title')}
              </h3>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            </div>
            <nav className="p-4 overflow-y-auto max-h-[calc(60vh-4rem)]">
              <ul className="space-y-2 text-sm">
                {headings.map((heading) => (
                  <li
                    key={heading.id}
                    className={heading.level === 3 ? 'ml-4' : ''}
                  >
                    <a
                      href={`#${heading.id}`}
                      onClick={() => setIsMobileOpen(false)}
                      className={`
                        block py-2 px-3 rounded-lg transition-all
                        ${
                          activeId === heading.id
                            ? 'text-primary font-medium bg-primary/10'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        }
                      `}
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Mobile overlay */}
          <div
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          />
        </>
      )}
    </>
  )
}
