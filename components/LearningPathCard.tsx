'use client'

import Link from 'next/link';
import { DIFFICULTY_LEVELS, type DifficultyLevel } from '@/lib/types';
import { ArrowRight, Clock, BookOpen, Sparkles } from 'lucide-react';

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

  const gradients = {
    emerald: 'from-emerald-500/10 to-emerald-500/5',
    green: 'from-green-500/10 to-green-500/5',
    teal: 'from-teal-500/10 to-teal-500/5',
    blue: 'from-blue-500/10 to-blue-500/5',
    purple: 'from-purple-500/10 to-purple-500/5',
  };

  const borderColors = {
    emerald: 'border-emerald-500/30 hover:border-emerald-500',
    green: 'border-green-500/30 hover:border-green-500',
    teal: 'border-teal-500/30 hover:border-teal-500',
    blue: 'border-blue-500/30 hover:border-blue-500',
    purple: 'border-purple-500/30 hover:border-purple-500',
  };

  const iconColors = {
    emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    green: 'bg-green-500/10 text-green-600 dark:text-green-400',
    teal: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
    blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  };

  return (
    <Link
      href={href}
      className={`group block relative overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${borderColors[levelInfo.color as keyof typeof borderColors]}`}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[levelInfo.color as keyof typeof gradients]} opacity-50 group-hover:opacity-100 transition-opacity`} />

      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <div className="relative p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            {/* Icon circle */}
            <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${iconColors[levelInfo.color as keyof typeof iconColors]} group-hover:scale-110 transition-transform duration-300`}>
              {levelInfo.icon}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors leading-tight mb-1">
                {locale === 'fr' ? titleFr : title}
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
                  {locale === 'fr' ? levelInfo.labelFr : levelInfo.label}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {levelInfo.timeRange}
                </span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
          {locale === 'fr' ? descriptionFr : description}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-8 h-8 rounded-lg bg-background/50 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <span className="font-medium">
              {articleCount} {locale === 'fr' ? 'articles' : 'articles'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-8 h-8 rounded-lg bg-background/50 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <span className="font-medium">{estimatedHours}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
