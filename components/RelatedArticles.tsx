import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type RelatedArticle = {
  title: string
  href: string
  description: string
  category: string
}

type Props = {
  currentPath: string
}

export default function RelatedArticles({ currentPath }: Props) {
  // Simple logic to suggest related articles based on current path
  const getRelatedArticles = (path: string): RelatedArticle[] => {
    const related: RelatedArticle[] = []

    // If on outer-alignment, suggest inner-alignment and solutions
    if (path.includes('outer-alignment')) {
      related.push(
        {
          title: 'Mesa-Optimization',
          href: '/problems/inner-alignment/mesa-optimization',
          description: 'Comprendre comment les optimiseurs internes émergent',
          category: 'Inner Alignment',
        },
        {
          title: 'RLHF',
          href: '/solutions/rlhf',
          description: 'Solution courante mais avec des limitations',
          category: 'Solutions',
        }
      )
    }

    // If on inner-alignment, suggest outer-alignment and corrigibility
    if (path.includes('inner-alignment')) {
      related.push(
        {
          title: 'Specification Problem',
          href: '/problems/outer-alignment/specification',
          description: 'Le défi de spécifier ce que nous voulons',
          category: 'Outer Alignment',
        },
        {
          title: 'Corrigibility',
          href: '/problems/other/corrigibility',
          description: 'Peut-on créer une IA qui accepte d\'être modifiée ?',
          category: 'Problèmes Critiques',
        }
      )
    }

    // If on solutions, suggest problems
    if (path.includes('solutions')) {
      related.push(
        {
          title: 'Deceptive Alignment',
          href: '/problems/inner-alignment/deceptive',
          description: 'Le problème que cette solution tente de résoudre',
          category: 'Inner Alignment',
        },
        {
          title: 'Scalable Oversight',
          href: '/problems/other/scalable-oversight',
          description: 'Comment superviser une IA plus intelligente ?',
          category: 'Problèmes Critiques',
        }
      )
    }

    // If on introduction, suggest core problems
    if (path.includes('introduction')) {
      related.push(
        {
          title: 'Specification Problem',
          href: '/problems/outer-alignment/specification',
          description: 'Premier problème fondamental à comprendre',
          category: 'Outer Alignment',
        },
        {
          title: 'Instrumental Convergence',
          href: '/problems/other/instrumental-convergence',
          description: 'Pourquoi presque tous les objectifs sont dangereux',
          category: 'Problèmes Critiques',
        },
        {
          title: 'Reading Lists',
          href: '/resources/reading-lists',
          description: 'Ressources organisées par niveau',
          category: 'Ressources',
        }
      )
    }

    // If on concepts, suggest practical examples
    if (path.includes('concepts')) {
      related.push(
        {
          title: 'Mesa-Optimization',
          href: '/problems/inner-alignment/mesa-optimization',
          description: 'Application pratique des concepts',
          category: 'Inner Alignment',
        },
        {
          title: 'RLHF',
          href: '/solutions/rlhf',
          description: 'Solution concrète appliquant ces concepts',
          category: 'Solutions',
        }
      )
    }

    // If on organizations, suggest researchers and resources
    if (path.includes('organizations')) {
      related.push(
        {
          title: 'Reading Lists',
          href: '/resources/reading-lists',
          description: 'Lectures recommandées par ces organisations',
          category: 'Ressources',
        },
        {
          title: 'Papers',
          href: '/resources/papers',
          description: 'Papers fondamentaux de ces chercheurs',
          category: 'Ressources',
        }
      )
    }

    // If on resources, suggest practical content
    if (path.includes('resources')) {
      related.push(
        {
          title: "Qu'est-ce que l'AI Alignment ?",
          href: '/introduction/what-is-alignment',
          description: 'Commencer par les bases',
          category: 'Introduction',
        },
        {
          title: 'Chercheurs Clés',
          href: '/organizations/researchers',
          description: 'Les experts à suivre',
          category: 'Organisations',
        }
      )
    }

    return related.slice(0, 3) // Return max 3 related articles
  }

  const related = getRelatedArticles(currentPath)

  if (related.length === 0) return null

  return (
    <section className="mt-16 pt-8 border-t">
      <h2 className="text-2xl font-bold mb-6">Articles Connexes</h2>
      <div className="grid gap-4">
        {related.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group p-6 border rounded-lg hover:border-primary/50 hover:bg-muted/50 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="text-sm text-muted-foreground mb-1">{article.category}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground">{article.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
