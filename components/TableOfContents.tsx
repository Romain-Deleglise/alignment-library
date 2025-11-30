'use client'

import { useEffect, useState } from 'react'
import { List } from 'lucide-react'

type Heading = {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

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
      {/* Mobile TOC Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="Table of contents"
      >
        <List className="w-6 h-6" />
      </button>

      {/* TOC - Desktop: Sticky sidebar, Mobile: Modal */}
      <aside
        className={`
          fixed lg:sticky lg:top-24 right-0 h-fit max-h-[calc(100vh-8rem)]
          w-64 bg-background border rounded-lg p-4 overflow-y-auto z-40
          transition-all duration-300 lg:block
          ${isOpen ? 'bottom-20 right-4 shadow-2xl' : 'bottom-20 right-[-300px] lg:right-0'}
        `}
      >
        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <List className="w-4 h-4" />
          Sur cette page
        </h3>
        <nav>
          <ul className="space-y-2 text-sm">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={heading.level === 3 ? 'ml-4' : ''}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`
                    block py-1 transition-all hover:text-primary
                    ${
                      activeId === heading.id
                        ? 'text-primary font-medium border-l-2 border-primary pl-2'
                        : 'text-muted-foreground hover:pl-2 hover:border-l-2 hover:border-muted-foreground/30'
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
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
        />
      )}
    </>
  )
}
