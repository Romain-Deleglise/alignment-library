import Link from 'next/link'
import { Book, BookOpen, Users, FileText, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero */}
      <section className="mb-20 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Book className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            The Alignment Library
          </h1>
          <p className="text-2xl text-muted-foreground mb-2">
            Comprehensive Knowledge Base on AI Alignment
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured, comprehensive resource covering all fundamental problems,
            proposed solutions, and research frontiers in artificial intelligence alignment.
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/introduction/what-is-alignment"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
          >
            Start Reading
          </Link>
          <Link
            href="/resources/reading-lists"
            className="px-8 py-4 border-2 border-border rounded-lg font-semibold hover:bg-muted transition-all"
          >
            Reading Lists
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-muted/50 rounded-lg">
          <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
          <div className="text-3xl font-bold mb-1">30+</div>
          <div className="text-sm text-muted-foreground">Articles Techniques</div>
        </div>
        <div className="text-center p-6 bg-muted/50 rounded-lg">
          <Lightbulb className="w-8 h-8 mx-auto mb-2 text-primary" />
          <div className="text-3xl font-bold mb-1">6</div>
          <div className="text-sm text-muted-foreground">Solutions Proposées</div>
        </div>
        <div className="text-center p-6 bg-muted/50 rounded-lg">
          <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-primary" />
          <div className="text-3xl font-bold mb-1">8</div>
          <div className="text-sm text-muted-foreground">Problèmes Critiques</div>
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
