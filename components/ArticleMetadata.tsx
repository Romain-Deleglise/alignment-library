'use client'

import Link from 'next/link';
import { Clock, Tag, BookOpen, AlertCircle } from 'lucide-react';
import DifficultyBadge from './DifficultyBadge';
import { DifficultyLevel } from '@/lib/types';

type Props = {
  difficulty: DifficultyLevel;
  readingTime: string;
  tags?: string[];
  prerequisites?: string[];
  locale: string;
};

export default function ArticleMetadata({
  difficulty,
  readingTime,
  tags = [],
  prerequisites = [],
  locale,
}: Props) {
  return (
    <div className="my-8 p-6 bg-muted/30 rounded-lg border-2 space-y-4">
      {/* Difficulty and Reading Time */}
      <div className="flex flex-wrap items-center gap-4">
        <DifficultyBadge level={difficulty} showLabel />
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{readingTime}</span>
        </div>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Tag className="w-4 h-4" />
            <span>{locale === 'fr' ? 'Étiquettes' : 'Tags'}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Prerequisites */}
      {prerequisites.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-yellow-600 dark:text-yellow-500">
            <AlertCircle className="w-4 h-4" />
            <span>{locale === 'fr' ? 'Prérequis' : 'Prerequisites'}</span>
          </div>
          <div className="space-y-1">
            {prerequisites.map((prereq) => {
              // Convert prerequisite path to URL
              const [section, slug] = prereq.split('/');
              return (
                <Link
                  key={prereq}
                  href={`/${locale}/${prereq}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <BookOpen className="w-3 h-3 group-hover:text-primary" />
                  <span className="group-hover:underline">
                    {locale === 'fr' ? 'Lire d\'abord : ' : 'Read first: '}
                    {slug.replace(/-/g, ' ')}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
