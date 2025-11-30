import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export type ContentMetadata = {
  title: string
  description?: string
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
  readingTime?: string
  slug: string
}

export type ContentData = {
  metadata: ContentMetadata
  content: string
}

export function getContentBySlug(slugPath: string[]): ContentData | null {
  try {
    const fullPath = path.join(contentDirectory, ...slugPath) + '.mdx'
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      metadata: {
        ...data,
        slug: slugPath.join('/'),
      } as ContentMetadata,
      content,
    }
  } catch (error) {
    return null
  }
}

export function getAllContent(): ContentMetadata[] {
  // Recursively get all .mdx files
  function getAllMdxFiles(dir: string, baseDir: string = ''): string[] {
    const files = fs.readdirSync(dir)
    let mdxFiles: string[] = []

    files.forEach(file => {
      const fullPath = path.join(dir, file)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        mdxFiles = mdxFiles.concat(
          getAllMdxFiles(fullPath, path.join(baseDir, file))
        )
      } else if (file.endsWith('.mdx')) {
        mdxFiles.push(path.join(baseDir, file))
      }
    })

    return mdxFiles
  }

  const mdxFiles = getAllMdxFiles(contentDirectory)

  return mdxFiles.map(file => {
    const fullPath = path.join(contentDirectory, file)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    const slug = file.replace(/\.mdx$/, '')

    return {
      ...data,
      slug,
    } as ContentMetadata
  })
}
