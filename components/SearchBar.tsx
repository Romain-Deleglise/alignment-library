'use client'

import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'

type SearchResult = {
  title: string
  slug: string
  excerpt: string
}

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)

  // Simple client-side search
  // Pour production: utiliser Algolia ou similaire
  const search = async (q: string) => {
    if (q.length < 2) {
      setResults([])
      return
    }

    // Fetch all content metadata and search
    // Ceci est une implémentation simplifiée
    // À améliorer avec API route + index search
    const response = await fetch(`/api/search?q=${encodeURIComponent(q)}`)
    const data = await response.json()
    setResults(data.results)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      search(query)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search..."
          className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setResults([])
              setIsOpen(false)
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Results */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-background border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          {results.map((result) => (
            <Link
              key={result.slug}
              href={`/${result.slug}`}
              onClick={() => {
                setIsOpen(false)
                setQuery('')
              }}
              className="block p-4 hover:bg-muted border-b last:border-b-0"
            >
              <h4 className="font-semibold mb-1">{result.title}</h4>
              <p className="text-sm text-muted-foreground">{result.excerpt}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
