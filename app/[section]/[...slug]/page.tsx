import { notFound } from 'next/navigation'
import { getContentBySlug } from '@/lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import components from '@/components/MDXComponents'
import Breadcrumbs from '@/components/Breadcrumbs'
import ReadingProgress from '@/components/ReadingProgress'
import TableOfContents from '@/components/TableOfContents'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

type Props = {
  params: {
    section: string
    slug: string[]
  }
}

export default async function ContentPage({ params }: Props) {
  const slugPath = [params.section, ...params.slug]
  const data = getContentBySlug(slugPath)

  if (!data) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto flex gap-8">
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
      </article>

      {/* Table of Contents - Desktop only */}
      <div className="hidden xl:block w-64 flex-shrink-0">
        <TableOfContents />
      </div>

      {/* Table of Contents - Mobile as floating button */}
      <div className="xl:hidden">
        <TableOfContents />
      </div>
    </div>
  )
}
