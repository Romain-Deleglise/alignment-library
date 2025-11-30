import { notFound } from 'next/navigation'
import { getContentBySlug } from '@/lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import components from '@/components/MDXComponents'
import Breadcrumbs from '@/components/Breadcrumbs'
import ReadingProgress from '@/components/ReadingProgress'
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
    <article className="max-w-4xl mx-auto">
      <ReadingProgress />

      <Breadcrumbs path={slugPath} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{data.metadata.title}</h1>
        {data.metadata.description && (
          <p className="text-xl text-muted-foreground">{data.metadata.description}</p>
        )}
        {data.metadata.difficulty && (
          <div className="mt-4 inline-block">
            <span className="px-3 py-1 bg-muted rounded-full text-sm">
              {data.metadata.difficulty}
            </span>
          </div>
        )}
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
  )
}
