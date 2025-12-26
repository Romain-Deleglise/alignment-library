import { notFound } from 'next/navigation'
import { getContentBySlug, getAllContent } from '@/lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import components from '@/components/MDXComponents'
import Breadcrumbs from '@/components/Breadcrumbs'
import ReadingProgress from '@/components/ReadingProgress'
import TableOfContents from '@/components/TableOfContents'
import RelatedArticles from '@/components/RelatedArticles'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

const locales = ['en', 'fr'] as const

type Props = {
  params: {
    locale: string
    section: string
    slug: string[]
  }
}

export async function generateStaticParams() {
  const params: { locale: string; section: string; slug: string[] }[] = []

  // Generate params for both locales
  for (const locale of locales) {
    const allContent = getAllContent(locale)

    for (const content of allContent) {
      const parts = content.slug.split('/')
      if (parts.length >= 2) {
        const [section, ...slug] = parts
        params.push({ locale, section, slug })
      }
    }
  }

  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, section, slug } = params
  const slugPath = [section, ...slug]
  const data = getContentBySlug(slugPath, locale)

  if (!data) {
    return {
      title: 'Page Not Found - The Alignment Library',
    }
  }

  return {
    title: `${data.metadata.title} - The Alignment Library`,
    description: data.metadata.description || 'Learn about AI Alignment',
    openGraph: {
      title: data.metadata.title,
      description: data.metadata.description,
      type: 'article',
    },
  }
}

export default async function ContentPage({ params }: Props) {
  const { locale, section, slug } = params

  // Enable static rendering
  setRequestLocale(locale)

  const slugPath = [section, ...slug]
  const data = getContentBySlug(slugPath, locale)

  if (!data) {
    notFound()
  }

  const currentPath = '/' + slugPath.join('/')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <article className="flex-1 max-w-4xl">
          <ReadingProgress />

          <Breadcrumbs path={slugPath} />

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{data.metadata.title}</h1>
            {data.metadata.description && (
              <p className="text-xl text-muted-foreground">{data.metadata.description}</p>
            )}
            <div className="mt-4 flex gap-2 flex-wrap">
              {data.metadata.difficulty && (
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {data.metadata.difficulty}
                </span>
              )}
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MDXRemote
              source={data.content}
              components={components}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeHighlight, rehypeSlug],
                },
              }}
            />
          </div>

          <RelatedArticles currentPath={currentPath} />
        </article>

        {/* Table of Contents - Desktop only, smaller and collapsible */}
        <div className="hidden lg:block w-56 flex-shrink-0">
          <TableOfContents />
        </div>

        {/* Table of Contents - Mobile as floating button */}
        <div className="lg:hidden">
          <TableOfContents />
        </div>
      </div>
    </div>
  )
}
