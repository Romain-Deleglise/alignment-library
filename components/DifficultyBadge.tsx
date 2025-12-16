'use client'

import { useTranslations, useLocale } from 'next-intl';
import { DIFFICULTY_LEVELS, type DifficultyLevel } from '@/lib/types';

type Props = {
  level: DifficultyLevel;
  showLabel?: boolean;
  showTime?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const colorClasses = {
  emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700',
  green: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700',
  teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-700',
  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700',
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700',
};

const sizeClasses = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-2',
};

export default function DifficultyBadge({
  level,
  showLabel = true,
  showTime = false,
  size = 'md'
}: Props) {
  const locale = useLocale();
  const levelInfo = DIFFICULTY_LEVELS[level];
  const colorClass = colorClasses[levelInfo.color as keyof typeof colorClasses];
  const sizeClass = sizeClasses[size];

  return (
    <div className={`inline-flex items-center gap-1.5 rounded-full border ${colorClass} ${sizeClass} font-medium transition-all hover:scale-105`}>
      <span className="text-lg leading-none">{levelInfo.icon}</span>
      {showLabel && (
        <span>{locale === 'fr' ? levelInfo.labelFr : levelInfo.label}</span>
      )}
      {showTime && (
        <span className="opacity-75">
          ({locale === 'fr' ? levelInfo.timeRangeFr : levelInfo.timeRange})
        </span>
      )}
    </div>
  );
}
