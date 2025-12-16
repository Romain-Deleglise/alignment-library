'use client'

import Link from 'next/link';
import { DIFFICULTY_LEVELS, type DifficultyLevel } from '@/lib/types';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

type Props = {
  level: DifficultyLevel;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  articleCount: number;
  estimatedHours: string;
  href: string;
  locale: string;
};

export default function LearningPathCard({
  level,
  title,
  titleFr,
  description,
  descriptionFr,
  articleCount,
  estimatedHours,
  href,
  locale,
}: Props) {
  const levelInfo = DIFFICULTY_LEVELS[level];

  const borderColors = {
    emerald: 'border-l-emerald-500 hover:border-emerald-500',
    green: 'border-l-green-500 hover:border-green-500',
    teal: 'border-l-teal-500 hover:border-teal-500',
    blue: 'border-l-blue-500 hover:border-blue-500',
    purple: 'border-l-purple-500 hover:border-purple-500',
  };

  return (
    <Link
      href={href}
      className={`group block p-6 border-2 border-l-4 rounded-lg hover:bg-muted transition-all hover:scale-[1.02] hover:shadow-lg ${borderColors[levelInfo.color as keyof typeof borderColors]}`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{levelInfo.icon}</span>
          <div>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {locale === 'fr' ? titleFr : title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {locale === 'fr' ? levelInfo.labelFr : levelInfo.label} • {levelInfo.timeRange}
            </p>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
      </div>

      <p className="text-muted-foreground mb-4">
        {locale === 'fr' ? descriptionFr : description}
      </p>

      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <BookOpen className="w-4 h-4" />
          <span>{articleCount} {locale === 'fr' ? 'articles' : 'articles'}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{estimatedHours}</span>
        </div>
      </div>
    </Link>
  );
}
