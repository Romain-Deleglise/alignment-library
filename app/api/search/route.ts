import { NextResponse } from 'next/server'
import { getAllContent } from '@/lib/content'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.toLowerCase() || ''

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] })
  }

  const allContent = getAllContent()

  const results = allContent
    .filter(content =>
      content.title.toLowerCase().includes(query) ||
      content.description?.toLowerCase().includes(query)
    )
    .slice(0, 10)
    .map(content => ({
      title: content.title,
      slug: content.slug,
      excerpt: content.description || '',
    }))

  return NextResponse.json({ results })
}
