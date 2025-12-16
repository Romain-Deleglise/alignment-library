'use client'

import Link from 'next/link'
import { Book, BookOpen, Users, FileText, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('homepage')
  const locale = useLocale()

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero */}
      <section className="mb-20 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 animate-in zoom-in duration-300">
            <Book className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-500">
            {t('hero.title')}
          </h1>
          <p className="text-2xl text-muted-foreground mb-2 animate-in slide-in-from-bottom-4 duration-500 delay-100">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-500 delay-200">
            {t('hero.description')}
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap animate-in slide-in-from-bottom-4 duration-500 delay-300">
          <Link
            href={`/${locale}/introduction/what-is-alignment`}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
          >
            {t('hero.startReading')}
          </Link>
          <Link
            href={`/${locale}/resources/reading-lists`}
            className="px-8 py-4 border-2 border-border rounded-lg font-semibold hover:bg-muted transition-all"
          >
            {t('hero.readingLists')}
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-muted/50 rounded-lg hover:bg-muted transition-all hover:scale-105 animate-in fade-in duration-500 delay-400">
          <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
          <div className="text-3xl font-bold mb-1">30+</div>
          <div className="text-sm text-muted-foreground">{t('stats.technicalArticles')}</div>
        </div>
        <div className="text-center p-6 bg-muted/50 rounded-lg hover:bg-muted transition-all hover:scale-105 animate-in fade-in duration-500 delay-500">
          <Lightbulb className="w-8 h-8 mx-auto mb-2 text-primary" />
          <div className="text-3xl font-bold mb-1">6</div>
          <div className="text-sm text-muted-foreground">{t('stats.proposedSolutions')}</div>
        </div>
        <div className="text-center p-6 bg-muted/50 rounded-lg hover:bg-muted transition-all hover:scale-105 animate-in fade-in duration-500 delay-600">
          <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-primary" />
          <div className="text-3xl font-bold mb-1">8</div>
          <div className="text-sm text-muted-foreground">{t('stats.criticalProblems')}</div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid md:grid-cols-2 gap-6 mb-16">
        <Link
          href={`/${locale}/problems/outer-alignment/specification`}
          className="p-6 border-2 rounded-lg hover:bg-muted hover:border-primary/50 transition-all group animate-in fade-in duration-500 delay-700 hover:scale-105 hover:shadow-lg"
        >
          <BookOpen className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {t('quickLinks.coreProblems.title')}
          </h3>
          <p className="text-muted-foreground">
            {t('quickLinks.coreProblems.description')}
          </p>
        </Link>

        <Link
          href={`/${locale}/solutions/rlhf`}
          className="p-6 border-2 rounded-lg hover:bg-muted hover:border-primary/50 transition-all group animate-in fade-in duration-500 delay-800 hover:scale-105 hover:shadow-lg"
        >
          <FileText className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {t('quickLinks.solutionsResearch.title')}
          </h3>
          <p className="text-muted-foreground">
            {t('quickLinks.solutionsResearch.description')}
          </p>
        </Link>

        <Link
          href={`/${locale}/organizations/miri`}
          className="p-6 border-2 rounded-lg hover:bg-muted hover:border-primary/50 transition-all group animate-in fade-in duration-500 delay-900 hover:scale-105 hover:shadow-lg"
        >
          <Users className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {t('quickLinks.organizationsResearchers.title')}
          </h3>
          <p className="text-muted-foreground">
            {t('quickLinks.organizationsResearchers.description')}
          </p>
        </Link>

        <Link
          href={`/${locale}/resources/reading-lists`}
          className="p-6 border-2 rounded-lg hover:bg-muted hover:border-primary/50 transition-all group animate-in fade-in duration-500 delay-1000 hover:scale-105 hover:shadow-lg"
        >
          <Book className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {t('quickLinks.learningResources.title')}
          </h3>
          <p className="text-muted-foreground">
            {t('quickLinks.learningResources.description')}
          </p>
        </Link>
      </section>

      {/* Warning */}
      <section className="p-6 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10 rounded animate-in fade-in duration-500 delay-1100 hover:shadow-md transition-shadow">
        <h3 className="text-lg font-semibold mb-2">{t('pdoomWarning.title')}</h3>
        <p className="text-sm leading-relaxed">
          {t('pdoomWarning.description')}
        </p>
      </section>
    </div>
  )
}
