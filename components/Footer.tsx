import Link from 'next/link'
import { Book, Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
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
              Une ressource exhaustive sur l&apos;alignement de l&apos;IA, couvrant les problèmes fondamentaux,
              solutions proposées, et frontières de la recherche.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Commencer</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/introduction/what-is-alignment" className="text-muted-foreground hover:text-primary transition">
                  Qu&apos;est-ce que l&apos;AI Alignment ?
                </Link>
              </li>
              <li>
                <Link href="/introduction/why-urgent" className="text-muted-foreground hover:text-primary transition">
                  Pourquoi c&apos;est urgent ?
                </Link>
              </li>
              <li>
                <Link href="/resources/reading-lists" className="text-muted-foreground hover:text-primary transition">
                  Reading Lists
                </Link>
              </li>
              <li>
                <Link href="/resources/communities" className="text-muted-foreground hover:text-primary transition">
                  Communautés
                </Link>
              </li>
            </ul>
          </div>

          {/* Sections */}
          <div>
            <h3 className="font-semibold mb-4">Sections</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/problems/outer-alignment/specification" className="text-muted-foreground hover:text-primary transition">
                  Problèmes Fondamentaux
                </Link>
              </li>
              <li>
                <Link href="/solutions/rlhf" className="text-muted-foreground hover:text-primary transition">
                  Solutions Proposées
                </Link>
              </li>
              <li>
                <Link href="/concepts/technical" className="text-muted-foreground hover:text-primary transition">
                  Concepts Clés
                </Link>
              </li>
              <li>
                <Link href="/organizations/miri" className="text-muted-foreground hover:text-primary transition">
                  Organisations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h3 className="font-semibold mb-4">Ressources</h3>
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
            © 2024 The Alignment Library. Contenu sous licence open source.
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
