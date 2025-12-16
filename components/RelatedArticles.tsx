'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'

type RelatedArticle = {
  title: string
  href: string
  descriptionKey: string
  categoryKey: string
}

type Props = {
  currentPath: string
}

export default function RelatedArticles({ currentPath }: Props) {
  const t = useTranslations('relatedArticles')
  const locale = useLocale()
  // Simple logic to suggest related articles based on current path
  const getRelatedArticles = (path: string): RelatedArticle[] => {
    const related: RelatedArticle[] = []

    // If on outer-alignment, suggest inner-alignment and solutions
    if (path.includes('outer-alignment')) {
      related.push(
        {
          title: 'Mesa-Optimization',
          href: `/${locale}/problems/inner-alignment/mesa-optimization`,
          descriptionKey: 'articles.mesaOptimization.description',
          categoryKey: 'articles.mesaOptimization.category',
        },
        {
          title: 'RLHF',
          href: `/${locale}/solutions/rlhf`,
          descriptionKey: 'articles.rlhf.description',
          categoryKey: 'articles.rlhf.category',
        }
      )
    }

    // If on inner-alignment, suggest outer-alignment and corrigibility
    if (path.includes('inner-alignment')) {
      related.push(
        {
          title: 'Specification Problem',
          href: `/${locale}/problems/outer-alignment/specification`,
          descriptionKey: 'articles.specification.description',
          categoryKey: 'articles.specification.category',
        },
        {
          title: 'Corrigibility',
          href: `/${locale}/problems/other/corrigibility`,
          descriptionKey: 'articles.corrigibility.description',
          categoryKey: 'articles.corrigibility.category',
        }
      )
    }

    // If on solutions, suggest problems
    if (path.includes('solutions')) {
      related.push(
        {
          title: 'Deceptive Alignment',
          href: `/${locale}/problems/inner-alignment/deceptive`,
          descriptionKey: 'articles.deceptiveAlignment.description',
          categoryKey: 'articles.deceptiveAlignment.category',
        },
        {
          title: 'Scalable Oversight',
          href: `/${locale}/problems/other/scalable-oversight`,
          descriptionKey: 'articles.scalableOversight.description',
          categoryKey: 'articles.scalableOversight.category',
        }
      )
    }

    // If on introduction, suggest core problems
    if (path.includes('introduction')) {
      related.push(
        {
          title: 'Specification Problem',
          href: `/${locale}/problems/outer-alignment/specification`,
          descriptionKey: 'articles.specification.descriptionAlt',
          categoryKey: 'articles.specification.category',
        },
        {
          title: 'Instrumental Convergence',
          href: `/${locale}/problems/other/instrumental-convergence`,
          descriptionKey: 'articles.instrumentalConvergence.description',
          categoryKey: 'articles.instrumentalConvergence.category',
        },
        {
          title: 'Reading Lists',
          href: `/${locale}/resources/reading-lists`,
          descriptionKey: 'articles.readingLists.description',
          categoryKey: 'articles.readingLists.category',
        }
      )
    }

    // If on concepts, suggest practical examples
    if (path.includes('concepts')) {
      related.push(
        {
          title: 'Mesa-Optimization',
          href: `/${locale}/problems/inner-alignment/mesa-optimization`,
          descriptionKey: 'articles.mesaOptimizationConcepts.description',
          categoryKey: 'articles.mesaOptimizationConcepts.category',
        },
        {
          title: 'RLHF',
          href: `/${locale}/solutions/rlhf`,
          descriptionKey: 'articles.rlhfConcepts.description',
          categoryKey: 'articles.rlhfConcepts.category',
        }
      )
    }

    // If on organizations, suggest researchers and resources
    if (path.includes('organizations')) {
      related.push(
        {
          title: 'Reading Lists',
          href: `/${locale}/resources/reading-lists`,
          descriptionKey: 'articles.readingLists.descriptionAlt',
          categoryKey: 'articles.readingLists.category',
        },
        {
          title: 'Papers',
          href: `/${locale}/resources/papers`,
          descriptionKey: 'articles.papers.description',
          categoryKey: 'articles.papers.category',
        }
      )
    }

    // If on resources, suggest practical content
    if (path.includes('resources')) {
      related.push(
        {
          title: "What is AI Alignment?",
          href: `/${locale}/introduction/what-is-alignment`,
          descriptionKey: 'articles.whatIsAlignment.description',
          categoryKey: 'articles.whatIsAlignment.category',
        },
        {
          title: 'Key Researchers',
          href: `/${locale}/organizations/researchers`,
          descriptionKey: 'articles.researchers.description',
          categoryKey: 'articles.researchers.category',
        }
      )
    }

    return related.slice(0, 3) // Return max 3 related articles
  }

  const related = getRelatedArticles(currentPath)

  if (related.length === 0) return null

  return (
    <section className="mt-16 pt-8 border-t">
      <h2 className="text-2xl font-bold mb-6">{t('title')}</h2>
      <div className="grid gap-4">
        {related.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group p-6 border rounded-lg hover:border-primary/50 hover:bg-muted/50 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="text-sm text-muted-foreground mb-1">{t(article.categoryKey)}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground">{t(article.descriptionKey)}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
