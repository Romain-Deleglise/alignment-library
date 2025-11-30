import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type Props = {
  path: string[]
}

export default function Breadcrumbs({ path }: Props) {
  const formatSegment = (segment: string) => {
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      <Link href="/" className="hover:text-foreground">
        Home
      </Link>
      {path.map((segment, index) => {
        const href = '/' + path.slice(0, index + 1).join('/')
        const isLast = index === path.length - 1

        return (
          <div key={segment} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-foreground">{formatSegment(segment)}</span>
            ) : (
              <Link href={href} className="hover:text-foreground">
                {formatSegment(segment)}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
