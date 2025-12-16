'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Languages } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
]

export default function LanguageSelector() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const switchLanguage = (newLocale: string) => {
    if (!pathname) return

    // Remove the current locale from pathname and add the new one
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')

    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-border bg-background hover:bg-muted transition-all hover:scale-105 hover:shadow-md"
        aria-label="Select language"
      >
        <Languages className="w-4 h-4" />
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="hidden sm:inline text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-background border-2 border-border rounded-lg shadow-2xl overflow-hidden z-50 min-w-[180px] animate-in slide-in-from-top-2 duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors ${
                lang.code === locale ? 'bg-primary/10 text-primary font-semibold' : ''
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">{lang.name}</span>
                <span className="text-xs text-muted-foreground">{lang.code.toUpperCase()}</span>
              </div>
              {lang.code === locale && (
                <span className="ml-auto text-primary">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
