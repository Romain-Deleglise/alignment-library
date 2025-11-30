import Link from 'next/link'
import { Book, BookOpen, Users, FileText } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <Book className="w-16 h-16 text-primary" />
          <div>
            <h1 className="text-5xl font-bold mb-2">The Alignment Library</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive Knowledge Base on AI Alignment
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          A structured, comprehensive resource covering all fundamental problems,
          proposed solutions, and research frontiers in artificial intelligence alignment.
        </p>

        <div className="flex gap-4">
          <Link
            href="/introduction/what-is-alignment"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
          >
            Start Reading
          </Link>
          <Link
            href="/resources/reading-lists"
            className="px-6 py-3 border rounded-lg font-semibold hover:bg-muted transition"
          >
            Reading Lists
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid md:grid-cols-2 gap-6 mb-16">
        <Link
          href="/problems/outer-alignment/specification"
          className="p-6 border rounded-lg hover:bg-muted transition group"
        >
          <BookOpen className="w-8 h-8 text-primary mb-3" />
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
            Core Problems
          </h3>
          <p className="text-muted-foreground">
            Explore fundamental challenges: outer alignment, inner alignment,
            corrigibility, and more.
          </p>
        </Link>

        <Link
          href="/solutions/rlhf"
          className="p-6 border rounded-lg hover:bg-muted transition group"
        >
          <FileText className="w-8 h-8 text-primary mb-3" />
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
            Solutions & Research
          </h3>
          <p className="text-muted-foreground">
            Current approaches: RLHF, Constitutional AI, Debate, Mechanistic
            Interpretability, and their limitations.
          </p>
        </Link>

        <Link
          href="/organizations/miri"
          className="p-6 border rounded-lg hover:bg-muted transition group"
        >
          <Users className="w-8 h-8 text-primary mb-3" />
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
            Organizations & Researchers
          </h3>
          <p className="text-muted-foreground">
            Key players: MIRI, Anthropic, OpenAI, and leading researchers in
            the field.
          </p>
        </Link>

        <Link
          href="/resources/reading-lists"
          className="p-6 border rounded-lg hover:bg-muted transition group"
        >
          <Book className="w-8 h-8 text-primary mb-3" />
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
            Learning Resources
          </h3>
          <p className="text-muted-foreground">
            Curated reading lists, papers, videos, and courses organized by
            difficulty level.
          </p>
        </Link>
      </section>

      {/* Warning */}
      <section className="p-6 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10 rounded">
        <h3 className="text-lg font-semibold mb-2">A Note on P(doom)</h3>
        <p className="text-sm leading-relaxed">
          This library presents alignment challenges honestly. Many leading researchers
          estimate very high probabilities of existential risk (50-99%+). The content
          reflects current technical understanding without false optimism.
        </p>
      </section>
    </div>
  )
}
